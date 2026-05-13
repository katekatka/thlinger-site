import type { Metadata } from "next";
import { getPublishedPosts, getPostWithContent } from "@/lib/notion";
import BlogGrid from "@/components/BlogGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Christian Thalinger, Business Lawyer",
  description:
    "Legal articles and updates by Christian Thalinger, business lawyer at the Strasbourg Bar.",
  alternates: {
    canonical: "https://thalinger-avocat.fr/en/blog",
    languages: { fr: "https://thalinger-avocat.fr/blog" },
  },
  openGraph: {
    title: "Blog — Christian Thalinger, Business Lawyer",
    description:
      "Legal articles and updates by Christian Thalinger, business lawyer at the Strasbourg Bar.",
    url: "https://thalinger-avocat.fr/en/blog",
    locale: "en_GB",
    type: "website",
  },
};

export default async function EnBlogIndexPage() {
  const posts = await getPublishedPosts("EN").catch(() => []);

  const withContent = await Promise.all(
    posts.map((p) => getPostWithContent(p.slug, "EN"))
  );

  const postsWithTime = posts.map((p, i) => ({
    ...p,
    readingTimeMinutes: withContent[i]?.readingTimeMinutes ?? 1,
  }));

  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Legal resources
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Blog
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Articles and updates by Christian Thalinger on business law and legal practice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* ARTICLES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          {postsWithTime.length === 0 ? (
            <p className="font-sans text-[1rem] text-navy/60 leading-relaxed">
              English articles are coming soon. In the meantime, you can read our{" "}
              <a
                href="/blog"
                className="text-navy underline underline-offset-2 hover:text-dark transition-colors"
              >
                French articles
              </a>
              .
            </p>
          ) : (
            <BlogGrid posts={postsWithTime} lang="EN" />
          )}
        </div>
      </section>
    </>
  );
}
