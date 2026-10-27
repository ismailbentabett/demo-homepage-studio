COPY: needs copy-chief

## Five-second test (from dist/index.html; no screenshots available)

At 1440: "Akron tear-outs to the studs" (5 words) states trade + city + outcome. Two CTAs: filled "Call (330) 555-0179" primary, ghost "Price it" secondary. Phone visible in header CTA (line 616) and hero CTA (line 651). Layer Gauge margin rail shows seven dimmed rows at left. Trust rail immediately below hero lists four proof pills. At 390: same headline wraps to ~3 lines; mobile bar with tel: and Price it anchor appears at bottom. Trade, city and outcome are clear within three seconds.

**Note:** Screenshots directory remains empty (`qa/render-check.json` confirms no captures). All scores derived from built HTML/CSS. Deductions requiring visual confirmation are flagged as provisional. Round 1 fixes verified in DOM: h1 shortened to 5 words, process sections diversified into split/split-reversed/full-bleed, estimator redesigned as ticket, kicker usage reduced to hero only.

---

## First screen — 8.5

**What earned it:** h1 "Akron tear-outs to the studs" is 5 words, well within the ≤8 anchor. Trade + city + outcome present. Phone visible in header CTA at 1440 and in mobile bar at 390. Two CTAs differentiated: primary filled call button, secondary ghost "Price it". Layer Gauge signature visible at load (lines 636–644). Trust rail immediately below reinforces dust/testing/debris promises.

**Deductions:**
- `dist/index.html` line 651–652: Primary CTA is "Call" (tel:), secondary is "Price it" (anchor). Both share min-height 48px and similar padding; without screenshot cannot confirm visual hierarchy distinguishes primary from secondary. Provisional −0.5.
- Cannot verify next-band peek distance (hero may be exactly 100svh minus header) or fold position at 390×844 without screenshots. Trust bar follows immediately but tight padding may not produce visible 40–120px peek. Provisional −0.5.
- Intro tape wipe timing cannot be verified without render; if it exceeds 1.2s or blocks reading, further deduction applies. Provisional −0.5.

**Must:** None.
**Should:** Capture screenshots to confirm primary CTA dominates visually and next band peeks 40–120px. Verify intro completes under 1.2s.

---

## Distinctiveness — 8.5

**What earned it:** Layer Gauge signature threaded through hero margin rail (lines 636–644), inline in process sections (lines 676–679, 697–701), reviews paper tone (data-sw-signature="reviews"), and footer final row (lines 1036–1038). That is 4+ sections. Charcoal Stud + Plaster + Safety palette unique in registry. Bitter/Outfit/DM Mono type stack differs from siblings. Hero family 12 (sticky photo peel) is niche-unique. Process sections now use three distinct layout families (split-img-left, split-img-right, full-bleed break) instead of four identical stacks.

**Deductions:**
- Services section (lines 796–849) does not carry mini-gauge chips showing which layer each service starts at, despite concept.json specifying this. Signature present in only 4 sections instead of promised 5. −0.5.
- Cannot verify cover-the-logo test or that gauge does real information work vs decoration without screenshots showing it lit at different scroll positions. Provisional −0.5.
- No sibling screenshots available to confirm distinctiveness against demolition-B/C. Provisional −0.5.

**Must:** None.
**Should:** Add mini-gauge chips to service cards per concept. Once screenshots exist, verify gauge illuminates progressively and removing it breaks information architecture.

---

## Typography — 8.0

**What earned it:** Bitter slab display + Outfit body + DM Mono accent = valid 3-family stack. Fluid clamp scale (--fs-h1 through --fs--1). Body at var(--fs-1) ≥16px equivalent. Paragraph max-width 62ch within 45–75 range. Tabular numerals on counters via font-variant-numeric (line 132). Kicker usage reduced to hero only (line 647); process sections use h2 with layer numbering instead of kicker labels.

**Deductions:**
- `dist/index.html` line 526: contact-details dt elements use DM Mono uppercase tracked 0.05em across Phone/Hours/Areas — three tiny tracked caps labels in one view triggers "3+ tiny tracked caps" deduction. −0.5.
- h1 line-height 0.92 (line 340) is tight for Bitter at large sizes; may clip descenders depending on viewport. Cannot verify without screenshot. Provisional −0.5.
- Cannot verify orphan control in headings or rendering quality of Bitter variable weight without screenshots. Provisional −0.5.

