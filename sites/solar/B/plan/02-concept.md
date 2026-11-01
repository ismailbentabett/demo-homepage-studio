# solar-B · concept

## Rejected (obvious)
1. **Savings dashboard.** Dark UI, big kWh counters, a gauge, "see your savings". Every solar CRM template does it, and
   it drifts toward bill-cut promises (banned by the house rules). Rejected: competitor default.
2. **Desert sunset hero + saguaro silhouette.** Orange gradient sky, panels in silhouette, "Tucson sun, your power".
   Rejected: sun-flare stock cliché (brief §4.3), and it competes with C's sun disc.
3. **Literal footnotes.** A newspaper article with superscripts and a grey footnote list at the end of each section.
   Rejected: the seed taken literally; reads as a blog, no wow, no structure.

## Thesis
**The page is the homeowner's electric bill after a skeptic marked it up: every figure is circled in copper, and a
leader line traces it to the line it came from.** (Arguable: the bill, not the roof or the sun, is the hero object.)

## Signature system: "Source Trace"
Primitive = copper **source ring** (24px circle, number inside, JetBrains Mono 500) + **leader line** (1.5px copper,
dotted 2/4, one right-angle elbow, SVG path drawn with stroke-dashoffset) + **Sources strip** (mono, numbered rows on a
hairline grid, closes every major section). `data-sw-signature` on the hero ring 1.
- **hero:** result "about 7-9 kW (sample)" carries ring 1; its leader line crosses the 50/50 seam onto the panel-cell
  photo and lands on a drawn callout "Source: your 12 months of kWh ÷ sample Tucson band 1,700-1,950 kWh per kW per
  year". Variation: the line *crosses the seam* (the split is the page's first annotation).
- **story "How a number gets made" (pinned at ≥ 1024):** 4 sheets: bill → roof tape → production band → range. Each
  step adds a ring and the leader *extends* from the previous source (chain lengthens 1→4).
- **prices:** each sample price row has a ring linking to "sample; your real numbers come from a site visit".
- **proof:** each review card has a small ring tag naming its service (variation: ring as a tag, no line).
- **tools:** checklist items tick into rings (empty ring → filled copper ring with check); light-reader result has a
  ring pointing to "models differ; we read the code on site".
- **second opinion:** a sample proposal sheet drawn in SVG, with 6 rings and copper margin questions (variation: ring
  as a review mark on someone else's paper).
- **footer:** the full page Sources index (rings 1-n in one list), the guarantee as the last line.
Hover/tap/focus a ring anywhere = its Sources-strip row highlights (sky bar) and vice versa.

## Type
- Display **Libre Franklin** 800, tracking -0.035em: Franklin Gothic is the face of American utility bills, forms and
  newspapers, sturdy and plain: the "plain watt" voice. Registry display uses: 1 (garagedoor-B), niche: 0.
- Text **Onest** 400/500/600: open, calm, readable at 18px on dark.
- Accent **JetBrains Mono** 500: ring numbers, Sources strips, kWh readouts, Sample tags. Tabular everywhere.

## Palette: "Monsoon Night + Bill-Paper + Meter Copper + Data Sky"
deep #15171A (night charcoal) · mid #22262B (inverter-housing grey) · ink-on-dark #F3EDE3 · paper #F1EBDF (bill paper)
· ink-on-paper #1A1C1F · accent #E08A52 (meter copper, dark tones) / #9A461A (copper on paper) · signal #8FB8D6 (data
sky, dark) / #2F5F82 (on paper) · muted #A9A49B dark / #5C5850 paper · rule #3A3F46 (shapes only).

