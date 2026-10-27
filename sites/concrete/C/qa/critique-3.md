COPY: needs copy-chief (copy 8.5: four names for the primary action)

# Critique Round 3: concrete-C (Red Grit Concrete)

This round has screenshots (`qa/render.json` lists 10 shots, no errors, 390/320 overflow clean; `qa/static.json` 0/0), so the ceilings from rounds 1-2 that came from missing evidence no longer apply. Every score below comes from the shots.

## Five-second test

- **1440-first.jpg:** "Concrete in Colorado Springs, built for the clay and the frost. Call (719) 555-0133 or price my driveway. They know the ground: there's a contour map of the towns they pour in, with a ZIP check on it." Clear in under 3 s.
- **390-first.jpg:** same h1 in 3 lines, Call + "Price my driveway" above the fold, proof line with Sample rating. The ZIP card starts in the first screen but the mobile bar sits on top of its input.

## firstScreen: 9.0
Earned: the h1 "Colorado Springs concrete, poured for clay and frost." is 8 words and 3 lines at 1440 and 390, with trade, city and outcome. One loud primary (Call) and a quieter outline secondary. The phone shows in the header and the hero. The proof line has hours, "22 winters" (facts.years) and a ★4.9 marked SAMPLE RATING. The mid band peeks about 60px at 1440-first.jpg. The signature does real work in the hero: the contour map, town pins, a ZIP card styled as the map legend, and the elevation rail.
Deductions:
- 390-first.jpg: the mobile bar covers the ZIP card's input on load, so the hero tool is cut off (counted under mobile, not here).
- 1440-first.jpg: the stack above the h1 is busy: EL. pill, then "SHEET 01 · DRIVEWAYS, PATIOS, SLAB LIFTING" mono line, then the h1. That is two mono labels before the headline (no deduction; it is why this isn't a 9.5).

## distinctiveness: 9.0
Earned: elevation markers climb section by section (6,035 → 6,100 → 6,200 → 6,400 → 6,600 → 7,000 → 7,200 → 7,400 → 7,600 → RIDGE 7,800 in the footer, 1440-rm-full.jpg). The contour field runs behind every band, and the left-edge altimeter rail climbs with them (1440-scroll-25/50/75.jpg). The ridge-line break and the footer ridge profile close the idea. Compared with the siblings (concrete/A 1440-first: blue spec-ticket, grotesk; concrete/B 1440-first: dark Oswald "6 IN." builder), the face, palette and hero family are different. Cover the logo and the contour/elevation sheet still names this site.
Deductions:
- 1440-rm-full.jpg: the concept promised reviews pinned on a town mini-map. Reviews are a plain staggered 3×2 card grid and the area section is a list, so the map idea stops at the hero (no deduction, but it is the gap to 10).
- Mono micro-labels plus middle-dot meta strings ("SHEET 01 · …", "BM-02 · …", "READING 01 · CLAY") are on nearly every band (slop tell): −0.5, offset by layout families a template would not use (lens story, spec ledger + drawn rebar, ridge break). Held at 9.0.

## type: 8.5
Earned: Young Serif display at a strong scale against Figtree body, with DM Mono as the declared accent. The display line-height is tight, quotes are curly in the reviews (1440-rm-full.jpg, reviews), ranges use an en dash ("7 am – 5 pm", "10–12 ft"), and the price is set large as a display figure (1440-scroll-50.jpg).
Deductions:
- 1440-first.jpg: tiny tracked mono caps in one view: EL. pill, SHEET line, SAMPLE RATING, SHEET 01 / 10, YOUR ZIP CODE, three legend rows, plus eight town labels. That is far more than 3: −0.5.
- 1440-scroll-25.jpg: the step labels "01 · MELT" etc. add a fifth mono size/colour on the story band. More than 5 sizes on screen is close but not proven; no further deduction.

## layout: 9.0
Earned: 11 bands in a tone rhythm that never puts two darks together: paper → mid → deep → paper → accent-red → break → paper → mid → deep → paper → deep footer (1440-rm-full.jpg). The services ledger plus sticky price sheet is asymmetric. The spec ledger + drawn rebar frame is dense. The ridge break is a full-bleed breath and the contact band is quiet. Gaps between sections are larger than gaps within.
Deductions:
- 1440-full.jpg: with motion on, the pinned story's spacer shows as about 1.7 screens of blank pine in the full-page capture. That is a capture artifact of the pin (≈4 × 55svh, inside the limit) and 1440-scroll-25.jpg shows it working, so no deduction.
- 1440-rm-full.jpg reviews: a staggered 3×2 card grid is a standard shape. It is the one band that could be any site's.

## photo: 8.0 (capped by mustFix)
Earned: the drawn treatments are strong and on-concept: the magnified scaling lens with crop marks (1440-scroll-25.jpg), the rebar grid with an "18 IN." dimension on a contour gradient (1440-rm-full.jpg spec), and the ridge silhouette break. Benchmark-triangle captions run in sequence (BM-02/03/04).
Deductions:
- 1440-rm-full.jpg spec frame and break, also on the 390 shots: the three `media/placeholder-*.webp` files are 60-byte files that won't decode. The browser draws the alt text "Placeholder for rebar" across the rebar drawing and "Placeholder for finished-driveway" in the middle of the ridge break. A broken-image glyph also sits in the top-left corner of the BM-02 and BM-03 frames (1440-scroll-25.jpg, top-left of the lens frame). This is visibly broken: **mustFix**, category capped at 8.0.
- 1440-rm-full.jpg break: the caption "BM-04 · Broom-finished driveway at a split-level home" describes a photo that isn't there.

## copy: 8.5
Earned: real trade nouns ("air-entrained", "#4 rebar on chairs at 18 in. on center", "magnesium chloride", "saw-cut … ¼ of the slab deep") and honest lines ("no one can promise clay will never move" in a review, "Your real number comes from a visit"). Every review, the rating, the price, the licence and the promise carry Sample labels (1440-rm-full.jpg). Every fact traces to facts.json (22 years, 4.9/118, $11–$17, 2-year fall reseal).
Deductions:
- 1440-first.jpg "Price my driveway", 1440-scroll-50.jpg "Price it" ×8, 390-first.jpg mobile bar "Get a number", footer "Get a number": four names for the primary quote action: −0.5.
- 1440-rm-full.jpg: "Neighbours" (UK) next to "neighbor's", "colored" and "Office hours" (US) on a Colorado site. Small, but a copy-chief catch.

## mobile: 8.5
Earned: the hero is re-cut for the phone: the map drops, the ZIP card stacks below, and the h1 is 3 lines (390-first.jpg). Nothing pins under 900px (390-full.jpg and 390-rm-full.jpg are the same height, 14879). There is no overflow at 320/390 (render.json). The checklist stacks to one column of thumb-sized rows and the reviews go single-column (390-rm-full.jpg).
Deductions:
- 390-first.jpg: the sticky mobile bar sits over the ZIP card's input on load, so the hero tool is half-hidden behind the bar: −0.5.

## a11y: 8.0 (capped by mustFix)
Earned: the reduced-motion full pages (1440-rm-full.jpg, 390-rm-full.jpg) show every word, with the story rendered as a complete static list. The page has a skip link, labelled inputs, tab roles and live regions in dist, and every review has its own Sample label.
Deductions:
- 1440-scroll-25.jpg: the inactive story step labels ("01 · MELT", "02 · FREEZE", "04 · BUILT IN") measure about 2.4:1 on #1A2622, and the inactive step body text is about 4.5:1 (borderline). **mustFix**.
- 1440-rm-full.jpg, below the ridge break: the BM-04 caption is set in `var(--muted)` (meant for the dark band) but sits on the snow-white ridge fill, about 2.3:1 on #F4F3EF. **mustFix**.
- The alt texts "Placeholder for scaling/rebar/finished-driveway" don't describe anything (fixed with the photo mustFix).

## motion: 9.0
Earned: the motion explains something. The pinned freeze-thaw lens (≥900px only, reversible scrub) steps MELT → FREEZE → SCALE → BUILT IN and the lens art changes per step (1440-scroll-25.jpg shows step 3 "SCALE", 1440-rm-full.jpg the end state "AIR + SEAL"). The altimeter rail eases to each band's elevation. The ridge line draws on scrub, and the hero contours and pins draw in with the h1 readable from frame one. On phones the steps toggle without a pin. Easing is power3/expo-out with no bounce.
Deductions:
- 1440-scroll-50.jpg and 75.jpg: below the story, the bands rely on the generic `data-reveal` (7 hooks). The services ledger, reviews and area list enter the same way. This isn't −1.0 (there are clearly more than 3 distinct hooks), but it holds this at 9.

## wow: 9.0
Earned: two connected moments tied to the thesis. The freeze-thaw lens shows why a slab here fails. The "Read your slab" tool has six drawn symptom glyphs and a designed result card with a WAITING status pill (1440-scroll-75.jpg). The price sheet has a drawn house/slab plan with a ¼ in./ft slope arrow, a large price figure with a Sample label, and "Print this sheet" (1440-scroll-50.jpg). All of it still reads statically in 1440-rm-full.jpg.
Deductions:
- None beyond the 10 anchor: the diagnosis output never picks up the contour/elevation language (it's a neutral dashed card), so the tool and the signature are not yet one moment.

## polish: 9.0
Earned: there's a favicon set, OG, JSON-LD, theme-color and a print sheet in dist. Rules use one weight and icons share one stroke. The footer is a designed close with a ridge profile and the RIDGE · EL. 7,800 FT marker (1440-rm-full.jpg). The broken image glyphs are counted under photo, not here.

## Arithmetic

14×9.0 + 12×9.0 + 10×8.5 + 10×9.0 + 8×8.0 + 8×8.5 + 7×8.5 + 7×8.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 85 + 90 + 64 + 68 + 59.5 + 56 + 108 + 72 + 36
= 872.5 / 100 = **8.73** (8.725)

Verdict expected: **FIX** (mustFix not empty).

## Must

1. **where:** 1440-rm-full.jpg (#spec frame, #break), 1440-scroll-25.jpg (lens frame top-left), 390-rm-full.jpg.
   **problem:** `media/placeholder-{scaling,rebar,finished-driveway}.webp` are 60-byte files that won't decode. The browser paints the alt text "Placeholder for rebar" / "Placeholder for finished-driveway" across the drawings and shows broken-image glyphs in the frame corners.
   **fix:** Either ship decodable images from the niche library for those slots, or (until the library is real) drop the `<img>` from the three frames and let the drawn treatment be the frame. Give each figure an alt/aria-label that describes the drawing ("Magnified slab surface: ice lifting the top layer into flakes"). Never leave "Placeholder for …" as alt text.
2. **where:** 1440-scroll-25.jpg, #winter-story step list.
   **problem:** the inactive step labels measure about 2.4:1 on #1A2622 and the inactive body text is about 4.5:1.
   **fix:** Keep inactive labels at ≥ 4.5:1 (e.g. `#B8B2AC` on deep). Show the active state through the accent left rule + full-paper ink + signal-colour label, not by dimming the others below AA.
3. **where:** 1440-rm-full.jpg, `.break__cap` (BM-04 caption below the ridge).
   **problem:** `color: var(--muted)` on the snow ridge fill is about 2.3:1.
   **fix:** On the paper ridge use `color: var(--ink-2)` / #4A524E or darker (≥ 4.5:1 on #F5F3F0), or move the caption up into the dark field above the ridge and keep the light muted colour there.

## Should

1. **where:** 390-first.jpg, `.mobilebar`. **problem:** the bar covers the hero ZIP input on load. **fix:** keep the bar hidden until the hero's ZIP card has scrolled past (IntersectionObserver on `#hero` → add `.is-hidden`), and keep it hidden while `#contact` is in view.
2. **where:** 1440-first.jpg "Price my driveway", services "Price it", mobile bar + footer "Get a number". **problem:** four names for one action. **fix:** pick one, "Price my slab" or "Get a number", and use it in the hero secondary, the mobile bar, the nav/footer and the service rows ("Price it" can stay only as the per-row verb if the copy-chief signs off).
3. **where:** 1440-rm-full.jpg, #reviews h2 "Neighbours on clay…". **problem:** UK spelling on a US site, next to "neighbor's" and "colored". **fix:** "Neighbors on clay, slush and steep lots".
4. **where:** 1440-first.jpg hero top. **problem:** EL. pill + "SHEET 01 · DRIVEWAYS, PATIOS, SLAB LIFTING" + legend + 8 town labels make a wall of mono caps. **fix:** drop the "SHEET 01 ·" prefix from the kicker (let the EL. pill be the only marker above the h1) and set the map's town labels in sentence-case Figtree 14px.
5. **where:** 1440-rm-full.jpg break caption. **problem:** "Broom-finished driveway at a split-level home" describes a photo that isn't there. **fix:** caption the drawing: "BM-04 · Pikes Peak from the driveway. Every slab we pour sits somewhere on this line."

## Elevate

1. **photo (8.0, weight 8):** make the frames the photography system rather than a container for missing photos. Each benchmark frame becomes a survey plate: a duotone (pine shadow → granite-red highlight) of the library image, masked to the lens/plate shape, with the contour lines drawn over the top and the BM-number in the corner crop mark. Then the three frames read as plate → work → result (scaling lens, rebar under the slab, the ridge-view driveway), one shoot in the brand's own ink.
2. **a11y (8.0, weight 7):** carry state by structure, not dimming. In the freeze-thaw story, mark the active step with the elevation language: the EL. marker slides to the active step and the rule thickens in signal, while inactive steps keep full-contrast text. Give the checklist result card a proper live announcement ("Read: surface scaling. We'd seal or resurface; see Winter damage repair") so the wow tool is as complete for a screen reader as for the eye.
