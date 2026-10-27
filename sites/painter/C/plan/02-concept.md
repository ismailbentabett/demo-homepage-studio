# Concept — painter-C (Haint & Harbor)

## 1. Three obvious concepts, rejected

**A. The color swatch wall.** Hero is a fan deck of pastel swatches; each section is a color family with a photo of a house painted that color. Rejected: this is the #2 cliché in brief §4 ("fan deck of paint swatches as the hero"), every competitor does it, and it says nothing about Charleston's salt, humidity or historic streets.

**B. The before/after gallery.** A slider showing peeling vs fresh paint on historic facades, with captions naming the street and year. Rejected: brief §4 bans before/after sliders built from unrelated stock; DEMO-RULES §5 forbids labeling stock as "our work"; and it reduces painting to a reveal trick instead of showing the place-specific craft.

**C. The porch-ceiling close-up.** Hero is a tight shot of haint-blue ceiling boards; the page tells the lore of haint blue and lists services below. Rejected: too narrow — Haint & Harbor does full exteriors, shutters, ironwork and interiors, not just ceilings; a single detail cannot carry the whole brand story; and Direction A already owns the close-up-process territory.

## 2. The thesis

The page is a walk along a row of Charleston facades: each section is a house front drawn in SVG, painted in its historic color, carrying a small plaque that names the street feeling, the salt-or-sun enemy, and the service that fits.

## 3. The signature system: facade + plaque

