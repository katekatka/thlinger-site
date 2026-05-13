import type { Metadata } from "next";
import { getPublishedPosts, getPostWithContent } from "@/lib/notion";
import BlogGrid from "@/components/BlogGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Christian Thalinger, Avocat d'affaires",
  description:
    "Articles et actualités juridiques rédigés par Maître Christian Thalinger, avocat d'affaires à Strasbourg.",
  alternates: {
    canonical: "https://thalinger-avocat.fr/blog",
    languages: { en: "https://thalinger-avocat.fr/en/blog" },
  },
  openGraph: {
    title: "Blog — Christian Thalinger, Avocat d'affaires",
    description:
      "Articles et actualités juridiques rédigés par Maître Christian Thalinger, avocat d'affaires à Strasbourg.",
    url: "https://thalinger-avocat.fr/blog",
    locale: "fr_FR",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts("FR").catch(() => []);

  const withContent = await Promise.all(
    posts.map((p) => getPostWithContent(p.slug, "FR"))
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
              Ressources juridiques
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Blog
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Articles et actualités rédigés par Maître Christian Thalinger sur le droit des affaires et la pratique juridique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* ARTICLES */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          {postsWithTime.length === 0 ? (
            <p className="font-sans text-[0.95rem] text-navy/50">
              Aucun article publié pour le moment.
            </p>
          ) : (
            <BlogGrid posts={postsWithTime} lang="FR" />
          )}
        </div>
      </section>
    </>
  );
}
