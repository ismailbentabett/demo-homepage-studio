COPY: needs copy-chief

# roofer-A · critique round 2 (fast mode)

## Five-second test
- **1440 (1440-first.jpg):** "A Wichita roofer who builds the roof one layer at a time and photographs each one. Call (316) 555-0101 or get a roof check. 14 years, 4.9 ★ (marked Sample)." Clear in under 3 s. The exploded layer diagram on the right says "roofing" before I read anything. The filmstrip under the CTAs is seven identical blank brown tiles.
- **390 (390-first.jpg):** same answer. The h1 is 2 lines and both CTAs are above the fold, with the sticky call bar too. The diagram shrinks to a thumbnail floating in about 150px of empty cream, and the filmstrip is gone.

Change since round 1: round 1 had no screenshots. This round I can see them, and they show the main problem: **every photo on the page is a placeholder gradient** (43-byte files; niche manifest `"placeholder": true`).

## firstScreen: 8.5
Earned (1440-first.jpg, 390-first.jpg): the h1 is 5 words with trade, city and outcome. The phone is in the header at 1440 and in the bar at 390. There is one barn-red primary button and an outlined secondary. The proof line has a SAMPLE RATING tag. The signature diagram shows in the first screen. The dark band peeks about 64px at 1440 and about 110px at 390.
- 1440-first.jpg: the hero family (filmstrip, "contact sheet") is seven blank gradient tiles. The labels skip 04 (00, 01, 02, 03, 05, 06, 07) and don't match the 7 diagram layers (Deck, Drip edge… vs BEFORE, TEAR-OFF, PIPE BOOT…). −0.5
- 390-first.jpg: the diagram shrinks to about 150px wide, centred in dead cream, so the signature reads as a thumbnail. Held at 8.5 together with the line above.

## distinctiveness: 8.5
Earned (1440-full.jpg): the layer-stack signature does real work. It's in the hero, the sticky "LAYER n/7" card through layers 1-7 (1440-scroll-25.jpg, 1440-scroll-50.jpg), the estimator sketch, the "Laid like courses" reviews and the striped footer cap. That's well over 4 sections. Barn red, tar and cream with Barlow Condensed has no sibling in the niche.
- 1440-first.jpg, 1440-scroll-75.jpg: slop tells pile up. There are mono micro-labels on almost every band, middle-dot meta strings ("WICHITA, KS · OPEN NOW · UNTIL 6 PM", "LAYER 05 OF 07 · STARTER STRIP") and decorative 01/02/03/04 numbering on the services. −0.5
- 1440-full.jpg: with the photos blank, about a third of the page is interchangeable brown slabs. That makes the cover-the-logo test fail on every photo-led layer.

## type: 8.5
Earned: Barlow Condensed display with tight tracking and tight leading. The review quote at full display size against small mono attribution is a real scale-contrast moment (1440-scroll-25.jpg). Body text is Outfit at about 18px, full ink. The mono accent is declared in the concept.
- 1440-first.jpg: hero eyebrow, filmstrip captions, legend and open-now pill make 4+ tiny tracked caps/mono labels in one view. −0.5
- 1440-scroll-75.jpg: the specialty-work blurbs are muted grey at about 15px on cream. Smaller and greyer than the body elsewhere.

## layout: 8.0
Earned: paper and deep alternate through layers 1-4 (1440-full.jpg). The layer sections are asymmetric (card, text, photo). There's a full-bleed red break, and a dense services and specialty block against quiet layer bands.
- 1440-full.jpg (about 18-20% down the thumbnail): the red break band runs straight into a full-bleed dark-brown placeholder slab, then a paper band. Accent and deep touch and read as one heavy block. −0.5
- 1440-scroll-50.jpg: in the ridge section, the text column ends about 300px above the photo's bottom, and the left card column is empty below the sticky card. That leaves about 400px of dead paper before the dark band. −0.5
- Ridge (paper), cleanup (deep) and estimator (paper) repeat the same "text left, big frame right" shape (1440-scroll-50.jpg), so the 3rd and 4th layers feel templated. No extra deduction beyond the above, but it is why this isn't 8.5.

## photo: 5.0
- Every frame (1440-first.jpg filmstrip, 1440-scroll-25.jpg layer 3 and 5, 1440-scroll-50.jpg ridge and cleanup, 390-full.jpg) is the same diagonal-hatched brown gradient. There's no deck, no drip edge, no shingle, no roof. The alt text describes photos the visitor can't see. A homeowner sees empty boxes, and a contractor on a sales call sees an unfinished site. The drip-edge compare (1440-full.jpg, layer 2) is two flat grey and black tiles.
- Below the anchor-6 floor ("off-topic frames"): here there are no frames at all. The cause is upstream (`niches/roofer/media/approved/*.webp` are 43-byte placeholders, manifest `"placeholder": true`). The builder can't fix it, but the page can't be shown like this. mustFix.

## copy: 8.5
Earned: concrete trade nouns (drip edge, ice shield, starter strip, Class 4, magnet sweep, soffit intake) and a contractor voice ("Six nails a shingle."). One action name throughout ("Get a roof check"). Sample tags on reviews, prices, rating and license (1440-scroll-25.jpg, 1440-full.jpg).
- 1440-first.jpg hero lead "…not just the shingles." and 1440-scroll-75.jpg Leak repair "…not just where it drips onto the ceiling.": the "not just X" tell, twice. −0.5
- 1440-first.jpg: the filmstrip captions ("00 · BEFORE", "07 · FINISHED LINE") are before/after phrasing next to stock frames. Once real photos land they read as "our job, before and after". Rename them to layer names.

