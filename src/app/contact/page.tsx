import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InquiryForm } from "@/components/forms";
import { InteriorShell } from "@/components/interior";
import { Section, SectionEyebrow } from "@/components/ui";
import {
  contactPage,
  footer,
  getInvolvedPage,
} from "@/content/siteContent";

export const metadata: Metadata = {
  title: contactPage.metadata.title,
  description: contactPage.metadata.description,
  alternates: { canonical: contactPage.metadata.canonical },
  openGraph: {
    title: contactPage.metadata.openGraphTitle,
    description: contactPage.metadata.description,
    url: contactPage.metadata.canonical,
  },
};

const inquiryPathways = getInvolvedPage.pathways.entries.filter(
  (pathway) => !("external" in pathway && pathway.external),
);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ path?: string | string[] }>;
}) {
  const requestedPath = (await searchParams).path;
  const initialPath =
    typeof requestedPath === "string" &&
    inquiryPathways.some((pathway) => pathway.value === requestedPath)
      ? requestedPath
      : undefined;
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const [correspondenceLocalPart, correspondenceDomain] =
    contactPage.correspondence.email.split("@");

  return (
    <InteriorShell>
      <Section background="forest" pad="default">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow theme="dark">
              {contactPage.intro.eyebrow}
            </SectionEyebrow>
            <h1 className="rr-title-page mt-5 max-w-[13ch] font-display font-medium text-cream">
              {contactPage.intro.heading}
            </h1>
            <p className="mt-7 max-w-[62ch] font-sans text-[clamp(1rem,1.7vw,1.2rem)] leading-[1.75] text-cream-muted">
              {contactPage.intro.body}
            </p>
          </div>
          <aside className="border-y border-olive/40 py-6 lg:col-span-4 lg:mb-1">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-leaf">
              {contactPage.intro.status}
            </p>
            <p className="mt-5 max-w-[36ch] font-sans text-sm leading-[1.75] text-cream-muted">
              Volunteer applications, structured inquiries, and general correspondence each have a distinct route below.
            </p>
          </aside>
        </div>
      </Section>

      <Section background="cream" pad="tight" aria-labelledby="contact-routes-heading">
        <SectionEyebrow>{contactPage.routes.eyebrow}</SectionEyebrow>
        <h2 id="contact-routes-heading" className="sr-only">
          Contact routes
        </h2>
        <div className="mt-6 border-b border-line">
          {contactPage.routes.entries.map((route) => (
            <article
              key={route.number}
              className="grid gap-4 border-t border-line py-6 md:grid-cols-12 md:items-center md:gap-6 md:py-7"
            >
              <p className="font-mono text-[0.6875rem] text-walnut md:col-span-1">
                {route.number}
              </p>
              <h3 className="font-display text-[1.5rem] font-medium leading-tight text-ink md:col-span-3">
                {route.title}
              </h3>
              <p className="max-w-[56ch] font-sans text-sm leading-[1.7] text-ink-muted md:col-span-5">
                {route.body}
              </p>
              <Link
                href={route.href}
                target={route.external ? "_blank" : undefined}
                rel={route.external ? "noreferrer" : undefined}
                className="inline-flex min-h-11 items-center gap-2 justify-self-start font-sans text-sm font-medium text-forest underline decoration-olive underline-offset-4 hover:text-walnut md:col-span-3 md:justify-self-end"
              >
                {route.cta}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id={contactPage.form.id}
        background="ivory"
        pad="roomy"
        aria-labelledby="inquiry-heading"
      >
        <header className="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionEyebrow>{contactPage.inquiry.eyebrow}</SectionEyebrow>
            <h2
              id="inquiry-heading"
              className="rr-title-section mt-4 max-w-[14ch] font-display font-medium text-ink"
            >
              {contactPage.inquiry.heading}
            </h2>
          </div>
          <p className="max-w-[48ch] font-sans text-sm leading-[1.75] text-ink-muted lg:col-start-8 lg:col-span-5 lg:pb-1">
            {contactPage.inquiry.intro}
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-x-14">
          <aside className="order-2 lg:order-1 lg:col-span-4">
            <div className="border-t border-line pt-6">
              <SectionEyebrow>{contactPage.inquiry.suitedEyebrow}</SectionEyebrow>
              <ul className="mt-4 border-b border-line">
                {contactPage.inquiry.suited.map((entry, index) => (
                  <li
                    key={entry}
                    className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-3.5"
                  >
                    <span className="font-mono text-[0.6875rem] text-walnut">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-sm leading-[1.6] text-ink">
                      {entry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 border-t border-line pt-6">
              <SectionEyebrow>
                {contactPage.form.preparation.eyebrow}
              </SectionEyebrow>
              <h3 className="mt-3 max-w-[16ch] font-display text-[1.5rem] font-medium leading-[1.12] text-ink">
                {contactPage.form.preparation.heading}
              </h3>
              <ol className="mt-5 border-b border-line">
                {contactPage.form.preparation.entries.map((entry, index) => (
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
                ))}
              </ol>
            </div>
          </aside>

          <div className="order-1 lg:order-2 lg:col-start-5 lg:col-span-8">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-line pb-4">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-walnut">
                Inquiry form
              </p>
              {formEndpoint ? (
                <p className="font-mono text-[0.6875rem] text-walnut">
                  {contactPage.form.requiredNote}
                </p>
              ) : null}
            </div>
            <InquiryForm
              key={initialPath ?? "unselected"}
              copy={contactPage.form}
              pathways={inquiryPathways}
              endpoint={formEndpoint}
              initialPath={initialPath}
              email={footer.email}
            />
          </div>
        </div>
      </Section>

      <Section background="forest" pad="default">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="dark">
              {contactPage.correspondence.eyebrow}
            </SectionEyebrow>
            <h2 className="rr-title-section mt-4 max-w-[15ch] font-display font-medium text-cream">
              {contactPage.correspondence.heading}
            </h2>
            <p className="mt-5 max-w-[58ch] font-sans text-sm leading-[1.75] text-cream-muted">
              {contactPage.correspondence.body}
            </p>
          </div>
          <div className="border-y border-olive/40 py-6 lg:col-start-9 lg:col-span-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-leaf">
              {contactPage.correspondence.label}
            </p>
            <a
              href={`mailto:${contactPage.correspondence.email}`}
              className="mt-3 inline-block max-w-full font-display text-[clamp(1.25rem,2vw,1.65rem)] font-medium text-cream underline decoration-olive underline-offset-4 hover:text-leaf"
            >
              {correspondenceLocalPart}@<wbr />
              {correspondenceDomain}
            </a>
          </div>
        </div>
      </Section>
    </InteriorShell>
  );
}
