COPY: ok

# Five-second test (from dist/index.html; no screenshots available)

- **What is it?** Handyman services in Ann Arbor, MI ("Handyman Services · Ann Arbor, MI" kicker + h1 "Pick your jobs. See the hours.").
- **Where?** Ann Arbor, MI (kicker, title tag).
- **What do I do?** Build a punch list to see hours/prices, or call/text. Primary CTA "Build my list" anchors to estimator.
- **Why them?** 4.8 stars / 212 reviews (Sample rating), specific trade services listed.

Verdict: Clear value prop and action. Would score higher with visual confirmation of layout and fold.

---

## First screen — 8.5

**Earned:** Trade + city + outcome clear in ≤8 words ("Pick your jobs. See the hours." = 6 words). One primary action ("Build my list") plus secondary phone. Proof line present with Sample label. Phone visible in header and hero actions. Hero mosaic images now have valid src paths replacing round 1 media/undefined blockers.

**Deductions:**
- No screenshots to verify next-band peek or mobile fold. Cannot confirm h1 ≤4 lines at 390×844 or buttons above fold. −0.5 (unverifiable mobile composition).
- H1 uses `<br>` tag which forces a 2-line break regardless of viewport; may cause rhythm issues at certain widths. −0.5.
- No screenshot evidence that hero mosaic renders correctly with new image paths. Trusting DOM but cannot verify visual result. −0.5.

---

## Distinctiveness — 8.5

