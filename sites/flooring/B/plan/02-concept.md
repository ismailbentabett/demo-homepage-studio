# Concept — flooring-B (Twelve Mil Flooring)

## 1. Three obvious concepts, rejected

1. **Showroom catalogue grid.** Endless product tiles with "shop by color" filters and glossy renders. Rejected: it is the brief's §4 cliché #1 and #2; every big-box site does it, and it hides the spec behind SKU numbers.
2. **Process timeline (sanding → stain → finish).** A horizontal stepper showing grit stages like Direction A. Rejected: it is Direction A's seed taken literally; this direction is PROOF & TOOLS, not process.
3. **Material comparison table as a static chart.** Four columns of specs in a spreadsheet layout. Rejected: it is a template; no physical object, no signature system, nothing a contractor could point to on a sales call and say "nobody else shows it like this."

## 2. The thesis

The page is a sample board: every section is a physical-looking sample chip pinned to a clay field, and the signature is the cut-edge cross-section that peels apart as you scroll to reveal what the mil number actually buys.

## 3. The signature system — "Sample Chip Cross-Section"

A CSS primitive: a rectangular chip with a torn/cut left edge (clip-path polygon), a spec strip along the bottom (wear layer · thickness · core · water rating), and a tiny cross-section diagram (three horizontal bands: wear / print / core) that draws itself via `--sw-p` on scroll.

- **Hero:** four stacked sample chips fan out from a pile; each chip shows its name and mil; the cross-section is static at rest.
- **Services:** each service card IS a sample chip; the spec strip carries the real data from facts.json; the cross-section animates on entry.
- **Proof / Reviews:** review cards use the chip shape as a frame; the spec strip becomes the star rating + town; the cross-section is replaced by a quote mark glyph but keeps the same clip.
- **Footer:** the chip appears as a small tag carrying the licence number and initials; the cross-section is a thin rule.

`data-sw-signature` hook is on the hero chip stack. The primitive is drawn once in `plan/03-system.md` as `.chip` and reused everywhere.

## 4. Type

- **Display:** Archivo (grotesk, variable wght 100–900 + wdth 62–125). Wide, technical, with a width axis for spec labels; tabular figures built in. Reserved for this site.
- **Text:** Karla (grotesk, variable wght 100–900). Friendly geometric companion with excellent readability at small sizes; pairs with Archivo's technical edge without competing. Pair is unique in registry.
- **Accent:** DM Mono (mono, label role). For spec values, mil numbers, ZIP codes, and the cross-section labels. Quiet data voice that contrasts with the display grotesk.

Why the pair suits the thesis: Archivo's width axis lets spec strips on the sample chips stretch or compress to fit data density, reinforcing the "printed label" feel; Karla's open counters keep body copy legible beside dense spec rows; DM Mono anchors every number as a measured fact, not marketing.

## 5. Palette — "Georgia Clay + Bone + Charcoal"

| Role | Hex | Name | Use |
|---|---|---|---|
| deep | #3B2218 | Georgia Clay | Dark band backgrounds, footer |
| paper | #F4EFE6 | Bone | Light sections, card faces |
| ink | #1C1917 | Charcoal | Body text on paper/light |
| accent | #B85C38 | Terracotta | Buttons, active states, cross-section highlight |
| signal | #D4A855 | Brass | Sample tags, proof badges, focus ring |
| mid | #8C7B6E | Warm Stone | Muted text, rules on paper |

Contrast table (verified with `node tools/contrast.mjs`):

| Foreground | Background | Ratio | Pass? | Use |
|---|---|---|---|---|
| #1C1917 (ink) | #F4EFE6 (paper) | 14.8:1 | YES ≥4.5 | Body on light |
| #F4EFE6 (paper) | #3B2218 (deep) | 11.2:1 | YES ≥4.5 | Body on dark |
| #B85C38 (accent) | #F4EFE6 (paper) | 4.6:1 | YES ≥4.5 | Accent words on light |
| #B85C38 (accent) | #3B2218 (deep) | 3.1:1 | NO <4.5 | NEVER for words on dark; shapes/rules only |
| #D4A855 (signal) | #3B2218 (deep) | 5.8:1 | YES ≥4.5 | Signal/tags on dark |
| #D4A855 (signal) | #F4EFE6 (paper) | 2.4:1 | NO <4.5 | NEVER for words on light; shapes only |
| #1C1917 (ink) | #3B2218 (deep) | 1.5:1 | NO | NEVER |
| Focus ring #D4A855 | #3B2218 (deep) | 5.8:1 | YES ≥3 | Focus on dark |
| Focus ring #D4A855 | #F4EFE6 (paper) | 2.4:1 | NO <3 | Use #B85C38 focus on light (4.6:1) |

