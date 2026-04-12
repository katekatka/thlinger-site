import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Mentions Légales — Christian Thalinger",
  description: "Mentions légales du site de Me Christian Thalinger, avocat au Barreau de Strasbourg.",
};

const h2 = "mb-4 font-serif text-[1.125rem] font-normal text-[#07137B]";
const p  = "font-sans text-[0.9375rem] leading-[1.85] text-[#07137B]/65";

export default function MentionsLegalesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-[#07137B]/45">
              Informations légales
            </p>
            <h1 className="font-serif text-[2.5rem] font-normal leading-tight text-[#07137B] md:text-[3.75rem]">
              Mentions Légales
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-[#D4AF37]" style={{ height: "2px" }} />

      {/* CONTENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="space-y-10 text-left">

              {/* 1 */}
              <div className="space-y-3">
                <h2 className={h2}>1 – Édition du site</h2>
                <p className={p}>
                  En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
                  confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du
                  site internet{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  l&apos;identité des différents intervenants dans le cadre de sa réalisation
                  et de son suivi :
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Propriétaire du site :</strong> Christian THALINGER –
                  Contact :{" "}
                  <a href="mailto:cthalinger@outlook.fr" className="underline underline-offset-2 hover:text-[#07137B]">cthalinger@outlook.fr</a>
                  {" "}
                  <a href="tel:+33637331926" className="underline underline-offset-2 hover:text-[#07137B]">+33 6 37 33 19 26</a>
                  {" "}– Adresse : 20 rue du Fossé des Tanneurs, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Identification de l&apos;entreprise :</strong> EI Christian THALINGER –
                  SIREN : 909 547 721 – RCS ou RM : Strasbourg –
                  Adresse postale : 20 rue du Fossé des Tanneurs, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Barreau d&apos;inscription :</strong> Barreau de Strasbourg –
                  Ordre des avocats : Barreau de Strasbourg, 3 Rue du Général Frère, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Directeur de la publication :</strong> Christian THALINGER –
                  Contact :{" "}
                  <a href="mailto:cthalinger@outlook.fr" className="underline underline-offset-2 hover:text-[#07137B]">cthalinger@outlook.fr</a>.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Hébergeur :</strong> OVH SAS – 2 rue Kellermann,
                  59100 Roubaix, France. – Téléphone :{" "}
                  <a href="tel:+33972101007" className="underline underline-offset-2 hover:text-[#07137B]">+33 9 72 10 10 07</a>.
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h2 className={h2}>2 – Propriété intellectuelle et contrefaçons.</h2>
                <p className={p}>
                  Christian THALINGER est propriétaire des droits de propriété intellectuelle
                  et détient les droits d&apos;usage sur tous les éléments accessibles sur le site
                  internet, notamment les textes, images, graphismes, logos, vidéos,
                  architecture, icônes et sons.
                </p>
                <p className={p}>
                  Toute reproduction, représentation, modification, publication, adaptation de
                  tout ou partie des éléments du site, quel que soit le moyen ou le procédé
                  utilisé, est interdite, sauf autorisation écrite préalable de Christian THALINGER.
                </p>
                <p className={p}>
                  Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments
                  qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et
                  poursuivie conformément aux dispositions des articles L.335-2 et suivants du
                  Code de Propriété Intellectuelle.
                </p>
              </div>

              {/* 3 */}
              <div className="space-y-3">
                <h2 className={h2}>3 – Limitations de responsabilité.</h2>
                <p className={p}>
                  Christian THALINGER ne pourra être tenu pour responsable des dommages directs
                  et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Christian THALINGER décline toute responsabilité quant à l&apos;utilisation qui
                  pourrait être faite des informations et contenus présents sur{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Christian THALINGER s&apos;engage à sécuriser au mieux le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>
                  , cependant sa responsabilité ne pourra être mise en cause si des données
                  indésirables sont importées et installées sur son site à son insu.
                </p>
                <p className={p}>
                  Des espaces interactifs (espace contact ou commentaires) sont à la disposition
                  des utilisateurs. Christian THALINGER se réserve le droit de supprimer, sans
                  mise en demeure préalable, tout contenu déposé dans cet espace qui
                  contreviendrait à la législation applicable en France, en particulier aux
                  dispositions relatives à la protection des données.
                </p>
                <p className={p}>
                  Le cas échéant, Christian THALINGER se réserve également la possibilité de
                  mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur,
                  notamment en cas de message à caractère raciste, injurieux, diffamant, ou
                  pornographique, quel que soit le support utilisé (texte, photographie…).
                </p>
              </div>

              {/* 4 */}
              <div className="space-y-3">
                <h2 className={h2}>4 – CNIL et gestion des données personnelles.</h2>
                <p className={p}>
                  Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée,
                  l&apos;utilisateur du site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  dispose d&apos;un droit d&apos;accès, de modification et de suppression des
                  informations collectées.
                </p>
                <p className={p}>
                  Pour plus d&apos;informations sur la façon dont nous traitons vos données (type
                  de données, finalité, destinataire…), lisez notre{" "}
                  <a href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-[#07137B]">
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </div>

              {/* 5 */}
              <div className="space-y-3">
                <h2 className={h2}>5 – Liens hypertextes et cookies.</h2>
                <p className={p}>
                  Le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  contient des liens hypertextes vers d&apos;autres sites et dégage toute
                  responsabilité à propos de ces liens externes ou des liens créés par d&apos;autres
                  sites vers{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  La navigation sur le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur
                  de l&apos;utilisateur.
                </p>
                <p className={p}>
                  Un « cookie » est un fichier de petite taille qui enregistre des informations
                  relatives à la navigation d&apos;un utilisateur sur un site. Les données ainsi
                  obtenues permettent d&apos;obtenir des mesures de fréquentation, par exemple.
                </p>
                <p className={p}>
                  Vous avez la possibilité d&apos;accepter ou de refuser les cookies en modifiant
                  les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre
                  consentement.
                </p>
                <p className={p}>
                  Les cookies sont enregistrés pour une durée maximale de 24 mois.
                </p>
                <p className={p}>
                  Pour plus d&apos;informations sur la façon dont nous faisons usage des cookies,
                  lisez notre{" "}
                  <a href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-[#07137B]">
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </div>

              {/* 6 */}
              <div className="space-y-3">
                <h2 className={h2}>6 – Droit applicable et attribution de juridiction.</h2>
                <p className={p}>
                  Tout litige en relation avec l&apos;utilisation du site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  est soumis au droit français. En dehors des cas où la loi ne le permet pas,
                  il est fait attribution exclusive de juridiction aux tribunaux compétents
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
