import Link from "next/link";

export function ConsultationSignal() {
  return (
    <p className="mt-6 max-w-2xl font-sans text-[0.9375rem] leading-relaxed text-navy/55">
      Premier échange de 30 minutes en{" "}
      <strong className="font-medium text-navy/75">visioconférence</strong>{" "}
      —{" "}
      <strong className="font-medium text-navy/75">gratuit et sans engagement</strong>,
      accessible depuis toute la France.{" "}
      <Link
        href="/rdv"
        className="text-navy/75 underline-offset-2 transition-colors duration-200 hover:text-navy hover:underline"
      >
        Réserver un créneau en ligne
      </Link>
    </p>
  );
}
