COPY: ok

## Five-second test (DOM-based, no screenshots available)

At 1440 and 390 the first screen shows: "Albany carpentry, measured before priced" as h1 (line 591), kicker "Albany trim, built-ins & stair carpentry", proof line "213 sample reviews · 19 yrs in Albany" with Sample tag, two CTAs (Call + Price it), phone visible in header and hero CTA. Trade + city + outcome are now clear in the h1 itself (improvement from round 1 noted in DOM). The story-pole ruler is present in the left margin at ≥900px; on mobile it is hidden via CSS (`display:none` under 900px, line 509). Next section should peek because hero is `min-height: calc(100svh - var(--header-h))`, not 100vh. However, no screenshots exist in `qa/screens/` to verify any visual changes from round 1. Per RUBRIC §2.5, scores cannot increase without screenshot evidence of a fix.

## Categories

### firstScreen — 8.5
**Earned:** h1 now states trade + city + outcome ("Albany carpentry, measured before priced") in ≤8 words. Phone visible in header and hero CTA. Two distinct CTAs with primary/secondary hierarchy. Proof line present with Sample tag. Hero uses offset-frame-overlap layout per concept.json heroFamily 14. DOM shows the h1 fix from round 1 was applied.
**Deductions:**
- −0.5: No screenshots in `qa/screens/` to verify next band peeks 40–120px or that the offset-frame-overlap composition renders correctly. CSS suggests it should but visual confirmation is absent.
- −0.5: Placeholder hero image (`placeholder-hero-B1.webp`) means dimension callouts' visual alignment to the photo frame cannot be verified.
- −0.5: Cannot confirm intro timing or whether motion blocks reading without render.json timings or screenshots.

### distinctiveness — 8.5
**Earned:** Story Pole Ruler signature is structurally present: fixed left-margin ruler with tick marks at 0, 9, 36, 42, 84, 132 inches (lines 569–578). Signature appears in hero (dimension callouts), services (height-tag numbering 01–09), tools (estimator outputs in mono), proof (tolerance-pill), and footer (license in mono). Palette is Graphite Vellum + Pencil Mark — distinct from sibling directions. Three layout families: offset-frame-overlap hero, split-grid tools, full-bleed break.
**Deductions:**
- −0.5: Ruler is `display: none` below 900px (line 509), so on mobile the signature is invisible. RUBRIC §3.2 anchor 9 requires signature in ≥4 sections including hero and footer; it is present in DOM but not rendered on phone viewports.
- −0.5: Services grid uses 9 identical card shapes with only a vertical height-tag differentiator. The repetition is flat.
- −0.5: Cannot verify cover-the-logo test without screenshots.

### type — 9.0
**Earned:** Three-family system executed correctly: Anybody (display, variable wdth 75, wght 700), Figtree (text), DM Mono (accent for measurements, prices, labels). Fluid scale with clamp values (lines 262–267). Body ≥16px. Measure capped at 65ch (line 315). Tabular numerals on counters and prices. Display tracking −0.03em (line 310). Kicker uses uppercase + 0.08em tracking. ≤5 distinct sizes visible. No orphans detectable in DOM headings.
**Deductions:**
- −0.5: Straight double-quote in tolerance-pill text (e.g., line 795 `miters < 1/32″`). Should use curly quotes or ″ symbol consistently.
- −0.5: Cannot verify rag, line-height on display, or en-dash usage without visual inspection.

### layout — 8.5
**Earned:** 10 sections with one job each. Alternating tones: paper → mid → paper → deep → accent → paper → mid → paper → deep → paper. Three layout families: offset-frame-overlap (hero), split-grid (tools), full-bleed (break). Asymmetric hero. Dense services grid followed by quiet split tool sections. Full-bleed break provides breath.
**Deductions:**
- −0.5: Three consecutive tool sections (rot, molding, builtin) all use the same split-grid layout family. RUBRIC §3.4 deduction: "Same section shape used 3+ times: −0.5".
- −0.5: Services section has 9 cards in a uniform grid with no internal rhythm variation.
- −0.5: Cannot verify blank gaps or grid usage at 1440 without screenshots.

### photo — 7.0
**Earned:** All images use placeholder files from the niche media pool. Alt text describes the frame content. Width/height attributes present. Lazy loading and async decoding applied. Consistent filter treatment in CSS.
**Deductions:**
- −1.0: All photos are placeholders. Without real media, the "one grade across every photo" anchor cannot be met.
- −0.5: Photo alt text says "Placeholder for..." which reads as unfinished.
- −0.5: Cannot verify crop ratios, object-position, or frame/signature integration without screenshots.
- Note: Floor is 6, pass mark is 8.5. Score 7.0 is above floor but below pass. Expected in placeholder mode.

### copy — 9.0
**Earned:** Voice matches concept thesis. Specific trade nouns throughout. No banned phrases. Buttons named for action. Sample tags present on all prices, reviews, guarantee, and license. Primary action consistently called "Price it". Reviews cite specific neighborhoods.
**Deductions:**
- −0.5: Tolerance pills still repeat identically across reviews in DOM (lines 795, 800, 805, 810 show different values now — "miters < 1/32″", "shelf deflection < 1/16″", "dutchman gap < 1/32″", "rail play < 1/8″"). This was a mustFix in round 1 and appears fixed in DOM. However, without screenshots confirming visual rendering, cannot award the +0.5 recovery. Score holds at 9.0.
- −0.5: Hero lead "213 sample reviews · 19 yrs in Albany" is slightly generic.

