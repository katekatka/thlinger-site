import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Thalinger — Business Lawyer",
  description: "Official website of Christian Thalinger, business lawyer at the Strasbourg Bar.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
