import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: privacyPage.metadata.title,
  description: privacyPage.metadata.description,
  alternates: { canonical: privacyPage.metadata.canonical },
  openGraph: {
    title: privacyPage.metadata.title,
    description: privacyPage.metadata.description,
    url: privacyPage.metadata.canonical,
  },
};

export default function PrivacyPage() {
  return <LegalPage {...privacyPage} />;
}
