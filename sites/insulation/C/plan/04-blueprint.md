# insulation-C · blueprint (fast)

| # id | tone | purpose (objection or path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 `#top` hero | t-field | 8-second path: call or find my house type; "that's my county" | map-hero (text 5 cols over the lake, drawn county map 7 cols, plate clipped to city pin) | pin chip `{{biz.city}}` + bearing, h1, ice-dam answer lead, `[[call]]`, "Find my house type" → #house-type, proof line `{{hours\|today}}` · `{{proof.rating}}` from `{{proof.reviewCount}}` + Sample tag | hero-C3 (eager, 4:5 plate, object-position 8% 62%, overcast grade) | `data-sw-signature` (map intro: shore draws, bands slide, pins drop) | text static; map intro ≤ 1.1 s |
| 2 `#houses` story | t-paper | "They'll blow fluff on top and leave" → seal first, in the order each house leaks | pinned-story (≥ 900 pinned map left / steps right; < 900 stacked cards) | 3 neighbourhoods: Eastwood 2.5-story frame, Tipp Hill clapboard, Liverpool colonial; each: house type, 3 leak spots, order of work, service link | none (3 drawn cut-aways) | `data-hook="story"` (viewBox zoom + leak arrows seal) | pinned zoom / clip on phone |
| 3 `#services` | t-mid | "They'll sell me foam for the whole house" → one job per house part | pin-grid (7 pin cards, mixed spans 2-1 / 1-2, mini bands at different angles) | `<!-- each services -->` name, blurb, `[[quote {{.short}}]]` | none (7 drawn icons) | `data-hook="pins"` (band angles, pin lift) | stagger rise |
| 4 `#ice-dam` `.break` | t-deep | Why ice dams happen, in one picture | break (full-bleed drawn eave section, statement overlaid) | statement + 3 numbered callouts (warm air / melt / refreeze) | none (drawn) | `data-hook="eave"` (warm-air arrow draws, ice ridge grows on scroll) | scrub on desktop, still on phone |
| 5 `#winter` tools | t-paper | "Is this attic heat?" + "how do I describe it" | tool-pair (2 tool panels side by side, uneven 7/5) | Ice dam risk quiz (5 checks, result line, hand-off to form) + Cold room log (rooms × when, note, hand-off) | none | `data-checklist` ×2, app.js hand-off | quiet (no entrance) |
| 6 `#house-type` | t-field | "What's wrong with *my* kind of house?" + vermiculite fear | tabs (house picker tabs over a drawn elevation + 3 spots + order) | 5 house types, 3 spots each, order of work, matching sample price row via token, "This is my house" → #contact | none (5 small drawn elevations) | `data-tabs`, hand-off prefill | panels fade |
| 7 `#proof` reviews | t-paper | "Will they wreck my ceiling / clapboard / upsell?" | strip-map (reviews hang from their town pins on a county strip, staggered heights) | `<!-- each proof.reviews -->` text, name, town, service + Sample tag; rating + count + Sample | none (drawn strip map) | `data-hook="strip"` (active pin lights, band slides) | cards drop from pins |
| 8 `#prices` | t-brick | "No idea of price" → sample bands + guarantee | ledger (price rows full width, mono ranges, guarantee stamp right) | `<!-- each proof.prices -->` item, from–to, unit, note + Sample pricing; `{{proof.guarantee}}` + Sample; `{{proof.years}}` sample | none | — | rows rise |
| 9 `#area` | t-mid | "Do you even come to Cicero?" + hours | map-split (mini county map left lights pin, ZIP form + hours right) | `[data-zip]`, `{{biz.areas\|list}}`, `{{hours\|table}}`, `{{hours\|today}}` | none | `data-hook="zip-pin"` (hit lights the town pin, band parks) | quiet |
| 10 `#faq` | t-deep | vermiculite, vents/mould, mess, winter work, dense-pack holes | accordion (questions left 7 cols, a pinned note right 5) | 6 Q&A, `{{proof.license}}` sample, `{{proof.insured}}`-backed "insured" with sample tag | none | `data-accordion` | none (quiet) |
| 11 `#contact` | t-paper | The form: house type → winter → ZIP + when → contact; ends on "your street on the map" | form-split (form 7 cols with band top edge, call column 5) | 4 steps, `[[call]]`, `{{hours\|today}}`, thank-you | none | `data-hook="form-pin"` (ZIP → pin label at step 4) | none |
| footer | t-deep (footer, not a section) | wrap-up: county map at 20%, band at bottom | footer-map | towns list, `{{biz.email}}`, `[[tel]]`, `{{demo.disclaimer}}`, `[[credits]]`, `{{proof.license}}` sample | none | `data-hook="footer-map"` | none |

## Rhythm gate (METHOD §4)
- Sections: 11 top-level `<section>`s (8-12 ✔). Hero `min-height: calc(100svh - var(--header-h))`, the paper story band peeks in (hero content sized to leave ~60-90px).
- Tone run: field(color) → paper → mid → deep → paper → field(color) → paper → brick(color) → mid → deep → paper → footer deep. No 3 same category in a row ✔ (color, light, mid, dark, light, color, light, color, mid, dark, light). No two darks touching ✔ (deep #4 sits between mid and paper; deep #10 between mid and paper; footer after paper).
- ≥ 1 `t-deep` ✔ (#ice-dam, #faq), ≥ 1 colour band ✔ (t-field ×2, t-brick), full-bleed `.break` ✔ (#ice-dam).
- Hooks: data-sw-signature (hero map) + data-hook story, pins, eave, strip, zip-pin, form-pin, footer-map = 8 ✔.
- Layout families: map-hero, pinned-story, pin-grid, break, tool-pair, tabs, strip-map, ledger, map-split, accordion, form-split = 11 distinct, no neighbours alike ✔.
- Exactly one `#contact` ✔. CTAs: `[[call]]` (tel:), `[[quote]]` (#contact), "This is my house" (#contact), quiz/log hand-offs (#contact). "Find my house type" in the hero is a tool jump to #house-type (in-page; it is the secondary path in strategy §5).
- Required content: all 7 services (repeater) ✔; area + ZIP checker ✔ (#area); hours / open-now ✔ (hero proof line, #area table, contact); sample reviews with Sample tag ✔ (#proof); prices only in the sample price block ✔ (#prices + one token row per house type tab, both tagged); footer with `{{demo.disclaimer}}` + `[[credits]]` ✔.
- Signature in every listed section: hero (map), story (zooming map + pins), services (pin cards + angled bands), proof (strip map pins), zip (mini map pin lights), form (band top edge + "your street" pin), footer (county map, band parked) ✔.

## Decisions (headless)
- The zoom story pins at ≥ 900px only (concept); 640-899 and phones get the stacked cards with a clip reveal.
- Only one photo exists for C (05-media). The break band is a drawn eave section, not a photo.
- Yellow is used only for shapes, the focus ring on field/deep, the yellow call button (ink text on yellow) and h-size text on deep.

## Open issues
- (none yet)
