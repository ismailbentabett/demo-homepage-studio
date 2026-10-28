# appliance-C · Blueprint ("Freezer-Lid Tape List")

## Round 1
Elevate type + firstScreen: the h1 now names town + trade and sits on a tape strip as the first line of the lid, with the month marquee butted under it and the first tick landing at the end of the h1; every section heading became a dated entry (margin month + Literata italic + a tick that draws on entry) and the eyebrows were retired. Also: 9 new month vignettes (no repeats in the year story), one archive photo (hero-A1, cropped above the range panel so no logo shows) taped beside the services heading, review notes taped down in sequence and the 7th note set wide, thaw frost fills on entry, curly apostrophes and copy-1 replacements throughout.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #hero | t-paper | first 5 s: food + season, call/text | statement (centred) | kicker `{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}`, h1, lead, `[[call]]` + sms, proof line `{{hours\|today}}` · `{{proof.rating}}`/`{{proof.reviewCount}}` [[sample rating]] · diagnostic `{{proof.prices.0.from}}-{{proof.prices.0.to}}` [[sample pricing]]; tape marquee of 6 month entries (sig.) | drawn vignettes (sprite) | `data-hook="marquee"` | h1 line mask 70 ms, marquee slides in, first tick draws 0.9 s |
| 2 | #thaw | t-deep | "Everything will thaw" → call/text | split (copy left, tool right) | USDA 48 h / 24 h text (static, JS-off), thaw clock radios, freezer outline with frost line, call + sms | chest vignette (large) | `data-hook="thaw-clock"` | text rises; frost line drains (dial) |
| 3 | #services | t-light | every service, prefill the form | ledger (month margin + ruled tape lines) | `<!-- each services -->` name, blurb, `[[quote]]` (sig.: tick box per line) | small vignettes | `data-hook="services-ticks"` | lines tick in stagger |
| 4 | #lid | t-accent `.break` | the one rule, full bleed | banner | "Keep the lid shut" statement + call | none | none | still (quiet section) |
| 5 | #year | t-deep | contractor wow: local by calendar | ribbon story (pinned ≥ 640, stacked < 640) | 12 month tape cards (sig.), vignette frosts/warms | 7 vignette symbols | `data-hook="year"` `data-sw-signature` | scrubbed track + ticks |
| 6 | #garage | t-paper | "garage fridge is just broken" → form prefill | split reversed (tool left, copy right) | cold check: month + °F slider → explanation; kit `{{proof.prices.2.from}}-{{proof.prices.2.to}}` [[sample pricing]]; `[[quote Garage fridge]]` | fridge vignette | `data-hook="cold-check"` | text rises |
| 7 | #prices | t-mid | "$150 just to look", "sell me a new one", "part fails again" | sheet (tape price lines + side tool) | `<!-- each proof.prices -->` (sig.: pencil price in margin) + [[sample pricing]] strip; `{{proof.guarantee}}` [[sample promise]]; repair-or-replace tool → form prefill | none | `data-hook="fix-or-replace"` | lines tick |
| 8 | #reviews | t-light | trust: locals by town | notes (staggered paper notes under tape) | `<!-- each proof.reviews -->` (sig.: notes under tape, pencil stars) + [[sample review]] each | none | none | notes rise, stagger |
| 9 | #area | t-paper | "national call centre" | route (3 columns: towns / ZIP / hours) | `{{biz.city}}`, `<!-- each biz.areas -->`, ZIP checker, `{{hours\|table}}`, owner `{{biz.owner}}`, `{{proof.years}}` [[sample years]] | none | `data-zip` | text rises |
| 10 | #contact | t-mid | the last blank line → book | form (ruled tape sheet) | 4-step form: appliance → symptom + model + ZIP → when → contact; thank-you honest (sig.: tick on submit) | none | `form[data-lead]` | still |
| — | footer | t-deep | torn final entry | footer | `{{biz.short}} · [[tel]]` ticked, `{{biz.email}}`, `{{demo.disclaimer}}`, `[[credits]]` | none | — | tick draws |

## Rhythm gate (METHOD §4)
- 10 sections ✓. Hero `min-height: calc(100svh - var(--header-h))` with the header fixed over it, so the deep thaw band peeks in by `--header-h` ✓.
- Tones: paper · deep · light · accent · deep · paper · mid · light · paper · mid. No 3 of one category in a row ✓; no deep touching deep (deep · light · accent · deep) ✓.
- ≥ 1 t-deep (thaw, year) ✓ · colour band t-accent #lid ✓ · full-bleed `.break` #lid ✓.
- Hooks: marquee, thaw-clock, services-ticks, year (`data-sw-signature`), cold-check, fix-or-replace ✓ (6).
- Layout families: statement, split, ledger, banner, ribbon, split-rev, sheet, notes, route, form; no neighbours share ✓ (10 families).
- Exactly one `#contact`; every CTA → `#contact`, `tel:` or `sms:` ✓.
- Required content: 9 services (repeater), area + ZIP checker (#area and form step 2 ZIP field), hours + open-now (hero + #area), sample reviews tagged, prices only via the sample price list + tool, footer disclaimer + credits ✓.
- Signature sections from concept.json: hero (marquee tape), year-story (#year), services (ticked ledger), prices (tape price lines), reviews (notes under tape), form (last blank line), footer (torn final entry) ✓.

## Decisions (headless)
- Photo-free per plan/05-media.md. `ogPhoto: "hero-B1"`: the only approved-library frame that shows a home with a kitchen (studio floor plan render); every other manifest frame is a car, a navy technician, a face or a government document. The OG image is a share card only; nothing on the page uses it.
- Story length: 12 months scrub as `--n: 5` (55svh × 5 + 100svh = 375svh), close to the concept's 12 × 22svh + 100svh; 12 × 55svh would be 7+ screens (LEARNINGS T10). Sticky stage inside the tall section; the scrub is created only in `gsap.matchMedia('(min-width: 640px)')`; < 640 the cards stack and tick on enter.
- Repair-or-replace sits in #prices (the cost question: "what does it cost / is it worth it") rather than its own band, to stay at 10 sections.
- Wheat #C9962E appears only on t-deep (ticks, labels, focus) and in vignette hatch; never as text on paper/light/mid.

## Open issues
- Year card "April" stays 5 letters: `tools/lib/banned.mjs` rule `apr` (`APR`, case-insensitive) blocks the month abbreviation "Apr" as "0% APR". A false positive. The builder may not edit tools; the orchestrator can make the rule case-sensitive (CHANGELOG + recheck).
