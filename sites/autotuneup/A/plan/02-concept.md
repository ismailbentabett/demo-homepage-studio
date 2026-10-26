# Concept — autotuneup-A (Quarter Hour Tune-Up)

## Three obvious concepts, rejected

1. **The pit-stop timer.** A big countdown clock in the hero that ticks down "30:00" while you scroll. Rejected: it's a gimmick that implies every job is exactly 30 minutes; the brief says posted times vary by service, and a ticking clock feels like pressure, not honesty.
2. **The service menu grid.** A clean card grid of nine services with icons and prices. Rejected: every competitor does this; it ignores the direction's relay/station seed and the time-promise differentiator. Template.
3. **The oil-drop mascot.** A friendly cartoon drop with a stopwatch, pointing at each section. Rejected: the brief explicitly bans cartoon oil drops and chain-style mascots (§4 item 2). Literal seed taken as character.

## The thesis

The page is the relay board: each section is a station on a timed course, and the running stopwatch total proves speed without promising what isn't true.

## The signature system: Stopwatch Stations

A vertical stopwatch rail runs along the left margin (desktop) or top pill (mobile). Each station section adds its lap tag ("Station 2 · Filters · 6 min") and the cumulative total updates ("Total so far: 24 min"). Variations:
- **Hero:** the dial shows "00:00" with three stacked lines; the strip photo is the starting line.
- **Service stations (oil, filters, tires, fluids, battery):** each carries a lap pill with station number, name, and posted time; the rail segment fills in signal orange via --sw-p.
- **Proof/reviews:** sample report cards styled as split-time printouts with "watch / due / done" stamps.
- **Footer:** the stopwatch stops at the final total ("Done · 31 min · next oil due around 48,200 mi") with a reset tick mark.

Hook: `data-sw-signature="stopwatch-stations"`. CSS primitive: `.sw-lap` pill + `.sw-rail` vertical rule + `.sw-total` counter.

## Type

- **Display:** Unbounded (wide, rounded display sans; loud and contemporary). Used ≤ 3 times in registry (currently 0), never in autotuneup niche. Wide geometric suits the station-number headlines and the "Book it. / Wait or walk. / Done." stacked lines.
- **Text:** Figtree (friendly geometric sans; clean and cheerful). Pairs with Unbounded's width without competing; both are grotesk-family but distinct in cut. Unique pair in registry.
- **Accent:** DM Mono (low-contrast mono for lap times, station numbers, mileage readouts). Never used as display; reserved for data.

## Palette: Tangerine Lane + Deep Teal + Off-White Paper

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #1a1a18 | paper #faf7f2 | 16.30 | body text on light |
| paper | #faf7f2 | deep #0f3d3a | 11.23 | body text on deep, reversed |
| accent-text | #a83a12 | paper #faf7f2 | 5.99 | accent words on light only |
| signal | #e85d26 | deep #0f3d3a | 3.44 | large text / shapes / rules on deep only (never body) |
| deep | #0f3d3a | paper #faf7f2 | 11.23 | headings on light, body on deep |
| mid | #d6cfc4 | deep #0f3d3a | 8.10 | muted text, rules on deep |
| focus | #e85d26 | deep #0f3d3a | 3.44 | focus ring on deep (≥3 pass) |
| focus | #a83a12 | paper #faf7f2 | 5.99 | focus ring on light (≥3 pass) |

Family name: **"Tangerine Lane + Deep Teal"**. Unique in registry. Tone: color-led.

## Hero family: 4 — Stacked headline + cinematic strip

Three short stacked lines ("Book it. / Wait or walk. / Done by the time you're back.") sit above a wide letterboxed photo strip of a car in a bright service bay. The strip is the starting line for the stopwatch rail; each station section adds its lap below. Breaks the cliché: no mascot, no coupon starburst, no car-logo grid; the photo is process (a bay, not a smiling attendant), and the stacked copy states the promise in plain time-bound words. Unique in autotuneup niche; family 4 used once in library (plumber-A reserved) so this is the second use (under the ≤3 cap).

## Motion score

- **Intro (≤ 1.2 s):** stacked lines drop in on a 70ms stagger with a single tick sound cue (visual only: a small pulse on the rail); the photo strip slides in from right via clip-path wipe. Skippable via `prefers-reduced-motion`.
- **Scroll story 1 (stations):** the stopwatch hand sweeps as each station enters; lap pills stack up with a 60ms stagger; the rail segment fills via --sw-p clip-path wipe. Verb: *dial + stack*.
- **Scroll story 2 (proof):** sample report cards slide in as split-time printouts; the "done" stamp presses in. Verb: *press*.
- **Hover:** a hairline under station names grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** all laps visible statically; no sweep, no stagger; content complete without animation.

## Tools

1. **Wait-or-drop planner** (`kit/wait-or-drop`). Inputs: checkboxes for selected services. Output: "Wait for it · about 35 min" or "Drop it at 7:30, pick up by noon" with next sample openings. Hand-off: prefills quote-form step 3 (visit type) and step 4 (services).
2. **Service menu with times** (`kit/tabs`). Tabs by category (Oil · Tune-Up · Filters · Tires · Fluids · Battery · Wipers · Mileage · Trip). Each tab shows included items, posted time, wait/drop, sample price range from `{{proof.prices.*}}`. Hand-off: clicking "Book this" opens quote-form with service preselected.
3. **Oil type explainer** (`kit/compare`). Three-column compare: Conventional / Synthetic Blend / Full Synthetic with plain-language rows (change interval, cold-start, high-mileage, spec match). No upsell; ends with "the right one is the one your car's spec calls for". Hand-off: links to quote-form step 2.
4. **ZIP checker** (`kit/zip`). Input: ZIP. Output: "Yes, an easy drive — book a time" or "That's a drive; a booked drop-off works best." Hand-off: prefills quote-form step 5 (town/ZIP).
5. **Multi-step quote form** (`kit/form`). Steps: (1) your car (year/make/model as text) → (2) mileage → (3) services (checkboxes) → (4) wait or drop off → (5) when (date/time picker, sample slots) → (6) how to reach you (name, phone, email). Every step works with JS off as a plain explanation + call button.

## Voice

Three sample sentences:
- "Most oil changes take about thirty minutes; longer jobs get a drop-off slot and a text when they're done."
- "If it isn't due, we say so, and we write down the mileage when it will be."
- "Book the 7:30, sit with your laptop, and be out by eight with a note on what's next."

Five words never used: *special, deal, flush (use "exchange"), dealer, factory*.