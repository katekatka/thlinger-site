import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog â€” Christian THALINGER, Business Lawyer",
  description:
    "Legal articles and updates by Christian THALINGER, business lawyer at the Strasbourg Bar.",
  alternates: {
    canonical: "https://thalinger-avocat.fr/en/blog",
    languages: { fr: "https://thalinger-avocat.fr/blog" },
  },
  openGraph: {
    title: "Blog â€” Christian THALINGER, Business Lawyer",
    description:
      "Legal articles and updates by Christian THALINGER, business lawyer at the Strasbourg Bar.",
    url: "https://thalinger-avocat.fr/en/blog",
    locale: "en_GB",
    type: "website",
  },
};

export default function EnBlogIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Legal resources
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Blog
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Articles and updates by Christian THALINGER on business law and legal practice.
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
              Articles coming soon.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

