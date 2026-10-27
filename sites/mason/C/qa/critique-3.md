COPY: ok

# mason-C, round 3 critique (fast mode, scored from screenshots)

## Five-second test
1440-first.jpg / 390-first.jpg: "Kilnside does tuckpointing and brick repair for old soft-brick houses in St. Louis (Soulard, Shaw, The Hill). I can call (314) 555-0160 or price the job. Why them: they use lime mortar that breathes, 18 years on city brick, 4.9 (Sample)." That answers all four questions in under 5 seconds. The brick-colour neighborhood map with the KM stamp makes it clear this is about *my street's* brick.

Note: the site no longer uses any `<img>` (0 in dist/index.html). Every visual is drawn: the map, the six story diagrams, the cornice strip, the chimney and the season chart. I judge photo on those drawn treatments, as instructed.

## firstScreen: 9.0
Earned: 1440-first.jpg has a 2-line h1 with trade, city and outcome ("for St. Louis soft brick"). It has one loud primary (Call) and a quieter "Price it", a phone in the header, and a proof line with a SAMPLE RATING tag. The next band peeks about 45px at the bottom. The brick map with the KM/STL stamp is the concept's signature, and it sits on the first screen. 390-first.jpg: the h1 runs 4 lines, both actions are above the fold, the map starts peeking, and the mobile call bar shows.
Deduction: 1440-first.jpg has an empty lower-left quadrant (about 340×1000px of blank paper under the proof line, beside the map), so the composition sags on the left (−0.5 from a would-be 9.5). The h1 is 9 tokens if you count "&". That is borderline, and I'm not deducting for it.

## distinctiveness: 8.5
Earned: the maker's-mark stamp is now the section header in every band (01·NB, 02·KS, 03·SV, 05·RV, 06·TZ, 07·GN in 1440-full.jpg), in the hero map, the finder card (nb crop of 1440-full.jpg), the service numbers and the footer. The hero is a bespoke clay-colour neighborhood map that no template ships with.
Deductions: sibling mason-A (A/qa/screens/1440-first.jpg) has the same skeleton: cream paper, text-left with a drawn brick panel lower-right, a mono proof line, and "Price it" plus a Call button in a brick-red fill. The display faces differ (Young Serif vs a grotesk), but the first screens could almost swap logos (−0.5). The review "stamps" (1440-full.jpg reviews band) are empty buff boxes with a tiny "5★". There the signature is decoration that carries no meaning (−0.5). Partial credit back for the stamp-as-header system, which does organise the page.