**Must:** None.
**Should:** Reduce contact-details dt tracking or switch to Outfit for those labels. Verify heading orphans and Bitter rendering at 1440 and 390 once screenshots exist.

---

## Layout and rhythm — 8.5

**What earned it:** 10 sections with alternating tones (deep/paper/deep/paper/mid/accent/paper/deep/paper/deep). Multiple layout families: split hero (line 635), trust rail (line 663), split-img-left process (line 675), split-img-right process (line 696), full-bleed break (line 718), tools grid on accent (line 726), services grid (line 796), pricing stack (line 854), reviews stack (line 893), contact split (line 930). No two adjacent sections share same layout family. Full-bleed dark band at section 5 provides visual break. Density alternates between tight rails, spacious splits, and dense grids.

**Deductions:**
- Reviews section (line 893) and pricing section (line 854) both use .stack center-aligned layout consecutively. Two same-shape sections in a row is acceptable (deduction triggers at 3+), but transition from paper reviews to deep pricing lacks tonal breath. Provisional −0.5.
- Cannot verify density map, full-bleed breaks, or asymmetric sections without full-page screenshots. Break section (line 718) should provide asymmetry but cannot confirm visually. Provisional −0.5.
- Tools band (line 726) uses t-accent background creating three dark-toned sections in sequence (process-structural t-paper → break t-mid → tools t-accent). Mid→accent transition is subtle and may read as two dark bands touching. Provisional −0.5.

**Must:** None.
**Should:** Insert paper-tone breath between tools and services, or make tools t-paper with accent-colored cards. Verify full-page rhythm once screenshots exist.

---

## Photo and video — 7.5

**What earned it:** Frame component applies consistent filter (grayscale(1) contrast(1.15) brightness(.78) sepia(.45) hue-rotate(-15deg) plus multiply gradient overlay and color-dodge tint, lines 370–372) for unified grade across all placeholders. Alt text present on every frame. Placeholder images referenced per task allowance. Break image uses fetchpriority="high" (line 720). Consistent aspect ratios (3/2 for frames, 4/5→3/4 for hero, 16/9 for break).

**Deductions:**
- Placeholder integration cannot be verified as acceptable without screenshots. Scored above floor given placeholder caveat, but cannot reach 8.0 without visual confirmation of crop/object-position. Provisional −0.5.
- Footer credits (line 1034) list generic "Demo Homepage Studio on Pexels" four times rather than specific photographer attributions. −0.5.
- Same alt text pattern "Placeholder for [slot]" repeated across all frames; accurate for demo but does not describe intended frame content. −0.5.
- Cannot verify photos feel like one controlled shoot without seeing actual grade applied to real media. Provisional −0.5.

**Must:** None.
**Should:** Replace placeholders with niche-approved media once available. Fix credit attributions to name specific photographers. Write descriptive alt text naming intended scene even for placeholders.

---

## Copy — 8.5

**What earned it:** Voice matches concept sentences ("Plastic dust walls before any swing", "We test first when the house is old enough", "Trailer leaves daily, not a dumpster"). Trade-specific nouns throughout (zipper seam, negative air, ram board, mortar bed, capped and tagged). Sample tags present on all reviews (lines 689, 708, 903, 912, 921), pricing disclaimer (line 887), and license (line 1030). Primary action consistently named "Price it" across services, tools, and mobile bar. Microcopy at form steps ("What room?", "About how big?", "When do you want this done?") and estimator disclaimer. h1 shortened to 5 words avoiding banned "demolition" in favor of "tear-outs".

**Deductions:**
- Pricing section CTA (line 888) says "Get my number" while every other CTA says "Price it". Two different names for primary action. −0.5.
- Lead paragraph (line 649) second sentence "We test first when the house is old enough." omits consequence clause from voice guide ("...and if a test comes back positive, that part waits"). Minor truncation but full explanation appears in dust-plan picker tabs. −0.5.

**Must:** Change "Get my number" to "Price it" at line 888 for consistency (two names for primary action is a copy mustFix per RUBRIC §3.6).
**Should:** Restore consequence clause in lead or ensure it appears prominently elsewhere.

---

## Mobile — 8.0

