# garagedoor-A copy, round 1 (fast)

The money action now has one name: **Price my repair**. The service cards say what each one prices. The form submit stays "Send my request", because it is the one button that actually sends something.
Note: the service cards are a loop in `src/index.html` (`[[quote {{.short}} pnl__go | Price it]]`, 4 rows). Edit the macro label once per row and the 11 cards follow.

## Main action, one name

### #header nav cta (src line 42)
- before: Price it
- after: Price my repair
- why: one name for the money action across the page (critique Should 2)

### #hero tertiary button (src line 62)
- before: Price it
- after: Price my repair
- why: same name as the header, the contact kicker and the mobile bar

### #services cards, all 4 rows (src lines 211, 216, 221, 226)
- before: `[[quote {{.short}} pnl__go | Price it]]` (renders "Price it" ×11)
- after: `[[quote {{.short}} pnl__go | Price <span class="lc">{{.short}}</span>]]` with `.lc{text-transform:lowercase}`
- why: each card says what it prices ("Price new opener", "Price hail panels", "Price tune-up"), so the 11 "Price it" repeats are gone. If the macro won't take markup in the label, use `Price this repair` instead.

### #services lead
- before: Pick yours to price it. Not on here? Call and describe the sound it makes.
- after: Pick yours for a price. Not on here? Call and describe the sound it makes.
- why: removes another "price it"

### #estimator result button (src line 272)
- before: Book a spring check
- after: Price my repair
- why: this was the third name for the same action. The form below it is a price request, not a booking

### #contact kicker (src line 355)
- before: Price it
- after: Price my repair
- why: the label above the form matches the buttons that lead to it

### #footer "On this page" link (src line 438)
- before: Price it
- after: Price my repair
- why: one name

### mobile bar, third item (src line 453)
- before: Price it
- after: Price my repair
- why: one name. Check the fit at 320. If it wraps, let the item grow to two lines at the same size. Don't bring back a different label

### #contact submit (src line 410)
- before: Send my request
- after: Send my request
- why: unchanged on purpose. It is the only button that submits

## Break band

### #h-break (orange break h2)
- before: Thirty quarter turns. Counted out loud. Then we let go halfway.
- after: We count thirty quarter turns out loud, then let go of the door halfway.
- why: one plain sentence instead of a three-beat slogan (critique Should 3). It names the balance test the sub-line explains

## Thank-you

### #contact form data-thanks (src line 361)
- before: Thanks, {name}. In your version of this site, this request goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: says plainly that it's a demo and nothing was sent (DEMO-RULES, copy-chief standard text)

## Other Shoulds

### #proof review byline (src line 311)
- before: `<p class="rev__by"><b>{{.name}}</b>, {{.town}} · <span class="rev__svc">{{.service}}</span> [[sample review]]</p>`
- after: `<p class="rev__by"><b>{{.name}}</b>, {{.town}}<span class="rev__svc">{{.service}}</span> [[sample review]]</p>` with `.rev__svc{display:block}`
- why: renders "Renee K., Richardson" with the service on its own line and no dangling "·" (critique Should 1). Also make sure there is no whitespace or newline between `</b>` and the comma

### #hero img alt (hero-A2: set an alt override in src, not the manifest)
- before: Sectional garage door torsion springs are used to lift heavy sectional or roll up garage doors.
- after: A torsion spring off the shaft, the winding cone at one end and the coil wound tight along its length.
- why: describes this frame, not an encyclopedia line (critique Should 6)

## Extra lines that raise the score

### #hero h1
- before: Spring snapped? Leave the door down.
- after: Spring snapped in {{biz.city}}? Leave the door down.
- why: puts the town in the h1 (First-screen held under 10 for this). 7 words, still the same voice
