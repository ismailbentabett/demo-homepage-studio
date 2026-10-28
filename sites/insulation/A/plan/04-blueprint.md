# insulation-A · Blueprint (Stack Effect · top of the house down)

Every section is a level of the same house. The 64px riser column (amber warm-air line, ice when sealed) runs down the left
of every section; each level opens with a level tag on a leak notch that gets stitched when it enters view.

| # id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 #top (hero) | t-deep | first 5 s: trade + town, phone, price clue, "seal first" | mosaic | kicker {{biz.city}}, {{biz.state}}; h1 "Seal the top of the house first. Then insulate."; lead; [[call]] + "Price my attic" (#price); proof line {{hours|today}} · {{proof.rating}} from {{proof.reviewCount}} [[sample rating]] · from {{proof.prices.0.from}} | hero-A1 (gable cell, eager, 42% 30%) + 3 drawn tiles (L1 roof deck, L2 attic, L5 rim joist) | data-hook="hero-mosaic" | h1 line mask 700/70; cells wipe top-down 600/60; riser draws 900; ridge chevrons loop |
| 2 #icedam | t-paper | "what causes ice dams?" + is mine attic heat? | split (diagram left / quiz right) | L1 Roof deck tag; ice dam diagram; 5-question check (checklist) → [[quote {{services.2.short}}]] | drawn SVG | data-hook="icedam-check" | text rise; diagram static (quiet) |
| 3 #order | t-deep | "they'll blow more fluff on top and leave" | story (pinned ≥ 900, stacked < 900) | 6-step rail (look, measure, seal, insulate, vents clear, check again); 5 leak steps stitched in the house SVG; final even snow line | drawn house SVG (sprite #house) | data-hook="stitch-story" | pinned scrub, 5 × 55svh + 100svh |
| 4 .break #roofline | t-ice | full-bleed pause: the street under even snow | break | one line: "One house on the street loses its snow first. That's the one leaking heat." | drawn roofline SVG (5 gables) | data-hook="roofline" | stripes on one roof fill to even snow on view |
| 5 #levels | t-paper | "they'll sell me spray foam everywhere" | ladder (levels down the riser) | 8 services via repeater grouped L1-L6, each with [[quote {{services.N.short}}]] | none | — | stagger 60ms; card notch stitches on hover |
| 6 #picker | t-mid | "where does my heat leave?" tool | tool (house + panel) | heat path picker (tabs): 6 zones; prices via {{proof.prices.N.from}}–{{.to}} + [[sample pricing]]; hand-off [[quote]] | sprite #house | data-hook="heat-path" | none (tool, quiet) |
| 7 #proof | t-snow | "will it actually stop the ice?" | stagger (reviews hung on levels) | {{proof.rating}} / {{proof.reviewCount}} [[sample rating]]; 6 reviews via repeater [[sample review]] | none | — | notches stitch |
| 8 #price | t-deep | "no price clue" + the come-back promise | table | proof.prices repeater (item, from–to, unit, note) [[sample pricing]]; {{proof.guarantee}} (Sample); [[call]] | none | — | rows rise |
| 9 #season | t-paper | "when should I book?" | tabs | season planner: 6 month groups, honest work + lead time in words; "Book for …" → form timing | drawn snow-depth bars | — | none |
| 10 #faq | t-snow | vermiculite, ceiling/mess, vents/mold, depth rulers, winter work | accordion | 6 questions | none | — | still (quiet) |
| 11 #contact | t-mid | the form + area + hours | form (two-column) | ZIP checker {{biz.zips}}, {{biz.areas|list}}, {{hours|table}}, [[tel]], 4-step form, thanks text | none | — | form notch counts stitches per step |
| footer | t-deep | L0 footing: frost line, licence, disclaimer | footer | {{proof.license}} (sample), {{demo.disclaimer}}, [[credits]] | drawn frost line | — | riser ends sealed |

Mobile bar (< 900): Call | Text | Price it.

## Rhythm gate (METHOD §4)
- Sections: 11 top-level `<section>`s (8-12) ✓. Hero `min-height: calc(100svh - var(--header-h))`, the paper band peeks in ✓.
- Tones: deep · paper · deep · ice · paper · mid · snow · deep · paper · snow · mid. No two dark touching (deep sits between
  paper/ice/snow) ✓; no 3 of a category in a row ✓. (check-static counts t-snow/t-ice as colour, t-mid as mid.)
- ≥ 1 t-deep (3) ✓, colour band t-ice (+ t-snow) ✓, full-bleed `.break` (#roofline, drawn SVG, no photo exists) ✓.
- Hooks: data-sw-signature="heat-riser" on `<main>` + hero-mosaic, icedam-check, stitch-story, roofline, heat-path ✓.
- Layout families: mosaic, split, story, break, ladder, tool, stagger, table, tabs, accordion, form: 11, no neighbours alike ✓.
- One #contact; every CTA → #contact, #price (in-page) or tel:/sms: ✓.
- Required content: all 8 services (#levels repeater + form step 1), ZIP checker + areas (#contact), hours + open-now (hero,
  contact, header), Sample reviews (#proof), prices only in sample blocks (#price, #picker, hero proof line, all tagged), footer
  {{demo.disclaimer}} + [[credits]] ✓.
- Signature sections (concept.json): hero (riser from the gable peak, chevrons leak out), order (stitch story), levels (cards hang
  on the riser, notch per card), proof (stitched notch as quote mark), price (rows end in stitches, riser down the table edge),
  form (4 steps = 4 stitches), footer (L0 footing, riser reaches the frost line sealed) ✓.

## Decisions (headless)
- "Sample January night" temperatures: shown only as a level-tag aside with the word Sample in it.
- The heat path picker uses the `tabs` module (zones = tab buttons laid over the house ≥ 640, a chip grid < 640) instead of
  `hotspots`: the panel sits beside the drawing instead of a popover, and without JS every zone shows as a list.
- Season planner "Book for …" buttons prefill the form `when` field through a 6-line handler in app.js (glue).

- Single-service rungs (L1, L3-L6) render as one wide row card (title · blurb · button) at ≥ 1000 so the ladder reads as ruled floors, not lonely tiles.
- Bordered boxes (check, cards, promise) keep square corners; the notch clip is only on buttons and the form box (a clip cut the border).

## Open issues
(none: static clean, render PASS 0 warnings)
