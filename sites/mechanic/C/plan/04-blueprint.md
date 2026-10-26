# Blueprint — mechanic-C (Frost Heave Auto Repair)

## Section list

| # | ID | Tone | Purpose | Layout | Content tokens | Media slot | Hooks | Entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | First 5s: season + temp + CTA | magazine-cover | `{{biz.name}}`, kicker "The car-year · Breakup issue", h1 "Auto repair for the Anchorage car-year", proof line, CTAs | hero-C1 | data-sw-signature="thermo-rail" | Cover lines slide in; temp ticks |
| 2 | winter-story | t-light | Winter starting objection | split-story | Season tag "−8°F · January", h2 "Block heaters and batteries", blurb, service list (0,1) | season-block-heater | data-reveal | Photo unclip; readout ticks |
| 3 | breakup-story | t-mid | Breakup damage trust | split-story (reversed) | Season tag "34°F · April", h2 "Frost heaves and potholes", blurb, service list (2,7) | place-snow-lot | data-reveal | Color crossfade to spruce |
| 4 | tools-band | t-paper | Safe-to-drive? + diagnosis | grid-3 | Warning light decoder, Noise finder, Drop-off planner | — | data-tabs, data-filter, data-form-step | Stagger cards |
| 5 | break | t-deep | Visual pause, summer mood | full-bleed | — | hero-C3 | — | Clip reveal |
| 6 | summer-story | t-light | Road trip trust | split-story | Season tag "64°F · July", h2 "Before you drive to Denali", blurb, service list (6) | process-road-test | data-reveal | Readout ticks to July |
| 7 | proof | t-paper | Trust: photos + prices before yes | proof-grid | Guarantee, sample prices (proof.prices), sample reviews (proof.reviews 0-2) | hands-pointing-part | data-estimator, data-reveal | Cards stagger |
| 8 | services | t-accent | All services visible | list | `<!-- each services -->` | — | data-service | List items rise |
| 9 | area | t-light | ZIP check + service area | stack | `{{biz.city}}`, `{{biz.areas|list}}`, ZIP checker | — | data-zip | Text rise |
| 10 | contact | t-paper | Conversion: multi-step form | form | Quote form steps 1-4 | — | data-lead | Form visible |
| 11 | footer | t-deep | Credits + disclaimer | rail | `{{demo.disclaimer}}`, `[[credits]]`, thermo reset "64°F · July" | — | data-sw-signature="thermo-rail" | Static |

## Round 1

**Elevate moves:**
- Layout: breakup-story becomes a pinned scroll story (desktop only) — frost-heave photo stays fixed while alignment/suspension cards scroll past, breaking split-story repetition.
- Motion: thermo-rail temperature readout driven by GSAP ScrollTrigger scrub (continuous mercury rise/fall synced to scroll), replacing discrete onEnter ticks.

**Fixes applied:**
- Must-fix: replaced all 6 placeholder alt texts with manifest descriptions.
- Should-fix: tightened split-story copy; grouped services by season with subheads; added aria-live region for thermo-rail temp; varied reveal motion by section role; restyled estimator output in signature mono readout language.

## Rhythm check
- 11 sections (within 8-12).
- Tone sequence: deep → light → mid → paper → deep → light → paper → accent → light → paper → deep. No two dark touching. One color band (t-accent at #8). One full-bleed break (#5).
- Layout families: magazine-cover, split-story, split-story-reversed, grid-3, full-bleed, split-story, proof-grid, list, stack, form, rail. No two neighbours share a family.
- Interactive hooks: data-sw-signature (hero, footer), data-tabs (tools), data-filter (tools), data-form-step (tools), data-estimator (proof), data-zip (area), data-lead (contact), data-service (services). ≥ 3 distinct hooks including signature.
- Required content: all services (#8), service area + ZIP (#9), hours/open-now (hero proof line + header), sample reviews (#7), sample prices via estimator (#7), footer with disclaimer + credits (#11).
- Quote form appears once (#10); all CTAs above point to #contact or tel:.