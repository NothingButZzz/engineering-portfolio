"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

const IDS = ["top", ...navLinks.map((l) => l.href.replace("#", ""))];

const LABELS: Record<string, string> = {
  top: "Home",
  about: "About",
  timeline: "Journey",
  projects: "Projects",
  skills: "Skills",
  experience: "Experience",
  contact: "Contact",
};

/**
 * Minimal engineering HUD rail (right edge) that tracks the active section
 * and lets the visitor jump between them — reinforcing the guided-journey /
 * smooth-navigation principle (spec 14 §3) without visual noise.
 *
 * Active section is derived from scroll position (the section whose top has
 * most recently passed the viewport's upper third), which stays correct at
 * the very top and bottom of the page.
 */
export default function ScrollProgress() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const compute = () => {
      const marker = window.innerHeight * 0.35;
      let current = IDS[0];
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) current = id;
      }
      setActive(current);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
    >
      {IDS.map((id) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center justify-end gap-3"
            aria-label={LABELS[id] ?? id}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? "text-accent opacity-100"
                  : "text-faint opacity-0 group-hover:opacity-70"
              }`}
            >
              {LABELS[id] ?? id}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-6 bg-accent shadow-[0_0_8px_var(--color-accent)]"
                  : "w-3 bg-white/25 group-hover:w-5 group-hover:bg-white/50"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
