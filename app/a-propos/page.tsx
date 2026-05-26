import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import AboutHero from "@/components/AboutHero";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "À propos de Maître Christian Thalinger | Avocat d'affaires Strasbourg",
  description:
    "Maître Christian Thalinger, avocat au Barreau de Strasbourg depuis le 13 janvier 2022 (SIREN 909 547 721). Titulaire du CAPA, il exerce en droit des affaires en français et en anglais. Cabinet : 5 avenue de la Marseillaise, 67000 Strasbourg.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/a-propos",
    languages: {
      fr: "https://www.thalinger-avocat.fr/a-propos",
      en: "https://www.thalinger-avocat.fr/en/about",
    },
  },
  openGraph: {
    title: "Maître Christian Thalinger — Avocat d'affaires à Strasbourg",
    description:
      "Conseil stratégique en droit des affaires. Approche personnalisée, réponse sous 24h.",
    url: "https://www.thalinger-avocat.fr/a-propos",
    type: "profile",
    images: [
      {
        url: "https://www.thalinger-avocat.fr/images/OG.png",
        width: 1200,
        height: 630,
        alt: "Maître Christian Thalinger, avocat d'affaires à Strasbourg",
      },
    ],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.thalinger-avocat.fr/#christian-thalinger",
      name: "Christian Thalinger",
      givenName: "Christian",
      familyName: "Thalinger",
      jobTitle: "Avocat au Barreau de Strasbourg",
      description:
        "Maître Christian Thalinger (THALINGER AVOCAT, SIREN 909547721) est avocat au Barreau de Strasbourg spécialisé en droit des affaires. Serment prêté le 13 janvier 2022. Spécialités : droit des sociétés, droit commercial, droit du travail, droit bancaire et des assurances, droit immobilier et de la construction. À distinguer de Maître Vincent Thalinger (L'ILL LEGAL, SIREN 904573375).",
      url: "https://www.thalinger-avocat.fr/a-propos",
      image: "https://www.thalinger-avocat.fr/images/bio.png",
      telephone: "+33637331926",
      email: "christian@thalinger-avocat.fr",
      worksFor: { "@id": "https://www.thalinger-avocat.fr/#organization" },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Université de Strasbourg" },
        { "@type": "EducationalOrganization", name: "Université de Toulon" },
        {
          "@type": "EducationalOrganization",
          name: "École régionale des avocats du Grand Est",
        },
      ],
      knowsLanguage: ["fr", "en"],
      knowsAbout: [
        "Droit des sociétés",
        "Droit commercial",
        "Droit du travail",
        "Droit bancaire",
        "Droit des assurances",
        "Droit immobilier",
        "Droit de la construction",
        "Droit des affaires",
        "Droit de la sécurité sociale",
        "Droit bancaire et financier",
        "Droit de la consommation",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          name: "CAPA — Certificat d'Aptitude à la Profession d'Avocat",
          recognizedBy: { "@type": "Organization", name: "Barreau de Strasbourg" },
        },
      ],
      memberOf: [{ "@type": "Organization", name: "Barreau de Strasbourg" }],
      sameAs: [
        "https://www.linkedin.com/in/christian-thalinger-565446216/",
        "https://www.doctrine.fr/p/avocat/L2F17E9BA4F70F6A24AE1",
        "https://justice.pappers.fr/avocat/thalinger-christian-67000",
        "https://avocats-law.fr/equipe/maitre-christian-thalinger/",
        "https://trouvervotreavocat.com/avocat/christian-thalinger/",
        "https://consultation.avocat.fr/avocat-strasbourg/christian-thalinger-61442.html",
        "https://www.justifit.fr/avocats/avocat-strasbourg-maitre-christian-thalinger-106985",
      ],
    },
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://www.thalinger-avocat.fr/#organization",
      name: "THALINGER Avocat",
      legalName: "THALINGER CHRISTIAN",
      description:
        "Cabinet d'avocat d'affaires à Strasbourg — droit des sociétés, droit commercial, droit du travail, droit bancaire et des assurances, droit immobilier et de la construction.",
      url: "https://www.thalinger-avocat.fr",
      telephone: "+33637331926",
      email: "christian@thalinger-avocat.fr",
      founder: { "@id": "https://www.thalinger-avocat.fr/#christian-thalinger" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 avenue de la Marseillaise",
        addressLocality: "Strasbourg",
        postalCode: "67000",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 48.5813, longitude: 7.7484 },
      areaServed: ["Strasbourg", "Alsace", "Grand Est", "France", "Allemagne"],
      availableLanguage: ["French", "English"],
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: ["https://www.linkedin.com/in/christian-thalinger-565446216/"],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.thalinger-avocat.fr/a-propos",
      name: "À propos — Maître Christian Thalinger",
      description:
        "Biographie et parcours de Maître Christian Thalinger, avocat d'affaires au Barreau de Strasbourg.",
      isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
      about: { "@id": "https://www.thalinger-avocat.fr/#christian-thalinger" },
      inLanguage: "fr",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
        { "@type": "ListItem", position: 2, name: "À propos", item: "https://www.thalinger-avocat.fr/a-propos" },
      ],
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels sont les domaines d'intervention de Maître Thalinger ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maître Christian Thalinger intervient principalement en droit des sociétés, droit commercial, droit du travail, droit bancaire et des assurances, droit immobilier et de la construction. Son approche est orientée vers l'accompagnement stratégique des dirigeants de PME et entrepreneurs.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule un premier rendez-vous avec Maître Thalinger ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le premier échange permet de comprendre votre situation sans engagement. Maître Thalinger écoute vos enjeux, identifie les risques juridiques, et vous présente les options disponibles avec leurs implications. L'objectif est de vous donner la clarté nécessaire pour décider de la suite.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les honoraires d'un avocat d'affaires à Strasbourg ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les honoraires dépendent de la nature et de la complexité de la mission. Maître Thalinger propose plusieurs modalités : honoraire horaire, forfait par mission, ou abonnement pour un accompagnement régulier. Une estimation est systématiquement fournie avant tout engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre un avocat d'affaires et un avocat généraliste ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un avocat d'affaires se consacre aux problématiques des entreprises : création de sociétés, contrats commerciaux, relations employeur-salarié, contentieux entre partenaires. Son approche intègre systématiquement la dimension économique et stratégique des décisions juridiques.",
      },
    },
    {
      "@type": "Question",
      name: "Le premier échange est-il payant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le premier échange est libre, sans engagement et confidentiel. Il permet de comprendre votre situation, d'identifier les enjeux juridiques et d'évaluer si un accompagnement est pertinent. Sa durée et ses modalités sont précisées lors de la prise de rendez-vous.",
      },
    },
    {
      "@type": "Question",
      name: "L'avocat peut-il intervenir en urgence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Mise en demeure, assignation, contrôle URSSAF, conflit entre associés : certaines situations nécessitent une réaction rapide. Maître Thalinger s'engage à répondre sous 24 heures et peut organiser un premier échange dans des délais courts.",
      },
    },
    {
      "@type": "Question",
      name: "Maître Thalinger parle-t-il anglais ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Maître Thalinger pratique l'anglais couramment et peut accompagner des clients anglophones dans leurs démarches juridiques en France. Le site est également disponible en version anglaise.",
      },
    },
  ],
};

