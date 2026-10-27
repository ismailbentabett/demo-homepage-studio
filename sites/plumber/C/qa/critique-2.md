COPY: ok

## Five-second test (from DOM, no screenshots available)

At 1440: "Why the Buffalo double has two shut-offs" — a plumber's site for Buffalo homeowners framed as a magazine issue. Primary action is "Check my freeze risk", secondary is the phone number in the header. The masthead "THE THAW ISSUE · VOL. 27 · Buffalo NY" establishes the editorial concept immediately. At 390: same hierarchy expected from responsive CSS; h1 should fit within 4 lines based on clamp scale.

No screenshots exist in qa/screens/ for this round. All scoring below is derived from dist/index.html structure, CSS system, and facts.json compliance. This limits confidence in visual execution (photo grading, actual fold positions, motion timing) but the DOM evidence meets or exceeds 9-anchor criteria across categories.

---

## First screen — 9.0

**What earned it:** h1 states trade + city + specific outcome in 8 words across 2 lines (dist/index.html lines 623-626). Masthead establishes the magazine concept before the headline. Primary CTA "Check my freeze risk" is distinct from generic "Get started". Proof line with Sample rating visible (line 634). Phone number in header (line 597).

**Deductions:** None from DOM. Cannot verify next-band peek or mobile fold without screenshots; if the hero is exactly 100svh with no peek, that would be -0.5, but CSS shows min-height calc(100svh - header-h) which allows content below. Score holds at 9.0 pending visual confirmation.

## Distinctiveness — 9.0

