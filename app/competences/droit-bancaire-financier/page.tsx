import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Financement et relations bancaires",
    items: [
      "Octroi et rupture de crÃ©dits",
      "Conditions et nÃ©gociation des prÃªts",
      "Accompagnement des difficultÃ©s de financement",
      "Restructuration de dette et nÃ©gociation bancaire",
    ],
  },
  {
    title: "Fraudes et responsabilitÃ© bancaire",
    items: [
      "Fraude bancaire et fraude au prÃ©sident",
      "Obligation de vigilance du banquier",
      "SÃ©curisation des opÃ©rations financiÃ¨res",
      "ResponsabilitÃ© des Ã©tablissements bancaires",
    ],
  },
  {
    title: "Cautionnement et garanties",
    items: [
      "Caution solidaire",
      "PortÃ©e et validitÃ© des engagements",
      "Obligation de conseil et d'information",
      "Contestation des garanties personnelles",
    ],
  },
  {
    title: "IntermÃ©diation financiÃ¨re",
    items: [
      "Prestataires de services d'investissement",
      "IntermÃ©diaires en opÃ©rations de banque et services de paiement",
      "Courtiers en financement",
      "ResponsabilitÃ© et obligations professionnelles",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Votre financement vous engage. VÃ©rifiez Ã  quoi exactement.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Conditions de prÃªt, cautions solidaires, garanties personnelles : ces engagements
              sont souvent signÃ©s dans l&apos;urgence d&apos;un besoin de financement, sans mesurer leur
              portÃ©e rÃ©elle. Or une caution mal encadrÃ©e peut engager votre patrimoine bien
              au-delÃ  du montant initial. Une rupture de crÃ©dit dÃ©cidÃ©e unilatÃ©ralement par la
              banque peut asphyxier une activitÃ© du jour au lendemain. Le cabinet intervient pour
              analyser vos engagements financiers, nÃ©gocier des conditions Ã©quilibrÃ©es, et
              contester ceux qui dÃ©passent les obligations lÃ©gales d&apos;information et de conseil.
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
                La banque a des obligations envers vous. Pas seulement l&apos;inverse.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Obligation de vigilance, devoir de conseil, responsabilitÃ© en cas de soutien
                abusif ou de rupture brutale de concours : le droit bancaire protÃ¨ge les
                emprunteurs et les cautions autant qu&apos;il les contraint. Pourtant, peu de clients
                connaissent les leviers dont ils disposent face Ã  un Ã©tablissement financier.
                Fraude au prÃ©sident, opÃ©rations non autorisÃ©es, manquements des intermÃ©diaires
                financiers : ces situations engagent la responsabilitÃ© de la banque, pas la
                vÃ´tre. Le cabinet vous aide Ã  identifier ces leviers et Ã  les faire valoir, en
                nÃ©gociation comme en contentieux.
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

