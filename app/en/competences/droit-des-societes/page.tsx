import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Company formation",
    items: [
      "Formation of civil and commercial companies",
      "SARL, SAS and SCI",
      "Choice of legal structure",
      "Drafting articles of association",
    ],
  },
  {
    title: "Articles of association amendments",
    items: [
      "Change of registered office",
      "Amendment of corporate purpose",
      "Capital increases and reductions",
      "Updating articles of association",
    ],
  },
  {
    title: "Shareholders' agreements",
    items: [
      "Drafting shareholders' agreements",
      "Governance and allocation of powers",
      "Exit and pre-emption clauses",
      "Minority shareholder protection",
    ],
  },
  {
    title: "General meetings",
    items: [
      "Organising general meetings",
      "Approval of accounts",
      "Annual legal secretarial services",
      "Minutes and formalities",
    ],
  },
  {
    title: "Share transfers",
    items: [
      "Due diligence and transaction security",
      "Asset and liability warranties",
      "Support in negotiations",
    ],
  },
  {
    title: "Corporate litigation",
    items: [
      "Managing shareholder disputes",
      "Governance deadlocks",
    ],
  },
  {
    title: "Company transformation",
    items: [
      "Change of legal form",
      "Conversion from SARL to SAS",
      "Legal reorganisation of the company",
      "Governance adaptation",
    ],
  },
  {
    title: "Business transfer and asset restructuring",
    items: [
      "Family business transfers",
      "Dutreil pact",
      "Executive estate planning",
      "Succession planning for business owners",
      "Capital restructuring and family governance",
    ],
  },
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
              Structuring what determines how your company operates.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Articles of association, shareholders&apos; agreements, governance: these documents
              are rarely revisited after they are drafted. Yet they are the ones that determine
              who makes decisions, who exercises control and how deadlocks are resolved. The firm
              analyses the framework in which you wish to operate: legal form, allocation of
              powers, shareholders&apos; rights, decision-making procedures. The objective is to
              build a legal architecture genuinely suited to your activity and your goals. From
              company formation to future developments — such as the arrival of new shareholders,
              business growth or an acquisition — each structure is designed to support your
              development, not merely to fulfil a legal obligation.
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
                When the relationship between shareholders becomes an obstacle.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Abuse of majority, breach of a shareholders&apos; agreement, deadlock: shareholder
                disputes can paralyse a company and jeopardise everything you have built. The firm
                intervenes to analyse the situation, identify the legal levers available to you and
                protect your interests. Whether the solution lies in negotiation or litigation, the
                objective remains the same: to break the deadlock and preserve the continuity of
                your business.
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
