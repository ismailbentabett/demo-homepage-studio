# locksmith-A · Blueprint (Split-Flap Night Log)

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-deep | Locked-out caller → Call in 5 s; "who is this, what does it cost" | stack (timetable rows above a letterbox strip) | tradeLabel, city, state, `{{hours\|today}}`, phone, prices.0 from/to, rating, reviewCount | `hero-A3` (21:9 ≥900, 2:1 <900, the only photo) | `data-sw-signature="flaplog"` (h1 board) | tiles flip 30 ms/char, events line-mask, strip glow |
| 2 | `#price` 10:53 | t-slate | "$29 on the phone, $300 at the door" → Price it before we drive | split (tool left, board result right) | proof.prices (estimator), phone | – | `data-hook="price-it"` (estimator) | text rises, result tiles flip on change |
| 3 | `#text` 10:55 | t-deep | "Random guy in an unmarked car" → the arrival text | story (steps left, pinned CSS phone right ≥900) | owner, short, phone | – | `data-hook="arrival-text"` | pinned stack ≥900 (4 × 55svh + 100svh), clip reveal <900 |
| 4 | `#door` 11:21 | t-amber (colour band) | "They'll open anyone's door" → ID check | statement (one sentence, huge) | – | – | – | still (quiet) |
| 5 | `#picked` 11:24 `.break` | t-deep | "He'll drill and sell me a lock" | diagram (full-bleed pin-tumbler SVG + 3 fallbacks) | – | – | `data-hook="pick"` (scroll-driven `--sw-p` sets pins, then dawn wipe band) | pins set by scroll; static = set |
| 6 | `#receipt` 11:30 | t-dawn | "The bill grows at the door" → written receipt = same range | receipt (narrow paper slip + margin notes) | prices 0-5 (Sample), license (sample) | – | – | slip rises, lines stagger |
| 7 | `#services` | t-paper | Every job, tonight or booked | board (departure rows: job · status) | services 0:4 TONIGHT, 4:9 BOOK + rekey counter (prices 2,3) | – | `data-hook="rekey-count"` | rows stagger |
| 8 | `#frozen` | t-slate | "Two hours in the cold" → what to try while you wait | checklist (3 numbered steps + live result) | phone | – | `data-hook="frozen"` (checklist) | text rises |
| 9 | `#proof` | t-paper | "Is it legit" → reviews as board rows | mosaic (uneven review cards, flap job tags) | reviews (Sample), rating, reviewCount, years, license | – | – | stagger |
| 10 | `#area` | t-slate | "National call centre" → towns + ZIP + hours | list (big town names + ZIP + hours table) | areas, zips, hours\|table, hours\|today | – | `data-hook="zip"` | text rises |
| 11 | `#contact` | t-paper | Planned buyer → 4-step form; tel beside | form (07:00 board + form card) | services, phone, hours\|today | – | `data-hook="lead"` (form) | still |
| – | footer | t-dawn | 07:00 board cleared, disclaimer + credits | – | name, phone, email, license, disclaimer, `[[credits]]` | – | – | – |

Header (t-deep glass): wordmark, mini flap board mirroring the section in view (`data-time`), Call. Mobile bar: Call | Text | Price it.

## Rhythm gate
- 11 sections ✓. Hero `calc(100svh - var(--header-h))`, strip sized to the remaining height so #price peeks ✓.
- Tones (checker categories): D · C · D · C · D · C · L · C · L · C · L → never 3 alike, no two dark touching ✓.
- t-deep ✓ (1, 3, 5), colour band t-amber (4) ✓, `.break` = #picked full-bleed ✓.
- Hooks: flaplog signature + price-it, arrival-text, pick, rekey-count, frozen, zip, lead = 8 ✓.
- Layout families: stack, split, story, statement, diagram, receipt, board, checklist, mosaic, list, form; no neighbours alike ✓.
- One `#contact`; every CTA → `#contact`, `tel:` or `sms:` ✓.
- Required content: 9 services (repeaters), areas + ZIP, hours/open-now (hero + area + contact), sample reviews tagged, prices only in estimator / receipt price block tagged Sample, footer disclaimer + credits ✓.
- Signature in: hero (h1 board), header (mini board), story (bubble stamps), price-tool (flap range), services (board rows), proof (flap job tags), footer (07:00 board) ✓ + receipt, contact.

## Decisions (headless)
- Ramp vs rhythm: after 11:24 the page is light, but #frozen and #area come back to slate ("another cold night", "where the van drives at night") so the light half does not read as one block. Noted for the critic.
- No icons-as-clip-art; drawings are a pin-tumbler cross-section (#picked) and small door outlines in the rekey counter.
- Rekey counter never adds dollars: it shows "first lock $65–$95 + N × $20–$35" straight from facts.

## Open issues
(none yet)
