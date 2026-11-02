COPY: needs copy-chief

## Five-second test

**1440-first.jpg:** Tag & Lift Moving, Durham NC movers and junk removal. H1 "Every piece tagged to its new room" is clear but lacks city/trade in the headline itself (city only in subhead). Primary CTA "Price my move" visible above fold. Phone number in header. Next band (filmstrip) peeks ~60px. Signature tag No. 001 visible.

**390-first.jpg:** H1 wraps to 3 lines, both CTAs ("Price my move", "Call") above fold. Phone visible in header. Tag swings in. Readable at 0ms with reduced motion.

Answer: This is a Durham moving company that tags every item to its destination room. I can price my move or call. The tag system is the differentiator.

## First screen (8.5)

Earned: Trade + outcome clear, phone visible both viewports, next band peeks, signature visible in hero, intro does not block reading (1440-first.jpg, 390-first.jpg).

Deductions:
- H1 does not state trade or city directly; "Every piece tagged to its new room" is a process line, not a trade+city+outcome statement. Subhead carries Durham/movers but h1 alone fails the 9-anchor requirement (-0.5). (1440-first.jpg)

## Distinctiveness (9)

Earned: Inventory tag signature appears in hero (No. 001), process story steps, service cards, reviews, prices table, and footer (No. 112) -- 6 sections (1440-full.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg). Filmstrip hero family unique in niche. Kraft paper + tag orange palette unmistakable. Antonio/Public Sans/DM Mono trio distinct from siblings.

Deductions: None at 9 anchor.

## Typography (9)

Earned: Antonio condensed display for tag numbers and headlines creates strong scale contrast against Public Sans body. DM Mono for data (tag numbers, prices, ZIP). Fluid scale via clamp(). Tabular numerals on prices and phone. Lead paragraph set apart. Body >= 16px at full ink (1440-full.jpg, 390-full.jpg).

Deductions: None at 9 anchor.

## Layout and rhythm (8.5)

Earned: Clear alternation of tones (paper/deep/paper/accent/deep/light). Multiple layout families: filmstrip rail, split process story, tag board grid, ledger price table, stacked form. Each section has one job. Gaps between sections > gaps within (1440-full.jpg).

Deductions:
- Process story and services are both t-paper tone and adjacent, reading as a long light run before the deep break at prices. Three light-tone sections in sequence (hero, process, services) flattens the density map (-0.5). (1440-scroll-25.jpg, 1440-scroll-50.jpg)

## Photo and video (6)

Earned: Most frames show moving boxes, truck, wrapping, stairs -- on-topic for moving trade. Consistent sepia-warm grade across frames. Alt text present.

Deductions:
- **mustFix**: Area section photo alt text reads "A snowy residential street in Quebec City. Photographed at Vieux-Limoilou." This is wrong-region content for a Durham NC site. Visible in dist/index.html line 1707 and 1440-scroll-75.jpg shows a snowy streetscape incongruent with North Carolina. (-1.0 per rubric, plus mustFix cap at 8.0 fast mode, but the off-topic frame alone drops to 6.) (1440-scroll-75.jpg, dist/index.html:1707)
- Mixed grades: most photos have warm sepia treatment but the area photo is cool-toned snow, breaking the single-shoot illusion (-0.5). (1440-scroll-75.jpg vs 1440-first.jpg)

## Copy (8)

Earned: Plain contractor voice. No banned words detected. Buttons named for action ("Price my move", "Get my number"). Sample labels on reviews and pricing. Microcopy under form button states callback expectation.

Deductions:
- Two different names for primary CTA: "Price my move" in hero vs "Get my number" in prices section vs "Price it" in mobile bar. Inconsistent naming (-0.5). (1440-first.jpg, 1440-scroll-75.jpg, 390-full.jpg)
- Review text uses specific street names ("Ninth Street") which is good, but no review carries a Sample label visibly attached to each card -- the sample-tag appears once at the section level rather than per-review. Rubric requires per-item labeling for demo safety (-0.5). (1440-scroll-50.jpg)

## Mobile (9)

Earned: No horizontal scroll at 390 (render.json overflow clean). Tap targets >= 48px (buttons have min-height: 48px). Sticky mobile bar with Call + Price it. H1 <= 3 lines at 390. Menu overlay works. Form usable with thumb. Header hides on scroll down (390-first.jpg, 390-full.jpg).

Deductions: None at 9 anchor.

## Accessibility (8.5)

Earned: Skip link present. Focus outline 3px accent with 3px offset. Reduced-motion screenshot shows all content visible (1440-rm-full.jpg). Labels on all form inputs. aria-live on ZIP output. Heading order correct (one h1, sequential h2s).

Deductions:
- Console error in render.json: "Failed to load resource: 404". A missing asset may affect screen reader users or cause broken image announcements. Needs investigation (-0.5). (qa/render.json)

