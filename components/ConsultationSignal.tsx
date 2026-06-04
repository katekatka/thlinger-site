import Link from "next/link";

export function ConsultationSignal({ lang = "fr" }: { lang?: "fr" | "en" }) {
  if (lang === "en") {
    return (
      <p className="mt-6 max-w-2xl font-sans text-[0.9375rem] leading-relaxed text-navy/55">
        First{" "}
        <strong className="font-medium text-navy/75">30-minute video consultation</strong>{" "}
        —{" "}
        <strong className="font-medium text-navy/75">free of charge, no commitment</strong>,
        available from anywhere in France.{" "}
        <Link
          href="/en/rdv"
          className="text-navy/75 transition-colors duration-200 hover:text-gold"
        >
          Book online
        </Link>
      </p>
    );
  }

  return (
    <p className="mt-6 max-w-2xl font-sans text-[0.9375rem] leading-relaxed text-navy/55">
      Premier échange de 30 minutes en{" "}
      <strong className="font-medium text-navy/75">visioconférence</strong>{" "}
      —{" "}
      <strong className="font-medium text-navy/75">gratuit et sans engagement</strong>,
      accessible depuis toute la France.{" "}
      <Link
        href="/rdv"
        className="text-navy/75 transition-colors duration-200 hover:text-gold"
      >
        Réserver un créneau en ligne
      </Link>
    </p>
  );
}
