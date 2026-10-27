COPY: ok

# Five-second test (no screenshots available; judged from dist/index.html)

At 1440: "Handyman visits in Grand Rapids" kicker above an h1 that says "8:00 to 12:00. Your list, done." Phone number visible in header and as a secondary CTA. Primary action is "Book a visit". The time-rail signature (08:00 stamp) is visible on the left margin. Trade and city are named in the kicker but not the h1 itself.

At 390: same content reflowed; time-rail becomes a horizontal row above the hero content per CSS line 412-416. Both CTAs should be above the fold given the min-height calculation, but cannot confirm without a screenshot.

---

## firstScreen — 8.5

**What earned it:** h1 is 6 words and states outcome. Phone visible in two places. Proof line with hours, sample rating and review count present under the h1 (line 586). Primary and secondary CTAs differentiated. Primary action now unified to "Book a visit".

**Deductions:**
- dist/index.html line 585: h1 "8:00 to 12:00. Your list, done." does not name trade or city; trade+city only appears in the kicker above. RUBRIC 3.1 deduction "Headline is a slogan with no trade or no place": -0.5.
- Cannot verify next-band peek, animation timing, or fold position without screenshots. No further deductions applied but score capped at 8.5 until visual evidence exists.

**Round 1 comparison:** Score unchanged at 8.5. CTA naming fix did not affect firstScreen anchor; h1 still lacks trade+city.

## distinctiveness — 9.0

**What earned it:** Time Card Punch signature appears in four sections: hero (08:00 stamp, line 580), services (09:00, line 713), reviews (11:40, line 844), footer (12:00 punch-out, line 1072). Signature organises information rather than decorating it. Three layout families (split, checklist, table). Palette and type trio are consistent and differ from typical contractor templates.

**Deductions:** None from markup. Cannot verify sibling distinctiveness without B/C screenshots; score assumes check-unique passed.

**Round 1 comparison:** Score unchanged at 9.0. Signature system intact.

## type — 8.5

**What earned it:** Space Grotesk / Work Sans / DM Mono trio. Fluid clamp scale. Body >= 16px. Measure constrained (65ch p, 55ch lead). Tabular numerals in pricing via DM Mono. Display tracking -0.03em on headings (line 318).

**Deductions:**
- Multiple kicker labels in tracked caps (hero kicker line 584, proof-line line 586, section kickers). Approaching "3+ tiny tracked caps captions in one view" threshold. -0.5 applied conservatively.
- Cannot confirm orphan control without screenshots.

**Round 1 comparison:** Score unchanged at 8.5. En-dash issue from round 1 appears resolved (hours use en-dash at line 957); conservative cap for unverified orphans remains.

## layout — 8.5

**What earned it:** Nine sections with alternating tones (paper -> light -> deep -> paper -> accent -> paper -> deep -> light -> paper -> deep). Full-bleed break section. Asymmetric time-rail margin on desktop. Each section has one job.

**Deductions:**
- dist/index.html lines 719-775: services section is a uniform 3-column grid of nine identical svc-cards. Reads as template-like density. -0.5 for flat density map.
- Cannot verify spacing, asymmetric moves, or blank gaps without screenshots.

**Round 1 comparison:** Score unchanged at 8.5. Service grid uniformity not addressed.

## photo — 8.0

**What earned it:** Placeholder frames use consistent aspect-ratio (3/2), object-fit cover, and a unified CSS filter (saturate 0.85, contrast 1.05, sepia 0.06). Alt text now visitor-facing and descriptive (e.g., "Hand patching a drywall hole before sanding" line 594, "Two-story house in Grand Rapids with a covered front porch" line 961). Round 1 mustFix (developer-facing alt text) is resolved.

**Deductions:**
- All images remain placeholders. No real photography to judge grade consistency, crop intention, or art direction. Score reflects absence of media. Pass mark 8.5 not met.

**Round 1 comparison:** Score improved from 7.0 to 8.0. MustFix resolved; alt text now appropriate. Still below pass mark due to placeholder status.

## copy — 9.0

**What earned it:** Primary action unified to "Book a visit" across hero CTA (line 588), mobile bar (line 1096), form submit (line 1054) and section heading (line 969). Service cards use "Price it" as a secondary pricing action, distinct from primary booking CTA. Voice plain and specific with concrete nouns ("strike plate moved a quarter inch" line 932). Sample labels on all prices and reviews. Microcopy under form submit (line 1056). No banned phrases.

**Deductions:** None. Round 1 deduction for inconsistent action naming resolved.

**Round 1 comparison:** Score improved from 8.5 to 9.0. Primary action naming unified as recommended.

## mobile — 8.0

**What earned it:** Mobile bar with call + book CTAs (lines 1094-1097), hides on scroll down via .is-hidden. Tap targets min-height 48px on buttons and radio-cards. Time-rail reflows to horizontal row under 900px. Responsive breakpoints at 640, 900, 1200.

