# Niche template

Every niche lives in `niches/<trade>/` and has exactly these files before any site of it is built:

```
niches/<trade>/
  brief.md              research + 3 directions (A, B, C)
  facts-A.json          the fictional business for direction A (schema: docs/facts.schema.json)
  facts-B.json
  facts-C.json
  media-queries.json    what the media curator searches for
  media/                created by tools/fetch-media.mjs (pool/, approved/, manifest.json, contact sheets)
```

`node tools/validate-niche.mjs <trade>` checks all of it (schema, phone pool, unique NN, ZIP format, banned words,
sibling differences). `tools/next.mjs` will not start a niche that fails it.

---

## brief.md (shape)

```markdown
# <Label> — niche brief

## 1. The buyer
Who calls (age range, homeowner type, household situation), what just happened that made them search,
what they are afraid of (3-5 concrete fears, in their words), what makes them trust (3-5), what makes
them leave a site in 5 seconds.

## 2. The job
Emergency vs planned split, seasonality by month for this region, average ticket bands (words, not $),
the 6-12 services that sell (from facts), the vocabulary homeowners use vs the vocabulary pros use
(10+ pairs, e.g. "leak in the ceiling" vs "flashing failure").

## 3. What they search
12-20 real search phrases ("roof leak repair near me", "how much does a new roof cost tulsa").
What the page must answer above the fold because of them.

## 4. What every competitor site does (so we do not)
5-8 clichés of this trade's websites (stock handshake, "quality you can trust", truck photo, etc.).

## 5. Niche tools (pick from, each site uses 2+)
A list of 5-8 interactive tools that make sense for THIS trade, each with: what the homeowner learns,
inputs, output, how it leads to the call. (e.g. roofer: "storm check" by ZIP + date, "roof age quiz",
"material compare" slider). Prices are ranges from facts.proof.prices only, always labelled sample.

## 6. The three directions
Each direction is a different answer to "why would a homeowner pick this company". They must differ in
everything visible.

### A — <one-line thesis>   (axis: PROCESS — how the work is done, shown step by step)
- Brand: <name> · <city, ST> · facts-A.json
- Concept seed: 2-3 sentences, a real idea, not adjectives.
- Tone lead: dark-led | light-led | color-led   (one of each per niche)
- Type lead: serif | grotesk | condensed | mono-accent | slab   (no two the same in a niche)
- Hero family: one of the 15 in docs/METHOD.md §2 (no two the same in a niche)
- Signature seed: the one system only this site has (e.g. "every section is a sheet in a job folder").
- Motion idea: intro + one scroll story, described in a sentence each.
- Tools: 2-3 from §5 + ZIP checker + multi-step quote form.
- Photo mood: what the photos feel like (light, time of day, distance), for the curator.

### B — <thesis>   (axis: PROOF & TOOLS — numbers, checks, answers before the call)
...

### C — <thesis>   (axis: LOCAL STORY — the place, the weather, the streets, the people)
...

## 7. Shot list (for the media curator)
Hero candidates per direction (3 each, different), then the shared pool: 20-30 shots by slot
(process steps, materials close-ups, tools, finished details, homes of the region's style, weather/season,
hands at work, crew from behind). Plus 2-4 video ideas (5-15 s, slow, no faces, no logos).
"Must" and "avoid" per slot.
```

The three axes (PROCESS / PROOF & TOOLS / LOCAL STORY) are fixed so the 3 sites of a niche never collapse into
one idea. Inside an axis the concept is free.

---

## facts-<A|B|C>.json

Schema: `docs/facts.schema.json`. Example (roofer, direction A):

