COPY: needs copy-chief

# windowdoor-B, critique round 1 (mode: fast)

**Five-second answer** (1440-first.jpg, 390-first.jpg): "An impact window and slider company in Naples, FL (the small line above the headline tells me that, the headline doesn't). They walk me through the sticker on the glass before I pay a deposit. I can call (239) 555-0144 or text a photo of my label. They're closed now and open tomorrow at 8, and the rating is a sample."

## First screen: 8.5
Earned: the dark cover with the sticker label over the slider photo shows the signature at 0 scroll. The phone is in the header and on the primary button. The proof line carries SAMPLE RATING and the cream band peeks about 45px (1440-first.jpg). At 390 the h1 is 2 lines, both actions are above the fold and the call bar is present (390-first.jpg).
Deduction: the h1 "Read the label before you sign." has no trade and no place. Trade and city appear only in the eyebrow (1440-first.jpg).

## Distinctiveness: 8.5
Earned: the sticker (yellow top rule plus dog-ear) shows up in the hero, #label, services, prices, reviews, the form and the footer (1440-full.jpg). It is clearly different from siblings A and C (A/C 1440-first.jpg).
Deductions: the dog-ear on cards is a 12px triangle that never peels, so it's decoration (−0.5, 1440-scroll-25.jpg). The 01–08 section numbers plus OPENING 01–07 card numbers are the decorative-numbering tell (−0.5, 1440-scroll-25.jpg, 1440-scroll-75.jpg). Services is a standard photo plus 3-column card grid.

