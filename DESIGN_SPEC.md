# Rebuild & Rise — Design Specification v1.0

This document is the single source of truth for the Rebuild & Rise website.
It is authoritative: do not invent colors, fonts, sections, animations, or copy
that are not defined here or in `src/content/siteContent.ts`.

**The governing rule: where this spec is silent, choose the quieter option.**

---

## 1. Brand thesis

Rebuild & Rise is a registered Nigerian nonprofit building sustainable,
community-driven development for IDPs, Almajiri and out-of-school children,
and underserved host communities. The site must communicate: dignity (not
pity), sustainability (not dependency), training (not one-time charity),
measurable learning (not vague hope), local partnership (not saviorism).

Core concept: **rooted pathways to self-reliance.** The founders ran relief
distributions in Abuja IDP camps in 2022, learned the limits of one-time aid,
and built Rebuild & Rise in response. The site tells that story honestly.

Primary audience: funders, partner organizations, advisors (mostly desktop,
good connections). Secondary: Nigerian volunteers and anchors (mostly mobile,
slow/expensive data). The performance budget exists for them.

## 2. The signature — and the boldness budget

The site has exactly ONE signature element: **the root-line model** — an SVG
line that draws itself on scroll, beginning at the 2022 lesson cards and
descending through the seven model steps, styled like a root system.

Everything else stays quiet and disciplined. Quiet means: flat surfaces, thin
borders, generous whitespace, minimal motion, no decoration that does not
encode meaning. If you are unsure whether to add a visual flourish: don't.

## 3. Color tokens

Define as CSS custom properties in `globals.css` and mirror in Tailwind config.

| Token | Hex | Use |
|---|---|---|
| `--color-forest` | `#19351F` | Hero bg, footer bg, headings on cream, primary buttons |
| `--color-forest-deep` | `#122616` | Footer base bar, primary button hover |
| `--color-root` | `#243F2A` | Optional dark section variant |
| `--color-olive` | `#7C8A58` | Secondary accents, borders on dark, focus outline |
| `--color-leaf` | `#A1AA78` | Small labels/eyebrows on dark backgrounds |
| `--color-walnut` | `#5B3818` | Eyebrows on light, archive stamps, warm accents |
| `--color-cream` | `#F7F1E5` | Page background |
| `--color-parchment` | `#EFE8D6` | Alternate section background |
| `--color-ivory` | `#FFFCF4` | Card background, caption strips |
| `--color-ink` | `#1E2A1F` | Body text on light |
| `--color-ink-muted` | `#6D685C` | Secondary text on light |
| `--color-line` | `#E4DCC9` | Hairline borders on light |
| `--color-cream-muted` | `#C9CDB4` | Body text on forest |

Rules:
- These are the ONLY colors on the site. No pure `#000`/`#fff`, no Tailwind
  default palette (no `blue-500`, no `gray-*`), no gradients anywhere.
- Contrast pairs (all pass WCAG AA): ink/cream, forest/cream, cream/forest,
  walnut/cream, walnut/ivory, cream-muted/forest, ink-muted/ivory.
- Never place `leaf` or `olive` text on cream (fails contrast) — they are for
  dark backgrounds and decorative strokes only.

## 4. Typography

Load via `next/font/google` with `display: "swap"`:
- **Fraunces** — weights 400, 500, 600. Display/headings and pull quotes ONLY.
  Never letter-space Fraunces. Never use it for body or UI text.
- **Manrope** — weights 400, 500. All body, UI, labels, buttons.
- Archive stamps use the system mono stack:
  `ui-monospace, "SF Mono", Menlo, monospace` (no extra font download).

Type scale (use `clamp()`; rem-based):
- Display (hero h1): `clamp(2.75rem, 7vw, 4.75rem)`, Fraunces 500, line-height 1.04, color cream on forest.
- H2 (section heads): `clamp(1.75rem, 3.5vw, 2.5rem)`, Fraunces 500, line-height 1.15.
- H3 (card titles): `1.25rem`, Fraunces 500, line-height 1.3.
- Body: `1rem`, Manrope 400, line-height 1.7, color ink / cream-muted on dark.
- Small: `0.875rem`, line-height 1.6.
- Eyebrow (section labels): `0.6875rem`, Manrope 500, uppercase,
  `letter-spacing: 0.18em`, color walnut on light / leaf on dark.
