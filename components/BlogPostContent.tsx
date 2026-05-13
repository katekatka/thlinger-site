interface Props {
  htmlContent: string;
}

export default function BlogPostContent({ htmlContent }: Props) {
  return (
    <div className="flex justify-center px-6 pb-24">
      <article
        className="w-full max-w-[720px]"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}
