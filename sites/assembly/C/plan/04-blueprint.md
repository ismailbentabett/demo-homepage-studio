# assembly-C — Blueprint

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-redwood | 8-second answer: builds + anchors, knows beam-and-glass walls, number right there | `diagonal` (house sheet under a true 14° gable, bleeding right + bottom) | kicker tradeLabel + city, h1, lead, [[call]], sms, proof line hours\|today · areas · rating (Sample) · anchoring from prices.0.from (Sample) | drawn sheet (no photo yet) | `data-sw-signature` hero plan | fascia draws, sheet unclips under the roof, strap ticks drop (≤1.1s); h1 visible frame 0 |
| 2 | `#plan` | t-paper | "Do they do my kind of job?" all 9 services by room | `plan-schedule` (big plan + room schedule table) | services repeater (name, blurb, quote) | plan drawing | `data-hook="plan-index"` | schedule rows stagger |
| 3 | `#living` | t-sand | "TV will fall / they'll hit a pipe" + glass walls | `room-tool` (sticky room tag left, wall checker right) | services.4, prices.2 (Sample), sms | wall-section drawings | `data-hook="wall-check"` (tabs) | text rises |
| 4 | `#anchoring` | t-deep | "Will it tip in a quake?" | `pinned-story` (pinned ≥640, stacked < 640) | services.0, prices.0 (Sample), guarantee (Sample), call | elevation SVG | `data-hook="strap-story"` | lean → strap draws → upright ×3, counter |
| 5 | `#kids` | t-paper | "They'll strip the particleboard" + tip-over check | `room-pair` (two rooms side by side + tool) | services.1-3 blurbs, prices.0 | plan crops | `data-hook="tip-over"` (checklist) | crops clip in |
| 6 | `#atrium` .break | t-olive | the pause: the house's centre and the thesis line | `break` (full-bleed drawing + one line) | proof.years (Sample) | atrium drawing | — | still (quiet section) |
| 7 | `#yard` | t-paper | "Is the playset ok on my slope?" + garage | `room-sketch` (sizing tool with live clearance sketch + garage cards) | services.5-8, prices.3 (Sample) | sketch | `data-hook="playset"` | text rises |
| 8 | `#proof` | t-redwood | "Will they show up / do good work?" | `pinned-reviews` (reviews pinned into rooms of a plan) | proof.reviews repeater (Sample review), rating + count (Sample rating) | plan | `data-hook="review-plan"` | cards stagger |
| 9 | `#prices` | t-paper | "Costs more than the furniture" | `price-rail` (schedule rows with range bars) | proof.prices repeater (Sample pricing) | — | — | rows rise |
| 10 | `#area` | t-sand | "Do they come to my town?" + hours | `site-plan` (house footprint in a ring of towns + ZIP + hours) | biz.areas repeater, zip, hours\|table, hours\|today | site plan | (zip) | still |
| 11 | `#contact` | t-deep | the path: call or the 4-step form | `form-split` | form (services repeater), call, sms, hours today | — | — | still |
| — | footer | t-paper | title block | — | name, city, licence (Sample), guarantee (Sample), disclaimer, credits | — | strap tick | — |

Corner locator: fixed 96px mini-plan ≥1024px (`data-hook="locator"`), lights the room of the section in view.

## Rhythm check
- 11 sections. Hero `min-height: calc(100svh - var(--header-h))`; the sheet stops short so #plan's top edge peeks.
- Tone run: color, light, color, dark, light, color, light, color, light, color, dark. No 3 alike in a row; the two
  deep bands (#anchoring, #contact) each have light/colour neighbours; redwood never touches deep (#proof sits
  between paper bands; footer is paper).
- t-deep ×2, colour bands (redwood ×2, sand ×2, olive ×1), `.break` = #atrium (full-bleed). ✓
- Hooks: sw-signature + plan-index, wall-check, strap-story, tip-over, playset, review-plan, locator (8). ✓
- 11 layout families, no neighbours alike. ✓
- One `#contact`; every CTA is `#contact` (Price it, data-service), `tel:` or `sms:`. ✓
- Required content: 9 services (#plan repeater, plus room sections), area + ZIP (#area), hours + open-now (hero, #area,
  #contact), sample reviews (#proof), prices only via the tools and #prices (Sample), footer disclaimer + credits. ✓
- Signature sections (concept.json): hero (sheet + ticks), rooms (#plan, #living, #kids, #yard room tags with ticks),
  anchoring-story, proof (ticks on cards, pins on plan), tools (tip-over sketch, wall sections, playset sketch),
  service-area (house footprint with tick), footer (title block + tick). ✓

## Decisions taken headless
- No photos this round (library not approved): media.json has no slots, no ogPhoto; drawings stand in. See 05-media.md.
- Hero split: the paper "sheet" is a house shape whose left rake is the true 3:12 seam, bleeding right and bottom.
- Playset sizing is pure HTML/CSS (`:has()` on radios), so it works with JS off; prices only via tokens.

## Open issues
- none blocking. Strap story pins at ≥900 (not 640) so the elevation + steps fit one screen; plays on enter below. Price rail drops `unit` (missing on 3 of 5 price rows in facts). Photos pending (05-media.md).

## Round 1
Photo + type elevate: three library frames now sit inside the plan (wardrobe in the hero living-room cell under the gable, stud finder in the #living room tag, drawer slide in the kids card), warm-graded, so the drawing turns into the room. Fraunces opsz 144 carries the room names (Living room, Kids’ room, Office, Garage & yard) on dimension lines. Tracked caps are cut from nav, labels, legends and towns; italic accents stay only in the h1 and the anchoring h2. One action name: Price my job. The hero is capped at ≥1100px so the next band peeks. The tip-over check gets its own full-width row. Open issue: the assembly manifest has 0 approved photos (all 8 are draft, and only 3 are on-topic), so these 3 draft frames are the best set that exists.
