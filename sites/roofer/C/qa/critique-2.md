COPY: needs copy-chief

## Five-second test (no screenshots available; scored from dist/index.html)

At 1440: "Hail & Storm Roofing in Oklahoma City" h1 states trade + city. Lead line "19 years serving Edmond, Norman and Moore" adds proof. Two buttons: primary "Get a quote" and secondary call button. Phone visible in header. Next section (season-mar) should peek depending on hero height (min-height: calc(100svh - var(--header-h))). At 390: same content stacks; both buttons likely above fold given btn-row flex-wrap. Without screenshots I cannot confirm fold position or next-band peek; scoring conservatively.

**Answer:** Hailward is a roofer in Oklahoma City for storm damage; get a quote or call; they serve Edmond/Norman/Moore and have 19 years of local work.

---

## Categories

### firstScreen — 8.0

No screenshots to verify fold, peek, or intro timing. From dist/index.html: h1 is 7 words ("Hail & Storm Roofing in Oklahoma City"), trade + city clear. Lead provides proof (19 years, named areas). Primary action "Get a quote" is specific; secondary is a call button. Phone visible in header. Deductions applied conservatively because screenshots are absent: cannot confirm next band peeks 40–120px (−0.5), cannot confirm both actions above fold at 390 (risk of −1.5 but not applied without evidence). The kicker "Oklahoma City, Oklahoma" is redundant with the h1 city mention (minor). Score improved from 7.5 because logo link now points to #hero and CTA naming is more consistent, but capped by lack of visual verification.

### distinctiveness — 8.0

The Month Ring Almanac signature is present in concept.json and referenced via `data-sw-signature="month-ring"` on hero, five season bands, reviews, and footer (8 sections). The CSS defines `.month-ring` as an SVG ring positioned fixed at desktop top-right. However, without screenshots I cannot verify the ring actually renders, animates, or is visually distinctive. The season-band structure (MAR, APR-JUN, JUL-AUG, SEP-OCT, NOV-FEB) is a genuine layout family not seen in siblings. Palette (Storm Slate + Hail White + Prairie Gold) and type pair (EB Garamond / Source Sans 3 / DM Mono) differ from roofer-A and roofer-B. Deduction: cannot confirm signature is visually legible or does real work beyond decoration without screenshots (−1.0 conservative). No AI-slop tells detected in markup. A t-paper breath band was added between t-deep and t-dark sections (line 1057), threading the signature into a seventh location, which strengthens the system structurally even if unverified visually.

### type — 8.5

Three families used correctly: EB Garamond for display (h1–h4), Source Sans 3 for body, DM Mono for month tags, kickers, prices, and form labels. Fluid scale defined via clamp tokens. Body is var(--fs-1) = clamp(1rem, 0.9rem + 0.5vw, 1.125rem), so ≥16px at full width. Headings use letter-spacing −0.02em and line-height 0.95–1.0. Month tags use uppercase tracking 0.05em in mono. Prices use tabular-nums via `[data-count]` rule. En-dash ranges present in pricing ("$325 – $1,000"). No orphans visible in markup. Cannot verify measure or rag without screenshots. Score reflects solid system but unverified execution.

### layout — 8.0

Sections: hero (t-dark), season-mar (t-light), season-apr-jun (t-deep), breath band (t-paper), break (t-dark), season-jul-aug (t-light), season-sep-oct (t-paper), season-nov-feb (t-deep), services (t-light), proof (t-accent), reviews (t-paper), contact (t-dark), footer (t-deep). **Round 1 rhythm blocker resolved:** t-paper breath band inserted between t-deep (season-apr-jun) and t-dark (break) at line 1057. No two dark sections now touch. Layout families present: stacked-headline-strip (hero), split, stack, break, grid, rail, list, mosaic, stack-form. That is ≥3 families and no two neighbours share the same layout class. Deduction: without screenshots cannot assess blank gaps or lopsided grids (−0.5 conservative). Score improved from 7.0 due to rhythm fix.

