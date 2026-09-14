import type { Metadata } from "next";
import { InteriorShell } from "@/components/interior";
import { Button, Section, SectionEyebrow } from "@/components/ui";
import { thankYouPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: thankYouPage.metadataTitle,
  description: thankYouPage.body,
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <InteriorShell>
      <Section background="parchment" pad="roomy">
        <div className="grid min-h-[58vh] content-center gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionEyebrow>{thankYouPage.eyebrow}</SectionEyebrow>
            <h1 className="rr-title-page mt-5 max-w-[13ch] font-display font-medium text-forest">
              {thankYouPage.heading}
            </h1>
            <p className="mt-7 max-w-[60ch] font-sans text-base leading-[1.8] text-ink-muted">
              {thankYouPage.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={thankYouPage.primaryCta.href}>{thankYouPage.primaryCta.label}</Button>
              <Button href={thankYouPage.secondaryCta.href} variant="secondary">
                {thankYouPage.secondaryCta.label}
              </Button>
            </div>
          </div>

          <aside className="border-y border-walnut/30 py-6 lg:col-start-9 lg:col-span-4">
            <SectionEyebrow>{thankYouPage.nextEyebrow}</SectionEyebrow>
            <ol className="mt-5 border-b border-line">
              {thankYouPage.nextSteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-4">
                  <span className="font-mono text-[0.6875rem] text-walnut">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm leading-[1.7] text-ink-muted">{step}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Section>
    </InteriorShell>
  );
}