## Motion and interaction (8.5)

Earned: Tag swing-in intro, filmstrip drift, clip reveals on images, text rise entrances. Reduced motion respected (1440-rm-full.jpg shows complete static content). Hover hairline grows from left. Lenis smooth scroll active. Story pinned only at >= 640px per concept.

Deductions:
- Render.json console 404 error may indicate a missing animation asset or font. If GSAP or a texture fails to load, motion degrades silently (-0.5). (qa/render.json)
- Entrance pattern appears uniform (text rise + image clip) across sections without enough variation by role. Concept promises varied timing but screenshots show similar cadence (-0.5). (1440-scroll-25.jpg, 1440-scroll-50.jpg)

## Wow moment (8.5)

Earned: The inventory tag system IS the wow -- watching tag numbers advance from 001 to 112 as you scroll tells the custody story. Move sizer tool outputs crew/truck/price range in tag language. Tied to thesis and trade.

Deductions:
- Tool output is a text readout (crew size, truck, hours, price range) rather than a designed artifact in the tag signature's visual language. A printable tag-sheet or visual floor-plan with tags would reach 9 (-0.5). (1440-scroll-25.jpg)

## Polish (8.5)

Earned: SVG favicon + apple-touch-icon. OG image declared. theme-color set. JSON-LD MovingCompany schema. Print stylesheet for estimator. Lazy images with width/height. Consistent 2px radius. Forced colors handled (dist/index.html head).

Deductions:
- Console 404 error suggests a missing asset (font, icon, or media). Polish requires zero console warnings (-0.5). (qa/render.json)
- Footer credits list 10 photo attributions in a dense ul; at 390 this becomes a very long scroll-past. Consider collapsing or reducing (-0.5). (390-full.jpg)

## Arithmetic

14×8.5 + 12×9 + 10×9 + 10×8.5 + 8×6 + 8×8 + 7×9 + 7×8.5 + 12×8.5 + 8×8.5 + 4×8.5 = 119 + 108 + 90 + 85 + 48 + 64 + 63 + 59.5 + 102 + 68 + 34 = 840.5 / 100 = 8.41

## Must

1. **where:** 1440-scroll-75.jpg, #area photo (dist/index.html:1707)
   **problem:** Photo alt text says "Quebec City" -- wrong region for Durham NC site. Snowy Canadian street is off-topic.
   **fix:** Replace with a Durham/NC-appropriate residential street or neighborhood photo from the moving niche media library. Update alt text to describe the actual frame.

2. **where:** qa/render.json consoleErrors
   **problem:** 404 error on an unnamed resource. Missing assets break polish and may affect a11y.
   **fix:** Identify the failing URL (check Network tab or add logging), restore the missing file or remove the reference. Re-run check-render to confirm zero console errors.

## Should

1. **where:** 1440-first.jpg, h1
   **problem:** H1 "Every piece tagged to its new room" omits trade and city. Visitor must read subhead to know this is Durham movers.
   **fix:** Rewrite h1 to include trade+city+outcome in <= 8 words, e.g., "Durham movers who tag every piece to its room."

2. **where:** 1440-first.jpg, 1440-scroll-75.jpg, 390-full.jpg, CTA buttons
   **problem:** Three different primary action names: "Price my move", "Get my number", "Price it".
   **fix:** Pick one name and use it everywhere. Recommend "Price my move" as it matches the concept's estimator tool.

3. **where:** 1440-scroll-50.jpg, #reviews cards
   **problem:** Sample label appears once at section level, not per review card. Demo rules require per-item labeling.
   **fix:** Add `<span class="sample-tag">Sample</span>` inside each review card component, not just the section heading.

4. **where:** 1440-scroll-25.jpg, 1440-scroll-50.jpg, section tones
   **problem:** Three consecutive light-tone sections (hero, process, services) flatten rhythm.
   **fix:** Make the process story t-deep or add a thin accent-tone divider band between process and services to restore loud/quiet alternation.

5. **where:** 390-full.jpg, footer credits
   **problem:** 10 photo attributions create excessive scroll depth on mobile.
   **fix:** Collapse credits behind a "Photo credits" disclosure or reduce to 3 representative entries with a link to a full credits page.

## Elevate

1. **Category: photo (weakest, score 6).** Move: Art-direct the entire photo set as a single "move day" sequence shot in consistent warm light -- tag close-up, wrap station, ramp load, hallway carry, placed-in-room -- so crops tell a narrative arc and the area photo matches the grade. Replace the Quebec snow frame with a Durham neighborhood shot graded to match.

2. **Category: copy (score 8).** Move: Unify the primary action name across all touchpoints and rewrite the h1 to carry trade+city+outcome. Then audit every section headline against brief S1 homeowner questions and replace any slogan-ending lines with concrete answers in the homeowner's words.