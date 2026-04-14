import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  "Baux commerciaux",
  "Acquisition et cession immobilière",
  "SCI et montages patrimoniaux",
  "Droit de la construction",
  "Contentieux immobilier",
  "Copropriété d'entreprise",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitImmobilierPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit Immobilier
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Baux commerciaux et immobilier<br className="hidden md:block" /> d&apos;entreprise : sécuriser vos<br className="hidden md:block" /> activités et vos locaux.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Droit immobilier à Strasbourg : chaque décision est structurée et sécurisée
              en cohérence avec votre stratégie d&apos;entreprise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXTE — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Acquérir, louer, construire en Alsace, sans mauvaise surprise.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                L&apos;immobilier d&apos;entreprise concentre des enjeux financiers élevés
                et des cadres juridiques superposés : urbanisme, fiscalité, construction,
                baux commerciaux. Un bail mal négocié vous engage pour plusieurs années.
                Une clause de travaux imprécise fragilise une acquisition. Et lorsque les
                opérations se tendent, l&apos;issue se joue dans la rigueur des actes
                structurés en amont.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. INTERVENTIONS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Interventions
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {interventions.map((item) => (
              <AnimatedItem key={item}>
                <div>
                  <AnimatedLine className="mb-5 w-full" />
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{item}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
              style={{ color: "#ffffff" }}
            >
              Discutons de votre projet immobilier
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
