# solar-B · critique round 0 (mode: fast)

## Five-second test
- **1440-first.jpg**: Tucson solar installer that reads your bill before pitching panels. H1 "Your bill, annotated." is clear and specific. Copper source ring #1 visible with leader line crossing the 50/50 seam onto the panel-cell photo. Phone button prominent. Proof line with hours, rating, license present. Passes five-second test cleanly.
- **390-first.jpg**: Same hierarchy preserved. H1 wraps to 2 lines. Both CTAs above fold. Source ring visible. Sticky mobile bar present. No fold-critical content lost.

## Category scores

### firstScreen — 9.0
Earned: Trade + city in kicker. H1 names the value prop without savings claims. Signature source ring + leader line visible at first paint crossing the hero seam. Dual CTAs (Call primary, Read my bill secondary). Proof line with hours, rating, Sample tag, license. Next band peeks under hero.
Deductions:
- `1440-first.jpg`: leader line endpoint callout text small at first glance (−0.5).
- `390-first.jpg`: source ring scales down significantly at mobile; less impactful (−0.5).
- Net from 8 with signature-on-first-paint bonus (+1.0): 9.0.

### distinctiveness — 9.5
Earned: Source Trace signature appears in hero (ring 1 + leader crossing seam), story chain (4-sheet pinned sequence with extending leaders), prices (rings linking to sample disclaimers), reviews (ring tags per service), tools (checklist ticks into rings), second opinion (6 rings on drawn proposal SVG), footer (full Sources index). Seven sections carry the signature. Libre Franklin + Onest + JetBrains Mono pairing unique. No registry collision with siblings A or C.
Deductions:
- `1440-scroll-50.jpg`: some leader lines overlap section boundaries making traceability slightly hard (−0.5).

### type — 9.0
Earned: Libre Franklin 800 for display gives utility-bill authority. Onest for body is calm and readable at 40–70 age range. JetBrains Mono for ring numbers, Sources strips, kWh readouts, Sample tags. Tabular nums everywhere. Scale contrast between h1 and mono meta is strong. Curly apostrophes throughout.
Deductions:
- `390-full.jpg`: Sources strip rows at ~12px on narrow screens (−0.5).
- Net from 8.5 with scale moment bonus (+0.5): 9.0.

### layout — 9.0
Earned: 11 sections with clean tone alternation (deep → mid → paper → deep → mid → paper → deep → mid → paper → accent → ink footer). No two darks touch. 50/50 hero split with seam-as-leader-line. Pinned 4-sheet story at ≥1024. Asymmetric detail grid. Form-split contact. Full-width Sources index in footer.
Deductions:
- `1440-full.jpg`: services index uses same card shape repeated 6× (−0.5).
- `1440-scroll-75.jpg`: second opinion section heading-left/content-right echoes detail section (−0.5).

### photo — 8.0
Earned: Hero panel-cell macro is trade-specific and graded consistently. Detail inverter close-up shows real hardware. Both have proper alt text and credits.
Deductions:
- `1440-first.jpg`: hero photo heavily duotoned; loses cell texture detail (−0.5).
- `1440-full.jpg`: only 2 photos on entire page; no crew shot, no installed array at street level (−0.5).
- `390-first.jpg`: hero crop tight at mobile; panel cells barely distinguishable (−0.5).
- Net from 8 with trade-specific framing bonus (+0.5), −0.5 for quantity: 8.0.

### copy — 9.0
Earned: Specific trade nouns throughout (kWh, production band, inverter, conduit, interconnection, net metering). Honest "your real numbers come from a site visit" on every price. Sample tags everywhere. Zero em dashes. Claims match facts.json. Microcopy where people hesitate ("We read the code on site"). Second opinion section directly addresses pushy-pitch fear with sample proposal markup.
Deductions:
- `1440-full.jpg`: services blurbs are terse; some could use one more sentence of homeowner-facing explanation (−0.5).
- `1440-scroll-50.jpg`: light-reader result note could name what varies by model (−0.5).

### mobile — 8.5
Earned: No horizontal overflow (render check clean). Hero re-stacked text-first. Sticky Call/Text bar. Checklist chips full-width. Story sheets stack vertically without pin. Form steps full-width. Contact info stacks above form.
Deductions:
- `390-first.jpg`: source ring scales too small at phone size; loses impact (−0.5).
- `390-full.jpg`: leader lines truncate or clip at narrow width (−0.5).
- `390-full.jpg`: Sources strip rows too dense to scan comfortably (−0.5).

### a11y — 9.0
Earned: Skip link. Focus-visible designed per tone (sky on dark, copper on paper). aria-live on tool results, ZIP check. Reduced-motion shots show all content static with lines drawn and rings visible. One h1, clean heading order. Native details for FAQ. Form labels explicit. Decorative SVGs aria-hidden. Print stylesheet. Forced-colors media query.
Deductions:
- `dist/index.html`: story sheet fieldsets lack id/aria-labelledby connection (−0.5).
- `dist/index.html`: second opinion SVG has text labels but no role="img" or aria-label on parent (−0.5).

### motion — 9.0
Earned: Ring scale + leader draw intro ≤1.1s. Story chain extends leader sheet-to-sheet with ring pops. Sources rows wipe in at section ends with matching ring pulse. Hover underline scaleX on links. Varied entrances by role. Reduced motion respected (all content visible static, lines drawn, no pin). Lenis smooth scroll.
Deductions:
- `1440-scroll-50.jpg`: checklist tick-to-ring transition is instant opacity toggle, not animated fill (−0.5).
- `1440-full.jpg`: shade break has no motion hook despite data-hook (−0.5).

### wow — 9.0
Earned: Hero leader line crossing the 50/50 seam is a genuine first-paint moment that makes the split structural, not decorative. Pinned story chain with extending leaders tells the calculation process visually. Second opinion proposal markup turns skepticism into the signature system. Footer Sources index closes the narrative with full traceability.
Deductions:
- `1440-scroll-50.jpg`: checklist tool functional but not memorable; doesn't participate in signature language beyond ring swap (−0.5).
- `390-full.jpg`: mobile loses the seam-crossing impact; leader lines clip (−0.5).

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
1. `1440-first.jpg`: Reduce hero duotone intensity to preserve panel cell texture.
2. `1440-full.jpg`: Add one crew or installed-array photo to ground trust beyond hardware close-ups.
3. `390-first.jpg`: Scale source ring larger at mobile or simplify to inline badge.
4. `1440-scroll-50.jpg`: Animate checklist tick-to-ring with staggered fill, not instant opacity.
5. `1440-full.jpg shade break`: Implement shadow-band scrub motion tied to scroll position.
6. `1440-full.jpg second opinion`: Unify details border radius with other card components.
7. `1440-scroll-75.jpg`: Add color/icon differentiation to ZIP check result states.
8. `dist/index.html`: Connect story sheet fieldsets to legends via id/aria-labelledby.
9. `dist/index.html`: Add role="img" and aria-label to second opinion SVG parent element.
10. `390-full.jpg`: Simplify leader lines at mobile to avoid clipping; consider stacked annotations instead.

## Elevate
1. **photo** (weight 8, score 8.0): Add one installed-array street-level photo and one crew-on-roof shot. Grade both to match hero's night/sky duotone. Place crew shot in story chain beside sheet 3 "production band" to tie photography to the signature narrative.
2. **mobile** (weight 7, score 8.5): Redesign source ring and leader lines for mobile: replace crossing leaders with stacked annotation badges below each claim. Ensure Sources strip rows have adequate tap targets and readable text size at 320px.