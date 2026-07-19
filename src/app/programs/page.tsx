import type { Metadata } from "next";
import { EditorialClose, InteriorShell } from "@/components/interior";
import { Section, SectionEyebrow } from "@/components/ui";
import { programsPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: programsPage.metadata.title,
  description: programsPage.metadata.description,
  alternates: {
    canonical: programsPage.metadata.canonical,
  },
  openGraph: {
    title: programsPage.metadata.openGraphTitle,
    description: programsPage.metadata.description,
    url: programsPage.metadata.canonical,
    type: "website",
  },
};

export default function ProgramsPage() {
  return (
    <InteriorShell>
      <Section
        background="parchment"
        pad="roomy"
        aria-labelledby="programs-page-heading"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <SectionEyebrow>{programsPage.intro.eyebrow}</SectionEyebrow>
            <h1
              id="programs-page-heading"
              className="rr-title-page mt-5 max-w-[18ch] font-display font-medium text-ink"
            >
              {programsPage.intro.heading}
            </h1>
            <p className="mt-8 max-w-[63ch] font-sans text-base leading-[1.8] text-ink-muted sm:text-[1.0625rem]">
              {programsPage.intro.body}
            </p>
          </div>

          <aside className="self-end border-y border-walnut/30 py-6 lg:col-span-4 lg:mb-1">
            <div className="flex items-baseline justify-between gap-5">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-walnut">
                {programsPage.intro.statusLabel}
              </p>
              <p className="text-right font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-forest">
                {programsPage.intro.statusValue}
              </p>
            </div>
            <p className="mt-6 max-w-[42ch] border-t border-line pt-5 font-sans text-sm leading-[1.75] text-ink-muted">
              {programsPage.intro.statusBody}
            </p>
          </aside>
        </div>

        <nav
          aria-label={programsPage.intro.indexLabel}
          className="mt-[clamp(3.5rem,8vh,5.5rem)] border-t border-walnut/30"
        >
          <p className="py-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-walnut">
            {programsPage.intro.indexLabel}
          </p>
          <ol className="grid md:grid-cols-2 md:gap-x-8">
            {programsPage.areas.map((area, index) => (
              <li key={area.heading} className="border-t border-line">
                <a
                  href={"#" + area.slug}
                  className="group grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] gap-x-4 py-5 outline-offset-4 md:min-h-[7.5rem] md:grid-cols-[3rem_minmax(0,1fr)_auto] md:pr-3"
                >
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-walnut">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-[22ch] font-display text-[1.2rem] font-medium leading-[1.2] text-ink transition-colors group-hover:text-walnut group-focus-visible:text-walnut">
                    {area.heading}
                  </span>
                  <span className="col-start-2 mt-4 self-start font-mono text-[0.625rem] uppercase tracking-[0.12em] text-walnut md:col-start-3 md:row-start-1 md:mt-0 md:justify-self-end">
                    {programsPage.intro.viewBriefLabel}{" "}
                    <span aria-hidden="true">↓</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>

      <Section background="cream" pad="tight">
        <div>
          {programsPage.areas.map((area) => (
            <article
              id={area.slug}
              key={area.heading}
              className="rr-working-folio scroll-mt-8 border-t border-walnut/30 py-[clamp(3.5rem,7vh,5.5rem)] first:pt-[clamp(2.5rem,5vh,4rem)]"
            >
              <header className="rr-working-folio__header grid min-w-0 gap-y-6 xl:grid-cols-12 xl:gap-x-8">
                <div className="xl:col-span-2">
                  <SectionEyebrow>{area.eyebrow}</SectionEyebrow>
                </div>
                <h2 className="rr-title-chapter max-w-[20ch] font-display font-medium text-ink xl:col-span-5">
                  {area.heading}
                </h2>
                <p className="max-w-[46ch] font-sans text-base leading-[1.78] text-ink-muted xl:col-span-4 xl:col-start-9 xl:pt-1">
                  {area.intro}
                </p>
              </header>

              <dl className="mt-10 grid min-w-0 border-y border-line xl:ml-[16.666%] xl:mt-12 xl:grid-cols-12">
                <div className="rr-working-folio__field border-b border-line py-6 xl:col-span-8 xl:border-r xl:pr-8 xl:py-8">
                  <dt className="font-mono text-[0.6875rem] uppercase leading-[1.55] tracking-[0.13em] text-walnut">
                    {programsPage.fields.mayInclude}
                  </dt>
                  <dd className="mt-4 max-w-[64ch] font-sans text-base leading-[1.78] text-ink-muted">
                    {area.mayInclude}
                  </dd>
                </div>

                <div className="rr-working-folio__field border-b border-line py-6 xl:col-span-4 xl:pl-8 xl:py-8">
                  <dt className="font-mono text-[0.6875rem] uppercase leading-[1.55] tracking-[0.13em] text-walnut">
                    {programsPage.fields.structures}
                  </dt>
                  <dd className="mt-4 max-w-[42ch] font-sans text-[0.9375rem] leading-[1.75] text-ink-muted">
                    {area.structures}
                  </dd>
                </div>

                <div className="rr-working-folio__field border-b border-line py-6 xl:col-span-12 xl:grid xl:grid-cols-12 xl:gap-x-8 xl:py-7">
                  <dt className="font-mono text-[0.6875rem] uppercase leading-[1.55] tracking-[0.13em] text-walnut xl:col-span-3">
                    {programsPage.fields.connects}
                  </dt>
                  <dd className="mt-4 max-w-[68ch] font-sans text-[0.9375rem] leading-[1.75] text-ink-muted xl:col-span-8 xl:col-start-5 xl:mt-0">
                    {area.connects}
                  </dd>
                </div>

                <div className="rr-working-folio__field border-l-2 border-walnut/45 py-6 pl-5 xl:col-span-12 xl:grid xl:grid-cols-12 xl:gap-x-8 xl:py-7 xl:pl-6">
                  <dt className="font-mono text-[0.6875rem] uppercase leading-[1.55] tracking-[0.13em] text-walnut xl:col-span-3">
                    {programsPage.fields.learn}
                  </dt>
                  <dd className="mt-4 max-w-[68ch] font-sans text-base leading-[1.78] text-ink xl:col-span-8 xl:col-start-5 xl:mt-0">
                    {area.learn}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section
        background="parchment"
        pad="tight"
        className="rr-program-commitments"
        aria-labelledby="program-commitments-heading"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <SectionEyebrow>
              {programsPage.commitments.eyebrow}
            </SectionEyebrow>
            <h2
              id="program-commitments-heading"
              className="rr-title-section mt-4 max-w-[16ch] font-display font-medium text-ink"
            >
              {programsPage.commitments.heading}
            </h2>
            <p className="mt-6 max-w-[38ch] font-sans text-base leading-[1.75] text-ink-muted">
              {programsPage.commitments.intro}
            </p>
          </div>

          <ol className="border-t border-walnut/30 lg:col-start-6 lg:col-span-7">
            {programsPage.commitments.entries.map((entry, index) => (
              <li
                key={entry.title}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-line py-5 md:py-6 xl:grid-cols-12 xl:gap-x-6"
              >
                <span className="pt-1 font-mono text-[0.6875rem] text-walnut xl:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.25rem] font-medium leading-[1.25] text-ink xl:col-span-3">
                  {entry.title}
                </h3>
                <p className="col-start-2 mt-2 max-w-[45ch] font-sans text-sm leading-[1.75] text-ink-muted xl:col-span-8 xl:col-start-auto xl:mt-0">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <EditorialClose
        heading={programsPage.close.heading}
        body={programsPage.close.body}
        primaryCta={programsPage.close.primaryCta}
        secondaryCta={programsPage.close.secondaryCta}
      />
    </InteriorShell>
  );
}
