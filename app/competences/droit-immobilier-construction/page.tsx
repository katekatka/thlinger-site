import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Construction et responsabilité des constructeurs",
    items: [
      "Responsabilité des constructeurs",
      "Garanties légales et décennales",
      "Désordres et malfaçons",
      "Litiges liés aux travaux et chantiers",
    ],
  },
  {
    title: "Expertises et contentieux techniques",
    items: [
      "Expertises amiables et judiciaires",
      "Évaluation des préjudices",
      "Assistance lors des opérations d'expertise",
      "Défense des intérêts en phase contentieuse",
    ],
  },
  {
    title: "Baux et relations locatives",
    items: [
      "Rédaction de baux",
      "Négociation des relations locatives",
      "Sécurisation des engagements contractuels",
      "Gestion des obligations du bailleur et du locataire",
    ],
  },
  {
    title: "Litiges locatifs et expulsion",
    items: [
      "Impayés et inexécution contractuelle",
      "Résiliation du bail",
      "Procédures d'expulsion",
      "Défense des propriétaires et occupants",
    ],
  },
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
              Sécuriser vos activités,<br className="hidden md:block" /> vos locaux et vos investissements.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Chaque acquisition, bail commercial ou opération de construction engage durablement
              l&apos;activité de l&apos;entreprise. J&apos;accompagne dirigeants, investisseurs et
              propriétaires pour structurer leurs opérations immobilières, anticiper les risques
              juridiques et préserver la stabilité de leurs actifs professionnels.
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
                L&apos;immobilier d&apos;entreprise engage bien plus qu&apos;un actif : il conditionne
                souvent la stabilité et le développement de l&apos;activité. Un bail commercial
                mal encadré, des malfaçons, un chantier bloqué ou une expertise contestée peuvent
                rapidement ralentir un projet et créer une pression immédiate sur le dirigeant.
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
