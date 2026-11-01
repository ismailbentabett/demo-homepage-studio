COPY: ok

## Five-second test
- **1440-first.jpg**: A gutter company in Seattle that sizes gutters by gallons. The h1 "Seattle Gutters Sized by the Gallon" is clear; the cylinder specimen beside it shows 623 gal with a ledger line; two CTAs (Call / Price my roof) and a ZIP checker sit under the statement. I know what they do, where, and how to engage.
- **390-first.jpg**: Same hierarchy holds. H1 wraps cleanly, cylinder sits below the statement at a readable size, buttons stack without crowding. The ZIP row fits. No fold-critical content lost.

Passes the five-second test on both viewports.

## Category scores

### firstScreen — 9.0
Earned: Clear value prop ("sized by the gallon"), unique visual hook (cylinder specimen with fill + ledger), dual CTAs, inline ZIP. `1440-first.jpg` shows the whole package above the fold; `390-first.jpg` preserves it.
Deductions:
- `1440-first.jpg`: the kicker "Gallonworks Gutters · Seattle" sits small and low-contrast against the deep field; it reads late. −0.5.
- `390-first.jpg`: the proof ledger line ("1,000 sq ft × 1 in ······ 623 gal") wraps tightly and competes with the CTA stack; could use one fewer wrap or smaller type. −0.5.

### distinctiveness — 9.0
Earned: The Rain Cylinder Ledger signature is present and consistent: hero specimen, filmstrip of drawn cylinders, page-progress cylinder in the left margin at ≥1024px (`1440-scroll-25.jpg`, `1440-scroll-50.jpg`), mini-cylinder chips on reviews and prices, footer spill into rain barrel. Sibling check: gutter-A uses a different system; no collision. The filmstrip-as-lab-bench (drawn frames, one photo) breaks the carousel cliché.
Deductions:
- `1440-scroll-75.jpg`: the margin cylinder's tick labels are hard to read at scroll depth; the numeral overlaps the section background near the prices band. −0.5.
- `390-full.jpg`: the mobile substitute (4px yellow line under header) is subtle; visitors scrolling fast may miss the progress metaphor entirely. −0.5.

### type — 9.0
Earned: Martian Mono for display/numerals, Lexend for body — pair is unique in the library. H1 clamp works across viewports; ledger rows use tabular nums and dotted leaders consistently; kicker tracking and uppercase are disciplined. `1440-full.jpg` shows the system holding through every section.
Deductions:
- `390-full.jpg`: some ledger values ("$175–$650") wrap mid-numeral on narrow screens because `white-space: nowrap` on `.lg__v` forces overflow rather than a clean break; the dots leader disappears. −0.5.
- `1440-scroll-50.jpg`: the guard compare dl dt/dd pairs run close together; the mono label and text body need a touch more vertical gap for scanability. −0.5.

### layout — 8.5
Earned: Sections alternate tones (deep → paper → mid → deep → paper → ink → paper → deeper) with consistent padding rhythm. Grid systems (tools split, guards columns, prices table, reviews masonry, area roster, contact form) are distinct and appropriate.
Deductions:
- `1440-scroll-25.jpg`: the story section's pinned cylinder and the flowing text column have a visible seam where the pinned element's background meets the section bg; the transition isn't seamless. −0.5.
- `390-full.jpg`: the tools section stacks runoff and size check vertically but the cylinder in the runoff tool is very tall relative to the input fields; the visual weight pulls the eye away from the inputs. −0.5.
- `1440-full.jpg`: the area roster's city list and ZIP checker sit left-heavy; the hours/licence sidebar is shorter, leaving whitespace below it that feels unbalanced. −0.5.

### photo — 8.0
Earned: Hero photo (hero-B3, raindrops on rail) is duotoned to match the palette and appears only once in the visible filmstrip set. Credits are properly linked in the footer.
Deductions:
- `1440-first.jpg`: the hero photo is heavily filtered; detail is lost and it reads more as texture than as a scene. For a gutter company, showing an actual gutter/downspout in context would ground the promise faster. −1.0.
- `1440-full.jpg`: beyond the hero, the page relies entirely on drawn SVG specimens. This is on-brand for the concept but means there's zero photographic proof of installed work, crew, or before/after — a trust gap for homeowners. −0.5.
- `390-first.jpg`: the hero photo crops tight on the rail; at mobile size the raindrop texture becomes noise. −0.5.

### copy — 9.0
Earned: Voice is specific and calm ("One inch of rain on 1,000 square feet is about 623 gallons"). No "hassle-free", "lifetime", "experts". Every service blurb in facts.json carries through. Sample tags on pricing, reviews and licence. Tool copy explains the math without overclaiming.
Deductions:
- `1440-scroll-50.jpg`: the guard section's "what we fit under firs" tag on micro-mesh is good but the screen and reverse-curve cards lack an equivalent honest qualifier; they read slightly generic by comparison. −0.5.
- `390-full.jpg`: the form legend "What needs doing?" is friendly but the chip labels wrap awkwardly at narrow widths; "Gutter sizing and replacement" breaks across three lines. −0.5.

