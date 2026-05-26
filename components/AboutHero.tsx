"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// ─── Animation — identical to HeroSection ────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// ─── Alternating typewriter ───────────────────────────────────────────────────
// Displays a single line that cycles between line1 and line2:
//   type line1 → pause → erase → type line2 → pause → erase → repeat
// minHeight on the span keeps layout stable throughout the full cycle.

type Phase = "typing1" | "pause1" | "erasing1" | "typing2" | "pause2" | "erasing2";

function useAlternatingTyper(line1: string, line2: string) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing1");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    switch (phase) {
      case "typing1":
        t =
          text.length < line1.length
            ? setTimeout(() => setText(line1.slice(0, text.length + 1)), 55)
            : setTimeout(() => setPhase("pause1"), 1800);
        break;
      case "pause1":
        t = setTimeout(() => setPhase("erasing1"), 150);
        break;
      case "erasing1":
        t =
          text.length > 0
            ? setTimeout(() => setText((p) => p.slice(0, -1)), 30)
            : setTimeout(() => setPhase("typing2"), 300);
        break;
      case "typing2":
        t =
          text.length < line2.length
            ? setTimeout(() => setText(line2.slice(0, text.length + 1)), 55)
            : setTimeout(() => setPhase("pause2"), 1800);
        break;
      case "pause2":
        t = setTimeout(() => setPhase("erasing2"), 150);
        break;
      case "erasing2":
        t =
          text.length > 0
            ? setTimeout(() => setText((p) => p.slice(0, -1)), 30)
            : setTimeout(() => setPhase("typing1"), 300);
        break;
    }
    return () => clearTimeout(t);
  }, [phase, text, line1, line2]);

  return { text, cursorOn };
}

// ─── Cursor ───────────────────────────────────────────────────────────────────

function Cursor({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "3px",
        height: "0.82em",
        backgroundColor: "var(--color-navy)",
        marginLeft: "3px",
        verticalAlign: "middle",
        opacity: on ? 1 : 0,
        transition: "opacity 0.08s",
      }}
    />
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface Credential { label: string; value: string }

interface AboutHeroProps {
  eyebrow: string;
  staticLine: string;
  typedLine?: string;
  description: string;
  imageAlt: string;
  credentials?: Credential[];
  phone?: string;
  email?: string;
  address?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutHero({
  eyebrow,
  staticLine,
  typedLine,
  description,
  imageAlt,
  credentials,
  phone,
  email,
  address,
}: AboutHeroProps) {
  const { text, cursorOn } = useAlternatingTyper(staticLine, typedLine ?? staticLine);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative overflow-hidden bg-white" style={{ paddingTop: "5rem" }}>
      <motion.div
        className="mx-auto grid max-w-[1200px] grid-cols-1 px-6 md:grid-cols-[1fr_576px]"
        variants={containerVariants}
        initial={mounted ? "hidden" : "visible"}
        animate="visible"
      >

        {/* ── Text column ── */}
        <div className="flex flex-col pb-16 md:pb-28">

          {/* Eyebrow */}
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
            {eyebrow}
          </motion.p>

          {/*
            H1 — single line that alternates between the name and the title.
            minHeight reserves the tallest line's height so nothing below
            ever shifts as the text changes.
          */}
          <motion.h1
            variants={itemVariants}
            className="font-serif font-normal leading-tight text-navy"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)", marginBottom: "2rem" }}
          >
            {typedLine ? (
              <span style={{ display: "flex", alignItems: "flex-end", height: "2.5em" }}>
                <span>{text}<Cursor on={cursorOn} /></span>
              </span>
            ) : (
              staticLine
            )}
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
            {description}
          </motion.p>

          {/* Credentials grid (optional) */}
          {credentials && credentials.length > 0 && (
            <motion.div variants={itemVariants}>
              <div className="mb-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
                {credentials.map((c) => (
                  <div key={c.label}>
                    <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-navy-muted">
                      {c.label}
                    </p>
                    <p className="font-serif text-sm text-navy">{c.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact row (optional) */}
          {(phone || email || address) && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-navy/65"
            >
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-navy"
                >
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="transition-colors hover:text-navy">
                  {email}
                </a>
              )}
              {address && <span>{address}</span>}
            </motion.div>
          )}
        </div>

        {/* ── Image column ── */}
        <motion.div
          variants={itemVariants}
          className="relative h-[528px] w-full md:h-auto"
        >
          <Image
            src="/images/bio.png"
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-contain object-top md:object-bottom"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
