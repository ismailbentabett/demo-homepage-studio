/* siding-B · Five-Cell Reading: tools glue (always on) + motion (sw-motion only) */
SW.ready(function (SW) {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* ---------- price ledger: range bars on a shared scale, from facts ---------- */
  var prices = SW.fact('proof.prices') || [];
  var num = function (s) { return parseFloat(String(s || '').replace(/[^\d.]/g, '')) || 0; };
  var perFt = prices.filter(function (p) { return /sq/.test(p.unit || ''); });
  var ftMax = Math.max.apply(null, perFt.map(function (p) { return num(p.to); }).concat([1]));
  var cur = '$';
  SW.$$('[data-price-row]').forEach(function (row, i) {
    var p = prices[i];
    if (!p) return;
    var sq = /sq/.test(p.unit || '');
    var max = sq ? ftMax : Math.ceil(num(p.to) / 500) * 500;
    var a = num(p.from) / max, b = num(p.to) / max;
    var bar = SW.$('.ruler__bar', row), ticks = SW.$('.ruler__ticks', row);
    row.style.setProperty('--a', a.toFixed(4));
    row.style.setProperty('--b', b.toFixed(4));
    if (ticks) {
      var mid = sq ? max / 2 : max / 2;
      var fmt = function (n) { return cur + Math.round(n).toLocaleString('en-US'); };
      ticks.innerHTML = '';
      [0, mid, max].forEach(function (n, k) {
        var s = document.createElement('span');
        s.textContent = fmt(n) + (k === 2 && sq ? ' /sq ft' : '');
        ticks.appendChild(s);
      });
    }
    if (bar && motion) {
      bar.style.transform = 'scaleX(0)';
      SW.inView(row, function () { bar.style.transform = 'scaleX(1)'; }, { rootMargin: '0px 0px -10% 0px' });
    }
  });

  /* ---------- squares calculator ---------- */
  var calc = SW.$('[data-squares]');
  var squaresNow = '', fmtN = function (n) { return Math.round(n).toLocaleString('en-US'); };
  function runCalc() {
    if (!calc) return;
    var v = function (n, d) { var x = parseFloat(calc.elements[n].value); return isFinite(x) && x >= 0 ? x : d; };
    var w = v('w', 32), d = v('d', 24), st = v('st', 2), g = Math.min(4, v('g', 2)), o = v('o', 16);
    var wall = 2 * (w + d) * st * 9;
    var gable = g * 0.1875 * d * d;
    var net = Math.max(0, wall + gable - o * 15);
    var sq = Math.round(net * 1.1 / 10) / 10;
    squaresNow = sq.toFixed(1);
    SW.$('[data-sq-area]').textContent = fmtN(net);
    SW.$('[data-sq-sq]').textContent = squaresNow;
    SW.$('[data-sq-sq2]').textContent = squaresNow;
    SW.$('[data-sq-bar]').style.setProperty('--v', Math.min(5, sq / 5).toFixed(2));
    var svg = SW.$('[data-elev]');
    if (svg) svg.style.setProperty('--st', st);
  }
  if (calc) {
    calc.addEventListener('input', runCalc);
    calc.addEventListener('change', runCalc);
    calc.addEventListener('submit', function (e) { e.preventDefault(); });
    runCalc();
  }
  var sqGo = SW.$('[data-sq-go]');
  if (sqGo) sqGo.addEventListener('click', function (e) {
    e.preventDefault();
    SW.prefillForm({ squares: squaresNow }, { focus: 'service' });
  });

  /* ---------- elevation picker ---------- */
  var picks = SW.$$('.unfold input[name="pick"]');
  var out = SW.$('[data-walls-out]');
  function wallsList() { return picks.filter(function (p) { return p.checked; }).map(function (p) { return p.value; }); }
  function runWalls() {
    var l = wallsList();
    if (out) out.textContent = l.length ? l.length + ' marked: ' + l.join(', ') : 'No walls marked yet.';
  }
  picks.forEach(function (p) { p.addEventListener('change', runWalls); });
  runWalls();
  var wGo = SW.$('[data-walls-go]');
  if (wGo) wGo.addEventListener('click', function (e) {
    e.preventDefault();
    var l = wallsList();
    SW.prefillForm(l.length ? { walls: l.join(', ') } : {}, { focus: 'service' });
  });

  if (!motion) return;

  /* ---------- intro: skip to the end on the first scroll or key ---------- */
  var done = function () { root.classList.add('intro-done'); window.removeEventListener('scroll', done); window.removeEventListener('keydown', done); };
  window.addEventListener('scroll', done, { passive: true, once: true });
  window.addEventListener('keydown', done, { once: true });
  setTimeout(done, 1200);

  /* ---------- story 1: compare rows fill as they enter ---------- */
  var rows = SW.$$('.compare [data-fill]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var r = en.target, k = rows.indexOf(r);
        setTimeout(function () { r.classList.add('is-in'); }, 0);
        io.unobserve(r);
      });
    }, { rootMargin: '0px 0px -20% 0px', threshold: 0.02 });
    rows.forEach(function (r) { io.observe(r); });
  } else rows.forEach(function (r) { r.classList.add('is-in'); });

  /* method sheets on small screens: clip reveal */
  var sheets = SW.$$('[data-sheet]');
  function sheetIO() {
    if (!('IntersectionObserver' in window)) { sheets.forEach(function (s) { s.classList.add('is-in'); }); return; }
    var sio = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); sio.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
    sheets.forEach(function (s) { sio.observe(s); });
  }

  /* ---------- story 2: the method sheets stack like a clipboard (≥ 900px, pinned) ---------- */
  if (!window.gsap || !window.ScrollTrigger) { sheetIO(); return; }
  gsap.registerPlugin(ScrollTrigger);
  var mm = ScrollTrigger.matchMedia;
  sheets.forEach(function (s) { s.classList.add('is-in'); });
  mm({
    '(min-width: 900px)': function () {
      var sec = SW.$('#method'), pin = SW.$('.method__pin');
      if (!sec || !pin || sheets.length < 2) return;
      root.classList.add('sw-stack');
      var n = sheets.length;
      sheets.forEach(function (s, i) {
        gsap.set(s, { zIndex: i + 1, yPercent: i === 0 ? 0 : 115, rotation: i === 0 ? 0 : (i % 2 ? 1.2 : -1.2), '--p': i === 0 ? 1 : 0 });
      });
      var tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: sec, start: 'top top', end: function () { return '+=' + Math.round(window.innerHeight * 0.55 * n); }, pin: pin, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true }
      });
      for (var i = 1; i < n; i++) {
        tl.to(sheets[i], { yPercent: i * 2.5, rotation: 0, '--p': 1, duration: 1, ease: 'power2.out' }, i - 1);
        for (var j = 0; j < i; j++) tl.to(sheets[j], { scale: 1 - (i - j) * 0.035, yPercent: -(i - j) * 4, duration: 1 }, i - 1);
      }
      return function () {
        root.classList.remove('sw-stack');
        gsap.set(sheets, { clearProps: 'all' });
      };
    },
    '(max-width: 899px)': function () {
      sheets.forEach(function (s) { s.classList.remove('is-in'); });
      sheetIO();
    }
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
});
