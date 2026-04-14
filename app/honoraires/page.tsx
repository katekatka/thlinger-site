import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

// ─── Data ──────────────────────────────────────────────────────────────────────

const principes = [
  {
    title: "Forfait",
    text: "Pour les missions à périmètre défini : création de société, rédaction de contrat, audit juridique ciblé. Vous connaissez le prix avant de commencer.",
  },
  {
    title: "Taux horaire",
    text: "Pour les missions de conseil ou de contentieux dont l'étendue évolue. Le taux est communiqué dès le départ, avec un suivi régulier des heures engagées.",
  },
  {
    title: "Résultat",
    text: "Honoraires complémentaires correspondant à un pourcentage des gains procurés ou des économies faites grâce à l'action de l'avocat.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HonorairesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Honoraires
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              La clarté commence<br className="hidden md:block" /> par le prix.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Les honoraires sont librement fixés entre les parties en fonction de la complexité du dossier.
              Cette question est abordée dès le premier rendez-vous, en toute transparence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PRINCIPES — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Un cadre clair avant chaque mission.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-[1.85] text-white/60 md:text-[1.0625rem]">
              Avant de commencer, nous définissons ensemble le périmètre de l&apos;intervention,
              le mode de facturation, et une estimation du coût.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {principes.map((p) => (
              <AnimatedItem key={p.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <h3 className="mb-4 font-serif text-lg font-normal text-navy">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                    {p.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. CONVENTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Convention d&apos;honoraires
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Conformément aux règles de la profession, une convention d&apos;honoraires est
                systématiquement établie avant toute intervention. Elle détaille le périmètre,
                le mode de calcul et les conditions de facturation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. PREMIER ÉCHANGE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Premier échange
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Le premier contact est sans engagement de votre part et a pour objectif de comprendre
                votre situation et d&apos;évaluer si je peux vous aider efficacement. Les modalités
                sont précisées lors de la prise de rendez-vous.
              </p>
              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                style={{ color: "#ffffff" }}
              >
                Parlons de votre situation
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 5H15M15 5L11 1M15 5L11 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