**What earned it:** Department-rule signature appears in 9 sections (field-notes, freeze-map, the-double, letters, classifieds, pipe-froze, contact, footer, plus hero masthead). Magazine editorial concept with numbered departments, cover-lines, letters-to-editor format is unlike standard contractor templates. Three distinct layout families: article+tool-card grid, split media+body, letters grid. Palette (Lake Erie Blue #0B2545, Furnace Red #B8372B, Snow Paper #F4F1EB) is trade-appropriate and not the default purple/indigo.

**Deductions:** Cannot compare against siblings without screenshots. If plumber-A or plumber-B shares the department-rule motif or Fraunces display face, this would drop to 7.0. Scoring assumes check-unique passed.

## Typography — 9.0

**What earned it:** Fraunces display + Source Sans 3 text + DM Mono accent (3 families, mono as accent per RUBRIC §3.3). Fluid clamp() scale. Tabular numerals on prices and counters. Display tracking -0.03em. Lead paragraph class sets apart. Mono used consistently for department numbers, proof-line, form-hours, zip-answer, sample-tags. Scale contrast between h1 and body.

**Deductions:** None detectable from static HTML. No orphan control visible in markup (would need CSS text-wrap: balance or manual &nbsp;). If orphans appear in rendered h1/h2, -0.5 each.

## Layout and rhythm — 9.0

**What earned it:** 9 sections with alternating tones (deep → paper → mid → paper → deep → paper → accent → paper → deep → paper). Full-bleed break band. Asymmetric split in the-double (0.8fr/1.2fr). Dense classifieds grid vs quiet letters section. Each section has one job. No two adjacent sections share tone or layout family.

**Deductions:** None from DOM. Cannot verify blank gaps or touching dark bands without screenshots. If two t-deep sections touch without a paper/mid separator, -1.0.

## Photo and video — 8.0

**What earned it:** Consistent CSS filter grade applied to all images (saturate .8, contrast 1.08, sepia .06, hue-rotate -4deg). Object-position specified on hero and break. Width/height attributes present. Alt text describes frame content. No faces as owner. Placeholder integration noted per instructions.

**Deductions:** -0.5 for placeholder alt text ("Placeholder for hero-C1") which reads as broken to visitors even if intentional. Cannot verify actual image relevance, crop ratios, or whether photos feel like one shoot without screenshots. Score capped at 8.0 until real media is confirmed.

## Copy — 9.0

**What earned it:** Specific trade nouns throughout ("frost-free spigot", "backwater valve", "bucket test", "check valve", "shared drain"). Every section answers a homeowner question. Sample labels on all reviews and prices. Primary action consistently named "Check my freeze risk". Form thank-you honestly states demo status. Microcopy at ZIP tool, freeze-risk checklist, sump checklist. No banned phrases.

**Deductions:** None. Voice matches the Buffalo winter plumbing niche precisely.

## Mobile — 9.0

**What earned it:** Mobile bar with call + CTA, hidden at >=900px. Tap targets >=48px via .btn min-height. Header collapses to menu button. Grid layouts stack on mobile. No horizontal scroll triggers in CSS.

**Deductions:** Cannot verify actual rendering, tap target sizes in context, or whether mobile bar covers form/footer without screenshots. CSS structure meets 9-anchor.

## Accessibility — 9.0

**What earned it:** Skip link. Focus visible with 3px accent outline, 3px offset. All form inputs labeled. Tabs have proper ARIA. Checklist and ZIP results use aria-live="polite". Reduced motion safety net disables all animation. Forced colors handled. Heading order correct. Honeypot properly hidden.

**Deductions:** None from DOM. Cannot verify focus visibility on all tones or reduced-motion screenshot completeness without render output.

## Motion and interaction — 9.0

**What earned it:** Multiple reveal types (clip, stagger, split-text). Department rules animate with clip-path wipe. Consistent hover language (underline scaleX). Button press scale .97. Lenis loaded. Reduced motion respected. At least 3 hooks beyond plain reveals: split-text hero, clip-wipe dept-rules, interactive tools.

**Deductions:** Cannot verify timing, easing, or whether intro blocks reading without screenshots/render.json. DOM shows correct hooks and reduced-motion handling.

## Wow moment — 9.0

**What earned it:** Freeze-risk checklist is tied to the Buffalo winter thesis and produces actionable output. Sump readiness self-check is a second tool in the same signature language. The magazine editorial concept itself is memorable and trade-specific.

**Deductions:** Cannot verify tool output design or whether it renders in reduced motion without screenshots. DOM shows aria-live regions and proper form structure.

## Polish — 9.0

**What earned it:** SVG favicon + apple-touch-icon. OG image 1200x630. Theme-color. JSON-LD with Plumber type. Print stylesheet. Lazy loading with dimensions. Hero preloaded. Consistent 2px radius. Forced colors. Footer designed. Static check clean (only warnings for empty Pexels hrefs).

**Deductions:** None. Warnings are non-blocking.

---

## Arithmetic

14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.0 + 4×9.0
= 126 + 108 + 90 + 90 + 64 + 72 + 63 + 63 + 108 + 72 + 36
= 892 / 100 = **8.92**

Weighted score: **8.92**

---

## Must

None. Static check has no blockers. No DEMO-RULES breaches detected. All reviews and prices carry Sample labels. Form thank-you discloses demo status. No faces as owner. No invented claims.

## Should

1. **Where:** dist/index.html line 618, 652, 676, 708 (all img elements)
   **Problem:** Alt text reads "Placeholder for hero-C1" etc., which signals broken media to visitors and screen readers.
   **Fix:** When real media is sourced, replace with descriptive alt text matching the frame content. Until then, consider alt="Buffalo plumbing service area in winter" or similar generic-but-honest descriptions.

2. **Where:** dist/index.html line 979 (credits list)
   **Problem:** Four `<a>Pexels</a>` links with no href trigger static check warnings.
   **Fix:** Either add href="#" with aria-label="Photo credit placeholder" or remove the anchor tags and render as plain text until real credits are available.

3. **Where:** Photo category score
   **Problem:** Score capped at 8.0 due to placeholder media; cannot reach pass bar of 8.5 without verified imagery.
   **Fix:** Source Pexels key or approved niche media, run render check, and re-evaluate photo score.

## Elevate

1. **Photo (weakest, weight 8):** When media becomes available, art-direct shots to show sequence (frozen spigot → basement thaw → labeled double meters) rather than isolated stock frames. Apply the existing CSS filter as a base but adjust per-image so the grade feels intentional, not uniform. Use object-position to place subjects on thirds aligned with the department-rule grid.

2. **Layout (second weakest by tie-break, weight 10):** Introduce one deliberate grid-break moment where a department rule extends past the container gutter into the bleed, or where a caption overlaps an image edge. This gives the scroll a designed asymmetry that separates it from well-executed-but-safe editorial templates. Reference the quality of Golden Touch's grid breaks, not its specific implementation.