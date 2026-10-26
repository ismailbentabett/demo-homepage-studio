/* pest-A app.js · Station Tag Rail: the rail draws, badges light, finding tags fill, the report completes. */
(function () {
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Tool: termites or flying ants (works without motion) ---- */
  var idBox = document.querySelector('[data-identifier]');
  var idOut = document.querySelector('[data-identifier-result]');
  if (idBox && idOut) {
    var groups = ['waist', 'wings', 'antennae'];
    idBox.addEventListener('change', function () {
      var t = 0, a = 0, n = 0;
      groups.forEach(function (g) {
        var c = idBox.querySelector('input[name="' + g + '"]:checked');
        if (!c) return;
        n++;
        if (c.value === 't') t++; else a++;
      });
      var tag, text, verdict;
      if (n < 3) {
        tag = '<span class="finding-tag finding-tag--outline">' + n + ' of 3</span>';
        text = 'Pick one answer in each column.';
        verdict = '';
      } else if (t >= 2) {
        tag = '<span class="finding-tag finding-tag--seen">Termite</span>';
        text = t === 3 ? 'All three point to termite swarmers. Bag a few, note where you found them, and book an inspection.' : 'Two of three point to termites. Treat it as a swarm until we have looked.';
        verdict = 'termite';
      } else {
        tag = '<span class="finding-tag finding-tag--not-seen">Flying ant</span>';
        text = 'Most likely a flying ant. Worth a look if they keep coming from the same wall.';
        verdict = 'ant';
      }
      idOut.setAttribute('data-verdict', verdict);
      idOut.innerHTML = tag + text;
    });
  }

  var root = document.documentElement;
  var reduced = (typeof SW !== 'undefined' && SW.reduced) || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function fillAll() {
    $$('[data-finding]').forEach(function (t) { t.classList.add('is-filled'); });
    $$('[data-station], .report-row').forEach(function (s) { s.classList.add('is-on'); });
    $$('[data-report]').forEach(function (c) { c.classList.add('is-done'); });
  }
  if (reduced || !root.classList.contains('sw-motion') || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    fillAll();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ---- Intro: flashlight cone sweeps the hero photo (1.1 s, never touches the h1) ---- */
  var torchHost = document.querySelector('[data-flashlight]');
  if (torchHost) {
    var torch = document.createElement('div');
    torch.className = 'hero__torch';
    torch.setAttribute('aria-hidden', 'true');
    torchHost.appendChild(torch);
    var fx = { v: -20 };
    gsap.timeline({ onComplete: function () { torch.remove(); } })
      .to(fx, { v: 120, duration: 0.9, ease: 'power2.inOut', onUpdate: function () { torch.style.setProperty('--fx', fx.v + '%'); } })
      .to(torch, { opacity: 0, duration: 0.2, ease: 'none' }, 0.85);
  }

  /* ---- Stations: rail draws with scroll (--sw-p), badge lights, tag fills ---- */
  $$('[data-station]').forEach(function (section) {
    if (section.matches('[data-report]') || section.id === 'report') return;
    var line = section.querySelector('.station-rail__line');
    var tags = $$('[data-finding]', section);
    function light() {
      section.classList.add('is-on');
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
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        var fits = report.offsetHeight <= window.innerHeight;
        var st = ScrollTrigger.create({
          trigger: report,
          start: fits ? 'top top' : 'top 60%',
          end: fits ? '+=' + Math.round(window.innerHeight * 0.55 * 2) : 'bottom 80%',
          pin: fits,
          scrub: 0.3,
          onUpdate: function (self) { setRows(self.progress); }
        });
        return function () { st.kill(); };
      },
      '(max-width: 899px)': function () {
        var st = ScrollTrigger.create({
          trigger: card, start: 'top 75%', end: 'bottom 55%', scrub: 0.3,
          onUpdate: function (self) { setRows(self.progress); },
          onLeave: function () { setRows(1); }
        });
        return function () { st.kill(); };
      }
    });
  }

  /* Anything already scrolled past (deep links) is filled */
  ScrollTrigger.addEventListener('refresh', function () {
    $$('[data-station]').forEach(function (s) {
      if (s.getBoundingClientRect().bottom < 0) { s.classList.add('is-on'); $$('[data-finding]', s).forEach(function (t) { t.classList.add('is-filled'); }); }
    });
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
