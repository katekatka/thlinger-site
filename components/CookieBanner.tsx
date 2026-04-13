"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getStoredConsent,
  storeConsent,
  clearConsent,
  loadGA,
  initConsentMode,
} from "@/lib/analytics";

// Custom event name used by the footer "Gérer les cookies" button
export const REOPEN_BANNER_EVENT = "ct_show_cookie_banner";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  // On mount: ensure consent defaults are set, then check stored consent
  useEffect(() => {
    initConsentMode();
    const consent = getStoredConsent();
    if (consent === "granted") {
      loadGA();
    } else if (consent === null) {
      setVisible(true);
    }
    // "denied" → stay hidden, don't load GA
  }, []);

  // Listen for the footer's "Gérer les cookies" trigger
  useEffect(() => {
    const handler = () => {
      clearConsent();
      setVisible(true);
    };
    window.addEventListener(REOPEN_BANNER_EVENT, handler);
    return () => window.removeEventListener(REOPEN_BANNER_EVENT, handler);
  }, []);

  const accept = () => {
    storeConsent("granted");
    setVisible(false);
    loadGA();
  };

  const deny = () => {
    storeConsent("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={isEN ? "Cookie consent" : "Consentement aux cookies"}
      className="fixed bottom-0 inset-x-0 z-[200] border-t-2 border-gold bg-white shadow-xl"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-10">

        {/* Text */}
        <div className="flex-1">
          <p className="mb-1 font-serif text-[0.9375rem] font-normal text-navy">
            {isEN
              ? "This site uses cookies for audience analytics (Google Analytics)."
              : "Ce site utilise des cookies pour mesurer l'audience (Google Analytics)."}
          </p>
          <p className="font-sans text-[0.8125rem] leading-relaxed text-navy/65">
            {isEN ? (
              <>
                Analytics cookies are only activated with your consent.{" "}
                <Link
                  href="/en/politique-de-confidentialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-navy"
                >
                  Privacy policy
                </Link>
              </>
            ) : (
              <>
                Les cookies analytiques ne sont activés qu&apos;avec votre consentement.{" "}
                <Link
                  href="/politique-de-confidentialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-navy"
                >
                  Politique de confidentialité
                </Link>
              </>
            )}
          </p>
        </div>

        {/* Buttons — equal prominence per CNIL rules */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          {/* Refuse — outlined, equally prominent */}
          <button
            onClick={deny}
            className="inline-flex items-center justify-center rounded-full border-2 border-navy bg-white px-6 py-3 font-serif text-[0.75rem] uppercase tracking-[0.14em] text-navy transition-all duration-200 hover:border-gold active:border-gold"
          >
            {isEN ? "Refuse" : "Refuser"}
          </button>

          {/* Accept — filled */}
          <button
            onClick={accept}
            className="inline-flex items-center justify-center rounded-full border-2 border-gold bg-navy px-6 py-3 font-serif text-[0.75rem] uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-dark"
          >
            {isEN ? "Accept" : "Accepter"}
          </button>
        </div>
      </div>
    </div>
  );
}
