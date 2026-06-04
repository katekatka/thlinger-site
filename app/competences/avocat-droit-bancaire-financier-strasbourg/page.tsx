import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

export const metadata: Metadata = {
  title: "Avocat droit bancaire et financier à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit bancaire et financier à Strasbourg. Contentieux bancaire, financement, cautionnement, responsabilité bancaire, investissements. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier",
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
        "text": "Oui, selon sa validité, le respect des obligations d'information de la banque et sa proportionnalité au regard des revenus et du patrimoine de la caution."
      }
    },
    {
      "@type": "Question",
      "name": "Quand engager la responsabilité d'une banque ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lorsqu'un manquement de l'établissement (devoir de mise en garde, de conseil, d'information) a causé un préjudice. L'appréciation dépend des circonstances."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se défendre face à un appel en garantie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En analysant l'acte, la procédure et la proportionnalité de l'engagement avant toute réponse à l'établissement."
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

export default function DroitBancaireFinancierPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

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

            <div className="bg-gold mt-10" style={{ height: "2px" }} />

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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Peut-on contester un engagement de caution ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Oui, selon sa validité, le respect des obligations d&apos;information de la banque et sa proportionnalité au regard des revenus et du patrimoine de la caution.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Quand engager la responsabilité d&apos;une banque ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Lorsqu&apos;un manquement de l&apos;établissement (devoir de mise en garde, de conseil, d&apos;information) a causé un préjudice. L&apos;appréciation dépend des circonstances.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Comment se défendre face à un appel en garantie ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">En analysant l&apos;acte, la procédure et la proportionnalité de l&apos;engagement avant toute réponse à l&apos;établissement.</p>
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

