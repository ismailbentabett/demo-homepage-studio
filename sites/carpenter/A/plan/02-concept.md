# Concept — carpenter-A

## Three obvious concepts, rejected

1. **Craftsman portfolio grid.** Masonry gallery of finished projects with "Quality Craftsmanship" headline. Rejected: every competitor does it; ignores the repair/match work that defines old-house carpentry; no process shown.
2. **Tool-belt hero with trust badges.** Smiling carpenter + hammer + "Licensed · Insured · Free Estimates". Rejected: stock cliché from brief §4; violates DEMO-RULES (no badges, no free estimate wording); says nothing about splice/match skill.
3. **Before/after slider showcase.** Two unrelated photos slid together as "transformation". Rejected: brief §4 explicitly bans; violates DEMO-RULES §5 (no fake before/after); hides the actual joint work.

## The thesis

The page is a cut list: every section is a numbered cut on the sheet, headed by a dimension line with ticks, and the signature is the kerf mark that grows as you scroll toward the finished joint.

## Signature system: Cut List + Kerf Rule

A CSS primitive `.cut-rule` draws a horizontal dimension line with left/right tick marks and a centered mono label "CUT NN · PART · DIMS · SPECIES". It appears in ≥4 sections with variation:
- **Hero:** full-width dimension line spans viewport; label reads "CUT 00 · SCARF & SASH · PORTLAND ME · WHITE OAK"; filmstrip frames are numbered 00–06 matching cuts.
- **Rot Repair story (Cut 02):** rule carries "CUT 02 · SILL DUTCHMAN · 2½ × 7 × 38 · WHITE OAK"; SVG scarf-joint drawing animates beneath.
- **Matched Trim cards (Cut 03):** each card tops with its own cut rule ("CUT 03a · CASING · ¾ × 3¼ · PINE"); kerf divider between cards.
- **Footer:** final rule reads "CUT 99 · FINISHED JOINT · ALL PIECES MET"; kerf line becomes the footer top border where all cuts converge.

Hook: `data-sw-signature` on every `.cut-rule`; scroll-linked `--sw-p` drives kerf width growth and number counting.

## Type

- **Display:** Young Serif (heavy rounded old-style serif; homely confidence suits old-house work; ≤3 uses in registry, 0 in carpenter niche).
- **Text:** Source Serif 4 (variable opsz/wght; workhorse text serif with old-style figures for dimensions; unique pair with Young Serif).
- **Accent:** DM Mono (low-contrast mono for cut numbers, dimensions, tolerances; never body text).

Pair rationale: Young Serif's rounded weight echoes hand-planed wood; Source Serif 4's old-style figures align with dimension callouts; DM Mono tags each cut like a shop ticket.

## Palette: Harbor Teal + Clapboard Cream + Oxide Red + Brass

| Role | Hex | Name |
|---|---|---|
| ink | #1b2631 | Harbor Teal Deep |
| paper | #f4efe6 | Clapboard Cream |
| mid | #e8e1d5 | Weathered Trim |
| deep | #1b2631 | Harbor Teal Deep |
| accent | #c9a24d | Brass Fitting |
| signal | #8b3a3a | Oxide Red |

**Contrast table (verified via tools/contrast.mjs):**
- ink (#1b2631) on paper (#f4efe6): 13.40:1 — body ✓ large ✓
- ink (#1b2631) on mid (#e8e1d5): 11.81:1 — body ✓ large ✓
- paper (#f4efe6) on ink/deep (#1b2631): 13.40:1 — body ✓ large ✓
- accent (#c9a24d) on deep (#1b2631): 6.40:1 — body AA ✓ (used only for large labels/cut-numbers ≥18px bold)
- paper (#f4efe6) on signal (#8b3a3a): 6.63:1 — body AA ✓ (signal buttons carry white-on-signal, see next)
- signal (#8b3a3a) on paper (#f4efe6): 6.63:1 — body AA ✓ (text links/borders only)
- focus ring (#c9a24d) on deep (#1b2631): 6.40:1 ≥ 3 ✓
- White (#ffffff) on signal (#8b3a3a): 6.63:1 ≥ 4.5 ✓ (primary button)

Signal is never used as body text on paper; only as button bg with white text or as border/rule.

## Hero family: 9 — Horizontal filmstrip

Unique in carpenter niche; ≤3 in library. Strip of 7 process frames (measure → mark → saw → chisel → dry-fit → clamp → finish) drags sideways; headline sits above on paper band. Breaks cliché: frames are numbered CUT 00–06 matching the cut-list signature; strip pauses on hover/focus; reduced motion = static row of 3 key frames.

## Motion score

- **Intro (≤1.2s, skippable):** pencil line draws the hero dimension rule left→right; filmstrip slides in frame-by-frame with cut number counting 00→06.
- **Scroll story 1 (verb: draw):** pinned scarf-joint SVG separates old post + new piece, slides together on scroll, "glues" at 50%, ends painted.
- **Scroll story 2 (verb: stack):** cut-list rules wipe in via clip-path as each section enters; numbers count up.
- **Hover language:** hairline kerf grows from left via scaleX(0→1) under cut rules and cards.
- **Reduced motion:** all stories static-complete; filmstrip shows 3 frames; no auto-count; content fully readable without animation.

## Tools

1. **Repair-or-replace check (rot).** Inputs: part (sill/casing/post/tread), screwdriver depth, soft length %, paint condition. Output: "Patchable / New piece matched / Inspect framing" + sample price range from facts.proof.prices. Kit: `checklist`. Handoff: "Send a photo" scrolls to #contact with data-service="rot-repair".
2. **Cut list builder.** Input: job type dropdown. Output: parts list with dims/species/grain in mono. Kit: `estimator` (reuses price range display, labelled Sample). Handoff: "Get this drawn properly" → #contact with data-service.
3. **ZIP checker.** Standard `[data-zip]` against facts.biz.zips; yes → form prefill.
4. **Multi-step quote form.** Steps: problem → part → photo note → contact. Kit: `form`. Honest thank-you per DEMO-RULES §3.

## Voice

Three sentences:
- "We cut away the soft wood to sound stock and splice in new oak, primed on all six sides before it goes back."
- "Bring a six-inch offcut or a photo with a ruler; we will match the profile so the new piece disappears."
- "If a joint we made opens up within three years, we come back and fix it."

Five words never used: quality, craftsmanship, trustworthy, affordable, expert.