```json
{
  "id": "roofer-A",
  "trade": "roofer",
  "direction": "A",
  "biz": {
    "name": "Ridgeline Roof Co.",
    "short": "Ridgeline",
    "initials": "RR",
    "slug": "ridgeline-roof",
    "owner": "Dana R.",
    "tradeLabel": "Roofing",
    "schemaType": "RoofingContractor",
    "phone": "(918) 555-0104",
    "phoneE164": "+19185550104",
    "sms": true,
    "email": "hello@ridgeline-roof.example",
    "city": "Tulsa",
    "state": "OK",
    "stateName": "Oklahoma",
    "timezone": "America/Chicago",
    "areas": ["Broken Arrow", "Jenks", "Bixby", "Owasso", "Sand Springs", "Sapulpa"],
    "zips": ["74103", "74104", "74105", "74012", "74037", "74008", "74055"],
    "hours": { "mon": ["07:00", "18:00"], "tue": ["07:00", "18:00"], "wed": ["07:00", "18:00"],
               "thu": ["07:00", "18:00"], "fri": ["07:00", "17:00"], "sat": ["08:00", "12:00"], "sun": null },
    "emergency": true,
    "familyOwned": false
  },
  "services": [
    { "name": "Storm damage repair", "short": "Storm repair", "blurb": "Hail and wind damage found, photographed and fixed." }
  ],
  "proof": {
    "label": "Sample",
    "rating": 4.9,
    "reviewCount": 127,
    "reviews": [
      { "text": "...", "name": "Marisol T.", "town": "Jenks", "service": "Storm damage repair" }
    ],
    "guarantee": "We come back and fix any leak in our work for 10 years.",
    "license": "SAMPLE-OK-80412",
    "insured": true,
    "years": 16,
    "prices": [ { "item": "Leak repair", "from": "$350", "to": "$900", "note": "most single leaks" } ]
  },
  "seo": {
    "title": "Roof Repair & Replacement in Tulsa, OK | Ridgeline Roof Co.",
    "description": "Tulsa roof repair and replacement. Photos of every problem before we quote, a written plan, and a crew that cleans up. Call or get a number online."
  },
  "demo": {
    "disclaimer": "Sample website by Site Sledge. Business details are illustrative."
  }
}
```

Rules:
- `services`: 6-12, taken from `data/demo-trades.json` for the trade and rewritten in plain homeowner words;
  `blurb` 8-18 words, a concrete outcome, no banned words (`docs/DEMO-RULES.md` §4).
- `reviews`: 5-8, each 18-60 words, specific (a detail of the job, a town, a moment), varied length and voice,
  no superlative soup, never "highly recommend" twice in a niche.
- `prices`: 3-6 ranges, realistic for the region, labelled sample on the page.
- `seo.title` 50-60 characters, `seo.description` 120-155 characters.
- `schemaType`: the most specific schema.org type (`RoofingContractor`, `Plumber`, `HVACBusiness`, `Electrician`,
  `HousePainter`, `GeneralContractor`, `Locksmith`, `MovingCompany`, `AutoRepair`, `HomeAndConstructionBusiness`...).

---

## media-queries.json

```json
{
  "photos": [
    { "slot": "hero-A", "queries": ["roofer shingles steep roof", "roof shingles close up sunlight"],
      "must": "landscape, roof work or roof detail, no faces toward camera, no logos", "avoid": "commercial flat roofs, cartoon, drone tilt" }
  ],
  "videos": [
    { "slot": "hero-video-A", "queries": ["roofer installing shingles", "roof nail gun"], "must": "slow, 5-20 s, no faces", "avoid": "drone flyover of cities" }
  ]
}
```

At least: 3 hero slots per direction (9), 25 shared slots, 4 video slots. The curator downloads 3-6 candidates per
slot into `media/pool/` and approves 1 into the manifest.

---

## City and phone pools (fixed, so no two sites collide)

Each niche-writing agent picks 15 different cities from its group's pool (3 per niche, a different city for each
direction) and uses the NN range of its group, one NN per site, never reused. G7-G10 reuse NN ranges with area codes no
earlier group uses: what must be unique across the library is the full number (area code + 555-01NN).

