COPY: ok

## Five-second test

1440x900-first.jpg: "Boulder movers & haul-away" h1 in serif, trade + city + outcome clear. Phone (303) 555-0178 visible top-right. Two CTAs ("Price your move" primary, "Call now" secondary). Stylised map with route lines draws in as intro. Next section peeks at bottom. Reads as a local mover with a route/map concept.

390x844-first.jpg: Same h1 wraps to 3 lines, both buttons above fold, phone visible in header. Map behind text is legible. Clear what it is, where, what to do.

## First screen — 9

Earned: h1 states trade + city + outcome in 5 words ("Boulder movers & haul-away"). One primary CTA ("Price your move") plus quieter secondary ("Call now"). Phone visible on both viewports. Proof line under h1 ("Sample rating 4.9 · 132 reviews · Boulder County"). Next band peeks ~60px at 1440. Route-line intro completes under 1s; text readable at 0ms in reduced motion (1440-rm-full.jpg shows full hero content).

Deductions: none.

## Distinctiveness — 8.5

Earned: Route-line signature system is unique in the niche. The SVG map with animated route drawing, pin icons on service cards, elevation readout in canyon story, and "End of route: you're home" footer all thread the concept. Palette (Front Range earth + sky: deep/sand/spruce/sandstone) is distinct from siblings A (Antonio+Public Sans) and B (JetBrains Mono+Inter Tight). Newsreader display + Albert Sans text + DM Mono accent is a unique trio.

Deductions:
- Signature appears in hero, services, canyon story, reviews, and footer (5 sections), but the route line itself is only visually prominent in the hero map and as a data attribute elsewhere. The connecting line between sections is not rendered as a continuous visible path down the page. −0.5 (1440-full.jpg: no visible continuous route line connecting sections below hero).
- Service cards use a standard grid layout; the pin icon is present but the card shape is conventional. −0.5 (1440-scroll-25.jpg: four service cards in a row, standard card-in-grid).
- Haul sorter tool section uses three columns that read as a standard feature grid rather than a distinctive interactive moment. −0.5 (1440-scroll-50.jpg).

## Typography — 9

Earned: Newsreader display at large scale for h1/h2 with optical sizing; Albert Sans body at ≥16px equivalent; DM Mono for distances, elevations, prices, ZIP codes. Fluid type scale with clamp(). Tabular numerals on prices and elevation counter. Lead paragraph set apart. ≤5 distinct sizes visible. No orphans in headings at 1440 or 390. Curly quotes in review text. En-dash ranges in hours ("7:30 am – 6:30 pm"). Consistent caps tracking on kicker labels.

Deductions:
- Kicker label "BOULDER COUNTY ROUTES" above h1 is tracked caps but there are two other tracked-caps labels visible on the first screen (kicker + proof line label), approaching the 3+ tiny tracked caps limit. Borderline, no deduction applied but noted.

## Layout and rhythm — 8.5

Earned: 9 sections with varied tones (paper → mid → deep photo → paper → light → deep → mid → light → deep). Asymmetric canyon story (text block left over full-bleed photo). Dense services rail (4-col grid). Quiet reviews section. Full-bleed break at canyon. Gap between sections > gap within.

Deductions:
- Services rail and estimator/tool sections are both grid-based card layouts in sequence; two adjacent sections feel similar in density and shape. −0.5 (1440-scroll-25.jpg and 1440-scroll-50.jpg: services 4-col grid followed by tool 3-col grid, both on paper background).
- Area/ZIP section has photo right, text left, which echoes the hero's text-left composition. Not a third repeat but contributes to a slightly flat density map in the middle third. −0.5 (1440-scroll-75.jpg).

## Photo and video — 8.5

Earned: All frames on-topic (moving truck, stairwell carry, hand truck, canyon road). Consistent warm-desaturated grade across all photos (sepia 0.08, hue-rotate -2deg, saturate 0.85). Object-position puts subjects on thirds. Alt text describes frames. No faces presented as owner. No logos or signs readable.

