COPY: ok

# pool-B, critique round 4 (fast mode, cap 4)

## Five-second test
1440-first.jpg: "An Orlando pool service that shows me every water reading next to its ideal range. I can get a written price or call (407) 555-0138. Why them: the Visit report card proves it, 7 of 7 in range, 9 years in Orlando." 390-first.jpg: same answer, and now a compact 3-row "Last visit" report (pH, chlorine, filter, "7 of 7 in range") sits right under both buttons. Passes.

## What changed since round 3
- The four off-topic story photos (plant room, lab bottles, automotive filter, clubhouse pool) are gone. In their place are drawn instruments in the signature language: a pH comparator with swatches and vials, a salt-cell + control-box diagram, a filter pressure dial and a stacked report (1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-full.jpg).
- The open-sea "area" photo is gone, replaced by a radial route map with Orlando at the centre and the 7 towns as pad-coloured chips (1440-full.jpg, area band).
- Mobile: a compact report under the CTAs, and reading-first story cards where the number leads and the instrument sits under it. The tick tool's pad strip now comes ahead of its checkboxes (390-first.jpg, 390-full.jpg).
- The water break is now a skimmer net over an above-ground pool (1440-scroll-50.jpg).

## First screen: 9.0
- Earned: a 6-word h1 with trade + city + outcome, one teal primary plus an outlined phone, a clean proof line, the Visit report card with 7 gauges and "Sample report" (1440-first.jpg). The phone hero is now properly cut, with the 3-row report above the fold (390-first.jpg).
- Held below 9.5: the photo behind the card is still an abstract blue water crop, with no Orlando pool or backyard to anchor "where" (1440-first.jpg). The left column has a lot of dead air above the eyebrow at 1440.

## Distinctiveness: 9.0
- Earned: one gauge/pad language runs through the hero report, the tick strip, the service rows, the drawn instruments in #story, the radial area map and the footer pad strip (1440-full.jpg). No niche template looks like this.
- Held: the teal primary and teal band still share a palette family feel with pool-C (1440-first.jpg).

## Type: 9.0
- Outfit + IBM Plex Mono readings, tabular prices, "19,200 gallons" scale moment (1440-scroll-75.jpg). En-dash ranges. The mono labels on the instruments ("PH COMPARATOR", "SALT CELL + CONTROL BOX") fit the system (1440-scroll-25.jpg).

## Layout: 9.0
- Clear tone alternation (cream / teal / cream / navy / photo / cream / navy / cream). Asymmetric story with a sticky readout, a dense prices + gallons pair, a radial map against hours (1440-full.jpg). The sticky header shows mid-page in 1440-full.jpg: that's a full-page capture artefact, not scored.

## Photo: 7.5
- +1.5 from round 3: the off-topic frames are removed, and the drawn instruments now show exactly what each reading measures (1440-scroll-25.jpg, 1440-scroll-50.jpg). The area map replaces the open sea (1440-full.jpg).
- −: the full-bleed break, the largest photo on the page, is an inflatable/above-ground pool with debris in a red skimmer net, a pushchair and a plastic chair behind it, captioned "Clear water is a reading, not a guess" (1440-scroll-50.jpg). That's the wrong pool for an Orlando inground-service buyer, and the frame shows dirt next to a "clear water" claim.
- −: the tick band photo is a stitched panorama with visible curvature and murky water (1440-full.jpg tick band, 390-full.jpg). It fits "cloudy" in subject, but reads as an amateur capture.
- −: the hero is an abstract water texture, not a place (1440-first.jpg). The three photos carry three different grades.

## Copy: 9.0
- Trade nouns throughout ("salt-cell output", "filter pressure", "stained plaster", "elbow depth", 390-full.jpg). One primary action name, "Get a written price" (1440-first.jpg). "If a reading is missing, the visit is free." is in facts.json (1440-full.jpg footer). Sample tags are present on the report, rating, prices and reviews.

