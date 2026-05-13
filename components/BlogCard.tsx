import Link from "next/link";
import type { Post } from "@/lib/notion";

interface Props {
  post: Post;
  readingTimeMinutes: number;
}

function formatDate(iso: string, lang: "FR" | "EN"): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString(lang === "EN" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post, readingTimeMinutes }: Props) {
  const isEN = post.language === "EN";
  const href = isEN ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
  const readingLabel = isEN
    ? `${readingTimeMinutes} min read`
    : `${readingTimeMinutes} min`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-[2.5rem] border-2 border-gold bg-navy p-10 transition-all duration-300 hover:bg-dark hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(7,19,123,0.22)]"
    >

      {/* Top: rubrique + title + excerpt */}
      <div className="flex-1">
        {post.category && (
          <p
            className="mb-4 text-[0.7rem] uppercase tracking-[0.18em] text-gold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {post.category}
          </p>
        )}

        <h2
          className="mb-4 text-[1.25rem] font-normal leading-snug text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {post.title}
        </h2>

        {post.excerpt && (
          <p
            className="line-clamp-3 text-[0.875rem] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {post.excerpt}
          </p>
        )}
      </div>

      {/* Bottom: date + reading time + arrow */}
      <div className="mt-8 flex items-end justify-between">
        <div
          className="flex flex-col gap-0.5 text-[0.72rem] text-white/40"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {post.publishedDate && (
            <time dateTime={post.publishedDate}>
              {formatDate(post.publishedDate, post.language)}
            </time>
          )}
          <span>{readingLabel}</span>
        </div>

        <div className="flex items-center gap-2 font-serif text-[0.75rem] uppercase tracking-[0.16em] text-white/50 transition-all duration-300 group-hover:gap-4 group-hover:text-white">
          {isEN ? "Read" : "Lire"}
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
            <path
              d="M1 4H13M13 4L10 1M13 4L10 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
