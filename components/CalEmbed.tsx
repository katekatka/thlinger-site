"use client";

import { useEffect } from "react";

const NS = "premier-echange";
const EL_ID = "my-cal-inline";

/* eslint-disable @typescript-eslint/no-explicit-any */
function mountCal(w: any) {
  // Delete stale namespace so Cal re-attaches to the fresh DOM element
  if (w.Cal?.ns?.[NS]) delete w.Cal.ns[NS];

  w.Cal("init", NS, { origin: "https://app.cal.eu" });
  w.Cal.ns[NS]("inline", {
    elementOrSelector: `#${EL_ID}`,
    config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
    calLink: `thalinger/${NS}`,
  });
  w.Cal.ns[NS]("ui", {
    theme: "light",
    hideEventTypeDetails: true,
    layout: "month_view",
    styles: { branding: { brandColor: "#07137B" } },
  });
}

export default function CalEmbed() {
  useEffect(() => {
    const w = window as any;

    // Clear any previous render inside the container
    const el = document.getElementById(EL_ID);
    if (el) el.innerHTML = "";

    if (w.Cal) {
      // Script already on the page (re-navigation) — call directly
      mountCal(w);
      return;
    }

    // First visit: set up the queue proxy, then load the script
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
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

    mountCal(w);
  }, []);

  return (
    <div
      id={EL_ID}
      style={{ width: "100%", minHeight: "750px" }}
    />
  );
}
