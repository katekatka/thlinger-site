/**
 * Fixes case card styling on all 12 competence pages:
 * 1. Converts case <div> cards to <details>/<summary> accordion
 * 2. Replaces thin disclaimer border with gold 2px divider
 * 3. Removes italic from disclaimer text
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const base = new URL("../", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const files = [
  "app/competences/avocat-droit-des-societes-strasbourg/page.tsx",
  "app/competences/avocat-droit-commercial-strasbourg/page.tsx",
  "app/competences/avocat-droit-du-travail-strasbourg/page.tsx",
  "app/competences/avocat-droit-bancaire-financier-strasbourg/page.tsx",
  "app/competences/avocat-droit-des-assurances-strasbourg/page.tsx",
  "app/competences/avocat-droit-immobilier-construction-strasbourg/page.tsx",
  "app/en/competences/droit-des-societes/page.tsx",
  "app/en/competences/droit-commercial/page.tsx",
  "app/en/competences/droit-social/page.tsx",
  "app/en/competences/droit-bancaire-financier/page.tsx",
  "app/en/competences/droit-des-assurances/page.tsx",
  "app/en/competences/droit-immobilier-construction/page.tsx",
];

const SVG_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>`;

for (const rel of files) {
  const filePath = join(base, ...rel.split("/"));
  let src = readFileSync(filePath, "utf8");

  // ── 1. <div id="..."> → <details id="...">
  src = src.replace(
    /<div (id="[^"]+") className="border-t-2 border-gold pt-10 pb-2">/g,
    `<details $1 className="group border-t-2 border-gold">`
  );

  // ── 2. <h3 ...>title</h3> → <summary ...><span>title</span><svg/></summary>
  src = src.replace(
    /<h3 className="mb-6 font-serif text-\[1\.375rem\] font-normal text-navy">([^<]*)<\/h3>/g,
    (_, title) =>
      `<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">\n                <span className="font-serif text-[1.375rem] font-normal text-navy">${title}</span>\n                ${SVG_ICON}\n              </summary>`
  );

  // ── 3. <dl className="space-y-5"> → add pb-8
  src = src.replace(
    /<dl className="space-y-5">/g,
    `<dl className="space-y-5 pb-8">`
  );

  // ── 4. closing </div> of each case card → </details>
  //    Pattern: </dl> immediately followed by </div> at case-card indentation
  src = src.replace(/(<\/dl>)\n(\s{12})<\/div>/g, "$1\n$2</details>");

  // ── 5. Disclaimer: thin border + italic → gold divider + plain text
  src = src.replace(
    /\n(\s+)<p className="mt-10 border-t border-navy\/10 pt-6 font-sans text-\[0\.8125rem\] leading-relaxed text-navy\/45 italic">/g,
    (_, indent) =>
      `\n${indent}<div className="bg-gold mt-10" style={{ height: "2px" }} />\n${indent}<p className="mt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45">`
  );

  writeFileSync(filePath, src, "utf8");
  console.log(`✓ ${rel}`);
}

console.log("\nAll 12 pages patched.");
