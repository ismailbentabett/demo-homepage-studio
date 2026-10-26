/* pest-B · Trap Count
   1. Tools (everyone, motion or not): the liquid-or-bait map, the year log, print, form step labels.
   2. Motion (only with sw-motion and no reduced motion): map sweeps, log rows, footer map. */
(function () {
  'use strict';
  var SW = window.SW || {};
  var html = document.documentElement;
  var motion = !SW.reduced && html.classList.contains('sw-motion');
  var q = function (s, r) { return (r || document).querySelector(s); };
  var qa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── 1a. Liquid or bait: the map is the answer ── */
  var tool = q('[data-maptool]');
  var toolMap = q('[data-tool-map]');
  var cards = q('.compare__cards');
  var sheet = q('.compare__sheet');
  var verdict = q('[data-verdict]');
  var HOUSE = { slab: 'the slab', crawl: 'the crawlspace', raised: 'the piers' };
  var HOUSE_NAME = { slab: 'slab house', crawl: 'crawlspace house', raised: 'house on piers' };

  function val(form, name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : '';
  }

  function relight(map) {
    if (!motion || !map) return;
    map.classList.remove('is-in');
    void map.offsetWidth;
    map.classList.add('is-in');
  }

  function updateTool() {
    if (!tool || !toolMap) return;
    var house = val(tool, 'house') || 'slab';
    var water = val(tool, 'water') === 'yes';
    var read = val(tool, 'read') !== 'no';
    var lean = (water || read) ? 'bait' : 'liquid';
    toolMap.setAttribute('data-house', house);
    toolMap.setAttribute('data-method', lean);
    toolMap.setAttribute('aria-label', 'Station map of a ' + HOUSE_NAME[house] + ': ' +
      (lean === 'bait' ? '12 bait stations lit, liquid trench dimmed' : 'liquid trench drawn around the footprint, stations dimmed'));
    if (cards) cards.setAttribute('data-lean', lean);
    if (sheet) sheet.setAttribute('data-lean', lean);
    var why;
    if (lean === 'bait') {
      why = water ? 'Leans bait. A well or a creek near ' + HOUSE[house] + ' rules out trenching chemicals into the soil, so stations go in the ground instead.'
                  : 'Leans bait. Twelve numbered stations around ' + HOUSE[house] + ', each one read and written down on every visit.';
    } else {
      why = 'Leans liquid. One trenched and rodded barrier around ' + HOUSE[house] + ', done in a day, nothing to read after.';
    }
    if (verdict) verdict.textContent = why;
  }

  if (tool) {
    tool.addEventListener('change', function () {
      updateTool();
      if (toolMap && toolMap.classList.contains('is-in')) relight(toolMap);
    });
    tool.addEventListener('submit', function (e) { e.preventDefault(); });
    updateTool();
  }

  /* ── 1b. Year plan: one dated log row per visit, a sample range on each line, never a sum ── */
  var plan = q('[data-yearplan]');
  var rowsEl = q('[data-yearlog-rows]');
  var countEl = q('[data-yearlog-count]');
  var prices = (SW.fact && SW.fact('proof.prices')) || null;
  var MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function range(i) {
    var p = prices && prices[i];
    if (!p) return '';
    return p.from + '–' + p.to + (p.unit ? ' ' + p.unit : (p.note ? ' · ' + p.note : ''));
  }

  function buildRows() {
    var termite = val(plan, 'termite');
    var renewal = plan.querySelector('input[name="renewal"]').checked;
    var quarterly = plan.querySelector('input[name="quarterly"]').checked;
    var months = qa('input[name="mosq"]:checked', plan).map(function (m) { return +m.value; });
    var rows = [];
    if (termite === 'liquid') rows.push({ m: 2, what: 'Perimeter trenched and rodded, one barrier', price: range(1), visit: true });
    if (termite === 'bait') {
      rows.push({ m: 2, what: 'BR-01 to BR-12, stations installed', price: range(2), visit: true, st: true });
      if (!quarterly) [5, 8, 11].forEach(function (m) { rows.push({ m: m, what: 'Stations read, BR-01 to BR-12', price: 'In plan', visit: true }); });
    }
    if (quarterly) [0, 3, 6, 9].forEach(function (m) {
      rows.push({ m: m, what: 'Quarterly visit' + (termite === 'bait' ? ', stations read' : ''), price: range(4), visit: true });
    });
    months.forEach(function (m) { rows.push({ m: m - 1, what: 'Yard, mosquito treatment', price: range(3), visit: true }); });
    if (renewal) rows.push({ m: 12, what: 'Termite contract renewal', price: range(0), visit: false });
    rows.sort(function (a, b) { return a.m - b.m; });
    return rows;
  }

  function renderPlan() {
    if (!plan || !rowsEl) return;
    var rows = buildRows();
    rowsEl.textContent = '';
    if (!rows.length) {
      var li = document.createElement('li');
      li.className = 'yrow yrow--empty';
      li.textContent = 'Pick a termite plan or a service to see your yearly range.';
      rowsEl.appendChild(li);
    }
    rows.forEach(function (r, i) {
      var li = document.createElement('li');
      li.className = 'yrow' + (r.st ? ' yrow--st' : '') + (motion ? ' is-new' : '');
      li.style.setProperty('--i', i);
      var d = document.createElement('span'); d.className = 'yrow__date'; d.textContent = r.m === 12 ? 'Year end' : MON[r.m];
      var w = document.createElement('span'); w.className = 'yrow__what'; w.textContent = r.what;
      var p = document.createElement('span'); p.className = 'yrow__price'; p.textContent = r.price;
      li.appendChild(d); li.appendChild(w); li.appendChild(p);
      rowsEl.appendChild(li);
    });
    var yl = q('[data-yearlog]');
    var label = q('[data-plan-label]');
    if (yl) {
      /* Switching to bait relights the chip strip from 01, in the drawing's groups of four */
      var was = yl.getAttribute('data-plan');
      if (motion && termite === 'bait' && was !== 'bait') { yl.classList.remove('is-in'); void yl.offsetWidth; }
      yl.setAttribute('data-plan', termite || 'none');
      if (motion) requestAnimationFrame(function () { yl.classList.add('is-in'); });
    }
    if (label) label.textContent = termite === 'bait' ? 'Bait plan: stations BR-01 to BR-12, read on every visit.'
      : termite === 'liquid' ? 'Liquid plan: one trenched barrier around the footprint, no stations to read.'
      : 'No termite plan picked: no stations on this year.';
    if (countEl) {
      var n = rows.filter(function (r) { return r.visit; }).length;
      countEl.textContent = n;
    }
  }

  if (plan) {
    plan.addEventListener('change', renderPlan);
    plan.addEventListener('submit', function (e) { e.preventDefault(); });
  }

  var printBtn = q('[data-yearlog-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      html.classList.add('print-log');
      window.print();
    });
    window.addEventListener('afterprint', function () { html.classList.remove('print-log'); });
  }

  /* ── 1c. Lead form: the Next button names the next step ── */
  var lead = q('form[data-lead]');
  var nextBtn = lead && q('[data-next]', lead);
  var NEXT = ['Next: house type', 'Next: details', 'Next: your number'];
  function syncNext() {
    if (!lead || !nextBtn) return;
    var i = parseInt(lead.getAttribute('data-step-current') || '0', 10) || 0;
    if (NEXT[i]) nextBtn.textContent = NEXT[i];
  }
  if (lead && nextBtn && 'MutationObserver' in window) {
    new MutationObserver(syncNext).observe(lead, { attributes: true, attributeFilter: ['data-step-current'] });
    syncNext();
  }

  /* ── 1d. Reveal safety net: anything already on screen is shown, even if the observer missed it ── */
  function sweepReveals() {
    var limit = window.innerHeight * 0.95;
    qa('[data-reveal]:not(.is-in), [data-reveal-stagger]:not(.is-in)').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < limit && r.bottom > 0) el.classList.add('is-in');
    });
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; sweepReveals(); });
  }, { passive: true });
  window.addEventListener('load', sweepReveals);

  /* Anchor jumps: the target band and everything in it is shown at once */
  function revealTarget(hash) {
    if (!hash || hash.length < 2) return;
    var t = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!t) return;
    var sec = t.closest('section') || t;
    var list = qa('[data-reveal], [data-reveal-stagger]', sec);
    if (sec.matches('[data-reveal], [data-reveal-stagger]')) list.push(sec);
    list.forEach(function (el) { el.classList.add('is-in'); });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a) revealTarget(a.getAttribute('href'));
  });
  window.addEventListener('hashchange', function () { revealTarget(location.hash); });
  revealTarget(location.hash);
  sweepReveals();

  /* ── 2. Motion: the maps relight when they come into view ── */
  var watched = qa('[data-tool-map], [data-footer-map], [data-yearlog]');
  if (!motion) {
    watched.forEach(function (m) { m.classList.add('is-in'); });
    return;
  }


  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.35 });
    watched.forEach(function (m) { io.observe(m); });
  } else {
    watched.forEach(function (m) { m.classList.add('is-in'); });
  }

  /* Count-up on the visits number when the year log changes */
  if (plan && countEl) {
    plan.addEventListener('change', function () {
      countEl.animate([{ transform: 'translateY(-6px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.23,1,.32,1)' });
    });
  }

  if (window.ScrollTrigger && window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        /* The break photo drifts slower than the page: a quiet depth cue, no pin. */
        var img = q('.break__frame img');
        if (img) gsap.fromTo(img, { yPercent: -6, scale: 1.12 }, { yPercent: 6, scale: 1.12, ease: 'none', scrollTrigger: { trigger: '.break__frame', start: 'top bottom', end: 'bottom top', scrub: true } });
      },
      '(min-width: 900px)': function () {
        /* Liquid or bait as a scroll story. The drawing pins (sticky) while the house steps pass:
           the trench draws itself around the slab, then the bait stations light in groups of four
           as the house turns slab -> crawlspace -> raised. Scrolling back runs it in reverse.
           Touching the tool ends the story and hands the drawing to the inputs. */
        if (!toolMap || !tool) return;
        var beat = q('[data-story-beat]');
        var steps = qa('[data-hstep]');
        var BEATS = ['', 'Liquid · the trench, drawn around the slab', 'Bait · BR-01 to BR-04, slab', 'Bait · BR-05 to BR-08, crawlspace', 'Bait · BR-09 to BR-12, raised, every one read'];
        var HOUSES = ['slab', 'slab', 'slab', 'crawl', 'raised'];
        var done = false;
        function clear() {
          toolMap.removeAttribute('data-story');
          toolMap.style.removeProperty('--trench');
          if (beat) beat.textContent = '';
          steps.forEach(function (l) { l.classList.remove('is-story'); });
          updateTool();
        }
        function render(p) {
          if (done) return;
          if (p === null) { clear(); return; }
          var draw = Math.max(0, Math.min(1, (p - 0.04) / 0.26));
          var s = p < 0.03 ? 0 : p < 0.32 ? 1 : p < 0.52 ? 2 : p < 0.72 ? 3 : 4;
          toolMap.style.setProperty('--trench', (1 - draw).toFixed(3));
          if (toolMap.getAttribute('data-story') !== String(s)) {
            toolMap.setAttribute('data-story', s);
            toolMap.setAttribute('data-house', HOUSES[s]);
            if (beat) beat.textContent = BEATS[s];
            steps.forEach(function (l) { l.classList.toggle('is-story', s > 0 && l.getAttribute('data-hstep') === HOUSES[s]); });
          }
        }
        var st = ScrollTrigger.create({
          trigger: '.compare__grid',
          start: 'top 70%',
          end: 'bottom 80%',
          onUpdate: function (self) { render(self.progress >= 1 ? null : self.progress); },
          onLeave: function () { render(null); },
          onLeaveBack: function () { render(0); },
          onEnterBack: function (self) { render(self.progress); }
        });
        if (st.progress > 0 && st.progress < 1) render(st.progress); else if (st.progress <= 0) render(0);
        function stop() { clear(); done = true; st.kill(); }
        tool.addEventListener('change', stop, { once: true });
        return function () { if (!done) clear(); st.kill(); };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
