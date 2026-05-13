import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPosts, getPostWithContent, getTranslation } from "@/lib/notion";

export const revalidate = 3600;

const BASE = "https://thalinger-avocat.fr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts("FR");
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    // Notion credentials not configured — skip pre-rendering.
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostWithContent(slug, "FR").catch(() => null);
  if (!post) return {};

  const translation = await getTranslation(post);
  const ogImage = post.ogImageUrl ?? `${BASE}/opengraph-image.png`;

  return {
    title: `${post.title} — Christian Thalinger, Avocat d'affaires`,
    description: post.metaDescription,
    alternates: {
      canonical: `${BASE}/blog/${post.slug}`,
      ...(translation && {
        languages: { en: `${BASE}/en/blog/${translation.slug}` },
      }),
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${BASE}/blog/${post.slug}`,
      locale: "fr_FR",
      type: "article",
      publishedTime: post.publishedDate,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostWithContent(slug, "FR").catch(() => null);
  if (!post) notFound();

  const translation = await getTranslation(post).catch(() => null);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.lastUpdated || post.publishedDate,
    author: {
      "@type": "Person",
      name: "Christian Thalinger",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "Christian Thalinger — Avocat d'affaires",
      url: BASE,
    },
    inLanguage: "fr-FR",
    url: `${BASE}/blog/${post.slug}`,
    ...(post.ogImageUrl && { image: post.ogImageUrl }),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Single centered column — header + body share the same x-axis */}
      <div className="mx-auto w-full max-w-[720px] px-6 pt-16 pb-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="mb-8 flex items-center gap-2 text-[0.75rem] text-dark/40"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <a href="/" className="hover:text-navy transition-colors">Accueil</a>
          <span aria-hidden="true">/</span>
          <a href="/blog" className="hover:text-navy transition-colors">Blog</a>
          <span aria-hidden="true">/</span>
          <span className="text-dark/70 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Category */}
        {post.category && (
          <p
            className="mb-4 text-[0.72rem] uppercase tracking-[0.18em] text-gold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {post.category}
          </p>
        )}

        {/* Title */}
        <h1
          className="text-[2rem] font-normal leading-tight text-navy md:text-[2.6rem]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div
          className="mt-5 mb-12 flex flex-wrap items-center gap-4 text-[0.8rem] text-dark/50"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {post.publishedDate && (
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          )}
          <span aria-hidden="true">·</span>
          <span>{post.readingTimeMinutes} min de lecture</span>

          {translation && (
            <>
              <span aria-hidden="true">·</span>
              <a
                href={`/en/blog/${translation.slug}`}
                className="text-navy underline underline-offset-2 hover:text-dark transition-colors"
                hrefLang="en"
              >
                Read in English
              </a>
            </>
          )}
        </div>

        {/* Body */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        {/* CTA */}
        <div className="mt-16 pt-12" style={{ borderTop: "2px solid var(--color-gold)" }}>
          <p
            className="mb-6 text-[0.875rem] leading-relaxed text-dark/60"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Une question juridique ? Prenez contact pour un premier échange.
          </p>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
          >
            Contacter
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 5H15M15 5L11 1M15 5L11 9"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
