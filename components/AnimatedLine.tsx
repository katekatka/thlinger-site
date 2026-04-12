"use client";

import { motion } from "framer-motion";

interface AnimatedLineProps {
  className?: string;
}

export function AnimatedLine({ className = "" }: AnimatedLineProps) {
  return (
    <motion.div
      className={`bg-[#D4AF37] ${className}`}
      style={{ height: "2px", transformOrigin: "left center" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
