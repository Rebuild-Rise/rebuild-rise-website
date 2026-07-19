# CREATIVE_BRIEF.md — The Elevation

This brief supersedes DESIGN_SPEC.md wherever they conflict, except the hard
floors listed in CLAUDE.md. The v1 build (Phases 0–3) was deliberately
conservative because it was executed under tight constraint. Your job is to
elevate it into something a design studio would sign — without breaking what
already works.

## The governing concept: the homepage is the logo, unfolded

Study `public/rebuild-rise-logo.png` before writing a line of code. Read top
to bottom, the mark is a vertical world: canopy → two figures sheltered in a
pointed arch in the trunk → ground line → root system → a winding path that
exits the mark toward the viewer.

The homepage is that world, unrolled as a scroll:

| Scroll position | Logo element | Section |
|---|---|---|
| Top | Canopy (the dark mass) | Hero — forest green, typographic |
| ↓ | Figures at the doorway | Who we serve |
| ↓ | Ground line | Where we come from (2022 story + lessons) |
| ↓ | Root system | Our model — parchment, textured, underground |
| ↓ | Growth from the roots | Program pillars + Where we are |
| Bottom | The doorway | Get involved — the path arrives at an arch |

The emotional inversion that makes it land: in the logo, the figures stand in
the arch at the *top* of the path. On the site, the visitor walks the path
*down* and arrives at the arch themselves — and inside it is the invitation
to join. The path leads to a door.

## Device one: the Path (the signature)

One continuous winding line threads the entire homepage. It emerges beneath
the hero headline (from a small arch mark), weaves between and behind
sections — disappearing behind cards, re-emerging in whitespace — becomes the
root line through the model section (absorbing the existing M1 animation:
same stroke, same journey), and terminates inside the terminal arch of the
Get involved section.

Character: organic and winding like the logo's path — not a timid straight
dashed line. Walnut or forest stroke, drawn progressively as the user
scrolls. Engineering is yours to decide (one document-spanning SVG vs.
per-section segments that align at boundaries; scroll-progress-linked draw
vs. IntersectionObserver segments) — propose, choose, log. Constraints: 60fps
on mid-range Android, no scroll-jacking, no layout shift, reduced-motion
users see the path fully drawn and static, and on narrow mobile the path may
simplify to a near-vertical thread rather than disappear.

## Device two: the Arch (the secondary motif)

A pointed-arch mask derived from the trunk's doorway. Define its geometry
once (SVG path / clip-path) so every instance is identical. It appears in
exactly three places sitewide, and its rarity is the point:

1. One featured photo per page (the women's portrait earns it on the
   homepage; choose deliberately elsewhere).
2. The Pilot 001 EmptyFrame — an empty doorway, waiting. Keep the caption.
3. The terminal CTA panel in Get involved — forest-filled arch, cream
   headline ("The path leads to a door." or quieter if you find better),
   button inside.

Everything else stays rectangular. If you're tempted to use the arch a
fourth time, that's the signal you're diluting it.

## Tertiary motifs (use with a light hand, or not at all)

- Brown-leaves-in-the-canopy: the walnut lesson-born model nodes already
  echo this. You may extend the echo in one more quiet place if it earns it.
- Growth below the ground line: the model section is "underground" —
  parchment, the duotone texture, and (optionally) a curved soil-line
  divider where the story section ends. One curve shape, reused, or none.
- The Fraunces ampersand as a standalone mark (footer, 404) is sanctioned.

## Motion philosophy (replaces DESIGN_SPEC §8's "exactly three")

One orchestrated journey, quiet everything else. The Path's progressive draw
is the star. Section reveals and hovers support it and stay as subtle as v1.
You may add micro-craft (a node pulse when the path reaches it, a settle on
the terminal arch) where it serves the journey — logged, and each must pass
the Chanel test. No animation dependencies; SVG/CSS/WAAPI only. Total motion
should feel patient and rooted: nothing bounces, nothing loops forever,
nothing moves that isn't telling the story.

## Typographic craft license

Fraunces is a variable font with optical sizing and character — use it like
you mean it: tuned opsz at display sizes, tightened display leading, hanging
quotation marks on the lesson quotes, true apostrophes and en/em dashes
everywhere. Body stays Manrope, calm and readable, 60–75ch. The stamps stay
system mono. No new fonts.

## Reference qualities (not sites to copy)

The finished page should feel like: a printed field journal produced by a
serious design studio — editorial restraint, warm materials, evidence-first;
the institutional gravity of a foundation's annual report crossed with the
groundedness of documentary work; young and honest without being naive. If a
section starts feeling like a SaaS landing page or a charity template, stop
and reread this paragraph.

## What is untouchable

- The headline "We build what stays." and all existing copy meaning.
- The section order and the story → lessons → model narrative logic.
- The three-state photo grammar and every caption stamp.
- The honesty posture: Pilot 001 is in design; the EmptyFrame ships empty.
- The hard floors in CLAUDE.md.

## Definition of done for the elevation

A funder screenshots any section and it is recognizably this organization.
The path is the thing a visitor describes to someone else the next day. The
Lighthouse scores did not drop. And nothing on the page is decoration —
every visual device encodes something true about the work.
