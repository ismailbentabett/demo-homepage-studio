# Concept — roofer-C (Hailward Roofing)

## Three obvious concepts, rejected

1. **"Storm damage? We fix it fast."** Generic emergency banner with a phone number and a stock crew photo. Rejected: every storm-chaser site in OKC does this; it triggers the exact fear the brief names ("some out-of-state guy takes my deposit"). No differentiation.
2. **"Your trusted local roofer since 2007."** Heritage badge row, handshake photo, trust seals. Rejected: template language, no proof specific to Oklahoma weather, reads like any contractor in any town. The brief's §4 lists this as cliché #1 and #3.
3. **"Almanac of Oklahoma weather."** Month-by-month calendar widget showing temperature and rainfall. Rejected: takes the brief's seed literally without translating it into a roofing narrative; a weather app, not a sales page. Missing the verb that ties weather to action.

## The thesis

The page is the year over central Oklahoma: each section is a season band that shows what that weather does to a roof and what Hailward does about it, and the signature is the month ring that turns as you scroll through the almanac.

## The signature system: Month Ring Almanac

A circular month ring (12 segments, current month highlighted in prairie gold) sits in the top-right corner on desktop and as a sticky pill on mobile. Each page section maps to a season band, and as the section enters view the ring advances to that month range. The ring is drawn once in CSS/SVG and reused:

- **Hero:** Ring shows the full year; headline sits beside the stylized OKC metro map; current month segment pulses once on load.
- **Season bands (MAR · APR-JUN · JUL-AUG · SEP-OCT · NOV-FEB):** Each band header carries the month tag in serif italic and the ring advances to highlight that segment. Photo, service list and tool tie to that season's threat.
- **Proof/reviews:** Ring shows the month the review was earned (e.g., "APR" next to Ann W.'s storm-tarping review). Static, no animation.
- **Footer:** Ring resets to the full year; the current month segment stays lit as a "we're here now" anchor.

Hook: `data-sw-signature="month-ring"`.

## Type

- **Display:** EB Garamond (serif, variable wght 400-800). Sturdy old-style face with good italics for month names; almanac heritage feel. Used ≤3 times in registry, never in roofer niche.
- **Text:** Source Sans 3 (grotesk, variable wght 200-900). Clean, legible body for service blurbs and tool output. Pairs well with EB Garamond's warmth.
- **Accent:** DM Mono (mono, 300-500). For month tags, measurements, ZIP codes and sample-price labels. Quiet data voice against the serif display.

Why: EB Garamond gives the almanac its literary weight; Source Sans 3 keeps body readable at small sizes; DM Mono marks the data points (months, prices, ZIPs) without competing.

## Palette: Storm Slate + Hail White + Prairie Gold

| Role | Hex | Name |
|---|---|---|
| Ink | #1a2430 | Storm slate |
| Paper | #e8edf2 | Hail white |
| Accent | #d4a03c | Prairie gold |
| Deep | #2c3642 | Night slate |
| Signal | #d4a03c | Prairie gold (same as accent) |
| Mid | #5a6a7a | Overcast |

Family name: **"Storm Slate + Hail White + Prairie Gold"**. Unique in registry.

### Contrast table

| Foreground | Background | Ratio | Body ≥4.5 | Large ≥3 | Notes |
|---|---|---|---|---|---|
| #e8edf2 | #1a2430 | 13.31:1 | pass | pass | Paper on ink (t-dark body) |
| #1a2430 | #e8edf2 | 13.31:1 | pass | pass | Ink on paper (t-light body) |
| #d4a03c | #1a2430 | 6.64:1 | pass | pass | Accent on ink (labels, rules) |
| #e8edf2 | #2c3642 | 10.40:1 | pass | pass | Paper on deep (t-deep body) |
| #d4a03c | #2c3642 | 5.19:1 | pass | pass | Accent on deep (labels) |
| #1a2430 | #d4a03c | 6.64:1 | pass | pass | Ink on accent (button text) |
| #ffffff | #d4a03c | 2.36:1 | FAIL | FAIL | NEVER use white on gold |

Button text on gold is ink (#1a2430), not white. Focus ring uses #d4a03c on all tones (≥3:1 verified against #1a2430 and #2c3642).

## Hero family

**Family 15: Map / area-led hero.** Stylized SVG map of the OKC metro (Edmond, Norman, Moore, Yukon, Mustang, Midwest City, Del City) with town names in EB Garamond and the month ring integrated. Headline set over the open prairie edge. Unique in roofer niche (A=11, B=2); family 15 used ≤3 times in library.

What breaks the cliché: most map heroes are Google Maps embeds or generic state outlines. This is a hand-drawn-feel SVG of just the metro, with the seasonal ring baked in, and the headline anchored to the prairie horizon, not centered over streets.

## Motion score

- **Intro (≤1.2s, skippable):** Storm-cell shadow drifts SW→NE across the metro map; town names light up behind it. Duration 1.0s. Reduced motion: static map with all towns lit.
- **Scroll story 1:** Month ring rotates one notch per season band entry (verb: dial). Pinned on desktop ≥640px; stacked cards below.
- **Scroll story 2:** Season-band photos unclip via `clip-path: inset(0 0 100% 0)` → `inset(0)` (verb: wipe).
- **Hover:** Hairline underline grows `scaleX(0→1)` from left, 200ms, on links and buttons.
- **Reduced motion:** Ring is static at current month; all content visible without animation; no clip-path transitions.

## Tools

1. **After-the-storm ground check** (`checklist` module). Inputs: 5-item checklist (granules at downspouts, dented gutters/vents, shingles in yard, ceiling stains, dented car/AC fins). Output: verdict ("worth an inspection" / "probably fine" / "call now") with reasons. Hand-off: prefills quote form with checked items and verdict.
2. **Hail season calendar** (`tabs` module). Inputs: month picker (Jan-Dec). Output: what happens to roofs that month in central OK + what to check. No live data. Hand-off: "Book inspection before [month]" CTA links to #contact.
3. **Material compare** (`compare` module). Tabs: architectural shingle vs Class 4 shingle vs standing-seam metal. Shows lifespan, hail behavior, look, sample price band from facts. Hand-off: "Price my roof in this material" → quote form prefilled with material choice.
4. **ZIP checker** (`zip` module). Validates against `{{biz.zips}}`. In-area → show form; out-of-area → message.
5. **Quote form** (`form` module). Multi-step: roof type → problem → photos optional → contact. Prefill from tools.

## Voice

Three sentences in the site's voice:
- "April through June is when hail finds the bruise in a shingle that last year's wind left unsealed."
- "We walk your roof slope by slope, mark every finding with a photo, and tell you what can wait."
- "Class 4 shingles cost more up front; many Oklahoma insurers lower your premium afterward, so ask yours."

Five words never used: "premium", "guarantee" (use "covered"), "best", "affordable", "expert".