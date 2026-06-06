import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InterventionCategoryGrid } from "@/components/InterventionCategoryGrid";
import { ConsultationSignal } from "@/components/ConsultationSignal";

export const metadata: Metadata = {
  title: "Avocat droit de la construction à Strasbourg | Cabinet THALINGER",
  description: "Avocat en droit immobilier et de la construction à Strasbourg. Responsabilité des constructeurs, CCMI, malfaçons, baux, contentieux technique. Cabinet THALINGER.",
  alternates: {
    canonical: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
    languages: {
      fr: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
      en: "https://www.thalinger-avocat.fr/en/competences/avocat-droit-immobilier-construction-strasbourg",
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const interventions = [
  {
    title: "Construction et responsabilité des constructeurs",
    items: [
      "Responsabilité des constructeurs",
      "Garanties légales et décennales",
      "Désordres et malfaçons",
      "Litiges liés aux travaux et chantiers",
    ],
  },
  {
    title: "Expertises et contentieux techniques",
    items: [
      "Expertises amiables et judiciaires",
      "Évaluation des préjudices",
      "Assistance lors des opérations d'expertise",
      "Défense des intérêts en phase contentieuse",
    ],
  },
  {
    title: "Baux et relations locatives",
    items: [
      "Rédaction de baux",
      "Négociation des relations locatives",
      "Sécurisation des engagements contractuels",
      "Gestion des obligations du bailleur et du locataire",
    ],
  },
  {
    title: "Litiges locatifs et expulsion",
    items: [
      "Impayés et inexécution contractuelle",
      "Résiliation du bail",
      "Procédures d'expulsion",
      "Défense des propriétaires",
    ],
  },
  {
    title: "Transactions immobilières",
    items: [
      "Vente en l'état futur d'achèvement (VEFA)",
      "Acquisition et vente d'immeubles",
      "Sécurisation des opérations immobilières",
      "Garanties et obligations du vendeur",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que faire en cas de malfaçons après réception ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Identifiez d'abord la garantie applicable : parfait achèvement (un an), bon fonctionnement (deux ans) ou décennale pour les désordres compromettant la solidité ou rendant l'ouvrage impropre à sa destination. Mettez le constructeur en demeure par écrit et déclarez le sinistre à l'assurance dommages-ouvrage, qui préfinance les réparations sans attendre la recherche de responsabilité. La voie amiable est souvent privilégiée, mais une expertise s'impose dès que le désordre est sérieux ou contesté."
      }
    },
    {
      "@type": "Question",
      "name": "Comment gérer un litige de bail commercial ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commencez par analyser le bail et les obligations de chaque partie : loyers, charges, travaux, état des lieux et clauses sensibles comme la clause résolutoire. La plupart des litiges se règlent par négociation ou mise en demeure, plus rapides et moins coûteuses qu'un contentieux. Mais certains délais sont impératifs - un mois pour répondre à un commandement de payer, deux ans pour contester un congé - et déterminent souvent l'issue. Le bon réflexe est de qualifier la situation avant d'agir."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il faire encadrer un projet immobilier par un avocat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cadrer les contrats et les responsabilités en amont - VEFA, marché de travaux, garanties, assurances, montage de l'opération - limite fortement les risques de litige pendant et après le chantier. C'est aussi le moment où l'on vérifie les engagements de chaque intervenant et où l'on répartit clairement les risques. Une clause précise coûte toujours moins cher qu'un contentieux. L'intervention la plus utile est préventive, pas curative."
      }
    },
    {
      "@type": "Question",
      "name": "Que faire face à des loyers impayés en bail commercial ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La voie la plus efficace passe par la clause résolutoire du bail. Le bailleur fait délivrer, par commissaire de justice, un commandement de payer qui ouvre au locataire un délai d'un mois pour régler l'intégralité des sommes dues - un paiement partiel ne suffit pas, et le délai ne peut être réduit. Si rien n'est réglé dans le mois, le bailleur saisit le juge pour faire constater la résiliation et engager l'expulsion. Les loyers impayés se réclament dans la limite de cinq ans."
      }
    },
    {
      "@type": "Question",
      "name": "Comment obtenir une indemnité d'éviction en cas de non-renouvellement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lorsque le bailleur refuse de renouveler le bail, il doit en principe verser une indemnité d'éviction égale au préjudice subi (article L. 145-14 du Code de commerce) : valeur du fonds de commerce, frais de déménagement, de réinstallation et de mutation. Le locataire doit remplir les conditions du droit au renouvellement et, si aucune indemnité ne lui est proposée, saisir le tribunal dans un délai de deux ans - au-delà, le droit est perdu. Jusqu'au paiement, il peut rester dans les lieux. L'enjeu principal est souvent la fixation du montant."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on contester la clause résolutoire d'un bail commercial ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Recevoir un commandement de payer ne rend pas la résiliation définitive. Le locataire peut régulariser dans le mois, demander des délais de paiement au juge (article L. 145-41 du Code de commerce, combiné au pouvoir général de l'article 1343-5 du Code civil), contester un commandement irrégulier, ou invoquer une exception d'inexécution si le bailleur a lui-même manqué à ses obligations - par exemple des locaux rendus impropres à leur usage. La Cour de cassation a confirmé que ce dernier moyen reste recevable même sans demande de délais dans le mois (Cass. 3e civ., 5 mars 2026, n° 24-15.820). La réaction doit être rapide."
      }
    },
    {
      "@type": "Question",
      "name": "Le livre foncier d'Alsace-Moselle change-t-il quelque chose à mon achat immobilier ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. En Alsace et en Moselle, votre droit de propriété ne devient opposable aux tiers qu'une fois inscrit au livre foncier, registre tenu par un juge. La signature chez le notaire vous lie au vendeur, mais c'est l'inscription qui rend votre position incontestable face à une banque ou à un autre acquéreur. Ce délai doit être anticipé dans le calendrier de l'opération."
      }
    },
    {
      "@type": "Question",
      "name": "J'hérite d'un bien immobilier en Alsace : ai-je une démarche particulière à faire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. L'héritier doit faire inscrire son droit de propriété au livre foncier, sauf si un acte est établi dans les dix mois du décès. Une succession non mise à jour pendant plusieurs générations crée des situations très difficiles à débloquer. Régler cette inscription à temps évite un blocage coûteux par la suite."
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet propose-t-il des consultations en visioconférence pour les litiges immobiliers et de construction ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Pour un litige de malfaçons, un bail commercial ou un projet immobilier, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Cette consultation à distance est accessible depuis toute la France, sans déplacement à Strasbourg. La réservation s'effectue directement en ligne."
      }
    }
  ]
} as const;

const caseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Exemples d'intervention en droit immobilier et de la construction",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Malfaçons après livraison",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg#malfacons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Litige entre bailleur et locataire commercial",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg#bail-commercial"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sécurisation d'un projet immobilier",
      "url": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg#projet-immobilier"
    }
  ]
} as const;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thalinger-avocat.fr/" },
    { "@type": "ListItem", position: 2, name: "Compétences", item: "https://www.thalinger-avocat.fr/#competences" },
    { "@type": "ListItem", position: 3, name: "Droit immobilier et construction", item: "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg" },
  ],
} as const;

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
  isPartOf: { "@id": "https://www.thalinger-avocat.fr/#website" },
  inLanguage: "fr",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["#faq"] },
} as const;

export default function DroitImmobilierPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

            {/* 1. HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <h1 className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Avocat en droit immobilier et de la construction à Strasbourg
            </h1>
            <p className="mb-8 font-serif text-[clamp(2.25rem,5vw,3.6rem)] font-normal leading-tight text-navy">
              Construire, c&apos;est aussi construire un cadre juridique.
            </p>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
              Malfaçons, désordres, garanties non mobilisées : en matière de construction, les
              litiges se révèlent souvent après la réception des travaux, quand les délais pour
              agir sont déjà engagés. Le cabinet intervient pour faire valoir la responsabilité
              des constructeurs, activer les garanties légales et décennales, et vous assister
              lors des expertises amiables ou judiciaires. Que vous soyez maître d&apos;ouvrage
              ou professionnel du bâtiment, chaque étape du chantier crée des obligations
              qu&apos;il vaut mieux anticiper que découvrir en contentieux.
            </p>
            <ConsultationSignal />
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
                Un bail mal négocié se paie pendant toute sa durée.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-white/75 md:text-[1.0625rem]">
                Les clauses de bail signées aujourd&apos;hui déterminent vos droits et vos
                contraintes pour des années. Le cabinet sécurise la rédaction de vos baux,
                négocie les conditions locatives et veille à l&apos;équilibre des obligations
                entre bailleur et locataire. En cas d&apos;impayés, d&apos;inexécution ou de
                litige sur la résiliation, le cabinet assure votre défense et conduit les
                procédures nécessaires à la protection de vos intérêts.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 3. ALSACE-MOSELLE */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="max-w-2xl space-y-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
                Droit local alsacien-mosellan
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-tight text-navy">
                Une particularité alsacienne-mosellane à ne pas négliger.
              </h2>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                En Alsace et en Moselle, une opération immobilière ne se joue pas tout à fait
                comme dans le reste de la France. Hérité de l&apos;histoire locale et maintenu
                par la{" "}
                <a
                  href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069443/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/85 hover:text-gold transition-colors duration-200"
                >
                  loi du 1<sup>er</sup> juin 1924
                </a>
                , le{" "}
                <a
                  href="https://www.livrefoncier.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/85 hover:text-gold transition-colors duration-200"
                >
                  livre foncier
                </a>{" "}
                remplace le service de publicité foncière classique. Il est tenu par un
                magistrat, le juge du livre foncier, ce qui lui donne une fiabilité
                particulière.
              </p>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Concrètement, entre vous et le vendeur, l&apos;accord vous lie dès la
                signature. Mais face aux tiers (une banque, un créancier, un autre acquéreur),
                votre droit ne devient solide qu&apos;une fois{" "}
                <a
                  href="https://www.livrefoncier.fr/fr/le-livre-foncier-et-la-loi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/85 hover:text-gold transition-colors duration-200"
                >
                  inscrit au livre foncier
                </a>
                . C&apos;est l&apos;inscription, et non la date de signature, qui fait foi.
                Cette règle a des conséquences directes sur le calendrier d&apos;une vente,
                sur l&apos;efficacité d&apos;une garantie hypothécaire et sur les successions
                comportant un bien immobilier en Alsace ou en Moselle.
              </p>
              <p className="font-sans text-base leading-[1.85] text-navy/65 md:text-[1.0625rem]">
                Le cabinet intègre cette spécificité dès l&apos;analyse de votre opération,
                pour sécuriser le moment où votre droit devient incontestable et éviter les
                retards ou les mauvaises surprises au pire moment.
              </p>
              <p className="font-sans text-[0.8125rem] leading-relaxed text-navy/40">
                Références :{" "}
                <a href="https://www.rapport-congresdesnotaires.fr/2021-rapport-du-117e-congres/lexception-du-livre-foncier-dalsace-moselle" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">117<sup>e</sup> Congrès des notaires</a>
                {" · "}
                <a href="https://www.senat.fr/rap/l01-109/l01-1092.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">Rapport du Sénat</a>
                {" · "}
                <a href="https://www.larcier-intersentia.com/fr/comprendre-livre-foncier-alsace-moselle-pratiquer-9782879988443.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold">F. Hubé, Comprendre le livre foncier d&apos;Alsace-Moselle, Larcier 2023</a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* 4. INTERVENTIONS */}
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

      {/* EXEMPLES D&apos;INTERVENTION */}
      <section id="cas-concrets" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-4">
            <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              Exemples d&apos;intervention en droit immobilier et de la construction
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              Malfaçons, baux commerciaux, projets immobiliers : la construction et l&apos;immobilier engagent des responsabilités multiples sur la durée. Les exemples suivants illustrent comment elles se cadrent et se défendent.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">

            <details id="malfacons" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Malfaçons après livraison</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un propriétaire constate des désordres structurels plusieurs mois après la réception d&apos;un chantier. Le dialogue avec le constructeur s&apos;interrompt.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Mise en demeure, analyse des garanties légales applicables, mobilisation de l&apos;assurance dommages-ouvrage, négociation directe avec les intervenants concernés.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Faire valoir les garanties dont dispose le maître d&apos;ouvrage et rechercher une indemnisation, en privilégiant si possible une issue amiable.</dd>
                </div>
              </dl>
            </details>

            <details id="bail-commercial" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Litige entre bailleur et locataire commercial</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un désaccord oppose un bailleur et son locataire commercial (loyer, charges, état des lieux, renouvellement). La relation se tend.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Analyse du bail et des obligations de chacun, identification des leviers, négociation ou action selon l&apos;intérêt du client.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Clarifier les droits et obligations issus du bail et défendre la position du client.</dd>
                </div>
              </dl>
            </details>

            <details id="projet-immobilier" className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.375rem] font-normal text-navy">Sécurisation d&apos;un projet immobilier</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <dl className="space-y-5 pb-8">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Situation</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Un porteur de projet engage une opération immobilière. Les contrats et responsabilités des intervenants doivent être cadrés avant le lancement.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Intervention</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Rédaction et analyse des documents contractuels, répartition des responsabilités, conseil sur les garanties applicables.</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">Enjeu</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">Poser un cadre clair en amont pour limiter les risques de contentieux pendant et après le chantier.</dd>
                </div>
              </dl>
            </details>

            <p className="mt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45">
              Les situations présentées sont des exemples illustratifs et anonymisés, reconstitués à partir de problématiques fréquemment rencontrées. Elles ne décrivent aucun dossier identifiable et ne constituent ni une garantie ni une prévision de résultat. Chaque affaire est différente et s&apos;apprécie selon ses circonstances propres.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* FAQ */}
      <section id="faq" className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-white">
              Questions fréquentes
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire en cas de malfaçons après réception ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Identifiez d&apos;abord la garantie applicable : parfait achèvement (un an), bon fonctionnement (deux ans) ou décennale pour les désordres compromettant la solidité ou rendant l&apos;ouvrage impropre à sa destination. Mettez le constructeur en demeure par écrit et déclarez le sinistre à l&apos;assurance dommages-ouvrage, qui préfinance les réparations sans attendre la recherche de responsabilité. La voie amiable est souvent privilégiée, mais une expertise s&apos;impose dès que le désordre est sérieux ou contesté.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment gérer un litige de bail commercial ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Commencez par analyser le bail et les obligations de chaque partie : loyers, charges, travaux, état des lieux et clauses sensibles comme la clause résolutoire. La plupart des litiges se règlent par négociation ou mise en demeure, plus rapides et moins coûteuses qu&apos;un contentieux. Mais certains délais sont impératifs - un mois pour répondre à un commandement de payer, deux ans pour contester un congé - et déterminent souvent l&apos;issue. Le bon réflexe est de qualifier la situation avant d&apos;agir.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Faut-il faire encadrer un projet immobilier par un avocat ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Cadrer les contrats et les responsabilités en amont - VEFA, marché de travaux, garanties, assurances, montage de l&apos;opération - limite fortement les risques de litige pendant et après le chantier. C&apos;est aussi le moment où l&apos;on vérifie les engagements de chaque intervenant et où l&apos;on répartit clairement les risques. Une clause précise coûte toujours moins cher qu&apos;un contentieux. L&apos;intervention la plus utile est préventive, pas curative.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Que faire face à des loyers impayés en bail commercial ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">La voie la plus efficace passe par la clause résolutoire du bail. Le bailleur fait délivrer, par commissaire de justice, un commandement de payer qui ouvre au locataire un délai d&apos;un mois pour régler l&apos;intégralité des sommes dues - un paiement partiel ne suffit pas, et le délai ne peut être réduit. Si rien n&apos;est réglé dans le mois, le bailleur saisit le juge pour faire constater la résiliation et engager l&apos;expulsion. Les loyers impayés se réclament dans la limite de cinq ans.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Comment obtenir une indemnité d&apos;éviction en cas de non-renouvellement ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Lorsque le bailleur refuse de renouveler le bail, il doit en principe verser une indemnité d&apos;éviction égale au préjudice subi (article L. 145-14 du Code de commerce) : valeur du fonds de commerce, frais de déménagement, de réinstallation et de mutation. Le locataire doit remplir les conditions du droit au renouvellement et, si aucune indemnité ne lui est proposée, saisir le tribunal dans un délai de deux ans - au-delà, le droit est perdu. Jusqu&apos;au paiement, il peut rester dans les lieux. L&apos;enjeu principal est souvent la fixation du montant.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Peut-on contester la clause résolutoire d&apos;un bail commercial ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Recevoir un commandement de payer ne rend pas la résiliation définitive. Le locataire peut régulariser dans le mois, demander des délais de paiement au juge (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042713" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article L. 145-41 du Code de commerce</a>, combiné au pouvoir général de l&apos;<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032035267" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">article 1343-5 du Code civil</a>), contester un commandement irrégulier, ou invoquer une exception d&apos;inexécution si le bailleur a lui-même manqué à ses obligations - par exemple des locaux rendus impropres à leur usage. La Cour de cassation a confirmé que ce dernier moyen reste recevable même sans demande de délais dans le mois (<a href="https://www.legifrance.gouv.fr/juri/id/JURITEXT000053679063" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-gold transition-colors duration-200">Cass. 3e civ., 5 mars 2026, n° 24-15.820</a>). La réaction doit être rapide.</div>
            </details>

            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le livre foncier d&apos;Alsace-Moselle change-t-il quelque chose à mon achat immobilier ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. En Alsace et en Moselle, votre droit de propriété ne devient opposable aux tiers qu&apos;une fois inscrit au livre foncier, registre tenu par un juge. La signature chez le notaire vous lie au vendeur, mais c&apos;est l&apos;inscription qui rend votre position incontestable face à une banque ou à un autre acquéreur. Ce délai doit être anticipé dans le calendrier de l&apos;opération.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">J&apos;hérite d&apos;un bien immobilier en Alsace : ai-je une démarche particulière à faire ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. L&apos;héritier doit faire inscrire son droit de propriété au livre foncier, sauf si un acte est établi dans les dix mois du décès. Une succession non mise à jour pendant plusieurs générations crée des situations très difficiles à débloquer. Régler cette inscription à temps évite un blocage coûteux par la suite.</div>
            </details>
            <details className="group border-t-2 border-gold">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                <span className="font-serif text-[1.0625rem] leading-snug text-white">Le cabinet propose-t-il des consultations en visioconférence pour les litiges immobiliers et de construction ?</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45">
                  <line x1="3" y1="10" x2="17" y2="10" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="pb-7 font-sans text-[0.9375rem] leading-[1.9] text-white/65">Oui. Pour un litige de malfaçons, un bail commercial ou un projet immobilier, le cabinet propose un premier échange de 30 minutes en visioconférence, gratuit et sans engagement. Cette consultation à distance est accessible depuis toute la France, sans déplacement à Strasbourg.</div>
            </details>
          </div>
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
              Discutons de votre projet immobilier
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

