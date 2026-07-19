import { ARCH_PATH_NORM } from "@/lib/arch";

/**
 * Renders the shared arch clip path once per page. Consumers use
 * `[clip-path:url(#rr-arch)]` on an element with `aspect-ratio: 4/5`.
 */
export function ArchDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="rr-arch" clipPathUnits="objectBoundingBox">
          <path d={ARCH_PATH_NORM} />
        </clipPath>
      </defs>
    </svg>
  );
}
