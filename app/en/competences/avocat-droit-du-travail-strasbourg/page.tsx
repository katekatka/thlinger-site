﻿import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const interventions = [
  {
    title: "Individual employment relations",
    items: [
      "Drafting and securing employment contracts",
      "Day-rate agreements",
      "Working time and overtime",
      "Contract performance and payroll",
      "Disciplinary law",
      "Harassment and discrimination",
    ],
  },
  {
    title: "Termination of employment",
    items: [
      "Disciplinary dismissal",
      "Redundancy",
      "Protected employees",
      "Agreed termination, constructive dismissal and judicial rescission",
      "Challenging a dismissal",
      "Disputes arising from termination",
    ],
  },
  {
    title: "Collective labour relations",
    items: [
      "Works council elections",
      "Collective bargaining",
      "Collective agreements and internal regulations",
      "Relations with employee representatives",
    ],
  },
  {
    title: "Restructuring and social reorganisation",
    items: [
      "Business reorganisation",
      "Social restructuring",
      "Job protection plans (PSE)",
      "Collective redundancies",
      "Works council consultation",
      "Support through business transformation",
    ],
  },
  {
    title: "Social security law",
    items: [
      "URSSAF audits and reassessments",
      "Social contributions and contribution basis",
      "Employer gross negligence",
    ],
  },
  {
    title: "Criminal employment law",
    items: [
      "Criminal liability of the employer",
      "Violations of employment law",
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
      "name": "What should I do about a labor-tribunal claim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Act quickly and methodically. The first step is to review the procedure followed and the grounds invoked, then gather the evidence (employment contract, pay slips, correspondence, file) and build a structured defense. Since the procedural reforms, the exchange of written submissions and documents before the hearing is central: solid written preparation is often decisive. On the employee side, the claim must be brought within the applicable limitation period; on the employer side, rigorous preparation carries significant weight. The reflex is to have the file analysed as soon as the summons or claim is received."
      }
    },
    {
      "@type": "Question",
      "name": "What is the time limit to challenge a dismissal before the labour tribunal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In principle, twelve months. The employee has twelve months from notification of the dismissal to challenge it before the Conseil de prud'hommes (article L. 1471-1 of the Labour Code). Time starts running from the date of first presentation of the registered letter. Note that other time limits differ: three years for back-pay claims (article L. 3245-1), two years in certain cases relating to performance or termination of the contract. This contestation period, formerly five years, was significantly reduced, making prompt action essential. The practical rule: have the situation reviewed as soon as the letter is received."
      }
    },
    {
      "@type": "Question",
      "name": "Can a signed settlement agreement (rupture conventionnelle) be undone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in two distinct situations. First, during the withdrawal period: each party has fifteen calendar days after signing to withdraw from the agreement without giving reasons. Second, after approval, in the event of a dispute: the employee may apply to the Conseil de prud'hommes within twelve months of approval, notably for vitiated consent (pressure, threats) or failure to comply with the mandatory time limits. If annulled, the termination in principle produces the effects of an unfair dismissal. Any clause by which the parties would waive their right to contest is deemed unwritten."
      }
    },
    {
      "@type": "Question",
      "name": "How can a dismissal procedure be secured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the employer's side, protection rests on justifying the reason, strictly following the procedure (invitation to a preliminary meeting, legal time limits, reasoned notification letter) and documenting the file. In disciplinary matters, note the time limit in article L. 1332-4: the employer cannot initiate proceedings more than two months after becoming aware of the alleged misconduct. This limit applies to misconduct only, not to other grounds such as poor performance. On the employee's side, the approach is to examine the regularity of the procedure and the seriousness of the grounds to assess the prospects of a challenge. The firm acts for both sides."
      }
    },
    {
      "@type": "Question",
      "name": "How much compensation can an unfair dismissal yield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compensation is governed by a scale. Where a dismissal is found to be without real and serious cause, the award is calculated under the so-called Macron scale (article L. 1235-3 of the Labour Code), which sets a floor and a ceiling in months of salary, depending on the employee's length of service and the size of the employer. The scale is in principle binding on the court, and recent case law has broadly upheld it. It is set aside in cases where the dismissal is null and void (harassment, discrimination, breach of a fundamental freedom), where a minimum of six months' salary applies with no ceiling. The initial question is therefore to characterise the nature of the dismissal."
      }
    },
    {
      "@type": "Question",
      "name": "How can a reorganisation be secured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By anticipating the employment-law implications before the decision is announced, not after. This means choosing the right procedure, setting a realistic timetable, and organising consultation with the works council (CSE) and employee representatives. Obligations vary depending on the scale of the project: a job-protection plan (PSE) is mandatory for an economic redundancy affecting at least ten employees within thirty days in a company employing at least fifty people. For PSEs, the main risk is annulment or suspension of the procedure by the administrative court. Legal security is built before the announcement, not after."
      }
    },
    {
      "@type": "Question",
      "name": "Can a URSSAF reassessment be challenged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but the procedure is strictly regulated and an internal appeal is a mandatory prerequisite. From receipt of the formal demand, the company has two months to refer the matter to the URSSAF's internal appeal committee (Commission de recours amiable, CRA). If the CRA rejects the challenge — expressly or by maintaining silence for two months (implied rejection) — a further two-month period opens to bring proceedings before the social division of the judicial tribunal. The challenge may cover both the substance of the reassessment and the regularity of the inspection procedure; a procedural defect may lead to annulment. Missing any of these deadlines makes the reassessment final."
      }
    },
    {
      "@type": "Question",
      "name": "What does the employer risk in the event of inexcusable fault?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The consequences go beyond standard compensation. Inexcusable fault (faute inexcusable) is established when the employer was, or should have been, aware of a danger and failed to take the necessary measures to protect the employee. It leads to an increase in the victim's compensation annuity and the award of additional heads of damages. Criminal liability may also arise, but is not automatic: it requires a specific offence (for example, involuntary injury) and may then target the director personally, whereas inexcusable fault engages the employer as an entity. Prevention — risk assessment and documented safety measures — remains the best line of defence."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm represent both employers and employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm acts for employers (securing procedures, drafting termination documents, defending claims before the labour tribunal) as well as employees (challenging a dismissal, settlement agreements, harassment, discrimination). This dual experience allows the firm to anticipate the opposing party's arguments and build a stronger strategy."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm offer video consultations for employment law matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For a contested dismissal, a settlement agreement or a URSSAF reassessment, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without needing to travel to Strasbourg."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of employment-law work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Contested dismissal",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg#contested-dismissal"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Internal reorganization",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg#internal-reorganization"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Social-security contribution dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg#social-security-dispute"
    }
  ]
} as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg",
  name: "Employment Law Solicitor in Strasbourg",
  description: "Employment law representation for employers and employees: dismissal, negotiated termination, harassment, employment tribunal proceedings. Thalinger law firm, Strasbourg.",
  url: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-du-travail-strasbourg",
  inLanguage: "en",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
} as const;

