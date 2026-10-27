COPY: ok

## Five-second test (DOM + CSS evidence; no screenshots available)

At 1440: hero is t-ink with h1 "Historic House Painting in Charleston" (4 words + line break), kicker above, lead line with hours/area/sample rating, two CTAs ("Price it" primary, "Call" secondary with phone number visible). Filmstrip of 5 facade frames drifts right. Plaque signature sits below copy. Trade + city + outcome clear. Phone visible. Next section (story-color t-light) would peek if hero is <100svh; hero min-height is `calc(100svh - header-h)` so content likely fills viewport exactly — next band may not peek (−0.5 risk).

At 390: grid collapses to single column. Hero copy stacks, filmstrip frames are 60% width. Both CTAs should remain above fold given min-height calc. No horizontal scroll detected in CSS. Tap targets ≥48px (btn min-height 48px). Mobile bar present with Call + Price it.

**Answer:** Charleston historic house painter; call or price a job; trust via sample rating and specific services. Clear but unverified visually.

---

## firstScreen — 8.5

Earned: trade + city + outcome in h1 ≤8 words; one primary + one secondary CTA; phone visible in header and hero; sample rating proof line present; signature plaque visible in hero.

Deductions:
- −0.5: hero min-height `calc(100svh - var(--header-h))` likely means next band does not peek 40–120px at 1440 (RUBRIC §3.1). Cannot confirm without screenshot; scored conservatively.
- −0.5: filmstrip uses placeholder images with generic alt text ("Placeholder for hero-C1"); cannot verify composition or object-position lands correctly. Placeholder penalty capped.
- −0.5: no screenshot evidence that intro shutter animation (concept.json motion.intro) actually runs ≤1.2s or that reduced-motion shows headline immediately. DOM has `data-split="lines"` and kit classes but no verified timing.

No mustFix: content is present and structured correctly per DOM.

## distinctiveness — 9

Earned: Facade + Plaque signature appears in hero (plaque + SVG), story-color (plaque + clipped photo), story-prep (2 facade-stack items with plaques), story-haint (plaque + clipped photo), story-coastal (plaque + clipped photo), footer (3 facade SVGs). That is 6 sections ≥4 required. Signature organizes information (street/enemy/service), not decoration. Three layout families: filmstrip-rail (hero), split-story (color, haint, coastal), facade-stack (prep), plus full-bleed break and grid services. Palette (ink/paper/deep/accent/signal) and type pair (Cormorant + Source Serif 4 + DM Mono) differ from typical painter templates.

Deductions:
- −1.0: cannot verify cover-the-logo test without screenshots. Siblings painter-A/B not inspected this round. Scored at 9 anchor, not 10.

## type — 9

Earned: Cormorant Garamond display (h1, h2, h3, logo, menu links), Source Serif 4 body (variable opsz used via `font-variation-settings: "opsz" 24` on .lead), DM Mono accent (kicker, plaque, sample-tag, mono class, tabs, pricing, zip result). Fluid scale with clamp(). Body ≥16px (--fs-0 clamps to 1rem min). Measure capped at 62ch for p, 48ch for lead. Tabular-nums on mono. Display tracking −0.03em on headings. Line-height 0.92 on display. ≤5 sizes visible. No orphans detectable in DOM (text-wrap: balance on headings).

Deductions:
- −0.5: straight quotes not checked; DOM uses `&amp;` correctly but en-dash ranges in pricing use " – " (space-hyphen-space) instead of true en-dash. Minor.
- −0.5: no screenshot to verify rag or orphan control at actual viewports.

## layout — 8.5

Earned: 11 sections with distinct jobs (hero, 4 stories, break, services, proof, pricing, area, contact, footer). Alternating tones: ink → light → paper → deep → accent → light → paper → deep → light → paper → ink → light. ≥3 layout families (filmstrip, split-story, facade-stack, grid, stack, full-bleed break, split-section). Asymmetric split-story with reverse variant. Full-bleed break section. Gap between sections (--s-7/8/9) > gap within.

Deductions:
- −1.0: services grid (9 cards) and proof (3 cards) are standard grid layouts; two grid sections in proximity (services t-light followed by story-coastal t-paper then proof t-deep) breaks rhythm but services→story→proof is acceptable. However, pricing (t-light list-section) follows proof (t-deep) then area (t-paper) — three different tones in sequence is good. Deduction instead for: facade-stack (prep) uses 2-column grid at 640+, which is same shape as split-story grids. Two sections using similar 2-col split layout (split-story × 3 + facade-stack × 1 = 4 splits total). −0.5 for repeated shape.
- −0.5: no screenshot to verify blank gaps or density map. Scored conservatively.

