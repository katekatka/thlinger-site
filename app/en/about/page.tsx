import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import AboutHero from "@/components/AboutHero";
import GoogleReviews from "@/components/GoogleReviews";
import { fetchGoogleReviews } from "@/lib/google-places";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "About — Christian THALINGER, Business Lawyer in Strasbourg",
  description:
    "Business lawyer at the Strasbourg Bar since 2022, specialising in corporate law, commercial law, employment law, banking law, insurance law and real estate law. Strategic, personalised approach.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/about",
    languages: {
      fr: "https://www.thalinger-avocat.fr/a-propos",
      en: "https://www.thalinger-avocat.fr/en/about",
    },
  },
  openGraph: {
    title: "Christian THALINGER — Business Lawyer in Strasbourg, France",
    description: "Strategic business law counsel. Personalised approach, response within 24 hours.",
    url: "https://www.thalinger-avocat.fr/en/about",
    type: "profile",
    images: [
      {
        url: "https://www.thalinger-avocat.fr/images/OG.png",
        width: 1200,
        height: 630,
        alt: "Maître Christian THALINGER, business lawyer in Strasbourg",
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
      name: "Christian THALINGER",
      givenName: "Christian",
      familyName: "Thalinger",
      jobTitle: "Avocat au Barreau de Strasbourg",
      description:
        "Maître Christian THALINGER (THALINGER AVOCAT, SIREN 909547721) is a business lawyer at the Strasbourg Bar, specialising in corporate law, commercial law, employment law, banking and insurance law, and real estate and construction law. Sworn in on 13 January 2022.",
      url: "https://www.thalinger-avocat.fr/en/about",
      image: "https://www.thalinger-avocat.fr/images/bio.png",
      telephone: "+33637331926",
      email: "christian@thalinger-avocat.fr",
      worksFor: { "@id": "https://www.thalinger-avocat.fr/#organization" },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Université de Strasbourg" },
        { "@type": "EducationalOrganization", name: "Université de Toulon" },
        { "@type": "EducationalOrganization", name: "École régionale des avocats du Grand Est" },
      ],
      knowsLanguage: ["fr", "en"],
      knowsAbout: [
        "Corporate Law",
        "Commercial Law",
        "Employment Law",
        "Banking Law",
        "Insurance Law",
        "Real Estate Law",
        "Construction Law",
        "Business Law",
        "Social Security Law",
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
        "Business law firm in Strasbourg — corporate law, commercial law, employment law, banking and insurance law, real estate and construction law.",
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
      areaServed: ["Strasbourg", "Alsace", "Grand Est", "France", "Germany"],
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
      "@id": "https://www.thalinger-avocat.fr/en/about",
      name: "About — Maître Christian THALINGER",
      description:
        "Biography and background of Maître Christian THALINGER, business lawyer at the Strasbourg Bar.",
      isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
      about: { "@id": "https://www.thalinger-avocat.fr/#christian-thalinger" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thalinger-avocat.fr/en" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.thalinger-avocat.fr/en/about" },
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
      name: "What areas of law does Maître Thalinger cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maître Christian THALINGER practises primarily in corporate law, commercial law, employment law, banking and insurance law, and real estate and construction law. His approach is geared towards the strategic support of SME owners and entrepreneurs.",
      },
    },
    {
      "@type": "Question",
      name: "How does an initial consultation with Maître Thalinger work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first exchange allows a clear picture of your situation to be formed without commitment. Maître Thalinger listens to your concerns, identifies the legal risks, and presents the options available with their implications. The goal is to give you the clarity you need to decide on next steps.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fees for a business lawyer in Strasbourg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees depend on the nature and complexity of the matter. Maître Thalinger offers several billing arrangements: hourly rate, fixed fee per matter, or a retainer for ongoing support. An estimate is always provided before any engagement begins.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a business lawyer and a general practice lawyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A business lawyer focuses on company-related matters: incorporation, commercial contracts, employer-employee relations, disputes between partners. Their approach systematically integrates the economic and strategic dimension of legal decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Is the initial consultation free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The first exchange is free, without obligation and confidential. It allows us to understand your situation, identify the legal issues, and assess whether legal support is appropriate. Its duration and format are confirmed when the appointment is arranged.",
      },
    },
    {
      "@type": "Question",
      name: "Can Maître Thalinger act at short notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Certain situations (formal notices, court summons, social security audits, shareholder disputes) require a swift response. Maître Thalinger commits to responding within 24 hours and can arrange an initial exchange at short notice.",
      },
    },
    {
      "@type": "Question",
      name: "Does Maître Thalinger speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Maître Thalinger is fluent in English and can assist English-speaking clients with their legal matters in France. The website is also available in English.",
      },
    },
  ],
};

