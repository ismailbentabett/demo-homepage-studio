COPY: ok

## Five-second test (from dist/index.html; no screenshots available)

At 1440: "Interior Demolition & Tear-Outs in Akron, OH" with two CTAs ("Price your tear-out" primary, "Call us" ghost). Phone visible in trust rail. Layer Gauge margin rail shows seven dimmed rows. At 390: same headline wraps to ~4 lines; mobile bar with tel: and Price it anchor appears. Trade + city + outcome clear but h1 exceeds 8-word anchor.

**Note:** Screenshots directory is empty (`qa/render-check.json` confirms no captures). All scores below are derived from the built HTML/CSS and must be re-verified once renders exist. Deductions that require visual confirmation are flagged as provisional.

---

## First screen — 7.5

**What earned it:** Trade + city + outcome present in h1. Phone visible via trust rail. Two CTAs differentiated (primary filled, secondary ghost). Layer Gauge signature visible at load.

**Deductions:**
- `dist/index.html` line 6: h1 "Interior Demolition & Tear-Outs in Akron, OH" is 9 words, exceeding the ≤8 word anchor for a 9. −0.5.
- `dist/index.html` hero section: two CTAs of similar visual weight (both `.btn`, one filled one ghost) risk the "two equally loud buttons" read without screenshots to confirm hierarchy. Provisional −0.5.
- Cannot verify next-band peek (hero may be exactly 100svh) or fold position at 390×844 without screenshots. Provisional −0.5.

**Must:** None.
**Should:** Shorten h1 to ≤8 words (e.g., "Akron Interior Tear-Outs to the Studs"). Confirm with screenshot that primary CTA dominates and next band peeks 40–120px.

---

## Distinctiveness — 8.0

**What earned it:** Layer Gauge signature threaded through hero margin, process inline chips, services mini-gauge, reviews paper tone, and footer final row (≥4 sections per concept.json). Charcoal Stud + Plaster + Safety palette unique in registry. Bitter/Outfit/DM Mono type stack differs from siblings. Hero family 12 (sticky photo peel) is niche-unique.

**Deductions:**
- Cannot verify cover-the-logo test or that the gauge does real information work (vs decoration) without screenshots showing it lit at different scroll positions. Provisional −1.0.
- No sibling screenshots available to confirm distinctiveness against demolition-B/C. Provisional −1.0.

**Must:** None.
**Should:** Once screenshots exist, verify the gauge illuminates progressively and that removing it would break the page's information architecture.

---

## Typography — 7.5

**What earned it:** Bitter slab display + Outfit body + DM Mono accent = valid 3-family stack. Fluid clamp scale. Body at var(--fs-1) ≥16px equivalent. Paragraph max-width 62ch within 45–75 range. Tabular numerals on counters via font-variant-numeric.

**Deductions:**
- `dist/index.html`: kicker class uses DM Mono uppercase tracked 0.08em across process, services, pricing, and contact sections — risks "3+ tiny tracked caps labels in one view" deduction. −0.5.
- Cannot verify orphan control in headings or rendering quality of Bitter variable weight without screenshots. Provisional −0.5.
- h1 line-height 0.92 is tight for Bitter at large sizes; may clip descenders depending on viewport. Provisional −0.5.

**Must:** None.
**Should:** Reduce kicker usage to ≤2 sections or vary the label treatment. Verify heading orphans and Bitter rendering at 1440 and 390.

---

## Layout and rhythm — 7.5

**What earned it:** 10 sections with alternating tones (paper/deep/paper/mid/deep/paper/deep/paper/deep). Multiple layout families: split hero, stack process, grid services, estimator, review-grid, split form. Full-bleed dark bands present.

**Deductions:**
- `dist/index.html` lines ~700–800: four consecutive process sections (containment, shutoffs, testing, debris) all use identical `.stack` center-aligned layout. Triggers "same section shape used 3+ times" deduction. −0.5.
- Cannot verify density map, full-bleed breaks, or asymmetric sections without full-page screenshots. Provisional −1.0.
- Review grid and services grid may read as similar card layouts at certain viewports. Provisional −0.5.

