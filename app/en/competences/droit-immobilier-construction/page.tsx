import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Construction and contractor liability",
    items: [
      "Contractor liability",
      "Statutory and ten-year warranties",
      "Defects and poor workmanship",
      "Construction and site disputes",
    ],
  },
  {
    title: "Expert proceedings and technical disputes",
    items: [
      "Agreed and court-appointed expert assessments",
      "Loss assessment",
      "Support during expert proceedings",
      "Defence of interests in litigation",
    ],
  },
  {
    title: "Leases and tenancy relations",
    items: [
      "Lease drafting",
      "Negotiation of tenancy arrangements",
      "Securing contractual commitments",
      "Managing landlord and tenant obligations",
    ],
  },
  {
    title: "Tenancy disputes and eviction",
    items: [
      "Rent arrears and breach of contract",
      "Lease termination",
      "Eviction proceedings",
      "Defence of landlords",
    ],
  },
  {
    title: "Real estate transactions",
    items: [
      "Sale of property under future completion agreement (VEFA)",
      "Acquisition and sale of real estate",
      "Securing real estate transactions",
      "Seller warranties and obligations",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RealEstateLawPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Real Estate Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Building also means building a legal framework.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Defects, structural disorders, unactivated warranties: in construction matters,
              disputes often come to light after works are accepted, when the deadlines for
              action are already running. The firm intervenes to establish contractor liability,
              activate statutory and ten-year warranties, and assist you in agreed or
              court-appointed expert proceedings. Whether you are a project owner or a
              construction professional, every stage of a project creates obligations that
              are better anticipated than discovered in litigation.
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
                A poorly negotiated lease is paid for throughout its entire term.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                The lease clauses signed today determine your rights and constraints for years
                to come. The firm secures the drafting of your leases, negotiates the tenancy
                terms and ensures a fair balance of obligations between landlord and tenant.
                In the event of rent arrears, breach of contract or a dispute over termination,
                the firm handles your defence and conducts the necessary proceedings to protect
                your interests.
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
              Discuss your real estate project
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
