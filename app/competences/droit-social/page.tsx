import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Relations individuelles de travail",
    items: [
      "RÃ©daction et sÃ©curisation des contrats de travail",
      "Conventions de forfait jours",
      "Temps de travail et heures supplÃ©mentaires",
      "ExÃ©cution du contrat de travail et paie",
      "Droit disciplinaire",
      "HarcÃ¨lement et discrimination",
    ],
  },
  {
    title: "Rupture du contrat de travail",
    items: [
      "Licenciement disciplinaire",
      "Licenciement Ã©conomique",
      "SalariÃ©s protÃ©gÃ©s",
      "Rupture conventionnelle, prise d'acte et rÃ©siliation judiciaire",
      "Contestation de licenciement",
      "Contentieux liÃ©s Ã  la rupture du contrat de travail",
    ],
  },
  {
    title: "Relations collectives",
    items: [
      "Ã‰lections du CSE",
      "NÃ©gociation collective",
      "Accords collectifs et rÃ¨glement intÃ©rieur",
      "Relations avec les reprÃ©sentants du personnel",
    ],
  },
  {
    title: "Restructuration et rÃ©organisation sociale",
    items: [
      "RÃ©organisation d'entreprise",
      "Restructuration sociale",
      "Plans de sauvegarde de l'emploi (PSE)",
      "Licenciements Ã©conomiques collectifs",
      "Consultation du CSE",
      "Accompagnement des transformations de l'entreprise",
    ],
  },
  {
    title: "Droit de la sÃ©curitÃ© sociale",
    items: [
      "ContrÃ´le et redressement URSSAF",
      "Cotisations sociales et assiette des cotisations",
      "Faute inexcusable de l'employeur",
    ],
  },
  {
    title: "Droit pÃ©nal du travail",
    items: [
      "ResponsabilitÃ© pÃ©nale de l'employeur",
      "Infractions au droit du travail",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Chaque dÃ©cision RH est une dÃ©cision juridique.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Un contrat mal rÃ©digÃ©, une procÃ©dure de licenciement bÃ¢clÃ©e, un accord collectif
              imprÃ©cis : en droit du travail, l&apos;erreur se chiffre. Le cabinet accompagne les
              dirigeants et les responsables RH dans la sÃ©curisation de leurs pratiques au
              quotidien et dans la dÃ©fense de leurs intÃ©rÃªts devant le conseil de prud&apos;hommes.
              L&apos;objectif : anticiper les litiges plutÃ´t que les subir, et faire du droit
              social un levier de gestion, pas une source de risques.
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
                Un contrÃ´le URSSAF ne prÃ©vient pas. Votre prÃ©paration, si.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Un redressement de cotisations peut reprÃ©senter des montants significatifs et
                fragiliser durablement votre trÃ©sorerie. Le cabinet intervient en amont pour
                sÃ©curiser vos pratiques en matiÃ¨re de cotisations sociales, et en aval pour
                contester les redressements et vous reprÃ©senter dans les procÃ©dures de recours.
                En matiÃ¨re de faute inexcusable de l&apos;employeur, les consÃ©quences vont
                au-delÃ  de la majoration des indemnitÃ©s : elles peuvent engager la responsabilitÃ©
                pÃ©nale du dirigeant en cas de manquement aux obligations de sÃ©curitÃ©.
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

