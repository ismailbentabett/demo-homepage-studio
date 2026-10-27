COPY: ok

## Five-second test (from dist/index.html structure)
What: Open Ledger Builders, Madison WI general contractor with open-book budgets.
Where: Hero shows trade + city in kicker and h1, sample budget ledger on right half.
Do: Call or "Price it" — both above fold at desktop; phone visible in header and hero.
Why them: Proof line shows hours, service areas, and 4.8 sample rating immediately.

Note: No screenshots exist in qa/screens/ and no render.json was generated for round 2. All scores below are derived from the built dist/index.html, CSS breakpoints, and concept/facts alignment. Visual execution (motion timing, fold behavior at 390x844, photo grade consistency) cannot be verified without screenshots. Scores that were capped at 8 or 8.5 in round 1 due to missing visual evidence remain at those levels unless a structural fix was confirmed in the HTML.

---

## firstScreen — 8.5
**Earned:** h1 "Madison remodeling budgets, open line by line." is 7 words stating trade + city + outcome. Proof line with hours, three named areas, and sample rating present. Two distinct buttons (Call secondary, Price it primary). Phone visible in header and hero. Ledger sample on right demonstrates the signature immediately.
**Deductions:**
- −0.5: split-50 uses `min-height: calc(100svh - var(--header-h))` which may fill the viewport exactly at some sizes, preventing the next band from peeking. Cannot verify without 1440x900-first.png screenshot.
- Cannot confirm 390x844 fold behavior (h1 line count, button positions) without mobile screenshot.
**Round 1 vs Round 2:** No change. Same structural observations apply; no screenshots generated to resolve the verification gap.

