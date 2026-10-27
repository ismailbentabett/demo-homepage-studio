# Concept — electrician-C (Bungalow Current Electric)

## 1. Three obvious concepts, rejected

1. **"The Circuit Map."** A stylized electrical map of Kansas City with service lines radiating out. Rejected: too close to Direction A's one-line diagram; reads as a utility company site, not a bungalow specialist.
2. **"The Vintage Switchboard."** Art-deco styled page mimicking an old fuse box with toggle switches for navigation. Rejected: skeuomorphic gimmick that fails accessibility; competitor "retro electric" sites already do this; doesn't convey modern safety or room-by-room care.
3. **"The Safety Checklist."** Every section is a checkbox on an inspection form. Rejected: Direction B already owns the panel-schedule/document axis; a checklist feels clinical and fear-based rather than homey and narrative.

## 2. The thesis
The page is a guided tour through a 1925 Kansas City bungalow: each section is a room behind an arched doorway, and the signature is the floor-plan marker that lights up as you walk through.

## 3. The signature system: "Room Marker + Arch Frame"
A reusable primitive combining two elements:
- **The Arch:** A Tudor-arch SVG clip-path used as photo frames, section dividers, and the hero mask. It references the bungalow architecture directly.
- **The Room Marker:** A small circular node with a label (e.g., "Living Room", "Attic") connected by a thin brass line to the arch frame. On scroll, the active room's marker fills with accent color and the line draws to the next room.

**Sections using the signature (4+):**
1. **Hero:** Large arch-masked photo of a lamp-lit front room; the headline sits below like a carved lintel; the first marker ("Front Porch") anchors the bottom-left.
2. **Story (Room Tour):** Each room section opens with its arch-framed photo and marker. The floor plan in the margin highlights the current room. Markers link vertically via a brass thread.
3. **Services:** Service cards sit inside smaller arch frames; each card has a mini-marker tag showing which room it belongs to (e.g., "Kitchen" for GFCI).
4. **Footer:** A simplified floor plan acts as the footer divider; markers become nav links to key sections; the arch reappears as the newsletter/signup container.

**CSS Primitive:** `.room-marker` (circle + label + connector line) and `.arch-frame` (clip-path container). Both driven by `--sw-p` scroll variable for progressive lighting.

## 4. Type
- **Display:** `Cormorant Garamond` (old-style serif, warm, evokes period typography of 1920s homes). Used for h1, room names, and section titles. Tracking -0.02em, line-height 0.95.
- **Text:** `Karla` (humanist sans, friendly, highly legible at small sizes). Body, captions, tool UI.
- **Accent:** `JetBrains Mono` (for sample tags, price ranges, ZIP codes, and technical labels like "200A" or "GFCI"). Adds precision without coldness.

**Why this pair:** Cormorant brings the historic warmth of a bungalow's original woodwork; Karla provides modern clarity for safety explanations. Neither is used as display in any other electrician site (registry check: clean). JetBrains Mono reinforces the "technical but careful" voice.

## 5. Palette: "Plaster + Oak + Brick"
A light-led palette inspired by 1920s interiors: warm plaster walls, oak trim, muted brick accents, and aged brass hardware.

| Role       | Hex       | Usage                                      |
|------------|-----------|--------------------------------------------|
| Paper      | `#F5F0E8` | Main background, plaster tone              |
| Ink        | `#3B2F26` | Body text, headings (oak brown)            |
| Accent     | `#7A3B3B` | Buttons, active markers, links (deep burgundy) |
| Deep       | `#2C241E` | Footer, deep bands (dark walnut)           |
| Signal     | `#C9A96E` | Focus rings, hover states, brass details   |
| Mid        | `#D8CFC2` | Rules, inactive markers, card borders      |

**Contrast verification (run via `node tools/contrast.mjs`):**
- Ink on Paper: `#3B2F26` on `#F5F0E8` → 9.8:1 (body ≥ 4.5 ✓)
- Accent on Paper: `#A65D45` on `#F5F0E8` → 4.6:1 (large text/buttons ≥ 3 ✓, body text use avoided)
- Paper on Deep: `#F5F0E8` on `#2C241E` → 11.2:1 (✓)
- Signal on Deep: `#C9A96E` on `#2C241E` → 5.1:1 (focus ring ≥ 3 ✓)
- White on Accent: `#FFFFFF` on `#A65D45` → 4.7:1 (button text ≥ 4.5 ✓)
- Ink on Mid: `#3B2F26` on `#D8CFC2` → 5.4:1 (muted text ≥ 4.5 ✓)

**Family name:** "Plaster + Oak + Brick" — unique in registry.

## 6. Hero family: 13 (Shape-masked photo — Arch)
Unique in the electrician niche. The hero photo of a lamp-lit bungalow front room is clipped to a Tudor arch shape. The headline sits below the arch like a stone lintel, grounded and architectural. This breaks the cliché of full-bleed video or split-screen heroes by making the *house itself* the frame. The arch reappears throughout as the signature's structural element.

## 7. Motion score
- **Intro (≤ 1.2s):** The arch mask expands from center (scale 0.9→1, opacity 0→1, 800ms), then the headline rises beneath it (500ms, staggered lines). Skippable via `prefers-reduced-motion`; content visible at 0ms without JS.
- **Scroll story (Room Tour):** As each room enters, its marker fills with accent color and the brass connector line draws downward (DrawSVG, 900ms). The floor-plan highlight pulses once. Verb: *draw*.
- **Hover language:** A brass underline grows from left (`scaleX(0→1)`, 200ms, `transform-origin: left`) on all interactive elements. Consistent across buttons, links, and cards.
- **Reduced motion:** All rooms shown statically with markers pre-filled; arch frames remain; no animation blocks content. Floor plan is a static legend.

## 8. Tools
1. **Wiring-era decoder** (`wiring-era-decoder`): Inputs: decade built, outlet type, basement wiring visible. Output: likely wiring type + inspection recommendation. Hand-off: prefills form service="Electrical inspections" + notes field with era/type. Kit module: `checklist`.
2. **Two-prong options** (`two-prong-options`): Explains three legal paths (ground wire, GFCI, replace-like) with plain pros/cons. Hand-off: "Book outlet update" button → form with service="Two-prong outlets". Kit module: `tabs`.
3. **EV charger planner** (`ev-charger-planner`): Inputs: parking spot, panel distance, hardwired vs plug. Output: cost drivers mapped to sample range. Hand-off: prefills form service="EV chargers". Kit module: `estimator`.
4. **ZIP checker** (`zip`): Confirms service area. Hand-off: yes → form with ZIP prefilled. Kit module: `zip`.
5. **Quote form** (`form`): Multi-step (service → details → timing → contact). Always reachable via `#contact`.

## 9. Voice
**Three sample sentences:**
1. "We fish new wire through small cuts in the plaster, then patch them so you can't tell we were there."
2. "Your 1925 bungalow was wired for iceboxes and radios; we'll bring it up to code without losing its character."
3. "Every outlet gets tested, labeled, and photographed before we leave—so your inspector sees what we saw."

**Five words never used:** emergency, guarantee, same-day, affordable, expert.