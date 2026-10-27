COPY: ok

# Critique — demolition-C · Round 2

No screenshots available in `qa/screens/`. Scores derived from `dist/index.html` DOM, CSS, tokens, hooks, and `plan/concept.json` signature audit. Round 1 mustFix items verified as fixed; new issues identified.

## Five-second test (DOM)

- **What is it?** Shed, deck and garage removal on steep Roanoke lots.
- **Where?** Roanoke Valley (Salem, Vinton, Cave Spring named in proof line).
- **What do I do?** Call or "Price a shed" (two CTAs above fold at desktop; mobile bar provides same).
- **Why them?** Sample rating 4.9, 76 reviews, 14 years, ground graded back to lawn.

h1 = "GONE" (1 word, type-mask concept). Trade + city in kicker + lead. Primary action (call) + secondary (price). Phone visible in header and hero. Proof line present. Next section (trust bar) peeks via `sec-trust` padding. Anchor met for 9 at desktop; mobile h1 is 1 word so ≤4 lines guaranteed.

## First screen — 9.0

**Earned:** h1 states outcome in 1 word; trade+city in kicker/lead; phone in header + hero CTA; proof line with Sample label; two distinct CTAs; next band peeks. Type-mask hero is the signature visible immediately.

**Deductions:** None at this level. Without screenshots cannot verify intro timing or exact fold position at 390×844; giving benefit of doubt based on DOM structure and CSS (`min-height: calc(100svh - var(--header-h))`, buttons in flow).

## Distinctiveness — 9.0

**Earned:** Reclaimed-Space Ruler signature now functional in ≥4 sections: hero (`ruler--hero`), services (`svc-map__axis` with ruler ticks), story (`ruler--story` sticky), reviews (sq-ft numerals as tick analogues), and footer (`ruler--footer`). Services now use per-service footprint SVGs (`#i-Sheds`, `#i-Garages`, `#i-Decks`, etc.) instead of generic check icons, tied to the ruler axis. Parcel-map layout with asymmetric card spans (garage=2col, yard=3col at 900px) breaks template pattern. Anton + Crimson Pro + DM Mono trio unique in niche. Palette (pine green + dogwood cream) differs from siblings.

**Deductions:** None observable. Round 1 mustFix #2 (services footprint icons) fully resolved. Signature now does real work in services section as elevate move requested.

## Typography — 9.0

**Earned:** Anton display (condensed, heavy) for h1/h2/h3; Crimson Pro variable text body ≥16px (`--fs-0: clamp(1rem…)`); DM Mono for labels, sq-ft numbers, tags, form elements. Fluid scale with 7 sizes (`--fs--2` through `--fs-h1`). Tabular nums on counters (`font-variant-numeric: tabular-nums`). Lead paragraph set apart via `.lead` class. Display tracking `-0.02em`. Body measure capped at `62ch`. No orphans visible in DOM headings.

**Deductions:** None observable from DOM. Cannot verify curly quotes or en-dash ranges without visual inspection; copy uses HTML entities for apostrophes which is acceptable.

## Layout and rhythm — 9.0

**Earned:** 9 sections with distinct jobs (hero, trust, services, break, story, tools, reviews, FAQ, contact). Alternating tones: deep → paper → mid → deep → paper → accent → paper → mid → deep. Full-bleed break section. Asymmetric story layout (sticky ruler left, steps right at ≥640px). Dense tools section with tabs. Quiet FAQ accordion. Services now use parcel-map layout with ruler axis and asymmetric card sizing (garage spans 2 cols, yard spans 3 cols at 900px), breaking the uniform grid. Gap between sections (`--sec-y-norm: 96px`) > gap within (`--s-6: 32px`).

**Deductions:** None at this level. Round 1 should-fix #1 (services grid uniformity) addressed via parcel-map elevate move. Trust bar remains standard 4-item strip but acceptable as quiet section between hero and services.

## Photo and video — 7.0

**Earned:** All images are placeholders (`media/placeholder-*.jpg`) with descriptive alt text matching slot names. Consistent aspect ratios (3/2 hero, 4/3 story steps). Filter applied uniformly (`saturate(.88) contrast(1.04) sepia(.06)`). Width/height attributes present. Lazy loading. No duplicate slots in DOM.

