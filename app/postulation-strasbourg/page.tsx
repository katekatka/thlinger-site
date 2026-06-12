import type { Metadata } from "next";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Avocat postulant à Strasbourg — Postulation devant le tribunal judiciaire | Christian Thalinger",
  description:
    "Postulation devant le tribunal judiciaire de Strasbourg. Vérification de conflit le jour même, forfait communiqué avant toute diligence, suivi rigoureux de la mise en état. Plaidoirie en relais et appui en droit local sur demande.",
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
  name: "Postulation devant le tribunal judiciaire de Strasbourg",
  description:
    "Postulation devant le tribunal judiciaire de Strasbourg. Constitution rapide, suivi rigoureux de la mise en état, forfait confirmé avant toute diligence.",
  url: "https://www.thalinger-avocat.fr/postulation-strasbourg",
  inLanguage: "fr-FR",
  provider: { "@type": "Attorney", "@id": "https://www.thalinger-avocat.fr/#firm" },
  areaServed: { "@type": "City", name: "Strasbourg" },
  audience: { "@type": "Audience", audienceType: "Avocats et professionnels du droit" },
  priceRange: "200 € - 700 € HT",
} as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dans quel délai la constitution est-elle régularisée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Après vérification de conflit et accord sur le forfait, la constitution intervient via RPVA dans les délais de la procédure, le jour même en cas d'urgence signalée.",
      },
    },
    {
      "@type": "Question",
      name: "Le forfait couvre-t-il la présence aux audiences ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le forfait couvre les actes de procédure et le suivi de la mise en état. La présence physique aux audiences est une prestation distincte, chiffrée d'avance par audience : 100 € HT pour une audience de renvoi ou de mise en état ; 200 € HT pour une audience de plaidoirie.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous devant d'autres juridictions que le tribunal judiciaire de Strasbourg ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mission de postulation est centrée sur le tribunal judiciaire de Strasbourg. Pour une autre juridiction du ressort de Colmar, la possibilité d'intervention s'examine au cas par cas.",
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
      name: "Accueil",
      item: "https://www.thalinger-avocat.fr/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Postulation à Strasbourg",
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
              À l&apos;attention des confrères
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Postulation devant le tribunal judiciaire de Strasbourg
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Une assignation à faire délivrer, une constitution à régulariser dans les délais,
              une mise en état à suivre à distance. Vous avez besoin d&apos;un postulant qui répond
              vite, dont les honoraires sont connus avant toute diligence, et qui reste à sa place :
              la procédure passe par moi, le dossier reste chez vous.
            </p>
            <div className="mt-8 max-w-2xl space-y-5">
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Inscrit au barreau de Strasbourg, j&apos;assure la postulation devant le{" "}
                <a
                  href="https://www.justice.gouv.fr/annuaire/fiche/tribunal-judiciaire-de-strasbourg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-200"
                >
                  tribunal judiciaire de Strasbourg
                </a>
                .
              </p>
<p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Pour une procédure devant une autre juridiction du ressort, la possibilité
                d&apos;intervention s&apos;examine au cas par cas. La question se règle en un
                échange.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TARIFS */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-10 font-sans text-[11px] uppercase tracking-[0.2em] text-white/50">
              Tarifs de postulation
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { price: "200 €", label: "Prise de date RPVA seule" },
                { price: "200–700 €", label: "Forfait selon la procédure" },
                { price: "700 €", label: "Mission complète sur 18 mois" },
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

      {/* 3. PÉRIMÈTRE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
                Les diligences de représentation
              </p>
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Le périmètre de la mission.
              </h2>
              <div className="mb-10 flex flex-wrap gap-3">
                {[
                  "Constitution et actes de procédure via RPVA",
                  "Notification des conclusions et communication des pièces dans les délais",
                  "Suivi du calendrier de la mise en état et des injonctions du juge",
                  "Transmission immédiate des bulletins, avis et décisions, sans tri ni délai",
                  "Alerte sur chaque échéance, à temps pour que vous puissiez agir",
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
                  La stratégie, la rédaction des conclusions et la plaidoirie restent entre vos
                  mains.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. AU-DELÀ */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Au-delà de la postulation seule.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Présence aux audiences.",
                text: "Audiences de mise en état, d’incident ou de clôture : représentation sur place, compte rendu le jour même. Tarif : 100 € HT par audience de renvoi ou de mise en état ; 200 € HT pour une audience de plaidoirie.",
              },
              {
                title: "Plaidoirie en relais.",
                text: "Vous rédigez, je plaide sur vos conclusions et selon vos instructions ; ou je vous représente à l’audience pour vous éviter le déplacement. Le compte rendu suit l’audience.",
              },
              {
                title: "Appui en droit local.",
                text: "Livre foncier, chambre commerciale avec échevinage, exécution forcée immobilière : un point de vérification avant un acte, ou un appui continu pendant l’instance.",
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

      {/* 5. TARIFS + CE QUI COMPTE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">

          {/* Ce qui compte */}
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Ce qui compte quand vous choisissez un postulant.
              </h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65 md:text-right">
                La vitesse de la première réponse,<br />
                la certitude sur les honoraires,<br />
                la fiabilité dans la durée.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "La vitesse.",
                text: "Vous m'adressez l'acte, l'identité des parties et votre échéance. La vérification de conflit d'intérêts intervient le jour même ; la confirmation de mission vous parvient sous 24 heures ouvrées.",
              },
              {
                title: "La certitude.",
                text: "Forfait confirmé par écrit avant la constitution ; prestations complémentaires chiffrées séparément.",
              },
              {
                title: "La fiabilité.",
                text: "Double contrôle des échéances, dossier à jour sur le RPVA, et un seul interlocuteur du début à la fin de l'instance.",
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

      {/* 6. DÉONTOLOGIE */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Votre client reste le vôtre
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                La postulation repose sur la confiance entre confrères. Aucun contact direct avec
                votre client sans votre accord exprès. Toutes les communications passent par vous.
                À la clôture, le dossier vous revient intégralement.
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
              Questions fréquentes
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-navy">
                  Dans quel délai la constitution est-elle régularisée ?
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
                Après vérification de conflit et accord sur le forfait, la constitution intervient
                via RPVA dans les délais de la procédure, le jour même en cas d&apos;urgence
                signalée.
              </div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-navy">
                  Le forfait couvre-t-il la présence aux audiences ?
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
                Le forfait couvre les actes de procédure et le suivi de la mise en état. La présence
                physique aux audiences est une prestation distincte, chiffrée d&apos;avance par
                audience : 100 € HT pour une audience de renvoi ou de mise en état ; 200 € HT pour
                une audience de plaidoirie.
              </div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-navy">
                  Intervenez-vous devant d&apos;autres juridictions que le tribunal judiciaire de
                  Strasbourg ?
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
                La mission de postulation est centrée sur le tribunal judiciaire de Strasbourg. Pour
                une autre juridiction du ressort de Colmar, la possibilité d&apos;intervention
                s&apos;examine au cas par cas : posez la question, la réponse est rapide.
              </div>
            </details>
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 8. ENGAGER LA MISSION */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                Engager la mission
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Pour permettre la vérification de conflit et la confirmation du forfait,
                transmettez :
              </p>
              <ul className="space-y-3">
                {[
                  "L'assignation, la requête ou la décision concernée",
                  "L'identité complète des parties",
                  "Votre échéance et vos coordonnées RPVA",
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
                href="mailto:christian@thalinger-avocat.fr?subject=Postulation%20-%20transmission%20dossier"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                style={{ color: "#ffffff" }}
              >
                Transmettre un dossier par mail
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
