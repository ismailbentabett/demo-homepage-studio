COPY: ok

# electrician-A: critique round 4 (fast)

**Five-second test** (1440-first.jpg, 390-first.jpg): "Lineside Electric is a Columbus electrician for panels, service upgrades and EV chargers. They're open now until 5:30, cover Columbus and 6 suburbs, and are rated 4.9 (Sample). I can price my job or call (614) 555-0110. Why them: they draw the job out like a wiring diagram before touching anything."

What changed since round 3: both elevate moves landed (the hero is the one-line diagram, and the h2s sit in SHEET title strips). Should items 1-6 and 9-10 are fixed. Item 8 (feeder label) is only partly fixed.

## firstScreen: 9.5
Earned: in 1440-first.jpg the conductor runs from the utility pole behind the h1 into kWh, Main 200 A and a bus. CKT 1-3 carry the proof (Open now, Columbus + 6 suburbs, 4.9 Sample), and the bus ends in a ground symbol. The h1 is 7 words on 2 lines. There is one primary action plus a ghost call, the phone is in the header and the hero, and the paper band peeks ~64px. In 390-first.jpg the h1 is 3 lines, both buttons are full width, and all the proof sits above the fold.
Not 10: the h1 promises a method ("draws the job first") rather than a homeowner outcome.

## distinctiveness: 9
Earned: the hero family now differs from sibling B (an open, full-width conductor diagram vs B's boxed panel-schedule card, electrician-B 1440-first.jpg). The drafting-sheet system runs through 9+ sections (1440-rm-full.jpg).
Deduction: dark ground + orange + condensed grotesk + mono still puts it in sibling B's feel family (−0.5 from 9.5).

## type: 9
Earned: SHEET E-n title strips with a full-size Archivo h2 (1440-scroll-25.jpg, 1440-scroll-50.jpg), and the micro-captions are gone. The bus-fill labels are now legible.
Not 9.5: mono still appears on prices and in the drawing labels in every band, so it is a second voice, not only a single accent.

## layout: 9
Earned: 1440-full.jpg has no adjacent dark bands. There is a full-bleed break, asymmetric splits, a dense mosaic and a quiet contact.
Deduction: 1440-scroll-25.jpg shows ~250px of dead paper above the "Downstream" strip, because the heading bottom-aligns against the taller E-4.1 plate.

## photo: 8.5
Drawn plates in one consistent language. Nothing is blank or broken (1440-full.jpg, 390-full.jpg). Stock is a placeholder.

## copy: 9
Earned: concrete trade language, honest qualifiers, and Sample labels everywhere (1440-rm-full.jpg). The break h2 is rewritten (1440-scroll-50.jpg), there is one action name, and "Priya S." no longer ends a sentence.

## mobile: 9
Earned: 390-first.jpg works cleanly, render.json shows no overflow at 320 or 390, and the 390 break now has its wire (390-full.jpg).
Minor: the rail line crosses the logo mark in 390-first.jpg.

## a11y: 9
1440-rm-full.jpg and 390-rm-full.jpg show all content. Inputs are labelled, contrast holds, decorative imgs are alt="", and render.json has no errors.

## motion: 9
The break wire draws on scroll (1440-scroll-50.jpg), the rail progress shows in 1440-scroll-25.jpg, and the EV bus fills live. Not 10: the hero conductor doesn't energise (1440-first.jpg ≈ 1440-rm-full.jpg).

## wow: 9
The service one-line with circuits as proof (1440-first.jpg) and a readable bus-fill result (1440-scroll-50.jpg) make two connected moments.

## polish: 9
The hero shadow is removed (1440-first.jpg), and radius and stroke are consistent. Small leftovers: the Upper Arlington label is tight to a feeder (1440-scroll-75.jpg), and the rail crosses the logo (390-first.jpg).

## Arithmetic
14×9.5 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 133 + 108 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36
= 903 / 100 = **9.03**

## Must
None. No demo-rule breach, no content missing in reduced motion, no overflow, and static.json and render.json are clean.

## Should
1. **#area feeder map** (1440-scroll-75.jpg): move the "Upper Arlington" label 16px further left and below its node so no feeder line comes near the text.
2. **Rail vs logo at 390** (390-first.jpg): start the rail below the header (top: header height) or shift it to x=8px so it doesn't cut through the logo mark.
3. **Section #circuits header** (1440-scroll-25.jpg): top-align the title-strip column with the E-4.1 plate (align-items:start) to remove the ~250px dead paper above it.
4. **Hero energise** (1440-first.jpg): on load, draw the copper conductor from the pole to the ground once (~1.2s) so the first screen has the motion the rest of the page has. Keep the static state for reduced motion.

## Elevate
None (PASS expected).
