import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommercialLawPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Commercial Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Contracts that work<br className="hidden md:block" /> when it matters.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              I draft, review and negotiate every contract with one question in mind:
              what happens when things go wrong? Each clause is tested against realistic
              scenarios. I prioritize clarity over complexity, and enforceability over elegance.
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
                A contract only protects you if it is precise.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Contracts govern each of your business relationships. A poorly drafted
                contract remains invisible until the day a dispute makes it costly.
                A missing clause, an ambiguous limitation, a timeframe that does not
                reflect operational reality: these gaps cost real money.
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
