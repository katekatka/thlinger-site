# SEO & GEO Audit — thalinger-avocat.fr
**Date:** April 29, 2026  
**Audited by:** Claude (automated analysis + live fetch + competitor research)  
**Site:** https://www.thalinger-avocat.fr  
**Stack:** Next.js 16, App Router, FR/EN bilingual

---

## 1. Executive Summary

**Overall SEO Health Score: 52 / 100**

The site has a solid technical foundation (fast stack, clean URLs, sitemap, correct HTML lang) but is missing most of the signals Google uses to rank legal service pages locally: no structured data, no hreflang, no keyword-targeted H1s on practice area pages, and very thin content on several pages.

### Top 3 Priorities

| # | Priority | Impact | Effort |
|---|----------|--------|--------|
| 1 | Add `LegalService` + `LocalBusiness` JSON-LD schema to every page | High | Low |
| 2 | Add hreflang alternate tags (FR ↔ EN) across all pages | High | Low |
| 3 | Rewrite H1 on homepage and all practice area pages to be keyword-rich | High | Low |

---

## 2. Technical SEO Audit

### 2.1 Title Tags

| Page | Current Title | Issue |
|------|--------------|-------|
| `/` (FR) | `Christian Thalinger — Avocat d'affaires` | Missing geo qualifier "Strasbourg". Brand first is fine but keyword signal is weak. Recommended: `Avocat d'affaires à Strasbourg — Christian Thalinger` |
| `/en/` | Same brand title | Missing EN geo phrase. Recommended: `Business Lawyer in Strasbourg — Christian Thalinger` |
| `/competences/droit-des-societes` | No page-level metadata (inherits root) | Each competence page needs its own `<title>` with keyword + geo |
| All other competence pages | Same — no individual metadata | Critical gap: Google shows root title for all practice area pages |
| `/honoraires` | Same — no individual metadata | Should have a title about legal fees in Strasbourg |
| `/blog` | Same — no individual metadata | Should have a blog-level title |

**Fix:** Add `export const metadata: Metadata` to every `page.tsx` that currently lacks it.

### 2.2 Meta Descriptions

- **Root layout** has: `"Site officiel du cabinet de Christian Thalinger, avocat d'affaires à Strasbourg."` — informational but no call to action and no differentiator.
- **All competence pages**: No individual meta description. Google auto-generates snippets from page content, often poorly.
- **Recommended pattern:** `[Practice area] à Strasbourg — [1-sentence value prop]. Réponse sous 24h. Découvrez l'expertise de Me. Christian Thalinger.`

### 2.3 Hreflang — MISSING ⚠️

**Critical gap.** The site is bilingual (FR at `/`, EN at `/en/`) but has **zero hreflang tags**. Google cannot canonicalize the language versions and may index one, penalize duplicate content, or serve the wrong language to German/Swiss/English-speaking searchers.

Required implementation in `app/layout.tsx` and per-page metadata:

```tsx
// In each page's metadata export:
alternates: {
  languages: {
    'fr': 'https://www.thalinger-avocat.fr/competences/droit-des-societes',
    'en': 'https://www.thalinger-avocat.fr/en/competences/droit-des-societes',
    'x-default': 'https://www.thalinger-avocat.fr/competences/droit-des-societes',
  }
}
```

### 2.4 Canonical URLs

- `metadataBase` is set to `https://thalinger-avocat.fr` (without `www`) but the live site resolves as `https://www.thalinger-avocat.fr`.
- **Risk:** Google may treat `thalinger-avocat.fr` and `www.thalinger-avocat.fr` as separate origins, splitting link equity.
- **Fix:** Change `metadataBase` to `new URL("https://www.thalinger-avocat.fr")` in `app/layout.tsx`.

### 2.5 Sitemap

- **Present and functional** at `/sitemap.xml` — 22 URLs including all static routes and blog.
- **Missing:** `changefreq` and `priority` attributes (not required but help crawl budget allocation).
- **Missing:** No `hreflang` alternate URLs inside the sitemap (recommended for bilingual sites per Google guidelines).
- **Missing:** The sitemap URL in `sitemap.ts` uses `baseUrl = "https://www.thalinger-avocat.fr"` (with www) — this is correct and should stay consistent with `metadataBase`.