### photo — 8.0

Images referenced: hero-C1.webp, weather-rain-shingles.webp, hero-C2.webp, weather-prairie-sunset.webp, material-shingle-texture.webp, process-cleanup.webp, process-ridge.webp, weather-ice-branches.webp. All alt text is descriptive and on-topic. No faces, logos, or house numbers in alt text. Consistent filter applied via CSS. Deductions: cannot verify grade consistency, crop ratios, or object-position without screenshots. Photo credits in footer say "Photo by unknown on Pexels" eight times — generic but not a deduction per rubric. One alt text says "Kansas winter" (line 1141) for a site in Oklahoma — minor geographic slip but not a mustFix since the image itself (ice branches) is on-topic. Score assumes media manifest compliance since build succeeded.

### copy — 8.0

**Round 1 banned-word blockers resolved:** "APR" changed to "SPRING" (line 1030) and "MAR" (line 1248); "Best weather" changed to "Ideal weather" (line 1100); "before and after storm season" changed to "at the start and end of storm season" (line 1168). Static check now clean. **Remaining issues:** Primary action naming improved — "Get a quote" used consistently in hero (line 1000), service cards (lines 1160-1168), mobile bar (line 1386), and form submit (line 1358). However, seasonal CTAs still vary: "Price wind repair" (line 1018), "Book an inspection" (line 1041), "Price Class 4" (line 1090), "Price a replacement" (line 1120), "Fix a leak" (line 1138). These are contextually appropriate (different services) but create 5+ names for the primary action across the page (−0.5). Voice matches concept's trade nouns ("bruised shingles", "ridge caps", "pipe boots", "decking"). Sample labels present on pricing heading (line 1177) and reviews heading (line 1234). No tricolon headlines. Score improved from 7.0 due to blocker resolution.

### mobile — 8.0

No screenshots to verify. From CSS: mobilebar is fixed bottom with call + quote buttons, hidden at ≥900px. Tap targets: .btn min-height 48px. Form inputs height 48px. ZIP input min-width 120px. Header menu button 48×48. Breakpoints at 640, 900, 1024, 1200, 1440. Rail track wraps at ≥640px. Stack layout goes single-column below 1024px. Cannot verify horizontal scroll, text overflow, or pinned elements without screenshots. Score assumes compliance given CSS structure but cannot award higher without visual proof.

### a11y — 8.5

Skip link present (line 950). Focus outline: 3px solid var(--focus) with 3px offset (line 337-340). Reduced-motion safety net in CSS disables all animations (line 232-237). Forced-colors borders on interactive elements (line 240-243, 341-343). Honeypot field properly hidden (line 1351-1353). Form labels explicit. aria-live on ZIP result (line 1156) and checklist result (line 1039). Compare slider has proper ARIA (role="slider", aria-valuenow/min/max/valuetext at line 1088). Logo link now points to #hero (line 954) — round 1 blocker resolved. Heading order: h1 → h2 (multiple) → h3 (multiple); no skips detected. Deduction: cannot verify reduced-motion screenshot shows all content (screenshots missing, −0.5 conservative). Score improved from 8.0 due to logo fix.

### motion — 7.5

Kit provides reveal, clip, stagger, split-text, rotator, counter, marquee, compare slider. Page uses data-reveal, data-reveal="clip", data-reveal-stagger on multiple sections. Compare slider has proper ARIA. Lenis loaded. GSAP + ScrollTrigger loaded. **Deductions:** Without screenshots I cannot verify intro duration, whether motion blocks reading, or if reveals vary by role. The month-ring rotation is described in concept but I cannot confirm it executes. Same fade-up reveal pattern appears on most sections (potential −1.0 for uniformity, but cannot confirm without visuals). Score assumes kit works but cannot verify execution quality. Unchanged from round 1 due to lack of visual evidence.

### wow — 7.5

