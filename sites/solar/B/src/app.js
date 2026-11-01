/* solar-B · Source Trace: the size tool, ring <-> source row links, the hero trace, the pinned chain story. */
(function () {
  var doc = document.documentElement;
  var motion = !SW.reduced && doc.classList.contains('sw-motion');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- 1. size tool: yearly kWh ÷ sample band (1,700-1,950 kWh per kW per year) ---------- */
  var BAND_LO = 1700, BAND_HI = 1950, PANEL_W = 400;
  var size = $('[data-size]');
  var lastNote = '';
  if (size) {
    var input = $('#kwh', size), kwOut = $('[data-size-kw]', size), pOut = $('[data-size-panels]', size);
    var chips = $$('[data-kwh]', size);
    var half = function (v) { return Math.round(v * 2) / 2; };
    var fmt = function (v) { return (v % 1 ? v.toFixed(1) : String(v)); };
    var calc = function () {
      var kwh = parseInt(String(input.value).replace(/\D/g, ''), 10);
      if (!kwh || kwh < 1500 || kwh > 90000) {
        kwOut.textContent = 'Enter a yearly total';
        pOut.textContent = 'Add up the 12 kWh numbers on your bill, e.g. 14,000.';
        lastNote = '';
        return;
      }
      var lo = half(kwh / BAND_HI), hi = half(kwh / BAND_LO);
      if (hi <= lo) hi = lo + 0.5;
      var pl = Math.round(lo * 1000 / PANEL_W), ph = Math.round(hi * 1000 / PANEL_W);
      kwOut.textContent = 'About ' + fmt(lo) + '–' + fmt(hi) + ' kW';
      pOut.textContent = pl + ' to ' + ph + ' panels at about ' + PANEL_W + ' W';
      lastNote = kwh.toLocaleString('en-US') + ' kWh a year → sample range ' + fmt(lo) + '–' + fmt(hi) + ' kW';
      chips.forEach(function (c) {
        var on = parseInt(c.getAttribute('data-kwh'), 10) === kwh;
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    };
    input.addEventListener('input', calc);
    input.addEventListener('blur', function () {
      var v = parseInt(String(input.value).replace(/\D/g, ''), 10);
      if (v) input.value = v.toLocaleString('en-US');
    });
    size.addEventListener('submit', function (e) { e.preventDefault(); calc(); });
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        input.value = parseInt(c.getAttribute('data-kwh'), 10).toLocaleString('en-US');
        calc();
      });
    });
    calc();
    // carry the range into the form (prefill sets the service; we add the kWh and the note)
    var send = $('[data-size-send]');
    if (send) send.addEventListener('click', function () {
      var form = $('form[data-lead]');
      if (!form || !lastNote) return;
      var k = $('[name="kwh"]', form), d = $('[name="details"]', form);
      if (k) k.value = String(input.value).replace(/\D/g, '');
      if (d && d.value.indexOf('sample range') < 0) d.value = (d.value ? d.value + '\n' : '') + lastNote;
    }, true);
  }

  /* ---------- 2. ring <-> source row ---------- */
  function hot(n, on) {
    $$('[data-row="' + n + '"]').forEach(function (r) { r.classList.toggle('is-hot', on); });
    $$('a.src[data-src="' + n + '"]').forEach(function (r) { r.classList.toggle('is-hot', on); });
  }
  $$('a.src[data-src]').forEach(function (ring) {
    var n = ring.getAttribute('data-src');
    var row = document.getElementById('s-' + n);
    if (row) ring.setAttribute('aria-describedby', row.id);
    ['mouseenter', 'focus'].forEach(function (ev) { ring.addEventListener(ev, function () { hot(n, true); }); });
    ['mouseleave', 'blur'].forEach(function (ev) { ring.addEventListener(ev, function () { hot(n, false); }); });
  });
  $$('[data-row]').forEach(function (row) {
    var n = row.getAttribute('data-row');
    row.addEventListener('mouseenter', function () { hot(n, true); });
    row.addEventListener('mouseleave', function () { hot(n, false); });
  });

  /* ---------- 3. print the seller questions ---------- */
  var pr = $('[data-print]');
  if (pr) pr.addEventListener('click', function () { window.print(); });

  /* ---------- 4. hero trace: ring 1 → its source card, across the seam ---------- */
  var grid = $('.hero__grid'), trace = $('.hero__trace'), ring1 = $('.hero a.src[data-sw-signature]'), card = $('#s-1');
  var tracePath = trace ? $('[data-trace]', trace) : null, maskPath = null;
  var wide = window.matchMedia('(min-width: 900px)');
  if (trace && tracePath) {
    var NS = 'http://www.w3.org/2000/svg';
    var defs = document.createElementNS(NS, 'defs'), mask = document.createElementNS(NS, 'mask');
    mask.setAttribute('id', 'trace-mask');
    mask.setAttribute('maskUnits', 'userSpaceOnUse');
    maskPath = document.createElementNS(NS, 'path');
    maskPath.setAttribute('fill', 'none');
    maskPath.setAttribute('stroke', '#fff');
    maskPath.setAttribute('stroke-width', '8');
    mask.appendChild(maskPath); defs.appendChild(mask); trace.insertBefore(defs, trace.firstChild);
    tracePath.setAttribute('mask', 'url(#trace-mask)');
  }
  var traceLen = 0;
  function layoutTrace() {
    if (!trace || !wide.matches || !ring1 || !card) return;
    var g = grid.getBoundingClientRect(), r = ring1.getBoundingClientRect(), c = card.getBoundingClientRect();
    var x0 = r.left + r.width / 2 + 13 - g.left, y0 = r.top + r.height / 2 - g.top;
    var seam = g.width / 2 + 24, y1 = c.top + c.height / 2 - g.top, x1 = c.left - g.left;
    var d = 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' H' + seam.toFixed(1) + ' V' + y1.toFixed(1) + ' H' + x1.toFixed(1);
    tracePath.setAttribute('d', d);
    maskPath.setAttribute('d', d);
    traceLen = Math.abs(seam - x0) + Math.abs(y1 - y0) + Math.abs(x1 - seam);
    maskPath.style.strokeDasharray = traceLen;
    if (!motion || trace.classList.contains('is-drawn')) maskPath.style.strokeDashoffset = 0;
  }
  layoutTrace();
  window.addEventListener('resize', layoutTrace);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutTrace);

  /* ---------- 5. the second-opinion marks pop when the sheet is seen ---------- */
  var second = $('#second');
  if (second && 'IntersectionObserver' in window) {
    var io2 = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { second.classList.add('is-marked'); io2.disconnect(); }
    }, { threshold: .02, rootMargin: '0px 0px -20% 0px' });
    io2.observe($('.sheet', second) || second);
  } else if (second) second.classList.add('is-marked');

  /* ---------- motion only below ---------- */
  if (!motion) {
    if (ring1) ring1.classList.add('is-on');
    return;
  }

  // intro: ring 1 pops at 300ms, its leader draws across the seam in 600ms
  setTimeout(function () {
    if (ring1) ring1.classList.add('is-on');
    if (!maskPath || !wide.matches) { if (trace) trace.classList.add('is-drawn'); return; }
    layoutTrace();
    maskPath.style.strokeDashoffset = traceLen;
    if (window.gsap) {
      gsap.to(maskPath, { strokeDashoffset: 0, duration: .6, ease: 'power2.out', delay: .15, onComplete: function () { trace.classList.add('is-drawn'); } });
    } else { maskPath.style.strokeDashoffset = 0; trace.classList.add('is-drawn'); }
  }, 300);

  // story 2 "flash": when a section's Sources strip arrives, its rings pulse once
  if ('IntersectionObserver' in window) {
    var io3 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io3.unobserve(en.target);
        var sec = en.target.closest('section');
        if (!sec) return;
        $$('a.src[data-src]', sec).forEach(function (r, i) {
          setTimeout(function () {
            r.classList.remove('is-pulse'); void r.offsetWidth; r.classList.add('is-pulse');
          }, 380 + i * 60);
        });
      });
    }, { threshold: .02, rootMargin: '0px 0px -10% 0px' });
    $$('main .sources').forEach(function (s) { io3.observe(s); });
  }

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // story 1 "chain": pinned 4-sheet stack (desktop only), the leader chain lengthens ring to ring
  var story = $('#how');
  if (story) {
    var stage = $('.story__stage', story), chain = $('.chain', story);
    var sheets = $$('.sh', story), links = $$('.chain li', story);
    var n = sheets.length;
    var mm = gsap.matchMedia();
    mm.add('(min-width: 1024px) and (min-height: 640px)', function () {
      story.classList.add('is-pinned');
      var paint = function (p) {
        chain.style.setProperty('--sw-p', p.toFixed(4));
        var pos = p * (n - 1) * 1.15;
        sheets.forEach(function (sh, i) {
          if (i === 0) { sh.style.transform = 'scale(' + (1 - Math.min(1, pos) * .03) + ')'; return; }
          var local = Math.max(0, Math.min(1, pos - (i - 1)));
          var e = 1 - Math.pow(1 - local, 3);
          var under = Math.max(0, Math.min(1, pos - i));
          sh.style.transform = 'translate3d(' + (i * 12) + 'px,' + ((1 - e) * 112 + i * 1.6) + '%,0) scale(' + (1 - under * .03) + ')';
        });
        links.forEach(function (li, i) { li.classList.toggle('is-on', pos >= i - .4); });
      };
      paint(0);
      var st = ScrollTrigger.create({
        trigger: stage, start: 'top top', end: 'bottom bottom', scrub: true,
        onUpdate: function (self) { paint(self.progress); }
      });
      return function () {
        st.kill();
        story.classList.remove('is-pinned');
        chain.style.removeProperty('--sw-p');
        sheets.forEach(function (sh) { sh.style.transform = ''; });
        links.forEach(function (li) { li.classList.remove('is-on'); });
      };
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); layoutTrace(); });
})();
