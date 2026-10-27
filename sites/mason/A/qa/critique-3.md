COPY: needs copy-chief (price table drops the units that facts.json gives)

# mason-A, round 3 (fast). First round judged on real screenshots

**Five-second test (1440-first.jpg, 390-first.jpg):** "A Cincinnati mason who repoints old brick with lime mortar. I can press Price it or call (513) 555-0158. Why them: 21 years on soft brick, a sample rating of 4.9, open now." It passes cleanly at both widths. The hero art is the weak part. It's a flat CSS brick tile with a slider-like bar across it and four stage chips, and at a glance it reads as a progress bar rather than a joint.

Round 2 was scored from the DOM only. This round has screenshots, so several earlier "unverified" deductions are now settled one way or the other. Some scores go down because the render shows problems the DOM couldn't.

Round-2 items now verified as fixed: the carousel shows "Review 1 of 6" (1440-scroll-75.jpg). The checklist has a joint diagram with the label "Your joint fills in as you answer" (390-full.jpg). Reduced motion shows all content (1440-rm-full.jpg, 390-rm-full.jpg).

---

## firstScreen: 8.5
**Earned:** The h1 "Lime mortar repointing for old Cincinnati brick" covers trade, method and city in two lines at 1440 and four lines at 390. One primary button (Price it) with a quieter call button beside it. The phone number is in the header. The offset dashed frame ties the art to the signature (1440-first.jpg).
- −0.5: The hero art is a flat repeating brick tile with a grey knob on a bar. It looks like a scrubber or loading bar, and the RAKED/PACKED/STRUCK/TOOLED chips sit on top of the art (1440-first.jpg, 390-first.jpg).
- −0.5: The proof line is a middle-dot meta string in mono that wraps to an orphan "· 4.9 rating" at 1440 and starts the next line with "·" at 390 (1440-first.jpg, 390-first.jpg).
- −0.5: At 390 the lead paragraph sits right under the h1 with almost no gap, so the h1 and lead merge into one block (390-first.jpg).

## distinctiveness: 8.5
**Earned:** The joint-progression signature is really there: the hero bar, the process cross-section, the dashed joint rules between bands, the brick course above the footer, and the guarantee rule (1440-full.jpg). Manrope display differs from the serif on sibling C (library/cards/mason-C.jpg).
- −0.5: The palette is cream plus brick-red plus brown-ink, the niche's default palette, and sibling C uses the same family (mason-C.jpg against 1440-first.jpg).
- −0.5: Six of the illustrations are the same flat running-bond brick tile at different crops: hero, objection, services, the break band, about and the footer course. The signature turns into wallpaper (1440-full.jpg, 1440-scroll-50.jpg).
- −0.5: Services is a numbered 01–09 list with "Price it" on every row, the guarantee is a centred band, and prices are a plain table. Those three sections read as a template (1440-full.jpg, 1440-scroll-75.jpg).

## type: 8.5
**Earned:** Manrope display is tight and confident. Source Sans body is ≥16px, with a good measure in the objection and about sections. The prices use tabular figures (1440-scroll-75.jpg).
- −0.5: Mono micro-text is everywhere: the hero kicker, the proof line, the objection pull line, the process step names, the service numbers, review tags, the break caption, "Open now", the license line and the footer phone. That is the "mono micro-labels" tell, and three or more of them often share one view (1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-75.jpg).
- −0.5: The footer phone is set in mono with underline and the big "SJ" monogram sits above the name, so the close mixes three voices (d2 crop of 1440-full.jpg, footer).
- −0.5: The pull line in the objection section ("That gray patch with crumbled brick around it?…") is in mono and accent red at body size. It should be the most human sentence on the page, and it's set like code (1440-full.jpg, objection).

