COPY: needs copy-chief

# carpenter-A · critique round 3 (fast mode, final round)

Round 2 was scored from the DOM only (no screenshots existed). This round has the full set from `qa/render.json`, so several round-2 "assumed" 9s are corrected here against what is actually on screen. That is evidence, not harshness.

## Five-second test

- **1440-first.jpg**: "An old-house carpenter in Portland. They cut out rot and splice in new oak. Call (207) 555-0167 or price a repair." The filmstrip of drawn plates (CUT 00 to 03) reads as a craftsman's sheet straight away. The proof line ends on a "SAMPLE RATING" chip that has **no rating next to it**, so it is a label for nothing.
- **390-first.jpg**: the h1 runs 3 lines, the lead is readable, the Call button and "Price a repair" are both above the fold, and a phone icon sits in the header. The cut rule peeks at the bottom. It passes.

## First screen: 9.0

Earned: h1 "Old-house carpentry in Portland" (5 words: trade, city and the old-house angle), one loud Call button with a quiet outlined "Price a repair" beside it, the phone in the header on both viewports, and a proof line with years and live open-now. The cut rule "CUT 00 · SCARF & SASH · PORTLAND ME · WHITE OAK" and the plate rail put the signature in the first screen. The next band (deep navy) peeks at about 70px in 1440-first.jpg.
Deductions: in 1440-first.jpg and 390-first.jpg the proof line ends "· SAMPLE RATING" with no 4.9 / 84 reviews, which is a dangling label (no number deduction; it holds the score at 9, not higher). The eyebrow, nav and cut rule add up to three tracked-caps lines in one view (counted under type).

## Distinctiveness: 8.5

Earned: the cut rule organises the page as numbered cuts. 1440-rm-full.jpg shows it in the hero, story, trim cards (CUT 03A/B/C), proof (CUT 08), area (CUT 09) and footer (CUT 99). The drawn plate filmstrip is a hero family no sibling uses. The mustard "Repair or replace?" band is distinct.
Deductions: carpenter-B (B/qa/screens/1440-first.jpg) is also cream paper, dark ink, mono dimension labels and line-drawn technical plates with red dimension ticks. Cover the logo on the trim-card section (1440-rm-full.jpg) and it could be B's story-pole site. The two share a visual language even though the hero family and fonts differ (−0.5).

## Typography: 8.0

Earned: Young Serif display with good mass and tight tracking at the h1 scale (1440-first.jpg), Source Serif 4 body at full ink, and DM Mono declared as the accent. Hero scale contrast is real.
Deductions:
- Straight quotes on every review: `"Our front porch posts…"` and `"The previous owner…"` (1440-rm-full.jpg, proof and trim bands) (−0.5).
- Hyphen price range "Sample pricing: $275-$650 per sill" (1440-scroll-25.jpg) (−0.5, shared with the quotes as one tell). The fraction style is mixed: "¾ × 3½" on CUT 03A next to "1-3/8 × 1-3/4" on CUT 03B, and the 03B label breaks mid-number as "1-" / "3/8" (1440-rm-full.jpg trim cards).
- Tracked mono caps everywhere in one view: nav, eyebrow, cut rule and plate captions (1440-first.jpg). In the trim band there are 3+ tiny caps labels per card (−0.5).

## Layout and rhythm: 8.0

Earned: the tone run is varied (paper, navy, mustard, paper, blueprint break, sand, paper, navy, paper, navy) and there is a real full-bleed break (porch elevation, 1440-scroll-50.jpg). The services list is a dense section and the proof band has a 3-column structure.
Deductions:
- Contact (navy) runs straight into the footer (navy). In 1440-rm-full.jpg the bottom ~900px reads as one dark block, and the footer adds an empty ~150px band holding only the CUT 99 rule (−1.0).
- Dead space: the proof band opens with about 200px of empty navy above its cut rule (1440-rm-full.jpg, and 1440-scroll-75.jpg shows the empty band). In the area section the left column ends at the ZIP field with about 400px of empty paper under it beside the stair plate (1440-rm-full.jpg) (−0.5).
- Sand porch band next to the paper services band reads as one tone (1440-rm-full.jpg). This is noted but not deducted again.

