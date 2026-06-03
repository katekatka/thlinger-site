import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

export const metadata: Metadata = {
  title: "Avocat droit commercial à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit commercial à Strasbourg. Contrats, contentieux commercial, recouvrement de créances, baux commerciaux, procédures collectives. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-commercial",
    },
  },
};

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


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment recouvrer une facture impayée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Par une stratégie graduée : relance formelle, mise en demeure, puis procédures judiciaires comme l'injonction de payer. Le choix dépend du montant, du débiteur et de l'intérêt à préserver la relation."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'une rupture brutale de relation commerciale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La fin sans préavis suffisant d'une relation commerciale établie peut ouvrir droit à réparation. L'appréciation dépend de l'ancienneté et des circonstances de la relation."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il faire relire ses CGV par un avocat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des conditions générales claires et adaptées préviennent une part importante des litiges. Mieux vaut les sécuriser avant le différend qu'après."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit commercial",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Créance impayée",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg#creance-impayee"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rupture d'une relation commerciale établie",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg#rupture-relation"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Litige sur un contrat commercial",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg#litige-contrat"
    }
  ]
} as const;

export default function DroitCommercialPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Avocat en droit commercial à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Un contrat mal rédigé est invisible. Jusqu&apos;au litige.
            </p>
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

      {/* EXEMPLES D&apos;INTERVENTION */}
      <section id="cas-concrets" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-4">
            <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Exemples d&apos;intervention en droit commercial
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Contrats, impayés, ruptures de relation : les litiges commerciaux engagent la trésorerie comme les relations d&apos;affaires. Les exemples suivants illustrent la démarche suivie.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <div id="creance-impayee" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Créance impayée</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Une entreprise attend le règlement d&apos;une facture importante depuis plusieurs mois. Les relances sont restées sans effet.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Stratégie pré-contentieuse, mise en oeuvre des procédures de recouvrement adaptées (notamment l&apos;injonction de payer), négociation d&apos;un échéancier lorsque la relation commerciale peut être préservée.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Obtenir le règlement de la créance tout en pesant l&apos;intérêt à maintenir, ou non, la relation commerciale.</dd>
                </div>
              </dl>
            </div>

            <div id="rupture-relation" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Rupture d&apos;une relation commerciale établie</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un partenaire commercial met fin brutalement à une relation suivie depuis plusieurs années. L&apos;entreprise s&apos;interroge sur ses droits et son préjudice.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse de la relation et des conditions de la rupture, évaluation du préjudice, mise en demeure et, si nécessaire, action en réparation.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Faire valoir les droits liés à la rupture et clarifier les options entre négociation et contentieux.</dd>
                </div>
              </dl>
            </div>

            <div id="litige-contrat" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Litige sur un contrat commercial</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un désaccord naît sur l&apos;exécution d&apos;un contrat (CGV, contrat de distribution, prestation). Chaque partie campe sur sa lecture du texte.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse des clauses et des obligations de chacun, identification des points de fragilité, construction d&apos;une position et représentation en contentieux si la voie amiable échoue.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifier la portée des engagements contractuels et défendre la position de l&apos;entreprise.</dd>
                </div>
              </dl>
            </div>

            <p className="mt-10 border-t border-navy/10 pt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45 italic">
              Les situations présentées sont des exemples illustratifs et anonymisés, reconstitués à partir de problématiques fréquemment rencontrées. Elles ne décrivent aucun dossier identifiable et ne constituent ni une garantie ni une prévision de résultat. Chaque affaire est différente et s&apos;apprécie selon ses circonstances propres.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* FAQ */}
      <section id="faq" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Questions fréquentes
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Comment recouvrer une facture impayée ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Par une stratégie graduée : relance formelle, mise en demeure, puis procédures judiciaires comme l&apos;injonction de payer. Le choix dépend du montant, du débiteur et de l&apos;intérêt à préserver la relation.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Qu&apos;est-ce qu&apos;une rupture brutale de relation commerciale ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">La fin sans préavis suffisant d&apos;une relation commerciale établie peut ouvrir droit à réparation. L&apos;appréciation dépend de l&apos;ancienneté et des circonstances de la relation.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Faut-il faire relire ses CGV par un avocat ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Des conditions générales claires et adaptées préviennent une part importante des litiges. Mieux vaut les sécuriser avant le différend qu&apos;après.</p>
            </div>
          </div>
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

