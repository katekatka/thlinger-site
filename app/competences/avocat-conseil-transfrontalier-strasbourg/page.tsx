import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionGrid } from "@/components/InterventionGrid";

export const metadata: Metadata = {
  title: "Avocat conseil transfrontalier franco-allemand à Strasbourg | Cabinet THALINGER",
  description: "Avocat pour les entreprises et dirigeants franco-allemands à Strasbourg. Contrats transfrontaliers, création de filiales, litiges entre juridictions. Cabinet THALINGER.",
  alternates: { canonical: "https://www.thalinger-avocat.fr/competences/avocat-conseil-transfrontalier-strasbourg" },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  "Contrats transfrontaliers",
  "Création de filiales",
  "Litiges entre juridictions",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConseilTransfrontalierPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Conseil Transfrontalier
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Un interlocuteur pour le système<br className="hidden md:block" /> juridique français.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Situé à Strasbourg, au croisement des deux systèmes, le cabinet vous guide à travers
              les réalités juridiques françaises.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXTE — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Aligner vos opérations sur le cadre juridique français.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Faire du business de l&apos;autre côté du Rhin, c&apos;est opérer dans deux
                systèmes juridiques simultanément. Le droit du travail pour les salariés
                transfrontaliers est un labyrinthe. Et quand un litige survient, savoir
                quelle juridiction s&apos;applique est critique.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Interventions
            </h2>
          </AnimatedSection>

          <InterventionGrid items={interventions} />
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
              style={{ color: "#ffffff" }}
            >
              Discutons de vos enjeux transfrontaliers
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

