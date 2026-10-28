# assembly-A · Blueprint

| # id | tone | purpose (objection or path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 #top | t-light | 10-second call / "no tools, no-show" | hero-plate (text 1-7, FIG. 1 plate 8-12, bag A pinned to the plate) | kicker city/state, h1 "Six boxes in the hall." + steps 02/03, lead, Call {{biz.phone}} + Price my list, proof line {{hours\|today}} · {{proof.prices.0.from}} · {{proof.rating}} (Sample) | none (drawn exploded dresser) | data-hook="intro" | dresser closes part by part ≤ 1.1 s, h1 lines rise, 02/03 tick |
| 2 #steps | t-paper | strip / crooked drawers / stripped holes / TV falls | manual-rail (rail 1-4 + content 6-12, mirrored each step) | 6 numbered steps, each a drawing + hardware bag | none (6 drawings) | data-hook="steps" **data-sw-signature** | each drawing closes with scroll (scrub), numeral ticks at .9 |
| 3 .break #kit | t-deep | "they'll show up without tools" | break-band (full-bleed, statement + 6 drawn tools) | h2 "Tools and anchors come with us." | none | – | quiet: tools fade up in a stagger |
| 4 #services | t-light | "handyman list with furniture as one bullet" | tray-grid (3×3 hairline tray, keys A1-C3) | every service by repeater, [[quote]] per cell | none (64px glyphs) | – | stagger rise |
| 5 #prices | t-mid | "costs more than the furniture" | inventory (bag P left, keyed table right) | proof.prices A-E with Sample pricing, hourly note | none | – | rows rise |
| 6 #planner | t-light | move-in deadline / tip-over fear | tool-bench (two tools side by side) | move-in day planner + tip-over check | none (strap drawing) | data-hook="planner", data-hook="tipover" | none (tools are still) |
| 7 #reviews | t-paper | "will they do it right" | tag-board (bag tags, one wide lead tag) | 6 sample reviews, rating bag | none | – | tags rise, offset columns |
| 8 #area | t-accent | "do you come to me" | split-band (statement + ZIP left, hours right) | {{biz.city}}, {{biz.areas\|list}}, ZIP check, {{hours\|table}} | none | – | none |
| 9 #faq | t-light | building COI / elevator / missing parts | accordion column (narrow, offset right) | 6 Q&A | none | – | none (quiet) |
| 10 #contact | t-paper | the form | form-split (call + guarantee bag left, 4-step form right) | form, sms, guarantee (Sample) | none | – | none |
| footer | t-deep | Step 07 "The empty hallway" | full-width assembled dresser + bag Z + call | disclaimer, [[credits]], licence (sample) | none | – | – |

## Rhythm gate
- Sections: 10 (hero → contact). Hero `min-height: calc(100svh - var(--header-h))`; the cream steps band peeks in under it.
- Tone run: light, light(paper), deep, light, mid, light, light(paper), accent, light, light(paper) → never 3 of one category in a row; the only dark band (#kit) sits between paper and light; footer deep follows paper.
- ≥ 1 t-deep (#kit, footer), ≥ 1 colour band (#area t-accent), 1 full-bleed `.break` (#kit).
- Hooks: intro, steps (data-sw-signature), planner, tipover = 4.
- Layout families: 10 distinct, no neighbours alike.
- One `#contact`; every CTA is `tel:`, `sms:` or `#contact` (prefill via data-service).
- Required content: all 9 services (repeater), area + ZIP checker (#area), hours + open-now (hero proof line, #area, #contact), 6 Sample reviews + Sample rating, prices only in the Sample parts list, footer with {{demo.disclaimer}} + [[credits]].
- Signature in: hero (exploded dresser + bag A), story (#steps), prices (bag P + keyed parts), proof (bag tags), tools (planner prints a numbered step list, strap drawing closes), footer (assembled dresser + bag Z).

## Decisions taken headless
- **No photos in round 0** (library still downloading): the sticky hero photo becomes a drawn plate (FIG. 1). See 05-media.md.
- Hero family 12 kept as "plate + numbered statements": all three statements sit in the first screen (01 is the h1), ticked in the intro, instead of scrolling past a pinned photo. Reason: the first screen must hold the h1, the phone and the CTA at 390, and a pin with no photo would be an empty sticky box.
- Story 2 (Steps 01-06) is a scrubbed scroll story without a pin on every width (no scroll-jacking); the drawing closes as the step crosses the viewport, the numeral ticks at .9.
- Phone order: text first, plate second (first screen = h1 + call), not plate on top.
- Tool logic (planner, tip-over) lives in app.js outside the motion guard so it works with reduced motion; only motion is guarded.

## Open issues
- none yet

## Round 1
Photo + first screen elevate: no assembly photo is approved (all 8 manifest entries are `draft`), so every step drawing became a framed FIG. plate (grid sheet, corner ticks, numbered sentence-case caption) like FIG. 1. The hero is re-cut as the manual's cover: the h1 carries "Furniture assembly in {{biz.city}}", FIG. 1 sits between the h1 and the buttons on phones, the drawers slide shut as the hero scrolls away, and the steps band peeks at 1440×900. Also: one action name ("Price my list"), 5 of 8 eyebrows cut, reviews grid stretched (no hole), reveals never hide content, honest thank-you line.
