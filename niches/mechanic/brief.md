# Mechanic (general auto repair and diagnosis) — niche brief

A drop-off shop with a real bay and a real lift. The customer books an appointment, drops the car off in the morning, and gets a call or a text with what was found before any work is done. The sites give the **city only, never a street address** ("in Lansing", "our shop on the east side" at most). The schema type is `AutoRepair`. No car-maker logos, no brand-name parts walls, and no "dealer" claims of any kind (no "dealer-quality", no "dealer alternative", no "factory-trained"). This niche is about **trust in the diagnosis**: what is actually wrong, what it costs to fix, and what can wait. It is deliberately the opposite of the tune-up niche, which sells speed and routine.

## 1. The buyer

**Who calls.** Three kinds of people, all with a car that is doing something it should not:
- **The worried daily driver (about 55%).** 25-65, one or two cars, drives to work every day and cannot be without the car for long. A light came on, a noise started, the brakes feel soft, the A/C blows warm. Wants to know if it is safe to drive and what it will cost, in that order.
- **The burned-before skeptic (about 30%).** Was quoted a long list somewhere else, or paid for a part that did not fix it. Comes in already doubting. Wants to see the worn part, a photo, or the reading; wants to hear "this one can wait".
- **The used-car buyer and the road-tripper (about 15%).** Buying a used car from a private seller and wants it checked first; or heading out on a long drive and wants a once-over. Plans a few days ahead.

**What just happened.** The check engine light came on on the drive home, steady or flashing. A grinding noise when braking. A squeal on cold mornings. A clunk over bumps. The temperature needle crept up in traffic. The car pulls to one side. It failed to start once and then started fine. A puddle under the engine. Another shop gave them a quote with nine lines on it.

**Fears, in their words.**
- "They'll find a hundred things wrong."
- "I'll pay for a part and it won't fix it."
- "Is it safe to drive it there, or do I need a tow?"
- "I won't understand what they tell me, and they'll know it."
- "They'll keep my car for a week."
- "They'll do the work first and call me after."

**What makes them trust.**
- A clear promise: **nothing is done without a call and your yes**.
- Seeing the problem: a photo of the worn pad, the leaking hose, the reading on the scan tool, sent by text.
- Plain words: "your front brakes are at 3 mm, you have a month or two", not "pads are at minimum spec".
- Being told what can wait, and what it will cost when it can't.
- A diagnostic fee that is stated up front and what it covers.
- Knowing the drop-off routine: when to come, where the keys go, when they will hear back, how to get to work.

**What makes them leave in 5 seconds.** A wall of car-maker logos. A stock photo of a smiling mechanic in a spotless uniform giving a thumbs-up. "Dealer quality at half the price". A coupon banner. A page that does not say what happens after you drop the car off. A big red "we fix everything" headline with no detail.

## 2. The job

**Emergency vs planned.** Planned, by appointment. A car that will not move needs a tow first, and the shop says so plainly; everything else is booked for a drop-off morning. `emergency: false` on every site.

**How a visit works (the drop-off routine).** Book a morning. Drop the car off before the shop opens or at the counter (a key drop box is common; say "key drop" not "night drop" if the wording is used). The tech checks the complaint first, then calls or texts with what was found, a photo and a price. Nothing else happens until the customer says yes. Most repairs are done the same visit when the part is on the shelf; if a part has to be ordered, the customer is told how long. Pick-up before closing.

**Seasonality (Lansing, Billings, Anchorage).**
- **Lansing:** salt-belt rust: brake lines, exhaust, suspension parts seize; potholes in March bend wheels and break springs; A/C in July; batteries fail on the first hard cold snap in December or January.
- **Billings:** big temperature swings, chinooks, long highway miles on I-90 and I-94: cooling systems, belts, wheel bearings, gravel-road suspension wear, hail-season windshield chips (not a mechanic job, but people ask).
- **Anchorage:** the car-year is the whole business: block heaters and batteries before October, studded-tire swaps on the state's dates, frost-heave potholes and alignments at breakup, brakes and suspension after a winter of gravel and ice. (Do **not** print exact studded-tire dates on the site; say "the state sets the dates".)

