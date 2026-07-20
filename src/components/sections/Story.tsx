import { Container, Reveal, SectionEyebrow } from "@/components/ui";
import { story } from "@/content/siteContent";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="bg-cream text-ink">
      <Container className="pt-[clamp(3rem,7vh,4.5rem)] pb-[clamp(3rem,6vh,4rem)]">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionEyebrow theme="light">{story.eyebrow}</SectionEyebrow>
              <h2
                id="story-heading"
                className="font-display text-[clamp(2rem,3.8vw,2.75rem)] font-medium leading-[1.08]"
              >
                {story.heading}
              </h2>
            </div>
            <p className="max-w-[52ch] font-sans text-base leading-[1.75] text-ink-muted lg:col-span-5 lg:pt-8">
              {story.body}
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="bg-parchment pt-[clamp(3rem,6vh,4.5rem)] pb-[clamp(4rem,9vh,6.5rem)]">
        <Container>
          <Reveal>
            <div className="border-t border-walnut/40 pt-4">
              <SectionEyebrow theme="light">{story.lessonsEyebrow}</SectionEyebrow>
            </div>
          </Reveal>

          <div className="mt-[clamp(1.5rem,4vh,2.5rem)]">
            <div data-path-cards className="grid border-t border-line md:grid-cols-3">
              {story.lessons.map((lesson, index) => (
                <Reveal key={lesson.modelStep} staggerIndex={index}>
                  <article
                    className={`h-full py-7 md:min-h-[220px] md:px-8 md:py-9 ${
                      index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
                    }`}
                  >
                    <span className="font-mono text-[0.6875rem] text-walnut">
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 max-w-[18ch] font-display text-[1.45rem] font-medium leading-[1.25] text-ink">
                      “{lesson.quote}”
                    </h3>
                    <p className="mt-5 max-w-[35ch] font-sans text-sm leading-[1.65] text-walnut">
                      {lesson.maps}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
