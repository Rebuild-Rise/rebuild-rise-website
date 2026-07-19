# DESIGN_DECISIONS.md — the ledger

Studio memory for the Rebuild & Rise website. Every deviation from
DESIGN_SPEC.md, every genuine fork, and every unrequested craft decision is
logged here as: date · what changed · what it replaced · why · how to revert.
Read this at the start of every session. Do not re-litigate settled decisions.

---

## 2026-07-07 — Ledger created (Elevation phase begins)

The v1 build (Phases 0–3) shipped conservative and correct. This phase
executes CREATIVE_BRIEF.md: the homepage becomes the logo unfolded, with the
Path as signature and the Arch as secondary motif. Decisions follow below as
they are made.

## 2026-07-07 — Recon critique of v1 (375 / 768 / 1440 screenshots)

**What works:** the typographic forest hero is confident and owns the brand
voice; the palette discipline (cream → parchment → ivory) gives quiet, warm
depth; the lessons → model narrative logic is real content design; archive
photos with mono stamps read documentary, not stock.

**What reads as template:** every section is the same recipe (eyebrow → h2 →
intro → card grid), so the page has rhythm but no journey; the v1 "root line"
is a timid 2px squiggle that reads as a divider, not a root system — on
mobile it is nearly invisible (stretched viewBox, hairline); Get involved is
four identical outline cards plus a lone button — the most template moment on
the page, with no arrival; the EmptyFrame is a plain dashed rectangle — a
missed poetic beat; nothing visually connects sections.

**What the elevation must fix:** thread one continuous story through the
scroll (the Path); give the terminal section an arrival (the Arch); make the
model feel underground rather than merely beige; and do the punctuation /
optical-size craft the brief licenses.

## 2026-07-07 — D1 · The Path: one document-spanning SVG, scroll-progress draw

**What changed:** a single absolutely-positioned SVG spanning `<main>`, its
`d` built at runtime from measured waypoint anchors (`data-path-*`
attributes on sections and model nodes), drawn by mapping scroll position to
`stroke-dashoffset` in a rAF-coalesced passive scroll handler.
**What it replaced:** the alternative fork — per-section SVG segments aligned
at boundaries, each drawn by IntersectionObserver.
**Why:** the brief's emotional core is ONE line walking the visitor down to
the door; segments make the draw stepwise and the boundary alignment fragile
(any padding change breaks continuity, `preserveAspectRatio="none"` distorts
curve character across widths). Performance holds: all geometry reads are
precomputed at build/rebuild time; the scroll handler does zero layout reads
and one style write per frame; geometry rebuilds only on debounced resize +
`document.fonts.ready`. Reduced-motion and pre-JS states render the path
fully drawn (offset 0 is the default; JS only "un-draws" when motion is
allowed). Mobile simplifies to a near-vertical gutter thread (same engine,
different waypoint generator).
**Revert:** delete `src/components/path/`, restore ModelDiagram's own SVG
line (git history), remove `data-path-*` attributes.
**Engineering note:** the geometry is ONE polyline computed globally, but it
is *rendered* as a few `<path>` elements split exactly at color-zone
boundaries. This is not the rejected per-section fork — segments share exact
endpoints from the same curve — it exists so a scroll frame repaints only the
actively-drawing segment's bounding box, not a 9,500px-tall layer.

## 2026-07-07 — D2 · The Arch: one objectBoundingBox clipPath + shared path module

**What changed:** arch geometry defined once in `src/lib/arch.ts` as
normalized (0..1) path data; a global `<clipPath id="rr-arch"
clipPathUnits="objectBoundingBox">` rendered once in the page; the three
sanctioned instances consume it — the women's portrait via
`clip-path: url(#rr-arch)`, the EmptyFrame as a *stroked* SVG render of the
same path data (a clip cannot carry a dashed outline), and the terminal CTA
panel via the same clip. A fixed aspect ratio (4:5) on clipped elements keeps
the point of the arch from distorting.
**What it replaced:** the alternative fork — per-instance SVG `<mask>`s or
duplicated inline clip paths.
**Why:** masks buy soft edges we don't need and cost an extra alpha buffer;
duplicated geometry drifts. One path-data source guarantees the three
instances are identical, and the stroked EmptyFrame provably shares the
doorway's exact curve.
**Revert:** delete `src/lib/arch.ts`, restore rectangular CaptionedPhoto /
EmptyFrame / CTA from git history.

## 2026-07-07 — D3 · Path color zones: olive on dark, walnut on light