- Archive stamp: `0.6875rem` mono, color ink-muted.

Line length: constrain running text to 60–75 characters (`max-width: 65ch`).
The ampersand in "Rebuild & Rise" is always set in Fraunces.

## 5. Layout & spacing

- Container: `max-width: 1120px`, horizontal padding `24px` (16px under 640px).
- Section vertical padding: `clamp(4rem, 10vh, 7rem)`.
- Spacing scale: multiples of 4px. Card padding: 24–32px. Grid gaps: 16/24px.
- Radii: 14px for buttons, cards, and photos. 0 on any single-sided border
  accent (pillar cards).
- Borders: `1px solid var(--color-line)` on light; `1px solid` olive at 40%
  opacity on dark.
- Shadows: none. Depth comes from background shifts (cream → parchment →
  ivory), not elevation.
- Breakpoints: 640, 768, 1024. Mobile-first. Grids collapse to single column
  below 768; the model section becomes a vertical path on mobile.

## 6. Components

**Button** — height 48px, padding 0 24px, radius 14px, Manrope 500, 0.9375rem.
- Primary: forest bg, cream text; hover: forest-deep bg. On dark sections:
  cream bg, forest text; hover: ivory bg.
- Secondary: transparent bg, 1px olive border, forest text (cream text on
  dark); hover: border-color walnut (light) / leaf (dark).
- Transition: `background-color 180ms ease, border-color 180ms ease`. No
  transforms, no shadows.

**SectionEyebrow** — the eyebrow style above every section h2.

**Card** — ivory bg, 1px line border, radius 14px, padding 24–32px. Hover (only
where the card links somewhere): border-color darkens, `translateY(-2px)`,
200ms ease.

**CaptionedPhoto** — the ONLY way photos appear on the site. Structure:
`next/image` (radius 14 top corners) + caption strip (ivory bg, 10px 14px
padding, flex space-between): left = place name, Manrope 500 forest; right =
mono stamp e.g. `Abuja · 2022 · archive`, ink-muted. Full radius 14 on the
outer wrapper, 1px line border.

**ArchiveStrip** — hero footer element: 3 archive thumbnails 72px tall, radius
8px, in a row with the caption "Abuja, 2022 — where our story began ↓" (small,
cream-muted). Anchors to `#story`.

**LessonCard** — ivory card; quote in Fraunces 500 (h3 size), first-person past
tense, wrapped in quotation marks; below, an arrow line in walnut small text:
"So we …" mapping to a model step.

**ModelStep** — node (12px circle, forest fill; the final "Sustain" node olive)
on the root line + step name (Fraunces 500) + one-sentence description
(small, ink-muted). Steps born from a 2022 lesson (`lessonBorn: true` in
content) render their node in walnut.

**PillarCard** — ivory card with a 3px top border in the pillar's accent color
(forest / olive / walnut / leaf), `border-radius: 0 0 14px 14px`.

**EmptyFrame** — a photo-sized frame with `1.5px dashed` olive border, radius
14, parchment bg, centered caption: "Pilot 001 — photographs coming from the
field." Ships at launch, intentionally empty.

**FounderCard** — headshot (live-grade photo, radius 14), name, role (CEO /
CTO), two-line bio. Until headshots exist, render initials in a forest circle
on ivory — never a stock avatar.

Icons: `lucide-react`, `strokeWidth={1.5}`, `currentColor`, 20–24px. No emoji,
no icon fonts, no filled icons.

## 7. Photo grammar (three states — enforce in code)

Every image object in content has `treatment: "archive" | "texture" | "live"`.

1. **archive** — files prefixed `archive-` in `/public/images`. Pre-graded;
   NEVER apply CSS filters on top. Must always render inside CaptionedPhoto
   with its stamp. These are 2022 founders' fieldwork.
2. **texture** — files prefixed `texture-`. Background use only: absolutely
   positioned under a section at 12–18% opacity, `object-fit: cover`, behind
   parchment or forest sections. Never as a content image, never with faces
   legible at full opacity.
3. **live** — reserved for current work: founder headshots now, Pilot 001
   photos later. When live photos exist they render in full color grade; the
   contrast with archive duotoning is intentional and must be preserved.

