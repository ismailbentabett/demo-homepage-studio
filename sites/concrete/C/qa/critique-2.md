COPY: ok

# Critique Round 2 — concrete-C

**Note:** `qa/screens/` and `qa/render.json` are still missing. Scores below are derived from `dist/index.html`, `qa/static.json`, and `facts.json` only, identical to round 1 because no new visual evidence exists. Any category that requires visual confirmation (layout rhythm, photo grading, mobile composition, motion execution) remains capped at 8.5 until screenshots exist to verify. This is not a penalty for placeholder images; it is a ceiling imposed by missing evidence. No fix can be confirmed without screenshots.

## Five-second test (from HTML structure)

At 1440 and 390 (inferred): the h1 reads "Concrete for swelling clay and a hundred frozen nights · Colorado Springs" — trade + city + outcome present but the headline is 12 words and likely wraps to 3–4 lines at 1440 and 5+ lines at 390. Primary action ("Call") and secondary ("Price my driveway") are both above the fold in the hero markup. Phone is visible in the header and hero CTA. The next section (#promise) should peek because the hero uses `min-height: calc(100svh - var(--header-h))` rather than a fixed 100vh. Without screenshots I cannot confirm the peek distance or whether the map frame competes with the h1 for attention. **firstScreen ≤ 8.5 pending visual proof.**

## Categories

### firstScreen — 8.5
What earned it: trade + city + outcome in h1; two CTAs with clear hierarchy; phone visible; ZIP check tool present in hero; kicker line includes Sample label.
Deductions:
- dist/index.html line 635: h1 is 12 words ("Concrete for swelling clay and a hundred frozen nights · Colorado Springs"): −0.5 per RUBRIC §3.1 (>8 words). Cannot verify line count without `1440x900-first.png` and `390x844-first.png`; if >3 lines at 1440 or >4 at 390, further −0.5 to −1.0 applies.
- Cannot confirm next-band peek distance without screenshots; if hero is exactly 100svh minus header and the promise section does not show 40–120px, −0.5 applies. Score held at 8.5 as ceiling until verified.

### distinctiveness — 8.0
What earned it: "contour-elevation" signature declared via `data-sw-signature` on hero, winter-story, base-spec, contact, and footer ridge marker (5 sections). Elevation markers with mono type and bordered badge recur throughout. Palette (Pikes Peak Granite + Pine + Snow: #1A2622, #F5F3F0, #8C3B2E, #E07A5F) is specific to Colorado Springs geology and differs from typical contractor blue/grey. Three layout families visible in markup: map-split hero, pinned-diagram winter story, split base-spec, full-bleed break, tabs tools section.
Deductions:
- Cannot verify sibling distinctiveness without `sites/concrete/A/qa/screens/*1440*first*` and `sites/concrete/B/qa/screens/*1440*first*`. If A or B shares the elevation-marker motif or contour-bg pattern, −2.0 applies. Score capped at 8.0 pending sibling comparison.
- Contour BG is an inline SVG pattern; without screenshots cannot confirm it reads as topographic intention vs. generic noise. If it appears decorative-only, −0.5.

### type — 8.5
What earned it: Young Serif (display) + Figtree (text) + DM Mono (accent/numbers) is a strong three-family system declared in concept.json. Fluid scale with clamp values. Tabular numerals on counters and estimator via `font-variant-numeric: tabular-nums`. Kicker and caption use mono at `--fs--1`. Display tracking −0.02em on headings. Body at `--fs-0` (clamp 1rem–1.0625rem) ≥ 16px. Lead paragraph set apart with weight 500 and tighter max-width.
Deductions:
- Cannot verify orphan control, curly quotes, en-dash ranges, or `&nbsp;` between number and unit without visual inspection. Straight hyphen ranges visible in hours ("7 am – 5 pm" uses en-dash correctly in markup). Score held at 8.5.

### layout — 8.0
What earned it: 10 sections with varied tones (paper → mid → deep → paper → accent → paper-break → paper → mid → deep → paper → deep footer). Layout families: map-split, statement-centered, pinned-diagram split, grid-3 services, split spec, full-bleed break, tabs/tools, review rail grid, area list, form-stack contact. Asymmetric sections present (winter-story grid, base-spec split). Full-bleed break provides breath.
Deductions:
- Cannot verify density map, gap rhythm, or whether two dark bands touch without full-page screenshots. Winter-story (t-deep) and area (t-deep) are separated by reviews (t-mid), so no adjacent dark bands in markup order.
- Services grid is 3-column at 900px+; cannot confirm it avoids "three icon-in-square cards" tell. Cards have text, not icons, so likely safe.
- Score capped at 8.0 until `fullpage-1440.png` confirms rhythm.

### photo — 7.5
What earned it: Placeholder images are on-topic (hero-C1, scaling, rebar, finished-driveway). Alt text describes frame content. Consistent filter applied via CSS (`saturate(.9) contrast(1.08) sepia(.06) brightness(.98)`) suggests intended unified grade. Width/height attributes present. Lazy loading on non-hero images. Fetchpriority high on hero and break.
Deductions:
- All images are placeholders with generic alt text ("Placeholder for hero-C1"). Cannot verify object-position puts subject on thirds, or that crops tell a sequence. −0.5 for inability to confirm art direction.
- Footer credits read "Photo by unknown on Pexels" with empty `<a>` tags (static.json warnings). This is a demo-safety issue but also signals unfinished media integration. Not a mustFix per DEMO-RULES (placeholders expected), but ugly.
- Cannot verify same photo not used twice without visual check. Markup shows four distinct `data-photo` values (hero-C1, scaling, rebar, finished-driveway), so likely safe.
- Pass mark is 8.5; this category is below floor. **Must elevate.**

### copy — 9.0
What earned it: Voice is specific to Front Range concrete ("swelling clay", "magnesium chloride", "air-entrained mix", "#4 rebar on chairs at 18 in. o.c."). No banned phrases detected. Buttons named for action ("Call", "Price my driveway", "Price it", "Have us look at it", "Send"). Sample labels present on rating, pricing, license. Microcopy at ZIP check ("Enter your ZIP"), estimator ("Your real number comes from a visit"), form step titles. One consistent primary action name ("Price it" in services, "Get a number" in nav/footer — slight inconsistency but "Price my driveway" in hero is service-specific, acceptable). Reviews include town + service, no "our work" language. Hours use en-dash.
Deductions:
- "Get a number" (nav/footer) vs "Price it" (services/mobile bar) are two names for the primary action. Borderline −0.5, but "Get a number" is the page-level CTA and "Price it" is service-specific; holding at 9.0.
- Area section h2 lists all 8 cities in one line; at 1440 this may be >2 lines. Cannot verify without screenshot.

### mobile — 8.0
What earned it: Mobile bar with call + price CTAs, hidden at ≥900px. Header collapses to menu button. Grid layouts collapse to single column below 640px. Tap targets appear ≥48px (btn min-height 48px, inputs min-height 40–48px). Sticky mobile bar has hide-on-scroll behavior via `.is-hidden` class. ZIP check input has `inputmode="numeric"` and proper label.
Deductions:
- Cannot verify h1 line count at 390×844. If >4 lines, −1.0 applies. H1 is 12 words; likely 4–5 lines at 390. Holding at 8.0 pending `390x844-first.png`.
- Cannot verify mobile bar hides over form or whether pinned elements exist under 640px. No scroll-jacking evident in CSS.
- Floor is 8; this meets floor but not pass mark (9.0). Needs screenshot verification.

### a11y — 8.5
What earned it: Skip link present. Focus styles defined (`3px solid var(--focus)`, offset 3px). All inputs have labels. Reduced-motion safety net in CSS disables animations. Forced-colors borders on interactive elements. Print stylesheet isolates estimator. ARIA roles on tabs (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`). Live regions on ZIP answer and estimator result. Heading order appears correct (one h1, h2s for sections, h3s for subsections). Honeypot field properly hidden.
Deductions:
- Cannot verify reduced-motion screenshot shows all content. CSS rules suggest it does (`.sw-motion` gates reveals; without class, content is visible). Holding at 8.5.
- Menu overlay has `aria-hidden="true"` when closed; needs JS to toggle. Cannot verify focus trap or Esc key without interaction testing.
- Star ratings use `aria-label="5 out of 5 stars"` — correct.

### motion — 8.0
What earned it: Reveal system with fade, clip, and stagger variants. Split-text infrastructure present. Rotator CSS defined. Marquee with pause-on-hover/focus. Video support with poster. Lenis smooth scroll loaded. Motion tokens well-defined (--dur-page 520ms, --dur-story 900ms, --ease-out cubic-bezier). Reduced-motion respected via media query and `.sw-motion` class gate.
Deductions:
- Cannot verify intro timing (<1.2s), whether reveals vary by role, or if motion explains something beyond decoration. Score capped at 8.0 without scroll-sequence screenshots (0/25/50/75/100%).
- Fewer than 3 distinct hooks visible in markup beyond plain reveals: clip on images, stagger on lists, split-text on headings. Borderline. If only plain fade-up dominates, −1.0 and cap at 6. Holding at 8.0 assuming clip/stagger execute.
- Cannot confirm story is reversible or pinned only ≥640px.

### wow — 8.0
What earned it: Two diagnostic tools (Winter damage reader radio checklist, Lift-or-replace quiz) with live results via `aria-live`. Estimator with sample pricing. ZIP checker in hero. These are homeowner-useful tools tied to the trade.
Deductions:
- Tool output is text-only (checklist result div, estimator result div). RUBRIC §3.10: "tool's output is a plain text line or a $ figure: −1.0". Estimator outputs a price range; checklist outputs a recommendation. Both are text. −1.0 from anchor 9 → 8.0.
- Cannot verify wow moment in reduced motion has static form. Markup suggests tools work without JS (fieldset radios, select dropdown), but result divs require JS to populate.

### polish — 8.5
What earned it: SVG favicon + apple-touch-icon referenced. OG image with dimensions. JSON-LD with GeneralContractor type and complete fields. Theme-color set. Print stylesheet for estimator. Lazy images with width/height. Hero poster preloaded. Consistent border-radius (2px throughout). One stroke width for icons (stroke-width="2"). Footer designed with ridge marker.
Deductions:
- Mixed radius check: all visible radii are 2px (cards, inputs, buttons are pill/999px which is intentional for CTAs). Acceptable.
- `transition: all` no longer appears in `.btn` rule (fixed in round 1). Verified in dist/index.html line 347: now uses explicit property list. Deduction removed.
- Cannot verify forced-colors handling visually. CSS rules present.
- Score raised from 8.5 to 9.0 based on confirmed fix.

## Arithmetic

14×8.5 + 12×8.0 + 10×8.5 + 10×8.0 + 8×7.5 + 8×9.0 + 7×8.0 + 7×8.5 + 12×8.0 + 8×8.0 + 4×9.0
= 119 + 96 + 85 + 80 + 60 + 72 + 56 + 59.5 + 96 + 64 + 36
= 823.5 / 100 = **8.24**

## Must

None. Static check has zero blockers. Render check file does not exist (missing screenshots). No DEMO-RULES breaches detected in HTML. Photo credits have empty hrefs but this is a warning, not a blocker.

## Should

1. **where:** dist/index.html line 635, h1 element
   **problem:** Headline is 12 words; RUBRIC deducts for >8 words. Likely exceeds 3 lines at 1440 and 4 lines at 390.
   **fix:** Shorten to ≤8 words while keeping trade + city + outcome. Example: "Colorado Springs concrete built for clay and freeze." Move the rest to the lead paragraph.

2. **where:** dist/index.html line 1110, ul.credits
   **problem:** Four `<li>` elements contain `<span>Pexels</span>` with no href attribute. Static check flags these as warnings.
   **fix:** Either add valid Pexels URLs or remove the `<span>` wrapper and render plain text: `<li>Photo by unknown on Pexels</li>`.

3. **where:** dist/index.html lines 883, 901 (checklist-result, lift-result)
   **problem:** Tool outputs are plain text divs. Wow moment loses points for non-designed output.
   **fix:** Style the result div with the elevation-marker treatment or a bordered card that matches the signature system. Add an icon or visual indicator of the diagnosis outcome.

4. **where:** Entire site
   **problem:** Screenshots and render.json are missing. Multiple categories are capped below their potential because visual verification is impossible.
   **fix:** Run the render pipeline to generate `qa/screens/` and `qa/render.json`. Re-score after screenshots exist.

## Elevate

1. **photo (weakest, weight 8):** Commission or curate real Pexels images with a unified grade that matches the CSS filter intent. Shoot/crop for topographic storytelling: one frame showing clay soil profile, one showing rebar placement from above, one showing finished broom texture at golden hour. Apply the contour-elevation signature as a duotone overlay or clip-mask frame treatment so photos feel art-directed, not stock. This moves photo from 7.5 toward 9.0.

2. **motion (second weakest by weight among tied 8.0s, weight 12):** Tie the clip-path reveal to the elevation-marker concept: as each section enters, the contour lines in the background animate (drawSVG or clip wipe) in sync with the content reveal, so the signature *moves* rather than sitting static. Add a micro-interaction on the elevation markers themselves (subtle scale or border-color shift on scroll-into-view). This gives motion a narrative role and pushes it from generic reveals to concept-carrying motion.