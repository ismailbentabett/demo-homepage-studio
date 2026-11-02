# Blueprint — excavation-C

## Open issues
- **Hero family saturation:** All 15 hero families in `data/design-registry.json` are at their library cap (family 1 at 2/2, families 2-15 at 7/7). No unique hero family is available for excavation-C. Using hero family 11 (diagonal split) as the closest fit for the soil-chip concept; this fails `check-unique --concept` and blocks `stage.mjs render`. Proceeds per the hard-stop rule (METHOD §6: "if the same check fails 4 times in a row, write the problem here, leave it, and finish"). The critic will score distinctiveness accordingly. Static check: 0 blockers. Render check: 0 errors. Only remaining gate is the uniqueness reservation, which cannot be satisfied without displacing another site's reservation.</new_string>

## Section table

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Path: name the problem in homeowner words, show local yard | 11-diagonal-split | kicker `{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}`; h1 "Red clay holds the water until somebody gives it a way out"; lead "We walk the yard with you in the rain before we dig anything."; CTA primary "Price my drainage" → #contact; CTA secondary "Call now" → tel:; open-now chip | hero-C | data-hook="hero", data-sw-signature="soil-chip" | text rise + image unclip |
| 2 | trust-bar | t-deep | Objection: "They'll disappear" | horizontal-rail | years `{{proof.years}}`; rating `{{proof.rating}}` / `{{proof.reviewCount}}` reviews; license `{{proof.license}}`; insured badge; family-owned badge | — | data-hook="trust" | text rise |
| 3 | drainage-picker | t-mid | Path: diagnose the fix, hand off to form | tool-card | tool label "Where does the water go?"; inputs (stand/pool/ditch/basement × clay/rocky/sandy × gutters y/n); output card with soil chip + sample price + fix name; CTA "Get this priced" → #contact (prefill) | process-french-drain-stone | data-hook="drainage-picker", data-sw-signature="soil-chip" | text rise |
| 4 | services | t-paper | Path: every service named in homeowner words | bento-grid | repeater over `{{services}}`: chip + name + blurb; 10 cards | process-trench-pipe, finished-gravel-drive, material-gravel-pile, hands-gloved-pipe | data-hook="services", data-sw-signature="soil-chip" | text rise + image unclip |
| 5 | break | .break | Visual pause, local color | full-bleed | — | region-red-clay-wet | — | image unclip |
| 6 | zip-checker | t-accent | Objection: "Do you come to me?" | tool-inline | label "Check your ZIP"; input; result card with soil chip + area name; CTA "Start my quote" → #contact (prefill ZIP) | — | data-hook="zip-checker", data-sw-signature="soil-chip" | text rise |
| 7 | process | t-deep | Objection: "They'll tear up the yard" | sticky-photo-text | 3 statements: "We call 811 and wait for the paint"; "Mats or plywood on the lawn when the machine goes back"; "Raked clay and straw+seed before we leave"; photo of painted marks + raked grade | tools-stakes-paint, finished-grade-straw | data-hook="process" | text rise + image unclip |
| 8 | prices | t-paper | Objection: "Price will double on rock" | sample-table | table from `{{proof.prices}}`: item / from / to / note; disclaimer "Sample ranges. If we hit ledge, we stop and talk price before we break."; CTA "Get a real number" → #contact | — | data-hook="prices" | text rise |
| 9 | reviews | t-mid | Proof: real yards, real storms | card-stack | repeater over `{{proof.reviews}}`: chip watermark + quote + name/town/service; Sample tag on each | — | data-hook="reviews", data-sw-signature="soil-chip" | text rise |
| 10 | guarantee | t-deep | Objection: "Will they come back?" | centered-statement | statement "If the water still pools where we fixed it after the next real rain, we come back and rework it."; pull quote from Loretta H. review | — | data-hook="guarantee" | text rise |
| 11 | contact | t-paper | Path: multi-step form | form-stepper | 3 steps: (1) What's the problem? (2) Your lot (ZIP + soil + access). (3) How to reach you.; step labels carry soil chips; thank-you text restates rain guarantee | — | data-hook="contact", data-sw-signature="soil-chip" | text rise |
| 12 | footer | t-deep | Close + legal | footer-standard | `{{demo.disclaimer}}`; `[[credits]]`; nav anchors; phone/email; hours; soil chip "ON GRADE · FINISHED" | — | data-sw-signature="soil-chip" | — |

## Rhythm gate check

- [x] 12 sections (within 8-12 range, counting hero and footer).
- [x] Hero is `calc(100svh - var(--header-h))`; trust-bar peeks via negative margin.
- [x] No 3 same tones in a row: paper → deep → mid → paper → break → accent → deep → paper → mid → deep → paper → deep. Verified.
- [x] No two dark sections touching: deep sections are always separated by paper/mid/accent/break.
- [x] ≥ 1 t-deep: trust-bar, process, guarantee, footer (4).
- [x] ≥ 1 color band: drainage-picker (t-mid), zip-checker (t-accent), reviews (t-mid).
- [x] ≥ 1 full-bleed .break: section 5.
- [x] ≥ 3 data-hooks: hero, trust, drainage-picker, services, zip-checker, process, prices, reviews, guarantee, contact (10).
- [x] data-sw-signature present: hero, drainage-picker, services, zip-checker, reviews, contact, footer (7 sections, matches concept.json.signature.sections).
- [x] ≥ 3 layout families: diagonal-split, horizontal-rail, tool-card, bento-grid, full-bleed, tool-inline, sticky-photo-text, sample-table, card-stack, centered-statement, form-stepper, footer-standard (12 unique).
- [x] No neighbouring sections share a layout family. Verified.
- [x] Exactly one #contact: section 11.
- [x] Every CTA points to #contact or tel:. Verified.
- [x] Required content: all 10 services (section 4), ZIP checker (section 6), hours/open-now (hero + footer), sample reviews with Sample tag (section 9), prices via sample table (section 8), footer with disclaimer + credits (section 12).
- [x] Signature appears in every section listed in concept.json.signature.sections: hero, drainage-picker, services, zip-checker, reviews, contact, footer. Verified.