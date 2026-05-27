import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";
import { StepsSection } from "@/components/StepsSection";
import GoogleReviews from "@/components/GoogleReviews";
import { fetchGoogleReviews } from "@/lib/google-places";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.thalinger-avocat.fr/#christian-thalinger",
      name: "Christian THALINGER",
      givenName: "Christian",
      familyName: "Thalinger",
      jobTitle: "Avocat au Barreau de Strasbourg",
      description:
        "Maître Christian THALINGER (THALINGER AVOCAT, SIREN 909547721) est avocat au Barreau de Strasbourg spécialisé en droit des affaires. Serment prêté le 13 janvier 2022. Spécialités : droit des sociétés, droit commercial, droit du travail, droit bancaire et des assurances, droit immobilier et de la construction.",
      url: "https://www.thalinger-avocat.fr",
      image: "https://www.thalinger-avocat.fr/images/bio.png",
      telephone: "+33637331926",
      email: "christian@thalinger-avocat.fr",
      worksFor: { "@id": "https://www.thalinger-avocat.fr/#organization" },
      knowsLanguage: ["fr", "en"],
      knowsAbout: [
        "Droit des sociétés",
        "Droit commercial",
        "Droit du travail",
        "Droit bancaire",
        "Droit des assurances",
        "Droit immobilier",
        "Droit de la construction",
        "Droit de la sécurité sociale",
        "Droit bancaire et financier",
      ],
      memberOf: [{ "@type": "Organization", name: "Barreau de Strasbourg" }],
      sameAs: [
        "https://www.linkedin.com/in/christian-thalinger-565446216/",
        "https://www.doctrine.fr/p/avocat/L2F17E9BA4F70F6A24AE1",
        "https://justice.pappers.fr/avocat/thalinger-christian-67000",
      ],
    },
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://www.thalinger-avocat.fr/#organization",
      name: "THALINGER Avocat",
      legalName: "THALINGER CHRISTIAN",
      description:
        "Cabinet d'avocat d'affaires à Strasbourg — droit des sociétés, droit commercial, droit du travail, droit bancaire et des assurances, droit immobilier et de la construction.",
      url: "https://www.thalinger-avocat.fr",
      telephone: "+33637331926",
      email: "christian@thalinger-avocat.fr",
      founder: { "@id": "https://www.thalinger-avocat.fr/#christian-thalinger" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 avenue de la Marseillaise",
        addressLocality: "Strasbourg",
        postalCode: "67000",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 48.5813, longitude: 7.7484 },
      areaServed: ["Strasbourg", "Alsace", "Grand Est", "France"],
      availableLanguage: ["French", "English"],
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: ["https://www.linkedin.com/in/christian-thalinger-565446216/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.thalinger-avocat.fr/#website",
      name: "THALINGER Avocat",
      url: "https://www.thalinger-avocat.fr",
      inLanguage: "fr",
      publisher: { "@id": "https://www.thalinger-avocat.fr/#organization" },
    },
  ],
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Droit des Sociétés",
    description:
      "Structurer et sécuriser la vie de votre entreprise à chaque étape de son développement.",
    href: "/competences/droit-des-societes",
  },
  {
    title: "Droit Commercial",
    description:
      "Sécuriser vos contrats, protéger vos intérêts en contentieux commercial, récupérer vos créances impayées et vous guider à chaque étape d'une procédure collective.",
    href: "/competences/droit-commercial",
  },
  {
    title: "Droit Social",
    description:
      "Conseiller en gestion des relations avec les salariés, des rapports collectifs et des cotisations sociales, assurer la représentation en contentieux en droit du travail et de la protection sociale.",
    href: "/competences/droit-social",
  },
  {
    title: "Droit Bancaire & Financier",
    description:
      "Assister en contentieux bancaire lié aux financements, investissements, cautionnements, actions en responsabilité des acteurs bancaires et financiers.",
    href: "/competences/droit-bancaire-financier",
  },
  {
    title: "Droit des Assurances",
    description:
      "Clarifier les clauses des contrats d'assurance, déterminer les préjudices, vous assister dans les expertises et litiges en droit des assurances.",
    href: "/competences/droit-des-assurances",
  },
  {
    title: "Droit Immobilier & Construction",
    description:
      "Encadrer vos opérations immobilières, sécuriser vos baux et gérer les contentieux liés à la construction et aux responsabilités des intervenants.",
    href: "/competences/droit-immobilier-construction",
  },
];

