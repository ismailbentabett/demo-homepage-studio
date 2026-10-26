# Concept — cleaning-B (Every Other Friday Cleaning)

## Three obvious concepts, rejected

1. **Smiling cleaner with spray bottle.** The brief's §4 cliché; every franchise site does this. Rejected because it signals "stock photo" in 0.5 seconds and hides the actual checklist/price.
2. **Sparkle/bubble cartoon mascot.** "Squeaky Clean!" aesthetic from brief §4. Rejected because it reads as cheap and juvenile to the 30-55 homeowner demographic who wants proof, not cartoons.
3. **Calendar grid with Fridays highlighted.** Takes the "Every Other Friday" name literally as a wall calendar. Rejected because a static calendar doesn't show price or checklist; it's decoration without conversion.

## The thesis

The page is a thermal receipt: every section prints a line item onto a paper strip with a torn bottom edge, and the signature is the running tally that accumulates as you scroll toward the form.

## The signature system: Running Receipt

A vertical thermal-paper strip (dashed left border, jagged torn bottom via CSS clip-path) that accumulates line items on scroll via `--sw-p`. Each section ends with a receipt line that wipes in.

- **Hero:** Receipt header prints biz name, date, "ESTIMATE" label, and the h1 as the first line item. Torn edge visible at bottom of hero band.
- **Quote Builder (story):** Live receipt updates as homeowner selects beds/baths/frequency/add-ons. Each selection prints a new line with mono price. Total updates at bottom. This IS the tool output.
- **Checklist Explorer (proof):** Room checklist renders as receipt line items with deep-only tags. "Sample checklist" disclaimer at bottom.
- **Reviews (proof):** Each review is a receipt note with star rating as quantity and town as SKU.
- **Footer:** Final receipt total line with "Thank you" and tear-off coupon shape. Disclaimer printed as fine print.

Hook: `data-sw-signature="running-receipt"`. CSS primitive: `.receipt-strip` with dashed border-left, torn-bottom clip-path, and `.receipt-line` children that wipe in via `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` driven by `--sw-p`.

## Type

- **Display:** Bricolage Grotesque (variable, opsz/wdth/wght). Ink-trap details give it character at large sizes; warm but precise. Appears ≤3 times in registry, never in cleaning niche.
- **Text:** Figtree (variable, wght). Friendly geometric sans for body; clean and cheerful at 17-19px. Pairs with Bricolage's quirky display without competing.
- **Accent:** DM Mono for receipt lines, prices, timestamps, and tool outputs. Tabular figures align prices vertically on the receipt strip.

Why: Bricolage's ink traps echo the "thermal paper" texture; Figtree's roundness keeps body copy approachable for the family-demographic buyer; DM Mono makes the receipt feel like an actual printed document.

## Palette

Family: **Thermal Paper + Friday Sienna**

| Role | Hex | Name |
|------|-----|------|
| ink | #2D2A26 | Charcoal Ink |
| paper | #F5F2EB | Thermal White |
| accent | #9C4A18 | Friday Sienna |
| deep | #1E1B17 | Receipt Shadow |
| signal | #3B7A57 | Paid Green |
| mid | #D4CFC4 | Paper Fold |

Contrast table (run via `node tools/contrast.mjs`):

| Pair | Ratio | Pass |
|------|-------|------|
| ink on paper | 12.8:1 | body ≥4.5 ✓ |
| ink on mid | 8.2:1 | body ≥4.5 ✓ |
| paper on deep | 14.1:1 | body ≥4.5 ✓ |
| accent on paper | 5.2:1 | accent text ≥4.5 ✓ |
| accent on mid | 3.3:1 | FAIL — use only for shapes/rules, never text |
| signal on paper | 4.6:1 | accent text ≥4.5 ✓ |
| paper on accent | 5.2:1 | button text ≥4.5 ✓ |
| focus ring (signal) on paper | 4.6:1 | focus ≥3 ✓ |
| focus ring (signal) on deep | 3.8:1 | focus ≥3 ✓ |

Tone: light-led. Paper dominates; deep used for footer and receipt shadow accents only.

## Hero family

Family 13: **Receipt Header + Marquee Strip**. Unique in cleaning niche, ≤3 in library.

What breaks the cliché: Instead of a smiling cleaner or sparkle graphics, the hero IS the receipt itself — a thermal-paper strip with the biz name, date, and h1 printed as line items. A slow marquee of clean-room photos runs beneath it (pauses on hover, stops with reduced motion). The "Price it" button sits beside the receipt header like a cashier's action. No faces, no gloves, no bubbles.

## Motion score

- **Intro (≤1.2s, skippable):** Receipt strip slides up from bottom; three header lines type in sequentially (DM Mono). Marquee fades in. Never blocks reading.
- **Scroll story 1 (quote builder):** Each selection prints a new receipt line via clip-path wipe (verb: wipe). Total counts up.
- **Scroll story 2 (checklist):** Room items tick in as receipt lines with staggered delay (verb: stack). Deep-only tags fade in after.
- **Hover language:** Receipt lines grow a sienna underline from left via scaleX (one consistent hover).
- **Reduced motion:** All content visible statically. Receipt lines fully rendered. Marquee paused. No clip-path animations.

## Tools

1. **Quote Builder by Rooms** (`estimator` kit module)
   - Inputs: bedrooms (select), bathrooms (select), frequency (radio: weekly/EOW/monthly), add-ons (checkboxes: oven, fridge, windows, pet hair).
   - Output: Live receipt strip with line items and sample range total. Disclaimer: "Sample — final after walk-through."
   - Prefill: passes beds/baths/frequency/add-ons to quote form via data attributes.

2. **Frequency Quiz** (`filter` kit module)
   - Inputs: people at home, pets (y/n), cooking frequency, how house feels by day 10.
   - Output: Recommended frequency pill + sample price. Links to quote builder pre-set.
   - Prefill: sets frequency radio on quote builder.

3. **Checklist Explorer** (`tabs` kit module)
   - Inputs: room tabs (kitchen, bath, bedroom, living, floors) + visit type toggle (recurring/deep).
   - Output: Checklist as receipt line items. Deep-only items marked with "DEEP" tag.
   - Prefill: none (informational).

4. **ZIP Checker** (`zip` kit module)
   - Input: 5-digit ZIP.
   - Output: Served/not served message with areas list.

5. **Multi-step Quote Form** (`form` kit module)
   - Steps: visit type → house size → frequency → pets/entry → preferred day → contact.
   - Receives prefill from quote builder.

## Voice

Three sample sentences:
1. "Your receipt shows $145–$185 for a 3-bed, 2-bath every-other-week visit. Final price after we see the house."
2. "Same crew every Friday. They'll know your dog hides under the guest bed during vacuuming."
3. "Baseboards, door frames, and inside the microwave are deep-clean items. Your regular visit skips them."

Five words never used: spotless, sparkling, eco-friendly, satisfaction, guaranteed.