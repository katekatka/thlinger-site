"use client";

import { useEffect } from "react";

/**
 * Sets document.documentElement.lang on the client.
 * Workaround for Next.js app-router limitation: only the root layout
 * can render <html lang>, so nested EN routes cannot override it via JSX.
 * Screen readers and browser language detection pick up the live DOM value.
 */
export default function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
