## Round 1
Elevate: the hero is now one instrument panel (h1 with trade and city across the top, the chart as the dominant frame with the hero photo graded behind it, the lead, proof and actions as the readout column), and the story photos are part of the instrument (the reading is burned into each frame's corner, out-of-band frames sit under a wet teal grade with beads, and the in-band frame dries out as it reveals). Fixes: stub files (`img[src*="placeholder-"]`) never show. Their frames are captioned chart-paper plates in the palette. The break moved after #services (deep, then paper, then photo, then tan) and swapped from the desert sunset to problem-frozen-lines with a statement caption. Also: no decorative numbering, one verb family ("Book a check"), copy-1 applied (break caption held), sentence-case eyebrow and trade lockup, #pricing as a full-width ledger with rows that wipe in, #area left still, the hero reading carried into the form notes, and lighter review meta.

# Blueprint — hvac-B (Wetbulb Heating & Cooling)

Build-stage revision (builder, fast mode). The concept-director draft listed 11 bands; the builder cut it to 9 + footer
so each band has one job: the "size sanity" tonnage tool was dropped (it would print invented tonnage numbers that are
not in facts.json) and its argument ("a bigger unit dries worse") moved into story step 2. The repair-or-replace tool
uses the kit `checklist` (a two-layer compare slider has no photos to compare). Prices live only in the kit estimator
and the sample price table.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#hero` | t-paper | "Why is it sticky when the AC runs?" → reading → book | full-width h1 over 3-col instrument row (text · chart card · photo) | `{{biz.city}}`, `{{proof.rating}}`, `{{proof.reviewCount}}`, `{{hours|today}}`, `[[call]]`, `[[quote Humidity check]]` | `hero` | `data-sw-signature="comfort-chart"`, `data-dew-point`, `data-open-now`, `data-split` | h1 line mask; chart lines draw, dot drops (≤1.2s) |
| 2 | `#story` | t-deep | "Thermostat says 72, house feels wet" + "they'll sell me a bigger unit" | sticky chart column + scrolling steps (CSS sticky, no pin) | 3 sample readings, `[[sample reading]]` | `story-1..3` | `data-sw-signature`, `data-story-step` | dot travels per step + trail draws; photos unclip |
| 3 | `.break` | — | breath, full-bleed photo | break | caption only | `break` | `data-reveal="clip"` | unclip |
| 4 | `#services` | t-paper | "Do they fix or only replace?" every service | reading-log list (rows: index · mini chart · name · blurb · button) | `<!-- each services -->` `{{.name}}` `{{.blurb}}` `[[quote {{.short}}]]` | — | `data-sw-signature`, `data-reveal-stagger` | rows rise; each mini dot draws into the band |
| 5 | `#sorter` | t-mid | "Is a repair still worth it?" | centred stack, 2-col tick grid | process statements only | — | `data-checklist` | text rises only (quiet) |
| 6 | `#reviews` | t-deep | "Do neighbours trust them?" | rail: sticky head + card column | `<!-- each proof.reviews 0:4 -->`, `{{proof.rating}}`, `[[sample review]]` | — | `data-sw-signature`, `data-reveal-stagger` | cards stagger |
| 7 | `#area` | t-paper | "Do you come to my street?" + hours | split (areas left, ZIP right) | `{{biz.city}}`, `<!-- each biz.areas -->`, `{{hours|today}}` | — | `data-zip`, `data-open-now` | text rises |
| 8 | `#pricing` | t-accent | "What will it cost?" | table (estimator line + sample price rows) | `<!-- each proof.prices -->`, `[[sample pricing]]` | — | `data-estimator` | rows stagger |
| 9 | `#contact` | t-paper | the one booking path | split (what happens next · 4-step form) | services repeater, `[[tel]]` | — | `data-lead` | form unclips |
| — | footer | t-deep | disclaimer, credits, hours, badge | 4 columns | `{{demo.disclaimer}}`, `[[credits]]`, `{{hours|table}}`, `{{proof.license}}` | — | `data-sw-signature` | static |

## Rhythm gate
- 9 sections + footer (8-12 ✓). Hero `min-height: calc(100svh - var(--header-h))`; at 1440×900 the story band peeks.
- Tones: paper · deep · (photo) · paper · mid · deep · paper · accent · paper · deep. No 3 alike in a row; no two dark
  bands touch (deep→photo→paper, mid→deep→paper, accent→paper→deep) ✓.
- t-deep ✓ (#2, #6, footer) · colour band ✓ (#8 accent, #5 mid) · full-bleed `.break` ✓.
- Hooks: `data-dew-point`, `data-checklist`, `data-zip`, `data-estimator`, `data-lead`, `data-sw-signature` ✓.
- Families: instrument row, sticky-steps, break, list, stack, rail, split, table, split — no neighbours alike ✓.
- One `#contact`; every CTA is `#contact` (`data-service`) or `tel:` ✓.
- Required content: all 9 services (#4 + form), areas + ZIP (#7), hours/open-now (#1, #7, footer), sample reviews (#6),
  prices only via estimator + sample table (#8), footer disclaimer + credits ✓.
- Signature (`concept.json.signature.sections` = hero, story, proof, services, footer): hero chart, story chart,
  reviews head chart with four plotted readings, a mini chart on every service row, footer badge ✓.

## Notes / open issues
- Media library is placeholder stubs: every `.frame` carries a teal→graphite gradient so a stub or a failed photo
  never reads as a broken box.
- `break` slot is `weather-desert-sunset` (manifest alt names Las Vegas): wrong climate for Houston. Candidate for a
  photo swap when the critic asks (needs a Gulf-weather frame in the manifest).
