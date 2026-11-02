# Blueprint — moving-C (Kestrel Moving & Haul)

## Round 1
Elevated wow by making haul sorter a tappable keep/donate/landfill tool with printable plan output. Elevated motion by implementing pinned canyon scroll story at ≥640px with elevation counter driven by scroll position, and varying section entrance patterns (clip for photos, scale for counters, stagger for cards, fade for text). Fixed 320px overflow via contain on route-map. Added continuous vertical route connector at ≥900px. Lightened canyon scrim from 0.75 to 0.55 opacity. Updated area photo alt text to remove geographic mismatch.

| # | id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-light | Trade + town + act + route map | map-hero | h1: Boulder movers & haul-away; proof line (hours · area · sample rating); [[call]]; [[quote]] | hero-C1 | data-sw-signature="route-line" | Route lines draw on map, headline fades in |
| 2 | services | t-paper | Show all services as route stops | route-rail | <!-- each services --> name, blurb, distance label, [[quote .short]] | — | data-reveal-stagger | Text rises staggered |
| 3 | canyon-story | t-deep | Mountain/canyon move objection | split-story | Small truck for narrow roads; elevation 5400→8200 ft; review Leah V. Nederland | region-apartment-stairs | data-sw-signature, data-count="8200" | Pinned ≥640: route steepens, elevation counts |
| 4 | lease-calendar | t-accent | August lease timing | statement | Static calendar visual; book early note; [[quote "August lease-change moves"]] | season-autumn-street | data-hook="lease-calendar" | Clip reveal |
| 5 | haul-away | t-light | Junk destination trust | three-col-sorter | Donate → recycle → landfill order; estate cleanout review Nate C. Lafayette | crew-from-behind | data-hook="haul-sorter" | Items slide into columns |
| 6 | prices | t-paper | Sample pricing transparency | grid-cards | <!-- each proof.prices --> item, from/to, unit, note; [[sample pricing]] | — | data-estimator | Cards unclip |
| 7 | reviews | t-mid | Social proof with town pins | route-rail | <!-- each proof.reviews 0:4 --> text, name, town, service; [[sample review]] | hands-carrying-box | data-reveal | Text rises |
| 8 | area | t-light | ZIP check + service towns | split | {{biz.areas\|list}}; ZIP input; open-now badge; hours table | tool-hand-truck | data-zip, data-open-now | Split reveal |
| 9 | contact | t-deep | Primary conversion | form-stack | Multi-step form; honest thank-you; microcopy; [[tel]] beside hours | — | data-lead | Form step transitions |
| 10 | footer | t-light | Disclaimer + credits + end of route | stack | {{demo.disclaimer}}; [[credits]]; "End of route: you're home." | — | — | Static |

## Rhythm gate check

- **Sections:** 10 (within 8-12). Hero is `calc(100svh - var(--header-h))`; section 2 peeks in.
- **Tone run:** light → paper → deep → accent → light → paper → mid → light → deep → light. No three same in a row. No two dark touching (deep at #3, next is accent; deep at #9, prev is light). PASS.
- **Dark band:** Yes (#3 canyon-story, #9 contact). Color band: Yes (#4 lease-calendar t-accent). Full-bleed break: No `.break` class yet — will add to hero or canyon-story as full-bleed photo. ADJUSTMENT: hero uses map SVG, not photo break. Add `.break` to canyon-story as full-bleed photo behind split. Updated: canyon-story gets `class="break"` on its frame.
- **Hooks:** data-sw-signature (hero, canyon-story), data-zip (area), data-estimator (prices), data-lead (contact), data-open-now (area), data-hook="lease-calendar", data-hook="haul-sorter". ≥3 hooks including signature. PASS.
- **Layout families:** map-hero, route-rail, split-story, statement, three-col-sorter, grid-cards, form-stack, stack. ≥3 unique, no neighbours share. PASS.
- **One #contact:** Yes, section 9. All CTAs point to #contact or tel:. PASS.
- **Required content:** All 8 services via repeater. Area + ZIP checker in section 8. Hours + open-now in section 8. Sample reviews with tag in section 7. Sample prices via estimator/price block in section 6. Footer has disclaimer + credits. PASS.
- **Signature sections:** concept.json lists ["hero","services","canyon-story","haul-away","reviews","contact","footer"]. Blueprint includes all. PASS.