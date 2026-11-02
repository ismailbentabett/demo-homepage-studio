# Concept — consulting-A

## Three alternatives, rejected
1. **The open notebook hero.** A literal notebook photo with handwritten session titles. Rejected: too craft-store, reads as a journaling blog, not a paid engagement.
2. **The calendar grid.** Six squares representing weeks, each clickable. Rejected: looks like a SaaS scheduling widget; no warmth, no after-hours mood.
3. **The testimonial wall.** Reviews as the hero, process below. Rejected: leads with proof before the buyer understands what they're buying; generic social-proof template.

## Thesis
The site is the engagement ledger: each scroll reveals the next Thursday session as a physical slip with its inputs, outputs and homework, so the owner has already "attended" the first three sessions before deciding to pay for them.

## Signature system: the session ledger
A ruled slip that appears in six sections (hero summary, Sessions 1–4 detail, Sessions 5–6 detail, and the final plan summary). Each slip carries:
- A hand-set session number ("Thursday 3 of 6") in the display serif.
- A two-column margin: "You bring" (left) and "You leave with" (right).
- A dashed tear-off line at the bottom with the homework prompt.
- A faint vertical rule on the left edge that aligns across all slips, forming a continuous gutter line down the page.
The slips collect into a "Your plan" stack in the final section, visually completing the engagement.

## Type
- Display: **Fraunces** (serif with optical size, old-style figures, warm italics for session headings and quotes). Preloaded.
- Text: **DM Sans** (quiet humanist sans for UI, forms, body).
Pair rationale: Fraunces carries the literary, after-hours voice; DM Sans stays invisible in tools and microcopy. Checked against design-registry: Fraunces used ≤ 3 times in library, DM Sans not yet used in consulting niche.

## Palette: ink + desk-lamp cream + mill brick
| Role | Hex | Use |
|---|---|---|
| ink | #1a1814 | Body text on light, headings on light |
| cream | #f2ece0 | Paper backgrounds, slip surfaces |
| deep | #12141c | Dark bands (hero, session 3-4, footer| brick | #a8432a | Accent: session numbers, rules, primary button on light |
| brick-ink | #7a2f1d | Accent text on cream (passes 4.5:1| lamp | #e8c97a | Warm highlight, hover underline, focus ring |
| muted | #6b6560 | Secondary text on cream |

Contrast verified: ink/cream 14.8:1; cream/deep 15.2:1; brick-ink/cream 5.1:1; lamp/deep 4.6:1 (large text/accent only). Family name: "ink + desk-lamp cream + mill brick". Unique in library.

## Hero family
**12 — Sticky photo, scrolling text.** The lamp-lit table photo (`hero-A`) stays pinned while three lines scroll past: "Thursday, 6:30. The shop is closed." / "Six sessions. One written plan." / "You leave each one with a page you can use Friday." First line visible without scroll. Pinned only ≥ 640px; stacked on phone.

## Motion
- Intro: radial lamp glow fades in over 0.8s on the hero photo, then the first h1 line mask-reveals. Total ≤ 1.2s.
- Scroll story 1: the session counter ("Thursday N of 6") advances as each slip enters view; the gutter line draws downward.
- Scroll story 2: in the final plan section, the six homework slips slide into a stacked "table of contents" as you scroll.
- Entrances: text rises (opacity + translateY), images unclip (clip-path inset). Quiet sections (guarantee, footer) do not animate.
- Hover: hairline underline grows from left via scaleX, 200ms, only on pointer devices.
- Reduced motion: all slips fully visible, no pin, no glow, no counter animation.

## Tools
1. **Where-to-start quiz** — 4 questions in owner words → one recommended service + first-meeting agenda + sample range → pre-fills form.
2. **Engagement planner** — pick a service and hours/week → week-by-week calendar with meetings, homework, deliverables → "Hold these dates" CTA to form.
3. **ZIP checker** — served in person / by video answer from facts.biz.zips.
4. **Multi-step request form** — service → what's going on → when → contact. Honest thank-you state.

## Voice
Three sentences in voice:
- "We meet after you close, at your table, with the numbers you already have."
- "Each session ends with one page and one thing to do before next Thursday."
- "If the first Thursday isn't useful, you don't pay for it."

Five banned words: unlock, potential, strategic, solutions, synergy.