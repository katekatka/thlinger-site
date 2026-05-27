"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = (...a: any[]) => p(api, a);
            const ns = args[1];
            api.q = [];
            if (typeof ns === "string") {
              cal.ns[ns] = cal.ns[ns] || api;
              p(cal.ns[ns], args);
              p(cal, ["initNamespace", ns]);
            } else p(cal, args);
            return;
          }
          p(cal, args);
        };
    })(w, "https://app.cal.eu/embed/embed.js", "init");

    w.Cal("init", "premier-echange", { origin: "https://app.cal.eu" });
    w.Cal.ns["premier-echange"]("inline", {
      elementOrSelector: "#my-cal-inline-premier-echange",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "thalinger/premier-echange",
    });
    w.Cal.ns["premier-echange"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="my-cal-inline-premier-echange"
      style={{ width: "100%", minHeight: "660px", overflow: "auto" }}
    />
  );
}
