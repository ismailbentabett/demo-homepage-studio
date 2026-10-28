# fencedeck-B · Blueprint (Tallyboard, "Count it before you pay for it.")

## Round 1
Photo + firstScreen elevate: the page now runs plan → build → result as two stamped, counted photo plates from the approved library only (01 the finished deck as the hero tile beside the joist plan, 02 fence boards in #materials); the draft lumber archive photo is gone, h1 names {{biz.city}} decks and fences, hero shortened so the counter band peeks; one CTA name (Count my deck), ghost posts + shorter pin, stamped permit result, mono caps cut from the hero tiles.


| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-paper | 10-s answer: a countable deck; Count my deck / Call | mosaic | kicker {{biz.tradeLabel}} · {{biz.city}}, h1, lead, CTAs, proof line {{hours\|today}} · {{proof.rating}} / {{proof.reviewCount}} [Sample] · {{proof.prices.0.from}} {{proof.prices.0.unit}} [Sample]; mosaic = photo + joist plan (10 joists, tallied) + post-below-frost section + hidden-clip section; stamp TB·DEN·01 COUNT FIRST | hero (hero-B2) | `data-sw-signature="tally"` (joist tally) | h1 line mask (split), joists draw 40ms stagger, tally 1-2-3-4 then slash ≈900ms |
| 2 | `#counter` | t-light | "Lump sum hides corners" → board counter; path → form prefill | split (inputs · live plan · sticky tally card) | W, D, joist spacing, material; sq ft, boards, joists as tally strips; range {{proof.prices.2.*}} / {{proof.prices.3.*}} [Sample]; stamp TB·DEN·02 DECK TAKEOFF; review quote Rachel B. lives in #proof | drawn plan (SVG, JS) | `data-hook="counter"` | stamp thunk; tally strips redraw on input |
| 3 | `#services` | t-mid | every service, wobbly railing / sagging gate answered in the row | list (bill-of-materials ledger, 2 columns Deck / Fence) | `<!-- each services 0:4 -->`, `4:8`, `[[quote {{.short}}]]` | none | — | rows stagger (text rise) |
| 4 | `#posts` | t-deep | "Posts will heave / lean" → freeze-thaw story | story (pinned ≥900, stacked < 900) | 4 steps, elevation 5 posts at 8 ft, frost line, tally per post; stamp TB·DEN·03 POST BELOW FROST | drawn elevation | `data-hook="posts"` | scrub `--sw-p` / class per post (pinned ≥900); draw-in on view under 900 |
| 5 | `#materials` | t-paper | "Hail and UV will wreck it" → material compare | grid (4 material columns table) | treated / cedar / composite / PVC: upkeep, hail, UV, look; upkeep range → marks fits; hand-off to form `material`; stamp TB·DEN·04 HAIL + UV | 4 swatch chips (drawn) | `data-hook="materials"` | quiet (no reveal on table) |
| 6 | `#ledger` `.break` | t-accent | "Rot where the deck meets the house" → ledger flashing | statement (full-bleed drawing band) | h2, ledger detail drawing, Omar H. review {{proof.reviews.3.*}} [Sample] | drawn ledger section | — | drawing unclips (clip reveal) |
| 7 | `#permit` | t-light | "City will reject it" → permit checklist + 811 | split (checklist left, answer card right) | 4 checks, hedged result; stamp TB·DEN·05 PERMIT CHECK | none | `data-hook="permit"` | text rise |
| 8 | `#reviews` | t-paper | proof: sample reviews, stamped | rail (featured + 3×2 grid) | {{proof.rating}}, {{proof.reviewCount}} as tally block (JS from count), `<!-- each proof.reviews -->` [Sample review] | none | `data-hook="tallyblock"` | tally block draws once; cards stagger |
| 9 | `#prices` | t-mid | "price hidden until consultation" → 5 sample ranges | table (takeoff rows + count column) | `<!-- each proof.prices -->` [Sample pricing], stamp TB·DEN·06 SAMPLE PRICES | none | — | row stagger |
| 10 | `#contact` | t-paper | the one form + area + ZIP + hours | form (form card right, takeoff/area column left) | phone, {{hours\|table}}, {{hours\|today}}, {{biz.areas\|list}}, ZIP checker, 4-step form with tally step marker, takeoff card from counter | none | `data-hook="zip"`, `data-hook="form"` | none (quiet) |
| — | footer | t-deep | close: page tally + {{proof.license}} stamp (sample), disclaimer, credits | footer | {{demo.disclaimer}}, [[credits]] | — | — | — |

Mobile bar (< 900): Call | Text | Count (t-deep, 56px + safe area).

## Rhythm gate check
- Sections: 10 (hero → contact). Hero `min-height: calc(100svh - var(--header-h))`; at 1440×900 the mosaic ends ~40px above the fold edge so #counter's top rule + stamp peek in. ✓
- Tones: L L M D L C L L M L. No 3 same category in a row (L,L,M · M,D,L · L,C,L · L,L,M · M,L). No dark touching (one dark section; footer is deep but follows paper). ✓
- ≥1 t-deep (#posts), ≥1 colour band (#ledger t-accent), ≥1 full-bleed `.break` (#ledger). ✓
- Hooks: signature (hero tally) + counter, posts, materials, permit, tallyblock, zip, form = 8. ✓
- Layout families: mosaic, split, list, story, grid, statement, split, rail, table, form = 9 families; neighbours never equal. ✓
- One `#contact`; every CTA is `#counter` (tool, which hands off to #contact), `#contact`, `tel:` or `sms:`. ✓
- Required: all 8 services (#services), area + ZIP (#contact), hours + open-now (hero + #contact), sample reviews (#reviews, #ledger), prices only in #prices + counter range (all Sample-tagged), footer disclaimer + credits. ✓
- Signature in concept.json sections: hero ✓ (joist tally), counter ✓ (tally strips + card), story ✓ (#posts post tally), proof ✓ (stamped reviews + tally block), prices ✓ (stamps per row), form ✓ (tally step marker + COUNTED stamp), footer ✓ (page tally + sample licence stamp).

## Decisions taken headless
- The kit `compare` is a two-image slider; the material compare is a 4-column table with an upkeep range written in app.js (works as a plain table without JS).
- The board counter is app.js (kit estimator never counts); without JS it shows the default 16 × 12 ft result and the call button.
- Stair, gate and screw counts are left out of the counter (not derivable honestly from W × D).
- Area + ZIP live inside #contact (beside the form) so a "yes" fills the form a few pixels away; keeps the page at 10 sections.

## Open issues
(none yet)
