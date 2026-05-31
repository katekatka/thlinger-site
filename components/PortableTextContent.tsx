"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal:     ({ children }) => <p className="mb-5 leading-[1.85] text-navy/75">{children}</p>,
    h2:         ({ children }) => <h2 className="mb-4 mt-12 font-serif text-[1.75rem] font-normal leading-tight text-navy">{children}</h2>,
    h3:         ({ children }) => <h3 className="mb-3 mt-8 font-serif text-[1.35rem] font-normal leading-tight text-navy">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-gold pl-6 font-serif text-[1.1rem] italic text-navy/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-5 space-y-2 pl-5 list-disc text-navy/75">{children}</ul>,
    number: ({ children }) => <ol className="mb-5 space-y-2 pl-5 list-decimal text-navy/75">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-[1.75]">{children}</li>,
    number: ({ children }) => <li className="leading-[1.75]">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
    em:     ({ children }) => <em className="italic">{children}</em>,
    code:   ({ children }) => <code className="rounded bg-navy/5 px-1.5 py-0.5 font-mono text-[0.875em] text-navy">{children}</code>,
    link:   ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-navy underline underline-offset-2 transition-colors hover:text-gold"
      >
        {children}
      </a>
    ),
  },
};

export function PortableTextContent({ body }: { body: unknown[] }) {
  return (
    <div className="font-sans text-base">
      <PortableText value={body as Parameters<typeof PortableText>[0]["value"]} components={components} />
    </div>
  );
}
