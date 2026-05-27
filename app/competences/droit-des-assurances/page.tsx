import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Contrats et garanties d'assurance",
    items: [
      "Analyse et interprÃ©tation des contrats d'assurance",
      "Clauses d'exclusion et limitations de garantie",
      "Ã‰valuation et dÃ©termination du prÃ©judice",
      "SÃ©curisation des garanties et des indemnisations",
    ],
  },
  {
    title: "Assurance des biens et des personnes",
    items: [
      "Assurance de biens",
      "Assurance de personnes",
      "Protection des actifs et du patrimoine",
      "Gestion des sinistres et indemnisations",
    ],
  },
  {
    title: "ResponsabilitÃ© et risques assurantiels",
    items: [
      "Assurance de responsabilitÃ© civile",
      "ResponsabilitÃ© professionnelle et risques d'exploitation",
      "Gestion des risques et des dÃ©clarations de sinistre",
      "DÃ©fense des intÃ©rÃªts de l'assurÃ©",
    ],
  },
  {
    title: "Expertises et contentieux",
    items: [
      "Expertises amiables et judiciaires",
      "Contestation des refus de garantie",
      "NÃ©gociation avec les compagnies d'assurance",
      "Contentieux en droit des assurances",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function DroitDesAssurancesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit des Assurances
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Des garanties rÃ©ellement<br className="hidden md:block" /> protectrices.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Un contrat d&apos;assurance ne se rÃ©vÃ¨le rÃ©ellement qu&apos;au moment du sinistre.
              Le cabinet accompagne entreprises et dirigeants pour sÃ©curiser leurs garanties,
              dÃ©fendre leurs intÃ©rÃªts face aux compagnies d&apos;assurance et Ã©viter qu&apos;un refus
              d&apos;indemnisation ne fragilise durablement leur activitÃ©.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXTE â€” navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                SÃ©curiser vos garanties avant le conflit.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Une entreprise pense souvent Ãªtre protÃ©gÃ©e jusqu&apos;au jour oÃ¹ un sinistre rÃ©vÃ¨le
                les limites rÃ©elles de son contrat d&apos;assurance. Clause d&apos;exclusion, dÃ©saccord
                sur l&apos;Ã©valuation du prÃ©judice, refus d&apos;indemnisation ou expertise contestÃ©e :
                ces situations peuvent rapidement crÃ©er une pression sur la trÃ©sorerie, ralentir les
                dÃ©cisions et fragiliser la continuitÃ© de l&apos;activitÃ©. Le cabinet accompagne ses clients
                pour sÃ©curiser leurs garanties, anticiper les risques de contentieux et dÃ©fendre leurs
                intÃ©rÃªts face aux compagnies d&apos;assurance, dans le cadre d&apos;expertises amiables,
                judiciaires ou de litiges en droit des assurances. L&apos;objectif est clair :
                limiter l&apos;impact financier et opÃ©rationnel des situations de crise.
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
              Discutons de vos enjeux assurantiels
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

