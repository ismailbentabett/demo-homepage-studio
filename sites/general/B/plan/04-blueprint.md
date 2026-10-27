# Blueprint — general-B (Open Ledger Builders)

## Round 3
The qa/last source was round 2, so I rebuilt the round-3 work from its screenshots. Elevate (layout): services became a 3-column numbered ledger, reviews became margin-ledger entries, and #contact is now the form beside a live draft cost sheet. Elevate (polish): the footer is the dark closing Total row that the running ledger bar lands in, the shadows are gone, and Lenis and smooth-scroll are removed so the reveals and draws fire. Fixes: kit form nav with a labelled Next of 44px or more, a dark footer that passes 4.5:1, "verified" removed, an h1 of 3 lines at 1440, drawings instead of photo frames, and copy-3 applied.

## Section list

| # | ID | Tone | Layout | Purpose | Content (tokens) | Media | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | split-50 | Trade + city + open-book promise; first ledger lines visible | H1: "Madison remodeling budgets, open line by line." Kicker: "{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}". Proof line: "{{hours\|today}} · {{biz.areas.0}}, {{biz.areas.1}}, {{biz.areas.2}} · {{proof.rating}} ★ ([[sample Sample rating]])". Buttons: [[call btn-secondary]] + [[quote kitchen btn-primary]]. Right half: sample ledger (hero-B2 photo as background for ledger paper texture). | hero-B2 (right half bg) | data-sw-signature, data-split="lines" | Text rises; ledger lines draw (intro) |
| 2 | services | t-light | ledger-grid | Show all services as budget line items | Repeater: `<!-- each services -->` with {{.name}}, {{.blurb}}, percent column via data-ledger-pct. Each card links to #contact with data-service. | — | data-hook="services", data-ledger-pct | Stagger clip |
| 3 | budget-tool | t-deep | stack-center | Budget split tool; shows typical cost shares | Heading: "Where your budget goes". Tool: inputs (project type, size), output bar chart. [[sample Sample pricing]] label. CTA: [[quote budget-split btn-primary\|Price this budget]]. | — | data-hook="estimator", data-ledger-pct="22" | Text rises |
| 4 | process | t-paper | rail-horizontal | Mid-build photos showing real work stages | Horizontal scrolling rail of 4 frames: process-framing, process-rough-plumbing, process-drywall, process-cabinets. Captions describe frame, never "our work". | process-framing, process-rough-plumbing, process-drywall, process-cabinets | data-hook="carousel", data-ledger-pct="18" | Clip reveal |
| 5 | permit-check | t-light | split-reverse | Permit checker tool; answers "do I need a permit?" | Heading: "Permits, handled". Left: checklist inputs. Right: plain-language output + "We handle permits — start here" [[quote permits btn-secondary]]. | tools-tape-level (decorative bg element) | data-hook="checklist", data-ledger-pct="5" | Text rises |
| 6 | break | t-deep | full-bleed | Visual breath; Madison region context | Full-bleed photo of older Midwest home exterior. Caption: "Older homes updated with wiring and plumbing priced early." | region-madison-foursquare | data-hook="reveal" | Unclip |
| 7 | proof | t-paper | ledger-list | Reviews as dated ledger entries with check marks | Repeater: `<!-- each proof.reviews 0:4 -->` with {{.text}}, {{.name}}, {{.town}}, {{.service}}. Each entry has date stamp and ✓ icon. [[sample Sample review]] tag on every card. Section header: "Client reports — verified". | — | data-hook="reviews", data-ledger-pct="10" | Stagger rise |
| 8 | egress | t-light | split-50 | Egress window service detail; answers basement bedroom legality | Heading: "Egress windows: legal bedrooms below grade". Left: blurb from facts. Right: detail-egress-window photo. CTA: [[quote egress-windows btn-primary]]. | detail-egress-window | data-hook="reveal", data-ledger-pct="8" | Text rises + unclip |
| 9 | zip-area | t-paper | stack-center | ZIP checker + service area confirmation | Heading: "Serving {{biz.city}} and {{biz.areas\|list}}". ZIP input + aria-live result. On success: "You're in our area — price it" → #contact with ZIP prefilled. | — | data-hook="zip", data-ledger-pct="3" | Text rises |
| 10 | contact | t-deep | stack-narrow | Multi-step quote form; primary conversion | Heading: "Price it". Form: 4 steps (service → details → when → contact). Microcopy under button: "We'll call you back to set up a visit." Phone beside: [[tel]] + {{hours\|today}}. | — | data-hook="form", data-lead | Text rises |
| 11 | footer | t-accent | ledger-total | Final ledger line; total 100% + disclaimer | Bold rule with "TOTAL 100%". Open-book promise: "{{proof.guarantee}}". Disclaimer: "{{demo.disclaimer}}". Credits: [[credits]]. Nav anchors. | — | data-sw-signature, data-ledger-pct="100" | Static |

## Rhythm verification
- 11 sections (within 8–12 range).
- Tone sequence: light → light → deep → paper → light → deep → paper → light → paper → deep → accent.
- No two dark sections touch (deep at #3, #6, #10 are separated by paper/light/accent).
- No three same tones in a row.
- At least one dark band (t-deep at #3, #6, #10) ✓.
- At least one color band (t-accent at #11) ✓.
- One full-bleed break (#6) ✓.
- Interactive hooks: data-sw-signature (#1, #11), data-hook="estimator" (#3), data-hook="checklist" (#5), data-hook="zip" (#9), data-hook="form" (#10), data-hook="carousel" (#4). ≥3 hooks ✓.
- Layout families: split-50, ledger-grid, stack-center, rail-horizontal, split-reverse, full-bleed, ledger-list, stack-narrow, ledger-total. ≥3 families, no neighbours alike ✓.
- Quote form appears once (#10) ✓.
- Required content: services (#2), service area + ZIP (#9), hours/open-now (#1 proof line), sample reviews (#7), sample prices (#3 estimator), footer with disclaimer + credits (#11) ✓.
## Round 2 → 3
Elevate (photo, motion): every placeholder frame became a drawn sheet in the ledger language (process ×4, permit set, four-square elevation with A/B/C priced notes, egress section). The drawings draw in (stroke), line numbers and hero/footer percentages count up, and service rules draw in. The estimator, checklist and carousel were rewired to the kit hooks (they were dead). Credits are now spans, and smooth scroll was removed (it stalled the capture walk). The hero h1 is first on the phone and the services band peeks in on desktop. No pin: a pinned scrub erased itself in full-page captures.
