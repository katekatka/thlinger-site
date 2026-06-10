"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import type { GoogleReview } from "./GoogleReviews";

const DESKTOP_PER_VIEW = 3;
const AUTO_MS = 10_000;

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

function Chevron({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Avis précédent" : "Avis suivant"}
      className="p-2 text-gold/50 transition-colors duration-200 hover:text-gold active:scale-95"
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {direction === "prev" ? (
          <path
            d="M14 5L8 11L14 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M8 5L14 11L8 17"
            stroke="currentColor"
            strokeWidth="2"
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
  const [deskStart, setDeskStart] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const mobileTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const deskTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const deskMax = Math.max(0, reviews.length - DESKTOP_PER_VIEW);
  const hasNav = reviews.length > DESKTOP_PER_VIEW;

  // ── Auto-scroll ────────────────────────────────────────────────────────────
  const startMobile = useCallback(() => {
    if (mobileTimer.current) clearInterval(mobileTimer.current);
    mobileTimer.current = setInterval(
      () => setMobileIdx((i) => (i + 1) % reviews.length),
      AUTO_MS,
    );
  }, [reviews.length]);

  const stopMobile = useCallback(() => {
    if (mobileTimer.current) {
      clearInterval(mobileTimer.current);
      mobileTimer.current = null;
    }
  }, []);

  const startDesk = useCallback(() => {
    if (deskTimer.current) clearInterval(deskTimer.current);
    deskTimer.current = setInterval(
      () => setDeskStart((s) => (s >= deskMax ? 0 : s + 1)),
      AUTO_MS,
    );
  }, [deskMax]);

  const stopDesk = useCallback(() => {
    if (deskTimer.current) {
      clearInterval(deskTimer.current);
      deskTimer.current = null;
    }
  }, []);

  useEffect(() => {
    startMobile();
    return stopMobile;
  }, [startMobile, stopMobile]);

  useEffect(() => {
    startDesk();
    return stopDesk;
  }, [startDesk, stopDesk]);

  // ── Mobile handlers ────────────────────────────────────────────────────────
  const goPrevMobile = () => {
    setMobileIdx((i) => (i - 1 + reviews.length) % reviews.length);
    startMobile();
  };
  const goNextMobile = () => {
    setMobileIdx((i) => (i + 1) % reviews.length);
    startMobile();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    stopMobile();
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const dx = touchStart - e.changedTouches[0].clientX;
    if (dx > 50) goNextMobile();
    else if (dx < -50) goPrevMobile();
    else startMobile();
    setTouchStart(null);
  };

  // ── Desktop handlers ───────────────────────────────────────────────────────
  const goPrevDesk = () => {
    setDeskStart((s) => (s <= 0 ? deskMax : s - 1));
    startDesk();
  };
  const goNextDesk = () => {
    setDeskStart((s) => (s >= deskMax ? 0 : s + 1));
    startDesk();
  };

  return (
    <>
      {/* ── Mobile carousel ──────────────────────────────────────────────────── */}
      <div className="md:hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
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

        <div className="mt-8 flex items-center justify-center gap-3">
          <Chevron direction="prev" onClick={goPrevMobile} />
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setMobileIdx(i);
                  startMobile();
                }}
                aria-label={`Avis ${i + 1}`}
                aria-current={i === mobileIdx ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === mobileIdx ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
          <Chevron direction="next" onClick={goNextMobile} />
        </div>
      </div>

      {/* ── Desktop carousel ─────────────────────────────────────────────────── */}
      {/*
        Pure-CSS slide: flex track has w-full so card % widths resolve to the
        container width W. Step = W/3 + 8px = (W-48)/3 + 24 (card + gap-6).
        translateX uses 100% of the track (= W) in calc — no JS measurement needed.
      */}
      <div
        className="hidden md:block"
        onMouseEnter={stopDesk}
        onMouseLeave={startDesk}
      >
        <div className="overflow-hidden">
          <div
            className="flex w-full gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(calc(${-deskStart} * (100% / 3 + 8px)))`,
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-[calc((100%-48px)/3)] shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {hasNav && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <Chevron direction="prev" onClick={goPrevDesk} />
            <div className="flex gap-2">
              {Array.from({ length: deskMax + 1 }).map((_, s) => (
                <button
                  key={s}
                  onClick={() => {
                    setDeskStart(s);
                    startDesk();
                  }}
                  aria-label={`Position ${s + 1}`}
                  aria-current={s === deskStart ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    s === deskStart ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
                  }`}
                />
              ))}
            </div>
            <Chevron direction="next" onClick={goNextDesk} />
          </div>
        )}
      </div>
    </>
  );
}
