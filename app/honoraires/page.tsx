import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { FaqAccordion, type FaqGroup } from "@/components/FaqAccordion";

// ─── Data ──────────────────────────────────────────────────────────────────────

const principes = [
  {
    title: "Forfait",
    text: "Pour les missions à périmètre défini : création de société, rédaction de contrat, audit juridique ciblé. Vous connaissez le prix avant de commencer.",
  },
  {
    title: "Taux horaire",
    text: "Pour les missions de conseil ou de contentieux dont l'étendue évolue. Le taux est communiqué dès le départ, avec un suivi régulier des heures engagées.",
  },
  {
    title: "Résultat",
    text: "Honoraires complémentaires correspondant à un pourcentage des gains procurés ou des économies faites grâce à l'action de l'avocat.",
  },
];

const faqGroups: FaqGroup[] = [
  {
    title: "Fixation et modalités des honoraires",
    items: [
      {
        question: "Comment sont fixés les honoraires du cabinet ?",
        answer: (
          <p>
            Les honoraires sont fixés selon la nature du dossier, sa complexité, le temps
            consacré et les enjeux économiques ou juridiques de l&apos;intervention. Avant toute
            mission, une convention d&apos;honoraires est établie afin de préciser le périmètre
            de l&apos;intervention, le mode de facturation et les conditions financières
            applicables. Sauf convention contraire, les honoraires sont payables selon un
            échéancier défini à l&apos;avance.
          </p>
        ),
      },
      {
        question: "Quels modes de facturation sont proposés ?",
        answer: (
          <>
            <p className="mb-5">
              Le cabinet intervient principalement selon quatre modes de facturation :
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-navy">Le forfait</span>
                {" "}— pour les missions à périmètre défini comme une création de société,
                une rédaction de contrat ou un audit juridique ciblé. Le client connaît
                précisément le coût de l&apos;intervention avant son commencement.
              </li>
              <li>
                <span className="font-semibold text-navy">Le taux horaire</span>
                {" "}— pour les missions de conseil ou de contentieux dont l&apos;étendue peut
                évoluer. Le taux appliqué est communiqué dès le départ, avec un suivi
                transparent et régulier des diligences et du temps consacré.
              </li>
              <li>
                <span className="font-semibold text-navy">L&apos;honoraire de résultat</span>
                {" "}— qui peut compléter un honoraire fixe lorsqu&apos;un gain obtenu ou une
                économie réalisée justifie une rémunération complémentaire.
              </li>
              <li>
                <span className="font-semibold text-navy">L&apos;accompagnement récurrent</span>
                {" "}— pour certaines entreprises ayant besoin d&apos;un suivi juridique régulier
                et d&apos;un interlocuteur identifié dans la durée. Les modalités
                d&apos;intervention sont alors adaptées aux besoins opérationnels du dirigeant
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
            Conformément aux règles de la profession d&apos;avocat, une convention
            d&apos;honoraires est systématiquement conclue avant toute intervention, sauf urgence
            ou aide juridictionnelle totale. Elle garantit une parfaite transparence sur les
            modalités d&apos;accompagnement et de facturation.
          </p>
        ),
      },
      {
        question: "Les honoraires d'avocat sont-ils soumis à la TVA ?",
        answer: (
          <p>
            Les honoraires d&apos;avocat sont en principe soumis à la TVA au taux de 20&nbsp;% en
            France. Certaines situations particulières peuvent relever d&apos;un régime spécifique,
            notamment dans le cadre de l&apos;aide juridictionnelle ou selon le régime fiscal
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
        question: "Puis-je bénéficier d'une protection juridique ?",
        answer: (
          <>
            <p className="mb-4">
              Le cabinet vérifie systématiquement si le client bénéficie d&apos;une
              protection juridique susceptible de prendre en charge tout ou partie des
              honoraires d&apos;avocat. Cette garantie peut être incluse dans un contrat
              spécifique ou dans certains contrats d&apos;assurance courants (habitation,
              automobile, responsabilité civile, etc.).
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
            du dossier et les conditions d&apos;éligibilité du client. Lorsque l&apos;aide
            juridictionnelle est partielle, une convention d&apos;honoraires complémentaire est
            conclue afin de préciser les modalités de facturation restantes.
          </p>
        ),
      },
    ],
  },
  {
    title: "Organisation de la relation client",
    items: [
      {
        question: "La première consultation est-elle facturée ?",
        answer: (
          <p>
            La consultation unique, lorsqu&apos;elle n&apos;est pas suivie d&apos;une consultation
            écrite ou d&apos;une procédure, n&apos;est pas facturée. Ce premier échange permet de
            comprendre la situation, d&apos;identifier les enjeux du dossier et d&apos;orienter
            le client vers les solutions les plus adaptées.
          </p>
        ),
      },
      {
        question: "Les entreprises peuvent-elles bénéficier d'un accompagnement régulier ?",
        answer: (
          <p>
            Le cabinet accompagne aussi bien les particuliers que les entreprises dans
            le cadre de missions ponctuelles ou d&apos;un suivi juridique récurrent. Certaines
            entreprises choisissent un accompagnement régulier afin de sécuriser leurs
            décisions juridiques, anticiper les risques et bénéficier d&apos;un interlocuteur
            unique connaissant déjà leur activité et leurs enjeux.
          </p>
        ),
      },
      {
        question: "Comment obtenir une estimation des honoraires ?",
        answer: (
          <p>
            Après un premier échange permettant d&apos;analyser la situation et les objectifs
            du client, le cabinet propose un mode d&apos;intervention adapté ainsi qu&apos;une
            visibilité claire sur le périmètre de la mission, les modalités de facturation
            et les conditions financières applicables.
          </p>
        ),
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

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
            <h1 className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-tight text-navy">
              La clarté commence<br className="hidden md:block" /> par le prix.
            </h1>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Les honoraires sont librement fixés entre les parties en fonction de la complexité du dossier.
              Cette question est abordée dès le premier rendez-vous, en toute transparence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 2. PRINCIPES — navy */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Un cadre clair avant chaque mission.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-[1.85] text-white/60 md:text-[1.0625rem]">
              Avant de commencer, nous définissons ensemble le périmètre de l&apos;intervention,
              le mode de facturation, et une estimation du coût.
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
              Questions fréquentes
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
                Premier échange
              </h2>
              <p className="mb-12 font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Le premier contact est sans engagement de votre part et a pour objectif de comprendre
                votre situation et d&apos;évaluer si je peux vous aider efficacement. Les modalités
                sont précisées lors de la prise de rendez-vous.
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
