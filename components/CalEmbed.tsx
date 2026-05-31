"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const NS    = "premier-echange";
const EL_ID = "my-cal-inline";

/* eslint-disable @typescript-eslint/no-explicit-any */
function mountCal(w: any, language: "fr" | "en") {
  // Wipe the old namespace so Cal re-attaches cleanly on re-navigation
  if (w.Cal?.ns?.[NS]) delete w.Cal.ns[NS];

  w.Cal("init", NS, { origin: "https://app.cal.eu" });

  w.Cal.ns[NS]("inline", {
    elementOrSelector: `#${EL_ID}`,
    calLink: `thalinger/${NS}`,
    config: {
      layout:                    "month_view",
      useSlotsViewOnSmallScreen: "true",
      language,                           // Cal.com API param for UI language
      timezone:                  "Europe/Paris",
    },
  });

  w.Cal.ns[NS]("ui", {
    theme:                "light",
    hideEventTypeDetails: true,
    layout:               "month_view",
    styles: {
      branding: { brandColor: "#07137B" },
    },
    // Zero out every border CSS variable Cal.com exposes — fixes any
    // coloured frame that appears on the confirmation screen
    cssVarsPerTheme: {
      light: {
        "--cal-border":          "transparent",
        "--cal-border-emphasis": "transparent",
        "--cal-border-default":  "transparent",
        "--cal-border-subtle":   "transparent",
        "--cal-border-booker":   "transparent",
      },
    },
  });
}

interface CalEmbedProps {
  language?: "fr" | "en";
}

export default function CalEmbed({ language = "fr" }: CalEmbedProps) {
  useEffect(() => {
    const w = window as any;

    // Reset the container so Cal renders fresh on re-navigation
    const el = document.getElementById(EL_ID);
    if (el) el.innerHTML = "";

    if (w.Cal) {
      mountCal(w, language);
      return;
    }

    // First visit: bootstrap the Cal queue proxy then load the script
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar  = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q  = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = (...a: any[]) => p(api, a);
            const ns = ar[1];
            api.q = [];
            if (typeof ns === "string") {
              cal.ns[ns] = cal.ns[ns] || api;
              p(cal.ns[ns], ar);
              p(cal, ["initNamespace", ns]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(w, "https://app.cal.eu/embed/embed.js", "init");

    mountCal(w, language);

    const handleCalEvent = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data) return;
      const { type } = e.data as { type?: string };
      if (type === "bookingSuccessful")      trackEvent("booking_completed",     { event_type: NS });
      else if (type === "eventTypeSelected") trackEvent("booking_slot_selected",  { event_type: NS });
    };
    window.addEventListener("message", handleCalEvent);
    return () => window.removeEventListener("message", handleCalEvent);
  }, [language]);

  return (
    <>
      {/* Suppress any visible border at the iframe element level across all browsers */}
      <style>{`
        #${EL_ID} iframe {
          border: none !important;
          outline: none !important;
        }
      `}</style>
      <div
        id={EL_ID}
        style={{ width: "100%", minHeight: "750px", border: "none", outline: "none" }}
      />
    </>
  );
}
