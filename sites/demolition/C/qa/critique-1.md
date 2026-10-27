COPY: ok

# Critique — demolition-C · Round 1

No screenshots available (placeholder mode). Scores derived from `dist/index.html` DOM, CSS, tokens, hooks, and `plan/concept.json` signature audit.

## Five-second test (DOM)

- **What is it?** Shed, deck and garage removal on steep Roanoke lots.
- **Where?** Roanoke Valley (Salem, Vinton, Cave Spring named in proof line).
- **What do I do?** Call or "Price a shed" (two CTAs above fold at desktop; mobile bar provides same).
- **Why them?** Sample rating 4.9, 76 reviews, 14 years, ground graded back to lawn.

h1 = "GONE" (1 word, type-mask concept). Trade + city in kicker + lead. Primary action (call) + secondary (price). Phone visible in header and hero. Proof line present. Next section (trust bar) peeks via `sec-trust` padding. Anchor met for 9 at desktop; mobile h1 is 1 word so ≤4 lines guaranteed.

## First screen — 9.0

**Earned:** h1 states outcome in 1 word; trade+city in kicker/lead; phone in header + hero CTA; proof line with Sample label; two distinct CTAs; next band peeks. Type-mask hero is the signature visible immediately.

**Deductions:** None at this level. Without screenshots cannot verify intro timing or exact fold position at 390×844; giving benefit of doubt based on DOM structure and CSS (`min-height: calc(100svh - var(--header-h))`, buttons in flow).

## Distinctiveness — 8.5

**Earned:** Reclaimed-Space Ruler signature present in hero (`ruler--hero`), story (`ruler--story`), reviews (sq-ft numerals as tick analogues), and footer (`ruler--footer`). Anton + Crimson Pro + DM Mono trio is unique in demolition niche. Palette (pine green + dogwood cream) differs from typical orange/black demo sites. Layout families: type-mask hero, ruler-margin story, tabbed tools, stacked reviews, break overlay.

**Deductions:**
- Signature in services section is **not implemented**: service cards use generic check icons (`i-check`) instead of footprint outlines scaled to the ruler as promised in concept. −0.5.
- Reviews show sq-ft as large numeral but without explicit ruler tick marks; the visual connection to the ruler system is implicit rather than explicit. −0.5.
- Cannot verify sibling distinctiveness without screenshots; assuming clean based on registry data. −0.5 precautionary.

## Typography — 9.0

**Earned:** Anton display (condensed, heavy) for h1/h2/h3; Crimson Pro variable text body ≥16px (`--fs-0: clamp(1rem…)`); DM Mono for labels, sq-ft numbers, tags, form elements. Fluid scale with 7 sizes (`--fs--2` through `--fs-h1`). Tabular nums on counters (`font-variant-numeric: tabular-nums`). Lead paragraph set apart via `.lead` class. Display tracking `-0.02em`. Body measure capped at `62ch`. No orphans visible in DOM headings.

**Deductions:** None observable from DOM. Cannot verify curly quotes or en-dash ranges without visual inspection; copy uses straight apostrophes in reviews ("mother's") which is acceptable in HTML entities.

## Layout and rhythm — 8.5

**Earned:** 9 sections with distinct jobs (hero, trust, services, break, story, tools, reviews, FAQ, contact). Alternating tones: deep → paper → mid → deep → paper → accent → paper → mid → deep. Full-bleed break section. Asymmetric story layout (sticky ruler left, steps right at ≥640px). Dense tools section with tabs. Quiet FAQ accordion. Gap between sections (`--sec-y-norm: 96px`) > gap within (`--s-6: 32px`).

**Deductions:**
- Services grid is uniform 3-column at desktop; 8 cards in same shape reads as template-like. Could use asymmetric grouping. −0.5.
- Trust bar is 4 equal items in a row; standard strip layout. −0.5.
- Cannot verify blank gaps or lopsided columns without screenshots. −0.5 precautionary.

## Photo and video — 7.0