| fg | bg | ratio (contrast.mjs) | use |
|---|---|---|---|
| #F3EDE3 | #15171A | 15.42 | body on deep |
| #A9A49B | #15171A | 7.24 | muted on deep |
| #E08A52 | #15171A | 6.77 | copper words/rings on deep |
| #8FB8D6 | #15171A | 8.54 | data text + focus on deep |
| #F3EDE3 | #22262B | 13.06 | body on mid |
| #A9A49B | #22262B | 6.13 | muted on mid |
| #E08A52 | #22262B | 5.74 | copper on mid |
| #8FB8D6 | #22262B | 7.24 | data/focus on mid |
| #1A1C1F | #F1EBDF | 14.38 | body on paper |
| #5C5850 | #F1EBDF | 5.96 | muted on paper |
| #9A461A | #F1EBDF | 5.41 | copper words/rings on paper |
| #2F5F82 | #F1EBDF | 5.74 | data text + focus on paper |
| #15171A | #E08A52 | 6.77 | primary button on dark tones (dark text on copper) + t-accent band text/focus |
| #FFFFFF | #9A461A | 6.43 | primary button on paper |
| #F1EBDF | #9A461A | 5.41 | text on copper-deep chip |
| #15171A | #8FB8D6 | 8.54 | highlighted Sources row |
| #E08A52 | #F1EBDF | **2.23 FAIL** | never: bright copper on paper (use #9A461A) |
| #3A3F46 | #15171A | **1.69 FAIL** | hairlines/grid only, never text |

## Hero family: 2 (50/50 split)
Left: kicker, h1, the 12-month size tool live in the hero. Right: graded panel-cell macro (duotone night/sky) with an
SVG overlay of drawn callouts. Cliché broken: the seam is not a neutral divider, it is the first leader line; the
right half is evidence being annotated, not a pretty roof, and the result on the left points into it.

## Motion score
- **Intro (≤ 1.1 s, never blocks):** h1 line-mask rise 700ms; at 300ms ring 1 scales .6→1 + fades in and its leader
  draws across the seam in 600ms; the default result counts up in 500ms. No-JS: everything static and visible.
- **Story 1 "chain" (draw):** pinned 4-sheet story; `--sw-p` draws the leader chain sheet to sheet, each ring pops as
  the line reaches it, sheets stack with 12px offset. Height `calc(4 * 55svh + 100svh)`; no pin < 1024 (stacked).
- **Story 2 "flash" (wipe):** at each section end the Sources rows wipe in left→right (60ms stagger) and the matching
  rings above pulse once (copper→sky→copper, 400ms).
- **Hover:** copper hairline underline scaleX 0→1 from left, 200ms; on rings, the linked row lights sky.
- **Reduced motion:** all lines drawn, all rings/rows visible, story as 4 static stacked sheets, no pin, no count.

## Tools
1. **12-month use → size range** (`estimator`): input annual kWh (or summer-bill size in words: small/medium/large →
   preset kWh); output kW range = kWh ÷ 1,950 … kWh ÷ 1,700 rounded to 0.5 kW + panel range at ~400 W; source line
   under result ("your bill + sample Tucson band; your real numbers come from a site visit"). Prefill form
   `service=Solar install`, `notes="kWh X → sample Y-Z kW"`.
2. **Questions to ask any solar seller** (`checklist`): 8 questions (who installs, who services, which inverter and
   where it hangs in the heat, what the estimate is based on, what happens at a re-roof, how tile is handled, who
   watches monitoring, who files utility approval); ticking reveals why it matters; print button. Prefill
   `service=Quote review`, `notes="N questions open"`.
3. **Inverter light reader** (`tabs`): light (green solid / green blink / red / orange / none) × time (morning /
   midday / night) → meaning + "can it wait" + hedge. Prefill `service=Inverters`, `notes=light+time`.
4. **ZIP check** (`zip`) against {{biz.zips}}, then **quote form** (`form`) multi-step: service → home and roof → contact.

## Voice
- "Ask any seller where their production number comes from. Ours comes from your bill, and we show you the line."
- "In summer we start at 6 am. Panels, inverters and crews all do better before the heat."
- "If a number in our proposal has no source, we redo the proposal."
Never: "savings", "free", "$0", "eco", "revolutionary".
