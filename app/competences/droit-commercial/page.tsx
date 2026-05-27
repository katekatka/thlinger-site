import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Conditions gÃ©nÃ©rales de vente CGV",
    items: [
      "Encadrement des relations commerciales",
      "Clauses de responsabilitÃ© et de paiement",
      "ConformitÃ© des pratiques commerciales",
      "SÃ©curisation des Ã©changes avec les clients",
    ],
  },
  {
    title: "Conditions gÃ©nÃ©rales d'achat CGA",
    items: [
      "Relations fournisseurs",
      "Gestion des risques d'approvisionnement",
      "SÃ©curisation des engagements commerciaux",
    ],
  },
  {
    title: "Conditions gÃ©nÃ©rales d'utilisation CGU",
    items: [
      "Services et plateformes numÃ©riques",
      "Protection des contenus",
      "Encadrement des usages en ligne",
      "ResponsabilitÃ© des opÃ©rateurs",
    ],
  },
  {
    title: "Contrats commerciaux",
    items: [
      "Contrats de prestation et de distribution",
      "SÃ©curisation des partenariats",
      "Gestion des risques contractuels",
    ],
  },
  {
    title: "Vente de fonds de commerce",
    items: [
      "Acquisition et cession de fonds de commerce",
      "Audit et sÃ©curisation des opÃ©rations",
      "RÃ©daction et nÃ©gociation d'actes de cession",
      "Baux commerciaux et transfert d'exploitation",
      "Contentieux post-acquisition",
      "Transmission et reprise d'entreprise",
    ],
  },
  {
    title: "Baux commerciaux",
    items: [
      "RÃ©daction de baux commerciaux",
      "Convention d'occupation prÃ©caire et baux dÃ©rogatoires",
      "NÃ©gociation et renouvellement des baux",
      "RÃ©vision des loyers commerciaux",
      "Litiges locatifs",
    ],
  },
  {
    title: "Recouvrement et impayÃ©s",
    items: [
      "Injonctions de payer",
      "Mesures conservatoires",
      "ExÃ©cution forcÃ©e",
      "Gestion des retards de paiement",
    ],
  },
  {
    title: "Litiges commerciaux",
    items: [
      "ResponsabilitÃ© contractuelle",
      "Conflits entre partenaires commerciaux",
      "Rupture des relations d'affaires",
      "DÃ©fense des intÃ©rÃªts de l'entreprise",
    ],
  },
  {
    title: "Concurrence dÃ©loyale",
    items: [
      "DÃ©sorganisation commerciale",
      "Parasitisme Ã©conomique",
      "Atteinte Ã  l'image et Ã  la rÃ©putation",
      "Protection des intÃ©rÃªts stratÃ©giques",
    ],
  },
  {
    title: "DifficultÃ©s des entreprises",
    items: [
      "RÃ©organisation financiÃ¨re et opÃ©rationnelle",
      "NÃ©gociation avec les crÃ©anciers",
      "Accompagnement des dirigeants en pÃ©riode de crise",
      "Assistance devant les juridictions",
    ],
  },
  {
    title: "Mandat ad hoc et conciliation",
    items: [
      "Recherche de solutions amiables",
      "Restructuration des dettes",
      "NÃ©gociation confidentielle avec les crÃ©anciers",
      "PrÃ©servation de l'activitÃ© de l'entreprise",
    ],
  },
  {
    title: "ProcÃ©dures collectives",
    items: [
      "Accompagnement des dirigeants",
      "DÃ©claration de crÃ©ances",
      "Gestion des relations avec les organes de la procÃ©dure",
      "PrÃ©servation des actifs et de l'activitÃ©",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function DroitCommercialPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit Commercial
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Un contrat mal rÃ©digÃ© est invisible. Jusqu&apos;au litige.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              CGV, CGA, CGU, contrats de prestation, baux commerciaux : ces documents encadrent
              chacune de vos relations d&apos;affaires. Tant que tout va bien, personne ne les relit.
              Mais une clause absente, une limitation ambiguÃ« ou un dÃ©lai qui ne reflÃ¨te pas la
              rÃ©alitÃ© opÃ©rationnelle suffisent Ã  transformer un dÃ©saccord en contentieux coÃ»teux.
              Le cabinet rÃ©dige, nÃ©gocie et sÃ©curise vos contrats avec une question constante :
              que se passe-t-il quand les choses tournent mal ?
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
                En droit commercial, le conflit fait partie du jeu. La maniÃ¨re de le gÃ©rer, non.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                ImpayÃ©s, rupture brutale de relations d&apos;affaires, concurrence dÃ©loyale, conflit
                entre partenaires commerciaux : ces situations mettent en jeu votre trÃ©sorerie,
                votre rÃ©putation et parfois la continuitÃ© de votre activitÃ©. Le cabinet intervient
                pour recouvrer vos crÃ©ances, dÃ©fendre vos intÃ©rÃªts en contentieux et protÃ©ger vos
                positions stratÃ©giques face aux pratiques dÃ©loyales.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. TEXTE â€” blanc */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                Les difficultÃ©s financiÃ¨res n&apos;attendent pas que vous soyez prÃªt.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Quand la trÃ©sorerie se tend, chaque semaine compte. Le cadre lÃ©gal offre des outils
                de protection souvent mÃ©connus : mandat ad hoc, conciliation, procÃ©dure de
                sauvegarde. Ces dispositifs permettent de nÃ©gocier avec les crÃ©anciers de maniÃ¨re
                confidentielle et de prÃ©server l&apos;activitÃ© avant que la situation ne devienne
                irrÃ©versible. Le cabinet accompagne les dirigeants Ã  chaque Ã©tape, de la
                restructuration amiable Ã  la procÃ©dure collective, pour protÃ©ger ce qui peut
                l&apos;Ãªtre et prÃ©parer la suite.
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
              Discutons de vos enjeux commerciaux
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

