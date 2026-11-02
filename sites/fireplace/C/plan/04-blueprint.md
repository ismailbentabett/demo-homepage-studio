# Blueprint — fireplace-C

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | First 5s: trade, town, season, act | offset-frame (5) | h1 "September · stack the first cord", lead, proof line (hours · area · sample rating), [[call]], [[quote sweep btn-primary]] | hero-C1 | data-sw-signature, data-reveal | text rises, photo unclips |
| 2 | october | t-accent | Objection: chimney fire fear; first fire readiness | split-stack | kicker "October · first fire", h2 "Sweep done in August, so you're in the clear", blurb about pre-season sweep, symptom checker intro | — | data-symptom, data-reveal | text rises |
| 3 | january | t-deep | Objection: upsell fear; midwinter check proof | rail | kicker "January · midwinter check", h2 "The pipe and cap checked, swept if they need it", camera photos from flue, findings as fine/watch/fix | tool-camera | data-reveal="clip" | image unclips |
| 4 | july | t-paper | Objection: stove install timing; summer window | split-stack | kicker "July · install window", h2 "Stoves and inserts fitted while the roof is dry", stainless liner detail, insert photo | appliance-insert | data-reveal | text rises, photo unclips |
| 5 | services | t-mid | All services pinned to months | month-grid | repeater over {{services}}, each card shows month tag + name + blurb + [[quote .short btn-ghost]] | — | data-reveal-stagger | stagger cards |
| 6 | break | t-deep | Full-bleed visual pause; seasonal texture | break | — | process-roof-rods | — | static |
| 7 | tools | t-paper | Self-diagnosis; hand-off to form | stack | Firewood dry-check, sweep interval planner, ZIP checker | tool-moisture-meter | data-firewood, data-sweep-interval, data-zip, data-reveal | text rises |
| 8 | proof | t-light | Trust: sample reviews dated by month | grid | repeater over {{proof.reviews}} with month tag, [[sample review]], star rating | — | data-reveal-stagger | stagger cards |
| 9 | prices | t-mid | Cost transparency via estimator | split-stack | Sample price block from {{proof.prices}}, estimator hook, "Price a visit" CTA | — | data-estimator, data-reveal | text rises |
| 10 | area | t-paper | Coverage + open-now | stack | Towns list {{biz.areas|list}}, ZIP checker, {{hours|today}} open-now | — | data-zip, data-open-now, data-reveal | text rises |
| 11 | contact | t-deep | Single quote form | stack | Multi-step form[data-lead]: what you burn → when → what's happening → town → contact | — | data-lead | text rises |
| 12 | footer | t-deep | Disclaimer, credits, last-fire sign-off | stack | "April · last fire · book next year's sweep before the rush", {{demo.disclaimer}}, [[credits]] | — | — | static |

## Rhythm gate check

- **8-12 sections:** 12 sections. Hero is `calc(100svh - var(--header-h))`; October band peeks in at bottom.
- **No 3 same tone in row:** paper → accent → deep → paper → mid → deep → paper → light → mid → paper → deep → deep. Wait — footer is t-deep and contact is t-deep: two darks touching. Fix: change footer to t-paper.
- **Revised footer tone:** t-paper. Now: ...contact (t-deep) → footer (t-paper). Clean.
- **≥1 t-deep:** january, break, contact = 3. Good.
- **≥1 color band:** october (t-accent). Good.
- **≥1 full-bleed .break:** section 6. Good.
- **≥3 data-hooks, one data-sw-signature:** hero has data-sw-signature; october has data-symptom; tools has data-firewood, data-sweep-interval, data-zip; area has data-zip, data-open-now; prices has data-estimator. 7 hooks total. Good.
- **≥3 layout families, no neighbours sharing:** offset-frame → split-stack → rail → split-stack → month-grid → break → stack → grid → split-stack → stack → stack → stack. Problem: sections 10, 11, 12 are all stack. Fix: change area (10) to rail, contact (11) to centered statement, footer (12) stays stack. Revised: ...prices (split-stack) → area (rail) → contact (statement) → footer (stack). No neighbours share now.
- **Exactly one #contact:** section 11. Every CTA points to #contact or tel:. Good.
- **Required content:** all 8 services in section 5 repeater; area + ZIP in section 10; hours/open-now in hero proof line + section 10; sample reviews in section 8 with [[sample review]]; sample prices via estimator in section 9; footer has {{demo.disclaimer}} + [[credits]]. Good.
- **Signature in concept.json.sections:** hero, services, proof, tools, area, prices, contact, footer all carry the season rail or month watermark. Good.