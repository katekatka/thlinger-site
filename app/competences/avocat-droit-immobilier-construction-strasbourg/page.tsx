import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

export const metadata: Metadata = {
  title: "Avocat droit de la construction à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit immobilier et de la construction à Strasbourg. Responsabilité des constructeurs, CCMI, malfaçons, baux, contentieux technique. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Construction et responsabilité des constructeurs",
    items: [
      "Responsabilité des constructeurs",
      "Garanties légales et décennales",
      "Désordres et malfaçons",
      "Litiges liés aux travaux et chantiers",
    ],
  },
  {
    title: "Expertises et contentieux techniques",
    items: [
      "Expertises amiables et judiciaires",
      "Évaluation des préjudices",
      "Assistance lors des opérations d'expertise",
      "Défense des intérêts en phase contentieuse",
    ],
  },
  {
    title: "Baux et relations locatives",
    items: [
      "Rédaction de baux",
      "Négociation des relations locatives",
      "Sécurisation des engagements contractuels",
      "Gestion des obligations du bailleur et du locataire",
    ],
  },
  {
    title: "Litiges locatifs et expulsion",
    items: [
      "Impayés et inexécution contractuelle",
      "Résiliation du bail",
      "Procédures d'expulsion",
      "Défense des propriétaires",
    ],
  },
  {
    title: "Transactions immobilières",
    items: [
      "Vente en l'état futur d'achèvement (VEFA)",
      "Acquisition et vente d'immeubles",
      "Sécurisation des opérations immobilières",
      "Garanties et obligations du vendeur",
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
      "name": "Que faire en cas de malfaçons après réception ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Identifier la garantie applicable (parfait achèvement, biennale, décennale), mettre en demeure et mobiliser l'assurance dommages-ouvrage. La voie amiable est souvent privilégiée avant le contentieux."
      }
    },
    {
      "@type": "Question",
      "name": "Comment gérer un litige de bail commercial ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En analysant le bail et les obligations de chaque partie, puis en choisissant entre négociation et action selon l'enjeu et la relation."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il faire encadrer un projet immobilier par un avocat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cadrer les contrats et les responsabilités en amont limite fortement les risques de litige pendant et après le chantier."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit immobilier et de la construction",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Malfaçons après livraison",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg#malfacons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Litige entre bailleur et locataire commercial",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg#bail-commercial"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sécurisation d'un projet immobilier",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg#projet-immobilier"
    }
  ]
} as const;

export default function DroitImmobilierPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Avocat en droit immobilier et de la construction à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Construire, c&apos;est aussi construire un cadre juridique.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Malfaçons, désordres, garanties non mobilisées : en matière de construction, les
              litiges se révèlent souvent après la réception des travaux, quand les délais pour
              agir sont déjà engagés. Le cabinet intervient pour faire valoir la responsabilité
              des constructeurs, activer les garanties légales et décennales, et vous assister
              lors des expertises amiables ou judiciaires. Que vous soyez maître d&apos;ouvrage
              ou professionnel du bâtiment, chaque étape du chantier crée des obligations
              qu&apos;il vaut mieux anticiper que découvrir en contentieux.
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
                Un bail mal négocié se paie pendant toute sa durée.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Les clauses de bail signées aujourd&apos;hui déterminent vos droits et vos
                contraintes pour des années. Le cabinet sécurise la rédaction de vos baux,
                négocie les conditions locatives et veille à l&apos;équilibre des obligations
                entre bailleur et locataire. En cas d&apos;impayés, d&apos;inexécution ou de
                litige sur la résiliation, le cabinet assure votre défense et conduit les
                procédures nécessaires à la protection de vos intérêts.
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
              Exemples d&apos;intervention en droit immobilier et de la construction
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Malfaçons, baux commerciaux, projets immobiliers : la construction et l&apos;immobilier engagent des responsabilités multiples sur la durée. Les exemples suivants illustrent comment elles se cadrent et se défendent.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="malfacons" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Malfaçons après livraison</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un propriétaire constate des désordres structurels plusieurs mois après la réception d&apos;un chantier. Le dialogue avec le constructeur s&apos;interrompt.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Mise en demeure, analyse des garanties légales applicables, mobilisation de l&apos;assurance dommages-ouvrage, négociation directe avec les intervenants concernés.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Faire valoir les garanties dont dispose le maître d&apos;ouvrage et rechercher une indemnisation, en privilégiant si possible une issue amiable.</dd>
                </div>
              </dl>
            </details>

            <details id="bail-commercial" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Litige entre bailleur et locataire commercial</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un désaccord oppose un bailleur et son locataire commercial (loyer, charges, état des lieux, renouvellement). La relation se tend.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse du bail et des obligations de chacun, identification des leviers, négociation ou action selon l&apos;intérêt du client.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifier les droits et obligations issus du bail et défendre la position du client.</dd>
                </div>
              </dl>
            </details>

            <details id="projet-immobilier" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Sécurisation d&apos;un projet immobilier</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un porteur de projet engage une opération immobilière. Les contrats et responsabilités des intervenants doivent être cadrés avant le lancement.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Rédaction et analyse des documents contractuels, répartition des responsabilités, conseil sur les garanties applicables.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Poser un cadre clair en amont pour limiter les risques de contentieux pendant et après le chantier.</dd>
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

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Que faire en cas de malfaçons après réception ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Identifier la garantie applicable (parfait achèvement, biennale, décennale), mettre en demeure et mobiliser l&apos;assurance dommages-ouvrage. La voie amiable est souvent privilégiée avant le contentieux.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Comment gérer un litige de bail commercial ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">En analysant le bail et les obligations de chaque partie, puis en choisissant entre négociation et action selon l&apos;enjeu et la relation.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Faut-il faire encadrer un projet immobilier par un avocat ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Cadrer les contrats et les responsabilités en amont limite fortement les risques de litige pendant et après le chantier.</p>
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

