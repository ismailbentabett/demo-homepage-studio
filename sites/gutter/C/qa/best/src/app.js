/* gutter-C: Drop-Season Bars. Plate story, cleaning calendar, downspout check, footer month. */
(function () {
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
  function svc(i) { var s = SW.fact('services') || []; return s[i] ? s[i].name : ''; }

  /* ---- 1. plate story: each drawing draws, then its bar fills; the index follows ---- */
  var plates = SW.$$('.plate--spec');
  var idx = SW.$$('[data-pindex]');
  function setActive(n) { idx.forEach(function (li) { li.classList.toggle('is-active', li.getAttribute('data-pindex') === String(n)); }); }
  if (motion && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    plates.forEach(function (p) {
      ScrollTrigger.create({ trigger: p, start: 'top 78%', once: true, onEnter: function () { p.classList.add('is-drawn'); } });
      ScrollTrigger.create({ trigger: p, start: 'top 55%', end: 'bottom 45%', onToggle: function (st) { if (st.isActive) setActive(p.getAttribute('data-plate')); } });
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  } else {
    plates.forEach(function (p) { p.classList.add('is-drawn'); });
    if ('IntersectionObserver' in window && idx.length) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) setActive(e.target.getAttribute('data-plate')); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      plates.forEach(function (p) { io.observe(p); });
    }
  }

  /* ---- 2. cleaning calendar: rust booking months + visit count ---- */
  var cal = SW.$('[data-cal]');
  if (cal) {
    var boxes = SW.$$('input[name="tree"]', cal);
    var cells = SW.$$('[data-cal-bar] > i', cal);
    var out = SW.$('[data-cal-result]', cal);
    var bar = SW.$('[data-cal-bar]', cal);
    var state = { visits: [], trees: [] };
    function plan() {
      var picked = boxes.filter(function (b) { return b.checked; });
      var months = [];
      picked.forEach(function (b) { b.getAttribute('data-book').split(',').forEach(function (m) { m = +m; if (months.indexOf(m) < 0) months.push(m); }); });
      months.sort(function (a, b) { return a - b; });
      var visits = [];
      months.forEach(function (m) {
        var last = visits[visits.length - 1];
        if (last && m - last <= 1) visits[visits.length - 1] = m; else visits.push(m);
      });
      state.visits = visits;
      state.trees = picked.map(function (b) { return b.closest('label').textContent.trim(); });
      cells.forEach(function (c, i) { c.classList.toggle('book', visits.indexOf(i + 1) >= 0); });
      if (!picked.length) { out.textContent = 'Pick the trees over your roof.'; bar.setAttribute('aria-label', 'Your gutter year: nothing picked yet'); return; }
      var names = visits.map(function (m) { return MONTHS[m - 1]; }).join(', ');
      out.textContent = visits.length + (visits.length === 1 ? ' visit a year: ' : ' visits a year: ') + names + '.';
      bar.setAttribute('aria-label', 'Your gutter year. Book in ' + names + '.');
    }
    boxes.forEach(function (b) { b.addEventListener('change', plan); });
    plan();
    var go = SW.$('[data-cal-go]', cal);
    if (go) go.addEventListener('click', function () {
      var d = state.trees.length ? 'Trees: ' + state.trees.join(', ') + '. Calendar: ' + out.textContent : '';
      SW.prefillForm({ service: svc(1), details: d }, { focus: 'service' });
    });
    var pr = SW.$('[data-cal-print]', cal);
    if (pr) pr.addEventListener('click', function () {
      document.body.classList.add('print-cal');
      window.print();
      setTimeout(function () { document.body.classList.remove('print-cal'); }, 500);
    });
  }

  /* ---- 3. downspout check ---- */
  var ds = SW.$('[data-ds]');
  if (ds) {
    var res = SW.$('[data-ds-result]', ds);
    var answer = '';
    function val(n) { var r = SW.$('input[name="' + n + '"]:checked', ds); return r ? r.value : ''; }
    function check() {
      var d = val('ds-dist'), s = val('ds-slope'), b = val('ds-base');
      if (!d || !s || !b) { res.textContent = 'Answer the three questions.'; res.classList.remove('is-done'); answer = ''; return; }
      if (s === 'toward' || d === 's') answer = 'Ask us about a drain line, and check the City’s rules first.';
      else if (b === 'y' || s === 'flat') answer = 'An extension that carries water 6 ft or more out suits this spot.';
      else answer = 'A splash block is usually enough: the ground carries the water away.';
      res.textContent = answer;
      res.classList.add('is-done');
    }
    ds.addEventListener('change', check);
    var dgo = SW.$('[data-ds-go]', ds);
    if (dgo) dgo.addEventListener('click', function () {
      SW.prefillForm({ service: svc(4), details: answer ? 'Downspout check: ' + answer : '' }, { focus: 'service' });
    });
  }

  /* ---- 4. footer: this month in the field guide ---- */
  var year = SW.$('[data-year-bar]');
  if (year) {
    var m = new Date().getMonth();
    var NOW = ['Plate 3 Moss, and Plate 5 Ice some years', 'Plate 3 Moss, and Plate 5 Ice some years', 'Plate 3 Moss on the north roof',
      'Plate 1 Douglas fir needles', 'Plate 1 Douglas fir needles', 'Plate 4 Cottonwood fluff', 'Plate 1 Douglas fir needles',
      'Plate 1 Douglas fir needles', 'Plate 1 Douglas fir needles', 'Plate 2 Bigleaf maple leaves', 'Plate 2 Bigleaf maple leaves',
      'Plate 2 Bigleaf maple leaves, and Plate 5 Ice some years'];
    var cell = SW.$$('i', year)[m];
    if (cell) cell.classList.add('is-cur');
    var ml = SW.$$('.season-months span', year.parentElement)[m];
    if (ml) ml.classList.add('is-cur');
    var lab = SW.$('[data-month-label]');
    if (lab) lab.textContent = 'This month in the field guide (' + MONTHS[m] + '): ' + NOW[m] + '.';
  }
})();
