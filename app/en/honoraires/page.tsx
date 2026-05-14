import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { FaqAccordion, type FaqGroup } from "@/components/FaqAccordion";

// ─── Data ──────────────────────────────────────────────────────────────────────

const principles = [
  {
    title: "Fixed fee",
    text: "For engagements with a defined scope: company formation, contract drafting, targeted legal audit. You know the cost before work begins.",
  },
  {
    title: "Hourly rate",
    text: "For advisory or litigation matters where the scope may evolve. The rate is communicated from the outset, with transparent and regular reporting of time spent.",
  },
  {
    title: "Success fee",
    text: "A supplementary fee, agreed alongside a base fee, where a gain obtained or a saving achieved justifies additional remuneration.",
  },
];

const faqGroups: FaqGroup[] = [
  {
    title: "Fee structure and billing",
    items: [
      {
        question: "How are fees determined?",
        answer: (
          <p>
            Fees are set according to the nature of the matter, its complexity, the time
            required, and the legal and financial stakes involved. Before any engagement,
            a fee agreement is drawn up to define the scope of work, the billing method,
            and the applicable financial terms. Unless otherwise agreed, fees are payable
            on a schedule defined in advance.
          </p>
        ),
      },
      {
        question: "What billing arrangements are available?",
        answer: (
          <>
            <p className="mb-5">
              The firm works primarily on four billing arrangements:
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-navy">Fixed fee</span>
                {" "}— for engagements with a defined scope such as company formation,
                contract drafting, or a targeted legal audit. The client knows the exact
                cost before work begins.
              </li>
              <li>
                <span className="font-semibold text-navy">Hourly rate</span>
                {" "}— for advisory or litigation matters where the scope may evolve.
                The applicable rate is communicated from the outset, with transparent
                and regular reporting of time spent.
              </li>
              <li>
                <span className="font-semibold text-navy">Success fee</span>
                {" "}— a supplementary fee, agreed alongside a base fee, where a gain
                obtained or a saving achieved warrants additional remuneration.
              </li>
              <li>
                <span className="font-semibold text-navy">Retainer</span>
                {" "}— for companies requiring regular legal support and a consistent
                point of contact over time. The terms of engagement are tailored to
                the operational needs of the director and the business.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Is a fee agreement required?",
        answer: (
          <p>
            Yes. In accordance with the rules governing the legal profession, a fee
            agreement is entered into before any work begins, except in cases of urgency
            or full legal aid. It ensures complete transparency on the terms of
            engagement and billing.
          </p>
        ),
      },
      {
        question: "Are legal fees subject to VAT?",
        answer: (
          <p>
            Legal fees are in principle subject to VAT at the standard rate of 20&nbsp;% in
            France. Certain situations may fall under a different regime — in particular
            in the context of legal aid, or depending on the firm&apos;s applicable tax status.
          </p>
        ),
      },
    ],
  },
  {
    title: "Coverage and financial assistance",
    items: [
      {
        question: "Can my legal expenses insurance cover the fees?",
        answer: (
          <>
            <p className="mb-4">
              Yes. The firm systematically checks whether the client holds legal expenses
              insurance that may cover all or part of the lawyer&apos;s fees. This cover is
              often included in standard insurance contracts — home, motor, public
              liability, and others.
            </p>
            <p>
              The client always retains the right to choose their own lawyer: the insurer
              cannot impose a particular firm or professional.
            </p>
          </>
        ),
      },
      {
        question: "Do you accept legally aided clients?",
        answer: (
          <p>
            The firm can act for legally aided clients depending on the nature of the
            matter and the client&apos;s eligibility. Where legal aid is partial, a
            supplementary fee agreement is entered into to specify the remaining
            billing arrangements.
          </p>
        ),
      },
    ],
  },
  {
    title: "Client relationship",
    items: [
      {
        question: "Is the initial consultation charged?",
        answer: (
          <p>
            A one-off consultation, where it is not followed by a written advice note or
            legal proceedings, is not charged. This first meeting is an opportunity to
            understand the situation, identify the key issues, and direct the client
            towards the most appropriate course of action.
          </p>
        ),
      },
      {
        question: "Can businesses benefit from ongoing legal support?",
        answer: (
          <p>
            Yes. The firm supports both individuals and businesses on a one-off or
            recurring basis. Some companies choose a regular retainer to keep their
            legal decisions on firm ground, manage risk proactively, and benefit from
            a single point of contact who already understands their business and
            its challenges.
          </p>
        ),
      },
      {
        question: "How can I get a fee estimate?",
        answer: (
          <p>
            After an initial conversation to understand the situation and the
            client&apos;s objectives, the firm sets out an appropriate course of action
            along with a clear picture of the scope of work, the billing method,
            and the applicable financial terms.
          </p>
        ),
      },
    ],
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
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Fees
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Clarity begins<br className="hidden md:block" /> with pricing.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Fees are freely agreed between the parties depending on the complexity of
              the matter. This topic is addressed from the first meeting, with full
              transparency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PRINCIPLES — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-white md:text-[2.75rem]">
              A clear framework before each engagement.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-[1.85] text-white/60 md:text-[1.0625rem]">
              Before starting, we define together the scope of the work, the billing
              method, and an estimated cost.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <AnimatedItem key={p.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <h3 className="mb-4 font-serif text-lg font-normal text-navy">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                    {p.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-navy md:text-[2.75rem]">
              Frequently asked questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl">
            <FaqAccordion groups={faqGroups} />
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[2rem] font-normal leading-tight text-navy md:text-[2.75rem]">
                Initial discussion
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                The first contact is without obligation on your part. Its purpose is to
                understand your situation and assess whether I can assist you effectively.
                The terms are specified when scheduling the appointment.
              </p>
              <a
                href="/en#contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
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
