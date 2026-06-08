import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Avocat droit commercial à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit commercial à Strasbourg. Contrats, contentieux commercial, recouvrement de créances, baux commerciaux, procédures collectives. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg",
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
        "text": "Par une stratégie graduée. On commence par une relance formelle, puis une mise en demeure par lettre recommandée, et enfin, si nécessaire, une procédure judiciaire comme l'injonction de payer. Cette voie est rapide et utile lorsque la créance est certaine, liquide et exigible : elle permet d'obtenir un titre exécutoire sans audience tant que le débiteur ne forme pas d'opposition. À noter : entre professionnels, les pénalités de retard et l'indemnité forfaitaire de 40 euros pour frais de recouvrement sont dues de plein droit dès le retard, sans relance préalable (articles L. 441-10 et D. 441-5 du Code de commerce). Le choix de la procédure dépend du montant, de la solvabilité du débiteur et de l'intérêt à préserver la relation."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les délais de paiement légaux entre professionnels ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "À défaut d'accord, le délai de droit commun est de 30 jours après réception des marchandises ou exécution de la prestation. Par accord, il peut être porté à 60 jours calendaires à compter de l'émission de la facture, ou à 45 jours fin de mois si cela est expressément prévu au contrat (article L. 441-10 du Code de commerce). Ces règles relèvent de l'ordre public : une clause prévoyant un délai supérieur aux plafonds expose les parties à des sanctions et peut être écartée, mais la portée exacte dépend du cas d'espèce. En cas de retard, les pénalités et l'indemnité forfaitaire de 40 euros s'appliquent automatiquement, sans relance."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'une rupture brutale de relation commerciale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est la fin sans préavis suffisant d'une relation commerciale établie, sanctionnée par l'article L. 442-1 II du Code de commerce. Pour être protégée, la relation doit présenter une régularité, une intensité et une stabilité telles que la victime pouvait légitimement anticiper sa continuité. L'auteur de la rupture doit respecter un préavis écrit tenant compte notamment de l'ancienneté de la relation et des usages. La rupture peut être totale ou partielle (baisse brutale des volumes). Seul le préjudice né de la brutalité, et non de la rupture elle-même, est indemnisé."
      }
    },
    {
      "@type": "Question",
      "name": "Combien peut coûter une rupture brutale de relation commerciale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'indemnisation se calcule principalement sur la marge perdue pendant le préavis manquant. La victime obtient réparation à hauteur de la marge brute, ou de la marge sur coûts variables, qu'elle aurait dégagée pendant la durée du préavis qui aurait dû lui être accordé. Selon les circonstances, l'indemnité peut aller de quelques milliers à plusieurs millions d'euros. D'autres préjudices peuvent s'ajouter : perte de valeur du fonds liée à la diminution de clientèle, coûts de licenciement du personnel dédié, investissements non amortis. À l'inverse, la victime qui n'a fait aucune démarche pour se réorganiser peut voir son indemnité réduite. La reconstitution précise de la comptabilité, souvent avec un expert, est donc déterminante."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il faire relire ses CGV par un avocat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, car des conditions générales claires et adaptées préviennent une part importante des litiges. Les CGV encadrent les points les plus sensibles d'une relation commerciale : prix, délais de paiement, pénalités de retard, réserve de propriété, limitation de responsabilité, résiliation. Une clause absente ou ambiguë se paie généralement au moment du conflit, quand il est trop tard pour la corriger. Les sécuriser en amont coûte toujours moins cher qu'un contentieux. C'est aussi l'occasion de vérifier la conformité aux règles d'ordre public, notamment sur les délais de paiement et les pénalités, dont un mauvais paramétrage contractuel crée un risque de sanction."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire quand l'entreprise traverse des difficultés financières ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agir tôt, car le cadre légal offre des outils de protection souvent méconnus, d'autant plus efficaces qu'ils sont mobilisés avant la crise ouverte. Le mandat ad hoc et la conciliation sont des procédures confidentielles permettant de négocier avec les créanciers sous l'égide d'un tiers désigné par le tribunal ; la conciliation est ouverte à l'entreprise qui n'est pas en cessation des paiements depuis plus de quarante-cinq jours. La procédure de sauvegarde protège l'entreprise qui anticipe ses difficultés avant d'être en cessation des paiements. Plus la démarche est précoce, plus les marges de négociation et de protection sont larges. Attendre réduit les options et augmente les risques pour le dirigeant."
      }
    },
    {
      "@type": "Question",
      "name": "Quand doit-on déclarer la cessation des paiements ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans les quarante-cinq jours. La cessation des paiements correspond à l'impossibilité de faire face au passif exigible avec l'actif disponible. Le dirigeant doit la déclarer au tribunal dans les quarante-cinq jours qui suivent, sauf à avoir demandé dans ce délai l'ouverture d'une conciliation. Ce point est capital : le défaut de déclaration dans les délais peut constituer une faute de gestion et engager la responsabilité du dirigeant, les sanctions concrètes dépendant toutefois du dossier. Par ailleurs, un créancier dispose en principe de deux mois à compter de la publication du jugement d'ouverture au BODACC pour déclarer sa créance. Là encore, la rapidité d'action protège."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet propose-t-il des consultations en visioconférence en droit commercial ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour une créance impayée, un contentieux contractuel ou une procédure collective, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg."
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
    { "@type": "ListItem", position: 2, name: "Compétences", item: "https://www.thalinger-avocat.fr/#competences" },
    { "@type": "ListItem", position: 3, name: "Droit commercial", item: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg" },
  ],
} as const;

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
  isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
  inLanguage: "fr",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#faq"] },
} as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
  name: "Avocat en droit commercial à Strasbourg",
  description: "Conseil et contentieux en droit commercial : contrats, litiges entre commerçants, rupture de relations commerciales, procédures collectives. Cabinet Thalinger, Strasbourg.",
  url: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
  inLanguage: "fr-FR",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
} as const;