// ─── Page data ────────────────────────────────────────────────────────────────

const approachPillars = [
  {
    title: "Stratégique",
    text: "Je m'intéresse à votre marché, vos concurrents, votre calendrier et vos ambitions, parce qu'une réponse juridique qui ignore la réalité commerciale n'est pas suffisante.",
  },
  {
    title: "Préventif",
    text: "Mon approche est fondée sur l'anticipation : identifier les risques juridiques qui se trouvent sur votre trajectoire de croissance et les traiter avant qu'ils ne deviennent des obstacles.",
  },
  {
    title: "Personnel",
    text: "La personne qui comprend votre entreprise aujourd'hui est celle qui vous conseille demain. C'est ainsi que se construit une stratégie solide dans la durée.",
  },
];

const educationItems = [
  { period: "2020 – 2021", title: "CAPA — Certificat d'Aptitude à la Profession d'Avocat", org: "École régionale des avocats du Grand Est", place: "Strasbourg", note: "" },
  { period: "2018 – 2019", title: "CRFPA Droit pénal", org: "Université de Strasbourg", place: "Strasbourg", note: "" },
  { period: "2017 – 2018", title: "M2 Droit des contrats", org: "Université de Toulon", place: "Toulon", note: "Spécialisation en ingénierie contractuelle. Mémoire : « Le bitcoin, nouvel instrument de paiement ? » — Mention bien" },
  { period: "2016 – 2017", title: "M1 Droit international et européen", org: "Université de Strasbourg", place: "Strasbourg", note: "" },
  { period: "2015 – 2016", title: "M1 Droit des Affaires", org: "Université de Strasbourg", place: "Strasbourg", note: "" },
];

