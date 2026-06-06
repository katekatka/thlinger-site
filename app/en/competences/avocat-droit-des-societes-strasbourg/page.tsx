﻿import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-societes-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-societes-strasbourg",
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
      "name": "When should a shareholders' agreement be drawn up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally at the time the company is formed, or before a new shareholder joins. The agreement governs the relationship between shareholders on points that the articles of association do not always address: governance, conditions for transferring shares, exit clauses, pre-emption or approval rights, and minority protection. Unlike the articles, which are filed at the registry and publicly available, the agreement remains confidential and binds only its signatories, which makes it the right place to address sensitive arrangements. A breach triggers contractual liability. Well drafted, it prevents a significant share of disputes and maps out in advance how a shareholder exit or a deadlock would be resolved — at a time when relations are still good."
      }
    },
    {
      "@type": "Question",
      "name": "Articles of association or shareholders' agreement: what is the difference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both govern the company, but on different levels. The articles of association are the mandatory founding document, filed and publicly available: they set out the corporate form, the purpose, the share capital, the management structure and the rules binding on all. The shareholders' agreement is an optional and confidential contract, binding only on its signatories: it refines governance and organises the relationship between shareholders (exit, pre-emption, tag-along rights, lock-up undertakings). One essential point: the agreement complements the articles, but does not replace them. It cannot contradict them or override a mandatory rule, and a breach of the agreement does not invalidate a corporate decision that complies with the articles; it gives rise to damages. It is the coherence between the two documents that genuinely protects the business."
      }
    },
    {
      "@type": "Question",
      "name": "What to do in the event of a deadlock between shareholders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several levers exist, to be activated according to the articles and the shareholders' agreement. The preferred first step is an amicable approach: mediation, governance changes, or a negotiated exit of a shareholder through the clauses of the agreement. Court action is a last resort — for example, to have a provisional administrator appointed when the company is paralysed, or to seek dissolution where the deadlock makes it impossible to continue the business. The right choice depends on the circumstances and the objectives of each party. The more the agreement has anticipated these situations (exit clauses, buy-out mechanisms, unblocking provisions), the faster and more controlled the resolution."
      }
    },
    {
      "@type": "Question",
      "name": "What is majority abuse and how is it challenged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a general-meeting resolution passed contrary to the company's interests and with the sole aim of benefiting the majority shareholders to the detriment of the minority. Two cumulative conditions must be met: the resolution must be contrary to the company's interests, and there must be an intentional breach of the principle of equality between shareholders. A classic example is the systematic reservation of profits without economic justification, permanently depriving minority shareholders of dividends. Two remedies are available: annulment of the resolution and an award of damages. The Cour de cassation clarified in 2025 that an action for annulment may be brought against the company alone where no compensation is sought from the majority shareholders. There is also, in mirror image, minority abuse — rarer — where a minority shareholder blocks a decision essential to the company's survival."
      }
    },
    {
      "@type": "Question",
      "name": "How can a business sale be secured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By structuring the transaction in advance. This involves a due diligence exercise (legal, accounting, tax, employment), choosing the right deal structure, precise drafting of the transactional documents, and above all, negotiating a warranty of assets and liabilities. The aim is to understand every commitment before signing, on both the seller's and the buyer's side. There are many sensitive points: seller's representations, conditions precedent, non-compete clauses, and price payment terms. A well-prepared deal prevents liabilities arising before the sale from resurfacing afterwards, to the detriment of either party."
      }
    },
    {
      "@type": "Question",
      "name": "What is a warranty of assets and liabilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is the clause that protects the buyer against unpleasant surprises after completion. Under the warranty of assets and liabilities (garantie d'actif et de passif), the seller undertakes to indemnify the buyer if a liability arising before the sale comes to light afterwards (a tax reassessment, a labour-tribunal claim, a supplier dispute), or if a declared asset turns out to be overvalued. Several parameters are negotiated: the cap, the duration, any step-down mechanism, and the trigger thresholds. These are governed by market practice, not by fixed rules: they vary considerably depending on the balance of power, the sector and the risk profile. To secure payment, part of the price may be placed in escrow or covered by a bank guarantee. Precise drafting of the clause is critical: vague wording offers only illusory protection."
      }
    },
    {
      "@type": "Question",
      "name": "How can a family business be transferred while minimising taxation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The principal tool is the Dutreil pact, which allows, subject to conditions, a 75% exemption on the value of the shares transferred for the calculation of gift or inheritance tax (article 787 B of the General Tax Code). The arrangement rests on share-retention undertakings — collective then individual — and the exercise of a management function. It is reserved for companies carrying on an operational business and excludes asset-management activities. Recent debate has centred on potential changes to the regime (including extended retention periods and the exclusion of certain non-business assets), but their exact scope must be verified against the version of the legislation in force at the time of the transaction. Given the complexity and evolving nature of this regime, bespoke advice is essential."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm offer video consultations for corporate law matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For a shareholder dispute, a business sale or a company structuring, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without needing to travel to Strasbourg."
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
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-societes-strasbourg#shareholder-deadlock"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sale of a business",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-societes-strasbourg#sale-of-business"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Structuring at formation",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-societes-strasbourg#structuring-at-formation"
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">When should a shareholders&apos; agreement be drawn up?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Ideally at the time the company is formed, or before a new shareholder joins. The agreement governs the relationship between shareholders on points that the articles of association do not always address: governance, conditions for transferring shares, exit clauses, pre-emption or approval rights, and minority protection. Unlike the articles, which are filed at the registry and publicly available, the agreement remains confidential and binds only its signatories, which makes it the right place to address sensitive arrangements. A breach triggers contractual liability. Well drafted, it prevents a significant share of disputes and maps out in advance how a shareholder exit or a deadlock would be resolved — at a time when relations are still good.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Articles of association or shareholders&apos; agreement: what is the difference?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Both govern the company, but on different levels. The articles of association are the mandatory founding document, filed and publicly available: they set out the corporate form, the purpose, the share capital, the management structure and the rules binding on all. The shareholders&apos; agreement is an optional and confidential contract, binding only on its signatories: it refines governance and organises the relationship between shareholders (exit, pre-emption, tag-along rights, lock-up undertakings). One essential point: the agreement complements the articles, but does not replace them. It cannot contradict them or override a mandatory rule, and a breach of the agreement does not invalidate a corporate decision that complies with the articles; it gives rise to damages. It is the coherence between the two documents that genuinely protects the business.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What to do in the event of a deadlock between shareholders?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Several levers exist, to be activated according to the articles and the shareholders&apos; agreement. The preferred first step is an amicable approach: mediation, governance changes, or a negotiated exit of a shareholder through the clauses of the agreement. Court action is a last resort — for example, to have a provisional administrator appointed when the company is paralysed, or to seek dissolution where the deadlock makes it impossible to continue the business. The right choice depends on the circumstances and the objectives of each party. The more the agreement has anticipated these situations (exit clauses, buy-out mechanisms, unblocking provisions), the faster and more controlled the resolution.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What is majority abuse and how is it challenged?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">It is a general-meeting resolution passed contrary to the company&apos;s interests and with the sole aim of benefiting the majority shareholders to the detriment of the minority. Two cumulative conditions must be met: the resolution must be contrary to the company&apos;s interests, and there must be an intentional breach of the principle of equality between shareholders. A classic example is the systematic reservation of profits without economic justification, permanently depriving minority shareholders of dividends. Two remedies are available: annulment of the resolution and an award of damages. The Cour de cassation clarified in 2025 that an action for annulment may be brought against the company alone where no compensation is sought from the majority shareholders. There is also, in mirror image, minority abuse — rarer — where a minority shareholder blocks a decision essential to the company&apos;s survival.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How can a business sale be secured?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">By structuring the transaction in advance. This involves a due diligence exercise (legal, accounting, tax, employment), choosing the right deal structure, precise drafting of the transactional documents, and above all, negotiating a warranty of assets and liabilities. The aim is to understand every commitment before signing, on both the seller&apos;s and the buyer&apos;s side. There are many sensitive points: seller&apos;s representations, conditions precedent, non-compete clauses, and price payment terms. A well-prepared deal prevents liabilities arising before the sale from resurfacing afterwards, to the detriment of either party.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What is a warranty of assets and liabilities?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">It is the clause that protects the buyer against unpleasant surprises after completion. Under the warranty of assets and liabilities (garantie d&apos;actif et de passif), the seller undertakes to indemnify the buyer if a liability arising before the sale comes to light afterwards (a tax reassessment, a labour-tribunal claim, a supplier dispute), or if a declared asset turns out to be overvalued. Several parameters are negotiated: the cap, the duration, any step-down mechanism, and the trigger thresholds. These are governed by market practice, not by fixed rules: they vary considerably depending on the balance of power, the sector and the risk profile. To secure payment, part of the price may be placed in escrow or covered by a bank guarantee. Precise drafting of the clause is critical: vague wording offers only illusory protection.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How can a family business be transferred while minimising taxation?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">The principal tool is the Dutreil pact, which allows, subject to conditions, a 75% exemption on the value of the shares transferred for the calculation of gift or inheritance tax (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047623071" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 787 B of the General Tax Code</a>). The arrangement rests on share-retention undertakings — collective then individual — and the exercise of a management function. It is reserved for companies carrying on an operational business and excludes asset-management activities. Recent debate has centred on potential changes to the regime (including extended retention periods and the exclusion of certain non-business assets), but their exact scope must be verified against the version of the legislation in force at the time of the transaction. Given the complexity and evolving nature of this regime, bespoke advice is essential.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm offer video consultations for corporate law matters?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. For a shareholder dispute, a business sale or a company structuring, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without needing to travel to Strasbourg.</div>
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

