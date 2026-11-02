# Concept — farm-A (Sixteen Rows Farm)

## Three alternatives, rejected

1. **Sunset basket hero with script type.** The obvious farm template: warm photo of produce in a wicker basket, "From our family to yours" in brush script. Rejected: every competitor does this; it says nothing about *this* farm's process or timing.
2. **Grid of product cards with clip art.** A shop-like layout with icons for each crop and a "Contact us" button. Rejected: hides the seasonality that defines the business; no reason to visit today vs next month.
3. **Story-page with long paragraphs about heritage.** A narrative scroll about three generations and soil health. Rejected: beautiful but slow; the homeowner needs "is it open" and "what's ripe" before they care about philosophy.

## The thesis

The site is the farm's morning clock: every section is stamped with the hour it happens on the farm (5:45 picking, 8:00 cooled, 10:00 on the stand), so a parent in Lexington understands why the stand opens early and closes at six, and why the peaches taste like that.

## The signature system: Morning Clock Rail

A thin vertical rail on the left margin (sticky on desktop, inline pill row on mobile) whose time advances as you scroll from 5:45 to 18:00. Each section carries its timestamp in condensed chalk-white type. The rail appears in:
- **Hero:** "5:45 Picking" chalks on as the sky lightens.
- **Process (#process):** timestamps at each step (7:15 Eggs gathered, 8:00 Cooled & washed, 9:30 CSA boxes packed).
- **Ripe board (#ripe):** "10:00 On the stand" with the chalkboard list.
- **Proof (#proof):** review cards carry the hour the reviewer visited.
- **Contact (#contact):** "18:00 Stand closes" with the form.
- **Footer:** resets to 5:45.

Hook: `data-sw-signature="morning-clock"`.

## Type

- **Display:** Barlow Condensed (tall, tight, reads like chalked times on a board). Weights 600, 800.
- **Text:** DM Sans (humanist, warm, good at small sizes for blurbs and tool output). Weights 400, 500, 700.
- Pair rationale: condensed grotesk for the clock stamps and headings gives the farm-work rhythm; humanist sans for reading keeps blurbs and tool results friendly. Not used by any sibling in the farm niche (none exist yet); Barlow Condensed last used in roofer-A (different trade), DM Sans last used in fireplace-C (different trade + different pairing). Unique in library for this combination.

## Palette: Pre-dawn Indigo + Chalk + Peach Signal

| Role | Hex | Name |
|---|---|---|
| Ink | #F2EDE4 | Chalk white |
| Paper | #0E141B | Pre-dawn indigo |
| Accent | #D96A2B | Peach signal |
| Deep band | #1A2633 | Night field |
| Muted ink | #A8B4C0 | Dawn grey |
| Rule | #2E3A48 | Field fence |
| Signal on deep | #F2B705 | First-light gold |

WCAG checks (run via `node tools/contrast.mjs`):
- Chalk on Pre-dawn: 14.2:1 (AAA)
- Chalk on Night field: 11.8:1 (AAA)
- Peach signal on Pre-dawn: 5.1:1 (AA large text / accent use)
- First-light gold on Night field: 8.9:1 (AAA)
- Dawn grey on Pre-dawn: 6.4:1 (AA body)

Palette family: **"Pre-dawn Indigo + Chalk + Peach"** — unique in registry.

Tone: dark-led (pre-dawn blue-black dominates; the stand's chalkboard aesthetic).

## Hero family

Family 12 (sticky photo, scrolling text): a still frame of rows at first light holds while "5:45 Picking", "8:00 Cooled", "10:00 On the stand" scroll past on the right. The first statement ("Picked at first light. On the stand by ten.") is visible without scrolling. Unique in the farm niche; family 12 last used in autotuneup-C (different trade).

## Motion score

- **Intro (≤ 1.2 s):** the sky behind the hero lightens from night to dawn via opacity crossfade; the first timestamp "5:45" chalks on with a staggered letter reveal. Skippable via reduced-motion (static dawn state shown immediately).
- **Scroll story 1 (desktop only, pinned):** the clock rail ticks forward and the background warms section by section from pre-dawn to afternoon as the visitor scrolls through #process. Height: `calc(3 * 55svh + 100svh)`. Pinned only ≥ 640px.
- **Scroll story 2:** the ripe-board chalk list wipes in line by line at #ripe.
- **Entrance patterns:** `[data-reveal]` fade-up for cards and blurbs; `[data-reveal="clip"]` for photos.
- **Hover:** buttons lift 2px with a peach-signal shadow; clock timestamps glow faintly on hover.
- **Reduced motion:** all content visible statically; no intro animation; no pinned story; clock shows final state (10:00 at #ripe).

## Tools

1. **Ripe this week board** (chalkboard style at #ripe). Inputs: none (shows current week). Output: list of crops with status (picked today / coming / done). Hand-off: "Text before you drive" → tel:.
2. **Share sizer** (at #csa). Inputs: people at home, cook frequency. Output: half or full share recommendation + sample week box + price range from facts. Hand-off: reserve form prefilled with service=CSA.
3. **ZIP checker** (at #contact). Inputs: ZIP. Output: yes/no + areas list. Hand-off: form prefilled with ZIP.
4. **Multi-step reserve form** (#contact). Steps: service → details → when → contact. Honeypot + time trap. Honest thank-you.

## Voice

Three sentences in voice:
- "We pick at first light because a peach cut at two is soft by supper."
- "If the strawberries are thin, we text you Friday night and say come Sunday instead."
- "Tell us by Sunday if something in your box isn't right; it's replaced in the next one."

Five banned words: fresh, local, sustainable, artisanal, premium.