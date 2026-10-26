COPY: needs copy-chief

# autotuneup-C · critique round 1 (mode: fast; scored the same as strict)

Evidence was recaptured before scoring (build + capture-screens on 2026-10-26). qa/render.json lists 10 screens and 2 render errors (horizontal overflow at 390 and 320). Those are check failures: the verdict is FIX because of them, and I don't deduct for them twice in design scores. I do list them as Must.

## Five-second test
- **1440-first.jpg:** "Some tune-up place in Santa Fe (I get that from the small teal caps above the headline), 'Tuned for high country.' The left half of the screen is a sentence about an adobe wall where a picture should be. I can't read the nav or the phone number. I'd press 'Book a time'." Why them: the lead paragraph about altitude is the only reason, and it's a good one.
- **390-first.jpg:** "Thin Air, then a white void with a caption in the middle. The headline starts at y≈690 and gets cut off by the call bar." I can't answer what, where or why from this screen.

## Root cause visible on every screen
All 9 `<img>` point at `media/placeholder-*.webp`, which are 48-byte 10×8 stubs (the build also logs "OG photo could not be used: corrupt header"). Every photo slot renders as its alt text, centred in an empty box. The concept also promises a "Night Sky" dark page (paper #121826). What rendered is a white page with a navy header, so the palette family in concept.json never shows up.

## firstScreen: 4.0
- 1440-first.jpg: the hero image is missing and the left 55% shows only alt text. This is not the "centred statement + photo marquee" that was promised (−1.5 against the 8 anchor, since the composition doesn't exist).
- 1440-first.jpg: the nav links and the phone number in the header are dark ink on the navy header, about 1.3:1, so effectively no phone is visible (−1.0).
- 1440-first.jpg: the h1 runs 4 lines at 1440 ("Tuned / for / high / country.") in a column far too narrow for it (−0.5). It has no city: Santa Fe is only in an 11px tracked eyebrow (−0.5 by the slogan rule, half applied because the trade is in the eyebrow).
- 390-first.jpg: the primary action is below the fold. The h1 starts at y≈690 and the call bar covers it, though the mobile bar's "Book a time" partly saves it (−1.0).
- What it earned: one teal primary plus an outline secondary, a Sample-labelled proof line, a strong lead paragraph.

## distinctiveness: 4.5
- 1440-full.jpg: the concept has three signatures (night-sky palette, photo marquee hero, altitude rail). None of them reads. The rail is a ~10px grey vertical string clipped at x=0 (1440-scroll-25.jpg, left edge: "7,450 ft · Eldorado Canyon" half off-canvas, overlapping a second label). The marquee doesn't appear. The palette is white plus teal.
- 1440-scroll-75.jpg: the only place the altitude idea surfaces is one mono tag above "Real cars, real altitude" (1440-full.jpg ≈ y 5500). That leaves the signature in under 4 sections (−1.0) and makes it decoration where it shows (−0.5).
- 1440-full.jpg: "What your car needs up here" is an 8-card 4×2 grid with a left rule. It's standard template furniture.
- Different from sibling A (Quarter Hour, cream + dark green), but only because A is cream. Both read as a light template.

## type: 6.5
- Outfit Black display plus Space Mono is a legitimate pair, and the h1 weight has presence (1440-first.jpg).
- 1440-scroll-75.jpg: the table notes column ("most cars, filter included") is ~13px light grey on white. The header captions "SERVICE / RANGE / NOTE" are grey tracked caps (−0.5).
- 1440-scroll-75.jpg / 1440-full.jpg: reviews use straight quotes (`a barn."`) and straight apostrophes in headings ("What's", "Check what's due") (−0.5).
- 1440-first.jpg: tracked mono eyebrows, a mono proof line and the mono rail all sit in one view: 3+ tiny tracked caps labels (−0.5).
- 1440-scroll-25.jpg: the season-check intro "Tick what sounds familiar" is set in mono at body size. Mono for running sentences reads as a code block, not instrument data.

## layout: 5.0
- 1440-full.jpg: every photo band is a half-empty white field (hero, "Dust eats filters" at ≈ y 2200, "UV cracks rubber" at ≈ y 4600, the Santa Fe place band at ≈ y 5250, "Cold mornings" at ≈ y 6700). That's about 5 blank gaps over half a screen (−0.5 under the rule, but it decides the whole read).
- 1440-full.jpg: "Hands, tools, no logos" (≈ y 7400) is a gallery with no images at all. It's an empty section.
- 1440-full.jpg: page tone is white → white → white → grey tool boxes → white → white. There's no tonal rhythm and no dark band at all, against a concept that is a night-sky page (−0.5 for 3+ same-tone sections).
- 1440-scroll-25.jpg: the four tools stack as identical grey boxes with a teal left rule. Same shape 4× in a row (−0.5).
- What it earned: a real container grid, two-column alternation in the story bands (scroll-25 vs scroll-50 flip sides), and a reasonable reviews + pricing order.

## photo: 2.0
- 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 390-full.jpg: no photograph renders anywhere on the page. Every slot shows its alt text. The alt text itself is good ("Red dust settled on a hood after a week of dirt-road driving to Eldorado"), and it's the only reason this isn't a 0.
- Build log: the OG image fell back to a flat colour for the same reason.

## copy: 6.5
- What earned it: the voice is right and specific to the trade and the altitude. Examples: "At seven thousand feet your engine breathes less air", "We pull yours and show you what's packed in there before we swap it", "Ranges from past jobs. Your number depends on make, model and what we find." Sample labels are present.
- 1440-full.jpg ≈ y 7400 / dist h2: "Hands, tools, no logos" is a media-curation instruction leaked into a public heading. A homeowner reads it as nonsense. mustFix.
- 1440-scroll-75.jpg: every price reads "$70 – $105 SAMPLE · SAMPLE". The label is doubled on all 5 rows (−0.5).
- 1440-scroll-25.jpg / 1440-scroll-50.jpg: the story CTAs say "Price it" while the hero and header say "Book a time". That's two names for the primary action (−0.5).
- dist/index.html has 14 em dashes, including the review attributions "— Ana V." and the price ranges (−0.5).
- 1440-full.jpg: "Real cars, real altitude" and the "Cold mornings find weak batteries first" band repeat the altitude-and-cold point already made in the hero lead (−0.5, light).

## mobile: 4.0
- render.json: horizontal overflow at 390 (page 456px wide: `button#tab-oil-full`, `table.price-table`) and at 320 (451px). 390-full.jpg is visibly 456 wide. mustFix, already a check failure, so I don't deduct it again here. The score reflects the rest.
- 390-first.jpg: the h1 is below the fold and partly under the call bar. The first 600px is an empty image box with a caption.
- 390-full.jpg: the 4×2 service grid collapses to one tall column of 8 cards, about 1.5 screens of identical cards. The pricing table is a desktop table squeezed down instead of being re-cut as rows.
- What it earned: the sticky call bar has a 48px+ phone and a "Book a time" pill (390-first.jpg). The altitude pill "7,199 ft Santa Fe Plaza" is the one place the rail reads properly.

## a11y: 6.0
- 1440-first.jpg: the header nav links ("Services · What's due · Reviews · Book") and the phone `(505) 555-0190` are dark on navy, well under 4.5:1. mustFix (−1.5).
- 1440-scroll-75.jpg: the grey table notes and column headers on white look under 4.5:1 at that size (−0.5).
- 1440-rm-full.jpg: reduced motion shows every heading and paragraph, with nothing hidden. Good.
- 1440-scroll-50.jpg: there's a stray grey bar with a text caret under the ZIP input (the live-region output box rendering as an empty field). It reads as a second input with no label.

## motion: 5.0
- The dist hooks exist (data-split ×13, data-marquee ×6, data-altitude ×6, data-reveal ×33, a carousel track). But the screenshots show no marquee, the altitude count isn't readable (the rail is clipped at x=0 in 1440-scroll-25.jpg and 1440-scroll-50.jpg, where two labels overlap mid-transition), and everything else is the same reveal. The one motion idea, a climbing altitude reading, has no visible evidence (−1.0 same reveal everywhere, −1.0 signature motion not readable).
- 1440-first.jpg: the h1 is fully set at capture, so the intro doesn't block reading.

## wow: 4.5
- 1440-scroll-25.jpg / 1440-full.jpg: the tool suite (season checklist, oil tabs, mileage estimator, ZIP check) is useful, but it renders as four flat grey forms with no output designed in the altitude language. The estimator output and the checklist output are plain text lines (−1.0).
- Nothing on the page would be shown to a partner. The altitude climb is invisible.

## polish: 4.0
- dist/media: 48-byte placeholder webps shipped. The OG image is a flat colour (build log).
- 1440-scroll-75.jpg: the doubled "SAMPLE · SAMPLE".
- 1440-scroll-25.jpg: the rail text clips off the left edge and two labels overlap.
- Radius mix: pill buttons, square tool boxes, square review cards with thick left rules (−0.5).
- What it earned: favicon + apple-touch, og:image 1200×630 declared, JSON-LD present, a print stylesheet and forced-colors rules in the CSS.

## Arithmetic
14×4 + 12×4.5 + 10×6.5 + 10×5 + 8×2 + 8×6.5 + 7×4 + 7×6 + 12×5 + 8×4.5 + 4×4
= 56 + 54 + 65 + 50 + 16 + 52 + 28 + 42 + 60 + 36 + 16 = 475 / 100 = **4.75**

## Must
1. **Every photo is a 48-byte placeholder (1440-first.jpg, 1440-full.jpg, 390-full.jpg).** Where: all 9 `media/placeholder-*.webp`. Problem: no image renders and alt text shows instead. Fix: place real approved frames from `niches/autotuneup/media/manifest.json` through the media plan, rebuild, and confirm `dist/media/*.webp` are real files (tens of KB, not 48 B) and that og.jpg builds from the hero.
2. **Horizontal overflow at 390 and 320 (render.json, 390-full.jpg).** Where: `#tab-oil-full` / the oil tablist and `table.price-table`. Problem: the page is 456px wide. Fix: let the tablist wrap (`flex-wrap: wrap`) or scroll inside its own `overflow-x:auto` container. Under 640px, render the price table as stacked rows (service on top, range + note under it), or wrap it in a scroll container with `max-width:100%`.
3. **Header contrast (1440-first.jpg).** Where: `header nav a` and the header phone link. Problem: dark ink on navy (#121826 / #0b1120), roughly 1.3:1, which also leaves the phone effectively invisible. Fix: set header links and the phone to the light ink #e8e4dc (≥ 12:1). Keep the teal Book pill.
4. **Leaked internal heading (1440-full.jpg ≈ y 7400).** Where: h2 "Hands, tools, no logos". Problem: a media-curation instruction is published as copy. Fix: replace it with a homeowner-facing heading tied to the visit, e.g. "What you'll see when you pick it up", or cut the section.

## Should
- **#hero h1 (1440-first.jpg).** The h1 wraps to 4 lines because its column is about 480px. Widen the text column to ≥ 7 columns, or restore the promised centred statement so the h1 sets on 1–2 lines. Put the city in the h1 or directly under it at lead size, not only in the 11px eyebrow.
- **Hero at 390 (390-first.jpg).** The h1 starts at y≈690. Put the text first and the image after it on phones (or cap the media at 38svh), so the h1 + "Book a time" are above y=600.
- **Altitude rail (1440-scroll-25.jpg, 1440-scroll-50.jpg).** It's clipped at x=0 and two labels overlap. Give the rail a 56px gutter (`left: 16px`, container padding-left ≥ 88px at ≥ 1200px), set it at 13px+ in #e8e4dc or teal at ≥ 4.5:1, and crossfade the labels instead of overlapping them.
- **Pricing labels (1440-scroll-75.jpg).** Each row shows "SAMPLE · SAMPLE". Render one Sample tag per row, or one "Sample pricing" label on the table only.
- **Primary action naming (1440-scroll-25.jpg, 1440-scroll-50.jpg).** "Price it" vs "Book a time". Rename the story CTAs to "Book a time", or make them clearly secondary text links ("See the price range").
- **Quotes (1440-scroll-75.jpg, headings).** Use curly quotes ’ “ ” in reviews and headings.
- **Em dashes (dist).** There are 14. Use an en dash for ranges ($70–$105) and drop the dash before review names (set the name on its own line in mono).
- **Table greys (1440-scroll-75.jpg).** Notes and headers must reach ≥ 4.5:1: use #4a5263 or darker on white, or the ink colour on the dark palette.
- **ZIP output (1440-scroll-50.jpg).** An empty grey bar with a caret under the input. Hide the output box until it has content (`:empty{display:none}`), or style it as a result line, not a field.
- **Tools section (1440-scroll-25.jpg).** Four identical grey boxes. Vary them: put the checklist and the mileage tool side by side at ≥ 900px, set the oil tabs as a full-width strip and the ZIP check as an inline line.

## Elevate (the two weakest by score/weight: photo 2.0, mobile 4.0; the real lever is that the concept never rendered)
- **photo:** Make the photography the climb. Once real frames are in, grade them as one dusk shoot and order them by elevation (Plaza 7,199 → Eldorado 7,450 → Ski Basin 8,200). Each story band's image carries its altitude marker set into the frame corner, so the photos and the rail tell one sequence: town → dust road → mountain road.
- **mobile:** Compose the phone page as the ascent instead of a collapse. Statement and Book first. A horizontal swipe strip of the photo marquee under it. The altitude pill pinned under the header as the section heading for each band, updating as you climb. Services as a compact 2-column list with times. Prices re-cut as stacked rows. Every section gets a phone-specific decision you can see.
- Beyond the two: render the concept that was promised, a night-sky page with dark bands, a centred statement over a drifting marquee, and a legible rail that counts up. Distinctiveness and wow can't move until that page exists.
