COPY: ok

## Five-second test (DOM-based, no screenshots)

At 1440 and 390 the first screen shows: "Measured before it is priced" as h1, kicker "Albany trim, built-ins & stair carpentry", proof line "213 sample reviews · 19 yrs in Albany", two CTAs (Call + Price it), phone visible in header and hero CTA. Trade + city + outcome are clear within 3 seconds. The story-pole ruler is present in the left margin at ≥900px; on mobile it is hidden via CSS (`display:none` under 900px). Next section peeks because hero is `min-height: calc(100svh - var(--header-h))`, not 100vh.

## Categories

### firstScreen — 8.5
**Earned:** Trade + city + outcome in h1 ("Measured before it is priced" + kicker naming Albany trim/built-ins/stairs). Phone visible in header and hero CTA. Two distinct CTAs with primary/secondary hierarchy. Proof line present with Sample tag. Hero uses offset-frame-overlap layout per concept.json heroFamily 14.
**Deductions:**
- −0.5: h1 does not explicitly name trade or city; it relies entirely on the kicker for "Albany" and "carpentry". At a glance the h1 alone reads as a slogan. RUBRIC §3.1 anchor 9 requires "h1 states trade + city + outcome in ≤ 8 words". This meets outcome but not trade+city in the h1 itself.
- −0.5: No visual confirmation that next band peeks 40–120px without screenshots; CSS sets `min-height: calc(100svh - var(--header-h))` which should peek, but cannot verify exact pixel amount from DOM alone. Conservative deduction.
- −0.5: Placeholder hero image (`placeholder-hero-B1.webp`) means the offset-frame-overlap composition cannot be visually verified; dimension callouts are present in DOM (132″ crown, 84″ head, 0″ floor) but their visual alignment to the photo frame is unconfirmed.

