// ─── Types ────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __gaLoaded?: boolean;
  }
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

const STORAGE_KEY = "ct_cookie_consent";

// ─── Consent helpers ──────────────────────────────────────────────────────────

export type ConsentValue = "granted" | "denied";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "granted" || v === "denied") return v;
  return null;
}

export function storeConsent(value: ConsentValue): void {
  localStorage.setItem(STORAGE_KEY, value);
}

export function clearConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// ─── GA loader ────────────────────────────────────────────────────────────────

/**
 * Dynamically injects the GA script and initialises gtag.
 * Safe to call multiple times — runs only once per page session.
 */
export function loadGA(): void {
  if (!GA_ID || typeof window === "undefined" || window.__gaLoaded) return;
  window.__gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    anonymize_ip: true,          // extra GDPR safeguard
    cookie_flags: "SameSite=None;Secure",
  });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
}
