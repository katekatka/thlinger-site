"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { REOPEN_BANNER_EVENT } from "./CookieBanner";

const skillLinksFR = [
  { label: "Droit des Sociétés",     href: "/competences/droit-des-societes" },
  { label: "Droit Commercial",       href: "/competences/droit-commercial" },
  { label: "Droit du Travail",       href: "/competences/droit-du-travail" },
  { label: "Conseil Transfrontalier",href: "/competences/conseil-transfrontalier" },
  { label: "Droit Immobilier",       href: "/competences/droit-immobilier" },
  { label: "Droit Fiscal",           href: "/competences/droit-fiscal" },
];

const skillLinksEN = [
  { label: "Corporate Law",         href: "/en/competences/droit-des-societes" },
  { label: "Commercial Law",        href: "/en/competences/droit-commercial" },
  { label: "Employment Law",        href: "/en/competences/droit-du-travail" },
  { label: "Cross-border Advisory", href: "/en/competences/conseil-transfrontalier" },
  { label: "Real Estate Law",       href: "/en/competences/droit-immobilier" },
  { label: "Tax Law",               href: "/en/competences/droit-fiscal" },
];

const linkClass = "block text-white/50 transition-colors duration-200 hover:text-white active:text-white";

export default function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const skillLinks = isEN ? skillLinksEN : skillLinksFR;

  return (
    <>
      <div className="bg-gold" style={{ height: "2px" }} />
      <motion.footer
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="bg-dark text-white"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">

            {/* Logo + description */}
            <div className="space-y-4 md:max-w-[280px]">
              <Link href={isEN ? "/en" : "/"} className="flex items-center gap-3 group">
                <Image
                  src="/logo.svg"
                  alt="Christian Thalinger logo"
                  width={42}
                  height={42}
                  className="object-contain brightness-0 invert"
                />
                <span
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-[1.05rem] font-normal text-white transition-colors duration-200 group-hover:text-white/70"
                >
                  Christian Thalinger
                </span>
              </Link>
              <p className="text-sm font-[300] leading-7 text-white/50">
                {isEN
                  ? "Business lawyer in Strasbourg. Strategic counsel for companies in Alsace and beyond."
                  : "Avocat d\u2019affaires à Strasbourg. Conseil stratégique pour les entreprises en Alsace et au-delà."}
              </p>
            </div>

            {/* Compétences + Contact */}
            <div className="flex flex-col gap-12 md:flex-row md:gap-20">

              {/* Compétences */}
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                  {isEN ? "Expertise" : "Compétences"}
                </p>
                <div className="space-y-3 text-sm">
                  {skillLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                  Contact
                </p>
                <div className="space-y-3 text-sm">
                  <Link href="tel:+33637331926" className={linkClass}>
                    +33 6 37 33 19 26
                  </Link>
                  <Link href="mailto:cthalinger@outlook.fr" className={linkClass}>
                    cthalinger@outlook.fr
                  </Link>
                  <Link
                    href="https://maps.google.com/maps?q=20+Rue+du+Foss%C3%A9+des+Tanneurs+67000+Strasbourg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass + " not-italic"}
                  >
                    20 rue du Fossé des Tanneurs
                    <br />
                    67000 Strasbourg
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-gold" style={{ height: "2px" }} />
        <div className="mx-auto flex flex-col gap-2 px-6 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Christian Thalinger — {isEN ? "Attorney at the Strasbourg Bar" : "Avocat au Barreau de Strasbourg"}</span>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={isEN ? "/en/mentions-legales" : "/mentions-legales"}
              className="text-white/50 transition-colors duration-200 hover:text-white active:text-white"
            >
              {isEN ? "Legal Notice" : "Mentions Légales"}
            </Link>
            <Link
              href={isEN ? "/en/politique-de-confidentialite" : "/politique-de-confidentialite"}
              className="text-white/50 transition-colors duration-200 hover:text-white active:text-white"
            >
              {isEN ? "Privacy Policy" : "Politique de Confidentialité"}
            </Link>
            <button
              onClick={() => window.dispatchEvent(new Event(REOPEN_BANNER_EVENT))}
              className="text-white/50 transition-colors duration-200 hover:text-white active:text-white"
            >
              {isEN ? "Manage cookies" : "Gérer les cookies"}
            </button>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
