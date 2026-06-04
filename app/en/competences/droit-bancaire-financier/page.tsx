import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Financing and banking relations",
    items: [
      "Credit facilities and termination",
      "Loan terms and negotiation",
      "Support in financing difficulties",
      "Debt restructuring and banking negotiation",
    ],
  },
  {
    title: "Banking fraud and liability",
    items: [
      "Banking fraud and CEO fraud",
      "Banker's duty of care",
      "Securing financial transactions",
      "Liability of banking institutions",
    ],
  },
  {
    title: "Guarantees and security interests",
    items: [
      "Joint and several guarantee",
      "Scope and validity of commitments",
      "Duty to advise and inform",
      "Challenging personal guarantees",
    ],
  },
  {
    title: "Financial intermediation",
    items: [
      "Investment service providers",
      "Banking and payment services intermediaries",
      "Finance brokers",
      "Professional liability and obligations",
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
      "name": "Can a personal guarantee be challenged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, depending on its validity, the bank's disclosure duties, and its proportionality to the guarantor's income and assets."
      }
    },
    {
      "@type": "Question",
      "name": "When can a bank be held liable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a failing by the institution (duty to warn, advise, inform) has caused loss, assessed on the circumstances."
      }
    },
    {
      "@type": "Question",
      "name": "How do I respond to a call on a guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By analyzing the instrument, the procedure, and the proportionality of the commitment before replying to the institution."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of banking-and-finance work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Challenging a personal guarantee",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier#personal-guarantee"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Bank liability",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier#bank-liability"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Business-financing dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier#financing-dispute"
    }
  ]
} as const;

export default function BankingFinancialLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Banking &amp; Financial Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Your financing commits you. Find out to what, exactly.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Loan terms, joint and several guarantees, personal security interests: these
              commitments are often signed in the urgency of a financing need, without
              measuring their true scope. Yet a poorly framed guarantee can expose your
              personal assets well beyond the initial amount. A unilateral credit withdrawal
              by the bank can suffocate a business overnight. The firm intervenes to analyse
              your financial commitments, negotiate balanced terms, and challenge those that
              exceed the bank&apos;s statutory duties to inform and advise.
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
                The bank has obligations towards you. Not only the other way around.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Duty of care, duty to advise, liability for abusive support or abrupt withdrawal
                of credit facilities: banking law protects borrowers and guarantors as much as it
                constrains them. Yet few clients know the leverage they hold when facing a
                financial institution. CEO fraud, unauthorised transactions, breaches by financial
                intermediaries: in these situations, it is the bank that bears liability â€” not
                you. The firm helps you identify those levers and assert them, whether in
                negotiation or in litigation.
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
              Examples of banking-and-finance work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Guarantees, financing, bank liability: dealings with financial institutions demand a close reading of the commitments made. The following examples illustrate the approach taken.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="personal-guarantee" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Challenging a personal guarantee</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">An executive gave a personal guarantee for business financing. The bank calls on the guarantee; its scope and validity are in question.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the guarantee instrument and the bank&apos;s disclosure duties, check on the proportionality of the commitment, building the defense.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Verifying the validity of the guarantee and defending the executive on the contestable points.</dd>
                </div>
              </dl>
            </details>

            <details id="bank-liability" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Bank liability</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A company believes it suffered loss from a bank&apos;s failing in a financing or advice. The institution&apos;s liability is in play.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analysis of the contractual relationship and the bank&apos;s duties, assessment of the loss, action against the institution and the intermediaries involved.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Establishing any breach and enforcing the company&apos;s rights.</dd>
                </div>
              </dl>
            </details>

            <details id="financing-dispute" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Business-financing dispute</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A company and its lender disagree on the terms or performance of a financing.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the financing contract and its performance, identification of the disputed points, negotiation or litigation depending on the client&apos;s interest.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifying each party&apos;s obligations and defending the company&apos;s position.</dd>
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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Can a personal guarantee be challenged?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Yes, depending on its validity, the bank&apos;s disclosure duties, and its proportionality to the guarantor&apos;s income and assets.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">When can a bank be held liable?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">When a failing by the institution (duty to warn, advise, inform) has caused loss, assessed on the circumstances.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">How do I respond to a call on a guarantee?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">By analyzing the instrument, the procedure, and the proportionality of the commitment before replying to the institution.</p>
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
              Discuss your banking and finance matters
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

