import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Avocat droit du travail à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit social et droit du travail à Strasbourg. Licenciement, rupture conventionnelle, contentieux prud'homal, relations collectives, sécurité sociale. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Relations individuelles de travail",
    items: [
      "Rédaction et sécurisation des contrats de travail",
      "Conventions de forfait jours",
      "Temps de travail et heures supplémentaires",
      "Exécution du contrat de travail et paie",
      "Droit disciplinaire",
      "Harcèlement et discrimination",
    ],
  },
  {
    title: "Rupture du contrat de travail",
    items: [
      "Licenciement disciplinaire",
      "Licenciement économique",
      "Salariés protégés",
      "Rupture conventionnelle, prise d'acte et résiliation judiciaire",
      "Contestation de licenciement",
      "Contentieux liés à la rupture du contrat de travail",
    ],
  },
  {
    title: "Relations collectives",
    items: [
      "Élections du CSE",
      "Négociation collective",
      "Accords collectifs et règlement intérieur",
      "Relations avec les représentants du personnel",
    ],
  },
  {
    title: "Restructuration et réorganisation sociale",
    items: [
      "Réorganisation d'entreprise",
      "Restructuration sociale",
      "Plans de sauvegarde de l'emploi (PSE)",
      "Licenciements économiques collectifs",
      "Consultation du CSE",
      "Accompagnement des transformations de l'entreprise",
    ],
  },
  {
    title: "Droit de la sécurité sociale",
    items: [
      "Contrôle et redressement URSSAF",
      "Cotisations sociales et assiette des cotisations",
      "Faute inexcusable de l'employeur",
    ],
  },
  {
    title: "Droit pénal du travail",
    items: [
      "Responsabilité pénale de l'employeur",
      "Infractions au droit du travail",
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
      "name": "Que faire face à une saisine prud'homale ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Réagir vite et de façon méthodique. La première étape est d'analyser la procédure suivie et le motif invoqué, puis de rassembler les pièces (contrat, bulletins, échanges, dossier) et de construire une défense structurée. Depuis les réformes de procédure, l'échange de conclusions et de pièces avant l'audience est central : une préparation écrite solide est souvent déterminante pour l'issue. Côté salarié, l'action doit être engagée dans le délai de prescription applicable ; côté employeur, la rigueur de la préparation pèse lourd. Le réflexe est de faire analyser le dossier dès la réception de la convocation ou de la requête."
      }
    },
    {
      "@type": "Question",
      "name": "Quel délai pour contester un licenciement aux prud'hommes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En principe, douze mois. Le salarié dispose de douze mois à compter de la notification du licenciement pour le contester devant le Conseil de prud'hommes (article L. 1471-1 du Code du travail). Le point de départ est la date de première présentation de la lettre recommandée. Attention : les autres délais diffèrent, trois ans pour les rappels de salaire (article L. 3245-1), deux ans dans certains cas liés à l'exécution ou à la rupture du contrat. Ce délai de contestation, autrefois de cinq ans, a été fortement réduit, ce qui rend la réactivité décisive. La règle pratique : faire analyser la situation dès la réception de la lettre."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on revenir sur une rupture conventionnelle signée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dans deux cas distincts. D'abord pendant le délai de rétractation : chaque partie dispose de quinze jours calendaires après la signature pour revenir sur son accord, sans avoir à se justifier. Ensuite, après homologation, en cas de litige : le salarié peut saisir le Conseil de prud'hommes dans un délai de douze mois à compter de l'homologation, notamment pour vice du consentement (pressions, menaces) ou non-respect des délais. En cas d'annulation, la rupture produit en principe les effets d'un licenciement sans cause réelle et sérieuse. Toute clause par laquelle les parties renonceraient à contester est réputée non écrite."
      }
    },
    {
      "@type": "Question",
      "name": "Comment sécuriser une procédure de licenciement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Côté employeur, la sécurisation repose sur la justification du motif, le respect scrupuleux de la procédure (convocation à entretien préalable, délais légaux, notification motivée) et la documentation du dossier. En matière disciplinaire, attention au délai de l'article L. 1332-4 : l'employeur ne peut engager de poursuites au-delà de deux mois après la connaissance des faits fautifs. Ce délai vise les faits fautifs, et non les autres motifs comme l'insuffisance professionnelle. Côté salarié, il s'agit d'analyser la régularité de la procédure et le sérieux du motif pour évaluer les chances de contestation. Le cabinet accompagne les deux parties selon leurs intérêts."
      }
    },
    {
      "@type": "Question",
      "name": "Combien peut rapporter un licenciement sans cause réelle et sérieuse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'indemnisation est encadrée par un barème. Lorsque le licenciement est jugé sans cause réelle et sérieuse, l'indemnité est fixée selon le barème dit « Macron » (article L. 1235-3 du Code du travail), qui prévoit un plancher et un plafond en mois de salaire, selon l'ancienneté du salarié et la taille de l'entreprise. Ce barème s'impose en principe au juge, et la jurisprudence récente l'a globalement validé. Il est écarté dans les cas de nullité du licenciement (harcèlement, discrimination, violation d'une liberté fondamentale), où s'applique un minimum de six mois de salaire, sans plafond. L'enjeu est donc d'abord de qualifier la nature du licenciement."
      }
    },
    {
      "@type": "Question",
      "name": "Comment sécuriser une réorganisation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En anticipant les implications sociales avant la décision, pas après. Cela suppose de choisir la bonne procédure, d'établir un calendrier réaliste et d'organiser le dialogue avec le CSE et les représentants du personnel. Selon l'ampleur du projet, les obligations diffèrent : un plan de sauvegarde de l'emploi est obligatoire en cas de licenciement économique d'au moins dix salariés sur trente jours dans une entreprise d'au moins cinquante salariés. Le risque principal, pour les PSE, est l'annulation ou la suspension de la procédure par le juge administratif. La sécurité juridique se construit en amont de l'annonce."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on contester un redressement URSSAF ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, mais la procédure est strictement encadrée et le recours amiable est un préalable obligatoire. À compter de la réception de la mise en demeure, l'entreprise dispose de deux mois pour saisir la Commission de recours amiable (CRA) de l'URSSAF. Si la CRA rejette la contestation, expressément ou par son silence gardé pendant deux mois (rejet implicite), un nouveau délai de deux mois s'ouvre pour saisir le pôle social du tribunal judiciaire. La contestation peut porter sur le fond du redressement comme sur la régularité de la procédure de contrôle, un vice de procédure pouvant entraîner la nullité. Manquer un de ces délais rend le redressement définitif."
      }
    },
    {
      "@type": "Question",
      "name": "Que risque l'employeur en cas de faute inexcusable ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les conséquences vont au-delà de l'indemnisation classique. La faute inexcusable est reconnue lorsque l'employeur avait ou aurait dû avoir conscience d'un danger sans prendre les mesures nécessaires pour en préserver le salarié. Elle entraîne une majoration de la rente de la victime et la réparation de préjudices complémentaires. Une responsabilité pénale peut s'y ajouter, mais elle n'est pas automatique : elle suppose une infraction caractérisée (par exemple des blessures involontaires) et peut alors viser personnellement le dirigeant, là où la faute inexcusable engage l'employeur. La prévention, évaluation des risques et traçabilité des mesures de sécurité, reste le meilleur levier de défense."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet accompagne-t-il aussi bien les employeurs que les salariés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Le cabinet intervient pour les employeurs (sécurisation des procédures, rédaction des actes de rupture, défense prud'homale) comme pour les salariés (contestation d'un licenciement, rupture conventionnelle, harcèlement, discrimination). Cette double expérience permet d'anticiper les arguments de la partie adverse et de construire une stratégie plus solide."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet propose-t-il des consultations en visioconférence en droit du travail ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour un licenciement contesté, une rupture conventionnelle ou un contrôle URSSAF, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit social",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Licenciement contesté",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg#licenciement-conteste"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Réorganisation interne",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg#reorganisation"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contentieux de cotisations sociales",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg#cotisations-sociales"
    }
  ]
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
    { "@type": "ListItem", position: 2, name: "Compétences", item: "https://www.thalinger-avocat.fr/#competences" },
    { "@type": "ListItem", position: 3, name: "Droit du travail", item: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg" },
  ],
} as const;

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
  isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
  inLanguage: "fr",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#faq"] },
} as const;