**What earned it:** Mobile bar with tel: and anchor CTA present (lines 1042–1045). CSS breakpoints at 640px and 900px. Layer gauge hidden below 900px (line 398–400), replaced by inline variant in process sections. Buttons min-height 48px (line 355). Form inputs have adequate sizing (min-height 48px, line 538). Header nav collapses to menu button below 900px (line 420). No horizontal scroll expected given overflow-x: hidden on body (line 338) and responsive grid columns.

**Deductions:**
- Cannot verify tap targets ≥48px, horizontal scroll absence, sticky behavior, or 390×844 composition without screenshots. Provisional −0.5.
- Cannot confirm mobile bar hides on scroll-down per spec (data-mobilebar with is-hidden class exists at line 188, but JS behavior unverified). Provisional −0.5.
- Layer gauge inline variant at <900px (lines 406–408) displays as horizontal row of bordered chips; may crowd top of process sections on narrow phones. Cannot verify without 390 screenshot. Provisional −0.5.

**Must:** None.
**Should:** Capture 390×844 screenshots and verify all interactive targets, scroll behavior, and gauge placement. Test mobile bar hide/show on scroll.

---

## Accessibility — 8.5

**What earned it:** Skip link present (line 603). Focus-visible styled at 3px solid var(--focus) with 3px offset (line 348). All form inputs have associated labels or fieldset legends (lines 948–957, 963–966, 974–981, 989–994). Honeypot field properly hidden (line 995, class hp-field with absolute positioning). aria-live on estimator output (line 874), checklist results (lines 740, 753), and ZIP result (line 789). Reduced-motion handled via sw-motion class gate (line 23) and CSS media query (lines 230–235). Heading order: one h1 (line 648), h2 per section, h3 for cards/steps — no skips visible. static.json clean (0 blockers, 0 warnings). Tabs have proper role/tablist/aria-selected/aria-controls (lines 761–765). Menu has aria-hidden and aria-expanded (lines 615, 621).

**Deductions:**
- Cannot verify reduced-motion content visibility (all layers/gauge visible without animation) without reduced-motion screenshots. CSS ensures reveal states are visible (lines 93–107 show .sw-motion gates), but cannot confirm visually. Provisional −0.5.
- Cannot verify focus ring contrast on both paper and deep tones visually. --focus token switches per tone (lines 312, 316), but 3:1 ratio not confirmed by eye. Provisional −0.5.

**Must:** None.
**Should:** Capture reduced-motion screenshots to confirm all content visible and gauge fully lit. Verify focus ring contrast on both tones.

---

## Motion and interaction — 8.0

**What earned it:** Hooks present for reveal (data-reveal, data-reveal-stagger), split-text (data-split="lines" on h1), clip reveals (data-reveal="clip" on frames), checklist, tabs, ZIP checker, estimator. Lenis loaded (line 1049). CSS transitions use transform/opacity/clip-path only (no layout properties). Reduced-motion gate prevents animation when preferred (lines 230–235). Stagger delays calculated via CSS custom property (lines 574–581). Reveal states properly gated under .sw-motion (lines 568–581).

**Deductions:**
- Cannot verify intro tape wipe timing (≤1.2s), scroll-triggered layer peel execution, gauge fill sync, easing quality, or reversibility without scroll-position screenshots. Provisional −1.0.
- Fewer than 3 distinct hooks beyond plain reveals visually confirmed in DOM: reveal, stagger, clip, split-text = 4 hook types meeting threshold. However layer-peel slide-up-with-dust-puff described in concept (concept.json line 27) not implemented as distinct hook — only clip reveals on frames. Signature gauge fill synced to scroll requires JS execution to observe. Provisional −0.5.
- Marquee, accordion, compare, rotator hooks present in CSS but not used in current DOM. Not a deduction but limits motion variety.

**Must:** None.
**Should:** Capture 0/25/50/75/100% scroll screenshots to verify motion behavior, timing, and hook variety. Implement dust-puff layer peel as distinct motion moment tied to signature.

---

## Wow moment — 8.0

**What earned it:** Layer Gauge as persistent scroll-synced margin rail is distinctive conceptual tool tied to thesis. Estimator output designed as ticket-style artifact with dashed border, accent top bar, DM Mono label, and Bitter range display (lines 504–511, 874–885). Multi-step form with room/size/timing/contact flow is practical and prefillable via data-service attributes. Dust plan picker tabs provide interactive containment-level selection with honest descriptions.

