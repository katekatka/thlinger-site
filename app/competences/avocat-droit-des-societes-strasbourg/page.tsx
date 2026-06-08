import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Avocat droit des sociétés à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit des sociétés à Strasbourg. Création, statuts, pacte d'associés, cession de parts, gouvernance, contentieux sociétaire. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-societes-strasbourg",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Création de sociétés",
    items: [
      "Création de sociétés civiles et commerciales",
      "SARL, SAS et SCI",
      "Choix de la structure juridique",
      "Rédaction des statuts",
    ],
  },
  {
    title: "Modifications statutaires",
    items: [
      "Changement de siège social",
      "Modification de l'objet social",
      "Augmentation et réduction de capital",
      "Mise à jour des statuts",
    ],
  },
  {
    title: "Pactes d'associés",
    items: [
      "Rédaction de pactes d'associés",
      "Gouvernance et répartition des pouvoirs",
      "Clauses de sortie et de préemption",
      "Protection des associés minoritaires",
    ],
  },
  {
    title: "Assemblées générales",
    items: [
      "Organisation des assemblées générales",
      "Approbation des comptes",
      "Secrétariat juridique annuel",
      "Procès-verbaux et formalités",
    ],
  },
  {
    title: "Cession de parts sociales",
    items: [
      "Audit et sécurisation des opérations",
      "Garantie d'actif et de passif",
      "Accompagnement dans les négociations",
    ],
  },
  {
    title: "Contentieux sociétaires",
    items: [
      "Gestion des conflits entre associés",
      "Blocages de gouvernance",
    ],
  },
  {
    title: "Transformation de sociétés",
    items: [
      "Transformation de forme sociale",
      "Passage de SARL à SAS",
      "Réorganisation juridique de l'entreprise",
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
      "Réorganisation capitalistique et gouvernance familiale",
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
      "name": "Quand rédiger un pacte d'associés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Idéalement dès la création de la société, ou avant l'entrée d'un nouvel associé. Le pacte organise les rapports entre associés sur des points que les statuts ne traitent pas toujours : gouvernance, conditions de cession des titres, clauses de sortie, de préemption ou d'agrément, protection des minoritaires. Contrairement aux statuts, qui sont publics et déposés au greffe, le pacte reste confidentiel et ne lie que ses signataires, ce qui permet d'y régler des équilibres sensibles. Sa violation engage la responsabilité contractuelle de son auteur. Bien rédigé, il prévient une part importante des conflits et organise à l'avance la sortie d'un associé ou la résolution d'un blocage, au moment où les relations sont encore bonnes."
      }
    },
    {
      "@type": "Question",
      "name": "Statuts ou pacte d'associés : quelle différence ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les deux organisent la société, mais sur des plans distincts. Les statuts sont le document fondateur obligatoire, déposé et public : ils fixent la forme sociale, l'objet, le capital, les organes de direction et les règles opposables à tous. Le pacte d'associés est un contrat facultatif et confidentiel, qui ne lie que ses signataires : il affine la gouvernance et organise les relations entre associés (sortie, préemption, droit de suite, engagements de conservation). Point essentiel : le pacte complète les statuts, mais ne les remplace pas. Il ne peut ni les contredire ni écarter une règle impérative, et sa violation n'annule pas une décision sociale conforme aux statuts ; elle ouvre droit à des dommages-intérêts. C'est la cohérence entre les deux documents qui sécurise réellement l'entreprise."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire en cas de blocage entre associés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plusieurs leviers existent, à actionner selon les statuts et le pacte. On privilégie d'abord les voies amiables : médiation, révision de la gouvernance, ou sortie négociée d'un associé via les clauses du pacte. Le recours judiciaire intervient en dernier ressort, par exemple pour faire désigner un administrateur provisoire lorsque la société est paralysée, ou pour demander la dissolution en cas de mésentente rendant impossible la poursuite de l'activité. Le choix dépend des circonstances et des objectifs de chacun. Plus le pacte a anticipé ces situations (clauses de sortie, de rachat, mécanismes de déblocage), plus la résolution est rapide et maîtrisée."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un abus de majorité et comment le contester ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est une décision d'assemblée prise contrairement à l'intérêt social et dans l'unique dessein de favoriser les associés majoritaires au détriment des minoritaires. Sa caractérisation suppose deux conditions cumulatives : la contrariété à l'intérêt de la société et la rupture intentionnelle d'égalité entre associés. Exemple classique : la mise en réserve systématique des bénéfices sans justification économique, privant durablement les minoritaires de dividendes. Deux sanctions sont possibles : l'annulation de la délibération et l'octroi de dommages-intérêts. La Cour de cassation a précisé en 2025 que l'action en nullité peut être dirigée contre la seule société lorsqu'aucune indemnisation n'est demandée aux majoritaires. Il existe aussi, en miroir, un abus de minorité, plus rare, lorsqu'un minoritaire bloque une décision essentielle à la survie de la société."
      }
    },
    {
      "@type": "Question",
      "name": "Comment sécuriser la cession de mon entreprise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En structurant l'opération en amont. Cela passe par un audit (juridique, comptable, fiscal, social), le choix du montage adapté, la rédaction précise des actes et, surtout, la négociation d'une garantie d'actif et de passif. L'objectif est de comprendre chaque engagement avant de signer, côté cédant comme côté repreneur. Les points sensibles sont nombreux : déclarations du vendeur, conditions suspensives, clauses de non-concurrence, modalités de paiement du prix. Une opération bien préparée évite que des passifs nés avant la cession ne resurgissent après, au détriment de l'une des parties."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'une garantie d'actif et de passif ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est la clause qui protège le repreneur contre les mauvaises surprises postérieures à la cession. Par la garantie d'actif et de passif (GAP), le cédant s'engage à l'indemniser si un passif né avant la vente se révèle après (redressement fiscal, contentieux prud'homal, litige fournisseur), ou si un actif déclaré se révèle surévalué. Plusieurs paramètres se négocient : le plafond, la durée, une éventuelle dégressivité, et les seuils de déclenchement. Ces éléments relèvent des usages de marché et non de règles fixes : ils varient fortement selon le rapport de force, le secteur et le niveau de risque. Pour sécuriser le paiement, une partie du prix peut être placée sous séquestre ou garantie par une caution bancaire. La précision rédactionnelle de la clause est déterminante : une formulation vague offre une protection illusoire."
      }
    },
    {
      "@type": "Question",
      "name": "Comment transmettre son entreprise familiale en limitant la fiscalité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le principal outil est le pacte Dutreil, qui permet, sous conditions, une exonération de 75 % de la valeur des titres transmis pour le calcul des droits de donation ou de succession (article 787 B du Code général des impôts). Le dispositif repose sur des engagements de conservation des titres, collectif puis individuel, et sur l'exercice d'une fonction de direction. Il est réservé aux sociétés exerçant une activité opérationnelle et exclut la gestion de patrimoine. Des évolutions du dispositif ont été débattues récemment (notamment un allongement des durées d'engagement et l'exclusion de certains actifs non professionnels), mais leur portée exacte doit être vérifiée dans la version du texte applicable au jour de l'opération. Compte tenu de la complexité et du caractère évolutif de ce régime, un accompagnement sur mesure est indispensable."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet propose-t-il des consultations en visioconférence en droit des sociétés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour un conflit entre associés, une cession d'entreprise ou une structuration de société, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit des sociétés",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Conflit entre associés",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg#conflit-associes"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cession d'entreprise",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg#cession-entreprise"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Structuration à la création",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg#structuration-creation"
    }
  ]
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
    { "@type": "ListItem", position: 2, name: "Compétences", item: "https://www.thalinger-avocat.fr/#competences" },
    { "@type": "ListItem", position: 3, name: "Droit des sociétés", item: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg" },
  ],
} as const;

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
  isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
  inLanguage: "fr",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#faq"] },
} as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
  name: "Avocat en droit des sociétés à Strasbourg",
  description: "Accompagnement en droit des sociétés : création de société, pactes d'associés, cessions de parts, gouvernance, restructurations. Cabinet Thalinger, Strasbourg.",
  url: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
  inLanguage: "fr-FR",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
} as const;

