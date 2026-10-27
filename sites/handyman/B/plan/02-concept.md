# Concept — handyman-B (Pegboard Home Repair)

## 1. Three obvious concepts, rejected

1. **Toolbelt hero.** A smiling man in a toolbelt with "No job too small!" over it. Rejected: it is the exact cliché brief §4 warns against; every competitor does it, and it says nothing about Ann Arbor or prices.
2. **Generic service grid.** 30 icons including roofing and electrical panels. Rejected: template layout that hides what Pegboard actually does (small repairs, punch lists) and claims work that needs licensed trades.
3. **Before/after gallery.** Side-by-side stock photos of remodels. Rejected: DEMO-RULES §5 forbids before/after with unrelated stock; also misrepresents a handyman as a remodeler.

## 2. The thesis

The page is a workshop pegboard: every section hangs on painted tool outlines, and adding a job to the list lifts its tool off the wall into a running tray at the bottom of the screen.

## 3. The signature system — "Pegboard Hang-Tag"

A CSS primitive: a 1px peg-hole grid background + a tool-outline SVG (hammer, drill, wrench, tape) with a hang-tag pill showing hours or price. Appears in four sections with variation:
- **Hero:** mosaic tiles sit on peg holes; headline tag reads "Pick your jobs. See the hours."
- **Services:** each service card has a tool outline on the left; the hang-tag shows typical hour band from facts; hover lifts the tool 4px.
- **Proof:** review cards are pinned notes with a small tape-measure outline; the Sample rating sits in a tag.
- **Footer:** a single hammer outline with the call button as its hang-tag; peg holes fade out at the bottom edge.

Hook: `data-sw-signature` on the services grid drives the lift-off animation when an item is added via the estimator.

## 4. Type

- **Display:** Big Shoulders (condensed, variable wght+opsz). Industrial Chicago feel, matches shop-wall stencils. Used ≤ 3 times in registry (currently 0), never in handyman niche.
- **Text:** Outfit (grotesk, variable wght). Clean, slightly geometric, pairs well with condensed display without competing. Unique pair in registry.
- **Accent:** DM Mono (label). For hour counts, sample tags, ZIP feedback. Already used as accent elsewhere but never paired with Big Shoulders + Outfit.

Why: Big Shoulders gives the tall stencil voice the brief asks for; Outfit keeps body readable at 17–19px; DM Mono makes numbers look measured, not marketed.

## 5. Palette — "Workshop Teal + Safety Gold"

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1C3A38 | paper #F0E6D2 | 9.90 | body on paper |
| paper | #F0E6D2 | ink #1C3A38 | 9.90 | body on deep (reversed) |
| accent | #5C4A3A | paper #F0E6D2 | 6.79 | accent words on paper only |
| deep | #1C3A38 | signal #E8C468 | 7.31 | section bg, reversed text |
| signal | #E8C468 | deep #1C3A38 | 7.31 | buttons, tags on deep, focus ring |
| mid | #5A7A76 | paper #F0E6D2 | 3.02 | muted rules, non-text shapes only |

Family name unique in registry. Accent #A34E18 never used on deep; signal #E8C468 carries all text on dark backgrounds. Focus ring uses signal on every tone (≥ 3:1 verified).

## 6. Hero family — 8 (Photo mosaic)

Unique in handyman niche (A uses 10, C uses 5). Library count: 0. Mosaic tiles arranged like tools on a pegboard, headline on a center tag. Breaks the cliché by making the grid the metaphor, not decoration: each tile is a job you can pick, not a portfolio shot.

## 7. Motion score

- **Intro:** mosaic tiles drop onto pegs with a 60ms stagger, settle with a micro-bounce (scale .98→1), 900ms total, skippable via reduced motion.
- **Scroll story 1:** hang-tags swing in (rotate -3deg→0 + opacity) as each service enters viewport.
- **Scroll story 2:** adding an item in the estimator lifts its tool outline upward (translateY -12px) and fades it into the list tray.
- **Hover:** hairline underline grows from left via scaleX(0→1), 200ms, one language site-wide.
- **Reduced motion:** all tiles visible, no swing or lift, content complete without animation.

## 8. Tools

1. **Punch-list builder** (`estimator` module). Inputs: checkboxes for 8 services + size/count. Output: hour band per item, total band, visit fit (2h / half-day / full-day). Hand-off: "Price it" button pre-fills form with selected services via `data-service`.
2. **Fix-or-specialist triage** (`checklist` module). Inputs: 6 common symptoms. Output: "handyman fix" / "needs licensed trade" / "inspect first". Hand-off: if handyman-fix, offers "Add to list"; if licensed, shows call button with note.
3. **Photo-to-quote checklist** (`tabs` module). Tabs: wide shot / close-up / tape measure / model number. Each tab shows a sample frame and a one-line instruction. Hand-off: "Text these to {{biz.phone}}" link opens sms:.
4. **ZIP checker** (`zip` module). Standard. Pre-fills form ZIP on success.
5. **Quote form** (`form` module). Multi-step, service pre-filled from tool.

## 9. Voice

Three sentences:
- "Pick the jobs, see the hours, then text us the photos for a firm number."
- "If it needs a licensed trade, we'll tell you before we start."
- "Most punch lists fit a half-day visit; we price by the hour so you know the band."

Five words never used: emergency, same-day, guarantee, bonded, free.