## Typography: 8.0
Earned: Red Hat Display 800 with tight tracking, and Martian Mono for label values (1440-first.jpg).
Deductions: straight apostrophes in headings ("you'd", "it's", "We'll", "What's the job?") while the prices lead is curly (−0.5, 1440-scroll-50.jpg, 1440-full.jpg #contact). #compare has 6 tiny tracked mono caps labels in one view, and the WHAT MOVES IT tag text looks about 11px (−0.5, 1440-full.jpg).

## Layout and rhythm: 8.5
Earned: tones alternate cleanly. There is a full-bleed rain break, an asymmetric 3-column compare and a yellow order-by density change (1440-full.jpg).
Deductions: the services band is a template shape (1440-scroll-25.jpg). The #label right column ends far above the sticker, and the break leaves two thirds of the width empty (−0.5, 1440-full.jpg, 1440-scroll-50.jpg).

## Photo and video: 7.0
Deductions: the antique iron lever on a weathered oak door is off-topic for Naples impact doors (−1.0, 1440-scroll-25.jpg). Its saturated warm orange sits against the cool grey hero (1440-first.jpg) and the blue rain bokeh (1440-scroll-50.jpg), so the grades are mixed (−0.5).
Credit: the sticker frame on the hero photo is a concept treatment (+0.5). Captions are honest.

## Copy: 8.5
Earned: concrete trade language (DP +50/−50 psf, missile D, interlayer), honest hedges ("We don't quote insurance savings", "Manufacturers and permit offices vary") and microcopy under the form.
Deduction: the hero lead says "four numbers", the #label h2 says "Five numbers" and the hero sticker lists a third set (DP/MISSILE/SHGC/ORDER BY/PRICE) (−0.5, 1440-first.jpg vs 1440-full.jpg). The primary action also drifts: "Price it", "Have us read your quote", "Plan my dates", "Price 12 openings".

## Mobile: 7.5
Deductions: in 390-full.jpg #label the "+50 / −50" value overprints "DESIGN PRESSURE" (−1.0, **mustFix**). The hero caption at 390 is clipped under the sticker (390-full.jpg).
Earned: no sideways scroll (render.json), a 3-button bar and full-width buttons.

## Accessibility: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show everything. Checks are clean.
Not 9: the small light mono captions on paper and yellow are borderline (1440-full.jpg), and focus design can't be verified from the frames.

## Motion and interaction: 8.0
Earned: hooks in dist include split lines and chars, clip, scale and fade reveals, stagger, sliders and month tabs.
Deduction: #label looks identical in the motion frames and 1440-rm-full.jpg. Every meaning is already shown and no corner curls, so the promised row-by-row peel is not visible as a state change (1440-scroll-25/50/75.jpg, 1440-full.jpg).

## Wow moment: 8.5
Earned: three tools in the thesis' language (1440-full.jpg): the translated label, shutters vs glass with a live total, and the order-by bar with the ORDER BY sticker on the hatched season.
Not 9: the peel itself never lands as a moment, and there is no keepable output (no printable "your label, read" sheet).

## Polish: 8.5
Earned: one radius, a designed footer sticker close, print and forced-colors media present (1440-full.jpg).
Deductions: the hero caption is a 5-line right-aligned mono column (1440-first.jpg) and is clipped at 390 (390-full.jpg).

## Arithmetic
14×8.5 + 12×8.5 + 10×8.0 + 10×8.5 + 8×7.0 + 8×8.5 + 7×7.5 + 7×8.5 + 12×8.0 + 8×8.5 + 4×8.5
= 119 + 102 + 80 + 85 + 56 + 68 + 52.5 + 59.5 + 96 + 68 + 34 = **820 / 100 = 8.20**
Mobile (7.5) is below its floor of 8, and there is a mustFix → **FIX**.

## Must
1. **390-full.jpg, #label row 1:** "+50 / −50 PSF" overprints "DESIGN PRESSURE". Fix: under 640px, stack each row with the name on line 1 and the value on its own row below (`grid-template-columns:1fr`, value `clamp(1.75rem,8vw,2.25rem)`).

## Should
1. **Hero h1 (1440-first.jpg):** no trade or place. Keep the thesis but name the thing, e.g. "Read the impact-window label before you sign." Or set "Naples" inside the h1 line and drop the eyebrow duplicate.
2. **Number count (hero lead, hero sticker, #label h2):** pick one count. Change the hero lead to "five numbers" (DP, missile, U-factor, SHGC, visible light) and make the hero sticker rows those same five label numbers, moving ORDER BY and PRICE out of the sticker.
3. **#services photo (1440-scroll-25.jpg):** replace the antique oak-door lever with an on-topic frame from the manifest (slider track, French door to a pool deck, window corner).
4. **Apostrophes:** curly ’ in "you’d", "it’s", "We’ll", "What’s the job?", and everywhere else in the headings.
5. **#compare labels and the price-tag WHAT MOVES IT text:** cut the tracked caps to one per column group. Raise the tag note text to ≥ 13px.
6. **Hero caption (1440-first.jpg, 390-full.jpg):** set it as one line under the photo, left-aligned, inside the sticker frame. At 390, give it room below the overlapping label or hide it under 640 (alt already carries it).
7. **Decorative numbering:** drop "OPENING 01–07" on the service cards (the label row could read the service's short name or "IMPACT" only), or drop the 01–08 section numbers. Not both.
8. **#label right column (1440-full.jpg):** the "what to ask for" column stops 300px above the sticker. Make it sticky beside the sticker, or move the glass cross-section down to fill the height.
9. **Primary action:** one name. Use "Price it" for every route into the form ("Price 12 openings" is fine as its live form, but replace "Have us read your quote" with "Price it: send your quote", or similar).

## Elevate
- **Photo (7.0):** make the photography one shoot about openings in Naples light. Every frame shows a real opening (slider, French door to the pool, impact window corner), graded into the night plus label-yellow palette. Every photo gets the same sticker frame as the hero, so the photos read as labelled products rather than mood stock.
- **Mobile (7.5):** re-cut the label for the thumb. On phones the sticker becomes a stack of peel tabs, one per row: name on top, big value below, and the plain meaning revealed under a visibly curled corner on tap. The hero crops to the sticker first, with the photo as a narrow slice behind it, so a phone visitor reads the label before anything else. This also fixes the motion gap: the peel finally shows as a state change.