## mobile: 8.5
Earned (390-first.jpg, 390-full.jpg): no sideways scroll (render.json scrollWidth 390, and 320 clean too). The h1 is 2 lines. The two-button sticky bar is there. Layers stack cleanly, the services list is single-column and the form has full-width inputs.
- 390-first.jpg: the hero diagram is reduced, not re-cut. A 150px thumbnail sits centred with empty space around it, and the filmstrip (the hero family) disappears instead of becoming a phone strip. −0.5 vs the 9 anchor "composed for the phone".

## a11y: 8.5
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show every heading, quote, price and form field, the same as the motion-on full pages. Sample tags are readable. render.json has no console errors.
- I can't confirm a designed focus ring or slider valuetext from these screenshots, and the compare handle still exposes no `aria-valuenow` in dist/index.html. Held at 8.5.

## motion: 8.5
Earned: the sticky layer card advances (1440-scroll-25.jpg shows 4/7 with layers 5-7 ghosted, 1440-scroll-50.jpg shows 7/7 complete). So motion explains build order, which is the thesis. There's split-line h1, a compare handle and an estimator sketch. That's more than 3 hooks beyond reveals.
- dist/index.html: 31 `data-reveal` elements against 10 signature hooks. Most bands still enter with the same generic reveal, and image frames don't clip differently from text. Held at 8.5.

## wow: 8.5
Earned: the layer stack plus an estimator that draws the stack next to the range (1440-full.jpg estimator band). It ties to the thesis and the trade.
- 1440-full.jpg estimator: the output is still a heading-sized text line "Leak repair: $300 to $950" beside a static diagram. The layers the job touches aren't highlighted, so the tool's answer is a $ figure and not a drawing. −0.5 (round 1's elevate move wasn't delivered.)

## polish: 8.5
Earned: favicon, OG and JSON-LD per dist/index.html. The striped footer cap closes the design (1440-full.jpg bottom). One button shape.
- 1440-first.jpg: filmstrip numbering skips 04, which looks like a bug at a glance. −0.5

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8.0 + 8×5.0 + 8×8.5 + 7×8.5 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 102 + 85 + 80 + 40 + 68 + 59.5 + 59.5 + 102 + 68 + 34 = 817 / 100 = **8.17**

## Must
1. **Every photo slot is a placeholder gradient** (1440-first.jpg filmstrip; 1440-scroll-25.jpg, 1440-scroll-50.jpg, 390-full.jpg). Fix: the media-curator has to fetch and approve real roofing photos for `niches/roofer/media/` (deck, drip edge/ice shield, synthetic felt, starter course, ridge vent, cleanup, finished roofline). Then rebuild. The builder can't solve this in src.

## Should
1. **Hero filmstrip `.film` (1440-first.jpg):** captions skip 04 and don't match the diagram. Fix: 7 frames numbered 01-07 named exactly as the legend (Deck, Drip edge, Ice shield, Synthetic felt, Starter, Shingles, Ridge vent). Drop "BEFORE" and "FINISHED LINE".
2. **Red break → full-bleed slab (1440-full.jpg):** accent band touches a deep full-bleed frame. Fix: set the full-bleed image inside the break band with paper above it, or move it after the paper ridge section, so accent and deep never touch.
3. **Ridge section (1440-scroll-50.jpg):** about 400px of dead paper under the text. Fix: align the frame to the text height (`align-items:start` and a 4:3 frame instead of a tall portrait), or let the frame go full-bleed right.
4. **Hero lead and Leak repair blurb:** cut "not just…". Hero: "We tear off to bare wood and photograph every layer before it is covered: deck, flashing, felt, then shingles." Leak repair: "We trace water back to where it gets in, which is rarely where it drips."
5. **Mono micro-labels (1440-first.jpg, 1440-scroll-75.jpg):** drop the eyebrow on bands whose h2 already says it ("WHAT WE TAKE ON", "AFTER LAYER 07"). Remove the 01-04 numerals from the services, or make them layer numbers that mean something.
6. **390 hero (390-first.jpg):** re-cut it. Put the diagram full-width (about 340px) at least 1.5× its current size, or bring the filmstrip back as a 2-up horizontal strip under the CTAs.
7. **Specialty list (1440-scroll-75.jpg):** raise the blurb size to 16px and the ink to ≥ 4.5:1 full body colour.
8. **Compare handle:** expose `aria-valuemin/max/now` + `aria-valuetext` ("Drip edge 60% revealed").

## Elevate
- **photo (5.0):** once real frames exist, art-direct them as the stack's evidence. Each layer photo gets the same cream "contact sheet" frame with its layer number struck in DM Mono. The filmstrip should run in build order, so the photo sequence and the diagram tell one story (bare deck → ridge) and don't read as a gallery.
- **layout (8.0):** give the scroll a visible shape. Layers 1-4 stay quiet and alternating. The "Six nails" break becomes the single loud full-bleed moment with a photo inside it. Layers 6-7 tighten into a denser two-up "finish" spread before the estimator. The full-page shot should read loud → quiet steps → loud → dense tool, not seven same-weight bands.
