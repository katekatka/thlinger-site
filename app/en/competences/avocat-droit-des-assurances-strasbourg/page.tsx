﻿import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-assurances-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-assurances-strasbourg",
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
      "name": "What should I do if the insurer refuses cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A denial of cover is never automatic. The first step is to check the stated reason against the exact policy clauses and applicable rules: exclusion, forfeiture, breach of a disclosure obligation. Many refusals rest on an extensive or questionable reading of a clause — yet an exclusion clause is only valid if it is express and specific (article L. 113-1 of the Insurance Code). The right response is a written, reasoned challenge based on the policy terms and claim documents, before considering the ombudsman or litigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the time limit to challenge a denial of cover or claim compensation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two years, as a rule. Almost all claims arising from an insurance contract are subject to a two-year limitation period running from the event giving rise to the right to compensation (article L. 114-1 of the Insurance Code) — far shorter than the standard five-year period under general law. Note: a simple email or letter exchange does not suspend this period. Only a registered letter, the appointment of an expert, or a court summons interrupts it. Many policyholders lose their rights because the insurer lets time run — prompt action is essential."
      }
    },
    {
      "@type": "Question",
      "name": "Can the insurer rely on an exclusion clause to deny cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not under all circumstances. An exclusion clause is only valid if it is express and specific (article L. 113-1 of the Insurance Code): it must identify precisely what is excluded, leaving no room for interpretation. A vague ground such as the policyholder's negligence is in practice contestable. Moreover, if the policy does not reproduce the grounds for interrupting the limitation period, the insurer cannot later invoke the two-year time bar. A denial based on a questionable clause nearly always warrants review before being accepted."
      }
    },
    {
      "@type": "Question",
      "name": "Should I have support during an expert assessment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The assessment strongly shapes compensation: it is the assessment that values the retained loss, and it is driven by the insurer. The expert it appoints is paid by it. In the event of a disagreement, the policyholder may request a counter-assessment and appoint their own expert, whose fees remain their responsibility unless the policy includes an expert fees cover. If the disagreement persists, a third expert is appointed and their findings are binding on the parties, with costs shared unless a specific clause provides otherwise. Having support allows you to present your case, follow the proceedings and secure a framework that will weigh heavily on the outcome."
      }
    },
    {
      "@type": "Question",
      "name": "How do I challenge insufficient compensation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By testing the insurer's valuation against the reality of the damage, with supporting documents: estimates, invoices, photographs, technical reports. The effective route starts with a documented counter-assessment that sets out a reasoned valuation against the insurer's. If the disagreement continues, a third-party assessment decides, then mediation or litigation if needed. Any challenge remains subject to the two-year time limit. It is the strength of the file, not the apparent balance of power, that determines the final amount."
      }
    },
    {
      "@type": "Question",
      "name": "What recourse do I have in a dispute with my insurer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recourse is graduated. You start with a written complaint to the company's customer service, then, if unsuccessful, you can refer the matter free of charge to the Médiateur de l'assurance, an independent body. In parallel, a counter-assessment allows the valuation gap to be examined. If no amicable resolution is reached, legal action remains open, always subject to the two-year time limit. Each step must be documented, as the strength of the file directly influences the outcome."
      }
    },
    {
      "@type": "Question",
      "name": "Should I sign the settlement receipt or protocol proposed by the insurer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not without reading it carefully. A settlement receipt or transaction protocol frequently contains a clause by which the policyholder waives all further recourse. If damage appears later, it can no longer be claimed. Before signing, it is prudent to verify that the proposed compensation covers the full loss, including its future effects. A prior review, with professional assistance if needed, prevents unknowingly waiving rights."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm offer video consultations for insurance matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For a denial of cover, an insurance dispute or an expert assessment, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, with no need to travel to Strasbourg."
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
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-assurances-strasbourg#denial-of-cover"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Loss assessment and compensation",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-assurances-strasbourg#loss-assessment"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Support during a complex expert assessment",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-des-assurances-strasbourg#expert-assessment"
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

            <details id="denial-of-cover" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Contested denial of cover</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
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
            </details>

            <details id="loss-assessment" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Loss assessment and compensation</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
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
            </details>

            <details id="expert-assessment" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Support during a complex expert assessment</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What should I do if the insurer refuses cover?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">A denial of cover is never automatic. The first step is to check the stated reason against the exact policy clauses and applicable rules: exclusion, forfeiture, breach of a disclosure obligation. Many refusals rest on an extensive or questionable reading of a clause — yet an exclusion clause is only valid if it is express and specific (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006791984/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 113-1 of the Insurance Code</a>). The right response is a written, reasoned challenge based on the policy terms and claim documents, before considering the ombudsman or litigation.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What is the time limit to challenge a denial of cover or claim compensation?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Two years, as a rule. Almost all claims arising from an insurance contract are subject to a two-year limitation period running from the event giving rise to the right to compensation (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044607740" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 114-1 of the Insurance Code</a>) — far shorter than the standard five-year period under general law. Note: a simple email or letter exchange does not suspend this period. Only a registered letter, the appointment of an expert, or a court summons interrupts it. Many policyholders lose their rights because the insurer lets time run — prompt action is essential.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can the insurer rely on an exclusion clause to deny cover?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Not under all circumstances. An exclusion clause is only valid if it is express and specific (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006791984/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 113-1 of the Insurance Code</a>): it must identify precisely what is excluded, leaving no room for interpretation. A vague ground such as the policyholder&apos;s &quot;negligence&quot; is in practice contestable. Moreover, if the policy does not reproduce the grounds for interrupting the limitation period, the insurer cannot later invoke the two-year time bar. A denial based on a questionable clause nearly always warrants review before being accepted.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Should I have support during an expert assessment?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">The assessment strongly shapes compensation: it is the assessment that values the retained loss, and it is driven by the insurer. The expert it appoints is paid by it. In the event of a disagreement, the policyholder may request a counter-assessment and appoint their own expert, whose fees remain their responsibility unless the policy includes an &quot;expert fees&quot; cover. If the disagreement persists, a third expert is appointed and their findings are binding on the parties, with costs shared unless a specific clause provides otherwise. Having support allows you to present your case, follow the proceedings and secure a framework that will weigh heavily on the outcome.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How do I challenge insufficient compensation?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">By testing the insurer&apos;s valuation against the reality of the damage, with supporting documents: estimates, invoices, photographs, technical reports. The effective route starts with a documented counter-assessment that sets out a reasoned valuation against the insurer&apos;s. If the disagreement continues, a third-party assessment decides, then mediation or litigation if needed. Any challenge remains subject to the two-year time limit. It is the strength of the file, not the apparent balance of power, that determines the final amount.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What recourse do I have in a dispute with my insurer?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Recourse is graduated. You start with a written complaint to the company&apos;s customer service, then, if unsuccessful, you can refer the matter free of charge to the Médiateur de l&apos;assurance, an independent body. In parallel, a counter-assessment allows the valuation gap to be examined. If no amicable resolution is reached, legal action remains open, always subject to the two-year time limit. Each step must be documented, as the strength of the file directly influences the outcome.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Should I sign the settlement receipt or protocol proposed by the insurer?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Not without reading it carefully. A settlement receipt or transaction protocol frequently contains a clause by which the policyholder waives all further recourse. If damage appears later, it can no longer be claimed. Before signing, it is prudent to verify that the proposed compensation covers the full loss, including its future effects. A prior review, with professional assistance if needed, prevents unknowingly waiving rights.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm offer video consultations for insurance matters?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. For a denial of cover, an insurance dispute or an expert assessment, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, with no need to travel to Strasbourg.</div>
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

