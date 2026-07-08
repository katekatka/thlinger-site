import type { Metadata } from "next";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Avocat postulant et substitution aux audiences à Strasbourg | Christian Thalinger",
  description:
    "Postulation devant le tribunal judiciaire de Strasbourg et substitution aux audiences dans le ressort de Strasbourg, Saverne et Colmar. Forfait convenu avant toute intervention, réponse rapide, coordination transparente avec le confrère plaidant.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/postulation-strasbourg",
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
  "@id": "https://www.thalinger-avocat.fr/postulation-strasbourg",
  name: "Postulation et substitution aux audiences",
  description:
    "Postulation devant le tribunal judiciaire de Strasbourg dans le cadre des procédures à représentation obligatoire, et substitution aux audiences dans le cadre des procédures sans représentation obligatoire devant les tribunaux du ressort de Strasbourg, Saverne et Colmar.",
  url: "https://www.thalinger-avocat.fr/postulation-strasbourg",
  inLanguage: "fr-FR",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "City", name: "Saverne" },
    { "@type": "City", name: "Colmar" },
  ],
  audience: { "@type": "Audience", audienceType: "Avocats et professionnels du droit" },
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.thalinger-avocat.fr/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Postulation et substitution aux audiences",
      item: "https://www.thalinger-avocat.fr/postulation-strasbourg",
    },
  ],
} as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PostulationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
              À l&apos;attention des confrères
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Postulation et substitution aux audiences
            </h1>
            <div className="max-w-2xl space-y-5">
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Le cabinet assure la postulation dans le cadre de procédure à représentation
                devant le tribunal judiciaire de Strasbourg.
              </p>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Le cabinet est aussi en mesure de vous substituer dans le cadre de procédure sans
                représentation obligatoire devant les tribunaux relevant du ressort de Strasbourg,
                Saverne et Colmar.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. HONORAIRES */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-6 font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Honoraires de postulation à Strasbourg : un forfait convenu à l&apos;avance
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Le coût de l&apos;intervention du cabinet sera défini sous forme d&apos;un forfait
                convenu préalablement à toute intervention ou diligence de notre part.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. COLLABORATION */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Une collaboration efficace qui facilite les démarches des confrères plaidants.
              </h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65 md:text-right">
                La certitude d&apos;une coordination sans faille,<br />
                la transparence sur les honoraires,<br />
                la vitesse de la première réponse.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "La certitude.",
                text: "Le cabinet garantit une parfaite coordination tout au long de la procédure.",
              },
              {
                title: "La transparence.",
                text: "Les modalités d'intervention et les honoraires sont définis avec transparence dès la prise en charge du dossier.",
              },
              {
                title: "La vitesse.",
                text: "Chaque demande fait l'objet d'une réponse rapide.",
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

      {/* 4. ENGAGER LA MISSION / CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                Engager la mission
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Pour toute demande de postulation ou de correspondance, le Cabinet vous invite à
                prendre contact afin d&apos;échanger sur vos besoins et les modalités de notre
                intervention.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                style={{ color: "#ffffff" }}
              >
                Prendre contact
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
