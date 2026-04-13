// ─── Types ────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __gaLoaded?: boolean;
    __consentInit?: boolean;
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

// ─── Consent Mode v2 ─────────────────────────────────────────────────────────

/**
 * Initialises the gtag stub and sets Consent Mode v2 defaults to denied.
 * Must be called once — before any GA script loads — so GA never fires
 * cookies without explicit user consent.
 */
export function initConsentMode(): void {
  if (typeof window === "undefined" || window.__consentInit) return;
  window.__consentInit = true;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
}

// ─── GA loader ────────────────────────────────────────────────────────────────

/**
 * Updates consent to granted and dynamically injects the GA4 script.
 * Safe to call multiple times — runs only once per page session.
 */
export function loadGA(): void {
  if (!GA_ID || typeof window === "undefined") return;

  // Ensure the stub + default-denied are set before we update consent
  initConsentMode();

  // Update consent state to granted
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });

  // Inject the GA4 script only once
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
}
