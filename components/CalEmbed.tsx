"use client";

import Script from "next/script";

export default function CalEmbed() {
  function initCal() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal;
    if (!Cal) return;
    Cal("init", "premier-echange", { origin: "https://app.cal.eu" });
    Cal.ns["premier-echange"]("inline", {
      elementOrSelector: "#my-cal-inline-premier-echange",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "thalinger/premier-echange",
    });
    Cal.ns["premier-echange"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }

  return (
    <>
      <div
        id="my-cal-inline-premier-echange"
        style={{ width: "100%", minHeight: "660px", overflow: "auto" }}
      />
      <Script
        src="https://app.cal.eu/embed/embed.js"
        strategy="afterInteractive"
        onLoad={initCal}
      />
    </>
  );
}
