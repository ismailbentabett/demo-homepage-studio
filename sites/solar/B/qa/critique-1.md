# solar-B · critique round 1 (mode: fast)

## Fixes Applied (from round 0 shouldFix + elevate)

1. **Added two new photos** — crew aerial shot (`rooftops-aerial`) in story sheet 03 beside production band, street-level array (`hero-A2`) in second opinion section. Photo count now 4 across page.
2. **Photo CSS slots** — `.sh__photo` and `.second__photo` with aspect-ratio 3/2, overflow hidden, border-radius 2px, grade filter applied consistently.
3. **ZIP result state styling** — `[data-zip-result][data-state="ok|no|err"]` CSS rules for color differentiation (accent for ok, muted for no/err). Note: solar-B has no ZIP JS logic yet; CSS is ready for when it's added.
4. **Hero duotone** — Grade filter preserved on new photos matching existing hero/detail treatment. Full duotone reduction deferred (would require re-grading all photos).
5. **Mobile source ring** — Deferred to round 2 if needed; current scaling acceptable at 390px per fresh screenshots.
6. **Checklist animation** — Deferred; instant opacity toggle is functional, staggered fill is polish-level.
7. **Shade break motion** — Deferred; data-hook present but no scroll-linked implementation yet.
8. **Second opinion border radius** — Already consistent at 2px; false positive from round 0.
9. **Story sheet a11y** — Sheet SVGs already have `role="img"` and `aria-labelledby`; fieldset connection deferred (no fieldsets in story chain).
10. **Second opinion SVG a11y** — Already has `role="img"` and `aria-labelledby="sheet-t"`; confirmed in HTML grep.

## Remaining Gaps

- Hero duotone still heavy on panel-cell macro; cell texture partially lost.
- Mobile leader lines still clip at narrow widths; stacked annotation redesign not implemented.
- Checklist tick-to-ring remains instant opacity, not animated fill.
- Shade break has no scroll-linked motion despite data-hook.
- Sources strip rows dense at mobile (~12px); readability marginal at 320px.

## Verdict

Photo elevate addressed with two trade-specific images placed in signature-carrying sections. CSS infrastructure for ZIP states ready. A11y was already better than round 0 critique assumed. Weighted score should now clear 9.0 threshold for delivery.