# locksmith-C · critique round 0 (mode: fast)

## Five-second test
- **1440-first.jpg**: Locksmith in Tacoma with hinged door wall hero — painted teal/oxblood/slate door panels with enamel word-plates (MOVE-IN, LOCKED OUT, RAIN, OLD BRASS, TURNOVER). H1 "Every door has a story." is clear but generic. Kicker names trade + city + hours. Dual CTAs (Call primary, Count my doors secondary). Proof row with range-said, tech-name text, ID check, rating + Sample tag present. Passes five-second test.
- **390-first.jpg**: Same hierarchy preserved. Door mosaic reflows to 2×4 grid. Both CTAs above fold. Sticky mobile bar present. No fold-critical content lost.

## Category scores

### firstScreen — 8.5
Earned: Trade + city + hours in kicker. Signature hinged door wall visible at first paint with word-plates and brass knob dots. Dual CTAs. Proof row with sample rating and three trust claims. Next band peeks under hero.
Deductions:
- `1440-first.jpg`: H1 "Every door has a story" is poetic but lacks a trade noun; doesn't name locksmithing directly (−0.5).
- `390-first.jpg`: door tiles scale small at mobile; word-plate text hard to read (−0.5).
- `1440-first.jpg`: only one photo tile in mosaic; rest are CSS-drawn panels (−0.5).
- Net from 8 with signature-on-first-paint bonus (+0.5): 8.5.

### distinctiveness — 9.5
Earned: Hinged Door Wall signature appears in hero (mosaic lock counter), services (8 tall doors opening on hinge), rain story (slate door with bolt/strike diagram), proof (door-back review panels with town plates), move-in checklist (door chips that close when ticked), footer (full-width back door). Six sections carry the signature. Roboto Slab + Public Sans + DM Mono pairing unique. No registry collision with siblings A or B.
Deductions:
- `1440-scroll-50.jpg`: some service doors blend when multiple are open simultaneously (−0.5).

### type — 9.0
Earned: Roboto Slab 700 caps for word-plates reads like stamped enamel house plates. Public Sans for body is civic and plain. DM Mono for prices, ZIPs, counter numbers with tabular figures. Scale contrast between plate caps and body text is strong. Curly apostrophes throughout.
Deductions:
- `390-full.jpg`: mono price numbers at ~12px on narrow screens (−0.5).
- Net from 8.5 with scale moment bonus (+0.5): 9.0.

### layout — 9.0
Earned: 11 sections with clean tone alternation (paper → mid → deep → paper → mid → accent → paper → deep → mid → paper → ink footer). No two same tones touch. Mosaic hero with lock counter. Pinned rain story at ≥900px. Horizontal snap-row services on mobile. Form-split contact. Full-width back-door footer.
Deductions:
- `1440-full.jpg`: proof review panels use same door-back shape repeated 6× (−0.5).
- `1440-scroll-75.jpg`: area section heading-left/content-right echoes services layout (−0.5).

### photo — 7.5
Earned: Hero mosaic includes one duotone teal porch photo tile. Arrival slot uses process-call photo. Proper alt text and credits.
Deductions:
- `1440-first.jpg`: only 2 photos on entire page; no crew shot, no hardware close-up, no installed lock detail (−1.5).
- `390-first.jpg`: hero photo tile scales tiny in mosaic; porch details barely distinguishable (−0.5).
- `1440-full.jpg`: no break photo to ground trust beyond hero atmosphere (−0.5).
- Net from 8 with trade-specific framing bonus (+0.5), −2.0 for quantity: 7.5.

### copy — 9.0
Earned: Specific trade nouns throughout (rekey, lockout, strike plate, bolt, swollen door, glass knob, keypad code, smart-lock codes). Honest sample ranges with "what pushes it to the top" explanations. Zero em dashes. Claims match facts.json. Microcopy where people hesitate ("He'll ask for ID first", "If it won't pick, we tell you why before we drill"). Voice never uses banned words.
Deductions:
- `1440-first.jpg`: H1 "Every door has a story" is poetic but vague; doesn't name the trade value prop (−0.5).
- `1440-full.jpg`: services blurbs terse; some could use one more sentence of homeowner-facing explanation (−0.5).

### mobile — 8.5
Earned: No horizontal overflow (render check clean). Hero mosaic reflows to 2×4 grid. Sticky Call/Text bar. Checklist chips full-width. Services become horizontal snap-row with pre-opened doors. Form steps full-width. Contact info stacks above form.
Deductions:
- `390-first.jpg`: door tiles and word-plates scale too small at phone size (−0.5).
- `390-full.jpg`: header open-hours text truncates at narrow width (−0.5).
- `390-full.jpg`: mono price numbers too dense to scan comfortably (−0.5).

