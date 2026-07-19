import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionBackground = "cream" | "parchment" | "ivory" | "forest";
type SectionPad = "default" | "tight" | "roomy";

interface SectionProps {
  children: React.ReactNode;
  background?: SectionBackground;
  /** Deliberate vertical-rhythm variance (ledger D20) — not every section
      breathes the same amount. */
  pad?: SectionPad;
  /** Override just the bottom padding (ledger D25) — e.g. tighten the tail
      into an adjacent section without changing the top. */
  padBottom?: SectionPad;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  cream: "bg-cream text-ink",
  parchment: "bg-parchment text-ink",
  ivory: "bg-ivory text-ink",
  forest: "bg-forest text-cream-muted",
};

const padTopClasses: Record<SectionPad, string> = {
  default: "pt-[clamp(3.5rem,8vh,7rem)]",
  tight: "pt-[clamp(3.5rem,6vh,4.5rem)]",
  roomy: "pt-[clamp(4rem,11vh,10rem)]",
};

const padBottomClasses: Record<SectionPad, string> = {
  default: "pb-[clamp(3.5rem,8vh,7rem)]",
  tight: "pb-[clamp(3.5rem,6vh,4.5rem)]",
  roomy: "pb-[clamp(4rem,11vh,10rem)]",
};

export function Section({
  children,
  background = "cream",
  pad = "default",
  padBottom,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        padTopClasses[pad],
        padBottomClasses[padBottom ?? pad],
        backgroundClasses[background],
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export type { SectionBackground };
