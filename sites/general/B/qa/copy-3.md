# general-B copy fixes, round 3 → 4

**Base: `qa/last/src/index.html`** (the round-3 source the critic scored). `score.mjs` restored `src/` to round 2, so copy `qa/last/src/*` over `src/` before applying these. Every `before` is the exact rendered text in `qa/last/dist/index.html` and also appears verbatim in `qa/last/src/index.html` (none of them contain a resolved fact). `after` uses tokens only.

Em-dash count after these edits: 1 (was 3).

## Must (copy)

### #proof h2 (src line 205), Must 1
- before: Client reports — verified
- after: Client reports, line by line
- why: the reviews are Sample-labelled and fictional, so "verified" is an invented claim (DEMO-RULES §4). No "verified" anywhere on the page after this. It also drops one em dash.

### #proof .section-lead (src line 206)
- before: Dated entries from homeowners in {{biz.city}} and nearby towns.
- after: What homeowners in {{biz.city}} and nearby towns said about the cost sheet.
- why: the entries carry no dates (the meta shows service and name), so "dated" claims something the page doesn't show. This ties the proof back to the thesis.

### #contact step 1 button (src line 280), Must 2 (label; the builder fixes the visibility in CSS)
- before: `<button type="button" class="btn btn-primary lead-form__next" data-next>Next</button>` (the first one, inside `data-step="1"`)
- after: `<button type="button" class="btn btn-primary lead-form__next" data-next>Next: describe the job</button>`
- why: the button says what happens next. Leave the step 2 and 3 "Next" labels as they are, or use "Next: when to call" on step 2 and "Next: your contact" on step 3 (the builder must edit each by its step).

### #contact thank-you (src line 342)
- before: Thanks, {name}. In your version this goes straight to your phone and inbox.
- after: Thanks, {name}. This is a demo, nothing was sent. On the real site this goes to {{biz.short}}.
- why: honest demo text required by the copy contract. The old line talked to the contractor, not the homeowner.

## Should (copy)

### #permits button (src line 193), Should 7
- before: [[quote Permits btn-secondary|We handle permits — start here]]
- after: [[quote Permits btn-secondary|Start a permit job]]
- why: drops the em dash and says what the button does.

### #zip-area lead (src line 237), Should 5
- before: Enter your ZIP to confirm you are in our area.
- after: Type your 5-digit ZIP. We check it as you type.
- why: the field had no button and no hint, so a visitor at 390 sees an empty box with no action.

### #zip-area checker answers (src line 238)
- before: `<div class="zip-checker" data-zip>`
- after: `<div class="zip-checker" data-zip data-zip-yes="{zip} is in our area. Call {phone} or press Price it." data-zip-no="{zip} is outside our usual area. Call {phone} and we'll tell you straight.">`
- why: answers in the page's voice instead of the kit defaults. `{zip}` and `{phone}` are filled by kit/lib/zip.js, so no literal facts go in.

## Lines that raise the score

### #hero .ledger-sample__head (src line 58)
- before: Sample budget — Kitchen remodel
- after: Sample budget · Kitchen remodel
- why: the third em dash. The middle dot matches the kicker and the proof line.

### #hero lead (src line 49)
- before: Every trade's cost on its own line. Our fee and the contingency shown before work starts.
- after: Every trade's cost gets its own line, and so do our fee and the contingency, before demo starts.
- why: the second sentence had no verb. "Before demo" is the moment the buyer is afraid of (surprise costs once walls are open). 18 words.

### #contact .section-lead (src line 249)
- before: Tell us what you are planning. We will call you back to set up a visit.
- after: Pick the job and tell us the size. We call back to walk the house and start your cost sheet.
- why: the old lead repeated the micro line under the form word for word. This one says what the visit is for, in the thesis's terms.

### #contact .lead-form__micro (src line 344)
- before: We'll call you back to set up a visit.
- after: Four short steps, about a minute. Or call {{biz.phone}}.
- why: removes the duplicate of the section lead and sets expectations. It doesn't claim a free visit, because that isn't in facts.json.
