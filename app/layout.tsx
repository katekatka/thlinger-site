import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CookieBanner from "../components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thalinger-avocat.fr"),
  title: "Christian Thalinger — Avocat d'affaires",
  description: "Site officiel du cabinet de Christian Thalinger, avocat d'affaires à Strasbourg.",
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Christian Thalinger — Avocat d'affaires",
    description: "Avocat d'affaires à Strasbourg. Conseil stratégique pour les entreprises en Alsace et au-delà.",
    url: "https://thalinger-avocat.fr",
    siteName: "Christian Thalinger",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Thalinger — Avocat d'affaires",
    description: "Avocat d'affaires à Strasbourg. Conseil stratégique pour les entreprises en Alsace et au-delà.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-dark">
        {/* Consent Mode v2 default-denied stub — must run before any GA script */}
        <Script id="gtag-consent-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          window.__consentInit = true;
        `}</Script>
        <Script
          src="https://webvisor.xyz/api/tracker.js?tid=8c9a84c0-ad08-4c34-82b4-0270ac80c308"
          strategy="afterInteractive"
          async
        />
        <Nav />
        <main className="flex-1 pt-[96px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
