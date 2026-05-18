import Image from "next/image";
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

      {/* 6. CONTACT */}
      <section id="contact" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/portrait02.png"
                  alt="Christian Thalinger, Avocat au Barreau de Strasbourg"
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