## photo — 8

Earned: All placeholders are on-topic (process-scrape, process-prime, detail-trim, region-porch-ceiling, weather-humid, crew-from-behind, region-charleston-street, material-swatches, material-texture-fresh, detail-door, hero-C1). Consistent filter applied (`saturate(.8) contrast(1.05) sepia(.12) hue-rotate(-2deg)`) creates unified grade. Object-position specified per slot. Alt text describes frame content. Width/height attributes present. Lazy loading on non-hero. Fetchpriority high on hero.

Deductions:
- −0.5: all media are placeholders; cannot verify art direction, crop storytelling, or unique frame treatment beyond CSS clip-path. Ceiling at 8 for stock/placeholders per RUBRIC §3.5.
- −0.5: alt text says "Placeholder for X" on several frames (hero-C1, weather-humid, region-charleston-street, material-texture-fresh, detail-door, region-porch-ceiling, crew-from-behind). These should describe the intended scene, not say "Placeholder". Not a mustFix (demo safety allows placeholders) but costs polish.

## copy — 9

Earned: Voice matches concept samples (salt air, dew, hand-scrape, matched chip). Specific trade nouns (piazza, balusters, mildewcide primer, linseed oil, zinc primer, marine layer, dew point). No banned words detected. Buttons named for action ("Price it", "Call", "Explore color options", "Price a porch ceiling", "Plan a coastal job", "Get my number", "Check"). Sample labels on reviews, rating, pricing. Hours and area specific. Microcopy at ZIP check (aria-live result). Form steps labeled. Primary action consistently "Price it" across hero, services, mobile bar.

Deductions:
- −0.5: "Get my number" in pricing CTA differs from "Price it" elsewhere. Two names for primary action (RUBRIC §3.6). Minor inconsistency.
- −0.5: no screenshot to verify headline line counts or truncation at viewports.

## mobile — 9

Earned: CSS breakpoints at 640, 768, 900, 1200. Single-column stack below 900 for hero/split-story. Filmstrip frames 60% at mobile, 40% at 640+. Buttons min-height 48px. Mobile bar fixed bottom with Call + Price it, hidden at ≥900. Inputs 48px height. ZIP row flexes. Form nav buttons adequately sized. No horizontal scroll (overflow handled). Text-wrap: pretty/balance prevents overflow. Reduced-motion respected.

Deductions:
- −0.5: cannot verify pinned scroll behavior under 640px without screenshots. Concept mentions facade slide-in; if pinned, would violate RUBRIC §3.7. Scored assuming kit reveal (translateY) is not pinned.
- −0.5: mobile bar covers bottom of page; cannot verify it hides on scroll down or over form without render evidence. CSS has `.is-hidden` class but no JS verification.

## a11y — 9

Earned: Skip link present. Focus outline 3px solid var(--focus) with 3px offset. Forced-colors rules for buttons, facades, compare handle. Reduced-motion media query disables all animations and reveals content. JS-off: menu button, vid-btn, tablist, filter-buttons, carousel controls, marquee-toggle, est-print, compare-handle, js-only elements hidden via `html:not(.sw-js)` rules; content remains visible. Heading order: h1 → h2 × 8 (no skips detected). Form labels explicit (for/id pairs). Aria-live on ZIP result. Aria-expanded on menu button. Aria-modal on menu dialog. Sample tags visible. Honeypot field hidden.

Deductions:
- −0.5: rotating word (if any) not detected in DOM; data-split="lines" on h1 is split-text, not rotator. No aria-hidden/sr-only static copy needed. No deduction.
- −0.5: cannot verify focus visibility on all tones (t-ink, t-deep, t-accent) without screenshots. CSS defines --focus per tone correctly. Scored at 9 anchor.

## motion — 8.5

Earned: Kit reveal (translateY + opacity) on sections. Clip reveal on story visuals. Stagger on service cards, review cards, price rows. Filmstrip drift animation (40s linear infinite, pauses on hover/focus). Data-split="lines" on h1. Reduced-motion disables all. Lenis loaded. ScrollTrigger loaded. Hooks present (data-reveal, data-reveal-stagger, data-tabs, data-zip, data-lead, data-mobilebar, data-header, data-progress).