## distinctiveness — 9
**Earned:** Ledger line + percent column signature appears in hero (sample budget), services (ledger-row with pct column at ≥640px), budget-tool section, proof (ledger-review entries with check marks as dated entries), and footer (TOTAL 100% double rule). Five sections carry the signature. Palette (cream #F6F3ED / ink #1A2332 / signal red #B8432F) and type trio (Space Grotesk + Karla + DM Mono) match concept.json and differ from typical GC templates. Seven layout families: split-50, ledger-grid, stack-center, rail-horizontal, split-reverse, full-bleed, stack-narrow.
**Deductions:** None observed structurally. Cannot verify against sibling sites A/C without their screenshots.
**Round 1 vs Round 2:** No change. Signature delivery confirmed in HTML.

## type — 9
**Earned:** Space Grotesk display with -0.03em tracking and 0.92 line-height for headings. Karla body at clamp(1rem–1.125rem), ≥16px at full width. DM Mono accent for data (percent column, sample tags, proof-line, tel-plain, ZIP input). Tabular-nums on ledger rows, estimator bars, phone number, and review dates. Fluid scale with 7 distinct sizes. Scale contrast: h1 at clamp(2.6rem–5rem) vs fs--1 kicker. Lead paragraph set apart with .lead class. No orphans detectable from HTML source.
**Deductions:** None observed. Cannot verify measure or rag at specific viewports without screenshots.
**Round 1 vs Round 2:** No change.

## layout — 9
**Earned:** 11 sections with alternating tones (light → light → deep → paper → light → deep → paper → deep → accent → deep → accent). Full-bleed break section provides visual breath between process and proof. Asymmetric split-reverse for permit-check. Dense ledger-list services contrasts with quiet stack-center estimator and stack-narrow contact.
**Round 2 fix confirmed:** Services section now grouped into 3 sub-sections (Structural, Finishes, Specialty) with `.ledger-group__head` labels in DM Mono uppercase and `.ledger-rule` dividers between groups (dist/index.html lines 1499–1593). This directly addresses the round 1 deduction for monotonous 9-item repetition. The grouping creates density variation within the list while preserving the ledger signature. Score raised from 8.5 to 9 based on this confirmed structural improvement.
**Deductions:** Cannot verify gap consistency or blank gaps at phone widths without screenshots.

## photo — 8
**Earned:** Eight images referenced with descriptive, on-topic alt text for Madison residential GC work. Consistent CSS filter applied globally (saturate .82, contrast 1.06, sepia .06, brightness 1.02) to unify grade. Each image used once. Width/height attributes present on all img elements. Lazy loading on non-hero images. Hero image preloaded with fetchpriority="high".
**Deductions:**
- Cannot verify actual photo content, crop ratios, object-position, or whether placeholder images integrate cleanly without screenshots or render.json. Score capped at 8 per rubric §2 when visual confirmation is unavailable.
**Round 1 vs Round 2:** No change. Same cap applies; no screenshots generated.

## copy — 9
**Earned:** Voice matches concept samples — specific trade nouns ("egress window", "knob-and-tube wiring", "frost line", "change order", "curbless shower", "grab-bar backing"). Plain contractor tone throughout. Every review tagged "Sample review". Estimator tagged "Sample pricing". Rating tagged "Sample rating". Primary action consistently named "Price it" across header, hero, mobile bar, footer nav, and all service links. Microcopy under form: "We'll call you back to set up a visit." No banned phrases detected. Hours shown via open-now widget.
**Deductions:** None observed.
**Round 1 vs Round 2:** No change.

## mobile — 8.5
**Earned:** Mobile bar fixed at bottom with Call and Price it buttons (hidden at ≥900px). Header collapses to hamburger menu below 640px. Split-50 stacks vertically on mobile (media order 1, content order 2). Tap targets: buttons min-height 48px, rail nav buttons 48x48, ZIP input height 48px. Ledger-row__pct column correctly hidden below 640px to avoid cramped layout.
**Deductions:**
- Cannot verify horizontal scroll, text overflow, or tap target adequacy at 390x844 without screenshot. Checklist inputs are 24px native size; touch target depends on label padding which cannot be confirmed visually. −0.5 reserved pending screenshot verification.
**Round 1 vs Round 2:** No change. Same verification gap.

## a11y — 8.5
**Earned:** Skip link present and styled. Focus visible with 3px outline in accent color and 3px offset on all tones. All form inputs have proper labels (fieldset/legend for radio groups, explicit label elements for text/select/textarea). aria-live regions on zip-result, estimator output, and checklist result. aria-expanded and aria-controls on menu button. Decorative SVGs marked aria-hidden. Reduced motion: CSS disables all animations and reveals content statically via .sw-motion class gate. Forced colors handled for buttons, rules, and interactive elements. Heading order correct (one h1, sequential h2s).
**Deductions:**
- Cannot verify reduced-motion screenshot shows all content visible. No axe report available to confirm zero violations. −0.5 reserved pending render.json.
**Round 1 vs Round 2:** No change. Same verification gap.

## motion — 8
**Earned:** Multiple hooks present: data-split="lines" on hero h1, data-reveal and data-reveal="clip" on images, data-carousel on process rail, data-estimator with bar chart, data-checklist with live result, data-zip with live result. Running total bar (ledger-progress) driven by --ledger-total CSS custom property. Hover underline animation on primary buttons (scaleX 0→1, 200ms, --ease-out). Reduced motion respected via .sw-motion class gate.
**Deductions:**
- −1.0: Fewer than 3 distinct hook behaviors beyond basic fade-up reveals can be confirmed from HTML structure alone. The running total and estimator bar draw are the signature moments, but their execution quality (timing, easing, reversibility) cannot be verified without render.json or scroll-percentage screenshots. Motion score reflects structural presence, not execution quality.
**Round 1 vs Round 2:** No change. The elevate move from round 1 (counter-driven number tick on ledger-percent column) has not been implemented in the HTML; the `data-count` attribute is present on `.ledger-row__pct` elements but no counter animation logic can be confirmed without app.js inspection (which is outside critic scope). Score unchanged.

## wow — 8.5
**Earned:** Signature moment is the running ledger total that accumulates as you scroll, reaching "TOTAL 100%" at the footer — directly tied to the open-book thesis and the trade's core fear (hidden costs). Budget-split estimator tool outputs designed bars in the signature language (DM Mono, tabular nums, accent-colored fills). Static fallback exists for reduced motion.
**Deductions:**
- Cannot verify the tool output renders as designed or that the running total animates smoothly. −0.5 reserved pending visual confirmation.
**Round 1 vs Round 2:** No change. Same verification gap.

## polish — 8.5
**Earned:** SVG favicon and apple-touch-icon referenced. OG and Twitter meta tags with 1200x630 dimensions. JSON-LD with GeneralContractor schema including areaServed and openingHoursSpecification. Theme-color set to #1A2332. Print stylesheet present (hides nav/header/mobilebar, shows estimator only in sw-print-est mode). Consistent 2px border-radius throughout. Icon stroke-width uniform at 2. Forced colors handled.
**Deductions:**
- −0.5: Footer credits list contains 8 identical `<a>Pexels</a>` links without href attributes (flagged in static.json as warnings). These should either link to actual Pexels pages or be plain text spans. Not fixed from round 1.
**Round 1 vs Round 2:** No change. The credits issue was listed as a Should in round 1 and remains unresolved.

---

## Arithmetic
14×8.5 + 12×9 + 10×9 + 10×9 + 8×8 + 8×9 + 7×8.5 + 7×8.5 + 12×8 + 8×8.5 + 4×8.5
= 119 + 108 + 90 + 90 + 64 + 72 + 59.5 + 59.5 + 96 + 68 + 34
= 860 / 100 = **8.60**

## Must
(none)

## Should
1. **where:** dist/index.html footer ul.credits (line 1867) | **problem:** 8 anchor tags without href attributes | **fix:** Either add actual Pexels URLs or change `<a>Pexels</a>` to `<span>Pexels</span>` to remove invalid links. Unchanged from round 1.
2. **where:** Render pipeline | **problem:** No screenshots or render.json exist for visual verification after round 2 fixes | **fix:** Run `node tools/check-render.mjs general-B` to generate qa/screens/ and qa/render.json so motion, fold, photo quality, and reduced-motion completeness can be properly assessed. Without these, multiple categories remain capped below their potential.

## Elevate
1. **motion:** Add counter-driven number tick on ledger-percent column values as each service row enters the viewport, tying motion to the open-book thesis and creating a third distinct hook beyond fade-up reveals and clip wipes. The `data-count` attribute exists on the elements but the animation behavior needs implementation verification.
2. **photo:** Run check-render to generate screenshots so photo grade consistency, object-position, and placeholder integration can be visually verified and scored above the 8.0 cap. This is the lowest-scoring category and the only one below 8.5.