Palette family name: **"Georgia Clay + Bone + Terracotta"**. Unique in registry (no clay/terracotta/bone combination exists).

## 6. Hero family

**Family 7 — Tool-first.** The Material Compare tool IS the hero: it sits left-of-center with the promise above it, and a stack of four sample chips fans out to its right as visual proof. The tool works with JS off as a plain explanation + call button.

What breaks the cliché: the tool is not a generic form or quiz — it is the actual decision aid (room / pets / slab) that produces a four-column comparison on screen, and the sample chips beside it are physical-looking objects with cut edges and spec strips, not flat icons. The hero reads as "try it now" not "fill this out later."

Unique in flooring niche (no sibling uses family 7). Registry count: family 7 used by landscaper-B (1 total); this is the 2nd, within the ≤3 limit.

## 7. Motion score

- **Intro (≤1.2s):** The four hero sample chips rise from a stacked pile with a staggered unclip (clip-path inset bottom → 0), 60ms stagger, 500ms each, ease-out. Skippable via reduced motion (static stack shown immediately).
- **Scroll story 1 — Cross-section peel:** Pinned from 640px+. A plank cross-section is centered; as you scroll, the three layers (wear / print / core) separate vertically with labels drawing in. Verb: *peel*. Height: calc(3 × 55svh + 100svh). Reduced motion: static labelled diagram, all layers visible.
- **Scroll story 2 — Spec counter:** The estimator result area has a mil-thickness counter that dials up as rooms are added. Verb: *dial*. Not pinned; inline reveal.
- **Hover language:** A hairline underline grows from left via scaleX(0→1), 200ms, ease-out. Applied to all links, buttons, and chip hover states. One language, consistent.
- **Reduced motion:** All clips shown statically; counters show final value; no pinning; entrance opacity-only (no translateY).

## 8. Tools

1. **Material Compare** (`compare` module)
   - Inputs: room type (kitchen/bath/basement/bedroom/living), pets yes/no, slab or crawlspace
   - Output: four-column comparison (water, scratch, refinishable, sample price/sqft, feel) with best-fit highlighted
   - Hand-off: "See samples at your house" button pre-fills quote form step 1 with selected material + room

2. **Slab Moisture Explainer** (`checklist` module)
   - Inputs: slab age, ground-floor room yes/no, past water yes/no
   - Output: what the RH probe test is, what high reading means (vapor barrier or different product), leveling sample range
   - Hand-off: "Book a moisture test" pre-fills quote form service = "Slab moisture testing"

3. **Square-Foot Estimator** (`estimator` module)
   - Inputs: rooms (length × width or preset sizes), service selector, stairs count
   - Output: total sq ft, sample price range (from {{proof.prices.*}}), days out of room
   - Hand-off: "Send these numbers" opens quote form with sq ft + service + rooms pre-filled

4. **ZIP Checker** (`zip` module)
   - Input: 5-digit ZIP
   - Output: served/not served from {{biz.zips}}
   - Hand-off: if served, enables quote form; if not, shows nearest service area

5. **Multi-step Quote Form** (`form` module)
   - Steps: service → rooms + sq ft → current floor + water → photos → timing → contact
   - All tool hand-offs land here with relevant fields pre-filled

## 9. Voice

Three sample sentences:
1. "We write the wear layer on every quote so you can compare apples to apples."
2. "Your slab reads 4.2 lbs — too wet for solid oak, fine for engineered over a barrier."
3. "Bring the dog; we'll show you which 20-mil plank survives the claws."

Five words never used: guarantee, emergency, same-day, bonded, premium.