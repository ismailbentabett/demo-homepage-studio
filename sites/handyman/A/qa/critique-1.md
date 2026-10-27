COPY: needs copy-chief

# Five-second test (no screenshots available; judged from dist/index.html)

At 1440: "Handyman visits in Grand Rapids" kicker above an h1 that says "8:00 to 12:00. Your list, done." Phone number visible in header and as a secondary CTA. Primary action is "Book a half-day". The time-rail signature (08:00 stamp) is visible on the left margin. A marquee of placeholder frames sits below the fold. Trade and city are named in the kicker but not the h1 itself.

At 390: same content reflowed; time-rail becomes a horizontal row above the hero content per CSS line 412-416. Both CTAs should be above the fold given the min-height calculation, but cannot confirm without a screenshot.

---

## firstScreen — 8.5

**What earned it:** h1 is 6 words and states outcome. Phone visible in two places. Proof line with hours, sample rating and review count present under the h1 (line 586). Primary and secondary CTAs differentiated.

**Deductions:**
- dist/index.html line 585: h1 "8:00 to 12:00. Your list, done." does not name trade or city; trade+city only appears in the kicker above. RUBRIC 3.1 deduction "Headline is a slogan with no trade or no place": −0.5.
- Cannot verify next-band peek, animation timing, or fold position without screenshots. No further deductions applied but score capped at 8.5 until visual evidence exists.

## distinctiveness — 9.0

**What earned it:** Time Card Punch signature appears in four sections: hero (08:00 stamp, line 580-582), services (09:00, line 713-715), reviews (11:40, line 844-846), footer (12:00 punch-out, line 1021-1023). Signature organises information rather than decorating it. Three layout families (split, checklist, table). Palette and type trio are consistent and differ from typical contractor templates.

**Deductions:** None from markup. Cannot verify sibling distinctiveness without B/C screenshots; score assumes check-unique passed.

## type — 8.5

**What earned it:** Space Grotesk / Work Sans / DM Mono trio. Fluid clamp scale. Body ≥ 16px. Measure constrained (65ch p, 55ch lead). Tabular numerals in pricing via DM Mono. Display tracking −0.03em on headings (line 318).

**Deductions:**
- dist/index.html throughout: straight hyphens in ranges ("8:00 to 12:00", "7:30 am – 5 pm") instead of en-dashes. RUBRIC 3.3 "Straight quotes or hyphen ranges": −0.5.
- Multiple kicker labels in tracked caps (hero kicker line 584, proof-line line 586, section kickers possible). Approaching "3+ tiny tracked caps captions in one view" threshold. −0.5 applied conservatively.
- Cannot confirm orphan control without screenshots.

## layout — 8.5

**What earned it:** Nine sections with alternating tones (paper → light → deep → paper → accent → paper → deep → light → paper → deep). Full-bleed break section (line 837-840). Asymmetric time-rail margin on desktop. Each section has one job.

**Deductions:**
- dist/index.html lines 719-775: services section is a uniform 3-column grid of nine identical svc-cards. Reads as template-like density. Not three icon-in-square cards (no icons), but the uniformity flattens rhythm. −0.5 for flat density map.
- Cannot verify spacing, asymmetric moves, or blank gaps without screenshots.

## photo — 7.0

**What earned it:** Placeholder frames use consistent aspect-ratio (3/2), object-fit cover, and a unified CSS filter (saturate 0.85, contrast 1.05, sepia 0.06). Fallback system present. Slots are correctly assigned per data-slot attributes.

**Deductions:**
- All images are placeholders with developer-facing alt text ("Placeholder for fix-drywall-patch"). No real photography to judge grade consistency, crop intention, or art direction. Score reflects absence of media.
- **mustFix:** Alt text leaks tokens. Visitor sees "Placeholder for..." which breaks trust and fails WCAG meaningful-alt requirement.

## copy — 8.5

**What earned it:** Plain, specific voice. Service blurbs use concrete nouns ("hinges shimmed", "strike plate moved a quarter inch", "tubs re-caulked"). Sample labels on every price row and every review. No banned phrases. Microcopy under form submit ("We will call you back to confirm the visit. No spam, no mailing list.", line 1006).

**Deductions:**
- Four different names for the primary action: "Book a half-day" (hero line 588), "Price it" (service cards lines 724-772), "Get my number" (pricing line 832), "Send my list" (form line 1004). RUBRIC 3.6 "Two different names for the primary action": −0.5 (applied once for the pattern, not per instance).
- "Get my number" is vague and could be read as requesting a phone number rather than a quote. −0.5 already covered above.

## mobile — 8.0

**What earned it:** Mobile bar with call + book CTAs (lines 1042-1045), hides on scroll down via .is-hidden. Tap targets ≥ 48px on buttons and radio-cards. Time-rail reflows to horizontal row under 900px. Responsive breakpoints at 640, 900, 1200.

**Deductions:**
- Cannot verify 390×844 composition, fold positions, or whether mobile bar covers form/footer without screenshots. Score meets floor 8 but cannot reach 9 anchor without visual evidence. −1.0 applied for unverifiable mobile composition.

