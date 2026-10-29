# siding-B · copy round 1 (fast)

Builder notes:
- `before` = text as rendered in `dist/index.html`. `after` uses tokens. Apply in `src/index.html`.
- **Services loop:** the 8 cards come from `<!-- each services -->`, so they can't have different link text. Unroll the loop into 8 literal `<li class="svc">` cards using `{{services.N.name}}` / `{{services.N.blurb}}` (N = 0..7), then apply the per-card lines below.
- In every card, delete the `<p class="hdr-row"><span>Result 0N</span><span>…</span></p>` line (it repeats the h3) and the `<span class="reading__val">Scope</span>` (the section legend already explains the cells). Keep the cells.
- Drop the CSS `→` arrow on `.svc .btn-text` (critique: "arrow on every link"). Keep it on one link at most.

## Hero

### #top h1 (sub-head span)
- before: `<span class="hero__q">Which siding for a Hartford house?</span> Four sidings, five tests.`
- after: `Four sidings, five tests.` (delete the `.hero__q` span)
- why: critique copy -0.5 and firstScreen -0.5: three labels before the h1. The h1 and lede already answer the question.

### #top hdr-row
- before: `Report No. 01 · Hartford, CT · Siding` (3 spans)
- after: one span: `Field report · {{biz.city}}, {{biz.state}}`
- why: the "Siding" span repeats the h1/lede, and "No. 01" is template numbering. One rule, not three labels.

## Services

### #services hdr-row
- before: `Results · 8 jobs · Scope scale` (3 spans)
- after: delete the whole `<p class="hdr-row">`. The h2 now carries the count.
- why: mono label density (distinctiveness -1.0, type -1.0).

### #services h2
- before: Every job we take, from one course to the whole house.
- after: Eight jobs, scored by how much of the house they touch.
- why: slogan h2 (copy -0.5). This one explains the scope cells, so the cards read as a measurement.

### #services legend
- before: 1 cell = one course · 5 = the whole house
- after: One cell is a single course. Five is the whole house.
- why: plain sentence, so there's no middle-dot meta string.

### #services card 1 link ({{services.0.name}})
- before: `<a class="btn-text" href="#contact" data-service="Vinyl siding">Price it</a>`
- after: `<a class="btn-text" href="#squares">Work out my squares first</a>`
- why: vinyl is priced per sq ft. Send them to the calculator, which is the tool the page is built on.

### #services card 2 link ({{services.1.name}})
- before: `<a class="btn-text" href="#contact" data-service="Fiber cement siding">Price it</a>`
- after: `<a class="btn-text" href="#compare">See how it scored</a>`
- why: fiber cement's case is impact and paint, and the compare table shows both.

### #services card 3 link ({{services.2.name}})
- before: `<a class="btn-text" href="#contact" data-service="Cedar clapboard">Price it</a>`
- after: `<a class="btn-text" href="#contact" data-service="{{services.2.name}}">Ask about cedar for an older house</a>`
- why: the blurb names capes and Victorians, and that's the buyer this card is for.

### #services card 4 link ({{services.3.name}})
- before: `<a class="btn-text" href="#contact" data-service="Engineered wood siding">Price it</a>`
- after: `<a class="btn-text" href="#prices">Check it on the price sheet</a>`
- why: the blurb pitches it against fiber cement, and the price sheet puts the two on one scale.

### #services card 5 link ({{services.4.name}})
- before: `<a class="btn-text" href="#contact" data-service="Repair and replacement">Price it</a>`
- after: `<a class="btn-text" href="#walls">Mark the wall that needs it</a>`
- why: repairs run "a single course to one full wall". The wall picker is the matching tool.

### #services card 6 link ({{services.5.name}})
- before: `<a class="btn-text" href="#contact" data-service="Color consults">Price it</a>`
- after: `<a class="btn-text" href="#contact" data-service="{{services.5.name}}">Book a color consult</a>`
- why: you book a consult. You don't "price" it.

### #services card 7 link ({{services.6.name}})
- before: `<a class="btn-text" href="#contact" data-service="Soffit and fascia">Price it</a>`
- after: `<a class="btn-text" href="#contact" data-service="{{services.6.name}}">Have the fascia checked</a>`
- why: owners notice soft fascia before they think about soffit, and this matches the blurb.

### #services card 8 link ({{services.7.name}})
- before: `<a class="btn-text" href="#contact" data-service="Measure and compare visits">Price it</a>`
- after: `<a class="btn-text" href="#contact" data-service="{{services.7.name}}">Book a measure visit</a>`
- why: the page's main CTA, said once in the grid where it fits. Only this one keeps the arrow.

### #services card hdr-rows (all 8)
- before: `Result 01 · Vinyl` … `Result 08 · Measure visit`
- after: delete
- why: they repeat the h3 in mono caps. That's 8 of the "five tiny caps labels per view".

### #services card scope value (all 8)
- before: Scope
- after: delete the `.reading__val` span
- why: it's the same word 8 times, and the legend above already says what the cells mean.

## Mono label thinning (one rule per section, shorter)

### #compare hdr-row
- before: `Tests 01–05 · Four materials · Sample readings`
- after: `Five tests · Sample readings`
- why: keeps the Sample label and drops the count the h1 already gave.

### #squares hdr-row
- before: `Test 06 · Your house · Squares`
- after: `Your house, in squares`
- why: one label. The "Test 0N" numbering is the spec-sheet tell.

### #method hdr-row
- before: `Test 07 · The job · 4 pages`
- after: `The job, in 4 pages`

### #walls hdr-row
- before: `Test 08 · Your walls · Elevation`
- after: `Your walls`

### #prices hdr-row
- before: `Price sheet · Sample pricing · Installed`
- after: `Sample pricing · Installed`
- why: "Price sheet" repeats the h2 right below it.

### #area hdr-row
- before: `Coverage · Towns · Hours`
- after: delete (the h2 "Do you come to my street?" does the job)

### #contact hdr-row
- before: `Next step · Measure visit · 4 steps`
- after: `4 steps`
- why: "Next step" and "measure" both repeat the h2.

### footer hdr-row
- before: `End of report · Next step: measure your house`
- after: `End of report`
- why: that's the third time the page says "measure your house". Once is enough here.
