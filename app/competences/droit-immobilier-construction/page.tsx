import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Construction et responsabilitÃ© des constructeurs",
    items: [
      "ResponsabilitÃ© des constructeurs",
      "Garanties lÃ©gales et dÃ©cennales",
      "DÃ©sordres et malfaÃ§ons",
      "Litiges liÃ©s aux travaux et chantiers",
    ],
  },
  {
    title: "Expertises et contentieux techniques",
    items: [
      "Expertises amiables et judiciaires",
      "Ã‰valuation des prÃ©judices",
      "Assistance lors des opÃ©rations d'expertise",
      "DÃ©fense des intÃ©rÃªts en phase contentieuse",
    ],
  },
  {
    title: "Baux et relations locatives",
    items: [
      "RÃ©daction de baux",
      "NÃ©gociation des relations locatives",
      "SÃ©curisation des engagements contractuels",
      "Gestion des obligations du bailleur et du locataire",
    ],
  },
  {
    title: "Litiges locatifs et expulsion",
    items: [
      "ImpayÃ©s et inexÃ©cution contractuelle",
      "RÃ©siliation du bail",
      "ProcÃ©dures d'expulsion",
      "DÃ©fense des propriÃ©taires",
    ],
  },
  {
    title: "Transactions immobiliÃ¨res",
    items: [
      "Vente en l'Ã©tat futur d'achÃ¨vement (VEFA)",
      "Acquisition et vente d'immeubles",
      "SÃ©curisation des opÃ©rations immobiliÃ¨res",
      "Garanties et obligations du vendeur",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Construire, c&apos;est aussi construire un cadre juridique.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              MalfaÃ§ons, dÃ©sordres, garanties non mobilisÃ©es : en matiÃ¨re de construction, les
              litiges se rÃ©vÃ¨lent souvent aprÃ¨s la rÃ©ception des travaux, quand les dÃ©lais pour
              agir sont dÃ©jÃ  engagÃ©s. Le cabinet intervient pour faire valoir la responsabilitÃ©
              des constructeurs, activer les garanties lÃ©gales et dÃ©cennales, et vous assister
              lors des expertises amiables ou judiciaires. Que vous soyez maÃ®tre d&apos;ouvrage
              ou professionnel du bÃ¢timent, chaque Ã©tape du chantier crÃ©e des obligations
              qu&apos;il vaut mieux anticiper que dÃ©couvrir en contentieux.
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
                Un bail mal nÃ©gociÃ© se paie pendant toute sa durÃ©e.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Les clauses de bail signÃ©es aujourd&apos;hui dÃ©terminent vos droits et vos
                contraintes pour des annÃ©es. Le cabinet sÃ©curise la rÃ©daction de vos baux,
                nÃ©gocie les conditions locatives et veille Ã  l&apos;Ã©quilibre des obligations
                entre bailleur et locataire. En cas d&apos;impayÃ©s, d&apos;inexÃ©cution ou de
                litige sur la rÃ©siliation, le cabinet assure votre dÃ©fense et conduit les
                procÃ©dures nÃ©cessaires Ã  la protection de vos intÃ©rÃªts.
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

