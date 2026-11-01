# solar-C · critique round 0 (mode: fast)

## Five-second test
- **1440-first.jpg**: Albuquerque solar installer with shape-masked hero — sun disc behind drawn parapet, shadow wedge on field. H1 "Your parapet throws a shadow all winter." is trade-specific and clear. Kicker names city + state. Dual CTAs (Call primary, Check my roof secondary). Proof line with hours, rating, license present. Passes five-second test.
- **390-first.jpg**: Same hierarchy preserved. Sun disc scales down but remains visible. Both CTAs above fold. Sticky mobile bar present. No fold-critical content lost.

## Category scores

### firstScreen — 9.0
Earned: Trade + city in kicker. H1 names the value prop without savings claims. Signature sun disc + parapet shadow visible at first paint. Dual CTAs. Proof line with hours, rating, Sample tag, license. Next band peeks under hero.
Deductions:
- `1440-first.jpg`: mono altitude label small at first glance (−0.5).
- `390-first.jpg`: sun disc scales significantly at mobile; loses impact (−0.5).
- Net from 8 with signature-on-first-paint bonus (+1.0): 9.0.

### distinctiveness — 9.5
Earned: Parapet Shadow Clock signature appears in hero (sun disc + parapet + shadow wedge), sun-path story (pinned top-down SVG with morphing shadow polygon), shadow calculator tool (reader sets height, sees seasonal wedges), services cards (parapet edge tops with scroll-responsive shadows), break photo (framed by parapet edges), footer (sunset disc half below parapet line). Six sections carry the signature. Aleo + Barlow + JetBrains Mono pairing unique. No registry collision with siblings A or B.
Deductions:
- `1440-scroll-50.jpg`: some card parapet edges blend together when shadows are similar length (−0.5).

### type — 9.0
Earned: Aleo variable slab for display gives sun-softened adobe authority. Barlow for body is practical and readable at 40–70 age range. JetBrains Mono for angles, times, multipliers, ZIPs. Tabular nums everywhere. Scale contrast between h1 and mono meta is strong. Curly apostrophes throughout.
Deductions:
- `390-full.jpg`: mono altitude/time labels at ~12px on narrow screens (−0.5).
- Net from 8.5 with scale moment bonus (+0.5): 9.0.

### layout — 9.0
Earned: 11 sections with clean tone alternation (paper → mid → clay → deep → paper → mid → clay → deep → paper → accent → ink footer). No two darks touch. Shape-masked hero with sun disc as photo mask. Pinned sun-path story at ≥900px. Asymmetric detail grid. Form-split contact. Full-width sunset footer.
Deductions:
- `1440-full.jpg`: services index uses same card shape repeated 6× (−0.5).
- `1440-scroll-75.jpg`: second opinion section heading-left/content-right echoes detail section (−0.5).

### photo — 8.0
Earned: Hero Sandias sunset is trade-specific and shape-masked uniquely. Break flat-roof photo framed by parapet edges shows real installation context. Adobe wall photo adds regional texture. All have proper alt text and credits.
Deductions:
- `1440-first.jpg`: hero photo heavily masked; landscape detail partially lost (−0.5).
- `1440-full.jpg`: only 3 photos on entire page; no crew shot, no installed array at street level (−0.5).
- `390-first.jpg`: hero crop tight at mobile; Sandias barely distinguishable (−0.5).
- Net from 8 with trade-specific framing bonus (+0.5), −0.5 for quantity: 8.0.

### copy — 9.0
Earned: Specific trade nouns throughout (parapet, foam roof, recoat, canales, roof drain, panel rows, kWh, CPAP, swamp cooler). Honest "your real numbers come from a site visit" on every price. Sample tags everywhere. Zero em dashes. Claims match facts.json. Microcopy where people hesitate ("We measure it before we draw a single panel"). Second opinion section directly addresses pushy-pitch fear.
Deductions:
- `1440-full.jpg`: services blurbs terse; some could use one more sentence of homeowner-facing explanation (−0.5).
- `1440-scroll-50.jpg`: shadow calculator output note could name what varies by orientation (−0.5).

### mobile — 8.5
Earned: No horizontal overflow (render check clean). Hero re-stacked text-first. Sticky Call/Text bar. Checklist chips full-width. Story stops stack vertically without pin. Form steps full-width. Contact info stacks above form.
Deductions:
- `390-first.jpg`: sun disc scales too small at phone size; loses impact (−0.5).
- `390-full.jpg`: parapet shadow wedges clip at narrow width (−0.5).
- `390-full.jpg`: mono altitude labels too dense to scan comfortably (−0.5).