export default function DroitDuTravailPage() {
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
              Avocat en droit du travail à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Chaque décision RH est une décision juridique.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Licenciement, rupture conventionnelle, contentieux prud&apos;homal : en droit du
              travail, chaque décision engage les deux parties. Le cabinet accompagne les
              employeurs dans la sécurisation de leurs procédures de licenciement et les
              salariés dans la défense de leurs droits, avec un objectif constant : transformer
              la complexité des règles sociales en clarté décisionnelle pour décider et
              agir en connaissance de cause.
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
                Un contrôle URSSAF ne prévient pas. Votre préparation, si.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Un redressement de cotisations peut représenter des montants significatifs et
                fragiliser durablement votre trésorerie. Le cabinet intervient en amont pour
                sécuriser vos pratiques en matière de cotisations sociales, et en aval pour
                contester les redressements et vous représenter dans les procédures de recours.
                En matière de faute inexcusable de l&apos;employeur, les conséquences vont
                au-delà de la majoration des indemnités : elles peuvent engager la responsabilité
                pénale du dirigeant en cas de manquement aux obligations de sécurité.
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
              Exemples d&apos;intervention en droit social
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Licenciement, réorganisation, cotisations : chaque décision sociale comporte des risques de procédure et de fond. Les exemples suivants illustrent comment ils s&apos;anticipent et se gèrent.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="licenciement-conteste" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Licenciement contesté</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un employeur fait face à une saisine prud’homale pour licenciement contesté. Les délais sont courts et la situation doit être clarifiée rapidement.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Examen de la procédure suivie, identification des points de fragilité du dossier, construction de la ligne de défense et représentation devant le Conseil de prud&apos;hommes.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Sécuriser la position de l&apos;employeur sur la procédure et le fond, et présenter une défense structurée à l&apos;audience.</dd>
                </div>
              </dl>
            </details>

            <details id="reorganisation" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Réorganisation interne</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Une entreprise prépare une réorganisation touchant plusieurs postes. Les implications sociales doivent être anticipées avant toute décision.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse des options et des risques, sécurisation des procédures applicables, accompagnement dans le dialogue avec les représentants du personnel.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Conduire la réorganisation dans un cadre maîtrisé, en mesurant les conséquences à chaque étape.</dd>
                </div>
              </dl>
            </details>

            <details id="cotisations-sociales" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Contentieux de cotisations sociales</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un employeur reçoit un redressement à la suite d&apos;un contrôle URSSAF. Le bien-fondé et l&apos;étendue du redressement sont en question.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse des chefs de redressement, vérification de la procédure de contrôle, contestation devant les juridictions compétentes lorsque cela se justifie.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Vérifier la régularité du redressement et défendre la position de l&apos;employeur sur les points contestables.</dd>
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire face à une saisine prud&apos;homale ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Réagir vite et de façon méthodique. La première étape est d&apos;analyser la procédure suivie et le motif invoqué, puis de rassembler les pièces (contrat, bulletins, échanges, dossier) et de construire une défense structurée. Depuis les réformes de procédure, l&apos;échange de conclusions et de pièces avant l&apos;audience est central : une préparation écrite solide est souvent déterminante pour l&apos;issue. Côté salarié, l&apos;action doit être engagée dans le délai de prescription applicable ; côté employeur, la rigueur de la préparation pèse lourd. Le réflexe est de faire analyser le dossier dès la réception de la convocation ou de la requête.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Quel délai pour contester un licenciement aux prud&apos;hommes ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En principe, douze mois. Le salarié dispose de douze mois à compter de la notification du licenciement pour le contester devant le Conseil de prud&apos;hommes (<a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000027550102" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 1471-1 du Code du travail</a>). Le point de départ est la date de première présentation de la lettre recommandée. Attention : les autres délais diffèrent, trois ans pour les rappels de salaire (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027566295" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 3245-1</a>), deux ans dans certains cas liés à l&apos;exécution ou à la rupture du contrat. Ce délai de contestation, autrefois de cinq ans, a été fortement réduit, ce qui rend la réactivité décisive. La règle pratique : faire analyser la situation dès la réception de la lettre.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Peut-on revenir sur une rupture conventionnelle signée ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui, dans deux cas distincts. D&apos;abord pendant le délai de rétractation : chaque partie dispose de quinze jours calendaires après la signature pour revenir sur son accord, sans avoir à se justifier. Ensuite, après homologation, en cas de litige : le salarié peut saisir le Conseil de prud&apos;hommes dans un délai de douze mois à compter de l&apos;homologation, notamment pour vice du consentement (pressions, menaces) ou non-respect des délais. En cas d&apos;annulation, la rupture produit en principe les effets d&apos;un licenciement sans cause réelle et sérieuse. Toute clause par laquelle les parties renonceraient à contester est réputée non écrite.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment sécuriser une procédure de licenciement ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Côté employeur, la sécurisation repose sur la justification du motif, le respect scrupuleux de la procédure (convocation à entretien préalable, délais légaux, notification motivée) et la documentation du dossier. En matière disciplinaire, attention au délai de l&apos;<a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006189485/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 1332-4</a> : l&apos;employeur ne peut engager de poursuites au-delà de deux mois après la connaissance des faits fautifs. Ce délai vise les faits fautifs, et non les autres motifs comme l&apos;insuffisance professionnelle. Côté salarié, il s&apos;agit d&apos;analyser la régularité de la procédure et le sérieux du motif pour évaluer les chances de contestation. Le cabinet accompagne les deux parties selon leurs intérêts.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Combien peut rapporter un licenciement sans cause réelle et sérieuse ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">L&apos;indemnisation est encadrée par un barème. Lorsque le licenciement est jugé sans cause réelle et sérieuse, l&apos;indemnité est fixée selon le barème dit « Macron » (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036762052" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 1235-3 du Code du travail</a>), qui prévoit un plancher et un plafond en mois de salaire, selon l&apos;ancienneté du salarié et la taille de l&apos;entreprise. Ce barème s&apos;impose en principe au juge, et la jurisprudence récente l&apos;a globalement validé. Il est écarté dans les cas de nullité du licenciement (harcèlement, discrimination, violation d&apos;une liberté fondamentale), où s&apos;applique un minimum de six mois de salaire, sans plafond. L&apos;enjeu est donc d&apos;abord de qualifier la nature du licenciement.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment sécuriser une réorganisation ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">En anticipant les implications sociales avant la décision, pas après. Cela suppose de choisir la bonne procédure, d&apos;établir un calendrier réaliste et d&apos;organiser le dialogue avec le CSE et les représentants du personnel. Selon l&apos;ampleur du projet, les obligations diffèrent : un plan de sauvegarde de l&apos;emploi est obligatoire en cas de licenciement économique d&apos;au moins dix salariés sur trente jours dans une entreprise d&apos;au moins cinquante salariés. Le risque principal, pour les PSE, est l&apos;annulation ou la suspension de la procédure par le juge administratif. La sécurité juridique se construit en amont de l&apos;annonce.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Peut-on contester un redressement URSSAF ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui, mais la procédure est strictement encadrée et le recours amiable est un préalable obligatoire. À compter de la réception de la mise en demeure, l&apos;entreprise dispose de deux mois pour saisir la Commission de recours amiable (CRA) de l&apos;URSSAF. Si la CRA rejette la contestation, expressément ou par son silence gardé pendant deux mois (rejet implicite), un nouveau délai de deux mois s&apos;ouvre pour saisir le pôle social du tribunal judiciaire. La contestation peut porter sur le fond du redressement comme sur la régularité de la procédure de contrôle, un vice de procédure pouvant entraîner la nullité. Manquer un de ces délais rend le redressement définitif.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que risque l&apos;employeur en cas de faute inexcusable ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Les conséquences vont au-delà de l&apos;indemnisation classique. La faute inexcusable est reconnue lorsque l&apos;employeur avait ou aurait dû avoir conscience d&apos;un danger sans prendre les mesures nécessaires pour en préserver le salarié. Elle entraîne une majoration de la rente de la victime et la réparation de préjudices complémentaires. Une responsabilité pénale peut s&apos;y ajouter, mais elle n&apos;est pas automatique : elle suppose une infraction caractérisée (par exemple des blessures involontaires) et peut alors viser personnellement le dirigeant, là où la faute inexcusable engage l&apos;employeur. La prévention, évaluation des risques et traçabilité des mesures de sécurité, reste le meilleur levier de défense.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet accompagne-t-il aussi bien les employeurs que les salariés ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Le cabinet intervient pour les employeurs (sécurisation des procédures, rédaction des actes de rupture, défense prud&apos;homale) comme pour les salariés (contestation d&apos;un licenciement, rupture conventionnelle, harcèlement, discrimination). Cette double expérience permet d&apos;anticiper les arguments de la partie adverse et de construire une stratégie plus solide.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet propose-t-il des consultations en visioconférence en droit du travail ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Pour un licenciement contesté, une rupture conventionnelle ou un contrôle URSSAF, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Accessible depuis toute la France, sans déplacement à Strasbourg.</div>
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