export default function DroitCommercialPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Avocat en droit commercial à Strasbourg
            </h1>
            <h2 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Un contrat mal rédigé est invisible. Jusqu&apos;au litige.
            </h2>
            <p className="mb-4 max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Le droit commercial régit les relations entre professionnels : formation et exécution
              des contrats commerciaux, recouvrement de créances, rupture brutale de relations
              établies, procédures collectives. C&apos;est le droit qui encadre l&apos;activité
              économique et qui intervient quand elle déraille.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              CGV, CGA, CGU, contrats de prestation, baux commerciaux : ces documents encadrent
              chacune de vos relations d&apos;affaires. Tant que tout va bien, personne ne les relit.
              Mais une clause absente, une limitation ambiguë ou un délai qui ne reflète pas la
              réalité opérationnelle suffisent à transformer un désaccord en contentieux coûteux.
              Le cabinet rédige, négocie et sécurise vos contrats avec une question constante :
              que se passe-t-il quand les choses tournent mal ?
            </p>
            <ConsultationSignal />
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

            <details id="creance-impayee" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Créance impayée</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
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
            </details>

            <details id="rupture-relation" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Rupture d&apos;une relation commerciale établie</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
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
            </details>

            <details id="litige-contrat" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Litige sur un contrat commercial</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
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
            </details>

            <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45">
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

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment recouvrer une facture impayée ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Par une stratégie graduée. On commence par une relance formelle, puis une mise en demeure par lettre recommandée, et enfin, si nécessaire, une procédure judiciaire comme l&apos;injonction de payer. Cette voie est rapide et utile lorsque la créance est certaine, liquide et exigible : elle permet d&apos;obtenir un titre exécutoire sans audience tant que le débiteur ne forme pas d&apos;opposition. À noter : entre professionnels, les pénalités de retard et l&apos;indemnité forfaitaire de 40 euros pour frais de recouvrement sont dues de plein droit dès le retard, sans relance préalable (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">articles L. 441-10</a> et <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043197457" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">D. 441-5 du Code de commerce</a>). Le choix de la procédure dépend du montant, de la solvabilité du débiteur et de l&apos;intérêt à préserver la relation.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quels sont les délais de paiement légaux entre professionnels ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">À défaut d&apos;accord, le délai de droit commun est de 30 jours après réception des marchandises ou exécution de la prestation. Par accord, il peut être porté à 60 jours calendaires à compter de l&apos;émission de la facture, ou à 45 jours fin de mois si cela est expressément prévu au contrat (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 441-10 du Code de commerce</a>). Ces règles relèvent de l&apos;ordre public : une clause prévoyant un délai supérieur aux plafonds expose les parties à des sanctions et peut être écartée, mais la portée exacte dépend du cas d&apos;espèce. En cas de retard, les pénalités et l&apos;indemnité forfaitaire de 40 euros s&apos;appliquent automatiquement, sans relance.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Qu&apos;est-ce qu&apos;une rupture brutale de relation commerciale ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">C&apos;est la fin sans préavis suffisant d&apos;une relation commerciale établie, sanctionnée par l&apos;<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414278/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 442-1 II du Code de commerce</a>. Pour être protégée, la relation doit présenter une régularité, une intensité et une stabilité telles que la victime pouvait légitimement anticiper sa continuité. L&apos;auteur de la rupture doit respecter un préavis écrit tenant compte notamment de l&apos;ancienneté de la relation et des usages. La rupture peut être totale ou partielle (baisse brutale des volumes). Seul le préjudice né de la brutalité, et non de la rupture elle-même, est indemnisé.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Combien peut coûter une rupture brutale de relation commerciale ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">L&apos;indemnisation se calcule principalement sur la marge perdue pendant le préavis manquant. La victime obtient réparation à hauteur de la marge brute, ou de la marge sur coûts variables, qu&apos;elle aurait dégagée pendant la durée du préavis qui aurait dû lui être accordé. Selon les circonstances, l&apos;indemnité peut aller de quelques milliers à plusieurs millions d&apos;euros. D&apos;autres préjudices peuvent s&apos;ajouter : perte de valeur du fonds liée à la diminution de clientèle, coûts de licenciement du personnel dédié, investissements non amortis. À l&apos;inverse, la victime qui n&apos;a fait aucune démarche pour se réorganiser peut voir son indemnité réduite. La reconstitution précise de la comptabilité, souvent avec un expert, est donc déterminante.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Faut-il faire relire ses CGV par un avocat ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui, car des conditions générales claires et adaptées préviennent une part importante des litiges. Les CGV encadrent les points les plus sensibles d&apos;une relation commerciale : prix, délais de paiement, pénalités de retard, réserve de propriété, limitation de responsabilité, résiliation. Une clause absente ou ambiguë se paie généralement au moment du conflit, quand il est trop tard pour la corriger. Les sécuriser en amont coûte toujours moins cher qu&apos;un contentieux. C&apos;est aussi l&apos;occasion de vérifier la conformité aux règles d&apos;ordre public, notamment sur les délais de paiement et les pénalités, dont un mauvais paramétrage contractuel crée un risque de sanction.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire quand l&apos;entreprise traverse des difficultés financières ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Agir tôt, car le cadre légal offre des outils de protection souvent méconnus, d&apos;autant plus efficaces qu&apos;ils sont mobilisés avant la crise ouverte. Le mandat ad hoc et la conciliation sont des procédures confidentielles permettant de négocier avec les créanciers sous l&apos;égide d&apos;un tiers désigné par le tribunal ; la conciliation est ouverte à l&apos;entreprise qui n&apos;est pas en cessation des paiements depuis plus de quarante-cinq jours. La procédure de sauvegarde protège l&apos;entreprise qui anticipe ses difficultés avant d&apos;être en cessation des paiements. Plus la démarche est précoce, plus les marges de négociation et de protection sont larges. Attendre réduit les options et augmente les risques pour le dirigeant.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quand doit-on déclarer la cessation des paiements ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Dans les quarante-cinq jours. La cessation des paiements correspond à l&apos;impossibilité de faire face au passif exigible avec l&apos;actif disponible. Le dirigeant doit la déclarer au tribunal dans les quarante-cinq jours qui suivent, sauf à avoir demandé dans ce délai l&apos;ouverture d&apos;une conciliation. Ce point est capital : le défaut de déclaration dans les délais peut constituer une faute de gestion et engager la responsabilité du dirigeant, les sanctions concrètes dépendant toutefois du dossier. Par ailleurs, un créancier dispose en principe de deux mois à compter de la publication du jugement d&apos;ouverture au BODACC pour déclarer sa créance. Là encore, la rapidité d&apos;action protège.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet propose-t-il des consultations en visioconférence en droit commercial ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Pour une créance impayée, un contentieux contractuel ou une procédure collective, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg.</div>
            </details>
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

