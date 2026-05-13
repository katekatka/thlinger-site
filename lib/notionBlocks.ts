import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";

let n2mInstance: NotionToMarkdown | null = null;

function getN2M(client: Client): NotionToMarkdown {
  if (!n2mInstance) {
    n2mInstance = new NotionToMarkdown({ notionClient: client });
  }
  return n2mInstance;
}

/**
 * Fetches a Notion page's block content and returns sanitized HTML.
 */
export async function pageToHtml(
  client: Client,
  pageId: string
): Promise<string> {
  const n2m = getN2M(client);
  const blocks = await n2m.pageToMarkdown(pageId);
  const { parent: markdown } = n2m.toMarkdownString(blocks);

  // marked is synchronous in v5+ when no async extensions are registered.
  const html = await marked(markdown, {
    gfm: true,
    breaks: false,
  });

  return html;
}

/**
 * Counts words in an HTML string (strips tags first) and returns
 * an estimated reading time in minutes at 200 wpm (min 1).
 */
export function readingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.round(words / 200));
}
