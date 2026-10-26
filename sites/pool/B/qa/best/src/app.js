/* pool-B · gauge scale signature + visit log story + gallons tool */
(function () {
  if (typeof SW === 'undefined') return;

  /* Gallons calculator: a tool, so it runs with or without motion */
  SW.mod('gallons', function () {
    var box = document.querySelector('[data-gallons]');
    if (!box) return;
    var shape = box.querySelector('[name="g-shape"]');
    var len = box.querySelector('[name="g-len"]');
    var wid = box.querySelector('[name="g-wid"]');
    var dep = box.querySelector('[name="g-dep"]');
    var out = box.querySelector('[data-gal-out]');
    var gauge = box.querySelector('.gauge--gal');
    function update() {
      var g = (parseFloat(len.value) || 0) * (parseFloat(wid.value) || 0) * (parseFloat(dep.value) || 0) * (parseFloat(shape.value) || 7.5);
      g = Math.round(g / 100) * 100;
      out.textContent = g > 0 ? g.toLocaleString('en-US') : '0';
      var pct = Math.max(2, Math.min(98, (g - 5000) / 35000 * 100));
      if (gauge) gauge.style.setProperty('--v', pct.toFixed(1) + '%');
    }
    [shape, len, wid, dep].forEach(function (el) { el.addEventListener('input', update); el.addEventListener('change', update); });
    update();
  });

  /* Tick tool: the result is drawn as a reading. More signs push the marker out of the band */
  SW.mod('reader-gauge', function () {
    var box = document.querySelector('[data-checklist]');
    var g = document.querySelector('[data-reader-gauge]');
    if (!box || !g) return;
    var boxes = box.querySelectorAll('input[type="checkbox"]');
    function update() {
      var n = 0;
      boxes.forEach(function (b) { if (b.checked) n++; });
      g.style.setProperty('--v', (12 + (n / Math.max(1, boxes.length)) * 82).toFixed(1) + '%');
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    update();
  });

  SW.mod('signature', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    /* Intro: the hero report's markers slide from the left edge into their bands (≤ 1.2 s, h1 untouched) */
    var report = document.querySelector('[data-report]');
    if (report) {
      var rows = report.querySelectorAll('.reading');
      rows.forEach(function (row, i) {
        var mark = row.querySelector('.gauge__mark');
        var pad = row.querySelector('.reading__pad');
        var d = (120 + i * 70) + 'ms';
        if (mark) { mark.style.transitionDuration = '640ms'; mark.style.transitionDelay = d; }
        if (pad) pad.style.transitionDelay = d;
      });
      report.classList.add('is-intro');
      void report.offsetWidth;
      requestAnimationFrame(function () { requestAnimationFrame(function () { report.classList.remove('is-intro'); }); });
    }

    /* The settle: every [data-settle] block starts out of range and settles into its band on entry */
    var settle = Array.prototype.slice.call(document.querySelectorAll('[data-settle]'));
    if (settle.length && 'IntersectionObserver' in window) {
      var show = function (el) { el.classList.add('is-in'); };
      settle.forEach(function (el) { el.classList.add('is-armed'); });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -22% 0px' });
      settle.forEach(function (el) { io.observe(el); });
      var catchUp = function () {
        settle.forEach(function (el) { if (!el.classList.contains('is-in') && el.getBoundingClientRect().bottom < 0) { show(el); io.unobserve(el); } });
      };
      window.addEventListener('scroll', function () { requestAnimationFrame(catchUp); }, { passive: true });
      window.addEventListener('beforeprint', function () { settle.forEach(show); });
      catchUp();
    }

    /* Story: the visit log fills one line per step while the steps scroll past (sticky rail, ≥ 900px) */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    var visit = document.querySelector('#visit');
    if (visit) {
      ScrollTrigger.matchMedia({
        '(min-width: 900px)': function () {
          visit.classList.add('is-live');
          var logRows = visit.querySelectorAll('.log__row');
          var triggers = [];
          visit.querySelectorAll('.step').forEach(function (step, i) {
            var row = logRows[i];
            if (!row) return;
            triggers.push(ScrollTrigger.create({
              trigger: step,
              start: 'top 62%',
              onEnter: function () { row.classList.add('is-on'); },
              onLeaveBack: function () { row.classList.remove('is-on'); }
            }));
            var frame = step.querySelector('.frame');
            if (frame) {
              triggers.push(gsap.fromTo(frame, { scale: 1.06 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: step, start: 'top bottom', end: 'center center', scrub: true } }).scrollTrigger);
            }
          });
          return function () {
            visit.classList.remove('is-live');
            logRows.forEach(function (r) { r.classList.remove('is-on'); });
            triggers.forEach(function (t) { if (t) t.kill(); });
          };
        }
      });
    }

    document.fonts && document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