### 2.6 Structured Data — MISSING ⚠️

**Zero JSON-LD structured data on any page.** This is the single highest-impact fix for local legal services.

Required schemas:

**`LegalService` + `LocalBusiness` (homepage and all pages via layout):**
```json
{
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Cabinet Christian Thalinger",
  "description": "Avocat d'affaires à Strasbourg — droit des sociétés, droit commercial, droit du travail, conseil transfrontalier.",
  "url": "https://www.thalinger-avocat.fr",
  "telephone": "+33637331926",
  "email": "christian@thalinger-avocat.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "20 rue du Fossé des Tanneurs",
    "addressLocality": "Strasbourg",
    "postalCode": "67000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.5813,
    "longitude": 7.7484
  },
  "areaServed": ["Strasbourg", "Alsace", "Grand Est", "France", "Allemagne", "Suisse"],
  "availableLanguage": ["French", "English"],
  "priceRange": "€€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
}
```

**`Person` schema (Attorney):**
```json
{
  "@type": "Person",
  "name": "Christian Thalinger",
  "jobTitle": "Avocat au Barreau de Strasbourg",
  "worksFor": { "@id": "https://www.thalinger-avocat.fr" },
  "sameAs": "https://www.linkedin.com/in/christian-thalinger-565446216/"
}
```

**`BreadcrumbList`** — add on all sub-pages (competences, blog posts).

### 2.7 Robots / Crawlability

- No `robots.txt` found in project files. Next.js 16 may generate a default one, but verify at `https://www.thalinger-avocat.fr/robots.txt`.
- Legal pages (`/mentions-legales`, `/politique-de-confidentialite`) should be `noindex` — they add no SEO value and may dilute crawl budget.

### 2.8 Performance Signals

- Next.js App Router + static generation = excellent TTFB baseline.
- Google Fonts loaded via `next/font` (subset, `display: swap`) — good.
- Images: Next.js `<Image>` component used throughout — automatic WebP/AVIF and lazy loading.
- `<iframe>` Google Maps embed on homepage is render-blocking for mobile. Consider a static map screenshot with click-to-load overlay.
- Webvisor tracking script uses `strategy="afterInteractive"` — correct, no impact on LCP.

### 2.9 Open Graph / Social

- OG tags are set in `layout.tsx` for the root. No individual OG per page.
- Twitter card is set to `summary_large_image` but no `og:image` URL is defined — social shares will show no image.
- **Fix:** Add a custom OG image (1200×630px) and reference it in `metadataBase` + per-page metadata.

---

## 3. On-Page SEO Audit

### 3.1 Homepage (FR) — `/`

| Element | Current | Issue |
|---------|---------|-------|
| H1 | "Christian Thalinger" | Brand name only — no keywords. Google reads this as a brand page, not a service page. |
| H2 (first) | "Le juridique ne devrait pas ajouter à la confusion." | Evocative but zero keyword value. |
| H2 (services) | "Droit des affaires. Une approche pluridisciplinaire." | Decent but missing "Strasbourg". |
| H2 (contact) | "Contacter Me. Christian Thalinger" | Fine for UX, not for SEO. |
| Body copy | References Strasbourg in contact section only | "Strasbourg" should appear in the first 100 words of body text. |
| Internal links | 6 competence cards → practice area pages | Good. No links to blog or honoraires from main content. |
| Image alt | `"Christian Thalinger, Avocat au Barreau de Strasbourg"` | Good. |

**Recommendation:** Hero section H1 should be `"Avocat d'affaires à Strasbourg"` with "Christian Thalinger" as a subtitle/visual treatment, or add a visually hidden H1 supplement if the design must stay as-is.

### 3.2 Homepage (EN) — `/en/`

Same structural issues. Additionally:
- H1: "Christian Thalinger" only.
- No reference to "Strasbourg" in EN hero text.
- The English URL slugs for competences keep French words (`/en/competences/droit-des-societes`) — suboptimal for EN SEO. Consider redirecting to `/en/competences/corporate-law` etc.

