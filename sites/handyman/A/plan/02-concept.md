# Concept — handyman-A

## Three obvious concepts, rejected

1. **The Checklist Clipboard.** Every section is a checkbox on a clipboard; scrolling ticks them off. Rejected: too close to the brief's "punch list" seed taken literally, and a common template for task-based services.
2. **The Tool Belt Grid.** Services as tools hanging on a belt or pegboard, each with an hour tag. Rejected: this is Direction B's pegboard concept; also a stock "handyman" visual cliché.
3. **The Morning Timeline.** A horizontal timeline from 8:00 to 12:00 with photos at each hour. Rejected: horizontal timelines are a SaaS template staple and fail on mobile where they collapse into a generic vertical list.

## The thesis

The page is a paper time card: every section is a stamped row on the card, and the signature is the red ink punch that marks each slot as you scroll.

## The signature system: Time Card Punch

A vertical time rail runs down the left margin (desktop) or top edge (mobile). Each section opens with a monospaced timestamp ("08:00", "08:10") inside a rounded pill that looks like a punch-clock stamp. A thin red rule connects the stamps vertically.

- **Hero:** Large "08:00" stamp beside the headline; the time card texture (buff paper grain) fills the background.
- **Services (story):** Each service group has its own timestamp pill; the rail advances as you scroll.
- **Proof / Reviews:** Timestamp reads "11:40" with a handwritten-style note annotation ("done by 11:40") beside the review text.
- **Footer:** "12:00 PUNCH OUT" stamp in signal red, with the call button inside the stamp border.

CSS primitive: `.time-stamp` (pill + mono type + red border), `.time-rail` (vertical line), `[data-sw-signature]` on the rail container.

## Type

- **Display:** `Space Grotesk` — quirky grotesk with technical character, suits the clock-in/clock-out mechanic without being a literal mono. Not in registry.
- **Text:** `Work Sans` — workmanlike screen grotesk, pairs with Space Grotesk's quirks. Unique pair.
- **Accent:** `DM Mono` — low-contrast mono for timestamps, prices, labels. Reinforces the time-card data feel.

Why: Space Grotesk's slight oddity keeps the page from reading as a generic contractor site; DM Mono makes every number feel stamped, not typed.

## Palette: Buff Card + Signal Red

| Role | Hex | Name |
|---|---|---|
| paper | #F4EFE6 | buff card |
| ink | #1A1A18 | carbon black |
| accent | #C4392E | punch red |
| deep | #2B2825 | charcoal card |
| signal | #D97706 | amber alert |
| mid | #B8B0A2 | faded ink |

Contrast table (to be verified with contrast.mjs):
- ink on paper: expected ~14:1 (body)
- paper on deep: expected ~13:1 (reversed body)
- accent on paper: expected ~5.2:1 (accent words)
- accent on deep: expected ~4.6:1 (accent on dark)
- white on accent: expected ~4.8:1 (button text)
- focus ring (signal) on paper: expected ~4.1:1 (≥3 required)

## Hero family: 10 — Centered statement + photo marquee

Centered headline "8:00 to 12:00. Your list, done." with a stamped time card beneath it. Below, a slow horizontal marquee of small-job photos (patched wall, level shelf, re-hung door, new faucet). Breaks the cliché by making the statement temporal, not aspirational; the marquee shows *finished* micro-jobs, not lifestyle.

## Motion score

- **Intro (≤1.2s):** Time card slides up from bottom; "08:00" stamp presses in with a scale(0.95→1) + opacity. Skippable via reduced motion.
- **Scroll story 1 (verb: stamp):** Each section's timestamp pill "inks in" (opacity 0→1 + slight scale pulse) when it enters the viewport; the rail draws downward.
- **Scroll story 2 (verb: slide):** Marquee photos drift left continuously; pauses on hover/focus.
- **Hover:** Hairline underline grows from left via scaleX(0→1), 200ms, on all interactive text links.
- **Reduced motion:** All stamps visible statically; marquee frozen; no intro animation.

## Tools

1. **Half-day planner** (`checklist` module). Inputs: tick items from a list. Output: "fits a 4-hour visit" + suggested order + what to have ready. Hand-off: "Book this list" scrolls to #contact with selected items prefilled.
2. **Punch-list builder** (`estimator` module). Inputs: pick jobs + count. Output: hour band per job + total band + which visit fits. Hand-off: same prefill.
3. **Price by visit** (static table from `{{proof.prices}}`, labelled Sample). No inputs; reference only.
4. **ZIP checker** (`zip` module). Standard.
5. **Multi-step quote form** (`form` module). Standard 4-step.

## Voice

Three sentences:
- "We punch in at 8:00 and punch out at 12:00. Your list gets worked in the order we agree on."
- "If a fix needs a licensed trade, we tell you before we start — not after."
- "Sample pricing shown. Your number comes after we see the list."

Five words never used: emergency, same-day, guarantee, bonded, award-winning.