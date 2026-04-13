"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Absolutely-positioned SVG that draws a pathfinder border around its parent.
 * Parent must be `relative` (and have no `border-gold` of its own).
 */
export function AnimatedCardBorder({ delay = 0 }: { delay?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <svg
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <motion.rect
        x="1"
        y="1"
        rx="40"
        ry="40"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        /* SVG 2 geometry props via CSS — supported in all modern browsers */
        style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)" }}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </svg>
  );
}