### mobile — 9.0
Earned: `390-first.jpg` and `390-full.jpg` show a fully functional page. Buttons meet tap targets. Filmstrip falls back to horizontal scroll with snap. Form steps stack. No horizontal overflow (`render.json` confirms 390 scrollWidth = 390).
Deductions:
- `390-full.jpg`: the runoff calculator's big cylinder takes ~40% of viewport height; users must scroll past it to reach the result text and CTA. Consider a smaller cylinder or reordering on mobile. −0.5.
- `390-rm-full.jpg`: reduced-motion still shows the page cylinder bar at top (4px); it's fine but the margin cylinder is correctly hidden. No deduction, just noting it works.
- `390-full.jpg`: the guard compare cards stack but the SVG art at top is wide and short; on narrow screens it looks like a banner ad. −0.5.

### a11y — 9.0
Earned: Skip link present. Focus-visible outlines use signal/deep colors with offset. Form labels, fieldsets, legends, aria-live on outputs, aria-labelledby on sections. Reduced-motion shows all content. Honeypot field hidden. Sample tags are semantic.
Deductions:
- `dist/index.html`: the filmstrip pause button has no aria-label describing its state (paused vs playing); screen readers get "Pause" but not the current state. −0.5.
- `dist/index.html`: the cylinder SVGs are aria-hidden but the ledger rows carry the meaning; however the hero specimen's level label ("623 gal") is inside an absolutely-positioned span that may be clipped by the tube's overflow at certain zoom levels. −0.5.

### motion — 9.0
Earned: Intro sequence (h1 mask rise, cylinder fill, count-up) is ≤1.1s per concept. Filmstrip drifts with pause on hover/focus/reduced-motion. Story pins and reveals use clip/scale. Hover fill-rise on buttons is consistent. Reduced-motion (`1440-rm-full.jpg`, `390-rm-full.jpg`) shows everything static and visible.
Deductions:
- `1440-scroll-25.jpg`: the story section's pinned cylinder animation triggers a layout shift as the pin engages; the text column jumps ~4px. Minor but visible. −0.5.
- `1440-full.jpg`: the footer spill SVG's path draw and barrel fill happen late in the scroll; if the visitor reaches the footer quickly the animation hasn't started yet and the barrel looks empty. −0.5.

### wow — 8.5
Earned: The cylinder-as-page-progress in the left margin is a genuine signature moment; the filmstrip of drawn specimens instead of photos subverts expectations; the footer spill into a rain barrel closes the narrative loop.
Deductions:
- `1440-first.jpg`: the hero specimen's fill animation is smooth but the initial state (empty cylinder) flashes briefly before the fill starts; a CSS-only initial fill would avoid the pop. −0.5.
- `1440-scroll-50.jpg`: the guard section's SVG patterns (grid, mesh, curve) are clever but small; at reading distance they're hard to distinguish from each other without the labels. −0.5.
- `390-full.jpg`: the mobile experience loses the margin cylinder entirely; the wow is desktop-centric. The 4px bar is too subtle to carry the same narrative weight. −0.5.

### polish — 9.0
Earned: Consistent border radii, rule weights, and color usage across tones. Selection color matches signal. Print styles hide nav/dialogs. Forced-colors borders on interactive elements. No console errors or render overflow.
Deductions:
- `1440-full.jpg`: the review cards' cylinder chips vary in fill height (4/5 vs 5/5) which is intentional for star mapping, but the 4-star card's chip looks accidentally low rather than deliberately rated; a label or tooltip would clarify. −0.5.
- `dist/index.html`: the `.sample-tag` border uses `currentColor` which on deep backgrounds renders in white and on paper in ink — correct, but on mid backgrounds the contrast is borderline (4.44:1 exactly). Not a fail but tight. −0.5.

## Arithmetic
14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×8.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×8.5 + 4×9.0
= 126 + 108 + 90 + 85 + 64 + 72 + 63 + 63 + 108 + 68 + 36
= 883 / 100 = **8.83**

## Must
(none)

## Should
1. `1440-first.jpg` / `390-first.jpg`: Increase kicker contrast or size so "Gallonworks Gutters · Seattle" registers in the first glance.
2. `390-full.jpg`: Reduce runoff cylinder height on mobile or move result text above it so the answer isn't buried.
3. `1440-full.jpg`: Add at least one installed-work photo (e.g., in the story or proof section) to close the trust gap left by an all-drawn visual language.
4. `dist/index.html`: Add aria-pressed or aria-label state to the filmstrip pause button.
5. `390-full.jpg`: Shorten chip labels or allow wrapping with a cleaner break so "Gutter sizing and replacement" doesn't span three lines.
6. `1440-scroll-75.jpg`: Adjust margin cylinder z-index or label positioning so the numeral doesn't overlap section backgrounds.
7. `1440-first.jpg`: Set an initial CSS fill on the hero specimen to avoid the empty→filled flash on load.

## Elevate
1. **photo** (weight 8, score 8.0): Replace the heavily-filtered hero-B3 duotone with a sharper, less-processed rain-on-gutter shot that still matches the evergreen palette, OR add a mid-page installed-work photo (seamless gutter close-up with downspout) in the story section to provide photographic proof alongside the drawn specimens. Move: one real photo earns trust without breaking the lab-ledger conceit.
2. **layout** (weight 10, score 8.5): Rebalance the tools section on mobile by making the runoff cylinder responsive (shorter on narrow viewports) and tightening the story pin seam. Move: responsive cylinder sizing + seamless pin transition turns two deductions into polish.