## a11y — 8.5

**What earned it:** Skip link (line 543). Focus styles with 3px outline and 3px offset (line 506). All form inputs labelled. ARIA live regions on zip checker and checklist result. Reduced-motion media query disables all animation (lines 519-522). Forced-colors borders on interactive elements (lines 524-528). Heading order h1 → h2 → h3 with no skips.

**Deductions:**
- Cannot verify reduced-motion screenshot shows all content (rotator, marquee, reveals). Score assumes CSS fallback works but cannot confirm. −0.5 applied conservatively.
- Marquee pause-on-hover capability declared in CSS but JS behaviour unverifiable without execution.

## motion — 8.0

**What earned it:** Reveal system with fade, clip, scale variants. Split-text animation on h1. Marquee with pause capability. Timestamp ink-in described in concept.json. Reduced motion respected.

**Deductions:**
- Fewer than 3 distinct hooks beyond plain reveals verifiable from markup alone (reveal, split, marquee = 3; timestamp ink-in depends on JS). Borderline on the "≥ 3 hooks" anchor.
- Same translateY + opacity reveal applied to most sections via data-reveal. RUBRIC 3.9 "Same reveal on every section": −1.0.
- Cannot verify intro timing or skippability without screenshots.

## wow — 8.0

**What earned it:** Half-day planner checklist is a functional tool tied to the thesis. Output updates dynamically and pre-fills the book button. Homeowner can actually use it to scope a visit.

**Deductions:**
- Tool output is a plain text line in checklist__result (line 705), not a designed artifact in the signature language. RUBRIC 3.10 "The tool's output is a plain text line": −1.0.
- No second connected moment visible in markup.

## polish — 8.0

**What earned it:** SVG favicon + apple-touch-icon. OG image 1200×630. Theme-color. JSON-LD HomeAndConstructionBusiness. Consistent 2px radius. Print stylesheet for estimator. Lazy images with width/height.

**Deductions:**
- qa/static.json: 11 warnings for `<a>` without href in credits (Pexels links). Broken credit links signal incomplete polish. −0.5.
- Placeholder alt text is developer-facing leakage (see mustFix). −0.5.
- No print stylesheet specifically for the planner checklist output (print stylesheet targets estimator, line 247-250, but planner is the actual tool on this site). −0.5 if planner is meant to be printable; unclear from markup. Applied conservatively as −0.5.

---

## Arithmetic

14×8.5 + 12×9.0 + 10×8.5 + 10×8.5 + 8×7.0 + 8×8.5 + 7×8.0 + 7×8.5 + 12×8.0 + 8×8.0 + 4×8.0
= 119.0 + 108.0 + 85.0 + 85.0 + 56.0 + 68.0 + 56.0 + 59.5 + 96.0 + 64.0 + 32.0
= 828.5 / 100 = **8.29**

---

## Must

1. **dist/index.html lines 594-601, 636, 838, 911** — Alt text reads "Placeholder for fix-drywall-patch" etc. Replace each with a visitor-facing description matching the slot intent (e.g., "Hand patching a drywall hole before sanding" for fix-drywall-patch). Source: facts.json service blurbs.

## Should

1. **dist/index.html line 585** — h1 lacks trade and city. Move "Handyman visits in Grand Rapids" from the kicker into the h1, e.g. "Grand Rapids handyman: 8:00 to 12:00, your list done." Keep the kicker for secondary context or remove it.
2. **dist/index.html lines 588, 724-772, 832, 1004** — Unify primary action naming. Recommend "Book a visit" everywhere. Retire "Price it", "Get my number", and "Send my list".
3. **dist/index.html throughout** — Replace straight hyphens in ranges with en-dashes ("8:00–12:00", "7:30 am–5 pm"). Use `&nbsp;` between number and unit where appropriate.
4. **dist/index.html lines 719-775** — Break up the uniform 9-card service grid. Group cards into 2-3 sub-sections by visit type (half-day, full-day, specialty) or alternate card sizes to create rhythm.
5. **dist/index.html line 705** — Design the planner output as a signature artifact (e.g., a stamped time-card row showing estimated duration) rather than a plain text line.
6. **qa/static.json** — Fix the 11 `<a>` without href in ul.credits. Either add proper Pexels URLs or convert to `<span>` elements since these are placeholders.
7. **Mobile verification needed** — Generate screenshots at 390×844 to verify fold positions, mobile bar behaviour, and tap target sizing. Current mobile score is capped at 8.0 without visual evidence.

## Elevate

1. **photo (weakest, weight 8):** Once real media arrives, apply the existing CSS filter grade consistently and use object-position to place hands/tools on thirds. Add one signature-treated frame (time-stamp overlay on the break photo) so photography participates in the Time Card Punch system rather than sitting beside it.

2. **copy (second weakest by weight tie-break with mobile/a11y/polish at lower weights; copy has higher impact on conversion):** Unify the primary action to "Book a visit" across hero, service cards, pricing, and form submit. This single change lifts copy from 8.5 toward 9.0 and reinforces the homeowner's mental model.