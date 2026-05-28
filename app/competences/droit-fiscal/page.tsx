import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionGrid } from "@/components/InterventionGrid";

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  "Structuration fiscale",
  "D�fense en contr�le fiscal",
  "Fiscalit� internationale",
  "TVA",
  "Fiscalit� immobili�re",
  "R�mun�ration du dirigeant",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DroitFiscalPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Droit Fiscal
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              S�curiser et structurer vos<br className="hidden md:block" /> d�cisions fiscales.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Le cabinet int�gre la strat�gie fiscale � chaque d�cision de l&apos;entreprise :
              choix de structure, distribution de b�n�fices, expansion internationale.
              Quand le contr�le fiscal arrive, la pr�paration est d�j� en place.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. TEXTE � navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-white">
                Optimiser dans les r�gles, anticiper le contr�le fiscal.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                La fiscalit�, c&apos;est le domaine o� une erreur silencieuse peut co�ter
                tr�s cher. Vous prenez des d�cisions tous les jours : structure,
                r�mun�ration, investissement, et chacune a des cons�quences fiscales.
                Le probl�me, c&apos;est que la fronti�re entre une optimisation intelligente
                et un risque de redressement n&apos;est pas toujours claire. Un contr�le
                fiscal peut bloquer votre entreprise pendant des mois. Une d�claration
                incompl�te peut d�clencher des p�nalit�s que vous n&apos;aviez pas vues
                venir. Et d�s qu&apos;il y a une dimension internationale, tout se
                complique encore.
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

          <InterventionGrid items={interventions} />
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

