"use client";

import { useEffect, useState } from "react";

/**
 * Boot-sequence loading screen: a 000 → 100 counter with a teal→violet
 * gradient number, framed by mono technical labels. Covers the page on first
 * paint (rendered server-side at 000, so there is no flash), locks scroll
 * while counting, then fades away. Honors reduced-motion.
 */
export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const duration = reduced ? 300 : 900;

    // Lock scroll while the loader is on screen.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // smootherstep — a controlled, mechanical ramp (no bounce)
      const eased = t * t * t * (t * (t * 6 - 15) + 10);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        document.body.style.overflow = prevOverflow;
        window.setTimeout(() => setGone(true), 750); // after fade-out
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={done}
      role="status"
      aria-label="Loading"
    >
      {/* faint blueprint texture + center glow */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(46,224,196,0.12) 0%, rgba(46,224,196,0) 60%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* top label */}
        <p className="mb-8 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.35em] text-muted sm:text-xs">
          <span className="font-[family-name:var(--font-tc)] tracking-[0.2em]">
            初始化中
          </span>
          <span className="text-accent">·</span>
          <span className="text-accent">Initializing</span>
        </p>

        {/* counter */}
        <div className="text-gradient font-[family-name:var(--font-mono)] font-bold leading-none tracking-tight text-[clamp(4.5rem,17vw,10rem)] tabular-nums">
          {String(count).padStart(3, "0")}
        </div>

        {/* line */}
        <div className="mt-8 h-px w-[min(72vw,320px)] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* bottom label */}
        <p className="mt-6 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.35em] text-faint">
          Yu-Jen <span className="text-accent-2">{"//"}</span> Kenny Lin
        </p>
      </div>
    </div>
  );
}
