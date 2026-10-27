---
name: signature-systems
description: How to invent and carry a signature system - the one visual idea only this site has (a document, a material, a tool, a map) built as a reusable CSS/SVG primitive and repeated across 4+ sections, with examples per trade and the tests it must pass. Use when choosing the concept (stage 2), drawing the primitive in the design system (stage 3), placing it in the blueprint, or fixing a distinctiveness or wow score under 9.
---

# Signature systems

Distinctiveness is the heaviest score after the first screen, and it comes from one idea carried
everywhere, not from many effects. A signature is a **system**: a primitive with variations, used in
4+ sections, that turns the trade's own world into the page's design language.

## Where ideas come from (the trade's own objects)
- **Documents:** a job folder, a work order, an inspection report, a spec sheet, a permit card, a
  tide table, a delivery manifest, a tune-up checklist.
- **Materials:** shingle courses, brick bond patterns, grout lines, wood grain end-cuts, pipe runs,
  insulation batts, concrete pour marks, paint swatches with drawdowns.
- **Tools and marks:** chalk lines, a level's bubble, a tape measure, survey stakes and string,
  pencil marks on lumber, a torque wrench scale, a thermostat dial, a multimeter readout.
- **Place:** the city's street grid, the river, the weather (hail map, frost line, sun hours), the
  house stock (ranch rooflines, row-house cornices).

## Build it as a primitive
In `plan/03-system.md`: name it, write the CSS/SVG once, list its variants.
```css
/* example: "chalk line" - a snapped line that organises every section */
.chalk{--c:var(--accent);height:2px;background:
  repeating-linear-gradient(90deg,var(--c) 0 14px,transparent 14px 17px);
  transform-origin:left;}
.sw-motion .chalk[data-reveal]{transform:scaleX(0);transition:transform var(--d-4) var(--ease-out)}
.sw-motion .chalk.is-in{transform:scaleX(1)}
```
Variants: section divider, under the h1, as the timeline of the process, as the bar of the estimator
result, as the border of the form card. Mark its element with `data-sw-signature` once (the hook the
checks look for) and use the class everywhere else.

## It must appear (concept.json `signature.sections`)
In the hero, in at least one tool, in the process or proof section, and in the form or footer. Four
places minimum, each a different use (structure, data, motion, detail). If it only decorates, it fails.

## Tests
1. **Swap test:** put a sibling's business name on it. If it still fits a different trade, it isn't a signature.
2. **Screenshot test:** cover the logo; the 1440 first screen alone tells you which site it is.
3. **No-motion test:** with reduced motion it's still there (the motion is a bonus, the shape is the system).
4. **Honesty test:** it doesn't imply a fact (a "permit card" shows `SAMPLE-` licence only, a "report"
   shows sample ranges).

## Examples (inspiration, not to copy; each site invents its own)
- Roofer PROCESS: every section is a shingle course; the process is laid course by course on scroll.
- Plumber PROOF: a pressure gauge primitive: the estimator, the reviews and the hours read as gauges.
- Landscaper LOCAL: the page is a planting plan of a {{biz.city}} yard with plant tags as labels.
- Mason PROCESS: brick bond grid that the content sits in; headings are "header courses".
- Mechanic PROOF: a printed inspection report with green/amber/red checks and a torque-spec number style.
- Moving LOCAL: a box-label system (FRAGILE / THIS WAY UP style labels, room names) for every section title.

## Never
Reuse a signature from the registry or a sibling, make it a logo pattern, use it as wallpaper behind
text (contrast), or copy a reference site's system (including Golden Touch's blueprint look).