export default function EmploymentLawPage() {
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
              Employment &amp; Social Law — Strasbourg
            </h1>
            <h2 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Every HR decision is a legal decision.
            </h2>
            <p className="mb-4 max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Employment law governs the relationship between employer and employee throughout
              the contract: hiring, performance, variation, termination, and employment tribunal
              proceedings. For the employer, it frames every HR decision. For the employee,
              it guarantees enforceable rights.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              A poorly drafted contract, a botched dismissal procedure, an imprecise collective
              agreement: in employment law, mistakes have a price. The firm supports directors
              and HR managers in securing their day-to-day practices and defending their
              interests before the employment tribunal. The objective: to anticipate disputes
              rather than suffer them, and to make employment law a management tool, not a
              source of risk.
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
                A URSSAF audit gives no warning. Your preparation can.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                A social security reassessment can represent significant amounts and durably
                weaken your cash flow. The firm intervenes upstream to secure your social
                contribution practices, and downstream to challenge reassessments and represent
                you in appeal proceedings. In cases of employer gross negligence, the
                consequences go beyond increased compensation: they can engage the criminal
                liability of the director where safety obligations have been breached.
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
              Examples of employment-law work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Dismissal, reorganization, contributions: every employment decision carries procedural and substantive risk. The following examples illustrate how these are anticipated and managed.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="contested-dismissal" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Contested dismissal</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">An employer faces a labor-tribunal claim over a contested dismissal. Deadlines are short and the situation needs clarifying quickly.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the procedure followed, identification of weak points, building the line of defense, and representation before the labor tribunal (Conseil de prud&apos;hommes).</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Securing the employer&apos;s position on procedure and substance, presenting a structured defense at the hearing.</dd>
                </div>
              </dl>
            </details>

            <details id="internal-reorganization" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Internal reorganization</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A company is preparing a reorganization affecting several roles. The employment-law implications must be anticipated before any decision.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analysis of options and risks, securing the applicable procedures, support in the dialogue with employee representatives.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Carrying out the reorganization within a controlled framework, weighing consequences at each step.</dd>
                </div>
              </dl>
            </details>

            <details id="social-security-dispute" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Social-security contribution dispute</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">An employer receives a reassessment after a URSSAF inspection. Both the basis and the scope of the reassessment are in question.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the grounds for reassessment, verification of the inspection procedure, challenge before the competent courts where justified.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Checking that the reassessment is sound and defending the employer on the contestable points.</dd>
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
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What should I do about a labor-tribunal claim?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Act quickly and methodically. The first step is to review the procedure followed and the grounds invoked, then gather the evidence (employment contract, pay slips, correspondence, file) and build a structured defense. Since the procedural reforms, the exchange of written submissions and documents before the hearing is central: solid written preparation is often decisive. On the employee side, the claim must be brought within the applicable limitation period; on the employer side, rigorous preparation carries significant weight. The reflex is to have the file analysed as soon as the summons or claim is received.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What is the time limit to challenge a dismissal before the labour tribunal?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">In principle, twelve months. The employee has twelve months from notification of the dismissal to challenge it before the Conseil de prud&apos;hommes (<a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000027550102" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 1471-1 of the Labour Code</a>). Time starts running from the date of first presentation of the registered letter. Note that other time limits differ: three years for back-pay claims (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027566295" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 3245-1</a>), two years in certain cases relating to performance or termination of the contract. This contestation period, formerly five years, was significantly reduced, making prompt action essential. The practical rule: have the situation reviewed as soon as the letter is received.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can a signed settlement agreement (rupture conventionnelle) be undone?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes, in two distinct situations. First, during the withdrawal period: each party has fifteen calendar days after signing to withdraw from the agreement without giving reasons. Second, after approval, in the event of a dispute: the employee may apply to the Conseil de prud&apos;hommes within twelve months of approval, notably for vitiated consent (pressure, threats) or failure to comply with the mandatory time limits. If annulled, the termination in principle produces the effects of an unfair dismissal. Any clause by which the parties would waive their right to contest is deemed unwritten.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How can a dismissal procedure be secured?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">On the employer&apos;s side, protection rests on justifying the reason, strictly following the procedure (invitation to a preliminary meeting, legal time limits, reasoned notification letter) and documenting the file. In disciplinary matters, note the time limit in <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006189485/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 1332-4</a>: the employer cannot initiate proceedings more than two months after becoming aware of the alleged misconduct. This limit applies to misconduct only, not to other grounds such as poor performance. On the employee&apos;s side, the approach is to examine the regularity of the procedure and the seriousness of the grounds to assess the prospects of a challenge. The firm acts for both sides.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How much compensation can an unfair dismissal yield?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Compensation is governed by a scale. Where a dismissal is found to be without real and serious cause, the award is calculated under the so-called &quot;Macron&quot; scale (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036762052" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 1235-3 of the Labour Code</a>), which sets a floor and a ceiling in months of salary, depending on the employee&apos;s length of service and the size of the employer. The scale is in principle binding on the court, and recent case law has broadly upheld it. It is set aside in cases where the dismissal is null and void (harassment, discrimination, breach of a fundamental freedom), where a minimum of six months&apos; salary applies with no ceiling. The initial question is therefore to characterise the nature of the dismissal.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How can a reorganisation be secured?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">By anticipating the employment-law implications before the decision is announced, not after. This means choosing the right procedure, setting a realistic timetable, and organising consultation with the works council (CSE) and employee representatives. Obligations vary depending on the scale of the project: a job-protection plan (PSE) is mandatory for an economic redundancy affecting at least ten employees within thirty days in a company employing at least fifty people. For PSEs, the main risk is annulment or suspension of the procedure by the administrative court. Legal security is built before the announcement, not after.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can a URSSAF reassessment be challenged?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes, but the procedure is strictly regulated and an internal appeal is a mandatory prerequisite. From receipt of the formal demand, the company has two months to refer the matter to the URSSAF&apos;s internal appeal committee (Commission de recours amiable, CRA). If the CRA rejects the challenge — expressly or by maintaining silence for two months (implied rejection) — a further two-month period opens to bring proceedings before the social division of the judicial tribunal. The challenge may cover both the substance of the reassessment and the regularity of the inspection procedure; a procedural defect may lead to annulment. Missing any of these deadlines makes the reassessment final.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What does the employer risk in the event of inexcusable fault?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">The consequences go beyond standard compensation. Inexcusable fault (faute inexcusable) is established when the employer was, or should have been, aware of a danger and failed to take the necessary measures to protect the employee. It leads to an increase in the victim&apos;s compensation annuity and the award of additional heads of damages. Criminal liability may also arise, but is not automatic: it requires a specific offence (for example, involuntary injury) and may then target the director personally, whereas inexcusable fault engages the employer as an entity. Prevention — risk assessment and documented safety measures — remains the best line of defence.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm represent both employers and employees?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. The firm acts for employers (securing procedures, drafting termination documents, defending claims before the labour tribunal) as well as employees (challenging a dismissal, settlement agreements, harassment, discrimination). This dual experience allows the firm to anticipate the opposing party&apos;s arguments and build a stronger strategy.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm offer video consultations for employment law matters?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. For a contested dismissal, a settlement agreement or a URSSAF reassessment, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without needing to travel to Strasbourg.</div>
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
              Discuss your employment law matters
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

