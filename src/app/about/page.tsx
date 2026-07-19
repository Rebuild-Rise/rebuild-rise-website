import type { Metadata } from "next";
import Image from "next/image";
import { EditorialClose, InteriorShell } from "@/components/interior";
import {
  AmpText,
  FounderCard,
  Section,
  SectionEyebrow,
} from "@/components/ui";
import { aboutPage, images, whereWeAre } from "@/content/siteContent";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: aboutPage.metadata.title,
  description: aboutPage.metadata.description,
  alternates: { canonical: aboutPage.metadata.canonical },
  openGraph: {
    title: aboutPage.metadata.openGraphTitle,
    description: aboutPage.metadata.description,
    url: aboutPage.metadata.canonical,
    type: "website",
  },
};

const archiveRows = [
  aboutPage.archive.imageKeys.slice(0, 3),
  aboutPage.archive.imageKeys.slice(3, 6),
  aboutPage.archive.imageKeys.slice(6, 9),
];

const archivePlacements = [
  [
    "md:col-span-6",
    "md:col-span-3 md:mt-12",
    "md:col-span-3 md:mt-28",
  ],
  [
    "md:col-span-5",
    "md:col-span-4 md:mt-20",
    "md:col-span-3 md:mt-4",
  ],
  [
    "md:col-span-3",
    "md:col-span-5 md:mt-20",
    "md:col-span-4 md:mt-8",
  ],
];

