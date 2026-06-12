/**
 * Returns the URL to navigate to when the user switches language.
 *
 * Route convention:
 *   FR  →  /           /honoraires    /competences/X
 *   EN  →  /en         /en/honoraires /en/competences/X
 *
 * Special cases where FR and EN slugs differ are listed in SPECIAL_ROUTES.
 *
 * The active section hash is preserved so the user lands on the
 * equivalent section in the target language.
 *
 * @param pathname      current window.location.pathname (from usePathname)
 * @param section       active section id (from useActiveSection), or ""
 * @returns             absolute-path URL string with optional hash
 */

const SPECIAL_ROUTES: Array<{ fr: string; en: string }> = [
  { fr: "/a-propos", en: "/en/about" },
  { fr: "/postulation-strasbourg", en: "/en/local-counsel-strasbourg" },
];

export function getLangSwitchUrl(pathname: string, section: string): string {
  const hash = section ? `#${section}` : "";
  const isEN = pathname.startsWith("/en");

  // Handle routes where FR and EN slugs don't follow the simple /en prefix rule
  for (const route of SPECIAL_ROUTES) {
    if (!isEN && pathname === route.fr) return route.en + hash;
    if (isEN && pathname === route.en) return route.fr + hash;
  }

  if (isEN) {
    // EN → FR: strip the /en prefix
    const frPath = pathname.slice(3) || "/";
    return frPath + hash;
  } else {
    // FR → EN: prepend /en (root "/" becomes "/en")
    const enPath = "/en" + (pathname === "/" ? "" : pathname);
    return enPath + hash;
  }
}