**Deductions:**
- Cannot verify signature moment executes visually or that gauge animation delivers "one thing a homeowner would show their partner" impact without screenshots. Provisional −0.5.
- Estimator ticket output, while designed, is still a text range within bordered box. Does not integrate Layer Gauge rows directly into ticket (e.g., lighting relevant layer row inside ticket). Signature and tool remain adjacent rather than fused. −0.5.
- Layer peeler and what-stays checklist tools implemented as simple checkbox lists with aria-live output (lines 733–741, 747–755). Functional but not visually distinctive; output is plain text, not designed artifact. −0.5.

**Must:** None.
**Should:** Fuse estimator ticket with Layer Gauge so selecting job type lights relevant layer row inside ticket. Design checklist outputs as printable tear-out sheets in signature language.

---

## Polish — 8.5

**What earned it:** SVG favicon + apple-touch-icon present (lines 20–21). theme-color set to #2b2d33 (line 9). OG tags with 1200×630 dimensions (lines 13–15). JSON-LD with GeneralContractor type, hours, areas (line 22). Print stylesheet for estimator (lines 244–253). Consistent border-radius (2px throughout). Forced-colors handled for buttons, frames, and interactive elements (lines 238–241, 584–587). Preload on hero image (line 25) and Bitter font (line 24). Lenis CSS inlined (lines 222–227). No console warnings visible in DOM. Header progress bar (line 618) adds refined touch.

**Deductions:**
- Photo credits (line 1034) list generic "Demo Homepage Studio on Pexels" four times rather than specific attributions. −0.5.
- Cannot verify nothing out of place at any viewport without screenshots. Provisional −0.5.
- OG image path is relative "og.jpg" (line 13); should be absolute for social sharing. Minor but worth fixing. −0.5.

**Must:** None.
**Should:** Fix photo credit attributions. Make OG image URL absolute. Verify polish details at all viewports once screenshots exist.

---

## Arithmetic

14×8.5 + 12×8.5 + 10×8.0 + 10×8.5 + 8×7.5 + 8×8.5 + 7×8.0 + 7×8.5 + 12×8.0 + 8×8.0 + 4×8.5
= 119 + 102 + 80 + 85 + 60 + 68 + 56 + 59.5 + 96 + 64 + 34
= 823.5 / 100 = **8.24**

---

## Must

1. **Where:** dist/index.html line 888 | **Problem:** CTA says "Get my number" while all others say "Price it" — two different names for primary action violates RUBRIC §3.6 copy anchor | **Fix:** Change to `<a class="btn" href="#contact" data-service="Haul-away">Price it</a>`

---

## Should

1. **Where:** dist/index.html line 1034 | **Problem:** Generic "Demo Homepage Studio on Pexels" ×4 in footer credits | **Fix:** Attribute specific photographers from niche media manifest once media is curated.
2. **Where:** dist/index.html services section (lines 796–849) | **Problem:** Service cards lack mini-gauge chips showing which layer each service starts at | **Fix:** Add `<span class="layer-gauge--inline">` chip to each svc-card per concept.json signature spec.
3. **Where:** dist/index.html line 649 | **Problem:** Lead omits consequence clause from voice guide | **Fix:** Expand to "We test first when the house is old enough. If it comes back positive, that part waits for a crew that does that work."
4. **Where:** dist/index.html line 13 | **Problem:** OG image path is relative | **Fix:** Use absolute URL or ensure build resolves it correctly.
5. **Where:** dist/index.html line 526 | **Problem:** Three tiny tracked caps labels (Phone/Hours/Areas dt) in contact section | **Fix:** Switch dt to Outfit or reduce tracking to avoid "3+ tiny tracked caps" deduction.
6. **Where:** qa/screens/ | **Problem:** No screenshots captured since round 1 | **Fix:** Run render check to capture all required viewports before round 3 scoring.

---

## Elevate

1. **Photo (weakest, weight 8):** Replace placeholder frames with niche-approved media from demolition manifest and apply concept's duotone treatment (charcoal deep + safety orange tint via existing CSS filter stack) so photos read as one controlled shoot rather than stock fills. This moves photo from 7.5 toward 8.5+.

2. **Wow moment (second weakest by tie-break on weight 8):** Fuse estimator ticket with Layer Gauge so selecting job type lights relevant layer row inside ticket itself, making tool output a designed artifact in signature language rather than adjacent text range. This moves wow from 8.0 toward 9.0.