# cleaning-C: copy round 4 (fast)

`before` strings match `src/index.html` exactly (tokens, not resolved values). No review text is edited or invented; the duplicate is removed by placement only.

Review → season map (from facts.json, by service and the review's own words):
- Spring: reviews.1 Josh M. (pollen, "Every April")
- Summer: reviews.2 Ruby H. (mildew, "every August"). Already quoted in #almanac-summer, so it is **not** repeated in the grid
- Fall: reviews.4 Carmen E. ("Thanksgiving", holiday guest prep)
- Winter: reviews.3 Grant L. (mountain & weekend houses = the winter spread)
- All year: reviews.0 Eleanor R. (old-house care), reviews.5 Neil P. (every two weeks, "the list changes with the season")

---

### #proof h2 (should 2: the heading now matches the order)
- before: `<h2>What neighbors say, season by season</h2>`
- after: `<h2>Notes from neighbors, in the order of the year</h2>`
- why: the cards below now run Spring → Summer → Fall → Winter → All year, so the heading is true. It's also less of a stock phrase than "What neighbors say".

### #proof review list (should 1: duplicate quote + season grouping)
- before (the whole block):
```
      <ul class="review-list" data-reveal-stagger>
        <!-- each proof.reviews -->
        <li class="review-card">
          <p class="review-card__stars" data-stars="{{.stars}}" aria-label="{{.stars}} out of 5 stars">[[i star]][[i star]][[i star]][[i star]][[i star]]</p>
          <p class="review-card__text">“{{.text}}”</p>
          <footer class="review-card__meta mono"><span>{{.name}}, {{.town}}</span> <span>{{.service}}</span> [[sample review]]</footer>
        </li>
        <!-- /each -->
      </ul>
```
- after:
```
      <ol class="review-list" data-reveal-stagger>
        <li class="review-card review-card--spring">
          <p class="review-card__when mono">Spring · April</p>
          <p class="review-card__stars" data-stars="{{proof.reviews.1.stars}}" aria-label="{{proof.reviews.1.stars}} out of 5 stars">[[i star]][[i star]][[i star]][[i star]][[i star]]</p>
          <p class="review-card__text">“{{proof.reviews.1.text}}”</p>
          <footer class="review-card__meta mono"><span>{{proof.reviews.1.name}}, {{proof.reviews.1.town}}</span> <span>{{proof.reviews.1.service}}</span> [[sample review]]</footer>
        </li>
        <li class="review-card review-card--summer review-card--pointer">
          <p class="review-card__when mono">Summer · August</p>
          <p class="review-card__text">{{proof.reviews.2.name}} from {{proof.reviews.2.town}} wrote about the guest-bath mildew. Her note sits with the August page.</p>
          <a href="#almanac-summer" class="review-card__jump mono">Read it in Summer</a>
        </li>
        <li class="review-card review-card--fall">
          <p class="review-card__when mono">Fall · November</p>
          <p class="review-card__stars" data-stars="{{proof.reviews.4.stars}}" aria-label="{{proof.reviews.4.stars}} out of 5 stars">[[i star]][[i star]][[i star]][[i star]][[i star]]</p>
          <p class="review-card__text">“{{proof.reviews.4.text}}”</p>
          <footer class="review-card__meta mono"><span>{{proof.reviews.4.name}}, {{proof.reviews.4.town}}</span> <span>{{proof.reviews.4.service}}</span> [[sample review]]</footer>
        </li>
        <li class="review-card review-card--winter">
          <p class="review-card__when mono">Winter</p>
          <p class="review-card__stars" data-stars="{{proof.reviews.3.stars}}" aria-label="{{proof.reviews.3.stars}} out of 5 stars">[[i star]][[i star]][[i star]][[i star]][[i star]]</p>
          <p class="review-card__text">“{{proof.reviews.3.text}}”</p>
          <footer class="review-card__meta mono"><span>{{proof.reviews.3.name}}, {{proof.reviews.3.town}}</span> <span>{{proof.reviews.3.service}}</span> [[sample review]]</footer>
        </li>
        <li class="review-card review-card--year">
          <p class="review-card__when mono">All year</p>
          <p class="review-card__stars" data-stars="{{proof.reviews.0.stars}}" aria-label="{{proof.reviews.0.stars}} out of 5 stars">[[i star]][[i star]][[i star]][[i star]][[i star]]</p>
          <p class="review-card__text">“{{proof.reviews.0.text}}”</p>
          <footer class="review-card__meta mono"><span>{{proof.reviews.0.name}}, {{proof.reviews.0.town}}</span> <span>{{proof.reviews.0.service}}</span> [[sample review]]</footer>
        </li>
        <li class="review-card review-card--year">
          <p class="review-card__when mono">All year</p>
          <p class="review-card__stars" data-stars="{{proof.reviews.5.stars}}" aria-label="{{proof.reviews.5.stars}} out of 5 stars">[[i star]][[i star]][[i star]][[i star]][[i star]]</p>
          <p class="review-card__text">“{{proof.reviews.5.text}}”</p>
          <footer class="review-card__meta mono"><span>{{proof.reviews.5.name}}, {{proof.reviews.5.town}}</span> <span>{{proof.reviews.5.service}}</span> [[sample review]]</footer>
        </li>
      </ol>
```
- why: Ruby H.'s quote shows once, in the summer spread. Its slot in the year gets a short pointer card, so the ring still has four seasons without the duplicate. Every card has a season tag in the same `__when` style as the services cards. "April", "August" and "November" come from the reviews' own words ("Every April", "every August", "Thanksgiving"). Winter has no month because Grant's review doesn't name one. If the builder's elevate move uses a ring layout, keep this order and these tags: one card per quarter, with the two All-year cards in the centre. `<ol>` because the order now matters. The pointer card has no stars and no quote, so it needs no Sample tag. Ruby's quote above keeps its tag.

### #intro lead (tricolon)
- before: `<p class="lead">{{biz.short}} works the season into every visit: pollen in spring, mildew in summer, guests in fall. Your real number comes after a walk-through or a few photos.</p>`
- after: `<p class="lead">{{biz.short}} works the season’s job into every visit, so your April list and your August list are not the same. Your real number comes after a walk-through or a few photos.</p>`
- why: drops the third pollen/mildew/guests run (the hero lead and Neil's review already say it) and the tricolon. 32 words, so it's a body lead, not the hero lead.

### #services h2 (generic)
- before: `<h2>What we clean</h2>`
- after: `<h2>Nine jobs, each tagged with its season</h2>`
- why: says what the grid does, and the season tags are the point. It ties into the Services ledger for the elevate move.

### #services kicker
- before: `<p class="kicker mono">The whole list</p>`
- after: `<p class="kicker mono">The whole year’s list</p>`
- why: keeps the almanac voice. One word added, no new fact.

### break caption (fact check)
- before: `<p class="break__caption mono">A {{biz.city}} bungalow in late fall</p>`
- after: `<p class="break__caption mono">A house in late fall, the leaves still down</p>`
- why: the caption must describe the frame. The photo is `home-greenville` (Greenville, not our city), so captioning it as a {{biz.city}} house is a claim the media doesn't support (DEMO-RULES §5). If the frame shows no leaves, use `A front porch in late fall`.

### contact h2 (5-second clarity)
- before: `<h2>Price my cleaning in four steps</h2>`
- after: `<h2>Price my cleaning: four questions, about a minute</h2>`
- why: answers the buyer's "how long is this form" worry. The button name stays the one primary action.
