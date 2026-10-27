COPY: ok

## Five-second test

**1440-first.jpg**: "Find it. Fix it. Tag it." — clear outcome. "Indianapolis plumbing" kicker sets location. Two buttons: "Price a drain clear" (primary) and "Call..." (secondary). Phone in header.
**390-first.jpg**: Headline stacks to 3 lines, readable. Buttons are full-width and above the fold.
**Verdict**: Pass. The visitor knows exactly what this is and what to do.

## First screen (9.0)

**Earned**: Trade + city + outcome in ≤ 8 words. Primary action named for the service ("Price a drain clear"). Phone visible in header and hero CTA. Proof line (hours/rating) present. Next band peeks (hero is not 100vh locked).
**Evidence**: `1440-first.jpg`, `390-first.jpg`.
**Deductions**: None. The composition is strong and intentional.

## Distinctiveness (8.5)

**Earned**: The "Pipe Rail" and "Brass Tag" signature is structurally present (CSS classes `.pipe-rail`, `.brass-tag`). The palette (Limestone/Navy/Brass) is distinct from generic blue/white plumber sites. The green accent band (`1440-full.jpg`) breaks the pattern effectively.
**Evidence**: `1440-full.jpg` (green band), `dist/index.html` (CSS classes).
**Deductions**: The signature feels structural rather than fully realized because the media is placeholder. The brass tags need to be visually prominent (hanging from the rail) to sell the concept fully. Currently, they are small elements. (-0.5 for signature needing more visual weight). Cannot fully verify against siblings without their screenshots, but the concept is unique enough. (-0.5 uncertainty/sibling check).

## Typography (9.0)

**Earned**: Zilla Slab (display) + Karla (text) + DM Mono (accent) is a sophisticated, non-generic pairing. Hierarchy is clear (H1 vs H2 vs body). Fluid scale implemented.
**Evidence**: `dist/index.html` (font-face declarations), `1440-first.jpg` (headline rendering).
**Deductions**: None observed.

## Layout and rhythm (8.5)

**Earned**: Good alternation of tones: Light (Hero) -> Deep (Intro/Story) -> Light -> Accent (Green) -> Deep. The grid is asymmetric in the hero.
**Evidence**: `1440-full.jpg`.
**Deductions**: The dark sections (Deep Navy) feel very heavy/empty in the full-page screenshot because the media is missing. This creates large "voids" in the scroll rhythm. (-0.5 for density map feeling flat due to placeholders). Process section likely still uses repeated card shapes (hard to verify exact count without scrolling interaction, but assuming R1 issue persists partially). (-0.5).

## Photo and video (7.5)

**Earned**: Placeholders are consistent in aspect ratio. Alt text is descriptive ("Placeholder for...").
**Evidence**: `1440-full.jpg`, `dist/index.html`.
**Deductions**: All media is placeholder. No grade, no art direction, no "one shoot" feel possible yet. (-1.0). No video element present for the "cinematic strip" concept. (-0.5).

## Copy (9.0)

**Earned**: "Find it. Fix it. Tag it." is a great hook. Specific nouns ("shut-off", "brass tag"). Microcopy is helpful ("We'll call back within 2 hours").
**Evidence**: `1440-first.jpg`, `dist/index.html`.
**Deductions**: None. The voice is consistent and contractor-appropriate.

## Mobile (9.0)

**Earned**: 390px view is composed, not just squeezed. Headline wraps cleanly. Buttons are thumb-friendly. Sticky bar present.
**Evidence**: `390-first.jpg`, `390-full.jpg`.
**Deductions**: None.

## Accessibility (9.0)

**Earned**: Skip link present. Focus outlines defined (3px solid). Semantic HTML (header, main, footer, section). Reduced motion CSS block present. ARIA labels on inputs.
**Evidence**: `dist/index.html`.
**Deductions**: None observed in code/static check.

## Motion and interaction (8.0)

**Earned**: CSS infrastructure for reveals (`sw-motion`, `data-reveal`) is robust. Lenis/GSAP loaded. Print stylesheet for estimator present.
**Evidence**: `dist/index.html`.
**Deductions**: Cannot verify the "swing" of the tags or the "fill" of the rail without a video/interactive session, but the CSS hooks are there. (-1.0 for inability to verify the *quality* of the motion execution, only the presence). Same reveal pattern likely used across sections (fade-up). (-1.0).

## Wow moment (8.0)

**Earned**: The concept (tagging every valve) is a strong "wow" idea. The ZIP checker is functional.
**Evidence**: `1440-full.jpg` (ZIP section).
**Deductions**: The "Shut-off finder" and "Water heater" tools are not clearly visible as *designed artifacts* (SVG/Printable) in the screenshots. They appear to be standard form/text interactions. (-1.0 for tool output being plain/standard).

## Polish (8.5)

**Earned**: Favicon, Apple touch icon, OG tags, Theme color, JSON-LD all present. Print CSS for estimator.
**Evidence**: `dist/index.html`.
**Deductions**: Credits list is still 12 identical lines of "Photo by unknown on Pexels". (-0.5).

## Arithmetic

14×9.0 + 12×8.5 + 10×9.0 + 10×8.5 + 8×7.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.0 + 8×8.0 + 4×8.5
= 126 + 102 + 90 + 85 + 60 + 72 + 63 + 63 + 96 + 64 + 34
= 855 / 100 = **8.55**

## Must

(None remaining from R1 that are strictly blockers for *this* round's score, though the tool output and photo placeholders are the main gaps. The "Get my number" inconsistency appears resolved or absent in the visible build.)

## Should

- **where**: `dist/index.html`, `.credits`
  **problem**: Twelve identical "Photo by unknown on Pexels" lines.
  **fix**: Consolidate to one line or vary the placeholder text to look less like a bug.

- **where**: `dist/index.html`, `#tools` (implied)
  **problem**: Tool outputs (Shut-off finder, Heater check) need to be designed artifacts (printable/SVG), not just text results, to hit the "Wow" anchor.
  **fix**: Implement the printable tag card or SVG sketch as promised in the concept.

- **where**: `dist/index.html`, `[data-reveal]`
  **problem**: Motion variety.
  **fix**: Ensure the brass tags actually *swing* (rotate) and the rail *fills* (scaleX/clip), rather than just fading up like the text.

## Elevate

1.  **Photo (weight 8)**: The placeholders make the dark sections feel like voids. Even with placeholders, use a duotone or a subtle pattern in the deep navy sections to give them texture, so the "pipe rail" feels like it's running through a physical space, not a blank CSS background.
2.  **Wow (weight 8)**: Make the "Brass Tag" signature do more work. In the footer or the process section, make the tag *interactive* or *animated* (e.g., it stamps in with a sound or a visual press effect) so the user remembers the "Tag it" promise.