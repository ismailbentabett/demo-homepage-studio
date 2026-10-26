/* autotuneup-B: the odometer. Hero mileage check (works for everyone) that re-reads the sample report,
   ledger readout that follows the bands, and the motion layer (wheel rolls + row wipes) only under sw-motion. */
(function () {
  if (typeof SW === 'undefined') return;
  var doc = document;
  var motion = !SW.reduced && doc.documentElement.classList.contains('sw-motion');
  var hasGsap = typeof gsap !== 'undefined';

  function pad(n) { return String(Math.max(0, Math.min(999999, Math.round(n)))).padStart(6, '0'); }
  function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
  function k(n) { return (n / 1000) + 'k'; }

  /* ---------- Typography: curly apostrophes in token text, commas instead of middle dots ---------- */
  function smart(root) {
    var w = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) {
      if (n.nodeValue.indexOf("'") > -1) n.nodeValue = n.nodeValue.replace(/(^|\s)'(?=\w)/g, function (m, a) { return a + '‘'; }).replace(/'/g, '’');
    }
  }
  SW.$$('main, footer').forEach(smart);
  function undot(el) { if (el.textContent.indexOf(' · ') > -1) el.textContent = el.textContent.replace(/ · /g, ', '); }
  SW.$$('[data-open-now]').forEach(function (el) {
    undot(el);
    if ('MutationObserver' in window) new MutationObserver(function () { undot(el); }).observe(el, { childList: true, characterData: true, subtree: true });
  });

  /* ---------- Odometer wheels (hero readout): six drums that carry like a real odometer ---------- */
  function Wheels(el) {
    var self = this;
    this.v = parseInt(el.textContent, 10) || 0;
    this.strips = [];
    el.textContent = '';
    el.classList.add('wheels');
    for (var i = 0; i < 6; i++) {
      var w = doc.createElement('span'); w.className = 'wheel';
      var s = doc.createElement('span'); s.className = 'wheel__strip';
      for (var d = 0; d <= 10; d++) { var c = doc.createElement('span'); c.textContent = d % 10; s.appendChild(c); }
      w.appendChild(s); el.appendChild(w); self.strips.unshift(s);
    }
    this.set(this.v);
  }
  Wheels.prototype.set = function (n) {
    this.v = n;
    for (var p = 0; p < 6; p++) {
      var unit = Math.pow(10, p);
      var digit = Math.floor(n / unit) % 10;
      var below = n % unit;
      var pos = p === 0 ? n % 10 : digit + Math.max(0, below - (unit - 1));
      this.strips[p].style.transform = 'translateY(' + (-pos) + 'em)';
    }
  };

  /* Roll an element's six digits to a target (instant without motion). */
  function roll(el, to, dur, delay, ease) {
    if (!el) return;
    var wh = el._wheels;
    if (!motion || !hasGsap) { if (wh) wh.set(to); else el.textContent = pad(to); return; }
    var from = wh ? wh.v : (parseInt(el.textContent, 10) || 0);
    if (el._tw) el._tw.kill();
    var o = { v: from };
    el._tw = gsap.to(o, { v: to, duration: dur || 0.9, delay: delay || 0, ease: ease || 'power3.out', onUpdate: function () { if (wh) wh.set(o.v); else el.textContent = pad(o.v); } });
    return el._tw;
  }

  /* ---------- Hero mileage check ---------- */
  var form = SW.$('[data-odo-form]');
  var input = SW.$('#odo-input');
  var readout = SW.$('[data-readout]');
  var label = SW.$('[data-odo-label]');
  var d = [0, 1, 2].map(function (i) { return SW.$('[data-odo-d="' + i + '"]'); });
  var current = 45000;
  if (readout && motion && hasGsap) readout._wheels = new Wheels(readout);

  var GROUPS = {
    k30: 'Air filter, cabin filter',
    k60: 'Air filter, cabin filter, brake fluid',
    k100: 'Spark plugs, coolant'
  };

  function readInput() {
    var raw = (input.value || '').replace(/\D/g, '');
    return raw ? Math.min(999999, parseInt(raw, 10)) : null;
  }

  function plan(m) {
    var n30 = (Math.floor(m / 30000) + 1) * 30000;
    var n100 = (Math.floor(m / 100000) + 1) * 100000;
    var a = { at: n30, items: n30 % 60000 === 0 ? GROUPS.k60 : GROUPS.k30 };
    var b = { at: n100, items: GROUPS.k100 };
    return a.at <= b.at ? [a, b] : [b, a];
  }

  /* The sample report re-reads for the visitor's mileage: DUE / AT / NOT YET per frame. */
  function next(m, every) { var r = (every - (m % every)) % every; if (r === 0 && m === 0) r = every; return { rem: r, at: m + r }; }
  function verdicts(m) {
    var t = next(m, 5000), pl = next(m, 100000), f = next(m, 30000);
    return {
      tread: t.rem <= 1000 ? ['now', 'Due now: rotate'] : ['next', 'At ' + k(t.at) + ': rotate'],
      plugs: pl.rem <= 5000 ? ['now', 'Due now: replace'] : pl.rem <= 20000 ? ['next', 'At ' + k(pl.at) + ': replace'] : ['wait', 'Not yet: at ' + k(pl.at)],
      fluid: f.rem <= 3000 ? ['now', 'Due now: test'] : ['next', 'At ' + k(f.at) + ': test again']
    };
  }
  function flash(el) {
    if (!el || !motion) return;
    el.classList.remove('is-new'); void el.offsetWidth; el.classList.add('is-new');
  }
  function reread(m, animate) {
    var v = verdicts(m);
    SW.$$('[data-verdict]').forEach(function (el, i) {
      var r = v[el.getAttribute('data-verdict')];
      if (!r) return;
      el.className = 'status-pill status--' + r[0];
      el.textContent = r[1];
      if (animate) setTimeout(function () { flash(el); }, 200 + i * 120);
    });
    SW.$$('#report [data-roll]').forEach(function (el, i) {
      el.setAttribute('data-roll', pad(m));
      roll(el, m, animate ? 1.2 : 0, animate ? 0.1 + i * 0.12 : 0);
    });
    var ro = SW.$('[data-report-odo]');
    if (ro) { roll(ro, m, animate ? 1.2 : 0); ro.setAttribute('data-set', ''); }
    var note = SW.$('[data-report-note]');
    if (note) note.textContent = 'Re-read for your ' + fmt(m) + ' mi. Every frame below matches it.';
  }

  function apply(m, animate) {
    current = m;
    var p = plan(m);
    var rows = SW.$$('[data-odo-results] .odo-row');
    roll(d[0], m, animate ? 0.9 : 0);
    roll(d[1], p[0].at, animate ? 0.9 : 0, 0.06);
    roll(d[2], p[1].at, animate ? 0.9 : 0, 0.12);
    if (rows[1]) {
      SW.$('.odo-pill', rows[1]).textContent = 'At ' + k(p[0].at);
      SW.$('.odo-label', rows[1]).textContent = p[0].items;
    }
    if (rows[2]) SW.$('.odo-label', rows[2]).textContent = p[1].items;
    rows.forEach(function (r, i) { setTimeout(function () { flash(r); }, 150 + i * 90); });
    roll(readout, m, animate ? 1.6 : 0, 0, 'power2.inOut');
    reread(m, animate);
    var mile = SW.$('#f-mileage');
    if (mile && !mile.value) mile.value = fmt(m);
    var c = SW.$('[data-contact-odo]');
    if (c) c.textContent = pad(m);
  }

  if (form && input) {
    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = readInput();
      if (m == null) {
        label.textContent = 'Type your mileage, like 45000';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      input.value = fmt(m);
      label.textContent = 'Your reading: ' + fmt(m) + ' mi. The report below re-reads for it.';
      apply(m, true);
    });
    var goLink = SW.$("[data-odo-go]");
    if (goLink) goLink.addEventListener('click', function () {
      var mile = SW.$('#f-mileage');
      if (mile) mile.value = fmt(current);
    });
  }

  /* ---------- Ledger: the sticky readout follows the band in view ---------- */
  var ledgerOdo = SW.$('[data-ledger-odo]');
  var bands = SW.$$('[data-band]');
  if (ledgerOdo && bands.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) roll(ledgerOdo, parseInt(en.target.getAttribute('data-band'), 10), 0.8);
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    bands.forEach(function (b) { io.observe(b); });
  }

  /* ---------- Motion layer ---------- */
  if (!motion || !hasGsap) return;

  /* Rows opt in to the wipe here, so nothing is hidden unless this script runs. */
  var wipeRows = SW.$$('.odo-row[data-sw-signature]');
  wipeRows.forEach(function (r) { r.setAttribute('data-wipe', ''); });

  /* Intro: once the fonts are in, the drums spin up to 044,994 and the last six miles click over,
     carrying every wheel into 045000. The h1 is never delayed. */
  var heroCluster = SW.$('.cluster--hero');
  var rowTargets = d.map(function (el) { return el ? parseInt(el.textContent, 10) || 0 : 0; });
  if (readout && readout._wheels) readout._wheels.set(0);
  d.forEach(function (el) { if (el) el.textContent = '000000'; });
  function intro() {
    if (readout && readout._wheels && readout._wheels.v === 0) {
      var o = { v: 0 };
      gsap.timeline()
        .to(o, { v: 44994, duration: 1.4, ease: 'power3.out', onUpdate: function () { readout._wheels.set(o.v); } }, 0.1)
        .to(o, { v: 45000, duration: 1.8, ease: 'sine.inOut', onUpdate: function () { readout._wheels.set(o.v); } });
    }
    d.forEach(function (el, i) { if (el && el.textContent === '000000') roll(el, rowTargets[i], 1.6, 0.2 + i * 0.08); });
    if (heroCluster) gsap.fromTo(heroCluster, { '--needle': '-130deg' }, { '--needle': '18deg', duration: 1.6, delay: 0.1, ease: 'power3.out' });
    SW.$$('[data-odo-results] .odo-row').forEach(function (r, i) {
      setTimeout(function () { r.classList.add('is-in'); }, 150 + i * 60);
    });
  }
  var started = false;
  function go() { if (!started) { started = true; intro(); } }
  (doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve()).then(go);
  setTimeout(go, 1500);

  function boot() {
    if (typeof ScrollTrigger === 'undefined') {
      wipeRows.forEach(function (r) { r.classList.add('is-in'); });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    wipeRows.forEach(function (row) {
      if (row.closest('[data-odo-results]')) return;
      var dg = SW.$('.odo-digits', row);
      ScrollTrigger.create({
        trigger: row, start: 'top 92%', once: true,
        onEnter: function () {
          row.classList.add('is-in');
          if (dg && !dg.hasAttribute('data-contact-odo') && !dg.hasAttribute('data-set')) {
            var target = parseInt(dg.textContent, 10) || 0;
            dg.textContent = '000000'; roll(dg, target, 1);
          }
        }
      });
    });

    /* Frame tags roll to their reading as the frame arrives (or to the visitor's mileage once checked). */
    SW.$$('[data-roll]').forEach(function (el) {
      var host = el.closest('.inst, .cluster, .break') || el;
      el.textContent = '000000';
      ScrollTrigger.create({
        trigger: host, start: 'top 85%', once: true,
        onEnter: function () { roll(el, parseInt(el.getAttribute('data-roll'), 10) || 0, 1.1, 0.15); }
      });
    });

    /* Readings: each instrument moves to its value as it scrolls through (probe drops, marker slides,
       strip lands, cracks open). Final markup = final state. */
    SW.$$('[data-scrub]').forEach(function (el) {
      var host = el.closest('.inst') || el;
      var from = { ease: 'none', scrollTrigger: { trigger: host, start: 'top 88%', end: 'center 50%', scrub: 0.6 } };
      if (el.hasAttribute('data-from-x')) from.x = parseFloat(el.getAttribute('data-from-x'));
      if (el.hasAttribute('data-from-y')) from.y = parseFloat(el.getAttribute('data-from-y'));
      if (el.hasAttribute('data-from-scale')) { from.scaleY = 0; from.transformOrigin = '50% 0%'; }
      gsap.from(el, from);
    });

    doc.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
})();
