# appliance-C · Concept

## Rejected (obvious)
1. **Prairie hero + snowflake badges.** Wide field photo, "Serving Sioux Falls since…", snowflake icon cards per appliance. Every regional contractor template; also no hero-C photo exists in the library.
2. **The weather app.** Live-temperature widget and "cold snap alerts" driving the page. A gimmick any competitor could bolt on; it's about weather, not about what the house keeps cold.
3. **Household wall calendar, literally.** A 12-cell calendar grid with one appliance per month. The brief's seed taken literally; a template grid with no object and no hand.

## Thesis
The page is the masking-tape inventory stuck on the basement chest-freezer lid: every section is one dated line in pencil, and scrolling ticks the year off month by month until the last blank line is yours to fill in.

## Signature system: "Freezer-Lid Tape List"
A drawn masking-tape strip (torn ends, ruled lines, 0.6° skew) with a small-caps month in a left margin column, a Literata-italic entry, and a Caveat-style pencil tick (SVG stroke, stroke-dashoffset draw) when the line enters. Hook `data-sw-signature` on the year ribbon.
- **Hero:** h1 on the paper "lid"; below, the tape marquee of drawn month entries (OCT · pheasant opener / NOV · the quarter of beef / JAN · garage fridge / JUL · compressor in the heat / SEP · freezer checkup) with line vignettes. Variation: moving strip, ticks empty.
- **Year story (pinned ≥ 900 px):** Jan-Dec ribbon; each month's line is ticked and its drawn appliance vignette frosts (dusk-blue hatch) or warms (wheat hatch). Variation: tick + frost/warm.
- **Services:** 9 services as inventory lines "what it holds" (Chest freezer — the beef and the pheasant). Variation: tick box square, fills on hover/focus.
- **Prices:** sample prices as tape lines, pencil price in the right margin. Variation: tabular numbers, "Sample pricing" on a second smaller strip of tape.
- **Reviews:** notes tucked under the tape (paper card, town in small-caps margin). Variation: tick becomes pencil stars.
- **Form:** "the last blank line": an empty ruled tape entry, month = current month; steps write onto it. Variation: tick draws on submit.
- **Footer:** the tape torn off; "{{biz.short}} · {{biz.phone}}" is the final entry, ticked.

## Type
Display **Literata** (opsz 7-72, wght 600-700, italic for entries) · text **Work Sans** (400/500/600) · accent **Caveat** (pencil ticks and margin notes only, ≥ 22 px, never body, never the only carrier of a fact). A sturdy book serif with a warm italic reads like a careful household list; Work Sans keeps prices and the form plain; Caveat is the pencil.

## Palette: "Freezer-Lid Wheat + Barn Red + January Dusk"
| role | hex |
|---|---|
| ink | #2A2118 walnut ink |
| paper | #F3EBDA wheat paper · light #FBF7EE |
| mid / tape | #E4D6B8 straw tape |
| muted | #5E5243 |
| accent (action) | #8A1F2C barn red |
| deep | #1F2E3A January dusk · muted on deep #B9C3C9 |
| signal | #C9962E wheat gold |

Accent moved from #8E2B1E to #8A1F2C (hue clash with appliance-B #A8431C, check-unique).
Contrast (node tools/contrast.mjs, real output):
| pair | ratio | use |
|---|---|---|
| ink on paper | 13.32 | body |
| ink on light #FBF7EE | 14.77 | body |
| ink on tape #E4D6B8 | 10.99 | tape entries |
| muted on paper | 6.40 | meta |
| muted on tape | 5.28 | meta on tape |
| barn red on paper | 7.65 | links, focus ring (light tones) |
| barn red on light | 8.49 | links |
| barn red on tape | 6.31 | price notes |
| white on barn red | 9.07 | primary button |
| paper on barn red | 7.65 | t-accent text, focus on red |
| paper on deep | 11.72 | deep body |
| deep on paper | 11.72 | alt headings |
| #B9C3C9 on deep | 7.75 | muted on deep |
| wheat gold on deep | 5.22 | ticks/labels on deep, focus on deep |
| **wheat gold on paper** | **2.24 FAIL** | shapes only (hatch, tick fill); never words, never focus |

## Hero family 10: centered statement + marquee
Cliché: a marquee of stock photos under a slogan. Break: no photos at all; the marquee is the drawn tape inventory (single-weight SVG vignettes + month entries), the statement is about food and the season rather than service, and the hero is light paper, not a dark scrim.

## Motion
- **Intro (≤ 1.1 s):** h1 lines unmask with 70 ms stagger (text in DOM, visible without JS); the tape strip slides in from the right and starts a 60 s marquee; the first tick draws at 0.9 s. Any scroll / key skips to end state.
- **Story 1 "tick the year" (draw):** pinned ribbon, height `calc(12 * 22svh + 100svh)`; per month the tick draws and the vignette's frost/warm hatch crossfades. < 640 px: stacked month lines, IO tick on enter.
- **Story 2 "thaw clock" (dial):** freezer outline whose frost line drains from 48 h / 24 h as inputs change.
- **Hover:** pencil underline scaleX 0→1 from left, 200 ms; the only hover language.
- **Reduced motion:** all ticks drawn, marquee static (wraps to 2 rows), ribbon shown as a 12-line list.

## Tools
1. **Freezer thaw clock** (`estimator`): full / half full, lid shut / opened → "about 48 h / about 24 h if the lid stays shut (USDA guidance)" + "don't open it" → call / text.
2. **Garage fridge cold check** (`estimator`): month + garage °F → plain explanation (thermostat in the fresh-food side; many manuals list a ~50-60°F minimum room temp, typical, check yours) + kit $90-$160 Sample pricing → form prefill service = "Garage fridge winter fix".
3. **Repair-or-replace, light** (`estimator`): appliance + age (+ band from facts.proof.prices) → Worth fixing / Borderline / Probably replace (typical lifespans, 50% rule, labelled typical) → form prefill appliance + age.
4. **ZIP check** (`zip`) against facts zips.
5. **Quote form** (`form`, multi-step): appliance + symptom → model tag (number or "photo later") → time window → contact. Tools prefill via data attributes.

## Voice
- "A full chest freezer holds about two days with the lid shut. Don't check on it. Call us."
- "The garage got cold, so the fridge thinks it's done. The freezer side isn't."
- "If the repair costs more than the machine has left in it, we'll say so first."
Never: "state-of-the-art", "hassle-free", "same-day", "emergency", "all makes and models".
