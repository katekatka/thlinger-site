/**
 * Adds "Exemples d'intervention" + FAQ sections with JSON-LD to all 12
 * competence pages (6 FR, 6 EN). Run once with: node scripts/add-cases-faq.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const base = new URL("../", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

// ─── Shared strings ───────────────────────────────────────────────────────────

const DISCLAIMER_FR =
  "Les situations présentées sont des exemples illustratifs et anonymisés, reconstitués à partir de problématiques fréquemment rencontrées. Elles ne décrivent aucun dossier identifiable et ne constituent ni une garantie ni une prévision de résultat. Chaque affaire est différente et s&apos;apprécie selon ses circonstances propres.";

const DISCLAIMER_EN =
  "The situations described are illustrative, anonymized examples based on commonly encountered issues. They do not describe any identifiable matter and constitute neither a guarantee nor a prediction of outcome. Every case is assessed on its own circumstances.";

const GOLD_DIV = `      <div className="bg-gold" style={{ height: "2px" }} />`;

// ─── Page data ────────────────────────────────────────────────────────────────

const pages = [

  // ── 1. DROIT DES SOCIÉTÉS ────────────────────────────────────────────────
  {
    frFile:  "app/competences/avocat-droit-des-societes-strasbourg/page.tsx",
    enFile:  "app/en/competences/droit-des-societes/page.tsx",
    frUrl:   "https://www.thalinger-avocat.fr/competences/avocat-droit-des-societes-strasbourg",
    enUrl:   "https://www.thalinger-avocat.fr/en/competences/droit-des-societes",

    fr: {
      casesH2:  "Exemples d&apos;intervention en droit des sociétés",
      intro:    "La vie d&apos;une société soulève des décisions à fort enjeu : structuration, gouvernance, transmission. Les exemples suivants illustrent comment ces situations s&apos;analysent et se structurent.",
      faqH2:    "Questions fréquentes",
      cases: [
        {
          id: "conflit-associes", title: "Conflit entre associés",
          situation:    "Trois associés, un blocage durable. Les décisions ne passent plus en assemblée. L&apos;entreprise poursuit son activité, mais sa direction est paralysée.",
          intervention: "Analyse du pacte d&apos;associés et de la gouvernance, identification des leviers de déblocage, structuration des options : révision du pacte, gouvernance opérationnelle, ou sortie négociée de l&apos;associé minoritaire.",
          enjeu:        "Rétablir une prise de décision fonctionnelle tout en préservant la continuité de l&apos;activité et les intérêts de chaque partie.",
        },
        {
          id: "cession-entreprise", title: "Cession d&apos;entreprise",
          situation:    "Un dirigeant envisage de céder son entreprise. L&apos;opération engage son patrimoine et l&apos;avenir de l&apos;activité ; les implications doivent être comprises avant tout engagement.",
          intervention: "Structuration juridique de l&apos;opération, sécurisation des garanties (notamment la garantie d&apos;actif et de passif), rédaction et négociation des actes de cession.",
          enjeu:        "Sécuriser la transmission et clarifier les engagements pris par le cédant comme par le repreneur.",
        },
        {
          id: "structuration-creation", title: "Structuration à la création",
          situation:    "Des associés fondateurs lancent leur société. Le choix de la forme sociale et la répartition des pouvoirs détermineront le fonctionnement futur de l&apos;entreprise.",
          intervention: "Conseil sur la forme sociale adaptée, rédaction des statuts et du pacte d&apos;associés, organisation de la gouvernance et des opérations sur le capital.",
          enjeu:        "Poser un cadre clair dès le départ pour prévenir les blocages et sécuriser les décisions stratégiques à venir.",
        },
      ],
      faqs: [
        { q: "Quand rédiger un pacte d&apos;associés ?",           a: "Idéalement dès la création de la société, ou avant l&apos;entrée d&apos;un nouvel associé. Le pacte organise les rapports entre associés : gouvernance, cession de titres, sortie, et prévient une part importante des conflits ultérieurs." },
        { q: "Que faire en cas de blocage entre associés ?",           a: "Plusieurs leviers existent selon les statuts et le pacte : médiation, révision de la gouvernance, sortie négociée d&apos;un associé, ou recours judiciaire en dernier ressort. Le choix dépend des circonstances et des objectifs de chacun." },
        { q: "Comment sécuriser la cession de mon entreprise ?",       a: "En structurant l&apos;opération en amont : audit, choix du montage, garantie d&apos;actif et de passif, et rédaction précise des actes. L&apos;objectif est de comprendre chaque engagement avant de signer." },
      ],
    },

    en: {
      casesH2: "Examples of corporate-law work",
      intro:   "A company&apos;s life raises high-stakes decisions: structuring, governance, transfer. The following examples illustrate how such situations are analyzed and structured.",
      faqH2:   "Frequently asked questions",
      cases: [
        {
          id: "shareholder-deadlock", title: "Shareholder deadlock",
          situation:    "Three shareholders, a lasting deadlock. Decisions no longer pass in general meeting. The business keeps running, but its leadership is paralyzed.",
          intervention: "Review of the shareholders&apos; agreement and governance, identification of ways to break the deadlock, structuring of options: revising the agreement, operational governance, or a negotiated exit for the minority shareholder.",
          enjeu:        "Restoring functional decision-making while preserving the business and each party&apos;s interests.",
        },
        {
          id: "sale-of-business", title: "Sale of a business",
          situation:    "An owner is considering selling the company. The deal affects personal assets and the future of the business; the implications must be understood before any commitment.",
          intervention: "Legal structuring of the deal, securing the warranties (notably the representations-and-warranties, garantie d&apos;actif et de passif), drafting and negotiating the sale documents.",
          enjeu:        "Securing the transfer and clarifying the commitments made by seller and buyer alike.",
        },
        {
          id: "structuring-at-formation", title: "Structuring at formation",
          situation:    "Founders are launching their company. The choice of corporate form and allocation of powers will shape how the business runs.",
          intervention: "Advice on the appropriate corporate form, drafting the articles and shareholders&apos; agreement, organizing governance and capital operations.",
          enjeu:        "Setting a clear framework from the start to prevent deadlock and secure future strategic decisions.",
        },
      ],
      faqs: [
        { q: "When should I put a shareholders&apos; agreement in place?", a: "Ideally at formation, or before a new shareholder joins. It organizes the relationship between shareholders and prevents a large share of later disputes." },
        { q: "What can be done about a shareholder deadlock?",             a: "Several levers exist depending on the articles and agreement: mediation, governance changes, a negotiated exit, or court action as a last resort." },
        { q: "How do I secure the sale of my business?",                   a: "By structuring the deal upfront: audit, deal structure, warranties, precise drafting, so every commitment is understood before signing." },
      ],
    },
  },

  // ── 2. DROIT COMMERCIAL ──────────────────────────────────────────────────
  {
    frFile: "app/competences/avocat-droit-commercial-strasbourg/page.tsx",
    enFile: "app/en/competences/droit-commercial/page.tsx",
    frUrl:  "https://www.thalinger-avocat.fr/competences/avocat-droit-commercial-strasbourg",
    enUrl:  "https://www.thalinger-avocat.fr/en/competences/droit-commercial",

    fr: {
      casesH2: "Exemples d&apos;intervention en droit commercial",
      intro:   "Contrats, impayés, ruptures de relation : les litiges commerciaux engagent la trésorerie comme les relations d&apos;affaires. Les exemples suivants illustrent la démarche suivie.",
      faqH2:   "Questions fréquentes",
      cases: [
        {
          id: "creance-impayee", title: "Créance impayée",
          situation:    "Une entreprise attend le règlement d&apos;une facture importante depuis plusieurs mois. Les relances sont restées sans effet.",
          intervention: "Stratégie pré-contentieuse, mise en oeuvre des procédures de recouvrement adaptées (notamment l&apos;injonction de payer), négociation d&apos;un échéancier lorsque la relation commerciale peut être préservée.",
          enjeu:        "Obtenir le règlement de la créance tout en pesant l&apos;intérêt à maintenir, ou non, la relation commerciale.",
        },
        {
          id: "rupture-relation", title: "Rupture d&apos;une relation commerciale établie",
          situation:    "Un partenaire commercial met fin brutalement à une relation suivie depuis plusieurs années. L&apos;entreprise s&apos;interroge sur ses droits et son préjudice.",
          intervention: "Analyse de la relation et des conditions de la rupture, évaluation du préjudice, mise en demeure et, si nécessaire, action en réparation.",
          enjeu:        "Faire valoir les droits liés à la rupture et clarifier les options entre négociation et contentieux.",
        },
        {
          id: "litige-contrat", title: "Litige sur un contrat commercial",
          situation:    "Un désaccord naît sur l&apos;exécution d&apos;un contrat (CGV, contrat de distribution, prestation). Chaque partie campe sur sa lecture du texte.",
          intervention: "Analyse des clauses et des obligations de chacun, identification des points de fragilité, construction d&apos;une position et représentation en contentieux si la voie amiable échoue.",
          enjeu:        "Clarifier la portée des engagements contractuels et défendre la position de l&apos;entreprise.",
        },
      ],
      faqs: [
        { q: "Comment recouvrer une facture impayée ?",                       a: "Par une stratégie graduée : relance formelle, mise en demeure, puis procédures judiciaires comme l&apos;injonction de payer. Le choix dépend du montant, du débiteur et de l&apos;intérêt à préserver la relation." },
        { q: "Qu&apos;est-ce qu&apos;une rupture brutale de relation commerciale ?", a: "La fin sans préavis suffisant d&apos;une relation commerciale établie peut ouvrir droit à réparation. L&apos;appréciation dépend de l&apos;ancienneté et des circonstances de la relation." },
        { q: "Faut-il faire relire ses CGV par un avocat ?",                      a: "Des conditions générales claires et adaptées préviennent une part importante des litiges. Mieux vaut les sécuriser avant le différend qu&apos;après." },
      ],
    },

    en: {
      casesH2: "Examples of commercial-law work",
      intro:   "Contracts, unpaid invoices, broken relationships: commercial disputes affect both cash flow and business ties. The following examples illustrate the approach taken.",
      faqH2:   "Frequently asked questions",
      cases: [
        {
          id: "unpaid-invoice", title: "Unpaid invoice",
          situation:    "A company has waited several months for payment of a significant invoice. Reminders have gone unanswered.",
          intervention: "Pre-litigation strategy, use of the appropriate recovery procedures (notably the order to pay, injonction de payer), negotiation of a payment schedule where the relationship can be preserved.",
          enjeu:        "Securing payment while weighing whether the commercial relationship is worth keeping.",
        },
        {
          id: "termination-commercial-relationship", title: "Termination of an established commercial relationship",
          situation:    "A commercial partner abruptly ends a relationship that has run for several years. The company questions its rights and its loss.",
          intervention: "Review of the relationship and the conditions of termination, assessment of the loss, formal notice and, if needed, a claim for compensation.",
          enjeu:        "Enforcing the rights arising from the termination and clarifying the options between negotiation and litigation.",
        },
        {
          id: "commercial-contract-dispute", title: "Commercial-contract dispute",
          situation:    "A disagreement arises over performance of a contract (terms of sale, distribution, services). Each side reads the text differently.",
          intervention: "Analysis of the clauses and each party&apos;s obligations, identification of weak points, building a position and representation in litigation if the amicable route fails.",
          enjeu:        "Clarifying the scope of the contractual commitments and defending the company&apos;s position.",
        },
      ],
      faqs: [
        { q: "How do I recover an unpaid invoice?",                                      a: "Through a graduated strategy: formal reminder, formal notice, then court procedures such as the order to pay. The choice depends on the amount, the debtor, and the relationship." },
        { q: "What is abrupt termination of a commercial relationship?",                 a: "Ending an established relationship without sufficient notice may give rise to compensation, depending on its length and circumstances." },
        { q: "Should a lawyer review my terms of sale?",                                 a: "Clear, tailored terms prevent a large share of disputes. Better secured before a dispute than after." },
      ],
    },
  },

  // ── 3. DROIT SOCIAL ──────────────────────────────────────────────────────
  {
    frFile: "app/competences/avocat-droit-du-travail-strasbourg/page.tsx",
    enFile: "app/en/competences/droit-social/page.tsx",
    frUrl:  "https://www.thalinger-avocat.fr/competences/avocat-droit-du-travail-strasbourg",
    enUrl:  "https://www.thalinger-avocat.fr/en/competences/droit-social",

    fr: {
      casesH2: "Exemples d&apos;intervention en droit social",
      intro:   "Licenciement, réorganisation, cotisations : chaque décision sociale comporte des risques de procédure et de fond. Les exemples suivants illustrent comment ils s&apos;anticipent et se gèrent.",
      faqH2:   "Questions fréquentes",
      cases: [
        {
          id: "licenciement-conteste", title: "Licenciement contesté",
          situation:    "Un employeur fait face à une saisine prud’homale pour licenciement contesté. Les délais sont courts et la situation doit être clarifiée rapidement.",
          intervention: "Examen de la procédure suivie, identification des points de fragilité du dossier, construction de la ligne de défense et représentation devant le Conseil de prud&apos;hommes.",
          enjeu:        "Sécuriser la position de l&apos;employeur sur la procédure et le fond, et présenter une défense structurée à l&apos;audience.",
        },
        {
          id: "reorganisation", title: "Réorganisation interne",
          situation:    "Une entreprise prépare une réorganisation touchant plusieurs postes. Les implications sociales doivent être anticipées avant toute décision.",
          intervention: "Analyse des options et des risques, sécurisation des procédures applicables, accompagnement dans le dialogue avec les représentants du personnel.",
          enjeu:        "Conduire la réorganisation dans un cadre maîtrisé, en mesurant les conséquences à chaque étape.",
        },
        {
          id: "cotisations-sociales", title: "Contentieux de cotisations sociales",
          situation:    "Un employeur reçoit un redressement à la suite d&apos;un contrôle URSSAF. Le bien-fondé et l&apos;étendue du redressement sont en question.",
          intervention: "Analyse des chefs de redressement, vérification de la procédure de contrôle, contestation devant les juridictions compétentes lorsque cela se justifie.",
          enjeu:        "Vérifier la régularité du redressement et défendre la position de l&apos;employeur sur les points contestables.",
        },
      ],
      faqs: [
        { q: "Que faire face à une saisine prud&apos;homale ?",         a: "Réagir vite : analyser la procédure suivie, rassembler les éléments de fond et construire une défense structurée dans les délais impartis." },
        { q: "Comment sécuriser une réorganisation ?",              a: "En anticipant les implications sociales avant la décision : choix de la procédure, calendrier, dialogue avec les représentants du personnel." },
        { q: "Peut-on contester un redressement URSSAF ?",               a: "Oui, dans les délais prévus. La contestation peut porter sur le fond du redressement comme sur la régularité de la procédure de contrôle." },
      ],
    },

    en: {
      casesH2: "Examples of employment-law work",
      intro:   "Dismissal, reorganization, contributions: every employment decision carries procedural and substantive risk. The following examples illustrate how these are anticipated and managed.",
      faqH2:   "Frequently asked questions",
      cases: [
        {
          id: "contested-dismissal", title: "Contested dismissal",
          situation:    "An employer faces a labor-tribunal claim over a contested dismissal. Deadlines are short and the situation needs clarifying quickly.",
          intervention: "Review of the procedure followed, identification of weak points, building the line of defense, and representation before the labor tribunal (Conseil de prud&apos;hommes).",
          enjeu:        "Securing the employer&apos;s position on procedure and substance, presenting a structured defense at the hearing.",
        },
        {
          id: "internal-reorganization", title: "Internal reorganization",
          situation:    "A company is preparing a reorganization affecting several roles. The employment-law implications must be anticipated before any decision.",
          intervention: "Analysis of options and risks, securing the applicable procedures, support in the dialogue with employee representatives.",
          enjeu:        "Carrying out the reorganization within a controlled framework, weighing consequences at each step.",
        },
        {
          id: "social-security-dispute", title: "Social-security contribution dispute",
          situation:    "An employer receives a reassessment after a URSSAF inspection. Both the basis and the scope of the reassessment are in question.",
          intervention: "Review of the grounds for reassessment, verification of the inspection procedure, challenge before the competent courts where justified.",
          enjeu:        "Checking that the reassessment is sound and defending the employer on the contestable points.",
        },
      ],
      faqs: [
        { q: "What should I do about a labor-tribunal claim?",      a: "Act quickly: review the procedure followed, gather the substantive evidence, and build a structured defense within the deadlines." },
        { q: "How do I secure a reorganization?",                   a: "By anticipating the employment-law implications before deciding: procedure, timetable, and dialogue with employee representatives." },
        { q: "Can a URSSAF reassessment be challenged?",            a: "Yes, within the set deadlines, covering both the substance of the reassessment and the regularity of the inspection procedure." },
      ],
    },
  },

  // ── 4. DROIT BANCAIRE & FINANCIER ────────────────────────────────────────
  {
    frFile: "app/competences/avocat-droit-bancaire-financier-strasbourg/page.tsx",
    enFile: "app/en/competences/droit-bancaire-financier/page.tsx",
    frUrl:  "https://www.thalinger-avocat.fr/competences/avocat-droit-bancaire-financier-strasbourg",
    enUrl:  "https://www.thalinger-avocat.fr/en/competences/droit-bancaire-financier",

    fr: {
      casesH2: "Exemples d&apos;intervention en droit bancaire et financier",
      intro:   "Cautionnements, financements, responsabilité de la banque : les rapports avec les établissements financiers exigent une lecture attentive des engagements. Les exemples suivants illustrent la démarche suivie.",
      faqH2:   "Questions fréquentes",
      cases: [
        {
          id: "caution", title: "Contestation d&apos;un engagement de caution",
          situation:    "Un dirigeant s&apos;est porté caution d&apos;un financement professionnel. La banque l&apos;appelle en garantie ; l&apos;étendue et la validité de l&apos;engagement sont en question.",
          intervention: "Analyse de l&apos;acte de cautionnement et des obligations d&apos;information de la banque, vérification de la proportionnalité de l&apos;engagement, construction de la défense.",
          enjeu:        "Vérifier la validité de la caution et défendre le dirigeant sur les points contestables.",
        },
        {
          id: "responsabilite-bancaire", title: "Responsabilité d&apos;un établissement bancaire",
          situation:    "Une entreprise s&apos;estime lésée par un manquement de sa banque dans un financement ou un conseil. La responsabilité de l&apos;établissement est en jeu.",
          intervention: "Analyse des relations contractuelles et des obligations de la banque, évaluation du préjudice, mise en cause de l&apos;établissement et des intermédiaires concernés.",
          enjeu:        "Établir le manquement éventuel et faire valoir les droits de l&apos;entreprise.",
        },
        {
          id: "financement-professionnel", title: "Contentieux d&apos;un financement professionnel",
          situation:    "Un désaccord oppose une entreprise à son établissement de crédit sur les conditions ou l&apos;exécution d&apos;un financement.",
          intervention: "Analyse du contrat de financement et de son exécution, identification des points litigieux, négociation ou action contentieuse selon l&apos;intérêt du client.",
          enjeu:        "Clarifier les obligations de chacun et défendre la position de l&apos;entreprise.",
        },
      ],
      faqs: [
        { q: "Peut-on contester un engagement de caution ?",          a: "Oui, selon sa validité, le respect des obligations d&apos;information de la banque et sa proportionnalité au regard des revenus et du patrimoine de la caution." },
        { q: "Quand engager la responsabilité d&apos;une banque ?", a: "Lorsqu&apos;un manquement de l&apos;établissement (devoir de mise en garde, de conseil, d&apos;information) a causé un préjudice. L&apos;appréciation dépend des circonstances." },
        { q: "Comment se défendre face à un appel en garantie ?", a: "En analysant l&apos;acte, la procédure et la proportionnalité de l&apos;engagement avant toute réponse à l&apos;établissement." },
      ],
    },

    en: {
      casesH2: "Examples of banking-and-finance work",
      intro:   "Guarantees, financing, bank liability: dealings with financial institutions demand a close reading of the commitments made. The following examples illustrate the approach taken.",
      faqH2:   "Frequently asked questions",
      cases: [
        {
          id: "personal-guarantee", title: "Challenging a personal guarantee",
          situation:    "An executive gave a personal guarantee for business financing. The bank calls on the guarantee; its scope and validity are in question.",
          intervention: "Review of the guarantee instrument and the bank&apos;s disclosure duties, check on the proportionality of the commitment, building the defense.",
          enjeu:        "Verifying the validity of the guarantee and defending the executive on the contestable points.",
        },
        {
          id: "bank-liability", title: "Bank liability",
          situation:    "A company believes it suffered loss from a bank&apos;s failing in a financing or advice. The institution&apos;s liability is in play.",
          intervention: "Analysis of the contractual relationship and the bank&apos;s duties, assessment of the loss, action against the institution and the intermediaries involved.",
          enjeu:        "Establishing any breach and enforcing the company&apos;s rights.",
        },
        {
          id: "financing-dispute", title: "Business-financing dispute",
          situation:    "A company and its lender disagree on the terms or performance of a financing.",
          intervention: "Review of the financing contract and its performance, identification of the disputed points, negotiation or litigation depending on the client&apos;s interest.",
          enjeu:        "Clarifying each party&apos;s obligations and defending the company&apos;s position.",
        },
      ],
      faqs: [
        { q: "Can a personal guarantee be challenged?",    a: "Yes, depending on its validity, the bank&apos;s disclosure duties, and its proportionality to the guarantor&apos;s income and assets." },
        { q: "When can a bank be held liable?",            a: "When a failing by the institution (duty to warn, advise, inform) has caused loss, assessed on the circumstances." },
        { q: "How do I respond to a call on a guarantee?", a: "By analyzing the instrument, the procedure, and the proportionality of the commitment before replying to the institution." },
      ],
    },
  },

  // ── 5. DROIT DES ASSURANCES ──────────────────────────────────────────────
  {
    frFile: "app/competences/avocat-droit-des-assurances-strasbourg/page.tsx",
    enFile: "app/en/competences/droit-des-assurances/page.tsx",
    frUrl:  "https://www.thalinger-avocat.fr/competences/avocat-droit-des-assurances-strasbourg",
    enUrl:  "https://www.thalinger-avocat.fr/en/competences/droit-des-assurances",

    fr: {
      casesH2: "Exemples d&apos;intervention en droit des assurances",
      intro:   "Refus de garantie, indemnisation, expertise : après un sinistre, l&apos;étendue réelle de la couverture se joue dans les détails du contrat. Les exemples suivants illustrent comment elle se défend.",
      faqH2:   "Questions fréquentes",
      cases: [
        {
          id: "refus-garantie", title: "Refus de garantie contesté",
          situation:    "Après un sinistre, l&apos;assureur refuse sa garantie en invoquant une clause du contrat. L&apos;entreprise conteste la lecture qui en est faite.",
          intervention: "Analyse des clauses du contrat et des conditions de garantie, vérification du fondement du refus, contestation et négociation avec l&apos;assureur.",
          enjeu:        "Clarifier l&apos;étendue réelle de la garantie et faire valoir les droits de l&apos;assuré.",
        },
        {
          id: "indemnisation-sinistre", title: "Évaluation et indemnisation d&apos;un sinistre",
          situation:    "Un sinistre a causé un préjudice important. L&apos;évaluation proposée par l&apos;assureur paraît insuffisante au regard des dommages subis.",
          intervention: "Analyse des préjudices, assistance lors de l&apos;expertise, contestation de l&apos;évaluation et négociation de l&apos;indemnisation.",
          enjeu:        "Faire reconnaître l&apos;étendue réelle du préjudice et défendre une indemnisation cohérente.",
        },
        {
          id: "expertise", title: "Assistance lors d&apos;une expertise complexe",
          situation:    "Une expertise technique est ordonnée à la suite d&apos;un sinistre. Ses conclusions détermineront l&apos;indemnisation ; l&apos;assuré ne souhaite pas l&apos;aborder seul.",
          intervention: "Préparation de l&apos;expertise, présentation des arguments et des pièces, suivi des opérations et analyse du rapport.",
          enjeu:        "Veiller à ce que les intérêts de l&apos;assuré soient représentés à chaque étape de l&apos;expertise.",
        },
      ],
      faqs: [
        { q: "Que faire si l&apos;assureur refuse sa garantie ?",          a: "Analyser le motif du refus au regard des clauses du contrat. Un refus n&apos;est pas définitif : il peut être contesté lorsqu&apos;il repose sur une lecture discutable." },
        { q: "Faut-il être assisté lors d&apos;une expertise ?",     a: "L&apos;expertise oriente fortement l&apos;indemnisation. Être accompagné permet de présenter ses arguments et de suivre les opérations en connaissance de cause." },
        { q: "Comment contester une indemnisation insuffisante ?",        a: "En documentant le préjudice réel et en confrontant l&apos;évaluation de l&apos;assureur aux dommages subis, par la négociation puis, si nécessaire, le contentieux." },
      ],
    },

    en: {
      casesH2: "Examples of insurance-law work",
      intro:   "Denied cover, compensation, expert assessment: after a loss, the true scope of cover turns on the policy&apos;s details. The following examples illustrate how it is defended.",
      faqH2:   "Frequently asked questions",
      cases: [
        {
          id: "denial-of-cover", title: "Contested denial of cover",
          situation:    "After a loss, the insurer denies cover by relying on a policy clause. The company disputes that reading.",
          intervention: "Analysis of the policy clauses and cover conditions, check on the basis for the denial, challenge and negotiation with the insurer.",
          enjeu:        "Clarifying the true scope of cover and enforcing the insured&apos;s rights.",
        },
        {
          id: "loss-assessment", title: "Loss assessment and compensation",
          situation:    "A loss caused significant damage. The insurer&apos;s proposed assessment seems insufficient against the actual damage.",
          intervention: "Analysis of the losses, support during the expert assessment, challenge to the valuation, and negotiation of the compensation.",
          enjeu:        "Having the true extent of the loss recognized and defending a coherent level of compensation.",
        },
        {
          id: "expert-assessment", title: "Support during a complex expert assessment",
          situation:    "A technical assessment is ordered after a loss. Its conclusions will drive the compensation; the insured does not want to face it alone.",
          intervention: "Preparation for the assessment, presentation of arguments and evidence, monitoring of operations, and analysis of the report.",
          enjeu:        "Ensuring the insured&apos;s interests are represented at every stage.",
        },
      ],
      faqs: [
        { q: "What if the insurer denies cover?",                         a: "Analyze the reason against the policy clauses. A denial is not final and can be challenged when it rests on a questionable reading." },
        { q: "Should I have support during an expert assessment?",        a: "The assessment strongly shapes compensation; support lets you present arguments and follow operations knowingly." },
        { q: "How do I challenge insufficient compensation?",             a: "By documenting the real loss and testing the insurer&apos;s valuation against the actual damage, through negotiation and, if needed, litigation." },
      ],
    },
  },

  // ── 6. DROIT IMMOBILIER & CONSTRUCTION ───────────────────────────────────
  {
    frFile: "app/competences/avocat-droit-immobilier-construction-strasbourg/page.tsx",
    enFile: "app/en/competences/droit-immobilier-construction/page.tsx",
    frUrl:  "https://www.thalinger-avocat.fr/competences/avocat-droit-immobilier-construction-strasbourg",
    enUrl:  "https://www.thalinger-avocat.fr/en/competences/droit-immobilier-construction",

    fr: {
      casesH2: "Exemples d&apos;intervention en droit immobilier et de la construction",
      intro:   "Malfaçons, baux commerciaux, projets immobiliers : la construction et l&apos;immobilier engagent des responsabilités multiples sur la durée. Les exemples suivants illustrent comment elles se cadrent et se défendent.",
      faqH2:   "Questions fréquentes",
      cases: [
        {
          id: "malfacons", title: "Malfaçons après livraison",
          situation:    "Un propriétaire constate des désordres structurels plusieurs mois après la réception d&apos;un chantier. Le dialogue avec le constructeur s&apos;interrompt.",
          intervention: "Mise en demeure, analyse des garanties légales applicables, mobilisation de l&apos;assurance dommages-ouvrage, négociation directe avec les intervenants concernés.",
          enjeu:        "Faire valoir les garanties dont dispose le maître d&apos;ouvrage et rechercher une indemnisation, en privilégiant si possible une issue amiable.",
        },
        {
          id: "bail-commercial", title: "Litige entre bailleur et locataire commercial",
          situation:    "Un désaccord oppose un bailleur et son locataire commercial (loyer, charges, état des lieux, renouvellement). La relation se tend.",
          intervention: "Analyse du bail et des obligations de chacun, identification des leviers, négociation ou action selon l&apos;intérêt du client.",
          enjeu:        "Clarifier les droits et obligations issus du bail et défendre la position du client.",
        },
        {
          id: "projet-immobilier", title: "Sécurisation d&apos;un projet immobilier",
          situation:    "Un porteur de projet engage une opération immobilière. Les contrats et responsabilités des intervenants doivent être cadrés avant le lancement.",
          intervention: "Rédaction et analyse des documents contractuels, répartition des responsabilités, conseil sur les garanties applicables.",
          enjeu:        "Poser un cadre clair en amont pour limiter les risques de contentieux pendant et après le chantier.",
        },
      ],
      faqs: [
        { q: "Que faire en cas de malfaçons après réception ?",       a: "Identifier la garantie applicable (parfait achèvement, biennale, décennale), mettre en demeure et mobiliser l&apos;assurance dommages-ouvrage. La voie amiable est souvent privilégiée avant le contentieux." },
        { q: "Comment gérer un litige de bail commercial ?",              a: "En analysant le bail et les obligations de chaque partie, puis en choisissant entre négociation et action selon l&apos;enjeu et la relation." },
        { q: "Faut-il faire encadrer un projet immobilier par un avocat ?", a: "Cadrer les contrats et les responsabilités en amont limite fortement les risques de litige pendant et après le chantier." },
      ],
    },

    en: {
      casesH2: "Examples of real-estate-and-construction work",
      intro:   "Defects, commercial leases, real-estate projects: construction and property involve multiple, long-lasting responsibilities. The following examples illustrate how these are framed and defended.",
      faqH2:   "Frequently asked questions",
      cases: [
        {
          id: "construction-defects", title: "Construction defects after handover",
          situation:    "An owner discovers structural defects several months after a project is handed over. Communication with the builder breaks down.",
          intervention: "Formal notice, analysis of the applicable statutory warranties, activation of the structural-damage insurance (dommages-ouvrage), direct negotiation with the parties involved.",
          enjeu:        "Enforcing the owner&apos;s warranties and seeking compensation, favoring an amicable resolution where possible.",
        },
        {
          id: "commercial-lease-dispute", title: "Commercial landlord-tenant dispute",
          situation:    "A landlord and commercial tenant disagree (rent, charges, condition report, renewal). The relationship grows tense.",
          intervention: "Review of the lease and each party&apos;s obligations, identification of the levers, negotiation or action depending on the client&apos;s interest.",
          enjeu:        "Clarifying the rights and obligations under the lease and defending the client&apos;s position.",
        },
        {
          id: "real-estate-project", title: "Securing a real-estate project",
          situation:    "A developer is starting a real-estate project. The contracts and responsibilities of the parties must be framed before launch.",
          intervention: "Drafting and review of the contractual documents, allocation of responsibilities, advice on the applicable warranties.",
          enjeu:        "Setting a clear framework upfront to limit the risk of disputes during and after the works.",
        },
      ],
      faqs: [
        { q: "What should I do about defects after handover?",        a: "Identify the applicable warranty (completion, two-year, ten-year), serve formal notice, and activate the structural-damage insurance. The amicable route is often tried before litigation." },
        { q: "How do I handle a commercial-lease dispute?",           a: "By reviewing the lease and each party&apos;s obligations, then choosing between negotiation and action depending on the stakes and the relationship." },
        { q: "Should a lawyer frame my real-estate project?",         a: "Framing contracts and responsibilities upfront strongly reduces the risk of disputes during and after the works." },
      ],
    },
  },
];

// ─── Template helpers ─────────────────────────────────────────────────────────

function buildCaseCard({ id, title, situation, intervention, enjeu }, lang) {
  const labels = lang === "fr"
    ? { sit: "Situation", int: "Intervention", enj: "Enjeu" }
    : { sit: "Situation", int: "Approach",     enj: "What&apos;s at stake" };
  return `
            <div id="${id}" className="border-t-2 border-gold pt-10 pb-2">
              <h3 className="mb-6 font-serif text-[1.375rem] font-normal text-navy">${title}</h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">${labels.sit}</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">${situation}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">${labels.int}</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">${intervention}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold">${labels.enj}</dt>
                  <dd className="font-sans text-[0.9375rem] leading-[1.85] text-navy/70">${enjeu}</dd>
                </div>
              </dl>
            </div>`;
}

function buildNewSections(data, lang, pageUrl, disclaimer) {
  const d = lang === "fr" ? data.fr : data.en;
  const caseCards = d.cases.map(c => buildCaseCard(c, lang)).join("\n");
  const faqItems  = d.faqs.map(({ q, a }) => `
            <div className="border-t border-gold/30 pt-8 pb-2">
              <p className="mb-3 font-serif text-[1.0625rem] font-normal text-white">${q}</p>
              <p className="font-sans text-[0.9375rem] leading-relaxed text-white/65">${a}</p>
            </div>`).join("\n");

  return `
      <div className="bg-gold" style={{ height: "2px" }} />

      {/* EXEMPLES D&apos;INTERVENTION */}
      <section id="cas-concrets" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection className="mb-4">
            <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight text-navy">
              ${d.casesH2}
            </h2>
            <p className="max-w-2xl font-sans text-base leading-[1.85] text-navy/65">
              ${d.intro}
            </p>
          </AnimatedSection>

          <div className="max-w-3xl">
