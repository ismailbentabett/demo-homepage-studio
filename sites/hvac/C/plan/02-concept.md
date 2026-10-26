# Concept — hvac-C (Shadeline Heating & Cooling)

## Three obvious concepts, rejected

1. **"Beat the Heat" hero with thermometer icon.** Every Phoenix HVAC site does this; it is the brief's cliché #5 and #8. Rejected because it is generic dealer copy and a template visual.
2. **Family-on-couch stock + coupon spinner.** Brief §4 lists this as the top two things competitors do. Rejected because it signals discount churn, not craft.
3. **Literal "shade line" illustration of a house shadow.** Taking the direction seed as a clip-art diagram would be on-the-nose and static. Rejected because it lacks system potential and would look like an architecture textbook.

## The thesis

The page is a sundial laid flat: every section is an hour band split by a diagonal shade line that moves across the viewport as you scroll, and the signature is the advancing edge between sunlit problem and shaded fix.

## The signature system — Shade Line

A CSS diagonal (`conic-gradient` or rotated `::before`) that splits each section into a warm sunlit zone (left/top) stating the hour's heat problem, and a cool shaded zone (right/bottom) giving the response. The line angle tracks a clock variable `--sw-hour` from 5 AM to midnight via scroll. Appears in four sections with variation:

- **Hero:** the line sweeps across the 115° type mask at load, settling at the current local hour.
- **Story (hour bands):** five stacked bands (5 AM rooftop work, 10 AM coil rinse, 2 PM peak call, 6 PM monsoon check, 11 PM still-warm), each split by the line at its hour angle.
- **Proof / reviews:** review cards sit in the shaded half; the sample-rating chip sits in the sunlit half as a timestamp pill.
- **Footer:** the line flattens to horizontal, becoming a horizon rule under the disclaimer and credits.

Hook: `data-sw-signature="shade-line"`. Wow moment: the line visibly advances on scroll, turning the page into a clock.

## Type

- **Display:** Antonio (condensed, variable wght 100–700). Tall condensed numerals hold "115°" and hour stamps without blowing the viewport width. Used ≤ 3 times in registry, never in HVAC niche.
- **Text:** Figtree (grotesk, variable wght 300–900). Friendly geometric sans for body; pairs with Antonio's industrial height. Unique pair in registry.
- **Accent:** DM Mono (mono, label role). Hour stamps, sample tags, reading chips. Already used as accent in A/B but only as accent; display+text pair is unique.

Why the pair suits the thesis: Antonio's vertical compression mirrors the narrow shade-line gap; Figtree's roundness keeps the homeowner-facing copy approachable against the harsh desert geometry.

## Palette — Adobe Terracotta + Shade Indigo + Sun Cream

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1E293B | paper #FDF6EC | 13.63 | body on paper, headings on paper |
| paper | #FDF6EC | ink #1E293B | 13.63 | body on deep, reversed text |
| accent | #9A3412 | paper #FDF6EC | 6.80 | buttons, links, signal words on paper |
| deep | #1E293B | paper #FDF6EC | 13.63 | dark band bg, footer |
| signal | #D97706 | ink #1E293B | 4.59 | large-only accents, hour numerals on deep |
| mid | #E7DCC8 | ink #1E293B | 9.2 | muted rules, card borders on paper |

Family name: "Adobe Terracotta + Shade Indigo + Sun Cream". Unique in registry. Accent #9A3412 passes 6.80 on paper for body text. Signal #D97706 used only for large numerals on deep (4.59 ≥ 3). Focus ring uses #9A3412 on all tones (≥ 3).

## Hero family — 11 (Diagonal split)

An angled seam splits the hero: sunlit top-left shows the rooftop package unit under hard light; shaded bottom-right holds the headline "115°" and CTA stack. The seam angle matches the shade-line signature. Unique in HVAC niche (A uses 12, B uses 15). Breaks the cliché by making the diagonal a functional clock edge rather than a decorative slash.

## Motion score

- **Intro (≤ 1.2 s):** the shade line sweeps diagonally across the hero from top-left to bottom-right over 900ms, revealing the rooftop unit photo beneath. Skippable: line at rest, photo visible.
- **Scroll stories:** (1) shade line angle advances per hour band via `--sw-hour` custom property driven by ScrollTrigger, 900ms ease-io; (2) hour numerals count up once in view, 600ms, tabular figures.
- **Hover:** hairline underline grows scaleX from left, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** shade line static at noon angle, all content visible, no count-up, photo unclipped.

## Tools

1. **Monsoon storm checklist** (`checklist`). Inputs: none (printable). Output: PDF-style checklist with rinse/reset/drain steps. Hand-off: "Book a post-storm check" button pre-fills form subject.
2. **Repair or replace sorter** (`compare`). Inputs: system age, repair quote band, refrigerant type, repairs in 2 years. Output: "repair / edge / plan replacement" with reason. Hand-off: "Get a second opinion" pre-fills form.
3. **Filter reminder** (`filter`). Inputs: filter size, pets, dusty season. Output: change interval + .ics download. Hand-off: "Add a tune-up" link.
4. **ZIP checker** (`zip`). Confirms service area against `{{biz.zips}}`.
5. **Quote form** (`form`). Multi-step: symptom → system type → best time → contact. Pre-filled from tool hand-offs.

## Voice

Three sample sentences:
- "We're on the roof before the sun is."
- "If it can be fixed, we'll tell you what and how much before we touch anything."
- "After the haboob, the coil needs a rinse, not a replacement."

Five words never used: comfort, solutions, premium, guaranteed, affordable.