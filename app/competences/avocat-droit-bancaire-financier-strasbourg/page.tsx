import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Avocat droit bancaire et financier à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit bancaire et financier à Strasbourg. Contentieux bancaire, financement, cautionnement, responsabilité bancaire, investissements. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-bancaire-financier-strasbourg",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Financement et relations bancaires",
    items: [
      "Octroi et rupture de crédits",
      "Conditions et négociation des prêts",
      "Accompagnement des difficultés de financement",
      "Restructuration de dette et négociation bancaire",
    ],
  },
  {
    title: "Fraudes et responsabilité bancaire",
    items: [
      "Fraude bancaire et fraude au président",
      "Obligation de vigilance du banquier",
      "Sécurisation des opérations financières",
      "Responsabilité des établissements bancaires",
    ],
  },
  {
    title: "Cautionnement et garanties",
    items: [
      "Caution solidaire",
      "Portée et validité des engagements",
      "Obligation de conseil et d'information",
      "Contestation des garanties personnelles",
    ],
  },
  {
    title: "Intermédiation financière",
    items: [
      "Prestataires de services d'investissement",
      "Intermédiaires en opérations de banque et services de paiement",
      "Courtiers en financement",
      "Responsabilité et obligations professionnelles",
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
      "name": "Peut-on contester un engagement de caution ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, sur trois terrains. Sur la forme d'abord : depuis la réforme du 1er janvier 2022, les règles sont regroupées dans le Code civil et les anciennes mentions manuscrites très strictes ont été simplifiées, mais un formalisme subsiste et son non-respect reste sanctionné. Sur le fond ensuite : la proportionnalité de l'engagement au regard des revenus et du patrimoine de la caution. Sur les obligations de la banque enfin : devoir de mise en garde, information annuelle, information sur le premier incident de paiement. L'analyse de l'acte est donc décisive avant toute réponse à l'établissement."
      }
    },
    {
      "@type": "Question",
      "name": "Une caution disproportionnée peut-elle être annulée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plus exactement, elle est réduite. Pour les cautionnements signés depuis le 1er janvier 2022, l'article 2300 du Code civil prévoit que si l'engagement était, lors de sa conclusion, manifestement disproportionné aux revenus et au patrimoine de la caution, il est réduit au montant qu'elle pouvait raisonnablement garantir à cette date. La disproportion s'apprécie uniquement au jour de la signature, et l'ancienne règle du « retour à meilleure fortune » a disparu : la banque ne peut plus invoquer une amélioration ultérieure de la situation. À noter : en pratique, c'est à la caution qu'il revient de prouver la disproportion, ce qui suppose de reconstituer sa situation patrimoniale à l'époque."
      }
    },
    {
      "@type": "Question",
      "name": "Quand engager la responsabilité d'une banque ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lorsqu'un manquement de l'établissement a causé un préjudice. Les fondements les plus fréquents sont le manquement au devoir de mise en garde envers un emprunteur ou une caution, le défaut de conseil ou d'information, le soutien abusif et la rupture brutale de concours. La réforme de 2021 a étendu la protection à toutes les cautions personnes physiques, mais l'intensité du devoir de mise en garde dépend toujours du profil de la caution et des informations dont elle disposait. Point essentiel : il faut démontrer un préjudice, souvent analysé comme la perte de chance de ne pas s'engager."
      }
    },
    {
      "@type": "Question",
      "name": "La banque peut-elle rompre un crédit ou un découvert du jour au lendemain ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, sauf exceptions strictes. Pour tout concours à durée indéterminée autre qu'occasionnel, l'article L. 313-12 du Code monétaire et financier impose une notification écrite et le respect d'un préavis fixé à l'octroi, qui ne peut être inférieur à soixante jours. La banque n'en est dispensée qu'en cas de comportement gravement répréhensible de l'entreprise ou de situation irrémédiablement compromise. Si elle ne respecte pas ces règles, elle engage sa responsabilité et s'expose à des dommages-intérêts pour le préjudice causé ; le rétablissement du concours, lui, reste rare en pratique. Une rupture brutale mérite donc presque toujours un examen."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se défendre face à un appel en garantie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avant toute réponse à la banque, plusieurs vérifications s'imposent : l'acte de cautionnement et ses mentions, la régularité de la procédure d'appel, et la proportionnalité de l'engagement à la date de signature. Il faut aussi contrôler le respect par la banque de ses obligations d'information : l'information annuelle de la caution (article 2302 du Code civil) et l'information sur le premier incident de paiement, dont le défaut peut entraîner la déchéance des intérêts. Répondre ou payer dans la précipitation fait souvent perdre ces moyens. La stratégie, contester, négocier une réduction ou demander des délais, se décide après cet examen."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire en cas de fraude bancaire ou d'opération non autorisée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En cas d'opération de paiement non autorisée, la banque doit en principe rembourser rapidement le client (cadre issu de la directive DSP2 et du Code monétaire et financier). Le client peut toutefois supporter une franchise, en principe jusqu'à 50 euros. Cette protection tombe en cas de fraude ou de négligence grave de sa part, par exemple la communication volontaire de ses codes : la banque peut alors refuser le remboursement. Face à une fraude au président ou un virement frauduleux, le réflexe est de signaler l'opération sans délai et par écrit, puis de réunir les preuves. L'analyse porte sur ce que la banque aurait dû détecter et sur le partage éventuel des responsabilités."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps a-t-on pour agir contre sa banque ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En matière commerciale, l'action se prescrit en principe par cinq ans (article L. 110-4 du Code de commerce). Mais le point de départ varie selon la nature de l'action, ce qui est souvent déterminant : réalisation du dommage, connaissance du manquement, ou date de l'appel en garantie. En matière de cautionnement, certaines actions suivent des logiques propres, parfois liées à l'exigibilité de la dette principale. Ces règles étant techniques et lourdes de conséquences, mieux vaut faire vérifier sa situation tôt plutôt que de laisser un délai s'écouler."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet propose-t-il des consultations en visioconférence en droit bancaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour un contentieux bancaire, une caution contestée ou une rupture de financement, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit bancaire et financier",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Contestation d'un engagement de caution",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg#caution"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Responsabilité d'un établissement bancaire",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg#responsabilite-bancaire"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contentieux d'un financement professionnel",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg#financement-professionnel"
    }
  ]
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
    { "@type": "ListItem", position: 2, name: "Compétences", item: "https://www.thalinger-avocat.fr/#competences" },
    { "@type": "ListItem", position: 3, name: "Droit bancaire et financier", item: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg" },
  ],
} as const;

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
  isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
  inLanguage: "fr",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#faq"] },
} as const;

