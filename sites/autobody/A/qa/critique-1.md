COPY: ok

# autobody-A · critique round 1 (fast mode)

**Five-second test (1440-first.jpg, 390-first.jpg):** "A collision shop in Detroit (the tape says so, the h1 doesn't). They work with every insurer and I pick the shop. Call (313) 555-0107 or send photos. Why them: nine stations, and they text me at each one." Answerable in 5 s, but trade and city live in the tape label, not the h1.

## firstScreen: 8.5
Earned: the signature is in the first screen (tape label across the h1, tape-tabbed station filmstrip, 1440-first.jpg); a loud yellow Call plus a quieter outlined Send photos; phone in the header and hero at both sizes; proof block (open-now, area, 4.8 with SAMPLE RATING); filmstrip peeks at 390 (390-first.jpg); h1 is 3 lines at 390 with both actions above the fold.
- 1440-first.jpg: h1 "Nine stations. You hear from us at every one." has no trade and no place; the tape eyebrow carries both (−0.5).
- 1440-first.jpg: "Closed · opens tomorrow 7:30 am" shows twice in one view (header pill and proof list). Redundant, no extra deduction, but it costs calm.

## distinctiveness: 9.0
Tape & Marker does real work: it labels the hero, every station (and peels to a red DONE strip, 1440-scroll-25.jpg), carries WHO in the claim path (YOU / INSURER / BOOTH NINE, 1440-full.jpg), hangs the service cards (1440-scroll-50.jpg), heads salt, dent check, the reviews "taped to the hood" (1440-scroll-75.jpg), the contact photo slots and ends as "STN 9 · Wash · Keys back / DONE" in the footer. Gunmetal + tape yellow + basecoat red and League Gothic + Caveat are nothing like Basin Light (blue/mono gauge) or Saltline (teal serif hull).
- 1440-scroll-50.jpg: services is a 3×3 grid of equal cards, a template shape under the tape (not deducted below 9; the reason it is not 9.5).

## type: 8.5
League Gothic display against Libre Franklin text gives a real scale contrast (hero h1 vs. proof lines); Caveat stays an accent on tape only; display rag is balanced; tabular numerals present.
- 1440-scroll-75.jpg: straight quotes in the featured review ('station 6, day 4') and in "You hear: "It's ready."" (1440-full.jpg, station 9) (−0.5).
- 1440-scroll-25.jpg: inactive stations are dimmed to grey on paper (STN 7 body ≈ 2.5:1). Readable state only once active; logged under a11y, not counted twice.

## layout: 8.0
Tones alternate (gunmetal hero → paper stations → yellow claim band → gunmetal services → paper salt → mid dent check → paper reviews → dark promise → paper area/contact → dark footer, 1440-full.jpg); the salt rocker cross-section is a genuine full-bleed break; reviews are an asymmetric featured-plus-pins cluster.
- 1440-full.jpg / 1440-scroll-25.jpg: the stations story spends ~4.7 screens at 1440 with large empty paper between station blocks; at the end of the run (c. y 5000–5600) more than half a screen is blank under STN 9 (−0.5).
- 1440-scroll-75.jpg: reviews leave the whole left column empty under the featured card while the right two columns stack three deep; a hole of ~450px at 1440 (−0.5).

## photo: 8.0
There is no photograph or video on the page (dist has 0 `<img>`, 0 `<video>`). Everything is a drawn door panel, a rocker cross-section and drawn hero frames, all in one consistent flat-gradient style with the booth light bar (1440-first.jpg, 1440-scroll-25.jpg, 1440-full.jpg salt band). As art direction it is coherent and unique; as trust it is thin: the brief's #2 trust signal is work shown in the order it happens, and the homeowner never sees a real shop, booth or car.
- 1440-first.jpg + 1440-scroll-25.jpg: the hero filmstrip and the stations story repeat the same nine door drawings, so the page's main imagery appears twice (treated as a repeat, −0.5 from what would be 8.5).

## copy: 9.0
Plain, specific, trade-true: "Station 3 is the phone call nobody likes. We make it, not you.", "You hear:" line under every station, "No VIN, no claim number needed to start", "Their preferred list is a suggestion, not a rule" (1440-full.jpg). Prices and reviews carry Sample labels. No em dashes. "Salt doesn't stop at the paint. Neither do we." (1440-full.jpg) is the one slogan-shaped line.

