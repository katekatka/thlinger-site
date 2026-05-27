import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { FaqAccordion, type FaqGroup } from "@/components/FaqAccordion";

// â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const principes = [
  {
    title: "Forfait",
    text: "Pour les missions Ã  pÃ©rimÃ¨tre dÃ©fini : crÃ©ation de sociÃ©tÃ©, rÃ©daction de contrat, audit juridique ciblÃ©. Vous connaissez le prix avant de commencer.",
  },
  {
    title: "Taux horaire",
    text: "Pour les missions de conseil ou de contentieux dont l'Ã©tendue Ã©volue. Le taux est communiquÃ© dÃ¨s le dÃ©part, avec un suivi rÃ©gulier des heures engagÃ©es.",
  },
  {
    title: "RÃ©sultat",
    text: "Honoraires complÃ©mentaires correspondant Ã  un pourcentage des gains procurÃ©s ou des Ã©conomies faites grÃ¢ce Ã  l'action de l'avocat.",
  },
];

const faqGroups: FaqGroup[] = [
  {
    title: "Fixation et modalitÃ©s des honoraires",
    items: [
      {
        question: "Comment sont fixÃ©s les honoraires du cabinet ?",
        answer: (
          <p>
            Les honoraires sont fixÃ©s selon la nature du dossier, sa complexitÃ©, le temps
            consacrÃ© et les enjeux Ã©conomiques ou juridiques de l&apos;intervention. Avant toute
            mission, une convention d&apos;honoraires est Ã©tablie afin de prÃ©ciser le pÃ©rimÃ¨tre
            de l&apos;intervention, le mode de facturation et les conditions financiÃ¨res
            applicables. Sauf convention contraire, les honoraires sont payables selon un
            Ã©chÃ©ancier dÃ©fini Ã  l&apos;avance.
          </p>
        ),
      },
      {
        question: "Quels modes de facturation sont proposÃ©s ?",
        answer: (
          <>
            <p className="mb-5">
              Le cabinet intervient principalement selon quatre modes de facturation :
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-navy">Le forfait</span>
                {" "}â€” pour les missions Ã  pÃ©rimÃ¨tre dÃ©fini comme une crÃ©ation de sociÃ©tÃ©,
                une rÃ©daction de contrat ou un audit juridique ciblÃ©. Le client connaÃ®t
                prÃ©cisÃ©ment le coÃ»t de l&apos;intervention avant son commencement.
              </li>
              <li>
                <span className="font-semibold text-navy">Le taux horaire</span>
                {" "}â€” pour les missions de conseil ou de contentieux dont l&apos;Ã©tendue peut
                Ã©voluer. Le taux appliquÃ© est communiquÃ© dÃ¨s le dÃ©part, avec un suivi
                transparent et rÃ©gulier des diligences et du temps consacrÃ©.
              </li>
              <li>
                <span className="font-semibold text-navy">L&apos;honoraire de rÃ©sultat</span>
                {" "}â€” qui peut complÃ©ter un honoraire fixe lorsqu&apos;un gain obtenu ou une
                Ã©conomie rÃ©alisÃ©e justifie une rÃ©munÃ©ration complÃ©mentaire.
              </li>
              <li>
                <span className="font-semibold text-navy">L&apos;accompagnement rÃ©current</span>
                {" "}â€” pour certaines entreprises ayant besoin d&apos;un suivi juridique rÃ©gulier
                et d&apos;un interlocuteur identifiÃ© dans la durÃ©e. Les modalitÃ©s
                d&apos;intervention sont alors adaptÃ©es aux besoins opÃ©rationnels du dirigeant
                et de l&apos;entreprise.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Une convention d'honoraires est-elle obligatoire ?",
        answer: (
          <p>
            ConformÃ©ment aux rÃ¨gles de la profession d&apos;avocat, une convention
            d&apos;honoraires est systÃ©matiquement conclue avant toute intervention, sauf urgence
            ou aide juridictionnelle totale. Elle garantit une parfaite transparence sur les
            modalitÃ©s d&apos;accompagnement et de facturation.
          </p>
        ),
      },
      {
        question: "Les honoraires d'avocat sont-ils soumis Ã  la TVA ?",
        answer: (
          <p>
            Les honoraires d&apos;avocat sont en principe soumis Ã  la TVA au taux de 20&nbsp;% en
            France. Certaines situations particuliÃ¨res peuvent relever d&apos;un rÃ©gime spÃ©cifique,
            notamment dans le cadre de l&apos;aide juridictionnelle ou selon le rÃ©gime fiscal
            applicable au cabinet.
          </p>
        ),
      },
    ],
  },
  {
    title: "Prise en charge et aides",
    items: [
      {
        question: "Puis-je bÃ©nÃ©ficier d'une protection juridique ?",
        answer: (
          <>
            <p className="mb-4">
              Le cabinet vÃ©rifie systÃ©matiquement si le client bÃ©nÃ©ficie d&apos;une
              protection juridique susceptible de prendre en charge tout ou partie des
              honoraires d&apos;avocat. Cette garantie peut Ãªtre incluse dans un contrat
              spÃ©cifique ou dans certains contrats d&apos;assurance courants (habitation,
              automobile, responsabilitÃ© civile, etc.).
            </p>
            <p>
              Le client reste toujours libre du choix de son avocat : l&apos;assureur ne peut
              imposer un cabinet ou un professionnel.
            </p>
          </>
        ),
      },
      {
        question: "Acceptez-vous l'aide juridictionnelle ?",
        answer: (
          <p>
            Le cabinet peut intervenir au titre de l&apos;aide juridictionnelle selon la nature
            du dossier et les conditions d&apos;Ã©ligibilitÃ© du client. Lorsque l&apos;aide
            juridictionnelle est partielle, une convention d&apos;honoraires complÃ©mentaire est
            conclue afin de prÃ©ciser les modalitÃ©s de facturation restantes.
          </p>
        ),
      },
    ],
  },
  {
    title: "Organisation de la relation client",
    items: [
      {
        question: "Le premier rendez-vous est-il facturÃ© ?",
        answer: (
          <p>
            Le premier rendez-vous, lorsqu&apos;il n&apos;est pas suivi d&apos;une consultation
            Ã©crite ou d&apos;une procÃ©dure, n&apos;est pas facturÃ©. Ce premier Ã©change permet de
            comprendre la situation, d&apos;identifier les enjeux du dossier et d&apos;orienter
            le client vers les solutions les plus adaptÃ©es.
          </p>
        ),
      },
      {
        question: "Les entreprises peuvent-elles bÃ©nÃ©ficier d'un accompagnement rÃ©gulier ?",
        answer: (
          <p>
            Le cabinet accompagne aussi bien les particuliers que les entreprises dans
            le cadre de missions ponctuelles ou d&apos;un suivi juridique rÃ©current. Certaines
            entreprises choisissent un accompagnement rÃ©gulier afin de sÃ©curiser leurs
            dÃ©cisions juridiques, anticiper les risques et bÃ©nÃ©ficier d&apos;un interlocuteur
            unique connaissant dÃ©jÃ  leur activitÃ© et leurs enjeux.
          </p>
        ),
      },
      {
        question: "Comment obtenir une estimation des honoraires ?",
        answer: (
          <p>
            AprÃ¨s un premier Ã©change permettant d&apos;analyser la situation et les objectifs
            du client, le cabinet propose un mode d&apos;intervention adaptÃ© ainsi qu&apos;une
            visibilitÃ© claire sur le pÃ©rimÃ¨tre de la mission, les modalitÃ©s de facturation
            et les conditions financiÃ¨res applicables.
          </p>
        ),
      },
    ],
  },
];

// â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function HonorairesPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Honoraires
            </p>
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              La clartÃ© commence<br className="hidden md:block" /> par le prix.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Les honoraires sont librement fixÃ©s entre les parties en fonction de la complexitÃ© du dossier.
              Cette question est abordÃ©e en toute transparence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PRINCIPES â€” navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Un cadre clair avant chaque mission.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-[1.85] text-white/60 md:text-[1.0625rem]">
              Avant de commencer, nous dÃ©finissons ensemble le pÃ©rimÃ¨tre de l&apos;intervention,
              le mode de facturation, et une estimation du coÃ»t.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
            {principes.map((p) => (
              <AnimatedItem key={p.title}>
                <div className="flex h-full flex-col rounded-[2.5rem] border-2 border-gold bg-white p-8 md:p-10">
                  <h3 className="mb-4 font-serif text-lg font-normal text-navy">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] leading-[1.9] text-navy/65">
                    {p.text}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Questions frÃ©quentes
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl">
            <FaqAccordion groups={faqGroups} />
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
                Premier Ã©change
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Le premier contact est sans engagement de votre part et a pour objectif de comprendre
                votre situation et d&apos;Ã©valuer si le cabinet peut vous accompagner efficacement. Les modalitÃ©s
                sont prÃ©cisÃ©es lors de la prise de rendez-vous.
              </p>
              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold bg-navy px-8 py-4 font-serif text-sm uppercase tracking-[0.14em] text-white hover:text-white transition-all duration-300 hover:bg-dark hover:gap-5 active:scale-[0.97]"
                style={{ color: "#ffffff" }}
              >
                Parlons de votre situation
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

