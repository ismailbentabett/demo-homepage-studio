COPY: ok

# tattoo-A: critique round 2 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "Custom tattoo studio in Brooklyn. They redraw my screenshot and show me before any ink, and that moth is what it looks like healed. Book a consult, text a photo, or call (718) 555-0101." Passes at both sizes.

## First screen: 9.0
Earned: the h1 carries trade, place and outcome; the phone shows as text in the header; the healed moth plate has a stencil inset with an annotation; there's a SAMPLE RATING proof line; at 390 the h1 is 4 lines and both actions are above the fold (1440-first.jpg, 390-first.jpg).
- 390-first.jpg: the photo strip is a 120px letterbox and the moth reads as a sliver.
- 1440-first.jpg: the grey stencil inset muddies the lower third of the photo.

## Distinctiveness: 9.0
Earned: the sheet system now runs through every band, including the S9 "NO" sheet, the slip tally and the "SHEET FOR YOU" estimator (1440-full.jpg).
- 1440-full.jpg: the "h2 left, grey note right" intro still repeats in four bands.

## Typography: 9.0
Earned: a strong pair, the italic transfer word, the scale moment in "Bring the screenshot.", and sentence-case "Ask about this" (1440-full.jpg).
- 1440-scroll-75.jpg: the tiny tracked caps still stack (rail, tab, tab in one view).

## Layout: 8.5
Earned: timeline and deposit are split, and the reviews close on a tally (1440-scroll-75.jpg).
- 1440-full.jpg Styles: the S1 sheet carries ~300px of blank paper (−0.5).
- 1440-full.jpg contact: "Next sheet" sits outside the sheet and the form column ends early, leaving dead space on the right and below.
- 1440-scroll-25.jpg: the process still runs about 2.5 screens.

## Photo: 8.0
Earned: the healed moth is now the hero proof (1440-first.jpg).
- 1440-scroll-50.jpg: half the break frame is a cornfield, and the neo-trad portrait sleeve is not this studio's fine-line or botanical style (−0.5).
- 1440-first.jpg vs 1440-scroll-50.jpg: no shared grade between the two photos (−0.5). Only two photos on the page.

## Copy: 9.0
Earned: S9 keeps the "one we say no to" promise, the Day 42 CTA matches its block, hours print once, and Sample labels sit on every claim (1440-full.jpg). All claims check against facts.json (guarantee, deposit, prices, licence).
- 1440-scroll-50.jpg / rules band: "in front of you" is used three times across hero, rules and break.

## Mobile: 9.0
Earned: Styles is 2-up, the timeline rail is padded, the process sheets are composed for the phone, and render.json shows no overflow (390-full.jpg).
- 390-first.jpg: the photo strip is too short to prove anything.

## Accessibility: 9.0
Earned: render.json is clean, 1440-rm-full.jpg and 390-rm-full.jpg show every word, the strike-through bug is fixed, and labels are visible.

## Motion: 8.5
Earned: the sticky redraw explains the process (1440-scroll-25.jpg), and the estimator stencil scales with the input.
- 1440-full.jpg: the other bands still share one reveal stagger, and the hero transfer does not animate as a transfer.

## Wow: 8.5
Earned: the photo with its stencil overlay, the process redraw and the limb estimator.
- 1440-full.jpg estimator: the result sheet is small. The process ends on paper, not on skin.

## Polish: 8.5
Earned: the timeline is fixed and the footer is designed (1440-full.jpg).
- 1440-full.jpg contact: the "Tell us the idea" label touches the radio grid (−0.5). There are shadows on every resting sheet.

**Arithmetic:** 14×9 + 12×9 + 10×9 + 10×8.5 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×8.5 = 126 + 108 + 90 + 85 + 64 + 72 + 63 + 63 + 102 + 68 + 34 = 875 / 100 = **8.75**

## Must
None.

## Should
1. Contact form (`#book` or the form section, 1440-full.jpg): the "Tell us the idea" label sits on the radio grid. Fix: add `margin-top: 24px` to the textarea field group.
2. Contact form (1440-full.jpg): "Next sheet" sits outside the sheet. Fix: move the submit row and the "We'll text…" note inside the form sheet, and widen the sheet to the column edge (~1376px).
3. Styles S1 (1440-full.jpg): the sheet is mostly blank. Fix: put the healed or stencil plate inside S1, or end S1's height at its content and let S4 span the full row.
4. Photo break (1440-scroll-50.jpg): the cornfield takes half the frame. Fix: crop with `object-position` to the forearm (about 70% x), or swap in a healed fine-line or botanical frame from the manifest.
5. 390 hero (390-first.jpg): raise the photo strip to ~220px with `object-position` on the moth.
6. Shared grade: apply one filter to all photos (for example `filter: saturate(.85) contrast(1.04)` plus the vellum-white frame).
7. Polish: drop the resting shadows on the Styles, review and form sheets and keep the offset edges as the only depth cue.

## Elevate
- **Photo:** make healed skin the second voice of the page. Sheet 05 lifts off a real healed photo, small pinned healed plates go on review slips, there's one shared frame and grade, and the break is a tight skin crop.
- **Motion:** make "transfer" the one motion verb. The hero stencil draws, then the vellum lifts, on load. The same peel reveals the Styles sheets and review slips, and the estimator stencil redraws with the same stroke draw. Retire the generic fade-up.
