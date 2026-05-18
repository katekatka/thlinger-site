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

      {/* 2. TEXT — navy */}
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

      {/* 3. TEXT — white */}
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
