COPY: ok

## Five-second test

**1440-first.jpg:** "Stack the first cord in September" — chimney sweep, Burlington VT (in header/meta), book a pre-season sweep. Primary CTA "Price a visit", secondary "Call". Phone visible in header. Season rail peeks at bottom. Clear in under 3 seconds.

**390-first.jpg:** Same h1 in 4 lines, both CTAs above fold. Phone hidden below 640px per CSS but sticky mobile bar provides it immediately below. Acceptable for fast mode.

---

## Categories

### firstScreen — 9.0
1440-first.jpg: h1 states trade + city + outcome in 6 words; primary CTA "Price a visit" + quieter "Call"; phone visible in header; proof line ("Sample · 4.9 · 138 reviews") present; season rail peeks ~60px at bottom. 390-first.jpg: h1 4 lines, both CTAs above fold. Deduction: phone not visible in 390 header itself (-0.5 from 10 anchor), but sticky bar compensates; holds 9.0.

### distinctiveness — 9.0
Season-rail signature appears in hero (1440-first.jpg), sticky sub-nav between sections (1440-scroll-25.jpg, 1440-scroll-50.jpg), watermark numerals behind section kickers ("09", "10"…), and footer signoff ("April · last fire"). ≥4 sections. Offset-frame hero family unique vs siblings A (arch) and B (document). Maple+birch palette and Sora/DM Sans pair differ from A and B. Holds 9.0 from round 0.

### type — 9.0
Sora display + DM Sans text from catalog; fluid scale; body ≥16px at full ink; measure ~68ch; tabular numerals in prices, hours, phone; lead paragraph set apart; ≤5 sizes on page; no orphans in headings; display tracking -0.02em. Visible across 1440-full.jpg and 390-full.jpg. Holds 9.0.

### layout — 9.0
1440-full.jpg: 11 sections each with one job; ≥3 layout families (hero split, split-stack, rail-layout, statement-layout, grid cards); alternating tones. Round 0 fix added full-bleed t-accent season-band divider between July and Services sections, breaking the previous t-paper/t-paper adjacency. Tonal rhythm now reads paper → mid → deep → accent → paper → mid → paper → deep. No two adjacent bands share tone. Asymmetric hero frame, dense tools section, quiet statement contact. Grid fully used at 1440. Upgraded from 8.5 to 9.0.

### photo — 8.5
1440-full.jpg and scroll frames: all photos on-topic (woodshed, roof rods, stove install, chimney cap, flue brush); consistent warm grade with sepia(0.1) filter applied globally; object-position on thirds; alt text describes frame; video has poster and preload. Stock ceiling applies; no art-directed sequence or signature frame treatment beyond offset-frame hero. Holds 8.5.

### copy — 9.0
1440-full.jpg: voice matches concept's three sentences ("Stack the first cord in September", "If your stove smokes into the room after our sweep, we come back that week", "Book the August opening before the October rush"); every section answers one homeowner question from brief §1; microcopy under form button ("We'll call you back to set up a visit"); Sample labels on every review card, every price row, and price table caption. No banned phrases, no tricolons, no "Get started". Holds 9.0.

### mobile — 9.0
390-first.jpg and 390-full.jpg: composed phone layout, sticky call bar works and hides on scroll down, tap targets ≥48px, h1 ≤4 lines. qa/render.json: zero overflow errors at 390px and 320px (round 0 fix confirmed — scrollWidth equals viewport at both sizes). Header call button hidden below 640px, menu-btn constrained. 320x640 judged via CSS breakpoints in dist/index.html: header stacks vertically, open-now hidden, phone exclusively in sticky bar. Upgraded from 8.0 to 9.0.

### a11y — 9.0
qa/static.json and qa/render.json: zero blockers/warnings. 1440-rm-full.jpg and 390-rm-full.jpg: all content visible, no hidden text, season rail static, no clip reveals. Skip link present; focus visible (2px outline, 3px offset); all inputs labeled; heading order correct (one h1, h2 per section, no skips). Holds 9.0.

### motion — 8.5
1440-first.jpg through 1440-scroll-75.jpg: tidy intro (rail slides, watermark fades, photo unclips); ≥3 hooks (rail slide, frame unclip, staggered cards); reduced motion respected (1440-rm-full.jpg shows everything); hover hairline scaleX 200ms. Entrance variety is 3 patterns (rise, clip, stagger), not 4+, preventing 9.0. Holds 8.5.

### wow — 8.5
1440-scroll-25.jpg: season-rail-as-navigation tied to thesis; firewood dry-check outputs seasonal answer in signature's ruled-card language. Sweep interval planner output is plain text, not visually integrated into the rail signature (-0.5 from 10 anchor). Holds 8.5.

### polish — 9.0
dist/index.html: SVG favicon + apple-touch-icon; OG 1200x630; theme-color #1c1816; JSON-LD HomeAndConstructionBusiness; print stylesheet; lazy images with width/height; hero poster preloaded; forced colors handled; consistent 2px radius; designed footer with signoff, biz, disclaimer, credits. Holds 9.0.

---

## Arithmetic

14×9.0 + 12×9.0 + 10×9.0 + 10×9.0 + 8×8.5 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.5 + 8×8.5 + 4×9.0
= 126.0 + 108.0 + 90.0 + 90.0 + 68.0 + 72.0 + 63.0 + 63.0 + 102.0 + 68.0 + 36.0
= 886.0 / 100 = **8.86**

---

## Must

None. Round 0 mustFix (horizontal overflow) is resolved per qa/render.json.

---

## Should

1. **where:** 390-first.jpg, header area
   **problem:** Phone number not visible in 390 header itself; relies entirely on sticky mobile bar. At 9.0 this is acceptable but prevents 10.
   **fix:** Consider showing a compact phone icon+number in the 390 header when space allows (≥360px), or accept current state as sufficient for 9.0.

2. **where:** 1440-scroll-50.jpg, sweep interval planner output
   **problem:** Output is plain text, not visually integrated into the season-rail signature language. Prevents wow from reaching 9.0+.
   **fix:** Render planner output as a mini season calendar using the same rail styling (month labels, active-month highlight) so the signature carries the tool output.

3. **where:** 1440-full.jpg, photo treatment
   **problem:** Global sepia/saturate filter is consistent but generic; no signature frame treatment beyond the hero offset-frame. Prevents photo from reaching 9.0.
   **fix:** Apply the offset-frame border style to at least one mid-page photo (e.g., process or review image) to thread the hero signature into the body.

---

## Elevate

1. **layout** (weight 10): The tonal rhythm is now strong, but the scroll shape could be more intentional. Add a quiet breath section (t-paper, minimal type, no image) between the dense tools section and the reviews band to create a loud→dense→quiet→dense cadence visible in the full-page screenshot.

2. **motion** (weight 12): Entrance variety is 3 patterns. Add a fourth pattern: a horizontal wipe reveal on the season-rail watermark numerals as each section enters, tying the signature element to the motion system and pushing motion toward 9.0.