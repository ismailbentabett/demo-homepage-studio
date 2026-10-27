COPY: ok

# handyman-A, round 3 (fast mode)

Round 3 is the first round with screenshots. All round-2 notes that leaned on "cannot verify" are replaced by what the frames show.

## Five-second test

- **1440-first.jpg:** "A Grand Rapids handyman who comes 8:00 to 12:00 and works through my list. Book a visit, or call (616) 555-0125. Why them: they work to a timed card, rated 4.9 (labelled Sample)." The answer comes straight away. The filmstrip of drawn job cards (08:40 Shelf, level / 09:15 Door rehung / 09:50 Faucet swapped) shows the next band.
- **390-first.jpg:** the h1 runs to 4 lines, both CTAs sit above the fold, the filmstrip shows at 556px and the sticky Call / Book bar is at the bottom. It passes.

## firstScreen: 9.0
Earned: the h1 now names the trade, the city and the outcome (1440-first.jpg). The primary and secondary CTAs differ clearly, the phone shows twice, the 08:00 stamp on the rail starts the signature, and the filmstrip shows the next band at both widths (390-first.jpg).
Deductions: the right 40% of the hero at 1440 is empty paper above the filmstrip, so the composition rests on the h1 alone (1440-first.jpg). The proof line is a mono middot string and "reviews" wraps alone onto line 2 (1440-first.jpg). Kept at 9.0, not higher.

## distinctiveness: 9.0
Earned: the Time Card Punch system carries real information in the hero rail (08:00), the timed filmstrip, the How-it-runs rail (08:00 / 08:10-11:40 / 11:55), the 07:50 card, the 10:30 break, the 11:40 reviews and the 12:00 Punch-out footer stamp (1440-full.jpg, 1440-scroll-75.jpg). Against its siblings it is a light ruled paper card. B is a dark green pegboard with condensed caps and C is a dark brown with a slab serif and a house sheet (sites/handyman/B|C/qa/screens/1440-first.jpg). The family is clearly different.
Deductions: none.

## type: 8.5
Earned: Space Grotesk display with tight tracking. The h1 breaks well (1440-first.jpg), the price table uses tabular figures (1440-scroll-50.jpg), and the review lead is set large in display with smaller follow-ups (1440-scroll-75.jpg).
Deductions: DM Mono micro-labels are everywhere: the kicker, the proof line, the header status, "Jobs on your list", "Repairs on the list", "Before the snow…", "Card 01" chips and review bylines. Most of them are middot meta strings (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-75.jpg). That is a RUBRIC §5 tell (mono micro-labels, middot meta strings): -0.5. Mono orphans are also loose: "reviews" alone at 1440-first.jpg, "the card." in the visit card at 1440-scroll-25.jpg, "Half- / day visits" hyphen-broken at 390-full.jpg.

## layout: 8.5
Earned: the services section is now split into two featured visit cards plus a grouped ruled list ("Repairs on the list" / "Before the snow, before the closing"), which fixes the round-2 uniform grid (1440-rm-full.jpg). Tones alternate paper/white/deep/paper/red/card/deep/white/paper/deep with no dark-on-dark touch.
Deductions: the footer uses the left 40% and leaves the right side as a dead dark field (1440-full.jpg, bottom). The hero's right half is empty at 1440 (1440-first.jpg). The "How a visit runs" and "Where we punch in" bands are pure #fff against the buff paper elsewhere, so they read as an unstyled default and break the paper-card thesis (1440-scroll-25.jpg top, 1440-scroll-75.jpg bottom). Net -1.0 → 8.5. (The 390 break crop is scored under photo.)

## photo: 8.0 (mustFix caps it)
Earned: the drawn job cards are consistent: ruled buff card, red margin line, timestamp pill and dark caption chip (1440-first.jpg, 1440-rm-full.jpg). The 07:50 tool-bag card with its clock overlay and the house card on "Where we punch in" belong to the same system. At 1440 the tub-and-caulk break is a strong full-bleed image tied to the copy (1440-rm-full.jpg).
Deduction / mustFix: at 390 the break illustration falls apart. The caulk gun and the red bead are cropped out, and the tub becomes three horizontal bars over a blank white slab, with the caption floating on empty space (390-full.jpg, 390-rm-full.jpg, break band). It reads as a broken image.

## copy: 9.0
Earned: plain, concrete and on thesis: "Punch in, walk the list", "Work it in that order", "Exact numbers come after we see the list.", "What homeowners say at punch-out" (1440-full.jpg). "Book a visit" is the one primary action. Prices and reviews all carry Sample labels (1440-scroll-50.jpg, 1440-scroll-75.jpg). Nothing invented against facts.json.
Deductions: the "Card 01/02/03" chips on reviews are decorative numbering (1440-scroll-75.jpg). That is minor, so no deduction below 9.

## mobile: 8.5
Earned: on 390-first.jpg the fold is right, the sticky bar has Call + Book at ≥48px, the pricing table restacks cleanly into rows (390-full.jpg), and the booking checklist rows are full-width tap targets.
Deductions: the broken break band at 390 (scored as a mustFix under photo, not repeated). The 07:50 card stacks into a very tall ~340px block under the timeline with the clock overhanging the right edge (390-full.jpg). The mobile page is long at 10,375px. -0.5 for the tall stacked card, giving 8.5.

