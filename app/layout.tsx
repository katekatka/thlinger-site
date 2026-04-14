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
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Christian Thalinger — Avocat d'affaires",
    description: "Avocat d'affaires à Strasbourg. Conseil stratégique pour les entreprises en Alsace et au-delà.",
    url: "https://thalinger-avocat.fr",
    siteName: "Christian Thalinger",
    images: [
      {
        url: "/images/portrait358x253.png",
        width: 358,
        height: 253,
        alt: "Christian Thalinger, Avocat au Barreau de Strasbourg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Thalinger — Avocat d'affaires",
    description: "Avocat d'affaires à Strasbourg. Conseil stratégique pour les entreprises en Alsace et au-delà.",
    images: ["/images/portrait358x253.png"],
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
        <Nav />
        <main className="flex-1 pt-[96px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
