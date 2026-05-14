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
        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
          <span className="block h-[2px] w-4 rounded-full bg-gold" />
          <span
            className="absolute block h-4 w-[2px] rounded-full bg-gold transition-transform duration-300"
            style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
          />
        </span>
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
