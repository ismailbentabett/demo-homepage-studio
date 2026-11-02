# Blueprint — tile-C

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | Trade + town + act | hex-mask | kicker, h1, lead, proof line, CTA row | hero-C | data-split="lines" | hex scale + line mask |
| 2 | area | t-deep | Do you come here? | mosaic-grid | hex map, ZIP checker, towns list | — | data-zip, data-sw-signature="hex-map" | hex fill stagger |
| 3 | services | t-paper | What do you do? | rail | 9 service cards with hex bullets | — | data-reveal-stagger | text rise |
| 4 | process | t-light | Will it leak? | split | layers under tile, flood test note | detail-hex-mosaic | data-reveal | image unclip |
| 5 | break | t-accent | Visual pause | full-bleed | — | street-chicago-bungalow-snow | — | clip reveal |
| 6 | tools | t-paper | Price & decide | stack | repair quiz, grout preview, heated card | — | data-estimator, data-checklist | text rise |
| 7 | proof | t-mid | Trust | grid | 3 reviews (Sample), rating, guarantee | detail-subway-white | data-reveal | text rise |
| 8 | prices | t-light | Cost ranges | list | sample price rows from facts | — | data-estimator | text rise |
| 9 | contact | t-paper | Act now | form | 4-step form, hours, phone | — | data-lead, data-open-now | text rise |
| 10 | footer | t-deep | Credits + disclaimer | stack | disclaimer, credits, hex map reset | — | — | — |

## Rhythm gate check
- 10 sections (within 8-12). Hero is calc(100svh - var(--header-h)); area band peeks in.
- Tone sequence: paper → deep → paper → light → accent → paper → mid → light → paper → deep. No 3 same in row. No two dark touching (deep→paper, accent→paper, mid→light).
- ≥1 t-deep (area, footer). ≥1 color band (break = t-accent). ≥1 full-bleed .break (section 5).
- ≥3 data-hooks: data-zip, data-sw-signature, data-estimator, data-checklist, data-lead, data-open-now.
- ≥3 layout families: hex-mask, mosaic-grid, rail, split, full-bleed, stack, grid, list, form, stack. No neighbours share.
- Exactly one #contact (section 9). Every CTA points to #contact or tel:.
- Required content: all 9 services (section 3), area + ZIP (section 2), hours/open-now (section 9), sample reviews with tag (section 7), sample prices via estimator/price block (section 8), footer with disclaimer + credits (section 10).
- Signature in concept.json.sections: hero, area, services, proof, footer — all present.

## Open issues
- **Hero family uniqueness blocker (2026-11-01):** All 15 hero families are at or over their library cap (families 2–15 at 7/7, family 1 at 3/2 including sibling tile-A draft). `node tools/stage.mjs tile-C render` refuses to advance. Static check and render screenshots are clean; only the concept-uniqueness gate blocks delivery. Requires either a registry cleanup, a new hero family slot, or manual override via `tools/force-deliver.mjs`. Attempted families: 13, 12, 14, 10, 1 — all rejected. This is a hard-stop per BUILD-CONTRACT §4 (same check failed 5 consecutive times).