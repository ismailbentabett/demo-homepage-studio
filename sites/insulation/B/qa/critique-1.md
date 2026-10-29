COPY: ok

# insulation-B · critique round 1 (mode: fast)

**Five-second answer (visitor):** "An insulation company in Fargo that measures my attic depth in six places and writes it down before quoting. I call (701) 555-0165 or check my own attic depth. Why them: they show the inches, not a sales pitch." Answered on both 1440-first.jpg and 390-first.jpg.

## First screen: 9
Earned: 1440-first.jpg trade + city eyebrow, 3-line h1, primary call + tool CTA, the six-ruler attic cut overlapping the taped photo plate, sample-labelled rating and open-now. 390-first.jpg: h1 3 lines, both actions above the fold, sticky Call/Text/Price it bar.
- −0.5 lede rag: "a number." widowed at 1440 (1440-first.jpg); "R-/value" hyphen-breaks at 390 (390-first.jpg).

## Distinctiveness: 9
The stapled depth ruler is a real system: hero, story, service icons with per-service variants (sideways for rim joist, pebbles for vermiculite), review stubs, section rails (1440-scroll-25/50/75.jpg). Nothing else in the library looks like this.
- −0.5 the F-0n tag + mono caption idiom is the shared "report" vocabulary of other library sites.

## Typography: 8.5
Bitter + Instrument Sans + Martian Mono fit the concept.
- −0.5 1440-scroll-25.jpg: "17  in" readout has a dead gap between number and unit (mono space), and "about R-50" floats as an afterthought.
- −0.5 body copy in story cards and services is light grey at a thin weight; reads washed on paper/mid (1440-scroll-25.jpg, 1440-scroll-50.jpg).

## Layout and rhythm: 8.5
Deep vents band and orange pebbles band break the paper run well (1440-rm-full.jpg).
- −0.5 most sections repeat the same skeleton: rail ruler + h2 left + lede right.
- −0.5 1440-scroll-75.jpg: Dale's feature review card is half empty white below the quote; right column crammed.

## Photo: 8
1440-first.jpg: on-topic, right region and season, framed as plate P-01 with tape; the frame belongs to the signature. But 1440-rm-full.jpg / 390-rm-full.jpg show it is the only photograph on the page. No sequence, no second frame to prove a grade. Held at the 8 anchor.

## Copy: 9
Specific and buyer-voiced: "Fill on top of a leak just hides it.", "Pebbles like kitty litter? We stop.", "A ballpark before you call." Sample labels on readings, rating, reviews, prices. No invented claims seen against facts.json. (R-50/R-51 mismatch counted in Polish.)

## Mobile: 8.5
390-first.jpg is clean. 390-full.jpg is 16,654 px: services and reviews stack as one long column with no phone-specific density move (−1.0 per §3.7 length/density judgement, partial credit for the sticky bar and stacked story).

## Accessibility: 9
static/render clean; reduced-motion shots (1440-rm-full.jpg, 390-rm-full.jpg) show all content and final ruler readings.
- −0.5 1440-scroll-75.jpg: small grey mono labels on review cards are borderline to read.

## Motion: 8.5
1440-scroll-25.jpg: pinned story, fill rises, R-49/R-60 lines, active step card. Good.
- −0.5 signature moves only in hero + story; the F-05 ruler tool and footer ruler sit still (1440-rm-full.jpg), and 1440-full.jpg shows a long blank pin spacer after the story.

## Wow: 8.5
Hero: six uneven rulers, one going orange (1440-first.jpg). Real. The story's payoff (passing R-49) has no beat of its own and the attic triangle is a flat diagram (1440-scroll-25.jpg).

## Polish: 8.5
favicon.svg, apple-touch, og.jpg present.
- −0.5 1440-scroll-25.jpg: big readout says "about R-50", the step card says "about R-51" for the same 17 in.
- −0.5 1440-scroll-75.jpg: uneven review card heights in the top row.

## Arithmetic
14×9 + 12×9 + 10×8.5 + 10×8.5 + 8×8 + 8×9 + 7×8.5 + 7×9 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 85 + 85 + 64 + 72 + 59.5 + 63 + 102 + 68 + 34 = 866.5 / 100 = **8.67** → ELEVATE (fast window 8.0–9.0).

## Must
None.

## Should
1. **#depth story readout** (1440-scroll-25.jpg): "about R-50" vs card "about R-51". Fix: drive the readout from the same in×3 value as the cards (17 in → R-51) or round both to "about R-50".
2. **#depth big readout** (1440-scroll-25.jpg): dead gap in "17  in". Fix: set number and unit as separate spans, unit at ~0.45em with 0.1em left margin, `font-variant-numeric: tabular-nums`; put "about R-51" on its own line under it in Martian Mono.
3. **Hero lede** (1440-first.jpg, 390-first.jpg): widow and "R-/value" break. Fix: `text-wrap: pretty` on `.lede`, and `R&#8209;value` (non-breaking hyphen) everywhere.
4. **Body grey** (1440-scroll-25.jpg, 1440-scroll-50.jpg): story card and service blurbs read washed. Fix: blurbs to ink #22252A at weight 400 or muted #5A5F66 at 450+, not both light colour and light weight.
5. **#notes feature card** (1440-scroll-75.jpg): half empty white. Fix: let the card height follow content (`align-self: start`) and put the 3.5-in ruler stub reading large in the empty lower half, or balance the right column so the two columns end level.
6. **Pin spacer** (1440-full.jpg): long blank paper after #depth. Fix: check the pin end/`pinSpacing` so the next section follows the story's last step directly.
7. **Mobile length** (390-full.jpg): Fix: on < 640 make #services an accordion-free compact list (name + mini ruler + Price it, blurb hidden behind a disclosure) and turn #notes into a horizontal scroll-snap row of stubs with the feature note first.
8. **Review labels** (1440-scroll-75.jpg): mono service labels on cards are small and grey. Fix: 13px min, ink colour.

## Elevate
- **Photo (8):** give the page a second and third plate from the library inside the ruler system: an attic/interior frame revealed by the story's rising fill line, and a winter exterior plate on the contact band, filed P-01/P-02/P-03 so the photographs read as the report's own plan-to-result sequence.
- **Motion (8.5):** make the ruler the one moving part everywhere: the F-05 tool fills to its default reading on entry, each section-rail ruler fills with its own section's scroll progress, and the footer flat ruler draws its ticks 0-20 as the sign-off, so the signature moves in four places, not two.
