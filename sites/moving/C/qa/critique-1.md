COPY: ok

## Five-second test

1440x900-first.jpg: "Boulder movers & haul-away" h1 in serif, trade + city + outcome clear. Phone (303) 555-0178 visible top-right. Two CTAs ("Price your move" primary, "Call now" secondary). Stylised map with route lines draws in as intro. Next section peeks at bottom. Reads as a local mover with a route/map concept.

390x844-first.jpg: Same h1 wraps to 3 lines, both buttons above fold, phone visible in header. Map behind text is legible. Clear what it is, where, what to do.

## First screen — 9

Earned: h1 states trade + city + outcome in 5 words ("Boulder movers & haul-away"). One primary CTA ("Price your move") plus quieter secondary ("Call now"). Phone visible on both viewports. Proof line under h1 ("Sample rating 4.9 · 132 reviews · Boulder County"). Next band peeks ~60px at 1440. Route-line intro completes under 1s; text readable at 0ms in reduced motion (1440-rm-full.jpg shows full hero content).

Deductions: none.

## Distinctiveness — 9

Earned: Route-line signature system is unique in the niche and threads through hero map, service pins, canyon elevation story, reviews town pins, and footer "End of route." The haul sorter tool (1440-scroll-50.jpg) is now a real interactive three-column tappable board with drag-style interaction and printable output styled in the route-line language — this is a distinctive moment no template has. Palette (Front Range earth + sky) and type trio (Newsreader/Albert Sans/DM Mono) remain unique vs siblings. Four distinct entrance patterns visible across scroll shots (clip for photos, stagger for cards, scale for counters, static for text).

Deductions:
- The continuous route line connecting sections below the hero is still not rendered as a visible vertical path in the left margin; the signature is present in each section but the connective thread between sections is implicit rather than drawn. −0.5 (1440-full.jpg: no visible continuous route line between sections).
- Service cards (1440-scroll-25.jpg) remain a standard grid layout with pin icons; functional but not a distinctive layout family. −0.5 (1440-scroll-25.jpg).

## Typography — 9

Earned: Newsreader display at large scale for h1/h2 with optical sizing; Albert Sans body at ≥16px equivalent; DM Mono for distances, elevations, prices, ZIP codes. Fluid type scale with clamp(). Tabular numerals on prices and elevation counter. Lead paragraph set apart. ≤5 distinct sizes visible. No orphans in headings at 1440 or 390. Curly quotes in review text. En-dash ranges in hours ("7:30 am – 6:30 pm"). Consistent caps tracking on kicker labels.

Deductions: none.

## Layout and rhythm — 9

Earned: 9 sections with varied tones (paper → mid → deep photo → paper → light → deep → mid → light → deep). Asymmetric canyon story with pinned scroll mechanic (1440-scroll-50.jpg shows elevation counter and truck morph at scroll position). Full-bleed break at canyon. Dense services rail (4-col grid). Quiet reviews section. Haul sorter tool section now has a distinct interactive layout that breaks the grid-card rhythm from round 0. Gap between sections > gap within.

Deductions:
- Area/ZIP section (1440-scroll-75.jpg) has photo right, text left, which echoes the hero's text-left composition. Not a third repeat but contributes to slight density similarity in the lower third. −0.5 (1440-scroll-75.jpg).

## Photo and video — 8.5

Earned: All frames on-topic (moving truck, stairwell carry, hand truck, canyon road). Consistent warm-desaturated grade across all photos. Object-position puts subjects on thirds. Alt text describes frames. No faces presented as owner. No logos or signs readable.

Deductions:
- Area section photo alt text still reads "Historic Route 66 near Amboy, California, USA..." — off-region (California, not Colorado). The image itself is a generic hand-truck shot that could pass, but the alt text reveals wrong provenance. This was flagged in round 0 and remains unfixed. −0.5 (dist/index.html line 1229).
- Canyon story photo scrim overlay remains heavy; the photo is mostly obscured by the dark text panel. −0.5 (1440-scroll-50.jpg: canyon photo barely visible behind dark overlay panel).

## Copy — 9

