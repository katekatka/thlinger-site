import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getArticles } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Christian THALINGER, Business Lawyer",
  description:
    "Legal articles and updates by Christian THALINGER, business lawyer at the Strasbourg Bar.",
  alternates: {
    canonical: "https://thalinger-avocat.fr/en/blog",
    languages: { fr: "https://thalinger-avocat.fr/blog" },
  },
  openGraph: {
    title: "Blog — Christian THALINGER, Business Lawyer",
    description:
      "Legal articles and updates by Christian THALINGER, business lawyer at the Strasbourg Bar.",
    url: "https://thalinger-avocat.fr/en/blog",
    locale: "en_GB",
    type: "website",
  },
};

export default async function EnBlogIndexPage() {
  const articles = await getArticles("en").catch(() => []);

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

      {/* ARTICLES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          {articles.length === 0 ? (
            <AnimatedSection>
              <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/50">
                Articles coming soon.
              </p>
            </AnimatedSection>
          ) : (
            <div className="divide-y divide-navy/10">
              {articles.map((article, i) => (
                <AnimatedSection key={article._id} delay={i * 0.05} className="py-10 first:pt-0">
                  <article>
                    {article.category && (
                      <p className="mb-3 font-sans text-[0.72rem] uppercase tracking-[0.18em] text-gold">
                        {article.category}
                      </p>
                    )}
                    <h2 className="mb-3 font-serif text-[1.5rem] font-normal leading-tight text-navy md:text-[1.75rem]">
                      <Link href={`/en/blog/${article.slug.current}`} className="transition-colors duration-200 hover:text-gold">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mb-4 max-w-2xl font-sans text-sm leading-relaxed text-navy/60 md:text-[0.9375rem]">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <time dateTime={article.publishedAt} className="font-sans text-[0.75rem] text-navy/40">
                        {new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                      <Link href={`/en/blog/${article.slug.current}`} className="group inline-flex items-center gap-2 font-sans text-[0.8125rem] text-navy transition-colors duration-200 hover:text-gold">
                        Read article
                        <svg width="14" height="9" viewBox="0 0 16 10" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
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
