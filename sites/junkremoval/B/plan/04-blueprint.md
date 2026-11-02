# Blueprint — junkremoval-B

## Open issues
- **Hero family capacity exhausted.** All hero families 2–15 are at the 7-use cap (including reservations); family 1 is at its 2-use cap. The design registry has no delivered slot free. `check-unique.mjs --concept` blocks on this collision. Resolution requires either: (a) a reserved sibling in another niche to be delivered or released, freeing a slot; or (b) manual registry edit by the operator. Concept uses heroFamily 15 as placeholder; build and static check pass clean, but `stage.mjs render` cannot proceed until a hero family slot opens.

## Rhythm check
- 10 sections. Hero is `calc(100svh - var(--header-h))`, next band peeks.
- Tone sequence: paper → concrete → paper → deep → paper → concrete → paper → deep → paper → deep. No two dark touching. No three same tone in a row.
- ≥ 1 t-deep (sections 4, 8, 10). ≥ 1 color band (none needed; destination inks serve as color accents within sheets). ≥ 1 full-bleed `.break` (section 5 sort story).
- ≥ 3 data-hooks: `data-answer-box`, `data-estimator`, `data-sorter`, `data-zip`, `data-sw-signature`. ✓
- ≥ 3 layout families: tool-first hero, sheet-grid services, pinned-story sort, price-table, review-cards, form-stack. No neighbours share one. ✓
- Exactly one `#contact`. Every CTA points to `#contact` or `tel:`. ✓
- Required content: all 10 services listed, area + ZIP checker, hours/open-now, sample reviews with Sample tag, prices via estimator + sample price block, footer with `{{demo.disclaimer}}` + `[[credits]]`. ✓
- Signature appears in: hero, services, prices, reviews, footer (per concept.json.signature.sections). ✓

## Sections

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Answer "will you take it?" and show price logic before the call | tool-first (7) | kicker: "Katy, TX · Junk Removal"; h1: "Know the price and where it goes / before the truck comes"; lead: "Type any item. Get yes, no, or a note. Then see your load share and the sample range."; proof line: "{{hours|today}} · {{biz.city}}, {{biz.state}} · {{proof.rating}} [[sample rating]]"; phone + Price-it CTA | hero-B | data-answer-box, data-sw-signature | line-mask h1, sheet rules draw |
| 2 | trust | t-concrete | Prove the numbers are real and the crew is careful | trust-grid (4-col) | open-now, years (sample), rating (sample), guarantee snippet, insured badge text | — | data-open-now, data-count | fade-up stagger |
| 3 | services | t-paper | Show every service filed under its primary destination | sheet-grid (3-col sort sheet) | repeater over `services`; each card has name, blurb, destination mark (donate/recycle/landfill), Price-it CTA | — | data-sw-signature | clip-reveal per card |
| 4 | prices | t-deep | Show sample ranges by truck share with destination marks | price-table (sheet) | repeater over `proof.prices`; each row: item, from–to, note, destination mark; [[sample pricing]] label | — | data-estimator, data-sw-signature | row stagger |
| 5 | sort-story | t-paper (full-bleed .break) | Show twelve items sorting themselves into three columns | pinned-story (desktop) / stacked cards (mobile) | 12 items from a garage: sofa, mattress, fridge, boxes x4, treadmill, patio set, paint cans, TV, bike; each sorts to donate/recycle/landfill | hero-B-2 | data-sorter, data-sw-signature | pinned scroll (≥640px), clip cards (<640px) |
| 6 | area | t-concrete | Confirm service area and let visitor check ZIP | split (text + map/list) | areas list via `{{biz.areas|list}}`; ZIP checker input; answer region | — | data-zip | fade-up |
| 7 | reviews | t-paper | Show sample reviews filed under the item that left | review-cards (sheet-styled) | repeater over `proof.reviews`; each card: quote, name+town, service tag, destination mark; [[sample review]] label | — | data-sw-signature | stagger |
| 8 | process | t-deep | Explain the walk-through and keep-pile respect | numbered-steps (3 steps) | 1. Point and price on site. 2. Crew carries, you don't lift. 3. We sort: donate, recycle, landfill last. Keep-pile note: "Blue tape = stays." | hero-B-3 | — | step reveal |
| 9 | contact | t-paper | Capture the job in four steps | form-stack | multi-step form: service → job details → when → contact; honeypot; honest thank-you | — | data-lead | form-step transition |
| 10 | footer | t-deep | Credits, disclaimer, signature bottom line | footer-sheet | `{{demo.disclaimer}}`; `[[credits]]`; nav anchors; sheet bottom-line with signature rule | — | data-sw-signature | static |