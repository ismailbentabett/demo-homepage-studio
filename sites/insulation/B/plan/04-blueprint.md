# insulation-B · Stage 4 blueprint (fast)

Every section carries the signature in a 72px left rail on desktop (finding tag + stapled ruler), a horizontal ruler strip above the h2 under 900px.

| # | id | tone | purpose (objection or path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` | t-paper | first 5 s: call, or read your attic depth | plate (offset framed photo + drawn attic cut) | kicker {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}; h1; lead; [[call]] + "Read your attic depth" → #ruler; proof line {{hours\|today}} · {{biz.areas.0}}-{{biz.areas.2}} · {{proof.rating}} / {{proof.reviewCount}} [[sample rating]] | hero-B3 (eager, once) | `data-hook="hero-rulers"` + `data-sw-signature` | h1 line mask; plate drops 8px; six rulers fill bottom-up 60ms stagger, the 1-in one flips orange (≤ 1.1 s) |
| 2 | `#depth` | t-mid | "how do I know what I have / need?" F-01 Depth | pin-story (big ruler + attic section, 4 steps) | 3.5 → 10 → 14 → 17 in, R about ×3 typical, dashed R-49 / R-60 lines | none (drawn) | `data-hook="depth-story"` | scrubbed fill (≥ 640, sticky stage); stacked cards under 640 |
| 3 | `#leaks` | t-paper | "they'll blow fluff on top and leave" F-02 seal first | split-log (statement left, seal log table right) | {{services.2.name}} / {{services.2.blurb}}, seal order | none | – | text rises; log rows stagger |
| 4 | `#vents` | t-deep `.break` | "they'll cover the vents" F-03 Ventilation | fullbleed drawing (ranch attic cross-section SVG) | baffles, soffit air, {{services.7.name}} | none (drawn) | – | quiet (drawing static) |
| 5 | `#services` | t-paper | "they'll sell me foam for the whole house" F-04 line items | ledger (2-col rows, mini ruler variants) | `<!-- each services -->` name, blurb, [[quote]] | none | – | rows stagger |
| 6 | `#ruler` | t-light | tool: read your own depth F-05 | tool-split (flat ruler slider + reading panel) | R range ×2.5-3.7, target R-49/R-60 typical, hand-off to form | none | `data-hook="attic-ruler"` | none (tool) |
| 7 | `#pebbles` | t-accent | "is that gravel asbestos?" F-06 vermiculite | band-quiz (3 checks + stopped ruler) | {{services.5.name}} / blurb, call | none | `data-hook="vermiculite-check"` | quiet |
| 8 | `#notes` | t-paper | "do people like them?" F-07 homeowner notes | notes (lead note 2-wide + 5 clipped notes) | `<!-- each proof.reviews -->` [[sample review]], {{proof.rating}} | none | – | notes stagger |
| 9 | `#prices` | t-deep | "no price clue" F-08 price range builder | receipt (text left, tick receipt right) | `<!-- each proof.prices -->` [[sample pricing]], summed range | none | `data-hook="price-builder"` | none (tool) |
| 10 | `#contact` | t-paper | visit steps + ZIP + form F-09 | form-split (steps + ZIP left, form card right) | ZIP checker {{biz.zips}}, {{hours\|today}}, 4-step form, step 4 ruler header | none | `data-hook="zip"` | none |
| – | footer | t-deep | sign-off | flat ruler 0-20 + sign-off block | {{biz.*}}, {{hours\|table}}, {{proof.license}} (sample), {{proof.guarantee}} (sample), {{demo.disclaimer}}, [[credits]] | – | – | – |

## Rhythm check (METHOD §4)
- Sections: 10 (8-12) ✔. Hero `min-height: calc(100svh - var(--header-h))`, #depth (t-mid) peeks ✔.
- Tones: paper · mid · paper · deep · paper · light · accent · paper · deep · paper → footer deep. No 3 same category in a row (paper+light are 2, then accent) ✔. No two dark sections touch (deep #4 between papers, deep #9 between papers, footer after paper #10) ✔.
- ≥ 1 t-deep (2) ✔, ≥ 1 colour band (#pebbles t-accent) ✔, full-bleed `.break` (#vents) ✔.
- Hooks: hero-rulers (signature), depth-story, attic-ruler, vermiculite-check, price-builder, zip = 6 ✔.
- Layout families: 10 different, no neighbours alike ✔.
- One `#contact` ✔; every CTA = tel:, sms:, #contact (prefill) or #ruler (in-page tool) ✔.
- Required content: every service (repeater in #services + form radios) ✔; area + ZIP checker (#contact) ✔; hours/open-now (hero proof line, contact, footer table) ✔; sample reviews (#notes, Sample tag) ✔; prices only via sample price builder ✔; footer disclaimer + credits ✔.
- Signature in concept sections: hero (six rulers), story (big ruler), services (mini rulers), proof (ruler stubs), tool (flat ruler slider), form (step-4 ruler "your depth"), footer (flat sign-off ruler) ✔ + rails everywhere.

## Decisions (headless)
- Finding numbers run in page order F-01..F-09 (strategy draft numbered F-02..F-06 differently); the order of the page wins.
- Vermiculite check uses kit `checklist` (3 ticks with a live result) instead of `tabs`: a yes/no self-check reads better as ticks.
- Hero intro is CSS (clip reveal of each fill), app.js only drives the story, the attic ruler, the price sum and the form ruler.
- Price sum: app.js parses facts.proof.prices and reuses the currency prefix from the facts string (no `$` typed in src).
- Pin: CSS sticky stage inside a tall section, only `@media (min-width:640px)` under `.sw-motion`; GSAP ScrollTrigger scrub inside `matchMedia('(min-width: 640px)')`.

- Hero phone crop is 5:4 (object-position 78% 50%), desktop 3:2 at 72% 50%: never tighter than 140% of the source.
- Price receipt lines sit in a div role="group" (not a fieldset) so the Sample pricing tag counts as adjacent.

## Open issues
(none)
