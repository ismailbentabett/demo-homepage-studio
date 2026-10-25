# Auto tune-up (maintenance, tune-ups, quick service) — niche brief

A small maintenance shop: oil changes, tune-ups, filters, fluids, tires rotated, wipers and bulbs, batteries, mileage services. Customers book a time, drop the car off (or wait for the short jobs), and are back on the road quickly. The sites give the **city only, never a street address**. The schema type is `AutoRepair`. No car-maker logos, no "dealer" claims (no "dealer-recommended", no "factory scheduled maintenance at dealer quality"), and no chain names. This niche is about **routine and speed**: knowing what is due, getting it done in a predictable window, and not being sold what is not due. It must feel nothing like the mechanic niche, which is about diagnosing a problem; here nothing is wrong yet, and the goal is to keep it that way.

## 1. The buyer

**Who calls (or books online).** Three kinds of people, none of them worried, all of them busy:
- **The schedule keeper (about 45%).** 30-70, keeps a car for years, knows the oil sticker is due or the dash says "maintenance required". Wants to book a slot, be in and out, and trust that only due items are done.
- **The busy commuter or parent (about 35%).** Wants the oil changed on a lunch break or before school pick-up. Cares about the time more than anything: how long, can I wait, is there Wi-Fi, can I drop it at 7:30 and get it at noon.
- **The new-to-maintenance driver (about 20%).** A student, a first car, a car bought used with no records. Does not know what "60,000-mile service" means and is afraid of being upsold. Wants a plain list of what is due at their mileage.

**What just happened.** The oil-change sticker says 3,000 miles ago (and they've heard that's out of date). The "maint req" light came on. A tire looks low every morning. The wipers smear. A headlight is out. The car is about to go on a road trip. They bought a used car and have no idea what was done. Winter or summer is coming.

**Fears, in their words.**
- "They'll try to sell me an air filter every time."
- "A 'quick' oil change that takes two hours."
- "Do I really need a flush? What even is that?"
- "Will they use the right oil for my car?"
- "They'll find something wrong just because I'm there."

**What makes them trust.**
- A posted time for each job ("about 30 minutes"), and an honest "drop it off" for the longer ones.
- A clear menu: what each service includes, a sample price range, and how often it is due.
- Being shown the old part: the dirty filter held next to a new one, the wiper blade, the tread gauge.
- "Not due yet" said out loud, with the mileage when it will be.
- A reminder by text when the next service is due, not a pile of emails.

**What makes them leave in 5 seconds.** Coupon pop-ups. "Lube, oil and filter special" in starburst graphics. A chain-looking yellow-and-red banner. A grid of car-maker logos. A site that does not say how long anything takes. Hard upsell language ("don't wait until it's too late!").

## 2. The job

**Emergency vs planned.** Always planned. This shop does maintenance and quick service by appointment; a car that is broken is referred to a repair shop. `emergency: false` on every site.

**How a visit works.** Book a slot online or by text. Short jobs (oil change, tire rotation, wipers, bulbs, battery) are done while you wait, with a posted time. Longer jobs (tune-up with plugs, mileage services, fluid exchanges) are drop-offs: drop at 7:30, pick up by midday or after work. Every visit ends with a short report: what was done, what is due next and at what mileage, and anything that is "watch, not due".

**Seasonality (Provo, Reno, Santa Fe).**
- **Provo:** BYU and UVU students arriving in late August and leaving in April (first-car maintenance), inversion winters with short trips that are hard on oil, canyon drives up Provo Canyon to Sundance, summer heat and road trips to the national parks.
- **Reno:** high desert heat in July and August (batteries die in heat, too), dust that clogs air filters, I-80 over Donner Pass in snow, Lake Tahoe weekends, winter wipers and washer fluid.
- **Santa Fe:** about 7,000 feet up: thinner air, cold nights and warm days, strong sun that bakes wipers and rubber, dry air that cracks belts and hoses, dusty roads, monsoon season in July and August, snow on the road to the ski basin.

