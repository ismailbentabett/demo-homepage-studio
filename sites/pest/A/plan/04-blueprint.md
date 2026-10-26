# Blueprint — pest-A (Sill Plate Pest Co.)

## Round 3 (answers critique-3)
Elevate first screen: the hero is now page 1 of the report: one bordered sheet with a 'WDI inspection · city · Sample report / Page 1 of 6' header rule, photo + h1 inside, and the six mark slots as the sheet's bottom strip. On load the slots get ticked in turn and 01 resolves to Not seen (under 1.1 s). Past the hero, the strip docks under the header as 'Your report' (≥900px), marking each station as it is reached and ringing the current one. Dead space gone: hero = 100svh − header − 64px, and station 01's badge peeks in. Elevate photo: one field grade on every frame plus per-frame trims. Captions follow the walk-around (Cover under → 01 Outside → 02 Under → 03 Inside → 04 Up top → 05 Perimeter → 06 Paperwork). The flashlight device: the hero crawlspace sits in darkness with one beam on the brick pier (static without JS; with motion it switches on, follows the pointer and climbs to the joists on scroll). Fig. 02 starts dark with the beam on the mud tube and lights up on scroll. The rubble falls outside the beam. Shoulds: hero pin removed and the caption is 'Cover', so the numbers no longer clash. Fig. 05 shotgun row replaced by weather-humid (yard line, no city claimed). The break uses home-wilmington with a caption that names no city. Stations top-aligned, compare eyebrow centred, price units dot only after a note, fixed 11.5rem range track. Mono kept for numbers, pills and Fig labels; eyebrows and review meta are now sans. The identifier answers as a report row (ID badge + Termite swarmer / Flying ant + Seen / Not seen pill). data-reveal cut from 39 to 6 (tools, ledgers, prices, reviews); prose and photos are simply present. Fig. 03 is eager because its lazy load never fired in the 390 motion capture.

## Round 2 (reopened, answers critique-2)
Base: the round-2 source (qa/last/src), because critique-2 praised its rail, ledger, report card and 02b overlap; round-1 src kept in qa/best. Photo: only the 9 real approved frames (hero-A1, home-baton-rouge, weather-humid, detail-mud-tube, detail-wood-damage, detail-attic, home-nola-shotgun, process-report), no placeholders. 02b moisture photo replaced by an SVG mud-tube cross-section that draws on scroll. Elevate photo: every station photo is a field-notebook figure (graphite frame, Fig. number, the station finding pill pinned to the corner). Elevate first screen: diagonal-cut crawlspace photo plus the six stations as an inspection sheet with empty mark pills. Shoulds: report pin removed (gap gone), rows fill in sequence on entry; 03/04 now 7/5 rows with text beside each photo; mobile-bar button in paper; mint replaced by a field-green tint; proof line, kicker and notes moved off mono; ledger arrows dropped; identifier starts with a 0-of-3 pill; break headline split into a large line plus a subline.

## Round 1
Elevate: services rebuilt as Station 05 ledger with finding-tag group pills (layout), and the signature now moves in three places — rail line draws via --sw-p scrub per station, tags fill pending→final on entry, and the report card fills row by row in a desktop pin (mobile: scrub, no pin) ending on an "Inspected" stamp (motion). Also: tone backgrounds were never painted (fixed, + t-accent prices band, full-bleed photo break on t-deep), hero gained the 01–06 clipboard index, stations 03/04 two-up, kit wiring fixed (identifier logic, checklist result, zip form, 4-step form fieldsets, mobile bar visible), placeholder photos get a graded gradient + Fig. caption plate, 320px overflow fixed.

Order now: hero(paper) · 01 mid · break deep · 02 paper · 03/04 mid · 05 services paper · versus mid · prices accent · 06 report paper · reviews mid · contact paper · footer deep.

## Rhythm

Section padding alternates: tight (64px) → normal (96px) → loose (128px) → normal → tight → loose.
Tone alternates: t-paper → t-mid → t-paper → t-mid → t-paper → t-deep.

## Sections

### 1. Header (t-paper, tight)
- Logo left ({{biz.name}} in Zilla Slab 700).
- Nav center: Inspection · Treatment · Quarterly · About.
- CTA right: "Book an inspection" primary button.
- Height: --header-h (64px desktop, 56px mobile).
- Sticky on scroll with subtle bottom rule.

