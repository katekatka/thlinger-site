import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options",        value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=()" },
];

const competenceRedirects = [
  // FR short → FR canonical
  ["/competences/droit-des-societes",           "/competences/avocat-droit-des-societes-strasbourg"],
  ["/competences/droit-commercial",              "/competences/avocat-droit-commercial-strasbourg"],
  ["/competences/droit-social",                  "/competences/avocat-droit-du-travail-strasbourg"],
  ["/competences/droit-bancaire-financier",      "/competences/avocat-droit-bancaire-financier-strasbourg"],
  ["/competences/droit-des-assurances",          "/competences/avocat-droit-des-assurances-strasbourg"],
  ["/competences/droit-immobilier-construction", "/competences/avocat-droit-immobilier-construction-strasbourg"],
  // EN old short slugs → EN new canonical slugs
  ["/en/competences/droit-des-societes",           "/en/competences/avocat-droit-des-societes-strasbourg"],
  ["/en/competences/droit-commercial",              "/en/competences/avocat-droit-commercial-strasbourg"],
  ["/en/competences/droit-social",                  "/en/competences/avocat-droit-du-travail-strasbourg"],
  ["/en/competences/droit-bancaire-financier",      "/en/competences/avocat-droit-bancaire-financier-strasbourg"],
  ["/en/competences/droit-des-assurances",          "/en/competences/avocat-droit-des-assurances-strasbourg"],
  ["/en/competences/droit-immobilier-construction", "/en/competences/avocat-droit-immobilier-construction-strasbourg"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "*.notion.so" },
      { hostname: "prod-files-secure.s3.us-west-2.amazonaws.com" },
      { hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return competenceRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