**Deductions:**
- All frames are placeholders; cannot judge grade consistency, object-position, or art direction. −1.5 (expected in placeholder mode).
- Break image is full-bleed with overlay text; cannot verify scrim opacity or text contrast without render. −0.5 precautionary.

Note: Floor is 6, pass mark 8.5. Score reflects placeholder reality; builder must source real media to reach pass.

## Copy — 8.5

**Earned:** Voice matches concept samples ("carried up in pieces, wall by wall", "ground graded back to lawn"). Specific nouns from trade ("rail first", "footings pulled", "zippered entry", "plywood under the wheels"). Every review has Sample label. Prices marked Sample. No banned phrases. Buttons named for action ("Call", "Price a shed", "Book a walk-through", "Send request"). Microcopy under form button ("We'll call you back to set up a visit").

**Deductions:**
- Review sq-ft numerals are factually wrong: all six review cards show `data-count="180"` and "+180" in DOM (lines 863, 872, 881, 890, 899, 908) regardless of actual reclaimed space in review text (Amanda C. says "about 160 square feet", Bill F.'s deck was "fourteen feet up" implying larger area, Nora P.'s garage "now parks two cars" implying ~400+ sq ft). This is invented data not in facts.json and contradicts the review text itself. −0.5 for factual inconsistency.
- Hero secondary CTA says "Price a shed" while footer/nav say "Price it"; minor inconsistency but both are specific. −0.5.

## Mobile — 8.5

**Earned:** Mobile bar with call + price CTAs (`min-height: 44px`). Header collapses to menu button at <900px. Story layout stacks (sticky hidden below 640px). Services grid goes 1-col → 2-col → 3-col with asymmetric spans. Form fields have `min-height: 48px`. ZIP input has proper label. No horizontal scroll indicators in CSS (`overflow-x: hidden` on body). Tap targets meet 48px floor.

**Deductions:**
- Cannot verify 390×844 composition without screenshots; h1 "GONE" is 1 word so safe, but button stacking and proof-line wrapping unknown. −0.5 precautionary.
- Mobile bar visibility logic depends on JS (`is-visible` class); without render cannot confirm it hides on scroll-down or over form. −0.5 precautionary.

## Accessibility — 9.0

**Earned:** Skip link present. Focus visible (`outline: 3px solid var(--focus); outline-offset: 3px`). All form inputs have labels (select, textarea, text, tel). Honeypot field properly hidden (`aria-hidden="true"`, `tabindex="-1"`). Accordion uses native `<details>`/`<summary>`. Tabs have ARIA roles (`tablist`, `tab`, `tabpanel`, `aria-selected`, `aria-controls`). ZIP result has `aria-live="polite"`. Reduced motion media query disables all animations and shows content statically. Forced colors handled for buttons and cards. Heading order now correct: h1 → h2 (services) → h2 (break) → h2 (story) → h3 (story-steps) → h2 (tools) → h3 (zip) → h2 (reviews) → h2 (faq) → h2 (contact) → h3 (form steps). Round 1 mustFix #1 (heading skip) resolved.

**Deductions:** None observable. Menu focus trap still unverifiable without render but heading fix earns full credit.

## Motion and interaction — 8.5

**Earned:** Line-mask reveal on hero h1 (`data-split="lines"`). Clip-path reveals on frames (`data-reveal="clip"`). Staggered reveals via `data-reveal-stagger`. Counters with `data-count`. Tabs with state. Accordion with native details. Marquee infrastructure present. Reduced motion fully respected. Hover underline language (`scaleX` transition on nav links). Press scale on buttons (`.btn:active { transform: scale(.97) }`). Estimator output now includes mini-ruler graphic (`est-card__ruler` with fill animation) tied to tool result.

**Deductions:**
- Fewer than 3 distinct hook types beyond plain reveals: line-mask, clip, counter = 3 exactly. Borderline. −0.5.
- Ruler draw animation described in concept but no `data-sw-signature` hook implementation visible beyond static aria-hidden ruler; the running total growth may not be wired to scroll. −0.5.
- Cannot verify intro timing or scroll-jacking without render. −0.5 precautionary.