**Ticket bands (words).** Small: an oil change, a tire rotation, wipers and bulbs, a battery test. Medium: a tune-up with spark plugs, a brake fluid or coolant exchange, filters and a rotation together, a battery replacement. Larger: a full mileage service (30k, 60k, 90k), a transmission fluid service, a pre-trip package.

**Services that sell (from facts).** Oil change (conventional, synthetic blend, full synthetic), tune-up and spark plugs, engine and cabin air filters, tire rotation and balance, brake fluid exchange, coolant exchange, transmission fluid service, battery test and replacement, wipers and bulbs, mileage services, pre-trip check, seasonal checks.

**Customer words vs shop words.**
| Customer says | Shop says |
|---|---|
| oil change | lube, oil and filter / LOF |
| tune-up | ignition service: plugs, coils, boots |
| the maintenance light | service reminder / oil life monitor |
| the 60,000-mile thing | 60k scheduled maintenance interval |
| flush | fluid exchange |
| the filter in the dash | cabin air filter |
| the air filter | engine air filter |
| rotate the tires | tire rotation, cross or front-to-back pattern |
| my tires are low | TPMS warning / pressure set to placard |
| synthetic | full synthetic, 0W-20 / 5W-30 spec |
| wipers smear | blade wear / UV-cracked rubber |
| a quick look over | multipoint inspection |
| my battery's weak | CCA test / load test |
| check my fluids | top-off: washer, coolant, brake, power steering |

## 3. What they search

- oil change near me
- quick oil change [city]
- full synthetic oil change near me
- tune up near me
- spark plug replacement cost
- 60000 mile service near me
- tire rotation near me
- cabin air filter replacement
- brake fluid flush near me
- coolant flush cost
- transmission fluid change near me
- battery test near me
- wiper blade replacement
- headlight bulb replacement
- maintenance required light
- how often oil change synthetic
- car maintenance schedule by mileage
- oil change appointment [city]

**Above the fold, because of these.** The phone number and "text to book". The menu in one line (oil, tune-ups, filters, fluids, tires, batteries). The time promise in words ("most oil changes in about 30 minutes, by appointment"). A "book a time" button and a "what's due at my mileage?" entry. The city and the towns. No street address, no coupons.

## 4. What every competitor site does (so we do not)

1. Starburst coupons and "$X off synthetic" pop-ups on load.
2. A chain-style red-and-yellow look with a cartoon oil drop or a winking wrench.
3. A grid of car-maker logos ("we service all makes and models").
4. "Dealer-recommended maintenance" or "factory scheduled maintenance": banned here.
5. Stock photo of a smiling attendant with a dipstick, looking at the camera.
6. "Don't wait until it's too late!" scare copy to sell flushes.
7. No times anywhere: the customer cannot tell if this is 20 minutes or a whole day.
8. A wall of 40 services with no menu logic (what is included, how often).

## 5. Niche tools (pick from, each site uses 2+)

- **What's due at my mileage.** Enter the mileage (and optionally how you drive: mostly short trips, mostly highway, towing, dusty roads). Output: a list of what is usually due now, what is coming in the next 5,000 miles, and what is not due. Generic intervals only, with "your owner's manual wins" stated. Labelled "sample schedule".
- **Service menu with times.** Each service shows what is included, about how long it takes, whether you wait or drop off, and a sample price range from `proof.prices`.
- **Oil type explainer.** Conventional vs synthetic blend vs full synthetic in plain words, with "the right one is the one your car's spec calls for" and the usual change range for each.
- **Wait-or-drop planner.** Pick the services; the tool adds up the times and says "wait for it" or "drop it at 7:30, pick up by noon", with the next openings (sample).
- **Next service reminder.** Pick a reminder by mileage or months; shows the text you'd get ("Your oil is due around 48,200 mi"). Demo-only; the form captures the request.
- **Tread and wiper check.** A drawn tire tread at 10/32, 4/32 and 2/32 and a wiper blade new vs UV-cracked, with what each one means and when to replace.
- **Season check list.** Before winter or before summer: what to check (battery, coolant, wipers, tires, A/C), tick boxes, then "book a season check" with the ticked items prefilled.
- **ZIP checker.** Enter a ZIP: "Yes, an easy drive to the shop — book a time" or "That's a drive; a booked drop-off works best."

