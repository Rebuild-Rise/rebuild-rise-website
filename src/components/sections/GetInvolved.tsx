import Image from "next/image";
import Link from "next/link";
import { Button, Reveal, Section, SectionEyebrow } from "@/components/ui";
import { getInvolved, images } from "@/content/siteContent";

export function GetInvolved() {
  const gathering = images.groupTree02;

  return <Section id="involve" aria-labelledby="involve-heading" background="forest" pad="roomy" padBottom="tight">
    <div className="grid lg:grid-cols-12 lg:gap-x-6">
      <Reveal className="lg:col-span-8">
        <div>
          <SectionEyebrow theme="dark">{getInvolved.eyebrow}</SectionEyebrow>
          <h2 id="involve-heading" className="font-display text-[clamp(2rem,3.8vw,2.75rem)] font-medium leading-[1.08] text-cream">{getInvolved.heading}</h2>
          <p className="mt-5 max-w-[58ch] font-sans text-base leading-[1.75] text-cream-muted">{getInvolved.intro}</p>
        </div>
      </Reveal>

      <div className="mt-[clamp(4.5rem,7vw,5.5rem)] grid items-start gap-y-10 lg:col-span-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <div className="grid border-b border-olive/40 md:grid-cols-2 lg:grid-cols-1">
            {getInvolved.paths.map((path, index) => <article key={path.title} className={`min-h-[118px] border-t border-olive/40 py-5 md:px-6 md:py-6 ${index % 2 === 0 ? "md:border-r" : ""} border-olive/40 lg:min-h-[124px] lg:border-r-0 lg:px-0 lg:py-5`}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-x-4">
                <span className="pt-1 font-mono text-[0.6875rem] text-leaf">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-[1.3rem] font-medium leading-tight text-cream">{path.title}</h3>
                  <p className="mt-2 max-w-[42ch] font-sans text-sm leading-[1.6] text-cream-muted">{path.body}</p>
                </div>
              </div>
            </article>)}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2 lg:col-span-7">
          <figure className="xl:-mr-10">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={gathering.src}
                alt={gathering.alt}
                fill
                sizes="(max-width: 1023px) calc(100vw - 48px), 680px"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col gap-1 border-t border-olive/40 pt-3 font-sans text-sm text-cream-muted sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-cream">{gathering.place}</span>
              <span className="font-mono text-[0.6875rem] tracking-[0.06em] text-leaf">{gathering.stamp}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal className="mt-[clamp(4.5rem,7vw,6rem)] border-t border-olive/40 pt-[clamp(3rem,5vw,4.5rem)] lg:col-span-12">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <h3 className="rr-title-final font-display font-medium text-cream md:col-span-7">Build what stays.</h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:col-span-4 md:col-start-9 md:justify-end">
            <Button variant="primary" theme="dark" href={getInvolved.primaryCta.href}>{getInvolved.primaryCta.label}</Button>
            <Link href={getInvolved.secondaryCta.href} className="font-sans text-sm font-medium text-cream-muted underline decoration-olive/60 underline-offset-4 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf">{getInvolved.secondaryCta.label}</Link>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>;
}
