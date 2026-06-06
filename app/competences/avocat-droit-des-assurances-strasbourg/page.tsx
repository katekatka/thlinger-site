import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Avocat droit des assurances à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit des assurances à Strasbourg. Litiges assurance, refus de garantie, expertise contradictoire, responsabilité civile, assurance construction. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-assurances-strasbourg",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Contrats et garanties d'assurance",
    items: [
      "Analyse et interprétation des contrats d'assurance",
      "Clauses d'exclusion et limitations de garantie",
      "Évaluation et détermination du préjudice",
      "Sécurisation des garanties et des indemnisations",
    ],
  },
  {
    title: "Assurance des biens et des personnes",
    items: [
      "Assurance de biens",
      "Assurance de personnes",
      "Protection des actifs et du patrimoine",
      "Gestion des sinistres et indemnisations",
    ],
  },
  {
    title: "Responsabilité et risques assurantiels",
    items: [
      "Assurance de responsabilité civile",
      "Responsabilité professionnelle et risques d'exploitation",
      "Gestion des risques et des déclarations de sinistre",
      "Défense des intérêts de l'assuré",
    ],
  },
  {
    title: "Expertises et contentieux",
    items: [
      "Expertises amiables et judiciaires",
      "Contestation des refus de garantie",
      "Négociation avec les compagnies d'assurance",
      "Contentieux en droit des assurances",
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
      "name": "Que faire si l'assureur refuse sa garantie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un refus de garantie n'est jamais automatique. La première étape consiste à vérifier le motif invoqué au regard des clauses exactes du contrat et des dispositions applicables : exclusion, déchéance, manquement à une obligation de déclaration. Beaucoup de refus reposent sur une lecture extensive ou discutable d'une clause, or une clause d'exclusion n'est valable que si elle est formelle et limitée (article L. 113-1 du Code des assurances). La bonne réponse est une contestation écrite et motivée, fondée sur les termes du contrat et les pièces du sinistre, avant d'envisager le médiateur ou le contentieux."
      }
    },
    {
      "@type": "Question",
      "name": "Quel délai pour contester un refus d'assurance ou réclamer une indemnisation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En principe, deux ans. La quasi-totalité des actions nées d'un contrat d'assurance se prescrivent par un délai biennal à compter de l'événement qui fait naître le droit à indemnisation (article L. 114-1 du Code des assurances), bien plus court que la prescription de droit commun de cinq ans. Attention : une simple correspondance par mail ou courrier ne suspend pas ce délai. Seules une lettre recommandée, la désignation d'un expert ou une assignation en justice l'interrompent. Beaucoup d'assurés perdent leurs droits parce que l'assureur a laissé le temps passer, donc mieux vaut agir vite."
      }
    },
    {
      "@type": "Question",
      "name": "L'assureur peut-il m'opposer une clause d'exclusion pour refuser sa garantie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas dans n'importe quelles conditions. Une clause d'exclusion n'est valable que si elle est formelle et limitée (article L. 113-1 du Code des assurances) : elle doit désigner précisément ce qui est exclu, sans laisser place à l'interprétation. Un motif vague comme la « négligence » de l'assuré est en pratique contestable. De plus, si le contrat ne reproduit pas les causes d'interruption de la prescription, l'assureur ne peut pas opposer le délai de deux ans après coup. Un refus fondé sur une clause discutable mérite presque toujours un examen avant d'être accepté."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il être assisté lors d'une expertise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'expertise oriente fortement l'indemnisation : c'est elle qui chiffre le préjudice retenu, et elle est pilotée par l'assureur. L'expert qu'il mandate est payé par lui. En cas de désaccord, l'assuré peut demander une expertise contradictoire et désigner son propre expert, dont les honoraires restent à sa charge sauf garantie « honoraires d'expert » prévue au contrat. Si le désaccord persiste, un troisième expert est désigné et ses conclusions s'imposent aux parties, les frais étant répartis sauf clause spécifique. Être accompagné permet de présenter ses arguments, de suivre les opérations et de sécuriser un cadre qui pèsera lourd sur l'issue."
      }
    },
    {
      "@type": "Question",
      "name": "Comment contester une indemnisation insuffisante ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En confrontant l'évaluation de l'assureur à la réalité des dommages, pièces à l'appui : devis, factures, photographies, rapports techniques. La voie efficace est d'abord la contre-expertise documentée, qui oppose une évaluation argumentée à celle de l'assureur. Si le désaccord persiste, une tierce expertise tranche, puis viennent la médiation ou le contentieux si nécessaire. Tout recours reste soumis au délai de deux ans. C'est la qualité du dossier, et non le rapport de force apparent, qui détermine le montant final."
      }
    },
    {
      "@type": "Question",
      "name": "Quels recours en cas de litige avec mon assureur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les recours sont gradués. On commence par une réclamation écrite au service client de la compagnie, puis, en cas d'échec, on peut saisir gratuitement le Médiateur de l'assurance, organisme indépendant. En parallèle, une expertise contradictoire permet d'étudier l'écart d'évaluation. Si aucune solution amiable n'aboutit, l'action judiciaire reste ouverte, toujours sous réserve du délai de deux ans. Chaque étape doit être documentée, car la solidité du dossier influence directement l'issue."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il signer la quittance ou le protocole proposé par l'assureur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas sans l'avoir lu attentivement. Une quittance ou un protocole transactionnel contient fréquemment une clause par laquelle l'assuré renonce à tout recours ultérieur. Si des dommages apparaissent plus tard, ils ne pourront plus être réclamés. Avant de signer, il est prudent de vérifier que l'indemnité proposée couvre l'intégralité du préjudice, y compris ses effets futurs. Une relecture en amont, au besoin avec l'aide d'un professionnel, évite de renoncer à des droits sans le savoir."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet propose-t-il des consultations en visioconférence en droit des assurances ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour un refus de garantie, un litige d'assurance ou une expertise contradictoire, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit des assurances",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Refus de garantie contesté",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg#refus-garantie"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Évaluation et indemnisation d'un sinistre",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg#indemnisation-sinistre"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Assistance lors d'une expertise complexe",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg#expertise"
    }
  ]
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
    { "@type": "ListItem", position: 2, name: "Compétences", item: "https://www.thalinger-avocat.fr/#competences" },
    { "@type": "ListItem", position: 3, name: "Droit des assurances", item: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg" },
  ],
} as const;

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg",
  isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
  inLanguage: "fr",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#faq"] },
} as const;

