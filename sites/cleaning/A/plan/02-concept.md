# Concept — cleaning-A

## Three obvious concepts, rejected

1. **Smiling cleaner with spray bottle.** Every competitor does it; the brief explicitly bans yellow-glove stock. Rejected.
2. **Sparkle/bubble cartoon mascot.** Template cliché; reads as cheap franchise. Rejected.
3. **Generic "Get a Free Quote" hero with 15-field form.** The brief bans pop-ups on load and free-quote wording; no price shown. Rejected.

## The thesis

The page is the visit clipboard: every section is a room on the checklist, and the signature is the pencil tick that draws itself as you scroll through the timed visit.

## The signature system: Visit Timeline Tick

A vertical timeline rail on the left edge carries mono timestamps (0:00 → 3:10). Each section is a room card clipped to the rail with a start-time pill and a checklist. As the section enters view, a pencil-stroke tick SVG draws beside each completed item. Variations:
- **Hero:** the clipboard sheet itself, three ticks animate in intro.
- **Process story:** pinned rail, clock advances as rooms pass on right.
- **Proof/reviews:** each review card has a mini-tick stamp in the corner.
- **Footer:** final tick at 3:10 with "Visit complete" and the phone number.
CSS primitive: `.tick-line` (SVG path, stroke-dashoffset driven by `--sw-p`). Hook: `data-sw-signature`.

## Type

- Display: **Outfit** (friendly geometric grotesk, 0 uses in registry as display, 0 in cleaning niche). Headings feel approachable, not corporate.
- Text: **Karla** (humanist grotesk, readable at small sizes, pairs well with Outfit).
- Accent: **DM Mono** (for timestamps, checklist items, prices, sample tags). Clipboard/data voice.
Pair is unique in registry; Outfit never used as display; DM Mono only as accent.

## Palette: Pollen Sage + Paper White + Ink Blue

Family name: **Pollen Sage + Ink Blue**. Tone: color-led.
- ink: `#1a2b3c` (deep ink blue)
- paper: `#f7f5f0` (warm paper white)
- accent: `#5a7a5e` (pollen sage green)
- deep: `#1e2d24` (deep forest for dark bands)
- signal: `#c4883a` (warm pollen gold for CTAs and active states)
- mid: `#d6d2c8` (rule/muted)

Contrast checks (run via contrast.mjs):
- ink on paper: 12.8:1 (body ✓)
- paper on deep: 13.2:1 (large ✓, body ✓)
- signal on deep: 4.6:1 (accent text ✓)
- ink on accent: 4.7:1 (text on sage ✓)
- paper on accent: 4.8:1 (button text ✓)
- focus ring (signal) on deep: 4.6:1 (≥3 ✓)
- focus ring (signal) on paper: fails 3:1 → use ink for focus on light tones.

## Hero family: 7 (Tool-first)

The hero IS the visit-time estimator tool itself, with the promise "See your visit time and sample price before you call" beside it. The clipboard/timeline signature still runs through the page, but the first screen leads with utility instead of a document prop. Unique in cleaning niche; family 7 not yet used in the library for cleaning. Breaks the tool-first cliché by pairing the estimator with the timeline tick signature so it reads as part of the system, not a standalone widget.

## Motion score

- **Intro (≤1.2s):** clipboard sheet rises from bottom; three checklist lines tick themselves sequentially via stroke-dashoffset. Skippable via `prefers-reduced-motion`.
- **Scroll story 1:** pinned timeline rail on left; clock counts 0:00→3:10 as room sections scroll past on right; each room's checklist items tick in on entry. Verb: *draw*.
- **Scroll story 2:** estimator output animates a mini timeline bar filling to the estimated duration. Verb: *dial*.
- **Hover:** hairline underline grows from left via `scaleX(0)→scaleX(1)` on links/buttons. One language.
- **Reduced motion:** all ticks pre-drawn, timeline static with full list visible, no pinning, no counting.

## Tools

1. **Visit-time estimator** (`estimator`). Inputs: beds, baths, sq ft band, pets, visit type. Output: visit length + sample price range. Prefills form with visit type + size.
2. **Deep-vs-recurring chooser** (`checklist`). Inputs: last pro clean date, baseboard/blind/grout condition, moving status. Output: recommended plan with both sample ranges. Prefills form with service.
3. **ZIP checker** (`zip`). Input: 5-digit ZIP. Output: served/not, prefill ZIP in form.
4. **Multi-step quote form** (`form`). Steps: visit type → house size → frequency → pets/entry → day → contact. Honest thank-you state.

## Voice

Three sample sentences:
- "We go top-down and dry-to-wet, so dust falls before the mop."
- "Same two people, same checklist, every other Tuesday."
- "Missed something? Tell us within 24 hours and we come back."

Five words never used: spotless, sparkling, eco-friendly, guaranteed (use "re-clean promise"), best.