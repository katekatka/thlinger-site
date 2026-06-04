import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/droit-des-societes",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-des-societes",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Company formation",
    items: [
      "Formation of civil and commercial companies",
      "SARL, SAS and SCI",
      "Choice of legal structure",
      "Drafting articles of association",
    ],
  },
  {
    title: "Articles of association amendments",
    items: [
      "Change of registered office",
      "Amendment of corporate purpose",
      "Capital increases and reductions",
      "Updating articles of association",
    ],
  },
  {
    title: "Shareholders' agreements",
    items: [
      "Drafting shareholders' agreements",
      "Governance and allocation of powers",
      "Exit and pre-emption clauses",
      "Minority shareholder protection",
    ],
  },
  {
    title: "General meetings",
    items: [
      "Organising general meetings",
      "Approval of accounts",
      "Annual legal secretarial services",
      "Minutes and formalities",
    ],
  },
  {
    title: "Share transfers",
    items: [
      "Due diligence and transaction security",
      "Asset and liability warranties",
      "Support in negotiations",
    ],
  },
  {
    title: "Corporate litigation",
    items: [
      "Managing shareholder disputes",
      "Governance deadlocks",
    ],
  },
  {
    title: "Company transformation",
    items: [
      "Change of legal form",
      "Conversion from SARL to SAS",
      "Legal reorganisation of the company",
      "Governance adaptation",
    ],
  },
  {
    title: "Business transfer and asset restructuring",
    items: [
      "Family business transfers",
      "Dutreil pact",
      "Executive estate planning",
      "Succession planning for business owners",
      "Capital restructuring and family governance",
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
      "name": "When should I put a shareholders' agreement in place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally at formation, or before a new shareholder joins. It organizes the relationship between shareholders and prevents a large share of later disputes."
      }
    },
    {
      "@type": "Question",
      "name": "What can be done about a shareholder deadlock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several levers exist depending on the articles and agreement: mediation, governance changes, a negotiated exit, or court action as a last resort."
      }
    },
    {
      "@type": "Question",
      "name": "How do I secure the sale of my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By structuring the deal upfront: audit, deal structure, warranties, precise drafting, so every commitment is understood before signing."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of corporate-law work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Shareholder deadlock",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-des-societes#shareholder-deadlock"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sale of a business",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-des-societes#sale-of-business"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Structuring at formation",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-des-societes#structuring-at-formation"
    }
  ]
} as const;

export default function CorporateLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Corporate Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Structuring what determines how your company operates.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Articles of association, shareholders&apos; agreements, governance: these documents
              are rarely revisited after they are drafted. Yet they are the ones that determine
              who makes decisions, who exercises control and how deadlocks are resolved. The firm
              analyses the framework in which you wish to operate: legal form, allocation of
              powers, shareholders&apos; rights, decision-making procedures. The objective is to
              build a legal architecture genuinely suited to your activity and your goals. From
              company formation to future developments â€” such as the arrival of new shareholders,
              business growth or an acquisition â€” each structure is designed to support your
              development, not merely to fulfil a legal obligation.
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
                When the relationship between shareholders becomes an obstacle.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Abuse of majority, breach of a shareholders&apos; agreement, deadlock: shareholder
                disputes can paralyse a company and jeopardise everything you have built. The firm
                intervenes to analyse the situation, identify the legal levers available to you and
                protect your interests. Whether the solution lies in negotiation or litigation, the
                objective remains the same: to break the deadlock and preserve the continuity of
                your business.
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
              Examples of corporate-law work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              A company&apos;s life raises high-stakes decisions: structuring, governance, transfer. The following examples illustrate how such situations are analyzed and structured.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="shareholder-deadlock" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Shareholder deadlock</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Three shareholders, a lasting deadlock. Decisions no longer pass in general meeting. The business keeps running, but its leadership is paralyzed.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the shareholders&apos; agreement and governance, identification of ways to break the deadlock, structuring of options: revising the agreement, operational governance, or a negotiated exit for the minority shareholder.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Restoring functional decision-making while preserving the business and each party&apos;s interests.</dd>
                </div>
              </dl>
            </details>

            <details id="sale-of-business" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Sale of a business</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">An owner is considering selling the company. The deal affects personal assets and the future of the business; the implications must be understood before any commitment.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Legal structuring of the deal, securing the warranties (notably the representations-and-warranties, garantie d&apos;actif et de passif), drafting and negotiating the sale documents.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Securing the transfer and clarifying the commitments made by seller and buyer alike.</dd>
                </div>
              </dl>
            </details>

            <details id="structuring-at-formation" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Structuring at formation</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Founders are launching their company. The choice of corporate form and allocation of powers will shape how the business runs.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Advice on the appropriate corporate form, drafting the articles and shareholders&apos; agreement, organizing governance and capital operations.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Setting a clear framework from the start to prevent deadlock and secure future strategic decisions.</dd>
                </div>
              </dl>
            </details>

            <div className="bg-gold mt-10" style={{ height: "2px" }} />

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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">When should I put a shareholders&apos; agreement in place?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Ideally at formation, or before a new shareholder joins. It organizes the relationship between shareholders and prevents a large share of later disputes.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">What can be done about a shareholder deadlock?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Several levers exist depending on the articles and agreement: mediation, governance changes, a negotiated exit, or court action as a last resort.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">How do I secure the sale of my business?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">By structuring the deal upfront: audit, deal structure, warranties, precise drafting, so every commitment is understood before signing.</p>
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
              Discuss your corporate law matters
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

