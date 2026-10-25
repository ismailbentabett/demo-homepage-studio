# Blueprint — electrician-B (Torque & Tag Electric)

## Round 2
- Photo: applied tone-aware duotone filters (grayscale + sepia + blend-mode per tone class) to unify placeholder images across dark/light/accent bands.
- Wow/Distinctiveness: rewrote circuit activation to sequential panel-schedule flip (120ms stagger per breaker within each .circuit-list), replacing instant bulk toggle.
- Polish: removed broken `<a>` wrappers from footer credits; now plain text to satisfy static check.

## Section list

| # | ID | Tone | Purpose | Layout family | Content tokens | Media slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Trade + city + outcome in h1; primary CTA; proof line; next band peeks | mosaic-spine | h1, kicker, proof line, [[call]], [[quote]] | hero (mosaic tiles: B1, B2, B3, detail-lug, detail-wire, ranch-dusk) | data-sw-signature="panel-schedule", data-split="lines" | Mosaic tiles unclip stagger; headline line-mask reveal |
| 2 | trust | t-paper | Open now, hours, sample rating, service area summary | split-aside | {{hours\|today}}, {{proof.rating}} (Sample), {{biz.areas\|list}} | — | data-open-now | Text rise |
| 3 | breaker-sorter | t-mid | "Is this dangerous?" → triage tool → troubleshooting booking | tool-card | Breaker trip sorter inputs/output | — | data-checklist, data-service="Troubleshooting and repairs" | Clip reveal |
| 4 | services | t-deep | Panel, aluminum, generator, EV, surge, pool, outdoor, repairs | circuit-rail | <!-- each services --> name, blurb, sample price where available | — | data-sw-signature="panel-schedule", data-reveal-stagger | Circuit flip + label draw on scroll |
| 5 | break | t-paper | Full-bleed photo breath between dark bands | full-bleed | — | break (generator-stone or ranch-oaks) | data-reveal="clip" | Image unclip |
| 6 | generator-sizer | t-accent | Outage plan tool → interlock or standby booking | tool-wide | Generator sizer checkboxes, output, sample price range | — | data-estimator, data-service="Generator interlocks" | Count-up amperage |
| 7 | ev-load | t-paper | "Can my house handle an EV?" → load check → charger booking | split-image | EV / heat pump load check inputs/output | detail-ev-charger | data-checklist, data-service="EV charger installation" | Text rise + image unclip |
| 8 | proof | t-deep | Sample reviews filed by circuit number; inspector mention | circuit-rail | <!-- each proof.reviews --> text, name, town, service, stars | — | data-sw-signature="panel-schedule", data-reveal-stagger | Star handles flip ON |
| 9 | area | t-paper | ZIP checker + service area list | stack-center | {{biz.zips\|csv}}, {{biz.areas\|list}} | — | data-zip | Text rise |
| 10 | pricing | t-mid | Sample price ranges table, labeled | ledger-table | <!-- each proof.prices --> item, from, to, note | — | data-reveal | Text rise |
| 11 | contact | t-deep | Multi-step quote form; honest demo thank-you | form-center | form[data-lead], microcopy | — | data-lead, data-service (prefill) | Clip reveal |
| 12 | footer | t-deep | Disclaimer, credits, main-off circuit slot | footer-rail | {{demo.disclaimer}}, [[credits]] | — | data-sw-signature="panel-schedule" | Static |

## Rhythm check
- Tones: deep → paper → mid → deep → paper → accent → paper → deep → paper → mid → deep → deep
- **Dark run fix:** sections 11 (contact, t-deep) and 12 (footer, t-deep) touch. Change footer to t-mid.
- Revised tones: deep → paper → mid → deep → paper → accent → paper → deep → paper → mid → deep → **mid**
- No three same tones in a row ✓
- At least one dark band (hero, services, proof, contact) ✓
- At least one color band (generator-sizer, t-accent) ✓
- One full-bleed break (section 5) ✓
- ≥ 3 interactive hooks: data-sw-signature (hero, services, proof, footer), data-checklist (breaker-sorter, ev-load), data-estimator (generator-sizer), data-zip (area), data-lead (contact) ✓
- ≥ 3 layout families: mosaic-spine, split-aside, tool-card, circuit-rail, full-bleed, tool-wide, split-image, stack-center, ledger-table, form-center, footer-rail ✓
- No two neighbours share layout family ✓
- 12 sections total ✓
- Next band peeks: hero height = calc(100svh - var(--header-h)) ✓

## Required content placement
- Services: section 4 (all 9 from facts)
- Service area + ZIP: section 9
- Hours / open-now: section 2
- Sample reviews: section 8 (with [[sample review]] tag)
- Sample prices: sections 4 (where available), 6 (estimator output), 10 (full table) — all labeled
- Footer disclaimer + credits: section 12
- Quote form: section 11 (#contact), only once