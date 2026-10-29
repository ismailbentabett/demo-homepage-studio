# windowdoor-C · Blueprint (11 sections + header/footer)

## Round 1
Re-cut the hero (h1 now carries the outcome, beside one large drawn 6-over-1 whose lower sash lifts on load, with the photo seen through it as Stop 1, route stub leaving the sill, marquee as a riverbank on paper), and made the oak break a window-shaped clip that widens to full bleed with scroll (--bp). Both photos now share one cool `.grade`. Why: the two weakest categories were photo (8.0) and first screen (8.5). Also: US spelling, the header pill stays outline until the hero leaves, 5 of 9 eyebrows cut, services numerals dropped, the #area hours card replaced by a ZIP answer panel, a checklist default verdict drawn with Restore/Replace elevations, a scale-contrast #repair h2, and fewer tracked caps. Hero family stays a statement-led hero in concept.json (the text still leads, the window is the second column).


Media rev (curator, 2026-10-28): hero-C1 dropped (readable real-house marker). Hero photo = hero-C1-2 (white bungalow under
a live oak) as the hero "riverbank" band under the statement, behind the elevation marquee. Break = oak-canopy-street.
door-hardware is sibling B's. The river is drawn SVG (no river photo exists). Photos keep colour with one cool grade
(they are Florida frames now; the cyanotype duotone was only there to hide Michigan foliage), noted as a deviation.
Brick #A63A2B for shapes (dots, buttons, rules) on light tones; text accents on dark tones in sand #F2C9A0 / coral #E07A5F.
Kit estimator is single-item (it never sums dollars), so the "count" estimator becomes: pick the product + how many
openings (level) → the sample from–to per opening + a sketch row of elevation glyphs that grows with the count.

| # | id | tone | purpose (objection or path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 0 | header | t-paper | phone 1 tap | bar | {{biz.initials}} ring, {{biz.short}}, anchors, tel icon, Price it | — | data-header, data-menu-btn, data-menu | none |
| 1 | #top | t-paper | first 5 s: call / text a photo | statement (centered) + marquee bank | kicker {{biz.city}}, {{biz.state}}; h1 "Every {{biz.city}} window, Riverside to the Beaches."; call {{biz.phone}}; sms; {{proof.rating}} + sample tag; {{hours\|today}} | hero | data-split, data-marquee, data-route-intro (signature) | h1 line-mask, route stub draws, marquee eases in |
| 2 | #stops | t-mid | "my house is different" / they'll rip out wood windows | route (gutter line + stacked stops) | 5 stops; {{services.0/5/7/6/1/3/2/4.blurb}}; [[quote]] per stop | — | **data-sw-signature**, data-stop ×5 | line scrubs, dot fills, sash lifts |
| 3 | #repair | t-deep | repair before replace | split 5/7 | {{proof.guarantee}}; checklist 6; {{proof.prices.3/4/0.from–to}} [[sample pricing]] | — | data-checklist, data-service | text rise |
| 4 | #services | t-paper | every service | grid 4×2 | each services (name, blurb, short) | — | data-reveal-stagger, data-service | stagger 60ms |
| 5 | #age | t-band | what fits my house's age | tabs (mini river) | 6 decades, process statements | — | data-tabs (signature: dot slides on mini river) | dot slide 520ms |
| 6 | #prices | t-paper | price goes up later / compare quotes | ledger list + estimator | each proof.prices (item/from/to/unit/note) + glyph; estimator | — | data-estimator, data-est-sketch (signature glyphs) | rows rise |
| 7 | break | photo | tempo change, place | full-bleed `.break` | caption plate | oaks | data-reveal="clip" | clip unveil |
| 8 | #reviews | t-mid | proof by neighbourhood | rail (horizontal reach) | each proof.reviews + [[sample review]]; {{proof.rating}}/{{proof.reviewCount}} | — | data-carousel (signature: reach line with town dots) | none (quiet) |
| 9 | #area | t-deep | do you come to my side of town + hours | map strip + 2-col | each biz.areas as river stops; data-zip; {{hours\|table}}; {{hours\|today}} | — | data-zip, data-open-now | dots stagger |
| 10 | #faq | t-paper | permits, district review, lead time (hedged) | list (accordion) | 5 Q&A, process statements | — | data-accordion | none (still) |
| 11 | #contact | t-mid | the one form | split 5/7 | call, sms, {{hours\|today}}, form 4 steps, each services | — | form[data-lead], data-mobilebar-hide | none |
| 12 | footer | t-band | areas, credits, disclaimer | river mouth | {{biz.name}}, {{proof.license}} (sample), tel/sms/mailto, each biz.areas, [[credits]], {{demo.disclaimer}} | — | river mouth SVG (signature) | none |

## Rhythm gate (METHOD §4)
- Sections in `<main>`: 11 (hero, stops, repair, services, age, prices, break, reviews, area, faq, contact). ✔ 8-12.
- Hero `min-height: calc(100svh - var(--header-h))`, the #stops band (t-mid) peeks under the marquee bank. ✔
- Tone run: paper · mid · deep · paper · band · paper · photo · mid · deep · paper · mid · band(footer). No 3 alike in a row;
  dark (deep/band/photo) always separated by a light band. ✔
- ≥1 t-deep (#repair, #area) ✔; colour band (#age t-band, footer) ✔; full-bleed `.break` (oaks) ✔.
- Hooks ≥3: data-sw-signature (#stops), data-marquee, data-checklist, data-tabs, data-estimator, data-carousel, data-zip,
  data-accordion, form[data-lead]. ✔
- Layout families: statement, route, split, grid, tabs, ledger, break, rail, map, list, split, river-mouth: neighbours never share. ✔
- Exactly one `#contact`; every CTA is `#contact` (via data-service/[[quote]]), `tel:` or `sms:`. ✔
- Required content: 8 services (repeater), area list + ZIP checker (#area), hours + open-now (hero, #area, #contact), sample
  reviews with tag (#reviews), prices only in the sample ledger/estimator, footer disclaimer + credits. ✔
- Signature sections (concept.json): hero (route stub + elevation bank), stops (full route + lifting sashes), tool-style
  (#age mini river), proof (#reviews reach with town dots), prices (row glyphs + mile dots), footer (river mouth). ✔

## Open issues
(none yet)