| Group | Niches | NN range | City pool (area code, IANA time zone) |
|---|---|---|---|
| G1 | roofer, hvac, plumber, electrician, gutter | 01-15 | Oklahoma City 405, Tulsa 918, Wichita 316, Fort Worth 817, Houston 713, San Antonio 210 (America/Chicago); Phoenix 602 (America/Phoenix); Las Vegas 702 (America/Los_Angeles); Memphis 901, Birmingham 205, Kansas City 816 (America/Chicago); Columbus 614 (America/New_York); Indianapolis 317 (America/Indiana/Indianapolis); Pittsburgh 412, Buffalo 716 (America/New_York); Portland OR 503, Seattle 206 (America/Los_Angeles) |
| G2 | landscaper, painter, general, handyman, siding | 16-30 | Austin 512 (America/Chicago); Raleigh 919, Charlotte 704 (America/New_York); Nashville 615 (America/Chicago); Asheville 828, Savannah 912, Charleston 843, Richmond 804, Lexington 859 (America/New_York); Louisville 502 (America/Kentucky/Louisville); Grand Rapids 616, Ann Arbor 734 (America/Detroit); Madison 608, Minneapolis 612 (America/Chicago); Providence 401, Hartford 860 (America/New_York) |
| G3 | concrete, fencedeck, pool, solar, windowdoor | 31-45 | Scottsdale 480, Mesa 480, Tucson 520 (America/Phoenix); Sacramento 916, Fresno 559, San Diego 619 (America/Los_Angeles); Tampa 813, Orlando 407, Sarasota 941, Naples 239, Jacksonville 904 (America/New_York); Albuquerque 505 (America/Denver); Boise 208 (America/Boise); Denver 720, Colorado Springs 719, Salt Lake City 801 (America/Denver) |
| G4 | garagedoor, flooring, cleaning, pest, mason | 46-60 | Atlanta 404 (America/New_York); Dallas 214, New Orleans 504, Baton Rouge 225, Little Rock 501, Huntsville 256 (America/Chicago); Chattanooga 423, Knoxville 865, Greenville SC 864, Wilmington NC 910, Norfolk 757, Baltimore 410 (America/New_York); St. Louis 314 (America/Chicago); Cincinnati 513, Cleveland 216 (America/New_York); Omaha 402 (America/Chicago) |
| G5 | drywall, insulation, carpenter, appliance, locksmith | 61-75 | Milwaukee 414, Des Moines 515, Sioux Falls 605, Fargo 701, Duluth 218 (America/Chicago); Rochester NY 585, Syracuse 315, Albany 518, Allentown 610, Harrisburg 717, Worcester 508, Manchester NH 603, Portland ME 207 (America/New_York); Spokane 509, Tacoma 253, Eugene 541 (America/Los_Angeles) |
| G6 | moving, demolition, fireplace, mechanic, autotuneup | 76-90 | Burlington VT 802 (America/New_York); Bend 541 (America/Los_Angeles); Missoula 406, Billings 406, Cheyenne 307, Fort Collins 970, Boulder 303, Provo 801, Santa Fe 505 (America/Denver); Reno 775 (America/Los_Angeles); Anchorage 907 (America/Anchorage); Roanoke 540, Durham 919 (America/New_York); Lansing 517 (America/Detroit); Toledo 419, Akron 330 (America/New_York) |
| G7 | tattoo, assembly, autobody, tile, mural | 01-15 | Chicago 773 (America/Chicago); Philadelphia 215, Brooklyn 718, Miami 305, Fort Lauderdale 954 (America/New_York); Los Angeles 323, Oakland 510, Long Beach 562, San Jose 408 (America/Los_Angeles); Detroit 313 (America/Detroit); New Haven 203, Jersey City 201, Washington DC 202, Arlington VA 703 (America/New_York); Corpus Christi 361 (America/Chicago); El Paso 915 (America/Denver) |
| G8 | landclearing, excavation, septic, well, farm | 16-30 | Tyler 903, Lubbock 806, Waco 254, Springfield MO 417, Fayetteville AR 479, Jackson MS 601 (America/Chicago); Ocala 352 (America/New_York); Tallahassee 850 (America/New_York); Macon 478, Augusta GA 706, Columbia SC 803, Lynchburg 434 (America/New_York); Bowling Green KY 270, Dothan 334, Lafayette LA 337, Shreveport 318 (America/Chicago) |
| G9 | nursery, pinestraw, irrigation, junkremoval, selfstorage | 31-45 | Mobile 251, Gulfport 228 (America/Chicago); Marietta 770, Valdosta 229, Daytona Beach 386, Lakeland 863, Port St. Lucie 772, West Palm Beach 561, Clearwater 727 (America/New_York); Bakersfield 661, Riverside 951, Irvine 949, Modesto 209, Santa Rosa 707 (America/Los_Angeles); McKinney 972, Katy 281 (America/Chicago) |
| G10 | consulting, cannabis | 46-60 | Flagstaff 928 (America/Phoenix); Kalamazoo 269, Traverse City 231 (America/Detroit); Springfield IL 217, Peoria 309, Rockford 815, Columbia MO 573 (America/Chicago); Olympia 360, Santa Cruz 831, Palm Springs 760 (America/Los_Angeles); Las Cruces 575 (America/Denver); Northampton MA 413, Wilmington DE 302, Frederick MD 301, Dayton 937, Ithaca 607 (America/New_York) |

Pick cities where the trade makes sense (pools in hot dry places, fireplaces in cold places, storm roofing in hail country).
