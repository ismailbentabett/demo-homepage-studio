COPY: ok

# Critique — flooring-B Round 1 (Placeholder Mode)

No screenshots available; scored from `dist/index.html` DOM, CSS, and token/hook analysis per RUBRIC §2.10 allowance for placeholder mode. Visual polish deductions applied where composition cannot be verified.

## Five-second test (DOM proxy)

At 1440 (inferred from CSS): h1 "See the spec before you choose" + kicker "Flooring · Atlanta, GA" + lead with three concrete proof points + two buttons (Compare floors primary, Call secondary) + chip stack with four sample chips visible beside the copy. Trade, city, outcome, and primary action are all above the fold. Phone is visible in header CTA and hero secondary button. Next section (proof-bar t-mid) peeks because hero is `min-height: calc(100svh - var(--header-h))`, not 100vh. At 390 (inferred): hero__grid stacks to single column; chip-stack becomes 2-col grid; both buttons remain above fold via btn-row flex-wrap. h1 at clamp(2.6rem, min(9vw,9.5svh)+0.1rem, 5rem) renders ~2.6rem at 390px, approximately 3 lines max. Passes the five-second test cleanly.

## First screen — 9.0

**Earned:** Trade + city + outcome in h1+kicker+lead within 8 words of core message. One primary action (Compare floors), one quieter secondary (Call). Phone visible in header and hero. Proof line present in next band (sample rating 4.8, areas, hours). Next band peeks (hero is svh-based, not 100vh). Chip stack as signature visible in first screen.

**Deductions:** None from DOM. Cannot verify intro animation timing or video scrim without screenshots; no video element found in hero, so no scrim risk. Score holds at 9 anchor.

## Distinctiveness — 9.0

**Earned:** Signature "Sample Chip Cross-Section" appears in hero (chip-stack with data-sw-signature), services (chip--svc cards with chip__cross layers), reviews (chip--review with same clip-path polygon), story-cross section (data-sw-signature, cross-diagram with three layers), and footer (chip--footer with initials and cross-layer). That is 5 sections, exceeding the ≥4 threshold. Three layout families: hero split-grid with tool, full-bleed story-cross pin, centered estimator wrap, asymmetric moisture grid, break photo full-width. Palette (Georgia Clay + Bone + Terracotta) and type pair (Archivo/Karla/DM Mono) are unique per concept.json. No sibling overlap detectable from DOM alone.

**Deductions:** Cannot verify cover-the-logo test without screenshots. The chip primitive does real work (organizes specs, frames reviews, carries licence in footer), not decoration. Score at 9 anchor.

## Typography — 9.0

**Earned:** Archivo display with variable weight (font-weight: 600 on h1, 700 on headings), Karla body at clamp(1rem–1.125rem) ≥16px, DM Mono for specs/kickers/labels. Fluid scale with ≤5 distinct sizes visible (--fs--1 through --fs-h1). Tabular numerals via font-variant-numeric on [data-count]. Lead paragraph set apart with .lead class. Body measure capped at 72ch on p, 60ch on .lead. Display tracking -0.03em on h1. Line-height 0.92 on h1 (within 0.85–1.05 range). No orphans detectable in static HTML. Curly quotes not required by rubric for this context.

**Deductions:** None from DOM. Cannot verify rag or orphan prevention without rendered view. Score at 9 anchor.

## Layout and rhythm — 8.5

**Earned:** 10 sections (hero, proof-bar, services, story-cross, moisture, break, reviews, estimator, area, contact) plus footer. Each has one job. Alternating tones: t-paper → t-mid → t-light → t-deep → t-paper → t-light → t-mid → t-accent → t-deep → t-paper → t-deep. No two adjacent dark bands touch (t-deep story-cross followed by t-paper moisture; t-deep area followed by t-paper contact). Full-bleed break photo provides visual breath. Asymmetric moisture grid (copy + tool + frame). Centered estimator wrap breaks the grid intentionally. Gap between sections (var(--s-8) = 64px padding-block) exceeds gap within sections.

**Deductions:** −0.5: Services grid uses identical chip--svc card shape 10 times in a row. While each card carries different content, the repeated shape reads as a template grid rather than varied layout families. Cannot verify blank gaps or lopsided columns without screenshots.

## Photo and video — 7.0

