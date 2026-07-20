import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InquiryForm } from "@/components/forms";
import { InteriorShell } from "@/components/interior";
import { Button, Section, SectionEyebrow } from "@/components/ui";
import {
  footer,
  getInvolvedPage,
  images,
} from "@/content/siteContent";

export const metadata: Metadata = {
  title: getInvolvedPage.metadata.title,
  description: getInvolvedPage.metadata.description,
  alternates: { canonical: getInvolvedPage.metadata.canonical },
  openGraph: {
    title: getInvolvedPage.metadata.openGraphTitle,
    description: getInvolvedPage.metadata.description,
    url: getInvolvedPage.metadata.canonical,
  },
};

const processOffsets = [
  "lg:mt-0",
  "lg:mt-8",
  "lg:mt-16",
  "lg:mt-24",
];

export default async function GetInvolvedPage({
  searchParams,
}: {
  searchParams: Promise<{ path?: string | string[] }>;
}) {
  const requestedPath = (await searchParams).path;
  const initialPath =
    typeof requestedPath === "string" &&
    getInvolvedPage.pathways.entries.some(
      (pathway) => pathway.value === requestedPath,
    )
      ? requestedPath
      : undefined;
  const closingImage =
    images[getInvolvedPage.close.image as keyof typeof images];
  const inquiryImage =
    images[getInvolvedPage.form.image as keyof typeof images];
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  return (
    <InteriorShell>
      <Section background="forest" pad="default" className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow theme="dark">
              {getInvolvedPage.intro.eyebrow}
            </SectionEyebrow>
            <h1 className="rr-title-page mt-5 max-w-[12ch] font-display font-medium text-cream">
              {getInvolvedPage.intro.heading}
            </h1>
            <p className="mt-8 max-w-[62ch] font-sans text-[clamp(1rem,1.7vw,1.2rem)] leading-[1.75] text-cream-muted">
              {getInvolvedPage.intro.body}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={getInvolvedPage.intro.primaryCta.href} theme="dark">
                {getInvolvedPage.intro.primaryCta.label}
              </Button>
              <Button
                href={getInvolvedPage.intro.secondaryCta.href}
                variant="secondary"
                theme="dark"
              >
                {getInvolvedPage.intro.secondaryCta.label}
              </Button>
            </div>
          </div>
          <aside className="border-y border-olive/40 py-6 lg:col-span-4 lg:mb-1">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-leaf">
              {getInvolvedPage.intro.status}
            </p>
            <p className="mt-5 font-sans text-sm leading-[1.75] text-cream-muted">
              {getInvolvedPage.intro.qualification}
            </p>
          </aside>
        </div>
      </Section>

      <Section
        id={getInvolvedPage.pathways.id}
        background="cream"
        pad="roomy"
        aria-labelledby="pathways-heading"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>{getInvolvedPage.pathways.eyebrow}</SectionEyebrow>
            <h2
              id="pathways-heading"
              className="rr-title-chapter mt-4 max-w-[14ch] font-display font-medium text-ink"
            >
              {getInvolvedPage.pathways.heading}
            </h2>
          </div>
          <p className="max-w-[58ch] font-sans text-base leading-[1.75] text-ink-muted lg:col-start-8 lg:col-span-5 lg:pt-7">
            {getInvolvedPage.pathways.intro}
          </p>
        </div>

        <div className="mt-14 border-b border-line">
          {getInvolvedPage.pathways.entries.map((pathway, index) => (
            <article
              key={pathway.value}
              className="grid gap-7 border-t border-line py-9 md:grid-cols-12 md:py-12"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-[0.6875rem] text-walnut">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="rr-title-item mt-3 max-w-[18ch] font-display font-medium text-ink">
                  {pathway.title}
                </h3>
                <Link
                  href={pathway.cta.href}
                  className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-forest underline decoration-olive underline-offset-4 hover:text-walnut"
                >
                  {pathway.cta.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 md:col-start-6 md:col-span-7">
                <PathwayField
                  label={getInvolvedPage.pathways.fieldLabels.suited}
                  body={pathway.suited}
                />
                <PathwayField
                  label={getInvolvedPage.pathways.fieldLabels.contribution}
                  body={pathway.contribution}
                />
                <PathwayField
                  label={getInvolvedPage.pathways.fieldLabels.commitment}
                  body={pathway.commitment}
                />
                <PathwayField
                  label={getInvolvedPage.pathways.fieldLabels.next}
                  body={pathway.next}
                />
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section background="parchment" pad="roomy">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>{getInvolvedPage.process.eyebrow}</SectionEyebrow>
            <h2 className="rr-title-section mt-4 max-w-[15ch] font-display font-medium text-ink">
              {getInvolvedPage.process.heading}
            </h2>
          </div>
        </div>
        <ol className="mt-12 grid gap-0 border-b border-line lg:grid-cols-4 lg:border-b-0">
          {getInvolvedPage.process.entries.map((entry, index) => (
            <li
              key={entry.title}
              className={`border-t border-line py-6 lg:border-l lg:border-t-0 lg:px-6 lg:py-0 ${processOffsets[index]}`}
            >
              <p className="font-mono text-[0.6875rem] text-walnut">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                {entry.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-[1.7] text-ink-muted">
                {entry.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        background="ivory"
        pad="roomy"
        aria-labelledby="inquiry-heading"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionEyebrow>{getInvolvedPage.form.eyebrow}</SectionEyebrow>
            <h2
              id="inquiry-heading"
              className="rr-title-section mt-4 max-w-[12ch] font-display font-medium text-ink"
            >
              {getInvolvedPage.form.heading}
            </h2>
          </div>
          <div className="lg:col-start-8 lg:col-span-5">
            <p className="max-w-[50ch] font-sans text-base leading-[1.75] text-ink-muted">
              {getInvolvedPage.form.intro}
            </p>
            {formEndpoint ? (
              <p className="mt-5 font-mono text-[0.6875rem] text-walnut">
                {getInvolvedPage.form.requiredNote}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-12 grid gap-12 border-y border-line py-8 md:py-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <figure
            className={`rr-inquiry-figure ${formEndpoint ? "lg:col-span-5" : "lg:col-span-7"}`}
          >
            <div className="overflow-hidden bg-parchment">
              <Image
                src={inquiryImage.src}
                alt={inquiryImage.alt}
                width={inquiryImage.width}
                height={inquiryImage.height}
                sizes={
                  formEndpoint
                    ? "(max-width: 1024px) 100vw, 460px"
                    : "(max-width: 1024px) 100vw, 650px"
                }
                loading="eager"
                className={`h-auto w-full ${inquiryImage.grade ? `rr-photo-grade--${inquiryImage.grade}` : ""}`}
              />
            </div>
            <figcaption className="mt-3 flex justify-end border-t border-line pt-3">
              {inquiryImage.sourceUrl ? (
                <Link
                  href={inquiryImage.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.6875rem] text-right text-walnut underline decoration-line underline-offset-4 hover:text-forest"
                >
                  {inquiryImage.stamp}
                </Link>
              ) : (
                <span className="font-mono text-[0.6875rem] text-right text-walnut">
                  {inquiryImage.stamp}
                </span>
              )}
            </figcaption>
          </figure>

          <div
            id={getInvolvedPage.form.id}
            className={`rr-inquiry-desk scroll-mt-6 sm:scroll-mt-8 ${formEndpoint ? "lg:col-start-6 lg:col-span-7" : "lg:col-span-5"}`}
          >
            <InquiryForm
              key={initialPath ?? "unselected"}
              copy={getInvolvedPage.form}
              pathways={getInvolvedPage.pathways.entries}
              endpoint={formEndpoint}
              initialPath={initialPath}
              email={footer.email}
            />

            <aside className="mt-10 border-t border-line pt-7">
              <SectionEyebrow>
                {getInvolvedPage.form.preparation.eyebrow}
              </SectionEyebrow>
              <h3 className="mt-3 max-w-[18ch] font-display text-[1.65rem] font-medium leading-[1.12] text-ink">
                {getInvolvedPage.form.preparation.heading}
              </h3>
              <ol className="mt-6 border-b border-line">
                {getInvolvedPage.form.preparation.entries.map(
                  (entry, index) => (
                    <li
                      key={entry.title}
                      className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-4"
                    >
                      <span className="font-mono text-[0.6875rem] text-walnut">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-sans text-sm font-medium text-ink">
                          {entry.title}
                        </h4>
                        <p className="mt-1 font-sans text-xs leading-[1.7] text-ink-muted">
                          {entry.body}
                        </p>
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </aside>
          </div>
        </div>
      </Section>

      <Section background="forest" pad="roomy">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <figure className="lg:col-span-8">
            <Image
              src={closingImage.src}
              alt={closingImage.alt}
              width={closingImage.width}
              height={closingImage.height}
              sizes="(max-width: 1024px) 100vw, 746px"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 grid gap-1 border-t border-olive/40 pt-3 sm:grid-cols-[1fr_auto] sm:gap-5">
              <span className="font-sans text-sm font-medium text-cream">
                {closingImage.place}
              </span>
              <span className="font-mono text-[0.6875rem] text-cream-muted sm:text-right">
                {closingImage.stamp}
              </span>
            </figcaption>
          </figure>
          <div className="border-t border-olive/40 pt-6 lg:col-start-10 lg:col-span-3">
            <SectionEyebrow theme="dark">
              {getInvolvedPage.close.eyebrow}
            </SectionEyebrow>
            <p className="mt-4 font-sans text-sm leading-[1.75] text-cream-muted">
              {getInvolvedPage.close.provenance}
            </p>
          </div>
        </div>
        <h2 className="rr-title-final mt-16 border-t border-olive/40 pt-8 font-display font-medium text-cream">
          {getInvolvedPage.close.heading}
        </h2>
      </Section>
    </InteriorShell>
  );
}

function PathwayField({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-walnut">
        {label}
      </dt>
      <dd className="mt-2 font-sans text-sm leading-[1.7] text-ink-muted">
        {body}
      </dd>
    </div>
  );
}
