import { AmpText, Reveal, Section, SectionEyebrow } from "@/components/ui";
import { whoWeServe } from "@/content/siteContent";

export function WhoWeServe() {
  return (
    <Section id="serve" aria-labelledby="serve-heading" background="cream" pad="tight">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-10">
          <div className="grid gap-6 lg:grid-cols-10">
            <div className="lg:col-span-6">
              <SectionEyebrow theme="light">{whoWeServe.eyebrow}</SectionEyebrow>
              <h2
                id="serve-heading"
                className="max-w-[18ch] font-display text-[clamp(2rem,3.8vw,2.75rem)] font-medium leading-[1.08] text-ink"
              >
                {whoWeServe.heading}
              </h2>
            </div>
            <p className="max-w-[48ch] self-end font-sans text-base leading-[1.7] text-ink-muted lg:col-span-4">
              {whoWeServe.intro}
            </p>
          </div>
        </Reveal>

        <div className="border-t border-line lg:col-span-12">
          {whoWeServe.cards.map((card, index) => (
            <Reveal key={card.title} staggerIndex={index}>
              <article className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-b border-line py-6 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-6 md:py-7 lg:grid-cols-[3rem_17rem_minmax(0,1fr)] lg:items-start">
                <span className="pt-1 font-mono text-[0.6875rem] text-walnut">
                  0{index + 1}
                </span>
                <div className="min-w-0 lg:contents">
                  <h3 className="font-display text-[1.45rem] font-medium leading-[1.2] text-ink lg:col-start-2 lg:row-start-1">
                    <AmpText>{card.title}</AmpText>
                  </h3>
                  <p className="mt-3 max-w-[58ch] font-sans text-[0.95rem] leading-[1.7] text-ink-muted lg:col-start-3 lg:row-start-1 lg:mt-0">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
