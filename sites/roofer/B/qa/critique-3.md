COPY: ok

# roofer-B · Squarecount Roofing · critique round 3 (fast mode)

**Five-second test.** 1440-first.jpg: "Fort Worth roofs, counted before you sign. This is a roofer that measures my roof in squares and photographs every problem before pricing. I can call (817) 555-0102 or count my squares. Why them: the open report shows a pinned plan, 32.3 sq, Fix 3 / Watch 4, and three evidence plates." 390-first.jpg gives the same read:
- The h1 runs 3 lines.
- The plan strip with 32.3 sq sits between the h1 and the buttons.
- Call and Count my squares are both above the fold.
- The sticky bar is present.

**What changed since round 2 (verified in the screenshots):**
- The ZIP box is out of the hero, and the next band ("What we check first") now peeks about 90 px below the spread (1440-first.jpg).
- The orphan "29.8 sq" is gone. The tool's plan carries the seven pins, and the sheet has one result, "28–31 squares" (1440-scroll-25.jpg).
- The count-sheet keys are in sentence case.
- The deductible band is now a composed spread: a struck-through "We'll cover your deductible." and a giant 707 on the right (1440-full.jpg ~40%).
- The claim timeline is 4 × 2.
- The prices band uses white figures and system-red pins (1440-full.jpg ~68%).
- F-07 is a new subject: the ridge cap, not the F-01 house.
- The mono eyebrows became a red F-pin plus a sentence-case label.
- The count price rows stack at 390 (390-full.jpg).

None of these is re-listed below.

---

## First screen: 9.5
Earned:
- 1440-first.jpg:
  - The h1 has 7 words on 2 lines and gives trade, city and outcome.
  - Call is the red primary and Count my squares the outlined secondary.
  - The phone is in the header.
  - The proof line carries hours, area and a Sample rating.
  - The signature fills the right page.
  - The next band now peeks.
- 390-first.jpg: the h1 is 3 lines and both actions are above the fold.

Deduction:
- 1440-first.jpg: with the ZIP box gone, the cover page has ~130 px of dead white between the proof line and the "Prepared by" footer. The left page now looks under-filled rather than composed (−0.5).

## Distinctiveness: 9.5
The pinned-plan report organises:
- the hero spread
- the findings margin plan ("4 of 7 read", 1440-scroll-50.jpg)
- the count sheet with pins (1440-scroll-25.jpg)
- the claim timeline with the circled deductible
- F-keyed line items
- the signed-off break card
- the ticked footer plan (1440-full.jpg)

The cover-the-logo test passes on nearly every band.

Deduction:
- 1440-scroll-75.jpg: the reviews band is the one section the system does not touch. It is a plain 3-column grid of white cards with a red tick, and it could sit on any site (−0.5).

## Typography: 9.0
- Condensed Instrument Sans display, Public Sans body and Martian Mono figures now have clear roles.
- The count sheet reads as a document: sentence-case keys, one display figure "28–31 squares" (1440-scroll-25.jpg).
- The scale moments are strong: 707, $12,000–$21,000, ★ 4.8.

Deductions:
- 1440-full.jpg (~37%, claim timeline): the eight step descriptions are still ~13 px mid-grey on cream. They read as fine print (−0.5).
- 1440-full.jpg: middle-dot meta strings persist:
  - the hero proof line
  - "most single leaks · see F-02" in the price rows
  - "Sample roof · 32.3 sq · 7 of 7 findings" in the footer

  Minor, folded into the above.

## Layout and rhythm: 9.0
- 1440-full.jpg: the scroll has a shape with no dark bands touching.
- The deductible band is now a real two-sided spread.
- The sign-off card overlapping the break drawing is the deliberate grid break.

Deductions:
- "Heading + lead left, artifact right" still repeats in #count, #claim, #local and #contact (1440-full.jpg) (−0.5).
- 1440-scroll-75.jpg: the reviews header takes the left third and leaves two-thirds of the band empty above a uniform card grid. The cards end ragged, and the left column ends ~60 px lower than the others.
- 1440-full.jpg ~88%: in #local the left column stops at the licence line, while the right runs on with the hours card, which leaves an empty left block. Noted, no extra deduction.

## Photo and video: 9.0
The photos are placeholders, so I judge the drawn treatment.
- The seven plates now read as one inspection in order:
  - street (F-01)
  - ceiling stain (F-02)
  - chalk line (F-03)
  - hail square (F-04)
  - soft decking (F-05)
  - magnet (F-06)
  - ridge cap (F-07)
- Every plate has the same tab, red-pen circle and "Bold lead. Caption" grammar (1440-full.jpg, 1440-scroll-50.jpg).
- Nothing claims "our work" and there is no before/after.

Deduction:
- 1440-full.jpg ~85%: F-07 is the thinnest plate. It is a row of cap shingles with a single red tick and lots of empty paper, so it is weaker than the hail square or the decking plate (−0.5 from the 9.5 anchor).

## Copy: 9.5
- The inspector voice holds end to end: "One leak is one leak. The report says so.", "Three bids gave three sizes. Here's our math.", "Signed off when the count, the photos and the invoice match.", and the 707 band.
- The doubt microcopy sits at every moment: under the tool, after the claim, and on the form ("Nothing is sent from this demo").
- I checked the guarantee and "11 years" against facts.json. Both are labelled.
- Every review, rating, price, licence and term carries its Sample tag (1440-scroll-75.jpg).

