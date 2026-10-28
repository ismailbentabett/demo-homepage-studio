# windowdoor-A · Concept

## 1. Three obvious concepts, rejected
1. **"Hurricane-ready Sarasota"**: storm-sky hero, wind-speed counter, "be ready by June 1" banner.
   Obvious: every competitor sells fear (brief §4.5); B owns the order-by timeline anyway.
2. **"Gulf-view luxury glass"**: floor-to-ceiling glass living room, white sofa, airy sans, brand-logo strip.
   Obvious: the stock template of the trade (brief §4.2-4.3); nobody here has that room.
3. **"Window schedule" taken literally**: a grey spreadsheet page with a table hero.
   Obvious: the brief seed as a literal; reads as a gimmick and a document, not a house.

## 2. Thesis
The page is the architect's window schedule for one Sarasota house: every section is an opening that gets a hexagon
tag, a jamb-section frame and a row that fills in the schedule as you read, so the quote you get looks exactly like
the page you just scrolled.

## 3. Signature system: "Opening Schedule" (hex tag + jamb section + filling schedule strip)
Three primitives drawn once (03-system): `.tag` (flat-top hexagon, 2px navy stroke, Spectral 600 "W1", string = 1px
line to a pin), `.jamb` (SVG frame: head with drip, two jambs, sloped sill + sill pan, 1.5px navy lines on sand), and
`.sched-row` (tag | opening | size | glass | status, 1px rules, mono numbers). `data-sw-signature` on the schedule strip.
- **hero**: jamb frame draws round the photo; tag "W1 · 36 × 60 · impact single-hung · Sample" hangs off the top-right
  corner on its string; the h1 overlaps the left jamb.
- **process (story)**: 6 openings W1 Measure / W2 Order / W3 Remove / D1 Set / W4 Seal / W5 Inspect; each step's tag
  sits in the margin rail; the sticky strip's row for that step ticks open → teal check. Variation: the size column
  fills with the three-way measure (top / mid / bottom → "use the smallest").
- **services**: each service is a tagged opening on a sand card; window services W-tags, door services D-tags
  (hexagon for W, rounded-square for D, as on real drawings).
- **schedule (proof/prices)**: the full schedule sheet, rows = `proof.prices` with tags W/SD/D/G, columns size note,
  unit, sample range, "Sample" stamp; guarantee printed as the sheet's general note "N1".
- **reviews**: each review is clipped to the sheet as a "field note" tagged with the opening it concerns
  (Carol B. → "W1-W14", Anita S. → "SD1"), not a star carousel.
- **tools**: Measure-your-opening diagram uses the same jamb section with dimension strings; output is a schedule row.
- **contact**: the form is "your blank schedule": step headers are tags 1-3.
- **footer**: closing row "W5 · Inspection · passed" style line + "Schedule closed. Call {{biz.phone}}".
Wow moment: the strip filling on scroll, then reappearing complete as the price sheet.

