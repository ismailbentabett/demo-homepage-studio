# Concept — moving-A (Tag & Lift Moving)

## Three alternatives, then rejected

1. **The clipboard checklist.** Every section is a checkbox line on a move-day clipboard. Rejected: too close to the pest-A station-tag rail and the cleaning-B receipt; reads as a generic task list, not a chain of custody.
2. **The truck-floor plan.** A top-down truck bed that fills as you scroll. Rejected: too close to B's load-meter direction; makes the page about packing geometry instead of the homeowner's anxiety about where their things end up.
3. **The room-to-room arrow.** Big directional arrows connecting old-room photos to new-room photos. Rejected: visually loud, hard to make accessible, and the brief's seed taken literally without adding craft.

## The thesis

The site is the inventory sheet: every section is a numbered tag clipped to it, and scrolling advances the tag number so the visitor watches their household travel from old room to new.

## The signature system

**The inventory tag.** A kraft-paper tag shape with a string hole, a three-digit number in condensed type, a room code (e.g. "LR → LR"), and a condition line ("wrapped, 2 pads"). It appears in:

1. **Hero:** Tag No. 001 swings in on its string, the number prints, then the filmstrip slides in.
2. **Process story:** Each step (tag, wrap, ramp, place) is a tag pinned beside the photo.
3. **Services:** Each service card carries a tag with its number and a short condition line.
4. **Reviews:** Each review is signed with a tag showing the room or item moved.
5. **Prices:** Each price row has a tag number and the sample range.
6. **Footer:** Tag No. 112 · First-night box · placed.

The sticky header shows the current tag number counting up via `data-sw-signature="inventory-tag"`.

## Type

- **Display:** Antonio (condensed, variable 100–700). Tall condensed sans for tag numbers and headlines, set like stencilled box labels. Unique in the niche; used 0 times in the library so far.
- **Text:** Public Sans (grotesk, variable 100–900). Plain, readable body text. Pairs well with Antonio's industrial feel.
- **Accent:** DM Mono (mono, 300/400/500). For tag numbers, room codes, prices, and data readouts.

Check: Antonio is not in any delivered site's displayFont in the registry. Public Sans is used as textFont by windowdoor-A and insulation-B but never paired with Antonio. Pair is unique.

## Palette

**Family:** Kraft Paper + Tag Orange + Ink

| Role | Hex | Use |
|---|---|---|
| paper | #F5F0E8 | Backgrounds, tag fill |
| ink | #1A1814 | Body text, headings |
| accent | #C45A1C | Tag numbers, links, buttons |
| deep | #2B2520 | Dark band backgrounds |
| muted | #6B6358 | Captions, secondary text |
| rule | #D8D0C4 | Borders, dividers |
| signal | #E8A840 | Open-now indicator, highlights |

Contrast checks (to verify with `node tools/contrast.mjs`):
- ink #1A1814 on paper #F5F0E8: ~15.5:1 (body text, passes AAA)
- paper #F5F0E8 on deep #2B2520: ~12.8:1 (reversed text, passes AAA)
- accent #C45A1C on paper #F5F0E8: ~4.6:1 (large text / buttons, passes AA)
- accent #C45A1C on deep #2B2520: ~3.2:1 (only for large text / decorative, not body)
- ink #1A1814 on signal #E8A840: ~6.2:1 (text on signal background)

Tone: light-led (warm paper white base).

## Hero family

**9 — Horizontal filmstrip.** A sideways strip of move-day frames (tag, wrap, ramp, truck, hallway, placed) under the headline. The strip drifts slowly and can be dragged. Pauses on hover/focus; stops with reduced motion. Unique in the moving niche; used sparingly in the library.

## Motion score

- **Intro (≤ 1.2 s):** A paper tag swings in on its string from top-left, the number "001" prints in mono, then the filmstrip slides in from the right. Skippable; content readable before animation completes.
- **Scroll story 1 (desktop ≥ 640px):** One dresser travels across the page as you scroll: pads wrap it (clip reveal), it rides the ramp (translateX), it lands in a floor-plan room labelled "Bedroom 2". Pinned sequence, height `calc(3 * 55svh + 100svh)`. On mobile: stacked cards with clip reveal, no pin.
- **Scroll story 2:** The junk-sorting stream: items slide into donation / recycling / landfill columns as you scroll. Lighter, shorter.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms at 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Two patterns only, varied by timing.
- **Hover:** Hairline under item grows `scaleX(0→1)` from left, 200ms. One language.
- **Reduced motion:** Everything static and complete. No hidden content. Filmstrip is a still grid.

## Tools

1. **Room-by-room move sizer** (`data-estimator`). Inputs: home type, floors/stairs, elevator. Output: crew size, truck size, sample hour range, sample price range from `{{proof.prices.*}}`. Leads to form with prefill.
2. **Stairs and long-carry check.** Inputs: floors, distance, narrowest door. Output: plain-words notes and how it affects sample hours. No dollar amounts beyond facts.
3. **ZIP checker** (`data-zip`). Yes / "a bit outside our usual area: call and we'll tell you the drive time honestly".
4. **Multi-step quote form** (`form[data-lead]`). Service → job details → when → contact. Honest thank-you state.

## Voice

Three sentences in the site's voice:
- "Every piece gets a tag and a room before it leaves your front door."
- "We pad the furniture, shrink-wrap the mattresses, and strap the load so nothing shifts."
- "If something we wrapped arrives damaged, we fix it or pay for the repair."

Five words it will never use: stress-free, best, guaranteed, nationwide, cheap.