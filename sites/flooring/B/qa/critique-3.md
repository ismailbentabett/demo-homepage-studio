COPY: ok

# Critique — flooring-B Round 3 (Post-Fix Verification)

No screenshots available; scored from `dist/index.html` DOM, CSS, and token/hook analysis per RUBRIC §2.10 allowance for placeholder mode. This round verifies whether the two round-2 should-fix items and the elevate moves were applied.

## Five-second test (DOM proxy)

At 1440 (inferred from CSS): h1 "See the spec before you choose" + kicker "Flooring · Atlanta, GA" + lead with three concrete proof points + two buttons (Compare floors primary, Call secondary) + chip stack with four sample chips visible beside the copy. Trade, city, outcome, and primary action are all above the fold. Phone is visible in header CTA and hero secondary button. Next section (proof-bar t-mid) peeks because hero is `min-height: calc(100svh - var(--header-h))`, not 100vh. At 390 (inferred): hero__grid stacks to single column; chip-stack becomes 2-col grid; both buttons remain above fold via btn-row flex-wrap. h1 at clamp(2.6rem, min(9vw,9.5svh)+0.1rem, 5rem) renders ~2.6rem at 390px, approximately 3 lines max. Passes the five-second test cleanly.

## First screen — 9.0

**Earned:** Trade + city + outcome in h1+kicker+lead within 8 words of core message. One primary action (Compare floors), one quieter secondary (Call). Phone visible in header and hero. Proof line present in next band (sample rating 4.8, areas, hours). Next band peeks (hero is svh-based, not 100vh). Chip stack as signature visible in first screen.

**Deductions:** None from DOM. Cannot verify intro animation timing or video scrim without screenshots; no video element found in hero, so no scrim risk. Score holds at 9 anchor.

## Distinctiveness — 9.0

**Earned:** Signature "Sample Chip Cross-Section" appears in hero (chip-stack with data-sw-signature), services (chip--svc cards with chip__cross layers), reviews (chip--review with same clip-path polygon), story-cross section (data-sw-signature, cross-diagram with three layers), and footer (chip--footer with initials and cross-layer). That is 5 sections, exceeding the ≥4 threshold. Three layout families: hero split-grid with tool, full-bleed story-cross pin, centered estimator wrap, asymmetric moisture grid, break photo full-width. Palette (Georgia Clay + Bone + Terracotta) and type pair (Archivo/Karla/DM Mono) are unique per concept.json. Break photo uses chip clip-path polygon as mask (CSS line 703-705), threading signature into photography.

**Deductions:** Cannot verify cover-the-logo test without screenshots. The chip primitive does real work (organizes specs, frames reviews, carries licence in footer, masks break photo), not decoration. Score at 9 anchor.

## Typography — 9.0

**Earned:** Archivo display with variable weight (font-weight: 600 on h1, 700 on headings), Karla body at clamp(1rem–1.125rem) ≥16px, DM Mono for specs/kickers/labels. Fluid scale with ≤5 distinct sizes visible (--fs--1 through --fs-h1). Tabular numerals via font-variant-numeric on [data-count]. Lead paragraph set apart with .lead class. Body measure capped at 72ch on p, 60ch on .lead. Display tracking -0.03em on h1. Line-height 0.92 on h1 (within 0.85–1.05 range). No orphans detectable in static HTML.

**Deductions:** None from DOM. Cannot verify rag or orphan prevention without rendered view. Score at 9 anchor.

## Layout and rhythm — 8.5

**Earned:** 10 sections (hero, proof-bar, services, story-cross, moisture, break, reviews, estimator, area, contact) plus footer. Each has one job. Alternating tones: t-paper → t-mid → t-light → t-deep → t-paper → t-light → t-mid → t-accent → t-deep → t-paper → t-deep. No two adjacent dark bands touch. Full-bleed break photo provides visual breath. Asymmetric moisture grid (copy + tool + frame). Centered estimator wrap breaks the grid intentionally. Gap between sections (var(--s-8) = 64px padding-block) exceeds gap within sections. Featured service variant (first-child spans 2 cols at 640px+, has micro-diagram gradient via ::after pseudo-element) adds density peak.