The Path must live on forest (hero start, Get involved end) and on
cream/parchment. Walnut on forest is mud; gradients are forbidden (spec §12).
Solution: the one global polyline renders as segments split exactly at
zone-boundary waypoints (see D1's engineering note); each segment carries its
zone's stroke — walnut on light, olive on dark. Hard color switch happens
exactly at section boundaries, which is honest: the path changes as the
ground changes. Revert: single walnut path.

## 2026-07-07 — D4 · Story features the women's portrait, arch-clipped

**What changed:** the Story section's lead photo swaps from `groupTree01` to
`communityWomen` (1600×2133 portrait), rendered as the arch CaptionedPhoto
variant — the homepage's one arch photo per the brief. `groupTree01` remains
in the hero ArchiveStrip, so it is not lost.
**Why:** the brief names the women's portrait as earning the arch, and v1
never used it on the homepage at all — the strongest image in the manifest
was unshipped.
**Revert:** restore `story.photos` to `["groupTree01", "packingWarmlight"]`
and drop the `variant="arch"` prop.

## 2026-07-07 — D5 · Fraunces loads as a true variable font with `opsz`

**What changed:** `Fraunces({ axes: ["opsz"] })` (variable wght + opsz)
replaces the three static weights; `font-optical-sizing: auto` now does real
work at display sizes. Display leading tightens (hero 1.04 → 0.98, h2 1.15 →
1.1) under the brief's typographic craft license.
**Why:** the brief explicitly licenses tuned opsz and tightened display
leading; the typeface *vocabulary* (the hard floor) is unchanged. One
variable file replaces three static files — transfer stays flat or better.
**Revert:** restore `weight: ["400","500","600"]` and v1 line-heights.

## 2026-07-07 — D6 · Soil line: one drawn curve, not a filled divider

**What changed:** a single gentle curve (walnut at low opacity, ~1.5px),
drawn full-width where the story's lessons end and the model begins — the
logo's ground line. The same shape is reused once, flipped, where the model
section ends (surfacing from underground). Model texture opacity nudges 14%
→ 16% (within spec's 12–18% band) to deepen the underground read.
**What it replaced:** the option of a filled wave divider between different
background colors (rejected: both neighbors are parchment; a filled shape
would force a new background tint and shout).
**Why:** the Chanel test — a drawn ground line is the minimum mark that
means "below this, roots." The Path crossing it perpendicular is the moment
the visitor goes underground.
**Revert:** delete `SoilLine` and its two usages; restore texture opacity.

## 2026-07-08 — D9 · Path routing rewritten: lane discipline

**What changed:** the first routing pass placed waypoints at fixed
width-fractions, which let the line pierce the hero subhead, scratch across
the arch portrait and its caption, slash through the model heading, and
fishhook at the ivory→forest seam (screenshot review, 2026-07-08). The new
system measures each section's copy block (`data-path-copy`) and card grid
(`data-path-cards`) and obeys three rules: hold a whitespace lane beside the
copy; change lanes only inside empty section-boundary bands; cross card
edges perpendicularly (in the top, out the bottom — "behind" the card, per
the brief). The line now enters the node run from the left margin along the
ground line, exits right into the outer margin, and arrives at the terminal
arch dead-vertical so the interior line continues without a kink. Tablet
(768–1023) has no honest corridor beside 65ch copy, so it uses the margin
thread like mobile — the brief's sanctioned simplification. Sway amplitude
reduced 70 → 32; the terminal dot now rests just above the arch headline
instead of floating mid-void.
**Revert:** git history of JourneyPath.tsx (fixed-fraction waypoints).

## 2026-07-07 — D7 · M1 absorbed into the Path

The v1 model root-line draw (M1) is deleted as a separate animation;
its stroke, its journey, and its staggered node reveals become a stretch of
the global Path. Nodes now pulse once as the path tip reaches them
(transform-only, reduced-motion: none). ModelDiagram keeps layout and nodes
but loses both private SVGs. Revert: git history of ModelDiagram.tsx.

## 2026-07-08 — S1 · Surprise: ::selection in brand ink (unrequested)

Selecting text highlights forest-on-cream (inverted on dark sections) instead
of browser blue. Justification: the one default-browser artifact that broke
the material illusion; costs zero bytes of layout. Chanel test: removing it
returns a #3390FF highlight onto a parchment field journal — something is
lost. Revert: delete the two ::selection rules in globals.css.

## 2026-07-08 — S2 · Surprise: the hero's final period is a leaf (RISKY — flagged)

The full stop of "We build what stays." renders in the leaf token, and the
Path's small arch mark germinates directly beneath it: the sentence ends in a
seed, and the line grows out of it. The copy string is untouched — this is a
presentational span wrapping the existing final character. Risk, stated
honestly: a reader could take the colored period for a rendering error. It
survives because leaf-on-forest passes AA even as text, and because it is the
page's entire thesis in one glyph. If a stakeholder reads it as a bug, revert
by deleting the seed-span branch in Hero.tsx (the data-path-seed anchor must
then move to the h1 itself).

## 2026-07-08 — S3 · Surprise: a field-journal print pass (unrequested)

@media print forces ink-on-white text, reveals all motion-hidden content,
and hides the Path and interactive chrome. Justification: the brief's
reference quality is "a printed field journal produced by a serious design
studio" — funders print things; the page should survive paper. Revert:
delete the @media print block in globals.css.

## 2026-07-08 — Waypoint tuning notes (during build)

The Path holds exact center gutters through the pillar grid and the involve
cards (which are transparent and cannot hide it), exits the model by curling
around the last step's column, and descends Where-we-are in the gutter
between the text column and the founders grid, brushing the EmptyFrame's
left shoulder — the path passes the empty doorway; it enters only the
terminal one. Sway suppression (`noSway`) exists for these corridors.

## 2026-07-08 — D8 · The hero no longer scroll-reveals (found during floor testing)

**What changed:** Hero.tsx drops its two `Reveal` wrappers; hero content is
server-rendered visible. Below-fold sections keep M2 reveals.
**What it replaced:** v1 wrapped the hero in Reveal, so the entire
above-the-fold section was SSR'd at opacity 0 and painted only after
hydration — on a throttled phone the page opened blank for ~2s, and LCP was
gated on JavaScript. An entrance animation for content already in view adds
nothing the Path doesn't do better.
**Why:** the empathy floor. Content first on a three-year-old Android.
**Revert:** re-wrap the two hero blocks in `<Reveal>`.

## 2026-07-08 — D9 · Header logo ships as a 224px static WebP

**What changed:** `public/rebuild-rise-logo-header.webp` (14KB, derived from
the master logo) replaces the 515KB master PNG + `/_next/image` pipeline in
the Header; `sizes`-less srcset previously let mobile fetch a 136KB
candidate for a ~90px logo. The master PNG remains in public/ untouched.
**Why:** the logo sat on the LCP critical path; the derivative is the same
mark, pre-sized. Revert: point Header back at `/rebuild-rise-logo.png`.

## 2026-07-08 — Floor verification (elevation phase close)

- Transfer: 361KB initial load, 569KB after scrolling the full journey
  (floor ≤ 1MB) — measured on the production build, cache disabled.
- Lighthouse mobile (default Slow-4G simulation): performance 96,
  accessibility 100, best practices 96, SEO 100 (floor ≥ 90 all).
- LCP: 0.9s under 4G throttling (70ms RTT / 9Mbps / 4× CPU — floor < 2.5s);
  2.7s under Lighthouse's harsher Slow-4G sim, where LCP is re-timed by the
  spec-mandated `font-display: swap` repaint. Recorded honestly; not treated
  as a floor breach since the floor names 4G.
- TBT 10–20ms (was 1,580ms mid-build: the Path engine's node mapping did
  ~4,200 getPointAtLength calls; fixed by caching sample coordinates).
- CLS 0. Reduced motion: path fully drawn and static at load, zero hidden
  content, no scroll listener attached — verified without scrolling.
- Known pre-existing: nav prefetches 404 (/about, /model, /programs,
  /get-involved, /contact do not exist yet — future pages, out of scope).

## 2026-07-09 — Final screenshot audit (post-rework, production build)

Re-shot all three widths against `next start`. The three reported
awkwardnesses are resolved: the hero mark now sits beside the period and the
line exits through the empty band clear of the subhead; the story descent
rides the photo-gap column past both captions; the terminal line reaches a
dot resting just above the headline. Two suspected regressions were
inspected at crop scale and found to be phantoms of JPEG downscaling: the
model exit clears the Sustain text at 1440 (~20–40px) and at 768 (~8px —
tight, but consistent with that width's margin-corridor language). The 768
arch approach is a smooth crook below the cards; every alternative would
cross a transparent card interior. Decision: no further tuning — working
geometry is not re-cut for phantom collisions. Reduced-motion verified on
production: all segments, door path, and end dot fully drawn at load with
zero scrolling. Console: only the pre-existing 404 prefetches for future
routes.

## 2026-07-09 — D10 · The path surfaces (supersedes "continuous", D1/D9 routing)

**What changed:** the Path now appears exactly three times — the hero exit
(olive), the root line from the lesson cards through all seven model nodes
to the model section's edge (walnut), and the descent from the top of Get
involved between the four cards into the terminal arch, ending at the
existing door dot (olive). Every connective segment is deleted: the story
descent and its loop above the lessons, the pillars pass-through, and the
Where-we-are right-side drop. Each surviving end tapers into three fading
dots (13/27/43px along the tangent, r 2.1/1.6/1.2, opacity .65/.42/.25);
each new beginning emerges from the same dots. The line reads as running
underground between appearances. Scroll still draws one virtual journey —
the tip parks between surfacings; node geometry through the model is
byte-identical to the previous routing.
**What it replaced:** one line threading every section (D1's core claim).
**Why (recorded for the studio memory):** targeted revision directive.
The continuous line bought "one journey" at the cost of connective travel
through sections it had nothing to say about; surfacing keeps the three
statements and lets the ground carry the rest.
**Revert:** git history of JourneyPath.tsx.

## 2026-07-09 — D11 · Founders render as proper cards in the content column

FounderCard becomes an ivory card (initials circle left, name/role right; an
empty bio renders a quiet hairline, never invented copy). The two cards sit
side by side below the framework/EmptyFrame grid with the registration line
beneath them — nothing floats, nothing straddles the section boundary.
Revert: git history of FounderCard.tsx / WhereWeAre.tsx.

## 2026-07-09 — D12 · Soil line gets real amplitude

The ground-line divider was rendering as a near-flat rule (22px of swing
flattened by full-bleed stretching read as a stray hairline). New curve:
viewBox 1440×72, 38px swing, rendered at 40–48px tall. Same single shape,
top and flipped bottom. The alternative was removal; the curve earns its
place once it visibly *is* a curve. Revert: previous d + h-6.

## 2026-07-09 — D13 · One deliberate boundary at the footer seam

Get involved (forest) and the footer (forest-deep) collided as two
uncommitted greens. The footer now opens with a 1px olive/30 rule — the
same hairline language as the footer's internal contact divider, making the
seam a drawn decision instead of an accident. Revert: drop the border-t.

## 2026-07-09 — D14 · Who-we-serve icons replaced with logo-vocabulary glyphs

Executes the plan logged at elevation close: lucide tent/book/home are gone;
the three cards now carry micro-glyphs from `src/lib/arch.ts` — canopy (the
gathering under the tree), doorway (the trunk's arch, from `archPath`
itself), ground line with a root (the soil that hosts) — 24×24, stroke 2
(the Path's weight), forest on ivory. `src/lib/icons.ts` deleted;
lucide-react remains only for the header menu affordance. Revert: restore
icons.ts and the lucide imports in WhoWeServe.

## 2026-07-09 — D15 · Single-SVG rule for everything that touches the Path

**Rule (new hard constraint):** any element that visually connects to the
Path — taper dots, the terminal arch fill the line descends into, the end
dot — must be rendered *inside the Path's own SVG* and positioned from the
path's own geometry (`getPointAtLength` / the same waypoint math), never as
separately positioned DOM or an absolutely-placed element in another
coordinate system.
**Why:** the seed mark, terminal dot, and door line were each positioned
independently of the path, so across widths they drifted and disconnected —
the line ended, then a separately-placed dot floated near it with a visible
gap. One geometry source is the only way to guarantee zero gap at every
width.
**Consequence:** the terminal arch *fill* (forest-deep) moved out of the Get
involved DOM (a CSS `clip-path` div at z-2, which sat above the Path and hid
it) and into the journey SVG as a filled `archPath()` drawn below the line
(z-1). The Get involved panel now only reserves the doorway's space and
holds its text (z-2, above the line). The arch geometry is still the single
`src/lib/arch.ts` definition (D2 intact) — same shape, rendered as SVG fill
instead of CSS clip.
**Revert:** git history of JourneyPath.tsx + GetInvolved.tsx.

## 2026-07-09 — D16 · The Path surfaces exactly twice (supersedes D10)

**What changed:** the hero appearance (A) and its arch seed mark are deleted.
The Path now surfaces twice: (B) the model root line — lesson cards →
through all seven nodes → taper dots at the model's edge; (C) top of Get
involved → card gutter → into the terminal arch, ending IN the door dot.
Appearance C's polyline now continues through the arch's peak down to the
resting dot (`DOOR_DOT_FRAC = 0.46` of arch height) with a whisper of an S,
so the terminus is path-derived (D15).
**What it replaced:** D10's three-surfacing routing (hero exit + model +
terminal).
**Why:** the hero segment had to justify its start with an arch emblem too
small to read, and it descended through empty right-hand space saying
nothing. The path should debut where it carries meaning — emerging from the
lessons as the root line. The hero returns to purely typographic; the leaf
"seed" period (S2) is reverted to a plain period with it, since its only
job was to source the now-deleted line (removes the acknowledged S2 risk).
**Model node geometry:** untouched.
**Revert:** restore appearance A in all three width branches + the seed
mark + the leaf-period span in Hero.tsx; set C to end at `door.y + 3`.
**Supersedes:** D10 (three surfacings) and retires S2 (leaf-period seed).

## 2026-07-09 — Verification (D15/D16)

Production build passes clean (no warnings). Reduced-motion and live scroll
both render appearance B (7 nodes) and C fully drawn; live terminal draws to
fraction 0.999 with dot opacity 1. Zoomed terminal at 1440 and 375 confirms
the stroke flows into the dot with zero gap. SVG contents: 3 `<path>` (arch
fill + B + C) and 10 `<circle>` (B start/end tapers 3+3, C start taper 3,
terminal dot 1) — all path-derived.

## 2026-07-09 — D17 · Founders populated, live grammar activated

**What changed:** the site's first live-grade images ship. Two headshots
(`live-headshot-aisha.jpg`, `live-headshot-salim.jpg`, 288×288, pre-graded)
added to the `images` manifest with `treatment: "live"`, `consent:
"confirmed"`, and descriptive portrait alt. `whereWeAre.founders` populated
with real names (Aisha Adamu · CEO, Salim Salim · CTO), roles, headshot
paths, and two-line bios (em dashes per the craft pass). FounderCard now
renders the headshot (next/image, radius 14, `sizes="64px"`) when set and
keeps the initials-circle fallback for future team members without a photo;
the placeholder hairline is replaced by the real bio. Card flex and the
founders grid both align to the top (`items-start`) so the two bios'
different lengths leave the cards top-aligned with naturally different
heights — no stretch, no truncation. Alt text is resolved from the manifest
by src (accessibility floor: honest alt from the manifest).
**Why:** the founders were the last TODO-flagged placeholder; the archive vs
live grade distinction (spec §7) now exists on the page for the first time —
the full-color headshots are meant to read differently from the archive
duotone, and are not unified with it.
**Verify:** production build clean; Where We Are shot at 1440 (cards
side-by-side, tops aligned at 5310px, heights 285/263) and 375 (stacked).
No CSS filters on the live images. No Lighthouse re-run (~28KB, two images).
**Revert:** restore the founders array to name/role placeholders with
`headshot: null` and `bio: ""`; remove the two manifest entries and the
`headshotAlt` wiring.

## 2026-07-10 — D18 · Hero linework: the logo unfolded, tone-on-tone

**What changed:** the hero's dead right two-thirds now carries an inline SVG
linework composition (`src/components/ui/HeroLinework.tsx`, ~1.6KB) — the
logo's vertical world drawn in the Path's stroke language: nested canopy
arcs, trunk lines that run unbroken through the ground line into the two
major roots, the doorway (from `archPath`, D2 intact) between them, and four
walnut leaf-dots (the lesson-born echo). Olive strokes at 0.16/0.30 opacity
on forest — the headline keeps the viewport. The logo's winding path is
deliberately absent from the drawing: the Path device surfaces exactly twice
(D16) and an illustrated third would dilute it.
**Placement:** right 46%, centered in the band above the divider
(`bottom-40` keeps the root tips clear of the hairline), `xl:`-only — at
1024 the drawing would crowd the 44ch copy, and below that the typographic
hero stands alone as before. Static; nothing to reduce.
**First attempt, rejected honestly:** evenly-spaced arcs read as a rainbow,
not a canopy, and its ground line collided with the divider — rebuilt with
trunk-into-root stroke continuity and asymmetric foliage arcs.
**Revert:** delete HeroLinework.tsx + its block in Hero.tsx.

## 2026-07-10 — D19 · The one loud moment: the interlude band

**What changed:** a full-bleed typographic interlude between Model and
Pillars — "A meal feeds a day. / A skill feeds a decade." — Fraunces at
clamp(2.375rem→4.25rem), the largest type after the hero. Line one in
ink-muted (the relief that fades), line two indented and in forest (the
skill that stays) — the color pair is the argument. Strings live in
siteContent.ts (flagged). Sanctioned exactly once sitewide.
**Placement rationale:** the brief allowed anywhere between story and
where-we-are; it lands after the model because the seven steps make the
argument and the interlude is its distillation — and because placing it
inside story→model would have put running text under appearance B's
emergence (D16 routing is untouchable).
**Revert:** remove `<Interlude />` from page.tsx, Interlude.tsx, and the
interlude strings.

## 2026-07-10 — D20 · The metronome broken: asymmetry, density, rhythm

**What changed, per section:**
- **Who we serve:** split header — heading left (max 18ch, up to 2.75rem),
  intro answers from the right column, baseline-aligned; cards go roomy
  (p-7→10 via a new Card `padding` prop), glyphs 24→36px with stroke
  compensated back to the Path's 2px, titles 1.375rem at lg.
- **Pillars:** four-across working band at lg (2×2 at md), `pad="tight"`
  after the interlude's held breath; cards gain mono index stamps
  (01–04) — the archive-stamp voice ordering the program.
- **Founders:** photo-forward — headshots 64→80/96px with correct `sizes`,
  names 1.375rem at lg, and the row spans the full content column (the
  dead right third at 1440 is gone).
- **Vertical rhythm:** Section gains a `pad` prop (tight/default/roomy);
  the page now breathes unevenly on purpose: roomy interlude, tight
  pillars, default elsewhere.
**Revert:** git history of WhoWeServe/Pillars/PillarCard/Card/Section/
FounderCard/WhereWeAre.

## 2026-07-10 — D21 · Dead zones closed

Hero: archive strip band tightened (mt-12→10, pt-8→7); the right void is
now D18's job. Get involved: the arch panel's extra `mt-6` dropped (the
arch's empty tip IS the pause), and the interior re-anchored — content
starts at 52% of arch height so the headline sits just under the Path's
resting dot (46%); the space below the button reads as the door's
threshold instead of the words drowning at the base. Terminal headline
scales to clamp(1.5→1.75rem). Revert: git history of GetInvolved.tsx.

## 2026-07-10 — D22 · Global scale audit at 1440

Card body text steps up from 0.875rem to 0.9375rem/1.65 at lg across the
serve cards, pillar cards, and involve cards (running text keeps its 65ch
measure and base size; captions, stamps, and annotations stay small on
purpose). With roomier card interiors this removes the "thin type in a
wide field" read the diagnosis named. Revert: strip the lg:text-[0.9375rem]
overrides.

## 2026-07-10 — Phase 5 verification

Production build clean. Transfer (production, cache disabled, 375w):
308KB initial, 519KB after scrolling the full journey — floor is ≤1MB;
delta from last measurement is under 20KB so Lighthouse was not re-run
(per session instructions). Screenshots at 1440/1024/375 across every
recomposed section; hero linework verified absent below xl; reduced-motion
verified (all shots taken under reduce with both Path appearances fully
drawn). Console: only the known pre-existing 404 prefetches for future
routes. Squint pass at 1440: forest+art / asymmetric cream / parchment
photo band / textured underground / loud cream statement / tight 4-across
band / ivory column+arch / forest terminal — the metronome is broken.

## 2026-07-11 — D23 · Illustrations arrive on forest ground

**What changed:** ten commissioned line-etching illustrations (olive/cream on
the exact forest hex) join the manifest under a new `Treatment` value,
`"illustration"`. Cards adopt dark illustrated header panels — this
supersedes the earlier ivory-spot plan and is intentional.
- **New component `IllustratedPanel`**: a `bg-forest` panel, top corners
  clipped by the card's `overflow-hidden` radius, holding a `next/image`
  cover fill. Because each asset's background is the panel colour, the art
  floats with no visible frame. Pre-graded — never filtered.
- **Serve cards**: three panels (serve-idp / -almajiri / -host), ~150px
  mobile / ~200px desktop, above the ivory body. Micro-glyphs removed;
  composition-pass header + grid kept.
- **Pillar cards**: four panels (pillar-health / -education / -skills /
  -community), ~136–160px, numbered mono labels kept on the ivory body.
- **Hero**: the code-drawn linework sketch is deleted; `hero-tree.webp`
  (the logo unfolded — canopy, doorway, roots, path) fills the right side
  at opacity 0.90, `md`+ only, decorative (`alt=""`). Its ground matches the
  hero forest, so it floats while "We build what stays." wins the squint
  test at 1440.
- **OG image**: `app/opengraph-image.tsx` renders over `og-background.webp`
  (converted to PNG for Satori) with the wordmark + "We build what stays."
  in Fraunces cream, left two-thirds. Static Fraunces 500 woff bundled in
  `src/og-assets/` (Satori cannot instance a variable font). `metadataBase`
  set so `og:image` resolves absolute.
- **Model background**: `texture-soil.webp` at 14% opacity replaces the
  meal-container duotone — a soil cross-section with roots past the ground
  line. **Chosen over the duotone** at 1440: it is literally the underground
  the section depicts and reads quieter, passing the squint test better.
- **Photo-ethics string** updated to distinguish photographs from original
  artwork.

**Retires D14** (logo micro-glyphs): `ServeGlyph` and the `GLYPH_*` geometry
are deleted; the illustrated panels now carry each card's identity. The v1
pillar accent top-border is also retired — a forest accent on a forest panel
would vanish.

**Verify:** production build passes; Lighthouse mobile 96 / 100 / 96 / 100,
CLS 0, TBT 10ms; full homepage transfer 447KB with all 17 images loaded
(floor ≤ 1MB) — next/image resizes the source WebPs. OG route serves 200
image/png with `og:image` meta injected.
**Revert:** restore HeroLinework.tsx + Hero sketch; point serve/pillar cards
back at glyphs/accent borders; Model back to textureContainers; delete
opengraph-image.tsx + src/og-assets/; drop the ten manifest entries and the
`"illustration"` treatment.

## 2026-07-11 — D24 · Illustrations shown whole (no crop) + art-direction fixes

**New rule:** no illustration asset may ever be cropped, non-uniformly
scaled, or filtered. Every asset's background is the exact panel/hero green,
so the correct treatment is `object-fit: contain` everywhere — the full
artwork always shows and the letterboxing is invisible against the matching
ground.

**What changed (root cause: the D23 pass used `object-fit: cover`, which
cropped the compositions — the tall allo tablet and the wide trowel lost
their ends):**
- **`IllustratedPanel`** → `object-contain` with `p-3 md:p-4` internal
  padding so art never touches the edge. Panel heights are now fixed per
  row, not per image: serve 180 / 240px, pillar 140 / 170px. The per-image
  `objectPosition` crop-focus maps (serve + pillars) are deleted.
- **Hero** → the tree moves out of a full-height absolute overlay into a
  dedicated right grid column (~38% at md, ~44% at lg), whole via contain,
  vertically centered against the copy, `max-h 420px` (md) / `560px` (lg),
  clear of the viewport edge. The archive strip and its hairline now live
  inside the left column, so no line crosses the roots. 768–1024 scales
  down; below 768 hidden (unchanged).
- **Model exit line** re-routed (D15 lanes): at 1440 the exit stroke passed
  6px from the Sustain text column; it now leaves the last node almost
  horizontally into the outer margin before descending — **69px** clearance.
- **Rhythm** → the interlude's padding is now asymmetric (`pt` tightened to
  `clamp(3rem,8vh,5rem)`, `pb` keeps `clamp(5.5rem,16vh,11rem)`): the dead
  cream band above "A meal feeds a day." shrinks (legend→statement 234 → 162px)
  while the drop into pillars stays generous.

**Verify:** production build passes; every illustration renders whole at 1440
and 375 (hero tree, three serve panels incl. the tall allo, four pillar
panels incl. the wide trowel); exit clearance 69px; model→interlude gap
162px. **Supersedes** the D23 `cover` treatment and its focus maps.
**Revert:** `IllustratedPanel` back to `object-cover` + focus props; hero
back to the absolute overlay; exit lane `contentR + 90`; interlude `py`.

## 2026-07-11 — D25 · Final homepage polish (launch-freeze session)

Six targeted fixes; production build passes; verified at 1440 / 1280 / 375.

1. **Story photo pairing.** The two photos now compose as dominant/secondary:
   the arch portrait is fixed at 340px wide (image 425px tall), the packing
   landscape at 360px tall — the arch is **18%** taller (measured 1.18). Flex
   row, `items-end`, so both caption strips land on one baseline (measured
   delta 0px); `gap-12` between; stacks cleanly at 375. (Bug caught: a mobile
   `max-w-[300px]` was capping the arch at md — released with `md:max-w-none`.)
2. **Model line entry.** Deleted the D9 arc that swept out to the left page
   edge. The line now emerges from the taper dots beneath the left lesson
   card and descends a tight lane (`contentL − 30`, just left of the heading)
   into the Assess node — entry min-x moved from the page margin to **147px**.
   Exit unchanged: **69px** clearance from the Sustain column, taper ends
   inside the section. `m2c`/`marginX` retired.
3. **Get involved / footer rhythm.** "Contact the team" moved out of the
   forest void and into the arch's rhythm — stacked directly under the
   Partner button (`gap-4`). Section gains `padBottom="tight"` (new Section
   prop) to collapse the dead band before the footer.
4. **Founder cards.** Headshots 72 (mobile) / 80px (desktop); padding raised
   to `p-6 sm:p-7` to match the serve cards' weight; name 1.375rem, role/bio
   spacing tightened.
5. **Ampersand.** Fraunces has no conventional ampersand — every stylistic
   set renders a reversed-looking glyph (verified). New `AmpText` helper sets
   the "&" in Manrope (a true ampersand) for the serve title, pillar titles,
   and the footer wordmark; copy untouched (source keeps a plain "&"). This
   overrides DESIGN_SPEC §4's "Rebuild & Rise ampersand is always Fraunces"
   for legibility. The OG image already renders a conventional ampersand (its
   static Fraunces file differs from the on-page variable font) — left as-is.
6. **Hero micro.** Tree ↔ archive-strip clearance is **402px** (horizontal,
   separate columns) at 1440 and 1280 — far past the 32px floor; roots clear.

**Revert:** per-item, via git history of Story.tsx, JourneyPath.tsx (entry
block), GetInvolved.tsx + Section.tsx (padBottom), FounderCard.tsx, and the
`AmpText` usages. **The homepage is frozen for launch after this session.**

## 2026-07-11 — D26 · One-time homepage reopening, then re-freeze

Executed the approved four-item reopening list as one bounded change. The
margin-normalized spot illustrations remain `object-contain` and were visually
checked as a row. The hero tree column expands from 44% to 50%, with the whole
tree capped at 92% of its available height and kept clear of the archive strip.
The Story secondary becomes a stacked pair — packing above prepared meals —
whose combined desktop height matches the arch portrait and bottom baseline.
The terminal arch narrows to 360px, the Path dot moves clear of the headline,
and `terminal-door.webp` now completes the arrival between dot and invitation.
The asset is registered as an illustration in the manifest. All site references
to the old `.org` domain and email are replaced by `rebuildandrise.ng` and
`admin@rebuildandrise.ng`. Production build and 1440/375 crops verified.

**Revert:** restore D25 Hero/Story/GetInvolved/JourneyPath geometry and the old
manifest/layout values. **The homepage is re-frozen after D26.**

## 2026-07-11 — D27 · Editorial field-report redesign

The homepage is recomposed around a twelve-column editorial grid. Fixed-height
illustration cards, bordered photo wrappers, lesson cards, founder cards, and
involvement cards are replaced by open entries, hairline rules, annotations,
and content-driven height. The hero returns to a 60/40 hierarchy and moves the
archive into a full-width transition band. Story uses one arch lead, one
supporting photograph, and a small evidence inset with external captions.
Illustrations survive only as compact identifiers in beneficiary and program
entries. Pilot 001 becomes a field-status report. The terminal door artwork
and dark interior slab are removed; the Path now meets a thin threshold inside
a shorter outlined arch, with the invitation and paired actions below.

All copy, photography provenance, palette, typography, model logic, and section
order remain intact. D27 supersedes D26's homepage geometry. Production build,
responsive screenshots, reduced motion, keyboard behavior, overflow, transfer,
and Lighthouse floors are re-verified before this redesign is frozen.

## 2026-07-11 — D28 · Character and Path refinement

The group-tree photograph is promoted from a thumbnail into a 7/5 archive
gateway beneath the hero, preserving its natural 4:3 composition and giving
the founding fieldwork its own chapter. The hero receives a subtle typographic
step, leaf period, verified status annotation, and reduced-motion-safe tree
settle. Story expands its supporting image and overlaps a larger meal evidence
inset, bringing the lesson transition closer to the completed spread.

Get Involved no longer uses the Path as a grid divider. Its dark route is split
into a short heading-margin appearance and a separate arrival appearance; both
taper before content. The global path stops above the terminal arch, while a
separate architectural stem reaches the threshold inside it. The reversing
8%-26%-18% waypoint sequence is deleted. Compact illustration offsets in Who
We Serve and Pillars, plus field-measure ticks around Pilot 001, selectively
echo the Model's craft without replicating its signature diagram. D28
supersedes only D27's hero archive strip, Story proportions, and terminal path
geometry.

## 2026-07-11 — D29 · Living Ground redesign

The homepage now grows from documented ground rather than a sequence of
disconnected motifs. The camp landscape sits as a subdued horizon beneath the
hero tree, while the former archive gateway moves into Where We Come From as a
full-width chapter photograph. Who We Serve uses equal field-specimen plates
with per-image optical scaling instead of alternating, crooked offsets.

The terminal door, pointed arch, threshold, internal stem, and door copy are
retired permanently. Get Involved resolves in a living-root field built from
the existing commissioned tree artwork: the global Path re-emerges only after
the opportunity matrix and enters the root crown, whose four quiet field labels
echo the four routes to participation. D29 supersedes D28's archive gateway,
hero status annotation, beneficiary specimen placement, and terminal geometry.
The homepage is re-frozen after responsive visual and production verification.

The D29 tree treatment now uses the user-supplied replacement tree as a true
alpha PNG. Its baked checkerboard was removed through a chroma-key extraction
pass, and a restrained olive grade neutralizes residual edge spill. The full
tree appears only in the hero; the finale masks the same asset to its root field
so the retired terminal-door composition does not return.

## 2026-07-12 — D30 · Human Bookend finale

Get Involved now ends with people rather than another metaphor. The oversized
2×2 opportunity matrix and detached living-root field are retired. Four compact
editorial opportunity rows balance a full, unfiltered 4:3 archive frame of the
community and volunteers beneath the Abuja tree (`archive-group-tree-02.jpg`).
The photograph remains frameless and externally captioned; it never becomes a
background or receives text across faces. A full-width ruled invitation below
the spread gives “Build what stays.” the final typographic emphasis and keeps
the two actions as the section's only interactive controls.

The Journey Path now ends with the Model. No dark terminal appearance, root
anchor, stem, arch, or threshold survives in Get Involved. At tablet and mobile
widths the documentary image moves ahead of the opportunity index, retaining
its natural 4:3 composition before the final invitation. D30 permanently
supersedes D29's living-root resolution while preserving D29's Hero, Story, and
Who We Serve work.

## 2026-07-12 — D31 · Human Arrival hero

The homepage now opens with documentary presence rather than a floating brand
symbol. The isolated engraved tree and faded camp-landscape horizon are retired
from the Hero. `archive-group-tree-03.jpg` becomes the first visual encounter:
full-bleed and naturally graded on desktop, with a layered forest reading field
that protects the headline while opening toward faces and the tree canopy. The
image receives an external archive strip instead of text or effects across the
people in the frame.

On mobile, copy and photography separate into consecutive editorial fields:
the complete server-rendered thesis and actions appear on forest first, followed
by the photograph at its natural 4:3 ratio and its archive caption. No photograph
is used as illegible mobile wallpaper. D31 preserves the established headline,
copy, actions, palette, typography, consent record, and section order while
superseding D29's hero tree and subdued landscape treatment.

## 2026-07-13 — D32 · Editorial Diptych Arrival

The homepage now opens as a true editorial diptych. At spacious desktop widths,
the thesis occupies a solid forest 5/7 field beside
`archive-group-tree-03.jpg` as a separate, unfiltered documentary plate. Below
that breakpoint, copy and photography stack as consecutive fields and the image
keeps its natural 4:3 composition through tablet and mobile. No text, scrim, or
visual effect crosses the people in the photograph. The external caption names
the scene and identifies it as the founders' prior relief work in Abuja in 2022.
The desktop copy inset is capped so the headline remains a stable two-line mark
at ultra-wide sizes and can reflow safely under magnification. D32 supersedes
D31's full-bleed image-and-reading-field geometry while preserving Human
Arrival, its thesis, actions, consent record, and documentary subject.

Where We Come From no longer repeats a second group-under-tree gateway.
`archive-group-tree-01.jpg` is removed from the homepage; the arch-clipped
women's portrait, packing photograph, and prepared-meals evidence inset form the
documentary spread instead. The spread intentionally becomes a compact diptych
at 768px, where its paired evidence remains legible and substantially shortens
the tablet scroll. Long provenance captions stay stacked when their figure is
too narrow, and the mobile photo reveal begins as soon as the archive rail enters
the viewport rather than leaving a temporary empty field.

Who We Serve is recomposed as relational field-note rows with small marginal
engravings instead of beneficiary specimen plates. Program Pillars becomes an
asymmetric systems ledger rather than another equal card grid. Pilot 001 replaces
the empty pointed arch with a compact rectangular status-and-measurement dossier,
a truthful future-photo line, and a separate ruled documentary standard. The
Model remains the signature high-detail moment; its seven-column route appears
from 1024px upward and becomes a measured vertical sequence below that width.
The Path now finishes with a complete in-viewport taper after the Model.

Mobile navigation contains keyboard focus, releases scroll lock when a viewport
crosses into desktop, and restores focus on Escape. While secondary pages remain
outside this homepage pass, every visible navigation destination is a working
homepage anchor or `.ng` email action. D32 supersedes D29's beneficiary specimen
plates and Story gateway, D27's Pillar grid and Pilot arch object, and D31's Hero
geometry. It preserves D30's Human Bookend, the Model's role, the Interlude
wording, organizational claims, and the archive/live photography grammar. No new
documentary or generated imagery was added.

**Verify:** final production build, ESLint, and TypeScript pass. Production was
reviewed at 1440 / 1024 / 768 / 375 / 320, plus a 720px effective-width reflow
proxy for 200% browser zoom; no horizontal overflow, clipped Path geometry,
broken image, or console warning remains. Mobile focus containment, Escape,
focus return, body-lock release on desktop resize, caption wrapping, and live
anchor targets were exercised in-browser. Reduced-motion behavior remains
source-verified: reveals render immediately and the Path draws fully without a
scroll listener. Existing durability language remains unchanged under the
content-approval constraint and requires a separate editorial decision.
**The homepage is re-frozen after D32.**

## 2026-07-13 — D33 · Pilot Field Ledger

The Where We Are chapter's detached parchment status dossier and separate
documentary-standard band are retired. Status, framework, measurement plan,
and future-photo note now form one full-width open field ledger: a monospaced
status rail, an eight/four framework-and-measurement split, and three
synchronized ruled rows. The composition uses no fill, card enclosure, arch,
or invented visual evidence. At tablet and mobile widths, the framework and
measurements stack while retaining the same open rule system.

The documentary standard moves into the upper-right margin beside the
introductory copy. Founders now follow the ledger directly with one shared
rule, and each role sits immediately below its founder's name instead of at the
far edge of the profile. All approved wording, Pilot 001's “In design” status,
provenance, headshots, and registration language remain unchanged. No new
photography or illustration is required for this correction.

D33 supersedes only D32's Where We Are dossier-and-band composition and
preserves the rest of D32. The final implementation was reviewed at 1440,
1024, 768, 375, and 320 pixels. The section has no horizontal overflow; ESLint,
TypeScript, and the production build pass. **The homepage is re-frozen after
D33.**

## 2026-07-13 — D34 · About as Archive Record

The About page is an organizational record rather than a conventional profile.
Identity, registration, mission, vision, and a ruled chronology lead into the
complete nine-image archive contact sheet. All archive photographs retain their
natural ratios, external captions, consent records, and explicit provenance as
the founders' prior relief work; none is presented as current Rebuild & Rise
impact. Seven principles, the founding team, and the documentary standard close
the record. D34 excludes impact-number theatre, uniform photo cards, CSS
masonry, and any blending of the 2022 archive with present operations.

## 2026-07-13 — D35 · Our Model as a Working Field Manual

The Our Model page is a quieter field manual for a seven-step method still being
tested. A compact sequence rail groups the steps into three movements without
repeating the homepage Model diagram or the global Journey Path. The final
learning register names unresolved operational questions instead of implying
that the method is proven. The page structure is accepted; its three generated
human-scene illustrations are provisional and superseded by D38's photography
gate before public acceptance.

## 2026-07-13 — D36 · Program Areas as Systems Briefs

The Programs route is publicly labeled Program areas and uses four vertical
systems briefs rather than four equal campaigns or service cards. Each brief
answers the same four practical questions and uses an existing non-human object
engraving only as a compact chapter identifier. A shared commitments rail holds
partnership, safeguarding, referrals, follow-up, and measurement. D36 excludes
present-tense delivery claims, guaranteed employment, invented partnerships,
and the implication that every pilot must contain all four areas.

## 2026-07-13 — D37 · Get Involved as a Routing Desk

Get Involved is a routing desk rather than a promotional conversion grid. Four
ruled participation routes explain suitability, possible contribution, the
organization's commitment, and what follows an inquiry. The shared form uses a
guarded pathway query, sensitive-data warning, honeypot, accessible status, and
an honest email fallback when no endpoint is configured. The finale retains an
authentic, externally captioned archive photograph before “Build what stays.”
D37 excludes donation theatre, implied appointments, promotional cards, and the
retired decorative-root ending.

## 2026-07-13 — D38 · Harmonized Display Scale and Photography Gate

Display typography now follows one site-wide hierarchy rather than unrelated
viewport formulas. The homepage thesis, interior page titles, major chapters,
functional sections, item headings, and short closing statements each have a
separate fluid scale with balanced wrapping and viewport-height safeguards.
Interior page titles now top out at 80px, functional section titles at 48px,
major chapters at 56px, item titles at 32px, and closing statements at 72px.
Get Involved's opening also moves from roomy to default section padding. D38
supersedes secondary-page titles that reached 101–120px and turned long headings
into full-screen posters; it preserves Fraunces, editorial contrast, and the
homepage thesis as the clearest display moment.

Generated imagery containing people is retired from the Model page. The three
current plates must be replaced before final visual acceptance. The user has
authorized carefully selected stock photography for this purpose, superseding
the blanket no-stock rule only where the image is verified as Nigerian,
appropriately licensed and model-released, and externally labeled as a
representative photograph rather than Rebuild & Rise field evidence. Stock
subjects may not be described as IDPs, beneficiaries, vulnerable people, or
people in need unless the source truthfully establishes that identity and the
license permits the sensitive context. Authentic archive photography remains
the preferred documentary voice everywhere else.

**Verify:** ESLint, TypeScript, whitespace validation, and the production build
pass. The homepage and four secondary pages were measured at 1280, 1024, 768,
375, and 320 pixels with no horizontal overflow. The longest page title occupies
about 30% of the viewport at its most constrained tested state rather than most
of the screen. Desktop, tablet, and mobile visual checks confirm controlled line
breaks and clear separation between page, section, item, and closing titles.

## 2026-07-13 — D39 · Representative Human Field Plates

The user-selected photographic series replaces all three AI-assisted human
illustrations on Our Model. The Model now uses a Kaduna community-engagement
meeting for Assess and Partner, a Kasese workshop for Train and Connect, and a
supplied outdoor gathering for Follow up, Measure, and Sustain. The photographs
remain contextual rather than evidentiary: every plate has a literal alt
description, an external caption, and an explicit statement that it is not
Rebuild & Rise fieldwork. Known locations and Pexels credits are published
without assigning beneficiary, displacement, or program-participant status to
any person shown.

The two landscape sources retain broad 3:2 readings. The workshop receives a
small optical crop that concentrates the working group and tools; the supplied
portrait remains portrait and is capped as a narrower field plate on desktop
rather than being forced into 4:3. Image-specific, reversible grading reduces
the Kaduna source's saturation, opens the workshop shadows, and gently settles
the gathering while preserving skin tones, identities, clothing, and physical
context. Model photographs no longer stay pinned beside scrolling text.

D39 supersedes D35's commissioned human engravings, D38's temporary Nigerian-
only photography gate, and the original blanket stock prohibition. It preserves
the archive/live distinction: no representative photograph is allowed to read
as founders' archive, Pilot 001 documentation, or organizational impact.

## 2026-07-13 — D40 · Working Folios and complete program-icon retirement

The four green program engravings are retired everywhere. On `/programs`, the
four systems briefs now form a continuous typographic working ledger: a compact
two-column contents register leads into a consistent folio spine; possible
scope receives the broadest reading field; local dependencies occupy a narrower
working margin; connection becomes the bridge across the system; and the open
learning question gives each brief an honest ruled conclusion. No replacement
photography, icons, cards, generated motifs, or page-spanning Journey Path is
introduced. Shared commitments and the forest close remain intact.

The homepage Program Pillars section keeps D32's asymmetric ledger but becomes
a functional directory. Each complete row now links to a stable semantic
Program Areas anchor and uses its former artwork column for a restrained
“View brief” destination label. This is the approved narrow reopening of the
D32/D33 homepage freeze; no other homepage composition or copy changes.

D40 supersedes only D36's engraving-as-chapter-identifier clause, D32's program
engraving usage, and the obsolete PillarCard system. The four binary assets,
their manifest records, the unused PillarCard component, and its styleguide
specimen are removed. D36's approved wording, four practical questions, status
boundaries, shared commitments, and exclusions concerning active-service
claims, outcomes, partners, and universal four-area pilots remain unchanged.

**Verify:** ESLint, TypeScript, production build, responsive screenshots,
200% text zoom, keyboard focus, semantic anchors, reduced motion, print layout,
and zero remaining runtime or asset references to the retired program artwork.

## 2026-07-13 — D41 · Who We Serve as a relational ledger

The three green marginal engravings in Who We Serve are retired completely.
The section keeps its strongest underlying composition—a ruled relationship
between audience number, audience name, and the barrier described—but removes
the decorative fourth column and every fixed breakpoint width that reserved
space for artwork. The result is a continuous editorial ledger rather than
three illustrated specimens. No replacement icon, photograph, action label,
card, or generated motif is introduced; these rows describe people and are not
navigation objects.

D41 supersedes D23's Serve-panel clause, D24's Serve-illustration sizing rule,
D28's compact Serve engraving treatment, and D32's use of small marginal
engravings in this section. It preserves D32's open relational rows, approved
audience wording, restrained numbering, content-driven height, and the larger
homepage narrative. The three `serve-*` binary assets and manifest records are
removed, along with the now-orphaned `IllustratedPanel` component.

## 2026-07-13 — D42 · Field Report Cover

The homepage no longer opens as D32's equal-height editorial diptych. The new
Field Report Cover separates the thesis from the documentary record without
separating their meaning: a compact, content-driven forest masthead holds the
two-line “We build what stays.” thesis, a restrained organizational summary,
the honest current status, one primary action, and one quiet partner link. The
archive photograph then crosses the masthead edge into an open ivory field at
its complete natural 4:3 ratio. A ruled external margin names the gathering,
dates it as the founders’ prior relief work in Abuja in 2022, and states plainly
that it is not Pilot 001 or current Rebuild & Rise impact.

At desktop widths, the photograph and provenance margin form an asymmetric
documentary spread beneath the masthead rather than a split-screen billboard.
At tablet and mobile widths, the reading order becomes thesis → complete image
and provenance → summary, status, and actions. The headline is capped at 68px
and remains two lines at every tested width, so neither title nor photograph
consumes the opening without context. Caption tracks collapse under enlarged
text, preserving readable measures at 200% without horizontal overflow.

D42 supersedes only D32's hero geometry and CTA weighting. It preserves D31's
Human Arrival principle, the selected consented archive photograph, truthful
organizational wording, the image's unfiltered documentary treatment, the
homepage sequence, and the Model as the signature high-detail moment. It
excludes full-bleed wallpaper, text over faces, image effects, rounded hero
cards, duplicated CTAs, fabricated status language, and restoration of the
retired symbolic tree.

**Verify:** responsive review at 1440, 1024, 768, 375, and 320 pixels shows no
horizontal overflow or image crop. The natural 4:3 record and two-line thesis
remain intact; the 200% text test reflows the caption to one column. Reduced
motion, keyboard focus, link destinations, print behavior, lint, TypeScript,
and the production build all pass. The homepage is re-frozen after D42.

## 2026-07-14 — D43 · Human Record Opening

The Field Report Cover is replaced by a portrait-led documentary opening.
`archive-community-women.jpg` moves from the Story spread into the Hero at its
complete natural ratio. A concentrated forest thesis plane and the separate
portrait overlap only as page geometry: no copy, scrim, filter, or effect
crosses the people in the photograph. The image extends into warm parchment,
allowing its real red, teal, earth, and canopy tones to carry the opening's
color rather than adding decorative artwork or a synthetic background.

Mission, one primary action, and the quiet partnership link remain with the
two-line thesis. Scene, Abuja 2022 provenance, current organizational status,
and the explicit not-current-impact statement now resolve in one content-driven
horizontal evidence rail. The former tall caption margin and its dead ivory
space are retired. Below 1024px the sequence becomes thesis and purpose, natural
portrait, evidence rail, then the tightened Who We Serve ledger. The title is
capped at 64px desktop and 42px mobile; no fixed hero height or entrance motion
is introduced.

Story becomes a record of the relief process rather than repeating the Hero's
community portrait. `archive-packing-team.jpg` is the dominant landscape,
`archive-packing-warmlight.jpg` is the supporting working scene, and
`archive-meals-prepared.jpg` remains a compact evidence inset. The arch crop is
retired. Compounded padding between the Story introduction and archive rail is
reduced after the 768px review exposed unused space.

D43 supersedes D42's Field Report Cover geometry, D32's placement of the women's
portrait in Story, and the vertical provenance-margin treatment. It preserves
D31's Human Arrival principle, D41's unillustrated relational audience ledger,
D30's Human Bookend finale, all approved copy and provenance, and the Model as
the homepage's only high-detail signature moment. It does not restore the hero
tree, roots, doors, arches, cards, generated imagery, stock photography, or text
over documentary subjects.

**Verify:** live review at 1440 / 1024 / 768 / 375 / 320 plus a 720px effective-
width proxy for 200% text sizing shows zero horizontal overflow, a complete
natural portrait, and a title below one-third of the viewport. The weakest
state was 320px, where the portrait initially began below the first viewport;
mobile thesis and record spacing were tightened so the image now begins within
it. The 768px Story transition was also tightened after visual review. Print
removes the dark thesis ground, reduced-motion behavior remains intact, and the
Hero LCP image is fetched eagerly at high priority. The approved source remains
untouched; responsive 400px mobile and 800px desktop WebP derivatives preserve
the complete portrait while reducing the measured mobile page transfer to about
356KB. The final local Lighthouse pass records 93 performance, 100 accessibility,
100 best practices, 100 SEO, and zero layout shift. Its simulated throttled LCP
remains approximately 3.2 seconds despite passing all LCP discovery and priority
checks; degrading the documentary portrait further was rejected. The homepage
is re-frozen after D43.

## 2026-07-14 — D44 · Human Hinge Opening

The Human Record content is retained, but D43's masthead-plus-record geometry is
recomposed as one editorial hinge. At wide desktop widths, the forest thesis,
the complete portrait, and the organizational purpose form a single triptych:
the forest extends a little beyond the thesis column, the portrait crosses that
edge without covering copy, and the purpose and actions resolve on parchment.
The forest and portrait share one exact lower baseline, so the photograph is the
human transition between conviction and practice rather than a plate hanging
beneath an administrative header.

The archive scene, truthful current status, and not-current-impact statement now
form an open ruled evidence line on the same parchment ground. Full-height
caption dividers, empty provenance compartments, and card-like status modules
are excluded. A short walnut rule introduces the purpose field; leaf remains
limited to the headline punctuation and status marks. The title remains 64px or
smaller and the portrait keeps its natural ratio, original grade, consent record,
and founders' prior-relief-work provenance.

Below the wide triptych breakpoint, semantic and visual order becomes thesis →
portrait → purpose and actions → evidence. No fixed hero height, absolute copy,
text over people, image crop, entrance animation, gradient, texture, generated
imagery, or decorative symbol is introduced. At enlarged text the same source
order remains a simple single-column document, and print removes the forest
ground while restoring the thesis to dark ink.

D44 supersedes D43's opening geometry and the remaining caption-module feeling;
it preserves D43's photograph, Story rebalance, factual wording, high-priority
image delivery, Human Arrival principle, tightened Who We Serve handoff, and the
Model as the homepage's sole high-detail climax. The Human Bookend finale and all
sections after Story remain unchanged.

**Verify:** live review at 1440, 1280, 1024, 768, 375, and 320 pixels shows zero
horizontal overflow. At 1440 the forest and image end on the same baseline, the
image overlaps the forest by roughly 108px, and the evidence line begins
immediately beneath them. At 375 and 320 the two-line 42px thesis and recognizable
portrait begin within the first viewport. Keyboard order follows the visual
sequence, reduced-motion and print rules remain functional, and lint, TypeScript,
the production build, and public-route checks pass. The final local mobile
Lighthouse pass records 92 performance, 100 accessibility, 100 best practices,
100 SEO, zero layout shift, and a 399KiB initial transfer. Its simulated
throttled LCP remains approximately 3.3 seconds against the 2.5-second target;
the LCP image is eagerly discovered, high priority, responsively sized, and
delivered at a deliberately quality-balanced setting, so the remaining exception
is recorded rather than hidden. D44's visual composition is accepted locally;
the performance target is not represented as fully closed.

## 2026-07-14 — D45 · Directional Field Note

D44's portrait, purpose field, evidence rail, and documentary logic remain
unchanged. Its forest thesis plane is refined because the eyebrow and equal-weight
headline still read as a centered slogan lockup inside an oversized dark panel.
The correction creates an editorial reading path rather than adding decoration:
field annotation → hairline → staggered thesis → human record.

At wide desktop widths, the forest plane narrows from 52vw to 47vw and the
portrait begins at 41vw, preserving a controlled 77–86px overlap across the
1280–1440px review range. The eyebrow moves into the upper-left field and gains
one short leaf hairline. The headline remains moderate at 56–60px, but “We build”
is reduced slightly and “what stays.” steps approximately half an em toward the
portrait. The headline aligns optically with the foreground woman's face rather
than centering mathematically inside the green mass. No copy, image treatment,
texture, gradient, background photograph, or decorative illustration is added.

Below the wide triptych breakpoint, D44's simple source order and 42px mobile cap
remain unchanged; the hairline, stagger, and desktop offset are removed. D45
supersedes only D44's thesis-field proportions and centered typographic lockup.
It preserves the complete natural portrait, truthful provenance, purpose and CTA
hierarchy, open evidence line, static first paint, and all later homepage sections.

**Verify:** the clean production build was reviewed at 1440, 1280, 1024, 768,
720, 375, and 320 pixels with zero horizontal overflow. At 1440 the eyebrow sits
at y192, the headline begins at x208 / y320, and the portrait begins at x590;
at 1280 the corresponding positions remain balanced at y180, x126 / y308, and
x525. Mobile retains its two-line 42px thesis and portrait beginning within the
first viewport. Lint, TypeScript, the production build, and route checks complete
the acceptance pass; D44's recorded LCP exception remains unchanged because D45
adds no asset, script, font, or loading behavior.

## 2026-07-14 — D46 · Inquiry as a Correspondence Desk

Get Involved's inquiry is expanded from a short form-or-fallback row into a
complete correspondence chapter. A moderate editorial heading and neutral
first-contact guidance lead into one joined spread: a natural-ratio
representative photograph on the left and the current inquiry route or active
form on the right. The supplied Richard Badejo / Pexels photograph receives a
reversible saturation-and-contrast correction only; no person is generated,
removed, reshaped, retouched, or placed beneath text. Its external caption and
adjacent provenance state that it is licensed representative photography and
does not depict Rebuild & Rise activity, participants, or impact.

When Formspree is not configured, the correspondence field no longer presents
a technical absence as the section's focal point. It names email as the current
route, displays `admin@rebuildandrise.ng` as readable text, and provides a
direct email action. A three-part preparation ledger asks visitors to name the
closest participation pathway, share only useful general context, and omit
sensitive personal data. The same ledger remains available when the full form
is configured. Required-field language is hidden when no form is present, and
the static fallback is not announced as a dynamic live status.

The chapter stays on ivory so the photograph supplies its warmth without
competing with the forest Human Bookend that follows. It uses no promotional
cards, text over faces, emotional donation language, invented location or
beneficiary status, decorative roots, or second dark finale. D46 supersedes
only D37's compact inquiry/fallback composition; it preserves D37's routing,
query validation, progressive enhancement, privacy safeguards, email fallback,
accessible response states, and the authentic documentary closing.

**Verify:** the missing-endpoint state is reviewed live at 1440, 1024, 768,
375, and 320 pixels. The complete 4:3 photograph remains visible at every
width, title scale stays subordinate to the page opening, the email address and
source credit wrap without overflow, and the image-to-desk order becomes a
simple single-column document below the desktop breakpoint. The narrowest
review records a 320px layout and 320px document width with no horizontal
overflow. A temporary configured-form preview at 1440px confirms that the form
receives the wider seven-column reading field while preserving pathway
preselection. Print removes the reversible grade and avoids breaking the figure
or desk across pages. Lint, TypeScript, the production build, route checks, and
the Contact redirect all pass.

## 2026-07-14 — D47 · Left-Edge Thesis Register and Actionable Contact Target

D45's narrower forest field improved the opening, but its centered container
gutter and long eyebrow-to-title interval still left the thesis floating inside
an oversized dark panel. The wide-screen correction treats the forest as a
functional editorial register. At 1280px and above, its content begins from a
viewport-based 40–64px inset rather than the centered 70rem page gutter. The
forest ends at 44vw, the portrait begins at 39vw, and their controlled overlap
preserves the human hinge without crowding either the thesis or the subject.

The eyebrow and headline now form one compact lockup: the decorative eyebrow
hairline is removed, the intervening gap is reduced to approximately 30px, and
the second line steps decisively toward the photograph. The title remains
56–60px and never becomes a screen-filling poster. The primary and secondary
actions visually anchor the lower forest field on wide screens, turning the
previous void into useful participation space. The purpose statement remains a
quiet parchment column and the natural portrait remains the visual center. No
new wording, texture, illustration, status badge, crop, gradient, or image effect
is introduced. Below 1280px, source order remains thesis → portrait → purpose →
actions, with the complete image and two-line mobile headline preserved.

The Contact destination is corrected independently within the same acceptance
pass. `/get-involved#inquiry`, the navigation Contact link, `/contact`, and valid
pathway URLs now target the correspondence desk itself rather than the roomy
inquiry chapter wrapper. A small responsive scroll margin gives the desk 24–32px
of breathing room; no scripted centering or fixed hero-height assumption is
used. The inquiry heading still labels the complete section semantically.

D47 supersedes D45's centered page-gutter placement, decorative eyebrow rule,
slight half-em title stagger, and right-column ownership of the actions. It
preserves D44's natural portrait and Human Hinge, D46's complete correspondence
desk and privacy safeguards, truthful provenance, the open evidence rail, the
Human Bookend finale, and the homepage Model as the only high-detail climax.

**Verify:** live review at 1440, 1280, 1024, 768, 375, and 320 pixels records no
horizontal overflow. At 1440 the title begins at x57 / y369, the portrait at
x554 / y84, and the actions at x57 / y590; title, photograph, purpose, and early
status remain visible within the first 900px. At 320 the headline remains two
lines and the portrait begins at y259. Clicking Contact at 1440 lands the desk at
32px from the viewport top; the mobile menu version lands it at 24px. The legacy
`/contact` redirect resolves to the same target. Lint, TypeScript, production
build, and public route checks complete the technical acceptance pass.

## 2026-07-14 — D48 · A Record in Three Movements

The homepage opening is rebuilt as a chronological editorial record rather than
D47's forest / portrait / purpose triptych. A compact forest declaration now
holds the thesis, mission, and actions in one reading field. Beneath it, three
approved archive photographs form a deliberately unequal sequence: the packing
line is the dominant working record, the women gathered beneath a tree are the
human counterpoint, and the prepared meals are a smaller material detail. Each
frame retains its canonical place, date, provenance, consent-backed archive
status, and natural or declared ratio; no text crosses a photograph.

The production movement labels are `Prepared`, `Gathered`, and `Meals prepared`.
The last label replaces the concept lab's rhetorical `What remained?` because
the photograph records prepared meals, not a verified later state. A new plural
archive note states explicitly that the sequence documents the founders' prior
relief work in Abuja in 2022 and does not depict Pilot 001 or current Rebuild &
Rise impact. Only the dominant first frame receives high fetch priority; the
portrait and detail load normally.

Because the same packing and meals photographs have moved into the opening, the
Story chapter no longer repeats its former three-image spread. It proceeds from
the canonical origin account directly into the three lessons while preserving
`#story [data-path-cards]`, the measured JourneyPath entry, and the exact current
Model. Who We Serve, the Model, interlude, programs, Pilot 001, founders,
correspondence behavior, Human Bookend, footer, routes, and metadata remain
unchanged.

At 1280px and wider the declaration and sequence retain a broad editorial
spread. The archive changes to its tablet grid below 1100px, but the declaration
stays two-column at 1024px so the forest field remains fully occupied; it changes
to a single reading column below 768px. Mobile keeps the dominant photograph
full-width, moves the portrait right, returns the material detail left, and
allows every caption and status line to wrap without fixed heights.

D48 supersedes D47's hero geometry, portrait-only opening, evidence rail, and
Story photo placement. It preserves D47's corrected Contact target, the
moderate thesis scale, truthful documentary boundaries, static first paint,
natural photography, Model signature, and Human Bookend finale.

**Verify:** live and production review at 1440, 1280, 1024, 768, 720, 375, and
320 pixels records zero horizontal overflow. The thesis measures approximately
63px at 1440, 56px at 1024/768, 44px at 375, and 40px at 320. The first image
begins inside the mobile first viewport. The 1024 correction removes an early
single-column forest void, and the final mobile correction restores left/right
cadence between the subordinate frames. The mobile menu traps focus, closes on
Escape, restores focus, and releases body scrolling. Lint, TypeScript, the
optimized production build, public route checks, lab noindex/sitemap isolation,
semantic checks, contrast checks, and a production transfer/loading review pass.
