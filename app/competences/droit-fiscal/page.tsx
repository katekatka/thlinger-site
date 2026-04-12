import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AnimatedLine } from "@/components/AnimatedLine";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  "Structuration fiscale",
  "Défense en contrôle fiscal",
  "Fiscalité internationale",
  "TVA",
  "Fiscalité immobilière",
  "Rémunération du dirigeant",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitFiscalPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-[#07137B]/45">
              Droit Fiscal
            </p>
            <h1 className="mb-8 font-serif text-[2.5rem] font-normal leading-tight text-[#07137B] md:text-[3.75rem]">
              Sécuriser et structurer vos<br className="hidden md:block" /> décisions fiscales.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-[#07137B]/60 md:text-[1.0625rem]">
              J&apos;intègre la stratégie fiscale à chaque décision de l&apos;entreprise :
              choix de structure, distribution de bénéfices, expansion internationale.
              Quand le contrôle fiscal arrive, la préparation est déjà en place.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* 2. TEXTE — navy */}
      <section className="bg-[#07137B] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-white md:text-[2.25rem]">
                Optimiser dans les règles, anticiper le contrôle fiscal.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                La fiscalité, c&apos;est le domaine où une erreur silencieuse peut coûter
                très cher. Vous prenez des décisions tous les jours : structure,
                rémunération, investissement, et chacune a des conséquences fiscales.
                Le problème, c&apos;est que la frontière entre une optimisation intelligente
                et un risque de redressement n&apos;est pas toujours claire. Un contrôle
                fiscal peut bloquer votre entreprise pendant des mois. Une déclaration
                incomplète peut déclencher des pénalités que vous n&apos;aviez pas vues
                venir. Et dès qu&apos;il y a une dimension internationale, tout se
                complique encore.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* 3. INTERVENTIONS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[2rem] font-normal leading-tight text-[#07137B] md:text-[2.75rem]">
              Interventions
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {interventions.map((item) => (
              <AnimatedItem key={item}>
                <div>
                  <AnimatedLine className="mb-5 w-full" />
                  <p className="font-sans text-sm leading-[1.9] text-[#07137B]/60">{item}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* 4. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#D4AF37] bg-[#07137B] px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-[#020628] hover:gap-5"
              style={{ color: "#ffffff" }}
            >
              Discutons de vos enjeux fiscaux
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
