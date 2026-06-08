"use client";

import { useState } from "react";
import type { GoogleReview } from "./GoogleReviews";

const DESKTOP_PER_VIEW = 3;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={i < count ? "var(--color-gold)" : "transparent"}
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <a
      href={review.authorUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-[2.5rem] border-2 border-gold/30 bg-white p-8 transition-all duration-200 hover:border-gold md:p-10"
    >
      <div className="mb-5 flex items-center justify-between">
        <Stars count={review.rating} />
        <span className="font-sans text-[0.75rem] text-navy/40">{review.date}</span>
      </div>
      <p className="flex-1 font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="mt-6 font-serif text-sm text-navy">{review.author}</p>
    </a>
  );
}

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Avis précédent" : "Avis suivant"}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold/40 bg-white/10 text-white/60 transition hover:border-gold hover:text-white disabled:opacity-30"
    >
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
        {direction === "prev" ? (
          <path
            d="M15 5H1M1 5L5 1M1 5L5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M1 5H15M15 5L11 1M15 5L11 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function ReviewsDisplay({ reviews }: { reviews: GoogleReview[] }) {
  const [mobileIdx, setMobileIdx] = useState(0);
  const [deskPage, setDeskPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // ── Mobile ────────────────────────────────────────────────────────────────
  const prevMobile = () => setMobileIdx((i) => Math.max(0, i - 1));
  const nextMobile = () => setMobileIdx((i) => Math.min(reviews.length - 1, i + 1));

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextMobile();
    else if (diff < -50) prevMobile();
    setTouchStart(null);
  };

  // ── Desktop ───────────────────────────────────────────────────────────────
  const deskTotalPages = Math.ceil(reviews.length / DESKTOP_PER_VIEW);
  const hasDesktopNav = reviews.length > DESKTOP_PER_VIEW;
  const desktopVisible = reviews.slice(
    deskPage * DESKTOP_PER_VIEW,
    (deskPage + 1) * DESKTOP_PER_VIEW,
  );

  return (
    <>
      {/* ── Mobile carousel ─────────────────────────────────────────────── */}
      <div
        className="md:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${mobileIdx * 100}%)`,
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-full shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIdx(i)}
              aria-label={`Avis ${i + 1}`}
              aria-current={i === mobileIdx ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === mobileIdx ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop carousel (3 cards per view) ──────────────────────────── */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6">
          {desktopVisible.map((review, i) => (
            <ReviewCard key={deskPage * DESKTOP_PER_VIEW + i} review={review} />
          ))}
        </div>

        {hasDesktopNav && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <NavButton
              direction="prev"
              onClick={() => setDeskPage((p) => Math.max(0, p - 1))}
              disabled={deskPage === 0}
            />
            <div className="flex gap-2">
              {Array.from({ length: deskTotalPages }).map((_, p) => (
                <button
                  key={p}
                  onClick={() => setDeskPage(p)}
                  aria-label={`Page ${p + 1}`}
                  aria-current={p === deskPage ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    p === deskPage ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
                  }`}
                />
              ))}
            </div>
            <NavButton
              direction="next"
              onClick={() => setDeskPage((p) => Math.min(deskTotalPages - 1, p + 1))}
              disabled={deskPage === deskTotalPages - 1}
            />
          </div>
        )}
      </div>
    </>
  );
}
