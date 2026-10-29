# siding-C · copy fixes, round 1

### #hero h1
- before: Old Providence walls, matched course by course.
- after: Old {{biz.city}} siding, matched course by course.
- why: the trade word goes into the h1 (critic: this blocks the 9). Still 7 words, with the town and the outcome.

### #hero .lead
- before: Cedar shingles, fish gables, clapboard and triple-deckers. We cut new courses to match the ones still on your house.
- after: Cedar shingles, fishscale gables, clapboard and triple-deckers. We cut new courses to match the ones still on your house.
- why: "fish gables" isn't a term anyone uses. "Fishscale" is the real noun and the brand word.

### #break figcaption .break__quote (photo band, cut the duplicate review)
- before: “They re-sided our triple-decker and kept every porch line and both bay windows. It looks like the original house, just straight and tight again.” Joseph A., Pawtucket Sample review
- after: A re-side keeps the bays, the cornice and the porch lines. If the house looks flat afterwards, the job isn't done.
- why: Joseph A. showed up twice (Should #3). He stays in the reviews grid only. The builder replaces the whole `.break__quote` span, including `.break__who` and its `.sample-tag`, with this plain process line, since there's no review here anymore and so no Sample tag. The Fig. 4 caption stays as it is.

### #contact .kicker
- before: Measure and price visit
- after: Book a measure visit
- why: one name for the one booking action (Should #4), matching the hero, menu and form aria-label.

### .mobile-bar middle button
- before: Visit
- after: Book visit
- why: the same action name in short form, so it fits the 1.3fr cell at 390.

### #contact form[data-thanks]
- before: Thanks, {name}. In your version of this site, this request goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the honest demo thank-you that the copy rules require. The old line spoke to the contractor, not the homeowner.
