"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { getLangSwitchUrl } from "@/lib/langSwitch";

// ── Competences sub-navigation ─────────────────────────────────────────────

const competencesFR = [
  { label: "Droit des Sociétés",              href: "/competences/droit-des-societes" },
  { label: "Droit Commercial",                href: "/competences/droit-commercial" },
  { label: "Droit Social",                    href: "/competences/droit-social" },
  { label: "Droit Bancaire & Financier",      href: "/competences/droit-bancaire-financier" },
  { label: "Droit des Assurances",            href: "/competences/droit-des-assurances" },
  { label: "Droit Immobilier & Construction", href: "/competences/droit-immobilier-construction" },
];

const competencesEN = [
  { label: "Corporate Law",                   href: "/en/competences/droit-des-societes" },
  { label: "Commercial Law",                  href: "/en/competences/droit-commercial" },
  { label: "Social Law",                      href: "/en/competences/droit-social" },
  { label: "Banking & Financial Law",         href: "/en/competences/droit-bancaire-financier" },
  { label: "Insurance Law",                   href: "/en/competences/droit-des-assurances" },
  { label: "Real Estate & Construction Law",  href: "/en/competences/droit-immobilier-construction" },
];

// ── Nav link data ──────────────────────────────────────────────────────────

type NavLink = { label: string; href: string; dropdown?: boolean };

const navLinksFR: NavLink[] = [
  { label: "Accueil",     href: "/#hero" },
  { label: "Compétences", href: "/#competences", dropdown: true },
  { label: "À propos",    href: "/a-propos" },
  { label: "Honoraires",  href: "/honoraires" },
  { label: "Blog",        href: "/blog" },
];

