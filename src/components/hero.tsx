import { ArrowUpRight } from "lucide-react";

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export default function Hero() {
  return (
    <div
      className="flex flex-col justify-between w-full h-[calc(100dvh-5rem)] bg-cover bg-center px-6 py-8 border-b border-border md:h-[calc(100dvh-6.25rem)] md:px-12 md:py-10"
      style={{ backgroundImage: `url(${asset("hero-section.png")})` }}
    >
      <div className="flex flex-col gap-6 justify-between md:flex-row md:gap-10">
        <div className="flex flex-col gap-2 items-start">
          <span className="rounded-full border border-primary/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
            Nathen Afshari - Portfolio '26
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Est. 2026 / University of North Dakota
          </span>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-right">
          Software engineer at UND's Computational Research Center, growing
          into full-stack. I build the interface, then follow it back through
          the APIs and auth that make it work.
        </p>
      </div>

      <h2 className="font-instrument leading-[0.95] tracking-wide text-foreground bg-radial from-accent/8 to-60% text-[clamp(2.25rem,8.5vw,7rem)]">
        <span className="block">
          I TURN <span className="text-primary">IDEAS</span>
        </span>
        <span className="flex flex-wrap items-center gap-x-[0.25em]">
          INTO
          <img
            src={asset("lava.png")}
            alt=""
            aria-hidden="true"
            className="inline-block h-[0.62em] w-[1.5em] rounded-full object-cover"
          />
          <span className="text-accent">REAL</span> SOFTWARE
        </span>
      </h2>

      <div className="flex flex-col gap-6 justify-between md:flex-row md:items-end md:gap-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              My Stack
            </span>
            <span className="text-sm text-foreground/80">
              React · TypeScript · Next.js · Node.js · PostgreSQL
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              Open To
            </span>
            <span className="text-sm text-foreground/80">
              Frontend & Full-Stack Engineer roles · Available now
            </span>
          </div>
        </div>

        <a
          href="#projects"
          className="flex shrink-0 gap-2 items-center self-start bg-primary px-5 py-3 text-sm uppercase tracking-[0.15em] text-background rounded-xs hover:opacity-90 md:self-auto"
        >
          Explore My Work
          <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
