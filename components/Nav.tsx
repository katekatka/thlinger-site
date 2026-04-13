"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { getLangSwitchUrl } from "@/lib/langSwitch";

const navLinksFR = [
  { label: "Accueil",     href: "/#hero" },
  { label: "Compétences", href: "/#competences" },
  { label: "Honoraires",  href: "/honoraires" },
];

const navLinksEN = [
  { label: "Home",      href: "/en#hero" },
  { label: "Expertise", href: "/en#competences" },
  { label: "Fees",      href: "/en/honoraires" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname  = usePathname();
  const router    = useRouter();
  const isEN      = pathname.startsWith("/en");
  const navLinks  = isEN ? navLinksEN : navLinksFR;
  const activeSection = useActiveSection(96);

  // ── Refs for focus management ──────────────────────────────────────────────
  const closeRef = useRef<HTMLButtonElement>(null);

  // Auto-focus close button when menu opens
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  // Escape key closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open && e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const handleLangSwitch = useCallback(
    (closeMenu = false) => {
      if (closeMenu) setOpen(false);
      router.push(getLangSwitchUrl(pathname, activeSection));
    },
    [pathname, activeSection, router]
  );

  // Returns true when this nav link is the "current" destination
  const linkIsActive = (href: string): boolean => {
    const hash = href.indexOf("#");
    if (hash !== -1) return activeSection === href.slice(hash + 1);
    return pathname === href;
  };

  // Focus trap — cycles focus within the mobile menu overlay
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
              alt="Christian Thalinger logo"
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
              Christian Thalinger
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label={isEN ? "Main navigation" : "Navigation principale"}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={linkIsActive(link.href) ? "page" : undefined}
                style={{ fontFamily: "var(--font-playfair)" }}
                className="relative pb-[3px] text-[0.875rem] font-normal text-navy/70 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-dark hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle */}
            <span className="flex items-center gap-1 font-serif text-[0.75rem] tracking-[0.1em] text-navy/35">
              {isEN ? (
                <>
                  <button
                    onClick={() => handleLangSwitch()}
                    aria-label="Passer en français"
                    className="transition-colors hover:text-dark active:text-dark"
                  >FR</button>
                  <span aria-hidden="true">|</span>
                  <span aria-label="English — current language" className="text-navy">EN</span>
                </>
              ) : (
                <>
                  <span aria-label="Français — langue actuelle" className="text-navy">FR</span>
                  <span aria-hidden="true">|</span>
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
              href={isEN ? "/en#contact" : "#contact"}
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
                    alt="Christian Thalinger logo"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                  <span
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="text-[1.05rem] font-normal text-parchment"
                  >
                    Christian Thalinger
                  </span>
                </Link>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={isEN ? "Close menu" : "Fermer le menu"}
                  className="rounded-full border border-parchment p-3 text-parchment"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links — full-width, large tap targets */}
              <nav aria-label={isEN ? "Mobile navigation" : "Navigation mobile"} className="mt-10 flex flex-col">
                {navLinks.map((link) => (
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
                ))}

                {/* Contact — same list style, gold */}
                <a
                  href={isEN ? "/en#contact" : "#contact"}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="flex min-h-[56px] items-center border-b-2 border-gold/40 text-[2rem] font-normal text-gold transition-colors duration-150 active:text-white"
                >
                  {isEN ? "Contact" : "Contacter"}
                </a>
              </nav>

              {/* Language toggle — 44×44 tap targets */}
              <div className="mt-10 flex items-center gap-0">
                {isEN ? (
                  <>
                    <button
                      onClick={() => handleLangSwitch(true)}
                      aria-label="Passer en français"
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-base tracking-[0.12em] text-white/50 transition-colors duration-150 hover:text-white active:text-white"
                    >FR</button>
                    <span className="select-none px-1 text-white/30" aria-hidden="true">|</span>
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
                    <span className="select-none px-1 text-white/30" aria-hidden="true">|</span>
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
