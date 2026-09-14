import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: termsPage.metadata.title,
  description: termsPage.metadata.description,
  alternates: { canonical: termsPage.metadata.canonical },
  openGraph: {
    title: termsPage.metadata.title,
    description: termsPage.metadata.description,
    url: termsPage.metadata.canonical,
  },
};

export default function TermsPage() {
  return <LegalPage {...termsPage} />;
}