No tells. To reach 10, the reviews could quote numbers from the report more often (as Owen F.'s does).

## Mobile: 9.5
- 390-first.jpg: a re-cut hero with the plan strip.
- 390-full.jpg:
  - The price rows now stack name / price / note cleanly.
  - The claim timeline is a numbered vertical rail.
  - The 707 band stacks.
  - The sign-off card stacks under the break.
  - The line items read in one column.
- render.json shows no overflow at 320 or 390.

Deduction:
- 390-full.jpg (~50%): the break drawing shrinks to a ~90 px strip that loses the ticks before the sign-off card. That is a minor loss of the signature.

## Accessibility: 9.0
- 1440-rm-full.jpg and 390-rm-full.jpg show all the content and the form.
- dist/index.html has:
  - a 3 px focus outline
  - a forced-colors block
  - labelled inputs
  - one h1
- render.json has no errors.

Deduction:
- dist/index.html still sets text at 12 px (10 rules) and 10 px (4 rules). In 1440-full.jpg the price-row notes on graphite and the timeline steps on cream are small grey text (−0.5 from the 9.5 anchor).

## Motion and interaction: 9.0
- 1440-scroll-50.jpg: the margin plan ticks findings ("4 of 7 read") with a red leader into the plate's circle.
- The count sheet redraws by roof shape and pitch, with the pins (1440-scroll-25.jpg).
- The red-pen draw-ons, the hero settle, the multi-step form with a progress bar (1440-full.jpg ~95%), and the open-now status are all present.

Deduction:
- The motion is unchanged since round 2, and the signature has no beat where it moves for the visitor. The break plan's seven ticks and the footer plan simply appear ticked. For a 10, the sign-off moment should be performed.

## Wow moment: 9.5
- 1440-scroll-25.jpg: the count sheet is now one report page:
  - the plan with the seven pins
  - the roofer's math (2,200 × 1.08 × 1.12 = 26.6; +12% = 29.8)
  - one red display result "28–31 squares"
  - a Sample price band
  - a single CTA with the ground-count caveat
- It ties into the hero tally (32.3 sq) and the signed-off footer.

## Polish: 9.0
- The head has favicon, apple-touch, OG, RoofingContractor JSON-LD and print styles.
- The price band palette is fixed.
- There is no `transition: all`.

Deductions:
- 1440-full.jpg footer (~93%): the "SR" monogram disc is salmon/pink, which is off the system red. It is the last off-palette colour.
- 1440-full.jpg ~68%: the dotted leaders in the line items stop at uneven points. The Standing-seam row shows a ~20 px stub, so the leaders do not run to the price column (−0.5 combined).

---

**Arithmetic:** 14×9.5 + 12×9.5 + 10×9.0 + 10×9.0 + 8×9.0 + 8×9.5 + 7×9.5 + 7×9.0 + 12×9.0 + 8×9.5 + 4×9.0 = 133 + 114 + 90 + 90 + 72 + 76 + 66.5 + 63 + 108 + 76 + 36 = **924.5 / 100 = 9.245 ≈ 9.25**

## Must
None. Every rating, review, price, figure, licence and term is Sample-labelled, and the form says nothing is sent. There is no owner face and no before/after. The reduced-motion pages are complete, and static.json and render.json are clean.

## Should
1. **#hero cover page (1440-first.jpg).**
   - Problem: about 130 px of empty paper sits under the proof line.
   - Fix: move the cover footer ("Prepared by Squarecount Roofing / Cover") up to sit 48 px under the proof line and reduce the spread's min-height to match, so the findings band peeks ~140 px. Or set a quiet cover-sheet table in that space ("Address: your house · Date: inspection day · Findings: 7"), labelled Sample.
2. **#reviews (1440-scroll-75.jpg).**
   - Problem: the band is a generic card grid.
   - Fix: make it the report's sign-off page. Put a single 2-column list of notes, each with its F-number pin and a red tick in the margin, under a header row that spans the width with ★ 4.8 set on the right. Equalise the card heights or drop the card boxes for hairline-ruled entries.
3. **#claim timeline (1440-full.jpg ~37%).** Raise the step descriptions to 15 px at #2b2f36 or darker.
4. **Small text (dist/index.html).** Lift every 10 px and 12 px rule to ≥ 13 px, with notes on graphite at ≥ #c9ccd2.
5. **Footer monogram (1440-full.jpg ~93%).** Use the system red #c41e3a with white "SR" letters, not salmon.
6. **#prices leaders (1440-full.jpg ~68%).** Make the dotted leader flex: 1 between the note and the price column so every row's dots end at the same x.
7. **F-07 plate (1440-full.jpg ~85%).** Add the drawn content the caption promises: nail heads at each cap, a sealant bead, and the red check sitting on a circled cap. The plate should carry as much as F-04 does.
8. **Middle-dot meta (1440-full.jpg).** In the price rows, set "see F-02" as its own pin-reference element rather than a "·"-joined string.

## Elevate (for the strict bar; not required by the fast-mode verdict)
- **Motion (9.0): perform the sign-off.** As the break enters, tick the seven pins one by one in finding order. Each tick is a red-pen draw-on of ~120 ms, staggered 90 ms. Then the sign-off card's three checks tick and the signature line draws. The footer plan then arrives already signed. Reduced motion shows the final ticked state.
- **Typography (9.0): one register for the fine print.** Define a single "report note" style for every secondary line: timeline steps, price notes, captions and footer meta. Use 15 px Public Sans at full-ink grey, with no middle dots, so the page has exactly three text sizes below the headings.
