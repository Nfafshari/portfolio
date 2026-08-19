import { useEffect, useRef } from "react";
import { LanyardSim, ropePath, defaultConfig } from "../lib/lanyard-physics";

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

const CARD_W = defaultConfig.cardWidth;
const CARD_H = defaultConfig.cardHeight;

/** Bar widths for the fake code-128 strip along the bottom of the badge. */
const BARCODE = [1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 1, 3, 2, 1, 2, 1, 1, 3, 1, 2, 2,
  1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 3];

/** How far above the anchor the rope retracts to pull the badge off screen. */
const HIDE_OFFSET = defaultConfig.ropeLength + CARD_H + 160;

/**
 * The cord hangs off the lanyard button in the header, so the anchor is read
 * from that element's box and tracks it through scroll and resize. The button
 * is display:none below md, so fall back to the top-right of the viewport.
 */
function readAnchor(open: boolean) {
  const el = document.querySelector<HTMLElement>("[data-badge-anchor]");
  const r = el?.getBoundingClientRect();
  const x =
    r && r.width > 0
      ? r.left + r.width / 2
      : Math.min(window.innerWidth - 170, window.innerWidth * 0.86);
  const y = r && r.width > 0 ? r.bottom - 6 : 0;
  return { x, y: open ? y : y - HIDE_OFFSET };
}