// ─── Page data ────────────────────────────────────────────────────────────────

const approachPillars = [
  {
    title: "Strategic",
    text: "I take an interest in your market, your competitors, your timeline, and your ambitions, because a legal answer that ignores business reality is not sufficient.",
  },
  {
    title: "Preventive",
    text: "My approach is built on anticipation: identifying the legal risks on your growth path and addressing them before they become obstacles.",
  },
  {
    title: "Personal",
    text: "The person who understands your business today is the one advising you tomorrow. That is how a sound long-term strategy is built.",
  },
];

const educationItems = [
  { period: "2020 – 2021", title: "CAPA — Bar Professional Training Certificate", org: "École régionale des avocats du Grand Est", place: "Strasbourg", note: "" },
  { period: "2018 – 2019", title: "CRFPA — Criminal Law", org: "Université de Strasbourg", place: "Strasbourg", note: "" },
  { period: "2017 – 2018", title: "LLM in Contract Law (M2)", org: "Université de Toulon", place: "Toulon", note: "Specialisation in contractual engineering. Thesis: \"Bitcoin as a new payment instrument\" — Distinction" },
  { period: "2016 – 2017", title: "LLM in International & European Law (M1)", org: "Université de Strasbourg", place: "Strasbourg", note: "" },
  { period: "2015 – 2016", title: "LLM in Business Law (M1)", org: "Université de Strasbourg", place: "Strasbourg", note: "" },
];

const experienceItems = [
  { period: "Since Jan. 2024", title: "Independent Practitioner", org: "THALINGER AVOCAT", place: "Strasbourg", focus: "Counsel and litigation in private and business law" },
  { period: "Oct. 2024 – May 2026", title: "Associate Lawyer", org: "Law Avocats", place: "Strasbourg", focus: "Employment law, commercial law, real estate & construction law" },
  { period: "Feb. 2023 – Jan. 2024", title: "Associate Lawyer", org: "Judicia Conseil", place: "Reichstett", focus: "Commercial litigation and business law counsel" },
  { period: "Nov. 2021 – Oct. 2022", title: "Associate Lawyer", org: "Orion Avocats", place: "Strasbourg", focus: "Banking and insurance litigation" },
  { period: "Jan. 2021 – Jul. 2021", title: "Trainee Lawyer", org: "Cabinet Philippe WITTNER", place: "Strasbourg", focus: "Employment law and social security contributions" },
  { period: "Jul. 2020 – Dec. 2020", title: "Legal Trainee", org: "SNCF Réseau", place: "Strasbourg", focus: "Employment law and business law" },
];

const caseStudies = [
  {
    area: "Corporate Law",
    title: "Shareholder dispute",
    situation: "Three shareholders, a complete deadlock. No decision could pass in general assembly. The business was still running, but no one was steering it.",
    action: "Restructured the shareholders' agreement, established an operational governance framework, negotiated the exit of the minority shareholder.",
    result: "The business returned to normal operations within six weeks.",
    href: "/en/competences/droit-des-societes",
  },
  {
    area: "Employment Law",
    title: "Contested dismissal",
    situation: "An employer facing a wrongful dismissal claim before the Employment Tribunal. The file was poorly documented and the deadlines were tight.",
    action: "Built the defence file, identified procedural weaknesses in the opposing claim, represented the client at the hearing.",
    result: "Claim dismissed in full.",
    href: "/en/competences/droit-social",
  },
  {
    area: "Real Estate & Construction Law",
    title: "Construction defects after handover",
    situation: "A property owner discovering structural defects six months after taking delivery of a construction project. The builder had gone silent.",
    action: "Formal notice, activation of the statutory guarantees, direct negotiation with the damage insurance provider.",
    result: "Compensation obtained without court proceedings.",
    href: "/en/competences/droit-immobilier-construction",
  },
  {
    area: "Commercial Law",
    title: "Unpaid debt",
    situation: "A company waiting on payment of a significant invoice for over eight months. Follow-up reminders had produced nothing.",
    action: "Pre-litigation strategy, payment order application, negotiation of a repayment schedule.",
    result: "Full recovery achieved, commercial relationship preserved.",
    href: "/en/competences/droit-commercial",
  },
];

