import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  "Company formation",
  "Shareholders' agreements",
  "Governance",
  "Mergers and acquisitions",
  "Transformation",
  "Family business transfers",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CorporateLawPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Corporate Law
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Building on foundations<br className="hidden md:block" /> that hold.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              I start by understanding your growth objectives and your risk tolerance.
              Then I build the legal architecture that serves those objectives. From company
              formation to mergers and acquisitions and business transfers, each structure
              is designed to be resilient, not just compliant.
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
                Your articles of association are not just a formality.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Your company is built on legal structures: articles of association,
                shareholders&apos; agreements, governance, which are often drafted once and
                never revisited. Yet these foundations determine who makes decisions,
                who controls, and how conflicts are resolved.
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

          <AnimatedSection stagger className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {interventions.map((item) => (
              <AnimatedItem key={item}>
                <div>
                  <AnimatedLine className="mb-5 w-full" />
                  <p className="font-sans text-sm leading-[1.9] text-navy/65">{item}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
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
