import Link from "next/link";

export function ConsultationSignal({ lang = "fr" }: { lang?: "fr" | "en" }) {
  if (lang === "en") {
    return (
      <div className="mt-6 max-w-2xl">
        <p className="font-sans text-[0.9375rem] leading-relaxed text-navy/55">
          First 30-minute video consultation, free of charge and without commitment,
          available from anywhere in France.
        </p>
        <Link
          href="/en/rdv"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy/25 px-5 py-2.5 font-sans text-[0.875rem] text-navy/55 transition-all duration-200 hover:border-gold hover:text-navy"
        >
          Book a time slot online
          <svg width="14" height="9" viewBox="0 0 16 10" fill="none" aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1">
            <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 max-w-2xl">
      <p className="font-sans text-[0.9375rem] leading-relaxed text-navy/55">
        Premier échange de 30 minutes en visioconférence, gratuit et sans engagement,
        accessible depuis toute la France.
      </p>
      <Link
        href="/rdv"
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy/25 px-5 py-2.5 font-sans text-[0.875rem] text-navy/55 transition-all duration-200 hover:border-gold hover:text-navy"
      >
        Réserver un créneau en ligne
        <svg width="14" height="9" viewBox="0 0 16 10" fill="none" aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1">
          <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
