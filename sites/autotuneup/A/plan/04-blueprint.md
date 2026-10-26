# 04 · Blueprint · autotuneup-A "Stopwatch Stations"

## Round 1
Elevate: the hero strip is now the starting line (checkered top edge, stopwatch case with crown sitting on it ticking 00:00→02:00, "Lap 01 Check-in 2 min" chip, h1 "{{biz.city}} oil changes and tune-ups, timed."), and every photo frame is a numbered lap station (number chip + caption plate; bay-light art while media is a placeholder). Five lap shots were added to the stations list and are revealed by the same is-on clip as their lap.
- The left pill rail is replaced by a horizontal lap strip that hangs off the header: ticks at each section, and a tab flag that counts stations ("03 / 10 Services") and never shows a second total. This fixes the rail/dial mismatch and the sibling-C silhouette.
- Copy-1 is applied in full (Wi-Fi line gone, Book a time / Book this time, row headers, h2, lead, kicker). The proofline has no dot separators and uses icons. Tracked caps are removed everywhere except the DONE stamp.
- The planner ticket now lists the ticked jobs with a running "Out the door" total. The DONE stamp moved to the bottom-right of the slip body. The ZIP input is 172px wide. The break is a drawn Wasatch ridge with a display caption over it.
- Media: added slots lap-drain, lap-pressure and lap-dipstick (critic-requested station crops). Panel 03 now uses a CSS old/new filter swatch, so cabin-filter appears only once. check-unique is clean.

| # | id | tone | purpose | layout family | content | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper | "How long will it take?" → book | stacked headline + cinematic strip | kicker city/state, 3-line h1, lead, Book + Call, open-now · area · rating (Sample) | hero (eager) | data-sw-signature, data-lap | line-mask rise, strip wipe, dial chip |
| 2 | stations | t-deep | "What actually happens?" | sticky head + lap list (split 5/7) | 6 laps with durations/splits (Sample visit), big dial | — | data-sw-signature, data-lap, scroll story | dial scrubs 00:00→31:00, laps light up |
| 3 | services | t-paper | every service + sample prices | tab board (rail + panel) | 9 services repeater, prices tokens + Sample | station-*, detail-plugs, tool-tread | data-tabs, prefill | reveal |
| 4 | wait-or-drop | t-accent (color band) | "Can I wait?" tool | 2×2 areas: head/media, form/ticket | planner chips → ticket | place-waiting | data-wait (tool), prefill | clip reveal |
| 5 | oil | t-paper | "Which oil?" plain answer | comparison table | 3 oils × 4 rows, plain words | — | — | reveal |
| 6 | canyon | t-deep | breath | full-bleed .break | caption "Lap 05" | break | — | clip reveal |
| 7 | proof | t-paper | trust | offset receipt slips + promise | 3 reviews (Sample), rating + count (Sample), guarantee + licence (Sample) | — | data-sw-signature, reveal-stagger | slips print, Done stamp presses |
| 8 | area | t-mid | "Do you serve me / open now?" | 7/5 text + hours card | areas list, ZIP checker, hours table, open-now | — | data-zip, opennow | reveal |
| 9 | contact | t-paper | the one #contact | text + 4-step form card | service, car, wait/drop, contact; thank-you | — | data-lead | reveal |
| 10 | footer | t-deep | close | stop readout + 3-col grid | Done · 31:00, nav, tel, disclaimer, credits | — | data-sw-signature | tick pops |

Rhythm check: 9 sections + footer ✓ · hero calc(100svh - header) with stations peeking ✓ · tones paper/deep/paper/accent/paper/deep/paper/mid/paper/deep: no 3 alike in a row, no two dark touching ✓ · ≥1 t-deep, color band (#wait-or-drop), full-bleed .break ✓ · hooks: tabs, zip, form, wait planner, 4× signature ✓ · neighbouring layout families all differ ✓ · one #contact; every CTA → #contact or tel: ✓ · all 9 services, area + ZIP, hours/open-now, Sample reviews, prices only in Sample price blocks, footer disclaimer + credits ✓ · signature in hero, stations, proof, footer (+ header lap strip ≥900px) ✓.

## Notes (build decisions)
- Planner logic in app.js runs outside the motion guard: it is a tool, not motion. With JS off the ticket's default text explains the rule.
- Oil comparison is a semantic role=table, not the kit compare slider (no before/after photos in this concept).
- Station timings are labelled "Sample visit": process statements, not facts.
- All photos are placeholder stubs: every frame has a palette gradient and a small mono fallback label.
- No pinning; stations story is a scrubbed sticky-head scroll (sticky ≥900px only). Lenis/SplitText dropped (intro is CSS keyframes ≤ 1.1 s under .sw-motion).

## Open issues
- Media is still placeholder stubs (niche library). Photo floor cannot pass until real media is approved.
- OG image falls back to plain colour because the hero webp is a placeholder (build warning, not a check item).
