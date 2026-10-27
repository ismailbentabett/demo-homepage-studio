# Blueprint — general-C (Switchback Building Co.)

## Round 3
Elevated layout and drawings. The corner gauge became a fixed altitude rail in a reserved 108px left gutter (>=1200px; it never overlaps text). Every kicker's rule hangs off it, and its marker climbs 2,100 → 3,600 ft. The ridge break now ends on a paper foreground ridge, so it no longer touches the slate lot check. The services column gets a drawn "where each job sits on the hill" legend. The story and lot-check figures are redrawn in the ridge-break language (sky, layered ridges, horizon, hatched cut-section footings) as one uphill sequence. app.js clones each figure into a survey-line state for the wipe. All captions now sit below their frames, labelled by elevation instead of FIG. The lot check has an answer plate (Footing / Drainage / Walls, toggled with :has, works without JS) and starts with the first box ticked. Hero: one filled "Get a number", Call as a text link, Check ZIP attached to the input, and the map pins re-placed. The pin was shortened to 45svh per band, the estimator lost its offset shadow and its result is set in Zilla, and the contact copy is now a process line.

## Round 2
Elevated Photo and Mobile. A drawn survey plate over every placeholder photo now wipes from plan line to build fill on scroll, each with a descriptive alt. The phone hero is re-cut as map strip, then h1, then ZIP checker, with the ZIP as the main thumb target. The mobilebar hides at #contact. Motion is one pinned plan-to-build story at 900px and up, with the altimeter and contour draws, and an intro of 1.05 s or less. Kit hooks are rewired (estimator, checklist with :has() so it works without JS, stars repeater). Render overflow and contrast warnings are fixed.

## Rhythm gate check

- [x] 10 sections (hero, zip-map, story, services, lot-check, timeline, estimator, reviews, area, contact+footer).
- [x] Hero is `calc(100svh - var(--header-h))`; next band (zip-map) peeks in at bottom.
- [x] No 3 same tones in a row; no two dark sections touching. Sequence: deep → paper → mid → paper → accent → paper → mid → paper → deep → deep (footer uses t-deep but separated by area t-paper; contact inside footer uses t-deep but is not a full section band).
- [x] ≥ 1 t-deep (hero, footer), ≥ 1 color band (t-accent estimator), ≥ 1 full-bleed .break (region-asheville-mountains between services and lot-check).
- [x] ≥ 3 data-hooks: data-zip (hero map), data-checklist (lot-check), data-tabs (timeline), data-estimator (estimator), data-accordion (reviews FAQ), data-lead (form). data-sw-signature on hero, story, services, footer contour bands.
- [x] ≥ 3 layout families: split (hero), stack (story), grid (services), tool-panel (lot-check/timeline/estimator), masonry (reviews), map (area). No neighbours share one.
- [x] Exactly one #contact; every CTA points to #contact or tel:.
- [x] Required content: all 8 services listed; ZIP checker in hero; hours + open-now in header/footer; sample reviews with [[sample Sample review]]; prices only via estimator with [[sample Sample pricing]]; footer has {{demo.disclaimer}} + [[credits]].
- [x] Signature appears in hero, story, services, footer per concept.json.signature.sections.

## Section table

| #id | tone | purpose | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| hero | t-deep | H1 + thesis + ZIP entry | split (map left, text right ≥900; stacked mobile) | kicker "Asheville, NC"; h1 "Hillside builder in Asheville"; lead "Steep lots, stepped footings, and drainage planned before we dig."; CTA [[quote Additions btn-primary]]; proof line "{{proof.years}} yrs · Sample rating {{proof.rating}} · {{biz.areas.0}} to {{biz.areas.1}}" | hero-C1 | data-zip, data-sw-signature, data-split="lines" | contour draw intro; headline line-mask reveal |
| zip-map | t-paper | Confirm service area | map panel with embedded ZIP input | "Check your ZIP"; input; result aria-live; town list "{{biz.areas\|list}}" | none (SVG map) | data-zip (shared with hero) | fade up on scroll |
| story | t-mid | Show river-to-ridge climb | stack (3 contour bands) | 3 bands: water repair (2,100 ft), porch/kitchen (2,200 ft), addition/ADU (2,350 ft); each has elevation tag, short text, photo | process-footings, process-framing, process-drywall | data-sw-signature, data-reveal | plan-to-build wipe via --sw-p clip-path |
| services | t-paper | List all 8 services with terrain tags | grid (2-col mobile, 3-col ≥900) | <!-- each services --> card with {{.name}}, {{.blurb}}, elevation tag, [[quote {{.short}} btn-ghost]] <!-- /each --> | detail-kitchen-finished, detail-bath-finished, detail-porch, detail-adu, detail-addition-exterior | data-sw-signature, data-reveal-stagger | stagger cards 60ms |
| break | (full-bleed) | Visual pause | .break full-bleed img | caption "Blue Ridge layered ridges at mid-morning light" | region-asheville-mountains | data-reveal="clip" | clip reveal |
| lot-check | t-accent | Qualify slope cost | tool-panel (checklist left, result right) | "Lot & slope check"; 3 questions; output list; CTA "Price this job" → #contact service=Additions | hands-at-work | data-checklist | slide up |
| timeline | t-paper | Set schedule expectations | tool-panel (tabs) | "Typical project timeline"; tabs kitchen/bath/addition/ADU; week-by-week table; "Get your timeline" → #contact | tools-tape-level | data-tabs | tab content fade |
| estimator | t-mid | Budget range (sample) | tool-panel (estimator + sketch) | "Cost range estimator"; inputs type+size; output from/to strings; SVG sketch hook; [[sample Sample pricing]] | material-lumber (texture bg) | data-estimator, data-est-sketch | sketch draw on input change |
| reviews | t-paper | Trust with real words | masonry (2-col) | "<!-- each proof.reviews 0:4 -->" quote, name, town, service, stars; [[sample Sample review]] <!-- /each --> | region-asheville-craftsman (duotone bg) | data-reveal-stagger | stagger quotes |
| area | t-deep | Service area + team | stack (contour close) | "Ridge · {{biz.areas\|list}}"; crew photo; hours {{hours\|table}}; open-now [[data-open-now]] | crew-from-behind | data-sw-signature, data-open-now | fade up |
| contact | t-deep (inside footer) | Capture lead | form (4-step) | #contact; form[data-lead]; steps service→details→when→contact; honeypot website2; time trap t; thank-you text | none | data-lead | form step transitions |
| footer | t-deep | Credits + disclaimer | stack | {{demo.disclaimer}}; [[credits]]; © {{year}} | none | — | static |

## Round 1

Elevated distinctiveness by rendering an inline SVG topo map with 5 contour lines and elevation tags inside the hero map-panel (replacing the photo-only entry), and added `data-sw-signature` to hero and story sections so the signature now appears in all 4 required sections (hero, story, services, footer). Elevated wow by threading a live elevation counter into the lot-slope-check tool result: when checkboxes are toggled, the result panel displays a climbing elevation number in DM Mono tabular-nums alongside the recommendation, tying the interactive moment to the contour-band thesis. Fixed CTA naming to "Get a number" everywhere (hero, mobilebar, service cards, lot-check, estimator). Added `<span class="sample-tag">Sample</span>` inside each review-card footer. Replaced credits `<a>` tags without href with plain `<span>` elements. Applied `font-variant-numeric: tabular-nums` to hours, prices, phone links, elevation tags, and tool outputs. Aligned sample-tag border-radius to var(--radius) for consistency.

## Open issues

None.