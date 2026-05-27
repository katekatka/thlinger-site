import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Mentions LÃ©gales â€” Christian THALINGER",
  description: "Mentions lÃ©gales du site de Me Christian THALINGER, avocat au Barreau de Strasbourg.",
};

const h2 = "mb-4 font-serif text-[1.125rem] font-normal text-navy";
const p  = "font-sans text-[0.9375rem] leading-[1.85] text-navy/65";

export default function MentionsLegalesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Informations lÃ©gales
            </p>
            <h1 className="font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Mentions LÃ©gales
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* CONTENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="space-y-10 text-left">

              {/* 1 */}
              <div className="space-y-3">
                <h2 className={h2}>1 â€“ Ã‰dition du site</h2>
                <p className={p}>
                  En vertu de l&apos;article 6 de la loi nÂ° 2004-575 du 21 juin 2004 pour la
                  confiance dans l&apos;Ã©conomie numÃ©rique, il est prÃ©cisÃ© aux utilisateurs du
                  site internet{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  l&apos;identitÃ© des diffÃ©rents intervenants dans le cadre de sa rÃ©alisation
                  et de son suivi :
                </p>
                <p className={p}>
                  <strong className="text-navy">PropriÃ©taire du site :</strong> Christian THALINGER â€“
                  Contact :{" "}
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">christian@thalinger-avocat.fr</a>
                  {" "}
                  <a href="tel:+33637331926" className="underline underline-offset-2 hover:text-navy">+33 6 37 33 19 26</a>
                  {" "}â€“ Adresse : 5 avenue de la Marseillaise, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-navy">Identification de l&apos;entreprise :</strong> EI Christian THALINGER â€“
                  SIREN : 909 547 721 â€“ RCS ou RM : Strasbourg â€“
                  Adresse postale : 5 avenue de la Marseillaise, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-navy">Barreau d&apos;inscription :</strong> Barreau de Strasbourg â€“
                  Ordre des avocats : Barreau de Strasbourg, 3 Rue du GÃ©nÃ©ral FrÃ¨re, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-navy">Directeur de la publication :</strong> Christian THALINGER â€“
                  Contact :{" "}
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">christian@thalinger-avocat.fr</a>.
                </p>
                <p className={p}>
                  <strong className="text-navy">HÃ©bergeur :</strong> OVH SAS â€“ 2 rue Kellermann,
                  59100 Roubaix, France. â€“ TÃ©lÃ©phone :{" "}
                  <a href="tel:+33972101007" className="underline underline-offset-2 hover:text-navy">+33 9 72 10 10 07</a>.
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h2 className={h2}>2 â€“ PropriÃ©tÃ© intellectuelle et contrefaÃ§ons.</h2>
                <p className={p}>
                  Christian THALINGER est propriÃ©taire des droits de propriÃ©tÃ© intellectuelle
                  et dÃ©tient les droits d&apos;usage sur tous les Ã©lÃ©ments accessibles sur le site
                  internet, notamment les textes, images, graphismes, logos, vidÃ©os,
                  architecture, icÃ´nes et sons.
                </p>
                <p className={p}>
                  Toute reproduction, reprÃ©sentation, modification, publication, adaptation de
                  tout ou partie des Ã©lÃ©ments du site, quel que soit le moyen ou le procÃ©dÃ©
                  utilisÃ©, est interdite, sauf autorisation Ã©crite prÃ©alable de Christian THALINGER.
                </p>
                <p className={p}>
                  Toute exploitation non autorisÃ©e du site ou de l&apos;un quelconque des Ã©lÃ©ments
                  qu&apos;il contient sera considÃ©rÃ©e comme constitutive d&apos;une contrefaÃ§on et
                  poursuivie conformÃ©ment aux dispositions des articles L.335-2 et suivants du
                  Code de PropriÃ©tÃ© Intellectuelle.
                </p>
              </div>

              {/* 3 */}
              <div className="space-y-3">
                <h2 className={h2}>3 â€“ Limitations de responsabilitÃ©.</h2>
                <p className={p}>
                  Christian THALINGER ne pourra Ãªtre tenu pour responsable des dommages directs
                  et indirects causÃ©s au matÃ©riel de l&apos;utilisateur, lors de l&apos;accÃ¨s au site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Christian THALINGER dÃ©cline toute responsabilitÃ© quant Ã  l&apos;utilisation qui
                  pourrait Ãªtre faite des informations et contenus prÃ©sents sur{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Christian THALINGER s&apos;engage Ã  sÃ©curiser au mieux le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>
                  , cependant sa responsabilitÃ© ne pourra Ãªtre mise en cause si des donnÃ©es
                  indÃ©sirables sont importÃ©es et installÃ©es sur son site Ã  son insu.
                </p>
                <p className={p}>
                  Des espaces interactifs (espace contact ou commentaires) sont Ã  la disposition
                  des utilisateurs. Christian THALINGER se rÃ©serve le droit de supprimer, sans
                  mise en demeure prÃ©alable, tout contenu dÃ©posÃ© dans cet espace qui
                  contreviendrait Ã  la lÃ©gislation applicable en France, en particulier aux
                  dispositions relatives Ã  la protection des donnÃ©es.
                </p>
                <p className={p}>
                  Le cas Ã©chÃ©ant, Christian THALINGER se rÃ©serve Ã©galement la possibilitÃ© de
                  mettre en cause la responsabilitÃ© civile et/ou pÃ©nale de l&apos;utilisateur,
                  notamment en cas de message Ã  caractÃ¨re raciste, injurieux, diffamant, ou
                  pornographique, quel que soit le support utilisÃ© (texte, photographieâ€¦).
                </p>
              </div>

              {/* 4 */}
              <div className="space-y-3">
                <h2 className={h2}>4 â€“ CNIL et gestion des donnÃ©es personnelles.</h2>
                <p className={p}>
                  ConformÃ©ment aux dispositions de la loi 78-17 du 6 janvier 1978 modifiÃ©e,
                  l&apos;utilisateur du site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  dispose d&apos;un droit d&apos;accÃ¨s, de modification et de suppression des
                  informations collectÃ©es.
                </p>
                <p className={p}>
                  Pour plus d&apos;informations sur la faÃ§on dont nous traitons vos donnÃ©es (type
                  de donnÃ©es, finalitÃ©, destinataireâ€¦), lisez notre{" "}
                  <a href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-navy">
                    Politique de ConfidentialitÃ©
                  </a>
                  .
                </p>
              </div>

              {/* 5 */}
              <div className="space-y-3">
                <h2 className={h2}>5 â€“ Liens hypertextes et cookies.</h2>
                <p className={p}>
                  Le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  contient des liens hypertextes vers d&apos;autres sites et dÃ©gage toute
                  responsabilitÃ© Ã  propos de ces liens externes ou des liens crÃ©Ã©s par d&apos;autres
                  sites vers{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  La navigation sur le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur
                  de l&apos;utilisateur.
                </p>
                <p className={p}>
                  Un Â« cookie Â» est un fichier de petite taille qui enregistre des informations
                  relatives Ã  la navigation d&apos;un utilisateur sur un site. Les donnÃ©es ainsi
                  obtenues permettent d&apos;obtenir des mesures de frÃ©quentation, par exemple.
                </p>
                <p className={p}>
                  Vous avez la possibilitÃ© d&apos;accepter ou de refuser les cookies en modifiant
                  les paramÃ¨tres de votre navigateur. Aucun cookie ne sera dÃ©posÃ© sans votre
                  consentement.
                </p>
                <p className={p}>
                  Les cookies sont enregistrÃ©s pour une durÃ©e maximale de 24 mois.
                </p>
                <p className={p}>
                  Pour plus d&apos;informations sur la faÃ§on dont nous faisons usage des cookies,
                  lisez notre{" "}
                  <a href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-navy">
                    Politique de ConfidentialitÃ©
                  </a>
                  .
                </p>
              </div>

              {/* 6 */}
              <div className="space-y-3">
                <h2 className={h2}>6 â€“ Droit applicable et attribution de juridiction.</h2>
                <p className={p}>
                  Tout litige en relation avec l&apos;utilisation du site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  est soumis au droit franÃ§ais. En dehors des cas oÃ¹ la loi ne le permet pas,
                  il est fait attribution exclusive de juridiction aux tribunaux compÃ©tents
                  de Strasbourg.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

