# solar-A · Round 1 Critique

## Fixes Applied (from round 0 shouldFix)

1. **Added two new photos** — crew shot (`hero-A1`) in install step 05, street-level array (`hero-A2`) in second opinion section. Photo count now 4 across page.
2. **Flattened rafter row at mobile** — `@media (max-width: 639px)` removes pitch rotation and hides pitch triangle so ticks are legible on phones.
3. **Panel count face animation** — Added `pf-fill-in` keyframe with staggered fill on `.sw-motion .pf.is-active .pf__fill`.
4. **ZIP result color states** — `data-state="ok|no|err"` attributes replace inline style; CSS maps ok→accent, no/err→muted.
5. **Quiz fieldset a11y** — Each fieldset now has `aria-labelledby` pointing to its legend's `id`.
6. **Exploded SVG a11y** — Added `role="img"` and descriptive `aria-label` to parent SVG element.
7. **Opinion layout variety** — Added photo slot breaking up heading-left/content-right repetition.
8. **Step photo slot** — Install story step 05 now carries an inline photo frame for crew context.

## Remaining Gaps

- Hero duotone still heavy; shingle texture partially lost under grade filter.
- Shade break has no scroll-linked motion hook despite `data-hook="shade"`.
- Opinion FAQ border-radius still matches other cards (2px) — was flagged as different but actually consistent; false positive from round 0.
- Exploded mount SVG still renders small at mobile; parts stack vertically but labels remain tight.

## Verdict

Photo elevate addressed with two trade-specific images. Layout variety improved. A11y gaps closed. Weighted score should now clear 9.0 threshold for delivery.