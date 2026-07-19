# Homepage Implementation Plan — A Record in Three Movements

Approved: 2026-07-14

## Accepted direction

Implement **A Record in Three Movements** on the public homepage. The opening
will read as a chronological archive sequence rather than D47's forest / portrait
/ purpose triptych:

1. Prepared — the volunteer packing line.
2. Gathered — women gathered beneath a tree in an Abuja IDP community.
3. What remained? — meals prepared for distribution, followed by the honest
   present status of the organization.

The images are approved archive photographs from the founders' prior relief work
in Abuja in 2022. They remain externally captioned and must not be presented as
Pilot 001 or current Rebuild & Rise impact.

## Scope

- Replace the public homepage hero composition and its D47-only CSS.
- Keep the real site Header and its mobile navigation behavior.
- Keep the canonical thesis, mission, actions, status, image records, captions,
  and documentary standard from `siteContent.ts`.
- Move `packingTeam`, `communityWomen`, and `mealsPrepared` into the opening.
- Remove the now-repeated photographic spread from the Story chapter so the
  origin text proceeds directly into the three lessons.
- Preserve the Who We Serve ledger, exact Model and JourneyPath, interlude,
  program directory, Pilot 001 status, founders, correspondence behavior, Human
  Bookend finale, footer, metadata, and all secondary routes.
- Do not add or download external photography.

## Responsive composition

- 1280px and wider: compact two-part forest masthead, followed by a 12-column
  parchment sequence with a dominant landscape, supporting portrait, material
  detail, and chronological/status rail.
- 768–1279px: six-column sequence retaining dominant/supporting hierarchy.
- Below 768px: thesis, mission, and actions precede a deliberate vertical photo
  sequence; the portrait narrows and moves right, the detail narrows and moves
  left, and status closes the chapter.
- Thesis target: 56–64px desktop and 40–44px mobile. No fixed hero height and no
  text over photographs.

## Accessibility and performance

- Maintain a single `h1`, logical source order, external captions, truthful alt
  text, visible links, and current focus/navigation behavior.
- Keep natural or declared source ratios and allow captions/status to wrap.
- Give only the dominant first archive image high fetch priority; allow later
  frames to load normally.
- Preserve static first paint and reduced-motion behavior.

## Acceptance checks

- Live visual review at 1440, 1280, 1024, 768, 375, and 320 pixels.
- No horizontal overflow; usable mobile navigation; stable line breaks and
  complete captions.
- Inspect opening, Who We Serve transition, Story/lessons, Model, and finale.
- Review content reflow at an effective enlarged-text width.
- Run lint, TypeScript, production build, route checks, accessibility review,
  and a proportionate performance review.
- Correct the weakest composition found during review.
- Only after verification: add D48 to `DESIGN_DECISIONS.md` and record the final
  state in `HOMEPAGE_REDESIGN_HANDOFF.md`.