Deductions:
- Area section photo alt text reads "Historic Route 66 near Amboy, California, USA" — this is off-region (California, not Colorado). The image itself is a generic hand-truck/route shot that could pass, but the alt text reveals wrong provenance. −0.5 (dist/index.html line 1108, confirmed in 1440-scroll-75.jpg area section).
- Canyon story photo is atmospheric but the scrim overlay (rgba(44,62,80,0.88)) is heavy; the photo is mostly obscured by the text panel. Not quite 70% opacity smothering but close. −0.5 (1440-scroll-50.jpg: canyon photo barely visible behind dark overlay panel).

## Copy — 9

Earned: Voice matches concept's three sentences ("Your street is on our route", "We brought the small truck for the canyon road", "The couch went to the reuse store, not the ditch"). Specific nouns from the trade ("gravel driveway", "stair roller", "blue tape", "dolly route down the alley"). Every section answers one homeowner question. Microcopy under form button ("We'll call you back to set up a visit"). Consistent primary action name ("Price your move" in hero, "Price it" in mobile bar — slight variation but acceptable). Sample labels on all reviews and prices. No banned phrases. No tricolon headlines. Buttons named for action.

Deductions: none.

## Mobile — 8.5

Earned: No horizontal scroll at 390×844. Type readable. Tap targets ≥48px (buttons have min-height: 48px). Sticky mobile bar works. Hero re-composed for phone (map opacity reduced, text centered). h1 ≤3 lines at 390.

Deductions:
- Horizontal overflow at 320px: page is 322px wide due to SVG path/circle elements extending beyond viewport. This is a mustFix per RUBRIC §3.7. In fast mode 320 is judged via CSS breakpoints, and the render check flagged it. −0.5 (render.json: overflow at 320px, scrollWidth 322).
- Mobile bar does not hide on scroll down (no data-mobilebar-hide logic visible in dist). It stays fixed at bottom. Not a deduction per se but noted for should-fix.

## Accessibility — 8.5

Earned: Skip link present. Focus visible (3px spruce outline, 3px offset). All inputs labeled. Reduced motion shows all content (1440-rm-full.jpg confirms hero, services, canyon, tools, reviews, area, contact all visible). Rotating word not used (no aria-hidden rotator). Video not used (no autoplay issue). Heading order: one h1, h2s in sequence, h3s within sections — no skips. Form has honeypot field hidden properly.

Deductions:
- 320px overflow is an a11y concern (horizontal scroll traps keyboard users). Already counted in mobile; not double-counted here per §2.10.
- Open-now widget uses data-open-now but the static fallback text is duplicated in two places (area section and contact section) with identical long strings. Not a failure but redundant. No deduction.

## Motion and interaction — 8.5

Earned: Route-line draw animation on load (5 lines sequential, <1s total). Pin drop animations. Text reveal (translateY 24px→0). Image clip reveals. Canyon elevation counter animates on scroll. Hover underline grows scaleX(0→1) from left. Reduced motion respected (all content visible, no animation). Lenis smooth scroll loaded. ≥3 hooks beyond plain reveals (route draw, pin drops, elevation counter, clip reveals).

Deductions:
- Same reveal pattern (fade-up translateY) applied to most sections. Services, reviews, area info, contact text all use identical data-reveal. Entrance variety is limited to hero-specific animations. −1.0 (1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg: consistent fade-up on every section).
- Canyon story is not pinned (no ScrollTrigger pin visible in dist); it scrolls normally. The concept promised a pinned canyon climb at ≥640px with elevation counting. The elevation counter exists but the pin/scroll-story mechanic is absent. −0.5 (1440-scroll-50.jpg: canyon section is a static layout, not a pinned scroll story).

## Wow moment — 8

Earned: The route-line map drawing in the hero is memorable and tied to the thesis. The elevation counter in the canyon section reinforces the mountain-move narrative.