**Earned:** Pegboard hang-tag signature appears in 4 sections: hero (peg-grid class), estimator (hang-tag pills), photo-proof wall (peg-frame + hang-tag captions), footer (tool-outline + data-sw-signature). Palette (Workshop Teal #1C3A38 + Safety Gold #E8C468 + Paper #F0E6D2) is distinctive. Big Shoulders display + Outfit text + DM Mono accent is a non-generic trio. Tool icons now use distinct SVGs per service (tape, level, screwdriver, hammer, wrench, caulk, drill, saw) fixing round 1 single-icon bug.

**Deductions:**
- Services grid still uses repeated card shape despite svc-card--wide variant adding some asymmetry. Three icon-in-card pattern persists. −0.5.
- No siblings found in sites/handyman/A/ or sites/handyman/C/ to compare; cannot verify distinctiveness against directions A/C. Score capped until comparison possible. −0.5.
- Motif is strong but could do more organizational work beyond decoration in some sections. −0.5.

---

## Typography — 8.5

**Earned:** Fluid scale with clamp() functions. Body ≥16px via --fs-1. Display tracking −0.03em on headings. DM Mono used for data (hours, prices, sample tags) with tabular-nums applied. Reviews now use curly quotes ("I picked six items..."). Lead paragraph set apart via .proof-line. H1 is dramatic size contrast against body.

**Deductions:**
- More than 5 distinct sizes visible: --fs--1, --fs-0, --fs-1, --fs-2, --fs-3, --fs-h1, plus .sample-tag at 0.75rem and .credits at 0.7rem. That is 8 sizes. −0.5.
- En-dash ranges not verified in rendered pricing output; cannot confirm typographic correctness. −0.5.
- No screenshot to verify measure (45–75ch) or orphan control in headings. −0.5.

---

## Layout and rhythm — 8.5

**Earned:** Alternating tones deep/paper/signal/paper/deep/paper/mid/paper/deep/signal. Varied section shapes: hero split, rail strip, estimator split, triage stack, break full-bleed, services grid, peg-wall mosaic, reviews list, tabs stack, area split, contact stack. Photo-proof uses peg-wall with varied tile sizes (tall, wide variants) breaking the uniform grid from round 1. Gap between sections (--s-10: 128px) exceeds internal gaps.

**Deductions:**
- No screenshots to verify density or blank gaps at any viewport. −0.5.
- Two centred stack sections (triage, contact) in sequence separated only by break. Acceptable but reads repetitive. −0.5.
- Services grid and photo-proof both use grid layouts; similar shape twice though tile variation helps. −0.5.

---

## Photo and video — 8.0

**Earned:** All images now have valid src paths (media/hero-B1.png, fix-tv-mount.png, detail-clean-patch.png etc.) replacing round 1 media/undefined blockers. Alt text describes each frame. Width/height attributes present. Consistent filter implied by CSS. Footer credits simplified to single "Sample photos for demonstration only" line fixing round 1 broken Pexels links. Placeholder integration noted but not penalized heavily per instructions.

**Deductions:**
- Placeholder images expected but cannot verify visual quality without screenshots. Integration may be ugly. −0.5.
- No video present despite concept mentioning motion intro. −0.5.
- Cannot verify consistent grade across all frames without seeing them. −0.5.
- Same photo slot names reused? Cannot verify without working render. No deduction here but flagged.

---

## Copy — 9.0

**Earned:** Voice is plain, specific, contractor-authentic ("Anchor holes, doorknob dents and moving damage patched, textured and painted to match"). No banned phrases. Buttons named for action ("Build my list", "Price it", "Text these to…", "Check"). Sample labels on reviews, rating, pricing. Microcopy at doubt points ("Final number after photos or walk-through"). One consistent primary action name ("Price it" throughout services and estimator CTA). Headlines answer homeowner questions. No tricolons, no "Get started".

**Deductions:** None. Copy remains the strongest category.

---

## Mobile — 8.5

**Earned:** CSS breakpoints at 640px and 900px. Mobile bar with call + "Price it" buttons (flex: 1, min-height 48px via .btn). Nav hidden below 900px. Form inputs min-height 48px. Tap targets appear adequate from CSS. Sticky estimator output positioned with calc(var(--header-h) + var(--s-5)).

**Deductions:**
- No screenshots at 390×844, 375×812, or 320×640. Cannot verify horizontal scroll, text overflow, or pinned elements. −0.5.
- Hero mosaic switches from 2-col to 3-col at 640px; on 390px it is 2-col with 3:2 aspect tiles. Six tiles in 2 columns = 3 rows, potentially pushing CTAs below fold. Cannot confirm. −0.5.
- .est-output is position: sticky; could overlap content or trap scroll on small screens. No screenshot evidence it works. −0.5.

---

## Accessibility — 8.5

**Earned:** Skip link present (.skip-link CSS). Focus styles defined (outline: 3px solid var(--focus); outline-offset: 3px). Reduced-motion media query resets all animations and makes content visible. ARIA roles on tabs with aria-controls attribute (fixes round 1 missing attribute). Live regions on ZIP msg and triage result (aria-live="polite"). Form honeypot field hidden accessibly. Labels on all inputs. Heading order: h1 → h2 with no skips detected.

**Deductions:**
- Form step navigation uses data-next/data-prev buttons without announcing step progress to screen readers beyond fieldset legends. No aria-current or live region for step changes. −0.5.
- Reduced-motion screenshot not available to confirm all content visible. Trusting CSS but cannot verify. −0.5.
- Rotator/split-text hooks present in CSS but no corresponding HTML uses them. Not a failure, just unused. −0.5.

---

## Motion and interaction — 8.0

**Earned:** Reveal system with fade, clip, and stagger variants. Stagger delays calculated per child. Reduced-motion respected. Hover states on buttons (scale 0.97 press), nav links (underline scaleX), service cards (translateY -2px + border-color). Estimator checkboxes trigger hang-tag updates (implied by data attributes). Triage buttons toggle aria-pressed.

**Deductions:**
- Concept promises "Mosaic tiles drop onto pegs with 60ms stagger, settle with scale .98→1 micro-bounce" and "Hang-tags swing in (rotate -3deg→0)". CSS shows only generic translateY reveal and stagger delays. The bespoke peg-drop and swing animations are absent from the built CSS. The signature motion does not exist. −1.0.
- Fewer than 3 distinct hooks beyond plain reveals: fade-up, clip-wipe, stagger-delay are all variations of entrance. Hover states are standard. No scroll-driven storytelling, no counter animation, no parallax. −0.5.
- No screenshots at 25/50/75% scroll to verify motion behaviour or reversibility. −0.5.

---

## Wow moment — 8.0

**Earned:** Punch-list estimator is a genuine tool tied to the thesis (pick jobs → see hours → price band). Output includes total hours, visit fit, and sample price range. Triage tool provides specialist routing. Both are useful and trade-specific. Images now render so hero mosaic contributes visual interest.

**Deductions:**
- Estimator output is text-only (<dl> with dt/dd). No designed sheet, no printable layout, no visual summary. The tool's output does not use the signature language (no hang-tag in result, no peg-grid frame). −1.0.
- Triage result is a plain div with text. No icon, no colour coding, no next-step CTA beyond the general form. −0.5.
- Motion wow (peg-drop animation) still missing from built CSS. −0.5.

---

## Polish — 8.5

**Earned:** SVG favicon + apple-touch-icon referenced. OG tags complete with dimensions. JSON-LD HomeAndConstructionBusiness schema. Theme-color set. Print stylesheet for estimator (html.sw-print-est). Forced-colors handling for buttons and compare handle. Consistent radius (--radius: 2px). Lazy loading with width/height on images. Distinct tool icons used appropriately. Footer credits cleaned up.

**Deductions:**
- Class attribute bug: class="frame &quot;mosaic-tile&quot;" (line 1450) contains HTML-encoded quotes inside the class value. Browser interprets as multiple classes; cosmetic issue but indicates malformed markup. −0.5.
- Mixed icon stroke application not fully verified without visual inspection. −0.5.
- No screenshot to verify footer design or consistency at all viewports. −0.5.

---

## Arithmetic

14×8.5 + 12×8.5 + 10×8.5 + 10×8.5 + 8×8.0 + 8×9.0 + 7×8.5 + 7×8.5 + 12×8.0 + 8×8.0 + 4×8.5
= 119 + 102 + 85 + 85 + 64 + 72 + 59.5 + 59.5 + 96 + 64 + 34
= 840 / 100 = 8.40

---

## Must

None. Round 1 mustFix items (media/undefined paths, broken Pexels links) are resolved.

---

## Should

1. **where:** dist/index.html line 1450 (and similar mosaic tiles)
   **problem:** Class attribute contains HTML-encoded quotes: class="frame &quot;mosaic-tile&quot;". Browser parses as three classes including literal quote characters.
   **fix:** Change to class="frame mosaic-tile" with proper space separation.

2. **where:** dist/index.html estimator output (lines 1527-1536)
   **problem:** Estimator result is plain dl/dd without signature design language.
   **fix:** Wrap output in peg-grid container and add hang-tag pills for each line item to tie tool output to the signature system.

3. **where:** dist/index.html triage result (line 1552)
   **problem:** Triage result is unstyled div with no icon or colour coding.
   **fix:** Add tool-outline icon and t-signal or t-mid background to visually distinguish specialist routing from handyman-fixable items.

4. **where:** dist/index.html CSS motion system
   **problem:** Concept-promised peg-drop and hang-tag swing animations absent; only generic translateY reveals.
   **fix:** Implement GSAP ScrollTrigger animations for mosaic tiles (scale 0.98->1 with settle easing) and hang-tag swing-in (rotate -3deg->0) with reduced-motion fallback.

5. **where:** dist/index.html typography
   **problem:** 8 distinct font sizes visible, exceeding the ≤5 guideline.
   **fix:** Consolidate .sample-tag and .credits to use existing scale steps (--fs--1 or --fs-0) rather than custom rem values.

---

## Elevate

1. **Motion:** Implement the peg-drop animation for hero mosaic tiles (scale 0.98->1 with settle easing) and hang-tag swing-in (rotate -3deg->0) on service cards entering viewport, using GSAP ScrollTrigger with reduced-motion fallback to static visibility. This would bring the signature motion in line with the concept promise and push motion from 8.0 toward 9.0.

2. **Wow:** Style the estimator output sheet with the peg-grid background and hang-tag pills for each line item, so the tool's result reads as part of the signature system rather than plain text. This connects the functional wow to the visual signature and would elevate wow from 8.0 toward 9.0.