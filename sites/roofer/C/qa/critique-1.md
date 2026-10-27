COPY: needs copy-chief

## Five-second test (no screenshots available; scored from dist/index.html)

At 1440: "Hail & Storm Roofing in Oklahoma City" h1 states trade + city. Lead line "19 years serving Edmond, Norman and Moore" adds proof. Two buttons: primary "Get my number" and secondary call button. Phone visible in header. Next section (season-mar) should peek depending on hero height (min-height: calc(100svh - var(--header-h))). At 390: same content stacks; both buttons likely above fold given btn-row flex-wrap. Without screenshots I cannot confirm fold position or next-band peek; scoring conservatively.

**Answer:** Hailward is a roofer in Oklahoma City for storm damage; call or get a number; they serve Edmond/Norman/Moore and have 19 years of local work.

---

## Categories

### firstScreen — 7.5

No screenshots to verify fold, peek, or intro timing. From dist/index.html: h1 is 7 words ("Hail & Storm Roofing in Oklahoma City"), trade + city clear. Lead provides proof (19 years, named areas). Primary action "Get my number" is specific; secondary is a call button. Phone visible in header. Deductions applied conservatively because screenshots are absent: cannot confirm next band peeks 40–120px (−0.5), cannot confirm both actions above fold at 390 (risk of −1.5 but not applied without evidence). The kicker "Oklahoma City, Oklahoma" is redundant with the h1 city mention (minor). Score capped by lack of visual verification and the static blocker on the logo link (href="#") which affects first-screen trust.

### distinctiveness — 8.0

The Month Ring Almanac signature is present in concept.json and referenced via `data-sw-signature="month-ring"` on hero, five season bands, reviews, and footer (8 sections). The CSS defines `.month-ring` as an SVG ring positioned fixed at desktop top-right. However, without screenshots I cannot verify the ring actually renders, animates, or is visually distinctive. The season-band structure (MAR, APR-JUN, JUL-AUG, SEP-OCT, NOV-FEB) is a genuine layout family not seen in siblings. Palette (Storm Slate + Hail White + Prairie Gold) and type pair (EB Garamond / Source Sans 3 / DM Mono) differ from roofer-A (condensed sans + barn red) and roofer-B (mono-accent + report paper). Deduction: cannot confirm signature is visually legible or does real work beyond decoration without screenshots (−1.0 conservative). No AI-slop tells detected in markup.

### type — 8.5

Three families used correctly: EB Garamond for display (h1–h4), Source Sans 3 for body, DM Mono for month tags, kickers, prices, and form labels. Fluid scale defined via clamp tokens. Body is var(--fs-1) = clamp(1rem, 0.9rem + 0.5vw, 1.125rem), so ≥16px at full width. Headings use letter-spacing −0.02em and line-height 0.95–1.0. Month tags use uppercase tracking 0.05em in mono. Prices use tabular-nums via `[data-count]` rule. Deductions: no evidence of curly quotes or en-dash ranges in the built HTML (straight hyphens in price ranges "$325 – $1,000" use en-dash correctly actually — the HTML shows " – " which is correct). No orphans visible in markup. Cannot verify measure or rag without screenshots. Score reflects solid system but unverified execution.

### layout — 7.0

Sections: hero (t-dark), season-mar (t-light), season-apr-jun (t-deep), break (t-dark), season-jul-aug (t-light), season-sep-oct (t-paper), season-nov-feb (t-deep), services (t-light), proof (t-accent), reviews (t-paper), contact (t-dark), footer (t-deep). **Static blocker: two dark sections touch** — season-apr-jun (t-deep) at line 1027 is immediately followed by break (t-dark) at line 1057. This violates rhythm rules (−1.0). Layout families present: stacked-headline-strip (hero), split, stack, break, grid, rail, list, mosaic, stack-form. That is ≥3 families and no two neighbours share the same layout class. The t-deep → t-dark adjacency is the critical failure. Without screenshots I cannot assess blank gaps or lopsided grids.

### photo — 8.0

