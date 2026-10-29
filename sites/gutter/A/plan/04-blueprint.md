# gutter-A · Blueprint

Fixed left rail (≥1100px, outside the sections): `.rail` = 3px copper line (#C0662F, 3.0+ on paper, mid and deep) with 10-ft ticks every 80px. Its fill grows with scroll, and the `.readout` chip (ink on paper, its own background) counts `0 ft · fall 0 in` → `90 ft · fall 2¼ in`. `data-hook="readout"`. Static fallback = final values.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-paper | first 5 s: what it is, call, text a photo, price the run | `diagonal` (family 11) | kicker services · `{{biz.city}}, {{biz.state}}`; h1; lead; [[call]], sms, "Price my run" → #size; proof line `{{hours\|today}}` · `{{biz.areas.0}}` and nearby · `{{proof.rating}}` [[sample rating]] · from `{{proof.prices.0.from}}`/ft [[sample pricing]] | `hero` (hero-A2), clipped on the slant | `data-sw-signature="pitch-run"` (the hero run: end cap, ticks 0-40 ft, drop parks at the photo seam) | intro: run draws (DrawSVG-free: stroke-dashoffset), photo unclips along the slant, the drop rolls (≤1.1 s). h1 never hidden |
| 2 | `#services` | t-mid | "one generic list" / "is it the gutter?" | `hung-row` | 8 services (repeater): profile glyph, name, blurb, [[quote]] | drawn profiles | — | stagger rise, cards hang lower left→right |
| 3 | `#how` Fittings | t-deep | "Is it even the gutter?" + "they'll sag in a year" | `track` | 6 fittings: End cap / Hanger / Seam / Outlet / Elbow / Splash block | 6 drawn fittings | `data-hook="roll"` | pinned ≥900 (`calc(6 * 55svh + 100svh)`, CSS sticky + ScrollTrigger scrub of `--sw-p`); stacked <900 |
| 4 | `#size` tools | t-paper | "no prices anywhere" / "5 vs 6 inch?" / "how many drops?" | `workbench` | Size check (length, depth, pitch, rain) → size + fall over run + trough drawn; Downspout count (length, size, corners) → drops drawn; sample `{{proof.prices.0.*}}`, `{{proof.prices.3.*}}` | drawn troughs + run | `data-hook="size-check"` | quiet (no entrance: a tool) |
| 5 | `.break` | t-deep | breath; a whole house with gutters at both corners | `bleed` | caption (generic) | `break` (hero-A1) at `68% 45%`, scaled 1.25 from the right ≥640 so the left 20% never shows | — | clip reveal |
| 6 | `#trees` | t-mid | "expensive guards that don't work under my trees" | `chips` | tabs oak / sweetgum / pine / maple / none: drops + when, guard type, cleaning rhythm, [[quote Guards]] / [[quote Cleaning]] | drawn seed marks | `data-hook="sorter"` | none (tool) |
| 7 | `#reviews` | t-paper | "they'll blow it on my beds" | `stamps` | 6 reviews (repeater) stamped `{{#}}0 ft · town · service`, `{{proof.rating}}` / `{{proof.reviewCount}}` [[sample review]] | — | — | rise |
| 8 | `#prices` | t-accent | "no prices" | `rack` | 5 rows from `proof.prices` (repeater) with trough notch; [[sample pricing]]; guarantee `{{proof.guarantee}}` (Sample) | drawn notch | — | rows stagger |
| 9 | `#area` | t-paper | "do you serve my town? when can you come?" | `ledger` | `{{biz.areas\|list}}`, `{{hours\|table}}`, `{{hours\|today}}`, `{{proof.years}}` years (Sample) | — | — | none |
| 10 | `#contact` | t-deep | the one form + ZIP | `splash` | ZIP checker, 4-step form (job → details → when → contact), text-a-photo sms | — | — | form rises |
| — | footer | t-mid (footer, not a section) | the water lands | downspout | drawn downspout + elbow + splash block + landing drop, readout `90 ft · 2¼ in fall`, nav, `{{demo.disclaimer}}`, [[credits]] | drawn | `data-hook="land"` | downspout draws, drop lands, one ring |

## Rhythm gate (METHOD §4)
- 10 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`, services band peeks ✓.
- Tones: paper · mid · deep · paper · deep · mid · paper · accent · paper · deep. No 3 of a category in a row; deep never touches deep (3|4|5 = deep/paper/deep, 9|10 = paper/deep) ✓.
- ≥1 t-deep (3), ≥1 colour band (#prices t-accent), ≥1 full-bleed `.break` (5) ✓.
- Hooks: pitch-run (signature), roll, size-check, sorter, readout, land = 6 ✓.
- Layout families: diagonal, hung-row, track, workbench, bleed, chips, stamps, rack, ledger, splash: 10, no neighbours alike ✓.
- Exactly one `#contact`; every CTA → `#contact`, `#size` (tool, ends in a quote hand-off), `tel:` or `sms:` ✓.
- Required content: 8 services ✓, area + ZIP ✓ (#area, #contact), hours/open-now ✓ (hero, #area, #contact), sample reviews ✓, prices only in the Sample rack / tool outputs ✓, footer disclaimer + credits ✓.
- Signature in concept.json sections: hero (run + drop), story (#how fittings), services (hung under a run on hangers), proof (review ft stamps + price trough notches), tools (fall over the run, drops on a run), footer (downspout + splash block) ✓.

## Decisions (headless)
- h1 shortened to "A quarter inch every ten feet." so it holds 2 lines at 1440 (the strategy's second sentence moves into the lead).
- The pin is CSS `position: sticky` inside a tall section (only under `.sw-motion` at ≥900px); ScrollTrigger only scrubs `--sw-p`. No pin under 900.
- The rail colour is #C0662F (≥3:1 on paper, mid and deep as a graphic); the readout chip carries its own paper background so its text is always ink on paper.
- The tools' maths (size, fall, drops) lives in app.js outside the motion guard, so it works under reduced motion. No dollar figure is in app.js; prices are static tokens next to the outputs.

## Open issues
(none yet)

## Round 1
Elevate (first screen + photo): the hero's copper ruler now drops off its 40 ft end onto the real gutter lip in the (mirrored) hero photo, runs it to the outlet and down the spout, with the drop rolling the whole path on intro; the three frames (hero, new end-cap detail in #services, break) share one grade, and the break is cropped to the roofline with the run + ft ticks sitting on the real eave and a scroll clip that follows the run. Fixes: inactive story steps keep full-contrast text (state shown by icon/dot only), story run falls 4deg, h1 names Memphis gutters, one action name ("Price my run" / "Price this run"), stacked tools head, compact phone service list, 16px ink card body, 2px Sample tags, footer links 48px in 2 columns, bar spacer in footer tone, curly apostrophes in review text (app.js).
Open: on phones the break photo still shows the whole house (a tighter crop would upscale the 1170 file).
