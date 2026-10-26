COPY: ok

# roofer-A · critique round 3 (fast mode, roundCap 4)

## Five-second test
- **1440 (1440-first.jpg):** "A Wichita roofer who builds the roof one layer at a time and shows you each one. Call (316) 555-0101 or get a roof check. 14 years, 4.9 ★ (marked Sample)." The exploded stack and the 01–07 filmstrip (Deck → Ridge vent) make "roofing, in build order" clear before I read a word.
- **390 (390-first.jpg):** same answer. The h1 is 2 lines and both CTAs sit above the fold. The diagram is now drawn at full width, but the sticky bar covers its bottom and the next band doesn't peek.

Change since round 2: the blank placeholder slabs are gone. Every image slot is now a drawn technical detail in a cream frame with a struck layer number (01, 04, 05, 07, a yard plan), and the filmstrip shows the stack building one layer per frame. The footer says "The layer drawings are illustrations." Round 2's must item (blank boxes) is resolved. One drawing (the drip-edge compare) now has a visible rendering defect, listed below.

## firstScreen: 9.0
Earned (1440-first.jpg, 390-first.jpg):
- The h1 is 5 words, with trade and city.
- The phone shows in the header at 1440 and in the bar at 390.
- There is one barn-red primary button and a quieter outlined secondary.
- The proof line carries a SAMPLE RATING tag.
- The signature is the whole hero. The filmstrip now runs 01 Deck → 07 Ridge vent, matches the legend, and builds the stack frame by frame.
- The dark band peeks about 64px at 1440.

Deductions:
- 390-first.jpg: the diagram runs under the sticky call bar and the next band doesn't peek (−0.5 from the 9.5 the 1440 earns).
- "layer by layer" is a method, not an outcome. That's fine for this concept, but it's why this isn't a 10.

## distinctiveness: 9.0
Earned (1440-full.jpg): the layer stack does real work everywhere:
- the hero diagram and filmstrip;
- the sticky "LAYER n OF 7" card (1440-scroll-25.jpg, 1440-scroll-50.jpg);
- the dash progress bar above every layer h2;
- the service rows, which show which layers each call opens (1440-scroll-75.jpg: "LAYERS 02, 03, 06");
- the estimator drawing, which ghosts the untouched layers;
- the footer strata (01 DECK → 07 RIDGE).

That passes the cover-the-logo test on most bands. It shares nothing with B (navy and red inspection report) or C (dark seasonal dial).

Deductions:
- 1440-first.jpg, 1440-scroll-75.jpg: mono micro-labels and middle-dot meta strings ("Open now · until 6 pm", "14 years in Wichita · 4.9 ★") are still a house tell (−0.5).

## type: 8.5
Earned:
- Barlow Condensed display with tight leading. The 4-line "Six nails a shingle" break and the display-size Walt H. quote (1440-scroll-25.jpg) are real scale-contrast moments.
- Outfit body text is about 18px at full ink.
- The specialty blurbs are now body-size on deep (1440-scroll-75.jpg), which fixes round 2.

Deductions:
- 1440-first.jpg: the open-now mono pill, the mono header phone, the SAMPLE RATING tag and the filmstrip numerals add up to 3+ tiny tracked labels in one view (−0.5).
- The Sample tags look about 11px, under the 13px floor for a 10.

## layout: 9.0
Both round-2 deductions are fixed (1440-full.jpg):
- The red break now holds a full-bleed drawn shingle course and hands off to paper. Accent no longer touches deep.
- Layers 6–7 tighten into a two-up "finish" spread (1440-scroll-50.jpg), so the dead paper under the ridge text is gone.

The full page now has a shape you can see: quiet alternating layers, a loud red break, a dense two-up, a dense tool, a ruled services list, stepped "laid like courses" reviews, a red close and strata.

Deductions:
- 1440-full.jpg, ZIP row under the estimator: the input and the town list sit in the left 670px, with about 770px of empty deep band to the right and about 140px of dead space below. Nothing earns that width. Held at 9.0, not 9.5.