**Earned:** All images carry descriptive alt text ("Placeholder for ..."), width/height attributes, loading="lazy", decoding="async". Photo grade filter applied consistently via CSS (saturate .85, contrast 1.05, sepia .08, hue-rotate -2deg). Object-fit: cover on all frames. Break photo has figcaption. No duplicate photo slots detected (hands-sample, detail-grain-whiteoak, process-moisture, home-atlanta are distinct data-photo values).

**Deductions:** −1.0: All images are placeholders with generic alt text ("Placeholder for ..."). Cannot verify on-topic framing, consistent crop ratios, or object-position thirds without actual media. This is expected in placeholder mode but caps the score. No video present, so no poster/timing check needed. Score reflects placeholder ceiling per task instructions.

## Copy — 9.0

**Earned:** Voice matches concept's three sample sentences (specific nouns: "wear layer", "slab moisture", "12 mil", "SPC core"). No banned phrases detected. Buttons named for actions ("Compare floors", "Book a moisture test", "Check my slab", "Calculate", "Send these numbers", "Check"). Sample labels present on reviews ("Sample review" tag on every card), rating ("Sample rating" in proof-bar), pricing ("Sample pricing" in estimator lead). Primary action consistently "Compare floors" in hero, "Get a number" in contact. Microcopy at form steps ("Step 1 · Service", etc.). No tricolon headlines. No "Get started" / "Learn more" / "Submit". H1 is 6 words. Section leads answer homeowner questions in plain language.

**Deductions:** None from DOM. Copy is specific, honest, and demo-compliant.

## Mobile — 9.0

**Earned (from CSS):** Hero stacks to single column below 900px. Chip-stack becomes 2-col at 640px+, 1-col below. Services grid: 1-col → 2-col at 640px → 4-col at 1200px. Reviews: 1-col → 2-col at 640px → 3-col at 1200px. Footer: 1-col → 2-col at 640px → 4-col at 900px. Mobile bar fixed at bottom with 80px body padding, hidden at ≥900px. Tap targets: all buttons min-height 48px, inputs height 48px. No horizontal scroll triggers detected (max-width containers, flex-wrap on btn-row and pill lists). Sticky header with transform hide/show. Skip link present.

**Deductions:** Cannot verify composed-for-phone decisions (re-cut hero, pinned scroll avoidance under 640px) without screenshots. CSS structure supports 9-level mobile composition. Score at 9 anchor with placeholder caveat.

## Accessibility — 9.0

**Earned:** Skip link to #contact. Focus-visible outline 3px solid var(--focus) with 3px offset. All form inputs have associated labels (explicit label elements wrapping inputs). aria-live="polite" on compare-output, checklist-output, est-output, zip-output, form-thankyou. aria-expanded and aria-controls on menu button. aria-label on star ratings. aria-hidden on decorative icons and quote marks. Reduced-motion media query resets all reveals, clips, transforms, and transitions to none; chip__cross-layer and cross-layer forced to scaleX(1)/opacity:1. No-JS fallback: html:not(.sw-js) rules make all [data-reveal] visible immediately. Forced-colors media query adds borders to interactive elements. Heading order: one h1, then h2s for each section, h3s for subsections — no skips detected.

**Deductions:** Cannot verify focus visibility on every tone without screenshots. Rotator widget not present, so no aria-hidden/sr-only concern. Score at 9 anchor.

## Motion and interaction — 8.5

**Earned:** Intro: chip-stack uses data-reveal-stagger with CSS transition-delay cascade (60ms stagger inferred from --d-stagger). Scroll story: story-cross section with pinned min-height calc(3*55svh + 100svh), cross-layers animate translateY on .is-in, labels fade in. Estimator has inline reveal. Hover language: btn-text underline grows via scaleX(0→1). Reduced motion fully respected. ≥3 hooks beyond plain reveals: staggered chip unclip, cross-section peel, clip reveals on frames, counter dial in estimator.

**Deductions:** −0.5: Same reveal pattern (translateY + opacity) applied to most sections via [data-reveal]. Only story-cross and chip-stack have distinct motion verbs. Cannot verify easing precision or Lenis feel without runtime. −0.5: Pinned story height calc(3*55svh + 100svh) equals 265svh, which is approximately 2.6 screens — within limit but borderline; cannot verify reversibility without interaction. Score 8.5.

