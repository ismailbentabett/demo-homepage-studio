# windowdoor-A · Blueprint (builder, fast mode)

| # | id | tone | purpose | layout family (data-layout) | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #hero | t-paper | first 5 s: price per opening + "every opening listed" | offset (fam 5, offset framed photo) | kicker {{biz.tradeLabel}} · {{biz.city}}; h1; lead; Call {{biz.phone}} / Text a photo (sms) / Get my window schedule → #contact; proof line {{proof.prices.0.from}}-{{proof.prices.0.to}} per opening · {{proof.rating}} Sample rating · {{hours|today}} | hero (hero-A1-2) in `.jamb`, tags W1/W2 hung on its windows | `hero-frame`, open-now | frame draws head → jambs → sill, tag swings, h1 line mask |
| 2 | #keyplan | t-coral + `.break` | contractor wow: the house as a schedule | bleed (full-bleed photo key plan) | h2 "One house. Every opening gets a tag."; 5 hotspot tags → service cards | keyplan (sarasota-midcentury) | `keyplan` (hotspots) | tags pop 60ms stagger |
| 3 | #process | t-light | obj 1, 2, 6: the six openings of the job | rail-story (sticky strip + drawing, steps right) | W1 Measure · W2 Order · W3 Remove · D1 Set · W4 Seal · W5 Inspect ({{services.8.name}}) | drawn jamb section, 6 layers | `data-sw-signature` strip ticks, `process` | story: tick (ScrollTrigger ≥ 640, stacked < 640) |
| 4 | #services | t-mid | every service, filterable | grid (tagged cards + tall photo tile) | 9 services by repeater-free tagged cards (W/SD/D/G tags) + [[quote]] | lanai (naples-lanai) | `services` (filter) | text rise stagger |
| 5 | #schedule | t-deep | obj 1, 5: prices as the schedule sheet | ledger (ruled table) | proof.prices 0-3, Sample pricing stamp, note N1 = {{proof.guarantee}}, Licence # {{proof.license}} (sample) | none | `sheet` | story 2: rules draw L→R, 60ms per row |
| 6 | #tools | t-paper | obj 7 + measuring | split (two tool panels) | Measure your opening (6 inputs → smallest W × H row → prefill `size`); Glass by wall direction (tabs N/E/S/W → prefill `details`) | jamb diagram with dimension strings | `measure`, `glass` (tabs) | text rise |
| 7 | #reviews | t-coral | obj 3, 4, 2 | mosaic (field notes) | 6 proof.reviews tagged by opening, Sample review tags, {{proof.rating}} Sample rating | none | — | text rise |
| 8 | #area | t-light | area + ZIP + hours | list (towns as a schedule column + ZIP + hours) | {{biz.areas}} repeater, ZIP checker, {{hours|table}}, {{hours|today}} | none | `zip`, open-now | quiet |
| 9 | #contact | t-deep | primary conversion | form (4-step "blank schedule") | steps 1 opening type · 2 sizes and notes · 3 when · 4 contact; call + text alt | none | `form` | quiet |
| — | footer | t-paper | close | — | closing schedule row "W5 · Inspection · passed", {{biz.email}}, Licence # (sample), {{demo.disclaimer}}, [[credits]] | none | — | none |

## Rhythm check (METHOD §4)
- 9 sections (8-12). Hero `min-height: calc(100svh - var(--header-h))`, #keyplan coral edge peeks under it.
- Tones: paper · coral · light · mid · deep · paper · coral · light · deep (+ footer paper). Categories light/color/light/mid/dark/light/color/light/dark: no 3 alike in a row, the two deep bands never touch.
- t-deep ×2, colour band ×2 (t-coral), full-bleed `.break` = #keyplan.
- Hooks: hero-frame, keyplan, process + `data-sw-signature` strip, services, sheet, measure, glass, zip, form (9).
- Layout families: offset, bleed, rail-story, grid, ledger, split, mosaic, list, form (9, no neighbours alike).
- One #contact; every CTA is `#contact`, `tel:` or `sms:`.
- Required content: 9 services (#services + form step 1), area + ZIP (#area), hours + open-now (hero, #area, contact), sample reviews (#reviews, Sample tags), prices only in the sample schedule sheet + hero proof line (Sample pricing), footer disclaimer + credits.
- Signature (concept.json: hero, process, services, schedule, reviews, tools, contact, footer): hex tag + jamb frame in hero; strip + jamb drawing in process; tagged cards in services; full schedule sheet; reviews tagged by opening; measure tool output = a schedule row on the jamb drawing; form steps tagged 1-4; footer closing row.

## Builder decisions
- Media swapped per curator (see 05-media.md). The key plan is now a real house photo with tags hung on its openings instead of a drawn elevation: stronger proof that the schedule is about a real house.
- Lead time: no week numbers on the page (not in facts.json); the Order step says we give the ship week when we order and call when it ships; Diane K.'s sample review carries the real-world number.
- Form has 4 steps (contract), not 3.
- Tool logic (measure, glass hand-off) runs outside the motion guard in app.js: it is behaviour, not motion, and must work under reduced motion.

## Open issues
(none yet)

## Round 1
Re-cut the hero so "tagged" is a tag label crossing the frame, with a leader line to the W1 window (CSS anchors, ≥1200). The hero is 88px short so the coral key plan peeks in; at 390 the order is photo, then tags, then Call, then the paragraph. The key plan is now the hero's own Florida House shot from the drive (stucco-homes), with 5 tags re-placed on its openings, an "A-1" sheet title block, and tags that wait for the photo to load. All frames share one warm grade. Also: one name for the action ("Start my window schedule"), the office hours moved from #area to #contact, 16px body on cards and tools, 48px filter buttons, shorter process steps, and the copy-1 replacements.
Note: the only other approved Florida house frames are sibling heroes, so the key plan reuses the hero's house from a second angle (a different photo). The story becomes "one house, every opening tagged".
