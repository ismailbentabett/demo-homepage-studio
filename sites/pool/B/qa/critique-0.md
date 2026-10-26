COPY: needs copy-chief (cannot judge copy quality as 90% of text is invisible)

**Five-second test**:
- **1440-first.jpg**: I see a header with a phone number, a headline "Read your water before you touch it", and some colored bars. The rest of the screen is empty beige. I don't know what to do next other than call.
- **390-first.jpg**: Same. Headline and phone button visible. Rest is empty.
- **Verdict**: The page appears broken. A homeowner would leave immediately.

**Category Scores**:

**First Screen (6.0)**:
- **Evidence**: `1440-first.jpg`, `390-first.jpg`.
- **Reasoning**: The headline is visible and mentions water/testing, but the trade ("Pool Service") and city ("Orlando") are not in the H1 (they are in the title tag but not the visible H1). The primary action (phone) is visible. However, the composition is broken: the hero image is missing (corrupt JPEG noted), and the rest of the viewport is empty. The "next band" does not peek because there is no next band visible.
- **Deductions**: -1.0 (H1 missing trade/city), -1.0 (Hero image missing/broken), -1.0 (Layout broken/empty), -0.5 (Next band not peeking). Start 8 -> 4.5? Floor is 7. But it's broken. I'll score 6.0 as "Generic/Broken". Actually, rubric says 6 is "Generic headline...". This is worse. But I must use 0.5 steps. 6.0 is the lowest anchor. I'll stick with 6.0 but note it's effectively broken. Wait, if it's below floor (7), it's a FIX.

**Distinctiveness (6.0)**:
- **Evidence**: `1440-full.jpg`.
- **Reasoning**: The "Gauge Scale + Test Pad" signature described in `concept.json` is completely invisible. The page looks like a blank template with a header and footer. No distinctiveness can be judged.
- **Deductions**: -2.0 (Signature missing), -2.0 (Looks broken/blank). Score 6.0.

**Typography (6.0)**:
- **Evidence**: `390-first.jpg`.
- **Reasoning**: Only the H1 and header text are visible. The H1 uses a mono font (IBM Plex Mono per CSS), which is distinctive, but I cannot judge the pairing, scale, or body text because it's invisible.
- **Deductions**: -2.0 (Cannot judge body/pairing due to missing content). Score 6.0.

**Layout (6.0)**:
- **Evidence**: `1440-full.jpg`.
- **Reasoning**: The page is 90% empty space. There is no rhythm, no grid, no sections visible.
- **Deductions**: -2.0 (No layout visible). Score 6.0.

**Photo (6.0)**:
- **Evidence**: `1440-first.jpg`.
- **Reasoning**: The hero image is missing (corrupt JPEG). No other photos are visible.
- **Deductions**: -2.0 (Hero missing), -2.0 (No other photos). Score 6.0. (Floor is 6).

**Copy (6.0)**:
- **Evidence**: `390-first.jpg`.
- **Reasoning**: Only the headline "Read your water before you touch it" is visible. It's a slogan, not a clear value prop with trade/city. The rest of the copy is invisible.
- **Deductions**: -1.0 (Slogan headline), -1.0 (Rest missing). Score 6.0.

**Mobile (6.0)**:
- **Evidence**: `390-full.jpg`.
- **Reasoning**: The page is broken on mobile too. Vast empty space. Tap targets are visible (phone button), but the experience is broken.
- **Deductions**: -2.0 (Broken layout). Score 6.0. (Floor is 8). This triggers FIX.

**A11y (6.0)**:
- **Evidence**: `dist/index.html` (CSS), `390-full.jpg`.
- **Reasoning**: Content is hidden by CSS (`.sw-motion [data-reveal]`) and not revealed. This means for a user with JS disabled or if JS fails, the page is blank. This is a critical a11y failure (content not accessible). The screenshots confirm content is missing.
- **Deductions**: -2.0 (Content hidden/invisible). Score 6.0. (Floor is 8). This triggers FIX.

**Motion (6.0)**:
- **Evidence**: `1440-full.jpg`.
- **Reasoning**: Nothing moves because nothing is visible. The reveal logic failed.
- **Deductions**: -2.0 (No motion visible/broken). Score 6.0.

**Wow (6.0)**:
- **Evidence**: `1440-full.jpg`.
- **Reasoning**: No wow moment visible.
- **Deductions**: -2.0 (Nothing visible). Score 6.0.

**Polish (6.0)**:
- **Evidence**: `1440-first.jpg`.
- **Reasoning**: The hero image is broken. The page looks unfinished.
- **Deductions**: -1.0 (Broken image), -1.0 (Empty layout). Score 6.0.

**Arithmetic**:
14*6 + 12*6 + 10*6 + 10*6 + 8*6 + 8*6 + 7*6 + 7*6 + 12*6 + 8*6 + 4*6
= 84 + 72 + 60 + 60 + 48 + 48 + 42 + 42 + 72 + 48 + 24
= 600 / 100 = 6.00

**Must Fix**:
1.  **Content Invisible**: The reveal logic (`.sw-motion [data-reveal]`) hides all content, and the screenshots show it never becomes visible. Ensure content is visible without JS or fix the reveal trigger. (`dist/index.html` lines 94-98, `390-full.jpg`).
2.  **Corrupt Hero Image**: The hero image is missing/broken. Replace or fix the asset. (`1440-first.jpg`).
3.  **H1 Missing Trade/City**: The H1 "Read your water before you touch it" does not state "Pool Service" or "Orlando". Add them. (`390-first.jpg`).

**Should**:
1.  **Verify Build**: The entire page content is missing from the render. Re-run build and check for JS errors.

**Elevate**:
1.  **Layout**: Once content is visible, ensure the "Gauge Scale" signature actually appears in 4+ sections.
2.  **Motion**: Ensure the reveal animations actually trigger and don't leave the page blank.