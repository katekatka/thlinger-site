import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy — Christian Thalinger",
  description: "Privacy policy and personal data protection for the Thalinger Avocat law firm.",
};

const h2 = "mb-4 font-serif text-[1.125rem] font-normal text-navy";
const p  = "font-sans text-[0.9375rem] leading-[1.85] text-navy/65";
const li = "flex gap-2";
const bullet = "mt-[0.35em] shrink-0 text-gold";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-navy-muted">
              Personal data
            </p>
            <h1 className="mb-4 font-serif text-[2.5rem] font-normal leading-tight text-navy md:text-[3.75rem]">
              Privacy Policy
            </h1>
            <p className={`${p} mt-2`}>Last updated: 15 April 2026</p>
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
                The THALINGER Avocat law firm, represented by Maître Christian THALINGER,
                places great importance on the protection of your personal data. This
                privacy policy informs you of how your data is collected, used and
                protected when you visit the website{" "}
                <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                  http://www.thalinger-avocat.fr/
                </a>
                , in accordance with the General Data Protection Regulation
                (GDPR – EU Regulation 2016/679) and French Law No. 78-17 of
                6 January 1978 as amended.
              </p>

              {/* 1 */}
              <div className="space-y-3">
                <h2 className={h2}>1 – Data controller</h2>
                <p className={p}>The data controller is:</p>
                <p className={p}>
                  Christian THALINGER – Attorney at the Strasbourg Bar<br />
                  20 rue du Fossé des Tanneurs, 67000 Strasbourg<br />
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">christian@thalinger-avocat.fr</a>
                  {" "}–{" "}
                  <a href="tel:+33637331926" className="underline underline-offset-2 hover:text-navy">+33 6 37 33 19 26</a>
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h2 className={h2}>2 – Data collected</h2>
                <p className={p}>We collect the following personal data:</p>
                <ul className="space-y-2">
                  <li className={li}>
                    <span className={bullet}>•</span>
                    <span className={p}>
                      Through website navigation: IP address, browser type, pages visited,
                      date and time of connection (connection data collected automatically).
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="space-y-3">
                <h2 className={h2}>3 – Purposes of processing</h2>
                <p className={p}>Your personal data is processed for the following purposes:</p>
                <ul className="space-y-2">
                  {[
                    "Responding to your contact and information requests",
                    "Managing the client/prospect relationship",
                    "Producing website traffic statistics (anonymised data)",
                    "Complying with our legal and regulatory obligations",
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
                <h2 className={h2}>4 – Legal basis for processing</h2>
                <p className={p}>The processing of your data is based on:</p>
                <ul className="space-y-2">
                  {[
                    "Your consent (Article 6.1.a GDPR) for the sending of communications and the placement of cookies",
                    "The performance of pre-contractual measures (Article 6.1.b GDPR) when you contact us regarding a service",
                    "The legitimate interest of the firm (Article 6.1.f GDPR) for traffic statistics and website improvement",
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
                <h2 className={h2}>5 – Recipients of data</h2>
                <p className={p}>
                  Your personal data is intended exclusively for Maître Christian THALINGER
                  and, where applicable, for his associates strictly within the framework
                  of managing your request.
                </p>
                <p className={p}>Your data is never sold or transferred to third parties.</p>
                <p className={p}>
                  It may be transmitted to the following sub-processors, solely for the
                  purpose of hosting and technical operation of the site:
                </p>
                <ul className="space-y-2">
                  <li className={li}>
                    <span className={bullet}>•</span>
                    <span className={p}>OVH SAS (website hosting)</span>
                  </li>
                  <li className={li}>
                    <span className={bullet}>•</span>
                    <span className={p}>Google Analytics (traffic statistics)</span>
                  </li>
                </ul>
              </div>

              {/* 6 */}
              <div className="space-y-3">
                <h2 className={h2}>6 – Retention periods</h2>
                <ul className="space-y-2">
                  {[
                    "Contact data: retained for 3 years from the last contact, unless a contractual relationship has been established",
                    "Cookies and browsing data: retained for a maximum of 14 months",
                    "Client data: retained for the duration of the contractual relationship, then archived in accordance with the legal obligations applicable to the legal profession",
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
                <h2 className={h2}>7 – Your rights</h2>
                <p className={p}>
                  Under the GDPR, you have the following rights:
                </p>
                <ul className="space-y-2">
                  {[
                    "Right of access: obtain confirmation that data relating to you is being processed and receive a copy",
                    "Right of rectification: request the correction of inaccurate or incomplete data",
                    "Right to erasure: request the deletion of your data, subject to legal retention obligations",
                    "Right to restriction of processing: request the suspension of processing in certain cases",
                    "Right to object: object to the processing of your data on legitimate grounds",
                    "Right to data portability: receive your data in a structured, commonly used format",
                  ].map((item) => (
                    <li key={item} className={li}>
                      <span className={bullet}>•</span>
                      <span className={p}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={p}>
                  To exercise these rights, send your request to:{" "}
                  <a href="mailto:christian@thalinger-avocat.fr" className="underline underline-offset-2 hover:text-navy">
                    christian@thalinger-avocat.fr
                  </a>{" "}
                  or by post to 20 rue du Fossé des Tanneurs, 67000 Strasbourg, enclosing
                  a copy of proof of identity.
                </p>
                <p className={p}>
                  We undertake to respond within one month of receiving your request.
                </p>
                <p className={p}>
                  You also have the right to lodge a complaint with the French data
                  protection authority (CNIL):{" "}
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

              {/* 8 */}
              <div className="space-y-4">
                <h2 className={h2}>8 – Cookies</h2>
                <p className={p}>
                  The website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-navy">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  uses the following cookies:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-sans text-[0.875rem] text-navy/65">
                    <thead>
                      <tr className="border-b-2 border-gold">
                        <th className="py-3 pr-6 text-left font-normal text-navy">Cookie</th>
                        <th className="py-3 pr-6 text-left font-normal text-navy">Purpose</th>
                        <th className="py-3 pr-6 text-left font-normal text-navy">Duration</th>
                        <th className="py-3 text-left font-normal text-navy">Consent required</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-navy/10">
                        <td className="py-3 pr-6 font-mono text-[0.8125rem]">_ga</td>
                        <td className="py-3 pr-6">
                          Registers a unique identifier used to generate statistical data
                          on how the visitor uses the site.
                        </td>
                        <td className="py-3 pr-6 whitespace-nowrap">2 years</td>
                        <td className="py-3">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={p}>
                  Cookies strictly necessary for the operation of the site do not require
                  your consent. For all other cookies, your consent is collected on your
                  first visit via an information banner.
                </p>
                <p className={p}>
                  You may change your cookie preferences at any time via your browser settings.
                </p>
              </div>

              {/* 9 */}
              <div className="space-y-3">
                <h2 className={h2}>9 – Security</h2>
                <p className={p}>
                  Christian THALINGER implements appropriate technical and organisational
                  measures to protect your personal data against unauthorised access,
                  modification, disclosure or destruction. The site uses the HTTPS protocol
                  to secure data exchanges.
                </p>
              </div>

              {/* 10 */}
              <div className="space-y-3">
                <h2 className={h2}>10 – Changes to this privacy policy</h2>
                <p className={p}>
                  This policy may be amended at any time. The date of the last update
                  appears at the top of this page. In the event of a material change,
                  notice will be given on the site.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