export default function IdBadge({ open }: { open: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const cordRef = useRef<SVGPathElement>(null);
  const shineRef = useRef<SVGPathElement>(null);
  const simRef = useRef<LanyardSim | null>(null);
  const wakeRef = useRef<((ms?: number) => void) | null>(null);
  const openRef = useRef(open);

  openRef.current = open;

  useEffect(() => {
    const card = cardRef.current;
    const tilt = tiltRef.current;
    const clip = clipRef.current;
    const cord = cordRef.current;
    const shine = shineRef.current;
    if (!card || !tilt || !clip || !cord || !shine) return;

    const wide = window.matchMedia("(min-width: 640px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!wide.matches) return;

    const sim = new LanyardSim(readAnchor(true), {
      w: window.innerWidth,
      h: window.innerHeight,
    });
    simRef.current = sim;

    let tiltY = 0;
    let tiltX = 0;
    let raf = 0;
    let last = performance.now();
    let wakeUntil = last + 1500;

    const draw = () => {
      const [tl, tr] = sim.corners;
      const angle = Math.atan2(tr.y - tl.y, tr.x - tl.x);
      card.style.transform = `translate3d(${tl.x.toFixed(2)}px, ${tl.y.toFixed(
        2,
      )}px, 0) rotate(${angle.toFixed(4)}rad)`;

      const v = sim.velocity;
      const speed = Math.hypot(v.x, v.y);

      // Lean into the direction of travel, and let the chromatic fringe and
      // the specular sweep scale with how hard the badge is moving.
      const ease = sim.isDragging ? 0.22 : 0.1;
      tiltY += (clamp(v.x * 2.4, -28, 28) - tiltY) * ease;
      tiltX += (clamp(-v.y * 1.6, -18, 18) - tiltX) * ease;
      tilt.style.transform = `rotateY(${tiltY.toFixed(
        2,
      )}deg) rotateX(${tiltX.toFixed(2)}deg)`;

      card.style.setProperty("--ab", clamp(speed * 0.42, 0.35, 5).toFixed(2));
      card.style.setProperty("--holo", (angle * 57.3 * 4 + tiltY * 6).toFixed(1));
      card.style.setProperty("--sheen", `${clamp(tiltY * 3.2, -90, 90).toFixed(1)}%`);

      const pts = sim.rope;
      const d = ropePath(pts);
      cord.setAttribute("d", d);
      shine.setAttribute("d", d);

      const end = pts[pts.length - 1];
      const prev = pts[pts.length - 2];
      const ca = Math.atan2(end.y - prev.y, end.x - prev.x) - Math.PI / 2;
      clip.style.transform = `translate3d(${end.x.toFixed(2)}px, ${end.y.toFixed(
        2,
      )}px, 0) rotate(${ca.toFixed(4)}rad) translate(-50%, -40%)`;
    };

    // Reduced motion: settle the sim off-screen, paint the resting pose once.
    if (calm.matches) {
      for (let i = 0; i < 400; i++) sim.update(16.7);
      draw();
      return () => {
        simRef.current = null;
      };
    }

    const loop = (now: number) => {
      sim.update(now - last);
      last = now;
      draw();
      if (sim.sleeping && now > wakeUntil) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const wake = (ms = 400) => {
      wakeUntil = Math.max(wakeUntil, performance.now() + ms);
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };
    wakeRef.current = wake;

    const onDown = (e: PointerEvent) => {
      if (!openRef.current) return;
      card.setPointerCapture(e.pointerId);
      sim.grab(e.clientX, e.clientY);
      card.style.cursor = "grabbing";
      wake();
    };
    const onMove = (e: PointerEvent) => {
      if (!sim.isDragging) return;
      sim.move(e.clientX, e.clientY);
      wake();
    };
    const onUp = () => {
      if (!sim.isDragging) return;
      sim.release();
      card.style.cursor = "";
      wake(900);
    };

    const sync = () => {
      sim.setBounds(window.innerWidth, window.innerHeight);
      const a = readAnchor(openRef.current);
      sim.setAnchor(a.x, a.y);
      wake();
    };

    const onVisible = () => {
      if (!document.hidden) wake();
    };

    card.addEventListener("pointerdown", onDown);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerup", onUp);
    card.addEventListener("pointercancel", onUp);
    window.addEventListener("resize", sync);
    window.addEventListener("scroll", sync, { passive: true });
    document.addEventListener("visibilitychange", onVisible);

    wake(1500);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerup", onUp);
      card.removeEventListener("pointercancel", onUp);
      window.removeEventListener("resize", sync);
      window.removeEventListener("scroll", sync);
      document.removeEventListener("visibilitychange", onVisible);
      simRef.current = null;
      wakeRef.current = null;
    };
  }, []);

  // Retracting the badge just yanks the anchor above the viewport and lets the
  // rope drag the card back up out of frame.
  useEffect(() => {
    const sim = simRef.current;
    if (!sim) return;
    if (!open) sim.release();
    const a = readAnchor(open);
    sim.setAnchor(a.x, a.y);
    wakeRef.current?.(1600);
  }, [open]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="hidden fixed inset-0 z-50 overflow-hidden pointer-events-none sm:block"
    >
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <defs>
          <linearGradient id="cordGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b4046" />
            <stop offset="45%" stopColor="#15171b" />
            <stop offset="100%" stopColor="#2a2e34" />
          </linearGradient>
        </defs>
        <path
          ref={cordRef}
          stroke="url(#cordGrad)"
          strokeWidth={9}
          strokeLinecap="round"
        />
        <path
          ref={shineRef}
          stroke="rgba(243,244,246,0.28)"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </svg>

      {/* Clip hardware at the end of the cord */}
      <div
        ref={clipRef}
        className="absolute top-0 left-0 w-4.5 h-7 rounded-sm border border-white/25"
        style={{
          background:
            "linear-gradient(100deg, #6b7178 0%, #d7dce2 30%, #4a5057 52%, #b9c0c8 74%, #5a6068 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.55)",
        }}
      />

      <div
        ref={cardRef}
        className={`absolute top-0 left-0 cursor-grab select-none touch-none ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          width: CARD_W,
          height: CARD_H,
          transformOrigin: "0 0",
          perspective: "900px",
          willChange: "transform",
          transform: `translate3d(-9999px, -9999px, 0)`,
        }}
      >
        <div
          ref={tiltRef}
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Metallic rim */}
          <div
            className="p-px w-full h-full rounded-xl"
            style={{
              background:
                "linear-gradient(150deg, #8f979f 0%, #d9dee4 14%, #3c4249 38%, #9aa2aa 56%, #23272c 74%, #b6bdc5 100%)",
              boxShadow: `
                calc(var(--ab, 1) * -1px) 0 0 rgba(255, 42, 109, 0.5),
                calc(var(--ab, 1) * 1px) 0 0 rgba(38, 226, 255, 0.5),
                0 24px 48px -12px rgba(0, 0, 0, 0.85)`,
            }}
          >
            <div
              className="flex overflow-hidden relative flex-col w-full h-full rounded-[11px]"
              style={{
                background:
                  "linear-gradient(158deg, #23262c 0%, #0c0e12 38%, #171a20 58%, #06070a 100%)",
              }}
            >
              {/* Brushed metal grain */}
              <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(102deg, rgba(255,255,255,0.045) 0 1px, rgba(0,0,0,0) 1px 3px)",
                }}
              />
              {/* Chromatic holo wash */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from calc(var(--holo, 0) * 1deg) at 50% 35%, #ff2d95, #26e2ff, #7cff6a, #ffd23f, #ff2d95)",
                  mixBlendMode: "overlay",
                  opacity: 0.5,
                  maskImage:
                    "linear-gradient(190deg, rgba(0,0,0,0.95), rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.6))",
                }}
              />
              {/* Specular sweep, tracks the tilt */}
              <div
                className="absolute -inset-y-8 -inset-x-1/2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(102deg, rgba(255,255,255,0) 38%, rgba(255,255,255,0.5) 47%, rgba(255,255,255,0.08) 53%, rgba(255,255,255,0) 62%)",
                  mixBlendMode: "screen",
                  transform: "translateX(var(--sheen, 0%))",
                }}
              />

              {/* Slot punch */}
              <div className="absolute left-1/2 top-2 w-11 h-1.5 rounded-full -translate-x-1/2 bg-black/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]" />

              <div className="flex relative flex-col flex-1 gap-3 px-3.5 pt-6 pb-3.5">
                <div className="flex justify-between items-center text-[7px] uppercase tracking-[0.22em] text-foreground/45">
                  <span className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rotate-45 bg-primary" />
                    UND · CRC
                  </span>
                  <span>NO. 0042</span>
                </div>

                <div className="overflow-hidden relative rounded-md border border-white/12">
                  <img
                    src={asset("nathen_headshot.jpg")}
                    alt=""
                    draggable={false}
                    className="object-cover w-full h-32 grayscale-[0.35] contrast-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(114,155,142,0.16), rgba(6,7,10,0.65))",
                    }}
                  />
                  <div className="absolute right-1.5 bottom-1.5 px-1.5 py-0.5 text-[6px] uppercase tracking-[0.2em] text-primary border border-primary/50 bg-black/55">
                    Verified
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-instrument text-2xl leading-none tracking-wide text-foreground"
                    style={{
                      textShadow: `calc(var(--ab, 1) * -0.6px) 0 rgba(255,42,109,0.75),
                                   calc(var(--ab, 1) * 0.6px) 0 rgba(38,226,255,0.75)`,
                    }}
                  >
                    Nathen Afshari
                  </span>
                  <span className="text-[7.5px] uppercase tracking-[0.24em] text-accent">
                    Software Engineer
                  </span>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-white/22 to-transparent" />

                <div className="grid grid-cols-2 gap-y-1.5 text-[6.5px] uppercase tracking-[0.18em]">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-foreground/35">Clearance</span>
                    <span className="text-foreground/80">Full Stack</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-foreground/35">Issued</span>
                    <span className="text-foreground/80">2026</span>
                  </div>
                </div>

                <div className="flex gap-px items-end mt-auto h-6">
                  {BARCODE.map((w, i) => (
                    <span
                      key={i}
                      className="h-full bg-foreground/70"
                      style={{ width: w }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function clamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v;
}
