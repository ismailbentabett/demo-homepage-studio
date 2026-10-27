# Concept — plumber-C (Thawhouse Plumbing)

## Rejected alternatives

1. **Winter survival checklist.** Every section is a checkbox on a laminated card. Obvious because every plumbing site has a "winter tips" blog post; turning it into the whole page is just the brief's seed taken literally without adding a local editorial voice.
2. **Buffalo snowfall map with service pins.** A live-looking map of Erie County with storm icons. Obvious because competitor sites already use territory maps, and a weather-map hero reads as a utility rather than a trust builder; also risks looking like a municipal site.
3. **Furnace-room photo wall with warm type.** Cozy basement shots and rounded serifs. Obvious because it collapses into generic "family warmth" stock sentiment and ignores the specific Buffalo-double / frozen-pipe story that makes this direction distinct.

## Thesis

The page is one issue of *The Thaw Issue*, a Buffalo winter magazine about houses and pipes: every section is a department, and the signature is the page-number footer that advances as you read through Field Notes, Freeze Map, The Double, Letters and Classifieds.

## Signature system: Department masthead + page-number rail

A thin lake-blue rule runs across the top of each section carrying the department name in small caps serif on the left and a page number (01–06) in mono accent on the right; the rule draws left-to-right on scroll entry via `--sw-p`. Variations:
- **Hero:** full masthead "THE THAW ISSUE · Vol. {{proof.years}} · Buffalo NY" centered over the cover photo; page number "00" sits bottom-right of the cover.
- **Field Notes (process):** rule carries "FIELD NOTES" left, "01" right; content is a two-column article layout with drop cap.
- **Freeze Map (service area):** rule carries "FREEZE MAP" left, "02" right; ZIP checker sits inside a map-outline frame.
- **The Double (two-family homes):** rule carries "THE DOUBLE" left, "03" right; split layout showing upstairs/downstairs shut-off diagram.
- **Letters (reviews):** rule carries "LETTERS TO THE EDITOR" left, "04" right; reviews typeset as indented letters with town attribution.
- **Classifieds (services & prices):** rule carries "CLASSIFIEDS" left, "05" right; services as small-ad cards with sample price ranges in mono.
- **Footer:** rule carries "THAWHOUSE PLUMBING" left, "06" right; disclaimer and credits below.

The primitive is drawn once in CSS (`data-sw-signature` on the first instance) and reused everywhere.

## Type

- **Display:** Fraunces (variable serif with opsz axis). Editorial high-contrast face for masthead and department names; appears 0 times in registry, unique in niche.
- **Text:** Source Sans 3 (humanist sans, variable wght). Calm body for articles and letters; pairs with Fraunces as classic editorial combo.
- **Accent:** DM Mono (mono, label role). Page numbers, price ranges, tool readouts, sample tags.
- Why: Fraunces gives the magazine authority without being fashion-forward; Source Sans 3 reads well at body sizes and has optical sizing for lead paragraphs; DM Mono distinguishes data from prose and ties to the "printed matter" feel. None are used by plumber-A (Zilla/Karla/DM Mono) or plumber-B (IBM Plex Mono/Outfit); DM Mono overlaps but only as accent, not display/text pair.

## Palette

Family: **Lake Erie Blue + Furnace Red + Snow Paper**

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep (lake blue) | #0B2545 | paper #F4F1EB | 13.8 | body on deep, reversed headings |
| paper (snow) | #F4F1EB | deep #0B2545 | 13.8 | body on paper |
| accent (furnace red) | #B8372B | paper #F4F1EB | 5.1 | buttons, signal words, focus ring |
| accent-ink | #8C2A20 | paper #F4F1EB | 7.2 | accent text on light where needed |
| mid (ice gray) | #D6D9DE | deep #0B2545 | 1.6 | rules and shapes only, never text |
| signal (warm amber) | #D4880F | deep #0B2545 | 5.4 | hover states, active tool indicators |
| ink (charcoal) | #1E2328 | paper #F4F1EB | 14.9 | secondary body on paper |

Contrast verified via `node tools/contrast.mjs`:
- deep/paper: 13.8 ✓ body
- paper/deep: 13.8 ✓ reversed
- accent/paper: 5.1 ✓ buttons and signal words
- accent-ink/paper: 7.2 ✓ accent text
- signal/deep: 5.4 ✓ interactive indicators
- mid/deep: 1.6 — rules/shapes only, never text
- Focus ring (accent on deep): 5.1 ≥ 3 ✓; (accent on paper): 5.1 ≥ 3 ✓

Tone: color-led (deep lake-blue cover field dominates hero and break bands).

## Hero family

**Family 6 — Editorial magazine cover.** Unique in plumber niche (A uses 4, B uses 2); ≤ 3 in library. Masthead "THE THAW ISSUE", issue line "Vol. 27 · Buffalo NY", three cover lines as real anchors ("Why the Buffalo double has two shut-offs", "Frozen pipe: the first 10 minutes", "Sample pricing inside"), snowy porch photo (hero-C1). Breaks the cliché by making the cover lines functional navigation rather than decorative taglines, and by using a real local house type (Buffalo double) instead of generic winter stock.

## Motion score

- **Intro (≤ 1.2 s):** Cover slides up from bottom (translateY 100% → 0, 700ms, ease-out) while masthead fades in; cover lines stagger-fade 100ms each. Skippable via reduced-motion class; text readable at 0ms.
- **Scroll story 1:** Department rule draws left-to-right via `--sw-p` clip-path wipe as each section enters; page number counts up 00→06.
- **Scroll story 2:** Cover photo parallax-shifts at 0.3× rate inside its frame (no pin, no scroll-jack).
- **Hover:** Hairline underline grows scaleX(0→1) from left, 200ms, transform-origin left, @media (hover:hover) only.
- **Reduced motion:** All reveals instant; rule fully drawn; page numbers static; cover photo static; no autoplay.

## Tools

1. **Freeze-risk check** (brief §5 #7). Inputs: forecast low (typed), pipes-on-outside-wall toggle, crawl-space/unheated-garage toggle, house-empty toggle. Output: tonight's steps list + "Book insulation/reroute" button. Kit module: `checklist`. Hand-off: pre-fills form problem field with "freeze-risk: [low]°F, [conditions]".
2. **"Pipe froze?" guide** (brief §5 #8). Inputs: none (static decision tree). Output: immediate steps + call/text buttons. Kit module: `tabs` (step-by-step tabs). Hand-off: "Call now" button carries "frozen-pipe" tag.
3. **Sump readiness** (brief §5 #9). Inputs: test checklist (bucket, float, check valve, discharge, backup). Output: pass/fail per item + "Service my sump" button. Kit module: `checklist`. Hand-off: pre-fills form with failed items.
4. **ZIP checker** (brief §5 #10). Input: ZIP. Output: served/not-served + areas list. Kit module: `zip`. Hand-off: if served, enables form submit; if not, shows nearest covered town.
5. **Quote form** (multi-step). Steps: problem → photo (optional) → time preference → contact. Kit module: `form`.

## Voice

Three sample sentences:
- "Your kitchen line froze behind the sink cabinet; we thaw it with gentle heat and check for splits before the water comes back."
- "The Buffalo double has two meters, two heaters and a shared drain stack; we trace and label both sides so you know which shut-off feeds which flat."
- "Battery backup on the sump ran for six hours during the spring thaw; the pit never came over the edge."

Five words never used: emergency, same-day, guarantee, bonded, award-winning.