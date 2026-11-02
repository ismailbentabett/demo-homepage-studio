COPY: ok

## Five-second test

1440-first.jpg: "Stack the first cord in September" with trade (chimney sweep & wood stoves), city (Burlington, VT) and outcome visible in ≤ 6 words; primary CTA "Price a visit" plus quieter "Call (802) 555-0184"; phone in header; proof line "Sample rating 4.9 · 138 reviews"; season rail peeks at bottom of hero. 390-first.jpg: h1 wraps to 4 lines but both CTAs remain above the fold; phone hidden on mobile (header-call is display:none <640px per dist/index.html line 346) so homeowner must scroll or use sticky bar.

## firstScreen — 8.5

What earned it: trade + city + outcome in ≤ 8 words, one loud primary + one quiet secondary, proof line present, next band (season rail) peeks ~60px, offset-framed woodshed photo is distinct from siblings.
Deductions:
- 390-first.jpg: phone number not visible on first screen at 390px (header-call hidden below 640px, no inline tel in hero text). −1.0.
- 390-first.jpg: h1 at 4 lines is acceptable but tight; no further deduction.

## distinctiveness — 9.0

What earned it: season-rail signature appears in hero (1440-first.jpg), as sticky sub-nav between sections (1440-scroll-25.jpg, 1440-scroll-50.jpg), and as large watermark numerals behind each section kicker (1440-scroll-25.jpg "09", 1440-scroll-50.jpg "11", etc.) — ≥ 4 sections including footer ("April · last fire"). Offset-frame hero family is unique vs A's arch and B's document. Palette (maple + birch) and Sora/DM Sans pair differ from siblings.
Deductions: none against the 9 anchor.

## type — 9.0

What earned it: Sora display + DM Sans text from catalog; fluid scale; body ≥ 16px; measure ~68ch; tabular numerals in prices, hours and phone; lead paragraph set apart; ≤ 5 sizes; no orphans in headings; display tracking −0.02em.
Deductions: none against the 9 anchor.

## layout — 8.5

