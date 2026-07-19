import type { Metadata } from "next";
import Image from "next/image";

import { InteriorShell } from "@/components/interior/InteriorShell";
import { Button, Container, SectionEyebrow } from "@/components/ui";
import { images, modelPage } from "@/content/siteContent";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: modelPage.metadata.title,
  description: modelPage.metadata.description,
  alternates: {
    canonical: modelPage.metadata.canonical,
  },
  openGraph: {
    title: modelPage.metadata.openGraphTitle,
    description: modelPage.metadata.description,
    url: modelPage.metadata.canonical,
    type: "website",
  },
};

type Movement = (typeof modelPage.movements)[number];

function SequenceRail() {
  return (
    <section
      className="mt-14 border-t border-walnut/30 pt-7 sm:mt-16 sm:pt-9 lg:mt-20"
      aria-labelledby="model-sequence-heading"
    >
      <div className="grid gap-4 md:grid-cols-12 md:items-end">
        <h2
          id="model-sequence-heading"
          className="rr-title-section font-display text-forest md:col-span-5"
        >
          {modelPage.sequence.heading}
        </h2>
        <p className="max-w-[58ch] text-[0.9375rem] leading-7 text-ink-muted md:col-span-7 md:justify-self-end">
          {modelPage.sequence.intro}
        </p>
      </div>

      <ol className="mt-9 grid sm:grid-cols-2 md:grid-cols-12 xl:grid-cols-7">
        {modelPage.sequence.steps.map((step, index) => (
          <li
            key={step.title}
            className={cn(
              "relative border-t border-walnut/30 py-5 pr-4 sm:px-4 sm:first:pl-0 sm:last:col-span-2 md:min-h-48 md:col-span-3 md:last:col-span-4 xl:col-span-1 xl:min-h-56 xl:border-r xl:last:col-span-1 xl:last:border-r-0",
              index >= 4 && "md:col-span-4 xl:col-span-1",
            )}
          >
            <span
              aria-hidden="true"
              className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full border border-walnut bg-parchment"
            />
            <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-walnut">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-5 font-display text-[1.375rem] leading-tight text-forest">
              {step.title}
            </h3>
            <p className="mt-3 text-[0.8125rem] leading-6 text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MovementChapter({
  movement,
  index,
}: {
  movement: Movement;
  index: number;
}) {
  const movementImage = images[movement.image];
  const imageOnRight = index % 2 === 1;
  const isPortrait = movementImage.layout === "portrait";

  return (
    <section
      className={cn(
        "border-t border-walnut/20",
        index === 1 ? "bg-ivory" : "bg-cream",
      )}
      aria-labelledby={`movement-${index + 1}-heading`}
    >
      <Container className="grid gap-10 py-[clamp(4rem,10vh,7.5rem)] lg:grid-cols-12 lg:items-start lg:gap-14">
        <figure
          className={cn(
            "relative self-start lg:col-span-7",
            isPortrait && "lg:max-w-[33rem]",
            imageOnRight && "lg:order-2",
            imageOnRight && isPortrait && "lg:justify-self-end",
          )}
        >
          <div
            className={cn(
              "rr-representative-photo overflow-hidden border-y border-olive/50 bg-forest",
              movementImage.grade === "workshop" &&
                "rr-representative-photo--workshop",
            )}
          >
            <Image
              src={movementImage.src}
              alt={movementImage.alt}
              width={movementImage.width}
              height={movementImage.height}
              sizes="(min-width: 1024px) 620px, calc(100vw - 2rem)"
              className={cn(
                "h-auto w-full",
                movementImage.grade &&
                  `rr-photo-grade--${movementImage.grade}`,
              )}
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute left-4 top-3 bg-forest px-2 font-mono text-[0.6875rem] tracking-[0.12em] text-leaf"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <figcaption className="mt-3 grid gap-2 border-t border-walnut/30 pt-3 sm:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] sm:gap-5">
            <span className="min-w-0 text-[0.8125rem] font-medium leading-6 text-forest">
              {movementImage.place}
            </span>
            {movementImage.sourceUrl ? (
              <a
                href={movementImage.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="min-w-0 font-mono text-[0.625rem] leading-5 tracking-[0.03em] text-ink-muted underline decoration-walnut/40 underline-offset-4 hover:text-forest sm:text-right"
              >
                {movementImage.stamp}
              </a>
            ) : (
              <span className="min-w-0 font-mono text-[0.625rem] leading-5 tracking-[0.03em] text-ink-muted sm:text-right">
                {movementImage.stamp}
              </span>
            )}
          </figcaption>
        </figure>

        <div
          className={cn(
            "lg:col-span-5 lg:pt-2",
            imageOnRight && "lg:order-1",
          )}
        >
          <SectionEyebrow>{movement.eyebrow}</SectionEyebrow>
          <h2
            id={`movement-${index + 1}-heading`}
            className="rr-title-chapter mt-4 max-w-[13ch] font-display text-forest"
          >
            {movement.heading}
          </h2>
          <p className="mt-5 max-w-[30ch] font-display text-[1.375rem] leading-snug text-walnut sm:text-[1.625rem]">
            {movement.standfirst}
          </p>

          <div className="mt-7 space-y-5 text-[0.9375rem] leading-7 text-ink-muted">
            {movement.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-9 border-b border-walnut/25">
            {movement.notes.map((note, noteIndex) => (
              <div
                key={note.title}
                className="grid grid-cols-[2.25rem_1fr] gap-3 border-t border-walnut/25 py-5"
              >
                <dt className="contents">
                  <span className="font-mono text-[0.625rem] tracking-[0.1em] text-walnut">
                    {String(noteIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[0.75rem] font-medium uppercase tracking-[0.13em] text-walnut">
                    {note.title}
                  </span>
                </dt>
                <dd className="col-start-2 mt-1 text-[0.8125rem] leading-6 text-ink-muted">
                  {note.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export default function ModelPage() {
  return (
    <InteriorShell>
      <section className="border-b border-walnut/25 bg-parchment">
        <Container className="py-[clamp(4rem,10vh,7.5rem)]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <header className="lg:col-span-8">
              <SectionEyebrow>{modelPage.intro.eyebrow}</SectionEyebrow>
              <h1 className="rr-title-page mt-5 max-w-[12ch] font-display text-forest">
                {modelPage.intro.heading}
              </h1>
              <p className="mt-8 max-w-[62ch] text-base leading-8 text-ink-muted sm:text-[1.0625rem]">
                {modelPage.intro.body}
              </p>
            </header>

            <aside className="border-y border-walnut/30 lg:col-span-4 lg:mt-8">
              {modelPage.intro.annotations.map((annotation) => (
                <div
                  key={annotation.label}
                  className="grid grid-cols-[1fr_auto] gap-6 border-b border-walnut/20 py-5 last:border-b-0"
                >
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-walnut">
                    {annotation.label}
                  </p>
                  <p className="text-right font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-forest">
                    {annotation.value}
                  </p>
                </div>
              ))}
            </aside>
          </div>

          <SequenceRail />
        </Container>
      </section>

      <section
        className="bg-cream"
        aria-labelledby="model-lessons-heading"
      >
        <Container className="grid gap-12 py-[clamp(4rem,10vh,7.5rem)] lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <SectionEyebrow>{modelPage.lessons.eyebrow}</SectionEyebrow>
            <h2
              id="model-lessons-heading"
              className="rr-title-chapter mt-4 max-w-[12ch] font-display text-forest"
            >
              {modelPage.lessons.heading}
            </h2>
            <p className="mt-7 max-w-[48ch] text-[0.9375rem] leading-7 text-ink-muted">
              {modelPage.lessons.intro}
            </p>
          </header>

          <div className="lg:col-span-7 lg:pt-2">
            {modelPage.lessons.entries.map((entry, index) => (
              <article
                key={entry.quote}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-walnut/30 py-7 last:border-b"
              >
                <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-walnut">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <blockquote className="rr-hquote font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.12] text-forest">
                    {entry.quote}
                  </blockquote>
                  <p className="mt-4 max-w-[55ch] text-[0.875rem] leading-6 text-ink-muted">
                    {entry.response}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {modelPage.movements.map((movement, index) => (
        <MovementChapter
          key={movement.heading}
          movement={movement}
          index={index}
        />
      ))}

      <aside className="border-y border-olive/35 bg-forest">
        <Container className="py-6 sm:py-7">
          <p className="max-w-[96ch] font-mono text-[0.6875rem] leading-6 tracking-[0.08em] text-cream-muted">
            {modelPage.photographyNote}
          </p>
        </Container>
      </aside>

      <section
        className="bg-forest-deep"
        aria-labelledby="model-open-questions-heading"
      >
        <Container className="grid gap-12 py-[clamp(4.5rem,11vh,8rem)] lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <SectionEyebrow theme="dark">
              {modelPage.openQuestions.eyebrow}
            </SectionEyebrow>
            <h2
              id="model-open-questions-heading"
              className="rr-title-chapter mt-4 max-w-[13ch] font-display text-cream"
            >
              {modelPage.openQuestions.heading}
            </h2>
            <p className="mt-7 max-w-[48ch] text-[0.9375rem] leading-7 text-cream-muted">
              {modelPage.openQuestions.intro}
            </p>
          </header>

          <ol className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {modelPage.openQuestions.entries.map((entry, index) => (
              <li
                key={entry.title}
                className="border-t border-leaf/35 py-6"
              >
                <p className="font-mono text-[0.625rem] tracking-[0.12em] text-leaf">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-[1.5rem] leading-tight text-cream">
                  {entry.title}
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-6 text-cream-muted">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-walnut/25 bg-parchment">
        <Container className="grid gap-10 py-[clamp(4rem,10vh,7rem)] lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionEyebrow>{modelPage.close.eyebrow}</SectionEyebrow>
            <h2 className="rr-title-chapter mt-4 max-w-[15ch] font-display text-forest">
              {modelPage.close.heading}
            </h2>
            <p className="mt-6 max-w-[58ch] text-[0.9375rem] leading-7 text-ink-muted">
              {modelPage.close.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button href={modelPage.close.primaryCta.href}>
              {modelPage.close.primaryCta.label}
            </Button>
            <Button
              href={modelPage.close.secondaryCta.href}
              variant="secondary"
            >
              {modelPage.close.secondaryCta.label}
            </Button>
          </div>
        </Container>
      </section>
    </InteriorShell>
  );
}
