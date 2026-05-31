import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  groups: [
    { name: "content",   title: "Contenu",   default: true },
    { name: "geo",       title: "GEO / SEO" },
    { name: "seo",       title: "Méta SEO"  },
    { name: "editorial", title: "Éditorial" },
  ],
  fields: [
    // ── Identity ──────────────────────────────────────────────────────────────
    defineField({
      name: "language",
      title: "Langue",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Français", value: "fr" },
          { title: "English",  value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "fr",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      group: "content",
      validation: (r) => r.required().min(10).max(100),
    }),

    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),

    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      group: "content",
      options: {
        list: [
          "Droit des Sociétés",
          "Droit Commercial",
          "Droit du Travail",
          "Droit Bancaire & Financier",
          "Droit des Assurances",
          "Droit Immobilier & Construction",
          "Actualité Juridique",
        ],
      },
    }),

    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      group: "content",
      rows: 3,
      description: "Résumé affiché sur la page blog (2-3 phrases).",
      validation: (r) => r.required().max(300),
    }),

    defineField({
      name: "mainImage",
      title: "Image principale (OG)",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "body",
      title: "Corps de l'article",
      type: "array",
      group: "content",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal",      value: "normal"     },
            { title: "Titre H2",    value: "h2"         },
            { title: "Titre H3",    value: "h3"         },
            { title: "Citation",    value: "blockquote" },
          ],
          lists: [
            { title: "Liste à puces",   value: "bullet" },
            { title: "Liste numérotée", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Gras",     value: "strong" },
              { title: "Italique", value: "em"     },
              { title: "Code",     value: "code"   },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Lien",
                fields: [
                  defineField({ name: "href",  type: "url",     title: "URL" }),
                  defineField({ name: "blank", type: "boolean", title: "Ouvrir dans un nouvel onglet", initialValue: false }),
                ],
              },
            ],
          },
        },
      ],
      validation: (r) => r.required(),
    }),

    // ── GEO / SEO ─────────────────────────────────────────────────────────────
    defineField({
      name: "tldr",
      title: "TL;DR",
      type: "text",
      group: "geo",
      rows: 4,
      description:
        "Résumé en 2-4 phrases. Affiché en encart au début de l'article. Les moteurs IA (Perplexity, ChatGPT, Gemini) extraient ces résumés pour leurs citations.",
      validation: (r) => r.required().max(500),
    }),

    defineField({
      name: "faqs",
      title: "FAQ",
      type: "array",
      group: "geo",
      description:
        "Questions/réponses publiées en JSON-LD FAQPage — signal fort pour les featured snippets et les réponses IA.",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "Question",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "answer",
              title: "Réponse",
              type: "text",
              rows: 4,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    }),

    defineField({
      name: "primaryKeyword",
      title: "Mot-clé principal",
      type: "string",
      group: "geo",
      description: "Ex : bail commercial 2026. Utilisé pour le ciblage éditorial.",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "secondaryKeywords",
      title: "Mots-clés secondaires",
      type: "array",
      group: "geo",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Ajoutez chaque variante de mot-clé séparément.",
    }),

    defineField({
      name: "searchIntent",
      title: "Intention de recherche",
      type: "string",
      group: "geo",
      options: {
        list: [
          { title: "Informational — l'utilisateur cherche à comprendre",       value: "Informational"  },
          { title: "Commercial — l'utilisateur compare des options",            value: "Commercial"     },
          { title: "Transactionnel — l'utilisateur veut agir",                 value: "Transactional"  },
          { title: "Navigationnel — l'utilisateur cherche une page spécifique", value: "Navigational"  },
        ],
        layout: "radio",
      },
      initialValue: "Informational",
      validation: (r) => r.required(),
    }),

    // ── Méta SEO ──────────────────────────────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "Titre SEO",
      type: "string",
      group: "seo",
      description: "Laissez vide pour utiliser le titre de l'article. Max 60 caractères.",
      validation: (r) => r.max(60),
    }),

    defineField({
      name: "seoDescription",
      title: "Méta-description",
      type: "text",
      group: "seo",
      rows: 3,
      description: "150-160 caractères recommandés.",
      validation: (r) => r.max(160),
    }),

    defineField({
      name: "translationSlug",
      title: "Slug de la traduction",
      type: "string",
      group: "seo",
      description: "Slug de l'article équivalent dans l'autre langue (pour hreflang).",
    }),

    // ── Éditorial ─────────────────────────────────────────────────────────────
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      group: "editorial",
      initialValue: "Christian THALINGER avocat",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "lastUpdated",
      title: "Dernière mise à jour",
      type: "datetime",
      group: "editorial",
      description: "Renseigner à chaque révision substantielle du contenu.",
    }),

    defineField({
      name: "nextRefreshDue",
      title: "Prochaine révision prévue",
      type: "date",
      group: "editorial",
    }),

    defineField({
      name: "refreshCadence",
      title: "Cadence de révision",
      type: "string",
      group: "editorial",
      options: {
        list: [
          { title: "30 jours — critique (loi, jurisprudence récente)", value: "30-critical"  },
          { title: "60 jours — prioritaire",                           value: "60-priority"  },
          { title: "90 jours — standard",                              value: "90-standard"  },
          { title: "180 jours — evergreen",                            value: "180-evergreen" },
        ],
        layout: "radio",
      },
      initialValue: "90-standard",
    }),
  ],

  preview: {
    select: {
      title:    "title",
      language: "language",
      category: "category",
      media:    "mainImage",
    },
    prepare({ title, language, category, media }) {
      const lang = language === "en" ? "🇬🇧" : "🇫🇷";
      return {
        title:    title ?? "Sans titre",
        subtitle: `${lang}  ${category ?? ""}`,
        media,
      };
    },
  },
});
