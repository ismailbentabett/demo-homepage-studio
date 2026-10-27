COPY: ok

## Five-second test (DOM-based, no screenshots available)

At 1440: The hero shows a type-masked headline "Worcester Porch Rebuilds" over a placeholder image. A kicker reads "Carpentry for Worcester's stacked porches". A lead line says "156 sample reviews | 11 years in Worcester". Two buttons: "Call (508) 555-0169" and "Price a rebuild". The trade and city are visible in the h1 itself. Phone is visible in the header and hero CTAs. Next band peeks because hero uses `min-height`, not `height: 100vh`.

At 390: Same content stacks vertically. Both CTAs should be above the fold given the hero min-height is `calc(100svh - var(--header-h))` and content is bottom-aligned. Phone is visible. The h1 at clamp(3rem, min(12vw, 14svh) + 0.2rem, 6.5rem) computes to approximately 3rem at 390px, which is roughly 3 lines for "Worcester Porch Rebuilds" in Bebas Neue uppercase. Within the 4-line limit.

**Answer:** This is a porch carpentry company in Worcester, MA specializing in triple-decker porch rebuilds. I can call or price a rebuild. The h1 carries trade + city + outcome.

---

## First screen — 9.0

**What earned it:** h1 visibly states "Worcester Porch Rebuilds" (trade + city + outcome in 3 words, well under the 8-word limit). Phone visible in header and hero CTA. Two distinct CTAs with clear hierarchy (call primary, price secondary). Proof line under h1 ("156 sample reviews | 11 years in Worcester"). Next band peeks via min-height. Reduced motion shows all content statically. Round 1 mustFix resolved.

**Deductions:**
- Cannot verify from screenshots whether both CTAs remain above the fold at 390x844 or whether the next band peeks 40-120px as required for a 9. DOM structure suggests correct implementation but visual confirmation is absent. No deduction applied without screenshot evidence, but noted as a risk.
- Hero image alt text still reads "Placeholder for hero-C1" rather than describing the intended scene. Placeholder artifact, not a firstScreen deduction (captured under photo if real media were present).

Score anchored at 9 based on DOM evidence of all required elements being present and correctly structured. Unchanged from round 2.

---

## Distinctiveness — 9.0

