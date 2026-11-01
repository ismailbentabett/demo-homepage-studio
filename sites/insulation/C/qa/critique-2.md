COPY: needs copy-chief (British spelling and request-path naming drift unchanged from round 1)

## Five-second test
- **1440-first.jpg**: Syracuse insulation company built for the snow belt. H1 now includes "Syracuse" and "insulation"; map with pins and drift bands is visible at first paint; phone button present. Trade + city in headline achieved.
- **390-first.jpg**: Same hierarchy. H1 wraps to 4 lines with both CTAs above fold. Map and street plate start below fold but signature is still present via drift band texture.

Passes five-second test on both viewports. Up from 8.0.

## Category scores

### firstScreen — 9.0
Earned: H1 now names trade + city ("Syracuse insulation, built for the snow belt"). Signature map with pins and drift bands visible at first paint. Phone button prominent. Proof line with hours + rating + SAMPLE RATING present. Next band peeks under hero (`1440-first.jpg`). Hero height capped so paper band shows.
Deductions:
- `390-first.jpg`: street plate still covers town pins at mobile size; map loses meaning on phone (−0.5).
- `1440-first.jpg`: yellow "Find my house type" button still competes visually with brick Call button; secondary action not quiet enough (−0.5).

### distinctiveness — 9.0
Earned: Lake-Bearing Pin & Drift Band signature unmistakable vs siblings A and B. Pin chip + hatched band in hero, story, services, reviews strip map, ZIP map, form top and footer (≥6 sections). Reviews-on-strip-map organises information by town. Drift band motion now visible across scroll frames (`1440-scroll-25/50/75.jpg`): band position shifts lake→south as promised.
Deductions:
- `1440-full.jpg`: section bearings still use same "↰ NNW · toward the lake" string under every header; decorative not informational (−0.5).
- `1440-full.jpg services`: ● 01–07 chips remain pure decoration; don't carry house-type or town info (−0.5).

### type — 8.5
Earned: Anybody expanded/heavy display distinctive; scale contrast between h1 and mono meta; en-dash ranges and tabular mono prices; curly apostrophes; lead paragraph set apart.
Deductions:
- `1440-full.jpg services`: narrow cards still set body at ~14px (fs--1); falls under 16px minimum (−0.5).
- `1440-first.jpg`: tracked wide caps eyebrow + mono bearing + lake labels + pin labels + mono caption + SAMPLE RATING caps exceed 3 tiny tracked caps/mono labels in one view (−0.5).

### layout — 8.5
Earned: 12 sections with clean tone alternation. Full-bleed colour break (brick pricing). Asymmetric reviews hanging at pins. Dense pricing table. Quiet tools section.
Deductions:
- `1440-full.jpg`: "big h2 left / content right" repeats in ice dam, pricing, FAQ and form (4×) (−0.5).
- `1440-scroll-50.jpg`: Tool 2 card still offset 64px below Tool 1; reads as misalignment not deliberate stagger (−0.5).
- `1440-full.jpg services`: bento grid with one card shape repeated 7× (−0.5). Credit for reviews strip-map break (+0.5).

### photo — 8.5
Earned: Three street plates now present in zoom story (`1440-scroll-25.jpg`, `1440-scroll-50.jpg`): Eastwood frame house, Tipp Hill clapboard, Liverpool colonial, each clipped to its neighbourhood pin. Shared cool snow grade across all three. Photography now tells county→street sequence as elevate move prescribed. Credits intact.
Deductions:
- `390-first.jpg`: hero street plate still thumbnail-sized and covers pins (−0.5).
- `1440-full.jpg`: only 3 photos total on page; no installed-work or crew shot to ground trust beyond street exteriors (−0.5).
- `390-full.jpg`: story plates render small on phone; subject detail reduced (−0.5).

