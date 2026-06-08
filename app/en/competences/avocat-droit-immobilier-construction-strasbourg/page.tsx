﻿import type { Metadata } from "next";
﻿import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Real Estate & Construction Lawyer in Strasbourg | THALINGER",
  description: "Real estate and construction lawyer in Strasbourg. Commercial leases, unpaid rent, eviction indemnity, construction defects, ten-year warranty, VEFA. THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg",
    },
  },
};


// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I do about defects after handover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First identify the applicable warranty: completion guarantee (one year), two-year warranty for equipment, or the ten-year decennial warranty for defects affecting structural integrity or rendering the building unfit for purpose. Serve formal written notice on the builder and file a claim with the structural-damage insurer (assurance dommages-ouvrage), which pre-finances repairs without waiting for liability to be determined. An amicable route is often preferred, but an expert assessment should be commissioned as soon as the defect is serious or contested."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle a commercial-lease dispute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by analysing the lease and each party's obligations: rent, service charges, works, condition report, and sensitive clauses such as the termination clause. Most disputes are resolved through negotiation or formal notice, which is faster and less costly than litigation. However, certain deadlines are mandatory - one month to respond to a payment demand, two years to contest a notice to quit - and often determine the outcome. The right reflex is to qualify the situation before acting."
      }
    },
    {
      "@type": "Question",
      "name": "Should a lawyer frame my real-estate project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Framing contracts and responsibilities upfront - VEFA off-plan sales, works contracts, warranties, insurance, and project structure - strongly reduces the risk of disputes during and after the works. It is also the time to verify each party's commitments and to allocate risks clearly. A precise clause always costs less than litigation. The most useful intervention is preventive, not curative."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do about unpaid rent in a commercial lease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most effective route runs through the termination clause in the lease. The landlord has a bailiff serve a payment demand giving the tenant one month to pay all sums due in full - partial payment is not sufficient and the deadline cannot be shortened. If nothing is settled within that month, the landlord applies to the court to have the termination declared and to begin eviction proceedings. Unpaid rent may be claimed up to a five-year limitation period."
      }
    },
    {
      "@type": "Question",
      "name": "How do I obtain a lease termination indemnity if renewal is refused?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When the landlord refuses to renew the lease, they must in principle pay an eviction indemnity equal to the loss suffered (article L. 145-14 of the French Commercial Code): value of the business, removal costs, re-establishment and transfer costs. The tenant must meet the conditions for the right to renewal and, if no indemnity is offered, bring a claim before the court within two years - after that, the right is lost. Until payment, the tenant may remain in occupation. The main issue is usually fixing the amount."
      }
    },
    {
      "@type": "Question",
      "name": "Can the termination clause of a commercial lease be contested?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Receiving a payment demand does not make termination final. The tenant may settle within the month, apply to the court for a payment extension (article L. 145-41 of the Commercial Code, combined with the general power under article 1343-5 of the Civil Code), challenge an irregular demand, or raise a defence of non-performance if the landlord has itself breached its obligations - for example by failing to maintain the premises fit for use. The Cour de cassation confirmed that this last defence remains available even without a formal extension request within the month (Cass. 3e civ., 5 March 2026, No 24-15.820). A rapid response is essential."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Alsace-Moselle land register affect my property purchase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In Alsace and Moselle, your property right does not become enforceable against third parties until it is registered in the land register (livre foncier), a register maintained by a judge. The notarial deed binds you to the seller, but registration is what makes your position unassailable against a bank or another buyer. This timing must be planned into the transaction schedule."
      }
    },
    {
      "@type": "Question",
      "name": "I am inheriting property in Alsace - do I have specific formalities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The heir must register their property right in the land register, unless a deed is drawn up within ten months of the death. An estate not updated over several generations creates situations that are very difficult to unblock. Dealing with this registration promptly avoids costly delays later."
      }
    },
    {
      "@type": "Question",
      "name": "Does the firm offer video consultations for real-estate and construction matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For construction defects, a commercial-lease dispute or a real-estate project, the firm offers a free 30-minute video consultation with no commitment. This remote consultation is available from anywhere in France, with no need to travel to Strasbourg. Booking is done directly online."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Examples of real-estate-and-construction work",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Construction defects after handover",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg#construction-defects"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Commercial landlord-tenant dispute",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg#commercial-lease-dispute"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Securing a real-estate project",
      "url": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg#real-estate-project"
    }
  ]
} as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg",
  name: "Real Estate and Construction Law Solicitor in Strasbourg",
  description: "Real estate and construction law advice and litigation: leases, property transactions, construction defects, neighbourhood disputes, co-ownership. Thalinger law firm, Strasbourg.",
  url: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg",
  inLanguage: "en",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
} as const;

