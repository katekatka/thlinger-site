"use client";

import { useEffect, useRef, useCallback } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";

interface Category {
  title: string;
  items: string[];
}

export function InterventionCategoryGrid({ categories }: { categories: Category[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  const equalize = useCallback(() => {
    const el = gridRef.current;
    if (!el) return;
    const cells = Array.from(el.children) as HTMLElement[];
    cells.forEach((c) => { c.style.minHeight = ""; });
    const maxH = Math.max(...cells.map((c) => c.offsetHeight));
    if (maxH > 0) cells.forEach((c) => { c.style.minHeight = `${maxH}px`; });
  }, []);

  useEffect(() => {
    equalize();
    window.addEventListener("resize", equalize);
    return () => window.removeEventListener("resize", equalize);
  }, [equalize, categories]);

  return (
    <AnimatedSection
      ref={gridRef}
      stagger
      className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {categories.map((group) => (
        <AnimatedItem key={group.title}>
          <div>
            <AnimatedLine className="mb-5 w-full" />
            <p className="mb-3 font-sans text-[0.9375rem] font-semibold leading-snug text-navy">
              {group.title}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-sans text-sm leading-[1.7] text-navy/65"
                >
                  <span
                    className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedItem>
      ))}
    </AnimatedSection>
  );
}
