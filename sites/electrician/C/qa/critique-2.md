COPY: ok

## Five-second test
1440-first.jpg / 390-first.jpg: "Kansas City bungalow rewiring, room by room". Trade + city + outcome clear. Phone visible in header. Primary CTA "Price my rewire" visible. Hero looks composed.
However, 1440-full.jpg and 390-full.jpg show a critical failure: the entire middle of the page (Sections 2-9) is blank beige space. Only Hero and Footer render. This suggests the `data-reveal` motion logic (opacity: 0 start state) failed to trigger during capture, or the content is genuinely hidden. As a critic judging the artifact, the content is missing.

## First screen — 8.5
**Earned:** 1440-first.jpg: h1 "Kansas City bungalow rewiring, room by room" (6 words). Phone visible in header. Proof line "Sample rating" visible. Kicker "ELECTRICAL · OLD · HOME · WIRING".
**Deductions:**
- Cannot verify next band peeks (full screenshot is broken below hero).
- Cannot verify intro timing.

## Distinctiveness — 8.0
**Earned:** 1440-first.jpg: Arch-frame clip-path visible on hero image container. Palette (Plaster #F5F0E8, Brick #7A3B3B) is distinct. HTML confirms arch-frame class used in multiple sections (services, estimator).
**Deductions:**
- Cannot visually verify signature recurrence in middle sections due to blank full-page screenshot.

## Typography — 8.5
**Earned:** 1440-first.jpg: Cormorant Garamond display + Karla body. Fluid scale evident in h1 clamp. HTML confirms JetBrains Mono for kickers/labels.
**Deductions:**
- Cannot verify rag/orphans in body text (middle sections invisible).

## Layout and rhythm — 7.5
**Earned:** HTML structure shows 10 sections with alternating tones (paper/deep/mid/accent).
**Deductions:**
- 1440-full.jpg: Massive blank gap between hero and footer. Visual rhythm is non-existent in the artifact. (-1.0 for broken render).
- Cannot verify density map or grid usage visually.

## Photo and video — 7.0
**Earned:** HTML shows `photo-grade` filter class.
**Deductions:**
- dist/index.html Line 1174: `alt="Placeholder for home-kc-bungalow"`. Round 1 Must Fix (descriptive alt text) was NOT resolved in the built file. (-0.5).
- 1440-full.jpg: Photos in middle sections are invisible. Cannot verify grading/crops. (-0.5).
- Footer credits "Photo by unknown on Pexels" x7 (Line 1354). Generic. (-0.5).

## Copy — 8.5
**Earned:** dist/index.html Line 1315: Form thanks message "We will call back with a price range..." (Round 1 meta-commentary fix CONFIRMED). Specific trade nouns in HTML ("knob-and-tube", "plaster patches").
**Deductions:**
- Cannot verify visual hierarchy of copy in middle sections.

## Mobile — 7.5
**Earned:** 390-first.jpg: Hero stacks well. Buttons visible.
**Deductions:**
- 390-full.jpg: Same blank middle issue. Cannot verify tap targets or layout flow below hero. (-0.5).

## Accessibility — 7.0
**Earned:** Skip link, focus styles, reduced-motion CSS present in HTML.
**Deductions:**
- dist/index.html Line 1174: Placeholder alt text remains. (-0.5).
- 1440-full.jpg: Content invisible. If this represents the JS-on state without scroll interaction, content is hidden from users/crawlers who don't trigger the specific JS hook. (-1.0).

## Motion and interaction — 6.5
**Earned:** HTML shows `data-reveal`, `data-split`, GSAP/Lenis loaded.
**Deductions:**
- 1440-full.jpg / 390-full.jpg: The motion start state (`opacity: 0`) persisted into the final screenshot. The reveal logic failed to fire for the full-page capture. This indicates a fragility in the motion implementation (content should not remain permanently hidden if JS runs but scroll events don't fire immediately, or the screenshot tool exposes a bug). (-1.5).
- Cannot verify DrawSVG or reveal variety visually.

## Wow moment — 7.0
**Earned:** HTML shows EV estimator structure.
**Deductions:**
- Invisible in screenshot. Cannot verify the "arch-frame artifact" redesign claimed in context. (-1.0).

## Polish — 8.0
**Earned:** Favicon, OG tags, theme-color present. Footer (visible in full screenshot) looks clean with plan-divider SVG.
**Deductions:**
- Generic photo credits. (-0.5).

## Arithmetic
14×8.5 + 12×8.0 + 10×8.5 + 10×7.5 + 8×7.0 + 8×8.5 + 7×7.5 + 7×7.0 + 12×6.5 + 8×7.0 + 4×8.0
= 119 + 96 + 85 + 75 + 56 + 68 + 52.5 + 49 + 78 + 56 + 32
= 766.5 / 100 = 7.67

## Must
- `dist/index.html` Line 1174 (and likely others): Alt text still reads "Placeholder for home-kc-bungalow". Round 1 fix was not applied to the build. Replace with descriptive text e.g. "Kansas City bungalow exterior with original brick".
- `qa/screens/1440-full.jpg`, `390-full.jpg`: Content below hero is invisible (blank beige). The `data-reveal` opacity:0 start state is not being cleared in the captured state. Ensure content is visible if JS fails or screenshot tool doesn't scroll, or fix the reveal trigger to be more robust (e.g. fallback timeout). This blocks visual verification of 80% of the page.

## Should
- `dist/index.html` Line 1354: Footer credits "Photo by unknown on Pexels" repeated 7 times. Replace with specific photographer names from the media manifest or a single generic credit.
- `dist/index.html`: Verify the EV estimator visual redesign (arch-frame) is actually rendering, as it is currently invisible in the full-page shot.

## Elevate
- **Motion**: The current reveal logic hides the entire page content in static captures. Move to a more robust reveal pattern (e.g., `visibility` toggle or ensuring `is-in` is added on load for above-fold, and robust IntersectionObserver for below) so the page degrades gracefully.
- **Photo**: Once visible, ensure the `photo-grade` filter creates a cohesive "one shoot" look across the placeholder images, and fix the alt texts to tell the story of the bungalow rewire.