**Deductions:**
- Cannot verify 390x844 composition, fold positions, or whether mobile bar covers form/footer without screenshots. Score meets floor 8 but cannot reach 9 anchor without visual evidence. -1.0 applied for unverifiable mobile composition.

**Round 1 comparison:** Score unchanged at 8.0. Screenshots still absent.

## a11y — 8.5

**What earned it:** Skip link (line 543). Focus styles with 2px outline and 3px offset (line 71). All form inputs labelled. ARIA live regions on zip checker and checklist result. Reduced-motion media query disables animations (lines 228-233). Forced-colors borders on interactive elements (lines 236-239). Heading order h1 -> h2 -> h3 with no skips.

**Deductions:**
- Cannot verify reduced-motion screenshot shows all content (rotator, marquee, reveals). -0.5 applied conservatively.

**Round 1 comparison:** Score unchanged at 8.5. Screenshots still absent.

## motion — 8.0

**What earned it:** Reveal system with fade, clip, scale variants. Split-text animation on h1. Marquee with pause capability. Timestamp ink-in described in concept.json. Reduced motion respected.

**Deductions:**
- Same translateY + opacity reveal applied to most sections via data-reveal. RUBRIC 3.9 "Same reveal on every section": -1.0.
- Fewer than 3 distinct hooks beyond plain reveals verifiable from markup alone. Borderline on the ">= 3 hooks" anchor.
- Cannot verify intro timing or skippability without screenshots.

**Round 1 comparison:** Score unchanged at 8.0. Reveal pattern uniformity not addressed.

## wow — 8.0

**What earned it:** Half-day planner checklist is a functional tool tied to the thesis. Output updates dynamically and pre-fills the book button. Homeowner can actually use it to scope a visit.

**Deductions:**
- Tool output is a plain text line in checklist__result (line 705), not a designed artifact in the signature language. RUBRIC 3.10 "The tool's output is a plain text line": -1.0.
- No second connected moment visible in markup.

**Round 1 comparison:** Score unchanged at 8.0. Planner output design not addressed.

## polish — 8.5

**What earned it:** SVG favicon + apple-touch-icon. OG image 1200x630. Theme-color. JSON-LD HomeAndConstructionBusiness. Consistent 2px radius. Print stylesheet for estimator. Lazy images with width/height. qa/static.json shows zero blockers and zero warnings (round 1 credit-link warnings resolved). Placeholder alt text now visitor-facing.

**Deductions:**
- No print stylesheet specifically for the planner checklist output (print stylesheet targets estimator, line 247-250, but planner is the actual tool on this site). -0.5 applied conservatively.

**Round 1 comparison:** Score improved from 8.0 to 8.5. Static check warnings resolved.

---

## Arithmetic

14×8.5 + 12×9.0 + 10×8.5 + 10×8.5 + 8×8.0 + 8×9.0 + 7×8.0 + 7×8.5 + 12×8.0 + 8×8.0 + 4×8.5
= 119.0 + 108.0 + 85.0 + 85.0 + 64.0 + 72.0 + 56.0 + 59.5 + 96.0 + 64.0 + 34.0
= 842.5 / 100 = **8.43**

---

## Must

None. Round 1 mustFix (alt text) is resolved.

## Should

1. **dist/index.html line 585** — h1 lacks trade and city. Move "Handyman visits in Grand Rapids" from the kicker into the h1, e.g. "Grand Rapids handyman: 8:00 to 12:00, your list done." Keep the kicker for secondary context or remove it.
2. **dist/index.html lines 719-775** — Break up the uniform 9-card service grid. Group cards into 2-3 sub-sections by visit type (half-day, full-day, specialty) or alternate card sizes to create rhythm.
3. **dist/index.html line 705** — Design the planner output as a signature artifact (e.g., a stamped time-card row showing estimated duration) rather than a plain text line.
4. **Mobile verification needed** — Generate screenshots at 390x844 to verify fold positions, mobile bar behaviour, and tap target sizing. Current mobile score is capped at 8.0 without visual evidence.
5. **Reduced-motion verification needed** — Generate reduced-motion screenshots to verify all content is visible. Current a11y score is capped at 8.5 without visual evidence.

## Elevate

1. **photo (weakest, weight 8):** Source real photography from niches/handyman/media/ and apply the existing CSS filter grade consistently; use object-position to place hands/tools on thirds and add one signature-treated frame (time-stamp overlay on the break photo) so photography participates in the Time Card Punch system.

2. **motion (second weakest by weight tie-break with mobile/a11y/wow at lower weights; motion has higher impact on distinctiveness):** Vary reveal patterns by section role: use clip-path wipes for service cards, scale-only for review quotes, and keep the planner static until interacted with; drive the timestamp pill ink-in with ScrollTrigger so the signature animates in two places beyond the hero.