**Must:** None.
**Should:** Break the four process stacks into distinct families (split with pinned photo, horizontal timeline, asymmetric callout, full-bleed dark band) so the scroll rhythm alternates density.

---

## Photo and video — 7.0

**What earned it:** Frame component applies consistent filter (saturate .8, contrast 1.08, sepia .1, brightness .92) for unified grade. Alt text present. Placeholder images referenced per task allowance.

**Deductions:**
- Placeholder integration cannot be verified as "ugly" or acceptable without screenshots. Scored at floor+1 per task instructions. −1.0 from potential 8.
- Cannot verify crop ratios, object-position, or that photos feel like one shoot. Provisional −0.5.
- Footer credits list generic "Demo Homepage Studio on Pexels" four times rather than specific photographer attributions. −0.5.

**Must:** None.
**Should:** Replace placeholders with niche-approved media once available. Apply concept's duotone treatment. Fix credit attributions to name specific photographers.

---

## Copy — 8.5

**What earned it:** Voice matches concept sentences exactly ("We hang plastic before we swing anything", "If the house is old enough to need a test...", "The trailer leaves your driveway each day..."). Trade-specific nouns throughout (zipper door, negative-air fan, plaster on lath, capped lines, mortar bed). Sample tags present on all reviews, pricing ranges, and license. Primary action consistently named "Price it". Microcopy at form steps and estimator disclaimer.

**Deductions:**
- h1 uses "Demolition" which the voice guide says to avoid (prefer "tear-out"), though it appears in facts.json tradeLabel so not a mustFix. −0.5.
- Cannot verify that every section answers one homeowner question from brief §1 without reading the rendered flow end-to-end. Provisional −0.5.

**Must:** None.
**Should:** Consider swapping h1 to "Tear-Outs" to align with voice guide. Verify section-by-section question coverage once screenshots exist.

---

## Mobile — 7.0

**What earned it:** Mobile bar with tel: and anchor CTA present. CSS breakpoints at 640px and 900px. Layer gauge hidden below 900px (replaced by inline variant). Buttons min-height 48px. Form inputs have adequate sizing.

**Deductions:**
- Cannot verify tap targets ≥48px, horizontal scroll absence, sticky behavior, or 390×844 composition without screenshots. Provisional −1.5.
- Cannot confirm mobile bar hides on scroll-down per spec. Provisional −0.5.
- Layer gauge inline variant at <900px may crowd the top of process sections. Provisional −0.5.

**Must:** None.
**Should:** Capture 390×844 screenshots and verify all interactive targets, scroll behavior, and gauge placement.

---

## Accessibility — 7.5

**What earned it:** Skip link present. Focus-visible styled at 3px solid var(--focus) with 3px offset. All form inputs have associated labels or fieldset legends. Honeypot field properly hidden. aria-live on estimator output. Reduced-motion handled via sw-motion class gate and CSS media query. Heading order: one h1, h2 per section, h3 for cards/steps — no skips visible. static.json clean (0 blockers, 0 warnings).

**Deductions:**
- Cannot verify reduced-motion content visibility (all layers/gauge visible without animation) without reduced-motion screenshots. Provisional −1.0.
- Cannot verify focus ring contrast on both paper and deep tones visually. Provisional −0.5.

**Must:** None.
**Should:** Capture reduced-motion screenshots to confirm all content is visible and gauge is fully lit.

---

## Motion and interaction — 7.0

**What earned it:** Hooks present for reveal, stagger, split-text, rotator, compare, marquee, accordion. Lenis loaded. CSS transitions use transform/opacity only (no layout properties). Reduced-motion gate prevents animation when preferred.

