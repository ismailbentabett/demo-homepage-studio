COPY: ok

**Five-second test:**
1440-first: "Plain Code Auto Repair" in Billings. "The code is only the start." Clear value prop: diagnosis first, plain answers. Phone visible. Primary action "Call" and "Price it".
390-first: Same.
Verdict: Strong hero, clear trade/city/outcome.

**Category Scores:**

**firstScreen (8.5):**
1440-first.jpg: h1 "The code is only the start" (6 words). Trade + city in header/kicker. Phone visible in header and hero CTA. Diagonal split hero family executed. Next band does not peek (hero is full height).
390-first.jpg: h1 3 lines. Buttons above fold.
Deduction: Next band does not peek (-0.5).

**distinctiveness (7.5):**
1440-first.jpg: "Code-to-Plain" concept visible in hero (code line + plain text). Palette (scan screen dark + signal green) is distinct.
Deduction: Cannot verify signature system in lower sections due to rendering failure (-1.0). Cannot verify layout families (-0.5).

**type (8.5):**
1440-first.jpg: Syne display, Figtree body, Space Mono code. Good contrast. Fluid scale apparent.
Deduction: Cannot verify hierarchy in lower sections (-0.5).

**layout (3.0):**
1440-full.jpg: Hero renders, then ~80% of the page is white space until the footer. The dark sections (promise, services, tools, etc.) are not visible.
390-full.jpg: Same issue.
Deduction: Catastrophic rendering failure in full-page view. Content hidden (-4.0). Two dark bands touching rule cannot be verified but the white gap is a blocker (-1.0).

**photo (6.0):**
1440-first.jpg: Hero image is a grey placeholder ("Engine bay lit by a single work light").
Deduction: Placeholder media visible (-1.0). Cannot verify grade/crops elsewhere (-1.0).

**copy (7.5):**
1440-first.jpg: "The code is only the start." "We test the part, show you the reading..." Strong, specific voice.
Deduction: Cannot verify microcopy in lower sections (-0.5).

**mobile (3.0):**
390-full.jpg: Same white gap rendering failure as desktop.
Deduction: Content hidden (-4.0).

**a11y (4.0):**
render.json: `motionFallbacks: true` but content is hidden in screenshots. This implies the reduced-motion fallback or the screenshot scroll trigger failed.
Deduction: Content invisible in capture (-2.0). Cannot verify focus/contrast in hidden sections (-1.0).

**motion (4.0):**
Cannot judge motion quality, but the result (hidden content) indicates the reveal logic is fragile or broken in the capture environment.
Deduction: Content hidden due to motion/reveal logic (-3.0).

**wow (5.0):**
Cannot see the tools or signature moments below the fold.
Deduction: Wow moment not visible (-2.0).

**polish (6.0):**
1440-first.jpg: Header, hero, favicon (assumed), theme-color present.
1440-full.jpg: Footer renders correctly ("NO CODES - READY TO DRIVE").
Deduction: Middle of page missing (-1.0).

**Arithmetic:**
14*8.5 + 12*7.5 + 10*8.5 + 10*3.0 + 8*6.0 + 8*7.5 + 7*3.0 + 7*4.0 + 12*4.0 + 8*5.0 + 4*6.0
= 119 + 90 + 85 + 30 + 48 + 60 + 21 + 28 + 48 + 40 + 24 = 593 / 100 = 5.93

**Must:**
1.  **qa/screens/1440-full.jpg, qa/screens/390-full.jpg**: Content below the hero is invisible (white background instead of dark sections). The `data-reveal` opacity:0 start state is not being cleared in the full-page capture, or the CSS reduced-motion fallback is not forcing visibility. The page appears broken/empty to a visitor who scrolls (or to the QA tool). Fix the reveal logic to ensure content is visible if JS/scroll fails, or ensure the screenshot tool triggers the reveals.

**Should:**
1.  **qa/screens/1440-first.jpg**: Hero height is exactly 100vh (or close), so the next band does not peek. Reduce hero min-height slightly (e.g., 90svh) to show the edge of the next section.
2.  **qa/screens/1440-first.jpg**: Hero image is a placeholder. Ensure the approved media library image is loaded.

**Elevate:**
1.  **layout**: Once the rendering is fixed, ensure the dark/light rhythm (t-paper/t-deep) alternates correctly and doesn't create long runs of the same tone.
2.  **motion**: Verify that the "code typing" signature works and that the reduced-motion fallback shows the static code immediately without hiding the content.