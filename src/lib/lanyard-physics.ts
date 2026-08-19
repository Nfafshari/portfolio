/**
 * Verlet solver for a lanyard + badge.
 *
 * The rope is a chain of particles pinned at the anchor. The badge is a rigid
 * quad (4 particles braced by its edges and both diagonals) slung from the last
 * rope particle by two clip links, so it swings and counter-rotates on its own.
 */

const SUBSTEP = 1 / 120;
const MAX_SUBSTEPS = 5;

export interface Particle {
  x: number;
  y: number;
  px: number;
  py: number;
  /** Inverse mass. 0 pins the particle in place. */
  inv: number;
}

interface Link {
  a: number;
  b: number;
  len: number;
  stiff: number;
}

export interface LanyardConfig {
  segments: number;
  ropeLength: number;
  cardWidth: number;
  cardHeight: number;
  /** Vertical gap between the clip and the top edge of the badge. */
  clipGap: number;
  gravity: number;
  ropeDamping: number;
  cardDamping: number;
  iterations: number;
  margin: number;
}

export const defaultConfig: LanyardConfig = {
  segments: 16,
  ropeLength: 150,
  cardWidth: 220,
  cardHeight: 340,
  clipGap: 26,
  gravity: 2200,
  ropeDamping: 0.998,
  cardDamping: 0.994,
  iterations: 14,
  margin: 8,
};

export interface Point {
  x: number;
  y: number;
}

/** Corner order is TL, TR, BR, BL. */
export type Corners = [Particle, Particle, Particle, Particle];

export class LanyardSim {
  readonly particles: Particle[] = [];
  private readonly links: Link[] = [];
  private readonly cfg: LanyardConfig;
  private readonly first: number;

  private ax: number;
  private ay: number;
  private bw: number;
  private bh: number;

  private acc = 0;
  private dragging = false;
  /** Grab position in card-local UV space. */
  private gu = 0;
  private gv = 0;
  private tx = 0;
  private ty = 0;

  constructor(
    anchor: Point,
    bounds: { w: number; h: number },
    cfg: Partial<LanyardConfig> = {},
  ) {
    this.cfg = { ...defaultConfig, ...cfg };
    this.ax = anchor.x;
    this.ay = anchor.y;
    this.bw = bounds.w;
    this.bh = bounds.h;
    this.first = this.cfg.segments;

    const { segments, ropeLength, cardWidth, cardHeight, clipGap } = this.cfg;

    // Start the whole assembly above the viewport so it falls into frame, and
    // offset it sideways a touch so it settles with a swing instead of a drop.
    const lift = ropeLength + cardHeight + clipGap + 80;
    const clip: Point = { x: this.ax + 18, y: this.ay - lift + ropeLength };

    for (let i = 0; i < segments; i++) {
      const t = i / (segments - 1);
      this.add(
        this.ax + (clip.x - this.ax) * t,
        this.ay - lift + (clip.y - (this.ay - lift)) * t,
        i === 0 ? 0 : 1,
      );
    }

    const left = clip.x - cardWidth / 2;
    const top = clip.y + clipGap;
    this.add(left, top, 0.4);
    this.add(left + cardWidth, top, 0.4);
    this.add(left + cardWidth, top + cardHeight, 0.4);
    this.add(left, top + cardHeight, 0.4);

    const segLen = ropeLength / (segments - 1);
    for (let i = 0; i < segments - 1; i++) {
      this.links.push({ a: i, b: i + 1, len: segLen, stiff: 1 });
    }

    const [tl, tr, br, bl] = this.cardIndices();
    const diag = Math.hypot(cardWidth, cardHeight);
    this.links.push({ a: tl, b: tr, len: cardWidth, stiff: 1 });
    this.links.push({ a: tr, b: br, len: cardHeight, stiff: 1 });
    this.links.push({ a: br, b: bl, len: cardWidth, stiff: 1 });
    this.links.push({ a: bl, b: tl, len: cardHeight, stiff: 1 });
    this.links.push({ a: tl, b: br, len: diag, stiff: 1 });
    this.links.push({ a: tr, b: bl, len: diag, stiff: 1 });

    const clipLen = Math.hypot(cardWidth / 2, clipGap);
    this.links.push({ a: segments - 1, b: tl, len: clipLen, stiff: 0.9 });
    this.links.push({ a: segments - 1, b: tr, len: clipLen, stiff: 0.9 });
  }

  private add(x: number, y: number, inv: number) {
    this.particles.push({ x, y, px: x, py: y, inv });
  }

  private cardIndices(): [number, number, number, number] {
    const f = this.first;
    return [f, f + 1, f + 2, f + 3];
  }

  get corners(): Corners {
    const [tl, tr, br, bl] = this.cardIndices();
    const p = this.particles;
    return [p[tl], p[tr], p[br], p[bl]];
  }

  get rope(): Point[] {
    return this.particles.slice(0, this.cfg.segments);
  }

  /** Mean per-substep displacement of the badge, in px. */
  get velocity(): Point {
    let vx = 0;
    let vy = 0;
    for (const c of this.corners) {
      vx += c.x - c.px;
      vy += c.y - c.py;
    }
    return { x: vx / 4, y: vy / 4 };
  }

  get isDragging() {
    return this.dragging;
  }

  /** True once everything has settled, so the caller can park the RAF loop. */
  get sleeping() {
    if (this.dragging) return false;
    for (const p of this.particles) {
      if (Math.abs(p.x - p.px) > 0.035 || Math.abs(p.y - p.py) > 0.035) {
        return false;
      }
    }
    return true;
  }

