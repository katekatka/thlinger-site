import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

export const metadata: Metadata = {
  title: "Avocat droit du travail à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit social et droit du travail à Strasbourg. Licenciement, rupture conventionnelle, contentieux prud'homal, relations collectives, sécurité sociale. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-social",
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
        "text": "Réagir vite : analyser la procédure suivie, rassembler les éléments de fond et construire une défense structurée dans les délais impartis."
      }
    },
    {
      "@type": "Question",
      "name": "Comment sécuriser une réorganisation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En anticipant les implications sociales avant la décision : choix de la procédure, calendrier, dialogue avec les représentants du personnel."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on contester un redressement URSSAF ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dans les délais prévus. La contestation peut porter sur le fond du redressement comme sur la régularité de la procédure de contrôle."
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

export default function DroitDuTravailPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

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
              Un contrat mal rédigé, une procédure de licenciement bâclée, un accord collectif
              imprécis : en droit du travail, l&apos;erreur se chiffre. Le cabinet accompagne les
              dirigeants et les responsables RH dans la sécurisation de leurs pratiques au
              quotidien et dans la défense de leurs intérêts devant le conseil de prud&apos;hommes.
              L&apos;objectif : anticiper les litiges plutôt que les subir, et faire du droit
              social un levier de gestion, pas une source de risques.
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

            <div id="licenciement-conteste" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Licenciement contesté</h3>
              <dl className="space-y-5">
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
            </div>

            <div id="reorganisation" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Réorganisation interne</h3>
              <dl className="space-y-5">
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
            </div>

            <div id="cotisations-sociales" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Contentieux de cotisations sociales</h3>
              <dl className="space-y-5">
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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Que faire face à une saisine prud&apos;homale ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Réagir vite : analyser la procédure suivie, rassembler les éléments de fond et construire une défense structurée dans les délais impartis.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Comment sécuriser une réorganisation ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">En anticipant les implications sociales avant la décision : choix de la procédure, calendrier, dialogue avec les représentants du personnel.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Peut-on contester un redressement URSSAF ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Oui, dans les délais prévus. La contestation peut porter sur le fond du redressement comme sur la régularité de la procédure de contrôle.</p>
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

