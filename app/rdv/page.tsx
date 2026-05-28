import type { Metadata } from "next";
import Image from "next/image";
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

const items: { label: string; value: string; note?: string }[] = [
  { label: "Durée", value: "30 minutes" },
  { label: "Tarif", value: "Gratuit, sans engagement" },
  {
    label: "Format",
    value: "Google Meet",
    note: "Aucune installation requise. Un lien de connexion vous est envoyé par e-mail dès la confirmation. L'objectif est de comprendre votre situation, identifier les enjeux juridiques et évaluer ensemble les options disponibles. Aucun engagement de votre part à l'issue de cet échange.",
  },
];

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
                  Avocat au Barreau de Strasbourg
                </p>
              </div>
            </div>

            {/* What to expect */}
            <div>
              <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">
                Ce que vous pouvez attendre
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
                Vous préférez appeler ?
              </p>
              <a
                href="tel:+33637331926"
                className="font-serif text-base text-navy transition-colors hover:text-gold"
              >
                +33 6 37 33 19 26
              </a>
              <p className="mt-1 font-sans text-[0.8125rem] text-navy/40">
                Lun – ven, 9h – 18h
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
          <div className="min-h-[660px] overflow-hidden">
            <CalEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
