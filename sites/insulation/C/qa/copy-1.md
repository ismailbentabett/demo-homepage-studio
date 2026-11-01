# insulation-C · copy fixes, round 1

`before` strings are quoted from `src/index.html` (tokenized), so Edit can match them directly. Rendered text is the same apart from resolved tokens.

## 1. h1 (Should 1)

### #hero h1 (line 55)
- before: `<h1 id="hero-h" class="hero__h1">Built for the snow belt, street by street.</h1>`
- after: `<h1 id="hero-h" class="hero__h1">{{biz.city}} insulation, built for the snow belt.</h1>`
- why: the h1 now has the trade and the town (5-second test). It's 7 words and should stay ≤ 4 lines at 390.

## 2. Bearings (Should 4): keep the real one in the hero, drop the 8 repeats

The hero bearing stays (`NNW · toward the lake` is the wind the bands come in on). In each section header below, delete the span and keep the label.

### #story pin (line 109)
- before: `<p class="pin">Three neighbourhoods <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">Three neighborhoods</p>`
- why: the same string under every header is decoration; also US spelling

### #services pin (line 231)
- before: `<p class="pin">What we do <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">What we do</p>`

### #tools pin (line 288)
- before: `<p class="pin">What winter does <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">What winter does</p>`

### #house-type pin (line 342)
- before: `<p class="pin">Your kind of house <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">Your kind of house</p>`

### #proof pin (line 414)
- before: `<p class="pin">Reviews on the map <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">Reviews on the map</p>`

### #area pin (line 491)
- before: `<p class="pin">Where we work <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">Where we work · Onondaga County</p>`
- why: a real place label instead of the constant bearing

### #contact pin (line 550)
- before: `<p class="pin">Your street <span class="pin__bearing">NNW · toward the lake</span></p>`
- after: `<p class="pin">Your street</p>`

(The small story pins on lines 149 and 211, `NNW · lake`, are attached to places. They can stay.)

## 3. US spelling (Should 6)

### #icedam line (line 279)
- before: `Seal the leaks and the snow sits evenly, like your neighbour’s roof.`
- after: `Seal the leaks and the snow sits evenly, like your neighbor’s roof.`

### #tools quiz checkbox (line 300), value and label
- before: `value="Bare stripes on the roof while the neighbours stay white"><span>Bare stripes on our roof while the neighbours’ stay white</span>`
- after: `value="Bare stripes on the roof while the neighbors stay white"><span>Bare stripes on our roof while the neighbors’ stay white</span>`

### #contact checkbox value (line 587)
- before: `value="Bare stripes on the roof while the neighbours stay white"><span>Bare stripes on the roof</span>`
- after: `value="Bare stripes on the roof while the neighbors stay white"><span>Bare stripes on the roof</span>`

### #proof h2 (line 415)
- before: `<h2 id="proof-h">Neighbours under the same bands.</h2>`
- after: `<h2 id="proof-h">Neighbors under the same bands.</h2>`

### #faq summary (line 523)
- before: `<summary>Will you cover my vents and cause mould?</summary>`
- after: `<summary>Will you cover my vents and cause mold?</summary>`

### #faq insured answer (line 540)
- before: `Licence # {{proof.license}} [[sample licence]]`
- after: `License # {{proof.license}} [[sample license]]`
- why: the macro argument renders as the visible "Sample licence" tag

### footer (line 642)
- before: `<p class="mono footer__lic">Licence # {{proof.license}} [[sample]]</p>`
- after: `<p class="mono footer__lic">License # {{proof.license}} [[sample]]</p>`

### #hero plate caption (line 99)
- before: `Clapboard two-storeys, porches and a thaw in the yards: the kind of street the bands roll over.`
- after: `Clapboard two-story houses, porches, a thaw in the yards. The bands roll over streets like this.`
- why: US form; the caption is also shorter so it wraps less in the rotated mono

### #house-type vermiculite (line 405)
- before: `<strong>Grey-brown pebbles in the attic?</strong>`
- after: `<strong>Gray-brown pebbles in the attic?</strong>`

## 4. The request path gets one name (Should 7)

Anything that adds to the form says "Add … to my request". Anything that prefills a service says "Price …". The submit button stays "Send my request".

### #tools ice dam check (line 307)
- before: `data-quiz-go data-js-only>Add this to my request [[i arrow]]</a>`
- after: `data-quiz-go data-js-only>Add to my request [[i arrow]]</a>`

### #tools cold room log (line 332)
- before: `data-log-go data-js-only>Put this note in my request [[i arrow]]</a>`
- after: `data-log-go data-js-only>Add to my request [[i arrow]]</a>`

### #house-type buttons ×5 (lines 361, 371, 381, 391, 401), replace_all
- before: `This is my house [[i arrow]]</a>`
- after: `Add my house to my request [[i arrow]]</a>`

### #services card CTA (line 245), which renders "Price it" ×7
- before: `[[quote {{.short}} btn--text]]`
- after: `[[quote {{.short}} btn--text | Price this job]]`
- why: "Price it" with no object, 7 times. This pairs with the story's "Price knee walls" / "Price rim joists".

### #hero secondary (line 61)
- before: `href="#house-type">Find my house type [[i arrow]]</a>`
- after: `href="#house-type">Show me my house type [[i arrow]]</a>`
- why: it's navigation, not a request step, so it stays clear of "request" wording. The builder makes it the outline secondary (Should 2).

### #area ZIP button (line 498)
- before: `<button class="btn btn--primary" type="submit">Check my street</button>`
- after: `<button class="btn btn--primary" type="submit">Check my ZIP</button>`
- why: the field asks for a ZIP, so the button should say ZIP too

## Note for the builder
`src/app.js` line 40 only has `"This is my house"` in a comment. If app.js writes any result or prefill text with "neighbour", "licence" or "mould", apply the same US spelling there. My grep found none.