**Earned:** All images are placeholders (`media/placeholder-*.jpg`) with descriptive alt text matching slot names. Consistent aspect ratios (3/2 hero, 4/3 story steps). Filter applied uniformly (`saturate(.88) contrast(1.04) sepia(.06)`). Width/height attributes present. Lazy loading. No duplicate slots in DOM.

**Deductions:**
- All frames are placeholders; cannot judge grade consistency, object-position, or art direction. −1.5 (expected in placeholder mode).
- Break image is full-bleed with overlay text; cannot verify scrim opacity or text contrast without render. −0.5 precautionary.

Note: Floor is 6, pass mark 8.5. Score reflects placeholder reality; builder must source real media to reach pass.

## Copy — 9.0

**Earned:** Voice matches concept samples ("carried up in pieces, wall by wall", "ground graded back to lawn"). Specific nouns from trade ("rail first", "footings pulled", "zippered entry", "plywood under the wheels"). Every review has Sample label. Prices marked Sample. No banned phrases. Buttons named for action ("Call", "Price a shed", "Book a walk-through", "Send request"). Microcopy under form button ("We'll call you back to set up a visit"). Consistent primary action name ("Price it" in nav/footer/mobilebar, "Price a shed" in hero — slight variation but contextually appropriate).

**Deductions:**
- Hero secondary CTA says "Price a shed" while footer/nav say "Price it"; minor inconsistency but both are specific. −0.5.
- Cannot verify em-dash count without full text scan; DOM shows clean prose. −0.5 precautionary.

## Mobile — 8.5

**Earned:** Mobile bar with call + price CTAs (`min-height: 44px`). Header collapses to menu button at <900px. Story layout stacks (sticky hidden below 640px). Services grid goes 1-col → 2-col → 3-col. Form fields have `min-height: 48px`. ZIP input has proper label. No horizontal scroll indicators in CSS (`overflow-x: hidden` on body). Tap targets meet 48px floor.

**Deductions:**
- Cannot verify 390×844 composition without screenshots; h1 "GONE" is 1 word so safe, but button stacking and proof-line wrapping unknown. −0.5 precautionary.
- Mobile bar visibility logic depends on JS (`is-visible` class); without render cannot confirm it hides on scroll-down or over form. −0.5 precautionary.
- Pinned story ruler is hidden below 640px per CSS; good. No deduction.

## Accessibility — 8.5

**Earned:** Skip link present. Focus visible (`outline: 3px solid var(--focus); outline-offset: 3px`). All form inputs have labels (select, textarea, text, tel). Honeypot field properly hidden (`aria-hidden="true"`, `tabindex="-1"`). Accordion uses native `<details>`/`<summary>`. Tabs have ARIA roles (`tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-controls`). ZIP result has `aria-live="polite"`. Reduced motion media query disables all animations and shows content statically. Forced colors handled for buttons and cards. Heading order: h1 → h2 (services) → h2 (break) → h2 (story implicit in step h3s) → h2 (tools) → h3 (zip) → h2 (reviews) → h2 (faq) → h2 (contact) → h3 (form steps). No skips.

**Deductions:**
- Story section has no h2; steps use h3 directly under section. Heading level skip from h2 (break) to h3 (story-step). −0.5.
- Menu overlay has `aria-hidden="true"` but toggling logic depends on JS; cannot verify focus trap or Esc handling without render. −0.5 precautionary.
- Video pause button not present (no video in DOM); N/A.

## Motion and interaction — 8.0

**Earned:** Line-mask reveal on hero h1 (`data-split="lines"`). Clip-path reveals on frames (`data-reveal="clip"`). Staggered reveals via `data-reveal-stagger`. Counters with `data-count`. Tabs with state. Accordion with native details. Marquee infrastructure present. Reduced motion fully respected. Hover underline language (`scaleX` transition on nav links). Press scale on buttons (`.btn:active { transform: scale(.97) }`).