## photo: 8.0 (mustFix cap)
Earned: every slot is now an on-topic drawn detail in one consistent language:
- the same cream frame, hard offset shadow and struck red layer tag;
- one palette (deck tan, tar black, barn red, ridge gold);
- a build-order sequence (deck from above, eave in section, felt courses, starter from above, attic in section, yard plan).

This is art-directed and unique to the concept, and would be a 9.0 on merit.

Deductions:
- **1440-full.jpg (drip-edge band, about y 2800–3230) and 390-full.jpg (layers 02–03):** the compare drawing visibly breaks:
  - the "03 Ice shield" chip sits on top of the "ice shield" callout label, whose tail "el" pokes out past the frame's right edge;
  - the drag line cuts through "water ledys on top" (it reads as "ledys");
  - "fascia" crowds the gutter and the frame's bottom edge.

  This is broken text in a frame, so it's a mustFix and it caps the category at 8.0.
- 1440-scroll-25.jpg detail 05: the top half of the frame is a blank beige rectangle with nothing drawn in it. It's the weakest frame.

## copy: 9.0
Earned:
- Both "not just" lines are gone. The hero now reads "We tear off to bare wood and photograph every layer before it is covered", and Leak repair reads "which is rarely where it drips".
- The BEFORE / FINISHED LINE captions are gone.
- Concrete trade nouns: cap nails, laps run downhill, starter sealant line, soffit intake, magnet sweep.
- Microcopy at moments of doubt: "We look at all seven layers and tell you which ones need work." and "Nothing is sent from this sample site."
- One action name throughout ("Get a roof check"). Zero em dashes. Every price, review, rating and license carries a Sample tag.

Deductions:
- 1440-full.jpg red break: "Six nails a shingle. Class 4 if hail keeps finding you." runs 4 lines at 1440 (headline over 2 lines, −0.5 from 9.5).

## mobile: 9.0
Earned (390-first.jpg, 390-full.jpg):
- No overflow at 390 or 320 (render.json).
- The h1 is 2 lines and both CTAs are above the fold.
- The hero diagram is re-cut to full width, which fixes the round-2 thumbnail.
- The estimator is re-ordered for the phone: the drawing sits between the slider and the result.
- The service rows are single-column, and there's a two-button sticky bar.

Deductions:
- 390-first.jpg: the filmstrip, the hero's second half, still disappears on the phone, and the sticky bar covers the bottom of the diagram. Held at 9.0.