### distinctiveness — 8.5
**Earned:** Story Pole Ruler signature is structurally present: fixed left-margin ruler with tick marks at 0, 9, 36, 42, 84, 132 inches (lines 558–567). Signature appears in hero (dimension callouts), services (height-tag numbering 01–09), tools (estimator outputs in mono), proof (tolerance-pill "miters < 1/32″"), and footer (license in mono). Palette is Graphite Vellum + Pencil Mark (#1a1c20 ink, #f4f1ea paper, #b54200 accent) — distinct from sibling A (harbor teal/oxide red) and C (night-blue/amber). Three layout families: offset-frame-overlap hero, split-grid tools, full-bleed break.
**Deductions:**
- −0.5: Ruler is `display: none` below 900px (line 498), so on mobile the signature is invisible. RUBRIC §3.2 anchor 9 requires signature in ≥4 sections including hero and footer; it is present in DOM but not rendered on phone viewports.
- −0.5: Services grid uses 9 identical card shapes with only a vertical height-tag differentiator. While the numbering system ties to the story pole, the cards themselves are uniform. Borderline "three icon-in-square cards" pattern adapted to 9 cards; not quite the same tell but the repetition is flat.
- −0.5: Cannot verify cover-the-logo test without screenshots. DOM structure supports distinctiveness but visual execution is unconfirmed.

### type — 9.0
**Earned:** Three-family system executed correctly: Anybody (display, variable wdth 75, wght 700), Figtree (text), DM Mono (accent for measurements, prices, labels). Fluid scale with clamp values (lines 262–267). Body ≥16px (fs-0 clamps to 0.9375rem–1.0625rem). Measure capped at 65ch (line 315). Tabular numerals on counters and prices via `font-variant-numeric: tabular-nums` (line 131). Display tracking −0.03em (line 310). Kicker uses uppercase + 0.08em tracking. ≤5 distinct sizes visible on page. No orphans detectable in DOM headings.
**Deductions:**
- −0.5: Straight quotes detected in review text: "miters < 1/32″" uses straight double-quote in tolerance-pill (line 777). Should use curly quotes or ″ symbol consistently. Minor but visible typographic detail.
- −0.5: Cannot verify rag, line-height on display, or en-dash usage without visual inspection. DOM shows correct CSS values but rendering is unconfirmed.

### layout — 8.5
**Earned:** 10 sections with one job each: hero, services, rot-tool, break, molding-tool, builtin-tool, proof, area, schedule, contact. Alternating tones: paper → mid → paper → deep → accent → paper → mid → paper → deep → paper. Three layout families: offset-frame-overlap (hero), split-grid (tools), full-bleed (break). Asymmetric hero with frame right, copy left. Dense services grid followed by quiet split tool sections. Full-bleed break provides breath.
**Deductions:**
- −0.5: Three consecutive tool sections (rot, molding, builtin) all use the same split-grid layout family. RUBRIC §3.4 deduction: "Same section shape used 3+ times: −0.5". The split-reverse on molding helps but the underlying grid is identical.
- −0.5: Services section has 9 cards in a uniform grid. While each card has one job, the density is flat across the entire section. No internal rhythm variation within the grid.
- −0.5: Cannot verify blank gaps or grid usage at 1440 without screenshots. CSS structure suggests proper spacing but visual confirmation absent.

### photo — 7.0
**Earned:** All images use placeholder files from the niche media pool (`placeholder-hero-B1.webp`, `placeholder-material-rotten-wood.webp`, etc.). Alt text describes the frame content. Width/height attributes present on all images. Lazy loading and async decoding applied. Consistent filter treatment in CSS (saturate .8, contrast 1.05, sepia .06, brightness 1.02).
**Deductions:**
- −1.0: All photos are placeholders. Without real media, the "one grade across every photo" anchor cannot be met. Expected in placeholder mode but still a deduction.
- −0.5: Photo captions say "Placeholder for..." in alt text (e.g., line 584). While honest for demo, this reads as unfinished. The visible caption text ("Soft sill wood probed with screwdriver") is good but alt text undermines it.
- −0.5: Cannot verify crop ratios, object-position, or whether frames/masks are part of the signature without screenshots. DOM has dimension callouts but their visual integration is unconfirmed.
- Note: Floor is 6, pass mark is 8.5. Score 7.0 is above floor but below pass. This is expected in placeholder mode per task instructions.

### copy — 9.0
**Earned:** Voice matches concept thesis: every claim is a measurement, tolerance, or sample price. Specific trade nouns: "miters closed under 1/32 inch", "profile gauge", "measuring rod", "dutchman", "newel post". No banned phrases detected. Buttons named for action: "Price it", "Send a photo, we'll confirm", "Bring a 6-inch offcut", "Get this drawn properly". Sample tags present on all prices, reviews, guarantee, and license. Primary action consistently called "Price it" across hero, services, tools, footer, and mobile bar. Reviews cite specific neighborhoods (Center Square, Delmar, Troy, Latham) and specific problems.
**Deductions:**
- −0.5: Hero lead "213 sample reviews · 19 yrs in Albany" uses middle dot (·) which is fine, but the phrase structure is slightly generic. Could name a specific trade detail instead of just years.
- −0.5: Review tolerance pill repeats "miters < 1/32″" identically on all four visible reviews (lines 777, 783, 789, 795). While accurate to the concept, the repetition reads as templated rather than specific to each job. Each review could have a different tolerance relevant to its service.

### mobile — 8.5
**Earned:** CSS breakpoints at 640px and 900px handle layout shifts. Mobile bar present with Call + Price it buttons (lines 930–933). Tap targets ≥48px (btn min-height 48px, inputs height 48px). No horizontal scroll indicators in CSS (overflow-x: hidden on body). Story pole hidden below 900px to prevent layout issues. Services grid collapses to single column below 640px. Split grids stack vertically. Form inputs full-width.
**Deductions:**
- −0.5: Story pole ruler is completely hidden on mobile (`display: none` under 900px, line 498). The signature system vanishes on the device most homeowners use. RUBRIC §3.7 anchor 9 wants "composed for the phone, not collapsed"; losing the core signature is a significant mobile composition gap.
- −0.5: Mobile bar is always visible at bottom; CSS has `.is-hidden` class but no scroll-direction detection visible in DOM to hide it on scroll-down or over form. May cover footer credits or form submit button.
- −0.5: Cannot verify h1 line count at 390×844 without screenshots. CSS clamp suggests ≤4 lines but visual confirmation absent.

### a11y — 9.0
**Earned:** Skip link present (line 528). Focus styles defined: 3px solid accent, 3px offset (line 324). All form inputs have associated labels. Fieldset/legend used for radio groups. aria-live="polite" on ZIP result and checklist output. aria-expanded on menu button. aria-label on logo and menu button. Reduced motion handled: CSS disables all animations and reveals content immediately (lines 511–515). JS-off fallbacks: menu hidden, compare shown as grid, hotspots hidden, marquee static. Heading order: h1 → h2 → h3, no skips detected. Honeypot field properly hidden.
**Deductions:**
- −0.5: Story pole ruler has `aria-hidden="true"` (line 558) which is correct, but the tick labels are only visual. No sr-only alternative describing the current section's height mark for screen readers. The signature is inaccessible to non-visual users.
- −0.5: Credit links in footer have no href (static.json warnings, lines 918). While not a WCAG failure per se, `<a>` without href is semantically broken and may confuse assistive tech. Should be `<span>` or have a valid href.

### motion — 8.0
**Earned:** Intro uses clip-path wipe on hero frame (`data-reveal="clip"`). Reveal stagger on services cards with 60ms delay. Split text animation on h1 (`data-split="lines"`). Reduced motion fully respected via CSS override. Multiple hook types beyond plain fade: clip reveals, stagger, split text, counter animations (implied by tabular-nums and data-count). Motion tokens defined with purposeful easing (--ease-out, --ease-io).
**Deductions:**
- −1.0: Only 3 distinct hook types visible in DOM: reveal (fade up), clip (wipe), and split text. RUBRIC §3.9 anchor 8 requires "≥3 hooks beyond plain reveals". Clip and split count, but the reveal itself is the baseline. The story-pole tick slide described in concept.json motion.stories is not evident in DOM attributes; may be JS-driven but cannot confirm without render.json or screenshots.
- −0.5: Same reveal pattern (`data-reveal` or `data-reveal-stagger`) applied to nearly every section. While clip and split add variety, the base entrance is uniform. RUBRIC deduction: "Same reveal on every section: −1.0". Partial application here since some sections use clip, but the pattern is still repetitive.
- −0.5: Cannot verify intro timing, skippability, or whether motion blocks reading without render.json timings or screenshots.

### wow — 8.0
**Earned:** The story-pole ruler concept is genuinely distinctive and tied to the trade. The repair-or-replace checklist is a practical tool a homeowner would actually use before calling. Built-in planner outputs bay count and sample pricing. Tolerance pills in reviews connect the signature to social proof. The concept delivers on "measured before priced" through interactive tools.
**Deductions:**
- −0.5: Tool outputs are text-only readouts (`data-est-out` divs). RUBRIC §3.10 deduction: "The tool's output is a plain text line or a $ figure: −1.0". The estimator shows "Sample: $12–$28 per linear ft" which is useful but visually plain. A drawn elevation or visual bay diagram would elevate this.
- −0.5: Cannot verify whether the wow moment works in reduced motion without screenshots. DOM has fallbacks but visual execution of the static form is unconfirmed.
- −0.5: The story-pole ruler is hidden on mobile, so the primary wow moment is absent on phones. For a homeowner browsing on mobile, the signature experience is lost.

### polish — 8.5
**Earned:** SVG favicon present (line 20). Apple touch icon present (line 21). OG image with dimensions (lines 13–15). Theme-color meta (line 9). JSON-LD with specific HomeAndConstructionBusiness type (line 22). Print stylesheet defined (lines 243–252) with estimator isolation. Lazy images with width/height. Consistent border-radius (2px throughout). Forced colors handled for interactive elements (lines 237–240). No `transition: all` detected.
**Deductions:**
- −0.5: Credit links missing href (static.json warnings). While minor, this is an inconsistency in an otherwise polished build.
- −0.5: Cannot verify favicon rendering, OG image appearance, or forced colors behavior without visual inspection. DOM structure is correct but execution unconfirmed.
- −0.5: Print stylesheet exists but cannot verify it produces a clean printable sheet for the estimator without testing.

## Arithmetic

14×8.5 + 12×8.5 + 10×9.0 + 10×8.5 + 8×7.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.0 + 8×8.0 + 4×8.5
= 119 + 102 + 90 + 85 + 56 + 72 + 59.5 + 63 + 96 + 64 + 34
= 840.5 / 100 = **8.41**

## Must

1. **where:** dist/index.html line 918, footer credits
   **problem:** Five `<a>` elements without href attribute. Static check flagged as warnings; these are semantically broken links that fail HTML validation and confuse assistive technology.
   **fix:** Either add valid hrefs to Pexels attribution pages or convert to `<span>` elements since these are credits, not navigation.

2. **where:** dist/index.html lines 777, 783, 789, 795, tolerance-pill elements
   **problem:** Identical tolerance text "miters < 1/32″" repeated verbatim across all four reviews. Reads as templated rather than job-specific, undermining the proof value.
   **fix:** Vary tolerance pills per review service: e.g., "gaps < 1/16″" for built-ins, "rail deflection < ¼″" for stairs, "scribe gap < 1/32″" for trim. Pull from facts.json proof.reviews if available or craft service-specific tolerances.

## Should

1. **where:** dist/index.html line 576, h1 element
   **problem:** h1 "Measured before it is priced" does not contain trade or city. Relies on kicker for context. First-screen clarity suffers when h1 is read in isolation.
   **fix:** Consider "Albany Carpentry, Measured Before Priced" or similar that embeds trade+city in ≤8 words while preserving the concept voice.

2. **where:** dist/index.html line 498, .story-pole CSS rule
   **problem:** Story pole ruler hidden below 900px. Mobile visitors lose the signature system entirely.
   **fix:** Adapt the ruler for mobile: perhaps a horizontal progress indicator at top, or a compact inline height marker within each section header. The signature must have a mobile expression.

3. **where:** dist/index.html lines 675, 716, 744, three consecutive tool sections
   **problem:** Rot-check, molding-picker, and builtin-planner all use identical split-grid layout. Visual rhythm flattens across the tools run.
   **fix:** Vary at least one tool section: stack the UI above the image, use a full-width tool with side-by-side inputs, or make one tool a card-based interaction instead of split layout.

4. **where:** dist/index.html line 930, .mobile-bar
   **problem:** Mobile bar lacks scroll-direction hiding logic in DOM attributes. May obscure form submit or footer on scroll.
   **fix:** Ensure app.js toggles `.is-hidden` on scroll-down and removes it on scroll-up and when form is in viewport. Verify with mobile screenshot.

5. **where:** dist/index.html line 558, .story-pole aria-hidden
   **problem:** Ruler is aria-hidden with no sr-only alternative. Screen reader users miss the section-height narrative.
   **fix:** Add a sr-only live region or section aria-labels that announce the current height mark (e.g., "Section: Crown molding, 132 inches from floor").

## Elevate

1. **Category: motion (weight 12, score 8.0)**
   **Move:** Drive the story-pole tick highlight with ScrollTrigger so the active tick physically slides to each section's height mark as the visitor scrolls, and tie the clip-wipe direction on tool images to the ruler's vertical axis (top-to-bottom reveals instead of generic left-to-right). This makes the signature *the* motion language rather than a static decoration, and adds a fourth distinct hook type beyond reveal/clip/split.

2. **Category: wow (weight 8, score 8.0)**
   **Move:** Replace the plain-text estimator output with a small SVG elevation drawing that updates in real time as inputs change — for the built-in planner, draw the wall with bay divisions and shelf lines; for the molding picker, show the profile silhouette scaled to the entered perimeter. The output becomes a designed artifact in the story-pole's drafting language, something a homeowner would screenshot or print, and connects the tool directly to the signature's visual vocabulary.