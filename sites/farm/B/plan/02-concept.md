# Concept — farm-B (Halfbushel Farm)

## Three rejected alternatives
1. **Chalkboard menu.** A dark chalk-on-slate board listing today's crops. Rejected: every farm site does chalk; it reads as a restaurant menu, not a working stand, and fights the light-led brief.
2. **Woven basket hero.** A styled basket of perfect produce with script "From our family to yours." Rejected: exactly the cliché in brief §4; stock-basket is the #1 reason homeowners leave in 5 seconds.
3. **Field-status traffic light.** A red/yellow/green dot beside each crop. Rejected: too app-like, no texture, doesn't carry weight/date/price, and duplicates the tool without adding craft.

## The thesis
The site is the farm stand's tagging table: every fact arrives as a string-tied manila crate tag punched at the top-left, carrying status, weight, date checked and sample price in mono type. Scrolling flips tags to their "how we know" side. The contractor sees an information system nobody else has; the homeowner sees answers they can hold.

## The signature system: Crate Tag
A CSS primitive `.tag` shaped like a manila tag (rounded corners, punched hole via radial-gradient, dashed string line above). Each tag carries:
- Front: status pill (IN / COMING / DONE), item name in grotesk, weight or unit in mono, sample price in mono, date-checked line.
- Back (revealed on tap/hover): "how we know" note (e.g. "Field walked Friday 6 pm", "Gathered this morning").
Appears in: hero mosaic (5 tags), services (each service card is a tag), prices (sample price rows are tags), reviews (review cards hang from tags), tools (tool output is a tag), footer (sign-off tag). Hook: `data-sw-signature="crate-tag"`.

## Type
- Display: **Anybody** (variable width axis, used condensed for tag labels and wide for headlines). Already in catalog; distinct from siblings.
- Text: **Albert Sans** (clean grotesk for reading, already in catalog).
- Mono accent: **JetBrains Mono** (for weights, dates, prices, bucket counts — the scale-ticket voice). Already in catalog.
Pair uniqueness: Anybody + Albert Sans not used together in registry; JetBrains Mono as accent is new for farm niche.

## Palette: Kraft Paper + Field Ink + Berry Signal
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| paper | #F4EFE6 | ink #1C1917 | 13.8 | body on paper, tag face |
| ink | #1C1917 | paper #F4EFE6 | 13.8 | body text, tag type |
| berry | #9B2C2C | paper #F4EFE6 | 6.9 | status pills, accent words, buttons |
| field | #2D4A22 | paper #F4EFE6 | 7.2 | deep band, secondary accent |
| tag | #E8DFC8 | ink #1C1917 | 10.1 | tag background (slightly darker than paper) |
| muted | #6B6560 | paper #F4EFE6 | 4.6 | captions, meta |
Family unique in registry. No purple/indigo. Warm, earthy, readable.

## Hero family: 8 (Photo mosaic)
Five overhead crate tiles (strawberries, blueberries, eggs, okra, honey) in one grade, one huge, each carrying a crate tag with its status this week. Type on paper beside the mosaic. Unique in farm niche (A uses 12 sticky photo, C uses 15 map).

## Motion
- Intro (≤ 1.2 s): tags drop on their strings onto the mosaic tiles and settle (short ease-out, no bounce). H1 readable before animation starts.
- Scroll story 1: Freezer-math tool fills a drawn chest freezer with cut-labelled blocks as quarter/half toggles (pinned ≥ 640px, stacked cards below).
- Scroll story 2: Picked-out check result wipes in as a tag flip (front → back → front with new status).
- Entrances: text rises (opacity + translateY), images unclip (clip-path inset). Quiet sections (statement, FAQ) do not animate.
- Hover: hairline under tag grows scaleX(0→1) from left, 200ms.
- Reduced motion: all tags visible front-side only, no drop intro, no pinned story, content complete and readable.

## Tools
1. **Picked-out check** (`#field-check`). Input: day selector. Output: open / limited / closed + best arrival time. Hand-off: "Reserve a pickup" → `#contact` with service prefilled.
2. **Bucket math** (`#bucket-math`). Input: kids, adults, gallon or flat. Output: buckets, approx pounds, sample price range from facts. Hand-off: "Plan the visit" → `#contact`.
3. **Freezer math** (`#freezer-math`). Input: quarter / half, freezer cubic feet. Output: take-home pounds, fits/tight/too-big, sample price range. Hand-off: "Reserve a pickup date" → `#contact`.
4. **ZIP checker** (`[data-zip]`). Checks against `{{biz.zips}}`. Yes → form with ZIP prefilled.
5. **Multi-step reserve form** (`#contact`, `[data-lead]`). Steps: service → details → when → contact. Honest thank-you.

## Voice
- "Field walked Friday 6 pm. Berries are in, come before ten."
- "A half fits a 15-cubic-foot chest with room for ice packs."
- "Text us before you drive. We'll tell you plain."
Never: farm fresh, locally grown, family to yours, award-winning, best, guaranteed.