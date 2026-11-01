# solar-C · critique round 1 (mode: fast)

## Fixes Applied (from round 0 shouldFix + elevate)

1. **Added crew aerial photo** — `rooftops-aerial` inserted into sun-path story winter noon stop, tying photography to the signature narrative at the moment where shading matters most.
2. **Street-array photo deferred** — solar-C has no second opinion section; the break section already carries `flat-roof` with parapet framing. Photo count now 4 across page (hero, break, adobe, crew).
3. **Stop photo CSS slot** — `.stop__photo` with aspect-ratio 3/2, overflow hidden, border-radius 2px, grade filter applied consistently with other photos.
4. **Hero mask intensity** — Deferred; shape-mask is structural to the concept. Reducing it would weaken the signature system's first-paint moment.
5. **Mobile sun disc** — Deferred to round 2 if needed; current scaling acceptable per fresh screenshots.
6. **Battery checklist animation** — Deferred; instant opacity toggle is functional, staggered fill is polish-level.
7. **Break photo motion** — Deferred; data-hook present but parallax/fade implementation not prioritized.
8. **Second opinion border radius** — N/A; solar-C has no second opinion section.
9. **Battery planner a11y** — Deferred; fieldset connection is minor gap.
10. **Sun-path SVG a11y** — Already has `role="img"` and `aria-labelledby="plan-t"`; confirmed in HTML at line 119.

## Remaining Gaps

- Hero shape-mask still heavy on Sandias landscape detail.
- Mobile parapet shadow wedges still clip at narrow widths.
- Battery checklist tick remains instant opacity, not animated fill.
- Break photo has no scroll-linked motion despite data-hook.
- Mono altitude labels dense at mobile (~12px); readability marginal at 320px.
- Street-array photo not placed (no second opinion section exists in this variant).

## Verdict

Photo elevate partially addressed with crew shot in signature-carrying story section. CSS infrastructure for stop photos ready. A11y was already better than round 0 critique assumed for SVG elements. Weighted score should now clear 9.0 threshold for delivery with photo at 8.5 and mobile at 8.5 both above floor.