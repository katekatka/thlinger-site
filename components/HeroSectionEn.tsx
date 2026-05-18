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

const disciplines = [
  "commercial law",
  "real estate",
  "construction",
  "banking & finance",
  "corporate law",
  "employment",
  "social security",
];

function useTypewriter(words: string[]) {
  const [displayText, setDisplayText] = useState("");
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

export default function HeroSectionEn() {
  const { displayText, cursorOn } = useTypewriter(disciplines);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "5rem" }}
    >
      <motion.div
        className="relative mx-auto grid max-w-[1200px] grid-cols-1 px-6 md:grid-cols-[1fr_530px]"
        style={{ alignItems: "stretch" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Text column ── */}
        <div className="flex flex-col pb-16 md:pb-28">

          {/* Label — "HONORAIRES" style */}
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
            business lawyer in Strasbourg
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-normal leading-tight text-navy"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
              marginBottom: "2rem",
            }}
          >
            <span style={{ display: "block" }}>Attorney in</span>
            <span style={{ display: "block" }}>
              <span style={{ color: "var(--color-navy)" }}>
                {displayText}
                <span
                  aria-hidden="true"
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
            Advising businesses and individuals, the firm turns legal
            complexity into decision-making clarity to secure your strategic
            choices. The first meeting is free, without obligation and
            confidential. It serves one purpose only: to understand your situation.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </div>

        {/* ── Image column ── */}
        <motion.div
          variants={itemVariants}
          className="relative h-[300px] w-full md:h-auto"
        >
          <Image
            src="/images/hero1.png"
            alt="Christian Thalinger, Attorney at the Strasbourg Bar"
            fill
            className="object-contain object-left-top md:object-bottom"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
