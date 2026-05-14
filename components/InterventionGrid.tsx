"use client";

import { useEffect, useRef, useCallback } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";

export function InterventionGrid({ items }: { items: string[] }) {
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
  }, [equalize, items]);

  return (
    <AnimatedSection
      ref={gridRef}
      stagger
      className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {items.map((item) => (
        <AnimatedItem key={item}>
          <div>
            <AnimatedLine className="mb-5 w-full" />
            <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{item}</p>
          </div>
        </AnimatedItem>
      ))}
    </AnimatedSection>
  );
}
