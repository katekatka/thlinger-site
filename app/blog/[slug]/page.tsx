import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs, readingTimeMinutes, type FaqItem } from "@/lib/sanity";
import { PortableTextContent } from "@/components/PortableTextContent";

export const revalidate = 3600;

const BASE = "https://thalinger-avocat.fr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs("fr").catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, "fr").catch(() => null);
  if (!article) return {};

  const ogImage = article.mainImage
    ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${article.mainImage.asset._ref.replace("image-", "").replace("-jpg", ".jpg").replace("-png", ".png").replace("-webp", ".webp")}`
    : `${BASE}/opengraph-image.png`;

  return {
    title: `${article.seoTitle ?? article.title} — Christian THALINGER, Avocat d'affaires`,
    description: article.seoDescription ?? article.excerpt,
    alternates: {
      canonical: `${BASE}/blog/${slug}`,
      ...(article.translationSlug && {
        languages: { en: `${BASE}/en/blog/${article.translationSlug}` },
      }),
    },
    openGraph: {
      title: article.title,
      description: article.seoDescription ?? article.excerpt,
      url: `${BASE}/blog/${slug}`,
      locale: "fr_FR",
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.seoDescription ?? article.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, "fr").catch(() => null);
  if (!article) notFound();

  const readingTime = readingTimeMinutes(article.body ?? []);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription ?? article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.lastUpdated ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author ?? "Christian THALINGER",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "Christian THALINGER — Avocat d'affaires",
      url: BASE,
    },
    inLanguage: "fr-FR",
    url: `${BASE}/blog/${slug}`,
    ...(article.primaryKeyword && { keywords: [article.primaryKeyword, ...(article.secondaryKeywords ?? [])].join(", ") }),
  };

  const jsonLdFaq = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f: FaqItem) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}

      <div className="mx-auto w-full max-w-[720px] px-6 pt-16 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 flex items-center gap-2 text-[0.75rem] text-dark/40" style={{ fontFamily: "var(--font-poppins)" }}>
          <a href="/" className="hover:text-navy transition-colors">Accueil</a>
          <span aria-hidden="true">/</span>
          <a href="/blog" className="hover:text-navy transition-colors">Blog</a>
          <span aria-hidden="true">/</span>
          <span className="truncate max-w-[200px] text-dark/70">{article.title}</span>
        </nav>

        {article.category && (
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.18em] text-gold" style={{ fontFamily: "var(--font-poppins)" }}>
            {article.category}
          </p>
        )}

        <h1 className="text-[2rem] font-normal leading-tight text-navy md:text-[2.6rem]" style={{ fontFamily: "var(--font-playfair)" }}>
          {article.title}
        </h1>

        <div className="mt-5 mb-12 flex flex-wrap items-center gap-4 text-[0.8rem] text-dark/50" style={{ fontFamily: "var(--font-poppins)" }}>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{readingTime} min de lecture</span>
          {article.translationSlug && (
            <>
              <span aria-hidden="true">·</span>
              <a href={`/en/blog/${article.translationSlug}`} className="text-navy underline underline-offset-2 hover:text-dark transition-colors" hrefLang="en">
                Read in English
              </a>
            </>
          )}
        </div>

        {/* TL;DR — cited by AI search engines */}
        {article.tldr && (
          <div className="mb-10 rounded-2xl border-l-4 border-gold bg-navy/[0.03] px-7 py-6">
            <p className="mb-2 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">En résumé</p>
            <p className="font-sans text-[0.9375rem] leading-relaxed text-navy/80">{article.tldr}</p>
          </div>
        )}

        <PortableTextContent body={article.body} />

        {/* FAQ */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 font-serif text-[1.75rem] font-normal leading-tight text-navy">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {article.faqs.map((faq: FaqItem, i: number) => (
                <div key={i} className="border-t border-navy/10 pt-6">
                  <h3 className="mb-3 font-serif text-[1.1rem] font-normal text-navy">{faq.question}</h3>
                  <p className="font-sans text-[0.9375rem] leading-relaxed text-navy/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 pt-12" style={{ borderTop: "2px solid var(--color-gold)" }}>
          <p className="mb-6 text-[0.875rem] leading-relaxed text-dark/60" style={{ fontFamily: "var(--font-poppins)" }}>
            Une question juridique ? Prenez contact pour un premier échange.
          </p>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
          >
            Contacter
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