export default function DroitDesSocietesPage() {
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
              Avocat en droit des sociétés à Strasbourg
            </h1>
            <h2 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Structurer ce qui détermine le fonctionnement de votre entreprise.
            </h2>
            <p className="mb-4 max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Le droit des sociétés organise la vie juridique de l&apos;entreprise : choix de la
              forme sociale, rédaction des statuts et pactes d&apos;associés, cessions de titres,
              gouvernance, restructurations et transmission. C&apos;est la structure sur laquelle
              repose chaque décision entrepreneuriale.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Statuts, pacte d&apos;associés, gouvernance : ces documents sont rarement revisités
              après leur rédaction. Pourtant, ce sont eux qui déterminent qui décide, qui contrôle
              et comment les situations de blocage se résolvent. Le cabinet analyse le cadre dans
              lequel vous souhaitez entreprendre : forme sociale, répartition des pouvoirs, droits
              des associés, modalités de prise de décision. L&apos;objectif est de construire une
              architecture juridique réellement adaptée à votre activité et à vos objectifs. De la
              création de société aux évolutions futures, comme l&apos;arrivée de nouveaux associés,
              l&apos;augmentation d&apos;activité ou une acquisition, chaque structure est conçue
              pour accompagner votre développement, pas seulement pour remplir une obligation légale.
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
                Quand la relation entre associés devient un obstacle.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Abus de majorité, non-respect d&apos;un pacte d&apos;associés, situations de
                blocage : les conflits entre associés peuvent paralyser une entreprise et mettre
                en péril ce que vous avez construit. Le cabinet intervient pour analyser la
                situation, identifier les leviers juridiques à votre disposition et protéger vos
                intérêts. Que la solution passe par la négociation ou par le contentieux,
                l&apos;objectif reste le même : débloquer la situation et préserver la continuité
                de votre activité.
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
              Exemples d&apos;intervention en droit des sociétés
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              La vie d&apos;une société soulève des décisions à fort enjeu : structuration, gouvernance, transmission. Les exemples suivants illustrent comment ces situations s&apos;analysent et se structurent.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="conflit-associes" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Conflit entre associés</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Trois associés, un blocage durable. Les décisions ne passent plus en assemblée. L&apos;entreprise poursuit son activité, mais sa direction est paralysée.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse du pacte d&apos;associés et de la gouvernance, identification des leviers de déblocage, structuration des options : révision du pacte, gouvernance opérationnelle, ou sortie négociée de l&apos;associé minoritaire.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Rétablir une prise de décision fonctionnelle tout en préservant la continuité de l&apos;activité et les intérêts de chaque partie.</dd>
                </div>
              </dl>
            </details>

            <details id="cession-entreprise" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Cession d&apos;entreprise</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un dirigeant envisage de céder son entreprise. L&apos;opération engage son patrimoine et l&apos;avenir de l&apos;activité ; les implications doivent être comprises avant tout engagement.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Structuration juridique de l&apos;opération, sécurisation des garanties (notamment la garantie d&apos;actif et de passif), rédaction et négociation des actes de cession.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Sécuriser la transmission et clarifier les engagements pris par le cédant comme par le repreneur.</dd>
                </div>
              </dl>
            </details>

            <details id="structuration-creation" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Structuration à la création</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Des associés fondateurs lancent leur société. Le choix de la forme sociale et la répartition des pouvoirs détermineront le fonctionnement futur de l&apos;entreprise.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Conseil sur la forme sociale adaptée, rédaction des statuts et du pacte d&apos;associés, organisation de la gouvernance et des opérations sur le capital.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Poser un cadre clair dès le départ pour prévenir les blocages et sécuriser les décisions stratégiques à venir.</dd>
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quand rédiger un pacte d&apos;associés ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Idéalement dès la création de la société, ou avant l&apos;entrée d&apos;un nouvel associé. Le pacte organise les rapports entre associés sur des points que les statuts ne traitent pas toujours : gouvernance, conditions de cession des titres, clauses de sortie, de préemption ou d&apos;agrément, protection des minoritaires. Contrairement aux statuts, qui sont publics et déposés au greffe, le pacte reste confidentiel et ne lie que ses signataires, ce qui permet d&apos;y régler des équilibres sensibles. Sa violation engage la responsabilité contractuelle de son auteur. Bien rédigé, il prévient une part importante des conflits et organise à l&apos;avance la sortie d&apos;un associé ou la résolution d&apos;un blocage, au moment où les relations sont encore bonnes.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Statuts ou pacte d&apos;associés : quelle différence ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Les deux organisent la société, mais sur des plans distincts. Les statuts sont le document fondateur obligatoire, déposé et public : ils fixent la forme sociale, l&apos;objet, le capital, les organes de direction et les règles opposables à tous. Le pacte d&apos;associés est un contrat facultatif et confidentiel, qui ne lie que ses signataires : il affine la gouvernance et organise les relations entre associés (sortie, préemption, droit de suite, engagements de conservation). Point essentiel : le pacte complète les statuts, mais ne les remplace pas. Il ne peut ni les contredire ni écarter une règle impérative, et sa violation n&apos;annule pas une décision sociale conforme aux statuts ; elle ouvre droit à des dommages-intérêts. C&apos;est la cohérence entre les deux documents qui sécurise réellement l&apos;entreprise.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire en cas de blocage entre associés ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Plusieurs leviers existent, à actionner selon les statuts et le pacte. On privilégie d&apos;abord les voies amiables : médiation, révision de la gouvernance, ou sortie négociée d&apos;un associé via les clauses du pacte. Le recours judiciaire intervient en dernier ressort, par exemple pour faire désigner un administrateur provisoire lorsque la société est paralysée, ou pour demander la dissolution en cas de mésentente rendant impossible la poursuite de l&apos;activité. Le choix dépend des circonstances et des objectifs de chacun. Plus le pacte a anticipé ces situations (clauses de sortie, de rachat, mécanismes de déblocage), plus la résolution est rapide et maîtrisée.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Qu&apos;est-ce qu&apos;un abus de majorité et comment le contester ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">C&apos;est une décision d&apos;assemblée prise contrairement à l&apos;intérêt social et dans l&apos;unique dessein de favoriser les associés majoritaires au détriment des minoritaires. Sa caractérisation suppose deux conditions cumulatives : la contrariété à l&apos;intérêt de la société et la rupture intentionnelle d&apos;égalité entre associés. Exemple classique : la mise en réserve systématique des bénéfices sans justification économique, privant durablement les minoritaires de dividendes. Deux sanctions sont possibles : l&apos;annulation de la délibération et l&apos;octroi de dommages-intérêts. La Cour de cassation a précisé en 2025 que l&apos;action en nullité peut être dirigée contre la seule société lorsqu&apos;aucune indemnisation n&apos;est demandée aux majoritaires. Il existe aussi, en miroir, un abus de minorité, plus rare, lorsqu&apos;un minoritaire bloque une décision essentielle à la survie de la société.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment sécuriser la cession de mon entreprise ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En structurant l&apos;opération en amont. Cela passe par un audit (juridique, comptable, fiscal, social), le choix du montage adapté, la rédaction précise des actes et, surtout, la négociation d&apos;une garantie d&apos;actif et de passif. L&apos;objectif est de comprendre chaque engagement avant de signer, côté cédant comme côté repreneur. Les points sensibles sont nombreux : déclarations du vendeur, conditions suspensives, clauses de non-concurrence, modalités de paiement du prix. Une opération bien préparée évite que des passifs nés avant la cession ne resurgissent après, au détriment de l&apos;une des parties.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Qu&apos;est-ce qu&apos;une garantie d&apos;actif et de passif ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">C&apos;est la clause qui protège le repreneur contre les mauvaises surprises postérieures à la cession. Par la garantie d&apos;actif et de passif (GAP), le cédant s&apos;engage à l&apos;indemniser si un passif né avant la vente se révèle après (redressement fiscal, contentieux prud&apos;homal, litige fournisseur), ou si un actif déclaré se révèle surévalué. Plusieurs paramètres se négocient : le plafond, la durée, une éventuelle dégressivité, et les seuils de déclenchement. Ces éléments relèvent des usages de marché et non de règles fixes : ils varient fortement selon le rapport de force, le secteur et le niveau de risque. Pour sécuriser le paiement, une partie du prix peut être placée sous séquestre ou garantie par une caution bancaire. La précision rédactionnelle de la clause est déterminante : une formulation vague offre une protection illusoire.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment transmettre son entreprise familiale en limitant la fiscalité ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Le principal outil est le pacte Dutreil, qui permet, sous conditions, une exonération de 75 % de la valeur des titres transmis pour le calcul des droits de donation ou de succession (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047623071" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 787 B du Code général des impôts</a>). Le dispositif repose sur des engagements de conservation des titres, collectif puis individuel, et sur l&apos;exercice d&apos;une fonction de direction. Il est réservé aux sociétés exerçant une activité opérationnelle et exclut la gestion de patrimoine. Des évolutions du dispositif ont été débattues récemment (notamment un allongement des durées d&apos;engagement et l&apos;exclusion de certains actifs non professionnels), mais leur portée exacte doit être vérifiée dans la version du texte applicable au jour de l&apos;opération. Compte tenu de la complexité et du caractère évolutif de ce régime, un accompagnement sur mesure est indispensable.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet propose-t-il des consultations en visioconférence en droit des sociétés ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Pour un conflit entre associés, une cession d&apos;entreprise ou une structuration de société, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg.</div>
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
              Discutons de vos enjeux en droit des sociétés
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

