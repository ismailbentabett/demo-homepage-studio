COPY: ok

## Five-second test (unverified — no screenshots)

Cannot perform the five-second test without `qa/screens/1440x900-first.png` and `qa/screens/390x844-first.png`. No screenshots exist for concrete-B, concrete-A or concrete-C. Based on dist/index.html alone: the hero h1 uses a giant "6 IN." numeral as aria-hidden display with an sr-only full sentence "Six inch concrete slabs for Mesa driveways, RV pads and pool decks" (line 563). Trade + city appear in the kicker ("Mesa, AZ · Concrete", line 562) and the lead (line 564). Phone is visible in header (line 531) and mobile bar (line 1131). Primary CTA "Build your spec" and secondary "Call" are both above the fold structurally (lines 567-568). Whether the type-mask clip-path animation completes within 1.2 s, whether the next band peeks 40–120 px, and whether the h1 reads in under 3 seconds on screen cannot be confirmed. First screen score remains capped at 8.0 until screenshots exist.

---

## Scores by category

### firstScreen — 8.0

**What earned it:** Hero structure places trade + city in kicker and lead. Sr-only h1 provides full semantic headline. Phone visible in header and mobile bar. Two CTAs with clear hierarchy (primary "Build your spec", secondary call). Spec-rail pill present in hero (line 574).

**Deductions:**
- Cannot verify h1 visual line count, fold position, or next-band peek without screenshots: −1.0 from potential 9 anchor.
- Cannot verify type-mask intro timing or whether text is readable at 0 ms reduced motion: −0.5 potential.
- Cannot confirm hero height allows next section to peek (min-height calc(100svh - header-h) may produce exactly 100 svh content area): −0.5 potential.

Score unchanged from round 1; no new visual evidence.

### distinctiveness — 8.5

**What earned it:** Spec-rail signature (`data-sw-signature="spec-rail"`) appears in hero (line 559), story (line 610), estimator (line 659), finish-compare (line 710), rv-pad-sizer (line 789), reviews (line 941), and footer (line 1099) — seven sections, exceeding the four-section minimum. Dim-line primitive (CSS lines 342-344) is reused in trust row, story layers, and estimator outputs. Oswald + Outfit + DM Mono trio is unique per concept.json. Palette family "Basalt + Dawn Amber + Bone" not in registry.

**Deductions:**
- Cannot verify sibling differentiation without screenshots of concrete-A and concrete-C: −0.5 potential.
- Cannot confirm signature does real work vs decoration without seeing the rail accumulate specs visually: −0.5 potential.

Score unchanged from round 1; structural presence confirmed but visual execution unverified.

### type — 8.5

**What earned it:** Three-family system (Oswald display, Outfit text, DM Mono accent) loaded via woff2 (lines 28-31). Fluid scale with clamp functions (lines 271-277). Body size fs-1 clamps to 1rem–1.125rem, meeting 16px floor. Paragraph measure capped at 65ch (line 302). Kicker class for mono labels (line 311). Tabular-nums on counters (line 132). Display tracking −0.03em on headings (line 298).

**Deductions:**
- Cannot verify orphan control in headings, curly quotes, en-dash ranges, or ≤5 distinct sizes on screen without visual inspection: −0.5 potential.
- Straight hyphen ranges observed in copy ("5–6 IN." uses en-dash correctly; "4-5 in." in facts prices uses hyphen): −0.5 if rendered as straight hyphen.

Score unchanged from round 1.

### layout — 8.0

**What earned it:** 12 sections with alternating tone classes (t-deep hero/story/rv-pad-sizer/service-area/footer, t-paper trust/break/finish-compare/pour-season/reviews, t-mid estimator/services, t-accent contact). Varied grid layouts: hero 1.2fr/0.8fr (line 389), trust auto-fit minmax(240px, 1fr) (line 394), story 1fr/1fr sticky at ≥640px (lines 405-408), estimator 1.2fr/0.8fr (line 423), rv 0.8fr/1.2fr (line 424). Section padding varies (tight/normal/loose). Full-bleed break photo (line 651).