## type: 8.5
Earned: Young Serif display at tight tracking and leading (1440-first.jpg). There's a real scale-contrast moment in the break band ("The mortar should give before the brick does.", 1440-full.jpg). The review quotes are set in the display serif. Hours in the footer use en-dashes ("7 am – 5 pm"). The em-dash count is 0.
Deductions: the h2 "Find your neighborhood's brick" uses a straight apostrophe (dist/index.html, the #neighborhood h2; visible in 1440-full.jpg) (−0.5). 1440-first.jpg shows 4 tiny tracked mono runs in one view: the kicker, the proof line, the map labels and the legend. 1440-scroll-25.jpg adds the 6-step mono rail (−0.5). +0.5 back for the display scale contrast and the coherent mono/serif system.

## layout: 8.5
Earned: the tone sequence in 1440-full.jpg is paper → mid → deep (story) → paper (services) → deep (break) → brick strip → mid (chimney tool) → accent (reviews) → paper (timing) → deep (contact) → mid (footer). No two dark bands touch, because the full-bleed brick cornice strip separates the break from the tool. Services are now a dense framed card plus a ruled list (1440-scroll-50.jpg), which breaks the old 3×3. The pinned story at 1440 is within budget.
Deductions: on the hero left side of 1440-first.jpg the lower half is dead (−0.5). In the timing band (end crop of 1440-full.jpg), the "pointing season" box is half empty under its chart while its two neighbours are full, so it reads as three equal boxes with uneven content (−0.5). The reviews band (1440-scroll-75.jpg / 1440-full.jpg) spends roughly 200px of its top and bottom on empty orange. +0.5 for a page that now has a visible loud → dense → breath shape.

## photo (drawn treatments): 8.5
Earned: one consistent illustration language across the hero map, the six story diagrams (clay strata, lime vs Portland, common bond, cement patch, rake depth, breathing wall; 390-full.jpg / 1440-rm-full.jpg), the cornice strip, the chimney and the season chart. It looks like one hand drew it in one palette. The story frames tell the sequence clay → laid → damaged → repaired → breathing, which is the art-directed sequence the 10 anchor asks for.
Deductions: the three review cards each open with a large empty buff rectangle (1440-full.jpg reviews band, 390-full.jpg). They read as image slots that failed to load (−0.5). In 390-full.jpg, labels inside the story drawings collide with the artwork: "TOOLED CONCAVE" sits over the brick courses, "RAKED" and "PACKED IN LIFTS" run into the joint fill, and "LOWER CEMENT PATCH" is lost on the brick. Nothing is broken or blank enough to be a mustFix.

## copy: 9.0
Earned: it reads like a mason talking. You get "rake the bad joint to ¾ inch, mix lime putty to match the original sand, and pack it in lifts", "jack arches and segmental arches", and "Gray cement patches, and faces popping off after winter." Every section answers a homeowner question (what's my brick, why lime, what do you fix, rebuild or repair, is this a good week, do you cover my street). There are Sample labels on the rating, the reviews and the pricing. "Closed · opens 7 am" sits next to the phone. Every fact I checked is in facts.json: 18 years, 4.9/164, the two-year guarantee, and Gus.
Deduction (held at 9): the price action has several names. It's "Price it" in the hero and services, "Price my tuckpointing" in the finder, "Get my chimney number" in the chimney tool, "Get a number" in the nav and contact, and "Book a visit" in the timing tool (1440-full.jpg). Not deducted below 9 because the copy is otherwise the strongest category, but see Should.

## mobile: 8.5
Earned: 390-first.jpg has the h1 in 4 lines, both CTAs above the fold and a sticky Call / Price it bar. The story stacks as static frames with no pin under 640 (390-full.jpg). The services card and list stack cleanly. There's no horizontal scroll (render.json overflow at 320 and 390 is clean).
Deductions: at 390 the services header stamp "03 · SV" balloons into a full-width brick block about 120px tall (390-full.jpg, top of the services section). Every other section's stamp stays small, so it reads as a bug (−0.5). The story-diagram labels overlap the artwork at 390 (390-full.jpg, frames 03 to 05) (−0.5). +0.5 for the phone-specific story treatment.

## a11y: 9.0
Earned: 1440-rm-full.jpg and 390-rm-full.jpg show all six story frames, every heading and both tools with nothing hidden. static.json and render.json are clean with no console errors. Every tool has visible labels (Neighborhood, Service, ZIP code). The h1 has an sr-only static copy.
Watch: on 1440-scroll-25.jpg the inactive step labels in the story rail ("04 PATCH", "05 RAKE") are dim beige on near-black. Verify they reach 4.5:1. They are real text, not decoration.

## motion: 9.0
Earned: 1440-scroll-25.jpg shows the pinned story mid-scroll, with frame 03 "Laid by hand" active and a 6-step progress rail filling 01–03. Here the motion explains order, which is the 9 anchor. The other hooks are the stamp press, split h1 lines, counters (the 4.9 / 164 / 18 rail), and a chimney checklist that lights each numbered sign on the drawing (1440-scroll-75.jpg, the numbered callouts 1–4). Reduced motion stacks the story into static frames (1440-rm-full.jpg). There's no scroll-jacking visible.
Not 9.5: I can't see the press-scale or hover language on controls in any frame, and the story frames swap by crossfade rather than the promised clip wipe. The overlapping ghost text in 1440-full.jpg at the story is the full-page capture of a crossfade.

## wow: 9.0
Earned: two connected moments, both in the signature's language. The first is the clay-colour neighborhood map and finder: pick a hood and get a stamped, ruled card with Brick / Built / Watch for (1440-full.jpg, finder). The second is the chimney drawing whose numbered signs light up as you tick them (1440-scroll-75.jpg). The pointing-season chart (end of 1440-full.jpg) is a third small tool a homeowner would keep. All of them still read in reduced motion (1440-rm-full.jpg).
Not 9.5: the finder's default card ("City brick, most streets") has an outline-only mini map that looks unfinished next to the solid hero map.

## polish: 8.5
Earned: one square radius everywhere, one rule weight, consistent stamp objects, and a designed footer with a KM stamp, an on-page nav, hours in a grid and the demo disclaimer (1440-full.jpg footer). No transition:all.
Deductions: the oversize services stamp at 390 and the empty review stamp boxes (390-full.jpg, 1440-full.jpg) break the "every detail matches the system" bar (−0.5).

## Arithmetic
14×9.0 + 12×8.5 + 10×8.5 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×8.5
= 126 + 102 + 85 + 85 + 68 + 72 + 59.5 + 63 + 108 + 72 + 34
= 874.5 / 100 = **8.74** (8.745; score.mjs rounds to 8.74)

Every category is ≥ 8.5. The weighted score is under 9.0, there are no mustFix items, and the checks are clean, so the verdict is **ELEVATE**.

## Must
(none)

## Should
1. **#reviews `.review` stamp boxes** (1440-full.jpg, 390-full.jpg): the big empty buff rectangle with a tiny "5★" reads as a broken image. Either make it a real stamp (the reviewer's neighborhood clay colour from the hero map, with the hood code pressed in, e.g. "SL · 5★" on Soulard red), or cut it to a 48px-tall stamp chip.
2. **Services header stamp at 390** (390-full.jpg, `#services` header `[data-sw-signature]`): it renders full-width and about 120px tall. Constrain it to the same inline size as the other section stamps (`inline-size: auto; justify-self: start`) below 640px.
3. **Story diagram labels at 390** (390-full.jpg, frames 03 "TOOLED CONCAVE", 04 "LOWER CEMENT PATCH", 05 "RAKED / PACKED IN LIFTS"): move the labels outside the brick field, or give them a deep-tone label plate like the hero map labels so they don't sit on the artwork.
4. **#neighborhood h2** (1440-full.jpg): `neighborhood's` → `neighborhood’s` (curly apostrophe).
5. **Primary-action naming** (1440-full.jpg): pick one verb for the price action. Keep "Price it" everywhere (finder button "Price it for my street", chimney "Price my chimney", timing "Price it for this week"), and rename the nav item and the contact h2 kicker to match. "Get a number" can stay as the contact headline, but not as a second button name.
6. **Timing band, first box** (end of 1440-full.jpg): the season chart box is half empty. Either top-align all three boxes to content height (`align-items: start`), or add the one-line reading under the chart ("Point April to October; stop when nights drop under 40 °F").
7. **Story rail inactive labels** (1440-scroll-25.jpg): lift the inactive step text to ≥ 4.5:1 on the deep tone.
8. **Finder card mini map** (1440-full.jpg, #neighborhood): fill the selected hood in its clay colour so the card echoes the hero map instead of showing an outline wireframe.

## Elevate
1. **distinctiveness (12)**: push the brick map past "a hero picture" into the page's spine, so it can't be confused with sibling A's brick panel. Let the selected neighborhood's clay colour travel down the page: the finder card, the review stamps (each reviewer's hood in its brick colour), the ZIP check result and the footer stamp all take the colour of the homeowner's chosen street. A cover-the-logo screenshot of any section then says "St. Louis brick by neighborhood".
2. **type (10, tie with layout broken in score.mjs's order)**: make type carry the kiln idea. Set the stamp codes, the story step numbers and the stat rail (4.9 / 164 / 18) in one pressed, tabular DM Mono treatment cut into the brick face. Retire the loose tracked-caps runs (kicker, legend, proof line) into that single stamped voice, and pair it with one oversized Young Serif moment per dark band, so the display/mono contrast becomes the system rather than ornament. (Layout's move also applies: run the hero map full height to the right edge with the h1 overlapping its west edge, which fills the dead lower-left quadrant.)
