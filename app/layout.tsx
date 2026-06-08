import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CookieBanner from "../components/CookieBanner";
import AnalyticsPageView from "../components/AnalyticsPageView";

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
  title: "Avocat d'affaires à Strasbourg — Cabinet THALINGER",
  description: "Cabinet THALINGER, avocat d'affaires à Strasbourg. Droit des sociétés, droit commercial, droit du travail, droit bancaire, droit immobilier et de la construction.",
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Avocat d'affaires à Strasbourg — Cabinet THALINGER",
    description: "Cabinet THALINGER, avocat d'affaires à Strasbourg. Droit des sociétés, droit commercial, droit du travail, droit bancaire, droit immobilier et de la construction.",
    url: "https://thalinger-avocat.fr",
    siteName: "Cabinet THALINGER Avocat",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avocat d'affaires à Strasbourg — Cabinet THALINGER",
    description: "Cabinet THALINGER, avocat d'affaires à Strasbourg. Droit des sociétés, droit commercial, droit du travail, droit bancaire, droit immobilier et de la construction.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Attorney", "LegalService", "LocalBusiness"],
  "@id": "https://www.thalinger-avocat.fr/#firm",
  name: "Cabinet THALINGER",
  legalName: "Cabinet Christian THALINGER",
  description:
    "Cabinet d'avocats d'affaires à Strasbourg. Conseil stratégique et contentieux en droit des sociétés, droit commercial, droit du travail, droit bancaire, droit immobilier et de la construction.",
  url: "https://www.thalinger-avocat.fr",
  telephone: "+33637331926",
  email: "christian@thalinger-avocat.fr",
  image: "https://www.thalinger-avocat.fr/images/portrait03.png",
  logo: "https://www.thalinger-avocat.fr/logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 avenue de la Marseillaise",
    addressLocality: "Strasbourg",
    postalCode: "67000",
    addressRegion: "Grand Est",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
  knowsLanguage: ["fr", "en"],
  serviceType: [
    "Droit des sociétés",
    "Droit commercial",
    "Droit social",
    "Droit bancaire et financier",
    "Droit des assurances",
    "Droit immobilier et de la construction",
    "Droit fiscal",
    "Conseil transfrontalier franco-allemand",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services juridiques",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premier échange — consultation gratuite",
          description:
            "Échange de 30 minutes en visioconférence. Gratuit, sans engagement.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        },
      },
    ],
  },
  employee: {
    "@type": "Person",
    name: "Christian THALINGER",
    jobTitle: "Avocat au Barreau de Strasbourg",
    email: "christian@thalinger-avocat.fr",
    telephone: "+33637331926",
  },
  sameAs: [
    "https://www.linkedin.com/in/christian-thalinger-565446216/",
    "https://www.doctrine.fr/p/avocat/L2F17E9BA4F70F6A24AE1",
    "https://justice.pappers.fr/avocat/thalinger-christian-67000",
    "https://maps.app.goo.gl/y6zbkoVGJaao5Vsm8",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        <Suspense fallback={null}>
          <AnalyticsPageView />
        </Suspense>
        <Nav />
        <main className="flex-1 pt-[96px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
