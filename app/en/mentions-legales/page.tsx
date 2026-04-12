import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Legal Notice — Christian Thalinger",
  description: "Legal notice for the website of Christian Thalinger, Attorney at the Strasbourg Bar.",
};

const h2 = "mb-4 font-serif text-[1.125rem] font-normal text-[#07137B]";
const p  = "font-sans text-[0.9375rem] leading-[1.85] text-[#07137B]/65";

export default function LegalNoticePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimatedSection>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-[#07137B]/45">
              Legal information
            </p>
            <h1 className="font-serif text-[2.5rem] font-normal leading-tight text-[#07137B] md:text-[3.75rem]">
              Legal Notice
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
                <h2 className={h2}>1 – Website publisher</h2>
                <p className={p}>
                  Pursuant to Article 6 of French Law No. 2004-575 of 21 June 2004 on
                  confidence in the digital economy, the following information is provided
                  to users of the website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  regarding the persons involved in its creation and operation:
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Website owner:</strong> Christian THALINGER –
                  Contact:{" "}
                  <a href="mailto:cthalinger@outlook.fr" className="underline underline-offset-2 hover:text-[#07137B]">cthalinger@outlook.fr</a>
                  {" "}
                  <a href="tel:+33637331926" className="underline underline-offset-2 hover:text-[#07137B]">+33 6 37 33 19 26</a>
                  {" "}– Address: 20 rue du Fossé des Tanneurs, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Business registration:</strong> EI Christian THALINGER –
                  SIREN: 909 547 721 – Trade register: Strasbourg –
                  Postal address: 20 rue du Fossé des Tanneurs, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Bar registration:</strong> Strasbourg Bar –
                  Bar Association: Barreau de Strasbourg, 3 Rue du Général Frère, 67000 Strasbourg.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Publication director:</strong> Christian THALINGER –
                  Contact:{" "}
                  <a href="mailto:cthalinger@outlook.fr" className="underline underline-offset-2 hover:text-[#07137B]">cthalinger@outlook.fr</a>.
                </p>
                <p className={p}>
                  <strong className="text-[#07137B]">Hosting provider:</strong> OVH SAS – 2 rue Kellermann,
                  59100 Roubaix, France – Phone:{" "}
                  <a href="tel:+33972101007" className="underline underline-offset-2 hover:text-[#07137B]">+33 9 72 10 10 07</a>.
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-3">
                <h2 className={h2}>2 – Intellectual property and counterfeiting.</h2>
                <p className={p}>
                  Christian THALINGER owns the intellectual property rights and holds the
                  usage rights to all elements accessible on the website, including texts,
                  images, graphics, logos, videos, architecture, icons and sounds.
                </p>
                <p className={p}>
                  Any reproduction, representation, modification, publication or adaptation
                  of all or part of the elements of the site, by any means or process
                  whatsoever, is prohibited without the prior written authorisation of
                  Christian THALINGER.
                </p>
                <p className={p}>
                  Any unauthorised use of the site or any of the elements it contains will
                  be considered as an act of counterfeiting and prosecuted in accordance
                  with Articles L.335-2 et seq. of the French Intellectual Property Code.
                </p>
              </div>

              {/* 3 */}
              <div className="space-y-3">
                <h2 className={h2}>3 – Limitation of liability.</h2>
                <p className={p}>
                  Christian THALINGER cannot be held liable for direct or indirect damage
                  caused to the user&apos;s equipment when accessing the website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Christian THALINGER disclaims all liability for the use that may be made
                  of the information and content on{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Christian THALINGER undertakes to secure the website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  to the best of its ability; however, liability cannot be incurred if
                  unwanted data is imported and installed on the site without its knowledge.
                </p>
                <p className={p}>
                  Interactive spaces (contact form or comments) are available to users.
                  Christian THALINGER reserves the right to delete, without prior notice,
                  any content posted in this space that contravenes applicable French law,
                  in particular provisions relating to data protection.
                </p>
                <p className={p}>
                  Where applicable, Christian THALINGER also reserves the right to hold
                  the user civilly and/or criminally liable, in particular in the event of
                  racist, abusive, defamatory or pornographic messages, regardless of the
                  medium used (text, photograph, etc.).
                </p>
              </div>

              {/* 4 */}
              <div className="space-y-3">
                <h2 className={h2}>4 – GDPR and personal data management.</h2>
                <p className={p}>
                  In accordance with the provisions of Law No. 78-17 of 6 January 1978 as
                  amended, users of the website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  have the right to access, modify and delete information collected about them.
                </p>
                <p className={p}>
                  For more information on how we process your data (type of data, purpose,
                  recipients, etc.), please read our{" "}
                  <a href="/en/politique-de-confidentialite" className="underline underline-offset-2 hover:text-[#07137B]">
                    Privacy Policy
                  </a>.
                </p>
              </div>

              {/* 5 */}
              <div className="space-y-3">
                <h2 className={h2}>5 – Hyperlinks and cookies.</h2>
                <p className={p}>
                  The website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  contains hyperlinks to other sites and accepts no liability regarding
                  these external links or links created by other sites to{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>.
                </p>
                <p className={p}>
                  Browsing the website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  may cause cookie(s) to be installed on the user&apos;s device.
                </p>
                <p className={p}>
                  A &ldquo;cookie&rdquo; is a small file that records information relating
                  to a user&apos;s browsing on a site. The data obtained is used to measure
                  traffic, for example.
                </p>
                <p className={p}>
                  You may accept or refuse cookies by changing your browser settings.
                  No cookie will be placed without your consent.
                </p>
                <p className={p}>
                  Cookies are stored for a maximum period of 24 months.
                </p>
                <p className={p}>
                  For more information on how we use cookies, please read our{" "}
                  <a href="/en/politique-de-confidentialite" className="underline underline-offset-2 hover:text-[#07137B]">
                    Privacy Policy
                  </a>.
                </p>
              </div>

              {/* 6 */}
              <div className="space-y-3">
                <h2 className={h2}>6 – Applicable law and jurisdiction.</h2>
                <p className={p}>
                  Any dispute relating to the use of the website{" "}
                  <a href="http://www.thalinger-avocat.fr/" className="underline underline-offset-2 hover:text-[#07137B]">
                    http://www.thalinger-avocat.fr/
                  </a>{" "}
                  is subject to French law. Except where prohibited by law, exclusive
                  jurisdiction is attributed to the competent courts of Strasbourg.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
