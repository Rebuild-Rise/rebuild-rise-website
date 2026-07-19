import Image from "next/image";
import { Container, Reveal, SectionEyebrow, SoilLine } from "@/components/ui";
import { ModelDiagram } from "./ModelDiagram";
import { images, model } from "@/content/siteContent";

const headingId = "model-heading";

export function Model() {
  return (
    <section
      id="model"
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-parchment py-[clamp(4.5rem,10vh,7rem)] text-ink"
    >
      {/* Underground texture (ledger D23): the soil cross-section — roots
          descending past the ground line — replaces the meal-container
          duotone. Original artwork, never filtered; low opacity so it reads
          as ground, not image. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={images.textureSoil.src}
          alt={images.textureSoil.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
      </div>

      {/* The ground line — the page goes underground here (ledger D6). */}
      <SoilLine className="absolute inset-x-0 top-0" />
      <SoilLine flipped className="absolute inset-x-0 bottom-0" />

      <Container className="relative">
        <Reveal>
          <div className="flex max-w-[65ch] flex-col gap-4">
            <SectionEyebrow theme="light">{model.eyebrow}</SectionEyebrow>
            <h2
              id={headingId}
              className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.1] text-ink"
            >
              {model.heading}
            </h2>
            <p className="font-sans text-base leading-[1.7] text-ink-muted">
              {model.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-[clamp(3.5rem,8vh,6rem)]">
          <ModelDiagram steps={model.steps} />
        </div>

        <Reveal>
          <p className="mt-[clamp(3.5rem,8vh,6rem)] max-w-[65ch] border-t border-walnut/30 pt-6 font-sans text-base leading-[1.7] text-ink-muted">
            {model.closing}
          </p>
          <p className="mt-4 font-sans text-sm text-walnut">{model.legend}</p>
        </Reveal>
      </Container>
    </section>
  );
}
