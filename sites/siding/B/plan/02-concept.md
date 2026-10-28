# siding-B · Concept

## 1. Three obvious concepts, rejected
- **"Hartford's trusted siding pros."** Full-bleed sunny colonial, white sans h1, three service cards, logo row.
  Rejected: every competitor does it (brief §4.1, §4.2). A template.
- **Lab coat & clipboard.** A literal lab: beakers, test tubes, a "Siding Science" pun.
  Rejected: the brief's seed taken as costume. Cheap, and it hides the prices behind a gimmick.
- **Magazine cover with masthead serif.** Big Didone "FIELDTEST" masthead over a photo, with cover lines.
  Rejected: the standard family-6 move (cleaning-C, mechanic-C, plumber-C already did masthead covers).

## 2. Thesis
The page is a bound test report on four sidings: every section is a numbered report page, and every claim
is a reading on a five-cell bar that fills when you reach it, so the homeowner reads the result before the pitch.

(Facts list four materials: vinyl, fiber cement, cedar clapboard, engineered wood. So the h1 is "Four sidings,
five tests", never "we tested five". No insulated vinyl: it is not in facts.)

## 3. Signature system: "Five-Cell Reading"
Primitive: a row of 5 square cells (12×12 desktop, 10×10 mobile, 3px gap, 1.5px ink outline). Filled cells are
ultramarine. A mono reading sits on the right ("4/5", "23.5 sq", "$9–15"). Every bar sits under a report header row,
`TEST 03 · FIBER CEMENT · COLD & MOISTURE`, set in Martian Mono at wdth 87.5 between two hairlines.
- **Hero (cover):** a cover strip with 4 material lines. Each has an overall bar and a mono sample range; the cells
  fill in sequence on load.
- **Compare (the core, story 1):** 4 materials × 5 criteria (impact & hail, cold & moisture, upkeep, look,
  price/sq ft). Each row's bar fills as the row enters. The price row comes from facts.proof.prices. Scores are
  labelled "Sample readings", because they are an opinion, not a lab fact.
- **Services ("Results"):** 8 cards. Here the bar is a scope scale (1 cell = one course … 5 = the whole house).
- **Squares calculator:** the result is a bar of squares (each cell = 5 squares, with a partial fill for the last cell).
- **Field notes (reviews):** header row `FIELD NOTE 04 · NEWINGTON · REPAIRS`. The stars are 5 cells + "5/5".
- **Price sheet:** each price line has a range bar on one shared $0–24/sq ft scale (the cells become a ruler).
- **Footer sign-off:** a last header row, `END OF REPORT · NEXT STEP: MEASURE YOUR HOUSE`, with all 5 cells filled.
Hook: `data-sw-signature="five-cell"` on the compare table. `--sw-p` (0→1) drives the fill count.

## 4. Type
- Display: **Red Hat Display** 800/900 (0 uses in the registry). Confident geometric-humanist; it reads like a report
  title, not a brochure. Tracking -0.03em at 900.
- Text: **Onest** 400/500/600. Calm and open; legible for long comparisons.
- Accent: **Martian Mono** (wdth 87.5 for readings, 100 for big numerals). Used for every reading, score, price,
  measurement and test number: an instrument voice. 0 uses in the registry. The pair is unique.

## 5. Palette: "Report Bond + Graphite + Result Ultramarine + Highlighter"
| role | hex |
|---|---|
| paper | #F5F4F0 (report bond) · sheet #FFFFFF |
| mid | #E6E3DB (ruled band) |
| ink | #16191D |
| muted | #4A5058 |
| accent (results, links, buttons) | #2D3BC8 (hover/pressed #1F2AA0) |
| deep | #141B33 |
| signal (highlighter: shapes/marks only on light) | #F2C230 |
| rule | #8A8F98 (rules only) |

Contrast (real output of tools/contrast.mjs):
| pair | ratio | use |
|---|---|---|
| #16191D / #F5F4F0 | 16.02 | body |
| #16191D / #FFFFFF | 17.63 | body on sheets |
| #16191D / #E6E3DB | 13.75 | body on mid |
| #4A5058 / #F5F4F0 | 7.39 | muted text |
| #4A5058 / #E6E3DB | 6.34 | muted on mid |
| #2D3BC8 / #F5F4F0 | 7.42 | accent text, focus ring on paper |
| #2D3BC8 / #FFFFFF | 8.16 | accent on white |
| #2D3BC8 / #E6E3DB | 6.36 | accent on mid |
| #FFFFFF / #2D3BC8 | 8.16 | primary button, t-accent text |
| #FFFFFF / #1F2AA0 | 11.06 | button hover |
| #C9CEDB / #2D3BC8 | 5.18 | muted on t-accent |
| #F2C230 / #2D3BC8 | 4.87 | focus ring on t-accent |
| #F5F4F0 / #141B33 | 15.45 | deep text |
| #B9BFCC / #141B33 | 9.22 | deep muted |
| #A9B4FF / #141B33 | 8.63 | accent on deep, filled cells on deep |
| #F2C230 / #141B33 | 10.15 | focus ring on deep |
| #16191D / #F2C230 | 10.52 | ink on a highlighter mark |
| #F2C230 / #F5F4F0 | 1.52 | FAIL: never text, never a ring on light; only a highlighter fill behind ink |
| #8A8F98 / #F5F4F0 | 2.95 | FAIL as text: rules/hairlines only |

## 6. Hero family: 6, editorial cover (siblings: A 11, C 3; 4 of 6 uses in the library)
How it breaks the cliché: no masthead serif and no full-bleed photo with cover lines on top. It is a **report cover
sheet**: a ruled 12-col grid with a visible margin column that carries "No. 01". The h1 sits on paper in the left 7 cols.
The right 5 cols hold a tall cropped siding close-up framed like a specimen plate, with a mono dimension line over it
("REVEAL ≈ 4 IN.", tick marks). The 4-line cover strip with Five-Cell bars and sample $/sq ft runs across the bottom.

## 7. Motion score
- **Intro (≤ 1.0 s, never blocks):** the cover strip's 4 header rows wipe in (clip-path left→right, 60ms stagger),
  then each bar fills cell by cell (40ms/cell). The text is in the DOM from first paint; any scroll or keypress jumps
  to the final state.
- **Story 1, fill (compare):** each criterion row's cells fill when the row reaches 80% of the viewport. The leading
  material for each criterion gets a highlighter mark behind its reading.
- **Story 2, stack (method, ≥ 900px):** 4 report pages ("Measure · Tear-off & sheathing · Wrap & flashing · Courses &
  trim") stack and lift like sheets on a clipboard. Pinned, height `calc(4 * 55svh + 100svh)`. Under 640px: stacked
  cards with a clip reveal.
- **Hover:** one language. A 1.5px ultramarine hairline grows under the item (scaleX 0→1, left origin, 200ms).
- **Reduced motion:** every bar shows its final value, the sheets are a static stack, nothing types in.

## 8. Tools
| tool | inputs | output | kit | hand-off |
|---|---|---|---|---|
| Squares calculator | perimeter ft (or W×D footprint), stories 1/1.5/2/3, gable ends 0–4, windows+doors | wall area, squares with 10% waste, a sample range per material (from facts.proof.prices only, "Sample") | `estimator` | "Book a measure visit with these numbers" → form `squares`, `material` |
| Material compare | pick 2–4 materials / criterion tabs | 5-criterion Five-Cell table + sample price | `compare` + `tabs` | "Price this one" → form `material` |
| Elevation picker | click front / back / left / right / gable on a drawn colonial | list of walls + count | `hotspots` | form `walls` |
| ZIP checker | ZIP | in area / nearest town | `zip` | form `zip` |
| Quote form | 3 steps: job & material → walls/squares → contact | sent state | `form` | — |

## 9. Voice
- "Fiber cement reads 4 of 5 on impact. It is also the heavy one, and that matters on a long ranch wall."
- "We measure every wall, then give you the squares and four prices side by side."
- "If the sheathing under your old siding is soft, you see the per-sheet price before we replace it."
Never: lifetime, premier, act now, storm special, best-in-class.
