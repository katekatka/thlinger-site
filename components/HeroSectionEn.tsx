"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

// All 7 practice-area variants — must stay in sync with the sr-only list below
const disciplines = [
  "commercial law",
  "real estate law",
  "construction law",
  "banking & financial law",
  "corporate law",
  "employment law",
  "social security law",
];

// ─── Typewriter ───────────────────────────────────────────────────────────────

function useTypewriter(words: string[]) {
  const [displayText, setDisplayText] = useState(words[0]);
  const [wordIndex, setWordIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);
  const [cursorOn, setCursorOn]       = useState(true);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed   = isDeleting ? 35 : 75;
    let t: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      t = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      t = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 350);
    } else {
      t = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(t);
  }, [displayText, isDeleting, wordIndex, words]);

  useEffect(() => {
    const iv = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(iv);
  }, []);

  return { displayText, cursorOn };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSectionEn() {
  const { displayText, cursorOn } = useTypewriter(disciplines);
  const [mounted, setMounted] = useState(false);
  const [geoOpen, setGeoOpen] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="hero"
      className="relative overflow-x-clip bg-white"
      style={{ paddingTop: "5rem" }}
    >
      <motion.div
        className="relative mx-auto grid max-w-[1200px] grid-cols-1 px-6 md:grid-cols-[1fr_560px] md:gap-x-[72px]"
        variants={containerVariants}
        initial={mounted ? "hidden" : "visible"}
        animate="visible"
      >
        {/* ── Text column ── */}
        <div className="flex flex-col pb-8 md:pb-28">

          <motion.p
            variants={itemVariants}
            className="font-sans uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.22em",
              color: "var(--color-navy-muted)",
              marginBottom: "1.75rem",
            }}
          >
            <span className="block md:inline">Maître Christian THALINGER</span>
            <span className="hidden md:inline"> · </span>
            <span className="block md:inline">Business Lawyer in Strasbourg</span>
          </motion.p>

          {/*
            H1 structure:
              Line 1 — "Attorney in"                (static)
              Line 2 — [rotating discipline]         (typewriter for users)
                        + sr-only list of all 7     (for crawlers, always in DOM)
              Line 3 — "in Strasbourg."              (static)

            The sr-only span keeps all 7 variants in the server-rendered HTML so
            Google, AI engines, and no-JS crawlers index the full keyword set.
            The aria-hidden typewriter is purely presentational on top.
          */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-normal leading-tight text-navy"
            style={{
              fontSize: "clamp(2.1rem, 4.5vw, 3.6rem)",
              marginBottom: "2rem",
            }}
          >
            <span style={{ display: "block" }}>Attorney in</span>

            <span className="md:whitespace-nowrap" style={{ display: "block", position: "relative" }}>
              {/* All 7 disciplines — always in the DOM for crawlers */}
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0,0,0,0)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                }}
              >
                {disciplines.join(", ")}
              </span>

              {/* Visual typewriter — hidden from assistive tech (sr-only covers it) */}
              <span aria-hidden="true" style={{ color: "var(--color-navy)" }}>
                {displayText}
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "0.82em",
                    backgroundColor: "var(--color-navy)",
                    marginLeft: "3px",
                    verticalAlign: "middle",
                    opacity: cursorOn ? 1 : 0,
                    transition: "opacity 0.08s",
                  }}
                />
              </span>
            </span>

            <span style={{ display: "block" }}>in Strasbourg.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans leading-relaxed"
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-navy-muted)",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            The firm turns legal complexity into decision-making clarity for businesses
            and individuals. The first exchange is free, without obligation and
            confidential. It serves one purpose: to understand your situation.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
              style={{ color: "#ffffff" }}
            >
              Discuss your situation
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 5H15M15 5L11 1M15 5L11 9"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="tel:+33637331926"
              className="inline-flex items-center rounded-full border-2 border-gold px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-navy transition-all duration-300 hover:bg-navy hover:text-white active:scale-[0.97]"
            >
              +33 6 37 33 19 26
            </a>

            {/* GEO direct-answer block — mobile: bottom sheet on click; desktop: hover card */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setGeoOpen((v) => !v)}
                className="cursor-pointer font-sans text-sm text-navy/40 hover:text-navy/60 focus:outline-none md:cursor-default"
              >
                learn more
              </button>

              {/* Mobile bottom sheet */}
              {geoOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[99] bg-black/40 md:hidden"
                    onClick={() => setGeoOpen(false)}
                  />
                  <div className="fixed inset-x-0 bottom-0 top-[30%] z-[100] overflow-y-auto rounded-t-[2rem] border-t-2 border-gold bg-white px-8 pb-12 pt-8 md:hidden">
                    <div className="mb-6 flex items-start justify-between">
                      <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-navy/40">About the firm</p>
                      <button
                        onClick={() => setGeoOpen(false)}
                        aria-label="Close"
                        className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-navy/20 text-navy/40"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-navy/70">
                      Maître Christian THALINGER has been a member of the Strasbourg Bar since January 2022.
                      The firm THALINGER Avocat, located at 5 avenue de la Marseillaise 67000 Strasbourg,
                      advises on corporate law, commercial law, employment law, social security law, real
                      estate law, construction law, and banking and financial law, serving businesses and
                      individuals. Each matter is the subject of an individualised strategic analysis, with
                      one constant objective: enabling the client to understand their options, assess their
                      risks, and decide with full knowledge of the facts.
                    </p>
                  </div>
                </>
              )}

              {/* Desktop hover card — display:none on mobile (no overflow), in DOM on desktop for crawlers */}
              <div className="hidden md:block invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 absolute left-0 top-full z-50 mt-2 w-[480px] max-w-[90vw] rounded-2xl border border-gold/20 bg-white p-6 shadow-[0_12px_40px_rgba(7,19,123,0.12)]">
                <p className="font-sans text-sm leading-relaxed text-navy/70">
                  Maître Christian THALINGER has been a member of the Strasbourg Bar since January 2022.
                  The firm THALINGER Avocat, located at 5 avenue de la Marseillaise 67000 Strasbourg,
                  advises on corporate law, commercial law, employment law, social security law, real
                  estate law, construction law, and banking and financial law, serving businesses and
                  individuals. Each matter is the subject of an individualised strategic analysis, with
                  one constant objective: enabling the client to understand their options, assess their
                  risks, and decide with full knowledge of the facts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Image column ── */}
        <motion.div
          variants={itemVariants}
          className="relative h-[380px] w-full overflow-hidden md:h-auto"
        >
          <Image
            src="/images/hero1.png"
            alt="Christian THALINGER, Attorney at the Strasbourg Bar"
            fill
            className="object-contain object-top md:object-bottom"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
