COPY: needs copy-chief (copy 8.5: service blurbs repeated verbatim in three places)

# roofer-C · critique round 3 (fast mode)

This is the first round scored from real screenshots; rounds 1–2 had none. render.json: 0 errors, no overflow at 320/390. static.json: 0 blockers, 0 warnings.

## Five-second test

**1440-first.jpg:** "Hailward Roofing, a roofer for hail, wind and ice in the Oklahoma City metro. The year ring around the town map shows it's build season right now. I can get a quote or call (405) 555-0103. 4.9 from 318 reviews (Sample), 19 years of metro storms."
**390-first.jpg:** same answer. The h1 is 4 lines, both buttons and the proof line sit above the fold, the ring starts to peek, and the sticky Call / Get a quote bar is present.

---

## firstScreen: 9.0
- 1440-first.jpg: h1 "Roofs built for the sky over Oklahoma City." is 8 words on 2 lines, with the city in gold italic. There is one gold primary, a quieter outline call button, and the phone shows in both header and hero. The proof line carries a "Sample figures" label. The season index strip sits at the fold and works as the peeking next band. The month-ring and town map is the signature, visible at 0% scroll and only possible on this concept.
- 390-first.jpg: h1 is 4 lines, both actions are above the fold, and the ring peeks below the proof line.
- −0.5: "Roofs built for the sky" is closer to a slogan than an outcome. The trade comes through "Roofs" and the kicker; the h1 does not say what the homeowner gets. About 140px of dead dark space sits above the kicker at 1440 (1440-first.jpg).
- −0.5 (mitigated): the kicker is a middle-dot meta string in tracked mono caps ("HAIL, WIND & ICE ROOFING · OKLAHOMA CITY METRO"), and there's a second one under the ring ("NOW · OCT · BUILD SEASON IN THE METRO").
- Net 9.0. The 10 anchor (intro timing) can't be verified from stills.

## distinctiveness: 9.0
- The ring signature organises the page instead of decorating it. It's the hero map (1440-first.jpg), the live header pill that changes with scroll ("APRIL–JUNE · HAIL" in 1440-scroll-25.jpg, "SEP–OCT · BUILD" in 1440-scroll-50.jpg, "NOV–FEB · ICE" in 1440-scroll-75.jpg), the eyebrow of every season band, the break-note ring (1440-scroll-25.jpg), the per-card month arcs in the service index (1440-scroll-75.jpg), the review tags and the footer mark (1440-full.jpg). That's 8+ sections, including the hero and footer.
- Layout families a template wouldn't use: season-banded story, sun-arc day timeline (1440-scroll-50.jpg), ground-check sheet, slider compare plate, "filed by season" index.
- Siblings (A/1440-first.jpg cream exploded layers, B/1440-first.jpg red report spread): this one is clearly different in palette (storm slate and prairie gold), type (Garamond) and hero family. All three share a "technical drawing plate" register, but C's plates are captioned "PLATE 1 · …" in its own voice.
- −0.5: AI-slop tells. Mono micro-labels sit above every heading, with middle-dot meta strings throughout ("MARCH · WIND", "SEPTEMBER & OCTOBER · BUILD", "PLATE 4 · ICE LOAD…") (1440-full.jpg). The system leans on the same tracked-mono eyebrow everywhere.
- −0.5: the cover-the-logo test fails on the service index and the price band (1440-scroll-75.jpg, 1440-full.jpg). Without the tiny rings they're standard grid and price list.

## type: 8.5
- EB Garamond display with tight tracking, Source Sans 3 body, DM Mono as the listed accent for months and prices. Prices are tabular, with en-dash ranges "$325–$1,000" (1440-full.jpg price band). There's a real scale-contrast moment at the break note "Storm chasers come with the hail *and leave with the deposit.*" (1440-scroll-25.jpg). Body is ≥16px at full ink.
- −0.5: hyphen range "typical 1,800-2,400 sq ft home" in the price list (1440-rm-full.jpg price band; 390-full.jpg).
- −0.5: too many tiny tracked caps labels in one view. The header pill, eyebrow, "FROM THE YARD", "GROUND CHECK · AFTER THE STORM", "VERDICT · OKLAHOMA CITY GROUND CHECK" and "WHAT WE DO IN HAIL SEASON" all appear in one hail-band screen (1440-rm-full.jpg). "Sample pricing" and "Sample figures" are set at about 11px (390-first.jpg, 1440-full.jpg).
- +0.5: type carries the almanac voice. The serif italic turn in the hero and break note is distinctive.

