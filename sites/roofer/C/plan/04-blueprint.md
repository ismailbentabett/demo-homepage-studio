# Blueprint — roofer-C (Hailward Roofing)

## Round 3
Elevate (motion + layout): the hero dial is now the page's single scroll engine. It turns month by month through the season bands and runs a full year across the almanac; the header pill is its miniature twin and links to the current season. #services became a 9-job × 12-month almanac table (a real table at ≥900, on the 34/4.5/12 grid that the price ledger shares; stacked month strips on phone). This replaces the card grid that was offset 72px, the empty featured card and the duplicate svc-pair. Mono is now kept for month letters and caps only, and the season labels moved to Garamond italic. Copy-3 is applied in full.

## Round 2 (reopened)
The photos are 1×1 placeholders, so the page now stands on drawn plates: the hero is a drawn almanac dial (12-month ring around a metro map with the towns as tokens, storm-cell intro, "now" marker). The month ring advances live in the header as each season band scrolls in (the motion elevate). The ground check became a drawn house sheet whose markers light per ticked sign, ending in a designed, printable verdict card (the wow elevate). The build season is a pinned sun-arc story on ≥900px. CTAs are one name: "Get a quote" (seasonal links say "Get a quote for …"). Hours come from `{{hours|*}}`, the alt-text slip is gone (the ice photo is no longer used), and the form uses the kit's fieldset steps so JS-off shows every step.

## Section list

| # | id | tone | purpose | layout family | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-dark | trade + town + both paths | stacked-headline-strip (headline + dial, season strip) | h1, lead, open-now · sample rating · years, quote + call, season index strip | — (drawn dial) | data-sw-signature="month-ring" | storm cell drifts SW→NE, towns light (≤1.2 s); h1 static |
| 2 | season-mar | t-light | "is it just a few shingles?" wind repair | split (text / drawn plate) | ring-mark MAR, services.1 | — (wind plate) | signature | text rises, plate wind lines draw |
| 3 | season-apr-jun | t-deep | "do I even have hail damage?" | tool-sheet (checklist + house drawing + verdict) | 5 signs, verdict card, print, services.0/2 | — | data-hook="storm-check", signature | text rises, house draws |
| 4 | note | t-paper | storm-chaser fear | statement | full 12-month ring, statement h2 | — | — | still (quiet) |
| 5 | break | t-dark | breath, heat season opens | full-bleed break | drawn sun + horizon over photo | break | — | photo parallax |
| 6 | season-jul-aug | t-light | "what should go on next?" | split-reverse (compare / text) | drawn cross-sections, sample ranges | — | data-hook="compare", signature | compare unclips |
| 7 | season-sep-oct | t-paper | replacement day, cleanup fear | timeline story (sun arc, 4 steps) | services.5, 4 steps | none (drawn step vignettes; placeholder photos removed) | data-hook="build-day", signature | pinned sun story ≥900, clip cards on phone |
| 8 | season-nov-feb | t-deep | ice + limbs + leaks | split (text / ice plate) | services.4/6/2 | — (ice plate) | signature | text rises |
| 9 | services | t-light | every service + area, when to call | almanac table (9 jobs × 12 months) + ZIP aside | 9 rows with prime-month bars, quote per row, ZIP | — | data-hook="almanac", data-hook="zip", signature | scroll needle sweeps the year (≥900) |
| 10 | proof | t-accent | "roughly what does it cost?" | ledger | prices repeater, license, insured, guarantee | — | — | rows rise |
| 11 | reviews | t-paper | social proof by season | mosaic (1 large + 2) | reviews 0,1,2 | — | signature | stagger |
| 12 | contact | t-dark | the form | two-column form | open-now, hours table, form | — | data-hook="form" | still |
| — | footer | t-light | area, disclaimer, credits | footer | areas, ZIPs, disclaimer, credits | — | signature | — |

## Rhythm check
- 12 sections + footer. Hero `calc(100svh - var(--header-h))`; the season strip sits at its bottom edge and the next band peeks.
- Tones: dark · light · deep · paper · dark · light · paper · deep · light · accent · paper · dark · light. No 3 alike in a row; no two dark bands touch (deep→paper→dark, dark→light).
- t-deep ×2, color band (proof, t-accent), full-bleed `.break` ×1.
- Hooks: storm-check, compare, build-day, zip, form + data-sw-signature (8 places).
- Families: strip, split, tool-sheet, statement, break, split-reverse, timeline, split, index grid, ledger, mosaic, form. No neighbours alike.
- One `#contact`; every CTA → `#contact` or `tel:`.
- Required content: 9 services (index), ZIP + areas (index + footer), hours/open-now (hero + contact), sample reviews (tag), sample prices (tag), footer disclaimer + credits.
- Signature in hero, season-mar, season-apr-jun, season-jul-aug, season-sep-oct, season-nov-feb, reviews, footer.

## Open issues
- Photos are 1×1 placeholders; frames are duotoned over the slate so real photos drop in with one grade.
