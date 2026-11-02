# Concept — junkremoval-B

## Big idea
Know the price and where it all goes before the truck comes. Every list on the page is set as a three-column sort sheet (Donate · Recycle · Landfill), like the clipboard the crew sorts by.

## Signature system
**The three-column sort sheet.** A ruled table with three destination columns appears in:
- Hero (beside the tool)
- Services list (each service filed under its primary destination)
- Price table (each row carries a destination mark)
- Reviews (filed under the item that left)
- Footer (bottom line of a filled-in sheet with signature line)

The sheet rules are drawn as hairlines; column headers use the destination ink colors (donate blue, recycle olive, landfill clay). Body text is black on white or warm concrete grey paper inserts.

## Type
- Display/headlines: **Space Grotesk** (sturdy grotesk, variable wght)
- Data/items/prices: **JetBrains Mono** (typewriter-style monospace for item names, load shares, prices, answers)

## Palette
| Role | Hex | Use |
|---|---|| paper | #F4F1EC | sorting-table white, body bg |
| concrete | #D8D3CB | paper inserts, alternating bands |
| ink | #1A1A1A | body text, headlines |
| donate | #2E6B8A | donate column header, marks |
| recycle | #5C6B3C | recycle column header, marks |
| landfill | #9C5A3C | landfill column header, marks |
| rule | #B8B2A8 | sheet hairlines |

## Hero
Family 7 (tool-first): the "Will you take it?" input sits left of center at desktop, large and inviting, with example chips below. Right side shows the promise line and phone. On mobile the tool stacks above the promise. Works JS-off as a printed short list + call button.

## Motion
- Intro: sheet rules draw down, example chips drop into columns (≤ 1.2s).
- Scroll story: twelve items from one garage sort themselves into three columns, one per scroll step (pinned on desktop ≥ 640px, stacked cards on phone).
- Signature scrub: not used here; the sort-sheet reveal is the signature motion.

## Tools
1. Will-you-take-it answer box (`data-answer-box`)
2. Load sizer by item (`data-estimator`)
3. Where-it-goes sorter (`data-sorter`)
4. ZIP checker (`data-zip`)
5. Multi-step quote form (`data-lead`)