Images referenced: hero-C1.webp, weather-rain-shingles.webp, hero-C2.webp, weather-prairie-sunset.webp, material-shingle-texture.webp, process-cleanup.webp, process-ridge.webp, weather-ice-branches.webp. All alt text is descriptive and on-topic (storm damage, rain on shingles, metal installation, prairie sunset, shingle texture, magnet sweep, ridge cap, ice branches). No faces, logos, or house numbers in alt text. Consistent filter applied via CSS (`saturate(0.8) contrast(1.08) sepia(0.06) brightness(0.95)`). Deductions: cannot verify grade consistency, crop ratios, or object-position without screenshots. Photo credits in footer say "Photo by unknown on Pexels" eight times — generic but not a deduction per rubric. Score assumes media manifest compliance since build succeeded.

### copy — 7.0

**Static blockers (mustFix):**
- "APR" appears in month tag at line 1030 and review card at line 1276 — flagged as banned (interpreted as 0% APR financial term). Context is clearly a month abbreviation, but the tool flags it. Must be resolved or exempted.
- "Best weather for a full replacement" at line 1092 — "Best" is a banned superlative claim.
- "A walk-through before and after storm season" at line 1203 — "before and after" is banned (stock photos are not this business's jobs). Phrase is about timing, not photos, but tool flags it.

Beyond blockers: voice matches concept's three sentences (specific trade nouns like "bruised shingles", "ridge caps", "pipe boots", "decking"). Buttons are action-specific ("Price wind repair", "Book an inspection", "Fix a leak", "Price Class 4"). Primary action varies: "Get my number" (hero), "Price it" (services rail), "Send request" (form). This inconsistency is a −0.5 deduction. Sample labels present on pricing heading and reviews heading. No tricolon headlines. No "Get started" or "Learn more". The banned-word blockers cap this category.

### mobile — 8.0

No screenshots to verify. From CSS: mobilebar is fixed bottom with call + quote buttons, hidden at ≥900px. Tap targets: .btn min-height 48px. Form inputs height 48px. ZIP input min-width 120px. Header menu button 48×48. Breakpoints at 640, 900, 1024, 1200, 1440. Rail track wraps at ≥640px. Stack layout goes single-column below 1024px. Cannot verify horizontal scroll, text overflow, or pinned elements without screenshots. Score assumes compliance given CSS structure but cannot award higher without visual proof.

### a11y — 8.0

Skip link present. Focus outline: 3px solid var(--focus) with 3px offset. Reduced-motion safety net in CSS disables all animations. Forced-colors borders on interactive elements. Honeypot field properly hidden. Form labels explicit. aria-live on ZIP result and checklist result. Dialog/popup support in kit CSS. **Deductions:** Logo link href="#" is a dead link (static blocker) — keyboard users land nowhere. Cannot verify reduced-motion screenshot shows all content (screenshots missing). Heading order: h1 → h2 (multiple) → h3 (multiple); no skips detected in markup. Rotator not used on this page. Score reflects solid foundation but unverified reduced-motion behavior and the broken logo link.

### motion — 7.5

Kit provides reveal, clip, stagger, split-text, rotator, counter, marquee, compare slider. Page uses data-reveal, data-reveal="clip", data-reveal-stagger on multiple sections. Compare slider has proper ARIA (role="slider", aria-valuenow/min/max/valuetext). Lenis loaded. GSAP + ScrollTrigger loaded. **Deductions:** Without screenshots I cannot verify intro duration, whether motion blocks reading, or if reveals vary by role. The month-ring rotation is described in concept but I cannot confirm it executes. Same fade-up reveal pattern appears on most sections (potential −1.0 for uniformity, but cannot confirm without visuals). Score assumes kit works but cannot verify execution quality.

### wow — 7.5

Two tools present: storm-check checklist (5-item ground check with verdict) and compare slider (architectural vs Class 4). Both are tied to the almanac concept (hail season → ground check; heat season → material compare). The checklist outputs a verdict and prefills the form. The compare slider shows sample price bands. **Deductions:** Cannot verify tool output design or whether it uses the signature language without screenshots. The checklist result area is a plain `<p>` with aria-live — may be visually minimal. Compare slider output is inline text, not a designed sheet. Without visual confirmation, cannot award higher.

### polish — 8.0

SVG favicon loaded. Apple-touch-icon present. OG image 1200×630 declared. JSON-LD with RoofingContractor type. Theme-color set. Print stylesheet included (hides motion, shows estimator). Lazy loading with width/height on images. Hero poster preloaded. Consistent radius (var(--radius) = 3px). **Deductions:** Photo credits are generic ("Photo by unknown on Pexels" × 8) — not specific attribution. Cannot verify forced-colors rendering or print output without screenshots. Radius is consistent. No mixed shadows or icon strokes detected in CSS.

---

## Arithmetic

14×7.5 + 12×8.0 + 10×8.5 + 10×7.0 + 8×8.0 + 8×7.0 + 7×8.0 + 7×8.0 + 12×7.5 + 8×7.5 + 4×8.0
= 105.0 + 96.0 + 85.0 + 70.0 + 64.0 + 56.0 + 56.0 + 56.0 + 90.0 + 60.0 + 32.0
= 770.0 / 100 = **7.70**

---

## Must

1. **where:** dist/index.html line 1030, 1276 (static.json blocker "banned: APR")
   **problem:** "APR" flagged as financial term; context is month abbreviation
   **fix:** Change month tag text to "Apr" or "APRIL" or add exemption comment; coordinate with static check tool owner if false positive

2. **where:** dist/index.html line 1092 (static.json blocker "banned: Best")
   **problem:** "Best weather for a full replacement" uses banned superlative
   **fix:** Rewrite to "Ideal weather for a full replacement" or "Build-season weather for a full replacement"

3. **where:** dist/index.html line 1203 (static.json blocker "banned: before and after")
   **problem:** "A walk-through before and after storm season" triggers before/after ban
   **fix:** Rewrite to "A walk-through ahead of and following storm season" or "Pre- and post-storm roof check"

4. **where:** src/index.html line 61 (static.json blocker "literal-fact: Oklahoma City")
   **problem:** Literal city name typed into source instead of token
   **fix:** Replace with `{{biz.city}}` token

5. **where:** src/index.html line 62 (static.json blocker "literal-fact: Edmond")
   **problem:** Literal area name typed into source instead of token
   **fix:** Replace with appropriate token from `{{biz.areas}}`

6. **where:** dist/index.html lines 1027+1057 (static.json blocker "rhythm: two dark sections touch")
   **problem:** t-deep (season-apr-jun) immediately followed by t-dark (break) reads as one block
   **fix:** Insert a t-light or t-paper separator band between them, or change break to t-paper

7. **where:** dist/index.html line 954 (static.json blocker "link: href='#'")
   **problem:** Logo link goes nowhere
   **fix:** Change to `href="#hero"` or remove the link entirely

8. **where:** dist/index.html line 1000 (copy inconsistency)
   **problem:** Primary action named "Get my number" in hero, "Price it" in services rail, "Send request" in form — three names for one action
   **fix:** Standardize to one name (e.g., "Get a quote" or "Price my roof") across all CTAs

---

## Should

1. **where:** dist/index.html hero section
   **problem:** Cannot verify next band peeks 40–120px without screenshots
   **fix:** Ensure hero min-height allows 40–120px of next section to show; test at 1440×900

2. **where:** dist/index.html .month-ring CSS
   **problem:** Cannot verify month ring renders, animates, or is visually legible without screenshots
   **fix:** Generate screenshots and verify ring advances per section; ensure segment highlight is visible against t-dark and t-deep backgrounds

3. **where:** dist/index.html footer credits
   **problem:** Generic "Photo by unknown on Pexels" × 8 lacks specific attribution
   **fix:** Populate actual photographer names from media manifest

4. **where:** dist/index.html checklist result area
   **problem:** Plain `<p>` for verdict may lack visual weight
   **fix:** Style result with background, icon, and larger type to match the almanac signature

---

## Elevate

1. **layout (weight 10, score 7.0):** Break the t-deep → t-dark adjacency by inserting a t-paper breath band between season-apr-jun and the break photo. Use the month-ring signature as a horizontal divider within that band so the rhythm fix also threads the signature into a seventh location.

2. **copy (weight 8, score 7.0):** After resolving the three banned-word blockers, unify the primary action name and rewrite every section headline to answer one homeowner question from brief §1 in the homeowner's own words (e.g., "Will insurance pay?" → "We document every finding with a photo your adjuster can use"). This moves copy from compliance to conviction.