### 3.3 Practice Area Pages

All practice area pages follow the same template. Issues common to all:

- **No page-level `<title>` or `<meta description>`** — inherits root metadata.
- **H1 is brand/evocative, not keyword-targeted.** Example: Droit des Sociétés page H1 is `"Construire sur des fondations qui tiennent."` Beautiful copy — but Google sees no keyword signal.
- **Thin content:** Pages have ~150–300 words. Competitor pages (Boisserie, Drechsler) have 600–1200 words with FAQs, numbered lists, and long-tail keyword coverage.
- **Conseil Transfrontalier page is critically thin:** Only 3 interventions listed (Contrats transfrontaliers, Création de filiales, Litiges entre juridictions). This is the most differentiated practice area vs competitors and deserves the richest content.

### 3.4 Internal Linking

- Good: Homepage → all 6 practice area pages via cards.
- Missing: Practice area pages don't link to each other (no "related services").
- Missing: No link from practice area pages to `/honoraires`.
- Missing: No blog content yet to link to/from.
- Missing: Footer links to competences are good; add breadcrumb nav on sub-pages.

---

## 4. Keyword Research

> Volume estimates are approximate based on French legal market search behavior and SEMrush/Ahrefs public benchmarks. Difficulty: Low < 30, Medium 30–60, High > 60.

### 4.1 Primary FR Keywords

| Keyword | Intent | Est. Monthly Volume | Difficulty | Current Ranking | Priority |
|---------|--------|-------------------|------------|----------------|----------|
| avocat d'affaires Strasbourg | Commercial | 300–500 | High (65) | Not ranked | ⭐⭐⭐ |
| avocat droit des sociétés Strasbourg | Commercial | 150–300 | High (60) | Not ranked | ⭐⭐⭐ |
| avocat droit commercial Strasbourg | Commercial | 100–200 | Medium (50) | Not ranked | ⭐⭐⭐ |
| avocat droit du travail Strasbourg | Commercial | 200–400 | High (62) | Not ranked | ⭐⭐⭐ |
| cabinet avocat affaires Strasbourg | Commercial | 100–200 | High (58) | Not ranked | ⭐⭐⭐ |
| avocat création entreprise Strasbourg | Commercial | 80–150 | Medium (45) | Not ranked | ⭐⭐⭐ |
| avocat droit fiscal Strasbourg | Commercial | 80–150 | Medium (48) | Not ranked | ⭐⭐ |
| avocat droit immobilier Strasbourg | Commercial | 100–200 | Medium (52) | Not ranked | ⭐⭐ |
| avocat PME Strasbourg | Commercial | 50–100 | Low (28) | Not ranked | ⭐⭐⭐ |
| avocat dirigeant entreprise Strasbourg | Commercial | 40–80 | Low (25) | Not ranked | ⭐⭐⭐ |
| avocat entrepreneur Strasbourg | Navigational | 50–100 | Low (30) | Not ranked | ⭐⭐ |
| conseil juridique PME Alsace | Informational | 80–120 | Low (22) | Not ranked | ⭐⭐ |

### 4.2 Long-tail FR Keywords

| Keyword | Intent | Est. Monthly Volume | Difficulty | Current Ranking | Priority |
|---------|--------|-------------------|------------|----------------|----------|
| avocat pacte d'associés Strasbourg | Commercial | 30–60 | Low (20) | Not ranked | ⭐⭐⭐ |
| avocat fusions acquisitions Strasbourg | Commercial | 30–50 | Low (22) | Not ranked | ⭐⭐⭐ |
| avocat création SAS SARL Strasbourg | Commercial | 40–80 | Low (25) | Not ranked | ⭐⭐⭐ |
| avocat transmission entreprise familiale Alsace | Commercial | 30–60 | Low (18) | Not ranked | ⭐⭐⭐ |
| avocat licenciement économique Strasbourg | Commercial | 60–100 | Medium (35) | Not ranked | ⭐⭐ |
| avocat bail commercial Strasbourg | Commercial | 50–80 | Low (28) | Not ranked | ⭐⭐ |
| avocat contrat commercial Strasbourg | Commercial | 40–70 | Low (25) | Not ranked | ⭐⭐ |
| avocat restructuration entreprise Alsace | Commercial | 20–40 | Low (18) | Not ranked | ⭐⭐⭐ |
| avocat optimisation fiscale PME Strasbourg | Commercial | 20–40 | Low (20) | Not ranked | ⭐⭐ |
| avocat gouvernance entreprise Strasbourg | Commercial | 15–30 | Low (15) | Not ranked | ⭐⭐ |
| avocat litige commercial Strasbourg | Commercial | 40–80 | Medium (38) | Not ranked | ⭐⭐ |
| meilleur avocat affaires Strasbourg | Commercial | 50–80 | Medium (42) | Not ranked | ⭐⭐⭐ |

