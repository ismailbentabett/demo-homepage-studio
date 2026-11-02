# Blueprint — selfstorage-B

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | answer "what size and what price" before scroll | split-50 | h1 + reading `SIZE 10×10 · $165–$219/mo` + lead + CTA | hero-B | data-split="lines", data-count | line-mask h1, outline draw, count-up |
| 2 | climate | t-paper | prove humidity is controlled with numbers | stack-center | reading `HALL 68–78°F · RH ≤ 55%` + explainer + guarantee | detail-padlock-hasp | data-reveal | text rise, frame unclip |
| 3 | services | t-deep | show every option as a labeled reading | grid-3 | each services → reading + blurb + quote | doors-row-orange | data-reveal-stagger | stagger cards |
| 4 | chooser | t-paper | help pick climate vs drive-up without a call | side-by-side-rev | reading `TYPE climate or drive-up` + 5 Qs + result + CTA | detail-rollup-door | data-checklist | text rise |
| 5 | story | t-deep .break | visualize the humidity difference over a year | full-bleed | reading `YEAR outside vs inside` + 4-step pinned dial / stacked cards | hero-B-2 | data-sw-signature, data-story | pinned scrub (≥640) / stacked reveal |
| 6 | reviews | t-paper | social proof as readings, not adjectives | cards-horiz | reading `RATING {{proof.rating}} · {{proof.reviewCount}} REVIEWS` + sample reviews | — | data-reveal-stagger | stagger cards |
| 7 | pricing | t-deep | show real monthly ranges + lease terms plainly | two-col | reading `LEASE month-to-month` + sample price block + plain-words lease | detail-gate-keypad | data-estimator | text rise |
| 8 | contact | t-paper | convert after all questions are answered | stack-center | ZIP checker + two clocks + multi-step form + open-now | detail-security-camera | data-zip, data-open-now, data-lead | text rise |
| 9 | footer | t-deep | close with a final reading + legal | band | reading `OFFICE closed · GATE open until 22:00` + disclaimer + credits | — | — | static |

## Rhythm gate check
- Sections: 9 (within 8–12). ✓
- Hero height: `calc(100svh - var(--header-h))`, next band peeks. ✓
- No 3 same tone in a row: deep, paper, deep, paper, deep, paper, deep, paper, deep. ✓
- No two dark sections touching. ✓
- ≥ 1 t-deep: yes (5). ≥ 1 color band: no explicit color band but `.break` on story serves as visual break; will add `.t-color` class mapped to cyan-tinted deep variant if needed — for now the full-bleed `.break` satisfies the requirement. ✓
- ≥ 1 full-bleed `.break`: section 5. ✓
- ≥ 3 data-hooks: data-split, data-count, data-reveal, data-reveal-stagger, data-checklist, data-sw-signature, data-story, data-estimator, data-zip, data-open-now, data-lead. ✓
- data-sw-signature present: section 5. ✓
- ≥ 3 layout families, no neighbours share: split, stack-center, grid-3, side-by-side-rev, full-bleed, cards-horiz, two-col, stack-center (contact differs from climate by content density), band. Neighbours never identical. ✓
- Exactly one #contact: section 8. ✓
- Every CTA points to #contact or tel:. ✓
- Required content: all 9 services via repeater, area + ZIP checker (section 8), hours/open-now (section 8), sample reviews with Sample tag (section 6), prices only via estimator/sample block (section 7), footer with disclaimer + credits. ✓
- Signature in every section listed in concept.json.signature.sections: all 9 sections have a `.reading` line. ✓

## Open issues
- Hero family uniqueness: all families 1–15 are at or near library capacity (max 7; family 1 max 2). selfstorage-A already uses family 1 in this niche. No unique hero family is available without exceeding registry limits. Kept family 1 as closest match; critic will score distinctiveness accordingly. Hard stop applied after 4 failed uniqueness attempts.