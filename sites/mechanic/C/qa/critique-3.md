COPY: ok

# mechanic-C · round 3 (fast, final round: roundCap 3)

**Five-second test** (1440-first.jpg, 390-first.jpg): "An auto repair shop in Anchorage, Alaska that thinks in seasons: block heaters in January, tie rods after breakup, road-trip checks in July. I book a drop-off, or check what my dash light means. 11 years, 4.8 from 187 reviews (sample)." Clear on both viewports.

What changed since round 2: the broken stub photos are gone, replaced by drawn season scenes; the nav is readable over the hero; the thermo rail is now visible and recolours through every mid-scroll frame; the empty ~2,400px stretch is gone (1440-full.jpg matches 1440-rm-full.jpg); header Call duplicate and the 2-line bar label on phone are fixed; progress bar uses transform.

## firstScreen: 9
Earned: 7-word h1 with trade + city, primary + quieter secondary, phone visible, season ledger (-8 / 34 / 64) as the why-them, night road scene with headlights (1440-first.jpg, 1024-first.jpg, 390-first.jpg).
- Proof line wraps leaving an orphan "·" after the Sample rating chip and the license alone on line 2 (1440-first.jpg, 1024-first.jpg) -0.5.

## distinctiveness: 9
Earned: Bodoni + glacier/spruce/fireweed, thermo rail present and season-coloured in 1440-first / scroll-25 / scroll-50 / scroll-75, services filed by season, year curve. Nothing like the sibling.
- Mono "Outside 34°F · April" micro-label above every season heading (1440-scroll-25.jpg, 1440-scroll-50.jpg) -0.5.

## type: 9
Earned: display scale contrast in the hero, giant fireweed 64° (1440-scroll-50.jpg), italic Bodoni guarantee and quote (1440-rm-full.jpg).
- Bodoni's hairline minus makes "-8°" read as "8°" in the winter story and services index (1440-rm-full.jpg, 1440-scroll-75.jpg) -0.5.

## layout: 8.5
Earned: tone run alternates cleanly through 11 bands, season stories have different shapes (1440-rm-full.jpg).
- Winter numeral overlaps its own kicker, which reads "utside -8°F" (1440-rm-full.jpg) -0.5.
- Breakup band: right third empty under the 34° for ~500px (1440-scroll-25.jpg) -0.5.

## photo: 8
Earned: four drawn scenes in one flat palette, each tied to its season, nothing broken or blank (1440-first.jpg, 1440-rm-full.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg); credit line present.
- Drawings are flat clip-art level (box car front, triangle road), no texture/grain/light; they read as placeholders, not art direction -1.0.

## copy: 9
Earned: specific, local, plain ("Breakup bends what winter loosened", "Before Seward, Denali or the Haul Road", decoder verdicts). Sample labels everywhere they are needed; honest form thanks.
- Arrow on every inline link ("Price it →", "Call the shop →") holds it at 9.

## mobile: 9
Earned: no overflow (render.json), h1 3 lines + both actions above fold, sticky bar clean (390-first.jpg).
- 34° numeral drawn through the wheel illustration (390-rm-full.jpg) -0.5.

## a11y: 9
Earned: nav contrast fixed (1440-first.jpg), every section visible in reduced motion (1440-rm-full.jpg, 390-rm-full.jpg), labelled fields, tablist.
- Rail "Outside" label ~11px mono (1440-first.jpg) -0.5.

## motion: 9
Earned: rail fill + colour track scroll through the seasons (1440-scroll-25/50/75.jpg), progress bar on transform, tabs/filters, split h1, reduced motion respected.
- Drawn scenes never react to the rail; they are static in every frame -0.5.

## wow: 9
Earned: the page recolours by temperature as you scroll, the year curve, and a ticket stamped with the season (1440-rm-full.jpg).
- Ticket output is a plain price line -0.5.

## polish: 8.5
Collisions listed above (winter kicker, 390 34°/wheel, hero orphan dot). Favicon, OG, JSON-LD, designed footer present.

## Arithmetic
14×9 + 12×9 + 10×9 + 10×8.5 + 8×8 + 8×9 + 7×9 + 7×9 + 12×9 + 8×9 + 4×8.5
= 126 + 108 + 90 + 85 + 64 + 72 + 63 + 63 + 108 + 72 + 34 = 885 / 100 = **8.85**

## Must
None. No DEMO-RULES breach (rating, pricing, reviews labelled; form says "In the live version"; license SAMPLE), no visible contrast failure, nothing broken on phone.

## Should
1. Hero `.hero` proof line (1440-first.jpg): orphan "·" then license on line 2. Put the license in its own line by design (block element, no leading dot) or drop the trailing dot after the Sample chip.
2. Winter story numeral (1440-rm-full.jpg): the big "8" sits on the "Outside -8°F · January" kicker. Push the kicker below the numeral's box (margin-top ≥ the numeral's descent) or move the numeral left into the image column so it straddles the gutter.
3. Minus sign on -8° (winter story, services index, 1440-scroll-75.jpg): replace the hairline hyphen with a true U+2212 "−" set in the text sans at the numeral's weight, or a drawn bar of the numeral's stem thickness.
4. Breakup band at 390 (390-rm-full.jpg): the 34° overlaps the wheel drawing. At ≤ 600px place the numeral below the scene or right-align it clear of the wheel.
5. Breakup band at 1440 (1440-scroll-25.jpg): the right third is empty under the 34°. Move the service list into that column or let the 34° grow down into it.
6. Season kickers: drop the mono "Outside N°F · Month" micro-label on at least two of the three stories; the giant numeral already says it.

## Elevate (for a human pass; verdict at cap)
- **photo**: Give the drawn scenes a real illustrator's hand: one grain texture, one light source per season (headlight cone, low winter sun, midnight sun), and line weight matched to the Bodoni hairline, so the four scenes read as plates from the same car-year issue rather than flat icons.
- **layout**: Make the three season stories true spreads where the giant numeral crosses the gutter from text into the scene as the one deliberate grid break, alternating bleed side, so winter, breakup and summer each feel like a different page of the issue.
