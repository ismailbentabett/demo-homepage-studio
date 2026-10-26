/* roofer-A · Layer Stack Cross-Section
   0. Estimator (always, motion or not): the drawing lifts out the layers the chosen job touches.
   1. Rail: the margin drawing locks on each layer as its section arrives, lifts it off on the way back up.
   2. Plates + shingle field: sheets unclip, drawings ink in, nails drop onto the chalk line.
   3. Hero story (>=900px): the exploded stack closes into one finished roof as the hero scrolls away. */
(function () {
  if (typeof SW === 'undefined') return;

  SW.mod('roofer-estimator', function () {
    var est = document.querySelector('[data-estimator]');
    if (!est) return;
    var sel = est.querySelector('[data-est-item]');
    var sketch = est.querySelector('[data-est-sketch]');
    var list = est.querySelector('[data-est-layers]');
    var out = est.querySelector('[data-est-out]');
    var all = ['deck', 'drip', 'membrane', 'underlay', 'starter', 'shingle', 'ridge'];
    /* layers each sample price touches, by price index */
    var touch = [['drip', 'membrane', 'shingle'], all, ['shingle'], ['deck'], ['shingle', 'ridge']];
    var paint = function () {
      if (!sel || !sketch) return;
      var hot = touch[parseInt(sel.value, 10)] || all;
      sketch.setAttribute('data-hot', '');
      Array.prototype.forEach.call(sketch.querySelectorAll('.xs-l'), function (g) {
        g.classList.toggle('is-hot', hot.indexOf(g.getAttribute('data-layer')) !== -1);
      });
      if (list) {
        if (hot.length === all.length) { list.innerHTML = 'Touches all seven layers'; return; }
        list.innerHTML = 'Touches layer' + (hot.length > 1 ? 's ' : ' ') + hot.map(function (k) {
          return '<b>0' + (all.indexOf(k) + 1) + '</b>';
        }).join(' ');
      }
    };
    var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
    /* the same slide-and-lock as the rail: the layers this job touches slide in and lock, pulled out */
    var pull = function () {
      if (!motion || !sketch) return;
      var hotG = sketch.querySelectorAll('.xs-l.is-hot');
      Array.prototype.forEach.call(sketch.querySelectorAll('.xs-l'), function (g) { g.classList.remove('is-pull'); });
      if (list) list.classList.remove('is-pull');
      void sketch.offsetWidth;
      if (hotG.length < 7) Array.prototype.forEach.call(hotG, function (g) { g.classList.add('is-pull'); });
      if (list) list.classList.add('is-pull');
    };
    var wipe = function () {
      if (!out || SW.reduced) return;
      out.classList.remove('is-wiping');
      void out.offsetWidth;
      out.classList.add('is-wiping');
    };
    if (sel) {
      sel.addEventListener('change', function () { paint(); pull(); wipe(); });
      paint();
    }
    var size = est.querySelector('[data-est-size]');
    if (size) size.addEventListener('change', wipe);
  });

  /* "Open now, until 6 pm": commas instead of middle dots in the open-now text */
  SW.mod('roofer-undot', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-open-now]'), function (el) {
      var fix = function () {
        var t = el.textContent;
        if (t.indexOf('·') !== -1) el.textContent = t.replace(/\s*·\s*/g, ', ');
      };
      fix();
      new MutationObserver(fix).observe(el, { childList: true, characterData: true, subtree: true });
    });
  });

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
      /* each band's meter: cells numbered for the stagger, the band's own layer marked as the new one */
      var meters = steps.map(function (s) {
        var sec = s.closest('section');
        var m = sec && sec.querySelector('.layer__label .meter');
        if (m) {
          var k = parseInt(m.getAttribute('data-n'), 10);
          Array.prototype.forEach.call(m.children, function (c, i) {
            c.style.setProperty('--j', i);
            if (i === k - 1) c.classList.add('is-new');
          });
        }
        return { n: parseInt(s.getAttribute('data-step-n'), 10), m: m };
      });
      var setCur = function (n, name) {
        if (n === current) return;
        var up = n > current;
        current = n;
        meters.forEach(function (o) { if (o.m) o.m.classList.toggle('is-lit', o.n <= n); });
        if (up && n > 0) { rail.classList.remove('is-lock'); void rail.offsetWidth; rail.classList.add('is-lock'); }
        slabs.forEach(function (g) {
          var k = parseInt(g.style.getPropertyValue('--k'), 10);
          g.classList.toggle('is-on', k <= n);
          g.classList.toggle('is-cur', k === n);
        });
        if (nEl) nEl.textContent = String(Math.max(n, 0));
        if (nameEl) nameEl.textContent = name || 'Bare rafters';
      };
      setCur(0, 'Bare rafters');
      var pick = function () {
        var best = null;
        steps.forEach(function (s) {
          if (s.getBoundingClientRect().top < window.innerHeight * 0.55) best = s;
        });
        if (best) setCur(parseInt(best.getAttribute('data-step-n'), 10), best.getAttribute('data-step-name'));
        else setCur(0, 'Bare rafters');
      };
      var io = new IntersectionObserver(pick, { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -45% 0px' });
      steps.forEach(function (s) { io.observe(s); });
    }

    /* 2. Plates ink in, the shingle field nails itself down (once) */
    var drawn = Array.prototype.slice.call(document.querySelectorAll('.plate, .courses-field'));
    /* stack order: every element of a drawing gets a delay by its place in the source (deck first) */
    Array.prototype.forEach.call(document.querySelectorAll('.plate .plate__svg'), function (svg) {
      var kids = svg.children, n = kids.length;
      Array.prototype.forEach.call(kids, function (el, i) { el.style.setProperty('--d', Math.round(i * 1000 / Math.max(n, 1)) + 'ms'); });
    });
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-drawn'); dio.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px 8% 0px' });
    drawn.forEach(function (el) { dio.observe(el); });

    /* 3. Hero story: exploded -> assembled, scrubbed, reversible (no pin) */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    var gaps = { deck: 0, drip: 18, membrane: 36, underlay: 54, starter: 72, shingle: 90, ridge: 108 };
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        document.querySelectorAll('.xsec--hero .xs-l').forEach(function (g) {
          var d = gaps[g.getAttribute('data-layer')] || 0;
          gsap.fromTo(g, { y: 0 }, {
            y: d * 0.92, ease: 'none',
            scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 35%', scrub: 0.6 }
          });
        });
        /* the shingle field drifts against the scroll, so the courses feel laid under you */
        gsap.fromTo('.courses-field__svg', { yPercent: -6 }, {
          yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: '.courses-field', start: 'top bottom', end: 'bottom top', scrub: true }
        });
      }
    });
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
