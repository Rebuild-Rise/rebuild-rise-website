import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior";
import { Button, Section, SectionEyebrow } from "@/components/ui";
import { notFoundPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: notFoundPage.metadataTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <InteriorShell>
      <Section background="parchment" pad="roomy">
        <div className="grid min-h-[58vh] content-center gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow>{notFoundPage.eyebrow}</SectionEyebrow>
            <h1 className="rr-title-page mt-5 max-w-[12ch] font-display font-medium text-ink">
              {notFoundPage.heading}
            </h1>
          </div>
          <div className="border-t border-line pt-6 lg:col-span-4">
            <p className="max-w-[48ch] font-sans text-base leading-[1.75] text-ink-muted">
              {notFoundPage.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={notFoundPage.primaryCta.href}>
                {notFoundPage.primaryCta.label}
              </Button>
              <Button
                href={notFoundPage.secondaryCta.href}
                variant="secondary"
              >
                {notFoundPage.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </InteriorShell>
  );
}
