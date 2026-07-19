import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  CaptionedPhoto,
  Card,
  EmptyFrame,
  FounderCard,
  LessonCard,
  Section,
  SectionEyebrow,
} from "@/components/ui";
import {
  getInvolved,
  hero,
  images,
  story,
  whereWeAre,
  whoWeServe,
} from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Internal styleguide | Rebuild & Rise",
  robots: { index: false, follow: false },
};

function StyleguideBlock({
  title,
  children,
  theme = "light",
}: {
  title: string;
  children: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={`flex flex-col gap-4 border-b pb-10 last:border-b-0 last:pb-0 ${theme === "light" ? "border-line" : "border-olive/40"}`}
    >
      <h3
        className={`font-display text-[1.25rem] font-medium leading-[1.3] ${theme === "light" ? "text-ink" : "text-cream"}`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function StyleguidePage() {
  const storyPhoto = images[story.photos[0] as keyof typeof images];
  const lesson = story.lessons[0];
  const founder = whereWeAre.founders[0];
  const serveCard = whoWeServe.cards[0];
  const involvePath = getInvolved.paths[0];

  return (
    <main>
      <Section background="cream">
        <div className="flex flex-col gap-4">
          <SectionEyebrow theme="light">Styleguide</SectionEyebrow>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] text-ink">
            Component library — light sections
          </h1>
          <p className="max-w-[65ch] font-sans text-ink-muted">
            Foundation components rendered on cream, parchment, and ivory
            backgrounds using copy from siteContent.ts.
          </p>
        </div>
      </Section>

      <Section background="parchment">
        <div className="flex flex-col gap-10">
          <StyleguideBlock title="SectionEyebrow">
            <SectionEyebrow theme="light">{whoWeServe.eyebrow}</SectionEyebrow>
          </StyleguideBlock>

          <StyleguideBlock title="Buttons">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" theme="light" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="secondary"
                theme="light"
                href={hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </StyleguideBlock>

          <StyleguideBlock title="Card">
            <Card href="/about" className="max-w-md">
              <h3 className="font-display text-[1.25rem] font-medium leading-[1.3] text-ink">
                {serveCard.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-[1.6] text-ink-muted">
                {serveCard.body}
              </p>
            </Card>
          </StyleguideBlock>

          <StyleguideBlock title="CaptionedPhoto">
            <CaptionedPhoto image={storyPhoto} className="max-w-md" />
          </StyleguideBlock>

          <StyleguideBlock title="LessonCard">
            <LessonCard quote={lesson.quote} maps={lesson.maps} className="max-w-md" />
          </StyleguideBlock>

          <StyleguideBlock title="EmptyFrame">
            <EmptyFrame
              caption={whereWeAre.emptyFrameCaption}
              className="max-w-md"
            />
          </StyleguideBlock>

          <StyleguideBlock title="FounderCard">
            <FounderCard
              name={founder.name}
              role={founder.role}
              bio={founder.bio}
              headshot={founder.headshot}
              className="max-w-xs"
            />
          </StyleguideBlock>
        </div>
      </Section>

      <Section background="ivory">
        <div className="flex flex-col gap-10">
          <StyleguideBlock title="Section backgrounds">
            <p className="font-sans text-sm text-ink-muted">
              This block sits on the ivory section variant.
            </p>
          </StyleguideBlock>
        </div>
      </Section>

      <Section background="forest">
        <div className="flex flex-col gap-4">
          <SectionEyebrow theme="dark">{getInvolved.eyebrow}</SectionEyebrow>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] text-cream">
            Component library — dark section
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          <StyleguideBlock title="SectionEyebrow (dark)" theme="dark">
            <SectionEyebrow theme="dark">{hero.eyebrow}</SectionEyebrow>
          </StyleguideBlock>

          <StyleguideBlock title="Buttons (dark)" theme="dark">
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                theme="dark"
                href={getInvolved.primaryCta.href}
              >
                {getInvolved.primaryCta.label}
              </Button>
              <Button
                variant="secondary"
                theme="dark"
                href={getInvolved.secondaryCta.href}
              >
                {getInvolved.secondaryCta.label}
              </Button>
            </div>
          </StyleguideBlock>

          <StyleguideBlock title="Dark involvement card pattern" theme="dark">
            <div className="max-w-md rounded-[14px] border border-olive/40 bg-transparent p-6 sm:p-8">
              <h3 className="font-display text-[1.25rem] font-medium leading-[1.3] text-cream">
                {involvePath.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-[1.6] text-cream-muted">
                {involvePath.body}
              </p>
            </div>
          </StyleguideBlock>
        </div>
      </Section>

      <Section background="cream">
        <p className="font-sans text-sm text-ink-muted">
          <Link href="/" className="text-forest underline-offset-2 hover:underline">
            Back to home
          </Link>
        </p>
      </Section>
    </main>
  );
}
