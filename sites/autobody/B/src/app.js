/* autobody-B · the probe readout: sorter, story, dent check, price tape */
(function () {
  var SWg = window.SW || {};
  var doc = document.documentElement;
  var motion = !SWg.reduced && doc.classList.contains('sw-motion') && window.gsap;
  var qs = function (s, r) { return (r || document).querySelector(s); };
  var qsa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function countTo(el, to, dur) {
    if (!el) return;
    if (!motion) { el.textContent = to.toFixed(1); return; }
    var o = { v: parseFloat(el.textContent) || 0 };
    gsap.to(o, { v: to, duration: dur || .6, ease: 'power3.out', onUpdate: function () { el.textContent = o.v.toFixed(1); } });
  }

  /* ---- 1 · hero sorter: tabs → drawing + readout ---- */
  var sorter = qs('[data-hook="sorter"]');
  var fig = qs('.hero__fig');
  var ro = qs('.readout--hero');
  if (sorter && fig && ro) {
    var val = qs('[data-readout-val]', ro), st = qs('[data-readout-status]', ro), cap = qs('[data-readout-cap]', ro);
    var tabs = qsa('[data-tab]', sorter), panels = qsa('[data-tabpanel]', sorter);
    var apply = function () {
      var i = tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; });
      if (i < 0) return;
      var p = panels[i]; if (!p) return;
      var state = p.getAttribute('data-state'), mil = parseFloat(p.getAttribute('data-mil')), status = p.getAttribute('data-status');
      fig.setAttribute('data-state', state);
      ro.setAttribute('data-state', state);
      ro.style.setProperty('--mil', mil);
      countTo(val, mil, .5);
      if (st) st.textContent = status;
      if (cap) cap.textContent = 'Sample reading: ' + mil.toFixed(1) + ' mils, ' + status;
    };
    var mo = new MutationObserver(apply);
    tabs.forEach(function (t) { mo.observe(t, { attributes: true, attributeFilter: ['aria-selected'] }); });
    apply();
  }

  /* ---- 4 · dent check (always on) ---- */
  var dent = qs('[data-dent]');
  var dfig = qs('.dent__fig');
  if (dent && dfig) {
    var rPdr = qs('[data-dent-result="pdr"]', dent), rBody = qs('[data-dent-result="body"]', dent);
    var dVal = qs('[data-dent-val]'), dUnit = qs('[data-dent-unit]'), dSt = qs('[data-dent-status]');
    var pick = function (n) { var c = qs('input[name="' + n + '"]:checked', dent); return c ? c.value : ''; };
    var runDent = function () {
      var size = pick('d-size'), crack = pick('d-crack'), edge = pick('d-edge');
      var pdr = size !== 'big' && crack !== 'yes' && edge !== 'yes';
      if (rPdr) rPdr.hidden = !pdr;
      if (rBody) rBody.hidden = pdr;
      dfig.setAttribute('data-state', pdr ? 'pdr' : 'body');
      dfig.setAttribute('data-size', size);
      dfig.setAttribute('data-crack', crack);
      dfig.setAttribute('data-edge', edge);
      if (dVal) dVal.textContent = pdr ? 'PDR' : 'B+P';
      if (dUnit) dUnit.textContent = size === 'big' ? 'bigger' : size;
      if (dSt) dSt.textContent = pdr ? 'likely paintless' : (crack === 'yes' ? 'paint cracked' : edge === 'yes' ? 'on a line' : 'too big to push');
    };
    dent.addEventListener('change', runDent);
    runDent();
  }

  /* ---- 8 · price tape: segments from the price facts (sqrt scale) ---- */
  var tape = qs('[data-hook="tape"]');
  var prices = (SWg.fact && SWg.fact('proof.prices')) || [];
  if (tape && prices.length) {
    var num = function (s) { var m = String(s || '').replace(/,/g, '').match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : 0; };
    var max = 0;
    prices.forEach(function (p) { max = Math.max(max, num(p.to)); });
    var scale = function (v) { return max ? Math.sqrt(v / max) * 100 : 0; };
    var rows = qsa('.tape__row', tape);
    var tVal = qs('[data-tape-val]'), tSt = qs('[data-tape-status]');
    rows.forEach(function (row, i) {
      var p = prices[i]; if (!p) return;
      var a = scale(num(p.from)), b = scale(num(p.to));
      var seg = qs('.tape__seg', row);
      if (seg) { seg.style.setProperty('--a', a.toFixed(2) + '%'); seg.style.setProperty('--w', Math.max(1.5, b - a).toFixed(2) + '%'); }
      var show = function () {
        rows.forEach(function (r) { r.classList.toggle('is-on', r === row); });
        if (tVal) tVal.textContent = p.from + '–' + p.to;
        if (tSt) tSt.textContent = p.item;
      };
      row.addEventListener('mouseenter', show);
      row.addEventListener('focus', show);
    });
  }

  /* ---- 3 · test sheet: blurbs fold into a disclosure on phones (open with JS off) ---- */
  if (window.matchMedia && window.matchMedia('(max-width: 639px)').matches) {
    qsa('.row__more').forEach(function (d) { d.removeAttribute('open'); });
  }

  if (!motion) return;

  /* ---- probe touch: hovering a sheet row re-reads its number ---- */
  if (window.matchMedia('(hover: hover)').matches) {
    qsa('.row').forEach(function (row) {
      var b = qs('.chip-read b', row); if (!b) return;
      var to = parseFloat(b.textContent); if (isNaN(to)) return;
      var dec = /\./.test(b.textContent) ? 1 : 0;
      row.addEventListener('mouseenter', function () {
        var o = { v: 0 };
        gsap.to(o, { v: to, duration: .45, ease: 'power3.out', onUpdate: function () { b.textContent = o.v.toFixed(dec); } });
      });
    });
  }

  /* ---- motion only below ---- */
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // intro: the hero readout counts up (h1 is readable from the first frame)
  var hero = qs('#hero');
  if (hero && ro) {
    hero.classList.add('is-intro');
    var v0 = qs('[data-readout-val]', ro);
    if (v0) { var target = parseFloat(v0.textContent) || 4.4; v0.textContent = '0.0'; countTo(v0, target, 1.1); }
  }

  if (!window.ScrollTrigger) return;

  // tape: segments measure out as rows come in
  if (tape) {
    tape.classList.add('is-armed');
    qsa('.tape__row', tape).forEach(function (row) {
      ScrollTrigger.create({ trigger: row, start: 'top 88%', once: true, onEnter: function () { row.classList.add('is-in'); } });
    });
  }

  // claim path: the line draws as you scroll through it
  qsa('.path').forEach(function (path) {
    gsap.fromTo(path, { '--draw': 0 }, { '--draw': 1, ease: 'none',
      scrollTrigger: { trigger: path, start: 'top 80%', end: 'bottom 60%', scrub: .4 } });
  });

  // story: one hood, four readings (pinned on desktop only)
  var story = qs('#story');
  if (story) {
    var steps = qsa('.step', story);
    var sfig = qs('.story__fig', story);
    var big = qs('.readout--big', story);
    var bigVal = big && qs('[data-readout-val]', big);
    var bigSt = big && qs('[data-readout-status]', big);
    var setStep = function (i) {
      var s = steps[i]; if (!s) return;
      steps.forEach(function (x, k) { x.classList.toggle('is-active', k === i); });
      var state = s.getAttribute('data-state');
      if (sfig) sfig.setAttribute('data-state', state);
      if (big) {
        big.setAttribute('data-state', state === 'chalk' ? 'low' : state);
        if (state === 'coat') big.setAttribute('data-coat', ''); else big.removeAttribute('data-coat');
        big.style.setProperty('--mil', s.getAttribute('data-mil'));
      }
      countTo(bigVal, parseFloat(s.getAttribute('data-mil')), .45);
      var miniSt = qs('.readout__status', s);
      if (bigSt && miniSt) bigSt.textContent = miniSt.textContent;
    };
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        story.classList.add('is-pinned');
        var last = -1;
        var t = ScrollTrigger.create({
          trigger: story, start: 'top top', end: 'bottom bottom',
          onUpdate: function (self) {
            var i = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            if (i !== last) { last = i; setStep(i); }
          }
        });
        setStep(0);
        return function () { t.kill(); story.classList.remove('is-pinned'); steps.forEach(function (x) { x.classList.remove('is-active'); }); setStep(steps.length - 1); };
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