${caseCards}

            <p className="mt-10 border-t border-navy/10 pt-6 font-sans text-[0.8125rem] leading-relaxed text-navy/45 italic">
              ${disclaimer}
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
              ${d.faqH2}
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl">
${faqItems}
          </div>
        </div>
      </section>

`;
}

function buildJsonLd(data, lang, pageUrl, frUrl, enUrl) {
  const d = lang === "fr" ? data.fr : data.en;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name:    q.replace(/&apos;/g, "'").replace(/&amp;/g, "&"),
      acceptedAnswer: { "@type": "Answer", text: a.replace(/&apos;/g, "'").replace(/&amp;/g, "&") },
    })),
  };
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: d.casesH2.replace(/&apos;/g, "'"),
    itemListElement: d.cases.map((c, i) => ({
      "@type":    "ListItem",
      position:   i + 1,
      name:       c.title.replace(/&apos;/g, "'"),
      url:        `${pageUrl}#${c.id}`,
    })),
  };
  return { faqJsonLd, listJsonLd };
}

// ─── Process each file ────────────────────────────────────────────────────────

function processFile(filePath, lang, data, pageUrl, frUrl, enUrl) {
  let src = readFileSync(filePath, "utf8");

  // 1. Add Metadata import to EN pages (they don't have it)
  if (lang === "en" && !src.includes("import type { Metadata }")) {
    src = `import type { Metadata } from "next";\n` + src;
  }

  // 2. Add/update alternates with hreflang
  if (lang === "fr") {
    // FR pages have alternates: { canonical: "..." } — add languages
    src = src.replace(
      /alternates:\s*\{\s*canonical:\s*"([^"]+)"\s*\}/,
      `alternates: {\n    canonical: "$1",\n    languages: {\n      fr: "${frUrl}",\n      en: "${enUrl}",\n    },\n  }`
    );
  } else {
    // EN pages: insert metadata export after last import line
    if (!src.includes("export const metadata")) {
      const lastImportEnd = src.lastIndexOf("\nimport ");
      const insertAfter   = src.indexOf("\n", lastImportEnd + 1);
      const metaBlock = `\nexport const metadata: Metadata = {\n  alternates: {\n    canonical: "${pageUrl}",\n    languages: {\n      fr: "${frUrl}",\n      en: "${enUrl}",\n    },\n  },\n};\n`;
      src = src.slice(0, insertAfter) + metaBlock + src.slice(insertAfter);
    }
  }

  // 3. Build JSON-LD blocks
  const { faqJsonLd, listJsonLd } = buildJsonLd(data, lang, pageUrl, frUrl, enUrl);
  const jsonLdBlock = `
const faqJsonLd = ${JSON.stringify(faqJsonLd, null, 2)} as const;

const caseListJsonLd = ${JSON.stringify(listJsonLd, null, 2)} as const;

`;

  // Insert JSON-LD constants before "export default function"
  const exportIdx = src.lastIndexOf("export default function");
  src = src.slice(0, exportIdx) + jsonLdBlock + src.slice(exportIdx);

  // 4. Add <script> tags at start of JSX return fragment
  const scriptTags = `
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseListJsonLd) }} />

      `;
  // Find the first JSX element after the opening <>
  src = src.replace(/(\s*return\s*\(\s*\n\s*<>)\s*\n(\s*{\/\*)/m,
    (_, open, comment) => `${open}\n${scriptTags}${comment}`);

  // 5. Insert cases + FAQ sections before the last gold divider (= before CTA)
  const disclaimer = lang === "fr" ? DISCLAIMER_FR : DISCLAIMER_EN;
  const newSections = buildNewSections(data, lang, pageUrl, disclaimer);

  const lastGoldIdx = src.lastIndexOf(GOLD_DIV);
  src = src.slice(0, lastGoldIdx) + newSections + src.slice(lastGoldIdx);

  writeFileSync(filePath, src, "utf8");
  console.log(`✓ ${filePath}`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

for (const page of pages) {
  const frPath = join(base, "app", ...page.frFile.replace("app/", "").split("/"));
  const enPath = join(base, "app", ...page.enFile.replace("app/", "").split("/"));

  processFile(frPath, "fr", page, page.frUrl, page.frUrl, page.enUrl);
  processFile(enPath, "en", page, page.enUrl, page.frUrl, page.enUrl);
}

console.log("\nAll 12 pages updated.");