const experienceItems = [
  { period: "Depuis jan. 2024", title: "Avocat exerçant à titre individuel", org: "THALINGER AVOCAT", place: "Strasbourg", focus: "Conseil et contentieux en droit privé et droit des affaires" },
  { period: "Oct. 2024 – Mai 2026", title: "Avocat collaborateur", org: "Law Avocats", place: "Strasbourg", focus: "Droit social, droit commercial, droit immobilier et construction" },
  { period: "Fév. 2023 – Jan. 2024", title: "Avocat collaborateur", org: "Judicia Conseil", place: "Reichstett", focus: "Contentieux commercial et conseil en droit des affaires" },
  { period: "Nov. 2021 – Oct. 2022", title: "Avocat collaborateur", org: "Orion Avocats", place: "Strasbourg", focus: "Contentieux en droit bancaire et droit des assurances" },
  { period: "Jan. 2021 – Juil. 2021", title: "Stagiaire élève avocat", org: "Cabinet Philippe WITTNER", place: "Strasbourg", focus: "Droit du travail et droit des cotisations sociales" },
  { period: "Juil. 2020 – Déc. 2020", title: "Juriste stagiaire", org: "SNCF Réseau", place: "Strasbourg", focus: "Droit social et droit des affaires" },
];

const caseStudies = [
  {
    area: "Droit des sociétés",
    title: "Conflit entre associés",
    situation: "Trois associés, un blocage total. Plus aucune décision ne passe en assemblée. L'entreprise tourne encore, mais plus personne ne la dirige.",
    action: "Restructuration du pacte d'associés, mise en place d'une gouvernance opérationnelle, sortie négociée de l'associé minoritaire.",
    result: "L'entreprise a repris son activité normale en six semaines.",
    href: "/competences/droit-des-societes",
  },
  {
    area: "Droit social",
    title: "Licenciement contesté",
    situation: "Un employeur fait face à une saisine prud'homale pour licenciement abusif. Le dossier est mal documenté, les délais sont courts.",
    action: "Constitution de la défense, identification des failles procédurales dans la demande, représentation à l'audience.",
    result: "Demande rejetée intégralement.",
    href: "/competences/droit-social",
  },
  {
    area: "Droit immobilier & construction",
    title: "Malfaçons après livraison",
    situation: "Un propriétaire constate des désordres structurels six mois après réception d'un chantier. Le constructeur ne répond plus.",
    action: "Mise en demeure, activation des garanties légales, négociation directe avec l'assureur dommages-ouvrage.",
    result: "Indemnisation obtenue sans procédure judiciaire.",
    href: "/competences/droit-immobilier-construction",
  },
  {
    area: "Droit commercial",
    title: "Créance impayée",
    situation: "Une entreprise attend le règlement d'une facture significative depuis plus de huit mois. Les relances n'ont rien donné.",
    action: "Stratégie pré-contentieuse, injonction de payer, négociation d'un échéancier.",
    result: "Recouvrement intégral, relation commerciale préservée.",
    href: "/competences/droit-commercial",
  },
];

const faqItems = [
  {
    question: "Quels sont les domaines d'intervention de Maître Thalinger ?",
    answer: "Maître Christian Thalinger intervient principalement en droit des sociétés, droit commercial, droit du travail, droit bancaire et des assurances, droit immobilier et de la construction. Son approche est orientée vers l'accompagnement stratégique des dirigeants de PME et entrepreneurs.",
  },
  {
    question: "Comment se déroule un premier rendez-vous ?",
    answer: "Le premier échange permet de comprendre votre situation sans engagement. Maître Thalinger écoute vos enjeux, identifie les risques juridiques, et vous présente les options disponibles avec leurs implications. L'objectif est de vous donner la clarté nécessaire pour décider de la suite.",
  },
  {
    question: "Quels sont les honoraires d'un avocat d'affaires à Strasbourg ?",
    answer: "Les honoraires dépendent de la nature et de la complexité de la mission. Maître Thalinger propose plusieurs modalités : honoraire horaire, forfait par mission, ou abonnement pour un accompagnement régulier. Une estimation est systématiquement fournie avant tout engagement.",
  },
  {
    question: "Quelle est la différence entre un avocat d'affaires et un avocat généraliste ?",
    answer: "Un avocat d'affaires se consacre aux problématiques des entreprises : création de sociétés, contrats commerciaux, relations employeur-salarié, contentieux entre partenaires. Son approche intègre systématiquement la dimension économique et stratégique des décisions juridiques.",
  },
  {
    question: "Le premier échange est-il payant ?",
    answer: "Non. Le premier échange est libre, sans engagement et confidentiel. Il permet de comprendre votre situation, d'identifier les enjeux juridiques et d'évaluer si un accompagnement est pertinent. Sa durée et ses modalités sont précisées lors de la prise de rendez-vous.",
  },
  {
    question: "L'avocat peut-il intervenir en urgence ?",
    answer: "Oui. Mise en demeure, assignation, contrôle URSSAF, conflit entre associés : certaines situations nécessitent une réaction rapide. Maître Thalinger s'engage à répondre sous 24 heures et peut organiser un premier échange dans des délais courts.",
  },
  {
    question: "Maître Thalinger parle-t-il anglais ?",
    answer: "Oui, Maître Thalinger pratique l'anglais couramment et peut accompagner des clients anglophones dans leurs démarches juridiques en France. Le site est également disponible en version anglaise.",
  },
];

