# appliance-A · Copy deck

## Header
Wordmark {{biz.short}} · nav: The visit · What we fix · Symptoms · Prices · Area · Call {{biz.phone}} · Text · Book a visit

## Hero (Panel 00)
- label: PANEL 00 · DRYER, REAR
- kicker: {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}
- cell labels: YOU NOTICE / BEHIND THE PANEL
- h1: Runs. No heat. / We open the back and show you why.
- lead: Tell us what it's doing and read us the model number. We bring the likely part, test it in front of you and put the failed one in your hand.
- buttons: Call {{biz.phone}} · Text us a photo
- proof: {{hours|today}} · Visit {{proof.prices.0.from}}–{{proof.prices.0.to}} (Sample pricing) · {{proof.rating}} from {{proof.reviewCount}} reviews (Sample rating)
- drawing tags: THERMAL FUSE · BLOWN / HEATER COIL · OK / DRUM
- photo label: PANEL 00 · METER CHECK; caption: Meter leads on a circuit board: test before any part is swapped.

## One service call (Panels 01-07)
- kicker: One service call, panel by panel · h2: Seven panels between "it's making a noise" and "it's running".
- 01 You describe it — "It runs, but the towels come out cold." / Behind: we write your words down; the symptom points to three parts, not thirty.
- 02 We ask the model number — Read it off the tag inside the door. / Behind: the model number tells us which fuse, igniter or pump your machine takes.
- 03 The likely part rides along — No "we'll order it and come back next week". / Behind: the common parts for your model are in the van before we leave.
- 04 We test before we swap — A meter on the part, not a guess. / Behind: no continuity across the thermal fuse = the fuse is open.
- 05 The failed part, in your hand — You see the burnt fuse yourself. / Behind: the reading and the part, shown before any work is billed.
- 06 Fix it, or we tell you not to — On an old machine, the honest answer can be "replace it". / Behind: if the repair costs more than half a new machine, you hear that first.
- 07 The old part leaves with us — Panel back on, cycle run, floor clean. / Behind: we run it through a full cycle before we pack up.

## What we fix
- kicker: Ten machines, one van · h2: What we take the back off.
- card label PANEL S-0N · CTA "Book this" · rows CTA "Book"

## Symptom finder
- kicker: Before you call · h2: Say it the way you'd say it. We'll tell you what that usually means.
- lead: Pick the machine, then the thing it's doing. Try the safe check first; if it doesn't help, that's our job.
- per symptom: Usually / Safe check / Stop and call when / CTA "Send this to us"

## Model tag
- kicker: The tag with the numbers · h2: Read us the model number and the right part rides along.
- per appliance: Where / Why it matters · CTA "I have my number"

## Reviews
- kicker: What they saw · h2: Six calls, and the part that was behind each one.
- cells: WHAT THEY SAW / WHAT WAS BEHIND IT · rating card: {{proof.rating}} average · {{proof.reviewCount}} reviews · Sample rating

## Prices
- kicker: The number before the knock · h2: The visit is {{proof.prices.0.from}}–{{proof.prices.0.to}}, and it counts toward the fix.
- rule: If the repair costs more than half a new machine and yours is past half its life, we'll say "replace it" and charge only the visit.
- price panel: PANEL 05 · PARTS AND LABOR, rows from proof.prices, Sample pricing stamp, 90-day part promise: {{proof.guarantee}} (Sample)

## Vent check
- kicker: Clothes take two cycles? · h2: Sometimes it's not the dryer. It's 40 feet of vent.
- inputs: Straight feet of vent · 90° elbows · 45° elbows · result "≈ N ft equivalent" vs 35 ft typical limit (check your dryer's manual)
- CTA: Add a vent check to my visit

## Area
- kicker: Local, with a {{biz.city}} number · h2: {{biz.city}} and the seven towns around it.
- ZIP label: Your ZIP code · button: Check · hours title: Shop hours

## Contact (form)
- kicker: PANEL 08 · Book a visit · h2: Four screws and we're on our way.
- steps: 1 What is it doing? · 2 Model number and ZIP · 3 When works · 4 How we reach you
- button: Send my request · micro: We'll call you back to set a time. Nothing is charged until we've looked.
- thanks: Thanks, {name}. Panel's back on. In your version this request goes straight to your phone and inbox.

## Footer
- Panel back on. Machine running. · {{demo.disclaimer}} · [[credits]]
