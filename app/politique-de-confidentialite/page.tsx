import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Christian Thalinger",
  description: "Politique de confidentialité et protection des données personnelles du cabinet Thalinger Avocat.",
};

const h2 = "mb-4 font-serif text-[1.125rem] font-normal text-navy";
const p  = "font-sans text-[0.9375rem] leading-[1.85] text-navy/65";
const li = "flex gap-2";
const bullet = "mt-[0.35em] shrink-0 text-gold";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Données personnelles
            </p>
            <h1 className="mb-4 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Politique de Confidentialité
            </h1>
            <p className={`${p} mt-2`}>Dernière mise à jour : 15 avril 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-gold" style={{ height: "2px" }} />

      {/* CONTENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <div className="space-y-10 text-left">

              {/* Intro */}
              <p className={p}>
                Le cabinet THALINGER Avocat, représenté par Maître Christian THALINGER,
                attache une grande importance à la protection de vos données personnelles.
                La présente politique de confidentialité vous informe de la manière dont
                vos données sont collectées, utilisées et protégées lors de votre visite
                sur le site{" "}
                <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                  http://www.thalinger-avocat.fr/
                </a>
                , conformément au Règlement Général sur la Protection des Données
                (RGPD – Règlement UE 2016/679) et à la loi n° 78-17 du 6 janvier 1978
                modifiée (loi Informatique et Libertés).
              </p>

              {/* 1 */}
              <div className="space-y-3">
                <h2 className={h2}>1 – Responsable du traitement</h2>
                <p className={p}>Le responsable du traitement des données personnelles est :</p>
                <p className={p}>
                  Christian THALINGER – Avocat au Barreau de Strasbourg<br />
                  20 rue du Fossé des Tanneurs, 67000 Strasbourg<br />
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">christian@thalinger-avocat.fr</a>
                  {" "}–{" "}
                  <a href="tel:+33637331926" className="underline underline-offset-2 hover:text-navy">+33 6 37 33 19 26</a>
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h2 className={h2}>2 – Données collectées</h2>
                <p className={p}>Nous collectons les données personnelles suivantes :</p>
                <ul className="space-y-2">
                  <li className={li}>
                    <span className={bullet}>•</span>
                    <span className={p}>
                      Via la navigation sur le site : adresse IP, type de navigateur,
                      pages consultées, date et heure de connexion (données de connexion
                      collectées automatiquement).
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-3">
                <h2 className={h2}>3 – Finalités du traitement</h2>
                <p className={p}>Vos données personnelles sont traitées pour les finalités suivantes :</p>
                <ul className="space-y-2">
                  {[
                    "Répondre à vos demandes de contact et de renseignements",
                    "Assurer la gestion de la relation client / prospect",
                    "Réaliser des statistiques de fréquentation du site (données anonymisées)",
                    "Respecter nos obligations légales et réglementaires",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>•</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4 */}
              <div className="space-y-3">
                <h2 className={h2}>4 – Base juridique du traitement</h2>
                <p className={p}>Le traitement de vos données repose sur :</p>
                <ul className="space-y-2">
                  {[
                    "Votre consentement (article 6.1.a du RGPD) pour l'envoi de communications et le dépôt de cookies",
                    "L'exécution de mesures précontractuelles (article 6.1.b du RGPD) lorsque vous nous contactez en vue d'une prestation",
                    "L'intérêt légitime du cabinet (article 6.1.f du RGPD) pour les statistiques de fréquentation et l'amélioration du site",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>•</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5 */}
              <div className="space-y-3">
                <h2 className={h2}>5 – Destinataires des données</h2>
                <p className={p}>
                  Vos données personnelles sont destinées exclusivement à Maître Christian
                  THALINGER et, le cas échéant, à ses collaborateurs dans le cadre strict
                  de la gestion de votre demande.
                </p>
                <p className={p}>Vos données ne sont jamais cédées ni vendues à des tiers.</p>
                <p className={p}>
                  Elles peuvent être transmises aux sous-traitants suivants, dans le cadre
                  exclusif de l&apos;hébergement et du fonctionnement technique du site :
                </p>
                <ul className="space-y-2">
                  <li className={li}>
                    <span className={bullet}>•</span>
                    <span className={p}>OVH SAS (hébergement du site)</span>
                  </li>
                  <li className={li}>
                    <span className={bullet}>•</span>
                    <span className={p}>Google Analytics (statistiques de fréquentation)</span>
                  </li>
                </ul>
              </div>

              {/* 6 */}
              <div className="space-y-3">
                <h2 className={h2}>6 – Durée de conservation</h2>
                <ul className="space-y-2">
                  {[
                    "Données de contact : conservées pendant 3 ans à compter du dernier contact, sauf relation contractuelle établie",
                    "Cookies et données de navigation : conservés pendant 14 mois maximum",
                    "Données clients : conservées pendant la durée de la relation contractuelle, puis archivées conformément aux obligations légales applicables à la profession d'avocat",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>•</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7 */}
              <div className="space-y-3">
                <h2 className={h2}>7 – Vos droits</h2>
                <p className={p}>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
                  des droits suivants :
                </p>
                <ul className="space-y-2">
                  {[
                    "Droit d'accès : obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie",
                    "Droit de rectification : demander la correction de données inexactes ou incomplètes",
                    "Droit à l'effacement : demander la suppression de vos données, sous réserve des obligations légales de conservation",
                    "Droit à la limitation du traitement : demander la suspension du traitement dans certains cas",
                    "Droit d'opposition : vous opposer au traitement de vos données pour des motifs légitimes",
                    "Droit à la portabilité : recevoir vos données dans un format structuré et couramment utilisé",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>•</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={p}>
                  Pour exercer ces droits, adressez votre demande à :{" "}
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">
                    christian@thalinger-avocat.fr
                  </a>{" "}
                  ou par courrier à 20 rue du Fossé des Tanneurs, 67000 Strasbourg, en
                  joignant une copie d&apos;une pièce d&apos;identité.
                </p>
                <p className={p}>
                  Nous nous engageons à répondre dans un délai d&apos;un mois à compter de
                  la réception de votre demande.
                </p>
                <p className={p}>
                  Vous disposez également du droit d&apos;introduire une réclamation auprès
                  de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-navy"
                  >
                    www.cnil.fr
                  </a>.
                </p>
              </div>

              {/* 8 — Cookies table */}
              <div className="space-y-4">
                <h2 className={h2}>8 – Cookies</h2>
                <p className={p}>
                  Le site{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  utilise les cookies suivants :
                </p>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-sans text-[0.875rem] text-navy/65">
                    <thead>
                      <tr className="border-b-2 border-gold">
                        <th className="py-3 pr-6 text-left font-normal text-navy">Cookie</th>
                        <th className="py-3 pr-6 text-left font-normal text-navy">Finalité</th>
                        <th className="py-3 pr-6 text-left font-normal text-navy">Durée</th>
                        <th className="py-3 text-left font-normal text-navy">Consentement requis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 pr-6 font-mono text-[0.8125rem]">_ga</td>
                        <td className="py-3 pr-6">
                          Enregistrer un identifiant unique utilisé pour générer des données
                          statistiques sur la façon dont le visiteur utilise le site.
                        </td>
                        <td className="py-3 pr-6 whitespace-nowrap">2 ans</td>
                        <td className="py-3">Oui</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={p}>
                  Les cookies strictement nécessaires au fonctionnement du site ne requièrent
                  pas votre consentement. Pour tous les autres cookies, votre consentement est
                  recueilli lors de votre première visite via un bandeau d&apos;information.
                </p>
                <p className={p}>
                  Vous pouvez à tout moment modifier vos préférences en matière de cookies via
                  les paramètres de votre navigateur.
                </p>
              </div>

              {/* 9 */}
              <div className="space-y-3">
                <h2 className={h2}>9 – Sécurité</h2>
                <p className={p}>
                  Christian THALINGER met en œuvre les mesures techniques et organisationnelles
                  appropriées pour protéger vos données personnelles contre tout accès non
                  autorisé, modification, divulgation ou destruction. Le site utilise le
                  protocole HTTPS pour sécuriser les échanges de données.
                </p>
              </div>

              {/* 10 */}
              <div className="space-y-3">
                <h2 className={h2}>10 – Modification de la politique de confidentialité</h2>
                <p className={p}>
                  La présente politique peut être modifiée à tout moment. La date de dernière
                  mise à jour figure en haut de cette page. En cas de modification
                  substantielle, une information sera portée à votre connaissance sur le site.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