## 4. Type
Display **Spectral** (600/700, italic 400 for the tag labels' notes): a sharp transitional serif that reads like
lettering on an architectural drawing title block. Text **Onest** (400/500): calm, open humanist-leaning sans for
long plain explanations. Accent **JetBrains Mono** (500, 13-15px) only for sizes, dimensions and tabular prices.
Spectral 0 uses in registry; pair unique (check-unique clean).

## 5. Palette: "Sarasota Coral + Sea-Glass Teal + Drafting Navy + Shell Sand"
| role | hex |
|---|---|
| ink / deep (drafting navy) | #14243A |
| paper (shell sand) | #F6EFE4 |
| light (card white) | #FFFBF4 |
| mid (shell sand deep) | #EFD9C4 |
| signal / color field (Sarasota coral) | #E8826A |
| accent (sea-glass teal, text-safe) | #17605B |
| sea glass (on navy only) | #9FD3C9 |
| muted on light tones | #4A5568 |
| muted on coral | #2E2A33 |
| muted on navy | #B9C1CC |

Contrast (tools/contrast.mjs, real output):
| fg on bg | ratio | use |
|---|---|---|
| #14243A on #F6EFE4 | 13.68 | body, h, focus ring on paper |
| #14243A on #FFFBF4 | 15.15 | body on cards |
| #14243A on #EFD9C4 | 11.45 | body on t-mid |
| #14243A on #E8826A | 5.83 | body + focus ring on coral band |
| #2E2A33 on #E8826A | 5.23 | muted on coral |
| #4A5568 on #F6EFE4 | 6.58 | muted on paper |
| #4A5568 on #FFFBF4 | 7.29 | muted on light |
| #4A5568 on #EFD9C4 | 5.51 | muted on mid |
| #17605B on #F6EFE4 | 6.42 | accent words/links on paper |
| #17605B on #FFFBF4 | 7.11 | accent on light |
| #17605B on #EFD9C4 | 5.38 | accent on mid |
| #FFFFFF on #17605B | 7.34 | button text on teal |
| #F6EFE4 on #14243A | 13.68 | body on t-deep, button text on navy |
| #FFFFFF on #14243A | 15.63 | — |
| #9FD3C9 on #14243A | 9.40 | accent words + focus ring on t-deep |
| #B9C1CC on #14243A | 8.60 | muted on t-deep |
| #E8826A on #14243A | 5.83 | coral words on navy (tags, kickers) |
| #14243A on #9FD3C9 | 9.40 | navy text on sea-glass button (t-deep) |
| **#17605B on #E8826A** | **2.73 FAIL** | never: no teal text or teal ring on coral |
| **#E8826A on #F6EFE4** | **2.34 FAIL** | shapes/rules only (coral sill line, tag fill) |
| **#F6EFE4 on #E8826A** | **2.34 FAIL** | never: no light text on coral |
| **#9FD3C9 on #F6EFE4** | **1.45 FAIL** | decorative fills only |

## 6. Hero family 5: offset framed photo
Photo (hero-A2: gloved hand adjusting a window's operator arms, Gulf daylight) at cols 6-12, offset down 48px,
inside the drawn jamb section (8-14px sand frame + navy section lines, sloped sill shelf at the bottom). h1 on
cols 1-7 overlapping the left jamb by ~1 column, on a paper backing so it reads. Cliché broken: the frame is a
technical drawing of a real window jamb (head drip, sill pan), not a polaroid border, and the hanging tag turns the
photo into "opening W1". At 320-390: photo stacks under the h1, frame keeps, overlap becomes the tag crossing the
top edge only.

## 7. Motion score
- Intro ≤ 1.1s: frame draws (stroke-dashoffset head → jambs → sill), tag swings -8° → 0 on its string; h1 lines
  rise; skippable (any scroll/keypress completes it); text readable at frame 0.
- Story 1 (verb: **tick**): #process pinned ≥ 640px, height calc(6*55svh + 100svh); the strip row of the active
  opening ticks to a teal check and its size counts in. < 640: stacked cards with clip reveal.
- Story 2 (verb: **draw**): schedule sheet rules draw left→right, 60ms stagger per row, once.
- Hover: teal pencil hairline under links/rows, scaleX 0→1 from left, 200ms; rows tint to #FFFBF4.
- Reduced motion: frame and tag drawn, strip shows all rows checked, sheet fully ruled; no pin.

## 8. Tools
1. **Measure your opening** (kit `checklist` + small app.js calc): inputs width top/mid/bottom, height
   left/center/right (inches); output smallest W × H as a schedule row "W? · 35½ × 59¾ · to text us" + "we measure
   again before ordering"; jamb diagram with dimension strings. Hand-off: prefill form field `size`.
2. **Glass by wall direction** (kit `tabs`): N / E / S / W tabs + shade toggle; output plain low-E/SHGC advice
   (west/south: lower SHGC helps; "the label lists the numbers"). Hand-off: prefill `notes` "West wall, afternoon sun".
3. **ZIP checker** (kit `zip`, {{biz.zips}}): in area → "We measure in {{area}}" + prefill ZIP.
4. **Quote form** (kit `form`, 3 steps: openings & type → size/photo note → contact), once at #contact.

## 9. Voice
- "We measure every opening three ways and use the smallest number."
- "Your quote is a list: W1, W2, D1, each with its size, glass and price."
- "If we find something on install day, we show you before anything changes."
Never: "premium", "state-of-the-art", "hurricane-proof", "transform", "unbeatable".