function ArchiveFigure({
  imageKey,
  className,
}: {
  imageKey: string;
  className?: string;
}) {
  const image = images[imageKey];

  return (
    <figure className={cn("min-w-0 self-start", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1199px) 45vw, 520px"
        className="h-auto w-full"
      />
      <figcaption className="mt-3 grid min-w-0 gap-1 border-t border-line pt-2.5">
        <span className="min-w-0 break-words font-sans text-sm font-medium leading-[1.5] text-forest">
          {image.place}
        </span>
        <span className="min-w-0 break-words font-mono text-[0.6875rem] leading-[1.5] text-ink-muted">
          {image.stamp}
        </span>
      </figcaption>
    </figure>
  );
}

export default function AboutPage() {
  return (
    <InteriorShell className="bg-cream">
      <Section
        background="cream"
        pad="roomy"
        aria-labelledby="about-title"
        className="border-t border-line"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow>{aboutPage.intro.eyebrow}</SectionEyebrow>
            <h1
              id="about-title"
              className="rr-title-page mt-5 max-w-[15ch] font-display font-medium text-ink"
            >
              {aboutPage.intro.heading}
            </h1>
            <p className="mt-8 max-w-[62ch] font-sans text-[clamp(1.05rem,1.5vw,1.25rem)] leading-[1.7] text-ink-muted">
              {aboutPage.intro.body}
            </p>
          </div>

          <ul className="border-y border-walnut/30 lg:col-span-3 lg:col-start-10">
            {aboutPage.intro.status.map((item, index) => (
              <li
                key={item}
                className={cn(
                  "grid grid-cols-[2rem_1fr] gap-3 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-walnut",
                  index > 0 && "border-t border-line",
                )}
              >
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-[clamp(4.5rem,10vh,8rem)] grid border-t border-line pt-8 lg:grid-cols-12 lg:gap-x-8 lg:pt-10"
          aria-labelledby="about-purpose"
        >
          <div className="pb-8 lg:col-span-4 lg:pb-0">
            <SectionEyebrow>{aboutPage.purpose.eyebrow}</SectionEyebrow>
            <h2
              id="about-purpose"
              className="rr-title-section mt-4 max-w-[13ch] font-display font-medium text-ink"
            >
              {aboutPage.purpose.heading}
            </h2>
          </div>

          {aboutPage.purpose.entries.map((entry) => (
            <article
              key={entry.label}
              className="border-t border-line py-7 lg:col-span-4 lg:border-l lg:border-t-0 lg:py-0 lg:pl-8"
            >
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-walnut">
                {entry.label}
              </p>
              <p className="mt-4 max-w-[48ch] font-sans text-base leading-[1.78] text-ink-muted">
                {entry.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        background="parchment"
        pad="roomy"
        aria-labelledby="about-chronology"
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionEyebrow>{aboutPage.chronology.eyebrow}</SectionEyebrow>
            <h2
              id="about-chronology"
              className="rr-title-chapter mt-4 max-w-[16ch] font-display font-medium text-ink"
            >
              {aboutPage.chronology.heading}
            </h2>
          </div>
          <p className="max-w-[48ch] font-sans text-base leading-[1.75] text-ink-muted md:col-span-5">
            {aboutPage.chronology.intro}
          </p>
        </div>

        <ol className="mt-12 border-y border-walnut/30 md:mt-16">
          {aboutPage.chronology.entries.map((entry, index) => (
            <li
              key={entry.title}
              className={cn(
                "grid gap-4 py-7 md:grid-cols-12 md:gap-7 md:py-8",
                index > 0 && "border-t border-line",
              )}
            >
              <div className="flex items-baseline gap-4 md:col-span-2 md:flex-col md:gap-1">
                <span className="font-mono text-[0.6875rem] text-walnut">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                  {entry.date}
                </span>
              </div>
              <h3 className="rr-title-item max-w-[24ch] font-display font-medium text-ink md:col-span-4">
                {entry.title}
              </h3>
              <p className="max-w-[58ch] font-sans text-base leading-[1.75] text-ink-muted md:col-span-6">
                {entry.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        background="ivory"
        pad="roomy"
        aria-labelledby="about-archive"
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <SectionEyebrow>{aboutPage.archive.eyebrow}</SectionEyebrow>
            <h2
              id="about-archive"
              className="rr-title-chapter mt-4 max-w-[12ch] font-display font-medium text-ink"
            >
              {aboutPage.archive.heading}
            </h2>
          </div>
          <p className="max-w-[54ch] font-sans text-base leading-[1.75] text-ink-muted md:col-span-6">
            {aboutPage.archive.intro}
          </p>
        </div>

        <p className="mt-10 border-y border-walnut/30 py-4 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-walnut md:mt-14">
          {aboutPage.archive.rail}
        </p>

        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {archiveRows.map((row, rowIndex) => (
            <div
              key={row.join("-")}
              className="grid items-start gap-12 md:grid-cols-12 md:gap-6"
            >
              {row.map((imageKey, imageIndex) => (
                <ArchiveFigure
                  key={imageKey}
                  imageKey={imageKey}
                  className={archivePlacements[rowIndex][imageIndex]}
                />
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section
        background="parchment"
        pad="roomy"
        aria-labelledby="about-principles"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
            <SectionEyebrow>{aboutPage.principles.eyebrow}</SectionEyebrow>
            <h2
              id="about-principles"
              className="rr-title-section mt-4 max-w-[13ch] font-display font-medium text-ink"
            >
              {aboutPage.principles.heading}
            </h2>
            <p className="mt-6 max-w-[42ch] font-sans text-base leading-[1.75] text-ink-muted">
              {aboutPage.principles.intro}
            </p>
          </div>

          <ol className="border-b border-walnut/30 lg:col-span-7 lg:col-start-6">
            {aboutPage.principles.entries.map((entry, index) => (
              <li
                key={entry.title}
                className="grid gap-x-5 gap-y-3 border-t border-walnut/30 py-7 md:grid-cols-12 md:py-8"
              >
                <span className="font-mono text-[0.6875rem] text-walnut md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.35rem] font-medium leading-[1.15] text-ink md:col-span-4">
                  <AmpText>{entry.title}</AmpText>
                </h3>
                <p className="max-w-[54ch] font-sans text-sm leading-[1.7] text-ink-muted md:col-span-7 md:text-[0.9375rem]">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        background="cream"
        pad="roomy"
        aria-labelledby="about-team"
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionEyebrow>{aboutPage.team.eyebrow}</SectionEyebrow>
            <h2
              id="about-team"
              className="rr-title-chapter mt-4 max-w-[44ch] font-display font-medium text-ink"
            >
              {aboutPage.team.heading}
            </h2>
            <p className="mt-6 max-w-[58ch] font-sans text-base leading-[1.75] text-ink-muted">
              {aboutPage.team.intro}
            </p>
          </div>
          <p className="border-t border-line pt-4 font-sans text-sm leading-[1.65] text-ink-muted md:col-span-4 md:col-start-9">
            {aboutPage.team.registration}
          </p>
        </div>

        <div className="mt-12 grid border-y border-walnut/30 lg:grid-cols-2 lg:gap-8">
          {whereWeAre.founders.map((founder, index) => {
            const headshotAlt = Object.values(images).find(
              (image) => image.src === founder.headshot,
            )?.alt;

            return (
              <FounderCard
                key={founder.name}
                {...founder}
                headshotAlt={headshotAlt}
                showRule={false}
                className={cn(
                  "py-8",
                  index > 0 &&
                    "border-t border-line lg:border-l lg:border-t-0 lg:pl-8",
                )}
              />
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 border-y border-line py-7 md:grid-cols-12 md:gap-8">
          <SectionEyebrow className="md:col-span-3">
            {aboutPage.documentaryStandard.eyebrow}
          </SectionEyebrow>
          <p className="max-w-[68ch] font-sans text-base leading-[1.75] text-ink-muted md:col-span-8 md:col-start-5">
            {aboutPage.documentaryStandard.body}
          </p>
        </div>
      </Section>

      <EditorialClose {...aboutPage.close} />
    </InteriorShell>
  );
}