**Deductions:** −0.5: Services grid still uses identical chip--svc card shape 10 times in a row. While the spec strip text is now service-specific (resolved in round 3), the visual structure of each card remains uniform. The featured variant helps but does not fully break the monotony of 10 identical containers. Cannot verify blank gaps or lopsided columns without screenshots.

## Photo and video — 7.0

**Earned:** All images carry descriptive alt text, width/height attributes, loading="lazy", decoding="async". Photo grade filter applied consistently via CSS (saturate .85, contrast 1.05, sepia .08, hue-rotate -2deg). Object-fit: cover on all frames. Break photo has figcaption and chip-mask clip-path. No duplicate photo slots detected (hands-sample, detail-grain-whiteoak, process-moisture, home-atlanta are distinct data-photo values).

**Deductions:** −1.0: All images are placeholders with generic alt text ("Placeholder for ..."). Cannot verify on-topic framing, consistent crop ratios, or object-position thirds without actual media. This is expected in placeholder mode but caps the score. No video present, so no poster/timing check needed. Score reflects placeholder ceiling per task instructions.

## Copy — 9.0

**Earned:** Voice matches concept's three sample sentences (specific nouns: "wear layer", "slab moisture", "12 mil", "SPC core"). No banned phrases detected. Buttons named for actions ("Compare floors", "Book a moisture test", "Check my slab", "Calculate", "Send these numbers", "Check"). Sample labels present on reviews ("Sample review" tag on every card), rating ("Sample rating" in proof-bar), pricing ("Sample pricing" in estimator lead). Primary action consistently "Compare floors" in hero, "Get a number" in contact. Microcopy at form steps ("Step 1 · Service", etc.). No tricolon headlines. No "Get started" / "Learn more" / "Submit". H1 is 6 words. Section leads answer homeowner questions in plain language. Area h2 shortened to "We serve Atlanta and eight surrounding cities" per round 1 should-fix. **Round 2 should-fix #1 RESOLVED:** All 10 service cards now use service-specific specA/specB from facts.json (verified at dist/index.html lines 1908-2046). LVP shows "Wear layer on quote / SPC or WPC core", engineered shows "Veneer thickness listed / Ply or HDF core", moisture shows "RH probe reading / Result on quote", etc. Every card is now a trade-specific data artifact.

**Deductions:** None remaining. The generic filler copy issue is fully resolved. Score elevated from 8.5 to 9.0.

## Mobile — 9.0

**Earned (from CSS):** Hero stacks to single column below 900px. Chip-stack becomes 2-col at 640px+, 1-col below. Services grid: 1-col → 2-col at 640px → 4-col at 1200px. Reviews: 1-col → 2-col at 640px → 3-col at 1200px. Footer: 1-col → 2-col at 640px → 4-col at 900px. Mobile bar fixed at bottom with 80px body padding, hidden at ≥900px. Tap targets: all buttons min-height 48px, inputs height 48px. No horizontal scroll triggers detected (max-width containers, flex-wrap on btn-row and pill lists). Sticky header with transform hide/show. Skip link present.

**Deductions:** Cannot verify composed-for-phone decisions (re-cut hero, pinned scroll avoidance under 640px) without screenshots. CSS structure supports 9-level mobile composition. Score at 9 anchor with placeholder caveat.

## Accessibility — 9.0

**Earned:** Skip link to #contact. Focus-visible outline 3px solid var(--focus) with 3px offset. All form inputs have associated labels (explicit label elements wrapping inputs). aria-live="polite" on compare-output, checklist-output, est-output, zip-output, form-thankyou. aria-expanded and aria-controls on menu button. aria-label on star ratings. aria-hidden on decorative icons and quote marks. Reduced-motion media query resets all reveals, clips, transforms, and transitions to none; chip__cross-layer and cross-layer forced to scaleX(1)/opacity:1. No-JS fallback: html:not(.sw-js) rules make all [data-reveal] visible immediately. Forced-colors media query adds borders to interactive elements. Heading order: one h1, then h2s for each section, h3s for subsections — no skips detected.

