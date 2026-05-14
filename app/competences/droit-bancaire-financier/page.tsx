import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Financement et relations bancaires",
    items: [
      "Octroi et rupture de crédits",
      "Conditions et négociation des prêts",
      "Gestion des relations avec les établissements bancaires",
      "Accompagnement des difficultés de financement",
    ],
  },
  {
    title: "Fraudes et responsabilité bancaire",
    items: [
      "Fraude bancaire et fraude au président",
      "Obligation de vigilance du banquier",
      "Sécurisation des opérations financières",
      "Responsabilité des établissements bancaires",
    ],
  },
  {
    title: "Cautionnement et garanties",
    items: [
      "Caution solidaire",
      "Portée et validité des engagements",
      "Obligation de conseil et d'information",
      "Contestation des garanties personnelles",
    ],
  },
  {
    title: "Intermédiaires et services financiers",
    items: [
      "Prestataires de services d'investissement",
      "Courtiers en financement",
      "Intermédiaires en opérations de financement",
      "Responsabilité des acteurs financiers",
    ],
  },
  {
    title: "Contentieux bancaire",
    items: [
      "Litiges liés aux financements",
      "Responsabilité contractuelle bancaire",
      "Défense des entreprises et dirigeants",
      "Contentieux en droit bancaire et financier",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitBancaireFinancierPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit Bancaire &amp; Financier
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Préserver votre capacité<br className="hidden md:block" /> à décider.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Le financement d&apos;une entreprise ne devrait jamais devenir une perte de contrôle.
              Pourtant, une ligne de crédit suspendue, une garantie personnelle mal négociée ou
              une relation bancaire qui se dégrade peuvent rapidement fragiliser la trésorerie,
              ralentir les décisions et créer une pression constante sur le dirigeant.
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
                Anticiper les tensions avant qu&apos;elles ne bloquent votre activité.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Une entreprise peut être fragilisée bien avant l&apos;apparition de véritables
                difficultés financières. Une relation bancaire qui se tend, un financement remis
                en cause ou une garantie personnelle insuffisamment encadrée suffisent parfois à
                créer une incertitude permanente pour le dirigeant et à ralentir le développement
                de l&apos;activité. Dans ces situations, le droit bancaire et financier devient un
                outil de protection et d&apos;anticipation. J&apos;accompagne les entreprises pour
                sécuriser leurs financements, analyser les risques liés aux engagements bancaires
                et intervenir dans les situations de contentieux ou de négociation avec les
                établissements financiers. L&apos;objectif reste le même : protéger l&apos;entreprise
                contre les déséquilibres financiers et préserver sa capacité d&apos;action à long terme.
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

          <InterventionCategoryGrid categories={interventions} />
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
              Discutons de vos enjeux bancaires et financiers
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
