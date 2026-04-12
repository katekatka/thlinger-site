"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Tracks which section[id] element is most visible in the viewport.
 * Uses IntersectionObserver with intersectionRect.height as the metric
 * so tall sections (>viewport) are handled correctly.
 *
 * @param headerOffset  pixels of fixed header to exclude from the top
 * @returns             id of the currently most-visible section, or ""
 */
export function useActiveSection(headerOffset = 96): string {
  const [active, setActive] = useState("");
  const visiblePx = useRef(new Map<string, number>());

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (!sections.length) return;

    const pick = () => {
      let best = "";
      let max = 0;
      visiblePx.current.forEach((px, id) => {
        if (px > max) { max = px; best = id; }
      });
      return best;
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visiblePx.current.set(entry.target.id, entry.intersectionRect.height);
        }
        const section = pick();
        if (section) setActive(section);
      },
      {
        // 20 thresholds → smooth detection on fast scroll
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        // shrink root from top to ignore content behind the fixed header
        rootMargin: `-${headerOffset}px 0px 0px 0px`,
      }
    );

    sections.forEach((s) => obs.observe(s));

    // Run once on mount so active is set before the user scrolls
    sections.forEach((s) => {
      const rect = s.getBoundingClientRect();
      const visible = Math.max(
        0,
        Math.min(rect.bottom, window.innerHeight) -
          Math.max(rect.top, headerOffset)
      );
      visiblePx.current.set(s.id, visible);
    });
    const initial = pick();
    if (initial) setActive(initial);

    return () => obs.disconnect();
  }, [headerOffset]);

  return active;
}