## mobile: 8.5
390-full.jpg: stations stack (no pin), the tape system survives, the mobile Call / Text photos bar is present, no horizontal scroll (render.json overflow 320 and 390 clean).
- 390-full.jpg: 22,563px tall, ~27 phone screens; nine stations plus ten service cards plus six reviews are all full stacks with no phone-specific density decision (no collapse, no carousel for services).

## a11y: 8.5
1440-rm-full.jpg and 390-rm-full.jpg show every station, tape label and review; nothing hidden. Pause the strip control on the moving filmstrip (1440-first.jpg). Inputs labelled.
- 1440-scroll-25.jpg: dimmed inactive stations (heading and body grey on #ECEDE8) fall below 4.5:1 while on screen (−0.5).
- 1440-full.jpg contact: native file inputs render as truncated "Choose File N...sen" boxes inside the tape slots; the selected-file state is unreadable.

## motion: 8.5
Hooks well beyond reveals: split h1 lines, station counter + door finish change + tape peel to DONE (1440-scroll-25.jpg), filmstrip marquee with pause, claim tabs, dent-check estimator, mobile bar. Motion explains order in the stations story. Not 9: the peel and the filmstrip are the only signature motion; services and reviews only stagger in.

## wow: 8.5
The door that changes finish station by station while the tape peels is tied to the thesis and the trade (1440-scroll-25.jpg); the dent check gives a taped route card with a sample range (1440-full.jpg). Not 9: the hero filmstrip already shows all nine doors, so the story's reveal is spent before you scroll; the tools' output is not something you'd keep or send.

## polish: 8.5
SVG/apple-touch icons, OG image, print stylesheet, forced-colors rules, tabular numerals, one rule weight, consistent square corners on cards and buttons; designed footer close.
- 1440-full.jpg contact: unstyled native file inputs break the system (−0.5).

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8 + 8×8 + 8×9 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 108 + 85 + 80 + 64 + 72 + 59.5 + 59.5 + 102 + 68 + 34 = 851 / 100 = **8.51** → ELEVATE

## Must
None.

## Should
1. **#stations (1440-full.jpg, 1440-scroll-25.jpg)**: blank paper between station blocks and over half a screen empty after STN 9. Fix: tighten each station step to ~55svh, end the sticky container on the last step so there is no tail gap.
2. **#stations inactive steps (1440-scroll-25.jpg)**: dimmed text under 4.5:1. Fix: dim only the tape and the step number (opacity .45); keep the h3 and body at full ink (#121417 / body #283037).
3. **#proof (1440-scroll-75.jpg)**: empty left column under the featured review. Fix: put the 4.8 / SAMPLE RATING block and one short review under the featured card, or span the featured card 2 rows so the three columns end level.
4. **#contact photo slots (1440-full.jpg)**: native "Choose File" inputs. Fix: visually hide the input (keep it focusable), make the whole dashed slot its label with a camera icon and "Add photo"; show the file name or a thumbnail after selection.
5. **Quotes (1440-scroll-75.jpg, 1440-full.jpg #stations STN 9)**: replace 'station 6, day 4' with ‘station 6, day 4’ and "It's ready." with “It’s ready.”
6. **Hero h1 (1440-first.jpg)**: put trade/place into the h1 itself, e.g. "Detroit collision repair in nine stations. A text at each one.", or keep the line and let the tape be the h1's first line so it is read as part of it.
7. **Header status pill (1440-first.jpg)**: drop the header open-now pill at ≥1100px (the hero proof list already says it), freeing the nav.
8. **Services on phone (390-full.jpg)**: ten full cards stack; show the first four and fold the rest behind a "All ten jobs" disclosure, or make them a horizontal snap row on <640px.

## Elevate
- **layout**: give the scroll a shape instead of a long even run: make the stations story the one dense, pinned, edge-to-edge moment (door left, station tape stack right, no dead paper), then follow it with a genuinely quiet breath before the yellow claim band, and let the reviews cluster sit across the full 12 columns as a hood covered in taped notes rather than a 3-column grid with a hole.
- **photo**: bring real stock frames from the approved library into the signature's language: four photos of the shop floor in work order (teardown, masking, primer, booth) each "taped" with its station label and graded to the gunmetal/red palette, placed where the drawn door explains the finish, so the drawings explain and the photos prove. The hero filmstrip can then show photos while the story keeps the drawings, ending the double use.
