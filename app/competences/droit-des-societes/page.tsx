import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "CrÃ©ation de sociÃ©tÃ©s",
    items: [
      "CrÃ©ation de sociÃ©tÃ©s civiles et commerciales",
      "SARL, SAS et SCI",
      "Choix de la structure juridique",
      "RÃ©daction des statuts",
    ],
  },
  {
    title: "Modifications statutaires",
    items: [
      "Changement de siÃ¨ge social",
      "Modification de l'objet social",
      "Augmentation et rÃ©duction de capital",
      "Mise Ã  jour des statuts",
    ],
  },
  {
    title: "Pactes d'associÃ©s",
    items: [
      "RÃ©daction de pactes d'associÃ©s",
      "Gouvernance et rÃ©partition des pouvoirs",
      "Clauses de sortie et de prÃ©emption",
      "Protection des associÃ©s minoritaires",
    ],
  },
  {
    title: "AssemblÃ©es gÃ©nÃ©rales",
    items: [
      "Organisation des assemblÃ©es gÃ©nÃ©rales",
      "Approbation des comptes",
      "SecrÃ©tariat juridique annuel",
      "ProcÃ¨s-verbaux et formalitÃ©s",
    ],
  },
  {
    title: "Cession de parts sociales",
    items: [
      "Audit et sÃ©curisation des opÃ©rations",
      "Garantie d'actif et de passif",
      "Accompagnement dans les nÃ©gociations",
    ],
  },
  {
    title: "Contentieux sociÃ©taires",
    items: [
      "Gestion des conflits entre associÃ©s",
      "Blocages de gouvernance",
    ],
  },
  {
    title: "Transformation de sociÃ©tÃ©s",
    items: [
      "Transformation de forme sociale",
      "Passage de SARL Ã  SAS",
      "RÃ©organisation juridique de l'entreprise",
      "Adaptation de la gouvernance",
    ],
  },
  {
    title: "Transmission et restructuration patrimoniale",
    items: [
      "Transmission d'entreprises familiales",
      "Pacte Dutreil",
      "Anticipation patrimoniale du dirigeant",
      "Organisation de la succession entrepreneuriale",
      "RÃ©organisation capitalistique et gouvernance familiale",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function DroitDesSocietesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit des SociÃ©tÃ©s
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Structurer ce qui dÃ©termine le fonctionnement de votre entreprise.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Statuts, pacte d&apos;associÃ©s, gouvernance : ces documents sont rarement revisitÃ©s
              aprÃ¨s leur rÃ©daction. Pourtant, ce sont eux qui dÃ©terminent qui dÃ©cide, qui contrÃ´le
              et comment les situations de blocage se rÃ©solvent. Le cabinet analyse le cadre dans
              lequel vous souhaitez entreprendre : forme sociale, rÃ©partition des pouvoirs, droits
              des associÃ©s, modalitÃ©s de prise de dÃ©cision. L&apos;objectif est de construire une
              architecture juridique rÃ©ellement adaptÃ©e Ã  votre activitÃ© et Ã  vos objectifs. De la
              crÃ©ation de sociÃ©tÃ© aux Ã©volutions futures, comme l&apos;arrivÃ©e de nouveaux associÃ©s,
              l&apos;augmentation d&apos;activitÃ© ou une acquisition, chaque structure est conÃ§ue
              pour accompagner votre dÃ©veloppement, pas seulement pour remplir une obligation lÃ©gale.
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
                Quand la relation entre associÃ©s devient un obstacle.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Abus de majoritÃ©, non-respect d&apos;un pacte d&apos;associÃ©s, situations de
                blocage : les conflits entre associÃ©s peuvent paralyser une entreprise et mettre
                en pÃ©ril ce que vous avez construit. Le cabinet intervient pour analyser la
                situation, identifier les leviers juridiques Ã  votre disposition et protÃ©ger vos
                intÃ©rÃªts. Que la solution passe par la nÃ©gociation ou par le contentieux,
                l&apos;objectif reste le mÃªme : dÃ©bloquer la situation et prÃ©server la continuitÃ©
                de votre activitÃ©.
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
              Discutons de vos enjeux en droit des sociÃ©tÃ©s
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

