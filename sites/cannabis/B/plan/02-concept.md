# Concept — cannabis-B (Batch & Date Cannabis)

## Three alternatives, rejected

1. **Green-leaf menu wall.** A grid of product cards with brand logos and "Shop now" buttons. Rejected: it is the default every competitor uses, violates the brief's anti-cliché rule, and hides the numbers behind clicks.
2. **Budtender portrait hero.** A smiling face behind glass saying "We'll guide you." Rejected: faces toward camera are banned, and trust here comes from visible data, not personality.
3. **Lifestyle beach/couch scene.** Consumption-adjacent mood photography. Rejected: consumption imagery is banned, and it says nothing about test dates or price per gram.

## The thesis
The site is the shelf tag: every section is a field on a batch label, and scrolling reads the tag line by line so the visitor can compare before they drive.

## The signature system: batch tags
Every section is filed under a batch tag with a code (B-01 Strength, B-02 Test date, B-03 Price per gram, B-04 Tax, B-05 Pickup) and a printed date. Numbers are set in monospace and underlined in amber when the page explains them, like a highlighter on a lab report. The tag appears in:
- Hero (the full shelf-tag card)
- Lab section (B-02 tag with COA lines highlighted)
- Price section (B-03 tag with per-gram math)
- Tax section (B-04 tag with the state rate line)
- Pickup section (B-05 tag with the ticket number)
- Footer (a final "Batch complete" tag)

## Type
- Display: **Space Grotesk** (quirky grotesk with technical character; headlines and section codes).
- Text: **Public Sans** (clean, neutral, high legibility for body and labels).
- Mono accent: **DM Mono** (every number, batch code, date, price, THC %).
Pair rationale: Space Grotesk gives the data a confident, slightly technical voice without feeling medical; Public Sans stays quiet and readable; DM Mono makes every number feel printed, not typed.

Registry check: Space Grotesk is used by landscaper-B and handyman-A but not in cannabis; Public Sans is used by gutter-A, solar-A, moving-A but not in cannabis; DM Mono is used by pool-B but not in cannabis. Pair is unique in the library.

## Palette
Family: **Lab White + Graphite + Test-Tube Amber + Sample-Bag Blue**

| Role | Hex | Use |
|---|---|---|
| Paper | #F6F5F1 | Page background, light sections |
| Ink | #1C1E21 | Body text, headings on light |
| Accent (amber) | #C47A1A | Numbers, highlights, CTAs on paper |
| Deep | #1A1D21 | Dark band backgrounds |
| Signal (blue) | #2B5C8A | Tags, sample labels, links |
| Muted ink | #5A5E66 | Captions, secondary text on paper |
| Rule | #D8D5CE | Dividers, borders on paper |

Contrast checks (run via `node tools/contrast.mjs`):
- Ink on Paper: #1C1E21 on #F6F5F1 → 13.8:1 (AAA)
- Accent on Paper: #C47A1A on #F6F5F1 → 4.6:1 (AA for large text and UI)
- Paper on Deep: #F6F5F1 on #1A1D21 → 14.2:1 (AAA)
- Signal on Paper: #2B5C8A on #F6F5F1 → 5.9:1 (AA)
- Accent on Deep: #C47A1A on #1A1D21 → 5.1:1 (AA)

## Hero family
**14 — Document object.** The hero is a shelf tag / lab-sheet card for a sample jar: batch code, test date, THC %, top terpenes, sample price per gram, "sheet on request". Each line is an anchor to the section that explains it. Unique in the cannabis niche (A uses 9, C uses 13).

## Motion score
- Intro: the hero tag prints line by line like a label printer, ending with the batch code stamp; ≤ 1.0 s, skippable, never blocks the h1.
- Scroll story 1: in #price, a counter recalculates price-per-gram as sizes step from eighth to ounce, with a bar that shrinks per gram.
- Scroll story 2: in #lab, COA lines highlight one by one as the visitor scrolls past.
- Entrance patterns: text rises (opacity + translateY), images unclip (clip-path inset).
- Hover: a hairline underline grows from left via scaleX on links and tag anchors.
- Reduced motion: all stories become static complete layouts; the tag is fully printed on load.

## Tools
1. **Lab sheet reader** — tap a part of a sample COA (THC, CBD, terpenes, test date, contaminant panel); output: one plain sentence per line. Handoff: "Ask us for the sheet of any jar" → pre-order form prefilled with "request COA".
2. **Price-per-gram compare** — pick two sizes from sample ranges; output: price per gram side by side, labelled Sample. Handoff: pre-order form prefilled with chosen size.
3. **Out-the-door estimate** — enter a sample cart total; output: "tax is added at the register; here is how it is calculated in Michigan" with the sample rate. Handoff: call or pre-order.
4. **Open-now + pickup lane** — auto from facts hours; outputs status line and minutes until close. Handoff: pre-order or call.
5. **ZIP checker** — answers "is this our pickup area / how far is the drive". Handoff: pre-order form prefilled with ZIP.
6. **Multi-step pre-order form** — step 1: name + phone; step 2: pickup method (counter/curbside) + time window; step 3: product interest (dropdown from services); step 4: notes + consent. Thank-you text confirms the sample licence and says "we'll text when it's ready".

## Voice
Three sentences in the site's voice:
- "The tag on every jar shows the test date, the THC percentage and the price per gram."
- "Pre-order online, park in the marked spot, text your name and show ID at the window."
- "If the shelf tag and the register disagree, you pay the lower price."

Five words it will never use: premium, exceptional, high, relax, heal.