### 2. Hero (t-paper, tight) — Family 11 diagonal split
- Diagonal line cuts from top-right to bottom-left at 55°.
- Left pane (45%): crawlspace entry photo (`hero-A1`), grade applied, object-position 50% 40%.
- Right pane (55%): kicker "{{biz.name}}" in DM Mono fs--1; H1 "Termite Inspection in {{biz.city}}, {{biz.state}}" in Zilla Slab fs-h1; proof line "Sample report: Seen / Not seen / Conducive" in Source Sans 3 fs-0; two CTAs stacked: "Book an inspection" primary + "Call {{biz.phone}}" secondary.
- Station 01 badge beside H1.
- Mobile: photo stacks above text, diagonal becomes horizontal rule.

### 3. Station 01 — Exterior & Foundation (t-mid, normal)
- Station badge "01" top-left.
- Photo `process-inspect-exterior` center, frame 4/3.
- Finding tag pill: outline state.
- Copy: what is checked at the exterior and foundation perimeter.
- Tool link: "Termites or flying ants?" → identifier tool anchor.

### 4. Tool — Termite or Flying Ant Identifier (t-paper, tight)
- Three tap inputs as line-diagram cards (waist / wings / antennae).
- Output panel: likely ID, next step, sample inspection price from facts.
- CTA: "Book an inspection" pre-fills quote form problem step.
- Module: `checklist`.

### 5. Station 02 — Mud Tubes & Wood Damage (t-paper, normal)
- Station badge "02".
- Photo `detail-mud-tube` left, copy right.
- Finding tag animates to not-seen or conducive on scroll entry.
- Copy: what mud tubes mean, where they appear, what the probe checks.

### 6. Station 03 — Crawlspace Moisture (t-mid, loose)
- Station badge "03".
- Photo `process-moisture` center.
- Finding tag.
- Copy: standing water, wood-to-soil contact, vent blockage.
- Tool link: "Check your crawlspace" → conditions check anchor.

### 7. Tool — Crawlspace Conditions Check (t-paper, tight)
- Five tick-box inputs.
- Output: list of conducive conditions ticked, fix per item, moisture-check service link.
- CTA: "Have us look under the house" pre-fills quote form.
- Module: `checklist`.

### 8. Station 04 — Sill Plate (t-paper, normal)
- Station badge "04".
- Photo `process-probe` left, copy right.
- Finding tag.
- Copy: why the sill plate is the first place termites enter, what damage looks like.

### 9. Liquid vs Bait Compare (t-mid, normal)
- Two-column layout.
- Inputs: house type, wells/water nearby, yearly monitoring preference.
- Output: liquid column (trenched barrier, sample range $1,100–$2,600) vs bait column (stations monitored, sample range $1,200–$2,400 first year).
- CTA: "Ask which fits your house" → quote form.
- Module: `compare`.

### 10. Station 05 — Attic & Under Sinks (t-paper, tight)
- Station badge "05".
- Photo `detail-attic` center.
- Finding tag.
- Copy: roof rats, insulation disturbance, plumbing penetrations.

### 11. Sample Prices (t-mid, normal)
- Table from facts.prices: item, from, to, note/unit.
- All values marked "Sample".
- No CTA; informational.

### 12. Proof — Sample Report Card (t-paper, loose)
- Six-row card mimicking a WDI form.
- Each row: station number, area name, finding tag (filled), one-line note.
- Below: retreat guarantee text from facts.proof.guarantee.
- License line: "{{biz.license}} · Insured · {{biz.years}} years".

### 13. Reviews (t-mid, normal)
- Three review cards from facts.proof.reviews (first three).
- Each: stars, text excerpt, name, town, service.
- Rating summary: "{{biz.proof.rating}} · {{biz.proof.reviewCount}} reviews · Sample".

### 14. ZIP Checker (t-paper, tight)
- Single input: 5-digit ZIP.
- Output: served / not served from facts.biz.zips.
- If served: "Book an inspection" CTA.
- Module: `zip`.

### 15. Quote Form (t-mid, loose)
- Multi-step: problem → house type → closing date (if letter) → photos → contact.
- Fast path: "termite letter for a sale" pre-selects closing-date step.
- Module: `form`.

### 16. Footer (t-deep, tight)
- Station 06 badge as phone anchor.
- {{biz.name}}, {{biz.phone}}, {{biz.email}}.
- Areas served list from facts.biz.areas.
- Hours from facts.biz.hours.
- "Report complete" stamp primitive.
- Disclaimer from facts.demo.disclaimer.

## Mobile bar
- Fixed bottom, t-deep tone.
- Primary CTA "Book an inspection" full-width.
- Secondary: tel: link icon-only.
- Appears after scrolling past hero.

## Signature integration
- Station rail pinned in grid col 1 on desktop (col span 1 of 12), content in cols 3–12.
- On mobile: rail becomes horizontal progress strip above each station section.
- data-sw-signature="station-tag" on every station section and the report card.
- --sw-p drives: dotted path draw, badge fill, tag state transition.