export default function DroitDesAssurancesPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Avocat en droit des assurances à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Des garanties réellement<br className="hidden md:block" /> protectrices.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Un contrat d&apos;assurance ne se révèle réellement qu&apos;au moment du sinistre.
              Le cabinet accompagne entreprises et dirigeants pour sécuriser leurs garanties,
              défendre leurs intérêts face aux compagnies d&apos;assurance et éviter qu&apos;un refus
              d&apos;indemnisation ne fragilise durablement leur activité.
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
                Sécuriser vos garanties avant le conflit.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Une entreprise pense souvent être protégée jusqu&apos;au jour où un sinistre révèle
                les limites réelles de son contrat d&apos;assurance. Clause d&apos;exclusion, désaccord
                sur l&apos;évaluation du préjudice, refus d&apos;indemnisation ou expertise contestée :
                ces situations peuvent rapidement créer une pression sur la trésorerie, ralentir les
                décisions et fragiliser la continuité de l&apos;activité. Le cabinet accompagne ses clients
                pour sécuriser leurs garanties, anticiper les risques de contentieux et défendre leurs
                intérêts face aux compagnies d&apos;assurance, dans le cadre d&apos;expertises amiables,
                judiciaires ou de litiges en droit des assurances. L&apos;objectif est clair :
                limiter l&apos;impact financier et opérationnel des situations de crise.
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
              Exemples d&apos;intervention en droit des assurances
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Refus de garantie, indemnisation, expertise : après un sinistre, l&apos;étendue réelle de la couverture se joue dans les détails du contrat. Les exemples suivants illustrent comment elle se défend.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="refus-garantie" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Refus de garantie contesté</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Après un sinistre, l&apos;assureur refuse sa garantie en invoquant une clause du contrat. L&apos;entreprise conteste la lecture qui en est faite.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse des clauses du contrat et des conditions de garantie, vérification du fondement du refus, contestation et négociation avec l&apos;assureur.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifier l&apos;étendue réelle de la garantie et faire valoir les droits de l&apos;assuré.</dd>
                </div>
              </dl>
            </details>

            <details id="indemnisation-sinistre" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Évaluation et indemnisation d&apos;un sinistre</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un sinistre a causé un préjudice important. L&apos;évaluation proposée par l&apos;assureur paraît insuffisante au regard des dommages subis.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse des préjudices, assistance lors de l&apos;expertise, contestation de l&apos;évaluation et négociation de l&apos;indemnisation.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Faire reconnaître l&apos;étendue réelle du préjudice et défendre une indemnisation cohérente.</dd>
                </div>
              </dl>
            </details>

            <details id="expertise" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Assistance lors d&apos;une expertise complexe</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Une expertise technique est ordonnée à la suite d&apos;un sinistre. Ses conclusions détermineront l&apos;indemnisation ; l&apos;assuré ne souhaite pas l&apos;aborder seul.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Préparation de l&apos;expertise, présentation des arguments et des pièces, suivi des opérations et analyse du rapport.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Veiller à ce que les intérêts de l&apos;assuré soient représentés à chaque étape de l&apos;expertise.</dd>
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire si l&apos;assureur refuse sa garantie ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Un refus de garantie n&apos;est jamais automatique. La première étape consiste à vérifier le motif invoqué au regard des clauses exactes du contrat et des dispositions applicables : exclusion, déchéance, manquement à une obligation de déclaration. Beaucoup de refus reposent sur une lecture extensive ou discutable d&apos;une clause, or une clause d&apos;exclusion n&apos;est valable que si elle est formelle et limitée (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006791984/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 113-1 du Code des assurances</a>). La bonne réponse est une contestation écrite et motivée, fondée sur les termes du contrat et les pièces du sinistre, avant d&apos;envisager le médiateur ou le contentieux.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quel délai pour contester un refus d&apos;assurance ou réclamer une indemnisation ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En principe, deux ans. La quasi-totalité des actions nées d&apos;un contrat d&apos;assurance se prescrivent par un délai biennal à compter de l&apos;événement qui fait naître le droit à indemnisation (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044607740" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 114-1 du Code des assurances</a>), bien plus court que la prescription de droit commun de cinq ans. Attention : une simple correspondance par mail ou courrier ne suspend pas ce délai. Seules une lettre recommandée, la désignation d&apos;un expert ou une assignation en justice l&apos;interrompent. Beaucoup d&apos;assurés perdent leurs droits parce que l&apos;assureur a laissé le temps passer, donc mieux vaut agir vite.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">L&apos;assureur peut-il m&apos;opposer une clause d&apos;exclusion pour refuser sa garantie ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Pas dans n&apos;importe quelles conditions. Une clause d&apos;exclusion n&apos;est valable que si elle est formelle et limitée (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006791984/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 113-1 du Code des assurances</a>) : elle doit désigner précisément ce qui est exclu, sans laisser place à l&apos;interprétation. Un motif vague comme la « négligence » de l&apos;assuré est en pratique contestable. De plus, si le contrat ne reproduit pas les causes d&apos;interruption de la prescription, l&apos;assureur ne peut pas opposer le délai de deux ans après coup. Un refus fondé sur une clause discutable mérite presque toujours un examen avant d&apos;être accepté.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Faut-il être assisté lors d&apos;une expertise ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">L&apos;expertise oriente fortement l&apos;indemnisation : c&apos;est elle qui chiffre le préjudice retenu, et elle est pilotée par l&apos;assureur. L&apos;expert qu&apos;il mandate est payé par lui. En cas de désaccord, l&apos;assuré peut demander une expertise contradictoire et désigner son propre expert, dont les honoraires restent à sa charge sauf garantie « honoraires d&apos;expert » prévue au contrat. Si le désaccord persiste, un troisième expert est désigné et ses conclusions s&apos;imposent aux parties, les frais étant répartis sauf clause spécifique. Être accompagné permet de présenter ses arguments, de suivre les opérations et de sécuriser un cadre qui pèsera lourd sur l&apos;issue.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment contester une indemnisation insuffisante ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En confrontant l&apos;évaluation de l&apos;assureur à la réalité des dommages, pièces à l&apos;appui : devis, factures, photographies, rapports techniques. La voie efficace est d&apos;abord la contre-expertise documentée, qui oppose une évaluation argumentée à celle de l&apos;assureur. Si le désaccord persiste, une tierce expertise tranche, puis viennent la médiation ou le contentieux si nécessaire. Tout recours reste soumis au délai de deux ans. C&apos;est la qualité du dossier, et non le rapport de force apparent, qui détermine le montant final.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quels recours en cas de litige avec mon assureur ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Les recours sont gradués. On commence par une réclamation écrite au service client de la compagnie, puis, en cas d&apos;échec, on peut saisir gratuitement le Médiateur de l&apos;assurance, organisme indépendant. En parallèle, une expertise contradictoire permet d&apos;étudier l&apos;écart d&apos;évaluation. Si aucune solution amiable n&apos;aboutit, l&apos;action judiciaire reste ouverte, toujours sous réserve du délai de deux ans. Chaque étape doit être documentée, car la solidité du dossier influence directement l&apos;issue.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Faut-il signer la quittance ou le protocole proposé par l&apos;assureur ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Pas sans l&apos;avoir lu attentivement. Une quittance ou un protocole transactionnel contient fréquemment une clause par laquelle l&apos;assuré renonce à tout recours ultérieur. Si des dommages apparaissent plus tard, ils ne pourront plus être réclamés. Avant de signer, il est prudent de vérifier que l&apos;indemnité proposée couvre l&apos;intégralité du préjudice, y compris ses effets futurs. Une relecture en amont, au besoin avec l&apos;aide d&apos;un professionnel, évite de renoncer à des droits sans le savoir.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet propose-t-il des consultations en visioconférence en droit des assurances ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Pour un refus de garantie, un litige d&apos;assurance ou une expertise contradictoire, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg.</div>
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
              Discutons de vos enjeux assurantiels
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