## 6. The three directions

### A — Stations on the clock   (axis: PROCESS — how the work is done, shown step by step)
- Brand: Quarter Hour Tune-Up · Provo, UT · facts-A.json
- Concept seed: A quick service is a relay: the car moves through stations, each with a job and a time. The page is that relay: the oil station, the filter station, the tire station, the check station, the hand-back. Each section is one station with its stopwatch time, what happens there, and what you can do while you wait (sit, work on the Wi-Fi, walk to get a coffee). Provo texture: students at BYU and UVU with their first cars, families with minivans in Orem and Springville, Provo Canyon drives, the Wasatch Front above the shop, inversion winters, summer trips to Zion and Moab.
- Tone lead: color-led (a bright, clean palette: signal tangerine and deep teal on an off-white page, each station tinted its own color, like lanes on a track).
- Type lead: grotesk (a wide, friendly grotesk for big headlines and station numbers; the same family for body).
- Hero family: 4 — stacked headline + cinematic strip (three short stacked lines, "Book it. / Wait or walk. / Done by the time you're back.", over a wide, letterboxed photo strip of a car in a bright bay).
- Signature seed: **the stopwatch stations.** A stopwatch dial runs alongside the page; each station section adds its lap ("Station 2 · Filters · 6 min") and the total keeps running ("Total so far: 24 min"). Services are stations with what's included; the footer stops the clock: "Done · 31 min · next oil due around 48,200 mi".
- Motion idea: Intro: the stacked lines drop in on the beat of a stopwatch tick; the photo strip slides across. Scroll story: the stopwatch hand sweeps as each station enters, lap times stack up like splits, each station's color fills the dial segment.
- Tools: Wait-or-drop planner, service menu with times, oil type explainer + ZIP checker + multi-step quote form ("your car (year, make, model as text) → mileage → which services → wait or drop off → when → how to reach you").
- Photo mood: Bright, quick, clean: a car in a sunlit bay, an oil filter being spun on, a tire coming off for rotation, a cabin filter dirty vs new, a wiper blade swap, a coffee cup in the waiting area, mountains through the bay door. Hands only, no faces, no car logos.

### B — What's due at your mileage   (axis: PROOF & TOOLS — numbers, checks, answers before the call)
- Brand: Next Interval Tune-Up · Reno, NV · facts-B.json
- Concept seed: The odometer is the whole story. The page opens with the tool itself, the customer types their mileage, and the page answers: what is due now, what is next, what is not due. Every section is a row of odometer digits with the service that belongs at that mileage, so the site proves its honesty by saying "not yet" as often as "now". Reno texture: high-desert heat and dust, I-80 over Donner Pass in snow, weekends at Tahoe, commutes to Sparks and Carson City, Truckee River summer, wind off the Sierra.
- Tone lead: light-led (clean white and pale sand, black odometer digits, a single cool blue for "due now" and a soft grey for "not yet").
- Type lead: condensed (a narrow, tabular condensed face for odometer digits and headlines; a plain sans for body).
- Hero family: 7 — tool-first (the hero is the mileage input with a rolling odometer and three result rows; the photo is small and secondary, a dash cluster with the mileage blurred).
- Signature seed: **the service-interval odometer rows.** Each section header is an odometer row that rolls to a mileage ("030,000 · Engine and cabin air filters · Due"), and services are listed by interval, not by category. "Not due" rows are shown on purpose, greyed. The footer row reads "Next interval: we'll text you".
- Motion idea: Intro: the odometer digits roll from zeros to the sample mileage and the result rows slide in. Scroll story: each section's odometer row rolls to its mileage as it enters; "due" rows tick blue, "not due" rows stay grey.
- Tools: What's due at my mileage, tread and wiper check, next service reminder + ZIP checker + multi-step quote form ("mileage → what's due (prefilled from the tool) → wait or drop off → when → how to reach you").
- Photo mood: Clean and bright: a blurred odometer, a dirty air filter in high-desert dust, fresh oil being poured, a tread gauge on a tire, a battery tester, a car on I-80 with Sierra snow in the distance. No faces, no plates, no car logos.

