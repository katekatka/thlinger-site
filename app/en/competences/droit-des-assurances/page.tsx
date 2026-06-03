import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/droit-des-assurances",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-des-assurances",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Insurance contracts and cover",
    items: [
      "Analysis and interpretation of insurance policies",
      "Exclusion clauses and coverage limitations",
      "Loss assessment and quantification",
      "Securing cover and maximising compensation",
    ],
  },
  {
    title: "Property and personal insurance",
    items: [
      "Property and asset insurance",
      "Personal insurance",
      "Protection of business and personal assets",
      "Claims handling and compensation",
    ],
  },
  {
    title: "Liability and risk coverage",
    items: [
      "Public and employer liability insurance",
      "Professional indemnity and operational risks",
      "Risk management and claims notification",
      "Defence of the policyholder's interests",
    ],
  },
  {
    title: "Expert proceedings and litigation",
    items: [
      "Agreed and court-appointed expert assessments",
      "Challenging claim and coverage denials",
      "Negotiation with insurers",
      "Insurance law litigation",
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
      "name": "What if the insurer denies cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Analyze the reason against the policy clauses. A denial is not final and can be challenged when it rests on a questionable reading."
      }
    },
    {
      "@type": "Question",
      "name": "Should I have support during an expert assessment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The assessment strongly shapes compensation; support lets you present arguments and follow operations knowingly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I challenge insufficient compensation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By documenting the real loss and testing the insurer's valuation against the actual damage, through negotiation and, if needed, litigation."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of insurance-law work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Contested denial of cover",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-des-assurances#denial-of-cover"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Loss assessment and compensation",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-des-assurances#loss-assessment"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Support during a complex expert assessment",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-des-assurances#expert-assessment"
    }
  ]
} as const;

export default function InsuranceLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Insurance Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Coverage that holds<br className="hidden md:block" /> when it counts.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              An insurance policy only shows its true worth at the moment of a claim.
              The firm supports companies and directors in securing their cover, defending their
              interests against insurers, and ensuring that a denial of compensation does
              not permanently damage their business.
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
                Know your limits before you need to use them.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Businesses often assume they are covered â€” until a claim exposes the real
                limits of their policy. An exclusion clause, a disputed loss assessment,
                a rejected claim, or a challenged expert report can quickly put pressure
                on cash flow, stall decisions, and threaten business continuity. The firm supports
                clients in securing their cover, identifying exposure before a dispute arises,
                and defending their interests against insurers â€” whether through agreed expert
                proceedings, court-appointed assessments, or insurance litigation. The goal
                is always the same: contain the financial and operational damage before it
                compounds.
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
              Examples of insurance-law work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Denied cover, compensation, expert assessment: after a loss, the true scope of cover turns on the policy&apos;s details. The following examples illustrate how it is defended.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <div id="denial-of-cover" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Contested denial of cover</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">After a loss, the insurer denies cover by relying on a policy clause. The company disputes that reading.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analysis of the policy clauses and cover conditions, check on the basis for the denial, challenge and negotiation with the insurer.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifying the true scope of cover and enforcing the insured&apos;s rights.</dd>
                </div>
              </dl>
            </div>

            <div id="loss-assessment" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Loss assessment and compensation</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A loss caused significant damage. The insurer&apos;s proposed assessment seems insufficient against the actual damage.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analysis of the losses, support during the expert assessment, challenge to the valuation, and negotiation of the compensation.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Having the true extent of the loss recognized and defending a coherent level of compensation.</dd>
                </div>
              </dl>
            </div>

            <div id="expert-assessment" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Support during a complex expert assessment</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A technical assessment is ordered after a loss. Its conclusions will drive the compensation; the insured does not want to face it alone.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Preparation for the assessment, presentation of arguments and evidence, monitoring of operations, and analysis of the report.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Ensuring the insured&apos;s interests are represented at every stage.</dd>
                </div>
              </dl>
            </div>

            <p className="mt-10 border-t border-navy/10 pt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45 italic">
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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">What if the insurer denies cover?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Analyze the reason against the policy clauses. A denial is not final and can be challenged when it rests on a questionable reading.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Should I have support during an expert assessment?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">The assessment strongly shapes compensation; support lets you present arguments and follow operations knowingly.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">How do I challenge insufficient compensation?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">By documenting the real loss and testing the insurer&apos;s valuation against the actual damage, through negotiation and, if needed, litigation.</p>
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
              Discuss your insurance matters
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

