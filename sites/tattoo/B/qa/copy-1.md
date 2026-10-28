# tattoo-B · copy fixes, round 1

Apply in `src/index.html` (find the `before` text, write the `after` with tokens). `before` is the rendered text from `dist/index.html`.

### #hero h1 (Should 1)
- before: `Clean you <em>can check.</em>`
- after: `{{biz.city}} tattoos, <em>logged clean.</em>`
- why: trade + town in the h1, in the log's language (5-second test). 4 words. Builder: `.hero__h1` max-width 9ch is narrower than the city name; set ~13ch so it sits on 2 lines at 1440 (3 at 390 is fine).

### #hero kicker (Should 7, fewer mono labels)
- before: `<span class="kicker__no">No. 00</span> Tattoo &amp; Piercing · Philadelphia, PA`
- after: `Tattoo &amp; piercing · {{biz.areas.0}} to {{biz.areas.6}}`
- why: "No. 00" carries nothing, and the city now lives in the h1, so the kicker covers the service area instead of repeating the town.

### #hero sheet tape label (Should 3)
- before: `Cycle 0412 · Pass`
- after: `Cycle 0412 · pass`
- why: copy is already clean. The "_CYCLE_0412" underscores are a CSS artefact. `.tape__label` is an inline span, so its paper background only covers the glyph box and the tape stripes (`inset:5px 0`) show above and below it. Builder: `.tape__label{display:inline-block;height:100%;line-height:28px}` (22px under 640px). This fixes every tape label on the page, including "Entry 06" and "Tag · pick a spot". Leave the label text as it is.

### #services tape label (Should 7)
- before: `Entry 01 · Services · logged`
- after: `Entry 01 · Services`

### #cycle tape label (Should 7)
- before: `Entry 02 · Autoclave · cycle 0412`
- after: `Entry 02 · Autoclave`
- why: the cycle number already rides the hero tape and the gauge's tape. Once per view is enough.

### #services margin note (Should 7)
- before: `No. 01<br>12:00<br>Open`
- after: `12:00<br>Open`
- why: the tape above already says "Entry 01". One number per entry.

### #estimate h2 (Should 4)
- before: `Too small to hold up? We'll tell you, and show the size that will.`
- after: `Too small to hold up? We'll say so.`
- why: 3 lines down to 2 at 1440. The sizing promise moves into the tool's result.

### #ear-map h2 (Should 4)
- before: `Needle, never a gun. Titanium, named on your sheet.`
- after: `Needle, never a gun.`
- why: 4 lines down to 1 or 2. The titanium line moves into the lead (next item).

### #ear-map sec-lead
- before: `Tap a spot to see what it is, how long it takes to settle and the sample price. Every piercing gets a free downsize once the swelling goes down.`
- after: `Implant-grade titanium, named on your sheet. Tap a spot to see how long it takes to settle and what it costs. The downsize after the swelling is free.`
- why: picks up the half cut from the h2 and keeps the guarantee from facts.

### #ear-map empty tag panel (Should 5, Wow)
- before (tape label): `Tag · pick a spot`
- after: `Lobe · soft tissue`
- before (paragraph): `Tap a spot on the ear. Its tag prints here: name, settling time, metal and the sample band.`
- after: `Settles in weeks, not days. Titanium or solid gold, {{proof.prices.3.from}}–{{proof.prices.3.to}} per ear <span class="sample-tag">Sample</span>. Tap another spot and its tag prints over this one.`
- why: the panel opens on a filled example instead of an empty dashed box. Builder: use the solid tag styling for `.ear__hint` (not dashed). Better still, open with `#ear-lobe` active (spot `is-active`, card shown), so this copy only shows as a fallback.

### #break note (only if the photo is re-cropped per Must 1)
- before: `Photo: gloved hand, machine in barrier film, single-use ink caps on a covered tray.`
- after: `Photo: gloved hand, barrier-wrapped grip over single-use ink caps.`
- why: the tighter crop (≈70% 75%) drops the tray edge, so the caption describes the new frame.