## a11y: 9.0
Earned: the reduced-motion full pages show every section, the filmstrip, the visit card and the footer stamp (1440-rm-full.jpg, 390-rm-full.jpg). The checks are clean (static.json, render.json, no overflow at 320/390). Body copy on the deep bands reads well (1440-scroll-25.jpg).
Deductions: the grey body text on the white "How a visit runs" band and the empty-state hint on the visit card are light and need a contrast check (1440-rm-full.jpg). They don't fail visibly, so there is no mustFix.

## motion: 8.5
Earned: reveal variety now exists (clip ×4, fade, scale in dist). The filmstrip drifts, the h1 split-reveals, the visit card punches holes, the clock sweeps 08:00→12:00 and the bead draws at 1440 (1440-full.jpg vs 1440-rm-full.jpg). The round-2 "same reveal everywhere" problem is fixed.
Deductions: in 1440-full.jpg the house card on the area section and parts of the services header are still blank mid-reveal in 1440-scroll-75.jpg (the right column of "Where we punch in" is empty). The motion run leaves frames blank, so reveals trigger late. Separately, the rail stamps don't visibly ink in from frame to frame. -0.5 → 8.5.

## wow: 9.0
Earned: "Build your visit card" is now a designed artifact in the signature language. It is a tilted ruled card with 9 punch holes, an 08:00-12:00 stamp, Book and Print actions, and it sits next to the job list (1440-scroll-25.jpg). The round-2 "plain text line" deduction is gone.
Deductions: the empty state is a line of mono hint text and no list can be seen filled, so the payoff only arrives after interaction. This stays at 9.0.

## polish: 9.0
Earned: clean checks, a consistent 2px radius, stamps and chips drawn the same way everywhere, a footer stamp with a deliberate tilt, and the Sample licence label (1440-full.jpg).
Deductions: the empty right half of the footer (already counted in layout).

## Arithmetic
14×9.0 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.5 + 8×9.0 + 4×9.0
= 126 + 108 + 85 + 85 + 64 + 72 + 59.5 + 63 + 102 + 72 + 36 = 872.5 / 100 = **8.73**

## Must
1. **390-full.jpg / 390-rm-full.jpg, `.break` band:** at 390 the tub illustration crops to bars and a blank white slab, and the caulk gun and red bead are lost. **Fix:** give the break SVG a portrait viewBox or composition for under 640px (for example a second `<svg>` shown at max-width 640px, or `preserveAspectRatio="xMaxYMid slice"` with the gun and the bead start inside the visible 390px), so the gun nozzle and at least 60% of the red bead stay in frame. Cut the band height on mobile to ~56svh so the tub fills it.

## Should
1. **Header status, hero proof line, review bylines (1440-first.jpg, 1440-scroll-75.jpg):** too many DM Mono middot meta strings. Set the hero proof line in Work Sans 15px with a plain comma sentence ("Opens tomorrow at 7:30. Rated 4.9 from 138 reviews.") and keep mono only for time pills and prices.
2. **Hero proof line wrap (1440-first.jpg):** "reviews" orphans. Set the proof `max-width: none` at ≥1024, or add `text-wrap: balance`.
3. **`#how` and `#area` backgrounds (1440-scroll-25.jpg, 1440-scroll-75.jpg):** pure white breaks the paper card. Use a lighter buff (`#FAF6EE`) or the ruled-card texture at 6% so they stay on-material.
4. **Footer (1440-full.jpg, bottom):** the right 60% is empty. Put the hours as a punched weekly time card (Mon–Sun rows, Sun "closed" struck) or the service-area list on the right column.
5. **Review chips "Card 01/02/03" (1440-scroll-75.jpg):** replace them with each review's service time or the service name in the pill, so the number carries information.
6. **Reveal timing (1440-scroll-75.jpg, right column of `#area`):** the house card is still blank when the section is half in view. Trigger reveals at `top 85%`, not later.
7. **07:50 card on mobile (390-full.jpg):** cap it at `aspect-ratio: 4/3` under 640px and keep the clock inside the card bounds.
8. **Review bylines (390-full.jpg):** "Half- / day visits" hyphen-breaks. Add `hyphens: manual` on the byline.

## Elevate
1. **photo (8.0, weight 8):** make the drawn plates behave like one art-directed set at every width. Each plate should get a mobile composition where the action (gun on bead, hand on faucet, level on shelf) sits on the right third and the red accent mark crosses the frame. Then the break band becomes the one full-bleed "10:30" plate, with the bead drawn as you scroll on phones too.
2. **motion (8.5, weight 12):** tie the scroll to the clock. The rail's red line should fill from 08:00 to 12:00 as the page scrolls, and each section's time pill should press in (scale 1.15→1, ink from outline to filled red) when the line reaches it. Then the footer stamp lands as the line hits 12:00, and the signature is the page's progress bar instead of a set of static labels.