**Deductions:** Cannot verify focus visibility on every tone without screenshots. Rotator widget not present, so no aria-hidden/sr-only concern. Score at 9 anchor.

## Motion and interaction — 9.0

**Earned:** Intro: chip-stack uses data-reveal-stagger with CSS transition-delay cascade (60ms stagger). Scroll story: story-cross section with pinned min-height calc(3*55svh + 100svh), cross-layers animate translateY on .is-in, labels fade in. Estimator has scale reveal (data-reveal="scale"). Hover language: btn-text underline grows via scaleX(0→1). Reduced motion fully respected. ≥4 hooks beyond plain reveals: staggered chip unclip, cross-section peel, clip reveals on frames and service cards, scale reveal on estimator, fade-only on proof-bar and contact aside. Motion vocabulary varies by section role per RUBRIC §3.9 anchor 9.

**Deductions:** None. Pinned story height calc(3*55svh + 100svh) equals 265svh, approximately 2.6 screens — within limit and reversible. Score holds at 9.0.

## Wow moment — 8.5

**Earned:** The Material Compare tool in the hero IS the wow moment — it produces a four-column comparison tied to the thesis (spec-first decision making). Output goes to aria-live region, handoff pre-fills quote form. Cross-section peel story explains what mil numbers mean physically. Both moments are trade-specific and tied to the "see the spec" thesis.

**Deductions:** −0.5: Cannot verify that the compare output is designed in the signature's language (plain text vs styled chip) without JS execution. Tool output may be plain text in the aria-live div. Score 8.5.

## Polish — 8.5

**Earned:** SVG favicon + apple-touch-icon referenced. OG image 1200x630 declared. JSON-LD with HomeAndConstructionBusiness type and openingHoursSpecification. Theme-color set. Consistent radius (2px throughout, 999px for pills only). Print stylesheet present for estimator. Lazy images with width/height. Hero image preloaded. Forced colors handled. No console warnings detectable from DOM.

**Deductions:** −0.5: Cannot verify shadow consistency or icon stroke uniformity without visual inspection. Mixed radius between chips (2px) and pills (999px) is intentional per system but reads as two radii families. Score 8.5.

## Arithmetic

14×9.0 + 12×9.0 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×8.5 + 4×8.5
= 126 + 108 + 90 + 85 + 56 + 72 + 63 + 63 + 108 + 68 + 34
= 873 / 100 = **8.73**

## Must

None. Static check clean. Render check passed with warnings only (missing screenshots, expected in placeholder mode). No DEMO-RULES breaches detected: all reviews labeled "Sample review", rating labeled "Sample rating", prices labeled "Sample pricing", no "our work/team", no before/after, no real address, no face-as-owner, form has honeypot and thank-you state.

## Should

1. **Where:** dist/index.html line 1893, `.proof-bar__item` for hours
   **Problem:** Nested `<span data-open-now>` inside another `<span data-open-now>` creates redundant markup that may cause the open-now kit module to double-process or render incorrectly. Round 2 should-fix #2 was NOT applied.
   **Fix:** Remove the outer span wrapper; keep only the inner `[data-open-now]` span. Change line 1893 from `<span data-open-now><span data-open-now>Mon–Thu...</span></span>` to `<span data-open-now>Mon–Thu 7:30 am – 5 pm · Fri 7:30 am – 4 pm · Sat 9 am – noon</span>`.

## Elevate

1. **Category: photo (weakest at 7.0)**
   **Move:** When real media arrives, apply the chip clip-path polygon as a mask on the story-cross background texture and the moisture frame, not just the break photo, so the signature frame literally shapes every photograph into concept-specific artifacts that could only belong to Twelve Mil Flooring. This pushes photo toward 9 by making the frame treatment unique to the concept per RUBRIC §3.5 anchor 10.

2. **Category: layout (8.5, second weakest by weight among non-photo categories)**
   **Move:** Break the service card grid monotony by giving every third card a different aspect ratio or a full-width "spec callout" variant that spans two columns with the cross-section diagram inline, turning the 10-card repetition into a deliberate rhythm of standard/detail/standard that reads as curated rather than templated.