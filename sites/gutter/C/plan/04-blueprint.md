# gutter-C — Blueprint (field guide, Drop-Season Bars)

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-deep | Where + when + call in 10 s; "do you come to my town?" | range-map (5/7 split: text left, ruled Plate 0 right) | kicker `{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}`, h1 with `{{biz.city}}`, Call `[[call]]`, Text a photo `sms:{{biz.phoneE164}}`, sample price `{{proof.prices.0.from}}–{{proof.prices.0.to}}`, proof line (rating, count, CCB, years, all Sample), `{{hours\|today}}`; plate: drawn SVG range map, town legend `<!-- each biz.areas -->` + `{{biz.city}}`, ZIP checker in legend, 5-bar key | `hero` (hero-C1, small "habitat" inset only) | `data-sw-signature` (5-bar key), `data-zip` | h1 static at first paint; hatch draws 700 ms, bars fill cell by cell (40 ms) ≤ 1.1 s |
| 2 | `#plates` | t-paper | "They'll sell guards that don't work under my trees" | sticky-index (sticky index column ≥ 900 + 5 double-ruled plates) | 5 specimens (fir, maple, moss, cottonwood, ice): Latin name, what it does, the fix → `[[quote {{services.N.name}}]]` | none (5 inline SVG drawings) | `data-hook="plates"` | drawing strokes draw (900 ms), then its bar fills; index row goes active |
| 3 | `.break` | t-deep | Pause: the season in one frame | break (full-bleed 21:9 / 4:5 phone) | caption "maple and oak" | `break` (hero-C2, hue-rotate(-12deg)) | — | clip unmask |
| 4 | `#prices` | t-paper | "What does it cost?" | ledger (ruled rows, item / range / good months bar) | `{{proof.prices.0-5.*}}`, `[[sample pricing]]` | none | `data-hook="ledger"` | rows stagger; mini bars fill |
| 5 | `#tools` | t-mid | "Which guard / how often?" + "is it even the gutter?" | bench (wide tool card + narrow tool card) | Tree sorter → cleaning calendar (big 12-cell bar, visits count, print, hand-off to form); downspout check (3 questions → splash block / extension / drain line) | none | `data-hook="calendar"`, `data-hook="downspout"` | still (tools don't dance); bar cells fill live 200 ms |
| 6 | `#services` | t-light | "New gutters look cheap / sag"; every service | index (2-col numbered field-guide index list) | `<!-- each services -->` name, blurb, `[[quote {{.name}}]]` | none | — | text rises (stagger) |
| 7 | `#notes` | t-deep | "Will they leave a mess?" proof | masonry (3-col CSS columns) | 6 reviews `{{proof.reviews.N.*}}`, each `[[sample review]]`; month tick for Doug F. (Jan) and Mike O. (Nov) only, others plate No. | none | `data-hook="notes"` | still (quiet), ticks fade in |
| 8 | `#visit` | t-paper | "Someone will fall off a ladder" / "blow it onto my beds" | steps (4-col numbered row, horizontal) | visit steps (process statements only), `{{biz.owner}}`, CCB sample | none | — | text rises |
| 9 | `#book` | t-moss (colour band) | Path: call / text now | band (statement left, actions right) | voice line, `[[call]]` in ink #0e1712 bg + bone text, sms, `{{hours\|table}}` | none | — | none (quiet) |
| 10 | `#contact` | t-deep | The form: one #contact | form-split (copy + ZIP left, 4-step form right) | form steps, `{{biz.phone}}`, `[[tel]]`, `{{hours\|today}}`, ZIP checker #2 | none | `data-lead` | none |
| — | footer | t-paper (footer, not a section) | Closure + compliance | — | full-year bar with current month outlined (JS), "This month in the field guide", nav, `{{hours\|table}}`, areas, `{{demo.disclaimer}}`, `[[credits]]` | — | `data-hook="footer-month"` | none |

Mobile bar (`data-mobilebar`, < 720): Call (rust 60%) + Text a photo (outline 40%).

## Rhythm gate (METHOD §4)
- Sections: 10 ✓. Hero `min-height: calc(100svh - var(--header-h))`; at 1440 the plate fits and the bone #plates band peeks ✓.
- Tones: deep · paper · deep · paper · mid · light · deep · paper · moss · deep → no 3 of one category in a row, no two dark touching (mid counts as mid, moss as colour) ✓.
- ≥ 1 t-deep ✓ (hero, break, notes, contact) · colour band t-moss ✓ · full-bleed `.break` ✓.
- Hooks: signature + plates + ledger + calendar + downspout + notes + footer-month = 7 ✓.
- Layout families: range-map, sticky-index, break, ledger, bench, index, masonry, steps, band, form-split: 10 distinct, no neighbours alike ✓.
- One `#contact`; every CTA is `#contact` (quote/prefill) or `tel:`/`sms:` ✓.
- Required content: all 8 services (#services repeater; plates link 5 of them), area + ZIP checker (hero legend + #contact), hours/open-now (hero proof line, #book, footer), sample reviews (#notes, each tagged), prices only via sample ledger + hero sample line, footer disclaimer + credits ✓.
- Signature sections from concept.json: hero (5-bar key) · story (#plates bars) · proof (#notes ticks) · tools (calendar output bar) · pricing (ledger mini bars) · footer (year bar) ✓.

## Decisions (headless)
- Downspout check uses app.js logic (not kit estimator: it is price-oriented); no-JS shows the three rules as text + call button.
- Tree sorter and cleaning calendar are one tool: picking trees fills the big bar (drop months in moss, suggested visit months in rust) and lists per-tree notes; pure CSS `:has()` shows notes without JS-timing; JS adds the visit count, the fill timing and the hand-off.
- No menu drawer: under 900px the header keeps the wordmark + Call; the mobile bar carries Call + Text.
- Moss Latin name: "Bryophyta" (the moss division), because roof moss is several species; ice plate uses "rare specimen" instead of a Latin name.

## Open issues
(none yet)
