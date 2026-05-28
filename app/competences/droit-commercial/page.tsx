import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Conditions générales de vente CGV",
    items: [
      "Encadrement des relations commerciales",
      "Clauses de responsabilité et de paiement",
      "Conformité des pratiques commerciales",
      "Sécurisation des échanges avec les clients",
    ],
  },
  {
    title: "Conditions générales d'achat CGA",
    items: [
      "Relations fournisseurs",
      "Gestion des risques d'approvisionnement",
      "Sécurisation des engagements commerciaux",
    ],
  },
  {
    title: "Conditions générales d'utilisation CGU",
    items: [
      "Services et plateformes numériques",
      "Protection des contenus",
      "Encadrement des usages en ligne",
      "Responsabilité des opérateurs",
    ],
  },
  {
    title: "Contrats commerciaux",
    items: [
      "Contrats de prestation et de distribution",
      "Sécurisation des partenariats",
      "Gestion des risques contractuels",
    ],
  },
  {
    title: "Vente de fonds de commerce",
    items: [
      "Acquisition et cession de fonds de commerce",
      "Audit et sécurisation des opérations",
      "Rédaction et négociation d'actes de cession",
      "Baux commerciaux et transfert d'exploitation",
      "Contentieux post-acquisition",
      "Transmission et reprise d'entreprise",
    ],
  },
  {
    title: "Baux commerciaux",
    items: [
      "Rédaction de baux commerciaux",
      "Convention d'occupation précaire et baux dérogatoires",
      "Négociation et renouvellement des baux",
      "Révision des loyers commerciaux",
      "Litiges locatifs",
    ],
  },
  {
    title: "Recouvrement et impayés",
    items: [
      "Injonctions de payer",
      "Mesures conservatoires",
      "Exécution forcée",
      "Gestion des retards de paiement",
    ],
  },
  {
    title: "Litiges commerciaux",
    items: [
      "Responsabilité contractuelle",
      "Conflits entre partenaires commerciaux",
      "Rupture des relations d'affaires",
      "Défense des intérêts de l'entreprise",
    ],
  },
  {
    title: "Concurrence déloyale",
    items: [
      "Désorganisation commerciale",
      "Parasitisme économique",
      "Atteinte à l'image et à la réputation",
      "Protection des intérêts stratégiques",
    ],
  },
  {
    title: "Difficultés des entreprises",
    items: [
      "Réorganisation financière et opérationnelle",
      "Négociation avec les créanciers",
      "Accompagnement des dirigeants en période de crise",
      "Assistance devant les juridictions",
    ],
  },
  {
    title: "Mandat ad hoc et conciliation",
    items: [
      "Recherche de solutions amiables",
      "Restructuration des dettes",
      "Négociation confidentielle avec les créanciers",
      "Préservation de l'activité de l'entreprise",
    ],
  },
  {
    title: "Procédures collectives",
    items: [
      "Accompagnement des dirigeants",
      "Déclaration de créances",
      "Gestion des relations avec les organes de la procédure",
      "Préservation des actifs et de l'activité",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

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
              Un contrat mal rédigé est invisible. Jusqu&apos;au litige.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              CGV, CGA, CGU, contrats de prestation, baux commerciaux : ces documents encadrent
              chacune de vos relations d&apos;affaires. Tant que tout va bien, personne ne les relit.
              Mais une clause absente, une limitation ambiguë ou un délai qui ne reflète pas la
              réalité opérationnelle suffisent à transformer un désaccord en contentieux coûteux.
              Le cabinet rédige, négocie et sécurise vos contrats avec une question constante :
              que se passe-t-il quand les choses tournent mal ?
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
                En droit commercial, le conflit fait partie du jeu. La manière de le gérer, non.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Impayés, rupture brutale de relations d&apos;affaires, concurrence déloyale, conflit
                entre partenaires commerciaux : ces situations mettent en jeu votre trésorerie,
                votre réputation et parfois la continuité de votre activité. Le cabinet intervient
                pour recouvrer vos créances, défendre vos intérêts en contentieux et protéger vos
                positions stratégiques face aux pratiques déloyales.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. TEXTE — blanc */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                Les difficultés financières n&apos;attendent pas que vous soyez prêt.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Quand la trésorerie se tend, chaque semaine compte. Le cadre légal offre des outils
                de protection souvent méconnus : mandat ad hoc, conciliation, procédure de
                sauvegarde. Ces dispositifs permettent de négocier avec les créanciers de manière
                confidentielle et de préserver l&apos;activité avant que la situation ne devienne
                irréversible. Le cabinet accompagne les dirigeants à chaque étape, de la
                restructuration amiable à la procédure collective, pour protéger ce qui peut
                l&apos;être et préparer la suite.
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

