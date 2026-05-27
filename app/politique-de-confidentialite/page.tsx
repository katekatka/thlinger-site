import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de ConfidentialitÃ© â€” Christian THALINGER",
  description: "Politique de confidentialitÃ© et protection des donnÃ©es personnelles du cabinet Thalinger Avocat.",
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
              DonnÃ©es personnelles
            </p>
            <h1 className="mb-4 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.6rem]">
              Politique de ConfidentialitÃ©
            </h1>
            <p className={`${p} mt-2`}>DerniÃ¨re mise Ã  jour : 15 avril 2026</p>
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
                Le cabinet THALINGER Avocat, reprÃ©sentÃ© par MaÃ®tre Christian THALINGER,
                attache une grande importance Ã  la protection de vos donnÃ©es personnelles.
                La prÃ©sente politique de confidentialitÃ© vous informe de la maniÃ¨re dont
                vos donnÃ©es sont collectÃ©es, utilisÃ©es et protÃ©gÃ©es lors de votre visite
                sur le site{" "}
                <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                  http://www.thalinger-avocat.fr/
                </a>
                , conformÃ©ment au RÃ¨glement GÃ©nÃ©ral sur la Protection des DonnÃ©es
                (RGPD â€“ RÃ¨glement UE 2016/679) et Ã  la loi nÂ° 78-17 du 6 janvier 1978
                modifiÃ©e (loi Informatique et LibertÃ©s).
              </p>

              {/* 1 */}
              <div className="space-y-3">
                <h2 className={h2}>1 â€“ Responsable du traitement</h2>
                <p className={p}>Le responsable du traitement des donnÃ©es personnelles est :</p>
                <p className={p}>
                  Christian THALINGER â€“ Avocat au Barreau de Strasbourg<br />
                  5 avenue de la Marseillaise, 67000 Strasbourg<br />
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">christian@thalinger-avocat.fr</a>
                  {" "}â€“{" "}
                  <a href="tel:+33637331926" className="underline underline-offset-2 hover:text-navy">+33 6 37 33 19 26</a>
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h2 className={h2}>2 â€“ DonnÃ©es collectÃ©es</h2>
                <p className={p}>Nous collectons les donnÃ©es personnelles suivantes :</p>
                <ul className="space-y-2">
                  <li className={li}>
                    <span className={bullet}>â€¢</span>
                    <span className={p}>
                      Via la navigation sur le site : adresse IP, type de navigateur,
                      pages consultÃ©es, date et heure de connexion (donnÃ©es de connexion
                      collectÃ©es automatiquement).
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-3">
                <h2 className={h2}>3 â€“ FinalitÃ©s du traitement</h2>
                <p className={p}>Vos donnÃ©es personnelles sont traitÃ©es pour les finalitÃ©s suivantes :</p>
                <ul className="space-y-2">
                  {[
                    "RÃ©pondre Ã  vos demandes de contact et de renseignements",
                    "Assurer la gestion de la relation client / prospect",
                    "RÃ©aliser des statistiques de frÃ©quentation du site (donnÃ©es anonymisÃ©es)",
                    "Respecter nos obligations lÃ©gales et rÃ©glementaires",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>â€¢</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4 */}
              <div className="space-y-3">
                <h2 className={h2}>4 â€“ Base juridique du traitement</h2>
                <p className={p}>Le traitement de vos donnÃ©es repose sur :</p>
                <ul className="space-y-2">
                  {[
                    "Votre consentement (article 6.1.a du RGPD) pour l'envoi de communications et le dÃ©pÃ´t de cookies",
                    "L'exÃ©cution de mesures prÃ©contractuelles (article 6.1.b du RGPD) lorsque vous nous contactez en vue d'une prestation",
                    "L'intÃ©rÃªt lÃ©gitime du cabinet (article 6.1.f du RGPD) pour les statistiques de frÃ©quentation et l'amÃ©lioration du site",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>â€¢</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5 */}
              <div className="space-y-3">
                <h2 className={h2}>5 â€“ Destinataires des donnÃ©es</h2>
                <p className={p}>
                  Vos donnÃ©es personnelles sont destinÃ©es exclusivement Ã  MaÃ®tre Christian
                  THALINGER et, le cas Ã©chÃ©ant, Ã  ses collaborateurs dans le cadre strict
                  de la gestion de votre demande.
                </p>
                <p className={p}>Vos donnÃ©es ne sont jamais cÃ©dÃ©es ni vendues Ã  des tiers.</p>
                <p className={p}>
                  Elles peuvent Ãªtre transmises aux sous-traitants suivants, dans le cadre
                  exclusif de l&apos;hÃ©bergement et du fonctionnement technique du site :
                </p>
                <ul className="space-y-2">
                  <li className={li}>
                    <span className={bullet}>â€¢</span>
                    <span className={p}>OVH SAS (hÃ©bergement du site)</span>
                  </li>
                  <li className={li}>
                    <span className={bullet}>â€¢</span>
                    <span className={p}>Google Analytics (statistiques de frÃ©quentation)</span>
                  </li>
                </ul>
              </div>

              {/* 6 */}
              <div className="space-y-3">
                <h2 className={h2}>6 â€“ DurÃ©e de conservation</h2>
                <ul className="space-y-2">
                  {[
                    "DonnÃ©es de contact : conservÃ©es pendant 3 ans Ã  compter du dernier contact, sauf relation contractuelle Ã©tablie",
                    "Cookies et donnÃ©es de navigation : conservÃ©s pendant 14 mois maximum",
                    "DonnÃ©es clients : conservÃ©es pendant la durÃ©e de la relation contractuelle, puis archivÃ©es conformÃ©ment aux obligations lÃ©gales applicables Ã  la profession d'avocat",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>â€¢</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7 */}
              <div className="space-y-3">
                <h2 className={h2}>7 â€“ Vos droits</h2>
                <p className={p}>
                  ConformÃ©ment au RGPD et Ã  la loi Informatique et LibertÃ©s, vous disposez
                  des droits suivants :
                </p>
                <ul className="space-y-2">
                  {[
                    "Droit d'accÃ¨s : obtenir la confirmation que des donnÃ©es vous concernant sont traitÃ©es et en obtenir une copie",
                    "Droit de rectification : demander la correction de donnÃ©es inexactes ou incomplÃ¨tes",
                    "Droit Ã  l'effacement : demander la suppression de vos donnÃ©es, sous rÃ©serve des obligations lÃ©gales de conservation",
                    "Droit Ã  la limitation du traitement : demander la suspension du traitement dans certains cas",
                    "Droit d'opposition : vous opposer au traitement de vos donnÃ©es pour des motifs lÃ©gitimes",
                    "Droit Ã  la portabilitÃ© : recevoir vos donnÃ©es dans un format structurÃ© et couramment utilisÃ©",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>â€¢</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={p}>
                  Pour exercer ces droits, adressez votre demande Ã  :{" "}
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">
                    christian@thalinger-avocat.fr
                  </a>{" "}
                  ou par courrier Ã  5 avenue de la Marseillaise, 67000 Strasbourg, en
                  joignant une copie d&apos;une piÃ¨ce d&apos;identitÃ©.
                </p>
                <p className={p}>
                  Nous nous engageons Ã  rÃ©pondre dans un dÃ©lai d&apos;un mois Ã  compter de
                  la rÃ©ception de votre demande.
                </p>
                <p className={p}>
                  Vous disposez Ã©galement du droit d&apos;introduire une rÃ©clamation auprÃ¨s
                  de la Commission Nationale de l&apos;Informatique et des LibertÃ©s (CNIL) :{" "}
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

              {/* 8 â€” Cookies table */}
              <div className="space-y-4">
                <h2 className={h2}>8 â€“ Cookies</h2>
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
                        <th className="py-3 pr-6 text-left font-normal text-navy">FinalitÃ©</th>
                        <th className="py-3 pr-6 text-left font-normal text-navy">DurÃ©e</th>
                        <th className="py-3 text-left font-normal text-navy">Consentement requis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 pr-6 font-mono text-[0.8125rem]">_ga</td>
                        <td className="py-3 pr-6">
                          Enregistrer un identifiant unique utilisÃ© pour gÃ©nÃ©rer des donnÃ©es
                          statistiques sur la faÃ§on dont le visiteur utilise le site.
                        </td>
                        <td className="py-3 pr-6 whitespace-nowrap">2 ans</td>
                        <td className="py-3">Oui</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={p}>
                  Les cookies strictement nÃ©cessaires au fonctionnement du site ne requiÃ¨rent
                  pas votre consentement. Pour tous les autres cookies, votre consentement est
                  recueilli lors de votre premiÃ¨re visite via un bandeau d&apos;information.
                </p>
                <p className={p}>
                  Vous pouvez Ã  tout moment modifier vos prÃ©fÃ©rences en matiÃ¨re de cookies via
                  les paramÃ¨tres de votre navigateur.
                </p>
              </div>

              {/* 9 */}
              <div className="space-y-3">
                <h2 className={h2}>9 â€“ SÃ©curitÃ©</h2>
                <p className={p}>
                  Christian THALINGER met en Å“uvre les mesures techniques et organisationnelles
                  appropriÃ©es pour protÃ©ger vos donnÃ©es personnelles contre tout accÃ¨s non
                  autorisÃ©, modification, divulgation ou destruction. Le site utilise le
                  protocole HTTPS pour sÃ©curiser les Ã©changes de donnÃ©es.
                </p>
              </div>

              {/* 10 */}
              <div className="space-y-3">
                <h2 className={h2}>10 â€“ Modification de la politique de confidentialitÃ©</h2>
                <p className={p}>
                  La prÃ©sente politique peut Ãªtre modifiÃ©e Ã  tout moment. La date de derniÃ¨re
                  mise Ã  jour figure en haut de cette page. En cas de modification
                  substantielle, une information sera portÃ©e Ã  votre connaissance sur le site.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

