import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

// ─── Data ──────────────────────────────────────────────────────────────────────

const principles = [
  {
    title: "Fixed fee",
    text: "For engagements with a defined scope: company formation, contract drafting, targeted legal audit. You know the price before starting.",
  },
  {
    title: "Hourly rate",
    text: "For advisory or litigation matters where the scope may evolve. The rate is communicated from the outset, with regular tracking of time spent.",
  },
  {
    title: "Success fee",
    text: "Additional fees corresponding to a percentage of the gains obtained or the savings achieved through the lawyer's work.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FeesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-[#07137B]/45">
              Fees
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-[#07137B] md:text-[3.75rem]">
              Clarity begins<br className="hidden md:block" /> with pricing.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-[#07137B]/65 md:text-[1.0625rem]">
              Fees are freely agreed between the parties depending on the complexity of the matter.
              This topic is addressed from the first meeting, with full transparency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* 2. PRINCIPLES — navy */}
      <section className="bg-[#07137B] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-white md:text-[2.75rem]">
              A clear framework before each engagement.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-[1.85] text-white/60 md:text-[1.0625rem]">
              Before starting, we define together the scope of the work, the billing method,
              and an estimated cost.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <AnimatedItem key={p.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-[#D4AF37] bg-white p-8 md:p-10">
                  <h3 className="mb-4 font-serif text-lg font-normal text-[#07137B]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm leading-[1.9] text-[#07137B]/60">
                    {p.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* 3. FEE AGREEMENT */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[2rem] font-normal leading-tight text-[#07137B] md:text-[2.75rem]">
                Fee agreement
              </h2>
              <p className="font-sans text-base leading-[1.85] text-[#07137B]/65 md:text-[1.0625rem]">
                In accordance with professional rules, a fee agreement is systematically
                established before any work begins. It details the scope, the calculation
                method, and the billing conditions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* 4. INITIAL DISCUSSION */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[2rem] font-normal leading-tight text-[#07137B] md:text-[2.75rem]">
                Initial discussion
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-[#07137B]/65 md:text-[1.0625rem]">
                The first contact is without obligation on your part and aims to understand
                your situation and assess whether I can assist you effectively. The terms
                are specified when scheduling the appointment.
              </p>
              <a
                href="/en#contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-[#07137B] px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-[#020628] hover:gap-5"
                style={{ color: "#ffffff" }}
              >
                Talk about your situation
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
