import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/notion";

const baseUrl = "https://www.thalinger-avocat.fr";

const staticRoutes = [
  "",
  "/en",

  "/honoraires",
  "/en/honoraires",

  "/mentions-legales",
  "/en/mentions-legales",

  "/politique-de-confidentialite",
  "/en/politique-de-confidentialite",

  "/competences/droit-des-societes",
  "/en/competences/droit-des-societes",

  "/competences/droit-commercial",
  "/en/competences/droit-commercial",

  "/competences/droit-du-travail",
  "/en/competences/droit-du-travail",

  "/competences/conseil-transfrontalier",
  "/en/competences/conseil-transfrontalier",

  "/competences/droit-immobilier",
  "/en/competences/droit-immobilier",

  "/competences/droit-fiscal",
  "/en/competences/droit-fiscal",

  "/blog",
  "/en/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch published posts for both languages (cached)
  const [frPosts, enPosts] = await Promise.all([
    getPublishedPosts("FR").catch(() => []),
    getPublishedPosts("EN").catch(() => []),
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const frPostEntries: MetadataRoute.Sitemap = frPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate ? new Date(post.publishedDate) : new Date(),
  }));

  const enPostEntries: MetadataRoute.Sitemap = enPosts.map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: post.publishedDate ? new Date(post.publishedDate) : new Date(),
  }));

  return [...staticEntries, ...frPostEntries, ...enPostEntries];
}
