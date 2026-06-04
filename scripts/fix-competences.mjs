import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const base = new URL("../app/competences", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const pages = [
  {
    folder: "avocat-droit-des-societes-strasbourg",
    oldCanonical: "competences/droit-des-societes",
    newCanonical: "competences/avocat-droit-des-societes-strasbourg",
    oldLabel: "Droit des Sociétés",
    newH1: "Avocat en droit des sociétés à Strasbourg",
    oldH1: "Structurer ce qui détermine le fonctionnement de votre entreprise.",
  },
  {
    folder: "avocat-droit-commercial-strasbourg",
    oldCanonical: "competences/droit-commercial",
    newCanonical: "competences/avocat-droit-commercial-strasbourg",
    oldLabel: "Droit Commercial",
    newH1: "Avocat en droit commercial à Strasbourg",
    oldH1: "Un contrat mal rédigé est invisible. Jusqu&apos;au litige.",
  },
  {
    folder: "avocat-droit-du-travail-strasbourg",
    oldCanonical: "competences/droit-social",
    newCanonical: "competences/avocat-droit-du-travail-strasbourg",
    oldLabel: "Droit Social",
    newH1: "Avocat en droit du travail à Strasbourg",
    oldH1: "Chaque décision RH est une décision juridique.",
  },
  {
    folder: "avocat-droit-bancaire-financier-strasbourg",
    oldCanonical: "competences/droit-bancaire-financier",
    newCanonical: "competences/avocat-droit-bancaire-financier-strasbourg",
    oldLabel: "Droit Bancaire &amp; Financier",
    newH1: "Avocat en droit bancaire et financier à Strasbourg",
    oldH1: "Votre financement vous engage. Vérifiez à quoi exactement.",
  },
  {
    folder: "avocat-droit-des-assurances-strasbourg",
    oldCanonical: "competences/droit-des-assurances",
    newCanonical: "competences/avocat-droit-des-assurances-strasbourg",
    oldLabel: "Droit des Assurances",
    newH1: "Avocat en droit des assurances à Strasbourg",
    oldH1: "Des garanties réellement<br className=\"hidden md:block\" /> protectrices.",
  },
  {
    folder: "avocat-droit-immobilier-construction-strasbourg",
    oldCanonical: "competences/droit-immobilier-construction",
    newCanonical: "competences/avocat-droit-immobilier-construction-strasbourg",
    oldLabel: "Droit Immobilier",
    newH1: "Avocat en droit immobilier et de la construction à Strasbourg",
    oldH1: "Construire, c&apos;est aussi construire un cadre juridique.",
  },
  {
    folder: "avocat-droit-fiscal-strasbourg",
    oldCanonical: "competences/droit-fiscal",
    newCanonical: "competences/avocat-droit-fiscal-strasbourg",
    oldLabel: "Droit Fiscal",
    newH1: "Avocat en droit fiscal à Strasbourg",
    oldH1: "Sécuriser et structurer vos<br className=\"hidden md:block\" /> décisions fiscales.",
  },
  {
    folder: "avocat-conseil-transfrontalier-strasbourg",
    oldCanonical: "competences/conseil-transfrontalier",
    newCanonical: "competences/avocat-conseil-transfrontalier-strasbourg",
    oldLabel: "Conseil Transfrontalier",
    newH1: "Avocat conseil transfrontalier franco-allemand à Strasbourg",
    oldH1: "Un interlocuteur pour le système<br className=\"hidden md:block\" /> juridique français.",
  },
];

for (const p of pages) {
  const filePath = join(base, p.folder, "page.tsx");
  let src = readFileSync(filePath, "utf8");

  // 1. Update canonical URL
  src = src.replace(
    `https://www.thalinger-avocat.fr/${p.oldCanonical}`,
    `https://www.thalinger-avocat.fr/${p.newCanonical}`
  );

  // 2. Replace label <p> → <h1> with keyword text
  const labelOld = `<p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              ${p.oldLabel}
            </p>`;
  const labelNew = `<h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              ${p.newH1}
            </h1>`;
  src = src.replace(labelOld, labelNew);

  // 3. Replace creative <h1> → <p> (keep same styling)
  const h1Old = `<h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              ${p.oldH1}
            </h1>`;
  const h1New = `<p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              ${p.oldH1}
            </p>`;
  src = src.replace(h1Old, h1New);

  writeFileSync(filePath, src, "utf8");
  console.log(`✓ ${p.folder}`);
}

console.log("\nAll done.");
