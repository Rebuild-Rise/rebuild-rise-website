import { ARCH_ASPECT, archPath } from "@/lib/arch";
import { cn } from "@/lib/cn";

/**
 * Legacy D2 empty-frame specimen, retained only for the internal styleguide.
 * D32 removes this architectural metaphor from the homepage in favour of a
 * rectangular field-status dossier.
 */
export function EmptyFrame({
  caption,
  className,
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-[300px]", className)}
      style={{ aspectRatio: ARCH_ASPECT }}
    >
      <svg
        viewBox="0 0 100 125"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={archPath(100, 125, 1.5)}
          fill="var(--color-parchment)"
          stroke="var(--color-olive)"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-6 pt-[30%]">
        <p className="max-w-[24ch] text-center font-sans text-sm text-ink-muted">
          {caption}
        </p>
      </div>
    </div>
  );
}
