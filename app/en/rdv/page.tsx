import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Book an appointment | THALINGER Avocat — Strasbourg",
  description:
    "Book a free 30-minute initial exchange with Maître Christian THALINGER, business lawyer at the Strasbourg Bar. No commitment. Video call via Google Meet.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/rdv",
    languages: {
      fr: "https://www.thalinger-avocat.fr/rdv",
      en: "https://www.thalinger-avocat.fr/en/rdv",
    },
  },
};

const items: { label: string; value: string; note?: string }[] = [
  { label: "Duration", value: "30 minutes" },
  { label: "Cost", value: "Free, no commitment" },
  {
    label: "Format",
    value: "Google Meet",
    note: "No installation required. A meeting link is sent to you by email upon confirmation. The aim is to understand your situation, identify the legal issues at stake, and assess the available options together. No commitment required on your part at the end of this exchange.",
  },
];

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

            {/* Portrait */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/portrait02.png"
                alt="Maître Christian THALINGER"
                width={72}
                height={72}
                className="shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-base font-normal text-navy">
                  Maître Christian THALINGER
                </p>
                <p className="font-sans text-[0.8125rem] text-navy/50">
                  Attorney at the Strasbourg Bar
                </p>
              </div>
            </div>

            {/* What to expect */}
            <div>
              <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
                What to expect
              </p>
              <ul className="space-y-4">
                {items.map(({ label, value, note }) => (
                  <li key={label} className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-navy/40">
                      {label}
                    </span>
                    <span className="font-serif text-base text-navy">{value}</span>
                    {note && (
                      <span className="mt-1.5 font-sans text-[0.8125rem] leading-relaxed text-navy/55">
                        {note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone fallback */}
            <div>
              <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
                Prefer to call?
              </p>
              <a
                href="tel:+33637331926"
                className="font-serif text-base text-navy transition-colors hover:text-gold"
              >
                +33 6 37 33 19 26
              </a>
              <p className="mt-1 font-sans text-[0.8125rem] text-navy/40">
                Mon – Fri, 9am – 6pm
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
          <div className="min-h-[750px]">
            <CalEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