**Ticket bands (words).** Small: a diagnostic check, a battery, a brake inspection, a belt. Medium: front brakes with rotors, a wheel bearing, an alternator or starter, a cooling system repair, a pair of struts. Larger: timing belt or chain, head gasket, a full brake job with lines, transmission work (often referred out; say so).

**Services that sell (from facts).** Check engine light diagnosis, brake repair, suspension and steering, cooling system and overheating, starting and charging (battery, alternator, starter), A/C repair, exhaust and muffler, pre-purchase inspections, timing belt and water pump, wheel bearings and CV axles, electrical problems, road trip checks.

**Customer words vs shop words.**
| Customer says | Shop says |
|---|---|
| check engine light | MIL / malfunction indicator lamp |
| the code | DTC, diagnostic trouble code (e.g. P0420) |
| it's shaking | misfire / vibration at speed |
| grinding when I brake | pads to the backing plate, rotor scoring |
| squealing on cold mornings | belt glaze / tensioner |
| clunk over bumps | sway bar link / ball joint / strut mount |
| humming that gets louder with speed | wheel bearing |
| it pulls to one side | alignment / caliper drag |
| it's running hot | cooling system: thermostat, water pump, radiator |
| it won't start | no-crank vs crank-no-start |
| the battery died | parasitic draw / charging system |
| the car is leaking | oil / coolant / power-steering seep |
| a quote | estimate / repair order |
| looking at it | diag time |

## 3. What they search

- mechanic near me
- auto repair [city]
- check engine light diagnosis [city]
- check engine light flashing
- brake repair near me
- brakes grinding
- car making noise when braking
- car overheating repair
- car won't start
- alternator replacement cost
- suspension repair near me
- car pulling to one side
- A/C not blowing cold car
- pre purchase inspection [city]
- honest mechanic [city]
- diagnostic fee mechanic
- wheel bearing noise
- timing belt replacement cost

**Above the fold, because of these.** The phone number (and "text us" if the shop texts). One line that says what kind of shop this is (diagnosis and repair, cars and light trucks, by appointment). The promise: **we call you before any work, with a photo and a price**. A "book a drop-off" button and a second entry for "what's my car doing?" (the warning light or noise tool). The city and the towns served. No street address.

## 4. What every competitor site does (so we do not)

1. A row of car-maker logos across the top ("we service all makes": say it in words, once).
2. A smiling technician in a clean uniform with a thumbs-up, or two people shaking hands over a hood.
3. "Dealer quality without the dealer price" or "factory-trained": banned here.
4. Coupon banners and "$X off your next service" pop-ups.
5. A grid of 30 service icons (wrench, tire, battery, oil drop) with no detail behind any of them.
6. Generic hero text: "Your one-stop shop for all your automotive needs."
7. No word about what happens after drop-off: who calls, when, and whether they can say no.
8. A stock photo of a sports car on a lift that no customer of this shop owns.

## 5. Niche tools (pick from, each site uses 2+)

- **Warning light decoder.** Tap the light you see (check engine steady, check engine flashing, oil, battery, temperature, brake, ABS, tire pressure). Each gives: what it usually means, "safe to drive?" in plain words (drive it in / drive gently, book soon / stop and call for a tow), and what the shop will check first.
- **Noise finder.** Three questions: when (braking, turning, over bumps, at speed, cold start), where it seems to come from (front, back, under the hood), what it sounds like (grinding, squeal, clunk, hum, click). Output: the two or three usual causes, how urgent, and the matching service.
- **Code in plain English.** Type a code from a parts-store scan (a sample list: P0300, P0420, P0171, P0128, P0455) and get one plain sentence on what it means, the usual causes from cheapest to dearest, and why the code alone is not the diagnosis. Labelled "sample list".
- **Repair or replace helper.** Rough car value, rough repair estimate (sample ranges from facts), miles, and how long they want to keep it. Output in words: "fix it", "fix it and start saving", or "get a second look before you spend". No numbers invented; ranges come from `proof.prices` and are labelled sample.
- **Drop-off planner.** Pick a morning, see what to bring (the complaint, when it happens, any codes), where the keys go, when to expect the call, and pick-up time. Optional "I need a ride to work" checkbox that goes into the quote form.
- **Brake wear explainer.** A pad drawn at new, half, 3 mm and metal-on-metal, with what each one sounds and feels like and how long it usually has left.
- **Pre-purchase checklist.** What the inspection covers, what the seller should bring, and what the report will say. Ends with "book it before you pay".
- **ZIP checker.** Enter a ZIP: "Yes, that's close to the shop — book a drop-off" or "That's a long drive; call us and we'll tell you honestly if it's worth it." (from `biz.zips`).

