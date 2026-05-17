import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Financing and banking relations",
    items: [
      "Credit facilities and termination",
      "Loan terms and negotiation",
      "Support in financing difficulties",
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
    title: "Financial intermediaries and services",
    items: [
      "Investment service providers",
      "Finance brokers",
      "Financing intermediaries",
    ],
  },
  {
    title: "Banking litigation",
    items: [
      "Financing disputes",
      "Contractual banking liability",
      "Defence of companies and directors",
      "Banking and financial law litigation",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BankingFinancialLawPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Banking &amp; Financial Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Preserving your ability<br className="hidden md:block" /> to decide.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Business financing should never become a loss of control. Yet a suspended
              credit line, a poorly negotiated personal guarantee, or a deteriorating banking
              relationship can quickly weaken cash flow, slow decision-making, and create
              constant pressure on the director.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXT — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-white md:text-[2.25rem]">
                Anticipating tensions before they disrupt your business.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                A business can be weakened long before genuine financial difficulties emerge.
                A strained banking relationship, a financing arrangement called into question,
                or an inadequately framed personal guarantee can sometimes be enough to create
                permanent uncertainty for the director and slow the development of the business.
                In these situations, banking and financial law becomes a tool for protection and
                anticipation. I support companies in securing their financing, analysing the risks
                linked to banking commitments, and intervening in disputes or negotiations with
                financial institutions. The objective remains the same: to protect the company
                against financial imbalances and preserve its capacity to act in the long term.
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
