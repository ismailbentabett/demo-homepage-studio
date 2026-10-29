# siding-B · Blueprint (12 bands; padding alternates T/N/L)

Every band opens with the margin page number (`.pg-no` "p. 01"…) and a `.hdr-row`. The Five-Cell `.reading` is the
only score mark on the page.

| # | id | tone | pad | layout | purpose / objection | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|---|
| 0 | header | t-paper | — | bar | call in 1 tap | wordmark `{{biz.short}}`, links #compare #squares #prices, `tel:{{biz.phoneE164}}`, "Book a measure visit"→#contact | — | `open-now` chip (mono) | none |
| 1 | hero | t-paper | hero `min-height:calc(100svh - var(--header-h))` | cover (7/5 split + base strip) | first 5 s: trade + town, price, how to start | kicker hdr-row `REPORT No. 01 · {{biz.city}}, {{biz.state}} · SIDING`; h1 "Which siding for a {{biz.city}} house? Four sidings, five tests."; lead 1 line; btns "Measure my house"→#squares, "Call {{biz.phone}}"; proof line hours · 8 towns · 4.9 (88) SAMPLE; **cover strip**: 4 rows (Vinyl / Fiber cement / Cedar clapboard / Engineered wood) each `.reading` overall + mono `$6–12 /sq ft` from `{{proof.prices}}` + SAMPLE | `hero-B3` plate | `data-sw-intro` | header rows wipe, cells fill (≤1.0 s) |
| 2 | compare | t-light | L | table (sticky first col; scroll-snap < 640) | "vinyl looks cheap", "which for my house" | 4 materials × 5 criteria: Impact & hail · Cold & moisture · Upkeep · Look · Price/sq ft (from facts) ; SVG swatch per material; leading cell highlighter; "Price this one" per column → form `material`; SAMPLE READINGS tag + note "readings are our field judgement, prices are sample ranges" | drawn swatches | `data-sw-signature="five-cell"`, `data-hook="compare"`, `tabs` (criterion filter on mobile) | **story 1 fill**: rows fill on enter |
| 3 | break | t-deep (photo) | 0 | full-bleed break `.break` | breath; real wall | caption row PLATE 02 | `hero-C1` | — | clip-path unclip |
| 4 | squares | t-mid | N | split 5/7 (form left, live diagram right) | "how much siding do I need" | inputs (perimeter or W×D, stories, gables, openings) → wall sq ft, squares +10% waste, squares `.reading` (1 cell = 5 sq), 4 sample ranges (area × facts $/sq ft); btn "Book a measure visit with these numbers"→#contact prefill | drawn elevation diagram | `data-hook="estimator"` | numbers count, diagram walls clip in |
| 5 | method | t-paper | L | stack (pinned ≥ 900, `calc(4*55svh + 100svh)`; cards < 640) | "they'll cover rotten wood", "weeks in plastic" | 4 report pages: Measure every wall · Tear-off & sheathing check (soft sheets priced per sheet before replacement) · Wrap & flashing at every opening · Courses & trim; each page a `.reading` as progress (1/4…4/4) | — | `data-hook="stack"` | **story 2 stack** |
| 6 | services | t-light | T | grid 4×2 (2×4 tablet, 1 col phone) | all services from facts | 8 "result sheets": `{{services[i].name}}`, blurb, scope `.reading` (Repairs 1-2 cells … Vinyl re-side 5) | — | hover hairline | text rise, 60ms stagger |
| 7 | elevation | t-accent | N | split 6/6 (drawing / list) | "I only want two walls done" | drawn colonial with 5 hotspots (front, back, left, right, gable); selected list + count; btn "Add these walls to my quote"→#contact `walls` | SVG | `data-hook="hotspots"` | drawing strokes draw |
| 8 | prices | t-paper | T | ledger list | "no idea what it costs" | 5 lines from `{{proof.prices}}` item · from–to · unit · note; range bar on one shared $0–24 scale (repair line uses its own $ scale, labelled); honest limits: sheathing priced after tear-off; pre-1978 lead-paint note; SAMPLE | — | — | none (quiet) |
| 9 | reviews | t-mid | N | rail (scroll-snap, 3 visible desktop) | trust | 7 field notes `FIELD NOTE 0n · {{town}} · {{service}}`, star cells `.reading`, text, name; header 4.9 · 88 SAMPLE; guarantee line `{{proof.guarantee}}` | — | `data-hook="rail"` | cells fill |
| 10 | area | t-light | T | list 2-col (towns+ZIP / hours+FAQ) | "do you come to me", insurance, mess, lead | `{{biz.areas}}`, ZIP checker, hours table + open-now, licence `{{proof.license}}`, insured; FAQ 5 (insurance: we write scope + photos, you talk to insurer; cleanup; how long; lead paint pre-1978; rotten sheathing) | — | `data-hook="zip"`, `details` | none |
| 11 | contact | t-deep | L | split 5/7 | conversion | h2 "Next step: measure your house."; 3-step form (job & material → walls/squares/ZIP → name, phone, email); prefill from #squares #compare #elevation #area; tel + sms beside | — | `data-hook="form"` | text rise |
| 12 | footer | t-paper | T | sign-off row + columns | sign-off | hdr-row `END OF REPORT · NEXT STEP: MEASURE YOUR HOUSE` with full `.reading`; NAP tokens, hours, `{{demo.disclaimer}}`, `[[credits]]` | — | — | none |

Rhythm check: tones paper, light, deep(break), mid, paper, light, accent, paper, mid, light, deep, paper → never 3 alike,
the dark bands (3, 11) don't touch, one deep + one accent band, a `.break`, 7 hooks + signature, neighbouring layouts differ.
Mobile: the sticky bar (Call · Text · Quote) is always on; the hero cover strip collapses to 4 compact rows under the buttons
(the plate drops below the strip at 390). There is no pin under 640.

## Builder notes (build, fast)
- Squares calculator outputs squares only and sets them beside the sample per-sq-ft rates; it never multiplies a dollar total (DEMO-RULES: prices only as sample ranges).
- Elevation picker uses native checkboxes (Gable ends, Left, Front, Right, Back) rather than hotspots: works with JS off and keyboard; the list prefills the form's walls field.
- Form is 4 steps: Material · Walls and squares · Where and when · Your details.
- Method stack pins only at ≥ 900px (story height n·55svh + 100svh); below that sheets reveal by IO, content visible without JS.
- Hero photo keeps object-position 22% 45% at every width so the house number stays out of frame; on < 1100 the cover strip sits before the plate so the signature reads in the first screen.
- Highlighter #F2C230 used only as a fill behind ink text (best-in-row chips, checkbox ticks, focus ring).
- Media: hero-B3 and hero-C1 both "approved" in the niche manifest at final check.

## Open issues
- None blocking. Checks clean (static + render, 0 warnings).

## Round 1
Elevated photo + motion: the photos became the report's specimens (4 cropped lap plates in #compare, each carrying its five-cell reading and typical-reveal gauge, keys hero-C3-2 / hero-B3-3 / hero-B3-2 / hero-C1-3, none used twice), and the squares calculator now drives the price sheet (Per sq ft ↔ My house toggle, auto-switches on scroll-in, bars re-scale via registered --a/--b, totals count up). Also fixed: empty frames in full-page captures (photos decode sync, no reveal/filter/blend layer on plates), hours list single column under 560px, services unrolled into 8 token cards (ruled list on phones, material swatches, ultramarine measure-visit card), method sheets get a cross-section drawing and a clean stack, the mobile clip reveal is gone (so no gap), the ruler glyph is now an aria-hidden SVG on primary CTAs only, and the mono labels were thinned per copy-1.
