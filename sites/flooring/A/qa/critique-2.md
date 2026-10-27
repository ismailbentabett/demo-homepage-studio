COPY: ok

## Five-second test (DOM-only, no screenshots)
At 1440: "Hardwood floor refinishing in Knoxville, TN" is clear; trade + city + outcome present. Primary action "Book a sample visit" and secondary "Price it" visible. Phone in header. Proof line with sample price, hours, rating. Next section (#quiz t-deep) should peek below hero fold. At 390: h1 likely wraps to 3-4 lines; both CTAs and phone should remain above fold given min-height calc(100svh - header-h). Cannot verify exact fold position without screenshots; scored with caution.

## firstScreen — 8.5
**Earned:** Trade + city + outcome in h1 (6 words). Two distinct CTAs (primary filled, secondary outlined). Phone visible in header. Proof line with sample price, hours, sample rating tag. Hero uses filmstrip layout (not generic photo+text). Grit rail signature present at hero bottom.
**Deductions:**
- −0.5: Cannot verify next-band peek or exact fold position without screenshots (qa/screens/ empty). Anchor 9 requires visible peek of 40–120px; unconfirmed.
- −0.5: Filmstrip track has only one frame in DOM (hero-A1.jpg). Concept promises "filmstrip frames unclip left-to-right like a sander pass, 70ms stagger" but only one `<figure class="frame filmstrip-frame">` exists. The carousel/filmstrip interaction cannot function as designed with a single slide. This weakens the first-screen signature execution.
- −0.5: H1 "Hardwood floor refinishing in Knoxville, TN" is 6 words but generic phrasing. Does not state an outcome ("to bare wood", "dust-free") within the headline itself; outcome is deferred to the lead paragraph. Anchor 9 wants trade+city+outcome in ≤8 words *in the h1*.

## distinctiveness — 8.5
**Earned:** Grit Sequence Rail signature appears in hero (grit-rail hero-rail data-grit="36"), story (story-rail data-grit="60"), proof (proof-rail data-grit="100"), and footer (footer-rail data-grit="FINISH") — 4 sections as promised. Grit pills in story steps and review cards extend the motif. Palette (Raw Maple/Walnut Ink/Finish Amber) is warm and trade-appropriate, not purple/indigo default. Font trio (Crimson Pro/Karla/DM Mono) differs from typical contractor templates.
**Deductions:**
- −0.5: Cannot run cover-the-logo test or verify sibling differentiation without screenshots. Scoring capped at 8.5 until visual evidence confirms the signature reads as unique at a glance.
- −0.5: Services grid uses 10 identical `.svc-card.t-cream` cards in a uniform grid. While functional, this is a standard template pattern. The signature does not touch the services section, missing an opportunity to make even the utility sections feel owned.
- −0.5: Review cards all share identical structure (stars, blockquote, meta, grit-pill, sample-tag). The grit pill (COAT 1–6) is a nice touch but visually subtle; without screenshots cannot confirm it reads as part of the signature system vs. decoration.

## type — 9.0
**Earned:** Strong font trio: Crimson Pro (display, serif) for headings, Karla (text, sans) for body, DM Mono (accent) for labels/kickers/proof. Fluid scale with clamp() functions (--fs--2 through --fs-h1). Body at var(--fs-0) = clamp(1rem, .97rem + .18vw, 1.125rem) ≥ 16px. Lead paragraph set apart with .lead class (larger size, max-width 34ch, font-weight 450). Kicker uses mono uppercase tracking. Tabular numerals in proof-line and estimator output (font-variant-numeric: tabular-nums lining-nums). Display tracking -.03em on h1/h2/h3. No orphans visible in DOM headings. Sample tags use mono at small size consistently.
**Deductions:**
- −0.5: Straight hyphen ranges in proof-line "$3–$5/sq ft" use en-dash correctly (good), but the services section blurbs and estimator disclaimer use plain hyphens in compound modifiers without checking for proper en-dash usage throughout. Minor.
- −0.5: Review card stars rendered as text "★★★★★" with aria-hidden="true" and aria-label on parent. Functional but typographically crude; SVG star icons would be sharper and more consistent with the mono/display system. Not a deduction per rubric but prevents 9.5+.

## layout — 9.0
**Earned:** Clear section rhythm: hero (t-paper) → quiz (t-deep) → story (t-cream) → break (t-deep full-bleed) → services (t-paper) → stain-picker (t-cream split-reverse) → estimator (t-deep) → CTA strip (t-accent) → proof (t-paper) → contact (t-cream) → footer (t-deep). Tones alternate properly; no two dark bands touch (break is full-bleed but separated by services t-paper above and picker t-cream below). Full-bleed break section provides visual breath. Asymmetric split-layout in quiz and stain-picker (split-reverse). Dense services grid contrasts with quiet CTA strip. Story uses pinned scroll layout (sticky steps + crossfade frames at ≥640px). Each section has one job.
**Deductions:**
- −0.5: Services band and proof band are both t-paper with similar density (grid of cards). They do not touch (picker t-cream and CTA t-accent separate them), but the tonal variety could be stronger. Three t-paper sections total (hero, services, proof) is acceptable but borders on repetitive.
- −0.5: Contact section combines copy/details + form in a two-column grid. The ZIP check lives inside contact-copy alongside phone/email/hours. This is borderline "two jobs" (contact info + serviceability check) but the ZIP check is clearly subordinate to the contact purpose, so only −0.5 not −1.0.

## photo — 8.0
**Earned:** All images use placeholder alt text describing the intended frame (e.g., "Freshly sanded red oak strip catching morning window light", "Boards cupped at the edges from moisture below"). Consistent aspect ratios via .frame (3/2) and .break-frame (21/9 desktop, 4/3 mobile). Images have width/height attributes, loading="lazy", decoding="async". No duplicate photos detected in DOM (hero-A1, detail-cupping, process-sander, process-stain, process-finish, detail-grain-redoak, material-sawdust, detail-stain-samples — 8 unique slots). Grit overlay texture applied to hero frame ties media to signature.
**Deductions:**
- −0.5: All images are placeholders ("Placeholder for hero-A1" etc.). Cannot verify color grade consistency, object-position thirds, or whether frames feel like "one shoot." Score capped at 8.0 until real media is loaded.
- −0.5: Footer credits list "Photo by unknown on Pexels" eight times. Generic attribution suggests stock was grabbed without art direction. A 9 requires "one grade across every photo and the video poster (looks like one shoot)" — impossible to confirm.
- Note: Photo floor is 8.0 in fast mode; this meets the minimum.

## copy — 9.0
**Earned:** Voice is plain, specific, contractor-authentic. Concrete trade nouns: "sanding passes", "bare wood", "swatches brushed on your own boards", "tack strips", "staple holes", "woven in to match the grain", "cupped", "raking window light". Every service blurb answers "what you get" in homeowner language. Sample tags on prices, rating, reviews, guarantee, licence. Form button says "Send request" (action-specific). Primary CTA consistently "Book a sample visit" across hero, picker, CTA strip. Secondary CTA "Price it" in hero and service cards. Quiz checklist uses observable conditions ("Finish looks dull but no scratches through to wood"). No banned phrases detected. Hours displayed with open-now hook. Guarantee includes sample tag. Demo disclaimer in footer.
**Deductions:**
- −0.5: Hero lead "Three sanding passes to bare wood. Stain samples brushed on your own boards. Three coats of finish, dust contained." is three short sentences that read slightly staccato. Could flow better as two sentences. Minor.
- −0.5: Estimator disclaimer "Ranges reflect typical Knoxville jobs; older finishes, repairs and stairs adjust the number." uses semicolon correctly but "adjust the number" is vague. "Change the final price" would be plainer.

## mobile — 8.5
**Earned:** Responsive breakpoints at 640px, 900px, 1100px. Container padding scales. Hero grid collapses to single column below 900px. Filmstrip track uses overflow-x: auto with scroll-snap for horizontal swipe on mobile. Services grid goes from 1-col to 2-col to 3-col. Review stack same. Mobile bar fixed at bottom with tel + CTA, hidden at ≥900px. Body gets padding-bottom: 80px when mobile bar shows to prevent content occlusion. Tap targets: buttons min-height 48px, menu-btn 44×44px, form inputs height 48px. Skip link present. No horizontal scroll expected (max-width containers, flexible grids).
**Deductions:**
- −0.5: Cannot verify actual rendering at 390×844 without screenshots. Pinned story layout activates at ≥640px; below that, story-steps and story-frames stack vertically. Need screenshot confirmation that stacked story reads well and frames don't create excessive vertical scroll.
- −0.5: Filmstrip with single frame is inert on mobile. If multiple frames were present, horizontal scroll-snap would work, but current DOM has nothing to swipe. Mobile users get a static image with no interaction hint.

## a11y — 9.0
**Earned:** Skip link to #main. Semantic HTML (header, nav, main, section, article, figure, figcaption implied via caption p, footer). Heading hierarchy: one h1, h2 for each section, h3 for subsections — no skips observed. All form inputs have associated labels (for/id pairs). Fieldset/legend for multi-step form. aria-live="polite" on zip-result, check-result, est-out. aria-expanded on menu button. aria-controls on menu button pointing to site-menu. aria-label on star ratings. aria-hidden="true" on decorative elements (grit-overlay, grit-rail, break-grain, star text). Focus styles: 3px solid var(--focus) with 3px offset. Reduced motion: all animations/transitions disabled via @media (prefers-reduced-motion: reduce). JS-off: all interactive controls hidden via html:not(.sw-js) selectors; content remains visible. Forced colors: borders added to interactive elements. Print stylesheet hides nav/mobile-bar/grit-rail/break/CTA/hero-filmstrip.
**Deductions:**
- −0.5: Review stars use text "★★★★★" with aria-hidden="true" and aria-label="5 out of 5 stars" on parent div. This works but the fourth review (Robert G.) has aria-label="4 out of 5 stars" while the visible text still shows "★★★★★" (five stars). This is a mismatch: the visual shows 5 stars but the label says 4. Either the text should show four stars or the label should say 5. As-is, sighted users see 5 stars for a 4-star review. This is a mustFix candidate but since it's a data/content error rather than structural a11y, marking as Should.
- −0.5: Rotator widget not used on this page, so no rotating-text a11y concern. However, the story pinned section uses data-story which likely drives crossfade via JS. Without screenshots cannot confirm reduced-motion shows all four story frames statically. DOM shows all four .story-frame elements present (not display:none), so reduced motion should show them stacked. Assuming correct behavior.

## motion — 8.0
**Earned:** Motion tokens defined (--ease-out, --ease-io, durations for press/ui/page/story/stagger). Reveal system with translate-y + opacity transitions. Clip-path reveal variant. Stagger delays via --i custom property. Split text system available. Lenis smooth scroll loaded. ScrollTrigger loaded for pinned story. Reduced motion fully respected via @media query and .sw-motion class gating. Intro: filmstrip frames should unclip with stagger (per concept), but only one frame exists so intro is effectively just the hero copy reveal.
**Deductions:**
- −1.0: Filmstrip intro cannot execute as designed. Concept specifies "Filmstrip frames unclip left-to-right like a sander pass, 70ms stagger, skippable" but DOM contains exactly one filmstrip-frame. The signature intro moment is broken by missing content. This is a significant gap between concept and delivery.
- −0.5: Story pinned crossfade requires ScrollTrigger to swap .is-active class on .story-frame elements. DOM structure supports this (four frames with data-frame="1" through "4"), but without render.json timing data or screenshots cannot verify the crossfade executes smoothly or that reduced motion shows all frames. Score assumes implementation works but caps at 8.0 due to unverifiable execution.
- −0.5: Only two motion hooks beyond plain reveals are evident in DOM: (1) filmstrip carousel (broken), (2) story pinned crossfade. Estimator sketch fill opacity transition is micro, not a hook. Rubric §3.9 requires ≥3 different hooks beyond plain reveals for score >6. Currently at 2 confirmed hooks. Motion capped at 8.0.

## wow — 8.0
**Earned:** Two tools tied to the thesis: (1) Refinish-or-recoat quiz with live checklist result, (2) Square-foot estimator with SVG sketch that fills as slider moves. Both are genuinely useful to homeowners. The grit sequence narrative (36→60→100→STAIN→COAT 1-3) is a memorable framing device that organizes the entire page. Stain picker section explains the real-world process (brush on your floor, leave overnight, choose in your light).
**Deductions:**
- −0.5: Estimator output is a price range text line (`<p data-est-out>`). Rubric §3.10 deducts −1.0 for "tool's output is a plain text line or a $ figure." The SVG sketch adds visual interest but the *output* itself is still text. Partial deduction applied because the sketch is integrated, but the output lacks designed treatment (no printable sheet preview, no breakdown visualization).
- −0.5: Quiz result is also a text line (`<p class="check-result">`). Same issue: useful answer but not visually designed as a keepable artifact. Combined with estimator, neither tool produces a "designed output" that a homeowner would screenshot or print.
- −0.5: Cannot verify wow moment execution in reduced motion without screenshots. DOM shows all content present (no display:none on tool outputs), so static fallback should work, but visual impact is unconfirmed.

## polish — 9.0
**Earned:** SVG favicon + apple-touch-icon. OG tags with dimensions (1200×630). Twitter card. JSON-LD HomeAndConstructionBusiness with complete schema (name, description, telephone, email, areaServed as City array, openingHoursSpecification). Theme-color meta. Preloaded hero image and Crimson Pro font. Consistent border-radius: 2px everywhere (buttons, frames, cards, inputs, logo-mark, sample-tag). One stroke width for icons (stroke-width="2" on all SVG symbols). Print stylesheet for estimator. Lazy images with width/height. Forced colors handled. No `transition: all` in CSS. Footer is designed with brand/nav/legal/credits grid and grit-rail signature close.
**Deductions:**
- −0.5: Footer credits repeat "Photo by unknown on Pexels" eight times identically. While honest for placeholders, a polished site would have varied attributions or a single consolidated credit line. Reads as unfinished.
- −0.5: No video present despite concept mentioning "video loads fast and has a poster" in rubric anchors. Not a deduction per se (site chose photos), but the absence means one less polish opportunity. Neutral.

## Arithmetic
14×8.5 + 12×8.5 + 10×9.0 + 10×9.0 + 8×8.0 + 8×9.0 + 7×8.5 + 7×9.0 + 12×8.0 + 8×8.0 + 4×9.0
= 119 + 102 + 90 + 90 + 64 + 72 + 59.5 + 63 + 96 + 64 + 36
= 855.5 / 100 = **8.56**

## Must
(none)

## Should
1. **where:** dist/index.html line 956–958, #proof review card 4 (Robert G.)
   **problem:** aria-label says "4 out of 5 stars" but visible text shows five star characters "★★★★★". Sighted users see 5 stars for a 4-star review.
   **fix:** Change the inner span text to "★★★★☆" (four filled, one empty) OR update aria-label to "5 out of 5 stars" to match facts.json which lists stars: 4 for Robert G. Recommend fixing the visible text to match the data.

2. **where:** dist/index.html line 668–676, .hero-filmstrip
   **problem:** Filmstrip contains only one frame. Concept promises multi-frame sander-pass intro with staggered clip reveal. Carousel is inert.
   **fix:** Add 2–3 additional hero frames showing progressive sanding stages (matches story frames already in media plan). Wire data-carousel to enable swipe. This fixes firstScreen signature, motion hook count, and wow simultaneously.

3. **where:** dist/index.html line 883–886, .est-output
   **problem:** Estimator output is a plain text paragraph. Tool output lacks designed treatment.
   **fix:** Style the output as a mini "estimate sheet" with ruled lines, mono numerals, and a print-friendly layout that matches the grit-rail signature. Make the SVG sketch respond to room type selection (not just opacity).

4. **where:** dist/index.html line 1155, .credits
   **problem:** Eight identical "Photo by unknown on Pexels" credits read as placeholder debris.
   **fix:** Consolidate into one line: "Stock photography via Pexels; attributions in media manifest." Or populate real photographer names from media/manifest.json when assets are finalized.

## Elevate
1. **layout (weight 10):** Break the services grid monotony by threading the grit-rail signature through it. Assign each service card a grit number based on its place in the refinishing sequence (Sand & refinish = 36, Screen & recoat = 100, Stain samples = STAIN, etc.). Render the grit pill inside each card and let the rail animate across the section header. This turns a template grid into a signature-bearing section and lifts distinctiveness alongside layout.

2. **motion (weight 12):** Replace the inert single-frame filmstrip with a true three-frame sander-pass sequence using existing process media (process-sander, process-stain, process-finish). Stagger their clip-path reveals at 70ms on load as the concept specifies. This delivers the promised intro moment, adds a third motion hook (bringing motion above the ≥3 threshold), and makes the first screen's signature visible rather than structural-only.