"use client";

import Script from "next/script";

export default function CalEmbed() {
  return (
    <>
      <div
        id="my-cal-inline-premier-echange"
        style={{ width: "100%", minHeight: "660px", overflow: "auto" }}
      />
      <Script
        id="cal-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              var p = function (a, ar) { a.q.push(ar) };
              var d = C.document;
              C.Cal = C.Cal || function () {
                var cal = C.Cal; var ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {}; cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  var api = function () { p(api, arguments) };
                  var namespace = ar[1]; api.q = [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.eu/embed/embed.js", "init");

            Cal("init", "premier-echange", { origin: "https://app.cal.eu" });
            Cal.ns["premier-echange"]("inline", {
              elementOrSelector: "#my-cal-inline-premier-echange",
              config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
              calLink: "thalinger/premier-echange",
            });
            Cal.ns["premier-echange"]("ui", {
              hideEventTypeDetails: true,
              layout: "month_view",
              styles: {
                branding: {
                  brandColor: "#07137B",
                },
              },
            });
          `,
        }}
      />
    </>
  );
}