Earned: Voice matches concept's three sentences ("Your street is on our route", "We brought the small truck for the canyon road", "The couch went to the reuse store, not the ditch"). Specific nouns from the trade ("gravel driveway", "stair roller", "blue tape", "dolly route down the alley"). Every section answers one homeowner question. Microcopy under form button ("We'll call you back to set up a visit"). Consistent primary action name ("Price your move"). Sample labels on all reviews and prices. No banned phrases. Buttons named for action.

Deductions: none.

## Mobile — 9

Earned: No horizontal scroll at 390×844. Render.json confirms 320px overflow is fixed (scrollWidth 320 at 320 viewport). Type readable. Tap targets ≥48px. Sticky mobile bar works. Hero re-composed for phone. h1 ≤3 lines at 390. Haul sorter tool usable with thumb taps on mobile (390-full.jpg shows three tappable columns stacked).

Deductions: none.

## Accessibility — 9

Earned: Skip link present. Focus visible (3px spruce outline, 3px offset). All inputs labeled. Reduced motion shows all content (1440-rm-full.jpg confirms hero, services, canyon, tools, reviews, area, contact all visible with route lines fully drawn and elevation shown as static number). Heading order correct. Form honeypot hidden properly. No rotating word aria issues. 320px overflow fixed.

Deductions: none.

## Motion and interaction — 9

Earned: Route-line draw animation on load (<1s). Pin drop animations. Canyon story is now pinned with ScrollTrigger at ≥640px — elevation counter ticks from 5,400 to 8,200 ft as visitor scrolls, truck icon morphs (1440-scroll-50.jpg). Four distinct entrance patterns: clip reveal on photos, stagger on service cards, scale on counters, static on text-heavy sections. Hover underline grows scaleX(0→1) from left. Reduced motion respected. Lenis smooth scroll loaded. ≥3 hooks beyond plain reveals.

Deductions: none.

## Wow moment — 9

Earned: The route-line map drawing in the hero is memorable and tied to the thesis. The haul sorter is now a real interactive tool with tappable keep/donate/haul columns and a printable plan output styled in the route-line signature language (1440-scroll-50.jpg). The pinned canyon scroll story with elevation counter reinforces the mountain-move narrative. Two connected moments: signature in motion and a tool whose output uses the signature's visual language.

Deductions:
- Truck-fill gauge and lease-turnover calendar from concept are still absent. The wow is strong with two moments but not exhaustive of the concept's tool set. −0.5 (no truck-fill or calendar sections in dist/index.html).

## Polish — 8.5

Earned: SVG favicon + apple-touch-icon referenced. JSON-LD MovingCompany schema with correct type. Theme-color set. Consistent 4px radius throughout. Print stylesheet for estimator. Lazy images with width/height. Forced colors handled. Footer designed with "End of route" close. No console errors.

Deductions:
- OG image references "og.jpg" but no og.jpg file exists in qa/screens/ or was verified. Potential broken share image. −0.5 (dist/index.html line 13).
- Area photo credit geographically mismatched (same issue as alt text). −0.5 (dist/index.html line 1229).

## Arithmetic

14×9 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5 = 126 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 34 = 894 / 100 = 8.94

## Must

(none)

## Should

1. **dist/index.html line 1229**: Area section photo alt text says "Historic Route 66 near Amboy, California, USA..." Fix: replace alt text with a description matching the actual frame and region (e.g., "Hand truck on a gravel driveway in Boulder County").
2. **dist/index.html line 13**: OG image references "og.jpg" which does not exist. Fix: generate og.jpg at 1200×630 or update the meta tag to point to an existing image.
3. **1440-full.jpg**: Route-line signature is not visually continuous between sections. Fix: add a visible vertical route line in the left margin that connects sections, using the same spruce stroke as the hero map lines.
4. **1440-scroll-50.jpg**: Canyon story photo scrim overlay is too heavy, obscuring the image. Fix: reduce overlay opacity to ~0.6 so the canyon texture reads through the text panel.

## Elevate

1. **Distinctiveness**: Thread the route-line signature into the footer as a drawn closing element (the line terminates at "End of route: you're home" with a final pin), making the signature a complete narrative arc from first screen to last. This turns the signature from per-section decoration into a single continuous story device.
2. **Photo**: Commission or source one hero-grade photo of a Boulder canyon road with a small box truck on it, graded to match the existing warm-desaturated palette, and use it in the canyon story section with a lighter scrim so the landscape reads. This replaces the generic stock with a frame that could only belong to this business and this concept.