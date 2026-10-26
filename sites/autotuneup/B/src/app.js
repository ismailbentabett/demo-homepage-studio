/* autotuneup-B: the odometer. Hero mileage check (works for everyone), ledger readout that follows the
   bands, and the motion layer (digit rolls + row wipes) only under sw-motion. */
(function () {
  if (typeof SW === 'undefined') return;
  var doc = document;
  var motion = !SW.reduced && doc.documentElement.classList.contains('sw-motion');
  var hasGsap = typeof gsap !== 'undefined';

  function pad(n) { return String(Math.max(0, Math.min(999999, Math.round(n)))).padStart(6, '0'); }
  function fmt(n) { return Math.round(n).toLocaleString('en-US'); }

  /* Roll an element's six digits to a target (instant without motion). */
  function roll(el, to, dur, delay) {
    if (!el) return;
    if (!motion || !hasGsap) { el.textContent = pad(to); return; }
    var from = parseInt(el.textContent, 10) || 0;
    var o = { v: from };
    gsap.killTweensOf(el._o || {});
    el._o = o;
    gsap.to(o, { v: to, duration: dur || 0.9, delay: delay || 0, ease: 'power3.out', onUpdate: function () { el.textContent = pad(o.v); } });
  }

  /* ---------- Hero mileage check ---------- */
  var form = SW.$('[data-odo-form]');
  var input = SW.$('#odo-input');
  var readout = SW.$('[data-readout]');
  var label = SW.$('[data-odo-label]');
  var d = [0, 1, 2].map(function (i) { return SW.$('[data-odo-d="' + i + '"]'); });
  var current = 45000;

  var GROUPS = {
    k30: 'Air filter · Cabin filter',
    k60: 'Air filter · Cabin filter · Brake fluid',
    k100: 'Spark plugs · Coolant'
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

  function apply(m, animate) {
    current = m;
    var p = plan(m);
    var rows = SW.$$('[data-odo-results] .odo-row');
    roll(d[0], m, animate ? 0.9 : 0);
    roll(d[1], p[0].at, animate ? 0.9 : 0, 0.06);
    roll(d[2], p[1].at, animate ? 0.9 : 0, 0.12);
    if (rows[1]) {
      SW.$('.odo-pill', rows[1]).textContent = 'At ' + (p[0].at / 1000) + 'k';
      SW.$('.odo-label', rows[1]).textContent = p[0].items;
    }
    if (rows[2]) SW.$('.odo-label', rows[2]).textContent = p[1].items;
    roll(readout, m, animate ? 1 : 0);
    var mile = SW.$('#f-mileage');
    if (mile && !mile.value) mile.value = fmt(m);
    var c = SW.$('[data-contact-odo]');
    if (c) c.textContent = pad(m);
  }

  if (form && input) {
    form.setAttribute('novalidate', '');
    input.addEventListener('input', function () {
      var m = readInput();
      if (readout && m != null) readout.textContent = pad(m);
    });
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
      label.textContent = 'Your reading: ' + fmt(m) + ' mi';
      apply(m, true);
    });
    var go = SW.$('[data-odo-go]');
    if (go) go.addEventListener('click', function () {
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

  /* Intro: the hero readout rolls 000000 → 045000, the three rows wipe in at 60ms. h1 is never delayed. */
  if (readout) { readout.textContent = '000000'; roll(readout, 45000, 1.1, 0.1); }
  var heroCluster = SW.$('.cluster--hero');
  if (heroCluster) gsap.fromTo(heroCluster, { '--needle': '-130deg' }, { '--needle': '18deg', duration: 1.1, delay: 0.1, ease: 'power3.out' });
  SW.$$('[data-odo-results] .odo-row').forEach(function (r, i) {
    setTimeout(function () { r.classList.add('is-in'); }, 150 + i * 60);
  });

  function boot() {
    if (typeof ScrollTrigger === 'undefined') {
      wipeRows.forEach(function (r) { r.classList.add('is-in'); });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    wipeRows.forEach(function (row) {
      if (row.closest('[data-odo-results]')) return;
      var dg = SW.$('.odo-digits', row);
      var target = dg ? parseInt(dg.textContent, 10) || 0 : 0;
      ScrollTrigger.create({
        trigger: row, start: 'top 88%', once: true,
        onEnter: function () {
          row.classList.add('is-in');
          if (dg && !dg.hasAttribute('data-contact-odo')) { dg.textContent = '000000'; roll(dg, target, 1); }
        }
      });
    });

    /* Cluster readouts roll when their frame unclips. */
    SW.$$('[data-roll]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-roll'), 10) || 0;
      var host = el.closest('.cluster, .break') || el;
      el.textContent = '000000';
      ScrollTrigger.create({
        trigger: host, start: 'top 80%', once: true,
        onEnter: function () { roll(el, target, 1.1, 0.25); }
      });
    });

    /* Needles sweep to their reading as the frame passes through the viewport. */
    SW.$$('.cluster:not(.cluster--break):not(.cluster--hero)').forEach(function (c) {
      var end = getComputedStyle(c).getPropertyValue('--needle').trim() || '30deg';
      gsap.fromTo(c, { '--needle': '-130deg' }, {
        '--needle': end, ease: 'none',
        scrollTrigger: { trigger: c, start: 'top 90%', end: 'center 55%', scrub: 0.6 }
      });
    });

    doc.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
})();
