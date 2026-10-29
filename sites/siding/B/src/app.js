/* siding-B · Five-Cell Reading: tools glue (always on) + motion (sw-motion only) */
SW.ready(function (SW) {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* plates are content: decode them in step with paint so no frame ever shows empty */
  SW.$$('img[data-photo]').forEach(function (im) { im.decoding = 'sync'; });

  /* ---------- price ledger: range bars on a shared scale, per sq ft or for the visitor's own house ---------- */
  var prices = SW.fact('proof.prices') || [];
  var num = function (s) { return parseFloat(String(s || '').replace(/[^\d.]/g, '')) || 0; };
  var cur = String((prices[0] || {}).from || '').replace(/[\d.,\s]/g, '');
  var isFt = function (p) { return /sq/.test(p.unit || ''); };
  var ftMax = Math.max.apply(null, prices.filter(isFt).map(function (p) { return num(p.to); }).concat([1]));
  var nice = function (n) { var k = Math.pow(10, Math.floor(Math.log10(Math.max(n, 1)))); return Math.ceil(n / k * 2) / 2 * k; };
  var fmt = function (n) { return cur + Math.round(n).toLocaleString('en-US'); };
  var psRows = SW.$$('[data-price-row]');
  var psMode = 'ft', sqVal = 21.9, shown = psRows.map(function () { return null; });
  var psOut = SW.$('[data-ps-out]');
  function tweenText(el, from, to, done) {
    if (!motion || !from) { el.textContent = done; return; }
    var t0 = performance.now(), D = 900;
    (function step(t) {
      var k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(from[0] + (to[0] - from[0]) * e) + '–' + fmt(from[1] + (to[1] - from[1]) * e);
      if (k < 1) requestAnimationFrame(step); else el.textContent = done;
    })(t0);
  }
  function renderPrices() {
    var house = psMode === 'house', area = sqVal * 100;
    var houseMax = nice(ftMax * 100 * Math.max(sqVal, 30));
    psRows.forEach(function (row, i) {
      var p = prices[i]; if (!p) return;
      var ft = isFt(p), lo = num(p.from), hi = num(p.to), max;
      if (ft && house) { lo = Math.round(lo * area / 100) * 100; hi = Math.round(hi * area / 100) * 100; max = houseMax; }
      else max = ft ? ftMax : Math.ceil(hi / 500) * 500;
      row.style.setProperty('--a', (lo / max).toFixed(4));
      row.style.setProperty('--b', (hi / max).toFixed(4));
      var ticks = SW.$('.ruler__ticks', row);
      if (ticks) {
        ticks.innerHTML = '';
        [0, max / 2, max].forEach(function (n, k) {
          var s = document.createElement('span');
          s.textContent = fmt(n) + (k === 2 && ft && !house ? ' /sq ft' : '');
          ticks.appendChild(s);
        });
      }
      var rg = SW.$('[data-ps-range]', row);
      if (rg && ft) {
        var label = house ? fmt(lo) + '–' + fmt(hi) : p.from + '–' + p.to;
        tweenText(rg, shown[i], [lo, hi], label);
        shown[i] = [lo, hi];
      }
    });
    SW.$$('[data-ps]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-ps') === psMode)); });
    SW.$$('[data-ps-sq]').forEach(function (s) { s.textContent = sqVal.toFixed(1); });
    if (psOut) psOut.textContent = house
      ? 'Your house: ' + sqVal.toFixed(1) + ' squares, ' + Math.round(sqVal * 100).toLocaleString('en-US') + ' sq ft with waste, times each sample rate. Repairs stay per job.'
      : 'Per square foot, installed.';
  }
  function setMode(m) { psMode = m; renderPrices(); }
  var psBox = SW.$('[data-ps-mode]');
  if (psBox) {
    psBox.hidden = false;
    SW.$$('[data-ps]', psBox).forEach(function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-ps')); }); });
  }
  renderPrices();
  var ledgerEl = SW.$('[data-ledger]');
  if (motion && ledgerEl) {
    psRows.forEach(function (row) { var bar = SW.$('.ruler__bar', row); if (bar) bar.style.transform = 'scaleX(0)'; });
    SW.inView(ledgerEl, function () {
      psRows.forEach(function (row, i) { var bar = SW.$('.ruler__bar', row); if (bar) setTimeout(function () { bar.style.transform = 'scaleX(1)'; }, i * 80); });
      setTimeout(function () { if (psMode === 'ft') setMode('house'); }, 1100);
    }, { rootMargin: '0px 0px -15% 0px' });
  }

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
    var s3 = SW.$('[data-sq-sq3]'); if (s3) s3.textContent = squaresNow;
    if (sq > 0) { sqVal = sq; if (psMode === 'house') renderPrices(); else SW.$$('[data-ps-sq]').forEach(function (s) { s.textContent = squaresNow; }); }
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
  var sqSheet = SW.$('[data-sq-sheet]');
  if (sqSheet) sqSheet.addEventListener('click', function () { setMode('house'); });
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

  /* ---------- story 2: the method sheets stack like a clipboard (≥ 900px, pinned) ---------- */
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  var mm = ScrollTrigger.matchMedia;
  var sheets = SW.$$('[data-sheet]');
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
        tl.to(sheets[i], { yPercent: 0, rotation: 0, '--p': 1, duration: 1, ease: 'power2.out' }, i - 1);
        for (var j = 0; j < i; j++) tl.to(sheets[j], { scale: 1 - (i - j) * 0.03, y: -(i - j) * 10, duration: 1 }, i - 1);
      }
      return function () {
        root.classList.remove('sw-stack');
        gsap.set(sheets, { clearProps: 'all' });
      };
    }
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
});
