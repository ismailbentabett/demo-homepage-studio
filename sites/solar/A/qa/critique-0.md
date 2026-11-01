# solar-A · critique round 0 (mode: fast)

## Five-second test
- **1440-first.jpg**: Sacramento solar installer that checks your roof before pitching panels. H1 "Roof first. Panels second." is clear and short. Rafter signature visible along the pitched hero photo edge. Phone button prominent. Proof line with hours, rating, license present. Quiz CTA secondary. Passes five-second test cleanly.
- **390-first.jpg**: Same hierarchy preserved. H1 wraps to 3 lines. Both CTAs above fold. Rafter row visible at angle. Sticky mobile bar present. No fold-critical content lost.

## Category scores

### firstScreen — 9.0
Earned: Trade + city in kicker. H1 names the value prop without savings claims. Signature rafter row + mount visible at first paint on the pitched hero photo. Dual CTAs (Call primary, Check my roof first secondary). Proof line with hours, rating, Sample tag, license. Next band peeks under hero.
Deductions:
- `1440-first.jpg`: hero photo duotoned heavily; some roof texture lost (−0.5).
- `390-first.jpg`: rafter pitch angle makes ticks hard to read at mobile size (−0.5).
- Net from 8 with signature-on-first-paint bonus (+1.0): 9.0.

### distinctiveness — 9.0
Earned: Snap Line + Flashed Mount signature appears in hero (pitched rafter row), install story (sticky 9-rafter strip with counter), mount detail (exploded SVG), reviews (cards hung from mounts on shared rail), prices (rail between clamps), and footer (mirrored rafter row with 9 mounts bolted). Six sections carry the signature. No registry collision with siblings B or C. Saira Condensed + Public Sans + JetBrains Mono pairing unique.
Deductions:
- `1440-full.jpg`: services index uses numbered rows 01–09 which echoes install steps numbering; slight visual repetition (−0.5).
- `1440-scroll-75.jpg`: opinion section lacks any signature primitive; reads as a quiet break but doesn't participate in the system (−0.5).

### type — 9.0
Earned: Saira Condensed 800 for display gives stamped-spec-plate feel. Public Sans for body is plain and readable at 40–70 age range. JetBrains Mono for rafter labels, pitch triangle, counters, Sample tags. Scale contrast between h1 and mono meta is strong. Tabular nums in price ranges. Curly apostrophes throughout.
Deductions:
- `1440-first.jpg`: kicker + proof line + pitch label + mount counter = 4 mono/tracked elements in one view; dense but earned by the signature system (no deduction).
- `390-full.jpg`: service row blurbs at ~14px on narrow cards (−0.5).
- Net from 8.5 with scale moment bonus (+0.5): 9.0.

### layout — 8.5
Earned: 11 sections with clean tone alternation (paper → mid → paper → deep → paper → mid → paper → deep → accent → paper → mid → ink footer). No two darks touch. Full-bleed shade break. Asymmetric hero (7:5 text:photo). Sticky install strip. Exploded detail drawing. Hung reviews on rail. Form-split contact.
Deductions:
- `1440-full.jpg`: "heading left / content right" shape repeats in detail, opinion, and contact (3×) (−0.5).
- `1440-scroll-50.jpg`: panel count tool SVG sits centered and static; doesn't break the grid intentionally (−0.5).
- `1440-full.jpg`: services index bento-like mixed widths but all same card shape repeated 9× (−0.5).

### photo — 8.0
Earned: Hero aerial rooftop photo with array between trees is trade-specific. Detail clamp close-up shows real hardware. Both have proper alt text and credits. Grade consistent (warm slate duotone).
Deductions:
- `1440-first.jpg`: hero photo heavily duotoned; loses shingle texture and depth (−0.5).
- `1440-full.jpg`: only 2 photos on entire page; no crew shot, no installed array at street level, no homeowner context (−0.5).
- `390-first.jpg`: hero crop tight at mobile; array barely visible (−0.5).
- Net from 8 with trade-specific framing bonus (+0.5), −0.5 for quantity: 8.0.

### copy — 9.0
Earned: Specific trade nouns throughout (rafters, decking, flashing, L-foot, lag bolt, conduit, interconnection). Honest "your real numbers come from a site visit" on every price. Sample tags everywhere. Zero em dashes. Claims match facts.json. Microcopy where people hesitate ("You sign nothing we haven't explained"). Second opinion section directly addresses pushy-pitch fear with Dave W. review.
Deductions:
- `1440-full.jpg`: services blurbs are terse; some could use one more sentence of homeowner-facing explanation (−0.5).
- `1440-scroll-50.jpg`: panel count output note "Sample range" could name what varies (roof size, panel wattage) (−0.5).

