# hvac-B copy, round 1 (fast)

Fix one: the main action gets one name, "Book a check". Every button that leads to #contact uses that verb family.
Fix two: the two slogan headings become plain statements.
Fix three: the h1 names the trade (AC) and the city.
Note: the `before` lines are the rendered text from dist/index.html. The `after` lines use tokens. Loop rows (services) are a single line in src/index.html (l.201).

### #hero h1 .h1-main
- before: Sticky house, cold air?
- after: Sticky {{biz.city}} house, cold AC?
- why: should item from the critique. The trade and the town are now in the h1 (5 words, still a question). The sub "Check the dew point before you buy anything." stays as it is.

### #hero .kicker
- before: Houston · AC, heat and humidity
- after: AC, heat and humidity across {{biz.city}}
- why: drops one middle-dot meta string (an AI-slop tell). Reads as a sentence-case line, which matches the should item about tracked caps. The builder sets it in Figtree, not in tracked caps.

### #hero .instrument button
- before: Book a check with this reading
- after: Book a check with this reading
- why: no change. This is already in the "Book a check" family and stays the anchor name for the other buttons.

### #services h2
- before: Every fix starts with a reading and ends with one.
- after: Nine jobs, plotted on the same chart.
- why: the slogan ending is gone. Now it says what the section is (the ledger with mini-charts).

### #services .svc-lead
- before: Nine jobs we do. Each row shows where a house usually starts, and where the fix puts it.
- after: Each row shows where a house usually starts on the chart and where the fix puts it.
- why: the h2 now carries "nine jobs", so this cuts the repeat.

### #services .svc-row button (×9, one template line in src)
- before: Price it
- after: Book this check
- why: one action name. "Price it" promised a price the form doesn't give. The sr-only `: {{.name}}` suffix stays.

### #services .svc-num and #story .step-num
- before: 01 / 02 / 03 … 09
- after: (delete the elements)
- why: should item from the critique. The numbers are decoration. The mini-chart and the h3 already identify each row and step.

### #story h2
- before: Same thermostat. Very different air.
- after: Why a cold house in {{biz.city}} can still feel damp
- why: replaces the two-beat slogan with the buyer's actual problem, in their words. Adds the place a second time where it earns it.

### #sorter button
- before: Get a second opinion
- after: Book a second-opinion check
- why: one verb family. Keeps the second-opinion idea that the sorter sets up.

### #sorter .sorter-lead
- before: Tick what is true for your system. No pitch, just the honest odds.
- after: Tick what is true for your system. The line below tells you which way it leans.
- why: "No pitch, just the honest odds" is a slogan beat and a self-claim of honesty. Now it says what the tool does.

### #area ZIP button
- before: Check
- after: Check my ZIP
- why: the button says what happens (conversion rule).

### #contact form submit
- before: Send my request
- after: Book my check
- why: one action name, so the form ends on the same verb as the hero and the mobile bar.

### #contact form data-thanks
- before: Thanks, {name}. In your version, this request goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: the old text spoke to the contractor, not the homeowner. Uses the honest thank-you text required by DEMO-RULES.

### #break figcaption (hold until media lands)
- before: Evening heat over the rooftops. The air is wettest after sundown.
- after: Gulf air over the rooftops. The air is wettest after sundown.
- why: the current frame is a desert sunset (wrong climate). Only apply this if the break gets a humid Gulf-coast street frame. If the frame is condensation on glass, use: "Water on the inside of the glass: the dew point, made visible." If the break band is removed, drop the caption.

Count: 11 replacements, 1 conditional (break caption), 2 deletions (numbering). No em dashes added.
