"use client";

import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

export const AnimatedSection = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string; stagger?: boolean; delay?: number }
>(function AnimatedSection({ children, className = "", stagger = false, delay = 0 }, ref) {
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger ? staggerContainer : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      {...(!stagger && delay ? { transition: { delay } } : {})}
    >
      {children}
    </motion.div>
  );
});
AnimatedSection.displayName = "AnimatedSection";

export function AnimatedItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
