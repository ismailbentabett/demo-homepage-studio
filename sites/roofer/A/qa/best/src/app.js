/* roofer-A · Layer Stack Cross-Section
   1. Rail: the margin drawing locks on each layer as its section arrives, lifts it off on the way back up.
   2. Hero story (>=900px): the exploded stack closes into one finished roof as the hero scrolls away.
   3. Estimator: the drawing lights the layers the job touches; the range wipes in like a layer. */
(function () {
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  SW.mod('roofer-signature', function () {
    /* 1. Rail */
    var rail = document.querySelector('[data-rail]');
    var steps = Array.prototype.slice.call(document.querySelectorAll('[data-step-n]'));
    if (rail && steps.length) {
      var slabs = Array.prototype.slice.call(rail.querySelectorAll('.xs-l'));
      var nEl = rail.querySelector('[data-rail-n]');
      var nameEl = rail.querySelector('[data-rail-name]');
      var current = -1;
      var setCur = function (n, name) {
        if (n === current) return;
        current = n;
        slabs.forEach(function (g) {
          var k = parseInt(g.style.getPropertyValue('--k'), 10);
          g.classList.toggle('is-on', k <= n);
          g.classList.toggle('is-cur', k === n);
        });
        if (nEl) nEl.textContent = String(Math.max(n, 0));
        if (nameEl) nameEl.textContent = name || 'Bare rafters';
      };
      setCur(0, 'Bare rafters');
      var io = new IntersectionObserver(function () {
        var best = null;
        steps.forEach(function (s) {
          var r = s.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.55) best = s;
        });
        if (best) setCur(parseInt(best.getAttribute('data-step-n'), 10), best.getAttribute('data-step-name'));
        else setCur(0, 'Bare rafters');
      }, { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -45% 0px' });
      steps.forEach(function (s) { io.observe(s); });
    }

    /* 3. Estimator sketch + wipe */
    var est = document.querySelector('[data-estimator]');
    if (est) {
      var sel = est.querySelector('[data-est-item]');
      var sketch = est.querySelector('[data-est-sketch]');
      var out = est.querySelector('[data-est-out]');
      /* layers each sample price touches, by price index */
      var touch = [['drip', 'membrane', 'shingle'], null, ['shingle'], ['deck'], ['shingle', 'ridge']];
      var paint = function () {
        if (!sel || !sketch) return;
        var i = parseInt(sel.value, 10);
        var list = touch[i];
        if (!list) { sketch.removeAttribute('data-hot'); }
        else { sketch.setAttribute('data-hot', ''); }
        Array.prototype.forEach.call(sketch.querySelectorAll('.xs-l'), function (g) {
          g.classList.toggle('is-hot', !!list && list.indexOf(g.getAttribute('data-layer')) !== -1);
        });
      };
      var wipe = function () {
        if (!out) return;
        out.classList.remove('is-wiping');
        void out.offsetWidth;
        out.classList.add('is-wiping');
      };
      if (sel) {
        sel.addEventListener('change', function () { paint(); wipe(); });
        paint();
      }
      var size = est.querySelector('[data-est-size]');
      if (size) size.addEventListener('change', wipe);
    }

    /* 2. Hero story: exploded -> assembled, scrubbed, reversible (no pin) */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    var gaps = { deck: 0, drip: 18, membrane: 36, underlay: 54, starter: 72, shingle: 90, ridge: 108 };
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        var heroSlabs = document.querySelectorAll('.xsec--hero .xs-l');
        heroSlabs.forEach(function (g) {
          var d = gaps[g.getAttribute('data-layer')] || 0;
                    gsap.fromTo(g, { x: 0, y: 0 }, {
            y: d * 0.92, ease: 'none',
            scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 35%', scrub: 0.6 }
          });
        });
      }
    });
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
