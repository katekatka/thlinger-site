"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

function FaqRow({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-2 border-gold">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-serif text-[1.0625rem] leading-snug text-navy">
          {question}
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
          <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
          <line
            x1="10" y1="3" x2="10" y2="17"
            stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round"
            style={{
              transformOrigin: "10px 10px",
              transform: open ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <AnimatedSection key={group.title}>
          <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
            {group.title}
          </p>
          <div className="border-t-2 border-gold">
            {group.items.map((item) => (
              <FaqRow key={item.question} {...item} />
            ))}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
