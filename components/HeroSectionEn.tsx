"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function runSnake(el: SVGPathElement, delay: number) {
  const len = el.getTotalLength();
  el.style.strokeDasharray  = `${len} ${len}`;
  el.style.strokeDashoffset = `${len}`;
  el.animate(
    [
      { strokeDashoffset: `${len}`,  easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { strokeDashoffset: "0",       easing: "cubic-bezier(0.55, 0, 0.8, 0.45)" },
      { strokeDashoffset: `${-len}` },
    ],
    { duration: 2600, delay, fill: "both" }
  );
}

export default function HeroSectionEn() {
  const leftRef  = useRef<SVGPathElement>(null);
  const rightRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const leftEl  = leftRef.current;
    const rightEl = rightRef.current;
    if (!leftEl || !rightEl) return;
    runSnake(leftEl,  100);
    runSnake(rightEl, 250);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "5rem", paddingBottom: "6.5rem" }}
    >
      {/* Left arc */}
      <div className="pointer-events-none absolute bottom-0 left-0" aria-hidden="true">
        <svg width="310" height="387" viewBox="0 0 310 387"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={leftRef}
            d="M309 431V218.319C309 98.5537 211.911 1 92.1455 1H-198"
            stroke="#07137B" strokeWidth="2"
            strokeDasharray="9999" strokeDashoffset="9999"
          />
        </svg>
      </div>

      {/* Right arc */}
      <div className="pointer-events-none absolute right-0 top-0" aria-hidden="true">
        <svg width="310" height="400" viewBox="0 0 310 400"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={rightRef}
            d="M1 -31V181.681C1 301.446 98.0891 399 217.854 399H508"
            stroke="#07137B" strokeWidth="2"
            strokeDasharray="9999" strokeDashoffset="9999"
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-10">
          <Image
            src="/images/portrait358x253.png"
            alt="Christian Thalinger, Attorney at the Strasbourg Bar"
            width={286}
            height={202}
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.p variants={itemVariants}
          className="mb-8 font-serif text-[11px] uppercase tracking-[0.2em] text-[#07137B]/55">
          Attorney at the Strasbourg Bar
        </motion.p>

        <motion.h1 variants={itemVariants}
          className="mb-8 font-serif font-normal leading-none text-[#07137B]"
          style={{ fontSize: "clamp(2.6rem, 7.5vw, 4.875rem)" }}>
          Christian Thalinger
        </motion.h1>

        <motion.blockquote variants={itemVariants}
          className="mb-10 max-w-[560px] font-sans text-base leading-relaxed text-[#07137B]/60 md:text-[1.0625rem]">
          &ldquo;I take the time to understand the issues at stake and translate legal matters into clear business decisions.&rdquo;
        </motion.blockquote>

        <motion.div variants={itemVariants}>
          <a href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-[#07137B] px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-[#020628] hover:gap-5"
            style={{ color: "#ffffff" }}>
            Contact
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 5H15M15 5L11 1M15 5L11 9"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
