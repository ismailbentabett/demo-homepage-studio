COPY: ok

# cleaning-C: critique round 5 (fast mode, scored as always)

Both round-4 elevate moves landed for distinctiveness: the 3×3 services grid is now a four-quarter season ledger, and the 3×2 review cards sit around a season ring. Two round-4 items are fixed in the screenshots: the duplicated Ruby H. quote and the 390 ghost arc. Neither is repeated below.

## Five-second test
- **1440-first.jpg:** "House cleaning in Chattanooga, planned by the season. Sample 4.9 rating, 13 years. I can price my cleaning or call (423) 555-0154." Why them: the list changes with the season (pollen, mildew), and the dial says "Now Fall".
- **390-first.jpg:** the same message, with a 3-line h1, both buttons and the sticky bar on screen. The arc is gone.

## Section scan (1440-full.jpg, scroll frames)
1. Hero: fog, dial.
2. Brass almanac index.
3. Spring pollen on paper: microfiber macro and a Sample price chip.
4. Summer slate: shower, Ruby H. review (1440-scroll-25.jpg).
5. House break.
6. Fall countdown tool.
7. Winter cabin bath (1440-scroll-50.jpg).
8. **New:** the season ledger with four quarter columns and an All-year strip.
9. **New:** reviews around the "One house, four seasons" ring (1440-scroll-75.jpg).
10. Area / hours.
11. Form.
12. Footer.

## firstScreen: 9
**Earned:**
- h1 with the trade, the city and the outcome.
- The dial carries the cover.
- One clear primary action.
- 390-first.jpg is clean.

**Not higher:**
- Dead fog under the buttons (1440-first.jpg).
- A mono middle-dot meta line.

## distinctiveness: 9 (was 8.5)
**Earned:** the services are a season ledger and the reviews sit on a ring at their clock positions (1440-full.jpg, 1440-scroll-75.jpg). No template shapes remain in the main run.

**Not higher:** the white All-year box is a generic card.

## type: 9
**Earned:** a strong display serif, and the ledger heads are in serif.

**Not higher:** mono on every dateline, chip and label (1440-scroll-75.jpg), and the mono meta string in the hero (1440-first.jpg).

## layout: 9
**Earned:** the tonal rhythm holds, and the ledger removed the dead band (1440-full.jpg).

**Minor:** the Fall and Winter columns end after one job, which leaves a ragged empty bottom-right.

## photo: 8.5
**Unchanged:**
- The spring figure is a microfiber macro, not pollen (1440-full.jpg).
- The winter cabin bath is a flash snapshot with a toilet in front (1440-scroll-50.jpg).

## copy: 9 (was 8.5)
**Earned:**
- The duplicate is gone, via a pointer card.
- The reviews follow the year.
- "Nine jobs" counts true.
- Every fact is in facts.json and everything is Sample-labelled (1440-scroll-75.jpg).

**Not higher:** the pointer card fills a quote slot.

## mobile: 9 (was 8.5)
**Earned:**
- The ghost arc is gone (390-first.jpg).
- The services are grouped into 5 headed blocks with inline "Price this" (390-full.jpg).
- No overflow (render.json).

**Not higher:** the page is very long at 390.

## a11y: 9
**Earned:**
- All the text is visible in reduced motion (1440-rm-full.jpg, 390-rm-full.jpg).
- Scrims hold the hero text.
- Sample labels are everywhere.

**Not higher:** the ledger links are text-sized, which is marginal as tap targets.

## motion: 9 (was 8.5)
**Earned:**
- The sticky dial relabels through Summer, Winter and All year (1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg).
- The review ring fills by quarter on scroll (two quarters in 1440-scroll-75.jpg, all four in 1440-rm-full.jpg).
- The services dial sweeps a hand (1440-full.jpg).

**Not higher:** there is no visible hero-to-corner hand-off, and the spreads use plain reveals.

## wow: 8.5
**Earned:** the countdown ring tool.

**Not higher:** it is fall-only. The concept's Season Planner (a 12-month strip that prefills the form) is still absent (1440-full.jpg).

## polish: 9
**Earned:** the round-4 polish items are gone.

**Left:**
- The ragged ledger columns.
- The white card pasted onto the paper band (1440-full.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×8.5 + 4×9
= 126 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 68 + 36 = **892 / 100 = 8.92**

## Must
None. Checks are clean (static.json, render.json) and there is no DEMO-RULES breach.

## Should
1. **Hero meta line, 1440-first.jpg:**
   - Problem: the mono middle-dot string ("4.9 · 122 reviews · 13 years in Chattanooga") is an AI-template tell.
   - Fix: set it in the body sans as two short phrases, e.g. "4.9 from 122 neighbours [Sample rating]. Thirteen years in Chattanooga.", with no middle dots.
2. **Hero spacing, 1440-first.jpg:**
   - Problem: dead fog under the buttons.
   - Fix: reduce the hero min-height so the brass band peeks in by about 140px rather than about 120px of fog, or anchor the content block lower.
3. **Services ledger, 1440-full.jpg:**
   - Problem: the Summer, Fall and Winter columns are ragged against Spring's two jobs.
   - Fix: give each quarter a fixed-height foot, such as a one-line sample add-on price or the month the job peaks ("Peaks: August"), so all four columns end on one baseline.
4. **All-year box, 1440-full.jpg:**
   - Problem: the white card on paper reads as pasted in.
   - Fix: drop the white fill and use the same top rule as the quarter columns, plus a full-width rule, so it reads as the ledger's fifth row.
5. **Reviews, Summer slot, 1440-scroll-75.jpg:**
   - Problem: the pointer card leaves the ring one quote short.
   - Fix: put the other summer facts.json review there (if one exists), or a short excerpt from Ruby's quote ("It has not come back as fast.") linked to the August page.
6. **Mono labels, site-wide (1440-scroll-75.jpg):**
   - Problem: mono is on datelines, chips, ranges and Sample tags.
   - Fix: keep mono only for Sample tags and price figures; set datelines in small serif caps.

## Elevate
- **wow (8.5):** build the promised Season Planner as the centrepiece.
  - Choose a frequency and a starting month, and the dial unrolls into a 12-month strip.
  - Each month shows its add-on (April pollen, August mildew, November guest prep, January cabin airing) with a Sample price.
  - The plan prefills the four-question form, so the almanac becomes the visitor's own year.
- **photo (8.5):** re-cast the season plates so each one shows its season's mess or its result.
  - Spring: a pollen-dusted sill, rail or screen.
  - Winter: a warm daylight cabin interior with wood and quilts, not the flash toilet-and-tub snapshot.
  - Crop all of them to the same arch so they read as plates from one almanac.
