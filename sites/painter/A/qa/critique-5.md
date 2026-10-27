COPY: ok

# painter-A: critique, round 5 (fast mode)

## Five-second test
1440-first.jpg: "A Richmond house painter who does the prep first. There's a drawing of a Fan rowhouse cut down the middle, with the old paint on the left and the finished job on the right. I can press Price it or call (804) 555-0119, and they're open now." 390-first.jpg: the same answer. The h1 runs 4 lines, both actions sit above the fold, and the proof line (open now, areas, 4.9 marked Sample) is visible. It passes.

The big change since round 4 is that the grey placeholders are gone. Every image slot is now a drawn illustration in the brand palette: the cut-line elevation, the film-build cross-sections, and a street of rowhouses. The page now looks like its concept.

## firstScreen: 9
- 1440-first.jpg: the h1 is 8 words with trade, city and outcome. "Price it" is the primary action, with a quieter outlined call button next to it. The phone number is in the header. The proof line includes a Sample rating. The next band peeks about 64px. The signature (the cut-line elevation and the left film stripe) is visible on the first screen, so this is near a 10.
- 1440-first.jpg: the h1 sets on **4 lines at 1440** (>3): −0.5.
- 390-first.jpg: h1 is 4 lines and both buttons are above the fold. Good.

## distinctiveness: 9
- The signature now shows in at least 6 sections. 1440-full.jpg: the hero sheet "00", the schedule sheet with its film-build bar, the "01–03" cross-sections, the "04" services index, the "06" area, and the footer stamp "07 WALK-THROUGH · DONE". 1440-scroll-25/50/75.jpg: the left stripe gains layers as you scroll, and a right swatch rail fills.
- The numbering does real work (it is the crew's step order), so it isn't decoration. The cross-sections (1440-scroll-25.jpg) say "painter who preps" even with the logo covered.
- Sibling painter-C (dark Charleston serif) shares nothing with this site.
- Held at 9: "Plan the week" reuses "00" after the hero's "00" (1440-full.jpg), and there are no stamps on the lead band or on Price it. The sequence has gaps, which weakens the "page is the schedule" idea.

## type: 9
- 1440-first.jpg: Sora display at a big scale against DM Mono annotations gives a real scale-contrast moment.
- 1440-scroll-75.jpg: prices use en-dash ranges ("$6,500–$14,000"), the mono numerals are tabular, and the quotes are curly. end crop of 1440-full.jpg: hours use "7:30 am – 5 pm".
- Body text in Outfit is 16px or larger.
- 1440-first.jpg: there are 5+ tiny tracked mono caps labels in one view (RICHMOND · PAINTING, SHEET 00, FRONT ELEVATION, FAN ROWHOUSE, SAMPLE RATING): −0.5.

## layout: 9
- 1440-full.jpg: the tone sequence is paper → greige tool → deep process → greige full-bleed street → paper index → brick lead band → greige reviews → deep area → paper form → deep footer. No two dark bands touch.
- It has a full-bleed break (the street), asymmetric splits, a dense section (the services index) and a quiet section (the street).
- 1440-scroll-75.jpg: the guarantee card leaves about 230px of empty right column under it, and the featured review card has about 150px of dead space inside it. It is not a −0.5 gap, but it keeps this from a 9.5.
- 1440-scroll-25.jpg: about 130px of empty band under the pre-1978 note.

## photo: 9 (drawn treatments, judged on their merit)
- Every frame comes from one hand and one palette, so they read as one shoot.
- 1440-first.jpg: the cut-line elevation, with "as found" on the left and "after coat two" on the right, is a frame treatment unique to this concept.
- 1440-scroll-25.jpg: the wash, scrape and prime cross-sections tell a sequence.
- 1440-full.jpg: the rowhouse street is the result.
- The images are labelled honestly ("Drawing, not a photo", "Colors shown are examples").
- Held from 9.5: in the street crop of 1440-full.jpg, the second rowhouse (salmon brick) has solid windows with no mullions, so it reads as unfinished next to its neighbours.

## copy: 9
- The trade nouns are real: cornice, sills, bonding-primed, wet scraping, HEPA vacuum, film build.
- "Price it" is used consistently as the primary action. Microcopy under the form says "This demo form sends nothing…", which is honest. Sample labels are on the rating, the reviews, the pricing, the guarantee and the licence.
- 1440-scroll-25.jpg: "Wash. Scrape. Prime." is a tricolon headline: −0.5.
- Not deducted, but should be fixed:
  - The pre-1978 promise appears three times: the process note, the lead band and service 02.
  - The end crop of 1440-full.jpg says "Four short steps" next to a 3-item numbered list.

## mobile: 8 (capped by mustFix)
- 390-full.jpg (top crop): the coat schedule is re-cut as a vertical day list, which is a real phone decision. Job chips and checkboxes are 48px or taller. The sticky Call / Price it bar is present. The hero sheet stacks under the actions.
- 390-full.jpg (bottom crop) and the end crop of 1440-full.jpg: **the quote form shows three controls on step 1**: a styled "Back" (with nothing to go back to), a styled "Next", and a third, **unstyled browser-default "Next" button** about 24px tall. On a phone, the user can't tell which one advances the form, and the default button fails the 48px target. This breaks the main conversion on a phone, so it is a mustFix.

## a11y: 9
- 1440-rm-full.jpg: every section and every word is present in reduced motion.
- dist/index.html: skip link, `:focus-visible` styles, `forced-colors` handling, two `aria-live` regions, labelled inputs, and one h1 → h2 → h3 with no skips.
- The duplicate "Next" control (see mobile) also gives a screen-reader user two buttons with the same name. That is counted once, under mobile.

## motion: 9
- dist/index.html: entrances vary by role:
  - `data-reveal="clip"` on the drawings
  - `scale`
  - stagger on lists
  - SplitText lines/chars on headings
- `--sw-p` drives the film stripe, which visibly gains layers across 1440-scroll-25/50/75.jpg. A top progress rule grows (about 360 → 720 → 1080px across the three frames). The stripe explains film build, so the motion means something.
- Held at 9: from stills I can't confirm one motion idea a visitor would describe out loud. The hero cut-line does not visibly move between states.

## wow: 9.5
- end crop of 1440-full.jpg (the "Plan the week" crop) and the 390 top crop: the coat schedule is a real tool. You pick the job, the start day and the house conditions. Its output is a taped sheet of day cards with weekends hatched off, a film-build bar, "7 working days · walk-through on Tuesday", and Print it plus "Price this schedule".
- The output is designed in the signature's language, and a homeowner would print it and keep it. With the scrolling film stripe, these are two connected moments.
- It is not a 10 because the stripe and the sheet don't visibly talk to each other (the sheet's film bar does not echo the page stripe's layers as you change the job).

## polish: 8.5
- dist/index.html: SVG favicon, apple-touch-icon, og.jpg, HousePainter JSON-LD, two `@media print` blocks for the schedule, forced-colors, no `transition: all`. The footer is a designed close with the "07 · DONE" stamp.
- 1440-scroll-75.jpg and 1440-first.jpg: the radius is mixed. Sample chips and ZIP area chips are pills, while every stamp, card and button is square at 2px: −0.5.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×9 + 8×9 + 7×8 + 7×9 + 12×9 + 8×9.5 + 4×8.5
= 126 + 108 + 90 + 90 + 72 + 72 + 56 + 63 + 108 + 76 + 34
= 895 / 100 = **8.95**

## Must
1. **Where:** the #quote form step 1. Evidence: end crop of 1440-full.jpg and bottom crop of 390-full.jpg.
   - **Problem:** an unstyled, browser-default "Next" button (about 24px tall) renders next to the styled Back/Next pair. The styled pair seems not to be the one the form script drives, so the real control is the tiny default one. The styled "Back" also shows on step 1. On a phone this breaks the main conversion and fails the 48px tap target.
   - **Fix:** wire the styled buttons to the form behaviour by using the hooks the form module expects (`data-back` / `data-next`) instead of `data-form-prev` / `data-form-next`. Then confirm that only one Next renders, that Back is hidden on step 1, and that "Send request" appears only on the last step. Re-shoot 390-full and check the form.

## Should
- **Hero h1** (1440-first.jpg): it sets on 4 lines at 1440.
  - **Fix:** widen the h1 measure (max-width to about 13ch) or lower the clamp ceiling about 8%, so it breaks "Richmond house / painting that starts / with the prep" on 3 lines.
- **#schedule stamp** (1440-full.jpg): "Plan the week" repeats "00".
  - **Fix:** make the hero a cover sheet ("SHEET 00") and number the schedule "00 → 01" consistently. Give the lead band "05" and Price it "07 / call" stamps so the count runs unbroken to the footer's "07 · DONE".
- **Process h2** (1440-scroll-25.jpg): "Wash. Scrape. Prime." is a tricolon.
  - **Fix:** replace it with "Most of the job happens before the color."
- **Process note** (1440-scroll-25.jpg): the dashed "Built before 1978?" note repeats the lead band and service 02.
  - **Fix:** cut the note from the process section, or replace it with a dry-time line ("Primer needs 2–4 h; we don't coat over damp wood").
- **Price it intro** (end crop of 1440-full.jpg): "Four short steps" sits next to a 3-item list.
  - **Fix:** change it to "A few quick questions. Then we call to set a visit…", or make the list match.
- **Hero labels** (1440-first.jpg): there are 5 tracked mono caps labels.
  - **Fix:** set "FRONT ELEVATION / FAN ROWHOUSE" in sentence case mono ("Front elevation, Fan rowhouse") so at most 3 caps labels share the view.
- **Reviews / guarantee** (1440-scroll-75.jpg): the guarantee card leaves the right column empty, and the featured review has dead space inside.
  - **Fix:** stack the guarantee under the two small reviews and align its bottom with the pricing card, or let the pricing card span 7 columns and the guarantee span 5 at equal height. Trim the min-height of the featured review card.
- **Street, house 2** (street crop of 1440-full.jpg): the salmon-brick rowhouse has solid windows with no mullions.
  - **Fix:** give it the same sash bars as the other four, in navy.
- **Chips** (1440-scroll-75.jpg, the ZIP chips in the end crop of 1440-full.jpg): the pill radius breaks the 2px system.
  - **Fix:** set the Sample tags and area chips to 2px radius as rubber-stamp tags, matching the "00" stamps.

## Elevate
- **mobile (weight 7):** make the quote form a phone-first stepper in the schedule's language. Each step is one day card from the coat sheet ("Day 1: what needs paint"). Progress is shown as the same film-build stripe gaining a layer per step. The sticky Call / Price it bar hides while the form is on screen. The form should feel like filling in the crew's sheet, not a generic wizard.
- **polish (weight 4):** commit to one mark system across the page. Every label, tag and chip becomes a 2px stamped tag: Sample, area, guarantee, step numbers. The film stripe gets one rule weight shared by the cards and dividers, so every detail reads as part of the same printed schedule.
