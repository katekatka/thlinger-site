import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog â€” Christian THALINGER, Avocat d'affaires",
  description:
    "Articles et actualitÃ©s juridiques rÃ©digÃ©s par MaÃ®tre Christian THALINGER, avocat d'affaires Ã  Strasbourg.",
  alternates: {
    canonical: "https://thalinger-avocat.fr/blog",
    languages: { en: "https://thalinger-avocat.fr/en/blog" },
  },
  openGraph: {
    title: "Blog â€” Christian THALINGER, Avocat d'affaires",
    description:
      "Articles et actualitÃ©s juridiques rÃ©digÃ©s par MaÃ®tre Christian THALINGER, avocat d'affaires Ã  Strasbourg.",
    url: "https://thalinger-avocat.fr/blog",
    locale: "fr_FR",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Ressources juridiques
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Blog
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Articles et actualitÃ©s rÃ©digÃ©s par MaÃ®tre Christian THALINGER sur le droit
              des affaires et la pratique juridique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* PLACEHOLDER */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/50">
              Les articles seront publiÃ©s prochainement.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

