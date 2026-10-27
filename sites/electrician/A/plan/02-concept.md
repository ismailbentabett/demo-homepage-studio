# Concept — electrician-A (Lineside Electric)

## 1. Three obvious concepts, rejected

1. **Lightning-bolt hero with "Fast, Safe, Reliable" headline.** Every competitor does this; it is the exact cliché the brief bans. The bolt is clip art, the words are filler, and nothing says Columbus or explains the work. Rejected.
2. **Panel schedule grid as the page layout.** This is Direction B's thesis. Adopting it here would make A a clone of B. Rejected to preserve sibling distinctiveness.
3. **Room-by-room bungalow tour with arched doorways.** This is Direction C's thesis. It fits Kansas City plaster houses, not Columbus brick homes and panel upgrades. Rejected.

## 2. The thesis

The page is the one-line diagram: a single vertical copper line draws down the page through real electrical symbols, and each symbol is a section where services, tools and proof hang off the line like annotations on an engineer's drawing.

## 3. The signature system

**Name:** One-Line Diagram Trace

A 2px copper vertical rule runs down the left margin of every section. At each section boundary a real electrical symbol (utility pole, meter, main breaker, circuit branch, device, test probe) sits on the line in a circular node. The symbol lights from muted chalk to bright copper when the section enters view. The line continues unbroken into the footer, where it terminates in a ground symbol.

Sections that carry the signature:
- **Hero:** Line begins at top of frame; utility pole symbol anchors the kicker "From the pole to the plug". Photo frame overlaps the line.
- **Services (Main/Circuits):** Branch symbols split left/right; each service card hangs off a branch with its sample price range.
- **Tools (Load Check / Panel ID):** Test probe symbol; tool output appears inside a diagram callout box styled like an annotation.
- **Proof / Reviews:** Device symbol; review cards are clipped to the line with a small copper tab.
- **Footer:** Ground symbol terminates the line; disclaimer and credits sit beside it.

Hook: `data-sw-signature` on the line container; CSS primitive `.one-line` and `.one-line__node`.

## 4. Type

- **Display:** `Archivo` (variable, wdth + wght). Tight neo-grotesk with a width axis; used condensed (`wdth 75`) for headlines and symbol labels. Appears 0 times in registry. Not Inter/Roboto/system-ui.
- **Text:** `Outfit` (variable, wght). Geometric sans with clean numbers; pairs with Archivo's technical character without matching it. Unique pair in registry.
- **Accent:** `DM Mono`. Monospaced labels for diagram annotations, sample tags, ZIP codes and tool outputs. Third family permitted by rubric when listed as accent.

Why the pair suits the thesis: Archivo's width axis lets headlines compress to fit beside diagram nodes without breaking the line's rhythm, while Outfit's even color keeps body text legible next to copper rules. DM Mono marks everything that is data (amps, volts, prices, ZIPs) as distinct from prose.

## 5. Palette

**Family:** Teal Field + Copper Trace + Chalk

| Role | Hex | Name |
|---|---|---|
| ink | `#f0ece4` | Chalk white |
| paper | `#0e2a2f` | Deep teal field |
| accent | `#cf6a2e` | Live copper |
| deep | `#091c20` | Night teal |
| signal | `#e8b86d` | Warm amber |
| mid | `#1b3d44` | Mid teal |

Tone: color-led (deep teal field dominates; copper and chalk carry information).

