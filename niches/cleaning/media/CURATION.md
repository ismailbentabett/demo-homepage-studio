# Cleaning: media curation (Wikimedia Commons pool, 108 candidates)

Pool is thin: most queries returned off-topic museum, archive, foreign-city or commercial frames.
15 slots now carry a real CC/PD photo (same key, replaces the placeholder). 21 stay placeholder drafts.
No `-2` keys added. Credits (source + licence) are carried in the manifest by approve-media.

## Approved (real photo)
| key | candidate | why |
|---|---|---|
| hero-A3 | o946b8349f986 | Tidy living room against backlit curtains, quiet and adult, with plenty of space for text. Modern rather than bungalow (weak fit). |
| hero-B2 | o330a278c5ac5 | Rolled towels on a made bed, so the brief fits exactly. Pine cabin room, soft window light. |
| hero-C1 | oc00110974684 | Fog lifting off a river valley with no buildings, so it doesn't claim a place. Alt is neutral (it's Finland, NOT Chattanooga). |
| hero-C2 | oc00062184264 | Real clawfoot tub on a wood floor, clean. Flash-lit and no window, so it's weak as a hero. |
| process-vacuum | oc00156599460 | Residential carpeted stairs as a tight material detail. Shows no vacuum lines. |
| process-mop | oc00177215695 | Spin mop head on floor tile, an honest working tool. No brand visible. |
| process-shower-glass | oc00180519847 | Clean walk-in shower with a glass panel. Toiletry labels are too small to read. No squeegee. |
| process-oven | oc00169386473 | Clean appliance interior. It's a microwave, not an oven, and the alt says so. |
| process-fridge | oc00184965439 | Clear containers on a lit fridge shelf, so it fits the slot. |
| process-blinds | oc00019408990 | Blind-duster tool, product-style shot on white. Honest, but reads as stock. |
| detail-sink | oc00190519564 | Hands only at a home kitchen sink with running water and warm color. |
| detail-towels | oc00079215328 | Folded white towels on a chrome rack, no logo. It's from a hotel bathroom but doesn't look like one. |
| detail-microfiber | oc00124822929 | Folded green cloth texture. The alt calls it a cotton cloth, not microfiber. |
| home-greenville | oc00158879237 | Craftsman bungalow gable with shingle siding. No number or sign, a convincing Southern look. |
| room-bath | oc00194441161 | Clean stone-tile bathroom. Slightly hotel-like, but no branding. |

## Weak / still placeholder (no honest candidate in pool)
hero-A1, hero-A2, hero-B1 (living-history museum kitchen with costumed staff), hero-B3 (dog walks toward camera in a messy room), hero-C3 (Mohonk hotel in B&W, commercial),
process-high-dust, process-baseboard, process-grout, process-windows, detail-bed, detail-pollen, detail-supplies,
home-huntsville (demolition, florist sign), home-chattanooga (all UK), room-kitchen, room-living (faces plus readable TV text),
move-boxes, move-empty-kitchen (only B&W HABS), season-holiday (restaurants), crew-back, hands-key.
Next fetch should target US residential CC sources or Pexels for these.

## Best hero frames per direction
- A: hero-A3 (only real one). A1 and A2 are still placeholders.
- B: hero-B2 (only real one). B1 and B3 are still placeholders.
- C: hero-C1 (fog), hero-C2 (clawfoot tub). C3 is still a placeholder.

## Stub repair (2026-10-27): four keys used by live sites replaced in place
These four keys pointed at 1x1 placeholder stubs. Each was replaced under the same key, as the orchestrator explicitly allowed for this repair. One extra Commons fetch was run: pollen and hero-A1 returned new frames, the baseboard fetch hung, and high-dust never ran.
| key | candidate | why |
|---|---|---|
| detail-pollen | oc00154039413 | Real grit and dust on a painted wooden windowsill, with no faces and nothing readable. It shows dust, not visibly yellow pollen, and the alt says so. WEAK-ish. |
| hero-A1 | o49cc5e235105 | Hands holding cut fruit over a white kitchen counter, with the face cropped out, no logo and soft light. It's not a checklist, so it's off-brief. WEAK. (ode2b01823bda was rejected because an Apple logo shows on the laptop. The military "checklist" frames were rejected.) |
| process-baseboard | oc00111878749 | A B&W close-up of a grimy baseboard and window-trim corner, which reads as an honest "before" detail. There's no cloth or hand. WEAK-ish. |
| process-high-dust | oc00022414551 | The least-bad honest frame: a generic "smoke outlet from basement" plaque in a stone wall. It names no company, but it is off-subject (no duster). The other candidates showed identifiable children in a barn and a nebula. WEAK: refetch later. |