A reusable SVG primitive: a simplified Charleston house silhouette (single house with piazza, Victorian gable, Freedman's cottage, raised beach house) with a fill color set via CSS custom property `--facade-color`, and a small rectangular plaque beneath it containing three lines of text (street-feeling, enemy, service). The plaque uses the mono accent face and is always legible against the facade color.

Variations across sections:
- **Hero:** five facades drift sideways in a filmstrip; each facade's color matches its historic palette; no plaque visible (the headline carries the message).
- **Historic color story (house #1):** facade is a single house in soft yellow; plaque reads "Battery Row / Salt spray fades pigment / Historic color matching"; the color explorer tool sits inside the house outline.
- **Prep story (house #2):** facade is a Victorian in faded pink; plaque reads "Church Hill Porch / Peeling at the sills / Hand-scrape and prime"; process photos are clipped inside the house shape.
- **Haint blue story (house #3):** facade is a Freedman's cottage in pale blue; plaque reads "Piazza Ceiling / Mildew returns each summer / Wash, mildewcide primer, two coats"; the porch ceiling photo fills the piazza area.
- **Coastal timing story (house #4):** facade is a raised beach house in sage; plaque reads "James Island Marsh / Dew sets by mid-morning / Exterior timed around humidity"; weather window tool output sits inside.
- **Footer:** a tiny row of three facades in ink-on-paper, no color, acting as a decorative rule above the disclaimer.

The `data-sw-signature` hook is placed on the facade primitive in the hero. Every other use reuses the same CSS class `.facade-plaque`.

## 4. Type

- **Display:** Cormorant Garamond (serif, variable wght 300–700). Refined transitional serif with old-style figures, like a historic district plaque. Used for h1, section headings, and the plaque's street-feeling line. Not in the registry yet; never used in painter niche.
- **Text:** Source Serif 4 (serif, variable opsz 8–60, wght 200–900). Workhorse text serif with optical sizes; pairs with Cormorant as a quieter reading voice for body copy and tool output. Not in the registry; unique pair.
- **Accent:** DM Mono (mono, wght 300–500). Low-contrast mono for plaque labels, sample tags, tool inputs, and data lines. Provides the "plaque engraving" feel against the serif display.

Why the pair suits the thesis: Cormorant reads as heritage inscription (the plaque's voice), Source Serif 4 reads as quiet documentation (the homeowner's explanation), and DM Mono reads as engraved label (the plaque's metadata). All three are serifs or serif-adjacent, avoiding the modern-tech feel that would clash with Charleston's historic tone.

## 5. Palette

Family name: **"Charleston Green + Haint Blue + Plaster"**

| Role | Hex | Name |
|---|---|---|
| ink | #1a1c1e | Charleston Green (near-black, the shutter/gate color) |
| paper | #f4efe6 | Plaster (warm off-white, stucco walls) |
| deep | #2d3a3e | Deep Green (darker Charleston Green, for dark bands) |
| accent | #7fb3c4 | Haint Blue (porch ceiling blue, text on dark only) |
| signal | #8b5e3c | Warm Ochre (historic trim color, text on paper only) |

### Contrast table (verified with `node tools/contrast.mjs`)

| Foreground | Background | Ratio | Body ≥4.5 | Large ≥3 | Use |
|---|---|---|---|---|---|
| #1a1c1e (ink) | #f4efe6 (paper) | 14.92 | pass | pass | body text on paper |
| #f4efe6 (paper) | #1a1c1e (ink) | 14.92 | pass | pass | reversed text on ink |
| #f4efe6 (paper) | #2d3a3e (deep) | 10.26 | pass | pass | body text on deep |
| #2d3a3e (deep) | #f4efe6 (paper) | 10.26 | pass | pass | headings on paper |
| #7fb3c4 (accent) | #2d3a3e (deep) | 5.12 | pass | pass | accent text on deep |
| #7fb3c4 (accent) | #1a1c1e (ink) | 7.44 | pass | pass | accent text on ink |
| #8b5e3c (signal) | #f4efe6 (paper) | 4.87 | pass | pass | signal text on paper |
| #8b5e3c (signal) | #1a1c1e (ink) | 3.06 | FAIL | pass | **never for body on ink; large text only or shapes** |
| #8b5e3c (signal) | #2d3a3e (deep) | 2.10 | FAIL | FAIL | **never for text on deep; shapes/rules only** |
| #1a1c1e (ink) | #7fb3c4 (accent) | 4.51 | pass | pass | ink text on accent bg (buttons) |

Rules derived:
- Haint blue (#7fb3c4) is used for text **only on deep or ink backgrounds**, never on paper.
- Warm ochre (#8b5e3c) is used for text **only on paper**, never on deep or ink. On dark backgrounds it appears only as non-text shapes (rules, borders, facade fills).
- Focus ring: #7fb3c4 on deep (5.12:1) and on ink (7.44:1) both pass ≥3. On paper, focus ring uses #8b5e3c (4.87:1 ≥3).
- Button: white (#f4efe6) on ink (#1a1c1e) = 14.92:1 pass. White on deep (#2d3a3e) = 10.26:1 pass.

## 6. Hero family

**Family 9 — Horizontal filmstrip.** Under the headline, a slow side-scrolling strip of five facade frames drifts left: pastel pink single house, yellow Victorian, blue Freedman's cottage, sage beach house, near-black shuttered door. Pauses on hover/focus; stops with reduced motion. Unique in the painter niche (no sibling uses family 9); ≤3 in the library.

What breaks the cliché: the filmstrip shows *architecture*, not paint cans or smiling painters. Each frame is a house type, not a product shot. The drift speed is slow enough to read as a street walk, not a carousel.

## 7. Motion score

- **Intro (≤1.2s, skippable):** Shutters on the hero frame swing open (rotateY -90deg → 0, 800ms, ease-out) to reveal the headline; then the filmstrip begins its drift. With reduced motion: shutters are already open, filmstrip is static.
- **Scroll story 1 (facade slide):** As each section enters the viewport, the corresponding facade slides in from the right (translateX 100% → 0, 900ms, ease-io) and its plaque fades up. Verb: **slide**.
- **Scroll story 2 (plaque glow):** When a section is centered, its porch ceiling area glows haint blue (opacity 0 → 1 on a blue overlay, 600ms). Verb: **glow**.
- **Hover language:** A hairline under nav links and CTA buttons grows from left via scaleX(0→1), 200ms, transform-origin left. One language site-wide.
- **Reduced motion:** All facades are statically positioned in their sections; no slide, no glow, no filmstrip drift. Content is fully readable without any animation.

## 8. Tools

1. **Historic color explorer** (brief §5 #7). Inputs: house style dropdown (Charleston single house, Victorian, Craftsman, Freedman's cottage). Output: 4–6 color families typical of that style, shown as swatches with names written by us (no brand codes). Kit module: `tabs` (one tab per style). Hand-off: "Price a historic repaint" button with `data-service="Historic exterior repaints"` pre-fills the form.
2. **Exterior weather window** (brief §5 #6). Inputs: month dropdown. Output: typical temperature and humidity notes for Charleston, why painters watch dew and night lows, labelled "typical". Uses a fixed table rendered from facts. Kit module: `tabs` (one tab per season group). Hand-off: "Price an exterior job" button with `data-service="Coastal exterior painting"`.
3. **ZIP checker** (required). Input: ZIP code. Output: yes/no with aria-live; yes offers the form with ZIP prefilled. Kit module: `zip`.
4. **Multi-step quote form** (required). 4 steps: service → job details → when → contact. Kit module: `form`.

## 9. Voice

Three sample sentences:
- "Salt air and afternoon storms set the schedule; we start early and stop before the dew comes back."
- "The old yellow was matched from a chip taken under the eaves, so the new coat sits right next to the neighbors."
- "Shutters are stripped in the shop and brought back glossy; every louver is clean and no hinge is painted shut."

Five words never used: guarantee, emergency, same-day, bonded, transform.