## layout: 8.5
- The tone rhythm works (1440-full.jpg): dark hero, light March, dark hail, paper break note, sunset break, light heat, paper build, dark ice, light index, gold prices, paper reviews, dark contact, light footer. No two dark bands touch. The full-bleed break, the asymmetric 2×2 featured card and the quiet note band are all present.
- −0.5: the service index grid is off the container. `#services .cards` runs from x≈48 to x≈1248 at 1440, while the heading and ZIP box run from 120 to 1320. The grid sits 72px left and leaves an empty right gutter, in both motion and reduced motion (1440-scroll-75.jpg, 1440-rm-full.jpg). It reads as a bug.
- −0.5: dead space inside boxes. The featured "Hail damage repair" card is 2×2 with about 300px of empty navy between blurb and link (1440-scroll-75.jpg). The quote form panel is stretched to column height, with about 150px blank under "We'll call you back" (1440-full.jpg contact). The lead review card has about 110px empty below its byline (1440-full.jpg reviews).
- −0.5: the hail band does two jobs. After the ground-check tool it adds a "WHAT WE DO IN HAIL SEASON" mini service list (1440-rm-full.jpg), which duplicates the index.
- +0.5: the scroll has a visible shape, and the sun-arc timeline (1440-scroll-50.jpg) lands as a designed moment.
- Note: the roughly 2,000px blank after the build band in 1440-full.jpg is the pin spacer of the sun-arc timeline. It's absent in 1440-rm-full.jpg and fine in 1440-scroll-50.jpg, so it's not scored.

## photo: 8.5
- There's one raster image: the sunset roofline break (1440-scroll-25.jpg bottom, 1440-full.jpg). It's graded warm into the slate and gold palette and reads as part of the system. Alt text is on-topic and Oklahoma-appropriate (the round-2 "Kansas" slip is gone).
- Everything else is drawn plates in one stroke and palette (1440-rm-full.jpg: wind lift, ground-check house, compare cross-section, build steps, ice load). They feel like one art direction.
- Not 9: the plates carry the page, but the only photograph is a placeholder silhouette. There's no image used in the signature frame (a ring mask, a duotone).

## copy: 8.5
- Plain contractor voice with real trade nouns: seal strip, ridge cap, pipe boot, drip edge, ice-and-water, rolling magnet. Lines like "Storm chasers come with the hail and leave with the deposit" and "Tell us what the weather did" fit this business and no other. Microcopy shows up at doubt points ("We'll call you back to set up a visit.", the ZIP yes/no). CTAs share one root: "Get a quote", "Get a quote for wind repair / a hail inspection / a new roof / limb damage". Sample labels sit on the rating, prices, license, warranty and every review. There are no em dashes.
- −0.5: the same idea is repeated. "Bruised and cracked shingles found slope by slope…" and "Holes and torn slopes covered with a tarp…" appear word for word in the hail band and again in the service index. "Old roof off, deck checked board by board…" is the build-band lead and again the Full replacement card (1440-full.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg).
- −0.5: the header button "THE YEAR" (1440-first.jpg, 390-first.jpg) doesn't say what it does.
- +0.5: the voice is strong.

## mobile: 9.0
- 390-full.jpg: composed for the phone. The season index reflows to a 2-column grid, build steps stack with full-width plates (no pin under 640), service cards stack with the featured card first, price rows keep right-aligned mono figures, and hours are a clean table. The sticky Call / Get a quote bar is present. No overflow at 320 or 390 (render.json).
- Minor: on 390-first.jpg the mobile bar sits on top of the ring's NOV–FEB arc. That's acceptable, but the ring should be re-cut for phone (smaller, or cropped as a half-ring) rather than shipped as the scaled desktop dial.

## a11y: 9.0
- 1440-rm-full.jpg and 390-rm-full.jpg show every section's content, including the verdict card, compare plate and build steps. axe: no errors in render.json. Heading order is one h1, then h2 and h3, with no skips (dist). The ZIP input has a visible label "Do we cover your street?" and the form fields have labels. The ground-check verdict and ZIP result have live regions.
- Not 9.5: the light gold "Sample figures" and "Sample pricing" at about 11px are borderline legibility (390-first.jpg, 1440-full.jpg price band).

## motion: 8.5
- Motion that explains, visible in the frames: the header ring pill advances season by season as you scroll (1440-scroll-25/50/75.jpg). That was round 2's elevate move, and it's delivered. The build band's sun travels an arc over the four steps, lighting dawn and morning gold as it goes (1440-scroll-50.jpg vs the fully lit 1440-rm-full.jpg). There's also a drag compare plate (architectural vs Class 4) and a ground-check counter ring. Hooks beyond reveals: split, compare, estimator, accordion, marquee and hotspots in dist.
- −0.5: 19 `data-reveal` plus 8 stagger hooks suggest the same entrance on most section heads. Static frames don't show images clipping differently from text.
- Not 9: two good motion ideas, but no single moment a visitor would retell. The hero ring sits still in every frame.

## wow: 9.0
- The ground check is a tool a homeowner would actually use: tick what you see from the yard and get a verdict card in signature language. It has a donut "0 of 5" ring, a mono "VERDICT · OKLAHOMA CITY GROUND CHECK" header, a CTA and "Print this check" (1440-rm-full.jpg hail band). It ties directly to the hail thesis.
- The second moment is the season ring moving through the header as you scroll.
- Not 10: the verdict output and the hero ring don't talk to each other. Ticking boxes doesn't light the April–June arc, and the printed sheet isn't shown as a designed almanac page.

