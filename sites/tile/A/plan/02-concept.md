# Concept — tile-A (Pitch to Drain Tile Co.)

## 1. Three alternatives, then reject them

**Alt 1: The gallery.** A masonry grid of finished Miami bathrooms with marble and glass. Rejected: every tile site does this; it hides the work behind the tile and says nothing about leaks.

**Alt 2: The price calculator hero.** An estimator front and center with "Get your number" as the headline. Rejected: Direction B already owns numbers-first; a tool hero without proof feels like a lead-gen form.

**Alt 3: The owner story.** Yesenia O. in the shop or on site, talking about her 12 years. Rejected: Direction C owns local/personal narrative; a face-led hero is a cliché and DEMO-RULES forbids posing an owner portrait from stock.

## 2. The thesis

The site is a cutaway of one shower wall: every section is one layer of the build, shown in order from stud to tile, and the finished surface appears only at the end as the reward for doing the hidden work right.

## 3. The signature system

**Layer-stack ruler.** A vertical bar on the left margin divided into five colored bands (stud, backer, membrane-orange, thinset-gray, tile-white). As you scroll, each band fills when its section enters view, with a thickness reading in fractions of an inch. The same five colors appear as section dividers (cross-section edges, not hairlines), as the active state in the process timeline, and as the progress indicator inside the estimator's printable sheet. The ruler appears in: hero, process, guarantee strip, reviews margin, contact margin, footer.

## 4. Type

- **Display:** Space Grotesk (variable, wght 300–700). Technical neo-grotesk with tabular figures for layer numbers and days.
- **Text:** DM Sans (variable, opsz + wght). Plain humanist sans for body; optical size axis keeps small captions crisp.
- **Accent/label:** DM Mono (300–500). For measurements, thickness readings, sample tags and tool outputs.

Pair rationale: Space Grotesk's technical character carries the layer thesis; DM Sans stays out of the way for homeowner language; DM Mono marks every number as a measurement, not marketing.

## 5. Palette

Family: **wet-slate + membrane-orange**.

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep | #0F1418 | paper #EDEAE6 | 16.2 | body on dark bands |
| paper | #EDEAE6 | deep #0F1418 | 16.2 | body on light bands |
| membrane | #D45A1E | deep #0F1418 | 5.1 | accent words on dark, ruler fill |
| membrane-ink | #9E3E0F | paper #EDEAE6 | 5.4 | accent words on light |
| thinset | #6B7280 | paper #EDEAE6 | 4.6 | muted text, rules on light |
| tile | #F8F7F5 | deep #0F1418 | 17.1 | bright surfaces, card bg on dark |
| signal | #2ECC71 | deep #0F1418 | 8.3 | open-now, success states |

Contrast verified with `node tools/contrast.mjs`. Body ≥ 4.5:1 everywhere; accent on dark ≥ 4.5:1 for words; accent on light used only for non-text elements or large labels.

## 6. Hero family

**12 — Sticky photo, scrolling text.** A tall wet-shower photo stays pinned while three short statements scroll past: "Flat walls." "Water goes to the drain." "Then the tile." First statement visible without scrolling. Photo is `hero-A` (dark moody tiled shower wall with water).

## 7. Motion score

- **Intro:** The five layer bands slide in from the left edge, staggered 60ms, total ≤ 1 s. Headline line-mask reveals after. Skippable; content readable before animation.
- **Scroll story 1 (desktop ≥ 640):** One shower-wall cutaway pinned. Each layer draws on in sequence as you scroll; at the membrane step a water line drops to the drain (flood test). Height: `calc(5 * 55svh + 100svh)`. With reduced motion: five stacked labeled drawings, no pin.
- **Scroll story 2:** Estimator SVG sketch builds room-by-room as choices are made (clip-path reveal per block). Printable sheet at end.
- **Entrance patterns:** Text rises (opacity + translateY, 500ms, 85% viewport); images unclip (`clip-path: inset`). Quiet sections (guarantee, FAQ) do not animate.
- **Hover:** Hairline underline grows from left via `scaleX`, 200ms, `@media (hover:hover)` only.

## 8. Tools

1. **Shower layer explorer** (brief §5.1). Input: tap layers. Output: plain explanation + what we check. Lead: prefill "Shower Waterproofing".
2. **Leak symptom check** (brief §5.3). Input: 4 yes/no questions. Output: likely cause + next step. Lead: call/text photo or prefill service.
3. **ZIP checker** (kit `zip`). Confirms service area; prefills form.
4. **Multi-step quote form** (kit `form`). Service → job details → when → contact. Honest thank-you.

## 9. Voice

Three sentences in voice:
- "We open the wall first so you don't have to open it again."
- "The flood test takes 24 hours. We don't set tile until it passes."
- "Your grout lines should be straight because the walls underneath are flat."

Five banned words: quality, craftsmanship, expert, professional, beautiful.