COPY: needs copy-chief (copy 8.5: Ruby H.'s quote is duplicated; the reviews promise "season by season" but aren't ordered that way)

# cleaning-C: critique round 4 (fast mode, scored as always)

Both round-3 mustFixes are fixed in the screenshots: the hero labels are legible and the 1024 collision is gone. The chip overflow, the shower sliver, the arrows on every link and the four names for the primary action are fixed too. Scores rose only where a screenshot changed.

## Five-second test
- **1440-first.jpg:** "House cleaning in Chattanooga, planned around the seasons. Sample 4.9 rating, 13 years. I can price my cleaning or call (423) 555-0154." Why them: the list changes with the season (pollen, mildew), and the dial says "Now: Fall". Clear in under 5 s.
- **390-first.jpg:** the same message. h1 is 3 lines, both buttons are above the fold and the sticky Call / Price bar is there. A faint brass arc crosses the h1.

## Section scan (1440-full.jpg, scroll frames)
1. Hero: fog photo, four-segment dial.
2. Brass "A year of care" index with quarter icons and a sample price.
3. Spring "Pollen week" on paper: microfiber photo, the chip now fits.
4. Summer slate split: shower photo and sample review (1440-scroll-25.jpg).
5. Full-bleed house break.
6. Fall on paper: countdown ring tool and towels.
7. Winter deep: full-width cabin bath with a two-column foot (1440-scroll-50.jpg).
8. Services 3×3 grid with season tags and "Price this" links.
9. White reviews 3×2 (1440-scroll-75.jpg).
10. Deep area / ZIP / hours.
11. Paper form.
12. Deep footer with the dial.

## firstScreen: 9
**Earned:**
- 8-word h1 with trade, city and outcome.
- Four-segment dial with Fall filled; paper serif labels on a darkened fog (1440-first.jpg).
- One primary button plus a quieter call button.
- Brass band peeks in.
- 1024-first.jpg is clean.

**Not higher:**
- About 180px of empty fog under the buttons (1440-first.jpg).
- A ghost arc crosses the h1 (390-first.jpg).

## distinctiveness: 8.5
**Earned:** the dial does work in eight places (1440-full.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg).

**−0.5:** the services are still a 3×3 grid and the reviews a 3×2 equal-card grid (1440-scroll-75.jpg). Generic shapes inside a specific page.

## type: 9
**Earned:**
- Strong display serif.
- The hero's mono-caps count dropped from 6 to 2 (1440-first.jpg).
- Typographic punctuation is correct.

**Not higher:** mono on every dateline, chip, name and tag (1440-scroll-75.jpg).

## layout: 9
**Earned:**
- Tonal rhythm with no two darks touching (1440-full.jpg).
- The chip fits.
- The winter spread is re-cut.

**Minor:** a dead band of about 130px below the services (1440-scroll-75.jpg).

## photo: 8.5
**Earned:** one sepia grade across the set; the emerald cloth and the white sliver are gone (1440-full.jpg, 1440-scroll-25.jpg).

**Still:**
- The spring photo is a generic microfiber cloth, with no pollen, porch or screen.
- The cabin bath reads as a flash snapshot (1440-scroll-50.jpg).

## copy: 8.5
**Earned:** one primary action name, "Price my cleaning" (1440-first.jpg, 390-first.jpg).

**−0.5:**
- Ruby H.'s mildew quote appears verbatim in both 1440-scroll-25.jpg and 1440-scroll-75.jpg.
- "What neighbors say, season by season" sits over a grid that isn't grouped by season.

## mobile: 8.5
**Earned:**
- 390-first.jpg works.
- No overflow at 320 or 390 (render.json).
- Spreads stack cleanly.
- The countdown is usable (390-full.jpg).

**−0.5:**
- The ghost dial arc behind the h1 (390-first.jpg).
- The services become 9 stacked rows (390-full.jpg).

## a11y: 9
**Earned:**
- The hero labels and eyebrow now sit on a dark scrim (1440-first.jpg, 390-first.jpg).
- All content is present in reduced motion (1440-rm-full.jpg, 390-rm-full.jpg).
- Every review, the rating and every price has a Sample label.

## motion: 8.5
**Earned:**
- The sticky dial relabels SUMMER→WINTER (1440-scroll-25.jpg, 1440-scroll-50.jpg).
- The hero dial fills its quarter.
- The countdown draws its arc.

**Not higher:** everything else enters with plain reveals.

## wow: 8.5
**Earned:** the countdown ring tool is on-thesis (1440-full.jpg).

**Not higher:**
- It only covers fall.
- The year planner the concept promises is absent.
- The output can't be kept.

## polish: 9
**Earned:** the round-3 polish items are all fixed (1440-full.jpg).

**Left:**
- The duplicate quote.
- The 390 ghost arc.

## Arithmetic
14×9 + 12×8.5 + 10×9 + 10×9 + 8×8.5 + 8×8.5 + 7×8.5 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 126 + 102 + 90 + 90 + 68 + 68 + 59.5 + 63 + 102 + 68 + 36 = 872.5 / 100 = **8.73**

## Must
None. Both round-3 mustFixes are verified fixed in 1440-first.jpg, 1024-first.jpg and 390-first.jpg.

## Should
1. **Duplicate review** (1440-scroll-25.jpg #summer quote and 1440-scroll-75.jpg #reviews card 3)
   - Problem: Ruby H.'s quote is repeated word for word.
   - Fix: keep it in the summer spread and replace the grid card with a different Sample-labelled summer review, or drop that card and add a winter one.
2. **Reviews heading vs order** (1440-scroll-75.jpg #reviews)
   - Problem: "season by season" sits over an unordered grid.
   - Fix: order the cards Spring → Summer → Fall → Winter and show each card's season tag (as on the services cards). Or rename the heading to "What neighbors say".
3. **Ghost arc behind the h1 at 390** (390-first.jpg, hero)
   - Problem: the decorative dial arc sits behind "Chattanooga," and reads as a smudge.
   - Fix: below 900px either hide the hero dial, or render it whole at about 120px under the proof line with its "Now: Fall" label.
4. **Spring photo** (1440-full.jpg #spring)
   - Problem: the microfiber cloth doesn't show pollen.
   - Fix: if the library has a porch, screen, sill or window detail, swap it in. If not, crop tighter so it reads as a texture, not a product shot.
5. **Dead band under the services** (1440-scroll-75.jpg)
   - Problem: about 130px of extra bottom padding.
   - Fix: match the section's bottom padding to its top padding.
6. **Empty fog under the hero actions** (1440-first.jpg)
   - Problem: about 180px of empty fog below the buttons.
   - Fix: lower the hero min-height so the brass band peeks about 120px, or anchor the content block lower.

## Elevate
- **distinctiveness:** turn the two template grids into almanac pages.
  - Services become a four-quarter ledger set under a large dial: one column of jobs per season, with the all-year jobs in the centre.
  - Reviews sit one per season along the same ring, each with its month dateline, in place of six equal cards.
- **motion:** give the dial one scroll-driven hand-off.
  - The hero dial shrinks into the sticky corner dial as the hero leaves.
  - Each spread's dateline icon fills its quarter as the spread enters.
  - The signature then moves as one continuous line from the cover to the footer.
