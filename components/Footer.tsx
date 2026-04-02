"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Compétences", href: "/competences" },
  { label: "Le Cabinet", href: "/cabinet" },
  { label: "Nos Clients", href: "/clients" },
  { label: "Éclairages", href: "/eclairages" },
];

const skillLinks = [
  { label: "Droit des Sociétés", href: "/competences#societes" },
  { label: "Droit Commercial", href: "/competences#commercial" },
  { label: "Droit Fiscal", href: "/competences#fiscal" },
  { label: "Droit du Travail", href: "/competences#travail" },
  { label: "Transfrontalier", href: "/competences#transfrontalier" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="bg-[#020628] text-white"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Christian Thalinger logo" width={42} height={42} className="object-contain" />
              <span className="text-base font-normal text-white">Christian Thalinger</span>
            </div>
            <p className="max-w-[24rem] text-sm font-[300] leading-7 text-white/50">
              Avocat d'affaires à Strasbourg. Conseil stratégique pour les entreprises en Alsace et au-delà.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.15em] text-[#FFD700]">Navigation</p>
            <div className="space-y-3 text-sm text-white/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.15em] text-[#FFD700]">Compétences</p>
            <div className="space-y-3 text-sm text-white/50">
              {skillLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-sm text-white/50">
            <p className="text-sm uppercase tracking-[0.15em] text-[#FFD700]">Contact</p>
            <div className="space-y-3">
              <Link href="tel:+33637331926" className="block transition hover:text-white">
                +33 6 37 33 19 26
              </Link>
              <Link href="mailto:cthalinger@outlook.fr" className="block transition hover:text-white">
                cthalinger@outlook.fr
              </Link>
              <address className="not-italic leading-7 transition hover:text-white">
                20 rue du Fossé des Tanneurs<br />
                67000 Strasbourg
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex flex-col gap-3 px-6 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Christian Thalinger — Avocat au Barreau de Strasbourg</span>
          <Link
            href="https://www.linkedin.com/in/christian-thalinger-565446216/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/50 transition hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path d="M4.98 3.5C4.98 4.60457 4.10457 5.48 3 5.48C1.89543 5.48 1.02 4.60457 1.02 3.5C1.02 2.39543 1.89543 1.52 3 1.52C4.10457 1.52 4.98 2.39543 4.98 3.5Z" fill="currentColor" />
              <path d="M1.5 8.25H4.5V22.5H1.5V8.25Z" fill="currentColor" />
              <path d="M7.5 8.25H10.5V9.96999H10.563C11.0394 8.93616 12.2066 7.5 14.7638 7.5C19.0388 7.5 19.5 10.3678 19.5 14.1863V22.5H16.5V14.9437C16.5 12.695 16.4764 9.95625 13.5 9.95625C10.5 9.95625 10.125 12.3375 10.125 14.8238V22.5H7.5V8.25Z" fill="currentColor" />
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
