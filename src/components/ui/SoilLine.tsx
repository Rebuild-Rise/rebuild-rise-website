import { cn } from "@/lib/cn";

/**
 * The ground line from the logo — one gentle drawn curve marking where the
 * page goes underground (top of the model section) and where it surfaces
 * again (bottom, flipped). One shape, reused, per the brief's tertiary
 * motif rule (ledger D6).
 */
export function SoilLine({
  flipped = false,
  className,
}: {
  flipped?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      className={cn("h-10 w-full sm:h-12", flipped && "-scale-y-100", className)}
      aria-hidden="true"
    >
      <path
        d="M 0 50 C 240 16, 420 66, 720 38 C 1010 12, 1240 60, 1440 28"
        fill="none"
        stroke="var(--color-walnut)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