## Photo and video: 8.5

Placeholder mode, so the drawn treatments are judged on their own. All plates share one system: grid paper or navy blueprint, one stroke weight, brass and oxide dimension ink, and a "PL NN" caption bar (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg). The hero rail tells a sequence: mark, measure, square, saw. Nothing is blank or broken.
Deductions: plates are close to icon-scale inside large frames, e.g. the "PL 02a" rot plate in 1440-scroll-25.jpg is a tiny drawing in a big empty grid (−0.5 for under-used frames). The footer still credits "Sample photos via Pexels" when no photo is on the page (counted in polish).

## Copy: 8.5

Earned: real trade nouns throughout ("scarf", "sound stock", "primed on all six sides", "putty bed", "stringer kept", "sister"). "We splice, not cover" is a voice line, and the reviews carry Sample labels.
Deductions:
- Too many names for the secondary action: "Price a repair" (hero), "Send a photo" (story), "Send a photo of the damage" (rot check), "Book a porch inspection", "Price it" (×12), "Get my number" (estimator), "Get a number" (contact h2), seen across 1440-rm-full.jpg (−0.5).
- The same idea twice: the trim cards (matched trim, sash, doors) repeat three of the nine rows in the services list directly below, with the same blurbs (1440-rm-full.jpg) (−0.5).
- The hero proof line "SAMPLE RATING" chip has no rating (1440-first.jpg) (+0, but fix it).

## Mobile: 8.5

Earned: in 390-first.jpg the h1 runs 3 lines, both actions sit above the fold and the header call button is 48px. 390-full.jpg shows no sideways scroll (render.json overflow 390 and 320 both clean). The filmstrip becomes a swipe rail and the trim cards stack.
Deductions: the phone version is mostly collapsed rather than composed. 390-full.jpg shows the desktop order stacked, with nine full service rows each carrying a "Price it" button (a very long dense run). The porch elevation plate shrinks to a thumbnail strip with unreadable labels (−0.5).

## Accessibility: 8.5

Earned: reduced motion shows every word (1440-rm-full.jpg, 390-rm-full.jpg: no blank bands, unlike the motion full-page). A skip link is present. Inputs are labelled. `:focus-visible` is 3px in var(--focus) with a 3px offset. The estimator has an aria-live output. Forced-colors and print blocks exist.
Deductions: the proof/reviews section has no h2. Its first heading is the h3 "Price it by the job" (dist/index.html), so the reviews sit under "Everything we cut, splice and fit" in the outline (1440-rm-full.jpg proof band) (−0.5).

## Motion and interaction: 8.5

Earned: many hooks beyond reveals: data-sw-signature (×9), data-split, data-count, data-checklist, data-hotspot, data-estimator, data-lead multi-step, filmstrip rail, and Lenis/GSAP self-hosted. Reduced motion is respected.
Deductions: 1440-full.jpg (motion) shows long blank stretches (story lower half, proof, area) waiting on reveals. Entrances are mostly the same data-reveal (21 uses), and only the cut rule varies by role (−0.5). No motion is visible in the frames that explains the splice; the scarf diagram in 1440-scroll-25.jpg is a static frame.

## Wow moment: 8.5

Earned: the plate rail plus two checklist tools in the cut-sheet language (rot check, porch check with the elevation hotspots in 1440-scroll-50.jpg). The estimator output is now framed as "CUT 08 · PRICE · RANGE" with a rule (1440-rm-full.jpg), which is better than a plain $ line.
Deductions: in 1440-rm-full.jpg the estimator select reads "Window sill rot repair (patch)" but the output reads "Porch post base splice: $450 to $1,100 per post". The tool contradicts its own input on screen (−0.5).