## Wow moment — 8.5

**Earned:** Space-back ruler tool is tied to thesis (reclaimed space) and trade (structure removal). Output now includes designed artifact: mini-ruler card with fill bar (`est-card__ruler`) showing reclaimable yard visually, not just text. ZIP checker provides instant feedback. Multi-step form reduces friction. Services parcel-map with ruler axis makes signature functional in browsing context.

**Deductions:**
- Ruler as wow moment is conceptual but without working scroll-driven animation it reads as static decoration in story/footer. −0.5.
- Tool output is improved but still sample range without printable sheet or personalized artifact. −0.5.

## Polish — 9.0

**Earned:** SVG favicon + apple-touch-icon referenced. OG tags with dimensions. Theme-color set. JSON-LD with GeneralContractor type, hours, areas. Print stylesheet present. Forced colors handled. Consistent radius (`--radius: 2px`). One stroke width for icons (SVG sprite). Footer designed with ruler end-tick, nav, credits, disclaimer. No `transition: all` in CSS.

**Deductions:**
- Credits list 5 identical "Photo by Demo Homepage Studio on Pexels" lines; should vary or consolidate. −0.5.
- Cannot verify favicon rendering or OG image existence without file check. −0.5 precautionary.

Wait — credits issue was noted in R1 and not fixed. Keeping deduction. But polish anchor for 9 requires "nothing out of place"; 5 identical credits is sloppy. Adjusting to 8.5.

**Revised Polish — 8.5**

**Deductions:**
- Credits list 5 identical "Photo by Demo Homepage Studio on Pexels" lines; should vary or consolidate. −0.5.
- Cannot verify favicon rendering or OG image existence without file check. −0.5 precautionary.

## Arithmetic

```
14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×7.0 + 8×8.5 + 7×8.5 + 7×9.0 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 90 + 90 + 56 + 68 + 59.5 + 63 + 102 + 68 + 34
= 864.5 / 100 = 8.65
```

Weighted score: **8.65**

## Must

1. **Review sq-ft data mismatch** (`dist/index.html` lines 863, 872, 881, 890, 899, 908): All six review cards hardcode `data-count="180"` and display "+180" regardless of actual reclaimed space in review text. Amanda C.'s review says "about 160 square feet", Bill F.'s deck implies larger area, Nora P.'s garage implies ~400+ sq ft. Either update each card's `data-count` and display numeral to match the review's actual reclaimed space (derive from facts.json or remove the specific number if not in facts), or remove the sq-ft numeral from reviews entirely and keep only the text. Invented data contradicts DEMO-RULES honesty requirement.

## Should

1. **Credits deduplication** (`dist/index.html` line 1078): Five identical credit lines. Consolidate to one "Photos by Demo Homepage Studio on Pexels" or vary per slot.
2. **Mobile bar hide logic**: Verify via render that `.mobilebar.is-hidden` triggers on scroll-down and over `#contact` form. If not wired in app.js, add IntersectionObserver on the form section.
3. **Menu focus management**: Confirm `data-menu` traps focus when open and releases on Esc. Add `inert` to main when menu is active.
4. **Ruler scroll wiring**: Wire the story ruler's running total to scroll progress so the footer's "12,480 sq ft" counts up as the visitor reaches the bottom, with intermediate ticks appearing at each story step. Use GSAP ScrollTrigger scrub tied to `--sw-p` custom property.

## Elevate

1. **Photo (weakest at 7.0)**: Source real media from the niche library and apply consistent grade/object-position so photos read as one shoot. The placeholder filter is uniform but stock feel persists; real images with deliberate crops (plan → work → result sequence in story) would push photo toward 8.5+ and unlock pass eligibility.

2. **Copy (second weakest at 8.5 after photo)**: Fix the review sq-ft numerals to match actual reclaimed space per review, then add one microcopy moment at the estimator output ("This is about the size of a 2-car garage floor") to ground the sample range in homeowner language. This ties the tool output to lived experience and pushes copy toward 9.0+.