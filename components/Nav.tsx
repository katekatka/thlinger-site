"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Acceuil", href: "/" },
  { label: "Competences", href: "/competences" },
  { label: "Clients", href: "/clients" },
  { label: "Le Cabinet", href: "/cabinet" },
  { label: "Eclairages", href: "/eclairages" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b-[4px] border-[#FFD700] bg-[#F5F3EF]"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Christian Thalinger logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <span
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-[1.05rem] font-normal text-[#07137B]"
            >
              Christian Thalinger
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal text-[#07137B] transition-colors hover:text-[#020628]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-[#07137B] px-6 py-3 text-sm font-normal uppercase tracking-[0.12em] text-white transition hover:bg-[#020628]"
            >
              CONTACT
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#07137B] text-white transition md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
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
                <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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
                  aria-label="Fermer le menu"
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
              </div>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#FFD700] px-8 py-3 text-sm font-normal uppercase tracking-[0.12em] text-[#07137B]"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
