## Round 1 (fix)
Elevated layout + photo: the stations story is now an edge-to-edge sticky stage (no tail gap, 46svh steps, only tape dims), followed by a full-bleed photo break #gloss (approved red clear-coat frame, STN 8 tape) as the quiet breath before the yellow claim band; reviews are a full 3-column hood with the rating as a note (no hole); the hero filmstrip now shows the nine sample texts instead of repeating the door drawings; the promise band carries the second approved photo (daylight check, graded to gunmetal). Also: city + trade in the h1, header open-now pill removed, services swipe row under 640, styled photo slots with file names, curly quotes.

# autobody-A · Blueprint (builder, fast mode)

Photos: none in this build (library still downloading). Every visual is a drawn SVG from one sprite
(door skin in 5 finishes + 9 station overlays). Photos join in the fix round.

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | 10-s call/photos; "is the claim a black box?" | filmstrip | tape kicker {{biz.city}}, h1, lead, [[call]], Send photos → #contact, proof line {{hours\|today}} · {{biz.city}} + areas · {{proof.rating}} [[sample rating]]; 9 drawn station frames, tape tab each | none (drawn st-1…st-9) | data-hook="filmstrip" | h1 line mask, tape lays (600ms), strip fades in 800ms then drifts 18s/loop |
| 2 | stations | t-paper | "How long / what happens / do I hear anything?" | pinned-story | 9 stations, each: tape label + red Done strip, what we do, what you hear; services.2 blurb (frame) | none (drawn panel) | data-hook="stations" data-sw-signature="tape-label" | sticky panel ≥900 + counter; tape peels per station (all widths); stacked cards < 900 |
| 3 | claim | t-tape | "Will insurance make me use their shop?" "App said $1,400" | tool-tabs | claim path: 4 tabs × 5-6 WHO rows; claim-number yes/no; hand-off data-service={{services.1.name}} | none | data-hook="claim-path" | rows rise, quiet |
| 4 | services | t-deep | every service + sample price sheet | hung-cards | repeater services (tape tab = .short), price sheet prices 0-4 [[sample pricing]] | none | — | tapes lay onto cards 60ms stagger |
| 5 | salt | t-light .break | "Will the rust come back?" | break | full-bleed rocker cross-section drawing, services.7, prices.3 [[sample pricing]] | none (drawn) | — | drawing unclips |
| 6 | dent | t-mid | PDR or body and paint? | tool-split | dent check: size / paint cracked / edge → verdict + prices.1 / prices.2 / prices.0 [[sample pricing]] | none | data-hook="dent-check" | none (tool, quiet) |
| 7 | proof | t-paper | "Will the paint match?" social proof | pinboard | Marek feature + 5 taped reviews, {{proof.rating}} · {{proof.reviewCount}} [[sample rating]], [[sample review]] each | none | — | cards rise, stagger |
| 8 | promise | t-deep | "Who stands behind it?" | statement | {{proof.guarantee}}, {{proof.years}}, {{proof.license}} (sample), insured (sample), {{biz.owner}} | none | — | still (quiet section) |
| 9 | area | t-light | "Do you cover my ZIP? Open now?" | split | ZIP checker, {{biz.areas\|list}}, {{hours\|table}}, {{hours\|today}}, [[tel]] | none | data-hook="zip" | still |
| 10 | contact | t-paper | send photos / call | form | 4-step lead form (photos → what happened → when → contact), [[call]], sms | none | — | still |
| — | footer | t-deep | close | footer | torn tape STN 9, nav, phone, email, {{demo.disclaimer}}, [[credits]] | — | signature (torn) | — |

## Rhythm gate (METHOD §4)
- 10 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`; the paper stations band peeks at 1440×900 (content ≈ 740px of 828px).
- Tones: deep · paper · tape · deep · light · mid · paper · deep · light · paper → never 3 alike in a row ✓; no two dark (deep/mid) touching ✓ (mid sits between light and paper).
- ≥ 1 t-deep ✓ (hero, services, promise) · colour band ✓ (claim, t-tape) · full-bleed `.break` ✓ (salt).
- Hooks: filmstrip, stations (signature), claim-path, dent-check, zip = 5 ✓, signature on stations ✓.
- Layout families: 10 different, no neighbours alike ✓.
- Exactly one #contact ✓; every CTA → #contact (data-service prefill) or tel:/sms: ✓.
- Required content: all 10 services ✓ (repeater), area + ZIP ✓, hours/open-now ✓ (hero proof line, area, contact, footer), sample reviews ✓, prices only in the price sheet / salt band / dent check with Sample tags ✓, footer disclaimer + credits ✓.
- Signature in concept.signature.sections: hero (kicker tape + frame tabs), stations (peel), claim (WHO strips), services (tape tabs + sheet), proof (pinned tapes), footer (torn) ✓.

## Decisions (headless)
- The 9-station "pin" is a CSS sticky stage (≥ 900px, sw-motion only) driven by ScrollTrigger callbacks; the list height is ≈ 9 × 55svh + 100svh. 640-899 gets stacked cards with their own drawing (two-column sticky would be too cramped).
- Concept's "Day 2" tape text dropped: day counts are not in facts.json (only Marek's review says "station 6, day 4").
- Form is 4 steps (contract) instead of the concept's 3: photos → what happened → when → contact.
- Dent check is CSS (:has) + a 20-line live-verdict script; both sample ranges are printed in HTML from tokens, so it works with JS off and no dollar ever sits in app.js.
- No ogPhoto (no photos yet): the OG image is the plain deep colour with the name.

## Open issues
- Photos come in the fix round (hero frames 2, 5, 7 are the natural photo slots; door panel drawing stays in the story).
