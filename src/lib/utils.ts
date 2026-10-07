/**
 * Minimal className combiner — joins truthy class fragments.
 * Avoids an extra dependency while keeping component call-sites clean.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Prefix a /public path with the GitHub Pages base path in production
 * (next.config.ts serves the site from /engineering-portfolio).
 */
export function asset(path: string): string {
  return process.env.NODE_ENV === "production" ? `/engineering-portfolio${path}` : path;
}

/**
 * Deterministic PRNG (mulberry32) so procedural scenes stay pure across
 * renders instead of calling Math.random() during render.
 */
export function seededRandom(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Linear interpolation. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