Two tools present: storm-check checklist (5-item ground check with verdict) and compare slider (architectural vs Class 4). Both are tied to the almanac concept (hail season → ground check; heat season → material compare). The checklist outputs a verdict and prefills the form. The compare slider shows sample price bands. **Deductions:** Cannot verify tool output design or whether it uses the signature language without screenshots. The checklist result area is a plain `<p>` with aria-live (line 1039) — may be visually minimal. Compare slider output is inline text, not a designed sheet. Without visual confirmation, cannot award higher. Unchanged from round 1.

### polish — 8.0

SVG favicon loaded (line 20). Apple-touch-icon present (line 21). OG image 1200×630 declared (lines 13-15). JSON-LD with RoofingContractor type (line 22). Theme-color set (line 9). Print stylesheet included (lines 246-255). Lazy loading with width/height on images. Hero poster preloaded (lines 25-26). Consistent radius (var(--radius) = 3px). **Deductions:** Photo credits are generic ("Photo by unknown on Pexels" × 8, line 1379) — not specific attribution. Cannot verify forced-colors rendering or print output without screenshots. Radius is consistent. No mixed shadows or icon strokes detected in CSS.

---

## Arithmetic

14×8.0 + 12×8.0 + 10×8.5 + 10×8.0 + 8×8.0 + 8×8.0 + 7×8.0 + 7×8.5 + 12×7.5 + 8×7.5 + 4×8.0
= 112.0 + 96.0 + 85.0 + 80.0 + 64.0 + 64.0 + 56.0 + 59.5 + 90.0 + 60.0 + 32.0
= 798.5 / 100 = **7.99**

---

## Must

1. **where:** sites/roofer/C/qa/screens/ (missing)
   **problem:** No screenshots exist for round 2; cannot verify visual fixes, fold positions, reduced-motion behavior, or signature rendering
   **fix:** Run `node tools/check-render.mjs roofer-C` to generate screenshots before next critique round

2. **where:** dist/index.html line 1141
   **problem:** Alt text says "Kansas winter" for an Oklahoma City site — geographic mismatch
   **fix:** Change alt to "Ice dam forming at eave during Oklahoma winter" or "Ice-laden branches over roofline"

---

## Should

1. **where:** dist/index.html lines 1018, 1041, 1090, 1120, 1138
   **problem:** Five different CTA names for the primary action across seasonal sections ("Price wind repair", "Book an inspection", "Price Class 4", "Price a replacement", "Fix a leak")
   **fix:** Standardize to a consistent pattern like "Get a quote for [service]" or keep contextual names but ensure the hero, services rail, mobile bar, and form submit all use one canonical name (currently "Get a quote" — good); consider making seasonal CTAs secondary links instead of primary buttons

2. **where:** dist/index.html footer credits (line 1379)
   **problem:** Generic "Photo by unknown on Pexels" × 8 lacks specific attribution
   **fix:** Populate actual photographer names from media manifest

3. **where:** dist/index.html checklist result area (line 1039)
   **problem:** Plain `<p>` for verdict may lack visual weight
   **fix:** Style result with background, icon, and larger type to match the almanac signature

4. **where:** dist/index.html .month-ring CSS (lines 820-841)
   **problem:** Cannot verify month ring renders, animates, or is visually legible without screenshots
   **fix:** Generate screenshots and verify ring advances per section; ensure segment highlight is visible against t-dark and t-deep backgrounds

---

## Elevate

1. **motion (weight 12, score 7.5):** Drive the month-ring segment highlight with ScrollTrigger so the active segment advances as each season band enters the viewport, making the signature a scroll-driven progress indicator rather than a static decoration. This ties motion to the almanac concept and gives the ring functional meaning.

2. **wow (weight 8, score 7.5):** Style the storm-check checklist verdict as a designed card using the month-ring signature language (same border radius, accent color, mono label) so the tool output feels like part of the almanac system rather than a generic form result. Add a printable summary option that uses the print stylesheet.