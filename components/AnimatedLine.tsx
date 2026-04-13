"use client";

import { motion } from "framer-motion";

interface AnimatedLineProps {
  className?: string;
}

// Matches the "hidden" / "visible" keys used by AnimatedSection + AnimatedItem,
// so the line draws in sync with its parent card's fade-up on any screen size.
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function AnimatedLine({ className = "" }: AnimatedLineProps) {
  return (
    <motion.div
      className={`bg-gold ${className}`}
      style={{ height: "2px", transformOrigin: "left center" }}
      variants={lineVariants}
    />
  );
}
