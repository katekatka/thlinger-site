import type { Metadata } from "next";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
  title: "Christian THALINGER — Business Lawyer",
  description: "Official website of Christian THALINGER, business lawyer at the Strasbourg Bar.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LangSetter lang="en" />
      {children}
    </>
  );
}
