import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thalinger-avocat.fr";

  const routes = [
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}