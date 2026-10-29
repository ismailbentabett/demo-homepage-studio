COPY: ok

# insulation-B · critique round 2 (mode: fast)

**Five-second answer (visitor):** "Inchwise, insulation in Fargo. They measure my attic depth in six places and write it down before any price. I call (701) 555-0165 or read my own attic depth with their ruler. Why them: they show inches, not a pitch." Clear on 1440-first.jpg and 390-first.jpg.

**What changed since round 1:** readout typography fixed, R-50/R-51 reconciled, feature review card filled, pin spacer gone, review labels inked, mobile shortened (16,654 → 14,511 px) with service disclosures and a review snap row, two new taped plates (P-02, P-03), section rails and the footer ruler now in the motion.

## First screen: 9
1440-first.jpg: trade+city eyebrow, 3-line h1, call + tool CTA, six-ruler attic cut over plate P-01, sample rating, open-now. 390-first.jpg: "R-value" now whole, both actions above the fold, sticky bar. Nothing new to deduct; the photo sits below the fold at 390, which is fine.

## Distinctiveness: 9
The ruler is now everywhere: hero, story (fill line clipping P-02), every rail, service icons, review stubs, tool, footer 0-20 ruler (1440-full.jpg, 1440-rm-full.jpg).
- −0.5 F-0n tag + mono caption idiom is shared report vocabulary in the library.

## Typography: 9
Story readout "3.5in" + "about R-10" below it is now tight (1440-full.jpg story crop). Service blurbs ink (1440-scroll-50.jpg). The tool heading's hyphen break is counted under Polish.

## Layout and rhythm: 8.5
Feature card fixed (1440-scroll-75.jpg), pin spacer gone (1440-full.jpg).
- −0.5 1440-rm-full.jpg: F-02, F-04, F-05, F-07, F-08, F-09 all use rail + h2 left + panel right. Only F-03 (vents drawing) and F-06 (orange band) break it.

## Photo: 8.5
Three plates now, taped and numbered P-01/P-02/P-03, and P-02 is clipped by the story's fill line, which is the kind of use stock never gets (1440-full.jpg).
- −0.5 P-03 frost macro is warm amber/blue next to flat cold-grey P-01 and P-02: mixed grade. It is also a mood frame, so the three do not read plan → work → result.

## Copy: 9
"Fill on top of a leak just hides it." (1440-scroll-25.jpg), "About R-9 to R-13 today. Add about 13 to 17 in…" (1440-full.jpg tool). R-51 consistent. Sample labels on rating, reviews, prices, promise. No invented claims against facts.json.

## Mobile: 9
390-full.jpg: 14,511 px, compact service list with "What we do +", reviews as a snap row with the feature first, sticky bar. Small edge issues counted in Polish.

## Accessibility: 9
Checks clean (qa/static.json, qa/render.json). Reduced-motion full pages show all content (1440-rm-full.jpg, 390-rm-full.jpg). Review labels fixed. Inactive story card body is pale grey on #E6E9EB (1440-full.jpg). That's borderline, but the checks pass and it's only judgement, so no deduction.

## Motion: 9
Rails fill with their section's progress (1440-scroll-50.jpg F-04, 1440-scroll-75.jpg F-07), story fill rises and clips P-02, tool and footer ruler share the language. One nameable idea. The frames don't show it reaching 10-level control micro-interactions.

## Wow: 9
Hero rulers (1440-first.jpg) + tool output that is a big orange "3.5in" on its own ruler with an R-range and inches-to-add (1440-full.jpg). Two connected moments. The R-49 crossing in the story still has no beat of its own, which keeps it off 10.

## Polish: 8.5
- −0.5 1440-full.jpg tool result: "About R-9 to R- / 13 today." breaks at the hyphen.
- 1440-full.jpg contact: P-03 caption butts into step 1 of the visit list (no gap).
- 1440-full.jpg footer: Tue/Thu hours wrap "7:30 am – / 5:30 pm".
- 390-full.jpg: vents drawing marker 1 clipped at the left edge; "F-07"/"F-04"/"F-08" printed twice (rail label + tag).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 126 + 108 + 90 + 85 + 68 + 72 + 63 + 63 + 108 + 72 + 34 = 889 / 100 = **8.89** → ELEVATE.

## Must
None.

## Should
1. **#tool result heading** (1440-full.jpg): "R-/13" split. Fix: use non-breaking hyphens (`R&#8209;9`, `R&#8209;13`) in every R-value string the tool writes, plus `text-wrap: balance` on the heading.
2. **#visit P-03 plate** (1440-full.jpg contact): caption touches the step list. Fix: `margin-bottom: clamp(24px, 3vw, 40px)` on the plate, or move the plate into the right column above the form.
3. **Footer hours** (1440-full.jpg): Tue/Thu wrap. Fix: `white-space: nowrap` on each time range, or a single-column dl with `Mon–Thu 7:30 am – 5:30 pm` grouping.
4. **#ventilation drawing on phones** (390-full.jpg): marker 1 cut at x=0. Fix: inset the SVG viewBox or give the figure `padding-inline: 16px` below 640px.
5. **Mobile section labels** (390-full.jpg): F-0n shown on the rail and again on the tag. Fix: hide the rail's text label below 640px and keep the tag.
6. **Story inactive cards** (1440-full.jpg): pale grey body on grey. Fix: inactive body to #5A5F66 minimum, dim with opacity on the card border, not the text.

## Elevate
- **Layout (8.5):** break the two-column skeleton in two paper sections. Set F-05 as a full-width instrument, with the 0-20 ruler spanning the content width and the copy and result beneath. Set F-07 as a staggered wall of stapled stubs under a centred h2. The page then reads band / instrument / wall / sheet, not six identical rows.
- **Photo (8.5):** make the three plates one filed sequence. Use one cold paper-grey grade, with the yellow tape as the only warm note. Replace P-03 with a finished, even-depth attic frame from the library. P-01 is the house, P-02 what we found, P-03 what the report promised, and each plate is pinned to the ruler reading it illustrates.
