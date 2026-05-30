import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options",        value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=()" },
];

const competenceRedirects = [
  ["/competences/droit-des-societes",           "/competences/avocat-droit-des-societes-strasbourg"],
  ["/competences/droit-commercial",              "/competences/avocat-droit-commercial-strasbourg"],
  ["/competences/droit-social",                  "/competences/avocat-droit-du-travail-strasbourg"],
  ["/competences/droit-bancaire-financier",      "/competences/avocat-droit-bancaire-financier-strasbourg"],
  ["/competences/droit-des-assurances",          "/competences/avocat-droit-des-assurances-strasbourg"],
  ["/competences/droit-immobilier-construction", "/competences/avocat-droit-immobilier-construction-strasbourg"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "*.notion.so" },
      { hostname: "prod-files-secure.s3.us-west-2.amazonaws.com" },
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