## a11y: 9.0
Earned:
- 1440-rm-full.jpg and 390-rm-full.jpg show every heading, quote, price and form field.
- The compare handle now exposes `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and `aria-valuetext` ("Drip edge 55%, Ice shield 45%").
- `:focus-visible` is a 3px var(--focus) outline at a 3px offset.
- There is one h1, with no level skips (h1 → h2 → h3).
- forced-colors media queries are present (dist/index.html).
- render.json shows no console errors.

Deductions:
- The focus ring isn't visible in any screenshot, so I can't confirm 3:1 on the barn-red band. Not a 9.5.

## motion: 8.5
Earned (1440-scroll-25.jpg shows 4/7 with the upper layers ghosted; 1440-scroll-50.jpg shows 7/7):
- the sticky card advances in build order;
- the estimator lifts out the layers the job touches (1440-full.jpg);
- there's a compare drag;
- the h1 splits.

Deductions:
- dist/index.html: 23 `data-reveal` hooks against 10 signature hooks. Most bands still enter with the generic reveal.
- Nothing in the frames shows the concept's "layer segments slide in and lock" or the clip wipe on the drawn details. No screenshot shows motion that changed since round 2, so the score holds.

## wow: 9.0
Earned (1440-full.jpg estimator band, 390-full.jpg): the round-2 elevate move landed. Picking "Leak repair" redraws the stack with layers 02, 03 and 06 in ink and the rest ghosted, with "Touches layers 02 03 06" chips, a Sample range and "Print this range". The tool's answer is now drawn in the signature's language. It also matches the service rows' layer bars, so the whole page is one idea.

Deductions:
- The signature-in-motion half is a 216px sticky card in a side rail. It's a nice detail, not a moment someone shows a partner. That keeps this off a 10.

## polish: 8.5
Earned:
- Favicon, apple-touch-icon, theme-color, og:image, JSON-LD, print and forced-colors styles (dist/index.html).
- The footer strata is a designed close.
- The filmstrip numbering is fixed.

Deductions:
- d5 / 1440-full.jpg reviews: the stepped review cards carry soft drop shadows. They aren't floating, and the shadow fights the hard offset shadow used on the drawing frames, so there are two shadow languages (−0.5).

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×9 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×9 + 4×8.5
= 126 + 108 + 85 + 90 + 64 + 72 + 63 + 63 + 102 + 72 + 34 = 879 / 100 = **8.79**

## Must
1. **Drip-edge compare drawing, `#layer-02` compare frame (1440-full.jpg, 390-full.jpg).**
   - Problem: the "03 Ice shield" chip covers the "ice shield" callout label, whose tail "el" spills past the frame's right edge. The drag line cuts through "water ledys on top", and "fascia" collides with the frame's bottom edge.
   - Fix:
     - Delete the in-drawing "ice shield" callout, since the chip already names it.
     - Move "water leads on top" to sit above the membrane line, left of the 40% mark.
     - Raise "fascia" so it clears the frame by at least 16px.
     - Set the SVG labels so none fall within 24px of the compare line's travel range at either viewport.

## Should
1. **Hero at 390 (390-first.jpg):** bring the filmstrip back as a horizontally scrolling 7-frame strip (about 96px frames) under the proof line. Cap the diagram's height so the strip, or the dark band, peeks above the sticky bar.
2. **Tiny labels (1440-first.jpg):** drop the mono face from the header open-now pill and set it in Outfit 14px. Keep mono for layer numerals only. Raise the Sample tags to at least 12px.
3. **Middle-dot strings (1440-first.jpg proof line, footer CTA "Open now · until 6 pm"):** replace the dots with a comma or a line break. Example: "14 years in Wichita, 4.9 ★ from 143 reviews".
4. **ZIP row (1440-full.jpg, below the estimator):** put the ZIP check in the right half of a two-column row, with the estimator's footnote or the service-area list on the left. Or move it inside the estimator card under the result, so the deep band has no 770px void.
5. **Review cards (1440-full.jpg, "Laid like courses"):** replace the soft box-shadow with the same 6px hard offset used on the drawing frames, or with no shadow and a 1px rule.
6. **Detail 05 frame (1440-scroll-25.jpg):** fill the empty upper half. Draw the first shingle course overlapping the starter, with the six nail dots on the chalk line, so the frame is the story and not a beige block.
7. **"Six nails" break h2 (1440-full.jpg):** widen the measure to about 14ch so it sets in 3 lines, or split it into an h2 "Six nails a shingle." and a lead line "Class 4 if hail keeps finding you."

## Elevate
- **photo (8.0):** make the drawings behave like the photos the thesis promises. Turn each detail frame into a sheet in the "photo packet":
  - a consistent title strip under the drawing (layer number, layer name, "checked before covering");
  - one clip reveal that draws the lines in the stack's own order;
  - detail 05 and the drip edge redrawn to the same density as the deck and felt frames.

  The goal is for the seven frames to read as the packet the homeowner receives.
- **motion (8.5):** make the stack itself the motion idea. As each layer band enters, its segment slides in from the right and locks onto the sticky card, and the band's own dash bar fills in step. Then reuse exactly that slide-and-lock in the estimator when the job changes. The visitor should be able to describe it in one sentence: "the roof builds itself as you scroll, and the price tool pulls out the layers it touches".
