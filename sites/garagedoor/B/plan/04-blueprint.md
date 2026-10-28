# garagedoor-B · Blueprint

| # id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 `#top` hero | t-paper (+ zinc drawing half) | "What broke? Is it safe?" Answer before pitch → Call | `split` (50/50, plate crosses the seam) | kicker tradeLabel·city, h1, lead, symptom finder (sound × door), XL plate (part / urgency / sample range from proof.prices / safe to lift), Call + quote, proof line hours·city·rating[Sample] | SVG drawing of the torsion assembly (no photo) | `data-sw-signature="plate"`, `data-hook="finder"` | odometer digits roll + needle sweep (≤ 1 s), h1 readable at first paint |
| 2 `#story` | t-deep | "Why did it bang? Trip fee then a 2nd visit?" spring life + measured-before-quote + don't-lift | `pin-story` | 4 steps: 0 / ~5,000 / 8,000 measured / 10,000 broken; plate counter; proof.prices.0 [Sample]; Call | SVG spring drawn edge to edge (pattern coil) | `data-hook="spring-story"` | pinned ≥ 900 (sticky, scrubbed `--sw-p`), stacked < 900 |
| 3 `#services` | t-paper | "Do they fix *my* thing?" all 11 services | `plate-grid` (asymmetric: spring plate 2×, won't-open plate as hazard strip) | repeater `services`: short, name, blurb, serial `S-{{#2}}`, "measured on site" fill-in, Price it | 11 drawn part icons (sprite) | `data-hook="service-plates"` | stagger rise |
| 4 `#parts-sheet` | t-mid (zinc) | "Call for price" fear | `ledger` | repeater `proof.prices` as riveted ledger rows (item ··· from–to, note), [[sample pricing]], proof.guarantee [Sample], Call | — | — | rows clip down |
| 5 `#repair-or-replace` | t-stamp (blue band) | "$300 spring becomes a $4,000 door" | `tool-split` | 4 inputs (age, sections, insulation, this year's repair) → verdict + two plates side by side (repair items vs prices.4), Ken L. review [Sample], "Get both numbers in writing" → form | — | `data-hook="ror"` | none (tool, quiet) |
| 6 `#salt` `.break` | t-deep | Cleveland salt / bottom section | `break` (full bleed drawing) | statement, prices.2 [Sample], Yvette H. review [Sample], Price it | SVG bottom section with rust hatching + salt line | `data-hook="salt-line"` | rust band draws on |
| 7 `#warmer` | t-paper | "Will an insulated door be warmer?" | `compare` | current door × room above → relative bars (no invented R numbers), comfort + noise lines, Sam D. review [Sample], Ask for door options | — | `data-hook="rvalue"` | bars grow on input |
| 8 `#proof` | t-mid | "Are they real people?" | `readings` (aggregate plate left, offset reading plates) | rating/reviewCount [Sample rating] + meter, reviews 0,1,5,6 as reading plates [Sample review] | — | — | stagger rise |
| 9 `#area` | t-paper | "Do you come to Parma / Euclid?" + hours | `map-zip` | repeater biz.areas as stamped town plate, ZIP checker, hours table + open-now | — | `data-hook="zip"` | none |
| 10 `#contact` | t-deep | the one form | `form` | 4-step form, phone, text a photo, hours today, microcopy | — | — | none |
| footer | t-mid nameplate | company maker plate | — | name, tradeLabel, licence [sample], insured [sample], years [sample], hours, phone, email, disclaimer, credits | — | (plate) | — |

## Rhythm gate check
- 10 sections (8-12 ✓). Hero `min-height: calc(100svh - var(--header-h))`; story band's top edge peeks at 1440×900.
- Tone categories: light · dark · light · mid · color · dark · light · mid · light · dark → never 3 alike in a row ✓, no two darks touching (story↔services, stamp↔break are color→dark, contact is after paper) ✓.
- `t-deep` ×3 ✓, colour band `t-stamp` ✓, full-bleed `.break` (#salt) ✓.
- Hooks: signature plate, finder, spring-story, service-plates, ror, salt-line, rvalue, zip (8 ≥ 3) ✓.
- Layout families: 10 distinct, no neighbours alike ✓.
- One `#contact`; every CTA is `#contact`, a `[[quote]]` (→ #contact) or `tel:` / `sms:` ✓.
- Required content: all 11 services (repeater), area + ZIP checker, hours + open-now, sample reviews with Sample tags, prices only via the parts sheet / tools with Sample tags, footer with `{{demo.disclaimer}}` + `[[credits]]` ✓.
- Signature in hero, story, services, parts-sheet, proof, footer (concept.json list) ✓ plus tools and area as extras.
- Margin serials CC-01…CC-10 in a 72px gutter ≥ 1280px.

## Decisions (headless)
- Form is 4 steps (contract) not the concept's 5: step 2 merges "car stuck inside?" with door size, ZIP and details.
- R-value compare and repair-or-replace are custom app.js logic (the kit `compare` is an image slider); no dollar math, only facts ranges.
- `ogPhoto` omitted: no slot exists; the build falls back to a manifest frame for the OG card only (not on the page).
- Pin is CSS sticky toggled by JS inside `ScrollTrigger.matchMedia('(min-width: 900px)')`; ScrollTrigger only scrubs `--sw-p`.

## Open issues
(none yet)

## Round 1
Elevate photo + firstScreen: the newly approved finished-dark-door now sits at the top of the hero panel as the photo twin of the drawing ("Photograph … from the drive" / "Drawing · the same kind of door, from inside"). finished-carriage anchors #repair-or-replace. The h1 now opens with a stamped "Garage door repair, {{biz.city}}." line. At 390 the reading plate (compact) sits right under the chips. The hero is 64px shorter at ≥1100 so the story band shows.
Fixes: `.svc__go` is 48px. 11 hand-tokenised plates show their real reading (a price where facts has one, otherwise what gets checked) and S-01 carries a spec block. Under 640 the services are a scroll-snap rail. All quote actions are "Price it" / "Price both". Warm and area are flipped (plate left). The review is inside the insulation plate. The footer nameplate uses nowrap values, short labels and a full-width email row. Chips are sentence case, untracked, 15px. The plate hover-lift is removed, and the hero "Reading" is an aria-labelled aside instead of an h2.
