# Concept — pest-B

## Three obvious concepts, rejected

1. **The bug identifier hero.** A giant termite-vs-ant quiz fills the hero with macro illustrations. Rejected: it is the brief's seed taken literally, and every pest site has an identifier; it makes the page feel like a diagnostic app, not a contractor who does the work.

2. **The green-shield trust badge.** A large shield icon with "Licensed · Insured · Guaranteed" dominates above the fold, with stock photos of smiling technicians. Rejected: template language; competitors do it; says nothing specific about Trap Count's monitoring log.

3. **The service grid with icons.** A 3×3 grid of pest icons (termite, mosquito, rat, ant, roach…) each linking to a blurb. Rejected: the cliché wall-of-icons the brief explicitly forbids; reads as a franchise template.

## The thesis

The page is the monitoring log: every section is a row in the station record, and the signature is the numbered station ring that lights up as the log fills in.

## The signature system: Station Ring + Log Row

A CSS primitive: a top-down house footprint outline with 12 numbered station dots (BR-01 to BR-12) arranged in a ring. Each dot is a `<span>` with a mono label. Beside or below the ring, a log row appears: `DATE · STATION · ACTIVITY · ACTION` in monospace, typed in on scroll.

- **Hero:** The ring sits beside the headline on the bayou-green field. Station dots fade in one by one during the intro. The first log row reads "Sample log — scroll to see entries."
- **Liquid vs Bait story:** The ring stays pinned on desktop. As you scroll, stations 01-04 light for "liquid trench zone" and 05-08 for "bait station zone," and the log rows explain what each visit does. On mobile, stacked cards with clip reveal.
- **Proof / Reviews:** Each review card carries a station pill (e.g., "BR-07") and a log-row excerpt matching the review text. The ring in the margin shows which stations had activity that year.
- **Footer:** The ring resets to all 12 lit, and the final log row reads "Next visit: scheduled." The phone number and guarantee sit below.

Hook: `data-sw-signature="station-ring"`.

## Type

- **Display:** Chivo (grotesk, variable weight 100-900). Strong, newspaper-punch headings that read as authoritative without being scary. Appears ≤3 times in registry, never in pest niche.
- **Text:** Outfit (grotesk, variable weight 300-900). Friendly geometric sans for body, forms, and tool UI. Pairs with Chivo's weight range.
- **Accent:** Space Mono (mono, 400/700). Station IDs, dates, log entries, prices, and ZIP codes. Gives the log its field-notebook feel.

Pair is unique in registry. Neither face is Inter/Roboto/system-ui.

## Palette

Family: **Bayou Green + Log Bone + Station Orange**

| Role | Hex | Name |
|------|-----|------|
| ink | #F0EDE6 | Log Bone (text on dark) |
| paper | #F0EDE6 | Log Bone (bg on light sections) |
| accent | #D4622B | Station Orange |
| deep | #1A332A | Bayou Green |
| signal | #D4622B | Station Orange (CTAs) |
| mid | #2E5240 | Mid Green (cards on dark) |

Tone: color-led. Deep bayou green dominates hero and key bands; log bone provides reading surfaces; station orange is the high-vis cap color for CTAs and active station dots.

Contrast checks required before build (run `node tools/contrast.mjs`):
- Log Bone (#F0EDE6) on Bayou Green (#1A332A): body text ≥4.5
- Station Orange (#D4622B) on Bayou Green (#1A332A): accent text ≥4.5 (if fails, orange used only for shapes/buttons, white text on orange buttons)
- Bayou Green (#1A332A) on Log Bone (#F0EDE6): headings on light ≥3
- Focus ring (Station Orange) on both tones ≥3

## Hero family

**Family 7: Tool-first.** The liquid-vs-bait compare tool IS the hero, sitting on the bayou-green field beside the headline and the station ring. The tool works with JS off as a plain explanation + call button. This breaks the family's cliché because the tool is not a generic estimator; it is the actual decision the homeowner faces, rendered as a two-column log-style comparison with sample prices. Unique in pest niche; family 7 used ≤3 times in library.

## Motion score

- **Intro (≤1.2s):** The diagonal treated-zone line draws from corner to corner across the hero, then 12 station dots rise in staggered sequence. Skippable via `prefers-reduced-motion`; with reduced motion, the ring and headline are static and fully visible.
- **Scroll story 1 (Liquid vs Bait):** The station ring is pinned (desktop). Stations light in groups as you scroll; log rows type in beside. Verb: *dial* (stations illuminate like indicator lights). With reduced motion: static ring with all stations lit, full log table visible.
- **Scroll story 2 (Plan Cost):** The yearly total counts up from $0 to the sample range as tool inputs change. Verb: *count*. With reduced motion: static total displayed.
- **Hover:** One language — station dots scale 1.15× and the log row underline grows from left via `scaleX`. Consistent across all interactive elements.

## Tools

1. **Liquid vs Bait Compare** (`compare` module). Inputs: house type (slab/crawlspace/raised), wells/water nearby, yearly monitoring preference. Output: two columns with sample price ranges, visit descriptions, and pros/cons. Hand-off: "Ask which fits your house" button prefills #contact with `problem=termite` and `house_type`.
2. **Plan Cost Calculator** (`estimator` module). Inputs: termite plan (none/liquid/bait), renewal (y/n), quarterly pest (y/n), mosquito months (multi-select). Output: sample yearly range from `{{proof.prices}}`, labelled Sample. Hand-off: "Get this plan in writing" prefills #contact with selected options.
3. **Mosquito Season Calendar** (`tabs` module). Inputs: month selector (or today). Output: visit plan strip with per-visit sample price. Hand-off: "Book mosquito season" prefills #contact with `problem=mosquito`.
4. **ZIP Checker** (`zip` module). Input: 5-digit ZIP. Output: served/not served from `{{biz.zips}}`. Hand-off: if served, enables #contact; if not, shows nearest served area.
5. **Multi-step Quote Form** (`form` module). Steps: problem → house type → closing date (if letter) → photos → contact. Prefill from any tool above.

## Voice

Three sample sentences:
- "Station 7 by the AC pad had hits in May. Here is what we did about it."
- "Your renewal comes with a printed log of every station and every visit for the year."
- "Liquid trenches the perimeter. Bait monitors the colony. Both carry a retreat guarantee."

Five words never used: safe, non-toxic, harmless, eco-friendly, guaranteed (use "retreat guarantee" instead).