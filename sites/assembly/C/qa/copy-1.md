# assembly-C copy fixes, round 1

The primary action now has one name everywhere: **Price my job**. Calls stay "Call {{biz.phone}}" and texts stay "Text a photo…". The h1 now carries the trade and the town. Kicker caps labels are cut except the one that holds the prices Sample tag. Italic accents stay only in the h1 and the anchoring h2. Straight apostrophes are now ’.

## A. One primary action name

### #header .btn--primary, mobile nav, footer nav, mobile bar (every `Price it` link, 5 places + the 9 schedule rows below)
- before: Price it
- after: Price my job
- why: critique copy -0.5, the primary action had five names. Apply with replace_all on `>Price it<`. It covers header (845), mobile nav (854), footer `Sheets` nav (1479) and the mobile bar (1495).

### #plan .sched rows, 9 × `btn--text`
- before: Price it
- after: Price my job
- why: same action, same name. It is covered by the replace_all above. Keep `data-service`, which pre-selects the job in step 1.

### #living .btn--primary
- before: Book this mount
- after: Price my job
- why: one name (critique should 5). data-service="TV mounting" carries the context.

### #anchoring .btnrow .btn--secondary and #kids .tip .btn--primary (2 places)
- before: Add anchoring to my visit
- after: Price my job
- why: one name. data-service="Anchoring" pre-selects the job. replace_all.

### #kids .rcard (kids)
- before: Price the kids' room
- after: Price my job
- why: one name.

### #kids .rcard (office)
- before: Price the desk
- after: Price my job
- why: one name.

### #yard .btn--primary
- before: Book a spring date
- after: Price my job
- why: one name.

### #prices .btn--primary
- before: Price my list
- after: Price my job
- why: one name.

### #contact form submit
- before: Send my list
- after: Price my job
- why: the submit says what the header promised. The button is the same action end to end.

## B. h1 and hero

### #hero h1
- before: Built, mounted and <em>strapped</em> to the beam.
- after: Furniture assembly in {{biz.city}}, <em>strapped</em> to the beam.
- why: the h1 had no trade and no place, and the city only sat in the eyebrow (firstScreen 8.5). It is now 8 words with trade, town and the strap promise, and it keeps the one italic accent.

### #hero .kicker
- before: Furniture Assembly &amp; earthquake anchoring · San Jose
- after: (delete the `<p class="kicker">` element)
- why: the h1 now names trade and town, and this was the loudest of the 3+ tracked caps in the first view (type -0.5, should 3).

### #hero .lead
- before: Desks, cribs, bookcases and TVs for San Jose Eichlers, ranch houses and townhouses. If it stands taller than your kid, it leaves strapped to a stud or a beam.
- after: Desks, cribs, bookcases and TVs for Eichlers, ranch houses and townhouses. If it stands taller than your kid, it leaves strapped to a stud or a beam.
- why: the city is in the h1 now, so it doesn't repeat two lines apart. 27 words.

## C. Cut the extra caps labels (delete each `<p class="kicker">` element)

### #plan .kicker
- before: The house, room by room
- after: (delete element)
- why: the h2 and the plan already say it. Caps-label noise (should 3, elevate type).

### #living .kicker
- before: TV mounting on beam and glass walls
- after: (delete element)
- why: it repeats the room tag and the body's first line.

### #anchoring .kicker
- before: Earthquake anchoring
- after: (delete element)
- why: the h2 is the anchoring promise. It doesn't need a label.

### #kids .kicker
- before: Kids' room and home office
- after: (delete element)
- why: the room cards carry the room names already.

### #yard .kicker
- before: Garage and yard
- after: (delete element)
- why: the h2 names the playset and the rack.

### #proof .kicker
- before: Reviews, room by room
- after: (delete element)
- why: the h2 "Pinned to the room where the job was." does the job alone.

### #area .kicker
- before: Area and hours
- after: (delete element)
- why: the h2 names {{biz.city}} and the towns.

### #contact .kicker
- before: Price it
- after: (delete element)
- why: it was a fifth "Price it" and another caps label. The h2 leads.

### #prices .kicker
- before: Price schedule <span class="sample-tag">Sample pricing</span>
- after: <span class="sample-tag">Sample pricing</span>
- why: drop the caps words and keep the Sample tag where it sits.

## D. Italic accents: keep 2 only (h1 "strapped", anchoring h2 "strap")

### #plan h2
- before: Nine jobs, five rooms, one <em>atrium</em> in the middle.
- after: Nine jobs, five rooms, one atrium in the middle.
- why: accent-word tell (distinctiveness -0.5, should 4).

### #living h2
- before: Eichler walls are mostly glass. We find the <em>post</em>.
- after: Eichler walls are mostly glass. We find the post.
- why: as above.

### #kids h2
- before: Cribs built <em>tight</em>. Desks level before your first call.
- after: Cribs built tight. Desks level before your first call.
- why: as above.

### #atrium h2
- before: Every room opens onto the atrium. Every tall thing in every room gets a <em>strap</em>.
- after: Every room opens onto the atrium. Every tall piece in it leaves with a strap.
- why: drops the accent and the doubled "every room" cadence. "Tall piece" matches the plan lead.

### #yard h2
- before: A playset <em>level</em> on a slope. A rack bolted to the slab.
- after: A playset level on a slope. A rack bolted to the slab.
- why: accent cut.

### #contact h2
- before: Tell us the room. We bring the drill, the level and the <em>straps</em>.
- after: Tell us the room. We bring the drill, the level and the straps.
- why: accent cut.

## E. Curly apostrophes and honest thank-you

### #anchoring h2
- before: If it's taller than your kid, we <em>strap</em> it to the beam.
- after: If it’s taller than your kid, we <em>strap</em> it to the beam.
- why: straight apostrophe (type -0.5, should 2). This h2 keeps its accent.

### #kids .rcard__room
- before: Kids' room
- after: Kids’ room
- why: curly apostrophe. Also set `’` in the plan svg title ("kids’ room") and anywhere else a literal `'` shows in visible copy. The form chip "Kids' rooms" comes from `{{services.3.short}}`, so leave the token alone.

### #contact form data-thanks
- before: Thanks, {name}. In your version this goes straight to the owner's phone and inbox. This demo sent nothing.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the agent spec's honest thank-you line, and it removes a straight apostrophe.
