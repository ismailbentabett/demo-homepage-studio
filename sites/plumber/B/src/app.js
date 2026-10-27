/* plumber-B · signature: ledger rule + status stamp. Stories: the camera run (pinned ≥ 640px) and the lateral trace. */
(function () {
  if (!window.SW) return;

  /* Pressure reading tool: works with or without motion */
  var psiBox = document.querySelector('[data-pressure]');
  if (psiBox) {
    var psiIn = psiBox.querySelector('[data-psi-input]');
    var psiOut = psiBox.querySelector('[data-psi-out]');
    var psiStamp = psiBox.querySelector('[data-psi-stamp]');
    var setStamp = function (cls, text) {
      psiStamp.className = 'status-stamp mono status-stamp--' + cls;
      psiStamp.textContent = text;
    };
    psiIn.addEventListener('input', function () {
      var v = parseInt(psiIn.value, 10);
      if (isNaN(v) || v < 0) {
        psiOut.textContent = 'Type the number on the gauge.';
        setStamp('ok', 'PSI');
        psiBox.style.removeProperty('--psi');
        return;
      }
      psiBox.style.setProperty('--psi', (Math.min(v, 120) / 120 * 100).toFixed(1));
      if (v < 40) {
        setStamp('watch', 'WATCH');
        psiOut.textContent = v + ' psi · Low. Often a half-closed main valve, a failing regulator or old galvanized pipe.';
      } else if (v <= 80) {
        setStamp('ok', 'OK');
        psiOut.textContent = v + ' psi · Normal range. Write it down and check again next season.';
      } else {
        setStamp('fix', 'FIX');
        psiOut.textContent = v + ' psi · High. Above 80 wears out heaters, valves and hoses: time for a regulator.';
      }
    });
  }

  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
  if (!motion) return;

  document.fonts.ready.then(init);

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* Hero intro: the three readings write in (≤ 1.2 s, h1 untouched) */
    var heroEntries = document.querySelectorAll('.ledger-sample .ledger-entry');
    if (heroEntries.length) {
      gsap.from(heroEntries, { opacity: 0, x: -16, duration: 0.4, stagger: 0.16, ease: 'power3.out', delay: 0.25 });
      gsap.from('.ledger-sample .status-stamp', { scale: 0.6, opacity: 0, duration: 0.3, stagger: 0.16, ease: 'back.out(2)', delay: 0.45 });
    }

    /* Signature: every section's ledger rule is drawn by scroll */
    document.querySelectorAll('.section > .ledger-rule').forEach(function (rule) {
      var section = rule.parentElement;
      gsap.fromTo(rule, { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'bottom 70%', scrub: true }
      });
    });

    /* Story 1: the camera run, pinned on ≥ 640px */
    var story = document.getElementById('camera-story');
    var ft = story && story.querySelector('[data-ft]');
    ScrollTrigger.matchMedia({
      '(min-width: 640px) and (max-height: 1400px)': function () {
        var wrap = story && story.querySelector('.story-pinned');
        if (!wrap) return;
        var steps = wrap.querySelectorAll('.story-step');
        var n = steps.length;
        wrap.classList.add('is-pinned');
        gsap.set(steps, { autoAlpha: 0 });
        gsap.set(steps[0], { autoAlpha: 1 });
        var counter = { v: 0 };
        var tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: story,
            start: 'top top',
            end: function () { return '+=' + Math.round(window.innerHeight * 0.55 * n); },
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        });
        tl.to(counter, { v: 47, duration: n, ease: 'none', onUpdate: function () { if (ft) ft.textContent = Math.round(counter.v); } }, 0);
        tl.from(steps[0].querySelector('svg'), { scale: 1.08, duration: 1 }, 0);
        for (var i = 1; i < n; i++) {
          tl.to(steps[i - 1], { autoAlpha: 0, y: -24, duration: 0.35 }, i - 0.4);
          tl.fromTo(steps[i], { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.35 }, i - 0.2);
          var rows = steps[i].querySelectorAll('.story-step__ledger .ledger-entry');
          if (rows.length) tl.from(rows, { opacity: 0, x: -14, stagger: 0.12, duration: 0.25 }, i - 0.05);
        }
        return function () {
          wrap.classList.remove('is-pinned');
          gsap.set(steps, { clearProps: 'all' });
          if (ft) ft.textContent = '47';
        };
      }
    });

    /* Story 2: the camera head runs the lateral, marks light as it passes */
    var lat = document.querySelector('[data-lateral]');
    if (lat && window.innerHeight <= 1400) {
      var cam = lat.querySelector('.lateral__cam');
      var trace = lat.querySelector('.lateral__trace');
      var count = lat.querySelector('.lateral__count');
      var marks = Array.prototype.slice.call(lat.querySelectorAll('.lt-mark'));
      var draw = function (f) {
        var x = 220 + f * 17.833;
        var y = 225 + (x - 220) * 0.14486;
        cam.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')');
        trace.setAttribute('stroke-dashoffset', (1 - f / 60).toFixed(4));
        var s = String(Math.round(f)); while (s.length < 3) s = '0' + s;
        count.textContent = s + ' FT';
        marks.forEach(function (m) { m.classList.toggle('is-hit', f >= parseFloat(m.getAttribute('data-ft')) - 0.5); });
      };
      lat.classList.add('is-running');
      draw(0);
      var run = { f: 0 };
      gsap.to(run, {
        f: 47, ease: 'none',
        scrollTrigger: { trigger: lat, start: 'top 85%', end: 'bottom 35%', scrub: 0.4 },
        onUpdate: function () { draw(run.f); }
      });
    }

    /* Reveal catch-up: the pin spacer shifts positions after load, so IO can miss
       elements below the story. Anything at or above 90% of the viewport is shown. */
    var pending = Array.prototype.slice.call(document.querySelectorAll('[data-reveal],[data-reveal-stagger]'));
    var ticking = false;
    var catchUp = function () {
      ticking = false;
      var lim = window.innerHeight * 0.9;
      pending = pending.filter(function (el) {
        if (el.classList.contains('is-in')) return false;
        if (el.getBoundingClientRect().top < lim) { el.classList.add('is-in'); return false; }
        return true;
      });
    };
    window.addEventListener('scroll', function () {
      if (!ticking && pending.length) { ticking = true; requestAnimationFrame(catchUp); }
    }, { passive: true });
    ScrollTrigger.addEventListener('refresh', catchUp);

    ScrollTrigger.refresh();
    catchUp();
  }
})();
