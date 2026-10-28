# 04 Blueprint: garagedoor-A "Thirty Quarter Turns"

## Round 1
Services recut as concrete door panels (t-light) and proof moved to t-light, estimator to t-mid, so the scroll alternates night / concrete / night (paper, light, deep, light, mid, accent, light, deep, light, deep) with no dark-on-dark pair. Tracked mono caps kickers are replaced by big Saira numerals (NN/30), with sentence-case labels. The live story places the step card in the right column level with the spring. The hero is graded to concrete/sodium, and the price sheet opens on a drawn 21:9 cone-and-bars frame on the ruler. The money action is now called "Price my repair" everywhere. Should 1-7 and copy-1 are applied.


Rail (≥1100): fixed 72px left column, vertical drawn torsion spring (`data-sw-signature`), coil fills sodium with page
progress, mono counter `¼ 00/30` at its foot. 640-1099: no rail, each kicker prints its turn mark. <640: the counter
chip lives in the mobile bar. Between bands: `.seam` = door-panel joint (2px joint + 1px highlight, three hinge plates,
roller in a track stub at the right edge).

| # | id | tone | purpose | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-paper | "Spring snapped, car inside" → call in 5 s | stacked headline over cinematic strip | kicker tradeLabel · city; h1; lead; call + "Price it"; proof line hours · prices.0 · rating (Sample) | hero-A2 (strip, contain on warm field, multiply) | `data-split="lines"` h1, `data-open-now` | strip rises from the floor (clip bottom→top 900ms), h1 line mask |
| 2 | `#release` | t-light | "Is it safe to touch? Car is inside" | tool split: question tabs left, answer card right | 5 tabs (gap in spring / cable / crooked / opener hums / nothing wrong); stop panel = big call; safe steps | none (drawn) | `data-tabs` | text rises (once) |
| 3 | `#story` | t-deep | "$300 spring → $4,000 door?" / "will it fall on my dog?" — the repair, step by step | pinned story: big drawn spring + counter left, rising step panels right | 5 steps: unwind 30→00 / swap pair (prices.0 Sample) / wind 00→30 / let go halfway / reverse test ✓ | drawn spring with painted stripe helix | `data-story` (app.js scrub, pin ≥640 via sticky) | scrubbed: counter down/up, stripe winds into a helix, winding bar swings, panels rise |
| 4 | `#services` | t-paper | "Do you fix my thing?" all 11 services | door elevation: 4 raised-panel rows with seams + hinges | `<!-- each services 0:3 -->` … 9:11 + call cell | none | `[[quote]]` (prefill) | rows rise one panel at a time (stagger) |
| 5 | `#estimator` | t-light | "How long do springs last?" | instrument: inputs column + full-width spring cycle bar | year, opens/day, spring type; cycles; spring bar; prices.0 Sample; "Book a spring check" | none (drawn) | `data-spring-est` | coils draw left→right on change |
| 6 | `.break` | t-accent full-bleed | thesis statement | full-bleed statement over a drawn spring | "Thirty quarter turns. Counted out loud. Then we let go halfway." | none (drawn) | — | still (quiet) |
| 7 | `#proof` | t-paper | "Will they upsell me?" prices side by side + reviews | ledger (price sheet on turn ticks) + review stack with seams | `each proof.prices`, `each proof.reviews`, rating + reviewCount Sample, guarantee | none | `data-count` on reviewCount | ledger rows tick in |
| 8 | `#area` | t-deep | "Do you serve my suburb? When?" | split: big area list + ZIP checker / hours card | `biz.areas`, ZIP form, `hours|table`, `hours|today` | none | `data-zip`, `data-open-now` | text rises |
| 9 | `#contact` | t-light | the one form | form split: call card left, 4-step form right | form steps (car inside? + service / details+zip / when / contact) | none | `data-lead` | none (quiet) |
| — | footer | t-deep | close + disclaimer | 3-col footer + full-width seam with roller at track bottom | counter `30/30 · balanced`, name, phone, hours, disclaimer, credits | — | — | — |

Mobile bar (<900): `¼ nn/30` chip · Call · Text · Price.

## Rhythm gate
- Sections: 9 in `<main>` (+ footer). Hero `min-height: calc(100svh - var(--header-h))`; strip flexes, #release (light) peeks at 1440×900 and 390. ✓
- Tones: paper · light · deep · paper · light · accent · paper · deep · light · (footer deep). Never 3 alike in a row; t-deep never touches t-deep (story↔services paper, area↔contact light). ✓
- ≥1 t-deep (story, area) ✓ · color band (break t-accent) ✓ · full-bleed `.break` ✓
- Hooks: data-tabs, data-story, data-spring-est, data-zip, data-lead, data-open-now, data-split; `data-sw-signature` on the rail spring. ✓
- Families: stacked-strip · tool split · pinned story · door elevation · instrument · full-bleed statement · ledger · area split · form split. No neighbours alike. ✓
- One `#contact`; every CTA = `#contact`, `tel:` or `sms:`. ✓
- Required content: 11 services ✓, area + ZIP ✓, hours + open-now ✓, sample reviews with Sample tag ✓, prices only in story step, estimator and sample price sheet ✓, footer disclaimer + credits ✓.
- Signature sections (concept): hero (counter chip + turn ruler on strip), story (big spring), estimator (spring bar), proof (prices hung on turn ticks, reviews split by seams), footer (`30/30 · balanced`, roller at track bottom). ✓

## Decisions (headless)
- h1 changed from "We lift it today" to "Spring snapped? Leave the door down." — "today" is a same-day promise not in facts (DEMO-RULES §4); the safety line is the thesis and the brief's top trust driver.
- Story order follows a real repair so the counter is honest: 30→00 (tension off), 00 (swap), 00→30 (wind), 30 (balance), ✓ (reverse).
- Pin = CSS sticky inside a tall section, only under `.sw-motion` and ≥640; ScrollTrigger only reads progress.
- Form has the contract's 4 steps; "Is your car stuck inside?" is the first question of step 1.
- On light bands every sodium mark (text, buttons, coil fill) uses #A6470A; #F26B2A only on dark fields with dark text on it.

## Open issues
(none yet)


## Open issues
- Photo: niches/garagedoor/media/manifest.json still has every item in draft, including hero-A2 (the hero since build). No approved spring, cone or bar frames exist, so the photo move uses a drawn frame. Re-plan the story and price frames when the curator approves.