export default function DroitBancaireFinancierPage() {
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
              Avocat en droit bancaire et financier à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Votre financement vous engage. Vérifiez à quoi exactement.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Conditions de prêt, cautions solidaires, garanties personnelles : ces engagements
              sont souvent signés dans l&apos;urgence d&apos;un besoin de financement, sans mesurer leur
              portée réelle. Or une caution mal encadrée peut engager votre patrimoine bien
              au-delà du montant initial. Une rupture de crédit décidée unilatéralement par la
              banque peut asphyxier une activité du jour au lendemain. Le cabinet intervient pour
              analyser vos engagements financiers, négocier des conditions équilibrées, et
              contester ceux qui dépassent les obligations légales d&apos;information et de conseil.
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
                La banque a des obligations envers vous. Pas seulement l&apos;inverse.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Obligation de vigilance, devoir de conseil, responsabilité en cas de soutien
                abusif ou de rupture brutale de concours : le droit bancaire protège les
                emprunteurs et les cautions autant qu&apos;il les contraint. Pourtant, peu de clients
                connaissent les leviers dont ils disposent face à un établissement financier.
                Fraude au président, opérations non autorisées, manquements des intermédiaires
                financiers : ces situations engagent la responsabilité de la banque, pas la
                vôtre. Le cabinet vous aide à identifier ces leviers et à les faire valoir, en
                négociation comme en contentieux.
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
              Exemples d&apos;intervention en droit bancaire et financier
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Cautionnements, financements, responsabilité de la banque : les rapports avec les établissements financiers exigent une lecture attentive des engagements. Les exemples suivants illustrent la démarche suivie.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="caution" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Contestation d&apos;un engagement de caution</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un dirigeant s&apos;est porté caution d&apos;un financement professionnel. La banque l&apos;appelle en garantie ; l&apos;étendue et la validité de l&apos;engagement sont en question.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse de l&apos;acte de cautionnement et des obligations d&apos;information de la banque, vérification de la proportionnalité de l&apos;engagement, construction de la défense.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Vérifier la validité de la caution et défendre le dirigeant sur les points contestables.</dd>
                </div>
              </dl>
            </details>

            <details id="responsabilite-bancaire" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Responsabilité d&apos;un établissement bancaire</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Une entreprise s&apos;estime lésée par un manquement de sa banque dans un financement ou un conseil. La responsabilité de l&apos;établissement est en jeu.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse des relations contractuelles et des obligations de la banque, évaluation du préjudice, mise en cause de l&apos;établissement et des intermédiaires concernés.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Établir le manquement éventuel et faire valoir les droits de l&apos;entreprise.</dd>
                </div>
              </dl>
            </details>

            <details id="financement-professionnel" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Contentieux d&apos;un financement professionnel</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un désaccord oppose une entreprise à son établissement de crédit sur les conditions ou l&apos;exécution d&apos;un financement.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse du contrat de financement et de son exécution, identification des points litigieux, négociation ou action contentieuse selon l&apos;intérêt du client.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifier les obligations de chacun et défendre la position de l&apos;entreprise.</dd>
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Peut-on contester un engagement de caution ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui, sur trois terrains. Sur la forme d&apos;abord : depuis la réforme du 1er janvier 2022, les règles sont regroupées dans le Code civil et les anciennes mentions manuscrites très strictes ont été simplifiées, mais un formalisme subsiste et son non-respect reste sanctionné. Sur le fond ensuite : la proportionnalité de l&apos;engagement au regard des revenus et du patrimoine de la caution. Sur les obligations de la banque enfin : devoir de mise en garde, information annuelle, information sur le premier incident de paiement. L&apos;analyse de l&apos;acte est donc décisive avant toute réponse à l&apos;établissement.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Une caution disproportionnée peut-elle être annulée ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Plus exactement, elle est réduite. Pour les cautionnements signés depuis le 1er janvier 2022, l&apos;<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044071221" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 2300 du Code civil</a> prévoit que si l&apos;engagement était, lors de sa conclusion, manifestement disproportionné aux revenus et au patrimoine de la caution, il est réduit au montant qu&apos;elle pouvait raisonnablement garantir à cette date. La disproportion s&apos;apprécie uniquement au jour de la signature, et l&apos;ancienne règle du « retour à meilleure fortune » a disparu : la banque ne peut plus invoquer une amélioration ultérieure de la situation. À noter : en pratique, c&apos;est à la caution qu&apos;il revient de prouver la disproportion, ce qui suppose de reconstituer sa situation patrimoniale à l&apos;époque.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quand engager la responsabilité d&apos;une banque ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Lorsqu&apos;un manquement de l&apos;établissement a causé un préjudice. Les fondements les plus fréquents sont le manquement au devoir de mise en garde envers un emprunteur ou une caution, le défaut de conseil ou d&apos;information, le soutien abusif et la rupture brutale de concours. La réforme de 2021 a étendu la protection à toutes les cautions personnes physiques, mais l&apos;intensité du devoir de mise en garde dépend toujours du profil de la caution et des informations dont elle disposait. Point essentiel : il faut démontrer un préjudice, souvent analysé comme la perte de chance de ne pas s&apos;engager.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">La banque peut-elle rompre un crédit ou un découvert du jour au lendemain ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Non, sauf exceptions strictes. Pour tout concours à durée indéterminée autre qu&apos;occasionnel, l&apos;<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027643288" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 313-12 du Code monétaire et financier</a> impose une notification écrite et le respect d&apos;un préavis fixé à l&apos;octroi, qui ne peut être inférieur à soixante jours. La banque n&apos;en est dispensée qu&apos;en cas de comportement gravement répréhensible de l&apos;entreprise ou de situation irrémédiablement compromise. Si elle ne respecte pas ces règles, elle engage sa responsabilité et s&apos;expose à des dommages-intérêts pour le préjudice causé ; le rétablissement du concours, lui, reste rare en pratique. Une rupture brutale mérite donc presque toujours un examen.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment se défendre face à un appel en garantie ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Avant toute réponse à la banque, plusieurs vérifications s&apos;imposent : l&apos;acte de cautionnement et ses mentions, la régularité de la procédure d&apos;appel, et la proportionnalité de l&apos;engagement à la date de signature. Il faut aussi contrôler le respect par la banque de ses obligations d&apos;information : l&apos;information annuelle de la caution (<a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006150566/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 2302 du Code civil</a>) et l&apos;information sur le premier incident de paiement, dont le défaut peut entraîner la déchéance des intérêts. Répondre ou payer dans la précipitation fait souvent perdre ces moyens. La stratégie, contester, négocier une réduction ou demander des délais, se décide après cet examen.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire en cas de fraude bancaire ou d&apos;opération non autorisée ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En cas d&apos;opération de paiement non autorisée, la banque doit en principe rembourser rapidement le client (cadre issu de la <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000031878407/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">directive DSP2</a> et du Code monétaire et financier). Le client peut toutefois supporter une franchise, en principe jusqu&apos;à 50 euros. Cette protection tombe en cas de fraude ou de négligence grave de sa part, par exemple la communication volontaire de ses codes : la banque peut alors refuser le remboursement. Face à une fraude au président ou un virement frauduleux, le réflexe est de signaler l&apos;opération sans délai et par écrit, puis de réunir les preuves. L&apos;analyse porte sur ce que la banque aurait dû détecter et sur le partage éventuel des responsabilités.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Combien de temps a-t-on pour agir contre sa banque ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En matière commerciale, l&apos;action se prescrit en principe par cinq ans (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027725867" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 110-4 du Code de commerce</a>). Mais le point de départ varie selon la nature de l&apos;action, ce qui est souvent déterminant : réalisation du dommage, connaissance du manquement, ou date de l&apos;appel en garantie. En matière de cautionnement, certaines actions suivent des logiques propres, parfois liées à l&apos;exigibilité de la dette principale. Ces règles étant techniques et lourdes de conséquences, mieux vaut faire vérifier sa situation tôt plutôt que de laisser un délai s&apos;écouler.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet propose-t-il des consultations en visioconférence en droit bancaire ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Pour un contentieux bancaire, une caution contestée ou une rupture de financement, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg.</div>
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