const steps = [
  {
    title: "Compréhension du contexte",
    description:
      "Chaque dossier débute par une analyse approfondie de votre situation et de ses circonstances. Cette immersion permet de cerner précisément ce qui est en jeu pour vous.",
  },
  {
    title: "Identification des risques et des enjeux",
    description:
      "Le cabinet met en lumière les risques concrets et les leviers à votre disposition, afin que vous puissiez prendre vos décisions en toute connaissance de cause.",
  },
  {
    title: "Proposition d'options",
    description:
      "Le cabinet traduit les règles applicables et les issues possibles en scénarios clairs, pour que vous disposiez d'une vision nette des choix qui s'offrent à vous.",
  },
  {
    title: "Mise en place conjointe de la stratégie",
    description:
      "Votre participation est au cœur de la démarche : la stratégie la plus adaptée à vos objectifs est construite ensemble.",
  },
];

const trustBlocks = [
  {
    title: "Des prestations sur mesure.",
    text: "Le cabinet ne propose jamais de solutions standardisées : chaque accompagnement est construit sur mesure, dans un dialogue authentique et impliqué. Le cabinet s'attache à comprendre en profondeur les réalités de chaque situation pour apporter des solutions adaptées à vos enjeux.",
  },
  {
    title: "Une immersion dans le monde des affaires.",
    text: "Le cabinet participe à la vie économique, associative et publique locale. Cette proximité avec le terrain nourrit son expertise et lui permet de vous conseiller avec une compréhension fine de votre environnement.",
  },
];

// ─── Google Reviews fallback ─────────────────────────────────────────────────
// Shown only when GOOGLE_PLACES_API_KEY is not set in .env.local.
// Paste real review data here for instant display while the key is pending.

const fallbackReviews = {
  placeUrl: `https://www.google.com/maps/place/?q=place_id:ChIJG1o0kVXJlkcRkMxPv0VL_WM`,
  rating: 5.0,
  totalReviews: 2,
  reviews: [
    {
      author: "Arbogast Laura",
      authorUrl: "https://www.google.com/maps/contrib/100264503749605105444/reviews",
      rating: 5,
      text: "Nous tenons à remercier chaleureusement Maître Thalinger pour la qualité de son accompagnement.\n\nProfessionnel, réactif et particulièrement à l'écoute, il a su nous conseiller et nous rassurer à chaque étape avec beaucoup de sérieux et de bienveillance. Son implication, sa disponibilité et la clarté de ses explications ont été très appréciées.\n\nNous recommandons Maître Thalinger sans hésitation à toute personne recherchant un avocat compétent et humain. Encore merci pour votre aide précieuse !",
      date: "il y a une semaine",
    },
    {
      author: "Marc CHRETIEN",
      authorUrl: "https://www.google.com/maps/contrib/117262535581386929646/reviews",
      rating: 5,
      text: "Excellent avocat, rigoureux et d'un professionnalisme exemplaire. Maître Thalinger m'a accompagné sur un dossier. Ses conseils stratégiques et sa réactivité ont fait toute la différence. Je lui accorde toute ma confiance et le recommande sans hésiter.",
      date: "il y a une semaine",
    },
  ] as import("@/components/GoogleReviews").GoogleReview[],
};

// ─── Shared components ───────────────────────────────────────────────────────

function ContacterButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
      style={{ color: "#ffffff" }}
    >
      Prendre rendez-vous
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M1 5H15M15 5L11 1M15 5L11 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const liveReviews = await fetchGoogleReviews();
  const reviewsData = liveReviews ?? fallbackReviews;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO */}
      <HeroSection />

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PROBLÈME */}
      <section id="probleme" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
                Une compréhension réciproque au cœur de la relation client.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/65 md:text-[1.0625rem]">
                Vous connaissez votre activité. Le cabinet connaît le droit. La valeur du
                conseil naît à l&apos;intersection des deux. C&apos;est pourquoi chaque collaboration
                commence par une écoute attentive de votre réalité avant toute analyse
                juridique. Pas de solutions génériques, pas de jargon inutile : des réponses
                claires, ancrées dans vos enjeux concrets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. COMPÉTENCES */}
      <section id="competences" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Une approche pluridisciplinaire.
              </h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65 md:text-right">
                Les disciplines clés du droit des affaires.
              </p>
            </div>
          </AnimatedSection>

          {/* Cards grid */}
          <AnimatedSection stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <AnimatedItem key={svc.title}>
                <Link
                  href={svc.href}
                  className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border-2 border-gold bg-navy p-12 transition-all duration-300 hover:bg-dark hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(7,19,123,0.22)]"
                >
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="mb-3 font-serif text-xl font-normal text-white">
                      {svc.title}
                    </h3>
                    <p className="font-sans text-[0.9375rem] leading-relaxed text-white/70">
                      {svc.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-8 flex items-center gap-2 font-serif text-[0.75rem] uppercase tracking-[0.16em] text-white/50 transition-all duration-300 group-hover:gap-4 group-hover:text-white">
                    En savoir plus
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4H13M13 4L10 1M13 4L10 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. DÉMARCHE — navy */}
      <section id="demarche" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Comment je travaille
            </h2>
          </AnimatedSection>

          <StepsSection steps={steps} />
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 5. POURQUOI */}
      <section id="pourquoi" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Pourquoi les dirigeants me font confiance.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="columns-1 gap-x-8 md:columns-2">
            {trustBlocks.map((block) => (
              <AnimatedItem key={block.title} className="break-inside-avoid">
                <div className="pb-10">
                  <AnimatedLine className="mb-5 w-full" />
                  <h3 className="mb-4 font-serif text-lg font-normal text-navy">
                    {block.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                    {block.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection
            className="mt-16 pt-12"
            delay={0.1}
          >
            <ContacterButton />
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 6. AVIS GOOGLE */}
      <GoogleReviews {...reviewsData} />

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 7. CONTACT */}
      <section id="contact" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/portrait02.png"
                  alt="Christian THALINGER, Avocat au Barreau de Strasbourg"
                  width={150}
                  height={150}
                  className="object-contain shrink-0"
                />
                <h2 className="max-w-md font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                  Contacter Maître THALINGER
                </h2>
              </div>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-navy/65">
                Comprendre vos enjeux sans engagement de votre part. Réponse sous 24h du lundi au vendredi, 9h – 18h.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact details */}
            <AnimatedSection delay={0.05}>
              <div className="space-y-8">
                <ContactItem
                  label="Téléphone"
                  href="tel:+33637331926"
                  value="+33 6 37 33 19 26"
                />
                <ContactItem
                  label="Email"
                  href="mailto:christian@thalinger-avocat.fr?subject=Prise%20de%20contact"
                  value="christian@thalinger-avocat.fr"
                />
                <ContactItem
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/christian-thalinger-565446216/"
                  value="linkedin.com/in/christian-thalinger"
                />
                <ContactItem
                  label="Adresse"
                  href="https://maps.google.com/maps?q=5+Avenue+de+la+Marseillaise+67000+Strasbourg"
                  value={"5 avenue de la Marseillaise\n67000 Strasbourg"}
                  multiline
                />
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.15}>
              <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-navy/10">
                <iframe
                  src="https://maps.google.com/maps?q=5+Avenue+de+la+Marseillaise%2C+67000+Strasbourg%2C+France&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "340px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet Christian THALINGER — Strasbourg"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Book a slot CTA */}
          <AnimatedSection className="mt-12" delay={0.1}>
            <div className="rounded-2xl border-2 border-gold/40 bg-navy/[0.03] p-8 md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <p className="mb-1 font-serif text-lg font-normal text-navy">
                  Premier échange en visio ou par téléphone
                </p>
                <p className="font-sans text-sm text-navy/55">
                  30 min · Gratuit · Sans engagement · Confirmation immédiate
                </p>
              </div>
              <Link
                href="/rdv"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97] shrink-0"
              >
                Réserver un créneau
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 5H15M15 5L11 1M15 5L11 9"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {/* Closing quote */}
          <AnimatedSection
            className="mt-20 pt-12 text-center"
            delay={0.1}
          >
            <blockquote className="mx-auto max-w-[560px] font-sans text-base leading-relaxed text-navy/65 md:text-[1.0625rem]">
              «&thinsp;Un dossier compris est déjà sécurisé.&thinsp;»
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

// ─── ContactItem ────────────────────────────────────────────────────────────────

function ContactItem({
  label,
  href,
  value,
  multiline = false,
}: {
  label: string;
  href: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-navy-muted">
        {label}
      </p>
      <a
        href={href}
        className="font-sans text-base text-navy inline-block transition-all duration-200 hover:text-gold hover:translate-x-1"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {multiline
          ? value.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))
          : value}
      </a>
    </div>
  );
}
