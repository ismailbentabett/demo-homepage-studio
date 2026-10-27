# Strategy — hvac-A (Saltbush Heating & Air)

1. **The one job.** A Las Vegas homeowner whose AC just failed lands here and calls or texts within 10 seconds because the page reads like a service ticket: arrival → reading → cause → fix → proof, with a sample price range visible above the fold.
2. **Homeowner's first 5 seconds.** Above the fold: h1 "AC repair in {{biz.city}} run like a ticket", a sticky-pinned condenser photo at dusk, the phone button `[[call]]`, the quote button `[[quote AC repair]]`, and one proof line "Sample diagnostic $89–$160 · Open now · {{biz.areas.0}}".
3. **Contractor's first 5 seconds.** Nobody in Las Vegas shows their process as a timestamped ticket with real readings; the vertical clock rail with mono timestamps is the signature that makes them say "nobody has that".
4. **Objections mapped.**
   - "They'll say the whole system is dead" → Cause section with before/after readings and sample part prices.
   - "Nobody can come today" → Hero proof line + open-now module + mobile bar call.
   - "They'll oversell the unit size" → Load-calc mention in replacement card + estimator tool hand-off.
   - "Someone in my attic will break things" → Process story showing booties/drop cloth detail in ticket entry.
   - "I don't understand SEER/tons" → Symptom sorter tool translates homeowner words to pro terms.
   - "Is this local?" → Service area + ZIP checker section with {{biz.areas|list}}.
5. **Conversion paths.** Primary: `[[call]]` in header, hero, mobile bar, and every ticket entry. Secondary: `[[quote]]` buttons prefilling the symptom into the multi-step form. Tool → form hand-off: symptom sorter passes selected symptom via `data-service`; hot-day plan ends with a booking CTA.
6. **What this direction is NOT.** Does not use a dew-point calculator hero (that is B). Does not use a shade-line diagonal split or temperature-mask type (that is C). Does not use coupon spinners, smiling-family stock, or brand-badge strips.