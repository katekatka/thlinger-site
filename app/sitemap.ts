import type { MetadataRoute } from "next";

const BASE = "https://thalinger-avocat.fr";
const LAST_MODIFIED = new Date();

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface PageDef {
  path: string;
  enPath: string;
  priority: number;
  changeFrequency: Freq;
}

// ─── Route catalogue ──────────────────────────────────────────────────────────

const pages: PageDef[] = [
  // Homepage
  {
    path: "/",
    enPath: "/en",
    priority: 1.0,
    changeFrequency: "monthly",
  },

  // Practice areas — primary conversion pages
  {
    path: "/competences/avocat-droit-des-societes-strasbourg",
    enPath: "/en/competences/droit-des-societes",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-droit-commercial-strasbourg",
    enPath: "/en/competences/droit-commercial",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-droit-du-travail-strasbourg",
    enPath: "/en/competences/droit-social",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-droit-bancaire-financier-strasbourg",
    enPath: "/en/competences/droit-bancaire-financier",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-droit-des-assurances-strasbourg",
    enPath: "/en/competences/droit-des-assurances",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-droit-immobilier-construction-strasbourg",
    enPath: "/en/competences/droit-immobilier-construction",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-droit-fiscal-strasbourg",
    enPath: "/en/competences/droit-fiscal",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/competences/avocat-conseil-transfrontalier-strasbourg",
    enPath: "/en/competences/conseil-transfrontalier",
    priority: 0.85,
    changeFrequency: "monthly",
  },

  // About / biography — E-E-A-T anchor page
  {
    path: "/a-propos",
    enPath: "/en/about",
    priority: 0.85,
    changeFrequency: "monthly",
  },

  // Fees — high-intent page
  {
    path: "/honoraires",
    enPath: "/en/honoraires",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Blog — content hub
  {
    path: "/blog",
    enPath: "/en/blog",
    priority: 0.6,
    changeFrequency: "weekly",
  },

  // Legal — boilerplate, rarely changes
  {
    path: "/mentions-legales",
    enPath: "/en/mentions-legales",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/politique-de-confidentialite",
    enPath: "/en/politique-de-confidentialite",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];

// ─── Sitemap ──────────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const frUrl = `${BASE}${page.path}`;
    const enUrl = `${BASE}${page.enPath}`;

    // Hreflang pair — x-default points to FR (primary francophone audience)
    const alternates = {
      languages: {
        "x-default": frUrl,
        fr:          frUrl,
        en:          enUrl,
      },
    };

    // FR canonical
    entries.push({
      url:             frUrl,
      lastModified:    LAST_MODIFIED,
      changeFrequency: page.changeFrequency,
      priority:        page.priority,
      alternates,
    });

    // EN alternate — Google requires both ends of the hreflang pair in the sitemap
    entries.push({
      url:             enUrl,
      lastModified:    LAST_MODIFIED,
      changeFrequency: page.changeFrequency,
      priority:        Math.round((page.priority - 0.1) * 10) / 10,
      alternates,
    });
  }

  return entries;
}
