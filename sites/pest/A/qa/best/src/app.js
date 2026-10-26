/* pest-A app.js · Station Tag Rail: page 1 of the report marks itself, docks under the header,
   the flashlight finds the evidence, the rail draws, finding tags fill, the report completes. */
(function () {
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Tool: termites or flying ants, answered as a report line (works without motion) ---- */
  var idBox = document.querySelector('[data-identifier]');
  var idOut = document.querySelector('[data-identifier-result]');
  if (idBox && idOut) {
    var groups = ['waist', 'wings', 'antennae'];
    idBox.addEventListener('change', function () {
      var t = 0, n = 0;
      groups.forEach(function (g) {
        var c = idBox.querySelector('input[name="' + g + '"]:checked');
        if (!c) return;
        n++;
        if (c.value === 't') t++;
      });
      var area, note, tag, verdict;
      if (n < 3) {
        area = 'Waiting for ' + (3 - n) + ' more ' + (3 - n === 1 ? 'answer' : 'answers');
        note = 'Pick one in each column and we mark it like a report line.';
        tag = '<span class="finding-tag finding-tag--outline">' + n + ' of 3</span>';
        verdict = '';
      } else if (t >= 2) {
        area = 'Termite swarmer';
        note = t === 3 ? 'All three point to termites. Bag a few, note the window, book the inspection.' : 'Two of three point to termites. Treat it as a swarm until we have looked.';
        tag = '<span class="finding-tag finding-tag--seen">Seen</span>';
        verdict = 'termite';
      } else {
        area = 'Flying ant';
        note = 'Termites not seen in what you picked. Worth a look if they keep coming from one wall.';
        tag = '<span class="finding-tag finding-tag--not-seen">Not seen</span>';
        verdict = 'ant';
      }
      idOut.setAttribute('data-verdict', verdict);
      idOut.innerHTML = '<span class="station-badge">ID</span><span class="id-row__area"><strong>' + area + '</strong><span>' + note + '</span></span>' + tag;
    });
  }

  var root = document.documentElement;
  var hero = document.getElementById('hero');
  var reduced = (typeof SW !== 'undefined' && SW.reduced) || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function fillAll() {
    if (hero) hero.classList.add('is-marked');
    $$('[data-finding]').forEach(function (t) { t.classList.add('is-filled'); });
    $$('[data-station], .report-row').forEach(function (s) { s.classList.add('is-on'); });
    $$('[data-report]').forEach(function (c) { c.classList.add('is-done'); });
  }
  if (reduced || !root.classList.contains('sw-motion') || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    fillAll();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ---- Flashlight: one beam, three verbs. Switches on, follows the pointer, finds the evidence ---- */
  function beam(el, v) {
    if (v.x != null) el.style.setProperty('--tx', v.x.toFixed(1) + '%');
    if (v.y != null) el.style.setProperty('--ty', v.y.toFixed(1) + '%');
    if (v.r != null) el.style.setProperty('--tr', v.r.toFixed(1) + '%');
  }
  var heroTorch = document.querySelector('[data-flashlight] .torch');
  if (heroTorch) {
    var hb = { x: 18, y: 40, r: 0 };
    beam(heroTorch, hb);
    /* Intro (0.9 s, the h1 is already readable): the beam clicks on and swings onto the pier */
    gsap.to(hb, { r: 24, x: 34, y: 44, duration: 0.9, ease: 'power2.out', onUpdate: function () { beam(heroTorch, hb); } });
    var host = heroTorch.parentNode;
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var qx = gsap.quickTo(hb, 'x', { duration: 0.5, ease: 'power3.out', onUpdate: function () { beam(heroTorch, hb); } });
      var qy = gsap.quickTo(hb, 'y', { duration: 0.5, ease: 'power3.out', onUpdate: function () { beam(heroTorch, hb); } });
      host.addEventListener('pointermove', function (e) {
        var b = host.getBoundingClientRect();
        qx(Math.max(8, Math.min(92, (e.clientX - b.left) / b.width * 100)));
        qy(Math.max(8, Math.min(92, (e.clientY - b.top) / b.height * 100)));
      });
    }
    /* Scroll: the beam climbs from the pier to the sill and joists as the cover page leaves */
    ScrollTrigger.create({
      trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.4,
      onUpdate: function (st) { hb.y = 44 - st.progress * 22; hb.r = 24 + st.progress * 14; beam(heroTorch, hb); }
    });
  }
  /* Fig. 02: the frame is dark; the beam lands on the mud tube, then the light comes up on the wall */
  $$('[data-torch]').forEach(function (w) {
    var t = w.querySelector('.torch');
    if (!t) return;
    var o = { x: 46, y: 58, r: 9 };
    w.classList.add('is-dark');
    beam(t, o);
    gsap.to(o, { r: 140, y: 50, ease: 'none', onUpdate: function () { beam(t, o); },
      scrollTrigger: { trigger: w, start: 'top 80%', end: 'center 35%', scrub: 0.5 } });
  });

  /* ---- Page 1: the six mark slots are ticked in turn, then 01 resolves to Not seen (≤ 1.1 s) ---- */
  var sheet = document.querySelector('[data-clipboard]');
  var rowsH = sheet ? $$('.clipboard__row', sheet) : [];
  if (rowsH.length) {
    var tl = gsap.timeline({ delay: 0.15, onComplete: function () { hero.classList.add('is-marked'); } });
    rowsH.forEach(function (r, i) {
      tl.add(function () { r.classList.add('is-scan'); }, i * 0.12);
      tl.add(function () { r.classList.remove('is-scan'); }, i * 0.12 + 0.22);
    });
    tl.add(function () { hero.classList.add('is-marked'); }, rowsH.length * 0.12 + 0.12);
  }

  /* ---- Dock: when page 1 scrolls away, its mark strip docks under the header and keeps marking ---- */
  var header = document.querySelector('[data-header]');
  var dock = null;
  var mm = window.matchMedia('(min-width: 900px)');
  if (sheet && header) {
    dock = document.createElement('div');
    dock.className = 'dock';
    dock.setAttribute('aria-hidden', 'true');
    var inner = '<div class="container dock__inner"><span class="dock__label">Your report</span><ol class="dock__list">';
    rowsH.forEach(function (r) {
      var no = r.getAttribute('data-mark');
      var fin = r.querySelector('.clipboard__mark').getAttribute('data-final');
      inner += '<li class="dock__item" data-dock="' + no + '"><span class="station-badge">' + no + '</span><span class="dock__mark" data-final="' + fin + '"></span></li>';
    });
    dock.innerHTML = inner + '</ol></div>';
    header.appendChild(dock);
    var docked = false;
    function setDock(on) {
      if (on === docked || !mm.matches) return;
      docked = on;
      if (on) {
        var a = sheet.getBoundingClientRect(), b = dock.getBoundingClientRect();
        dock.classList.add('is-docked');
        gsap.fromTo(dock, { y: Math.min(160, a.top - b.top), opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', overwrite: true });
        gsap.to(sheet, { opacity: 0.35, duration: 0.3, overwrite: true });
      } else {
        gsap.to(dock, { y: -12, opacity: 0, duration: 0.25, ease: 'power2.in', overwrite: true, onComplete: function () { if (!docked) dock.classList.remove('is-docked'); } });
        gsap.to(sheet, { opacity: 1, duration: 0.3, overwrite: true });
      }
    }
    ScrollTrigger.create({
      trigger: sheet, start: 'bottom top+=72', endTrigger: '#contact', end: 'top center',
      onEnter: function () { setDock(true); }, onLeave: function () { setDock(false); },
      onEnterBack: function () { setDock(true); }, onLeaveBack: function () { setDock(false); }
    });
  }
  function markDock(nos) {
    if (!dock) return;
    nos.forEach(function (no) {
      var it = dock.querySelector('[data-dock="' + no + '"]');
      if (it && !it.classList.contains('is-filled')) {
        it.classList.add('is-filled');
        var m = it.querySelector('.dock__mark');
        m.textContent = m.getAttribute('data-final');
      }
    });
  }
  function currentDock(nos, on) {
    if (!dock) return;
    nos.forEach(function (no) {
      var it = dock.querySelector('[data-dock="' + no + '"]');
      if (it) it.classList.toggle('is-current', on);
    });
  }
  markDock(['01']);

  /* ---- Stations: rail draws with scroll (--sw-p), badge lights, tag fills, dock marks ---- */
  $$('[data-station]').forEach(function (section) {
    var nos = (section.getAttribute('data-marks') || section.getAttribute('data-station')).split(' ');
    ScrollTrigger.create({ trigger: section, start: 'top center', end: 'bottom center', onToggle: function (st) { currentDock(nos, st.isActive); } });
    if (section.id === 'report') {
      ScrollTrigger.create({ trigger: section, start: 'top 55%', once: true, onEnter: function () { markDock(nos); } });
      return;
    }
    var line = section.querySelector('.station-rail__line');
    var tags = $$('[data-finding]', section);
    function light() {
      section.classList.add('is-on');
      markDock(nos);
      tags.forEach(function (t, i) { setTimeout(function () { t.classList.add('is-filled'); }, 180 + i * 220); });
    }
    ScrollTrigger.create({ trigger: section, start: 'top 65%', once: true, onEnter: light });
    if (line) {
      gsap.fromTo(line, { '--sw-p': 0 }, {
        '--sw-p': 1, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 70%', end: 'bottom 70%', scrub: 0.4 }
      });
    }
  });

  /* ---- 02b diagram: the mud tube climbs from soil to sill as you scroll ---- */
  var tube = document.querySelector('.diagram__tube');
  if (tube && tube.getTotalLength) {
    var L = tube.getTotalLength();
    tube.style.strokeDasharray = L;
    gsap.fromTo(tube, { strokeDashoffset: L }, { strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: tube.closest('figure'), start: 'top 85%', end: 'center 45%', scrub: 0.4 } });
  }

  /* ---- Report: the sheet fills station by station ---- */
  var report = document.getElementById('report');
  var card = report && report.querySelector('[data-report]');
  if (card) {
    var rows = $$('.report-row', card);
    function setRows(p) {
      card.style.setProperty('--sw-p', p.toFixed(3));
      rows.forEach(function (r, i) {
        var on = p >= (i + 0.5) / (rows.length + 0.5);
        r.classList.toggle('is-on', on);
        var tag = r.querySelector('[data-finding]');
        if (tag) tag.classList.toggle('is-filled', on);
      });
      card.classList.toggle('is-done', p >= 0.98);
    }
    setRows(0);
    ScrollTrigger.create({
      trigger: card, start: 'top 70%', once: true,
      onEnter: function () {
        var o = { p: 0 };
        gsap.to(o, { p: 1, duration: 1.6, ease: 'power1.inOut', onUpdate: function () { setRows(o.p); } });
      }
    });
  }

  /* Anything already scrolled past (deep links) is filled */
  ScrollTrigger.addEventListener('refresh', function () {
    $$('[data-station]').forEach(function (s) {
      if (s.getBoundingClientRect().bottom < 0) {
        s.classList.add('is-on');
        $$('[data-finding]', s).forEach(function (t) { t.classList.add('is-filled'); });
        markDock((s.getAttribute('data-marks') || s.getAttribute('data-station')).split(' '));
      }
    });
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
