import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
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
  title: "Christian Thalinger — Avocat d'affaires",
  description: "Site officiel du cabinet de Christian Thalinger, avocat d'affaires à Strasbourg.",
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
      <body className="min-h-full bg-white text-[#020628]">
        <Nav />
        <main className="flex-1 pt-[96px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
