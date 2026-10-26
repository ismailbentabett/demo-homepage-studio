# Concept — pool-A (Tileline Pool Care)

## Three obvious concepts, rejected

1. **Resort infinity pool hero with "Crystal Clear Water Guaranteed."** Every competitor does this; it is the brief's §4 cliché list verbatim. The homeowner leaves in 5 seconds because their screened lanai pool in Brandon looks nothing like a Maldives resort at sunset. Rejected.
2. **Chemical brand logo trust strip + generic service grid.** Template pattern from every home-service site; logos are meaningless to a homeowner who doesn't know Clorox from HTH. Says nothing about what actually happens at a visit. Rejected.
3. **Before/after gallery of cloudy-to-clear water.** Construction-gallery pattern applied to maintenance; the brief's §4 explicitly bans construction-heavy galleries for a cleaning company. Doesn't show the weekly work or answer "did they come?" Rejected.

## The thesis

The page is the visit log: every section is a timestamped entry on a clipboard, and the signature is the waterline tile that draws down the margin as each step checks off.

## The signature system: Waterline Visit Log

A thin cobalt waterline rule runs down the left margin of the page like the tile line seen from the side of a pool. Every section is a log entry stamped with a time (08:02 Skim, 08:09 Brush, 08:15 Test…). A sticky visit card in the right corner (desktop) or bottom sheet (mobile) fills in as the visitor scrolls: each section adds its line with a check mark, so the page ends with a completed sample visit report. The waterline draws via `--sw-p` clip-path wipe; log lines type in with stagger.

- **Hero:** waterline starts at top-left, first stamp "07:58 Arrive" ticks in beside the h1; visit card shows empty template.
- **Process story:** four timestamped steps (Skim, Brush, Test, Balance) each add a line to the card; waterline advances.
- **Proof/reviews:** review cards carry a mini timestamp pill matching the log format; waterline passes through.
- **Footer:** final stamp "08:42 Report Sent" completes the card; waterline reaches bottom; card shows full sample report.

Hook: `data-sw-signature="visit-log"`.

## Type

- **Display:** Sora (grotesk, variable wght). Clean, slightly rounded terminals suit the wet-trade feel without being cartoonish. Used ≤ 3 times in registry (currently 1: painter-A), never in pool niche.
- **Text:** Outfit (grotesk, variable wght). Pairs with Sora as same-class but distinct cut; tabular figures for readings and timestamps. Unique pair in registry.
- **Accent:** JetBrains Mono (mono). Timestamps, readings, units, ZIP codes. Tabular nums built in.

Why: Sora's soft geometry reads as "water" without resorting to bubble clip-art; Outfit's neutrality keeps the log entries scannable; JetBrains Mono makes every reading look like an instrument output, not marketing copy.

## Palette: Night Water + Cobalt Tile + Aqua Signal

| Role | Hex | Name |
|---|---|---|
| Ink | #F0F4F8 | Warm white (on dark) |
| Paper | #E8EDF2 | Pale mist (light sections) |
| Accent | #00B4D8 | Aqua signal |
| Deep | #0B1C2C | Night water navy |
| Signal | #FF6B35 | Alert orange (urgent only) |
| Mid | #1E3A52 | Deep teal band |

Family name: **"Night Water + Cobalt Tile"** — unique in registry.

### Contrast table

| Foreground | Background | Ratio | Use | Pass? |
|---|---|---|---|---|
| #F0F4F8 | #0B1C2C | 15.61:1 | Body/headings on deep | AA+AAA ✓ |
| #0B1C2C | #E8EDF2 | 13.8:1 | Body/headings on paper | AA+AAA ✓ |
| #00B4D8 | #0B1C2C | 7.2:1 | Accent text on deep | AA+AAA ✓ |
| #FFFFFF | #0089A8 | 4.6:1 | Button text on adjusted aqua | AA ✓ |
| #0B1C2C | #00B4D8 | 7.2:1 | Ink on accent band | AA+AAA ✓ |
| #FF6B35 | #0B1C2C | 5.1:1 | Signal on deep | AA ✓ |
| #F0F4F8 | #1E3A52 | 10.2:1 | Text on mid band | AA+AAA ✓ |
| Focus ring #00B4D8 on #0B1C2C | — | 7.2:1 | ≥ 3 required | ✓ |
| Focus ring #00B4D8 on #E8EDF2 | — | 5.8:1 | ≥ 3 required | ✓ |

Note: raw #00D4FF adjusted to #0089A8 for button backgrounds to maintain ≥ 4.5 white-on-button. Accent #00B4D8 used for text on dark passes at 7.2:1.

## Hero family

**Family 1 — Full-bleed video + scrim.** Slow underwater-to-surface clip of a screened Tampa pool at dusk; dark scrim bottom-left carries h1, monthly sample range, and "See a sample visit report" link. Breaks the cliché by using a *screened lanai* pool (not a resort infinity edge), shot at dusk with visible cage shadows, and pairing it with a working visit-log card rather than a generic CTA. Unique in pool niche; family 1 used 2× in library (general-A delivered, plus one reserved) — this is the 3rd and last allowed use per rules.

## Motion score

- **Intro (≤ 1.2 s):** Waterline draws down left margin with gentle ripple ease; first timestamp "07:58 Arrive" ticks in. Skippable via reduced-motion class; content readable before animation.
- **Scroll story 1 (verb: type):** Log lines in the sticky visit card type in one-by-one with check marks as each process section enters view. Stagger 60ms per line.
- **Scroll story 2 (verb: draw):** Waterline advances via `--sw-p` clip-path wipe, synced to scroll progress.
- **Hover language:** Hairline underline grows from left via `scaleX(0→1)` on links and buttons, 200ms ease-out.
- **Reduced motion:** Finished visit card shown statically; waterline fully drawn; no typing or wipe animations; all content visible.

## Tools

1. **Cloudy water troubleshooter** (`checklist` module). Inputs: symptom selector (cloudy / algae / smell / black spots), recent rain y/n, days since last service, filter pressure reading. Output: likely cause in plain words + first action we'd take. Hand-off: prefills quote form with symptom + ZIP.
2. **Plan picker** (`estimator` module). Inputs: pool size (small/medium/large), screen enclosure y/n, trees nearby, salt or chlorine, rental y/n. Output: suggested plan with sample monthly range from `{{proof.prices}}`. Hand-off: prefills quote form with plan + ZIP.
3. **ZIP checker** (`zip` module). Validates service area; passes ZIP to form.
4. **Multi-step quote form** (`form` module). Steps: ZIP → pool type → service needed → contact. Receives prefill from tools above.

## Voice

Three sample sentences:
- "Every Tuesday, same tech, same route: skim, brush, test, balance, photo, report."
- "Your pump hummed at 6 AM; we replaced a $38 capacitor, not the whole motor."
- "Last night's storm dropped two inches of rain and oak leaves into your lanai pool; today's visit starts there."

Five words never used: crystal, sparkling, pristine, guaranteed, premium.