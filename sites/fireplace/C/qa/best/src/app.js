/* fireplace-C app.js — signature moment + scroll story */
(function () {
  if (typeof SW === 'undefined') return;

  /* ── Symptom checker (works without JS via noscript fallback) ── */
  SW.mod('symptom', function () {
    var wrap = document.querySelector('[data-symptom]');
    if (!wrap) return;
    var opts = wrap.querySelectorAll('[data-symptom-opt]');
    var result = wrap.querySelector('.symptom-result');
    var answers = {
      smoke: 'Smoke into the room usually means a cold flue, a blocked cap, or creosote buildup. Book a sweep and mention the smoke — we\'ll check the draft while we\'re there.',
      smell: 'A summer smell from the flue is usually creosote odor made worse by humidity. A sweep and a new cap with a proper seal fix it most of the time.',
      flakes: 'Black flakes on the grate are stage-2 creosote. It\'s building up and should be swept before your next fire.',
      sounds: 'Scratching or chirping in the flue is usually birds or squirrels. We\'ll remove the nest and fit a cap so they stay out.',
      unused: 'If the fireplace hasn\'t been lit in years, book a camera inspection before the first fire. The liner, damper and smoke shelf all need checking.'
    };
    opts.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-symptom-opt');
        result.textContent = answers[key] || '';
        var form = document.querySelector('[data-lead]');
        if (form && key) {
          var symptomInput = form.querySelector('input[name="symptom"][value="' + key + '"]');
          if (symptomInput) symptomInput.checked = true;
        }
      });
    });
  });

  /* ── Firewood dry-check ── */
  SW.mod('firewood', function () {
    var card = document.querySelector('[data-firewood]');
    if (!card) return;
    var runBtn = card.querySelector('[data-fw-run]');
    var monthSel = card.querySelector('[data-fw-month]');
    var coverSel = card.querySelector('[data-fw-covered]');
    var resultEl = card.querySelector('[data-fw-result]');
    if (!runBtn || !resultEl) return;
    runBtn.addEventListener('click', function () {
      var month = monthSel ? monthSel.value : '';
      var covered = coverSel ? coverSel.value : 'yes';
      if (!month) {
        resultEl.textContent = 'Pick when the wood was split to get an answer.';
        return;
      }
      var ready = false;
      if (month === 'spring' && covered === 'yes') ready = true;
      else if (month === 'summer') ready = true;
      else if (month === 'fall' && covered === 'yes') ready = false;
      else ready = false;
      resultEl.textContent = ready
        ? 'Should be ready now. Split a log and check with a moisture meter — under 20% on the fresh face means go. Book your end-of-season sweep to clear what the wetter months built up.'
        : 'Likely not ready yet. Keep it stacked and covered through the summer. Burning wet wood builds creosote faster; book your sweep for the end of the season.';
    });
  });

  /* ── Sweep interval planner ── */
  SW.mod('sweepinterval', function () {
    var card = document.querySelector('[data-sweep-interval]');
    if (!card) return;
    var runBtn = card.querySelector('[data-si-run]');
    var appSel = card.querySelector('[data-si-appliance]');
    var freqSel = card.querySelector('[data-si-freq]');
    var resultEl = card.querySelector('[data-si-result]');
    if (!runBtn || !resultEl) return;
    runBtn.addEventListener('click', function () {
      var app = appSel ? appSel.value : 'fireplace';
      var freq = freqSel ? freqSel.value : 'weekends';
      var times = 'once a year';
      var when = 'August or September, before the first fire';
      if (freq === 'primary') {
        times = 'twice a year';
        when = 'once in August and a midwinter check in January';
      } else if (freq === 'evenings') {
        times = 'once a year, possibly twice if you burn softwood';
        when = 'August or September';
      }
      if (app === 'gas') {
        times = 'once a year';
        when = 'before the holidays, to clean the logs and check the pilot';
      }
      resultEl.textContent = 'Suggested: ' + times + ', ' + when + '. Book the next opening before the fall rush.';
    });
  });

  /* ── Season rail scroll-spy (desktop only, motion-gated) ── */
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    document.fonts.ready.then(function () {
      if (typeof ScrollTrigger === 'undefined') return;
      ScrollTrigger.register();

      var rail = document.querySelector('.season-rail');
      if (!rail) return;
      var spans = rail.querySelectorAll('span');
      var sections = ['hero', 'october', 'january', 'july', 'services', 'tools', 'proof', 'prices'];

      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          sections.forEach(function (id, i) {
            var sec = document.getElementById(id);
            if (!sec || !spans[i]) return;
            ScrollTrigger.create({
              trigger: sec,
              start: 'top center',
              end: 'bottom center',
              onToggle: function (self) {
                if (self.isActive) {
                  spans.forEach(function (s) { s.classList.remove('is-active'); });
                  spans[i].classList.add('is-active');
                }
              }
            });
          });
        }
      });

      ScrollTrigger.refresh();
    });
  }
})();