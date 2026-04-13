"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { AnimatedCardBorder } from "./AnimatedCardBorder";

type Step = { title: string; description: string };

/**
 * Renders the "Comment je travaille / How I work" step cards.
 *
 * Each step number animates in (scale + opacity) when its card enters the
 * viewport, then fades to near-invisible as the *next* step comes into view —
 * giving a progressive "active step" feeling on scroll.
 */
export function StepsSection({ steps }: { steps: Step[] }) {
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

        // Number is bright while this step is the "current" one,
        // dimmed once the next step takes over.
        const numOpacity = nextVisible ? 0.1 : visible ? 1 : 0;
        const numScale   = visible ? 1 : 0.6;

        return (
          <AnimatedItem key={step.title}>
            <div
              ref={refs[i]}
              className="group relative rounded-[2.5rem] bg-white px-6 py-8 md:px-12 md:py-10 flex gap-6 md:gap-10 items-start transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(7,19,123,0.10)]"
            >
              {/* Pathfinder border — staggered per card */}
              <AnimatedCardBorder delay={i * 0.08} />

              {/* Animated step number */}
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: numOpacity, scale: numScale }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[4.125rem] font-normal leading-none text-navy shrink-0 w-16 text-center group-hover:text-gold transition-colors duration-300"
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
