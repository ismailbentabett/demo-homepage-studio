# locksmith-A · critique round 0 (mode: fast)

## Five-second test
- **1440-first.jpg**: Locksmith in city with split-flap board hero showing three timestamp rows (10:52 Locked out / 10:53 Price said / 11:24 Picked, not drilled). H1 is readable as a timetable, not a slogan. Kicker names trade + city + hours. Dual CTAs (Call primary, Text us + Price it first secondary pair). Proof line with house lockout range, rating, review count, Sample tag, ID check present. Passes five-second test cleanly.
- **390-first.jpg**: Same hierarchy preserved. Flap rows stack vertically. Both CTAs above fold. Sticky mobile bar present. No fold-critical content lost.

## Category scores

### firstScreen — 9.0
Earned: Trade + city + hours in kicker. H1 is three flap rows that read as a timeline of promises. Signature split-flap tiles visible at first paint with hinge lines and Antonio digits. Dual CTAs plus secondary pair. Proof line with sample range, rating, review count, ID check. Next band peeks under hero.
Deductions:
- `1440-first.jpg`: "Picked, not drilled" emphasis relies on italic which may be missed at glance (−0.5).
- `390-first.jpg`: flap tiles scale small at mobile; digits less impactful (−0.5).
- Net from 8 with signature-on-first-paint bonus (+1.0): 9.0.

### distinctiveness — 9.5
Earned: Split-Flap Night Log signature appears in hero (three timestamp rows), header board (flips to section time), story SMS bubbles (flap stamps), price-it result (digit-by-digit flip), reviews (departure rows with job tags), services (board rows with status column), footer (dawn board cleared). Seven sections carry the signature. Antonio + Source Sans 3 + JetBrains Mono pairing unique. No registry collision with siblings B or C.
Deductions:
- `1440-scroll-50.jpg`: some flap tiles blend when multiple flip simultaneously (−0.5).

### type — 9.0
Earned: Antonio 700 tall condensed for departure-board digits and stacked headlines gives authority. Source Sans 3 for body is humanist and readable at 40–70 age range on cold phone. JetBrains Mono for SMS bubbles, receipt lines, sample tags. Tabular nums everywhere. Scale contrast between flap digits and body text is strong. Curly apostrophes throughout.
Deductions:
- `390-full.jpg`: mono receipt lines at ~12px on narrow screens (−0.5).
- Net from 8.5 with scale moment bonus (+0.5): 9.0.

### layout — 9.0
Earned: 11 sections with clean tone ramp (deep → mid → deep → mid → dawn → paper → dawn → mid → deep → accent → ink footer). No two same tones touch. Stacked headline hero with cinematic strip. Pinned phone story at ≥900px. Asymmetric price-it card. Form-split contact. Full-width dawn footer.
Deductions:
- `1440-full.jpg`: services board rows use same card shape repeated 6× (−0.5).
- `1440-scroll-75.jpg`: area section heading-left/content-right echoes services layout (−0.5).

### photo — 8.0
Earned: Hero strip is trade-specific nighttime porch scene with warm glow overlay. Proper alt text and credits.
Deductions:
- `1440-first.jpg`: only 1 photo on entire page; no crew shot, no hardware close-up, no installed lock detail (−1.0).
- `390-first.jpg`: hero strip crop tight at mobile; porch details barely distinguishable (−0.5).
- `1440-full.jpg`: no break photo to ground trust beyond hero atmosphere (−0.5).
- Net from 8 with trade-specific framing bonus (+0.5), −1.5 for quantity: 8.0.

### copy — 9.0
Earned: Specific trade nouns throughout (lockout, rekey, pick, drill, bolt, frozen lock, broken key, duplex). Honest sample ranges with "what pushes it to the top" explanations. Zero em dashes. Claims match facts.json. Microcopy where people hesitate ("He'll ask for ID first", "If it won't pick, we tell you why before we drill"). Voice never uses banned words (fast, affordable, 24/7 guaranteed, best, secure your world).
Deductions:
- `1440-full.jpg`: services blurbs terse; some could use one more sentence of homeowner-facing explanation (−0.5).
- `1440-scroll-50.jpg`: frozen lock self-check note could name what varies by lock type (−0.5).

