# Concept — roofer-A (Felt & Flashing)

## Rejected concepts
1. **"Quality You Can Trust" with crew photo.** Every competitor does this; template energy, no proof.
2. **Storm-damage panic banner.** Red siren icon and "CALL NOW" reads as out-of-state chaser; brief §4 bans it.
3. **Generic drone suburb hero.** Tilted horizon, no local signal, no layer story; literal seed without craft.

## Thesis
The page is a roof cross-section: each section is one layer in build order, and the left-edge diagram adds that layer as you scroll, so the homeowner sees what is under the shingles before it is covered.

## Signature system: Layer Stack Cross-Section
A vertical roof cross-section rides the left margin (sticky on desktop, inline on mobile). Each page section maps to one layer; as the section enters view, its layer slides in from the right and locks onto the stack.
- **Hero:** empty deck outline; headline sits over it. Filmstrip advances beneath.
- **Layer 01 · Deck:** decking board fills in; photo of bare OSB beside it.
- **Layer 03 · Ice & Water Shield:** membrane strip appears; close-up of rolled membrane.
- **Layer 05 · Underlayment:** synthetic felt layer; photo of felt being unrolled.
- **Layer 07 · Shingles:** shingle courses fill; nail-gun photo.
- **Layer 09 · Ridge Cap:** final cap locks on top; finished roofline photo.
- **Footer:** ridge vent silhouette completes the stack; contact info inside.
Hook: `data-sw-signature="layer-stack"`. CSS primitive: SVG path segments with `clip-path` driven by `--sw-p`.

## Type
- **Display:** Barlow Condensed (condensed, static weights 300–900). Tall narrow letters like lumber stamps and shingle-bundle wrappers. Unique pair with Karla in registry.
- **Text:** Outfit (geometric sans, variable wght 200–800). Clean, modern geometric that pairs with Barlow Condensed without competing; unique pair in registry.
- **Accent:** DM Mono (mono, 300–500). For layer numbers (L-01, L-03), measurements, and sample-price tags.
Why: Barlow Condensed's verticality echoes the cross-section; Karla stays quiet for body; DM Mono marks the technical layer labels.

## Palette: Barn Red + Tar Black + Cream Paper
Family name: "Barn Red + Tar + Cream". Tone: color-led.
- Ink: #1a1814 (tar black)
- Paper: #f5efe6 (warm cream)
- Accent: #7a2e28 (barn red / oxblood)
- Deep: #2c1a16 (dark oxblood for dark bands)
- Signal: #d4a03c (prairie gold for focus rings and highlights)
- Mid: #b8a99a (warm grey for muted text)

### Contrast table (verified)
| Pair | Ratio | Body ≥4.5 | Large ≥3 | Use |
|---|---|---|---|---|
| #f5efe6 on #7a2e28 | 8.16:1 | pass | pass | accent text on paper |
| #f5efe6 on #1a1814 | 15.50:1 | pass | pass | ink on paper |
| #1a1814 on #f5efe6 | 15.50:1 | pass | pass | body text |
| #7a2e28 on #f5efe6 | 8.16:1 | pass | pass | buttons, links |
| #ffffff on #7a2e28 | 9.33:1 | pass | pass | button text |
| #1a1814 on #d4a03c | 7.50:1 | pass | pass | focus ring on signal |

Signal (#d4a03c) used only for shapes, rules and focus rings — never for body text.

## Hero family: 9 (horizontal filmstrip)
Seven frames advance sideways under the headline: deck → drip edge → ice & water → underlayment → starter → shingles → ridge. Breaks the cliché by showing *layers* not a finished roof; the strip is a contact sheet, not a slideshow. Unique in roofer niche; ≤ 3 in library.

## Motion score
- **Intro (≤ 1.2s):** filmstrip frames pull in from right like a contact sheet, settle with shingle frame centered. Skippable via reduced-motion.
- **Scroll stories:** (1) Layer stack builds — each SVG segment slides in from right and locks as its section hits top. Verb: stack. (2) Photo reveal — images unclip via `clip-path: inset(0 0 100% 0)` → `inset(0)`. Verb: wipe.
- **Hover:** hairline underline grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** all layers visible statically; filmstrip shows all seven frames in a grid; no clip-path animation.

## Tools
1. **Repair-or-replace sorter** (`compare` module). Inputs: roof age, leak count, shingle condition, last storm. Output: verdict pill. Hand-off: prefills quote form with answer.
2. **Roof size & sample price estimator** (`estimator` module). Inputs: footprint or bedrooms, roof shape, pitch. Output: squares range + sample price band from facts.proof.prices. Hand-off: prefills quote form with squares.
3. **ZIP checker** (`zip` module). Validates service area against {{biz.zips}}.
4. **Quote form** (`form` module). Steps: roof type → problem → photos (optional) → contact. Prefilled from tools.

## Voice
- "We photograph every layer before it is covered, so you see what is under your shingles."
- "Two soft spots by the chimney, circled in the photo you got that afternoon."
- "If it can wait, we will tell you; if it cannot, we will show you why."
Never uses: emergency, same-day, guarantee, bonded, worry-free.