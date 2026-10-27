COPY: ok

# hvac-B: critique round 3 (fast mode, final round)

## Five-second test
1440-first.jpg: "Wetbulb Heating & Cooling, Houston. My house is cold but sticky. They want my dew point before I buy anything. I drag two dials and it says 'Damp: dew point over 60' in red, 64°F. I can call (713) 555-0105 or book a check that carries my reading. Why them: they measure before they sell."
390-first.jpg: same answer. The h1 is 2 lines and the sub 2 lines. Call and Book a check sit above the fold, the chart peeks under them, and the sticky Call / Book bar is present.

## What changed since round 2 (seen in the screenshots)
- The hero's left-column hole is gone. A large "Your dew point 64°F / Damp" readout now fills it (1440-first.jpg).
- The story's empty photo panels are now drawn 24-hour reading charts: a red wet chip out of band, a dry green chip in band, and the dehumidifier-on drop (1440-scroll-25.jpg). The left column under the sticky chart now carries "Reading 3 of 3" with a 51°F dew point readout.
- The break is now a ~320px drawn frost-on-coil band with copper tube ends, not a 550px empty slab (1440-scroll-50.jpg).
- The form opens with "Your reading 72°F · 75% RH · DP 64 (Damp) change" plus a mini chart (1440-full.jpg #contact). The hero hand-off is now visible.
- The sorter line no longer repeats ("Tick what is true… The line below tells you which way it leans.").
- Section labels are now sentence-case sans ("Service area", "Your reading"). Mono is kept for readings and Sample chips (1440-scroll-75.jpg).
- No caption or alt text claims a photo. The only `<img>` (hero) is `alt=""` inside an `aria-hidden` figure (dist/index.html).

## firstScreen: 9
Earned (1440-first.jpg): h1 "Sticky Houston house, cold AC?" (5 words, trade + place + problem) on one line. The outcome sub sits under it, the signature chart is the dominant frame, the phone is in the header and the hero, the proof line has a Sample label, and the dark story band peeks ~40px. 390-first.jpg: h1 2 lines, both actions above the fold.
Deductions:
- 1440-first.jpg: two equally loud filled teal buttons in one view: "Call (713) 555-0105" (left column) and "Book a check with this reading" (panel) (−0.5).
- 1440-first.jpg: the dew point is shown twice in display red (64°F at ~80px on the left, 64°F at ~32px in the panel). The duplicate reads as redundancy. Noted, not deducted.

## distinctiveness: 9.5
Earned: the Comfort Chart Dot organises the hero (1440-first.jpg), the story's three reading charts and path (1440-scroll-25.jpg), every service row icon (1440-scroll-50.jpg), the reviews "four houses, four readings" chart (1440-scroll-75.jpg), the ZIP reticle, the form's reading chip and the footer badge (1440-full.jpg). It does real work: it is the tool output, the story's evidence and the form's context. Cover-the-logo passes for hero, story, services and reviews. hvac/A (dark, illustrated condenser plate, orange) shares nothing.
Residual: #area and #prices (1440-scroll-75.jpg, 1440-full.jpg) are the two sections where the signature is absent, and they could belong to any site.

## type: 9
Earned: the heavy Chivo h1 is the scale moment against small mono readings (1440-first.jpg). Figtree carries the body at full ink. DM Mono is the declared accent and is now confined to readings, prices and Sample chips. Ranges and hours use en dashes (dist/index.html). There are no orphans in h2s, and the price ledger figures are tabular (1440-full.jpg #prices).
Residual: the hero lead (~28px) and the h1 sub (~28px teal) sit at nearly the same size, so the hierarchy between them is soft. Not deducted.

## layout: 9
Earned (1440-full.jpg): paper hero → deep story → paper services ledger → deep drawn break → tan sorter → deep reviews → paper area → green prices → paper contact → deep footer. No same-tone neighbours. It has a full-bleed break, an asymmetric story, a dense ledger and a quiet area. The story frame is now used edge to edge (1440-scroll-25.jpg).
Deductions:
- 1440-full.jpg #contact: the left column ends at "Rather talk now?", leaving ~300px of empty paper beside the tall form card (−0.5 held against the +0.5 for fixing the story void).
- 1440-full.jpg #sorter: a centred narrow column with ~310px dead margins at 1440. It is the only band that floats in empty width. Should.

## photo: 8.5
Per the run note, the niche stock is placeholder-only, so the drawn treatments are judged on their merit. Nothing is blank or broken: every former photo slot is now a drawn data frame in one palette and one stroke language. Out-of-band panels are wet teal with a red chip, in-band panels are dry mint with a green chip (1440-scroll-25.jpg). The frost-on-coil break is a real illustration of the headline, not a texture (1440-scroll-50.jpg). The plan → problem → fix sequence reads through the crops.
Deductions:
- 1440-full.jpg, 390-full.jpg: there is no photograph or video anywhere, so nothing anchors the page to a real house or real equipment. On this rubric the ceiling stays below 9 until real frames exist.
- dist/index.html: the hero placeholder `<img>` is preloaded with fetchpriority=high yet is visually covered by the chart. A wasted LCP request (polish note below, not double-counted).

## copy: 9
Earned: concrete and trade-true copy in the homeowner's words: "72 on the wall, 64 in the air", "A dehumidifier on the return", "The water comes out at the duct, not at the thermostat", "Ice on the coil: the water it pulled from the air, frozen by weak airflow." (1440-scroll-25.jpg, 1440-scroll-50.jpg). The verb family is consistent (Book a check / Book this check / Book a second-opinion check). Sample labels sit on the rating, readings, reviews, prices and licence (1440-scroll-75.jpg, 1440-full.jpg). There are no em dashes, and the sorter repeat is fixed.
Residual: the form's step-1 button reads "Next" (1440-full.jpg #contact) where the rest of the page says "Book". Fine for a multi-step form.

## mobile: 9
Earned: 390-first.jpg is composed (h1 2 lines, actions above the fold, chart peeking, sticky bar). render.json shows no overflow at 320 or 390. 390-full.jpg stacks the story charts and services ledger cleanly, the break re-cuts to the phone width, and no dark band touches another dark band.
Residual: 390-full.jpg still stacks nine full-width "Book this check" buttons in the services ledger, a long thumb scroll. Should.

## a11y: 9
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every word and the story's final state (51°F, in band). The chart is role="img" with a descriptive title, and the dew status is aria-live (dist/index.html). Heading order runs h1 → h2 → h3 with no skips. The hero image is now alt="" inside an aria-hidden figure, so nothing claims an unseen photo. forced-colors and print CSS are present. static.json and render.json are clean.
Residual: verify that the small mono review meta on #1B2F2C (1440-scroll-75.jpg) clears 4.5:1.

## motion: 9
Earned: the dials drive the hero dot and verdict, the story dot travels from the out-of-band ghosts into the band with the readout counting down to 51°F (1440-scroll-25.jpg vs 1440-rm-full.jpg), and the hero reading now carries into the form chip (1440-full.jpg #contact). The motion explains change. Hooks also cover the sorter verdict, price picker, ZIP reticle and accordion (dist/index.html).
Deductions:
- 1440-full.jpg vs 1440-rm-full.jpg: #area and #prices look identical in both captures and rely on the shared fade. The dot never moves below the reviews (−0.5, held from round 2; the form hand-off earns back +0.5).

## wow: 9
Earned: the visitor plots their own house (1440-first.jpg), watches the same chart explain the fix (1440-scroll-25.jpg), and then finds their reading waiting at the top of the booking form with a "change" link (1440-full.jpg #contact). Two connected moments in one language.
Residual: the output isn't something to keep. There is no "save / text me this reading" sheet, so it stops short of 10.

## polish: 9
Earned: SVG favicon, apple-touch icon, OG image, HVACBusiness JSON-LD, print and forced-colors CSS, square radius throughout, 1px rules, one stroke weight across the chart icons (1440-scroll-50.jpg), and a designed footer with the chart badge and tabular hours (1440-full.jpg).
Residual: an invisible placeholder hero image is preloaded at high priority (dist/index.html line 25). Should.

## Arithmetic
14×9 + 12×9.5 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×9
= 126 + 114 + 90 + 90 + 68 + 72 + 63 + 63 + 108 + 72 + 36 = 902 / 100 = **9.02**

Fast mode: weighted 9.02 ≥ 9.0, every category ≥ 8.5, photo 8.5 ≥ 8.0, mustFix empty, checks clean → **PASS** expected.

## Must
None.

## Should
- **#hero (1440-first.jpg)**: two equally loud filled buttons. Fix: make the left-column Call a text-weight phone link (icon + number, underline on hover) and keep "Book a check with this reading" as the only filled button. Alternatively, drop the left-column "Book a check" outline since the panel button does that job.
- **#hero (1440-first.jpg)**: 64°F shown twice. Fix: keep the large left readout and replace the panel's "Dew point 64°F" with the verdict sentence only, or the reverse.
- **dist/index.html line 25 + hero figure**: a placeholder image is preloaded with fetchpriority=high but is never seen. Fix: remove the preload and the hidden `<img>` until a real hero frame exists.
- **#contact (1440-full.jpg)**: ~300px of empty paper under "Rather talk now?". Fix: put the three-step list beside a small static comfort chart showing "your dot → the band" so the left column closes level with the form card.
- **#sorter (1440-full.jpg)**: a centred narrow column floats in 1440 width. Fix: set the heading left in the 12-col grid (cols 1–5) with the checklist in cols 6–12, so it aligns with the services ledger above.
- **#services (390-full.jpg)**: nine full-width "Book this check" buttons. Fix: under 640px, make the row a single tappable link (whole row → #contact with the service preselected) and drop the per-row button.
- **#reviews (1440-scroll-75.jpg)**: check that the small mono meta on #1B2F2C is ≥ 4.5:1; lift it to paper at 80% if not.

## Elevate
(PASS expected; recorded for a future pass.)
- **photo (8.5)**: when real frames arrive, put them inside the instrument. Each story photo sits under the wet teal tint with its red reading chip while the dot is out of band, then clears to full colour as the dot enters the band, so the photo dries out as the reading improves.
- **wow (9, tied lowest with the highest weight among them after firstScreen/motion)**: give the reading a keepable output. A "Your reading" card in the chart's language (dot, band, verdict, the date) that prints cleanly or goes out by text from the form, so the homeowner leaves with the same chart the tech will draw.
