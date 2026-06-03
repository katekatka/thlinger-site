import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/droit-social",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/droit-social",
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
        "text": "Act quickly: review the procedure followed, gather the substantive evidence, and build a structured defense within the deadlines."
      }
    },
    {
      "@type": "Question",
      "name": "How do I secure a reorganization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By anticipating the employment-law implications before deciding: procedure, timetable, and dialogue with employee representatives."
      }
    },
    {
      "@type": "Question",
      "name": "Can a URSSAF reassessment be challenged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, within the set deadlines, covering both the substance of the reassessment and the regularity of the inspection procedure."
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
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-social#contested-dismissal"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Internal reorganization",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-social#internal-reorganization"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Social-security contribution dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/droit-social#social-security-dispute"
    }
  ]
} as const;

export default function EmploymentLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Social Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Every HR decision is a legal decision.
            </h1>
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

            <div id="contested-dismissal" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Contested dismissal</h3>
              <dl className="space-y-5">
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
            </div>

            <div id="internal-reorganization" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Internal reorganization</h3>
              <dl className="space-y-5">
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
            </div>

            <div id="social-security-dispute" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">Social-security contribution dispute</h3>
              <dl className="space-y-5">
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
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">What should I do about a labor-tribunal claim?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Act quickly: review the procedure followed, gather the substantive evidence, and build a structured defense within the deadlines.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">How do I secure a reorganization?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">By anticipating the employment-law implications before deciding: procedure, timetable, and dialogue with employee representatives.</p>
            </div>

            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">Can a URSSAF reassessment be challenged?</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">Yes, within the set deadlines, covering both the substance of the reassessment and the regularity of the inspection procedure.</p>
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

