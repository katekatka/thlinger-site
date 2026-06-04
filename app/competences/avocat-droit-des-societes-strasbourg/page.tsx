import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

export const metadata: Metadata = {
  title: "Avocat droit des sociétés à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit des sociétés à Strasbourg. Création, statuts, pacte d'associés, cession de parts, gouvernance, contentieux sociétaire. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-des-societes",
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
        "text": "Idéalement dès la création de la société, ou avant l'entrée d'un nouvel associé. Le pacte organise les rapports entre associés : gouvernance, cession de titres, sortie, et prévient une part importante des conflits ultérieurs."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire en cas de blocage entre associés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plusieurs leviers existent selon les statuts et le pacte : médiation, révision de la gouvernance, sortie négociée d'un associé, ou recours judiciaire en dernier ressort. Le choix dépend des circonstances et des objectifs de chacun."
      }
    },
    {
      "@type": "Question",
      "name": "Comment sécuriser la cession de mon entreprise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En structurant l'opération en amont : audit, choix du montage, garantie d'actif et de passif, et rédaction précise des actes. L'objectif est de comprendre chaque engagement avant de signer."
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

export default function DroitDesSocietesPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Avocat en droit des sociétés à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Structurer ce qui détermine le fonctionnement de votre entreprise.
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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Quand rédiger un pacte d&apos;associés ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Idéalement dès la création de la société, ou avant l&apos;entrée d&apos;un nouvel associé. Le pacte organise les rapports entre associés : gouvernance, cession de titres, sortie, et prévient une part importante des conflits ultérieurs.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Que faire en cas de blocage entre associés ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Plusieurs leviers existent selon les statuts et le pacte : médiation, révision de la gouvernance, sortie négociée d&apos;un associé, ou recours judiciaire en dernier ressort. Le choix dépend des circonstances et des objectifs de chacun.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Comment sécuriser la cession de mon entreprise ?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">En structurant l&apos;opération en amont : audit, choix du montage, garantie d&apos;actif et de passif, et rédaction précise des actes. L&apos;objectif est de comprendre chaque engagement avant de signer.</p>
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

