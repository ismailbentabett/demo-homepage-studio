# Concept — pinestraw-C (Two Seasons Pine Straw)

## 1. Three alternatives, rejected

1. **Seasonal photo carousel.** Hero swaps spring/fall photos automatically. Rejected: autoplay carousels are banned, and a slider is a template move that says "lawn care" not "Marietta almanac."
2. **Red-clay texture background with white type.** A literal dirt texture behind everything. Rejected: reads as a gimmick, fails contrast on mobile, and no sibling uses texture but it would dominate instead of supporting the two-season story.
3. **Dogwood-branch frame around every photo.** A botanical border as the signature. Rejected: too decorative, fights the content at small sizes, and the brief's seed asks for an almanac structure, not a floral motif.

## 2. The thesis

The site is a two-page Marietta almanac: SPRING and FALL halves share one kidney-shaped bed mask, and a season ribbon at the top turns from dogwood cream to oak rust as you scroll, marking which half of the year each section belongs to.

## 3. The signature system

**The two-page almanac.** A horizontal ribbon pinned at the header shows the current season name and a color that interpolates from dogwood cream (#F5F0E6) to oak rust (#B45A2C) based on scroll position. Each section carries a `data-season="spring|fall"` attribute; the ribbon highlights the active one. The kidney-shaped bed outline from the hero returns as the frame for season photos, area map cutout, and review portraits. The ribbon appears in: hero (static), #seasons (interactive), #area (map mask), #reviews (portrait mask), #contact (form accent).

## 4. Type

- Display: **Newsreader** (old-style serif with italics for season names and street lines, like a town almanac). Preload 600 weight.
- Text: **DM Sans** (quiet humanist sans for body, labels, tool UI).
- Pair rationale: Newsreader's italic warmth carries the almanac voice; DM Sans stays invisible in tool UI and captions. Neither is used by pinestraw-A or pinestraw-B (checked against design-registry).

## 5. Palette

Family: **loblolly green + red clay + dogwood cream**.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep | #1B3A2E | cream #F5F0E6 | 11.2 | body on deep bands, reversed type |
| cream | #F5F0E6 | deep #1B3A2E | 11.2 | paper, body on light |
| clay | #B45A2C | cream #F5F0E6 | 4.6 | accent words, season ribbon fall state, buttons on cream |
| clay-ink | #8A3F18 | cream #F5F0E6 | 7.1 | accent words on light, hover states |
| bark | #3D2B1F | cream #F5F0E6 | 9.8 | muted ink on light, rules |
| spring | #6B8F5E | deep #1B3A2E | 4.5 | spring ribbon state, tags on deep |

All ratios computed with `tools/contrast.mjs`. Body text ≥ 4.5:1 on every band; clay on cream passes 4.6 for large text and buttons.

## 6. Hero family

**11 — Type over photo with right-side scrim.** Full-bleed hero photo of a pine straw bed under a blooming dogwood with a gradient scrim that fades from transparent on the left to deep on the right. The h1, lead, proof line and CTA sit right-aligned in the dark column where contrast is guaranteed; the photo shows through on the left half. Unique in the pinestraw niche (A uses sticky-photo, B uses mosaic).

## 7. Motion score

- **Intro:** Dogwood petals drift across the kidney mask once as the photo unclips inside it (≤ 1.2 s, skipped under reduced motion). The h1 is readable before the animation starts.
- **Scroll story 1:** Crossing the middle of the page, the season ribbon turns from cream to rust, the bed-shape photo swaps from spring bloom to fall leaves inside the same mask, and the dates on the ribbon change. Pinned only ≥ 640px; stacked cards with clip reveal on phones.
- **Scroll story 2:** The refresh clock tool updates its output live as the visitor picks month/sun/shade; no pin, just a staggered reveal of the result line.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms at 85% viewport); images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). No third pattern.
- **Hover:** Hairline underline grows `scaleX(0→1)` from left, 200ms, on links and card titles. Only under `@media (hover:hover)`.
- **Reduced motion:** All stories become static layouts; ribbon shows both season names side by side; intro does not run; reveals are instant.

## 8. Tools

1. **Refresh clock.** Inputs: month of last spread (select), sun or shade (toggle). Output: "Top-up in {month}" and "Next full refresh: {season} {year}". Hand-off: "Put me on that week" button pre-fills #contact with service = Spring/Fall refresh and notes = the output month.
2. **HOA deadline planner.** Inputs: HOA walk-through date (date picker), number of beds (select 1–20 / 20+). Output: "Book by {date}" and "Crew day estimate: {n} days". Hand-off: "Lock in that date" pre-fills #contact with service = HOA beds and notes = the date.
3. **ZIP checker.** Standard kit module. Answers in aria-live region; yes offers the form with ZIP prefilled.
4. **Multi-step quote form.** Steps: Season (spring/fall/HOA) → Beds (count + slope) → When (date or window) → Contact. Honest thank-you: "Thanks, {name}. In your version this goes straight to Corinne's phone and inbox."

## 9. Voice

Three sentences in the site's voice:
- "Spring for the dogwoods, fall before Thanksgiving."
- "We edge first, then spread, then blow the walks clean."
- "Your HOA walk-through is the second week of April; we have you on the calendar for the week before."

Five words never used: guaranteed, affordable, professional, experienced, quality.