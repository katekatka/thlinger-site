import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";
import { StepsSection } from "@/components/StepsSection";

// ─── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Droit des Sociétés",
    description:
      "Structurer, gouverner et protéger votre entreprise de la création à la transmission.",
    href: "/competences/droit-des-societes",
  },
  {
    title: "Droit Commercial",
    description:
      "Sécuriser vos contrats, vos partenariats et vos relations commerciales.",
    href: "/competences/droit-commercial",
  },
  {
    title: "Droit du Travail",
    description:
      "Recruter, gérer et restructurer votre équipe sur des bases juridiques solides.",
    href: "/competences/droit-du-travail",
  },
  {
    title: "Conseil Transfrontalier",
    description:
      "Pour les entreprises des deux côtés du Rhin : un avocat qui connaît les réalités françaises de l'intérieur.",
    href: "/competences/conseil-transfrontalier",
  },
  {
    title: "Droit Immobilier",
    description:
      "Clarifier et encadrer vos opérations immobilières, pour avancer sans incertitude.",
    href: "/competences/droit-immobilier",
  },
  {
    title: "Droit Fiscal",
    description:
      "Transformer la fiscalité en levier d'optimisation, au service de votre croissance.",
    href: "/competences/droit-fiscal",
  },
];

const steps = [
  {
    title: "Compréhension du contexte",
    description:
      "Je commence par vos enjeux, pas par le Code civil. Ce que vous construisez, ce qui vous préoccupe, ce qui bloque.",
  },
  {
    title: "Identification des risques",
    description:
      "Ce qui menace votre activité, dit explicitement. Pas d'euphémismes, pas de zones grises confortables.",
  },
  {
    title: "Structuration des options",
    description:
      "Des choix clairs, avec leurs implications réelles. Chaque option présentée en termes de conséquences business.",
  },
  {
    title: "Décision conjointe",
    description:
      "Je ne décide pas à votre place. Je vous rends la certitude de décider en toute connaissance de cause.",
  },
];

const trustBlocks = [
  {
    title: "Un accès direct.",
    text: "Quand vous appelez, c'est moi qui réponds. Pas un collaborateur différent à chaque fois. La personne qui comprend votre entreprise aujourd'hui est celle qui vous conseille demain.",
  },
  {
    title: "Le langage des affaires.",
    text: "Je parle P&L, croissance, timing et pression concurrentielle, pas uniquement articles de loi. Le conseil est formulé en résultats business, pas en abstractions juridiques.",
  },
  {
    title: "La dimension humaine.",
    text: "Les situations juridiques complexes portent un poids émotionnel réel. Je comprends cette dimension et je conseille avec précision et empathie.",
  },
];

// ─── Shared components ───────────────────────────────────────────────────────

function ContacterButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
      style={{ color: "#ffffff" }}
    >
      Contacter
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

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PROBLÈME */}
      <section id="probleme" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
                Le juridique ne devrait pas ajouter&nbsp;à la confusion.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/65 md:text-[1.0625rem]">
                Un avocat qui vous répond directement quand vous appelez.
                Quelqu&apos;un qui vous connaît vraiment, sans vous réduire à un
                numéro de dossier. Un interlocuteur impliqué dans la durée, qui
                comprend votre entreprise et vos priorités, pour que vous
                puissiez avancer avec certitude.
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
                Droit des affaires. Une approche pluridisciplinaire.
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

          <AnimatedSection stagger className="grid gap-8 md:grid-cols-3">
            {trustBlocks.map((block) => (
              <AnimatedItem key={block.title}>
                <div>
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

      {/* 6. CONTACT */}
      <section id="contact" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-md font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Contacter Me. Christian Thalinger
              </h2>
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
                  href="mailto:cthalinger@outlook.fr?subject=Prise%20de%20contact"
                  value="cthalinger@outlook.fr"
                />
                <ContactItem
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/christian-thalinger-565446216/"
                  value="linkedin.com/in/christian-thalinger"
                />
                <ContactItem
                  label="Adresse"
                  href="https://maps.google.com/maps?q=20+Rue+du+Foss%C3%A9+des+Tanneurs+67000+Strasbourg"
                  value={"20 rue du Fossé des Tanneurs\n67000 Strasbourg"}
                  multiline
                />
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.15}>
              <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-navy/10">
                <iframe
                  src="https://maps.google.com/maps?q=20+Rue+du+Foss%C3%A9+des+Tanneurs%2C+67000+Strasbourg%2C+France&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "340px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet Christian Thalinger — Strasbourg"
                />
              </div>
            </AnimatedSection>
          </div>

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
