# autobody-B · Blueprint

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#hero` | t-paper | "Do I need paint or just a polish?" → call / text photos | `split` (50/50, readout straddles the seam) | kicker {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}; h1; sorter (tabs: dull / chalky / peeling / bare → fix, sample reading, {{proof.prices.1/5/0}}); [[call]] + sms; proof line {{hours\|today}} · {{proof.rating}} / {{proof.reviewCount}} [[sample rating]] · you choose the shop | none (drawn cross-section: probe, sun, 4 films) | `data-sw-signature` (hero readout), `data-hook="sorter"` | h1 line mask; readout counts 0.0 → 4.4, films fill bottom-up |
| 2 | `#story` | t-deep | "Will you buff through my clear?" | `story` (pinned ≥ 900, `calc(4*55svh+100svh)`) | 4 sample readings 4.6 → 3.6 → 3.4 → 3.4 + coat; gloss bar | none (big hood strata drawing) | `data-hook="story"`, `data-sw-signature` | verb **count**: readout counts, clear film eases with `--sw-p`; < 900 stacked cards, clip reveal |
| 3 | `#services` | t-paper | every service, priced by row | `sheet` (ruled test sheet, reading column left) | {{services.0-9.name/blurb}}; row readouts (mils, 41 mapped, per dent, yellowed → clear, 8 mo beading) | none | `data-sw-signature` (row readouts) | rows rise, stagger 60ms |
| 4 | `#dent` | t-sand | "Is this dent paintless?" | `tool` (inputs left, contour drawing right) | size / cracked / edge → likely paintless {{proof.prices.3.from}}–{{proof.prices.3.to}} [[sample pricing]] or body + paint | none (dent contour map) | `data-hook="dent"` | drawing unclips |
| 5 | `#claim` | t-accent | "Does insurance make me use their shop?" / "$1,400 → $4,000?" | `path` (tabs over a drawn vertical path) | 4 situations × steps with who acts (you / insurer / shop); step 0 "you choose the shop"; sms + Price it | none | `data-hook="claim"` | verb **draw**: path line draws down, step ticks print |
| 6 | `#match` | t-paper `.break` | "Will the new paint match?" | `break` (full-bleed spray-out strip) | {{proof.guarantee}} [[sample promise]]; 3 match steps | none (7 spray-out cards edge to edge) | — | still (quiet) |
| 7 | `#proof` | t-light | trust: neighbours' numbers | `ledger` (1 featured + 6 rows) | {{proof.reviews.0-6.*}} [[sample review]]; {{proof.rating}} [[sample rating]] | none | `data-sw-signature` (review numbers) | text rises |
| 8 | `#prices` | t-deep | "What does it cost?" | `tape` (price list printed as a gauge tape) | {{proof.prices.0-5.*}} [[sample pricing]] | none | `data-hook="tape"`, `data-sw-signature` | tape segments draw left → right |
| 9 | `#area` | t-sand | "Do you come to my side of town?" + hours | `area` (ZIP left, hours card right) | {{biz.areas\|list}}, ZIP check, {{hours\|table}}, {{hours\|today}} | none | `data-zip` | text rises |
| 10 | `#contact` | t-paper | the one form | `form` (4-step form + phone column) | service radios (repeater), condition, ZIP, when, name/phone | none | `form[data-lead]` | still |
| — | footer | t-deep | footer | — | readout = live open-now, {{demo.disclaimer}}, [[credits]], {{proof.license}} (sample) | — | `data-sw-signature` | — |

## Rhythm check
- Sections: 10 (hero + 9). Hero `min-height: calc(100svh - var(--header-h))`; the deep story band peeks below it. ✔
- Tones: paper · deep · paper · sand · accent · paper · light · deep · sand · paper. Categories L D L C C L L D C L: never 3 alike in a row; the two deep bands (2, 8) never touch; footer (deep) follows paper. ✔
- ≥ 1 `t-deep` (story, prices) ✔ · colour bands (sand ×2, accent) ✔ · full-bleed `.break` = #match ✔
- Hooks: sorter, story, dent, claim, tape + `data-sw-signature` on hero, story, services, proof, prices, footer ✔
- Layout families: 10 different, no neighbours alike ✔
- One `#contact`; every CTA is `#contact`, `tel:` or `sms:` ✔
- Required content: all 10 services (sheet), area + ZIP checker, hours + open-now (area + footer), sample reviews (proof), prices only in the sorter (sample) and the price tape (sample), footer with {{demo.disclaimer}} + [[credits]] ✔
- Signature in every `concept.json.signature.sections`: hero, story, services, proof, prices, footer ✔ (plus dent and claim readouts)

## Decisions taken headless
- **No photos in round 0** (library still downloading): the hero right half is the drawn cross-section at 1:400 (03-system allows it). `ogPhoto` omitted until the fix round.
- **Claim path shows no day counts.** Days per step are not in facts.json; the steps say who acts and that the days are written on your sheet. The readout counts steps instead.
- Hero default state = Dull (4.4 mils), so the intro counts 0.0 → 4.4; the story starts at the 4.6 factory reading.
- Pin at ≥ 900 (inside `matchMedia`, so never < 640), via a sticky stage + ScrollTrigger scrub.
- Dent check: own glue in app.js (three radio groups → two result blocks written in HTML with tokens). JS off: both results show as rules.

## Build notes (round 0)
- Review 2 (Efrain G.) is not shown: its text contains a banned phrase (before/after). The ledger shows 5 reviews.
- Tape rows omit the unit: not every price fact has one. Units appear in the hero panel and the dent result where the fact exists.
- The sorter panel headings are h2s: they sit under the h1, and the tab panels come before the story h2.
- No photos: the cross-section, light board and match cards are drawn. Photos come in the fix round (see 05-media.md).

## Round 1
Elevate photo + first screen: three approved frames under one cool grade (hero = blue gloss hood with the probe crosshair, readout and a magnified strata inset over it; booth = red finished panel behind red spray-out cards; sun = El Paso noon frame with a UV LCD tag in #area). The h1 now names the city ("Sun-peeled paint in {{biz.city}}?"), and the hero is 100svh − header − 80px so the story band peeks. Shoulds: story pin cut to 3×45svh+100svh; dent board sticky and square; dent verdict printed as an LCD readout; swatch radius 0; mono caps cut (SVG headers gone, strata labels in Public Sans, sentence case); 01–04 numbering removed; hero panel headings are now p; service blurbs fold into a disclosure on phones (open with JS off); "Price it" is now "Send the paint"; a probe-touch re-count on row hover.
