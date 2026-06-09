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
          className="group mt-4 inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
        >
          Book a time slot online
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1">
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
        className="group mt-4 inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
      >
        Réserver un créneau en ligne
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
