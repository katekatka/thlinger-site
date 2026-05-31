import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

// ─── Client ───────────────────────────────────────────────────────────────────

export const sanityClient = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn:     true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer:   string;
}

export interface SanityArticle {
  _id:               string;
  title:             string;
  slug:              { current: string };
  language:          "fr" | "en";
  publishedAt:       string;
  lastUpdated?:      string;
  category?:         string;
  excerpt:           string;
  tldr?:             string;
  faqs?:             FaqItem[];
  primaryKeyword?:   string;
  secondaryKeywords?: string[];
  searchIntent?:     string;
  mainImage?:        { asset: { _ref: string }; alt?: string };
  body:              unknown[];
  seoTitle?:         string;
  seoDescription?:   string;
  translationSlug?:  string;
  author?:           string;
  nextRefreshDue?:   string;
  refreshCadence?:   string;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const listFields = `
  _id,
  title,
  slug,
  language,
  publishedAt,
  category,
  excerpt,
  primaryKeyword,
  mainImage,
  seoTitle,
  seoDescription,
  translationSlug
`;

const fullFields = `
  ${listFields},
  lastUpdated,
  tldr,
  faqs[] { question, answer },
  secondaryKeywords,
  searchIntent,
  author,
  body
`;

/** Returns all published articles for a given language, newest first. */
export async function getArticles(lang: "fr" | "en"): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article" && language == $lang && defined(publishedAt) && publishedAt <= now()]
     | order(publishedAt desc) { ${listFields} }`,
    { lang }
  );
}

/** Returns a single article by slug, or null. */
export async function getArticleBySlug(
  slug: string,
  lang: "fr" | "en"
): Promise<SanityArticle | null> {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug && language == $lang][0] { ${fullFields} }`,
    { slug, lang }
  );
}

/** Returns all slugs for static params generation. */
export async function getAllSlugs(lang: "fr" | "en"): Promise<string[]> {
  const results: { slug: { current: string } }[] = await sanityClient.fetch(
    `*[_type == "article" && language == $lang && defined(slug.current)] { slug }`,
    { lang }
  );
  return results.map((r) => r.slug.current);
}

/** Estimates reading time from Portable Text body blocks. */
export function readingTimeMinutes(body: unknown[]): number {
  const text = body
    .filter((b: unknown) => (b as { _type: string })._type === "block")
    .flatMap((b: unknown) => (b as { children?: { text?: string }[] }).children ?? [])
    .map((c) => c.text ?? "")
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
