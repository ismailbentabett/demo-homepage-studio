COPY: ok

# carpenter-C, round 5 critique (fast mode, final round)

The checks are clean: static.json has no blockers or warnings, and render.json shows no overflow at 320 or 390 and no console errors. Most of the round-4 Should list is fixed and visible in the screenshots. The street break moved, #contact is now a split, #area has a drawn map, the floor-1 plate was redrawn, the copy duplicates are gone, the planner is no longer set in mono, and the mobile bar is hidden on load. The margin house now builds floor by floor as you scroll.

## Five-second test
- **1440-first.jpg:** "Porch rebuilds in Worcester for triple-deckers. The drawing is my house, with its floors labelled. 156 sample reviews, 11 years. I call (508) 555-0169 or price a rebuild." This passes.
- **390-first.jpg:** The same answer, with 2 buttons and no duplicate bar. The cream band peeks below.

## First screen: 9.0
What earned it: the h1 states trade, city and outcome. The clapboard-filled Bebas is a thesis detail. The elevation carries the 1F/2F/3F floor labels, which double as the page's navigation. The proof line is now a plain sentence (the pipe is gone). The phone shows twice. There is one loud button. The 390 hero is clean.
Why not 9.5: the hero kicker is wide-tracked mono, and at 1440 there is a dead zone of about 250px between the headline and the drawing (1440-first.jpg).

## Distinctiveness: 9.0
What earned it: one system runs through the whole page. The hero labels the floors, and the margin house lights and builds 1F, then 2F, then 3F (1440-scroll-25/50/75.jpg). The checklist result card uses the same house. Among the carpenter sites, only this one is dark-led with drawn linework.
Deduction: carpenter/B/1440-first.jpg still has the same hero family (condensed headline on the left, line elevation on the right, rust dimension lines), and both now carry a left-margin device (ruler vs house) (−0.5). Credit +0.5 because the slop tells are gone: no middle-dot strings, and the micro-labels are cut down to the SAMPLE tags.

## Typography: 9.0
What earned it: the planner sits in Source Sans at lead size (1440-scroll-75.jpg). Prices pair a mono figure with a sans unit and no longer wrap (1440-scroll-25.jpg). The reviews use curly quotes. The display-to-kicker scale contrast is strong.
Why not 9.5: the hero kicker is the one remaining wide-tracked mono line.

## Layout and rhythm: 8.5
What earned it: the tone run now alternates cleanly (1440-full.jpg): paper, paper, deep, paper, ink break, teal, dark map, then the paper/dark contact split.
Deductions:
- 1440-scroll-25.jpg: about 230px of empty cream sits between the checklist and "The porch jobs". Two paper sections stack their padding (−0.5).
- 1440-scroll-50.jpg: in #floor-2 the right column ends below the baluster caption, while the trim cards run on for about 350px on the left (−0.5).
Credit +0.5 for fixing the dark-on-dark block and the floating form.

## Photo (drawn plates): 9.0
The plates are judged on merit, and nothing is blank. The floor-1 probe plate is now tall, with a rust 1/4 in mark, and fills its column (1440-full.jpg). The baluster plate and the clapboard-in-rain plate share one stroke and one palette.
Deduction: the street break still repeats the hero elevation four times (1440-full.jpg) (−0.5).

## Copy: 9.0
What earned it: the duplicate railings card is gone, and #floor-2 is now "Clapboard and exterior trim" plus "Brackets and spindles, matched". The floor-3 lead no longer repeats the h2. "Ask about another job" replaces the misleading list link. The action names are one pair: "Price it" and "Price a rebuild". The trade nouns are specific, and everything Sample is labelled.
Why not 9.5: the area h2 lists all 7 towns in 5 display lines (1440-full.jpg). It is heavy but honest.

## Mobile: 9.0
What earned it: no overflow. The hero is re-cut, and the bar appears only after the hero. Floor-2 leads with its plate on the phone. The bar's labels match the hero's.
Remaining: the style tabs wrap "Colonial Revival" onto a second row (390-full.jpg, floor-2). This is minor.

## Accessibility: 9.0
What earned it: the rm-full shots at 1440 and 390 show every word, drawing and rule. There is one h1, the heading order is correct, every input has a label, and the tabs have roles.
Minor: the empty `ul.credits` still ships.

## Motion: 9.0
What earned it: the build is now real. The rails on the margin house fill floor by floor across 1440-scroll-25/50/75.jpg. The baluster rules draw on entry (compare 1440-full.jpg with 1440-rm-full.jpg). The page also has tabs and a split h1.
Why not 9.5: the large hero elevation is static, and the build happens in an 80px badge.

## Wow: 8.5
What earned it: the checklist resting state now invites action ("Tick what you see. Your floor lights up here." with a drawn house, 1440-scroll-25.jpg), and the house builds as you scroll.
Deduction: both payoffs play out at thumbnail size. No frame shows a moment big enough to stop a juror (−0.5 from the 9 anchor).

## Polish: 9.0
What earned it: one radius and one stroke weight throughout, an honest drawings note in the footer, and a cleanly typeset hours card.
Minor: the empty credits list, and the header hides on scroll at 1440, so no phone number is visible in any scroll frame.

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×9.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×8.5 + 4×9.0
= 126 + 108 + 90 + 85 + 72 + 72 + 63 + 63 + 108 + 68 + 36 = 891 / 100 = **8.91**

This is the round cap in fast mode. The weighted score is 8.91, which is at or above 8.8. There are no blockers, no mustFix, and every category is at or above the fast floor, so the expected verdict is PASS (cap delivery).

## Must
None. There are no DEMO-RULES breaches: reviews, stats and prices are Sample-labelled, the form is honest, and the drawings are disclosed. Reduced motion shows all content, and nothing breaks on the phone.

## Should
1. **Gap between #floor-1 and #services** (1440-scroll-25.jpg). Problem: about 230px of empty paper. Fix: when a paper section follows another paper section, drop the top padding (e.g. `#services { padding-top: var(--s-6) }`), or put a baluster rule between them as the divider.
2. **#floor-2 right column** (1440-scroll-50.jpg). Problem: it empties below the baluster plate. Fix: make the plate `position: sticky; top: 15vh` at 900px and up, or span the two trim cards under both columns.
3. **Header hides on scroll at 1440** (1440-scroll-25/50/75.jpg). Problem: no phone number is visible mid-page. Fix: keep a compact header with the Call button on scroll-up, or pin the Call into the margin house badge.
4. **Floor-2 tabs at 390** (390-full.jpg). Problem: "Colonial Revival" wraps to a second row. Fix: shorten the label to "Colonial" or let the tablist scroll horizontally with `flex-wrap: nowrap; overflow-x: auto`.
5. **Footer `<ul class="credits"></ul>`.** Problem: it is empty. Fix: remove the element when there are no credits.
6. **Hero kicker** (1440-first.jpg). Problem: the tracked mono reads like a template. Fix: set it in Source Sans 600 at normal tracking, or drop it, since the h1 already says it.

## Elevate (for a human pass; not required by the verdict)
- **Wow (8.5):** let the big hero elevation be the stage for the checklist result. When the visitor ticks items, scroll back to or reveal the hero-scale house with the flagged floor's porch hatched in rust, so the payoff happens at full size, not in a 60px icon.
- **Layout (8.5):** give each floor section the house as its spine. Put a sticky full-height drawing column on the right of floors 1 to 3 that swaps plates as each floor enters, so no column ever ends early and the rhythm becomes a single drawn building you scroll past.