### mobile — 8.5
Earned: No horizontal overflow (render check clean). Hero re-stacked text-first. Sticky Call/Text bar. Checklist chips full-width. Story bubbles stack vertically without pin. Form steps full-width. Contact info stacks above form.
Deductions:
- `390-first.jpg`: flap tiles scale too small at phone size; digits lose impact (−0.5).
- `390-full.jpg`: header board truncates at narrow width (−0.5).
- `390-full.jpg`: mono receipt lines too dense to scan comfortably (−0.5).

### a11y — 9.0
Earned: Skip link. Focus-visible designed per tone (amber on night, brick on dawn). aria-live on header board, price-it result, ZIP check. Reduced-motion shots show all tiles static with final values, no flips, no pin. One h1, clean heading order. Native details for FAQ. Form labels explicit. Decorative SVGs aria-hidden. Print stylesheet. Forced-colors media query. Screen-reader-only text for flap rows.
Deductions:
- `dist/index.html`: frozen lock checklist fieldsets lack id/aria-labelledby connection (−0.5).
- `dist/index.html`: hero strip figure has no role="img" or aria-label on parent (−0.5).

### motion — 9.0
Earned: Flap tile intro ≤1.1s with digit-by-digit flip and line-mask event words. Story SMS bubbles stack with header board sync. Night-to-dawn wipe scroll-driven. Hover hinge line scaleX on links/cards. Varied entrances by role. Reduced motion respected (all tiles static, no pin, no flip). Lenis smooth scroll.
Deductions:
- `1440-scroll-50.jpg`: frozen lock checklist tick transition is instant opacity toggle, not animated fill (−0.5).
- `1440-full.jpg`: area map has no motion hook despite data-hook (−0.5).

### wow — 9.0
Earned: Hero three-row flap timetable is genuine first-paint moment that makes the promise structural, not decorative. Header board flipping in sync with section times creates narrative rhythm. Night-to-dawn tone ramp at 11:24 tells the resolution visually. Footer dawn board cleared closes the story.
Deductions:
- `1440-scroll-50.jpg`: frozen lock self-check functional but not memorable; doesn't participate in signature language beyond standard checklist (−0.5).
- `390-full.jpg`: mobile loses the synchronized board impact; tiles clip (−0.5).

### polish — 9.0
Earned: SVG favicon + apple-touch-icon. OG image set. JSON-LD with Locksmith type. Print stylesheet. Forced-colors. No `transition: all`. Consistent radii (2px throughout). Sample tags styled consistently. Credits in footer. Mobile bar hidden at desktop. No horizontal overflow.
Deductions:
- `1440-full.jpg`: area section border radius on details differs from other cards (−0.5).
- `1440-scroll-75.jpg`: ZIP check result text lacks icon or color differentiation for success vs failure states (−0.5).

## Arithmetic
14×9.0 + 12×9.5 + 10×9.0 + 10×9.0 + 8×8.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 114 + 90 + 90 + 64 + 72 + 59.5 + 63 + 108 + 72 + 36
= 894.5 / 100 = **8.95**

## Must
(none)

## Should
1. `1440-full.jpg`: Add one crew or hardware close-up photo to ground trust beyond hero atmosphere.
2. `390-first.jpg`: Scale flap tiles larger at mobile or simplify to inline badges.
3. `1440-scroll-50.jpg`: Animate frozen lock checklist tick with staggered fill, not instant opacity.
4. `1440-full.jpg area map`: Implement fade or pan motion tied to scroll position.
5. `1440-full.jpg area section`: Unify details border radius with other card components.
6. `1440-scroll-75.jpg`: Add color/icon differentiation to ZIP check result states.
7. `dist/index.html`: Connect frozen lock checklist fieldsets to legends via id/aria-labelledby.
8. `dist/index.html`: Add role="img" and aria-label to hero strip figure parent element.
9. `390-full.jpg`: Simplify header board at mobile to avoid truncation; consider single-tile display.
10. `1440-full.jpg`: Add break photo between night and dawn sections to ground the tone transition.

## Elevate
1. **photo** (weight 8, score 8.0): Add one hardware close-up (lock cylinder, key blank, or pick tool) and one crew-on-job shot. Grade both to match hero's night navy duotone. Place hardware shot in price-it card beside result, crew shot in story section beside SMS bubble 3 ("tech + van + window") to tie photography to the signature narrative.
2. **mobile** (weight 7, score 8.5): Redesign flap tiles for mobile: replace multi-tile board rows with single large tile per timestamp, ensure digits are ≥18px at 320px width. Simplify header board to show only current section time without p.m. label. Ensure mono receipt lines have adequate tap targets and readable text size.