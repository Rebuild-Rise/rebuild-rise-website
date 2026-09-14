import Link from "next/link";
import { InteriorShell } from "@/components/interior";
import { Section, SectionEyebrow } from "@/components/ui";

interface LegalSection {
  heading: string;
  paragraphs: readonly string[];
}

interface LegalPageProps {
  eyebrow: string;
  heading: string;
  effectiveDate: string;
  introduction: string;
  sections: readonly LegalSection[];
}

function LinkedParagraph({ children }: { children: string }) {
  const email = "contact@rebuildandrise.ng";
  const ndpc = "Nigeria Data Protection Commission";
  const parts = children.split(new RegExp(`(${email}|${ndpc})`, "g"));

  return (
    <p className="font-sans text-[0.9375rem] leading-[1.8] text-ink-muted sm:text-base">
      {parts.map((part, index) => {
        if (part === email) {
          return (
            <a key={`${part}-${index}`} href={`mailto:${email}`} className="font-medium text-forest underline decoration-olive underline-offset-4">
              {email}
            </a>
          );
        }
        if (part === ndpc) {
          return (
            <a key={`${part}-${index}`} href="https://ndpc.gov.ng/" target="_blank" rel="noreferrer" className="font-medium text-forest underline decoration-olive underline-offset-4">
              {ndpc}
            </a>
          );
        }
        return part;
      })}
    </p>
  );
}

export function LegalPage({
  eyebrow,
  heading,
  effectiveDate,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <InteriorShell>
      <Section background="forest" pad="default">
        <div className="grid gap-9 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow theme="dark">{eyebrow}</SectionEyebrow>
            <h1 className="rr-title-page mt-5 max-w-[15ch] font-display font-medium text-cream">
              {heading}
            </h1>
          </div>
          <div className="border-y border-olive/40 py-5 lg:col-span-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-leaf">
              {effectiveDate}
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream" pad="roomy">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-14">
          <aside className="lg:col-span-4">
            <div className="border-t border-walnut/30 pt-5 lg:sticky lg:top-8">
              <p className="max-w-[38ch] font-sans text-base leading-[1.8] text-ink">
                {introduction}
              </p>
              <p className="mt-6 font-sans text-xs leading-[1.7] text-ink-muted">
                This website information is written for clarity and does not replace advice from a qualified Nigerian legal or data-protection professional.
              </p>
            </div>
          </aside>

          <div className="lg:col-start-6 lg:col-span-7">
            <div className="border-b border-line">
              {sections.map((section, index) => (
                <section key={section.heading} className="border-t border-line py-8 sm:py-10" aria-labelledby={`legal-section-${index}`}>
                  <div className="grid gap-5 sm:grid-cols-[2.75rem_1fr] sm:gap-7">
                    <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-walnut">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h2 id={`legal-section-${index}`} className="font-display text-[clamp(1.65rem,3vw,2.25rem)] font-medium leading-[1.08] text-forest">
                        {section.heading}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <LinkedParagraph key={paragraph}>{paragraph}</LinkedParagraph>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/contact" className="font-sans text-sm font-medium text-forest underline decoration-olive underline-offset-4 hover:text-walnut">
                Contact Rebuild & Rise
              </Link>
              <Link href="/" className="font-sans text-sm font-medium text-forest underline decoration-olive underline-offset-4 hover:text-walnut">
                Return home
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </InteriorShell>
  );
}