## layout: 8.0
**Earned:** The tones alternate cream → paper → deep → cream → break → paper → deep → light → accent → paper → light → deep. Splits are asymmetric and section spacing is generous (1440-rm-full.jpg).
- −1.0: The about section has a dead left column. The text ends near the top, then about 550px of empty cream sits beside the brick tile and the Hours card (1440-full.jpg, about; also in 1440-rm-full.jpg).
- −0.5: In services, one small brick tile sits at the top of the left column while the nine-row list runs about 1000px down the right, leaving the left half empty under the tile (1440-full.jpg, 1440-scroll-50.jpg top).
- −0.5: The process band carries a tall empty dark run below the pinned card in the motion capture (1440-full.jpg, about 1500px of plain #3d322c). Even if part of that is pin length, the band ends without a cadence and goes straight into services.

## photo: 7.5 (drawn treatments only; placeholders are not penalised)
**Earned:** Every frame is on topic and there's no reused stock. Grade and colour are consistent, and the cross-section in process is the best-drawn piece (1440-scroll-25.jpg).
- −1.0: The objection "spall" is three grey and salmon ellipses dropped on a brick tile. It reads as clip-art blobs, not spalled brick faces around a cement patch (1440-full.jpg objection, scratch crop d0).
- −0.5: The about frame is a beige blank-brick tile with no subject. It looks like a missing image rather than a choice (1440-full.jpg about, 390-full.jpg).
- −0.5: Every frame is flat orthographic brick with no depth, light or texture change. The break band is the same tile with a gradient, so no frame gives the page a "real wall" moment (1440-scroll-50.jpg).
Nothing is blank or broken, so there's no photo mustFix.

## copy: 8.5 (capped by mustFix)
**Earned:** The voice is plain and trade-literate ("rake out", "pack it in layers", "the joint should wear out before the brick does"). The reviews are specific and labelled Sample. "Ranges, not quotes. A visit measures joint depth…" is good. Price it is used consistently.
- mustFix: The price table shows "$14–$28" for repointing and "$60–$120" for retaining walls without units. facts.json has "per sq ft" and "per face sq ft". As shown, a homeowner reads $14 for the whole repointing job, which misstates the facts (1440-scroll-75.jpg).
- −0.5: "What homeowners say" is the generic review heading. The kicker above it ("Walls we were asked back to") is the better line and should be the heading (1440-scroll-75.jpg).

## mobile: 8.5
**Earned:** No overflow at 320 or 390 (render.json). The sticky bottom bar has Call and Price it. The checklist pills and job radios are ≥48px. The process steps stack cleanly (390-full.jpg, 390-first.jpg).
- −0.5: The h1 and lead have almost no gap at 390 (390-first.jpg).
- −0.5: About 200px of empty cream sits under the footer at the end of 390-full.jpg. It's the sticky-bar spacer drawn as dead page.
- −0.5: The checklist tabs wrap to two rows with "When to book" orphaned on the second (390-full.jpg, tools).

## a11y: 9.0
**Earned:** Reduced-motion captures show every section's content (1440-rm-full.jpg, 390-rm-full.jpg). The carousel has a position readout. Labels are visible on every input. The focus/tab structure is in the DOM. There are no console errors (render.json).
- −0.5: The disabled previous arrow and the grey mono hero kicker/proof line are low contrast on cream. They look close to the 4.5:1 line (1440-scroll-75.jpg, 1440-first.jpg).

## motion: 8.5
**Earned:** The pinned cross-section steps through the stages, and 1440-scroll-25.jpg shows "03 Strike" active with the list row highlighted in sync. The checklist joint fills as you answer, and the hero bar advances. The motion is all signature-tied.
- −0.5: The hero bar's motion reads as a progress scrubber, not a trowel or jointer, because nothing in the frame says "tool" (1440-first.jpg).
- −0.5: Beyond the pin and the checklist, the stills show standard section reveals. The break band and guarantee rule give no evidence of a second scroll-tied moment (1440-scroll-50.jpg).
- −0.5: The pin runs long for four short stages (1440-full.jpg dark run).

## wow: 8.5
**Earned:** "Four stages, one joint" is the moment a contractor would remember (1440-scroll-25.jpg), and the checklist's filling joint speaks the same language (390-full.jpg).
- −0.5: The two moments aren't linked. The checklist result doesn't tell you which stage your wall needs or point back to the cross-section (390-full.jpg tools).
- −0.5: The cross-section is drawn flat at 440px inside a big empty dark field, so the climax is small on the page (1440-scroll-25.jpg).

## polish: 8.5
**Earned:** A consistent 2px radius, Sample labels everywhere, the hours card with open-now, the license marked SAMPLE, and the demo note in the footer (1440-full.jpg).
- −0.5: The blank tail under the 390 footer (390-full.jpg).

---

## Arithmetic

```
14×8.5 + 12×8.5 + 10×8.5 + 10×8.0 + 8×7.5 + 8×8.5 + 7×8.5 + 7×9.0 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 102 + 85 + 80 + 60 + 68 + 59.5 + 63 + 102 + 68 + 34
= 840.5 / 100 = 8.41
```

Weighted score: **8.41**. Round cap reached, so expect NEEDS_HUMAN.

---

## Must

1. **where:** 1440-scroll-75.jpg, #prices table
   **problem:** Prices are shown without units ("$14–$28", "$60–$120"). facts.json gives "per sq ft" and "per face sq ft", so the table misstates the facts.
   **fix:** Render each row's unit from facts after the range, e.g. "$14–$28 per sq ft" and "$60–$120 per face sq ft", in the same mono at 0.85em in muted ink.

## Should

1. **where:** 1440-full.jpg, about section. **problem:** About 550px dead left column. **fix:** Move the Hours card into the left column under the license line, and let the brick frame span the full right column height. Or drop the beige tile and make the section a single column with Hours beside the text.
2. **where:** 1440-full.jpg, objection frame. **problem:** The spall is clip-art ellipses. **fix:** Draw the spall as 3–4 brick faces with irregular sheared polygons exposing a darker, rougher core, with a hard grey cement joint around them (straight edges, slightly proud of the brick). No ellipses.
3. **where:** 1440-first.jpg / 390-first.jpg, hero proof line. **problem:** The middle-dot meta string wraps to an orphan dot. **fix:** Split it into two set lines in Source Sans: "21 years on soft brick" / "Open now until 5 pm · 4.9 rating SAMPLE", with `white-space: nowrap` on each fragment.
4. **where:** 390-first.jpg, hero. **problem:** The h1 and lead touch. **fix:** Add margin-block-end ≥ 1.25rem on the h1 below 640px.
5. **where:** 1440-full.jpg, objection. **problem:** The key pull line is set in mono. **fix:** Set "That gray patch with crumbled brick around it? That is what we put right." in Source Sans italic or medium at 1.15em, in ink rather than accent.
6. **where:** across sections. **problem:** Mono micro-text overload. **fix:** Keep mono only for stage names, prices and Sample tags. Move the hero kicker, the break caption, the license line, "Open now" and the footer phone to Source Sans.
7. **where:** 1440-scroll-75.jpg, #reviews. **problem:** Generic heading. **fix:** Promote "Walls we were asked back to" to the h2 and drop the kicker.
8. **where:** 390-full.jpg, page end. **problem:** About 200px blank under the footer. **fix:** Give the footer's own padding-bottom the bar height (plus safe-area) instead of adding an empty block after it, so the dark footer runs to the bottom.
9. **where:** 390-full.jpg, tools tabs. **problem:** The tab row wraps with one orphan. **fix:** Make the tablist horizontally scrollable on one line (`overflow-x:auto; white-space:nowrap`), or shorten the labels to "Softness / Repoint or rebuild / Timing".
10. **where:** 1440-first.jpg, hero art. **problem:** It reads as a progress bar. **fix:** Replace the round knob with a drawn jointer or trowel tip, and show the joint profile change behind it (recessed dark → flush cream → concave shadow), so the motion reads as a tool working.
11. **where:** 1440-scroll-75.jpg / 1440-first.jpg. **problem:** Low-contrast grey mono and a faint disabled arrow. **fix:** Take muted text to ≥ #5f554c on #f4efe6, and the disabled arrow border/icon to ≥3:1.

## Elevate

- **photo (7.5):** Stop drawing "a brick wall" six times and draw *one wall at four ages*. Give each frame a distinct subject and a raking light: the objection shows the cement-patched spall in close-up, services shows a chimney course at an angle, about shows the finished concave joints with a real shadow line, and the break band shows a Cincinnati facade elevation (Italianate cornice and windows) in line-and-fill. Varied subject, scale and light turn the illustrations from tiles into the page's photography.
- **layout (8.0):** Make the joint the page grid. Each section starts on a full-width drawn mortar course, with its content set in the "brick" above it. The process cross-section scales up to the full container width so the pin fills its band, and the about and services columns sit against that course instead of floating. The empty columns and the dark run disappear because the structure carries them.
