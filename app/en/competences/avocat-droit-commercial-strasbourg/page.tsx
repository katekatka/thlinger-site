﻿import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg",
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
        "text": "Through a graduated strategy. Start with a formal reminder, then a formal demand letter by registered post, and finally, if necessary, a court procedure such as an order to pay (injonction de payer). This route is fast and effective where the debt is certain, liquid and due: it enables a court order to be obtained without a hearing unless the debtor contests it. Note: between professionals, late-payment penalties and the flat-rate recovery fee of 40 euros are due as of right from the moment of the delay, without any prior demand (articles L. 441-10 and D. 441-5 of the Commercial Code). The choice of procedure depends on the amount, the debtor's solvency and the importance of preserving the relationship."
      }
    },
    {
      "@type": "Question",
      "name": "What are the statutory payment terms between professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the absence of agreement, the default period is 30 days from receipt of the goods or completion of the service. By contract, it may be extended to 60 calendar days from the date of the invoice, or 45 days end of month if expressly provided in the agreement (article L. 441-10 of the Commercial Code). These rules are a matter of public policy: a clause providing for a period exceeding the statutory caps exposes the parties to penalties and may be set aside, though the precise consequence depends on the facts. Where payment is late, penalties and the flat-rate fee of 40 euros apply automatically, without any prior demand."
      }
    },
    {
      "@type": "Question",
      "name": "What is abrupt termination of a commercial relationship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is the ending, without sufficient notice, of an established commercial relationship, sanctioned by article L. 442-1 II of the Commercial Code. To be protected, the relationship must display sufficient regularity, intensity and stability for the victim to have legitimately anticipated its continuation. The party terminating the relationship must give written notice, taking into account in particular the length of the relationship and industry practice. The termination may be total or partial (a sudden reduction in volumes). Only the loss caused by the abruptness — not by the termination itself — is compensable."
      }
    },
    {
      "@type": "Question",
      "name": "How much can an abrupt termination of a commercial relationship cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compensation is calculated primarily on the margin lost during the missing notice period. The victim is awarded the gross margin, or contribution margin, that would have been earned during the notice period that should have been given. Depending on the circumstances, the award can range from a few thousand to several million euros. Other losses may be added: loss in the value of the goodwill resulting from the reduction in clientele, redundancy costs for dedicated staff, and unrecovered investment. Conversely, a victim who took no steps to reorganise may see the award reduced. Precise reconstruction of the accounts — often with the assistance of an expert — is therefore decisive."
      }
    },
    {
      "@type": "Question",
      "name": "Should a lawyer review the firm's terms of sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, because clear and tailored general terms prevent a significant share of disputes. Terms of sale govern the most sensitive aspects of a commercial relationship: price, payment terms, late-payment penalties, retention of title, limitation of liability, and termination. A missing or ambiguous clause is generally paid for when a dispute arises, which is too late to correct it. Securing them in advance always costs less than litigation. It is also an opportunity to verify compliance with public-policy rules, particularly on payment terms and penalties, where poor contractual drafting creates a risk of sanction."
      }
    },
    {
      "@type": "Question",
      "name": "What should a company do when facing financial difficulties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Act early, because the legal framework offers protective tools that are often overlooked, and all the more effective when used before a full-blown crisis. The mandat ad hoc and conciliation are confidential procedures allowing negotiations with creditors under the supervision of a third party appointed by the court; conciliation is available to a company that has not been in a state of cessation of payments for more than forty-five days. The safeguard procedure (sauvegarde) protects the company that anticipates its difficulties before reaching cessation of payments. The earlier the action, the wider the room for negotiation and protection. Waiting narrows the options and increases the risks for the director."
      }
    },
    {
      "@type": "Question",
      "name": "When must cessation of payments be declared?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Within forty-five days. Cessation of payments arises when the company is unable to meet its current liabilities with its available assets. The director must file a declaration with the court within forty-five days, unless an application to open conciliation proceedings has been made within that period. This is critical: failure to declare within the deadline may constitute a management fault and engage the director's personal liability, though the concrete sanctions depend on the specific facts. In addition, a creditor in principle has two months from the publication of the opening judgment in the BODACC to file its claim. Again, speed protects."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm offer video consultations for commercial law matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For an unpaid invoice, a commercial dispute or insolvency proceedings, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without needing to travel to Strasbourg."
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
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg#unpaid-invoice"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Termination of an established commercial relationship",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg#termination-commercial-relationship"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Commercial-contract dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg#commercial-contract-dispute"
    }
  ]
} as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg",
  name: "Commercial Law Solicitor in Strasbourg",
  description: "Commercial law advice and litigation: contracts, disputes between traders, termination of commercial relationships, insolvency proceedings. Thalinger law firm, Strasbourg.",
  url: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-commercial-strasbourg",
  inLanguage: "en",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
} as const;