### copy — 8.5
Earned: Real trade nouns throughout (knee walls, rim joist, dense-pack, chimney chase, vermiculite). Honest "it depends" lines. Microcopy where people hesitate. Zero em dashes. Claims match facts.json.
Deductions:
- `1440-full.jpg reviews/FAQ/footer`: British spelling persists (neighbours, mould, two-storeys, Licence) on a Syracuse NY page (−0.5).
- `1440-full.jpg`: request-path naming still drifts across 4 verbs (Find my house type / This is my house / Add this to my request / Put this note in my request) (−0.5).
- `1440-full.jpg services`: "Price it" ×7 unchanged (−0.5).

### mobile — 8.5
Earned: No sideways scroll (render.json clean). Hero re-ordered text-first. Sticky Call / Text a photo bar. Story drops pin and becomes stacked cards. Tools stack with big tap rows. Form options full-width.
Deductions:
- `390-full.jpg story`: neighbourhood map labels render at ~5–6px, unreadable decoration (−0.5).
- `390-full.jpg hero`: plate covers pins; map loses meaning (−0.5).
- `390-full.jpg ice dam`: roof diagram cut off at right edge (−0.5).

### a11y — 9.0
Earned: Reduced-motion shots show every word; story becomes 3 complete stacked cards. One h1, clean heading order. 38 labels. Designed focus per tone. Skip link. aria-live on ZIP. FAQ on native details. Forced-colors and print media queries. Decorative SVG aria-hidden.
No deduction found that I can point to in a screenshot.

### motion — 9.0
Earned: Drift band thesis now visible across scroll frames (`1440-scroll-25/50/75.jpg`): band position shifts lake→south as scroll progresses. Shoreline/pin intro ≤1.1s. Pinned zoom story with house cut-aways and sealing arrows. Split headings. Varied reveals. Pin-lift hover. Lenis. Reduced motion respected.
Deductions:
- `1440-scroll-50.jpg`: Cold room log and Ice dam check outputs remain mono text; not drawn in pin/band language (−0.5).
- `1440-full.jpg`: tool outputs don't participate in signature visual system (−0.5).

### wow — 9.0
Earned: Three-neighbourhood zoom story with house cut-aways tied to thesis and trade. House type guide shows your house shape with yellow leak markers and sample price. Drift band motion now delivers on thesis. Street plates in zoom story give photography a structural role.
Deductions:
- `1440-scroll-50.jpg`: tool outputs not in signature language (−0.5).
- `390-full.jpg`: mobile loses zoom story density; stacked cards less impactful than pinned desktop experience (−0.5).

### polish — 9.0
Earned: SVG favicon + apple-touch, OG 1200×630, print stylesheet, forced colors, no `transition: all`. Radius consistent (0 + full pills only). Footer designed close with county map and pinned towns. Street plates integrate cleanly with pin system.
Minor: `1440-scroll-50.jpg` tool card misalignment scored under layout.

## Arithmetic
14×9.0 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.5 + 8×8.5 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 85 + 85 + 68 + 68 + 59.5 + 63 + 108 + 72 + 36
= 878.5 / 100 = **8.79**

## Must
(none)

## Should
1. `390-first.jpg`, `390-full.jpg`: Move hero street plate outside map (above or beside) so it doesn't cover pins at mobile.
2. `1440-first.jpg`: Make "Find my house type" quiet secondary (outline or text link); keep brick Call as only filled button.
3. `1440-full.jpg`: Make section bearings real per section (different bearing/distance per town), or drop from non-place headers.
4. `1440-full.jpg services`: Replace ● 01–07 chips with house-type or town labels so chips carry information.
5. Copy pass: neighbours→neighbors, neighbourhoods→neighborhoods, mould→mold, two-storeys→two-story, Licence→License.
6. Request-path naming: choose one verb for "add to request"; change "Price it" ×7 to "See the price".
7. `1440-full.jpg services narrow cards`: Body to ≥16px (fs-0), same as wide cards.
8. `1440-scroll-50.jpg`: Align tool card tops or make stagger ≥120px with connecting band.
9. `390-full.jpg story`: Map labels to ≥12px; show at most 4 towns on mobile.
10. `390-full.jpg ice dam`: Scale roof diagram to fit 100% width instead of bleeding off right edge.

## Elevate
(none — weighted 8.79 < 9 but at round 2 cap; deliver if ≥ 8.8 with no blockers per fast-mode rule)