### C — Tuned for thin air   (axis: LOCAL STORY — the place, the weather, the streets, the people)
- Brand: Thin Air Tune-Up · Santa Fe, NM · facts-C.json
- Concept seed: At about 7,000 feet, a car lives differently: less air for the engine, cold nights and warm days, a sun that bakes wipers and rubber, dust on every road, monsoon storms in summer, snow on the climb to the ski basin. The page tells that story with Santa Fe's own colors: adobe walls, turquoise doors, the Sangre de Cristo above town, the drive out to Eldorado and up to Los Alamos. Each section is a reason a car here needs looking after a little differently.
- Tone lead: dark-led (deep night-sky indigo-black, the Santa Fe night, with a single turquoise accent; adobe and sunset tones only in the photos).
- Type lead: mono-accent (a monospaced face for the altitude marker, readings and small labels; a calm humanist sans for headlines and body).
- Hero family: 10 — centered statement + photo marquee (a short centered line, "Tuned for thin air.", with a slow horizontal marquee of photos below: adobe wall, a car on a high road, a sunset over the Jemez, a wiper on a dusty windshield).
- Signature seed: **the altitude marker.** A small monospaced marker on the side of the page reads the altitude of each section's place ("7,199 ft · Santa Fe Plaza · oil and filters") and climbs as the page goes on (Eldorado, Los Alamos, the ski basin road), each with the maintenance that place asks for. The footer reads "Sea level is a long way down. See you at the next interval."
- Motion idea: Intro: the centered line fades in letter by letter over the night sky, then the marquee starts. Scroll story: the altitude marker counts up between sections, the background shifts from night indigo toward dawn, and stars thin out as you reach the footer.
- Tools: Season check list, oil type explainer, what's due at my mileage + ZIP checker + multi-step quote form ("your car → mileage → where you drive (town, dirt roads, the ski road) → services → when → how to reach you").
- Photo mood: High-desert light: adobe walls, turquoise doors, a car on a mountain road at sunset, a dusty windshield with wipers, cracked rubber, a fresh air filter vs a red-dust one, monsoon clouds over the mesa. No faces, no car logos, no plates.

## 7. Shot list (for the media curator)

**Hero candidates.**
- A1: a car in a sunlit, clean service bay, wide letterbox crop. A2: a gloved hand spinning on a new oil filter. A3: mountains framed by an open bay door with a car inside.
- B1: a blurred odometer or dash cluster (numbers unreadable, no logo on the wheel). B2: a dirty air filter next to a clean one. B3: a car on a mountain interstate with snow peaks behind, from behind.
- C1: an adobe wall at sunset with a car's shadow. C2: a car on a high mountain road at dusk, far away. C3: monsoon clouds over a mesa with a road.

**Shared pool (slots).**
- Process: oil pouring, oil filter on, drain plug, tire off for rotation, tire pressure check, wiper swap, bulb swap, battery test, air filter swap, cabin filter swap, coolant pour, brake fluid check, fluid top-off.
- Parts: spark plugs new vs old, ignition coil, engine air filter dirty vs new, cabin filter dirty vs new, wiper blade, oil jug (no label), battery, headlight bulb.
- Tools: tread gauge, tire pressure gauge, funnel, battery tester, torque wrench on lugs.
- Places: bright bay, waiting room coffee (no people), bay door with mountains, Utah canyon road, Reno desert highway, Sierra snow road, Santa Fe adobe, mesa road, monsoon sky.
- Seasonal: summer heat shimmer road, snowy windshield, dust on a hood, sun-cracked wiper.
- Hands: hand on a dipstick, hand pouring oil, hand with keys.

**Video ideas.** Oil pouring in slow motion; a tire spinning on a balancer; an odometer rolling; a road at sunset in the high desert. No faces, no car logos, no plates.