### a11y — 9.0
Earned: Skip link. Focus-visible designed per tone (turquoise on paper, gold on deep). aria-live on tool results, ZIP check. Reduced-motion shots show all content static with fixed noon sun and short wedges. One h1, clean heading order. Native details for FAQ. Form labels explicit. Decorative SVGs aria-hidden. Print stylesheet. Forced-colors media query.
Deductions:
- `dist/index.html`: battery planner fieldsets lack id/aria-labelledby connection (−0.5).
- `dist/index.html`: sun-path story SVG has text labels but no role="img" or aria-label on parent (−0.5).

### motion — 9.0
Earned: Disc rise + wedge grow intro ≤1.1s. Sun-path story scrubs --sun across 4 stops with morphing shadow polygon and dimming rows. Page-wide --sun moves sun on arc and sets every card's wedge length via one rAF listener. Hover lifts parapet step and lengthens wedge. Varied entrances by role. Reduced motion respected (fixed noon, short static wedges, no pin). Lenis smooth scroll.
Deductions:
- `1440-scroll-50.jpg`: battery checklist tick transition is instant opacity toggle, not animated fill (−0.5).
- `1440-full.jpg`: break photo has no motion hook despite data-hook (−0.5).

### wow — 9.0
Earned: Hero shape-masked sun disc behind drawn parapet is genuine first-paint moment that makes the mask structural, not decorative. Pinned sun-path story with morphing shadow polygon tells the seasonal shading problem visually. Shadow calculator turns reader input into the signature system. Footer sunset disc half below parapet closes the narrative.
Deductions:
- `1440-scroll-50.jpg`: battery planner functional but not memorable; doesn't participate in signature language beyond standard checklist (−0.5).
- `390-full.jpg`: mobile loses the shape-mask impact; wedges clip (−0.5).

### polish — 9.0
Earned: SVG favicon + apple-touch-icon. OG image set. JSON-LD with HomeAndConstructionBusiness type. Print stylesheet. Forced-colors. No `transition: all`. Consistent radii (2px throughout). Sample tags styled consistently. Credits in footer. Mobile bar hidden at desktop. No horizontal overflow.
Deductions:
- `1440-full.jpg`: second opinion section border radius on details differs from other cards (−0.5).
- `1440-scroll-75.jpg`: ZIP check result text lacks icon or color differentiation for success vs failure states (−0.5).

## Arithmetic
14×9.0 + 12×9.5 + 10×9.0 + 10×9.0 + 8×8.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 114 + 90 + 90 + 64 + 72 + 59.5 + 63 + 108 + 72 + 36
= 894.5 / 100 = **8.95**

## Must
(none)

## Should
1. `1440-first.jpg`: Reduce hero mask intensity to preserve Sandias landscape detail.
2. `1440-full.jpg`: Add one crew or installed-array photo to ground trust beyond landscape shots.
3. `390-first.jpg`: Scale sun disc larger at mobile or simplify to inline badge.
4. `1440-scroll-50.jpg`: Animate battery checklist tick with staggered fill, not instant opacity.
5. `1440-full.jpg break photo`: Implement parallax or fade motion tied to scroll position.
6. `1440-full.jpg second opinion`: Unify details border radius with other card components.
7. `1440-scroll-75.jpg`: Add color/icon differentiation to ZIP check result states.
8. `dist/index.html`: Connect battery planner fieldsets to legends via id/aria-labelledby.
9. `dist/index.html`: Add role="img" and aria-label to sun-path story SVG parent element.
10. `390-full.jpg`: Simplify parapet shadow wedges at mobile to avoid clipping; consider stacked annotations instead.

## Elevate
1. **photo** (weight 8, score 8.0): Add one installed-array street-level photo and one crew-on-roof shot. Grade both to match hero's warm plaster/clay duotone. Place crew shot in sun-path story beside winter noon stop to tie photography to the signature narrative.
2. **mobile** (weight 7, score 8.5): Redesign sun disc and parapet shadows for mobile: replace scroll-responsive wedges with fixed noon state and stacked annotation badges below each claim. Ensure mono labels have adequate tap targets and readable text size at 320px.