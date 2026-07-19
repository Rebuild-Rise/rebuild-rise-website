import { Button, Section, SectionEyebrow } from "@/components/ui";

interface EditorialCloseProps {
  eyebrow?: string;
  heading: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: "cream" | "parchment" | "ivory" | "forest";
}

export function EditorialClose({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  background = "forest",
}: EditorialCloseProps) {
  const dark = background === "forest";

  return (
    <Section background={background} pad="roomy">
      <div className="grid gap-10 border-y border-olive/30 py-10 md:grid-cols-12 md:items-end md:py-14">
        <div className="md:col-span-8">
          {eyebrow ? (
            <SectionEyebrow theme={dark ? "dark" : "light"}>
              {eyebrow}
            </SectionEyebrow>
          ) : null}
          <h2
            className={`rr-title-chapter mt-4 max-w-[18ch] font-display font-medium ${dark ? "text-cream" : "text-ink"}`}
          >
            {heading}
          </h2>
          <p
            className={`mt-6 max-w-[62ch] font-sans text-base leading-[1.75] ${dark ? "text-cream-muted" : "text-ink-muted"}`}
          >
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          <Button href={primaryCta.href} theme={dark ? "dark" : "light"}>
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              href={secondaryCta.href}
              variant="secondary"
              theme={dark ? "dark" : "light"}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
