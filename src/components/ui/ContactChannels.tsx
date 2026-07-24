"use client";

import { useState } from "react";
import { site, socials } from "@/data/site";

/** Contact channels with a copy-email affordance (spec 06 contact style). */
export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the mailto link below still works */
    }
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href={`mailto:${site.email}`} className="btn-primary">
          {site.email}
          <span aria-hidden>→</span>
        </a>
        <button onClick={copyEmail} className="btn-ghost" type="button">
          {copied ? "Copied ✓" : "Copy email ⧉"}
        </button>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted transition-colors hover:text-fg"
            >
              <span className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-widest text-accent">
                {s.label}
              </span>
              <span className="text-faint group-hover:text-muted">
                {s.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