const faqItems = [
  {
    question: "What areas of law does Maître Thalinger cover?",
    answer: "Maître Christian THALINGER practises primarily in corporate law, commercial law, employment law, banking and insurance law, and real estate and construction law. His approach is geared towards the strategic support of SME owners and entrepreneurs.",
  },
  {
    question: "How does an initial consultation work?",
    answer: "The first exchange allows a clear picture of your situation to be formed without commitment. Maître Thalinger listens to your concerns, identifies the legal risks, and presents the available options with their implications. The goal is to give you the clarity you need to decide on next steps.",
  },
  {
    question: "What are the fees for a business lawyer in Strasbourg?",
    answer: "Fees depend on the nature and complexity of the matter. Maître Thalinger offers several billing arrangements: hourly rate, fixed fee per matter, or a retainer for ongoing support. An estimate is always provided before any engagement begins.",
  },
  {
    question: "What is the difference between a business lawyer and a general practice lawyer?",
    answer: "A business lawyer focuses on company-related matters: incorporation, commercial contracts, employer-employee relations, disputes between partners. Their approach systematically integrates the economic and strategic dimension of legal decisions.",
  },
  {
    question: "Is the initial consultation free?",
    answer: "Yes. The first exchange is free, without obligation and confidential. It allows us to understand your situation, identify the legal issues, and assess whether legal support is appropriate. Its duration and format are confirmed when the appointment is arranged.",
  },
  {
    question: "Can Maître Thalinger act at short notice?",
    answer: "Yes. Certain situations (formal notices, court summons, social security audits, shareholder disputes) require a swift response. Maître Thalinger commits to responding within 24 hours and can arrange an initial exchange at short notice.",
  },
  {
    question: "Does Maître Thalinger speak English?",
    answer: "Yes, Maître Thalinger is fluent in English and can assist English-speaking clients with their legal matters in France. The website is also available in English.",
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

const fallbackReviews = {
  placeUrl: "https://www.google.com/maps/place/?q=place_id:ChIJG1o0kVXJlkcRkMxPv0VL_WM",
  rating: 5.0,
  totalReviews: 2,
  reviews: [
    {
      author: "Arbogast Laura",
      authorUrl: "https://www.google.com/maps/contrib/100264503749605105444/reviews",
      rating: 5,
      text: "Nous tenons à remercier chaleureusement Maître Thalinger pour la qualité de son accompagnement.\n\nProfessionnel, réactif et particulièrement à l'écoute, il a su nous conseiller et nous rassurer à chaque étape avec beaucoup de sérieux et de bienveillance. Son implication, sa disponibilité et la clarté de ses explications ont été très appréciées.\n\nNous recommandons Maître Thalinger sans hésitation à toute personne recherchant un avocat compétent et humain. Encore merci pour votre aide précieuse !",
      date: "il y a une semaine",
    },
    {
      author: "Marc CHRETIEN",
      authorUrl: "https://www.google.com/maps/contrib/117262535581386929646/reviews",
      rating: 5,
      text: "Excellent avocat, rigoureux et d'un professionnalisme exemplaire. Maître Thalinger m'a accompagné sur un dossier. Ses conseils stratégiques et sa réactivité ont fait toute la différence. Je lui accorde toute ma confiance et le recommande sans hésiter.",
      date: "il y a une semaine",
    },
  ] as import("@/components/GoogleReviews").GoogleReview[],
};

export default async function AboutPage() {
  const liveReviews = await fetchGoogleReviews();
  const reviewsData = liveReviews ?? fallbackReviews;

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
        eyebrow="Business Lawyer in Strasbourg"
        staticLine="Maître Christian THALINGER"
        description="A business lawyer in Strasbourg, I have been a member of the Bar since 2022 and advise clients in French and English. I structure every matter around one conviction: complexity is managed through rigour and explanation, never through opacity. When the stakes are high, I tell the truth, including what is uncomfortable. This is the approach I apply across every area of my practice."
        imageAlt="Maître Christian THALINGER, business lawyer at the Strasbourg Bar"
        ctaPrimaryLabel="Get in touch"
        ctaPrimaryHref="/en#contact"
        ctaPhone="+33 6 37 33 19 26"
      />

      <GoldDivider />

      {/* ── 2. APPROACH ─────────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-gold/60">
              My approach
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Three commitments in service of your business.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {approachPillars.map((pillar) => (
              <AnimatedItem key={pillar.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <h3 className="mb-5 font-serif text-lg font-normal leading-snug text-navy">{pillar.title}</h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{pillar.text}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* ── 3. BACKGROUND ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">Background</p>
            <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              A multidisciplinary approach.
            </h2>
            <div className="max-w-2xl space-y-5 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              <p>
                After training at the University of Strasbourg and specialising in contractual engineering
                in Toulon, I directed my research towards bitcoin as a payment instrument — at a time when
                the legal questions surrounding digital assets were still largely unexplored.
              </p>
              <p>
                Called to the Strasbourg Bar in January 2022, I practised at several Strasbourg firms,
                deliberately across different disciplines: banking and insurance law, commercial litigation,
                SME counsel in business law. Each step added another layer of insight into the problems
                that businesses face.
              </p>
              <p>
                I then broadened this practice through a firm collaboration between October 2024 and
                May 2026, covering employment law, real estate law, and construction law.
              </p>
              <p>
                In January 2024, I founded THALINGER Avocat.
              </p>
              <p>
                Today, the firm brings these experiences together in service of an approach built on
                strategic thinking, risk anticipation, and decision-making clarity.
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
                    Professional experience
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

              {/* Education — second */}
              <details className="group border-t-2 border-gold">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-navy-muted">Education</span>
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
              Cases I handle
            </p>
            <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Examples of matters handled.
            </h2>
            <p className="max-w-xl font-sans text-[0.9375rem] leading-[1.9] text-white/55">
              Anonymised situations. Each matter is unique; these examples illustrate the nature
              of interventions and the approach adopted.
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
                        Outcome
                      </p>
                      <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">{cs.result}</p>
                    </div>
                  </div>
                  <Link
                    href={cs.href}
                    className="mt-6 inline-flex items-center gap-2 font-serif text-sm text-navy transition-colors hover:text-gold"
                  >
                    Learn more
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
                Regain control.
              </h2>
              <div className="mb-12 space-y-5 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                <p>
                  A good lawyer is measured by the speed at which their client regains control of the situation.
                  THALINGER Avocat is built around that turning point: the moment when a situation shifts from
                  endured to mastered.
                </p>
              </div>

              {/* Practice area links */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Corporate Law", href: "/en/competences/droit-des-societes" },
                  { label: "Commercial Law", href: "/en/competences/droit-commercial" },
                  { label: "Employment Law", href: "/en/competences/droit-social" },
                  { label: "Banking & Financial Law", href: "/en/competences/droit-bancaire-financier" },
                  { label: "Insurance Law", href: "/en/competences/droit-des-assurances" },
                  { label: "Real Estate Law", href: "/en/competences/droit-immobilier-construction" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-full border-2 border-gold px-4 py-2 font-sans text-[0.8125rem] text-navy transition-all duration-200 hover:bg-navy hover:text-white"
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
              Frequently asked questions
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Questions I am often asked.
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl">
            <div className="border-t-2 border-gold">
              {faqItems.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
            <p className="mt-8 font-sans text-sm text-navy/50">
              Questions about fees?{" "}
              <Link
                href="/en/honoraires"
                className="text-navy transition-colors hover:text-gold"
              >
                See the Fees page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <GoogleReviews {...reviewsData} locale="en" />

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Let&apos;s discuss your situation.
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Response within 24 hours. No-commitment initial exchange to assess together the nature
                of your legal situation and the options available.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/en#contact"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                  style={{ color: "#ffffff" }}
                >
                  Get in touch
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