**What earned it:** The floor-band + baluster-rule signature appears in 5 sections: hero, floor-1, services, floor-2, floor-3, and footer (6 total with `data-sw-signature="floor-band"`). The elevation badge (fixed SVG triple-decker) is a unique navigational motif tied to the thesis. The baluster SVG rule is a custom repeating pattern, not a generic divider. Palette (Night Blue #0F141C + Teal accent #4A9E96 + Clapboard cream #F2E8D0) differs from typical carpenter sites and from siblings. Type pair (Bebas Neue condensed + Source Sans 3 + DM Mono) is distinctive. Layout families include: type-mask hero, split-layout with checklist tool, services grid, full-bleed break, split-reverse with tabs, proof stack, season planner, statement ZIP section, multi-step form, designed footer. That is >=3 distinct layout families. Cover-the-logo test: the baluster rule and floor labels would identify this site.

**Deductions:** None. Signature does real work (organizes content by floor, provides scroll feedback via elevation). No AI-slop tells detected. No sibling overlap observable from DOM alone.

Score unchanged from round 2.

---

## Typography — 9.0

**What earned it:** Three-family system (Bebas Neue display, Source Sans 3 body, DM Mono accent/data). Fluid scale via clamp(). Body is Source Sans 3 at `var(--fs-0)` clamped 0.9rem-1rem (>=16px at most viewports). Measure controlled via `.lead { max-width: 65ch }`. Tabular numerals via `font-variant-numeric: tabular-nums` on `[data-count]`. Display tracking at -0.03em on h1/h2/h3. Line-height 0.92 on display (within 0.85-1.05 range). Kicker and floor-label use uppercase tracked caps consistently. Middle-dot meta strings from round 1 replaced with pipe separators ("156 sample reviews | 11 years in Worcester", "156 reviews | 4.8 stars"). Round 1 should-fix resolved.

**Deductions:**
- DOM: No visible en-dash or curly quote usage in the copy (ranges use "to" not "-", quotes are straight in review blockquotes). Minor typographic detail missing for a 10. Not sufficient to drop below 9 given all other anchors met.

Score unchanged from round 2.

---

## Layout and rhythm — 9.0

**What earned it:** Sections have clear single jobs: hero (intro), floor-1 (safety + checklist), services (grid), break (visual pause), floor-2 (trim + tabs), proof (reviews), floor-3 (season + booking), area (ZIP), contact (form), footer. Tone alternation: t-dark (hero) -> t-paper (floor-1) -> t-paper (services) -> full-bleed break -> t-deep (floor-2) -> t-paper (proof) -> t-accent (floor-3) -> t-dark (area) -> t-paper (contact) -> t-dark (footer). No three same-tone sections in a row. >=3 layout families (split, grid, statement, full-bleed, split-reverse). Asymmetric split-reverse on floor-2. Dense services grid followed by quiet break. Gap between sections (`var(--s-9)` = 96px) exceeds gap within sections.

**Deductions:** None at this level.

Score unchanged from round 2.

---

## Photo and video — 8.0

**What earned it:** All images have descriptive alt text matching their slot purpose (except placeholder artifacts). Width/height attributes present on every img. Loading=lazy on non-hero images. Hero image has fetchpriority=high. Object-fit: cover with consistent filter treatment (saturate 0.8, contrast 1.08, sepia 0.12, brightness 0.92) creates a unified grade. No duplicate photos detected in DOM. Placeholder mode means no actual photo quality to judge.

**Deductions:**
- Placeholder mode: cannot verify on-topic frames, face-as-owner, readable logos, or mixed grades. Default to floor-passing score for placeholder mode. 8.0 is the expected placeholder ceiling per RUBRIC calibration.
- DOM: Alt text on some images says "Placeholder for [slot-name]" rather than describing the intended scene. Placeholder artifact, not a real deduction when real media is absent.

Score unchanged from round 2. Cannot exceed 8.0 without real media verification.

---

## Copy — 9.0

**What earned it:** Voice matches concept's three sample sentences. Specific trade nouns throughout: "triple-decker", "balusters", "ledger board", "clapboard", "newel post", "stringers", "risers". Every service card names a specific scope. Sample tags on all reviews and prices. Primary action consistently named "Price it" across all CTAs (hero says "Price a rebuild", services say "Price it", floor-2 trim says "Get a trim quote" which is contextually appropriate for that sub-service). Form thank-you is honest: "This is a demo site. No data was sent." No banned phrases detected. Buttons named for action ("Lock a month", "Book an inspection", "Send my request"). Microcopy at moments of doubt ("We will call with a number, not a sales pitch"). Middle-dot separators replaced with pipes.

**Deductions:**
- DOM: Hero CTA says "Price a rebuild" while other CTAs say "Price it". Minor inconsistency in primary action naming. However, "Price a rebuild" is more specific to the hero context and "Price it" is used consistently elsewhere. Borderline; no deduction applied as the variation is contextually justified.

Score unchanged from round 2.

---

## Mobile — 8.5

**What earned it:** Mobile bar with call + price CTAs, hidden at >=900px. All interactive elements have min-height/min-width 48px. Form inputs height 48px. Menu button 48x48. CSS breakpoints at 640px and 900px restructure grids (services 1->2->3 cols, reviews 1->2->3 cols). No horizontal scroll indicators in CSS. Container padding adjusts. Elevation badge hidden under 640px (appropriate, pinned story disabled). Reduced motion shows all content.

**Deductions:**
- Cannot verify from DOM alone whether mobile bar covers form or footer credits at 390x844. CSS shows `.mobile-bar.is-hidden { transform: translateY(100%) }` which suggests hide-on-scroll behavior, but visual confirmation absent. No deduction without screenshot evidence.
- Placeholder mode prevents verifying composed-for-phone crops vs desktop squeezes. -0.5 for inability to confirm phone-specific composition, consistent with rounds 1 and 2.

Score unchanged at 8.5. Cannot exceed without screenshot verification.

---

## Accessibility — 9.0

**What earned it:** Skip link present. Visible h1 preserves full title for screen readers and sighted users (round 1 mustFix resolved). All form inputs have associated labels. Tabs use proper role=tab/tabpanel/tablist with aria-selected and aria-controls. Checklist result has aria-live=polite. ZIP result has aria-live=polite. Focus styles defined (3px outline, offset 3px). Reduced motion CSS disables all animations and shows content statically. Forced colors media query adds borders to interactive elements. No heading level skips (h1 -> h2 throughout). Honeypot field properly hidden. Menu button has aria-expanded and aria-controls. Star ratings use aria-label on parent div.

**Deductions:** None. All a11y anchors for 9 are met based on DOM evidence. Reduced motion safety net is comprehensive.

Score unchanged from round 2.

---

## Motion and interaction — 8.5

**What earned it:** Multiple hook types beyond plain reveals: clip-path wipe on hero media, char-rise animation on type-mask, baluster rule clip-path draw, elevation badge floor highlighting via IntersectionObserver, stagger reveals on grids, tab switching. Reduced motion fully respected (all content visible, no animations). Intro is CSS-only (char-rise keyframes with 0.6s duration and stagger), should complete under 1.2s. No scroll-jacking detected. No bounce/elastic easing (uses ease-out and ease-in-out curves). Lenis loaded for smooth scroll. Hover language consistent (scaleX underline on links, brightness filter on buttons). Press scale 0.97 on buttons.

**Deductions:**
- Cannot verify intro timing or elevation badge overlap without screenshots/render.json timings. DOM evidence suggests correct implementation. No deduction without evidence.
- Only 3 hooks clearly identifiable beyond plain reveals (clip hero, baluster draw, elevation highlight), plus stagger and tab transitions. Meets the >=3 threshold. No cap applied.

Score unchanged at 8.5. Cannot verify timing or visual execution without screenshots.

---

## Wow moment — 9.0

**What earned it:** The porch safety self-check tool is trade-specific and genuinely useful to a homeowner. It produces actionable output and hands off to the form with pre-filled service. The checklist result card includes a mini elevation icon (`result-floor-icon`) with floor highlighting, connecting the tool output to the thesis visually (round 1 elevate move addressed). The elevation badge is a signature moment tied to the thesis (scrolling walks up the house). These two moments are connected: the elevation reinforces the floor-by-floor structure that organizes the tools. Tool output is no longer plain text; it is a designed card with icon, text, and CTA.

**Deductions:**
- Cannot verify the visual execution of the result card or elevation icon without screenshots. DOM shows the structure is present (`.checklist-result-card`, `.result-floor-icon`, `.fl` classes for floor highlighting). Assuming correct implementation based on CSS and HTML structure. No deduction applied.

Score unchanged from round 2.

---

## Polish — 8.5

**What earned it:** SVG favicon + apple-touch-icon PNG. OG image 1200x630 specified. Theme-color meta tag. JSON-LD with GeneralContractor type, openingHoursSpecification, areaServed. Print stylesheet handles estimator and hides nav. Lazy loading with width/height on all images. Hero image preloaded. Forced colors media query adds borders. Consistent border-radius (2px on buttons, 0 on cards/tags). One stroke width for icons (stroke-width=2). Footer is designed with brand, contact, hours, credits.

**Deductions:**
- DOM, footer credits (lines 990-992): Five credit links are empty `<span>` tags with no href attribute, rendering as non-functional text "Photo by unknown on Pexels". Flagged in round 1 and round 2 as a should-fix, remains unfixed. This is an inconsistent detail that prevents meeting the 9 anchor ("every detail matches the system"). -0.5.

Score dropped from 9.0 to 8.5 due to persistent unfixed should-fix item across three rounds.

---

## Arithmetic

14x9.0 + 12x9.0 + 10x9.0 + 10x9.0 + 8x8.0 + 8x9.0 + 7x8.5 + 7x9.0 + 12x8.5 + 8x9.0 + 4x8.5
= 126 + 108 + 90 + 90 + 64 + 72 + 59.5 + 63 + 102 + 72 + 34
= 880.5 / 100 = **8.81**

---

## Must

None. Round 1 mustFix (h1 visibility) has been resolved. No new mustFix items identified.

---

## Should

1. **where:** DOM, footer credits (lines 990-992) | **problem:** Five credit entries render as "Photo by unknown on Pexels" with no functional links. Flagged in rounds 1 and 2, remains unfixed after three rounds. | **fix:** Either add valid Pexels URLs from the media manifest or remove the wrapper and render as plain text. This persistent issue now caps polish at 8.5.

2. **where:** DOM, hero image and other placeholder images | **problem:** Alt text reads "Placeholder for [slot-name]" instead of describing the intended scene. When real media is loaded, alt text must describe the actual frame content. | **fix:** Update alt text in src/media.json or the build template to use descriptive text from the niche media manifest. Not blocking in placeholder mode but must be addressed before delivery.

3. **where:** DOM, proof section lead line (line 793) | **problem:** "156 reviews | 4.8 stars" uses a sample-tag span before the text but the tag reads "Sample review" (singular) while the line references aggregate stats. Minor inconsistency. | **fix:** Change to `<span class="sample-tag">Sample stats</span>` or restructure as "Sample reviews: 156 | 4.8 stars" for clarity.

---

## Elevate

1. **Category: mobile (weight 7, at 8.5).** Move: Add a phone-specific hero crop using `object-position` or a `<picture>` element with a media query, so the 390x844 hero shows a tighter framing of the porch detail rather than the desktop-wide shot squeezed down. This makes the mobile experience feel composed rather than collapsed, pushing mobile from 8.5 toward 9.

2. **Category: motion (weight 12, at 8.5).** Move: Add a micro-interaction to the checklist checkboxes themselves — a subtle scale or color pulse on check/uncheck that uses the accent color, tying the tool's input moment to the site's motion language. This adds a fourth distinct hook beyond reveals and draws, strengthening the motion category toward 9 without adding complexity.