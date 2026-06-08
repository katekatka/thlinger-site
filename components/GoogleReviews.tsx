// Server component — no "use client" needed.
// Data is passed from page.tsx; swap the array for a fetch() call when the API key is ready.
import ReviewsDisplay from "./ReviewsDisplay";

export interface GoogleReview {
  author: string;
  authorUrl: string; // direct link to the reviewer's Google Maps profile
  rating: number;
  text: string;
  date: string; // e.g. "il y a 2 mois"
}

interface Props {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  placeUrl: string; // Google Maps business profile URL
  locale?: "fr" | "en";
}

const i18n = {
  fr: { eyebrow: "Avis Google", reviews: "avis", cta: "Voir tous les avis", starsLabel: (n: number) => `${n} étoiles sur 5` },
  en: { eyebrow: "Google Reviews", reviews: "reviews", cta: "See all reviews", starsLabel: (n: number) => `${n} stars out of 5` },
};

function Stars({ count, locale }: { count: number; locale: "fr" | "en" }) {
  return (
    <div className="flex gap-0.5" aria-label={i18n[locale].starsLabel(count)}>
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

// Minimal Google "G" mark — avoids importing a full image asset.
function GoogleMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function GoogleReviews({ reviews, rating, totalReviews, placeUrl, locale = "fr" }: Props) {
  if (!reviews.length) return null;
  const t = i18n[locale];

  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* ── Header row ── */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-gold/60">
              {t.eyebrow}
            </p>
            <div className="flex items-center gap-4">
              <GoogleMark />
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-[2rem] leading-none text-white">
                    {rating.toFixed(1)}
                  </span>
                  <Stars count={Math.round(rating)} locale={locale} />
                </div>
                <p className="mt-1 font-sans text-[0.8125rem] text-white/50">
                  {totalReviews} {t.reviews}
                </p>
              </div>
            </div>
          </div>

          <a
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-gold px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:gap-5 hover:text-navy active:scale-[0.97] md:w-fit md:justify-start"
          >
            {t.cta}
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 5H15M15 5L11 1M15 5L11 9"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ── Review cards ── */}
        <ReviewsDisplay reviews={reviews} />

      </div>
    </section>
  );
}