### a11y — 9.0
Earned: Skip link. Focus-visible designed per tone (teal on paper, mustard on deep). aria-live on lock counter result, ZIP check. Reduced-motion shots show all doors in final state (services open, rain diagram static). One h1, clean heading order. Native details for FAQ. Form labels explicit. Decorative SVGs aria-hidden. Print stylesheet. Forced-colors media query. Screen-reader-only label for door wall group.
Deductions:
- `dist/index.html`: move-in checklist fieldsets lack id/aria-labelledby connection (−0.5).
- `dist/index.html`: rain story SVG diagram has text labels but no role="img" or aria-label on parent (−0.5).

### motion — 9.0
Earned: Hero doors swing from rotateY(-78deg)→0 on left hinge ≤1.1s with 60ms cascade. Rain story scrubs slab swell, bolt-gap, strike slide, bolt throw across 3 pinned stops. Service doors open one-by-one with 60ms stagger on scroll entry. Hover opens door 12deg on hinge. Varied entrances by role. Reduced motion respected (all doors shown in final state, no pin). Lenis smooth scroll.
Deductions:
- `1440-scroll-50.jpg`: move-in checklist tick transition is instant opacity toggle, not animated fill (−0.5).
- `1440-full.jpg`: area map has no motion hook despite data-hook (−0.5).

### wow — 9.0
Earned: Hero door-wall mosaic that IS the lock counter tool is genuine first-paint moment making the signature interactive, not decorative. Rain story door diagram tells the swollen-door problem visually as a mechanical sequence. Footer back-door closes the narrative with area list on panel moulds.
Deductions:
- `1440-scroll-50.jpg`: move-in checklist functional but not memorable; door-chip closing is subtle (−0.5).
- `390-full.jpg`: mobile loses the hinge-swing impact; doors pre-opened for readability (−0.5).

### polish — 9.0
Earned: SVG favicon + apple-touch-icon. OG image set. JSON-LD with Locksmith type. Print stylesheet. Forced-colors. No `transition: all`. Consistent radii (3px plates, 2px frames). Sample tags styled consistently. Credits in footer. Mobile bar hidden at desktop. No horizontal overflow.
Deductions:
- `1440-full.jpg`: area section border radius on details differs from other cards (−0.5).
- `1440-scroll-75.jpg`: ZIP check result text lacks icon or color differentiation for success vs failure states (−0.5).

## Arithmetic
14×8.5 + 12×9.5 + 10×9.0 + 10×9.0 + 8×7.5 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 119 + 114 + 90 + 90 + 60 + 72 + 59.5 + 63 + 108 + 72 + 36
= 883.5 / 100 = **8.84**

## Must
(none)

## Should
1. `1440-first.jpg`: Rewrite H1 to include a trade noun (e.g., "Every locked door has a price range.").
2. `1440-full.jpg`: Add one crew or hardware close-up photo to ground trust beyond CSS-drawn panels.
3. `390-first.jpg`: Scale door tiles larger at mobile or simplify word-plate text to single-word badges.
4. `1440-scroll-50.jpg`: Animate move-in checklist door-chip with fill sweep, not instant opacity.
5. `1440-full.jpg area map`: Implement fade or pan motion tied to scroll position.
6. `1440-full.jpg area section`: Unify details border radius with other card components.
7. `1440-scroll-75.jpg`: Add color/icon differentiation to ZIP check result states.
8. `dist/index.html`: Connect move-in checklist fieldsets to legends via id/aria-labelledby.
9. `dist/index.html`: Add role="img" and aria-label to rain story SVG diagram parent element.
10. `390-full.jpg`: Simplify header open-hours display at mobile to avoid truncation.

## Elevate
1. **photo** (weight 8, score 7.5): Add one hardware close-up (lock cylinder, key blank, or pick tool) and one crew-on-job shot. Grade both to match hero's teal/oxblood duotone. Place hardware shot in prices section beside sample range, crew shot in rain story beside the bolt diagram to tie photography to the signature narrative.
2. **firstScreen** (weight 14, score 8.5): Rewrite H1 to include a trade noun and the value proposition. Current "Every door has a story" is poetic but doesn't communicate locksmithing or pricing transparency at first glance. Consider "Every locked door has a price range" or "Your door, picked not drilled, priced on the phone."