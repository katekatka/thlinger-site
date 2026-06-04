import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/droit-commercial",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-commercial",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "General terms of sale (GTS)",
    items: [
      "Framework for commercial relationships",
      "Liability and payment clauses",
      "Compliance of commercial practices",
      "Securing client transactions",
    ],
  },
  {
    title: "General terms of purchase (GTP)",
    items: [
      "Supplier relations",
      "Supply chain risk management",
      "Securing commercial commitments",
    ],
  },
  {
    title: "General terms of use (GTU)",
    items: [
      "Digital services and platforms",
      "Content protection",
      "Regulating online use",
      "Operator liability",
    ],
  },
  {
    title: "Commercial contracts",
    items: [
      "Service and distribution agreements",
      "Securing partnerships",
      "Contractual risk management",
    ],
  },
  {
    title: "Business asset sales",
    items: [
      "Acquisition and disposal of business assets",
      "Due diligence and transaction security",
      "Drafting and negotiating transfer deeds",
      "Commercial leases and business transfer",
      "Post-acquisition disputes",
      "Business transfer and takeover",
    ],
  },
  {
    title: "Commercial leases",
    items: [
      "Drafting commercial leases",
      "Precarious occupation agreements and short-term leases",
      "Lease negotiation and renewal",
      "Commercial rent review",
      "Tenancy disputes",
    ],
  },
  {
    title: "Debt recovery and unpaid invoices",
    items: [
      "Payment orders",
      "Interim measures",
      "Enforcement",
      "Management of late payments",
    ],
  },
  {
    title: "Commercial disputes",
    items: [
      "Contractual liability",
      "Disputes between commercial partners",
      "Termination of business relationships",
      "Defence of the company's interests",
    ],
  },
  {
    title: "Unfair competition",
    items: [
      "Commercial disruption",
      "Parasitic competition",
      "Damage to image and reputation",
      "Protection of strategic interests",
    ],
  },
  {
    title: "Prevention of business difficulties",
    items: [
      "Financial and operational reorganisation",
      "Negotiation with creditors",
      "Supporting directors in times of crisis",
      "Representation before courts",
    ],
  },
  {
    title: "Ad hoc mandate and conciliation",
    items: [
      "Finding amicable solutions",
      "Debt restructuring",
      "Confidential negotiation with creditors",
      "Preserving the company's business",
    ],
  },
  {
    title: "Collective proceedings",
    items: [
      "Support for directors",
      "Proof of debt",
      "Managing relations with insolvency officers",
      "Preserving assets and business activity",
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
      "name": "How do I recover an unpaid invoice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Through a graduated strategy: formal reminder, formal notice, then court procedures such as the order to pay. The choice depends on the amount, the debtor, and the relationship."
      }
    },
    {
      "@type": "Question",
      "name": "What is abrupt termination of a commercial relationship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ending an established relationship without sufficient notice may give rise to compensation, depending on its length and circumstances."
      }
    },
    {
      "@type": "Question",
      "name": "Should a lawyer review my terms of sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clear, tailored terms prevent a large share of disputes. Better secured before a dispute than after."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of commercial-law work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Unpaid invoice",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-commercial#unpaid-invoice"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Termination of an established commercial relationship",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-commercial#termination-commercial-relationship"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Commercial-contract dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-commercial#commercial-contract-dispute"
    }
  ]
} as const;

export default function CommercialLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Commercial Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              A poorly drafted contract is invisible. Until the dispute.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              GTC, GPC, terms of use, service agreements, commercial leases: these documents
              govern every business relationship you have. As long as things run smoothly,
              no one reads them twice. But a missing clause, an ambiguous limitation, or a
              deadline that does not reflect operational reality is enough to turn a
              disagreement into costly litigation. The firm drafts, negotiates and secures your
              contracts with one constant question: what happens when things go wrong?
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
                In commercial law, conflict is part of the game. How you manage it is not.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Unpaid debts, abrupt termination of business relationships, unfair competition,
                disputes between commercial partners: these situations put your cash flow,
                your reputation, and sometimes the continuity of your business at stake. The
                firm intervenes to recover your receivables, defend your interests in litigation,
                and protect your strategic positions against unfair practices.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. TEXT â€” white */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-navy md:text-[2.25rem]">
                Financial difficulties do not wait until you are ready.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                When cash flow tightens, every week counts. The legal framework offers
                protective tools that are often overlooked: ad hoc mandate, conciliation,
                safeguard proceedings. These mechanisms allow confidential negotiations with
                creditors and help preserve the business before the situation becomes
                irreversible. The firm supports directors at every stage, from amicable
                restructuring to formal insolvency proceedings, to protect what can be saved
                and prepare what comes next.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. INTERVENTIONS */}
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
              Examples of commercial-law work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Contracts, unpaid invoices, broken relationships: commercial disputes affect both cash flow and business ties. The following examples illustrate the approach taken.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="unpaid-invoice" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Unpaid invoice</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A company has waited several months for payment of a significant invoice. Reminders have gone unanswered.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Pre-litigation strategy, use of the appropriate recovery procedures (notably the order to pay, injonction de payer), negotiation of a payment schedule where the relationship can be preserved.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Securing payment while weighing whether the commercial relationship is worth keeping.</dd>
                </div>
              </dl>
            </details>

            <details id="termination-commercial-relationship" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Termination of an established commercial relationship</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A commercial partner abruptly ends a relationship that has run for several years. The company questions its rights and its loss.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the relationship and the conditions of termination, assessment of the loss, formal notice and, if needed, a claim for compensation.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Enforcing the rights arising from the termination and clarifying the options between negotiation and litigation.</dd>
                </div>
              </dl>
            </details>

            <details id="commercial-contract-dispute" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Commercial-contract dispute</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A disagreement arises over performance of a contract (terms of sale, distribution, services). Each side reads the text differently.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analysis of the clauses and each party&apos;s obligations, identification of weak points, building a position and representation in litigation if the amicable route fails.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifying the scope of the contractual commitments and defending the company&apos;s position.</dd>
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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">How do I recover an unpaid invoice?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Through a graduated strategy: formal reminder, formal notice, then court procedures such as the order to pay. The choice depends on the amount, the debtor, and the relationship.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">What is abrupt termination of a commercial relationship?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Ending an established relationship without sufficient notice may give rise to compensation, depending on its length and circumstances.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Should a lawyer review my terms of sale?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Clear, tailored terms prevent a large share of disputes. Better secured before a dispute than after.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 5. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <a
              href="/en#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
              style={{ color: "#ffffff" }}
            >
              Discuss your commercial matters
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