**Deductions:**
- Fewer than 3 distinct hook types beyond plain reveals: line-mask, clip, counter = 3 exactly. Borderline. −0.5.
- Ruler draw animation described in concept but no `data-sw-signature` hook implementation visible beyond static aria-hidden ruler; the running total growth may not be wired. −1.0.
- Cannot verify intro timing or scroll-jacking without render. −0.5 precautionary.

## Wow moment — 8.0

**Earned:** Space-back ruler tool is tied to thesis (reclaimed space) and trade (structure removal). Output is sq-ft range + sample price, displayed in mono within the tool panel. ZIP checker provides instant feedback. Multi-step form reduces friction.

**Deductions:**
- Tool output is text-only ("Select options to see sample range"); no designed artifact (printable sheet, sketch, checklist). −1.0.
- Ruler as wow moment is conceptual but without working scroll-driven animation it reads as static decoration. −1.0.

## Polish — 8.5

**Earned:** SVG favicon + apple-touch-icon referenced. OG tags with dimensions. Theme-color set. JSON-LD with GeneralContractor type, hours, areas. Print stylesheet present. Forced colors handled. Consistent radius (`--radius: 2px`). One stroke width for icons (SVG sprite). Footer designed with ruler end-tick, nav, credits, disclaimer. No `transition: all` in CSS.

**Deductions:**
- Credits list 5 identical "Photo by Demo Homepage Studio on Pexels" lines; should vary or consolidate. −0.5.
- Cannot verify favicon rendering or OG image existence without file check. −0.5 precautionary.

## Arithmetic

```
14×9.0 + 12×8.5 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×8.5 + 7×8.5 + 12×8.0 + 8×8.0 + 4×8.5
= 126 + 102 + 90 + 85 + 56 + 72 + 59.5 + 59.5 + 96 + 64 + 34
= 844 / 100 = 8.44
```

Weighted score: **8.44**

## Must

1. **Story heading skip** (`dist/index.html` line ~735): Story section lacks h2; steps jump from h2 (break) to h3. Add `<h2>How we reclaim your yard</h2>` before `.story__steps` to fix heading order.
2. **Ruler signature not functional in services**: Concept promises footprint outlines on service cards tied to ruler; DOM shows generic check icons. Either implement the footprint SVG per card or remove the claim from concept.json. Without this, distinctiveness cap holds.

## Should

1. **Services grid uniformity** (`dist/index.html` `.svc-grid`): 8 identical cards in 3-col grid reads template. Group into 2 asymmetric rows (e.g., 3+5 or 4+4 with varying card heights) or add a featured card spanning 2 cols for "Yard restore" as the payoff service.
2. **Tool output design** (`#panel-ruler .tool-result`): Plain text output misses wow opportunity. Render the sq-ft result as a mini-ruler graphic with tick marks matching the signature, or generate a printable "Reclaim Report" card styled in the ruler language.
3. **Credits deduplication** (`dist/index.html` line ~1041): Five identical credit lines. Consolidate to one "Photos by Demo Homepage Studio on Pexels" or vary per slot.
4. **Mobile bar hide logic**: Verify via render that `.mobilebar.is-hidden` triggers on scroll-down and over `#contact` form. If not wired in app.js, add IntersectionObserver on the form section.
5. **Menu focus management**: Confirm `data-menu` traps focus when open and releases on Esc. Add `inert` to main when menu is active.

## Elevate

1. **Layout (weakest after photo)**: Turn the services grid into a "parcel map" where each card is an irregular polygon sized to its typical footprint (shed = small rect, garage = larger rect, deck = L-shape). The ruler runs vertically through the grid as a shared axis. This makes the signature do real work in a section where it currently sits idle, and breaks the template-card pattern.

2. **Motion (second weakest)**: Wire the ruler's running total to scroll progress so the footer's "12,480 sq ft" counts up as the visitor reaches the bottom, with intermediate ticks appearing at each story step. Use GSAP ScrollTrigger scrub tied to `--sw-p` custom property. This turns the static ruler into a living measurement that the visitor drives, making the signature moment describable ("the yard grows as you scroll").