// ─── Sub-components (server-rendered) ────────────────────────────────────────

function GoldDivider() {
  return <div className="bg-gold" style={{ height: "2px" }} />;
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b-2 border-gold">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
        <span className="font-serif text-[1.0625rem] leading-snug text-navy">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 group-open:rotate-45"
        >
          <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{answer}</div>
    </details>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AProposPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <AboutHero
        eyebrow="Avocat au Barreau de Strasbourg"
        staticLine="Maître Christian Thalinger"
        description="Avocat d'affaires à Strasbourg, je suis inscrit au Barreau depuis 2022 et je conseille en français et en anglais. Je structure chaque dossier autour d'une conviction : la complexité se gère par la rigueur et l'explication, et jamais par l'opacité. Quand les enjeux sont élevés, je dis la vérité, y compris ce qui dérange. C'est cette approche que j'applique dans chacun de mes domaines d'intervention."
        imageAlt="Maître Christian Thalinger, avocat d'affaires au Barreau de Strasbourg"
      />

      <GoldDivider />

      {/* ── 2. APPROACH ─────────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-gold/60">
              Mon approche
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Trois engagements au service de votre entreprise.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {approachPillars.map((pillar) => (
              <AnimatedItem key={pillar.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <h3 className="mb-5 font-serif text-lg font-normal leading-snug text-navy">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{pillar.text}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* ── 3. PARCOURS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">Parcours</p>
            <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Une approche pluridisciplinaire.
            </h2>
            <div className="max-w-2xl space-y-5 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              <p>
                Après une formation à l&apos;Université de Strasbourg et une spécialisation en ingénierie
                contractuelle à Toulon, j&apos;ai orienté mes travaux de recherche sur le bitcoin comme instrument
                de paiement, à une période où les enjeux juridiques des actifs numériques étaient encore peu
                explorés.
              </p>
              <p>
                Admis au Barreau de Strasbourg en janvier 2022, j&apos;ai exercé dans plusieurs cabinets
                strasbourgeois, volontairement dans des registres différents : droit bancaire et des assurances,
                contentieux commercial, conseil aux PME en droit des affaires. Chaque étape a ajouté une couche
                de lecture supplémentaire sur les problèmes que rencontrent les entreprises.
              </p>
              <p>
                J&apos;ai ensuite élargi cette pratique au travers d&apos;une collaboration en cabinet entre
                octobre 2024 et mai 2026, couvrant le droit social, le droit immobilier et le droit de la
                construction.
              </p>
              <p>
                En janvier 2024, j&apos;ai créé THALINGER Avocat.
              </p>
              <p>
                Aujourd&apos;hui, le cabinet réunit ces expériences au service d&apos;un accompagnement fondé
                sur une approche stratégique, tournée vers l&apos;anticipation des risques et la clarté des
                décisions.
              </p>
            </div>

          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 md:gap-x-16">

              {/* Experience — first */}
              <details className="group border-t-2 border-gold">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-navy-muted">
                    Expérience professionnelle
                  </span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                    className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                    <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="space-y-8 pb-8">
                  {experienceItems.map((item) => (
                    <div key={item.period} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="shrink-0 leading-none" style={{ color: "var(--color-gold)", fontSize: "1.1em" }}>•</span>
                      <div>
                        <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-navy-muted">
                          {item.period}
                        </p>
                        <h3 className="font-serif text-[0.9375rem] font-normal text-navy">{item.title}</h3>
                        <p className="font-sans text-[0.8125rem] text-navy/65">
                          {item.org} · {item.place}
                        </p>
                        <p className="mt-0.5 font-sans text-[0.75rem] text-navy/50">{item.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              {/* Formation — second */}
              <details className="group border-t-2 border-gold">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-navy-muted">Formation</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                    className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                    <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="space-y-8 pb-8">
                  {educationItems.map((item) => (
                    <div key={item.period} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="shrink-0 leading-none" style={{ color: "var(--color-gold)", fontSize: "1.1em" }}>•</span>
                      <div>
                        <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-navy-muted">
                          {item.period}
                        </p>
                        <h3 className="font-serif text-[0.9375rem] font-normal text-navy">{item.title}</h3>
                        <p className="font-sans text-[0.8125rem] text-navy/65">
                          {item.org} · {item.place}
                        </p>
                        {item.note && (
                          <p className="mt-1 font-sans text-[0.75rem] italic text-navy/50">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </details>

            </div>

          </AnimatedSection>
        </div>
      </section>

      {false && <GoldDivider />}

      {/* ── 4. CASE STUDIES — hidden temporarily ────────────────────────────── */}
      {false && <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-gold/60">
              Situations que j&apos;accompagne
            </p>
            <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Exemples de dossiers traités.
            </h2>
            <p className="max-w-xl font-sans text-[0.9375rem] leading-[1.9] text-white/55">
              Situations anonymisées. Chaque dossier est unique ; ces exemples illustrent la nature des
              interventions et l&apos;approche adoptée.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <AnimatedItem key={cs.title} className="h-full">
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.2em] text-navy-muted">
                    {cs.area}
                  </p>
                  <h3 className="mb-6 font-serif text-lg font-normal text-navy">{cs.title}</h3>
                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.15em] text-navy-muted">
                        Situation
                      </p>
                      <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{cs.situation}</p>
                    </div>
                    <div>
                      <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.15em] text-navy-muted">
                        Intervention
                      </p>
                      <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{cs.action}</p>
                    </div>
                    <div>
                      <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.15em] text-navy-muted">
                        Résultat
                      </p>
                      <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{cs.result}</p>
                    </div>
                  </div>
                  <Link
                    href={cs.href}
                    className="mt-6 inline-flex items-center gap-2 font-serif text-sm text-navy transition-colors hover:text-gold"
                  >
                    En savoir plus
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                      <path
                        d="M1 5H15M15 5L11 1M15 5L11 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>}

      <GoldDivider />

      {/* ── 5. VISION ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">Vision</p>
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Reprendre le contrôle.
              </h2>
              <div className="mb-12 space-y-5 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                <p>
                  Un bon avocat se mesure à la vitesse à laquelle son client retrouve le contrôle de sa situation.
                  THALINGER Avocat se construit autour de ce basculement : le moment où la situation passe de
                  subie à maîtrisée.
                </p>
              </div>

              {/* Practice area links */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Droit des Sociétés", href: "/competences/droit-des-societes" },
                  { label: "Droit Commercial", href: "/competences/droit-commercial" },
                  { label: "Droit Social", href: "/competences/droit-social" },
                  { label: "Droit Bancaire & Financier", href: "/competences/droit-bancaire-financier" },
                  { label: "Droit des Assurances", href: "/competences/droit-des-assurances" },
                  { label: "Droit Immobilier", href: "/competences/droit-immobilier-construction" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-gold px-4 py-2 font-sans text-[0.8125rem] text-navy transition-all duration-200 hover:bg-navy hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* ── 6. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Questions fréquentes
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Ce que l&apos;on me demande souvent.
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl">
            <div className="border-t-2 border-gold">
              {faqItems.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
            <p className="mt-8 font-sans text-sm text-navy/50">
              Questions sur les honoraires ?{" "}
              <Link
                href="/honoraires"
                className="text-navy transition-colors hover:text-gold"
              >
                Consultez la page Honoraires
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── 8. CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Parlons de votre situation.
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Réponse sous 24h. Premier échange sans engagement pour évaluer ensemble la nature
                de vos enjeux juridiques et les options disponibles.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                  style={{ color: "#ffffff" }}
                >
                  Prendre contact
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
                <a
                  href="tel:+33637331926"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-gold px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-navy transition-all duration-300 hover:bg-navy hover:text-white active:scale-[0.97]"
                >
                  +33 6 37 33 19 26
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
