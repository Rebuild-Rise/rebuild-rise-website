import { FounderCard, Reveal, Section, SectionEyebrow } from "@/components/ui";
import { images, whereWeAre } from "@/content/siteContent";

const altBySrc = new Map(Object.values(images).map((image) => [image.src, image.alt]));

export function WhereWeAre() {
  return (
    <Section id="now" aria-labelledby="now-heading" background="ivory" pad="default">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-8">
          <div>
            <SectionEyebrow theme="light">{whereWeAre.eyebrow}</SectionEyebrow>
            <h2
              id="now-heading"
              className="font-display text-[clamp(2rem,3.5vw,2.6rem)] font-medium leading-[1.08] text-ink"
            >
              {whereWeAre.heading}
            </h2>
            <p className="mt-5 max-w-[60ch] font-sans text-base leading-[1.75] text-ink-muted">
              {whereWeAre.body}
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3 lg:col-start-10 lg:self-end">
          <aside className="border-y border-line py-4">
            <SectionEyebrow theme="light">
              {whereWeAre.documentationEyebrow}
            </SectionEyebrow>
            <p className="mt-3 max-w-[38ch] font-sans text-[0.8125rem] leading-[1.7] text-ink-muted">
              {whereWeAre.photoEthics}
            </p>
          </aside>
        </Reveal>
      </div>

      <Reveal className="mt-[clamp(2.5rem,6vh,3.75rem)]">
        <section
          aria-label="Pilot 001 field status"
          className="border-y border-walnut/30"
        >
          <header className="flex min-h-[52px] items-center justify-between gap-5 border-b border-line font-mono text-[0.625rem] uppercase tracking-[0.14em] text-walnut">
            <span>{whereWeAre.statusLabel}</span>
            <span className="text-forest">{whereWeAre.statusState}</span>
          </header>

          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="flex min-h-16 items-center border-b border-line font-display text-xl font-medium text-ink">
                {whereWeAre.pilotFrameworkHeading}
              </h3>
              <ol className="sm:grid sm:grid-cols-2">
                {whereWeAre.pilotSteps.map((step, index) => (
                  <li
                    key={step}
                    className="grid min-h-16 grid-cols-[2.75rem_1fr] items-center border-b border-line font-sans text-sm text-ink-muted sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    <span className="font-mono text-[0.6875rem] text-walnut">
                      0{index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
              <div className="flex min-h-16 items-center border-b border-line">
                <SectionEyebrow theme="light">
                  {whereWeAre.measurementEyebrow}
                </SectionEyebrow>
              </div>
              <ul>
                {whereWeAre.measurement.map((item, index) => (
                  <li
                    key={item}
                    className="grid min-h-16 grid-cols-[2.75rem_1fr] items-center border-b border-line font-sans text-sm text-ink-muted"
                  >
                    <span className="font-mono text-[0.625rem] text-walnut">
                      0{index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer className="grid lg:grid-cols-12">
            <p className="py-3 font-sans text-xs leading-[1.6] text-ink-muted lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
              {whereWeAre.emptyFrameCaption}
            </p>
          </footer>
        </section>
      </Reveal>

      <Reveal>
        <div className="mt-[clamp(3rem,6vh,4rem)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <SectionEyebrow theme="light">{whereWeAre.foundersEyebrow}</SectionEyebrow>
            <p className="max-w-[52ch] font-sans text-xs leading-[1.6] text-ink-muted sm:text-right">
              {whereWeAre.registrationLine}
            </p>
          </div>
          <div className="mt-4 grid border-t border-line gap-x-10 lg:grid-cols-2">
            {whereWeAre.founders.map((founder, index) => (
              <FounderCard
                key={founder.name}
                {...founder}
                showRule={false}
                className={index > 0 ? "border-t border-line lg:border-t-0" : undefined}
                headshotAlt={founder.headshot ? altBySrc.get(founder.headshot) : undefined}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