export default function CommercialLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Commercial Law — Strasbourg
            </h1>
            <h2 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              A poorly drafted contract is invisible. Until the dispute.
            </h2>
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

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How do I recover an unpaid invoice?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Through a graduated strategy. Start with a formal reminder, then a formal demand letter by registered post, and finally, if necessary, a court procedure such as an order to pay (injonction de payer). This route is fast and effective where the debt is certain, liquid and due: it enables a court order to be obtained without a hearing unless the debtor contests it. Note: between professionals, late-payment penalties and the flat-rate recovery fee of €40 are due as of right from the moment of the delay, without any prior demand (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">articles L. 441-10</a> and <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043197457" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">D. 441-5 of the Commercial Code</a>). The choice of procedure depends on the amount, the debtor&apos;s solvency and the importance of preserving the relationship.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What are the statutory payment terms between professionals?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">In the absence of agreement, the default period is 30 days from receipt of the goods or completion of the service. By contract, it may be extended to 60 calendar days from the date of the invoice, or 45 days end of month if expressly provided in the agreement (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 441-10 of the Commercial Code</a>). These rules are a matter of public policy: a clause providing for a period exceeding the statutory caps exposes the parties to penalties and may be set aside, though the precise consequence depends on the facts. Where payment is late, penalties and the flat-rate fee of €40 apply automatically, without any prior demand.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What is abrupt termination of a commercial relationship?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">It is the ending, without sufficient notice, of an established commercial relationship, sanctioned by <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414278/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 442-1 II of the Commercial Code</a>. To be protected, the relationship must display sufficient regularity, intensity and stability for the victim to have legitimately anticipated its continuation. The party terminating the relationship must give written notice, taking into account in particular the length of the relationship and industry practice. The termination may be total or partial (a sudden reduction in volumes). Only the loss caused by the abruptness — not by the termination itself — is compensable.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How much can an abrupt termination of a commercial relationship cost?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Compensation is calculated primarily on the margin lost during the missing notice period. The victim is awarded the gross margin, or contribution margin, that would have been earned during the notice period that should have been given. Depending on the circumstances, the award can range from a few thousand to several million euros. Other losses may be added: loss in the value of the goodwill resulting from the reduction in clientele, redundancy costs for dedicated staff, and unrecovered investment. Conversely, a victim who took no steps to reorganise may see the award reduced. Precise reconstruction of the accounts — often with the assistance of an expert — is therefore decisive.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Should a lawyer review the firm&apos;s terms of sale?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes, because clear and tailored general terms prevent a significant share of disputes. Terms of sale govern the most sensitive aspects of a commercial relationship: price, payment terms, late-payment penalties, retention of title, limitation of liability, and termination. A missing or ambiguous clause is generally paid for when a dispute arises, which is too late to correct it. Securing them in advance always costs less than litigation. It is also an opportunity to verify compliance with public-policy rules, particularly on payment terms and penalties, where poor contractual drafting creates a risk of sanction.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What should a company do when facing financial difficulties?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Act early, because the legal framework offers protective tools that are often overlooked, and all the more effective when used before a full-blown crisis. The mandat ad hoc and conciliation are confidential procedures allowing negotiations with creditors under the supervision of a third party appointed by the court; conciliation is available to a company that has not been in a state of cessation of payments for more than forty-five days. The safeguard procedure (sauvegarde) protects the company that anticipates its difficulties before reaching cessation of payments. The earlier the action, the wider the room for negotiation and protection. Waiting narrows the options and increases the risks for the director.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">When must cessation of payments be declared?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Within forty-five days. Cessation of payments arises when the company is unable to meet its current liabilities with its available assets. The director must file a declaration with the court within forty-five days, unless an application to open conciliation proceedings has been made within that period. This is critical: failure to declare within the deadline may constitute a management fault and engage the director&apos;s personal liability, though the concrete sanctions depend on the specific facts. In addition, a creditor in principle has two months from the publication of the opening judgment in the BODACC to file its claim. Again, speed protects.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm offer video consultations for commercial law matters?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. For an unpaid invoice, a commercial dispute or insolvency proceedings, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without needing to travel to Strasbourg.</div>
            </details>
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

