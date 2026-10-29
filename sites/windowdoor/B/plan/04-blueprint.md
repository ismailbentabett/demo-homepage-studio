# windowdoor-B — Blueprint (10 sections + header / footer / mobile bar)

Header (t-deep, 68px / 60px, sticky, `data-header`): sticker wordmark "SW" + {{biz.short}} · nav (≥900) Label / Openings / Order-by / Prices / Reviews · [[call]] (≥640).
Mobile bar (<900, `data-mobilebar`): Call (tel:) · Text (sms:) · Price it (#contact).

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` | t-deep | first 5 s: trade + town, call, text, proof | **cover** (masthead label strip; h1 + lead + buttons + proof line cols 1-7; `.sticker--cover` photo cols 8-12 with cover-line sticker overlapping) | kicker {{biz.city}}, {{biz.state}}; h1; {{hours\|today}} · {{biz.areas.0}} · {{proof.rating}} [[sample rating]] | `hero` | `data-sw-signature="peel"` | h1 line mask (split lines); cover sticker curls 0→.14 |
| 2 | `#label` | t-paper | "I can't compare quotes" | **split** 8/4 (big label sticker left, sticky explainer panel right) | 5 rows DP / missile / U-factor / SHGC / VT, SAMPLE LABEL; drawn glass-edge SVG; CTA "Have us read your quote" → #contact (Label and quote review) | — (SVG) | `data-hook="label"` (row picker) + signature rows | story 1 **peel**: row corner + meaning unclip per row (--sw-p) |
| 3 | `#openings` | t-deep | "looks like an office building", condos | **grid** 3 col (door photo spans 2 rows, 8 service stickers, call card spans 2) | `<!-- each services -->` name/blurb/short | `hardware` | — | stagger rise 60ms |
| 4 | `#shutters` | t-paper | shutters vs glass, no pressure | **compare** (inputs 4 col, two output columns 8) | openings 1-30, who hangs, weeks away; {{proof.prices.0.from}}–{{proof.prices.0.to}} per opening [[sample pricing]] | `rail` + accordion SVG | `data-hook="shutters"` | numbers update live; image unclip |
| 5 | `#break` | t-deep `.break` | breath before the season | **break** full-bleed 56svh | "The season starts June 1. Your order date comes first." | `break` | — | image unclip |
| 6 | `#orderby` | t-accent | "deposit, then six months waiting", permits | **rail** (12-month bar, Jun–Nov hatched; month picker; 5 step chips) | measure · permit · manufacture 6-14 wk · install · inspection; ORDER BY sticker | — | `data-hook="orderby"` | story 2 **fill**: months fill left→right (scrub), sticker drops |
| 7 | `#prices` | t-deep | "price goes up later" | **list** (4 tag stickers, peeled flap shows the note) | `<!-- each proof.prices -->` + {{proof.guarantee}} [[sample pricing]] | — | signature tags | tags slide 16px, stagger |
| 8 | `#proof` | t-paper | trust, condo board, honest 4★ | **mosaic** (columns 3/2/1, askew review stickers) | `<!-- each proof.reviews -->`, rating, licence, years, insured, all Sample | — | signature stickers | still (quiet) |
| 9 | `#area` | t-mid | do you come to me, when | **split** 6/6 (towns + ZIP / hours + open now) | `<!-- each biz.areas -->`, {{hours\|table}}, {{hours\|today}} | — | `data-hook="zip"` (data-zip) | text rise |
| 10 | `#contact` | t-paper | the conversion | **stack** (form in one large sticker, 4 steps) | service radios (all 8), openings + ZIP + note, when, contact; microcopy + {{hours\|today}} | — | form[data-lead] | still |
| — | footer | t-deep | close | statement + columns; `.sticker--loose` "Label read." peeled sticker | tel, sms, email, areas, {{demo.disclaimer}}, [[credits]], licence (sample) | — | signature | still |

## Rhythm check
- 10 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`, the #label paper edge peeks in ✓.
- Tones: deep · paper · deep · paper · deep · accent · deep · paper · mid · paper → no two dark touching, never 3 alike in a row ✓.
- ≥1 t-deep ✓, colour band t-accent (#orderby) ✓, full-bleed `.break` (#break) ✓.
- Hooks: signature (hero), label, shutters, orderby, zip ✓ (≥3, one is `data-sw-signature`).
- Layout families: cover, split, grid, compare, break, rail, list, mosaic, split, stack → 9 families, no neighbours alike ✓.
- One `#contact`; every CTA → #contact, tel: or sms: ✓.
- Required content: all 8 services (#openings repeater + form), area + ZIP (#area), hours / open-now (hero, #area, #contact), sample reviews (#proof), prices only in the sample price list and the shutters tool (from/to strings, never multiplied), footer disclaimer + credits ✓.
- Signature (Peel-Back Label) in hero, label, prices, proof, orderby, footer = every section in concept.json ✓; also on service cards (small dog-ear).

## Decisions taken headless
- Media per curator update: hero `sliding-door`, break `break-rain-glass`, details `detail-glass-rail` (#shutters) and `door-hardware` (#openings). Impact-glass edge and accordion shutter are SVG diagrams.
- Photo grade changed from the B&W duotone to a colour dusk grade (sources are colour now).
- Label yellow #F2C230 is never text colour: on dark it is only rules, the dog-ear underside and the primary button background (text #121519); accent words on dark use the warm white with a yellow underline rule instead.
- Tools are written in app.js (not hotspots/compare/estimator) so the row picker, the shutters compare and the order-by bar share the sticker markup; all of them read as static content with JS off.
- The shutters compare never multiplies prices: it shows "n openings × {from}–{to} per opening" so only facts.json dollar strings appear.
- No hamburger menu: under 900px the nav is replaced by the mobile bar (Call / Text / Price it); every section is one scroll away.

## Open issues
(none yet)

## Round 1
Elevate photo + mobile: swapped the antique oak-door lever for `stucco-homes` (a real Florida opening). Every photo now has the same night + label-yellow grade and the paper sticker frame with a one-line PHOTO caption (hero, openings, compare, break). On phones the hero puts the label sticker straight after the h1 over a thin photo slice, and #label becomes stacked peel tabs (name on top, big value below, meaning opens under a curled corner on tap, everything visible with motion off). This answers the mustFix overlap and the missing peel state. I also applied all 9 shoulds and every copy-1 replacement. Open note: the h1 is 3 balanced lines at 1440 because it now names the trade and the city.
