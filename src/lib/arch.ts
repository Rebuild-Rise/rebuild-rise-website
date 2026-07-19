// The Arch — the pointed doorway from the trunk of the logo.
// This module is the single source of truth for its geometry (ledger D2).
// The current homepage uses it only for the women's documentary portrait;
// legacy/styleguide examples may still render the EmptyFrame. If you are
// tempted to define arch geometry anywhere else, stop.

/** Fraction of the arch height at which the straight sides spring into the curve. */
export const ARCH_SPRING = 0.46;

/** Canonical aspect ratio (w:h) every arch instance renders at. */
export const ARCH_ASPECT = "4 / 5";

/**
 * Arch outline in normalized (0..1 × 0..1) coordinates, for
 * `<clipPath clipPathUnits="objectBoundingBox">`.
 */
export const ARCH_PATH_NORM = archPath(1, 1);

/**
 * The same outline scaled to an arbitrary box, with an optional inset so a
 * stroked rendering isn't clipped at the box edge.
 */
export function archPath(w: number, h: number, inset = 0): string {
  const sx = (t: number) => round(inset + t * (w - 2 * inset));
  const sy = (t: number) => round(inset + t * (h - 2 * inset));
  return [
    `M ${sx(0)} ${sy(1)}`,
    `L ${sx(0)} ${sy(ARCH_SPRING)}`,
    `C ${sx(0)} ${sy(0.24)} ${sx(0.28)} ${sy(0.1)} ${sx(0.5)} ${sy(0)}`,
    `C ${sx(0.72)} ${sy(0.1)} ${sx(1)} ${sy(0.24)} ${sx(1)} ${sy(ARCH_SPRING)}`,
    `L ${sx(1)} ${sy(1)}`,
    "Z",
  ].join(" ");
}

function round(n: number): number {
  return Math.round(n * 1000) / 1000;
}