## Mobile: 9.0
- +0.5: the round-3 Elevate move landed. The compact report is under the CTAs (390-first.jpg). The story cards lead with the number, and the instrument plate is under it (390-full.jpg). The tick pad strip comes before the checkboxes. No overflow at 320 or 390 (render.json). Call bar present.
- Held: the full 7-row report repeats right after the hero on the phone, so the same data shows twice in the first 1.5 screens (390-full.jpg).

## Accessibility: 9.0
- render.json and static.json are clean. Reduced-motion pages are complete, with the readout settled and all four steps logged (390-rm-full.jpg, 1440-rm-full.jpg). Visible labels on the job select, gallons inputs and ZIP (1440-scroll-75.jpg, 1440-full.jpg).

## Motion: 9.0
- The settle idea runs in the story readout (logged states in 1440-scroll-50.jpg vs off-band markers in the 390-full.jpg static capture), the break card and the footer strip. Varied reveals. No change I can verify this round in the hero settle (1440-first.jpg shows the settled state only).

## Wow: 9.5
- +0.5: the drawn instruments make #story the moment a contractor would show his friends. The comparator picks 7.5 out of five swatches and the vials match it, the salt-cell diagram reads "plates clean, 3200", and the filter dial sits at 18 (1440-scroll-25.jpg, 1440-full.jpg). Together with the hero report, the tick gauge and the gallons gauge, every tool is drawn in one language.

## Polish: 9.0
- Favicon, OG, JSON-LD, theme-color, print and forced-colors are in dist. One radius. The footer is a designed close, with the pad strip, the guarantee line and the credits (1440-full.jpg).

## Arithmetic
14×9 + 12×9 + 10×9 + 10×9 + 8×7.5 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9.5 + 4×9
= 126 + 108 + 90 + 90 + 60 + 72 + 63 + 63 + 108 + 76 + 36 = 892 / 100 = **8.92**

## Must
None. No demo-rule breach: Sample labels are present, there are no faces, there's no "our work", and the guarantee line is in facts.json.

## Should
1. **Water break** (1440-scroll-50.jpg): the above-ground pool with a debris net and a pushchair. Fix: replace it with an inground backyard or screened-lanai pool in clear turquoise water, Florida light, no people or toys. If the library has none, crop the current frame to the water surface and the net drip only (drop the left 40%), so the pushchair and chair leave the frame.
2. **Tick band photo** (1440-full.jpg, 390-full.jpg): a panorama with curved stitching. Fix: crop to the right half (where there's less distortion), or swap for a tight cloudy-water frame. On the phone, remove it or cap it at 160px, since the band is already long.
3. **One grade** (1440-full.jpg): put the hero, tick and break photos under one treatment, e.g. `filter: saturate(.85) contrast(1.05)` plus a 12% navy multiply overlay, so the three photos sit with the drawn plates.
4. **Duplicate report on the phone** (390-full.jpg): under 640px, hide the full 7-row hero card (the compact card links "full report below"), or collapse it into a `<details>` labelled "All 7 readings".
5. **Hero settle** (1440-first.jpg): the hero report markers should start off-band and settle once on load, under 1.2 s, so the motion idea begins in the first screen.

## Elevate
- **Photo (7.5)**: make the photos evidence, the way the instruments already are. Cut to just two photos, both real Central Florida inground pools. A tight cloudy-water symptom frame for the tick band, and one crystal screened-lanai pool for the full-bleed break, under one grade, each with a pad-coloured edge and a single reading tag that names what you can see. Keep them as two separate, unpaired frames, not a before/after (DEMO-RULES), so every picture on the page points at a number.
- **First screen (9.0)**: replace the abstract water crop with a place. Put the Visit report on a sunlit Orlando backyard pool (screen enclosure and palms, no house numbers), cropped so the water line runs behind the card. Pull the h1 block up to close the dead air, so the five-second "where" is answered by the picture as well as the words.
