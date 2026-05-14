import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Relations individuelles de travail",
    items: [
      "Rédaction et sécurisation des contrats de travail",
      "Conventions de forfait jours",
      "Temps de travail et heures supplémentaires",
      "Paie et exécution du contrat de travail",
      "Droit disciplinaire et harcèlement",
    ],
  },
  {
    title: "Licenciement",
    items: [
      "Licenciement disciplinaire",
      "Licenciement économique",
      "Salariés protégés",
      "Rupture du contrat de travail",
    ],
  },
  {
    title: "Contentieux prud'homal",
    items: [
      "Contestation de licenciement",
      "Litiges employeur–salarié",
      "Contentieux liés à l'exécution du contrat de travail",
    ],
  },
  {
    title: "Négociation collective",
    items: [
      "Élections du CSE",
      "Négociation collective",
      "Accords collectifs et règlement intérieur",
    ],
  },
  {
    title: "Restructuration",
    items: [
      "Restructuration sociale",
      "Réorganisation d'entreprise",
      "Accompagnement social des difficultés de l'entreprise",
    ],
  },
  {
    title: "Droit de la sécurité sociale",
    items: [
      "Contrôle et redressement URSSAF",
      "Cotisations sociales et assiette des cotisations",
      "Faute inexcusable de l'employeur",
    ],
  },
  {
    title: "Emploi transfrontalier",
    items: [
      "Contrats de travail transfrontaliers",
      "Mobilité internationale des salariés",
      "Détachement de salariés",
    ],
  },
  {
    title: "Droit pénal du travail",
    items: [
      "Responsabilité pénale de l'employeur",
      "Infractions au droit du travail",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitDuTravailPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit Social
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Une sécurité juridique.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Je fournis un conseil proactif : structurer correctement les contrats dès le
              premier jour, accompagner les réorganisations avant leur annonce, gérer les
              ruptures avec précision.
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
                Gérer vos équipes sans créer de risque juridique.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Le droit du travail en France est complexe et en constante évolution. Chaque
                embauche, chaque licenciement, chaque réorganisation porte des implications
                juridiques. Ajoutez l&apos;emploi transfrontalier, et la complexité se multiplie.
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
              Discutons de vos enjeux en droit du travail
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
