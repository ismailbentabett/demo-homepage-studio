# Concept — irrigation-C (Gumbo Clay Sprinkler Co.)

## Three alternatives, rejected

1. **A calendar grid of 12 months.** Too literal; looks like a blog archive. The soil line carries the same idea with more texture and less UI chrome.
2. **A thermometer/season dial.** Already done by cleaning-C (Season Dial) and fireplace-C (season rail). Rejected for uniqueness.
3. **A drawn map of Collin County as the hero only.** Map-as-hero is family 15 and fits, but using it only in the hero wastes the local-story axis. The map stays in the hero; the soil line carries the story through the rest of the page.

## Thesis
The site is a year in a Collin County yard told through the soil: a wavy clay line runs under every section, cracking open in the hot months and closing in the cool ones, with a frost-blue edge in winter. Sections are grouped by season, not by service category, so the homeowner reads their current moment first.

## Signature system: the soil line
A horizontal SVG wave in the section divider, filled with the deep clay color. In summer-toned sections the wave amplitude increases and hairline crack strokes appear; in fall/winter sections the wave flattens and the cracks close; in the freeze section a thin frost-blue stroke sits on top. The line appears in:
- **Hero:** as the bottom edge of the hero band, separating sky from content.
- **Season bands:** as the divider between spring / summer / fall / winter groups.
- **Proof:** as the rule under each review card.
- **Footer:** flattened and closed, with the disclaimer sitting on it.

Hook: `data-sw-signature="soil-line"`.

## Type
- **Display:** `Merriweather` (serif, good italics for month names and neighbor quotes). Used 0 times in the library so far.
- **Text:** `DM Sans` (clean sans for UI, already used elsewhere but paired uniquely with Merriweather).
- **Accent:** monospaced numerals via `font-variant-numeric: tabular-nums` on DM Sans for prices, hours and ZIPs.

Pair is unique in the niche and in the library.

## Palette: Blackland Clay + St. Augustine + Frost
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep (clay ink) | #1E1814 | paper #F4EFE6 | 14.8 | body on deep, reversed headings |
| paper (cream card) | #F4EFE6 | deep #1E1814 | 14.8 | body on paper |
| accent (St. Augustine green) | #2D5A3D | paper #F4EFE6 | 7.2 | buttons, active soil line, links |
| accent-ink | #1B3A26 | paper #F4EFE6 | 10.1 | accent words on light |
| signal (frost blue) | #4A7B9D | deep #1E1814 | 4.6 | freeze accents, winter soil-line edge |
| mid (warm grey) | #8C8278 | paper #F4EFE6 | 3.4 | muted text, rules (large text only) |

Palette family name: **Blackland Clay + St. Augustine + Frost**. Unique in the library.

## Hero family
**15 — Map / area-led.** A drawn SVG map of Collin County with McKinney, Allen, Frisco, Prosper, Melissa, Princeton as clusters of tiny lawns. Tapping a town shows its season card and the phone. With JS off: a static map + the call line. Unique in the irrigation niche (A uses family 12, B uses family 7).

## Motion
- **Intro (≤ 1.2 s):** towns on the map dot in one by one along US-75, then the h1 settles with a line-mask reveal. Skippable; text readable before animation.
- **Scroll story:** the soil line cracks and closes as the months scroll from March to February. Pinned only ≥ 640px; on phones, stacked season cards with clip reveal. Height: `calc(4 * 55svh + 100svh)`.
- **Entrance patterns:** text rises (opacity + translateY); images unclip (clip-path inset). Two patterns only.
- **Hover:** a hairline underline that grows from left via `scaleX(0→1)`, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** everything visible statically; soil line is a flat rule; no pin; no intro animation.

## Tools
1. **Watering-day / season card.** Input: city (select from service area). Output: a printable season card (start-up, cutback, winterize windows) + "check your city's current watering days" note. Hand-off: "Book start-up" / "Book winterization" buttons prefill the form.
2. **Freeze-ready checklist.** Input: last winterized date (picker), backflow type (photo pick). Output: 4-item checklist + whether a visit is due. Hand-off: "Book winterization" or "Book freeze repair" prefills the form.
3. **Zone symptom finder.** Input: what the zone does (won't start / won't stop / weak / mist / puddle / dry spot). Output: two likely causes in plain words, the part, sample price band. Hand-off: "Call and say 'zone stuck on'" with the phone.
4. **ZIP checker** (kit `zip`). Hand-off: form with ZIP prefilled.
5. **Multi-step quote form** (kit `form`). 4 steps, honest thank-you.

## Voice
- "Your yard sits on black gumbo clay. We know what that means in August and in February."
- "Towns we serve: McKinney, Allen, Frisco, Prosper, Melissa, Princeton, Plano."
- "If a repair we made leaks or fails within a year, we come back and fix it at no charge."

**Never use:** guaranteed, best, award-winning, eco-friendly, free estimate, 24/7.