  setAnchor(x: number, y: number) {
    this.ax = x;
    this.ay = y;
  }

  setBounds(w: number, h: number) {
    this.bw = w;
    this.bh = h;
  }

  /** Records where the badge was grabbed, in card-local UV coordinates. */
  grab(x: number, y: number) {
    const [tl, tr, , bl] = this.corners;
    const exx = tr.x - tl.x;
    const exy = tr.y - tl.y;
    const eyx = bl.x - tl.x;
    const eyy = bl.y - tl.y;
    const w2 = exx * exx + exy * exy;
    const h2 = eyx * eyx + eyy * eyy;
    const dx = x - tl.x;
    const dy = y - tl.y;

    this.gu = clamp((dx * exx + dy * exy) / w2, 0, 1);
    this.gv = clamp((dx * eyx + dy * eyy) / h2, 0, 1);
    this.tx = x;
    this.ty = y;
    this.dragging = true;
  }

  move(x: number, y: number) {
    this.tx = clamp(x, 0, this.bw);
    this.ty = clamp(y, 0, this.bh);
  }

  release() {
    this.dragging = false;
  }

  update(dtMs: number) {
    this.acc += Math.min(dtMs, 100) / 1000;
    let steps = 0;
    while (this.acc >= SUBSTEP && steps < MAX_SUBSTEPS) {
      this.acc -= SUBSTEP;
      steps++;
      this.integrate();
      for (let i = 0; i < this.cfg.iterations; i++) {
        this.solve();
      }
      this.contain();
    }
    if (steps === MAX_SUBSTEPS) this.acc = 0;
  }

  private integrate() {
    const g = this.cfg.gravity * SUBSTEP * SUBSTEP;
    const p = this.particles;
    for (let i = 0; i < p.length; i++) {
      const it = p[i];
      if (it.inv === 0) continue;
      const damp = i < this.first ? this.cfg.ropeDamping : this.cfg.cardDamping;
      const vx = (it.x - it.px) * damp;
      const vy = (it.y - it.py) * damp;
      it.px = it.x;
      it.py = it.y;
      it.x += vx;
      it.y += vy + g;
    }
  }

  private solve() {
    const p = this.particles;

    p[0].x = this.ax;
    p[0].y = this.ay;
    p[0].px = this.ax;
    p[0].py = this.ay;

    for (const l of this.links) {
      const a = p[l.a];
      const b = p[l.b];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 1e-6;
      const sum = a.inv + b.inv;
      if (sum === 0) continue;

      const diff = ((dist - l.len) / dist) * l.stiff;
      const ka = a.inv / sum;
      const kb = b.inv / sum;
      a.x += dx * diff * ka;
      a.y += dy * diff * ka;
      b.x -= dx * diff * kb;
      b.y -= dy * diff * kb;
    }

    if (this.dragging) this.applyDrag();
  }

  /**
   * Pulls the grabbed point toward the cursor by distributing the correction
   * across all four corners with bilinear weights, so grabbing a corner spins
   * the badge while grabbing the middle drags it flat. Only the current
   * position moves (not the previous one), so the drag builds real momentum
   * and the badge keeps swinging after release.
   */
  private applyDrag() {
    const c = this.corners;
    const u = this.gu;
    const v = this.gv;
    const w = [(1 - u) * (1 - v), u * (1 - v), u * v, (1 - u) * v];
    const denom = w[0] * w[0] + w[1] * w[1] + w[2] * w[2] + w[3] * w[3];
    if (denom < 1e-6) return;

    let gx = 0;
    let gy = 0;
    for (let i = 0; i < 4; i++) {
      gx += c[i].x * w[i];
      gy += c[i].y * w[i];
    }

    // Ease toward the cursor rather than snapping, so the rope can resist.
    const follow = 0.5;
    const dx = ((this.tx - gx) * follow) / denom;
    const dy = ((this.ty - gy) * follow) / denom;
    for (let i = 0; i < 4; i++) {
      c[i].x += dx * w[i];
      c[i].y += dy * w[i];
    }
  }

  /**
   * Keeps a dragged badge on screen. The whole quad is translated as one rigid
   * piece rather than clamping each corner, which would deform the card and
   * fight the constraint solver. The previous position moves with it so
   * pressing against an edge bleeds off momentum instead of storing it.
   *
   * Only runs while dragging: at rest the rope already holds the badge in
   * place, and clamping it there would stop it ever leaving the viewport.
   */
  private contain() {
    if (!this.dragging) return;

    const m = this.cfg.margin;
    const c = this.corners;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const p of c) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    let dx = 0;
    let dy = 0;
    if (minX < m) dx = m - minX;
    else if (maxX > this.bw - m) dx = this.bw - m - maxX;
    if (minY < m) dy = m - minY;
    else if (maxY > this.bh - m) dy = this.bh - m - maxY;
    if (dx === 0 && dy === 0) return;

    for (const p of c) {
      p.x += dx;
      p.y += dy;
      p.px += dx;
      p.py += dy;
    }
  }
}

function clamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v;
}

/** Smooth path through the rope points using midpoint quadratics. */
export function ropePath(pts: Point[]): string {
  if (pts.length < 2) return "";
  const r = (n: number) => Math.round(n * 10) / 10;
  let d = `M ${r(pts[0].x)} ${r(pts[0].y)}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    d += ` Q ${r(pts[i].x)} ${r(pts[i].y)} ${r(mx)} ${r(my)}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L ${r(last.x)} ${r(last.y)}`;
}
