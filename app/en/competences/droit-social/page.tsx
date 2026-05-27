import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

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

export default function EmploymentLawPage() {
  return (
    <>
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

