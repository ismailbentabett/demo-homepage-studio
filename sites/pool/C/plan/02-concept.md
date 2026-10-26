# Concept — pool-C (Low Desert Pool Co.)

## Three obvious concepts, rejected

1. **"Crystal-clear desert oasis."** Hero is a turquoise infinity pool against Camelback Mountain at sunset. Rejected: every Phoenix pool builder uses this exact shot; it sells construction, not weekly service; ignores hard water and monsoon reality.
2. **"Your pool's annual calendar."** Generic 12-month grid with icons (leaf in Oct, snowflake in Jan). Rejected: template cliché; doesn't name desert-specific seasons (haboob, drain-and-refill window, scale months); could be any home-service site.
3. **"Hard water experts since 2005."** Trust-first layout with licence badge, years counter, chemical brand logos. Rejected: brief §4 lists chemical logos as competitor cliché; leads with credentials instead of the homeowner's seasonal problem; no signature system.

## The thesis

The page is a desert pool almanac: every section is a month spread with a folio number and a thumb-index tab on the right edge, and the signature is the tab that slides out and lights up as you read through the year.

## The signature system: Almanac Thumb-Index

A vertical strip of month abbreviations (J F M A M J J A S O N D) pinned to the right edge on desktop, collapsed to a horizontal pill row on mobile. Each section carries a `data-sw-signature="almanac-tab"` hook with its month key. On scroll entry:
- **Hero:** The masthead reads "The Desert Pool Almanac · Sample Issue"; the current month's tab is already lit; cover lines preview the four season spreads.
- **Story spreads (4):** Each season band (Monsoon · Scale · Drain&Refill · Evaporation) has its folio number (e.g., "— 07 —") top-left and its active tab highlighted right; the tab slides out 8px via translateX on entry.
- **Proof / Reviews:** Review cards carry a small month pill ("Earned Aug") aligned to the same tab grid; the strip shows all earned months lit as a constellation.
- **Footer:** The strip resets to all 12 tabs dimmed except the current month; a final folio reads "End of issue".

CSS primitive: `.almanac-tab` is a 24×32px rounded rect with border-right accent; active state uses `--sw-active` custom property set by IntersectionObserver. No JS required for static fallback: all tabs visible, current month marked with aria-current.

## Type

- **Display:** Crimson Pro (serif, variable wght 200-900). Old-style book face with warm contrast; reads like a regional magazine masthead. Used ≤3× in registry, 0× in pool niche.
- **Text:** Outfit (grotesk, variable wght 300-900). Friendly geometric sans with clean legibility for tool outputs and captions. Pairs with Crimson Pro's warmth without competing.
- **Accent:** DM Mono for folio numbers, tab labels, and data readouts. Tabular figures align in the thumb-index strip.

Why: Crimson Pro gives the almanac its heritage editorial voice; Outfit keeps tool UI and body copy modern and fast to read; DM Mono ties the folio/tab system together as a single typographic thread.

## Palette: Sonora Sand + Pool Teal + Terracotta Signal

| Role | Hex | Name |
|---|---|---|
| ink | #2C1810 | Mesquite Brown |
| paper | #F3E8D4 | Sand Paper |
| mid | #E6D5B8 | Warm Parchment |
| deep | #1E293B | Slate Night |
| accent | #0E7C7B | Desert Pool Teal |
| signal | #B85C38 | Terracotta |
| focus | #0E7C7B | (same as accent) |

Contrast verification (node tools/contrast.mjs):
- ink (#2C1810) on paper (#F3E8D4): 13.89:1 — AA/AAA pass (body text)
- ink (#2C1810) on mid (#E6D5B8): 11.70:1 — AA/AAA pass (secondary surfaces)
- white (#FFFFFF) on deep (#1E293B): 13.27:1 — AA/AAA pass (deep-band headings, buttons)
- white (#FFFFFF) on accent (#0E7C7B): 4.62:1 — AA pass normal text (accent used for large CTAs and links)
- white (#FFFFFF) on signal (#B85C38): 4.53:1 — AA pass normal text, AAA fail (signal used only for large CTAs ≥18px bold, never body)
- paper (#F3E8D4) on deep (#1E293B): 10.84:1 — AA/AAA pass (captions on deep photos)
- ink (#2C1810) on accent (#0E7C7B): 3.12:1 — FAIL for body (never paired; accent always uses white text)

Tone: color-led. The terracotta signal and pool teal carry the almanac's seasonal rhythm; sand paper grounds every spread in desert material.

## Hero family: 6 — Editorial Cover

Unique in pool niche (A=1, B=10). ≤3 uses in registry. The hero is a magazine cover: masthead in Crimson Pro, issue line "The Desert Pool Almanac · Sample Issue", a vertical-friendly crop of hero-C1 (desert backyard pool with mountains), and three cover lines pointing to Monsoon · Scale · Drain&Refill spreads. What breaks the cliché: the cover is matte sand-colored, not glossy blue; the photo shows a real pebble-finish pool with stone coping and saguaro behind, not a resort render; the cover lines are functional navigation, not marketing slogans.

## Motion score

- **Intro (≤1.2s, skippable):** Cover photo settles from 1.03→1.0 scale; cover lines slide in from right with stagger 80ms; current month tab pulses once. Reduced motion: static cover, no animation.
- **Scroll stories:** (1) Thumb-index tab slides out 8px and fills with accent color on section entry (ease-out 400ms). (2) Folio number counts up from previous spread via requestAnimationFrame (duration 600ms). Both disabled under prefers-reduced-motion (tab shows active state statically, folio shows final number).
- **Hover:** Links and buttons get a 2px terracotta underline that grows from left (scaleX 0→1, 200ms ease-out). No bounce, no glow.

## Tools

1. **Calcium scale check.** Inputs: checkbox list (white crust at waterline? rough to touch? flakes in water?). Output: cleaning method (bead blast vs hand scrub) + sample price range from {{proof.prices.tile-bead-blasting}}. Kit module: `checklist`. Hand-off: "Book tile cleaning" button pre-fills #contact with service=tile-cleaning.
2. **Bucket test leak log.** Inputs: two measurements (bucket drop, pool drop) over 24-48h. Output: "Looks like evaporation" (≤1/4 in/day summer hedged) or "Worth a leak test" with sample leak-detection price. Kit module: `estimator`. Hand-off: "Schedule leak check" pre-fills #contact with service=leak-check.
3. **Resurfacing month planner.** Input: select month. Output: weather suitability note (cool months preferred, avoid June-August heat) + booking lead time. Kit module: `tabs`. Hand-off: "Get resurfacing quote" pre-fills #contact with service=resurfacing and preferred month.
4. **ZIP checker.** Input: ZIP code. Output: "We serve {{area}}" or "Outside our area" with nearest covered town. Kit module: `zip`. Hand-off: passes ZIP to quote form.
5. **Multi-step quote form.** Steps: ZIP → service type → pool size → contact info. Pre-filled from any tool above. Kit module: `form`.

## Voice

Three sample sentences:
- "July haboobs dump fine dust into every open pool; we run the filter twice and have it clear by Saturday."
- "If your tile has a white band you can feel with your fingernail, it's calcium — and it comes off."
- "We'd rather tell you it's evaporation than sell you a leak test you don't need."

Five words never used: crystal, sparkling, guaranteed, premium, affordable.