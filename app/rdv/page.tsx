import type { Metadata } from "next";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Prendre rendez-vous | THALINGER Avocat — Strasbourg",
  description:
    "Réservez un premier échange de 30 minutes avec Maître Christian THALINGER, avocat au Barreau de Strasbourg. Gratuit, sans engagement, en visioconférence.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/rdv",
    languages: {
      fr: "https://www.thalinger-avocat.fr/rdv",
      en: "https://www.thalinger-avocat.fr/en/rdv",
    },
  },
};

export default function RdvPage() {
  return (
    <section className="bg-white py-24 md:py-32" style={{ paddingTop: "7rem" }}>
      <div className="mx-auto max-w-[1200px] px-6">

        {/* ── Header ── */}
        <div className="mb-16">
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
            Premier échange
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3.6rem)] font-normal leading-tight text-navy">
            Prendre rendez-vous.
          </h1>
        </div>

        {/* ── Split layout ── */}
        <div className="grid gap-16 md:grid-cols-[380px_1fr] md:gap-x-20">

          {/* Left — context */}
          <div className="flex flex-col gap-10">

            {/* What to expect */}
            <div>
              <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
                Ce que vous pouvez attendre
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Durée", value: "30 minutes" },
                  { label: "Tarif", value: "Gratuit, sans engagement" },
                  { label: "Format", value: "Visioconférence" },
                  { label: "Réponse", value: "Confirmation immédiate par e-mail" },
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
                Objectif
              </p>
              <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                Comprendre votre situation, identifier les enjeux juridiques et évaluer
                ensemble les options disponibles. Aucun engagement de votre part à l&apos;issue
                de cet échange.
              </p>
            </div>

            {/* Back link */}
            <Link
              href="/#contact"
              className="mt-auto font-sans text-sm text-navy/40 transition-colors hover:text-navy"
            >
              ← Retour au contact
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
