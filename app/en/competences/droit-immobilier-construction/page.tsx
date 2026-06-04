import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Construction and contractor liability",
    items: [
      "Contractor liability",
      "Statutory and ten-year warranties",
      "Defects and poor workmanship",
      "Construction and site disputes",
    ],
  },
  {
    title: "Expert proceedings and technical disputes",
    items: [
      "Agreed and court-appointed expert assessments",
      "Loss assessment",
      "Support during expert proceedings",
      "Defence of interests in litigation",
    ],
  },
  {
    title: "Leases and tenancy relations",
    items: [
      "Lease drafting",
      "Negotiation of tenancy arrangements",
      "Securing contractual commitments",
      "Managing landlord and tenant obligations",
    ],
  },
  {
    title: "Tenancy disputes and eviction",
    items: [
      "Rent arrears and breach of contract",
      "Lease termination",
      "Eviction proceedings",
      "Defence of landlords",
    ],
  },
  {
    title: "Real estate transactions",
    items: [
      "Sale of property under future completion agreement (VEFA)",
      "Acquisition and sale of real estate",
      "Securing real estate transactions",
      "Seller warranties and obligations",
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I do about defects after handover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Identify the applicable warranty (completion, two-year, ten-year), serve formal notice, and activate the structural-damage insurance. The amicable route is often tried before litigation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle a commercial-lease dispute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By reviewing the lease and each party's obligations, then choosing between negotiation and action depending on the stakes and the relationship."
      }
    },
    {
      "@type": "Question",
      "name": "Should a lawyer frame my real-estate project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Framing contracts and responsibilities upfront strongly reduces the risk of disputes during and after the works."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of real-estate-and-construction work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Construction defects after handover",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction#construction-defects"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Commercial landlord-tenant dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction#commercial-lease-dispute"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Securing a real-estate project",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction#real-estate-project"
    }
  ]
} as const;

export default function RealEstateLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Real Estate Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Building also means building a legal framework.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Defects, structural disorders, unactivated warranties: in construction matters,
              disputes often come to light after works are accepted, when the deadlines for
              action are already running. The firm intervenes to establish contractor liability,
              activate statutory and ten-year warranties, and assist you in agreed or
              court-appointed expert proceedings. Whether you are a project owner or a
              construction professional, every stage of a project creates obligations that
              are better anticipated than discovered in litigation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXT â€” navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-white md:text-[2.25rem]">
                A poorly negotiated lease is paid for throughout its entire term.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                The lease clauses signed today determine your rights and constraints for years
                to come. The firm secures the drafting of your leases, negotiates the tenancy
                terms and ensures a fair balance of obligations between landlord and tenant.
                In the event of rent arrears, breach of contract or a dispute over termination,
                the firm handles your defence and conducts the necessary proceedings to protect
                your interests.
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
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-navy md:text-[2.75rem]">
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
              Examples of real-estate-and-construction work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Defects, commercial leases, real-estate projects: construction and property involve multiple, long-lasting responsibilities. The following examples illustrate how these are framed and defended.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="construction-defects" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Construction defects after handover</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">An owner discovers structural defects several months after a project is handed over. Communication with the builder breaks down.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Formal notice, analysis of the applicable statutory warranties, activation of the structural-damage insurance (dommages-ouvrage), direct negotiation with the parties involved.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Enforcing the owner&apos;s warranties and seeking compensation, favoring an amicable resolution where possible.</dd>
                </div>
              </dl>
            </details>

            <details id="commercial-lease-dispute" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Commercial landlord-tenant dispute</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A landlord and commercial tenant disagree (rent, charges, condition report, renewal). The relationship grows tense.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the lease and each party&apos;s obligations, identification of the levers, negotiation or action depending on the client&apos;s interest.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifying the rights and obligations under the lease and defending the client&apos;s position.</dd>
                </div>
              </dl>
            </details>

            <details id="real-estate-project" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Securing a real-estate project</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A developer is starting a real-estate project. The contracts and responsibilities of the parties must be framed before launch.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Drafting and review of the contractual documents, allocation of responsibilities, advice on the applicable warranties.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Setting a clear framework upfront to limit the risk of disputes during and after the works.</dd>
                </div>
              </dl>
            </details>

            <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45">
              The situations described are illustrative, anonymized examples based on commonly encountered issues. They do not describe any identifiable matter and constitute neither a guarantee nor a prediction of outcome. Every case is assessed on its own circumstances.
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
              Frequently asked questions
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">What should I do about defects after handover?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Identify the applicable warranty (completion, two-year, ten-year), serve formal notice, and activate the structural-damage insurance. The amicable route is often tried before litigation.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">How do I handle a commercial-lease dispute?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">By reviewing the lease and each party&apos;s obligations, then choosing between negotiation and action depending on the stakes and the relationship.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Should a lawyer frame my real-estate project?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Framing contracts and responsibilities upfront strongly reduces the risk of disputes during and after the works.</p>
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
              href="/en#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
              style={{ color: "#ffffff" }}
            >
              Discuss your real estate project
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

