﻿import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-bancaire-financier-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-bancaire-financier-strasbourg",
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
        "text": "Yes, on three grounds. First, as to form: since the reform of 1 January 2022, the rules have been consolidated in the Civil Code and the strict handwritten-statement requirements have been simplified, though formal requirements remain and non-compliance is still sanctioned. Second, on the merits: the proportionality of the commitment to the guarantor's income and assets. Third, the bank's own obligations: the duty to warn, annual information, and notification of the first missed payment. Analysing the instrument is therefore decisive before making any response to the institution."
      }
    },
    {
      "@type": "Question",
      "name": "Can a disproportionate guarantee be set aside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "More precisely, it is reduced. For guarantees signed since 1 January 2022, article 2300 of the Civil Code provides that if the commitment was, at the time of signature, manifestly disproportionate to the guarantor's income and assets, it is reduced to the amount the guarantor could reasonably have undertaken at that date. Disproportion is assessed solely at the date of signature, and the old rule of return to better fortune has gone: the bank can no longer rely on a subsequent improvement in the guarantor's situation. In practice, it is for the guarantor to prove the disproportion, which requires reconstructing their financial position at the time."
      }
    },
    {
      "@type": "Question",
      "name": "When can a bank be held liable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a failing by the institution has caused loss. The most common grounds are breach of the duty to warn a borrower or guarantor, failure to advise or inform, reckless support of an insolvent business, and abrupt termination of a credit facility. The 2021 reform extended protection to all individual guarantors, but the intensity of the duty to warn still depends on the guarantor's profile and the information available to them. The key point: loss must be demonstrated — often analysed as the lost chance of not having entered into the commitment."
      }
    },
    {
      "@type": "Question",
      "name": "Can a bank cancel a credit facility overnight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, except in strictly defined circumstances. For any open-ended facility other than an occasional one, article L. 313-12 of the Monetary and Financial Code requires written notice and a minimum notice period set at the time of grant, which cannot be less than sixty days. The bank is released from this obligation only where the business has engaged in seriously blameworthy conduct or its situation is irretrievably compromised. If these rules are not observed, the bank incurs liability and may be ordered to pay damages; reinstatement of the facility, however, remains rare in practice. An abrupt termination therefore nearly always warrants review."
      }
    },
    {
      "@type": "Question",
      "name": "How do I respond to a call on a guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before making any response to the bank, several checks are essential: the guarantee instrument and its required statements, the regularity of the call procedure, and the proportionality of the commitment at the date of signature. The bank's information obligations must also be verified: the annual notice to the guarantor (article 2302 of the Civil Code) and the notification of the first missed payment, the absence of which may result in the bank forfeiting accrued interest. Responding or paying in haste often forfeits these defences. The strategy — challenge, negotiate a reduction, or seek time to pay — is decided after this review."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do in the event of bank fraud or an unauthorised transaction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Where a payment transaction is unauthorised, the bank is in principle required to reimburse the customer promptly (under the framework of the PSD2 Directive and the Monetary and Financial Code). The customer may, however, bear an excess, in principle up to 50 euros. This protection is lost where the fraud or gross negligence is attributable to the customer — for example, voluntarily disclosing access codes — in which case the bank may refuse reimbursement. When facing a CEO fraud or fraudulent transfer, the immediate step is to report the transaction without delay and in writing, then gather evidence. The analysis focuses on what the bank should have detected and on any sharing of liability."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to bring a claim against my bank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In commercial matters, the general limitation period is five years (article L. 110-4 of the Commercial Code). However, the start date varies depending on the nature of the claim — often a decisive point: the date the loss occurred, knowledge of the breach, or the date of the call on the guarantee. In guarantee matters, some actions follow their own rules, sometimes linked to when the principal debt fell due. These rules are technical and carry serious consequences; it is therefore better to have your position reviewed early rather than let time run."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm offer video consultations for banking and finance matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For a banking dispute, a disputed guarantee or a credit withdrawal, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, with no need to travel to Strasbourg."
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
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-bancaire-financier-strasbourg#personal-guarantee"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Bank liability",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-bancaire-financier-strasbourg#bank-liability"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Business-financing dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-bancaire-financier-strasbourg#financing-dispute"
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

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can a personal guarantee be challenged?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes, on three grounds. First, as to form: since the reform of 1 January 2022, the rules have been consolidated in the Civil Code and the strict handwritten-statement requirements have been simplified, though formal requirements remain and non-compliance is still sanctioned. Second, on the merits: the proportionality of the commitment to the guarantor&apos;s income and assets. Third, the bank&apos;s own obligations: the duty to warn, annual information, and notification of the first missed payment. Analysing the instrument is therefore decisive before making any response to the institution.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can a disproportionate guarantee be set aside?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">More precisely, it is reduced. For guarantees signed since 1 January 2022, <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044071221" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 2300 of the Civil Code</a> provides that if the commitment was, at the time of signature, manifestly disproportionate to the guarantor&apos;s income and assets, it is reduced to the amount the guarantor could reasonably have undertaken at that date. Disproportion is assessed solely at the date of signature, and the old rule of &quot;return to better fortune&quot; has gone: the bank can no longer rely on a subsequent improvement in the guarantor&apos;s situation. In practice, it is for the guarantor to prove the disproportion, which requires reconstructing their financial position at the time.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">When can a bank be held liable?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">When a failing by the institution has caused loss. The most common grounds are breach of the duty to warn a borrower or guarantor, failure to advise or inform, reckless support of an insolvent business, and abrupt termination of a credit facility. The 2021 reform extended protection to all individual guarantors, but the intensity of the duty to warn still depends on the guarantor&apos;s profile and the information available to them. The key point: loss must be demonstrated — often analysed as the lost chance of not having entered into the commitment.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can a bank cancel a credit facility overnight?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">No, except in strictly defined circumstances. For any open-ended facility other than an occasional one, <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027643288" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 313-12 of the Monetary and Financial Code</a> requires written notice and a minimum notice period set at the time of grant, which cannot be less than sixty days. The bank is released from this obligation only where the business has engaged in seriously blameworthy conduct or its situation is irretrievably compromised. If these rules are not observed, the bank incurs liability and may be ordered to pay damages; reinstatement of the facility, however, remains rare in practice. An abrupt termination therefore nearly always warrants review.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How do I respond to a call on a guarantee?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Before making any response to the bank, several checks are essential: the guarantee instrument and its required statements, the regularity of the call procedure, and the proportionality of the commitment at the date of signature. The bank&apos;s information obligations must also be verified: the annual notice to the guarantor (<a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006150566/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 2302 of the Civil Code</a>) and the notification of the first missed payment, the absence of which may result in the bank forfeiting accrued interest. Responding or paying in haste often forfeits these defences. The strategy — challenge, negotiate a reduction, or seek time to pay — is decided after this review.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What should I do in the event of bank fraud or an unauthorised transaction?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Where a payment transaction is unauthorised, the bank is in principle required to reimburse the customer promptly (under the framework of the <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000031878407/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">PSD2 Directive</a> and the Monetary and Financial Code). The customer may, however, bear an excess, in principle up to 50 euros. This protection is lost where the fraud or gross negligence is attributable to the customer — for example, voluntarily disclosing access codes — in which case the bank may refuse reimbursement. When facing a CEO fraud or fraudulent transfer, the immediate step is to report the transaction without delay and in writing, then gather evidence. The analysis focuses on what the bank should have detected and on any sharing of liability.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How long do I have to bring a claim against my bank?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">In commercial matters, the general limitation period is five years (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027725867" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 110-4 of the Commercial Code</a>). However, the start date varies depending on the nature of the claim — often a decisive point: the date the loss occurred, knowledge of the breach, or the date of the call on the guarantee. In guarantee matters, some actions follow their own rules, sometimes linked to when the principal debt fell due. These rules are technical and carry serious consequences; it is therefore better to have your position reviewed early rather than let time run.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm offer video consultations for banking and finance matters?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. For a banking dispute, a disputed guarantee or a credit withdrawal, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, with no need to travel to Strasbourg.</div>
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

