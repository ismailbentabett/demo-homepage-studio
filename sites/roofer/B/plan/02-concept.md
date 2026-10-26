# Concept — roofer-B · Squarecount Roofing · Fort Worth TX · light-led · PROOF & TOOLS

## 1. Three obvious concepts, rejected
1. **"Hail Defense HQ"**: red storm banner, hail-stone hero video, "Free inspection after the storm!" CTA.
   Obvious: it is competitor cliché §4.2 verbatim, and panic copy is the thing Fort Worth owners leave on.
2. **Clipboard with rubber stamps**: a cream work order, kraft paper texture, APPROVED / FIX rubber stamps.
   Obvious: the brief's seed taken literally, and stamps already live in plumber-B (Ledger Rule + Status Stamp) and concrete-A (Carbon-Copy Pour Ticket).
3. **Drone measurement dashboard**: satellite roof outline, SaaS cards, "AI roof report in 60 s".
   Obvious: every roofing lead-gen template; reads as software, not as a man with a tape on the roof.

## 2. Thesis
The page is the sample inspection report Squarecount hands you: one drawn roof plan **counts** its squares facet
by facet, and every section below is a numbered finding whose red-pen pin **drops** onto that plan and draws a
leader to its evidence.

## 3. Signature system: **Pinned Roof Plan** (`data-sw-signature="pinned-plan"`)
One SVG of a cut-up hip roof (7 facets, ridge, 2 valleys) drawn in 1.5px blueprint blue. Three marks only:
**pin** (red-pen 28px circle with mono number), **leader** (1px red hairline with a 4px dot end), **red-pen circle**
(hand-drawn SVG ellipse path, stroke 2px, around a verdict word). Defined once in 03-system.
- **Hero:** the full plan on the report sheet; facets fill with mono squares (e.g. `4.8 sq`), total tallies
  `SAMPLE ROOF · 29.4 SQ + 10% WASTE = 32.3`; 7 pins land; summary `FIX 3 · WATCH 4` with FIX red-circled.
  Each pin is a real anchor to its finding section (48px hit area).
- **Findings (services, F-01…F-07):** ≥ 1024px a 220px copy of the plan docks in the left margin column (sticky);
  on entering a finding its pin turns red, the leader draws to the section photo, the verdict gets circled.
  < 1024px: the pin + number sits in the section kicker, the leader is a short vertical rule into the photo.
- **Square count (estimator):** the plan becomes the tool: facets fill as the visitor sets footprint/shape/pitch;
  total in mono counts up. Variation: blue measurement dimension lines appear on facet edges.
- **Claim (Texas timeline):** 8 steps as pins on a straight horizontal leader (the plan "unrolled"); the deductible step red-circled.
- **Line items (prices):** each row is pinned to the finding number it prices (Leak repair → F-02), dotted leaders to the band.
- **Sign-off (reviews):** each note ends with a small pin + reviewer initials in a ticked circle ("signed off").
- **Footer:** the plan complete, every pin ticked, total squares line + `{{proof.guarantee}}` as the report's last line.
Variation per section is real: hero = fill + drop, findings = draw, estimator = count, claim = linear, prices = row keys, reviews = initials, footer = all ticked.

## 4. Type
- Display **Instrument Sans** (wdth 75→100, wght 400-700): at wdth 82 / 640 it reads as a report heading, firm, not shouty.
- Text **Public Sans** (US-government form sans): the voice of a document that holds up in front of an adjuster.
- Accent **Martian Mono** (wdth 87.5, wght 400/600): measurements, finding numbers, squares, line items, verdicts.
Registry: Instrument Sans 0× display, Public Sans 0× text, pair unique, neither in the roofer niche.

## 5. Palette — "Report White + Pencil Graphite + Red Pen + Blueprint Blue"
| Role | Hex | Use |
|---|---|---|
| ink (pencil graphite) | #1b1f24 | text on light |
| paper (report white) | #f6f4ef | page, t-paper |
| white | #ffffff | the report sheet, t-light |
| mid (carbon sheet) | #e8e5dc | t-mid band |
| muted | #585e66 | secondary text on light |
| accent (red pen) | #c41e3a | pins, verdicts, primary button, t-accent band |
| deep (graphite) | #1f252b | t-deep band, footer |
| signal (blueprint blue) | #1f5fbf | plan lines, dimensions, focus ring on light |
| red-pen light | #ff8a96 | accent words / pins on deep |
| blue light | #8fb8ff | focus + dimensions on deep |
| muted on deep | #a9b0b8 | secondary text on deep |

