import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getArticles } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Christian THALINGER, Avocat d'affaires",
  description:
    "Articles et actualités juridiques rédigés par Maître Christian THALINGER, avocat d'affaires à Strasbourg.",
  alternates: {
    canonical: "https://thalinger-avocat.fr/blog",
    languages: { en: "https://thalinger-avocat.fr/en/blog" },
  },
  openGraph: {
    title: "Blog — Christian THALINGER, Avocat d'affaires",
    description:
      "Articles et actualités juridiques rédigés par Maître Christian THALINGER, avocat d'affaires à Strasbourg.",
    url: "https://thalinger-avocat.fr/blog",
    locale: "fr_FR",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const articles = await getArticles("fr").catch(() => []);

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
              Articles et actualités rédigés par Maître Christian THALINGER sur le droit
              des affaires et la pratique juridique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* ARTICLES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          {articles.length === 0 ? (
            <AnimatedSection>
              <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/50">
                Les articles seront publiés prochainement.
              </p>
            </AnimatedSection>
          ) : (
            <div className="divide-y divide-navy/10">
              {articles.map((article, i) => (
                <AnimatedSection key={article._id} delay={i * 0.05} className="py-10 first:pt-0">
                  <article>
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        {article.category && (
                          <p className="mb-3 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-gold">
                            {article.category}
                          </p>
                        )}
                        <h2 className="mb-3 font-serif text-[1.5rem] font-normal leading-tight text-navy md:text-[1.75rem]">
                          <Link
                            href={`/blog/${article.slug.current}`}
                            className="transition-colors duration-200 hover:text-gold"
                          >
                            {article.title}
                          </Link>
                        </h2>
                        <p className="mb-4 max-w-2xl font-sans text-sm leading-relaxed text-navy/60 md:text-[0.9375rem]">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4">
                          <time
                            dateTime={article.publishedAt}
                            className="font-sans text-[0.75rem] text-navy/40"
                          >
                            {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </time>
                          <Link
                            href={`/blog/${article.slug.current}`}
                            className="group inline-flex items-center gap-2 font-sans text-[0.8125rem] text-navy transition-colors duration-200 hover:text-gold"
                          >
                            Lire l&apos;article
                            <svg width="14" height="9" viewBox="0 0 16 10" fill="none" aria-hidden="true"
                              className="transition-transform duration-300 group-hover:translate-x-1">
                              <path d="M1 5H15M15 5L11 1M15 5L11 9"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
