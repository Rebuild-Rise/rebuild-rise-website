import Image from "next/image";
import Link from "next/link";
import type { SiteImage } from "@/content/siteContent";
import { Button, Container, SectionEyebrow } from "@/components/ui";
import { hero, images } from "@/content/siteContent";

function ArchiveMovement({
  image,
  label,
  index,
  priority = false,
}: {
  image: SiteImage;
  label: string;
  index: number;
  priority?: boolean;
}) {
  return (
    <li className="rr-movements__movement">
      <p className="rr-movements__movement-label">
        <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        {label}
      </p>
      <figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={
            index === 0
              ? "(min-width: 1280px) 510px, (min-width: 768px) 62vw, calc(100vw - 32px)"
              : index === 1
                ? "(min-width: 1280px) 255px, (min-width: 768px) 30vw, 68vw"
                : "(min-width: 1280px) 170px, (min-width: 768px) 30vw, 52vw"
          }
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          className="rr-movements__image block h-auto w-full"
        />
        <figcaption>
          <span>{image.place}</span>
          <span>{image.stamp}</span>
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

      <div className="rr-movements__paper">
        <Container>
          <div className="rr-movements__sequence" aria-label="Three records from the founders’ prior relief work">
            <ol className="rr-movements__list">
              {movements.map((movement, index) => (
                <ArchiveMovement
                  key={movement.imageKey}
                  image={movement.image}
                  label={movement.label}
                  index={index}
                  priority={index === 0}
                />
              ))}
            </ol>

            <aside className="rr-movements__status" aria-labelledby="hero-status-label">
            <p
              id="hero-status-label"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-walnut"
            >
              {hero.status.label}
            </p>
            <ul
              aria-labelledby="hero-status-label"
              className="rr-movements__status-list mt-3 font-mono text-[0.6875rem] uppercase leading-[1.55] tracking-[0.09em] text-forest"
            >
              {hero.status.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            </aside>
          </div>

          <p
            id="hero-documentary-provenance"
            className="rr-movements__provenance max-w-[62ch] font-sans text-xs leading-[1.7] text-ink-muted"
          >
            {hero.documentary.sequenceProvenance}
          </p>
        </Container>
      </div>
    </section>
  );
}
