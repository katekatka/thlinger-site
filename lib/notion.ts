import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cached } from "./notionCache";
import { pageToHtml, readingTime } from "./notionBlocks";

// ---------------------------------------------------------------------------
// Client singleton
// ---------------------------------------------------------------------------

function getClient(): Client {
  const auth = process.env.NOTION_TOKEN;
  if (!auth) throw new Error("NOTION_TOKEN env var is not set");
  return new Client({ auth });
}

function getDbId(): string {
  const id = process.env.NOTION_BLOG_DATABASE_ID;
  if (!id) throw new Error("NOTION_BLOG_DATABASE_ID env var is not set");
  return id;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Post {
  id: string;
  title: string;
  slug: string;
  language: "FR" | "EN";
  status: "Draft" | "Published";
  publishedDate: string;
  lastUpdated: string;
  category: string;
  metaDescription: string;
  excerpt: string;
  ogImageUrl: string | null;
  /** Slug of the counterpart post in the other language, if any. */
  translationSlug: string | null;
  // GEO / SEO fields
  primaryKeyword: string;
  searchIntent: string;
  wordCount: number;
  author: string;
}

export interface PostWithContent extends Post {
  htmlContent: string;
  readingTimeMinutes: number;
}

// ---------------------------------------------------------------------------
// Property helpers
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function text(props: Props, name: string): string {
  const p = props[name];
  if (!p) return "";
  if (p.type === "title")
    return p.title.map((t: { plain_text: string }) => t.plain_text).join("");
  if (p.type === "rich_text")
    return p.rich_text.map((t: { plain_text: string }) => t.plain_text).join("");
  return "";
}

function select(props: Props, name: string): string {
  const p = props[name];
  if (p?.type === "select") return p.select?.name ?? "";
  return "";
}

function multiSelect(props: Props, name: string): string {
  const p = props[name];
  if (p?.type === "multi_select") return p.multi_select[0]?.name ?? "";
  return "";
}

function multiSelectAll(props: Props, name: string): string[] {
  const p = props[name];
  if (p?.type === "multi_select")
    return p.multi_select.map((s: { name: string }) => s.name);
  return [];
}

function date(props: Props, name: string): string {
  const p = props[name];
  if (p?.type === "date") return p.date?.start ?? "";
  return "";
}

function num(props: Props, name: string): number {
  const p = props[name];
  if (p?.type === "number") return p.number ?? 0;
  return 0;
}

function files(props: Props, name: string): string | null {
  const p = props[name];
  if (p?.type !== "files") return null;
  const first = p.files[0];
  if (!first) return null;
  if (first.type === "external") return first.external.url as string;
  if (first.type === "file") return first.file.url as string;
  return null;
}

// ---------------------------------------------------------------------------
// Mapper — uses the exact Notion database property names
// ---------------------------------------------------------------------------

// Notion property name for the main slug column (renamed from the old verbose name)
const SLUG_PROP = "Slug";

function mapPage(page: PageObjectResponse): Post {
  const props = page.properties as Props;

  // SecondaryKeywords may be multi_select or rich_text — handle both
  const secondaryKwMulti = multiSelectAll(props, "SecondaryKeywords");
  const secondaryKwText = text(props, "SecondaryKeywords");
  const secondaryKeywords =
    secondaryKwMulti.length > 0 ? secondaryKwMulti.join(", ") : secondaryKwText;

  return {
    id: page.id,
    title: text(props, "Title"),
    slug: text(props, SLUG_PROP),
    language: (select(props, "Language") as "FR" | "EN") || "FR",
    status: (select(props, "Status") as "Draft" | "Published") || "Draft",
    // Support both "PublishDate" (current) and "PublishedDate" (legacy)
    publishedDate: date(props, "PublishDate") || date(props, "PublishedDate"),
    lastUpdated: date(props, "LastUpdated"),
    category: multiSelect(props, "Category"),
    metaDescription: text(props, "MetaDescription"),
    excerpt: text(props, "Excerpt"),
    ogImageUrl: files(props, "OGImage"),
    translationSlug: text(props, "Slug EN") || null,
    // GEO fields
    primaryKeyword: text(props, "PrimaryKeyword"),
    searchIntent: select(props, "SearchIntent"),
    wordCount: num(props, "WordCount"),
    author: text(props, "Author"),
    // expose secondary keywords via category fallback for future use
    ...(secondaryKeywords && { _secondaryKeywords: secondaryKeywords }),
  } as Post & { _secondaryKeywords?: string };
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

function isValidPost(post: Post): boolean {
  const required: (keyof Post)[] = ["title", "slug", "language"];
  const missing = required.filter((k) => !post[k]);
  if (missing.length > 0) {
    console.warn(
      `[notion] Skipping post "${post.title || post.id}" — missing: ${missing.join(", ")}`
    );
    return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Returns all published posts for a given language, newest first. */
export async function getPublishedPosts(lang: "FR" | "EN"): Promise<Post[]> {
  return cached(`posts:${lang}`, async () => {
    const client = getClient();
    const db = getDbId();

    const response: QueryDatabaseResponse = await client.databases.query({
      database_id: db,
      filter: {
        and: [
          { property: "Status", select: { equals: "Published" } },
          { property: "Language", select: { equals: lang } },
        ],
      },
      sorts: [{ property: "PublishDate", direction: "descending" }],
    });

    return response.results
      .filter(
        (p): p is PageObjectResponse =>
          p.object === "page" && "properties" in p
      )
      .map((p) => mapPage(p))
      .filter(isValidPost);
  });
}

/** Returns a single published post by slug, or null if not found. */
export async function getPostBySlug(
  slug: string,
  lang: "FR" | "EN"
): Promise<Post | null> {
  return cached(`post:${lang}:${slug}`, async () => {
    const client = getClient();
    const db = getDbId();

    const response: QueryDatabaseResponse = await client.databases.query({
      database_id: db,
      filter: {
        and: [
          { property: "Status", select: { equals: "Published" } },
          { property: "Language", select: { equals: lang } },
          { property: SLUG_PROP, rich_text: { equals: slug } },
        ],
      },
      page_size: 1,
    });

    const page = response.results.find(
      (p): p is PageObjectResponse =>
        p.object === "page" && "properties" in p
    );
    return page ? mapPage(page) : null;
  });
}

/**
 * Returns the counterpart post in the other language, or null if none.
 *
 * - FR post: reads "Slug EN" directly from the post (already in translationSlug).
 * - EN post: reverse-queries for the FR post whose "Slug EN" matches this EN slug.
 */
export async function getTranslation(post: Post): Promise<Post | null> {
  return cached(`translation:${post.id}`, async () => {
    if (post.language === "FR") {
      if (!post.translationSlug) return null;
      return getPostBySlug(post.translationSlug, "EN");
    }

    // EN post — reverse lookup
    const client = getClient();
    const db = getDbId();

    const response: QueryDatabaseResponse = await client.databases.query({
      database_id: db,
      filter: {
        and: [
          { property: "Status", select: { equals: "Published" } },
          { property: "Language", select: { equals: "FR" } },
          { property: "Slug EN", rich_text: { equals: post.slug } },
        ],
      },
      page_size: 1,
    });

    const page = response.results.find(
      (p): p is PageObjectResponse =>
        p.object === "page" && "properties" in p
    );
    return page ? mapPage(page) : null;
  });
}

/**
 * Fetches and renders the full content of a post.
 */
export async function getPostWithContent(
  slug: string,
  lang: "FR" | "EN"
): Promise<PostWithContent | null> {
  const post = await getPostBySlug(slug, lang);
  if (!post) return null;

  const htmlContent = await cached(`content:${post.id}`, () =>
    pageToHtml(getClient(), post.id)
  );

  return {
    ...post,
    htmlContent,
    readingTimeMinutes: readingTime(htmlContent),
  };
}
