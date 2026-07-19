import Link from "next/link";
import { AmpText, Reveal, Section, SectionEyebrow } from "@/components/ui";
import { pillars } from "@/content/siteContent";

export function Pillars() {
  return (
    <Section
      id="programs"
      aria-labelledby="programs-heading"
      background="cream"
      pad="tight"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="lg:col-span-4">
          <div>
            <SectionEyebrow theme="light">{pillars.eyebrow}</SectionEyebrow>
            <h2
              id="programs-heading"
              className="max-w-[18ch] font-display text-[clamp(2rem,3.5vw,2.5rem)] font-medium leading-[1.08] text-ink"
            >
              {pillars.heading}
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-line lg:col-start-6 lg:col-span-7">
          {pillars.cards.map((card, index) => (
            <Reveal key={card.title} staggerIndex={index}>
              <Link
                href={card.href}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-line py-6 outline-offset-4 transition-colors hover:border-walnut/35 focus-visible:border-walnut/50 sm:grid-cols-[2.5rem_minmax(0,1fr)_7.5rem] sm:gap-x-5 md:py-7"
              >
                <span className="pt-1 font-mono text-[0.6875rem] text-walnut">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-start-2 row-start-1 justify-self-end pt-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-walnut sm:col-start-3">
                  {pillars.viewBriefLabel}{" "}
                  {String(index + 1).padStart(2, "0")}{" "}
                  <span aria-hidden="true">→</span>
                </span>
                <div className="col-start-2 row-start-2 mt-4 sm:row-start-1 sm:mt-0">
                  <h3 className="font-display text-[1.35rem] font-medium leading-[1.25] text-ink transition-colors group-hover:text-walnut group-focus-visible:text-walnut">
                    <AmpText>{card.title}</AmpText>
                  </h3>
                  <p className="mt-3 max-w-[46ch] font-sans text-sm leading-[1.7] text-ink-muted">
                    {card.body}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
