import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Financement et relations bancaires",
    items: [
      "Octroi et rupture de crédits",
      "Conditions et négociation des prêts",
      "Accompagnement des difficultés de financement",
      "Restructuration de dette et négociation bancaire",
    ],
  },
  {
    title: "Fraudes et responsabilité bancaire",
    items: [
      "Fraude bancaire et fraude au président",
      "Obligation de vigilance du banquier",
      "Sécurisation des opérations financières",
      "Responsabilité des établissements bancaires",
    ],
  },
  {
    title: "Cautionnement et garanties",
    items: [
      "Caution solidaire",
      "Portée et validité des engagements",
      "Obligation de conseil et d'information",
      "Contestation des garanties personnelles",
    ],
  },
  {
    title: "Intermédiation financière",
    items: [
      "Prestataires de services d'investissement",
      "Intermédiaires en opérations de banque et services de paiement",
      "Courtiers en financement",
      "Responsabilité et obligations professionnelles",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitBancaireFinancierPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit Bancaire &amp; Financier
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              Votre financement vous engage. Vérifiez à quoi exactement.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Conditions de prêt, cautions solidaires, garanties personnelles : ces engagements
              sont souvent signés dans l&apos;urgence d&apos;un besoin de financement, sans mesurer leur
              portée réelle. Or une caution mal encadrée peut engager votre patrimoine bien
              au-delà du montant initial. Une rupture de crédit décidée unilatéralement par la
              banque peut asphyxier une activité du jour au lendemain. Le cabinet intervient pour
              analyser vos engagements financiers, négocier des conditions équilibrées, et
              contester ceux qui dépassent les obligations légales d&apos;information et de conseil.
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
                La banque a des obligations envers vous. Pas seulement l&apos;inverse.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Obligation de vigilance, devoir de conseil, responsabilité en cas de soutien
                abusif ou de rupture brutale de concours : le droit bancaire protège les
                emprunteurs et les cautions autant qu&apos;il les contraint. Pourtant, peu de clients
                connaissent les leviers dont ils disposent face à un établissement financier.
                Fraude au président, opérations non autorisées, manquements des intermédiaires
                financiers : ces situations engagent la responsabilité de la banque, pas la
                vôtre. Le cabinet vous aide à identifier ces leviers et à les faire valoir, en
                négociation comme en contentieux.
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
              Discutons de vos enjeux bancaires et financiers
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
