# drywall-A · Blueprint (Knife & Hawk)

## Round 1
Layout + a11y elevate: seams now carry a drawn knife ridge that thins band by band to the flat pass-line at the form, the services left column is a drawn rough wall with the knife parked on its skimmed top (rows light their damage mark), and the coats story marks state by material (rough board = not yet, primer = passed, white + accent rule = now) instead of faded ink; plus the critique shoulds and copy-1 replacements.


| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-board | "Will I still see the patch?" → call / Price my patch | hero-offset-frame (fam. 5) | kicker tradeLabel·city,state; h1; lead; [[call]] + #sizer; proof line hours|today · city→areas.6 · rating (Sample) | hero (hero-A1) in square-cut patch frame ≤520px | data-sw-signature (intro knife pass: ghost word "Three coats." smoothed, patch frame feathered) | intro pass 0.9s, h1 static |
| 2 | services | t-paper | "Do they do my kind of hole?" | ruled-index (sticky heading + 8 rows) | services repeater name/blurb/[[quote]] | — | — | rows rise, stagger |
| 3 | coats | t-skim | "Why three visits for one hole?" | pinned-story (sticky ≥640, stacked <640) | 4 steps: cut+back, tape, coats 1-3, sand+prime; drawn wall panel | story-1 (video-1) in step 3 | data-hook="coats" (blade crosses panel each step) | scrubbed wipe |
| 4 | break | t-deep | breath + thesis line "Three coats. Dry between each." | full-bleed `.break` | one line on paper chip, caption | break (hero-A2) | data-hook="skim" (skim stripe scrubbed across the photo) | scrub |
| 5 | sizer | t-paper | "What will a fist-size hole cost?" | split-tool (sizer left, ruled ledger right) | proof.prices repeater + [[sample pricing]], estimator | — | data-estimator, data-hook="ledger" (rows skimmed 60ms stagger) | row skim |
| 6 | texture | t-skim | "My texture won't match" | swatch-tabs (big swatch + 4 chips) | 4 drawn swatches, test-board note, review Tom H. (proof.reviews.3) | — | data-tabs, data-hook="texture" | none (quiet, interactive) |
| 7 | proof | t-paper | "Small job ignored / price changes" | offset test-board grid (1 big + 3 offset) | proof.rating/reviewCount + reviews 0,1,2,4 + guarantee (Sample) | — | data-hook="boards" (hover pass) | boards rise |
| 8 | timer | t-accent | "Fix now or wait for spring?" | centered-console | crack & nail-pop timer (custom), static rules list for JS-off | — | data-hook="timer" | none |
| 9 | area | t-paper | "Do they come to Camp Hill?" | split-schedule (areas set big + ZIP + hours) | biz.areas repeater, [data-zip], hours|table, hours|today | — | data-zip | rise |
| 10 | contact | t-light | final coat: the form | form-stage (aside + 4-step form) | form steps, [[call]], hours|today, thank-you | — | form[data-lead] | none |
| — | footer | t-deep | close | last pass line + nav | "Primed. Ready for your painter.", disclaimer, licence (sample), [[credits]] | — | final pass line | line draws |

## Rhythm gate
- 10 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`, services band peeks ✓.
- Tone cats: color, light, color, dark, light, color, light, color, light, light → never 3 alike, no dark touching ✓.
- ≥1 t-deep (break) ✓, colour band (t-accent timer; t-board/t-skim count as colour) ✓, full-bleed `.break` ✓.
- Hooks: signature(hero), coats, skim, ledger, texture, boards, timer ✓ (≥3).
- Layout families: 10 distinct, no neighbours share ✓.
- One `#contact`; every CTA → #contact, #sizer or tel:/sms: ✓.
- Required: all 8 services (repeater), area + ZIP, hours/open-now, sample reviews (Sample tag), prices only via ledger/estimator (Sample), footer disclaimer + credits ✓.
- Signature sections: hero (intro pass), coats (blade per step), sizer/ledger (rows skimmed), proof (hover pass on boards), contact (smoothest surface, seam amp 0 + pass line above form), footer (final pass line) ✓. Every band top edge is a feathered knife seam, amplitude 14 → 0 down the page.

## Decisions (headless)
- Tone does not step monotonically gray → white (the rhythm gate forbids 3 "colour" tones in a row); the seam amplitude carries the "smoother every band" story instead, and the page still starts on board gray and ends on #FFF.
- Feather edges are CSS `clip-path` polygons, not SVG mask URLs (an SVG data-URI needs an http namespace the build refuses).
- Form is 4 steps (contract): problem → size & surface → timing → contact.
- hero-A2 is the only break photo; no other photos exist, everything else is drawn.

## Open issues
(none yet)
