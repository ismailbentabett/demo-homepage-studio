/* siding-A · Lap Course + Nail Line: squares calculator, reveal visualizer, course signature, layers story. */
(function () {
  var doc = document, root = doc.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* ---------- tool 1: squares calculator (works with reduced motion) ---------- */
  var calc = SW.$('[data-calc]');
  if (calc) {
    var q = function (k) { return SW.$('[data-sq="' + k + '"]', calc); };
    var out = function (k) { return SW.$('[data-sq-out="' + k + '"]', calc); };
    var size = SW.$('[data-est-size]', calc);
    var BANDS = ['Small house', 'Typical house', 'Large house'];
    var last = null;
    var num = function (el, d) { var v = parseFloat(el && el.value); return isFinite(v) && v >= 0 ? v : d; };
    var compute = function () {
      var L = num(q('len'), 44), D = num(q('dep'), 28), S = num(q('st'), 1);
      var G = num(q('gab'), 2), W = num(q('win'), 12), Dr = num(q('door'), 2);
      var h = S === 1.5 ? 12 : S * 8;
      var walls = 2 * (L + D) * h + G * (D * D / 8);
      var net = Math.max(0, walls - W * 15 - Dr * 20);
      var squares = Math.ceil(net * 1.1 / 100);
      var band = squares < 16 ? 0 : squares <= 28 ? 1 : 2;
      out('area').textContent = Math.round(net).toLocaleString('en-US');
      out('sq').textContent = String(squares);
      out('band').textContent = BANDS[band];
      if (size && size.value !== String(band)) { size.value = String(band); size.dispatchEvent(new Event('input', { bubbles: true })); }
      last = { net: Math.round(net), squares: squares, S: S, G: G };
    };
    SW.$$('[data-sq]', calc).forEach(function (el) { el.addEventListener('input', compute); el.addEventListener('change', compute); });
    compute();
    var send = SW.$('[data-sq-send]', calc);
    if (send) send.addEventListener('click', function () {
      compute();
      var mat = q('mat');
      var opt = mat && mat.options[mat.selectedIndex];
      var st = last.S === 1.5 ? '1½' : String(last.S);
      SW.prefillForm({
        service: opt ? opt.getAttribute('data-svc') : '',
        size: last.squares + ' squares (' + last.net.toLocaleString('en-US') + ' sq ft of wall, ' + st + '-story, ' + last.G + ' gable ends)'
      }, { focus: 'size' });
    });
  }

  /* ---------- tool 2: course & reveal visualizer (story 2: the lines redraw) ---------- */
  var vis = SW.$('[data-tabs].vis');
  var lines = SW.$('[data-vis-lines] path');
  var visOut = SW.$('[data-vis-out]');
  if (vis && lines) {
    var X0 = 70, X1 = 730, Y0 = 170, Y1 = 410, PER_IN = 2.5;
    var draw = function (tab) {
      var prof = tab.getAttribute('data-profile'), exp = parseFloat(tab.getAttribute('data-exp')) || 7;
      var d = '', n = 0, y, x;
      if (prof === 'bb') {
        for (x = X0 + 30; x < X1; x += 30) { d += 'M' + x + ' ' + Y1 + 'V' + Y0 + 'M' + (x + 7) + ' ' + Y1 + 'V' + Y0; n++; }
      } else {
        var step = exp * PER_IN;
        for (y = Y1 - step; y > Y0; y -= step) {
          d += 'M' + X0 + ' ' + y.toFixed(1) + 'H' + X1;
          if (prof === 'dutch') d += 'M' + X1 + ' ' + (y + 5).toFixed(1) + 'H' + X0;
          n++;
        }
        n += 1;
      }
      lines.setAttribute('d', d);
      var label = tab.textContent.trim();
      if (visOut) visOut.textContent = prof === 'bb'
        ? label + ': a batten every 12 in. across the wall.'
        : label + ': about ' + n + ' courses on an 8 ft wall.';
      if (motion && lines.animate) {
        lines.setAttribute('pathLength', '1');
        lines.style.strokeDasharray = '1';
        lines.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 520, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' });
      }
    };
    var tabs = SW.$$('[data-tab]', vis);
    var mo = new MutationObserver(function (muts) {
      muts.forEach(function (m) { if (m.target.getAttribute('aria-selected') === 'true') draw(m.target); });
    });
    tabs.forEach(function (t) { mo.observe(t, { attributes: true, attributeFilter: ['aria-selected'] }); });
  }

  /* ---------- motion only ---------- */
  if (!(!SW.reduced && root.classList.contains('sw-motion'))) return;

  // any input finishes the intro wall at once
  var skip = function () { root.classList.add('sw-skip'); ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (e) { window.removeEventListener(e, skip); }); };
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (e) { window.addEventListener(e, skip, { passive: true }); });

  // stacked layers (no pin): each course clips in as it arrives
  var layerEls = SW.$$('#layers .layer');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (ens) {
      ens.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
    layerEls.forEach(function (l) { io.observe(l); });
  } else layerEls.forEach(function (l) { l.classList.add('is-in'); });

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // signature: each course sets as it enters; the course before it loses its nail line
  var courses = SW.$$('[data-sw-signature]').filter(function (c) { return !c.classList.contains('hero'); });
  courses.forEach(function (c) {
    var prev = c.previousElementSibling;
    if (!prev && c.parentElement && c.parentElement.tagName === 'MAIN') prev = null;
    if (c.tagName === 'FOOTER') prev = SW.$('main > section:last-of-type');
    var set = function (p) {
      c.style.setProperty('--sw-p', p.toFixed(3));
      if (prev && prev.classList.contains('course')) prev.style.setProperty('--cover', p.toFixed(3));
    };
    ScrollTrigger.create({
      trigger: c, start: 'top bottom', end: 'top 72%',
      onUpdate: function (self) { set(self.progress); },
      onRefresh: function (self) { set(self.progress); }
    });
  });

  // story 1: the layers stack, one course per step from the bottom (desktop only)
  var sec = SW.$('#layers');
  var stage = sec && SW.$('.layers__stage', sec);
  var counter = sec && SW.$('[data-layer-no]', sec);
  if (sec && stage && layerEls.length) {
    ScrollTrigger.matchMedia({
      '(min-width: 1200px) and (min-height: 760px)': function () {
        sec.classList.add('is-pinned');
        var n = layerEls.length;
        var rest = layerEls.slice(1);
        gsap.set(rest, { y: -46, autoAlpha: 0 });
        var tl = gsap.timeline({
          defaults: { ease: 'power2.out', duration: 1 },
          scrollTrigger: {
            trigger: stage, start: 'top top', end: function () { return '+=' + Math.round(n * 0.55 * window.innerHeight); },
            pin: stage, scrub: 0.4, anticipatePin: 1,
            onUpdate: function (self) {
              var k = Math.min(n, 1 + Math.floor(self.progress * (n - 1) + 0.15));
              if (counter) counter.textContent = (k < 10 ? '0' : '') + k;
            }
          }
        });
        rest.forEach(function (l, i) { tl.to(l, { y: 0, autoAlpha: 1 }, i); });
        if (counter) counter.textContent = '01';
        return function () {
          sec.classList.remove('is-pinned');
          gsap.set(layerEls, { clearProps: 'all' });
          if (counter) counter.textContent = '07';
        };
      }
    });
  }

  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