Contrast (node tools/contrast.mjs, real):
| fg | bg | ratio | verdict |
|---|---|---|---|
| #1b1f24 | #f6f4ef | 15.06 | body ✓ |
| #1b1f24 | #ffffff | 16.56 | body ✓ |
| #1b1f24 | #e8e5dc | 13.14 | body ✓ |
| #585e66 | #f6f4ef | 5.95 | muted ✓ |
| #585e66 | #ffffff | 6.54 | muted ✓ |
| #585e66 | #e8e5dc | 5.19 | muted ✓ |
| #c41e3a | #f6f4ef | 5.31 | accent words ✓ |
| #c41e3a | #ffffff | 5.84 | accent words ✓ |
| #c41e3a | #e8e5dc | 4.63 | accent words ✓ (tight: ≥ 15px only) |
| #1f5fbf | #f6f4ef / #ffffff / #e8e5dc | 5.54 / 6.09 / 4.83 | labels + focus ✓ |
| #ffffff | #c41e3a | 5.84 | button text, t-accent body ✓ |
| #f6f4ef | #c41e3a | 5.31 | t-accent body ✓ |
| #f6f4ef | #1f252b | 14.07 | body on deep ✓ |
| #a9b0b8 | #1f252b | 7.06 | muted on deep ✓ |
| #ff8a96 | #1f252b | 6.86 | accent words on deep ✓ |
| #8fb8ff | #1f252b | 7.70 | focus/dimensions on deep ✓ |
| #1b1f24 | #ff8a96 | 7.35 | button on deep (ink on light red) ✓ |
| #ffffff | #1b1f24 | 16.56 | ✓ |
| **#1b1f24 on #c41e3a** | | 2.83 | **FAIL: never text** |
| **#8fb8ff on #c41e3a** | | 2.91 | **FAIL: never** |
| **#ffd1d7 on #c41e3a** | | 4.27 | **FAIL for body: never** |
| **#c41e3a on #1f252b** | | 2.64 | **FAIL: no text, no pins on deep → use #ff8a96 on deep** |
| **#1f5fbf on #1f252b** | | 2.53 | **never on deep → use #8fb8ff** |
Focus ring: #1f5fbf on all light tones (≥ 4.83), #8fb8ff on deep (7.70), #ffffff on t-accent (5.84).

## 6. Hero family 14 — Document object
A white A4-ratio report sheet (title block, plan, 3 photo thumbs, summary) lies on a full-bleed close-up of shingle
granules (hero-B2, graded), rotated -1deg at ≥ 1024px, 0 on mobile. Cliché breaker: the sheet is not a picture of
a document, it IS the hero's HTML: the h1 is the report title, the CTAs are the "Request your report" sign-off
boxes, and the plan's pins are working anchors to the sections. The counting intro makes it a live object.
Library: family 14 used 4× (max 6 per tool), unique in niche (A=11, C=4).

## 7. Motion score
- **Intro (≤ 1.2 s, skippable):** sheet translateY(40px)→0 + opacity (520ms ease-out); pins drop (translateY -12px→0, scale .9→1, 60ms stagger); facet counts tally to 32.3 (600ms). Any wheel/key/touch → jump to end state. Text is readable from frame 0.
- **Story 1, draw (≥ 1024px):** margin plan sticky; ScrollTrigger per finding: pin fills red → leader stroke-dashoffset 1→0 (900ms story ease) → red circle path draws around the verdict (400ms). Reverses on scroll up. < 1024: pin pops in the kicker, no leader.
- **Story 2, count:** estimator facets fill with 60ms stagger and the total counts (tabular-nums) on every input change; numbers never animate under reduced motion.
- **Hover (one):** red-pen underline: 2px #c41e3a hairline scaleX(0→1) from left, 200ms, inside @media (hover:hover).
- **Reduced motion:** all pins placed, all leaders drawn, all circles drawn, totals final. No sticky plan transitions.
- Entrance: text rises (24px, 500ms), photos unclip (inset bottom→0). The claim timeline and FAQ stay still.

## 8. Tools
1. **Square count estimator** (`estimator`, #estimate): inputs house footprint (sq ft, slider 1,000-4,000, default 2,200) or bedrooms (2-5), roof shape (gable / hip / cut-up hip: waste 10/12/15%), pitch (walkable ≤ 6/12 ×1.12, steep ×1.25). Output: squares range (±5%) in mono on the plan + the matching Sample band from `{{proof.prices}}` (architectural shingle; toggle "add Class 4 upgrade" adds that line band; metal line shown as alternative). CTA "Send me the real count" → form prefill `squares`, `shape`, `pitch`, `service=Roof replacement`.
2. **Texas claim timeline** (`tabs`, #claim): 8 steps (storm → inspection → claim filed → adjuster meeting → first check minus depreciation → build → final invoice → depreciation released). Step 2 note: Texas contractors may not waive or pay your deductible (Insurance Code ch. 707). No promises. CTA "Book the inspection before you call your insurer" → prefill `service=Hail claim help`.
3. **ZIP checker** (`zip`, inside F-07 Local): `{{biz.zips}}` → "In our area: {{biz.city}} + {{biz.areas}}" → prefill zip.
4. **Quote form** (`form`, #contact, the "Request a report" cover sheet): step 1 what (inspection / leak / hail / replacement / other) + squares if prefilled; step 2 name, phone, ZIP; optional note. Honest demo success state.

## 9. Voice
- "Three bids, three roof sizes? We'll show you our count on paper, facet by facet."
- "Finding 3: split pipe boot over the garage. Fix. Everything else on that slope: watch."
- "We won't touch your deductible. Texas law says we can't, and we'd rather tell you now."
Never: "storm damage experts", "hassle-free", "premier", "peace of mind", "free inspection".