Deductions:
- −1.0: concept promises shutter intro animation (rotateY -90→0, 800ms) but no DOM evidence of shutter element or GSAP timeline targeting it. Intro may be missing or broken. Cannot verify ≤1.2s without screenshot/render report.
- −0.5: same reveal (translateY + opacity) on most sections; clip reveal only on story visuals. ≥3 hooks present (reveal, clip, stagger, filmstrip drift, tabs, form steps) but entrance variety limited. −0.5 for repetitive entrance.
- −0.5: cannot verify story reversibility or pinning behavior without render evidence.

## wow — 8.5

Earned: Facade + Plaque signature is tied to thesis (Charleston house walk) and trade (painting). Color explorer tabs and weather window tabs are tools a homeowner would use. Signature moment is the clipped-photo-in-house-shape treatment across stories.

Deductions:
- −0.5: tool output is text-only (mono paragraphs in tab panels). No designed output artifact (printable sheet, visual swatch grid, etc.). RUBRIC §3.10 deducts for plain text output.
- −0.5: cannot verify wow moment renders correctly in reduced motion without screenshots. Static form exists (tabs work without JS? No — tabs require JS per kit rules; tablist hidden without JS, all panels show). Acceptable fallback.

## polish — 8.5

Earned: SVG favicon + apple-touch-icon referenced. OG image 1200×630 declared. Theme-color set. JSON-LD HousePainter with complete schema. Print stylesheet for estimator (sw-print-est class). Lazy images with width/height. Hero poster preloaded. Forced colors handled. Consistent radius (0 on inputs/buttons — intentional sharp aesthetic matching historic plaque feel). One stroke width for icons (stroke-width="2" throughout). Footer designed with facades, nav, disclaimer, credits, copyright.

Deductions:
- −0.5: credits list "Photo by unknown on Pexels" × 11. Should name actual photographers or omit. Placeholder credit is sloppy.
- −0.5: no print stylesheet specifically for tool sheets (color explorer, weather window). Only estimator print exists. Tools are tab-based text, not printable artifacts.
- −0.5: mixed icon usage — star icon uses fill="currentColor" stroke="none", others use stroke. Intentional but inconsistent stroke/fill language.

---

## Arithmetic

14×8.5 + 12×9 + 10×9 + 10×8.5 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×8.5
= 119 + 108 + 90 + 85 + 64 + 72 + 63 + 63 + 102 + 68 + 34
= 868 / 100 = **8.68**

## Must

(none)

## Should

1. **where:** dist/index.html line 737 (.hero min-height)
   **problem:** Hero likely fills exactly 100svh minus header, preventing next band peek.
   **fix:** Change to `min-height: calc(95svh - var(--header-h))` or add `padding-bottom: var(--s-7)` to hero to ensure 40–120px of next section visible at 1440.

2. **where:** dist/index.html lines 1213–1217 (filmstrip alt text)
   **problem:** Alt text says "Placeholder for X" instead of describing intended scene.
   **fix:** Replace with descriptive alt: "Charleston single house with yellow clapboard and piazza", "Historic street row with pastel facades", etc. Match the data-photo slot intent.

3. **where:** dist/index.html line 1505 (pricing CTA)
   **problem:** "Get my number" differs from primary action name "Price it" used elsewhere.
   **fix:** Change to `<a class="btn btn--primary" href="#contact">Price it</a>` for consistency.

4. **where:** dist/index.html line 1646 (credits)
   **problem:** "Photo by unknown on Pexels" repeated 11 times.
   **fix:** Either populate real photographer names from media manifest or replace with single line: "Stock photography via Pexels" until curated.

5. **where:** dist/index.html (shutter intro animation)
   **problem:** Concept promises shutter swing-open intro but no DOM element or GSAP hook visible.
   **fix:** Add shutter overlay element in hero with `data-shutter` attribute and GSAP timeline in app.js that rotates Y -90→0 over 800ms, then removes/reveals headline. Ensure reduced-motion skips.

6. **where:** dist/index.html (motion entrances)
   **problem:** Most sections use identical translateY reveal; only story visuals use clip.
   **fix:** Add scale reveal on service cards, fade-only on proof reviews, and stagger-delay variation by section role to create entrance vocabulary.

## Elevate

1. **layout** (weight 10, weakest tie-broken by weight over photo/wow/polish at 8): Break the split-story repetition by making one story a full-bleed immersive (photo behind text with scrim) or a horizontal scroll-snapping facade gallery at desktop, so the scroll rhythm has a distinct loud/quiet/dense/breath shape visible in full-page view.

2. **motion** (weight 12, second weakest): Implement the promised shutter intro as the signature's first appearance — shutters are part of Charleston architecture and the facade system. Tie the shutter open to the first facade plaque reveal so the wow moment and the signature share one motion idea a visitor can describe.