What earned it: 11 sections each with one job; ≥ 3 layout families (hero split, split-stack, rail-layout, statement-layout, grid cards); alternating tones paper/deep/paper/mid/paper/deep/paper/mid/paper/deep; full-bleed break at t-deep contact; asymmetric hero frame.
Deductions:
- 1440-full.jpg: two t-paper bands (#services and #reviews) are separated only by a thin rule and read as near-identical density; not quite "three same tone in a row" but close. −0.5.
- 1440-scroll-50.jpg: #process (t-mid) and #symptoms (t-paper) are fine, but #prices (t-mid) follows #reviews (t-paper) then #area (t-paper) — three light-ish bands in a five-section run feels flat. −0.5.

## photo — 8.5

What earned it: all frames on-topic (woodshed, roof rods, stove install, chimney cap, flue brush); consistent warm grade across every photo and video poster; object-position puts subject on thirds; alt text describes frame; video has poster and preload.
Deductions: none against the 8.5 anchor for stock. Ceiling is lower because nothing is art-directed beyond grade.

## copy — 9.0

What earned it: voice matches concept's three sentences; every section answers one homeowner question in plain contractor language; microcopy under form button ("We'll call you back to set up a visit"); one consistent primary action name ("Price a visit" / "Price it" are close but "Price it" on mobile bar is a shorter variant of the same idea — borderline, not deducted); Sample labels on every review, every price row, and the price table caption.
Deductions: none against the 9 anchor.

## mobile — 8.0

What earned it: 390-full.jpg shows composed phone layout, sticky call bar works, tap targets ≥ 48px, h1 ≤ 4 lines, tools usable with thumb.
Deductions:
- qa/render.json: horizontal overflow at 390px (page 478px wide) and 320px (476px wide) caused by div.header__actions, a.btn.btn-call, button.menu-btn extending past viewport. This is a mustFix (render check already fails it). In fast mode, any horizontal scroll caps mobile at 8.0 per §2.5 / §3.7. −1.0 from the 9 anchor, capped at 8.0.

## a11y — 9.0

What earned it: axe clean (static.json + render.json have zero blockers/warnings); skip link present; focus visible (2px outline currentColor, 3px offset); all inputs labeled; reduced-motion screenshots (1440-rm-full.jpg, 390-rm-full.jpg) show every word and tool output with no hidden content; rotating month text is static in RM; heading order correct (one h1, h2 per section, no skips).
Deductions: none against the 9 anchor.

## motion — 8.5

What earned it: tidy intro (season rail slides in, watermark fades, photo unclips — h1 readable before motion completes per dist script); consistent reveals (text rises, images clip); ≥ 3 hooks beyond plain reveals (season-rail slide, offset-frame unclip, staggered card reveals); reduced motion respected; hover hairline grows from left via scaleX.
Deductions:
- 1440-scroll-25.jpg through 1440-scroll-75.jpg: entrance pattern is predominantly translateY rise on text and clip on images; quiet sections (statement, FAQ) correctly stay still, but the variety of entrance patterns is closer to 3 than 4. Not enough to drop below 8.5 but prevents 9.

## wow — 8.5

What earned it: the season-rail-as-navigation is tied to the thesis and the trade; the firewood dry-check tool outputs a specific seasonal answer ("ready around next October") rendered in the signature's ruled-card language; a homeowner would actually use it.
Deductions:
- The second connected moment (sweep interval planner rendering a mini season calendar) is present but visually modest in 1440-scroll-25.jpg; the output reads more like a text result than a designed artifact in the signature's language. −0.5 from the 10 anchor, landing at 8.5.

## polish — 9.0

What earned it: SVG favicon + apple-touch-icon; OG 1200×630; theme-color; JSON-LD HomeAndConstructionBusiness; print stylesheet for estimator; lazy images with width/height; hero poster preloaded; forced colors handled; consistent 2px radius; one rule weight; footer designed with signoff, biz line, disclaimer, credits, copyright.
Deductions: none against the 9 anchor.

## Arithmetic

14×8.5 + 12×9.0 + 10×9.0 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.0 + 7×9.0 + 12×8.5 + 8×8.5 + 4×9.0
= 119.0 + 108.0 + 90.0 + 85.0 + 68.0 + 72.0 + 56.0 + 63.0 + 102.0 + 68.0 + 36.0
= 867.0 / 100 = 8.67

## Must

- **where:** qa/render.json (overflow errors at 390px and 320px); 390-first.jpg, 390-full.jpg
  **problem:** Horizontal overflow: page is 478px wide at 390px viewport. div.header__actions (right 496), a.btn.btn-call (right 436), button.menu-btn (right 496) extend past viewport.
  **fix:** In the CSS for .header__inner, add `overflow-x: clip` (already present) but also constrain .header__actions with `max-width: 100%; overflow: hidden;` and ensure .btn-call and .menu-btn do not exceed their container. Alternatively, hide .btn-call on mobile entirely (it is already hidden via .header-call display:none <640px, but the element may still contribute to scroll width if positioned absolutely or flex-overflown). Verify with check-render after fix.

## Should

- **where:** 390-first.jpg
  **problem:** Phone number not visible on first screen at 390px; homeowner must know to scroll or use sticky bar.
  **fix:** Add an inline `tel:` link in the hero text block below the proof line, visible at all viewports, e.g. `<a class="tel-plain" href="tel:+18025550184">(802) 555-0184</a>` styled to match the proof-line size.

- **where:** 1440-full.jpg, #services → #reviews transition
  **problem:** Two adjacent t-paper bands read as one continuous light block; density map flattens.
  **fix:** Change #reviews to t-mid or insert a thin t-deep divider band between them to restore the loud→quiet→dense rhythm.

- **where:** 1440-scroll-50.jpg, #wow tool output
  **problem:** Sweep interval planner output is a plain text result, not visually integrated into the season-rail signature.
  **fix:** Render the suggested timing as a miniature season-rail strip (same month labels, active month highlighted in ochre) inside the tool output card, so the signature does real work in two places.

## Elevate

1. **mobile** (weakest, weight 7): Fix the horizontal overflow (mustFix above), then re-compose the header for 320×640 so the logo, open-now status and menu button fit without clipping. At 320px, consider hiding the open-now text and showing only the logo + hamburger, with the phone exclusively in the sticky bar. This turns a broken 320 into a designed one and unlocks the 9→10 mobile anchor.

2. **layout** (second weakest, weight 10): Break the mid-page tonal plateau by making #reviews t-mid and giving it the ruled title-block frame from the concept's signature system. This creates a deep/paper/**mid**/paper/deep rhythm that matches the season-rail's own dark-on-light cadence and gives the scroll a visible shape (loud → quiet → dense → breath) per the 10 anchor.