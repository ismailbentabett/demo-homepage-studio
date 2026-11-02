# Concept — irrigation-A (Lateral Line Irrigation)

## Three alternatives, then rejected

1. **Water-drop logo + blue-green palette + "quality you can trust."** Rejected: this is exactly what every competitor does (brief §4). Generic lawn-care template.
2. **Golf-course hero with sprinkler arc against blue sky.** Rejected: banned cliché, wrong for Bakersfield ranch houses and stucco.
3. **Generic service grid with 20 items and no prices.** Rejected: brief §4 lists this as a leave-in-5-seconds trigger.

## The thesis

The site is the yard itself: every section is one zone walked from valve box to last head, opened, shown, fixed and closed clean.

## The signature system

The valve-box lid. A round green-grey SVG lid stamped with the zone number appears at the top of every section. On scroll the lid lifts (clip-path + opacity) to reveal that step's content. The footer is the controller face listing all zones with their status. Appears in: hero, process, services, proof, tools, contact, footer.

## Type

- Display: **Bitter** (slab, variable wght 100-900). Sturdy slab serif for zone numbers and headlines, like stamped valve box lids.
- Text: **DM Sans** (grotesk, variable opsz 9-40 + wght 100-1000). Plain, readable body text with optical sizes.
- Pair rationale: Bitter's workmanlike slab weight reads as infrastructure; DM Sans stays out of the way for explanations. Neither used in irrigation niche before.

## Palette

Family: **Pre-dawn Valley + Valve Amber**

| Role | Hex | Use |
|---|---|---|
| ink | #E8E4DC | body text on deep |
| paper | #F0EDE6 | light section bg |
| deep | #141820 | pre-dawn dark sections |
| accent | #D4880F | valve amber: CTAs, zone stamps, active states |
| mid | #3A4250 | muted text on paper, rules |
| signal | #E8A830 | hover/focus glow |

Contrast checks (run via `node tools/contrast.mjs`):
- ink #E8E4DC on deep #141820: ~13.2:1 (passes AAA)
- deep #141820 on paper #F0EDE6: ~13.8:1 (passes AAA)
- accent #D4880F on deep #141820: ~6.1:1 (passes AA large text + UI)
- mid #3A4250 on paper #F0EDE6: ~7.8:1 (passes AA body)

## Hero family

**12 — Sticky photo, scrolling text.** A tall pre-dawn photo of sprinklers running over a lawn stays pinned while three lines scroll past: "Zone 3 won't shut off." / "We open the box." / "Closed, tested and quiet by 7." First line visible without scrolling. Phone + Price it above the fold.

## Motion score

- Intro (≤ 1.2 s): hero photo fades up from dark as first headline line rises, like the sky before sunrise. Skippable, never blocks reading.
- Scroll story 1: a drawn yard plan where the trench line draws itself from valve to head, one zone lighting per step. Pinned ≥ 640px only; stacked cards below.
- Scroll story 2: the valve-lid signature lifts per section via --sw-p clip-path.
- Entrances: text rises (opacity + translateY), images unclip (clip-path inset). Two patterns only.
- Hover: hairline under links/buttons grows scaleX(0→1) from left, 200ms.
- Reduced motion: everything visible statically, no pins, no clip reveals, lids shown open.

## Tools

1. **Zone symptom finder.** Inputs: what the zone does (won't start / won't stop / weak / mist / puddle / dry spot). Output: two likely causes in plain words, the part, sample price band. Hand-off: prefills form with "zone stuck on" etc.
2. **Bill-spike checker.** Inputs: last normal bill, this bill, season. Output: leak vs summer watering verdict + 3-minute meter test instructions. Hand-off: leak detection call.
3. **ZIP checker.** Standard kit module.
4. **Multi-step quote form.** 4 steps: service → job details → when → contact.

## Voice

Three sentences in voice:
- "We walk each zone with you, show you what failed, and price the fix before we dig."
- "One small hole, not a torn-up lawn."
- "The schedule changes with the weather, so you don't have to remember."

Five words never used: guaranteed, eco-friendly, award-winning, family-owned, free estimate.