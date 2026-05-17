import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Création de sociétés",
    items: [
      "Création de sociétés civiles et commerciales",
      "SARL, SAS et SCI",
      "Choix de la structure juridique",
      "Rédaction des statuts",
    ],
  },
  {
    title: "Modifications statutaires",
    items: [
      "Changement de siège social",
      "Modification de l'objet social",
      "Augmentation et réduction de capital",
      "Mise à jour des statuts",
    ],
  },
  {
    title: "Pactes d'associés",
    items: [
      "Rédaction de pactes d'associés",
      "Gouvernance et répartition des pouvoirs",
      "Clauses de sortie et de préemption",
      "Protection des associés minoritaires",
    ],
  },
  {
    title: "Assemblées générales",
    items: [
      "Organisation des assemblées générales",
      "Approbation des comptes",
      "Secrétariat juridique annuel",
      "Procès-verbaux et formalités",
    ],
  },
  {
    title: "Cession de parts sociales",
    items: [
      "Audit et sécurisation des opérations",
      "Garantie d'actif et de passif",
      "Accompagnement dans les négociations",
    ],
  },
  {
    title: "Contentieux sociétaires",
    items: [
      "Gestion des conflits entre associés",
      "Blocages de gouvernance",
    ],
  },
  {
    title: "Transformation de sociétés",
    items: [
      "Transformation de forme sociale",
      "Passage de SARL à SAS",
      "Réorganisation juridique de l'entreprise",
      "Adaptation de la gouvernance",
    ],
  },
  {
    title: "Transmission et restructuration patrimoniale",
    items: [
      "Transmission d'entreprises familiales",
      "Pacte Dutreil",
      "Anticipation patrimoniale du dirigeant",
      "Organisation de la succession entrepreneuriale",
      "Réorganisation capitalistique et gouvernance familiale",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitDesSocietesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit des Sociétés
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Structurer ce qui détermine le fonctionnement de votre entreprise.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Statuts, pacte d&apos;associés, gouvernance : ces documents sont rarement revisités
              après leur rédaction. Pourtant, ce sont eux qui déterminent qui décide, qui contrôle
              et comment les situations de blocage se résolvent. Le cabinet analyse le cadre dans
              lequel vous souhaitez entreprendre : forme sociale, répartition des pouvoirs, droits
              des associés, modalités de prise de décision. L&apos;objectif est de construire une
              architecture juridique réellement adaptée à votre activité et à vos objectifs. De la
              création de société aux évolutions futures, comme l&apos;arrivée de nouveaux associés,
              l&apos;augmentation d&apos;activité ou une acquisition, chaque structure est conçue
              pour accompagner votre développement, pas seulement pour remplir une obligation légale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXTE — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Quand la relation entre associés devient un obstacle.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Abus de majorité, non-respect d&apos;un pacte d&apos;associés, situations de
                blocage : les conflits entre associés peuvent paralyser une entreprise et mettre
                en péril ce que vous avez construit. Le cabinet intervient pour analyser la
                situation, identifier les leviers juridiques à votre disposition et protéger vos
                intérêts. Que la solution passe par la négociation ou par le contentieux,
                l&apos;objectif reste le même : débloquer la situation et préserver la continuité
                de votre activité.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. INTERVENTIONS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Interventions
            </h2>
          </AnimatedSection>

          <InterventionCategoryGrid categories={interventions} />
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
              style={{ color: "#ffffff" }}
            >
              Discutons de vos enjeux en droit des sociétés
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