export default function RealEstateLawPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Real Estate &amp; Construction Law — Strasbourg
            </h1>
            <h2 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Building also means building a legal framework.
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Defects, structural disorders, unactivated warranties: in construction matters,
              disputes often come to light after works are accepted, when the deadlines for
              action are already running. The firm intervenes to establish contractor liability,
              activate statutory and ten-year warranties, and assist you in agreed or
              court-appointed expert proceedings. Whether you are a project owner or a
              construction professional, every stage of a project creates obligations that
              are better anticipated than discovered in litigation.
            </p>
            <ConsultationSignal lang="en" />
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXT â€” navy */}
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

      {/* 3. ALSACE-MOSELLE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
                Alsatian-Moselle local law
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                An Alsatian-Moselle peculiarity not to overlook.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                In Alsace and in Moselle, a real estate transaction does not follow quite the
                same rules as in the rest of France. Inherited from local history and
                established by the{" "}
                <a
                  href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069443/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/85 transition-colors duration-200 hover:text-gold"
                >
                  Law of 1 June 1924
                </a>
                , the{" "}
                <a
                  href="https://www.livrefoncier.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/85 transition-colors duration-200 hover:text-gold"
                >
                  land register (livre foncier)
                </a>{" "}
                replaces the standard property-registration service used in the rest of
                France. It is maintained by a magistrate — the land register judge — which
                gives it particular reliability.
              </p>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                In practical terms, between you and the seller, the agreement binds you
                from the moment of signature. But against third parties — a bank, a
                creditor, another buyer — your right only becomes secure once it is{" "}
                <a
                  href="https://www.livrefoncier.fr/fr/le-livre-foncier-et-la-loi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/85 transition-colors duration-200 hover:text-gold"
                >
                  registered in the land register
                </a>
                . It is the registration, not the date of signature, that takes legal
                effect. This rule has direct consequences for the timeline of a sale, the
                effectiveness of a mortgage guarantee, and successions involving property
                in Alsace or Moselle.
              </p>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                The firm integrates this specificity from the outset of every transaction
                analysis, to secure the moment at which your right becomes unassailable
                and to avoid delays or unwelcome surprises at the worst possible time.
              </p>
              <p className="font-sans text-[0.8125rem] leading-relaxed text-navy/40">
                References:{" "}
                <a href="https://www.rapport-congresdesnotaires.fr/2021-rapport-du-117e-congres/lexception-du-livre-foncier-dalsace-moselle" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">117th Notarial Congress</a>
                {" · "}
                <a href="https://www.senat.fr/rap/l01-109/l01-1092.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">Senate Report</a>
                {" · "}
                <a href="https://www.larcier-intersentia.com/fr/comprendre-livre-foncier-alsace-moselle-pratiquer-9782879988443.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">F. Hubé, Comprendre le livre foncier d&apos;Alsace-Moselle, Larcier 2023</a>
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

      {/* EXEMPLES D&apos;INTERVENTION */}
      <section id="cas-concrets" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-4">
            <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Examples of real-estate-and-construction work
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Defects, commercial leases, real-estate projects: construction and property involve multiple, long-lasting responsibilities. The following examples illustrate how these are framed and defended.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="construction-defects" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Construction defects after handover</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">An owner discovers structural defects several months after a project is handed over. Communication with the builder breaks down.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Formal notice, analysis of the applicable statutory warranties, activation of the structural-damage insurance (dommages-ouvrage), direct negotiation with the parties involved.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Enforcing the owner&apos;s warranties and seeking compensation, favoring an amicable resolution where possible.</dd>
                </div>
              </dl>
            </details>

            <details id="commercial-lease-dispute" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Commercial landlord-tenant dispute</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A landlord and commercial tenant disagree (rent, charges, condition report, renewal). The relationship grows tense.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Review of the lease and each party&apos;s obligations, identification of the levers, negotiation or action depending on the client&apos;s interest.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifying the rights and obligations under the lease and defending the client&apos;s position.</dd>
                </div>
              </dl>
            </details>

            <details id="real-estate-project" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Securing a real-estate project</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">A developer is starting a real-estate project. The contracts and responsibilities of the parties must be framed before launch.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Approach</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Drafting and review of the contractual documents, allocation of responsibilities, advice on the applicable warranties.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">What&apos;s at stake</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Setting a clear framework upfront to limit the risk of disputes during and after the works.</dd>
                </div>
              </dl>
            </details>

            <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45">
              The situations described are illustrative, anonymized examples based on commonly encountered issues. They do not describe any identifiable matter and constitute neither a guarantee nor a prediction of outcome. Every case is assessed on its own circumstances.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* FAQ */}
      <section id="faq" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Frequently asked questions
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">What should I do about defects after handover?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Identify the applicable warranty (completion, two-year, ten-year), serve formal notice, and activate the structural-damage insurance. The amicable route is often tried before litigation.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">How do I handle a commercial-lease dispute?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">By reviewing the lease and each party&apos;s obligations, then choosing between negotiation and action depending on the stakes and the relationship.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Can the termination clause of a commercial lease be contested?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. Receiving a payment demand does not make termination final. The tenant may settle within the month, apply to the court for a payment extension (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042713" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 145-41 of the Commercial Code</a>, combined with the general power under <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032035267" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 1343-5 of the Civil Code</a>), challenge an irregular demand, or raise a defence of non-performance if the landlord has itself breached its obligations - for example by failing to maintain the premises fit for use. The Cour de cassation confirmed that this last defence remains available even without a formal extension request within the month (<a href="https://www.legifrance.gouv.fr/juri/id/JURITEXT000053679063" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">Cass. 3e civ., 5 March 2026, No 24-15.820</a>). A rapid response is essential.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Should a lawyer frame my real-estate project?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Framing contracts and responsibilities upfront strongly reduces the risk of disputes during and after the works.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Does the firm offer video consultations for real-estate and construction matters?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Yes. For a construction-defect claim, a commercial-lease dispute or a real-estate project, the firm offers a first 30-minute video consultation, free of charge and without commitment. Available from anywhere in France, without travelling to Strasbourg.</div>
            </details>
          </div>
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

