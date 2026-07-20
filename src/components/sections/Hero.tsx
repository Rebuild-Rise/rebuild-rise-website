import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "@/content/siteContent";
import { Button, Container, SectionEyebrow } from "@/components/ui";
import { fieldworkArchive, hero, images } from "@/content/siteContent";

function ArchiveRecord({
  image,
  label,
  sizes,
  priority = false,
}: {
  image: SiteImage;
  label: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <li className="rr-record__plate">
      <figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          className="rr-record__image block h-auto w-full"
        />
        <figcaption>
          <span className="rr-record__plate-label">{label}</span>
          <span className="rr-record__plate-place">{image.place}</span>
          <span className="rr-record__plate-stamp">{image.stamp}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export function Hero() {
  const [eyebrowContext, eyebrowPlace] = hero.eyebrow.split(" · ");
  const movements = hero.movements.map((movement) => ({
    ...movement,
    image: images[movement.imageKey as keyof typeof images],
  }));

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="rr-movements bg-parchment text-ink"
    >
      <div className="rr-movements__masthead bg-forest text-cream">
        <Container>
          <div className="rr-movements__declaration">
            <header>
              <SectionEyebrow theme="dark">
                <span className="inline-block">{eyebrowContext}</span>{" "}
                {eyebrowPlace ? (
                  <span className="inline-block">· {eyebrowPlace}</span>
                ) : null}
              </SectionEyebrow>
              <h1
                id="hero-heading"
                className="rr-movements__title mt-5 font-display font-medium text-cream"
              >
                {hero.headline.slice(0, -1)}
                <span className="text-leaf">.</span>
              </h1>
            </header>

            <div className="rr-movements__purpose">
              <p className="max-w-[42ch] font-sans text-base leading-[1.72] text-cream-muted">
                {hero.subhead}
              </p>
              <div className="rr-movements__actions mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                <Button variant="primary" theme="light" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </Button>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-11 items-center gap-2 border-b border-leaf/60 font-sans text-[0.9375rem] font-medium text-cream transition-colors hover:border-leaf hover:text-leaf"
                >
                  {hero.secondaryCta.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="rr-record bg-parchment">
        <Container className="rr-record__content">
          <header className="rr-record__header">
            <div className="rr-record__rail font-mono text-[0.6875rem] uppercase tracking-[0.12em]">
              <p className="text-forest">{fieldworkArchive.label}</p>
              <p className="text-walnut">{fieldworkArchive.detail}</p>
            </div>
          </header>

          <div className="rr-record__note">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-walnut">
              {hero.documentary.eyebrow}
            </p>
            <p className="max-w-[62ch] font-sans text-sm leading-[1.7] text-ink-muted">
              {hero.documentary.sequenceProvenance}
            </p>
          </div>

          <ol
            className="rr-record__diptych"
            aria-label="Two records from the founders’ prior relief work"
          >
            {movements.map((movement, index) => (
              <ArchiveRecord
                key={movement.imageKey}
                image={movement.image}
                label={movement.label}
                sizes={
                  index === 0
                    ? "(min-width: 1120px) 377px, (min-width: 768px) 35vw, calc(100vw - 32px)"
                    : "(min-width: 1120px) 671px, (min-width: 768px) 61vw, calc(100vw - 32px)"
                }
                priority={index === 0}
              />
            ))}
          </ol>
        </Container>
      </div>
    </section>
  );
}
