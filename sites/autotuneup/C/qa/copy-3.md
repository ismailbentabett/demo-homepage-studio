# autotuneup-C · copy round 3 (fast)

Covers critique-3 copy items: "Book a time" ×9 (Should 3), the eyebrows (Should 2), the services numbering (Should 1, the copy side), the tool result copy (Should 10). Source paths are noted where the string lives in `src/` and not in plain HTML.

"Book a time" stays as a button in only four places: the header (src l.30), the mobile nav (l.48), the hero (l.70) and the call bar (l.468). Every other button now names its job.

---

## Buttons

### #services .services__head a.btn (src l.125)
- before: Book a time
- after: (delete the button)
- why: the service rows are already links that start the booking, and the lead says so. A third "Book a time" in the first two screens is the template tell.

### #stop-dust .story-band__text button (src l.168, `[[quote Filters btn-primary | Book a time]]`)
- before: Book a time
- after: Book a filter check
- why: names the job the story sells. Builder: render it as an inline text link (`.btn-link` or plain underlined anchor), not a pill, per Should 3.

### #tools .tool--due button (src l.196)
- before: Book a time
- after: Book these jobs
- why: the button sits under the list the tool just built, and it carries that list into the form.

### #tools .tool--check button (src l.216)
- before: Book a time
- after: Book the season check
- why: matches the checklist's own result line ("Book the season check before the weather turns").

### #stop-sun .story-band__text a.btn (src l.262)
- before: Book a time
- after: Book a wiper and belt check
- why: names the job. Builder: inline text link, same treatment as STOP 01.

### #stop-cold .story-band__text button (src l.357, `[[quote Battery btn-primary | Book a time]]`)
- before: Book a time
- after: Book a battery test
- why: the section ends the story, so it stays a primary pill, but it says what you get: the five-minute load test from the paragraph above.

## Eyebrows (keep only Hero, Stop 01 · dust, Stop 02 · sun, Stop 03 · cold)

### #services .kicker
- before: Maintenance by elevation
- after: (delete the element)
- why: Should 2. The h2 "What your car needs up here" already says it.

### #tools .kicker
- before: Your car, your road
- after: (delete the element)
- why: Should 2.

### #reviews .kicker
- before: From drivers who live here
- after: (delete the element)
- why: Should 2. The h2 already names the towns.

### #contact .kicker
- before: Book a slot
- after: (delete the element)
- why: Should 2. It also echoes the button wording a tenth time.

## Services list: numbers become places (Should 1)

The rows come from a loop (`<span class="svc-row__n mono">{{#2}}</span>`, src l.130). Drop the "→" glyph and replace the number with one chip per service, in order. Builder: hard-code the eight chips or add a `data-chip` per row. Use area tokens only, never the literal town.

### #services .svc-row__n (row 1, Oil change)
- before: 01
- after: Every visit
- why: oil has no altitude. It happens at every visit, and the chip says so honestly.

### #services .svc-row__n (row 2, Tune-up and spark plugs)
- before: 02
- after: The climb
- why: the blurb says misfires show on the climb.

### #services .svc-row__n (row 3, Engine and cabin air filters)
- before: 03
- after: {{biz.areas.5}} road
- why: the same place chip as the STOP 01 plate, so the list joins the route.

### #services .svc-row__n (row 4, Wipers, belts and hoses)
- before: 04
- after: {{biz.areas.3}} hill
- why: the same place as the STOP 02 plate ("the daily climb to Los Alamos").

### #services .svc-row__n (row 5, Coolant and fluid exchanges)
- before: 05
- after: Cold nights
- why: the reason from the blurb, kept short.

### #services .svc-row__n (row 6, Battery test and replacement)
- before: 06
- after: Ski basin lot
- why: the same place as the STOP 03 plate and the hero's peak pin.

### #services .svc-row__n (row 7, Tire rotation and pressure)
- before: 07
- after: Day-night swing
- why: the blurb's reason, and the one Lucia's review describes.

### #services .svc-row__n (row 8, Season checks)
- before: 08
- after: Monsoon · snow
- why: the two seasons named in the blurb.

## Mileage tool copy (Should 10)

### #tools .tool--due .readout (empty state, src l.200)
- before: Enter your mileage and pick your road. Oil and a filter look happen at every visit.
- after: Enter your mileage and pick your road. The oil and filter change comes first on every visit.
- why: "filter look" is clunky, and the critic flagged the same phrase in the result list.

### src/app.js l.132 job label (shown in the result list)
- before: Oil change and filter look
- after: Oil and filter change
- why: Should 10, verbatim.

### src/app.js result list: altitude prefix per job (shows as "~7,000 ft Wipers, belts and hoses")
- before: ~7,000 ft Wipers, belts and hoses
- after: Wipers, belts and hoses · high sun cracks rubber
- why: Should 10. A made-up altitude per job reads as forced. Builder: drop the `j.alt` "~N ft" prefix from every list item, and print `what · why` (the `why` strings in app.js l.132–142 already hold the real reason). Keep the altitude only on the place items that have a real figure: "~5,700 ft · {{biz.areas.5}} dust: cabin and engine filters" on the dirt route. Use the `place` variable, not a literal.

## Hero proof line (firstScreen −0.5, the duplicated "Open now")

### #hero .hero__proof (the open-now span)
- before: Open now · until 6 pm
- after: (remove the `data-open-now` span from the hero proof line; keep it in the header)
- why: the same status shows twice in one view at 1440. The proof line ends at "164 reviews".