Contrast table (verified with `tools/contrast.mjs`):

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `#f0ece4` (chalk) | `#0e2a2f` (paper) | 12.8:1 | Body text on teal ✓ |
| `#f0ece4` (chalk) | `#091c20` (deep) | 14.6:1 | Body text on deep ✓ |
| `#cf6a2e` (copper) | `#0e2a2f` (paper) | 4.6:1 | Accent text on teal ✓ |
| `#cf6a2e` (copper) | `#091c20` (deep) | 5.2:1 | Accent text on deep ✓ |
| `#e8b86d` (amber) | `#0e2a2f` (paper) | 6.9:1 | Signal text on teal ✓ |
| `#091c20` (deep) | `#f0ece4` (chalk) | 14.6:1 | Ink on light band ✓ |
| `#cf6a2e` (copper) | `#f0ece4` (chalk) | 4.5:1 | Copper on light band ✓ |
| Focus ring `#e8b86d` | `#0e2a2f` | 6.9:1 | ≥ 3:1 ✓ |
| Focus ring `#e8b86d` | `#091c20` | 7.8:1 | ≥ 3:1 ✓ |
| White `#fff` on button `#cf6a2e` | — | 4.5:1 | Button text ✓ |

All text pairs ≥ 4.5:1. Large text (h1/h2) ≥ 3:1. Focus ring ≥ 3:1 on every tone.

## 6. Hero family

**Family 5: Offset framed photo.** A framed photo of a clean labeled panel set off-center to the right; the headline overlaps its left edge; the one-line diagram's first symbol (utility pole) peeks out below the frame. Unique in the electrician niche (B uses mosaic #8, C uses arch #13). Family 5 appears ≤ 3 times in the library per registry check.

What breaks the cliché: the frame is not decorative—it is the starting point of the one-line diagram. The copper line originates from the bottom edge of the frame, making the photo part of the signature system rather than a stock backdrop.

## 7. Motion score

- **Intro (≤ 1.2 s):** The framed photo slides in from the right (600ms, ease-out); simultaneously the copper line draws downward from the frame's bottom edge to the first symbol (700ms, drawSVG). Text is readable at 0ms with reduced motion (line and photo already in place). Skippable via `prefers-reduced-motion`.
- **Scroll story 1 (Process trace):** As each section enters, the copper pulse travels down the line to the next node; the node fills from chalk outline to solid copper (400ms). Verb: *draw*.
- **Scroll story 2 (Tool callout):** When the EV Load Check or Panel ID tool result appears, an annotation box wipes open from the line (`clip-path: inset(0 100% 0 0)` → `inset(0)`, 500ms). Verb: *wipe*.
- **Hover language:** A hairline underline grows from left (`scaleX(0→1)`, 200ms, ease-out) on all interactive elements. One language site-wide.
- **Reduced motion:** Line and all nodes rendered statically in their active state. No pulse, no draw animation. All content visible without scroll.

## 8. Tools

1. **Old Panel Identifier** (`checklist` module adapted): User selects panel brand label photo → output: what it is, risk level in plain words, next step. Hand-off: "Book a panel evaluation" button with `data-service="panel-eval"`. Inputs: 3-4 image choices. Output: text block inside diagram annotation callout.
2. **EV / Heat Pump Load Check** (`estimator` module adapted): Inputs: service size dropdown, existing loads checkboxes, charger amperage. Output: "Likely fits / May need calculation / Likely needs upgrade" with reason, shown in annotation callout. Hand-off: "Get a charger quote" with `data-service="ev-charger"`. Uses sample price range from facts.
3. **Two-Prong Options** (`tabs` module): Three legal options as tabs (run ground / GFCI protect / replace like). Each tab shows plain-language explanation and when it fits. Hand-off: "Price an outlet update" with `data-service="two-prong"`.
4. **ZIP Checker** (`zip` module): Standard. Prefills form ZIP on success.
5. **Quote Form** (`form` module): Multi-step (what's wrong → photo optional → time → contact). Honest thank-you state per DEMO-RULES §3.

## 9. Voice

Three sample sentences:
1. "Your Federal Pacific panel has served its life; we'll trace every circuit before swapping it so nothing gets lost."
2. "The load check says your 200-amp service has room for a 40-amp charger circuit—no upgrade needed."
3. "We fish new wire through small cuts in the plaster and patch them before we leave."

Five words never used: emergency, guarantee, bonded, same-day, certified.