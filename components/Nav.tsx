"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { getLangSwitchUrl } from "@/lib/langSwitch";

const navLinksFR = [
  { label: "Accueil", href: "/#hero" },
  { label: "Compétences", href: "/#competences" },
  { label: "Honoraires", href: "/honoraires" },
];

const navLinksEN = [
  { label: "Home", href: "/en#hero" },
  { label: "Expertise", href: "/en#competences" },
  { label: "Fees", href: "/en/honoraires" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isEN = pathname.startsWith("/en");
  const navLinks = isEN ? navLinksEN : navLinksFR;

  // Track which section is currently most visible (96 px = fixed header height)
  const activeSection = useActiveSection(96);

  const handleLangSwitch = useCallback(
    (closeMenu = false) => {
      if (closeMenu) setOpen(false);
      const url = getLangSwitchUrl(pathname, activeSection);
      router.push(url);
    },
    [pathname, activeSection, router]
  );

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-x-0 top-0 z-50 bg-white"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link href={isEN ? "/en#hero" : "/#hero"} className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="Christian Thalinger logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <span
              style={{ fontFamily: "var(--font-poppins)", color: "rgb(7,19,123)" }}
              className="text-[1.05rem] font-normal transition-colors duration-150"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#020628")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgb(7,19,123)")}
              onMouseDown={e => ((e.currentTarget as HTMLElement).style.color = "#020628")}
              onMouseUp={e => ((e.currentTarget as HTMLElement).style.color = "rgb(7,19,123)")}
            >
              Christian Thalinger
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: "var(--font-playfair)", color: "rgba(7,19,123,0.70)" }}
                className="text-[0.875rem] font-normal transition-colors duration-150"
                onMouseEnter={e => (e.currentTarget.style.color = "#020628")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(7,19,123,0.70)")}
                onMouseDown={e => (e.currentTarget.style.color = "#020628")}
                onMouseUp={e => (e.currentTarget.style.color = "rgba(7,19,123,0.70)")}
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle — section-aware */}
            <span className="flex items-center gap-1 font-serif text-[0.75rem] tracking-[0.1em] text-[#07137B]/35">
              {isEN ? (
                <>
                  <button
                    onClick={() => handleLangSwitch()}
                    className="transition-colors hover:text-black active:text-black"
                  >
                    FR
                  </button>
                  <span>|</span>
                  <span className="text-[#07137B]">EN</span>
                </>
              ) : (
                <>
                  <span className="text-[#07137B]">FR</span>
                  <span>|</span>
                  <button
                    onClick={() => handleLangSwitch()}
                    className="transition-colors hover:text-black active:text-black"
                  >
                    EN
                  </button>
                </>
              )}
            </span>

            <a
              href={isEN ? "/en#contact" : "#contact"}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-[#07137B] px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-[#020628] hover:gap-5"
              style={{ color: "#ffffff" }}
            >
              {isEN ? "Contact" : "Contacter"}
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 5H15M15 5L11 1M15 5L11 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label={isEN ? "Open menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#07137B] text-white transition md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-[#D4AF37]" style={{ height: "2px" }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#07137B]"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-6">
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
                    className="text-lg font-normal text-[#F5F3EF]"
                  >
                    Christian Thalinger
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={isEN ? "Close menu" : "Fermer le menu"}
                  className="rounded-full border border-[#F5F3EF] p-3 text-[#F5F3EF]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-normal text-[#F5F3EF]"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile language toggle — section-aware */}
                <div className="flex items-center gap-2 font-serif text-[0.85rem] tracking-[0.1em] text-white/40">
                  {isEN ? (
                    <>
                      <button
                        onClick={() => handleLangSwitch(true)}
                        className="transition-colors hover:text-white"
                      >
                        FR
                      </button>
                      <span>|</span>
                      <span className="text-white">EN</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">FR</span>
                      <span>|</span>
                      <button
                        onClick={() => handleLangSwitch(true)}
                        className="transition-colors hover:text-white"
                      >
                        EN
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href={isEN ? "/en#contact" : "#contact"}
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-[#07137B] px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-[#020628] hover:gap-5"
                  style={{ color: "#ffffff" }}
                >
                  {isEN ? "Contact" : "Contacter"}
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 5H15M15 5L11 1M15 5L11 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
