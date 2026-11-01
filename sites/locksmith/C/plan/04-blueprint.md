# locksmith-C · Blueprint ("Hinged Door Wall")

| # | id | tone | purpose (objection / path) | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-paper | locked-out caller taps `tel:` in 5 s; planned buyer counts doors | mosaic (headline tile left, 4x2 door wall right) | kicker `{{biz.tradeLabel}} · {{biz.city}}` + `{{hours\|today}}`, h1, lead, `[[call]]`, "Count my doors", proof row (range on phone · text with tech name · ID at the door · `{{proof.rating}}` Sample rating); 5 painted doors = checkbox labels (FRONT, BACK, SIDE, GARAGE, BASEMENT) + counter tile (CSS counter works JS-off; range `{{proof.prices.2.*}}` + `{{proof.prices.3.*}}`, Sample pricing) | `hero` (C3, one duotone tile) | `data-sw-signature="door-wall"`, `data-hook="lock-counter"` | doors swing in on the hinge, 60ms cascade, h1 static |
| 2 | `#doors` services | t-light | "24 tiles of things they never do" → 8 real jobs, each a door | grid (4x2 door-cards ≥1100, 2 cols ≥640, snap row <640) | `<!-- each services -->` name, blurb, plate word, matching `[[quote]]` | — | `data-hook="door-row"` | doors open on the hinge one by one as the row enters (stack) |
| 3 | `#arrival` | t-deep | "random guy in an unmarked car", "they'll drill it", "they'll open anyone's door" | split (photo + sample text card / 3 promises) | sample arrival text with `{{biz.short}}`, `{{services.1.blurb}}` | `arrival` (process-call) | — | text rises, photo unclips |
| 4 | `#prices` | t-paper | "$29 on the phone, $300 at the door" | table (ledger of enamel rows) | `{{proof.prices.0-5.*}}`, Sample pricing tag, phone script line | — | — | quiet (no animation) |
| 5 | `#street` `.break` | t-oxblood | local story: the city's doors, full bleed | statement over a full-bleed painted door row | `{{biz.city}}`, `{{biz.areas.1}}` | drawn | — | row slides 0→-6% on scroll (parallax, motion only) |
| 6 | `#rain` | t-paper | "deadbolt sticks every November" | story (sticky diagram + 3 steps; 3 static frames <900 / reduced / JS-off) + self-check | `{{services.2.blurb}}`, checklist 3 items, `[[quote Sticky bolts]]` | drawn SVG | `data-hook="rain-story"`, `data-hook="bolt-check"` | scrub `--p` (draw) |
| 7 | `#movein` | t-accent (teal) | "who else has a key to my new house?" (PCS / closing) | checklist (8 door chips) | `{{services.0.*}}`, `{{biz.areas.1}}` | — | `data-hook="move-in"` | chips close (fill) when ticked |
| 8 | `#proof` | t-deep | "is anyone real here?" | stagger (offset door-backs, plate = town) | `<!-- each proof.reviews -->` + `{{proof.rating}}` / `{{proof.reviewCount}}`, Sample tags | — | — | text rises, stagger 60ms |
| 9 | `#area` | t-paper | "do you even come to Gig Harbor / Fife?" + open now | split (ZIP + area plates / hours board) | `{{biz.areas}}` repeater, `{{hours\|table}}`, `{{hours\|today}}`, `[[call]]` | — | `data-hook="zip"` | quiet |
| 10 | `#contact` | t-light | the one form; planned buyer path ends here | form (4 steps + call column) | services radios, locks count, ZIP, when, contact; honest thank-you | — | `data-hook="lead"` | quiet |
| — | footer | t-deep (slate back door) | close + area + disclaimer | one full-width door | plate `{{biz.short}}. One key ring.`, areas on moulds, knob = call, `{{proof.license}}` (sample), `{{demo.disclaimer}}`, `[[credits]]` | — | (signature) | — |

## Rhythm gate (checked line by line)
- 10 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`; the door wall's lower row (desktop) / the door grid (390) peeks under the fold ✓.
- Tones: light, light, dark, light, color, light, color, dark, light, light. Never 3 same in a row ✓; dark bands (#arrival, #proof) never touch ✓ (footer is not a section; #contact light sits before it).
- ≥1 t-deep (#arrival, #proof) ✓, colour bands (#street oxblood, #movein teal) ✓, `.break` (#street, full-bleed drawn door row) ✓.
- Hooks: lock-counter, door-row, rain-story, bolt-check, move-in, zip, lead (7) ✓; `data-sw-signature="door-wall"` on the hero ✓.
- Layout families: mosaic, grid, split, table, statement, story, checklist, stagger, split, form: 9 distinct, no neighbours alike ✓.
- One `#contact` ✓; every CTA is `tel:`, `sms:` or `#contact` (via `[[quote]]`) or an in-page anchor ✓.
- Required content: all 8 services (#doors + form) ✓, areas + ZIP checker (#area) ✓, hours/open-now (header, hero kicker, #area) ✓, sample reviews with Sample tag (#proof) ✓, prices only in the sample ledger + counter, both tagged ✓, footer disclaimer + credits ✓.
- Signature sections (concept.json): hero (door wall + counter), services (door-cards on hinges), rain-story (the door seen edge-on), proof (door-backs with town plates), checklist (door chips), footer (back door) ✓. Also the #street break (a row of doors).

## Decisions taken headless
- Hero plates name the visitor's doors (FRONT, BACK, SIDE, GARAGE, BASEMENT) instead of job words, because the wall is the lock counter: a tap must mean "this door has a lock". Job words (MOVE-IN, LOCKED OUT, RAIN, OLD BRASS, TURNOVER…) live on the 8 service doors. Each hero door carries a small local caption (Stadium Craftsman, Hilltop porch…).
- Services are a 4x2 grid of door-cards at desktop, not one row of 8 narrow doors: 155px doors cannot carry a blurb and a price. The row survives at <640 as a horizontal snap row.
- The counter never does dollar math (kit rule): it shows the count (CSS counter, works with JS off) and the first-lock + each-added sample ranges as tokens.
- The arrival text uses a sample tech name ("Sam") from the brief's tool 5, tagged "Sample text".
- Rain story: sticky (CSS) pin only ≥900px with motion; ScrollTrigger only reads progress. Under 900, reduced motion and JS off: 3 static frames.
- Photo C3 is captioned without a place. Alt texts are written in the source (the manifest alts name North Carolina / a photographer).

## Open issues
(none yet)