### mobile — 8.5
**Earned:** CSS breakpoints at 640px and 900px. Mobile bar present with Call + Price it. Tap targets ≥48px. No horizontal scroll. Services grid collapses. Split grids stack. Form inputs full-width.
**Deductions:**
- −0.5: Story pole ruler completely hidden on mobile (`display: none` under 900px). Signature vanishes on phones.
- −0.5: Mobile bar lacks visible scroll-direction hiding logic in DOM attributes. May obscure form or footer.
- −0.5: Cannot verify h1 line count at 390×844 without screenshots.

### a11y — 9.0
**Earned:** Skip link present. Focus styles: 3px solid accent, 3px offset. All form inputs labeled. Fieldset/legend for radio groups. aria-live on ZIP and checklist outputs. aria-expanded on menu. Reduced motion handled. Heading order correct. Honeypot hidden. Sr-only live region for ruler (line 582).
**Deductions:**
- −0.5: Footer credit `<a>` elements still lack href attributes (lines 932). Semantically broken.
- −0.5: Cannot verify focus visibility on all tones or reduced-motion completeness without screenshots.

### motion — 8.0
**Earned:** Clip-path wipe on hero frame. Reveal stagger on services. Split text on h1. Reduced motion respected. Multiple hook types: clip, stagger, split text. Motion tokens defined.
**Deductions:**
- −1.0: Only 3 distinct hook types visible. Story-pole tick slide described in concept.json is not evident in DOM attributes; may be JS-driven but cannot confirm.
- −0.5: Same reveal pattern applied to nearly every section.
- −0.5: Cannot verify intro timing or skippability without render.json or screenshots.

### wow — 8.0
**Earned:** Story-pole ruler concept is distinctive and trade-tied. Repair-or-replace checklist is practical. Built-in planner outputs bay count. Tolerance pills connect signature to proof.
**Deductions:**
- −0.5: Tool outputs are text-only readouts. RUBRIC deduction: plain text output −1.0, partial here since sample range is useful.
- −0.5: Cannot verify reduced-motion static form without screenshots.
- −0.5: Ruler hidden on mobile removes primary wow moment on phones.

### polish — 8.5
**Earned:** SVG favicon, apple-touch-icon, OG image with dimensions, theme-color, JSON-LD, print stylesheet, lazy images with dimensions, consistent radius, forced colors handled. No `transition: all`.
**Deductions:**
- −0.5: Footer credit links missing href.
- −0.5: Cannot verify favicon, OG image, or forced colors rendering without screenshots.
- −0.5: Print stylesheet exists but untested.

## Arithmetic

14×8.5 + 12×8.5 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.0 + 8×8.0 + 4×8.5
= 119 + 102 + 90 + 85 + 56 + 72 + 59.5 + 63 + 96 + 64 + 34
= 840.5 / 100 = **8.41**

## Must

1. **where:** dist/index.html line 932, footer credits
   **problem:** Five `<a>` elements without href attribute. Semantically broken links that fail HTML validation and confuse assistive technology. Not fixed from round 1.
   **fix:** Convert to `<span>` elements since these are credits, not navigation, or add valid hrefs to Pexels attribution pages.

## Should

1. **where:** dist/index.html line 509, .story-pole CSS rule
   **problem:** Story pole ruler hidden below 900px. Mobile visitors lose the signature system entirely. Not fixed from round 1.
   **fix:** Adapt the ruler for mobile: a horizontal progress indicator at top, or a compact inline height marker within each section header.

2. **where:** dist/index.html lines 690, 731, 759, three consecutive tool sections
   **problem:** Rot-check, molding-picker, and builtin-planner all use identical split-grid layout. Visual rhythm flattens.
   **fix:** Vary at least one tool section: stack UI above image, use full-width tool with side-by-side inputs, or make one tool card-based.

3. **where:** dist/index.html line 944, .mobile-bar
   **problem:** Mobile bar lacks scroll-direction hiding logic in DOM. May obscure form submit or footer.
   **fix:** Ensure app.js toggles `.is-hidden` on scroll-down and removes on scroll-up and when form is in viewport.

4. **where:** dist/index.html line 591, h1 element
   **problem:** While h1 now contains trade+city, cannot verify visual rendering (line count, fold position) without screenshots.
   **fix:** Generate screenshots to confirm h1 is ≤4 lines at 390×844 and both CTAs are above the fold.

## Elevate

1. **Category: motion (weight 12, score 8.0)**
   **Move:** Drive the story-pole tick highlight with ScrollTrigger so the active tick physically slides to each section's height mark as the visitor scrolls, and tie the clip-wipe direction on tool images to the ruler's vertical axis. This makes the signature *the* motion language rather than a static decoration, adding a fourth distinct hook type.

2. **Category: wow (weight 8, score 8.0)**
   **Move:** Replace the plain-text estimator output with a small SVG elevation drawing that updates in real time as inputs change — for the built-in planner, draw the wall with bay divisions and shelf lines; for the molding picker, show the profile silhouette scaled to the entered perimeter. The output becomes a designed artifact in the story-pole's drafting language.