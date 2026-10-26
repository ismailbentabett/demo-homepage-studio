COPY: ok

Five-second test (1440-first.jpg, 390-first.jpg): "Plain Code Auto Repair in Billings. The code is only the start. Call or drop off." Clear trade, city, outcome, and action. The hero works.

But scroll down (1440-full.jpg, 390-full.jpg): the page is blank white space from the hero to the footer. The content below the fold is invisible. The fix claimed to scope reveals under `.sw-motion`, but the screenshots (captured with motion enabled by default) show the content is still `opacity: 0` because the JS reveal (`.is-in`) did not trigger or complete in the capture environment. To a visitor with motion enabled and slow JS or a blocking script, this is a broken page. The render report claims sections are visible, but the visual evidence contradicts it.

## First screen (8.0)
1440-first.jpg: h1 "The code is only the start" is clear, trade + city in eyebrow, phone visible in header, primary action "Call (406)..." is loud and clear. Next band does not peek (hero is tall). 390-first.jpg: h1 fits, buttons stack well. Good execution of the hero concept. Deduction: next band doesn't peek (-0.5).

## Distinctiveness (7.0)
1440-first.jpg: The "code" theme (green mono text, dark bg) is present in the hero. But since the rest of the page is invisible, I cannot verify if the signature system appears in 4+ sections. The hero alone is not enough for a 9. Siblings likely differ. Deduction: signature only verifiable in hero (-2.0 from 9 anchor).

## Typography (8.0)
1440-first.jpg: Syne for headline, Space Mono for code, Figtree for body. Good pairing. Scale looks fluid. Contrast is high. Deduction: cannot verify hierarchy below fold.

## Layout and rhythm (5.0)
1440-full.jpg: The page is hero + white void + footer. There is no rhythm, no grid, no sections visible. This is a catastrophic failure of layout visibility. Deduction: content invisible (-4.0 from 9 anchor).

## Photo and video (6.0)
1440-first.jpg: The hero image is a grey gradient box (placeholder or broken load). It does not look like an engine bay. Deduction: placeholder/broken media (-2.0 from 8 anchor).

## Copy (8.0)
1440-first.jpg: "The code is only the start. We test the part, show you the reading, and give you a plain answer before any work." Specific, plain, mechanic voice. Sample label not visible in hero but likely below. Deduction: cannot verify Sample labels below fold.

## Mobile (5.0)
390-full.jpg: Same as desktop. Hero + white void + footer. Broken. Deduction: content invisible (-4.0 from 9 anchor).

## Accessibility (5.0)
1440-full.jpg: Content is invisible in the screenshot. This is a mustFix. Even if it works with reduced motion, the motion-enabled state is broken for the capture. Deduction: content invisible (-4.0 from 9 anchor).

## Motion and interaction (5.0)
The motion system (reveals) is hiding content permanently in the captured state. The "fix" did not resolve the visibility issue for the motion-enabled case. Deduction: motion blocks reading/hides content (-4.0 from 9 anchor).

## Wow moment (5.0)
Cannot see any wow moment below the fold. Hero is decent but not a 9. Deduction: wow moment missing/invisible (-4.0 from 9 anchor).

## Polish (5.0)
1440-full.jpg: The page looks unfinished/broken due to the white space. Footer is visible but isolated. Deduction: broken appearance (-4.0 from 9 anchor).

Arithmetic: 14*8 + 12*7 + 10*8 + 10*5 + 8*6 + 8*8 + 7*5 + 7*5 + 12*5 + 8*5 + 4*5 = 112 + 84 + 80 + 50 + 48 + 64 + 35 + 35 + 60 + 40 + 20 = 628 / 100 = 6.28.

## Must
1. 1440-full.jpg, 390-full.jpg: Content below hero is invisible (white space). The reveal CSS under `.sw-motion` still hides content when JS hasn't added `.is-in`. Ensure content is visible even if JS fails or is slow, or fix the screenshot capture to trigger reveals. Currently, the motion-enabled experience is broken.
2. 1440-first.jpg: Hero image is a grey placeholder/broken. Replace with actual engine bay photo from media library.

## Should
1. 1440-first.jpg: Hero height prevents next band from peeking. Reduce hero min-height or adjust spacing so the promise section peeks 40-120px.

## Elevate
1. layout: Once content is visible, ensure the scroll has a shape (loud -> quiet -> dense). Currently it's just loud -> nothing.
2. motion: Fix the reveal logic so content is never permanently hidden. Use a fallback that shows content after a timeout or if IO fails.