# Blueprint — pool-A (Tileline Pool Care)

## Round 1
Elevate wow + photo: built the visit card as the page spine (fixed white report slip on the right at 1200+, live log line + meter in the phone bar) that ticks one line per section from 07:58 Arrive to 08:45 Report sent, and printed the troubleshooter answer on the same slip format (symptom, cause, first action, sample price; CSS :has, works with reduced motion). Every section head now carries a timestamp stamp, the waterline rail runs the full page, frames carry a burned-in timestamp and one cool grade, the break is capped at 60svh with a caption. Process re-cut as a ruled log (time / text / photo) and reviews as unboxed quotes, so no two sections share the bordered-card shape; pricing becomes a swipe row on phones. All copy-1 replacements applied, alt overrides on every frame, process cards retitled to match their photos (no media.json edit). Reveals cut to the 4 log lines and 2 photos. Media is still placeholder (niche library); not fought here.

## Section list

| # | ID | Tone | Purpose | Layout | Content tokens | Media slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | First 5s: trade+town+price+proof; start visit log | split (video left, text right scrim) | `{{biz.name}}`, `{{biz.city}}`, sample price `$140–$190/mo`, proof line | hero-A2 | `data-sw-signature="visit-log"` | Line-mask h1 reveal + waterline draw |
| 2 | promise | t-paper | Objection: "do they show up?" / same tech | statement | Same tech, same weekday, written report | — | — | Text rise |
| 3 | process | t-deep | Visit log steps: skim, brush, test, balance | rail (waterline margin + timestamped cards) | Service blurbs from facts | brushing, test-vials, chemicals, baskets | `data-hook="process-reveal"` | Log lines type into visit card |
| 4 | break | t-mid | Visual pause, full-bleed photo | break (full-bleed) | — | waterline-tile | — | Image unclip |
| 5 | troubleshooter | t-paper | Objection: cloudy water before party | stack (tool + explanation) | Cloudy/algae cleanup blurb | cloudy-water | `data-hook="checklist"` | Text rise |
| 6 | pricing | t-deep | Objection: what does it cost? Sample prices | grid (3-col cards) | `{{proof.prices}}` with Sample tag | — | `data-hook="estimator"` | Text rise |
| 7 | repair | t-paper | Objection: upsell fear, repair-before-replace | split (text + photo) | Pump & filter repair blurb | pump | — | Image unclip |
| 8 | reviews | t-mid | Proof: real visits, real readings | list (review cards with timestamp pills) | `{{proof.reviews}}`, rating, count | — | — | Text rise |
| 9 | area | t-paper | Service area + ZIP check | stack (map-like list + ZIP input) | `{{biz.areas}}`, `{{biz.zips}}` | tampa-neighborhood | `data-hook="zip"` | Text rise |
| 10 | contact | t-accent | Primary conversion: book or text | stack (multi-step form) | `{{biz.phone}}`, `{{biz.email}}`, hours | — | `data-hook="form"` | Text rise |
| 11 | footer | t-deep | Disclaimer, credits, final log stamp | rail (waterline ends) | `{{demo.disclaimer}}`, `[[credits]]` | — | — | Waterline completes |

## Rhythm check

- 11 sections (within 8-12).
- Tone sequence: deep → paper → deep → mid → paper → deep → paper → mid → paper → accent → deep. No two dark touching. At least one deep, one mid, one accent band. ✓
- One full-bleed break (section 4). ✓
- Interactive hooks: `data-sw-signature` (hero), `data-hook="process-reveal"` (3), `data-hook="checklist"` (5), `data-hook="estimator"` (6), `data-hook="zip"` (9), `data-hook="form"` (10). ≥ 3. ✓
- Layout families: split, statement, rail, break, stack, grid, split, list, stack, stack, rail. No two neighbours share. ≥ 3 different. ✓
- Quote form once at #contact. ✓
- Required content: services (in process + pricing), area + ZIP (9), hours (footer/contact), reviews with Sample (8), sample prices via estimator (6), disclaimer + credits (footer). ✓

## Header & mobile bar

- Header: `t-deep`, 64px, logo left, phone right (`tel:{{biz.phoneE164}}`), nav center desktop.
- Mobile bar: fixed bottom, primary CTA "Text Marcus" (`sms:{{biz.phoneE164}}`), secondary "Call", visible on scroll past hero.