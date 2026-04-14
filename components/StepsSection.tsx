"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

type Step = { title: string; description: string };

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

/**
 * Renders the "Comment je travaille / How I work" step cards.
 *
 * Mobile: step number animates opacity based on scroll position (0 → 1 → 0.1).
 * Desktop: step number sits at low opacity in navy; turns gold + full opacity on card hover.
 */
export function StepsSection({ steps }: { steps: Step[] }) {
  const isDesktop = useIsDesktop();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // One ref per card (fixed at 4 steps — can't call hooks in a loop)
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const refs = [r0, r1, r2, r3];

  // once:false so the number re-dims when scrolling back up past a step
  const iv0 = useInView(r0, { once: false, amount: 0.5 });
  const iv1 = useInView(r1, { once: false, amount: 0.5 });
  const iv2 = useInView(r2, { once: false, amount: 0.5 });
  const iv3 = useInView(r3, { once: false, amount: 0.5 });
  const ivs = [iv0, iv1, iv2, iv3];

  return (
    <AnimatedSection stagger className="flex flex-col gap-6">
      {steps.map((step, i) => {
        const visible     = ivs[i];
        const nextVisible = ivs[i + 1] ?? false;

        // Mobile: scroll-based color, always full opacity
        const mobileScale = visible ? 1 : 0.6;
        const mobileColor = visible && !nextVisible ? "var(--color-gold)" : "var(--color-navy)";

        // Desktop: always full opacity, gold on hover
        const isHovered = hoveredIndex === i;

        return (
          <AnimatedItem key={step.title}>
            <div
              ref={refs[i]}
              className="group relative rounded-[2.5rem] border-2 border-gold bg-white px-6 py-8 md:px-12 md:py-10 flex gap-6 md:gap-10 items-start transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(7,19,123,0.10)]"
              onMouseEnter={() => isDesktop && setHoveredIndex(i)}
              onMouseLeave={() => isDesktop && setHoveredIndex(null)}
            >
              {/* Animated step number */}
              <motion.span
                initial={{ opacity: 1, scale: 0.6 }}
                animate={
                  isDesktop
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: mobileScale }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  color: isDesktop
                    ? (isHovered ? "var(--color-gold)" : "var(--color-navy)")
                    : mobileColor,
                  transition: "color 0.3s ease",
                }}
                className="font-serif text-[4.125rem] font-normal leading-none shrink-0 w-16 text-center"
              >
                {i + 1}
              </motion.span>

              <div className="relative z-10 pt-2">
                <h3 className="mb-4 font-serif text-lg font-normal text-navy">
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-[1.9] text-navy/65">
                  {step.description}
                </p>
              </div>
            </div>
          </AnimatedItem>
        );
      })}
    </AnimatedSection>
  );
}