**Deductions:**
- Cannot verify intro tape wipe timing (≤1.2s), scroll-triggered layer peel execution, gauge fill sync, easing quality, or reversibility without scroll-position screenshots. Provisional −2.0.
- Cannot confirm ≥3 distinct hooks beyond plain reveals are visually executed. Provisional −0.5.

**Must:** None.
**Should:** Capture 0/25/50/75/100% scroll screenshots to verify motion behavior, timing, and hook variety.

---

## Wow moment — 7.5

**What earned it:** Layer Gauge as a persistent scroll-synced margin rail is a distinctive conceptual tool tied to the thesis. The estimator provides sample price ranges with honest disclaimers. Multi-step form with room/size/timing/contact flow is practical and prefillable.

**Deductions:**
- Cannot verify the signature moment executes visually or that the gauge animation delivers the "one thing a homeowner would show their partner" impact without screenshots. Provisional −1.0.
- Estimator output is a text range, not a designed artifact in the signature's language. −0.5.

**Must:** None.
**Should:** Design the estimator output as a ticket-style or gauge-integrated artifact so the tool's output lives in the signature system.

---

## Polish — 8.0

**What earned it:** SVG favicon + apple-touch-icon present. theme-color set. OG tags with 1200×630 dimensions. JSON-LD with GeneralContractor type, hours, areas. Print stylesheet for estimator. Consistent border-radius (2px throughout). Forced-colors handled for interactive elements. Preload on hero image and font.

**Deductions:**
- Photo credits list generic "Demo Homepage Studio on Pexels" four times rather than specific attributions. −0.5.
- Cannot verify that nothing is out of place at any viewport without screenshots. Provisional −0.5.

**Must:** None.
**Should:** Fix photo credit attributions. Verify polish details at all viewports once screenshots exist.

---

## Arithmetic

14×7.5 + 12×8.0 + 10×7.5 + 10×7.5 + 8×7.0 + 8×8.5 + 7×7.0 + 7×7.5 + 12×7.0 + 8×7.5 + 4×8.0
= 105 + 96 + 75 + 75 + 56 + 68 + 49 + 52.5 + 84 + 60 + 32
= 752.5 / 100 = **7.53**

---

## Must

None. (No DEMO-RULES breaches, no a11y failures visible from DOM, no broken phone layout confirmed.)

---

## Should

1. **Where:** dist/index.html h1 | **Problem:** 9 words, exceeds ≤8 anchor | **Fix:** Shorten to "Akron Interior Tear-Outs to the Studs" or similar.
2. **Where:** dist/index.html process sections (~lines 700–800) | **Problem:** Four consecutive .stack layouts | **Fix:** Make containment a split with pinned photo, shutoffs a horizontal timeline, testing an asymmetric callout, debris a full-bleed dark band.
3. **Where:** dist/index.html kicker class usage | **Problem:** 3+ tiny tracked caps labels across sections | **Fix:** Limit kicker to ≤2 sections or vary label treatment.
4. **Where:** dist/index.html footer credits | **Problem:** Generic "Demo Homepage Studio on Pexels" ×4 | **Fix:** Attribute specific photographers from niche media manifest.
5. **Where:** dist/index.html estimator output | **Problem:** Plain text range, not in signature language | **Fix:** Design output as a ticket-style or gauge-integrated artifact.
6. **Where:** qa/screens/ | **Problem:** No screenshots captured | **Fix:** Run render check to capture all required viewports before round 2 scoring.

---

## Elevate

1. **Photo (weakest, weight 8):** Replace placeholder frames with niche-approved media from the demolition manifest; apply the concept's duotone treatment (charcoal deep + safety orange tint) so photos read as one controlled shoot rather than stock fills. This moves photo from 7.0 toward 8.5+.

2. **Layout (second weakest, weight 10):** Break the four consecutive .stack process sections into distinct layout families — make containment a split with pinned photo, shutoffs a horizontal step-timeline, testing an asymmetric callout, and debris a full-bleed dark band — so the scroll rhythm alternates density instead of repeating the same centered column. This moves layout from 7.5 toward 9.0.