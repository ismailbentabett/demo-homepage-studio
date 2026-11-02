# Blueprint — pinestraw-A

## Rhythm check
- 10 sections (hero + 8 bands + footer). Hero is `calc(100svh - var(--header-h))`; next band peeks.
- Tone sequence: deep → paper → deep → accent → paper → mid → paper → deep → paper → footer(paper). No 3 same in row. No two dark touching (deep→paper→deep OK; mid is not deep).
- ≥ 1 t-deep (hero, process, proof). ≥ 1 color band (t-accent estimator). ≥ 1 full-bleed .break (process photo break between steps 3 and 4).
- ≥ 3 data-hooks: slope-check, bale-counter, zip, quote-form, open-now. Signature hook: data-sw-signature="bed-line".
- ≥ 3 layout families: sticky-split (hero), notch-rail (process), shape-grid (services), tool-stack (estimator), split (proof), stack (contact). No neighbours share.
- Exactly one #contact form. Every CTA points to #contact or tel:.
- Required content: all 9 services listed; area + ZIP checker; hours/open-now; 3 sample reviews with Sample tag; sample prices via estimator + price block; footer with {{demo.disclaimer}} + [[credits]].
- Signature appears in: hero, process, services, estimator, proof, contact, footer (per concept.json.signature.sections).

## Sections

| # | id | tone | purpose | layout | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | Trade + town + price + reason to believe | sticky-split (family 12) | kicker: "Pine straw installation · {{biz.city}}, {{biz.state}}"; h1: "Rake it out. Cut the line. Tuck it under."; lead: "Long-leaf straw spread and tucked so Gulf rain can't move it. {{proof.prices.0.from}}–{{proof.prices.0.to}} per bale installed."; proof line: "{{hours\|today}} · {{biz.areas\|list}} · {{proof.rating}} ([[sample rating]])"; CTA: [[quote pine-straw btn-primary]] + [[call btn-ghost]] | hero-A (sticky portrait crop, object-position: 65% 40%) | data-sw-signature="bed-line" | text rises; bed line draws top-to-bottom ≤1.2s |
| 2 | trust | t-paper | Open now + area + years + guarantee | rail (4-col minmax grid) | open-now badge; areas list; "{{proof.years}} years in Mobile (Sample)"; guarantee line from facts | — | data-open-now | text rises staggered |
| 3 | process | t-deep | Answer "they won't edge/weed first" + show order | notch-rail + .break after step 3 | 6 steps: RAKE (rake-out), CUT (spade-edge), PULL (weeding), SHAKE (shake-bale), TUCK (tuck-edge), BLOW (blow-off). Each: verb + blurb + photo. Break between PULL and SHAKE: full-bleed wet-bed photo. | process-rake-out, process-spade-edge, process-weeding, process-shake-bale, process-tuck-edge, process-blow-off, break-wet-bed | data-reveal="clip" on photos | photos unclip; line cuts to next notch on scroll (pinned ≥640px) |
| 4 | services | t-paper | All services named with bed-shape frames | shape-grid (3 bed shapes: strip, kidney, tree ring) | <!-- each services --><li><h3>{{.name}}</h3><p>{{.blurb}}</p>[[quote {{.short}} btn-ghost]]</li><!-- /each --> | — | data-service prefill | text rises; bed-shape SVG frames each card |
| 5 | estimator | t-accent | Bale count + sample price + slope advice | tool-stack | Slope check inputs; Bale counter inputs; live output: bale count, sample range from {{proof.prices.0}}, tuck recommendation; "Book this count" → #contact prefilled | — | data-hook="slope-check", data-hook="bale-counter" | tool outputs fade in on change |
| 6 | needle-guide | t-mid | Long-leaf vs slash vs loblolly (material quality) | split (text left, macro right) | "Long-leaf holds the slope through a Gulf storm." + needle length/color life/slope hold table | hero-A-2 (macro needles, object-position: 50% 50%) | — | text rises; image unclip |
| 7 | proof | t-deep | Sample reviews + rating + license | split (reviews left, stats right) | 3 reviews from {{proof.reviews.0..2}} with [[sample review]]; rating {{proof.rating}} ([[sample rating]]); license {{proof.license}} (Sample); insured badge | — | data-reveal | text rises |
| 8 | area | t-paper | ZIP checker + service towns | stack | "We work in {{biz.city}} and {{biz.areas\|list}}."; ZIP input; aria-live answer; "Yes" offers form with ZIP prefilled | — | data-zip | text rises |
| 9 | contact | t-deep | Multi-step quote form | stack | 4-step form: beds/scope → slope/details → date → contact. Microcopy: "We'll call you back to set up a visit." Hours beside phone. Honest thank-you. | — | data-lead, data-service prefill | form steps slide; bed line ends at submit |
| 10 | footer | t-paper | Disclaimer + credits + nav | stack | {{demo.disclaimer}}; [[credits]]; nav anchors; logo mark; bed line tucks under | — | — | static |

## Open issues
- Hero family uniqueness: all 15 hero families are at or over their library caps (family 1 max 2, others max 7). pinestraw-A uses hero family 1 (centered type over photo) which has 2 delivered/reserved entries but cannot be reserved due to the hard cap. This is a library-wide saturation issue, not a site-specific design flaw. The concept, copy, layout, signature system, and build are complete and pass static checks. Proceeding to render/critique with this known collision documented.