## polish: 8.5
- Favicon ring, Sample disclaimer in the footer, a designed footer close ("The almanac starts over in January. So do we." with ring mark, 1440-full.jpg). Radius and rules are consistent.
- −0.5: "Sample reviews" floats as a stray tag about 200px right of the reviews h2, aligned to nothing (1440-full.jpg reviews band, 390-full.jpg). The empty stretched form panel (1440-full.jpg contact) also reads unfinished.

---

## Arithmetic

14×9.0 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.5 + 8×8.5 + 7×9.0 + 7×9.0 + 12×8.5 + 8×9.0 + 4×8.5
= 126 + 108 + 85 + 85 + 68 + 68 + 63 + 63 + 102 + 72 + 34
= 874 / 100 = **8.74**

Fast pass needs ≥ 9.0 with every category ≥ 8.5 (photo ≥ 8.0). Floors are met and there's no mustFix, so this is in the ELEVATE window.

---

## Must

None. No demo-rule breaches: every number is Sample-labelled, facts match facts.json, and there's no face, no "our work" and no before/after. Reduced motion shows all content. Nothing breaks at 390 or 320.

## Should

1. **#services .cards horizontal offset** (1440-scroll-75.jpg, 1440-rm-full.jpg). Problem: the grid sits at x 48–1248 instead of the 120–1320 container. Fix: put `.cards` inside the same container or inline padding as `.index__head`, i.e. `margin-inline: 0; width: 100%`, and remove any negative margin or bleed on it.
2. **Featured card dead space** (1440-scroll-75.jpg, `.card:first-child`). Problem: about 300px of empty navy in the 2×2 card. Fix: fill it with a large April–June ring arc or a small hail-bruise plate in the signature stroke, aligned to the top of the card. Or make it 2 columns × 1 row so it doesn't need filling.
3. **Repeated blurbs** (1440-rm-full.jpg hail band "WHAT WE DO IN HAIL SEASON"; build-band lead vs Full replacement card). Problem: the same sentences appear two or three times. Fix: delete the `svc-pair` block from the hail band (the index already files these). Rewrite the build-band lead to describe the day ("One crew, one day, dawn to dark, weather permitting"), not the service blurb.
4. **Hyphen range** (price band, 1440-rm-full.jpg). Problem: "1,800-2,400 sq ft". Fix: render it as "1,800–2,400&nbsp;sq&nbsp;ft".
5. **"Sample reviews" tag** (1440-full.jpg reviews). Problem: it floats aligned to nothing. Fix: set it directly under the h2 as the same small mono line used for "Sample pricing", or attach it to the first card tag only. Keep every card's "SAMPLE REVIEW".
6. **Contact form panel** (1440-full.jpg contact). Problem: about 150px blank below step 1. Fix: `align-self: start` on the form panel, or show a 4-step ring progress (1/4 arc lit) under the Next button so the space carries the signature.
7. **Header pill label "THE YEAR"** (1440-first.jpg, 390-first.jpg). Problem: the button's action is unclear. Fix: show the live season ("OCT · BUILD") at load as it does on scroll, with `aria-label="Jump to the season you're in"`.
8. **Micro-label density** (1440-rm-full.jpg hail band). Problem: 5+ tracked mono caps labels in one view. Fix: drop "FROM THE YARD" and "WHAT WE DO IN HAIL SEASON", and set "GROUND CHECK · AFTER THE STORM" as a Garamond italic subhead. Raise "Sample figures" and "Sample pricing" to at least 13px.
9. **Hero top dead space** (1440-first.jpg). Problem: about 140px of empty navy above the kicker. Fix: align the hero block vertically to the ring's centre, or reduce the top padding so the h1 sits on the ring's horizontal axis.

## Elevate

1. **motion (12, 8.5):** make the hero dial the scroll engine. As you scroll, the gold marker rotates around the ring through MAR → APR–JUN → JUL–AUG → SEP–OCT → NOV–FEB in step with the season bands. The town dots on the map pulse once when their season's work is mentioned (Moore in the hail review, Edmond in ice). The header pill becomes a miniature of that same dial. That gives one motion idea a visitor would retell: "the year turns as you scroll". Reduced motion keeps a static ring showing the current month.
2. **layout (10, 8.5):** give the lower third (index, prices, reviews, contact) the same "filed by season" geometry as the top. Rebuild the service index as an almanac table: rows are the 9 jobs, columns are the 12 months, and a gold bar spans the months each job peaks. It stays aligned to the 120–1320 grid, the featured-card void goes away, and the cover-the-logo test passes. Lay the prices against the same month columns as a quiet second table, so the dense section and the quiet section share one grid.