No stock photography under any circumstances. No images outside the manifest.

## 8. Motion — exactly three, no libraries

No framer-motion, GSAP, AOS, or any animation dependency. No scroll-jacking,
no parallax, no autoplaying video, no marquees.

- **M1 Root-line draw**: the model SVG path animates `stroke-dashoffset` from
  full length to 0 over 1200ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`,
  triggered once by IntersectionObserver at 25% visibility. Step nodes fade
  in staggered 80ms after the line passes them.
- **M2 Section reveal**: sections/cards animate `opacity 0→1` and
  `translateY(16px→0)`, 500ms, same easing, IntersectionObserver threshold
  0.15, run once. Stagger sibling cards by 60ms, max 5 staggered items.
- **M3 Hover**: as defined on Button and Card. 180–200ms. Color/border/2px
  translate only.

`@media (prefers-reduced-motion: reduce)`: all three disabled; everything
renders visible and static. Test this.

## 9. Performance budget (hard limits)

- Homepage total transfer ≤ 1MB on first load.
- Images exclusively through `next/image` with correct `sizes`; hero has zero
  images above the fold except ArchiveStrip thumbnails (~72px, low cost).
- Fonts via `next/font` only (self-hosted, swap). No other third-party
  requests except the form endpoint on submit.
- Targets: Lighthouse mobile ≥ 90 in all four categories; LCP < 2.5s on
  throttled 4G. The audience includes users on slow Nigerian mobile data —
  performance is a brand value here, not an optimization pass.

## 10. Accessibility

- Semantic landmarks (`header`, `main`, `section` with `aria-labelledby`,
  `footer`); exactly one `h1`; heading levels never skip.
- Focus visible: `outline: 2px solid var(--color-olive); outline-offset: 2px`.
- All alt text comes from the content manifest — never empty on content
  images, empty (`alt=""`) on texture backgrounds.
- Mobile nav operable by keyboard; body scroll locked while open.
- Color contrast per the pairs in §3 only.

## 11. Homepage section order

1. **Header** — cream, logo left, nav, primary CTA "Partner with us".
   Mobile: full-screen menu, CTA visible inside.
2. **Hero** (`#top`) — forest bg. Eyebrow, display headline, subhead
   (max 44ch), primary + secondary buttons, trust line, ArchiveStrip.
   No hero photo. Typographic identity is the point.
3. **Who we serve** (`#serve`) — cream. Eyebrow, h2, intro, 3 cards.
4. **Where we come from** (`#story`) — cream → parchment transition. Eyebrow,
   h2, story paragraph, 2 CaptionedPhotos (grid 1.3fr/1fr; stacked mobile),
   then 3 LessonCards under "What it taught us".
5. **Our model** (`#model`) — parchment, `texture-containers-duotone` at 14%
   opacity as bg. The root line visually begins beneath the lesson cards.
   H2 "Three lessons became seven steps." Seven ModelSteps along the line
   (horizontal path desktop, vertical mobile). Closing line from content.
6. **Program pillars** (`#programs`) — cream. 2×2 PillarCards (1 col mobile).
7. **Where we are** (`#now`) — ivory band. Pilot 001 framework (6 numbered
   steps, small), measurement commitments (3 items), photo-ethics line,
   FounderCards (2), registration line, and the EmptyFrame.
8. **Get involved** (`#involve`) — forest. H2, intro, 4 involvement cards
   (dark variant: transparent bg, olive 40% border, cream text), primary CTA.
9. **Footer** — forest-deep. Wordmark, one-line mission, nav, contact email,
   "Registered in Nigeria" line.

## 12. Forbidden

Gradients · box-shadows · emoji · stock photos · CSS filters on photos ·
animation libraries · parallax · carousels/sliders · Tailwind default colors ·
fonts beyond Fraunces/Manrope/system-mono · lorem ipsum (all copy exists in
the content file) · "Donate now" as the primary CTA · decorative African
patterns · more than one signature moment · anything the spec doesn't define.

## 13. Copy rules

All copy lives in `src/content/siteContent.ts`. Do not rewrite it. Sentence
case everywhere except the uppercase eyebrows. If a component needs a string
that doesn't exist, add it to the content file and flag it — never hardcode
prose in components.
