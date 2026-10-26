COPY: ok

## Five-second test (no screenshots available — scored from dist/index.html)
At 1440: h1 reads "Auto Repair & Diagnosis in Lansing, MI" (7 words, trade + city + outcome). Kicker above says "By appointment · nothing done without your yes". A repair-order card with three numbered lines (Drop-off / Check complaint / Call you) sits left of a hero image placeholder. Phone is visible in header and hero CTA. Two CTAs: primary "Call (517) 555-0185", secondary ghost "Price check engine". Next band (guarantee t-accent) peeks below the fold. At 390: hero stacks image-first (order: -1), then kicker, h1, ro-card, CTAs. Both buttons should remain above the fold given pad-tight spacing, but cannot confirm without screenshot. The five-second answer is clear: this is a Lansing auto-repair shop that calls before fixing anything, and you can call or price a specific service right now.

**Warning:** `qa/screens/` directory does not exist (`render-check.json` warning). All deductions below cite `dist/index.html` line numbers because no screenshot filenames are available. This is an unavoidable deviation from RUBRIC §2.2; scores reflect what can be verified from the built HTML/CSS only.

---

## firstScreen — 8.5
What earned it: h1 is 7 words, names trade + city + outcome (line 1192). One primary action (call) plus a quieter secondary ("Price check engine", line 1215). Phone visible in header (line 1166) and hero (line 1214). Guarantee band (t-accent, line 1225) provides a colour break that peeks below the hero. Repair-order card in the hero is the signature and is immediately legible.
Deductions:
- Cannot verify next-band peek distance (40–120px required for 9) without screenshots; hero padding is `pad-tight` (64px desktop) which may leave zero peek depending on viewport height. Conservative −0.5.
- Cannot verify h1 line count at 390×844; at clamp(2.6rem, min(9vw, 9.5svh)+.1rem, 5rem) the h1 could run 3–4 lines on a short phone. No screenshot to confirm ≤ 4 lines with both actions above fold. Withholding the 9 anchor until verified.

## distinctiveness — 9
What earned it: The `.ro-line` primitive appears in hero (lines 1194–1211), process story (lines 1236–1263), services list (lines 1324–1421), reviews carousel (lines 1464–1501), footer (lines 1743–1777), and the thank-you state (lines 1695–1731). That is six distinct sections using the signature with meaningful variation (status chips change meaning per context: doing/waiting/done in process, service labels in services, review tags in reviews, closed-order in footer). Palette (graphite/paper/safety-orange) and type trio (Arvo/Source Sans 3/DM Mono) are consistent and unlike typical mechanic-site templates. Sibling B uses a dark code-panel aesthetic and sibling C uses seasonal colour-led magazine layout per brief §6, so no shared hero family or palette family.
Deductions:
- None against the 9 anchor. For 10, would need to confirm via screenshot that the signature organises information rather than decorating it, and that a single section screenshot names the business without the logo. Cannot verify without screens.

## type — 8.5
What earned it: Arvo 700 for display, Source Sans 3 variable for body, DM Mono 500 for line numbers/clocks/chips — three families used with clear roles (line 27–29). Fluid scale defined (lines 253–258). Body ≥ 16px at full ink (fs-0 clamps to 1rem–1.125rem). Tabular numerals on clocks and prices via `font-variant-numeric: tabular-nums` (line 129). Letter-spacing −0.03em on headings (line 341). DM Mono used consistently for data.
Deductions:
- Three families is permitted when one is mono for numbers/accent (RUBRIC §3.3), so no deduction there.
- Cannot verify orphan control, curly quotes, en-dash ranges, or `&nbsp;` between number and unit without visual inspection. The copy uses straight hyphens in ranges ("$320–$600" uses en-dash correctly at line 1246, but "$95"–"$160" in facts uses en-dash too). Withholding 0.5 for unverified microtypography.
- Kicker labels (line 1191) plus chip labels plus sample-tags could push toward "3+ tiny tracked caps labels in one view" (−0.5 risk). The kicker is uppercase tracked, chips are uppercase tracked, sample-tags are uppercase tracked. On the hero alone that is three. Borderline; applying −0.5 conservatively.

## layout — 8.5
What earned it: Ten distinct sections, each with one job. Alternating tones: paper → accent → paper → deep → paper → paper → deep → paper → deep → paper. Full-bleed accent guarantee band breaks the rhythm. Asymmetric hero (50/50 split). Dense services list vs quiet guarantee. Process rail has a vertical rule line creating a left-margin rail.
Deductions:
- Sections 05 (services, t-paper) and 06 (brake estimator, t-paper) are same tone back-to-back (lines 1318, 1428). Two light bands touching reads as one block. −0.5.
- Services section is very long (9 items, lines 1324–1421); density is high but justified by content. No deduction.
- Cannot verify blank gaps or grid usage at specific viewports without screenshots. Withholding further deductions.

