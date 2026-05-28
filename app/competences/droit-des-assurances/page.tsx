import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Contrats et garanties d'assurance",
    items: [
      "Analyse et interprétation des contrats d'assurance",
      "Clauses d'exclusion et limitations de garantie",
      "Évaluation et détermination du préjudice",
      "Sécurisation des garanties et des indemnisations",
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
    title: "Responsabilité et risques assurantiels",
    items: [
      "Assurance de responsabilité civile",
      "Responsabilité professionnelle et risques d'exploitation",
      "Gestion des risques et des déclarations de sinistre",
      "Défense des intérêts de l'assuré",
    ],
  },
  {
    title: "Expertises et contentieux",
    items: [
      "Expertises amiables et judiciaires",
      "Contestation des refus de garantie",
      "Négociation avec les compagnies d'assurance",
      "Contentieux en droit des assurances",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

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
              Des garanties réellement<br className="hidden md:block" /> protectrices.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Un contrat d&apos;assurance ne se révèle réellement qu&apos;au moment du sinistre.
              Le cabinet accompagne entreprises et dirigeants pour sécuriser leurs garanties,
              défendre leurs intérêts face aux compagnies d&apos;assurance et éviter qu&apos;un refus
              d&apos;indemnisation ne fragilise durablement leur activité.
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
                Sécuriser vos garanties avant le conflit.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Une entreprise pense souvent être protégée jusqu&apos;au jour où un sinistre révèle
                les limites réelles de son contrat d&apos;assurance. Clause d&apos;exclusion, désaccord
                sur l&apos;évaluation du préjudice, refus d&apos;indemnisation ou expertise contestée :
                ces situations peuvent rapidement créer une pression sur la trésorerie, ralentir les
                décisions et fragiliser la continuité de l&apos;activité. Le cabinet accompagne ses clients
                pour sécuriser leurs garanties, anticiper les risques de contentieux et défendre leurs
                intérêts face aux compagnies d&apos;assurance, dans le cadre d&apos;expertises amiables,
                judiciaires ou de litiges en droit des assurances. L&apos;objectif est clair :
                limiter l&apos;impact financier et opérationnel des situations de crise.
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