**Deductions:**
- Cannot verify whether two dark bands touch (story t-deep followed by break t-paper is fine; rv t-deep followed by season t-paper is fine; service-area t-deep touches footer t-deep — both dark): −1.0. Lines 978 and 1099 show service-area (t-deep) directly adjacent to footer (t-deep) with no intervening light band. This reads as one continuous dark block.
- Cannot confirm rhythm reads as loud→quiet→dense→breath without full-page screenshot: −0.5 potential.

New deduction: two dark bands touching (service-area + footer) costs −1.0 from the 9 anchor, landing at 8.0. Score unchanged from round 1 but for a different reason (previous was unverified; now confirmed in markup).

### photo — 7.0

**What earned it:** Placeholder images used throughout with consistent filter (line 347: saturate .8, contrast 1.1, sepia .12, brightness .95). All images have width/height attributes and loading="lazy" (except hero which has fetchpriority="high"). Alt text present on every img element. Photo credits in footer (lines 1117-1124) now render as plain `<li>` text without broken `<a>` tags (round-1 mustFix resolved).

**Deductions:**
- Placeholder images mean no verification of on-topic, region-appropriate frames for Mesa desert concrete work: −0.5.
- Cannot verify crop ratios, object-position, or whether same photo reused without screenshots: −0.5 potential.
- Photo credits are generic "Photo by Placeholder on Pexels" — not linked, not specific: acceptable for demo but prevents higher score.

Score unchanged from round 1. Placeholder penalty applies; broken credits fixed.

### copy — 9.0

**What earned it:** Title names trade + city + services (line 6). Reviews contain specific measurements ("Six inches, rebar every 16", "4:45 in the morning in July", "how thick, what texture"). Sample tags present on rating (line 946), pricing notes (lines 603, 695, 816), and license (line 1115). No banned phrases detected. Voice matches concept's three sample sentences. Multi-step form uses action-specific label "Send spec" (line 1081). Primary action consistently named "Price it" in nav and service cards (lines 527, 891-933); "Build your spec" in hero is a distinct entry point to the tool, not a synonym conflict.

**Deductions:** None observed in markup.

Score unchanged from round 1.

### mobile — 8.0

**What earned it:** Responsive breakpoint at 899px hides desktop nav, shows menu button (lines 365-368). Hero grid collapses to single column below 900px (line 388). Mobile bar with call/SMS buttons has min-height 48px (line 323). Form inputs have proper labels and inputmode. Story sticky panel only activates at ≥640px (line 405), stacking cleanly on phones.

**Deductions:**
- Cannot verify tap targets ≥48px, horizontal scroll absence, or pinned behavior under 640px without screenshots: −1.0 potential.
- Cannot verify h1 ≤4 lines on 390×844: −0.5 potential.

Score unchanged from round 1.

### a11y — 8.0

**What earned it:** Skip-link (line 517). Focus-visible outline 3px solid var(--focus) with 3px offset (line 307). sr-only class defined (line 314) and used for hero h1 (line 563). Reduced motion handled via sw-motion gate; all reveal/split states become visible without the class (lines 93-106, 497-500). JS-off fallbacks: compare becomes grid (line 142), hotspots hidden (line 169), marquee wraps statically (lines 152-154). Form inputs have explicit labels. Honeypot field properly hidden (line 1077). Tabs use proper ARIA roles (lines 716-721). Heading order: one h1 (line 563), h2s for each section, h3s for subsections — no skips observed.

**Deductions:**
- Cannot verify reduced-motion screenshot shows all content without render.json/screenshots: −1.0 potential.
- Rotator not used on this site, so no aria-hidden rotating text concern.

Score unchanged from round 1.

### motion — 8.0

**What earned it:** Multiple motion hooks beyond plain reveals: clip-path on hero numeral (lines 384-385), split text on h1 (line 563 data-split="lines"), staggered reveals on trust/services/reviews grids (lines 584, 886, 947), tab panel transitions. Motion tokens defined centrally (lines 56-65). Reduced motion disables all transforms (lines 497-500). Scroll-stack story uses layer activation (lines 400-401).