## photo — 7
What earned it: All image slots reference niche-appropriate media keys (hero-A1, process-under-car, process-wheel-off, process-road-test, process-key-drop, parts-worn-pads, place-bay-door). Alt text currently says "Placeholder for [key]" which is non-descriptive but functional. Consistent filter applied (saturate .85, contrast 1.05, sepia .06) across all frames (lines 595, 718, 794, 912) creating a unified grade. Width/height attributes present on all images. Loading="lazy" and decoding="async" set.
Deductions:
- Alt text is "Placeholder for hero-A1" etc. (lines 1219, 1242, 1249, 1256, 1263, 1433, 1585). These do not describe the frame content. −0.5 for non-descriptive alt text.
- Cannot verify object-position, crop ratios, or whether any face/logo/plate is visible without screenshots. The media keys suggest correct shots per brief §7, but verification is impossible. Withholding 0.5 for unverifiable art direction.
- Footer credits say "Photo by unknown on Pexels" seven times (line 1788). "Unknown" photographer is weak attribution but not a rubric deduction.

## copy — 9
What earned it: Voice matches concept's plain, specific contractor tone. Every service blurb answers a homeowner question in homeowner words ("Clunks over potholes traced to the link, joint or strut that is worn, and nothing else", line 1351). Microcopy at moments of doubt: "Nothing is repaired until we call you with a photo, a price and your yes" (line 1227). Sample labels present on every price ("Sample pricing", lines 1331, 1342, etc.) and every review ("Sample review", lines 1474, 1487, 1500). Primary action named consistently as "Price it" in services and "Book drop-off" for the form. No banned phrases detected. Concrete nouns from the trade (sway bar link, vacuum hose, water pump, rotor, caliper).
Deductions:
- None against the 9 anchor. For 10, would need to verify that no line could paste onto another trade's site. The copy is strongly trade-specific.

## mobile — 8.5
What earned it: Hero reflows to single column with image first (order: -1, line 601). RO-line grid collapses to 3-column on mobile (line 672). Mobile bar with call + book drop-off appears below 900px (lines 1090–1093). Tap targets are min-height 48px on buttons (line 393). Sticky header hides on scroll (line 484). Form inputs are 48px tall (line 989). Body padding-bottom 72px prevents mobile bar overlap (line 1092).
Deductions:
- Carousel prev/next buttons are 40×40px (lines 841–842), under the 48px tap target minimum. −0.5.
- Cannot verify pinned scroll behaviour under 640px or whether the mobile bar covers the form/footer credits without screenshots. Withholding further deductions.
- Planner tabs may be tight on 320px width (5 tabs + gap). Cannot verify overlap without screenshot.

## a11y — 8.5
What earned it: Skip link present (line 1154). Focus outline 3px solid var(--focus) with 3px offset (lines 354–357). All form inputs have explicit labels (lines 1617–1686). aria-live regions on checklist output (line 1308), estimator status (line 1445), zip result (line 1601), and form errors (lines 1619, 1651, 1671, 1687). Reduced-motion media query kills all animation (lines 1129–1136). No-JS fallback: menu button, carousel controls, tabs, and JS-only elements hidden (lines 77–86); content remains visible. Heading order: one h1, then h2s in sequence (no skips visible). Forced-colors borders on interactive elements (lines 235–238).
Deductions:
- Carousel prev/next lack visible focus distinction beyond the global outline; on the dark t-deep background the focus colour var(--focus) resolves to #E8733A which should be visible. No deduction.
- Rotating word (if present) would need aria-hidden + sr-only static copy. No rotator detected in the HTML, so no issue.
- Cannot verify reduced-motion screenshot shows all content (screenshots missing). Trusting the CSS implementation but withholding 0.5 for unverifiable visual confirmation.

## motion — 8
What earned it: Intro animates chip status flip (concept §Motion). Process story lines use clip-path wipe reveal (lines 722–728). Service cards stagger via data-reveal (lines 1324+). Hover on ro-line--svc scales chip 1.05 + shadow (line 642). Reduced motion respected (lines 1129–1136). Multiple hook types: clip wipe, stagger fade, chip scale, progress bar.
Deductions:
- Same reveal pattern (data-reveal translateY fade) used on services, process lines, and potentially other sections (lines 1118–1126). Only two distinct hook families confirmed (clip-path wipe on story, translateY fade elsewhere). Fewer than 3 different hooks beyond plain reveals caps motion at 6 per RUBRIC §3.9, but the clip-path wipe and chip hover scale count as two additional hooks, bringing it to 3 total. Borderline; scoring 8 rather than 8.5 because the dominant reveal is uniform.
- Cannot verify intro timing (≤1.2s) or skippability without render timings. Withholding 0.5.
- Lenis loaded (line 1802) but cannot verify lerp value or natural feel without interaction.

