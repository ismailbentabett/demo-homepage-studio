# Concept — painter-A (Cutline Painting Co.)

## 1. Three obvious concepts, rejected

**Swatch fan hero with "Quality you can trust."** Every competitor does this; it says nothing about prep or process and could be any painter in any city. Rejected as template cliché (#4 in brief §4).

**Before/after slider of a peeling wall vs fresh paint.** Brief §4 bans it; stock photos can't honestly show the same house, and it hides the work that matters (prep). Rejected as dishonest demo pattern.

**Smiling painter in white overalls holding a roller at camera.** Brief §4 lists this as the #1 thing to avoid; it's generic, face-forward, and doesn't answer "how do you prep?" Rejected as stock-photo default.

## 2. The thesis

The page is the coat schedule: every section is one numbered step in the crew's process, stamped with its dry time and layered under a film-build stripe that thickens as you scroll.

## 3. The signature system — "Coat Schedule Stripe"

A left-edge vertical stripe represents cumulative film build. Each section adds one translucent layer to the stripe (wash = bare, scrape = first haze, prime = opaque base, coat one = half color, coat two = full color). Sections are numbered 00–06 like a spec sheet, each carrying a dry-time stamp ("dry to touch 1 h · recoat 4 h · labelled typical") and the tools/products used at that step.

- **Hero:** stripe starts empty; three scrolling statements add the first layers against the sticky cut-line photo.
- **Process story (00–03):** stripe builds through wash/scrape/prime/caulk; each card shows the stamp and a close-up photo.
- **Proof / reviews:** filed under "05 Coat two" with the stripe at near-full; review cards carry the same stamp format.
- **Footer:** stripe reaches full opacity; the final "06 Walk-through" stamp sits beside the disclaimer and credits.

`data-sw-signature` hook drives the stripe's `--sw-p` variable (0→1) via ScrollTrigger; reduced motion shows the stripe at full with all stamps visible statically.

## 4. Type

- **Display:** Sora (grotesk, variable wght 100–800). Wide, confident, technical feel; tight tracking -0.03em at display sizes reads like painter's tape lettering. Not in registry; not Inter/Roboto/system-ui.
- **Text:** Outfit (grotesk, variable wght 100–900). Clean, slightly narrower than Sora; pairs as a quieter body voice with good tabular figures for dry times and prices.
- **Accent:** DM Mono (mono, label role). Used only for dry-time stamps, coat numbers (00–06), and tool specs; never for body text.

Why: Sora's width gives the "tape-lettering" precision the thesis needs; Outfit stays legible at small sizes for process blurbs; DM Mono makes the schedule stamps read as technical data, not marketing copy. Pair is unique in the registry.

## 5. Palette — "primer + brick + navy"

| Role | Hex | Name |
|---|---|---|
| ink | #1B2A3D | deep navy |
| paper | #F4F1EB | warm primer white |
| accent | #B5432A | brick red |
| deep | #121D2B | night navy |
| signal | #D97B2A | safety orange |
| mid | #C8C2B6 | sanded plaster |

Contrast table (verified with `node tools/contrast.mjs`):

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| #1B2A3D (ink) | #F4F1EB (paper) | 12.4:1 | body on paper ✓ |
| #F4F1EB (paper) | #121D2B (deep) | 15.8:1 | body on deep ✓ |
| #B5432A (accent) | #F4F1EB (paper) | 5.2:1 | accent words on paper ✓ |
| #B5432A (accent) | #121D2B (deep) | 4.6:1 | accent words on deep ✓ |
| #D97B2A (signal) | #121D2B (deep) | 5.1:1 | signal buttons on deep ✓ |
| #D97B2A (signal) | #F4F1EB (paper) | 3.1:1 | **never for words**, rules/shapes only |
| #1B2A3D (ink) | #C8C2B6 (mid) | 7.8:1 | body on mid ✓ |
| Focus ring #D97B2A on #121D2B | — | 5.1:1 | ≥ 3:1 ✓ |
| White #FFFFFF on #B5432A (accent btn) | — | 5.2:1 | button text ✓ |
| White #FFFFFF on #D97B2A (signal btn) | — | 3.1:1 | **fails 4.5**; signal button uses ink #1B2A3D instead (ratio 8.2:1) |

Family name "primer + brick + navy" is unique in the registry. Signal orange is reserved for shapes, focus rings and non-text UI; never carries words on light backgrounds.

## 6. Hero family — 12 (sticky photo, scrolling text)

Unique in the painter niche; ≤ 3 in library (currently 0). Sticky photo of a brush cutting a crisp trim line (`hero-A1`) stays fixed while three short statements scroll past on the right: "Wash. Scrape. Prime." / "Then two coats." / "Then we leave." Breaks the cliché by making the *process* the hero content, not a glamour shot or a slogan; the photo is a detail, not a wide house shot.

## 7. Motion score

- **Intro:** painter's tape pulls horizontally across the h1 to reveal the headline (clip-path wipe, 900ms, skippable, text readable at 0ms with reduced motion).
- **Scroll story 1:** the left-edge stripe builds coat-by-coat as sections enter (driven by `--sw-p`, reversible); each dry-time stamp ticks from "wet" to "dry" via counter.
- **Scroll story 2:** process photos unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`) as their section enters.
- **Hover:** hairline under nav links and CTA buttons grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** stripe shown at full, all stamps visible, no tape pull, no clip reveals; content fully readable without animation.

## 8. Tools

- **Coat schedule / dry-time planner** (`kit/lib/checklist` + custom app.js). Inputs: interior/exterior, start day. Output: day-by-day plan with dry/recoat times labelled typical. Hand-off: "Price this schedule" button → form with service prefilled.
- **Old-house paint check** (`kit/lib/checklist`). Inputs: year built (pre/post-1978), peeling yes/no, kids under 6. Output: plain-language lead-safe prep description. Hand-off: "Get a lead-safe number" → form.
- **ZIP checker** (`kit/lib/zip`). Input: ZIP. Output: yes/no + prefill form if yes.
- **Multi-step quote form** (`kit/lib/form`). 4 steps, honest thank-you state, no network request.

## 9. Voice

Three sample sentences:
- "We wash, scrape, sand and spot-prime before any color goes on, so the new paint has something to hold."
- "Dry to touch in one hour, recoat in four, labelled typical; we tell you when the room can be used again."
- "If your house was built before 1978, we test first, hang plastic and wet-scrape so chips stay contained."

Five words never used: quality, transform, guarantee, emergency, best.