Deductions:
- The haul sorter tool (keep/donate/haul) described in the concept as a drag board is rendered as a static three-column info grid, not an interactive tool. The "wow" of a usable sorting tool is missing. −1.0 (1440-scroll-50.jpg: three static cards, no drag/tap interaction).
- Truck-fill gauge tool from concept is not present on the page. −0.5 (no truck-fill section in dist/index.html).
- Lease-turnover calendar from concept is not present. −0.5 (no calendar section in dist/index.html).

## Polish — 9

Earned: SVG favicon + apple-touch-icon referenced. OG image 1200×630 declared. JSON-LD MovingCompany schema with correct type. Theme-color set. Consistent 4px radius throughout. Print stylesheet for estimator (sw-print-est rules). Lazy images with width/height. Forced colors handled (btn borders, compare handle). No console errors. Footer designed with "End of route" close.

Deductions:
- OG image references "og.jpg" but no og.jpg file was captured or verified to exist. Potential broken share image. −0.5 (dist/index.html line 13: `<meta property="og:image" content="og.jpg">`; not in qa/screens/ listing).
- Credits list two Wikimedia photos but the hero map is SVG (not credited), and the stairwell photo credit says "Janitor apartment, 137 East 30th Street, New York" which is geographically mismatched for a Boulder mover. Not a blocker but inconsistent with the "one shoot" feel. −0.5 (dist/index.html line 1194).

## Arithmetic

14×9 + 12×8.5 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8 + 4×9 = 126 + 102 + 90 + 85 + 68 + 72 + 59.5 + 59.5 + 102 + 64 + 36 = 864 / 100 = 8.64

## Must

1. **390-full.jpg / render.json**: Horizontal overflow at 320px (scrollWidth 322). SVG path and circle elements in the route map extend beyond the viewport. Fix: add `overflow: hidden` to `.route-map` or constrain SVG viewBox to fit within container; ensure no element exceeds 100vw at 320px.

## Should

1. **1440-full.jpg**: Route-line signature is not visually continuous between sections. The concept promises "a continuous SVG path runs down the left margin." Fix: add a visible vertical route line in the left margin (or top edge on mobile) that connects sections, using the same spruce stroke as the hero map lines.
2. **1440-scroll-25.jpg, 1440-scroll-50.jpg**: Services and tool sections use similar grid-card layouts in sequence. Fix: give the tool section a distinct layout (e.g., asymmetric split, interactive sorter UI, or a different tone/background) to break the rhythm.
3. **1440-scroll-50.jpg**: Haul sorter, truck-fill gauge, and lease calendar tools from concept are missing or static. Fix: implement at least the haul sorter as a tappable three-column board (tap items into Keep/Donate/Haul) with a printable output, per concept §Tools.
4. **1440-scroll-50.jpg**: Canyon story is not pinned; elevation counter animates but without the scroll-driven pin mechanic. Fix: implement ScrollTrigger pin at ≥640px so the elevation ticks up as the visitor scrolls through the canyon section.
5. **dist/index.html line 1108**: Area section photo alt text says "Historic Route 66 near Amboy, California, USA." Fix: replace alt text with a description matching the actual frame and region (e.g., "Hand truck on a gravel driveway in Boulder County").
6. **dist/index.html line 13**: OG image references "og.jpg" which may not exist. Fix: generate og.jpg at 1200×630 or update the meta tag to point to an existing image.
7. **All scroll shots**: Same fade-up reveal on every section. Fix: vary entrance patterns by section role (e.g., clip reveal on photos, scale on counters, stagger on service cards, static on quiet sections).

## Elevate

1. **Motion**: Implement the pinned canyon scroll story with elevation counter driven by scroll position, and vary section entrance patterns so each section type has a distinct reveal (clip for photos, stagger for cards, scale for counters, static for text-heavy sections). This turns the motion score from consistent-but-same to a narrative device.
2. **Wow**: Build the keep/donate/haul sorter as a real tappable tool with drag-or-tap interaction and a printable plan output styled in the route-line signature language. This gives visitors something to use and share, converting the wow from "nice map animation" to "useful moving planner."