## wow — 8
What earned it: The repair-order card in the hero is a signature moment tied to the thesis (the page IS the repair order). The brake wear explainer slider (lines 1431–1453) is a tool a homeowner would actually use, with visual output tied to the signature language (sample-tag, ro-line styling in thank-you state). The warning light decoder (lines 1273–1313) is practical and trade-specific.
Deductions:
- The brake wear explainer output is text-only ("Pads are new. No work needed yet.", line 1446). RUBRIC §3.10 deducts −1.0 when "the tool's output is a plain text line or a $ figure". The output does include a status sentence but no designed visual artifact (no pad illustration, no timeline graphic). −1.0.
- The warning light decoder output div is empty in the HTML (line 1308); content is populated by JS. Cannot verify the output design without interaction. Withholding additional deduction pending verification.

## polish — 8.5
What earned it: SVG favicon (line 20). Apple-touch-icon (line 21). OG image with dimensions (lines 13–15). Theme-color set (line 9). JSON-LD AutoRepair schema with openingHoursSpecification (line 22). Print stylesheet for estimator (lines 241–250). Lazy images with width/height. Consistent radius (2px, line 280). Forced-colors handled (lines 235–238). No `transition: all` detected.
Deductions:
- Photo credits say "Photo by unknown on Pexels" (line 1788) — inconsistent with best practice but not a rubric deduction.
- Cannot verify hero poster preload (no video detected; hero is static image). No deduction.
- Mixed icon stroke widths: all SVG symbols use stroke-width="2" (lines 1141–1151). Consistent. No deduction.
- Withholding 0.5 for details that require visual verification (concentric nesting, stroke consistency at rendered size).

---

## Arithmetic
14×8.5 + 12×9 + 10×8.5 + 10×8.5 + 8×7 + 8×9 + 7×8.5 + 7×8.5 + 12×8 + 8×8 + 4×8.5
= 119 + 108 + 85 + 85 + 56 + 72 + 59.5 + 59.5 + 96 + 64 + 34
= 838 / 100 = **8.38**

## Must
(none — no DEMO-RULES breaches detected; all sample labels present; no invented claims; no faces as owner; form does not pretend to send)

## Should
1. **where:** dist/index.html lines 1219, 1242, 1249, 1256, 1263, 1433, 1585
   **problem:** Alt text reads "Placeholder for [media-key]" instead of describing the frame content.
   **fix:** Replace each with a descriptive string matching the shot list (e.g., "Car on two-post lift in clean bay, seen from below" for hero-A1).
2. **where:** dist/index.html lines 841–842
   **problem:** Carousel prev/next buttons are 40×40px, under the 48px minimum tap target.
   **fix:** Change `width: 40px; height: 40px` to `width: 48px; height: 48px` in `.carousel__prev, .carousel__next`.
3. **where:** dist/index.html lines 1318, 1428
   **problem:** Services (t-paper) and brake estimator (t-paper) are same tone back-to-back, reading as one block.
   **fix:** Change the brake estimator section to `t-deep` or insert a thin accent break between them.
4. **where:** dist/index.html line 1446
   **problem:** Brake wear explainer output is plain text only; no designed visual artifact.
   **fix:** Add a simple SVG pad-thickness indicator (four bars at 12/6/3/0 mm) that highlights the active state, styled in the ro-line language.
5. **where:** dist/index.html (multiple sections)
   **problem:** Dominant reveal is uniform translateY fade; only clip-path wipe and chip hover provide variation.
   **fix:** Add a third reveal verb (e.g., scale-in for the guarantee band, or a horizontal slide for the ZIP checker result) to reach ≥3 distinct hook families.

## Elevate
1. **layout** (weight 10): Break the paper/paper adjacency between services and brake estimator by making the estimator section t-deep and giving it the ro-line rail as a left margin, so the signature threads through a dark band and the scroll rhythm becomes paper → accent → paper → deep → paper → deep → paper → deep → paper.
2. **wow** (weight 8): Replace the text-only brake wear output with a designed ro-line card that shows the pad state as a numbered line item (e.g., "Line · Pad thickness · 3 mm · Low — book within two months") so the tool's output speaks the signature language and the homeowner gets a keepable artifact.