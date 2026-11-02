# Concept — fireplace-C

## Three alternatives, rejected

1. **A literal calendar widget.** Twelve tiles across the page, each clickable. Rejected: reads like a blog archive, not a sales page; the months become equal weight when only Sep–Apr matter.
2. **A seasonal photo slideshow behind the headline.** Rejected: full-bleed video/slideshow is family 1, the default everyone uses; it hides the concept behind atmosphere.
3. **A timeline with a vertical line down the left.** Rejected: timelines are overused in local-service sites; the vertical fights the reading direction on phones.

## The thesis
The site is the heating-season calendar: a horizontal strip of months runs through every screen, and each section is the month that matters most for that piece of work.

## The signature system
**The season rail.** A thin horizontal band with month labels (Sep · Oct · Nov · Dec · Jan · Feb · Mar · Apr) appears in three places:
1. Peeking into the hero bottom edge (the current month highlighted).
2. As a sticky sub-nav on desktop between sections (scroll-spy highlights the active month).
3. Inside each section header as a large watermark numeral behind the kicker ("09", "10"…).

Services are pinned to their month. Reviews carry the month they were written. The footer is "April · last fire · book next year's sweep before the rush".

## Type
- **Display:** Sora (geometric sans, clean weight range, strong numerals for month watermarks). From fonts-catalog.
- **Text:** DM Sans (clean, pairs quietly with Outfit).
- Pair is unique in the library; Outfit used 0 times so far.

## Palette
Color-led: deep maple red as the main field, birch white and lake blue as partners, woodpile ochre accent.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1c1816 | paper #f5f1eb | 15.2 | body on light |
| paper | #f5f1eb | ink #1c1816 | 15.2 | body on paper |
| maple | #7a2e24 | paper #f5f1eb | 6.8 | headings on paper, buttons |
| maple-ink | #5a1f18 | paper #f5f1eb | 9.4 | accent words on light |
| lake | #2b4a5e | paper #f5f1eb | 7.1 | links, secondary buttons |
| deep | #1c1816 | paper #f5f1eb | 15.2 | t-deep band bg |
| ochre | #c48a2e | deep #1c1816 | 5.1 | accent on dark, rules |

Palette family: **maple + birch**. Unique in the library.

## Hero family
**Family 5 — offset framed photo.** A woodshed photo sits off-center inside a thick maple frame; the headline overlaps the frame's left edge; "September" set large in display type behind it as a watermark. Distinct from A's arch (family 13) and B's document (family 14).

## Motion score
- **Intro (≤ 1.2 s):** the season rail slides in from the left; the "September" watermark fades up; the woodshed photo unclips. H1 readable before any motion completes.
- **Scroll story 1 (desktop ≥ 640px):** the season rail pins to the top of the viewport as you scroll through the monthly sections; the active month highlights and the watermark numeral cross-fades. Height: `calc(8 * 55svh + 100svh)` for 8 months.
- **Scroll story 2:** none (one story is enough; the rail carries the signature).
- **Entrance patterns:** text rises (opacity + translateY), images unclip. Quiet sections (statement, FAQ) do not animate.
- **Hover:** hairline grows from left via scaleX, 200ms, on links and cards.
- **Reduced motion:** rail is static, all content visible, no pin, no clip reveals.

## Tools
1. **Firewood dry-check** (`data-firewood`): inputs = month split, wood type, covered y/n, or moisture reading. Output = "ready around next October" / "should be ready now" + rule about <20%. Hands off to form with "firewood advice" prefilled.
2. **Sweep interval planner** (`data-sweep-interval`): inputs = appliance type, frequency, cords/winter. Output = suggested timing on a mini season calendar. Hands off to form with service prefilled.
3. **Symptom checker** (`data-symptom`): tap what's happening → plain-language meaning + urgency + which visit. Hands off to form with symptom prefilled.
4. **ZIP checker** (`data-zip`): standard kit module.
5. **Multi-step quote form** (`form[data-lead]`): what you burn → when you start → what's happening → town → contact.

## Voice
- "Stack the first cord in September. We'll sweep it before you light it."
- "If your stove smokes into the room after our sweep, we come back that week to find out why."
- "Book the August opening before the October rush."

**Never say:** guaranteed, certified, eco-friendly, family-owned, award-winning, best.