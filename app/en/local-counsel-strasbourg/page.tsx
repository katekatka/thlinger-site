import type { Metadata } from "next";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Local Counsel (Postulation) before the Strasbourg Judicial Court | Christian Thalinger",
  description:
    "Court representation (postulation) before the Strasbourg Judicial Court. Same-day conflict check, fee range agreed in writing before any work begins, disciplined procedural follow-up. Hearing cover and local-law support on request.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/local-counsel-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/postulation-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/local-counsel-strasbourg",
    },
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.thalinger-avocat.fr/en/local-counsel-strasbourg",
  name: "Local Counsel (Postulation) before the Strasbourg Judicial Court",
  description:
    "Court representation (postulation) before the Strasbourg Judicial Court. Prompt filing, disciplined procedural follow-up, fixed fee confirmed before any work begins.",
  url: "https://www.thalinger-avocat.fr/en/local-counsel-strasbourg",
  inLanguage: "en",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: { "@type": "City", name: "Strasbourg" },
  audience: {
    "@type": "Audience",
    audienceType: "Lawyers and foreign law firms",
  },
  priceRange: "€200 - €700 excl. VAT",
} as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly is the notice of representation filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once the conflict check is clear and the fee agreed, filing follows through RPVA within the procedural deadline, same day where urgency is flagged.",
      },
    },
    {
      "@type": "Question",
      name: "Does the fixed fee cover hearing attendance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fixed fee covers procedural acts and pre-trial monitoring. Attendance at hearings in person is a separate service, priced in advance per hearing: €100 excl. VAT for a pre-trial or holding hearing; €200 excl. VAT for a hearing at oral argument.",
      },
    },
    {
      "@type": "Question",
      name: "Do you act before courts other than the Strasbourg Judicial Court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The postulation engagement centres on the Strasbourg Judicial Court. For another court of the Colmar district, intervention is assessed case by case.",
      },
    },
  ],
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.thalinger-avocat.fr/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Local Counsel — Strasbourg",
      item: "https://www.thalinger-avocat.fr/en/local-counsel-strasbourg",
    },
  ],
} as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LocalCounselPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              For fellow counsel and foreign law firms
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Local counsel before the Strasbourg Judicial Court
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              French civil procedure requires representation by a lawyer admitted within the
              territorial district of the court, a rule known as{" "}
              <em>postulation</em>. If your case is pending before the Strasbourg Judicial Court and
              your bar lies outside the district, you need local counsel. The procedure runs through
              me; the case remains yours.
            </p>
            <div className="mt-8 max-w-2xl space-y-5">
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                As a member of the Strasbourg Bar, I act as local counsel before the{" "}
                <a
                  href="https://www.justice.gouv.fr/annuaire/fiche/tribunal-judiciaire-de-strasbourg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Strasbourg Judicial Court
                </a>{" "}
                (tribunal judiciaire de Strasbourg).
              </p>
<p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                For proceedings before another court of the district, intervention is assessed case
                by case. One exchange settles the question.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. FEES */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-10 font-sans text-[11px] uppercase tracking-[0.2em] text-white/50">
              Postulation fees
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { price: "€200", label: "Single RPVA filing" },
                { price: "€200–700", label: "Fixed fee per instance" },
                { price: "€700", label: "Complete engagement — 18 months" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-[3.5rem] font-normal leading-none text-white">
                    {item.price}
                  </p>
                  <p className="mt-3 font-sans text-[0.75rem] uppercase tracking-[0.15em] text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. SCOPE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
                Procedural representation
              </p>
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Scope of the engagement.
              </h2>
              <div className="mb-10 flex flex-wrap gap-3">
                {[
                  "Filing the notice of representation and all procedural acts via RPVA",
                  "Serving submissions and exhibits within the applicable deadlines",
                  "Monitoring the pre-trial calendar (mise en état) and the judge's directions",
                  "Forwarding every court notice, order and decision to you immediately, unfiltered",
                  "Flagging each deadline early enough for you to act",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border-2 border-gold px-4 py-2 font-sans text-[0.8125rem] text-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="space-y-5 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                <p>
                  Strategy, drafting and oral argument remain in your hands.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. BEYOND POSTULATION */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Beyond postulation alone.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Hearing attendance.",
                text: "Pre-trial, incident or closing hearings: representation in person, with a report the same day. Priced in advance per hearing: €100 excl. VAT for a pre-trial or holding hearing; €200 excl. VAT for a hearing at oral argument.",
              },
              {
                title: "Standing in at oral argument.",
                text: "You draft; I argue on your submissions and your instructions, or I appear at the hearing so you avoid the travel. A report follows the hearing.",
              },
              {
                title: "Local-law support.",
                text: "The Livre foncier land register, the commercial chamber with lay business judges, local-law enforcement against real property: a verification point before an act, or continuing support throughout the proceedings.",
              },
            ].map((card) => (
              <AnimatedItem key={card.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <h3 className="mb-5 font-serif text-lg font-normal leading-snug text-navy">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                    {card.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 5. FEES + WHAT MATTERS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">

          {/* What matters */}
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                What matters when you instruct local counsel.
              </h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65 md:text-right">
                Speed of first response,<br />
                certainty on fees,<br />
                reliability over time.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Speed.",
                text: "You send the writ or decision, the parties' identities and your deadline. The conflict check runs the same day; confirmation of the engagement reaches you within one business day.",
              },
              {
                title: "Certainty.",
                text: "Fee confirmed in writing before the notice of representation is filed; additional services priced separately.",
              },
              {
                title: "Reliability.",
                text: "Deadlines are double-checked, the court file stays current on RPVA, and you deal with one person from filing to closing.",
              },
            ].map((card) => (
              <AnimatedItem key={card.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-navy p-12">
                  <h3 className="mb-3 font-serif text-xl font-normal text-white">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-relaxed text-white/70">
                    {card.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 6. YOUR CLIENT */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Your client remains your client
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Postulation rests on trust between counsel. No direct contact with your client
                without your express agreement. All communication passes through you. When the
                matter closes, the file returns to you in full.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 7. FAQ */}
      <section id="faq" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Frequently asked questions
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-navy">
                  How quickly is the notice of representation filed?
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                Once the conflict check is clear and the fee agreed, filing follows through RPVA
                within the procedural deadline, same day where urgency is flagged.
              </div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-navy">
                  Does the fixed fee cover hearing attendance?
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                The fixed fee covers procedural acts and pre-trial monitoring. Attendance at
                hearings in person is a separate service, priced in advance per hearing: €100 excl.
                VAT for a pre-trial or holding hearing; €200 excl. VAT for a hearing at oral
                argument.
              </div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-navy">
                  Do you act before courts other than the Strasbourg Judicial Court?
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                The postulation engagement centres on the Strasbourg Judicial Court. For another
                court of the Colmar district, intervention is assessed case by case. Ask; the answer
                comes quickly.
              </div>
            </details>
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 8. INSTRUCTING ME */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                Instructing me
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                To run the conflict check and confirm the fee, please send:
              </p>
              <ul className="space-y-3">
                {[
                  "The writ, application or decision concerned",
                  "The full identity of the parties",
                  "Your deadline and your RPVA details (or email, for foreign counsel)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]"
                  >
                    <span
                      className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <a
                href="mailto:christian@thalinger-avocat.fr?subject=Postulation%20-%20case%20file"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                style={{ color: "#ffffff" }}
              >
                Send a case file by email
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