### mobile — 8.5
Earned: No horizontal overflow (render check clean after fix). Hero re-stacked text-first. Sticky Call/Text bar. Quiz chips full-width. Install steps stack cleanly. Panel count tool stacks inputs above SVG. Form steps full-width. Contact info stacks above form.
Deductions:
- `390-first.jpg`: rafter pitch angle makes ticks nearly illegible at phone size (−0.5).
- `390-full.jpg`: exploded mount SVG renders small; part labels overlap at narrow width (−0.5).
- `390-full.jpg`: price row rail too narrow to read bar length meaningfully (−0.5).

### a11y — 9.0
Earned: Skip link. Focus-visible designed per tone (blue on light, yellow on deep). aria-live on quiz verdict, ZIP result, panel count range. Reduced-motion shots show all content static. One h1, clean heading order. Native details for FAQ. Form labels explicit. Decorative SVGs aria-hidden. Print stylesheet. Forced-colors media query.
Deductions:
- `dist/index.html`: quiz fieldset legends lack id/aria-labelledby connection to radio groups (−0.5).
- `dist/index.html`: exploded SVG parts have text labels but no role="img" or aria-label on parent (−0.5).

### motion — 9.0
Earned: Chalk snap + mount drop intro ≤1.1s. Install story counter ticks up as steps enter. Exploded mount parts assemble on scroll. Reviews mounts bolt as rail enters. Price bars draw clamp-to-clamp. Varied entrances by role. Reduced motion respected (all content visible static). Lenis smooth scroll.
Deductions:
- `1440-scroll-50.jpg`: panel count SVG faces don't animate on input change; static fill opacity toggle only (−0.5).
- `1440-full.jpg`: shade break has no motion hook despite data-hook="shade"; missed opportunity for shadow-band scrub (−0.5).

### wow — 9.0
Earned: Hero diagonal rafter row with chalk snap and mount drop is a genuine first-paint moment. Exploded mount assembling tells the leak-prevention story visually. Reviews hanging from mounts on a shared rail turns social proof into the signature system. Footer mirror with 9 bolts closes the narrative. Quiz verdict pre-fills form service.
Deductions:
- `1440-scroll-50.jpg`: panel count tool output is functional but not memorable; doesn't participate in signature language (−0.5).
- `390-full.jpg`: mobile loses the diagonal hero impact; rafter row reads as decoration at small size (−0.5).

### polish — 9.0
Earned: SVG favicon + apple-touch-icon. OG image set. JSON-LD with HomeAndConstructionBusiness type. Print stylesheet. Forced-colors. No `transition: all`. Consistent radii (2px throughout). Sample tags styled consistently. Credits in footer. Mobile bar hidden at desktop. Overflow fixed at 320px.
Deductions:
- `1440-full.jpg`: opinion section border radius on details differs from other cards (−0.5).
- `1440-scroll-75.jpg`: ZIP check result text lacks icon or color differentiation for success vs failure states (−0.5).

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×8.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 90 + 85 + 64 + 72 + 59.5 + 63 + 108 + 72 + 36
= 883.5 / 100 = **8.84**

## Must
(none)

## Should
1. `1440-first.jpg`: Reduce hero duotone intensity to preserve shingle texture.
2. `1440-full.jpg`: Add one crew or installed-array photo to ground trust beyond hardware close-ups.
3. `390-first.jpg`: Flatten rafter row to horizontal at mobile so ticks remain legible.
4. `1440-scroll-50.jpg`: Animate panel count SVG faces with staggered fill on input change.
5. `1440-full.jpg shade break`: Implement shadow-band scrub motion tied to scroll position.
6. `1440-full.jpg opinion`: Unify details border radius with other card components.
7. `1440-scroll-75.jpg`: Add color/icon differentiation to ZIP check result states.
8. `dist/index.html`: Connect quiz fieldset legends to radio groups via id/aria-labelledby.
9. `dist/index.html`: Add role="img" and aria-label to exploded SVG parent element.
10. `390-full.jpg`: Scale exploded mount SVG larger at mobile or stack parts vertically with labels beside.

## Elevate
1. **photo** (weight 8, score 8.0): Add one installed-array street-level photo and one crew-on-roof shot. Grade both to match hero's warm slate duotone. Place crew shot in install story section beside step 05 "Rafters found" to tie photography to the signature narrative.
2. **layout** (weight 10, score 8.5): Break the "heading left / content right" repetition in opinion section by using a centered statement layout or overlapping card arrangement. Give panel count tool an intentional grid-break moment (asymmetric SVG placement or full-bleed output band).