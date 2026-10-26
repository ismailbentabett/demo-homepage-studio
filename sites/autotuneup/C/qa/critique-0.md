COPY: ok

**Five-second test:**
- **1440:** "Tuned for high country." Headline is visible. Trade ("Tune-Ups & Maintenance") and city ("Santa Fe, NM") are in small caps above. Phone is in the header. But the hero image is missing (alt text visible: "Adobe wall at dusk..."). The page below is mostly blank white space until the footer.
- **390:** "Tuned for high..." Headline cut off. Hero image missing (alt text visible). "Book a time" button is in the sticky bar. The page is extremely sparse.
- **Verdict:** I know it's a tune-up shop in Santa Fe. I can book. But the page looks broken and empty.

**First screen (5.0/14):**
- `1440-first.jpg`: Hero image missing, showing alt text. Headline "Tuned for high country" is good (4 words). Trade + city present. Phone visible. But the missing image is a critical failure. The layout below the hero is empty white space.
- `390-first.jpg`: Hero image missing. Headline wraps to 3 lines ("Tuned / for / high..."). "Book a time" button visible in sticky bar.
- Deductions: Missing hero image (-2.0, mustFix). Page appears empty/broken below fold (-1.0).

**Distinctiveness (4.0/12):**
- `1440-full.jpg`: The "Altitude Marker Rail" concept is in the code (`data-sw-signature="altitude-marker"`), but visually it's just a small pill "7,199 ft Santa Fe Plaza" at the top. The rest of the page is blank. No signature system is visible because the content isn't rendering or is missing.
- Deductions: Signature not visible/executed (-2.0). Page looks like a broken template (-2.0).

**Typography (6.0/10):**
- `1440-first.jpg`: Space Mono and Outfit are loaded. Headline is large and bold. Body text is readable.
- Deductions: Hard to judge fully due to missing content, but the type itself looks okay.

**Layout and rhythm (3.0/10):**
- `1440-full.jpg`: The page is 9416px tall but mostly empty white space. There's a hero, then a huge gap, then a footer. The sections (services, story bands, tools) are not visible or are collapsed.
- Deductions: Massive blank gaps (-2.0). Content missing (-2.0).

**Photo and video (2.0/8):**
- `1440-first.jpg`, `390-first.jpg`: All images are missing. Only alt text is visible.
- Deductions: All images missing (-4.0, mustFix).

**Copy (7.0/8):**
- `dist/index.html`: Copy is specific ("Tuned for high country", "At seven thousand feet..."). Sample labels are present in the code.
- Deductions: Hard to judge fully, but the visible copy is good.

**Mobile (4.0/7):**
- `390-first.jpg`: Hero image missing. Headline wraps. Sticky bar works. But the page is mostly empty.
- Deductions: Missing images (-1.0). Broken layout (-1.0).

**Accessibility (5.0/7):**
- `dist/index.html`: Skip link present. Focus styles defined. Alt text is present (which is why we see it).
- Deductions: Missing images make the page unusable (-1.0).

**Motion and interaction (2.0/12):**
- `1440-full.jpg`: Cannot judge motion from static screenshots, but the page is broken. The marquee and altitude rail are in the code but not visible/executed.
- Deductions: Page broken (-2.0).

**Wow moment (2.0/8):**
- `1440-full.jpg`: No wow moment visible. The page is empty.
- Deductions: Missing content (-2.0).

**Polish (3.0/4):**
- `1440-first.jpg`: Favicon present. Theme color set. But the page is broken.
- Deductions: Broken layout (-1.0).

**Arithmetic:**
14*5 + 12*4 + 10*6 + 10*3 + 8*2 + 8*7 + 7*4 + 7*5 + 12*2 + 8*2 + 4*3 = 70 + 48 + 60 + 30 + 16 + 56 + 28 + 35 + 24 + 16 + 12 = 395 / 100 = 3.95

**Must:**
1. `1440-first.jpg`, `390-first.jpg`: All images are missing (showing alt text). Fix the image paths or ensure the media files exist in `dist/media/`.
2. `1440-full.jpg`: The page is mostly empty white space. Sections (services, story bands, tools) are not rendering. Check CSS/JS for display:none or height:0 issues.

**Should:**
1. `1440-first.jpg`: Hero headline "Tuned for high country" is good, but the missing image makes it float.
2. `390-first.jpg`: Headline wraps to 3 lines, which is okay, but the missing image is the main issue.

**Elevate:**
1. **Photo:** Once images load, ensure they have the "high desert light" grade (saturate 0.8, contrast 1.1, sepia 0.12) as per the concept.
2. **Layout:** Once content renders, ensure the "Altitude Marker Rail" is sticky on desktop and updates as you scroll, tying each section to its elevation.