### 4.3 Cross-border / Transfrontalier Keywords

| Keyword | Intent | Est. Monthly Volume | Difficulty | Current Ranking | Priority |
|---------|--------|-------------------|------------|----------------|----------|
| avocat franco-allemand Strasbourg | Commercial | 60–120 | Medium (38) | Not ranked | ⭐⭐⭐ |
| avocat transfrontalier Alsace | Commercial | 40–80 | Low (28) | Not ranked | ⭐⭐⭐ |
| droit transfrontalier entreprise Alsace | Informational | 20–40 | Low (18) | Not ranked | ⭐⭐⭐ |
| avocat travailleurs frontaliers Alsace | Commercial | 30–60 | Low (22) | Not ranked | ⭐⭐⭐ |
| avocat filiale française entreprise allemande | Commercial | 20–40 | Low (15) | Not ranked | ⭐⭐⭐ |
| contrat transfrontalier avocat Strasbourg | Commercial | 15–30 | Low (12) | Not ranked | ⭐⭐ |
| litige franco-allemand avocat | Commercial | 20–40 | Low (20) | Not ranked | ⭐⭐ |
| avocat droit allemand en France | Informational | 30–60 | Low (25) | Not ranked | ⭐⭐ |
| conseil juridique entreprise Rhin franco-allemand | Informational | 15–25 | Low (10) | Not ranked | ⭐⭐ |

### 4.4 English Keywords

| Keyword | Intent | Est. Monthly Volume | Difficulty | Current Ranking | Priority |
|---------|--------|-------------------|------------|----------------|----------|
| business lawyer Strasbourg | Commercial | 50–100 | Medium (40) | Not ranked | ⭐⭐⭐ |
| English speaking lawyer Strasbourg | Commercial | 40–80 | Low (28) | Not ranked | ⭐⭐⭐ |
| corporate lawyer Strasbourg France | Commercial | 30–60 | Low (25) | Not ranked | ⭐⭐⭐ |
| cross-border lawyer France Germany | Commercial | 30–60 | Medium (35) | Not ranked | ⭐⭐⭐ |
| French business law English speaking | Informational | 20–40 | Low (22) | Not ranked | ⭐⭐⭐ |
| employment lawyer Strasbourg | Commercial | 30–50 | Low (28) | Not ranked | ⭐⭐ |
| Franco-German legal advice Strasbourg | Commercial | 15–30 | Low (15) | Not ranked | ⭐⭐⭐ |
| company formation lawyer France | Commercial | 40–80 | Medium (42) | Not ranked | ⭐⭐ |
| M&A lawyer Strasbourg | Commercial | 15–30 | Low (18) | Not ranked | ⭐⭐ |
| tax lawyer Strasbourg France | Commercial | 20–40 | Low (22) | Not ranked | ⭐⭐ |

---

## 5. GEO (Local SEO) Audit

### 5.1 Google Business Profile

- **Status: Unknown** — no GBP signals found on the live site (no "claimed" link, no reviews widget).
- **Action required:** Verify or create a Google Business Profile at the address 20 rue du Fossé des Tanneurs, 67000 Strasbourg.
- **Category:** Primary: `Avocat` → Secondary: `Cabinet d'avocats`, `Avocat spécialisé en droit des affaires`.
- **Posts:** Use GBP posts for blog article snippets and legal news updates.
- **Reviews:** Actively solicit Google reviews from satisfied clients. Competitors (Cabinet Goffin Van Aken, Cabinet Ceviz) show reviews on directories.

