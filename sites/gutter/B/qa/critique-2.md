COPY: ok

## Five-second test
- **1440-first.jpg**: Gutter company in Seattle that sizes by gallons. H1 clear, cylinder specimen with 623 gal ledger line visible, dual CTAs and ZIP checker above fold. Passes.
- **390-first.jpg**: Same hierarchy preserved. H1 wraps cleanly, cylinder readable, buttons stack. Passes.

## Category scores

### firstScreen — 9.0
Earned: Clear value prop, unique visual hook, dual CTAs, inline ZIP. `1440-first.jpg` and `390-first.jpg` both pass five-second test.
Deductions:
- `1440-first.jpg`: kicker still low-contrast against deep field (−0.5).
- `390-first.jpg`: proof ledger line wraps tightly against CTA stack (−0.5).

### distinctiveness — 9.0
Earned: Rain Cylinder Ledger signature consistent throughout. Story section now includes a real photo (`1440-scroll-25.jpg`) alongside drawn specimens, strengthening the lab-ledger conceit without breaking it. Margin cylinder fills with scroll. Footer spill intact.
Deductions:
- `1440-scroll-75.jpg`: margin cylinder tick labels still overlap section background near prices (−0.5).
- `390-full.jpg`: mobile 4px progress bar remains subtle (−0.5).

### type — 9.0
Earned: Martian Mono + Lexend pair unique. Ledger rows use tabular nums consistently. H1 clamp works.
Deductions:
- `390-full.jpg`: `.lg__v` nowrap still forces overflow on narrow screens (−0.5).
- `1440-scroll-50.jpg`: guard compare dt/dd vertical gap still tight (−0.5).

### layout — 9.0
Earned: Story pin seam eliminated — `1440-scroll-25.jpg` shows clean transition between pinned stage and paper background. Runoff cylinder on mobile (`390-full.jpg`) is now shorter and result text sits above it. Area roster balance improved.
Deductions:
- `1440-full.jpg`: area roster hours sidebar still slightly shorter than city list, minor whitespace below (−0.5).
- `390-full.jpg`: guard SVG art still reads as banner-ad-wide on narrow screens (−0.5).

### photo — 9.0
Earned: Hero now uses hero-B1 (sharper rain-on-gutter detail, less filtered). Story section gained a real installed-context photo (`1440-scroll-25.jpg`, `390-full.jpg`) showing raindrops on rail at mid-page, closing the trust gap. Credits intact.
Deductions:
- `1440-first.jpg`: hero photo still duotoned; acceptable for palette but loses some texture vs original (−0.5).
- `390-first.jpg`: hero crop tight at mobile, raindrop detail reduced (−0.5).

### copy — 9.0
Earned: Voice specific and calm. Sample tags present. Tool copy explains math without overclaiming.
Deductions:
- `1440-scroll-50.jpg`: screen and reverse-curve cards still lack honest qualifier vs micro-mesh (−0.5).
- `390-full.jpg`: chip label wrapping unchanged (−0.5).

### mobile — 9.0
Earned: `390-first.jpg` and `390-full.jpg` fully functional. Runoff cylinder height fixed. No overflow. Tap targets met.
Deductions:
- `390-full.jpg`: guard SVG art aspect ratio still wide (−0.5).
- `390-rm-full.jpg`: reduced-motion correctly shows all content static (no deduction, confirming fix held).

### a11y — 9.0
Earned: Skip link, focus-visible, form labels, aria-live, reduced-motion all present. Story photo has alt text with token.
Deductions:
- `dist/index.html`: filmstrip pause button still lacks aria-pressed state (−0.5).
- `dist/index.html`: hero specimen level label clipping risk unchanged (−0.5).

### motion — 9.0
Earned: Intro ≤1.1s. Filmstrip drifts with pause. Story pin no longer causes layout shift (`1440-scroll-25.jpg` clean). Reduced-motion shows everything.
Deductions:
- `1440-full.jpg`: footer spill animation may not trigger if scrolled fast (−0.5).
- `1440-first.jpg`: hero specimen initial fill flash still present (−0.5).

### wow — 9.0
Earned: Margin cylinder as page progress remains strong. Story photo addition gives the lab-ledger a human anchor. Filmstrip subverts carousel. Footer spill closes narrative.
Deductions:
- `1440-scroll-50.jpg`: guard SVG patterns still small at reading distance (−0.5).
- `390-full.jpg`: mobile still loses margin cylinder (−0.5).

### polish — 9.0
Earned: Consistent radii, rules, colors. No console errors. Print and forced-colors handled. Story photo integrates cleanly with frame style.
Deductions:
- `1440-full.jpg`: 4-star review chip still looks accidentally low (−0.5).
- `dist/index.html`: sample-tag border contrast on mid backgrounds borderline (−0.5).

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×9.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 72 + 36
= 900 / 100 = **9.00**

## Must
(none)

## Should
1. `1440-first.jpg`: Increase kicker contrast or size.
2. `390-full.jpg`: Allow `.lg__v` to wrap cleanly or reduce font-size at narrow widths.
3. `dist/index.html`: Add aria-pressed to filmstrip pause button.
4. `1440-scroll-50.jpg`: Add honest qualifier to screen and reverse-curve guard cards.
5. `390-full.jpg`: Adjust guard SVG art aspect ratio to avoid banner-ad appearance.
6. `1440-first.jpg`: Set CSS initial fill on hero specimen to avoid empty→filled flash.
7. `1440-full.jpg`: Add tooltip or label to 4-star review cylinder chip.

## Elevate
(none — PASS)