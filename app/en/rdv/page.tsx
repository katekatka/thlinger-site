import type { Metadata } from "next";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Book an appointment | THALINGER Avocat — Strasbourg",
  description:
    "Book a free 30-minute initial exchange with Maître Christian THALINGER, business lawyer at the Strasbourg Bar. No commitment. Video call.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/rdv",
    languages: {
      fr: "https://www.thalinger-avocat.fr/rdv",
      en: "https://www.thalinger-avocat.fr/en/rdv",
    },
  },
};

export default function RdvPageEn() {
  return (
    <section className="bg-white py-24 md:py-32" style={{ paddingTop: "7rem" }}>
      <div className="mx-auto max-w-[1200px] px-6">

        {/* ── Header ── */}
        <div className="mb-16">
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
            Initial exchange
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3.6rem)] font-normal leading-tight text-navy">
            Book an appointment.
          </h1>
        </div>

        {/* ── Split layout ── */}
        <div className="grid gap-16 md:grid-cols-[380px_1fr] md:gap-x-20">

          {/* Left — context */}
          <div className="flex flex-col gap-10">

            {/* What to expect */}
            <div>
              <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
                What to expect
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Duration", value: "30 minutes" },
                  { label: "Cost", value: "Free, no commitment" },
                  { label: "Format", value: "Video call" },
                  { label: "Confirmation", value: "Instant confirmation by email" },
                ].map(({ label, value }) => (
                  <li key={label} className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-navy/40">
                      {label}
                    </span>
                    <span className="font-serif text-base text-navy">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What happens */}
            <div>
              <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
                Purpose
              </p>
              <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                To understand your situation, identify the legal issues at stake, and
                assess the available options together. No commitment required on your part
                at the end of this exchange.
              </p>
            </div>

            {/* Back link */}
            <Link
              href="/en#contact"
              className="mt-auto font-sans text-sm text-navy/40 transition-colors hover:text-navy"
            >
              ← Back to contact
            </Link>
          </div>

          {/* Right — Cal.com embed */}
          <div className="min-h-[660px] overflow-hidden rounded-2xl border-2 border-gold">
            <CalEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
