import { Container, Reveal } from "@/components/ui";
import { interlude } from "@/content/siteContent";

// The one loud moment (ledger D19): a full-bleed typographic interlude —
// the organization's thesis distilled, set oversized after the model has
// made the argument. This motif is sanctioned exactly once sitewide.
export function Interlude() {
  return (
    <section
      aria-labelledby="interlude-line"
      // Asymmetric padding (ledger D24): the top tightens toward the model —
      // which already closes with its soil line — so no dead cream band sits
      // above the statement; the bottom keeps its generous drop into pillars.
      className="bg-cream pb-[clamp(4rem,10vh,7rem)] pt-[clamp(3rem,7vh,5rem)] text-ink"
    >
      <Container>
        <Reveal>
          <p
            id="interlude-line"
            className="font-display text-[clamp(2.375rem,5.2vw,4.25rem)] font-medium leading-[1.06]"
          >
            <span className="block md:ml-[8.333%] text-ink-muted">{interlude.line1}</span>
            <span className="block pl-[8.333%] text-forest md:pl-[16.666%]">
              {interlude.line2}
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