**Deductions:**
- Cannot verify intro runs under 1.2s, easing quality, or whether same reveal repeats on every section without screenshots: −1.0 potential.
- Cannot confirm story is reversible or pinned only at ≥640px visually: −0.5 potential.
- Stagger delays use nth-child selectors (lines 488-495) rather than CSS custom property --i; functional but less flexible.

Score unchanged from round 1.

### wow — 8.0

**What earned it:** Spec rail accumulates choices from estimator, tabs, reviews, and dimension callouts, then expands into quote form (concept thesis). Tools are tied to signature system. Tool outputs include sample price ranges from facts.proof.prices. Footer receipt strip shows accumulated spec (lines 1101-1104).

**Deductions:**
- Cannot verify whether the wow moment lands visually, whether tool output is designed in signature language, or whether two connected moments exist without screenshots: −1.0 potential.

Score unchanged from round 1.

### polish — 8.5

**What earned it:** SVG favicon (line 20), apple-touch-icon (line 21), OG image 1200×630 (lines 13-15), theme-color (line 9), JSON-LD GeneralContractor with openingHoursSpecification (line 22). Print stylesheet isolates estimator for printing (lines 244-253). Consistent border-radius 2px across buttons, inputs, cards, frames. Forced colors handled (lines 238-241, 308). Preload hints for hero image and font (lines 24-25). Images have width/height attributes. Round-1 mustFix (broken photo credit hrefs) is resolved — static.json now clean.

**Deductions:**
- Cannot verify lazy images render correctly or hero poster preloads without screenshots: −0.5 potential.

Score raised from 8.0 to 8.5 due to mustFix resolution.

---

## Arithmetic

14×8.0 + 12×8.5 + 10×8.5 + 10×8.0 + 8×7.0 + 8×9.0 + 7×8.0 + 7×8.0 + 12×8.0 + 8×8.0 + 4×8.5
= 112 + 102 + 85 + 80 + 56 + 72 + 56 + 56 + 96 + 64 + 34
= 813 / 100 = **8.13**

---

## Must

None. Round-1 mustFix (broken photo credit hrefs) is resolved; static.json reports zero blockers and zero warnings.

## Should

1. **dist/index.html lines 978+1099, service-area + footer**: Two t-deep bands touch with no intervening light band, reading as one continuous dark block. Fix: change service-area to t-mid or insert a t-paper divider band between service-area and footer to restore tone alternation.
2. **qa/screens/ missing**: Screenshots were not captured for round 1 or round 2. Fix: run the render check pipeline (`node tools/check-render.mjs concrete-B`) to generate screenshots before round 3 critique can verify visual execution.
3. **firstScreen unverified**: Cannot confirm h1 line count, fold position, next-band peek, or intro timing. Fix: after screenshots exist, verify type-mask hero executes within 1.2s and next band peeks 40-120px.
4. **layout rhythm unverified**: Cannot confirm alternating density, asymmetric section, or full-bleed break execution. Fix: review full-page screenshot when available.
5. **mobile tap targets unverified**: Cannot confirm all interactive elements meet 48px minimum. Fix: audit with screenshots or axe after render.

## Elevate

The two weakest categories by weight are **firstScreen** (weight 14, score 8.0) and **motion** (weight 12, score 8.0).

1. **firstScreen**: Once screenshots exist, verify the type-mask hero animation completes within 1.2s and never blocks h1 readability. If the clip-path mask delays text visibility beyond 400ms, reduce duration or ensure the sr-only static copy is immediately visible and the aria-hidden numeral does not push content below the fold. Confirm next band peeks 40-120px below the hero fold at both 1440 and 390 viewports by adjusting hero min-height or adding padding-bottom.

2. **motion**: Audit the scroll story (core-sample stack) to confirm it is pinned only at ≥640px and is fully reversible. Ensure entrances vary by role (text rises via translateY, images clip via clip-path, quiet sections like trust stay still) rather than using the same fade-up on every section. Drive the estimator and spec-rail updates with the same easing language (--ease-out, --dur-ui) as the story so the signature moves consistently across tool interactions and scroll narratives.