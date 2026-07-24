"use client";

import { motion } from "framer-motion";

/**
 * Thin blueprint separator with a coordinate readout and a pulsing node —
 * makes the transition between sections feel deliberate and mechanical
 * rather than abrupt (spec 14 §3, spec 02 §11 technical separators).
 */
export default function TechDivider({ label }: { label?: string }) {
  return (
    <div className="container-max" aria-hidden>
      <div className="flex items-center gap-4 py-2">
        <span className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-widest text-faint">
          {label ?? "//"}
        </span>
        <motion.span
          className="h-px flex-1 origin-left bg-gradient-to-r from-white/20 via-white/10 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      </div>
    </div>
  );
}
