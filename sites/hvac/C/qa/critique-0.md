COPY: ok

Five-second test:
1440-first: "Phoenix Heating & Cooling", "115°", "On the roof before the sun is...". Clear trade, city, and hook. Phone visible. But "placeholder-hero-A1" text is visible in the center.
390-first: Same info, stacked. Sticky bar present.
Verdict: I know what it is and where, but the page looks broken due to the placeholder and empty sections below.

## firstScreen (7.0)
1440-first.jpg: Strong hook "115°". Headline is specific. Phone visible.
Deductions:
- "placeholder-hero-A1" text visible in hero (−1.0 polish/photo, but impacts first screen impression).
- Diagonal split is dark/muddy; hard to see the "sundial" concept clearly without the image.
390-first.jpg: Good stack. Buttons clear.

## distinctiveness (6.0)
1440-full.jpg: The diagonal "Shade Line" background is visible in sections (cream/pink splits).
Deductions:
- Content is missing, so the signature cannot be seen doing "real work" (organizing info). It's just a background pattern right now.
- Cannot verify if it differs from siblings because the page is effectively empty.

## type (7.5)
1440-first.jpg: "Antonio" for "115°" is strong. "Figtree" body looks clean.
Deductions:
- Cannot judge hierarchy/rhythm in body sections because they are invisible.

## layout (5.0)
1440-full.jpg: Massive empty bands. "Services" and "Reviews" headers float in empty space.
Deductions:
- Content below hero is invisible (−2.0+). The page reads as blank.
- Blank gap over half a screen (−0.5).

## photo (5.0)
1440-first.jpg: "placeholder-hero-A1" is visible.
Deductions:
- Missing hero image (−1.5).
- No other photos visible to judge.

## copy (8.0)
1440-first.jpg: "On the roof before the sun is. AC repair, rooftop units and monsoon checks across Phoenix." Excellent. Specific, voice-driven.
Deductions:
- Cannot verify rest of copy.

## mobile (6.0)
390-full.jpg: Sticky bar works. Hero stacks well.
Deductions:
- Content below hero invisible (−1.5).

## a11y (7.0)
static.json: Clean.
Deductions:
- Cannot verify focus/contrast in hidden sections.
- Placeholder text is likely not accessible or confusing.

## motion (6.0)
1440-full.jpg: Content is hidden. This implies the reveal animation (opacity 0 -> 1) is stuck at 0 in the screenshot capture.
Deductions:
- Content hidden in static capture (−1.5). If this is how a user sees it (JS fail or slow load), it's broken. Even if it's just the screenshot tool, the `opacity: 1 !important` fix mentioned in the prompt clearly didn't apply to the whole page.

## wow (6.0)
The "115°" concept is good. The diagonal idea is good.
Deductions:
- Broken execution (placeholder, empty page) kills the wow.

## polish (4.0)
1440-first.jpg: "placeholder-hero-A1" text.
Deductions:
- Visible placeholder text (−1.0).
- Empty sections look unfinished.

Arithmetic:
14×7.0 + 12×6.0 + 10×7.5 + 10×5.0 + 8×5.0 + 8×8.0 + 7×6.0 + 7×7.0 + 12×6.0 + 8×6.0 + 4×4.0
= 98 + 72 + 75 + 50 + 40 + 64 + 42 + 49 + 72 + 48 + 16
= 626 / 100 = 6.26

## Must
1.  **Content Visibility**: All sections below the hero (Services, Story, Reviews, etc.) are invisible in `1440-full.jpg` and `390-full.jpg`. The previous fix (`opacity: 1 !important` on `.hero__content`) was too narrow. Apply a fallback to ensure all content is visible if JS/reveal fails, or ensure the reveal triggers correctly. Currently, the page is empty below the fold.
2.  **Hero Image**: `placeholder-hero-A1` text is visible in `1440-first.jpg` and `390-first.jpg`. The hero image asset is missing or not loading. Replace with the approved media from `niches/hvac/media/manifest.json`.

## Should
1.  **Hero Contrast**: The dark diagonal side is very dark. Ensure the "sundial" concept reads clearly once the image is in.
2.  **Section Density**: Once content is visible, ensure the diagonal bands don't create awkward empty triangles of space.

## Elevate
1.  **Layout**: Once content is visible, use the diagonal "Shade Line" to actually split content (e.g., problem on the sunlit side, solution on the shaded side) rather than just being a background color shift.
2.  **Motion**: Ensure the shade line angle actually tracks scroll (`--sw-hour`) visibly. Right now it's static in screenshots.