## Polish: 8.5

Earned: favicon, apple-touch, theme-color, JSON-LD GeneralContractor, print stylesheet, square corners chosen once, no `transition: all`.
Deductions:
- 1440-rm-full.jpg area band: "Open now · until 4:30 pm · Open now · until 4:30 pm". Both spans on dist line 1072 carry `data-open-now`, so the hours text is overwritten and repeated (−0.5).
- The footer credit "Sample photos via Pexels (placeholder mode)" refers to photos the page does not show. The footer close is an empty band with one rule (1440-rm-full.jpg).

## Arithmetic

14×9.0 + 12×8.5 + 10×8.0 + 10×8.0 + 8×8.5 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 102 + 80 + 80 + 68 + 68 + 59.5 + 59.5 + 102 + 68 + 34
= 847 / 100 = **8.47**

## Must

None. Every Sample label is present, no invented claims were found against facts.json, reduced motion is complete, and there is no overflow.

## Should

1. **#area `.open-now` (dist line 1072)**: the hours are duplicated as "Open now · until 4:30 pm" twice. Remove `data-open-now` from the second span so it keeps "Mon–Thu 7 am – 4:30 pm · Fri 7 am – 3 pm".
2. **Hero `.proof-line`**: the "Sample rating" chip has no value. Make it read "4.9 ★ · 84 reviews [Sample rating]".
3. **Estimator `[data-est-out]`**: the output does not match the selected option. Render the initial output from the select's current value, or set the select to the job shown.
4. **Contact and footer**: two navy bands touch. Put the footer on paper (or sand) with the CUT 99 rule in ink, and fill its empty band with the name, phone, hours and areas as the finished "cut list" summary.
5. **Proof band top padding / area left column**: about 200px of dead navy and about 400px of dead paper. Halve the proof band's top padding. In #area, move the hours and a short "how far we drive" line, or the ZIP result card, into the left column so it ends level with the plate.
6. **Reviews**: straight quotes. Use “ ” and ’ throughout, write "$275–$650" (en dash) or "$275 to $650", and use one fraction style on the cut labels (½ ¾ glyphs, or "1 3/8" with `&nbsp;`), never breaking inside a number (`white-space: nowrap` on dims).
7. **Proof section heading**: no h2. Add a visible h2 (e.g. "What neighbours said, and what it costs") and keep "Price it by the job" as h3.
8. **Secondary action naming**: seven names for one action. Pick one ("Price a repair") for hero, rows, estimator and contact, keep "Call" as primary, and drop "Send a photo" as a separate CTA (fold it into the form step 3).
9. **Trim cards and services list**: the same three services twice. Turn the trim band into the matched-profile story only (offcut, gauge, knife, installed), with no service blurbs, or drop those three rows from the list.
10. **Footer credits**: the line claims Pexels photos when there are none. Remove it or replace it with "Drawings made for this sample site".
11. **390**: nine full service rows. At < 640px collapse the services list into the existing accordion (data-accordion) with "Price it" inside each, and let the porch elevation keep its 21/9 crop with labels at ≥ 13px.

## Elevate

1. **Typography (8.0, weight 10)**: make the type do the cut-sheet. Set every dimension in one real fractional system (DM Mono with `font-feature-settings: "frac"` or true ½ ¼ ¾ glyphs) and give the h2s a cut number set in the display face at a large size against the small mono spec ("08" big, "PRICE · RANGE" small). Then the scale contrast that only lives in the hero runs through the page, and a text-only screenshot reads as a joiner's cut list.
2. **Layout (8.0, weight 10)**: give the scroll a sheet shape. Make the footer the "finished joint", a paper band where the CUT 00 to 09 labels from the page reassemble into one completed cut list (index of sections with their numbers and a total line). Make the proof band break the grid once, with the scarf-joint plate overlapping the navy/paper boundary between proof and area, so the two dead zones become the page's one intentional off-grid moment.
