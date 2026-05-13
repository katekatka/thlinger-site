"use client";

import { useState } from "react";
import type { Post } from "@/lib/notion";
import BlogCard from "./BlogCard";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

interface PostWithTime extends Post {
  readingTimeMinutes: number;
}

interface Props {
  posts: PostWithTime[];
  lang: "FR" | "EN";
}

const ALL_LABEL: Record<"FR" | "EN", string> = {
  FR: "Tous",
  EN: "All",
};

const EMPTY_LABEL: Record<"FR" | "EN", string> = {
  FR: "Aucun article dans cette rubrique pour l'instant.",
  EN: "No articles in this category yet.",
};

export default function BlogGrid({ posts, lang }: Props) {
  const [active, setActive] = useState<string | null>(null);

  // Collect unique categories that have at least one post
  const rubriques = Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean))
  ).sort();

  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <div>
      {/* Rubrique filter pills */}
      {rubriques.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={[
              "rounded-full border px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.12em] transition-all duration-200",
              "font-sans",
              active === null
                ? "border-navy bg-navy text-white"
                : "border-navy/20 bg-transparent text-navy/60 hover:border-navy/50 hover:text-navy",
            ].join(" ")}
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {ALL_LABEL[lang]}
          </button>

          {rubriques.map((r) => (
            <button
              key={r}
              onClick={() => setActive(r === active ? null : r)}
              className={[
                "rounded-full border px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.12em] transition-all duration-200",
                active === r
                  ? "border-gold bg-gold text-navy"
                  : "border-navy/20 bg-transparent text-navy/60 hover:border-gold hover:text-navy",
              ].join(" ")}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {r}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <p
          className="text-[0.95rem] text-dark/50"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {EMPTY_LABEL[lang]}
        </p>
      ) : (
        <AnimatedSection stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <AnimatedItem key={post.id}>
              <BlogCard post={post} readingTimeMinutes={post.readingTimeMinutes} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      )}
    </div>
  );
}