const navLinksEN: NavLink[] = [
  { label: "Home",      href: "/en#hero" },
  { label: "Expertise", href: "/en#competences", dropdown: true },
  { label: "About",     href: "/en/about" },
  { label: "Fees",      href: "/en/honoraires" },
  { label: "Blog",      href: "/en/blog" },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const pathname     = usePathname();
  const router       = useRouter();
  const isEN         = pathname.startsWith("/en");
  const navLinks     = isEN ? navLinksEN : navLinksFR;
  const competences  = isEN ? competencesEN : competencesFR;
  const activeSection = useActiveSection(96);

  const closeRef    = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-focus close button when mobile menu opens
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  // Reset mobile accordion when overlay closes
  useEffect(() => {
    if (!open) setMobileExpanded(false);
  }, [open]);

  // Outside click closes desktop dropdown
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  // Escape closes both mobile menu and desktop dropdown
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (dropdownOpen) setDropdownOpen(false);
      if (open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dropdownOpen]);

  // ── Helpers ────────────────────────────────────────────────────────────────

  const handleLangSwitch = useCallback(
    (closeMenu = false) => {
      if (closeMenu) setOpen(false);
      router.push(getLangSwitchUrl(pathname, activeSection));
    },
    [pathname, activeSection, router]
  );

  const linkIsActive = (href: string): boolean => {
    const hash = href.indexOf("#");
    if (hash !== -1) return activeSection === href.slice(hash + 1);
    return pathname === href;
  };

  const trapFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const els = e.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!els.length) return;
    const first = els[0];
    const last  = els[els.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  };

  return (
    <>
      {/* ── Fixed header ──────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-x-0 top-0 z-50 bg-white"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">

          {/* Logo + name */}
          <Link href={isEN ? "/en#hero" : "/#hero"} className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="Christian THALINGER logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <span
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-navy)" }}
              className="text-[1.05rem] font-normal transition-colors duration-150"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--color-dark)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--color-navy)")}
            >
              Christian THALINGER
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label={isEN ? "Main navigation" : "Navigation principale"}
          >
            {navLinks.map((link) =>
              link.dropdown ? (

                /* ── Compétences split button ─────────────────────────── */
                <div key={link.href} ref={dropdownRef} className="relative flex items-center gap-[5px]">

                  {/* Text label → scrolls to #competences section */}
                  <Link
                    href={link.href}
                    aria-current={linkIsActive(link.href) ? "page" : undefined}
                    onClick={() => setDropdownOpen(false)}
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className={`relative pb-[3px] text-[0.875rem] font-normal transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:text-dark hover:after:w-full ${dropdownOpen ? "text-dark after:w-full" : "text-navy/70 after:w-0"}`}
                  >
                    {link.label}
                  </Link>

                  {/* Chevron → toggles dropdown panel */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="menu"
                    aria-label={isEN ? "Toggle expertise list" : "Afficher les domaines de compétences"}
                    className="flex h-6 w-6 cursor-pointer items-center justify-center text-gold transition-colors duration-200"
                  >
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-center"
                    >
                      <ChevronDown size={17} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </motion.span>
                  </button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        role="menu"
                        aria-label={isEN ? "Areas of expertise" : "Domaines de compétences"}
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-50 mt-5 w-max -translate-x-1/2 overflow-hidden rounded-2xl border-2 border-gold bg-white py-3 shadow-[0_12px_40px_rgba(7,19,123,0.13)]"
                      >
                        {competences.map((comp, i) => (
                          <Link
                            key={comp.href}
                            href={comp.href}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                            style={{ fontFamily: "var(--font-playfair)" }}
                            className="group flex items-center px-5 py-2 text-[0.8125rem] font-normal text-navy/70 transition-colors duration-200 hover:text-dark"
                          >
                            <span
                              className={`relative inline-block pb-[3px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-300 ${
                                pathname === comp.href
                                  ? "after:scale-x-100"
                                  : "after:scale-x-0 group-hover:after:scale-x-100"
                              }`}
                            >
                              {comp.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              ) : (

                /* ── Regular link ─────────────────────────────────────── */
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={linkIsActive(link.href) ? "page" : undefined}
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="relative pb-[3px] text-[0.875rem] font-normal text-navy/70 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-dark hover:after:w-full"
                >
                  {link.label}
                </Link>

              )
            )}

            {/* Language toggle */}
            <span className="flex items-center gap-1 font-serif text-[0.75rem] tracking-[0.1em] text-navy/35">
              {isEN ? (
                <>
                  <button
                    onClick={() => handleLangSwitch()}
                    aria-label="Passer en français"
                    className="transition-colors hover:text-dark active:text-dark"
                  >FR</button>
                  <span aria-hidden="true" className="inline-block h-3 w-[2px] bg-gold mx-1" />
                  <span aria-label="English — current language" className="text-navy">EN</span>
                </>
              ) : (
                <>
                  <span aria-label="Français — langue actuelle" className="text-navy">FR</span>
                  <span aria-hidden="true" className="inline-block h-3 w-[2px] bg-gold mx-1" />
                  <button
                    onClick={() => handleLangSwitch()}
                    aria-label="Switch to English"
                    className="transition-colors hover:text-dark active:text-dark"
                  >EN</button>
                </>
              )}
            </span>

            {/* Contact CTA */}
            <a
              href={isEN ? "/en#contact" : "/#contact"}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97] hover:text-white"
              style={{ color: "#ffffff" }}
            >
              {isEN ? "Contact" : "Contacter"}
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 5H15M15 5L11 1M15 5L11 9"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label={isEN ? "Open menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-navy text-white transition md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gold" style={{ height: "2px" }} />
      </motion.header>

      {/* ── Mobile menu overlay ───────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={isEN ? "Menu" : "Menu de navigation"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-navy overflow-y-auto"
            onKeyDown={trapFocus}
          >
            <div className="flex min-h-full flex-col px-6 pb-10 pt-6">

              {/* Header row */}
              <div className="flex items-center justify-between">
                <Link
                  href={isEN ? "/en#hero" : "/#hero"}
                  className="flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/logo.svg"
                    alt="Christian THALINGER logo"
                    width={42}
                    height={42}
                    className="object-contain brightness-0 invert"
                  />
                  <span
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-[1.05rem] font-normal text-parchment"
                  >
                    Christian THALINGER
                  </span>
                </Link>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={isEN ? "Close menu" : "Fermer le menu"}
                  className="rounded-full border-2 border-parchment p-3 text-parchment"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav
                aria-label={isEN ? "Mobile navigation" : "Navigation mobile"}
                className="mt-10 flex flex-col"
              >
                {navLinks.map((link) =>
                  link.dropdown ? (

                    /* ── Mobile competences accordion ──────────────────── */
                    <div key={link.href}>
                      <div
                        className={[
                          "flex items-center",
                          mobileExpanded ? "" : "border-b-2 border-gold/40",
                        ].join(" ")}
                      >
                        {/* Text → section + close overlay */}
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={linkIsActive(link.href) ? "page" : undefined}
                          style={{ fontFamily: "var(--font-playfair)" }}
                          className="flex flex-1 min-h-[56px] items-center text-[2rem] font-normal text-white transition-colors duration-150 active:text-gold"
                        >
                          {link.label}
                        </Link>

                        {/* Chevron → accordion toggle (does NOT close overlay) */}
                        <button
                          type="button"
                          onClick={() => setMobileExpanded((v) => !v)}
                          aria-expanded={mobileExpanded}
                          aria-label={isEN ? "Toggle expertise list" : "Afficher les domaines"}
                          className="flex min-h-[56px] min-w-[44px] items-center justify-center text-white/55 transition-colors duration-150 active:text-gold"
                        >
                          <motion.span
                            animate={{ rotate: mobileExpanded ? 180 : 0 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center"
                          >
                            <ChevronDown size={22} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </motion.span>
                        </button>
                      </div>

                      {/* Accordion body */}
                      <AnimatePresence initial={false}>
                        {mobileExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            {competences.map((comp, i) => (
                              <Link
                                key={comp.href}
                                href={comp.href}
                                onClick={() => setOpen(false)}
                                style={{ fontFamily: "var(--font-playfair)" }}
                                className={[
                                  "flex min-h-[44px] items-center pl-5 pr-2 text-[1.375rem] font-normal transition-colors duration-150 active:text-gold",
                                  pathname === comp.href ? "text-gold" : "text-white/65",
                                  i === competences.length - 1 ? "border-b-2 border-gold/40" : "",
                                ].join(" ")}
                              >
                                {comp.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  ) : (

                    /* ── Regular mobile link ───────────────────────────── */
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={linkIsActive(link.href) ? "page" : undefined}
                      style={{ fontFamily: "var(--font-playfair)" }}
                      className="flex min-h-[56px] items-center border-b-2 border-gold/40 text-[2rem] font-normal text-white transition-colors duration-150 active:text-gold"
                    >
                      {link.label}
                    </Link>

                  )
                )}

                {/* Contact */}
                <a
                  href={isEN ? "/en#contact" : "/#contact"}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="flex min-h-[56px] items-center border-b-2 border-gold/40 text-[2rem] font-normal text-gold transition-colors duration-150 active:text-white"
                >
                  {isEN ? "Contact" : "Contacter"}
                </a>
              </nav>

              {/* Language toggle */}
              <div className="mt-10 flex items-center gap-0">
                {isEN ? (
                  <>
                    <button
                      onClick={() => handleLangSwitch(true)}
                      aria-label="Passer en français"
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-base tracking-[0.12em] text-white/50 transition-colors duration-150 hover:text-white active:text-white"
                    >FR</button>
                    <span aria-hidden="true" className="inline-block h-4 w-[2px] bg-gold mx-1" />
                    <span
                      aria-label="English — current language"
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-base tracking-[0.12em] text-white"
                    >EN</span>
                  </>
                ) : (
                  <>
                    <span
                      aria-label="Français — langue actuelle"
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-base tracking-[0.12em] text-white"
                    >FR</span>
                    <span aria-hidden="true" className="inline-block h-4 w-[2px] bg-gold mx-1" />
                    <button
                      onClick={() => handleLangSwitch(true)}
                      aria-label="Switch to English"
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-base tracking-[0.12em] text-white/50 transition-colors duration-150 hover:text-white active:text-white"
                    >EN</button>
                  </>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
