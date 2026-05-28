import Image from "next/image";
import Link from "next/link";
import HeroSectionEn from "@/components/HeroSectionEn";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";
import { StepsSection } from "@/components/StepsSection";

// ─── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Corporate Law",
    description:
      "Structuring and securing your company's life at every stage of its development.",
    href: "/en/competences/droit-des-societes",
  },
  {
    title: "Commercial Law",
    description:
      "Securing your contracts, protecting your interests in commercial disputes, recovering unpaid debts and guiding you through every stage of insolvency proceedings.",
    href: "/en/competences/droit-commercial",
  },
  {
    title: "Social Law",
    description:
      "Advising on the management of employee relations, collective bargaining and social security contributions, representing you in employment and social protection disputes.",
    href: "/en/competences/droit-social",
  },
  {
    title: "Banking & Financial Law",
    description:
      "Assisting in banking disputes relating to financing, investments, guarantees and liability claims against banking and financial actors.",
    href: "/en/competences/droit-bancaire-financier",
  },
  {
    title: "Insurance Law",
    description:
      "Clarifying insurance contract clauses, assessing damages, and assisting you in expert assessments and insurance disputes.",
    href: "/en/competences/droit-des-assurances",
  },
  {
    title: "Real Estate & Construction Law",
    description:
      "Structuring your real estate transactions, securing your leases and handling disputes relating to construction and contractor liability.",
    href: "/en/competences/droit-immobilier-construction",
  },
];

const steps = [
  {
    title: "Understanding the context",
    description:
      "Every case begins with an in-depth analysis of your situation and its circumstances. This immersion allows the firm to pinpoint precisely what is at stake for you.",
  },
  {
    title: "Identifying risks and issues",
    description:
      "The firm brings to light the concrete risks and levers at your disposal, so that you can make your decisions with full knowledge of the facts.",
  },
  {
    title: "Setting out options",
    description:
      "The firm translates the applicable rules and possible outcomes into clear scenarios, so that you have a sharp picture of the choices available to you.",
  },
  {
    title: "Joint strategy building",
    description:
      "Your involvement is at the heart of the process: the strategy best suited to your objectives is built together.",
  },
];

const trustBlocks = [
  {
    title: "Tailored services.",
    text: "The firm never proposes standardised solutions: every engagement is built to measure, through authentic and engaged dialogue. The firm is committed to understanding the realities of each situation in depth, in order to deliver solutions that match your specific challenges.",
  },
  {
    title: "Immersion in the business world.",
    text: "The firm participates in local economic, civic and public life. This proximity to the field feeds its expertise and enables it to advise you with a nuanced understanding of your environment.",
  },
];

// ─── Shared components ────────────────────────────────────────────────────────

function ContactButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
      style={{ color: "#ffffff" }}
    >
      Book an appointment
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
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePageEN() {
  return (
    <>
      {/* 1. HERO */}
      <HeroSectionEn />

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PROBLEM */}
      <section id="probleme" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[2rem] font-normal leading-tight text-white md:text-[2.75rem]">
                Mutual understanding at the heart of the client relationship.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/65 md:text-[1.0625rem]">
                You know your business. The firm knows the law. The value of legal
                advice lies at the intersection of both. That is why every collaboration
                begins with careful attention to your reality before any legal analysis.
                No generic solutions, no unnecessary jargon: clear answers, grounded in
                your concrete challenges.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. EXPERTISE */}
      <section id="competences" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-serif text-[2rem] font-normal leading-tight text-navy md:text-[2.75rem]">
                Business Law.<br />A multidisciplinary approach.
              </h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65 md:text-right">
                The key disciplines of business law.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <AnimatedItem key={svc.title}>
                <Link
                  href={svc.href}
                  className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border-2 border-gold bg-navy p-12 transition-all duration-300 hover:bg-dark hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(7,19,123,0.22)]"
                >
                  <div className="flex-1">
                    <h3 className="mb-3 font-serif text-xl font-normal text-white">
                      {svc.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-white/70">
                      {svc.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 font-serif text-[0.75rem] uppercase tracking-[0.16em] text-white/50 transition-all duration-300 group-hover:gap-4 group-hover:text-white">
                    Learn more
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                      <path
                        d="M1 4H13M13 4L10 1M13 4L10 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. HOW I WORK */}
      <section id="demarche" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-white md:text-[2.75rem]">
              How I work
            </h2>
          </AnimatedSection>

          <StepsSection steps={steps} />
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 5. WHY TRUST */}
      <section id="pourquoi" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-navy md:text-[2.75rem]">
              Why business leaders trust me.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="columns-1 gap-x-8 md:columns-2">
            {trustBlocks.map((block) => (
              <AnimatedItem key={block.title} className="break-inside-avoid">
                <div className="pb-10">
                  <AnimatedLine className="mb-5 w-full" />
                  <h3 className="mb-4 font-serif text-[1.1875rem] font-normal text-navy">
                    {block.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                    {block.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-16 pt-12" delay={0.1}>
            <ContactButton />
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 6. CONTACT */}
      <section id="contact" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/portrait02.png"
                  alt="Christian THALINGER, Attorney at the Strasbourg Bar"
                  width={150}
                  height={150}
                  className="object-contain shrink-0"
                />
                <h2 className="max-w-md font-serif text-[2rem] font-normal leading-tight text-navy md:text-[2.75rem]">
                  Contact Maître THALINGER
                </h2>
              </div>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65">
                Understanding your issues with no commitment on your part.
                Response within 24 hours, Monday to Friday, 9am&nbsp;&ndash;&nbsp;6pm.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection delay={0.05}>
              <div className="space-y-8">
                <ContactItem label="Phone" href="tel:+33637331926" value="+33 6 37 33 19 26" />
                <ContactItem label="Email" href="mailto:christian@thalinger-avocat.fr?subject=Contact" value="christian@thalinger-avocat.fr" />
                <ContactItem
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/christian-thalinger-565446216/"
                  value="linkedin.com/in/christian-thalinger"
                />
                <ContactItem
                  label="Address"
                  href="https://maps.google.com/maps?q=5+Avenue+de+la+Marseillaise+67000+Strasbourg"
                  value={"5 avenue de la Marseillaise\n67000 Strasbourg"}
                  multiline
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-navy/10">
                <iframe
                  src="https://maps.google.com/maps?q=5+Avenue+de+la+Marseillaise%2C+67000+Strasbourg%2C+France&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "340px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Christian THALINGER Law Office — Strasbourg"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Book a slot CTA */}
          <AnimatedSection className="mt-12" delay={0.1}>
            <Link
              href="/en/rdv"
              className="group flex w-full items-center justify-between rounded-full border-2 border-gold bg-navy px-10 py-8 transition-all duration-300 hover:bg-dark active:scale-[0.99]"
            >
              <div>
                <p className="font-serif text-xl font-normal text-white">
                  Initial exchange · video call : book a slot
                </p>
                <p className="mt-2 font-sans text-sm text-white/55">
                  30 min · Free · Instant confirmation
                </p>
              </div>
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                aria-hidden="true"
                className="ml-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 6H19M19 6L14 1M19 6L14 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </AnimatedSection>

          <AnimatedSection className="mt-20 pt-12 text-center" delay={0.1}>
            <blockquote className="mx-auto max-w-[560px] font-sans text-base leading-relaxed text-navy/65 md:text-[1.0625rem]">
              &ldquo;A case that is understood is already secured.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

// ─── ContactItem ──────────────────────────────────────────────────────────────

function ContactItem({
  label,
  href,
  value,
  multiline = false,
}: {
  label: string;
  href: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-navy-muted">
        {label}
      </p>
      <a
        href={href}
        className="font-sans text-base text-navy inline-block transition-all duration-200 hover:text-gold hover:translate-x-1"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {multiline
          ? value.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))
          : value}
      </a>
    </div>
  );
}