## Wow moment — 8.5

**Earned:** The Material Compare tool in the hero IS the wow moment — it produces a four-column comparison tied to the thesis (spec-first decision making). Output goes to aria-live region, handoff pre-fills quote form. Cross-section peel story explains what mil numbers mean physically. Both moments are trade-specific and tied to the "see the spec" thesis.

**Deductions:** −0.5: Cannot verify that the compare output is designed in the signature's language (plain text vs styled chip) without JS execution. Tool output may be plain text in the aria-live div. Score 8.5.

## Polish — 8.5

**Earned:** SVG favicon + apple-touch-icon referenced. OG image 1200x630 declared. JSON-LD with HomeAndConstructionBusiness type and openingHoursSpecification. Theme-color set. Consistent radius (2px throughout, 999px for pills only). Print stylesheet present for estimator. Lazy images with width/height. Hero image preloaded. Forced colors handled. No console warnings detectable from DOM.

**Deductions:** −0.5: Cannot verify shadow consistency or icon stroke uniformity without visual inspection. Mixed radius between chips (2px) and pills (999px) is intentional per system but reads as two radii families. Score 8.5.

## Arithmetic

14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.5 + 8×8.5 + 4×8.5
= 126 + 108 + 90 + 85 + 56 + 72 + 63 + 63 + 102 + 68 + 34
= 867 / 100 = **8.67**

## Must

None. Static check clean. Render check passed with warnings only (missing screenshots, expected in placeholder mode). No DEMO-RULES breaches detected: all reviews labeled "Sample review", rating labeled "Sample rating", prices labeled "Sample pricing", no "our work/team", no before/after, no real address, no face-as-owner, form has honeypot and thank-you state.

## Should

1. **Where:** dist/index.html line ~1864–2012, `.chip--svc` cards  
   **Problem:** All 10 service cards use identical spec strip text "Wear: see quote / Core: varies" regardless of service type. Moisture testing, floor leveling, carpet, refinishing, stairs, and samples do not have a wear layer or core spec.  
   **Fix:** Use service-specific spec strips from facts.json blurbs. For moisture testing: "RH probe / Reading on quote". For leveling: "Grind or fill / Flat within tolerance". For carpet: "Pad weight listed / Seams out of walkway". For refinishing: "Sand to bare / Color you pick". For stairs: "Tread + riser / Match top floor". For samples: "Brought to you / In your light".

2. **Where:** dist/index.html line ~2246, `#area h2`  
   **Problem:** H2 lists all 9 service areas in a single heading, creating an excessively long heading that likely wraps to 3+ lines at 1440 and 4+ lines at 390.  
   **Fix:** Shorten to "We serve Atlanta and eight surrounding cities" and let the pill list below carry the specific names. Or move the full list to a paragraph and keep the h2 to ≤8 words.

3. **Where:** dist/index.html line ~1852, `.proof-bar__item` for hours  
   **Problem:** Nested `<span data-open-now>` inside another `<span data-open-now>` creates redundant markup that may cause the open-now kit module to double-process or render incorrectly.  
   **Fix:** Remove the outer span wrapper; keep only the inner `[data-open-now]` span.

4. **Where:** dist/index.html, all `[data-reveal]` sections  
   **Problem:** Most sections use the same translateY+opacity reveal. Only chip-stack (stagger) and story-cross (peel) have distinct motion verbs.  
   **Fix:** Add clip reveals to service cards, scale reveals to estimator result, and fade-only to quiet sections (proof-bar, contact aside) to vary entrance vocabulary per RUBRIC §3.9 anchor 9.

## Elevate

1. **Category: photo (weakest at 7.0)**  
   **Move:** When real media arrives, apply the chip clip-path polygon as a mask on the break photo and story-cross background texture, so the signature frame literally shapes the photography. This turns stock photos into concept-specific artifacts that could only belong to Twelve Mil Flooring, pushing photo toward 9.

2. **Category: layout (8.5, second weakest by weight)**  
   **Move:** Break the services chip-grid monotony by introducing a "featured service" variant at position 3 or 4 that spans two columns and uses the chip--hero size with an embedded micro-diagram (e.g., a cross-section inset showing wear/print/core for LVP). This creates a density peak within the grid and gives the scroll a loud-quiet-loud rhythm that the current uniform grid lacks.