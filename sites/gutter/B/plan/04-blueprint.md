# gutter-B · Blueprint

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-deep | first 5 s: what, price range, my town, call | `filmstrip` | kicker `{{biz.city}}`, h1 statement, proof ledger line (`{{proof.prices.0.from}}–{{proof.prices.0.to}}`, `{{proof.rating}}` Sample), Call `[[call]]`, Price my roof `[[quote]]`, ZIP `data-zip`, `{{hours|today}}`; filmstrip of 6 frames (5 drawn cylinders + 1 photo) + aria-hidden loop copy (photo swapped for a drawn rail frame) | `hero` (B3, frame No. 02 only) | `data-sw-signature="cylinder"` | h1 line mask (split), cylinder No. 01 fills + 0→623 count, strip drifts |
| 2 | `#gallons` | t-signal | "are the gutters even the problem?" → the arithmetic | `equation` | `1,000 sq ft × 1 in × 0.623 = 623 gal` in big mono, one line of why | none | `data-hook="count"` (counter) | none (quiet statement), number counts |
| 3 | `#story` | t-paper | where the water goes: roof → gutter → drops → away from the wall | `pin` | 4 steps; ledger rows per step (623 / 623 overflow / 312 each / splash block) | drawn SVG | `data-hook="pour"` | pinned ≥ 640 (scrubbed data-step), stacked clip cards < 640, final diagram static reduced |
| 4 | `.break` | t-ink | breath + proof of the end of the pipe | `break` | caption "A downspout pouring onto a splash block, steered off the foundation." | `break` (B2) | — | unclip |
| 5 | `#services` | t-paper | every service, priced from one place | `ledger` | repeater `services` (8): No. `{{#2}}`, name, blurb, `[[quote {{.short}}]]` | drawn icons | — | stagger rise |
| 6 | `#tools` | t-mid | do the math yourself → prefilled form | `split` | runoff calculator (sq ft × in × 0.623 into a big cylinder) + gutter size check (5" vs 6") | drawn | `data-hook="runoff"` | rise |
| 7 | `#guards` | t-deep | "guards that don't work under my firs" | `columns` | screen / micro-mesh / reverse curve × stops / slips / under firs / upkeep; `{{proof.prices.2.*}}` Sample | drawn hatch | `data-hook="guards"` | stagger |
| 8 | `#prices` | t-paper | "no idea of price" | `table` | repeater `proof.prices` as ledger rows with chips, `[[sample pricing]]` | none | `data-hook="ledger"` | row rise |
| 9 | `#reviews` | t-mid | trust | `masonry` | `{{proof.rating}}` · `{{proof.reviewCount}}` Sample rating, repeater `proof.reviews` with mini cylinder chips (fill = stars/5) + Sample review | none | — | stagger |
| 10 | `#area` | t-ink | "do you come to my town?" + when | `roster` | `{{biz.city}}` + repeater `biz.areas`, second ZIP checker, `{{hours|table}}`, `{{hours|today}}`, licence `{{proof.license}}` (sample) | none | — | rise |
| 11 | `#contact` | t-paper | the one form | `form` | 4-step `form[data-lead]` (service → job details → when → contact), call + text a photo + email | none | — | none |
| — | footer | t-deeper | sign-off | — | cylinder spilling into a drawn barrel, ledger total line, areas, `{{demo.disclaimer}}`, `[[credits]]` | — | — | — |

Fixed page cylinder (`data-progress`, `--p`) in the 72px left margin ≥ 1024px; a 4px yellow fill line at the top < 1024px.

## Rhythm check (METHOD §4)
- Sections: 11 (8-12) ✓. Hero `min-height: calc(100svh - var(--header-h))` under a fixed header, so the yellow band peeks by `--header-h` ✓.
- Tones: deep · signal · paper · ink · paper · mid · deep · paper · mid · ink · paper. No 3 of a category in a row; dark bands (1, 4, 7, 10) never touch ✓.
- ≥ 1 t-deep (1, 7) ✓ · colour band t-signal (2) ✓ · full-bleed `.break` (4) ✓.
- Hooks: signature (1), count (2), pour (3), runoff (6), guards (7), ledger (8) = 6 ✓.
- Layout families: filmstrip, equation, pin, break, ledger, split, columns, table, masonry, roster, form = 11, no neighbours share ✓.
- One `#contact`; every CTA is `#contact` (quote macro / data-service) or `tel:` / `sms:`; "do the gallon math" is an in-page nav link to `#tools` ✓.
- Required content: 8 services (5), area + ZIP (1, 10), hours/open-now (1, 10, 11), Sample reviews (9), prices only in the Sample ledger (8) / guards row / hero proof line with Sample tag, footer disclaimer + credits ✓.
- Signature sections: hero (filmstrip cylinders), story (draining/splitting cylinders), tools (runoff cylinder), proof (review chips), pricing (ledger rows + chips), footer (spill to barrel) ✓.

## Decisions (headless)
- Hero "Price my roof" goes to `#contact` (CTA rule); the calculator is reached by a text link "or do the gallon math" → `#tools`.
- No menu on phones: header = logo + 48px call icon; the sticky bar carries Call | Text a photo.
- The calculators are plain glue in app.js (they are not motion), so they work under reduced motion; JS off shows the 623-gal example + call.
- "insured" is never written (banned word list), only the sample licence.
- Media: kept hero-B3 (filmstrip frame) + hero-B2 (break) as planned; both exist in the approved manifest. The coordinator's hero-B1 / extra break keys were not added (media.json is only changed on a critic photo-swap request).

## Round 1
Elevate photo + firstScreen: photos became measured specimens (hero B3 inside a large graduated cylinder beside a 6-word h1 naming {{biz.city}} gutters, ledger rows tick into it, ZIP folded in as a ledger row; break B2 gets a tick scale + 312 gal level line and never starts blank; new third frame B1 as the sticky services specimen). Also: 5 eyebrows cut, h2s shortened, one CTA name "Price my roof", reviews snap rail < 640, unit column on prices, byline fix, strip pause moved to a labelled bar, area/contact gaps, entrances by role (ledger wipes, specimen fills), printable gallon sheet.
