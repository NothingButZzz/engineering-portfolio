"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Fixed navigation with a subtle glass panel that only appears
 * once the user scrolls past the hero (spec 02 §9 — glass limited to nav).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-[rgba(5,7,10,0.6)] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container-max flex items-center justify-between h-16">
        <a
          href="#top"
          className="flex items-center gap-2.5 group"
          aria-label={`${site.name} — home`}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
          <span className="font-semibold tracking-tight">
            {site.name}
            <span className="text-faint font-normal"> / {site.role}</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-fg after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden sm:inline-flex btn-ghost !py-2 !px-5 text-sm">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
