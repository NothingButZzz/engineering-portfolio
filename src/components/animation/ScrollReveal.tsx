"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveals content once it scrolls into view. Slow, eased, one-shot
 * (spec 09 / 02 §14). Honors reduced-motion via Framer's global config.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