## 6. The three directions

### A — The repair order   (axis: PROCESS — how the work is done, shown step by step)
- Brand: Line Item Auto Repair · Lansing, MI · facts-A.json
- Concept seed: The page is a repair order that fills in as you read it. Every step of a visit is a line: "Drop-off 7:30", "Check the complaint", "Call you with photo and price", "Your yes", "Repair", "Road test", "Pick-up". Each line has a status chip (waiting / doing / done) and a labor clock, so the customer sees exactly where a car is in a visit and that the "your yes" line always comes before the repair line. Lansing texture: salt-rusted brake lines, March potholes on Saginaw and Michigan Ave, the drive out to Okemos and Holt, state-office commuters, MSU students' first cars, a long winter of short trips.
- Tone lead: light-led (paper-white repair order, graphite type, a single safety-orange accent for the status chips and the "your yes" line; photos in cool daylight).
- Type lead: slab (a sturdy slab serif for headlines, like a stamped shop form; a clean sans for body and a tabular figure style for times and line numbers).
- Hero family: 2 — 50/50 split (left half: the repair order card with its first three lines; right half: a photo of a car up on a lift in a clean bay, seen from below).
- Signature seed: **the repair order line items.** A form that grows down the page: each section adds a numbered line with a status chip and a labor clock ("Line 4 · Your yes · 0:00 — nothing happens without it"). Services are listed as example lines with what is checked and a sample price range. The footer is the closed repair order: "All lines done · road-tested · keys at the counter".
- Motion idea: Intro: the first line's status chip flips from waiting to doing, the labor clock starts. Scroll story: each new section writes its line in, the chip changes to done as the next one starts; the "your yes" line pulses once and holds the following lines until it is ticked.
- Tools: Drop-off planner, brake wear explainer, warning light decoder + ZIP checker + multi-step quote form ("your car (year, make, model as text) → what it's doing → when it happens → preferred drop-off morning → how to reach you").
- Photo mood: Clean, cool daylight in a working bay: a car on a lift from below, brake parts on a bench, a tech's gloved hands, a clipboard on a fender cover. Hands and backs only; no logos on cars or tools.

### B — The code, in plain words   (axis: PROOF & TOOLS — numbers, checks, answers before the call)
- Brand: Plain Code Auto Repair · Billings, MT · facts-B.json
- Concept seed: A scan tool gives a code; a good mechanic tells you what it means and what it does not mean. The page pairs the machine and the human: every block has a "code" side (a reading, a measurement, a code) and a "plain" side (one sentence a normal person understands). It proves the shop's honesty with numbers it shows you: pad thickness in mm, battery test results, coolant temperature, the diag fee and what it covers. Billings texture: I-90 and I-94 highway miles, the Rims at dusk, gravel roads out to Shepherd and Huntley, chinook days that swing forty degrees, hail season, long drives to Bozeman and Red Lodge.
- Tone lead: dark-led (near-black like a scan tool screen, a single bright signal green for codes and readings, white plain-English type).
- Type lead: condensed (a tall condensed grotesk for headlines and codes, like a gauge cluster; a plain sans for the plain-English lines).
- Hero family: 11 — diagonal split (a hard diagonal: the upper left is the dark "code" panel with "P0420" and the reading; the lower right is a photo of an engine bay lit by a work light).
- Signature seed: **the code and its translation.** Every section starts with a code-style line in green ("P0301 · Cylinder 1 misfire") and under it the plain sentence ("One cylinder isn't firing right. Often a coil or a plug. Not safe to ignore, fine to drive gently to us."). Services, reviews and FAQs all use the pair. The footer reads "No codes · ready to drive".
- Motion idea: Intro: the code types in character by character, then the plain sentence fades in under it. Scroll story: each section's code line flickers like a screen refreshing, then resolves; readings (mm, volts, degrees) count up to their values.
- Tools: Code in plain English, warning light decoder, repair or replace helper + ZIP checker + multi-step quote form ("what light or code → what it's doing → how far you drive → preferred drop-off morning → how to reach you").
- Photo mood: Dark and focused: an engine bay under a work light, a scan tool cable in a port (screen not readable), a multimeter on a battery, a brake rotor and a caliper, a gloved hand with a flashlight. No faces, no car logos, no readable plates.