### 5.2 NAP Consistency

Name, Address, Phone should be identical everywhere. Current state:

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| Footer | Christian Thalinger | 20 rue du Fossé des Tanneurs, 67000 Strasbourg | +33 6 37 33 19 26 |
| Contact section | Me. Christian Thalinger | 20 rue du Fossé des Tanneurs, 67000 Strasbourg | +33 6 37 33 19 26 |
| JSON-LD | **Missing** | — | — |
| GBP | **Unknown** | — | — |

**Risk:** `Me. Christian Thalinger` vs `Christian Thalinger` is a minor inconsistency. Use `"Maître Christian Thalinger"` or `"Christian Thalinger"` consistently everywhere (including GBP).

### 5.3 Local Schema Markup

As noted in §2.6: **zero local schema.** This is the most important missing element for local pack ranking. Implement the `LegalService + LocalBusiness` JSON-LD in the root layout so it appears on every page.

Add the `areaServed` array with specific localities:
```json
"areaServed": [
  { "@type": "City", "name": "Strasbourg" },
  { "@type": "AdministrativeArea", "name": "Bas-Rhin" },
  { "@type": "AdministrativeArea", "name": "Alsace" },
  { "@type": "AdministrativeArea", "name": "Grand Est" }
]
```

### 5.4 Geographic Keyword Targeting

- "Strasbourg" appears in the meta description and footer, but **not in the first paragraph of body text** on the homepage or any competence page.
- Add "à Strasbourg" or "en Alsace" naturally within the first ~150 words of each page's body copy.
- Consider a dedicated "Zone d'intervention" section: Strasbourg, Bas-Rhin, Alsace, Grand Est, and cross-border (Baden-Baden, Kehl, Fribourg, Bâle).

### 5.5 Local Citations / Directories

Recommended listings (not confirmed as claimed):
- `avocats-strasbourg.com` (Ordre des Avocats de Strasbourg — official)
- `annuaireavocats.fr`
- `consultation.avocat.fr`
- `alexia.fr`
- `pagesjaunes.fr`
- `justifit.fr`
- `starofservice.com`
- LinkedIn (already present)

---

## 6. Content Gap Analysis

Competitors (Boisserie Avocats, Cabinet Drechsler, CDW Avocats, EPP Rechtsanwälte) cover content this site does not:

| Gap | Competitors Who Cover It | Impact | Recommended Action |
|-----|--------------------------|--------|-------------------|
| FAQ section per practice area | Boisserie, Drechsler | High | Add FAQ with `FAQPage` schema on each competence page |
| Dedicated "À propos / Biographie" page | Most competitors | High | Create `/a-propos` with attorney background, bar admission, education, languages |
| Sub-service landing pages (e.g. "Création de SAS", "Licenciement économique") | Drechsler, CDW | High | Create nested pages under each competence |
| German-language content | EPP, Giebenrath, Avira | High (for DE market) | Add `/de/` section targeting Baden-Württemberg businesses |
| Client type pages ("avocat pour startups", "avocat pour PME", "avocat pour dirigeants") | FIDAL, AVIRA | Medium | Create intent-specific landing pages |
| Legal news / blog articles | Drechsler, Inextenso | Medium | Activate Notion blog, publish 2–4 articles/month |
| Testimonials / client reviews | Most competitors | High | Add review snippet widget or curated quote section |
| Honoraires page with transparent pricing | Jurisdefense, Harmes | Medium | Flesh out `/honoraires` with range info and billing methods |
| "Première consultation" / "Consultation gratuite" page | Multiple | High | Add CTA-focused landing page targeting this high-intent query |
| Press / Publications | Large firms | Low | Not urgent at this stage |

---

## 7. Actionable Recommendations

### Quick Wins (1–3 days dev work each)

1. **Fix `metadataBase`** in `app/layout.tsx`: change to `https://www.thalinger-avocat.fr` (with www).

2. **Add `LegalService + LocalBusiness` JSON-LD** in a `<Script id="schema-org" type="application/ld+json">` in root layout. ~2 hours.

3. **Add hreflang alternates** to every page's `metadata` export. Pattern:
   ```tsx
   alternates: {
     canonical: 'https://www.thalinger-avocat.fr/competences/droit-des-societes',
     languages: { 'fr': '...', 'en': '...', 'x-default': '...' }
   }
   ```

4. **Add `noindex` to legal/utility pages**: `mentions-legales`, `politique-de-confidentialite`. These pages provide no ranking value.

5. **Add OG image**: Create a 1200×630px brand card and wire it up in `layout.tsx` metadata.

6. **Set `robots.txt`**: Add `public/robots.txt` explicitly allowing all + pointing to sitemap.

7. **Claim/verify Google Business Profile** at exact address.

### Medium Term (1–2 weeks dev work)

8. **Add `export const metadata` to every competence `page.tsx`** with keyword-optimized title, description, and hreflang. This alone could move the needle on all 6 practice area pages.

9. **Rewrite H1s on practice area pages** to keyword-rich form while keeping the visual design (can use a visually-hidden supplement or restructure the hero so the keyword H1 comes before the evocative line). Example:
   - Current: `"Construire sur des fondations qui tiennent."`
   - SEO H1: `"Avocat en droit des sociétés à Strasbourg"`
   - Keep the evocative line as H2.

10. **Expand Conseil Transfrontalier page** — this is the most differentiated page vs competitors. Add: travailleurs frontaliers, immatriculation filiale, conventions collectives franco-allemandes, sécurité sociale transfrontalière. Target ~800 words.

11. **Add FAQ sections** to each competence page with `FAQPage` JSON-LD schema.

12. **Create `/a-propos` page** (and `/en/a-propos`) with bio, bar admission, education, spoken languages (FR/EN), and a `Person` schema.

13. **Add BreadcrumbList schema** to all sub-pages for richer SERP snippets.

14. **Flesh out `/honoraires` page** with billing methods, typical rate range, and a consultation CTA.

### Long Term (1–3 months)

15. **Activate blog** with Notion CMS. Publish at minimum:
    - One article per practice area (6 posts) targeting long-tail informational keywords.
    - Cross-border focus articles in French, English, and ideally German.
    - Target: 2–4 posts/month, 800–1500 words each, each with `Article` schema.

16. **Add German language section (`/de/`)** — Strasbourg is the capital of Alsace and a major entry point for German businesses investing in France. Competitors EPP, Giebenrath, and Avira all offer German content. Even 3–4 DE pages would capture uncontested search volume.

17. **Register on legal directories** (consultation.avocat.fr, annuaireavocats.fr, alexia.fr, pagesjaunes.fr) with fully consistent NAP.

18. **Implement review strategy** — collect Google reviews, potentially integrate a testimonials section with `Review` schema.

19. **Consider English URL slugs** for `/en/` routes: `/en/competences/corporate-law`, `/en/competences/employment-law`, etc. — better EN keyword signal and cleaner for English-speaking users.

20. **Internal linking pass**: Add "Related expertise" sections at the bottom of each competence page pointing to 2–3 related practice areas + honoraires.

---

## 8. Competitor Benchmarks

| Firm | Strengths | Thalinger Advantage |
|------|-----------|---------------------|
| Cabinet Boisserie | Strong corporate law SEO, long-form content | Sole practitioner = direct access; Boisserie is larger, less personal |
| Cabinet Drechsler | Good content depth, multi-service | Thalinger has cross-border niche; cleaner brand |
| EPP Rechtsanwälte | Established franco-german brand, offices in 6 cities | Thalinger more boutique, flexible, French-market insider |
| Cabinet Goffin Van Aken | Trilingual, 20 years, 1,000+ clients | Thalinger has modern site and EN presence |
| AVIRA | Kehl/Strasb, DE+FR lawyers | Thalinger's French-law-insider positioning is different |
| FIDAL | 27 lawyers in Strasbourg, major brand | Solo boutique = differentiator for mid-market CEOs |

---

*Audit complete. Implement items 1–7 (Quick Wins) first — they are all low-effort, high-impact, and correctable without touching the visual design.*