### C — The car-year in Anchorage   (axis: LOCAL STORY — the place, the weather, the streets, the people)
- Brand: Frost Heave Auto Repair · Anchorage, AK · facts-C.json
- Concept seed: In Anchorage a car lives through a year that the Lower 48 would not believe: the first frost in September, dark commutes on the Glenn, block heaters plugged in at the grocery store, studded tires on and off on the state's dates, breakup potholes that bend wheels and kill alignments, and a short bright summer of long drives to Seward and Talkeetna. The page is that year, told like a magazine: each section is a season, and the shop's work is what that season does to cars. Anchorage texture: Chugach views, frost heaves on Northern Lights Blvd, Eagle River and Girdwood commutes, moose on the road, ice fog, Midtown parking lots.
- Tone lead: color-led (glacier blue, fireweed magenta and spruce green on a snow-white page; each season gets its own lead color).
- Type lead: serif (a high-contrast editorial serif for headlines like a magazine cover; a plain sans for body).
- Hero family: 6 — magazine cover (a full-bleed photo of a car's headlights in blue winter twilight with a masthead-style brand, an issue line "The car-year · Breakup issue" and three cover lines that link to sections).
- Signature seed: **the car-year with an outside temperature readout.** A small readout follows the page ("Outside: −8°F · January · Battery and block heater season") and changes as each season section scrolls in; each season has the two or three repairs it brings. The footer reads "Outside: 64°F · July · Road trip checks".
- Motion idea: Intro: the cover lines slide in one by one like a magazine being set. Scroll story: the temperature readout ticks between seasons, the lead color crossfades, and light on the page goes from winter blue to summer gold.
- Tools: Warning light decoder, noise finder, drop-off planner + ZIP checker + multi-step quote form ("your car → what the season did to it → what it's doing now → preferred drop-off morning → how to reach you").
- Photo mood: Seasons in Alaska light: headlights in winter twilight, studded tires stacked, a block heater cord out of a grille, a frost-heaved road, breakup slush, a car on a summer highway with mountains. No faces, no plates, no car logos.

## 7. Shot list (for the media curator)

**Hero candidates.**
- A1: a car up on a two-post lift in a clean, bright bay, seen from below or side, no logos. A2: brake parts (rotor, caliper, pads) on a clean bench in daylight. A3: gloved hands with a clipboard resting on a fender cover.
- B1: an engine bay lit by one work light in a dark shop. B2: a scan tool cable plugged under a dash, screen not readable, dark. B3: a multimeter on a battery terminal, close and moody.
- C1: car headlights in blue winter twilight with snow. C2: studded tires stacked against a shop wall. C3: a car on a summer Alaska highway with mountains, from behind.

**Shared pool (slots).**
- Process: car on lift, tech under a car from behind, brake job in progress, wheel off at the hub, checking tire tread, road test (hands on the wheel), parts on a bench, oil drain, coolant check, belt check, key drop box.
- Parts: brake rotor, worn vs new pads, alternator, battery, strut, ball joint, wheel bearing, CV axle, serpentine belt, radiator, spark plugs and coil.
- Tools: scan tool cable (screen unreadable), multimeter, torque wrench, flashlight under a car, creeper, socket set, lift arms.
- Places: shop bay door from outside, waiting area with coffee (no faces), parking lot in snow, Midwest street in March, Montana highway, Alaska twilight.
- Seasonal: salt on a car's wheel well, pothole, studded tire close-up, block heater cord, A/C vent, ice on a windshield.
- Hands: gloved hand on a wrench, hand pointing at a worn part, hand on a steering wheel, hands handing over keys.

**Video ideas.** A car rising on a lift in slow motion; a wheel spinning off a hub; a work light sweeping across an engine bay; headlights turning on in winter twilight. No faces, no car logos, no plates.
