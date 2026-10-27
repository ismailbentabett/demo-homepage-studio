/* mason-C · Kilnside: maker's-mark stamps, the kiln map intro, the brick finder and the brick-life story. */
(function () {
  if (!window.SW) return;
  var root = document.documentElement;
  function moving() { return !SW.reduced && root.classList.contains('sw-motion'); }

  /* Signature: each maker's-mark stamp presses into the page as it enters. */
  SW.mod('makers-mark', function () {
    var stamps = SW.$$('[data-sw-signature="makers-mark"]');
    if (!moving() || !('IntersectionObserver' in window)) { stamps.forEach(function (s) { s.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.4 });
    stamps.forEach(function (s) { io.observe(s); });
  });

  /* Intro: neighborhoods fire from the river westward (≤ 1.1 s), then the hero stamp presses. */
  SW.mod('map-intro', function () {
    var hoods = SW.$$('.kiln-map .hood');
    if (!hoods.length) return;
    if (!moving()) { hoods.forEach(function (h) { h.classList.add('is-filled'); }); return; }
    hoods.sort(function (a, b) { return (+a.getAttribute('data-order')) - (+b.getAttribute('data-order')); });
    hoods.forEach(function (h, i) { setTimeout(function () { h.classList.add('is-filled'); }, 120 + i * 70); });
  });

  /* Tool: find your neighborhood's brick (select or tap the map). */
  var BRICKS = {
    cwe: { s: '#7C3C10', code: 'CWE', c: '#8B4513', name: 'Central West End', type: 'Pressed red brick with terra cotta trim', age: '1890s – 1915', watch: 'Terra cotta ornaments crack, and the joints behind them fail first.' },
    lafayette: { s: '#6B3410', code: 'LS', c: '#7C3C10', name: 'Lafayette Square', type: 'Dark red pressed brick', age: '1870s – 1900', watch: 'Ornate corbelled cornices; the parapet caps crack first.' },
    soulard: { s: '#8E4424', code: 'SO', c: '#B5623A', name: 'Soulard', type: 'Soft red brick, salmon brick inside the wall', age: '1850s – 1890s', watch: 'Old lime joints patched with hard cement, and spalling around the patch.' },
    hill: { s: '#8A3F1E', code: 'TH', c: '#A9532B', name: 'The Hill', type: 'Red common brick', age: '1900 – 1930', watch: 'Many walls were pointed before; check that the mortar color still matches.' },
    shaw: { s: '#7A5326', code: 'SH', c: '#BF8043', name: 'Shaw', type: 'Red and buff brick', age: '1890s – 1910', watch: 'Jack arches over windows; look for settling cracks above them.' },
    towergrove: { s: '#80592A', code: 'TG', c: '#CD8F4F', name: 'Tower Grove', type: 'Buff and red brick, mixed bond', age: '1890s – 1915', watch: 'Corbelled cornices on the flats, and stone or steel lintels.' },
    benton: { s: '#8A4A33', code: 'BP', c: '#C97B5A', name: 'Benton Park', type: 'Soft red brick with limestone trim', age: '1870s – 1890s', watch: 'Foundation joints below grade often need repointing.' },
    dutchtown: { s: '#7C3A1C', code: 'DT', c: '#9A4A25', name: 'Dutchtown', type: 'Red brick, some of it painted', age: '1900 – 1925', watch: 'Paint traps water; the soft brick under it may be spalled.' }
  };
  SW.mod('brick-finder', function () {
    var sel = SW.$('[data-brick-select]'), card = SW.$('[data-brick-card]');
    if (!sel || !card) return;
    var f = function (k) { return SW.$('[data-brick-' + k + ']', card); };
    var locs = SW.$$('[data-loc]', card);
    var root = document.documentElement;
    function show(key) {
      var b = BRICKS[key];
      if (!b) return;
      /* the chosen street's clay travels down the page: stamps, rail, ZIP answer, footer */
      root.style.setProperty('--hood', b.s);
      root.style.setProperty('--hood-c', b.c);
      SW.$$('[data-hood-name]').forEach(function (n) { n.textContent = b.name; });
      SW.$$('[data-hood]').forEach(function (a) { a.classList.toggle('is-picked', a.getAttribute('data-hood') === key); });
      card.classList.add('has-pick');
      f('code').textContent = b.code;
      f('name').textContent = b.name;
      f('type').textContent = b.type;
      f('age').textContent = b.age;
      f('watch').textContent = b.watch;
      locs.forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-loc') === key); });
      if (moving() && card.animate) {
        card.animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 700, easing: 'cubic-bezier(.23,1,.32,1)' });
        var st = SW.$('.stamp', card);
        if (st && st.animate) st.animate([{ transform: 'translateY(-8px) scale(1.08)' }, { transform: 'none' }], { duration: 420, delay: 260, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' });
      }
    }
    sel.addEventListener('change', function () { show(sel.value); });
    SW.$$('a[data-hood]').forEach(function (a) {
      a.addEventListener('click', function () {
        var k = a.getAttribute('data-hood');
        sel.value = k;
        show(k);
      });
    });
  });

  /* Tool outputs wipe in like the story frames when their text changes. */
  SW.mod('output-wipe', function () {
    if (!moving() || !('MutationObserver' in window)) return;
    SW.$$('.tool-output').forEach(function (o) {
      var last = o.textContent;
      new MutationObserver(function () {
        if (o.textContent === last) return;
        last = o.textContent;
        o.classList.remove('is-new'); void o.offsetWidth; o.classList.add('is-new');
      }).observe(o, { childList: true, characterData: true, subtree: true });
    });
  });

  /* Story: brick life. Desktop ≥ 900px: a sticky stage, each drawing wipes over the last as you scroll.
     Phone / tablet: stacked frames, each drawing unclips as it arrives. Reduced motion / no JS: static frames. */
  SW.mod('brick-life', function () {
    var sec = SW.$('#story'), track = SW.$('[data-story="brick-life"]');
    if (!sec || !track) return;
    var frames = SW.$$('.story-frame', track), figs = SW.$$('.story-frame__fig', track), rail = SW.$$('.story__rail li', track);
    if (!moving()) return;

    var io = new IntersectionObserver(function (entries) {
      /* Observe the frame, not the clipped figure: a fully clipped target never intersects. */
      entries.forEach(function (e) { if (e.isIntersecting) { var fg = SW.$('.story-frame__fig', e.target); if (fg) fg.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
    frames.forEach(function (f) { io.observe(f); });

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    var n = frames.length;
    function render(p) {
      var f = p * n, active = 0;
      figs.forEach(function (fig, i) {
        var fp = i === 0 ? 1 : Math.min(1, Math.max(0, (f - (i - 0.5)) / 0.5));
        fig.style.setProperty('--fp', fp.toFixed(3));
        if (fp >= 0.5) active = i;
      });
      frames.forEach(function (fr, i) { fr.classList.toggle('is-active', i === active); });
      rail.forEach(function (r, i) { r.classList.toggle('is-in', i <= active); r.classList.toggle('is-current', i === active); });
    }
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        sec.classList.add('is-staged');
        figs.forEach(function (f) { f.classList.add('is-in'); });
        render(0);
        var st = ScrollTrigger.create({ trigger: track, start: 'top top', end: 'bottom bottom', onUpdate: function (s) { render(s.progress); } });
        render(st.progress || 0);
        return function () {
          st.kill();
          sec.classList.remove('is-staged');
          figs.forEach(function (f) { f.style.removeProperty('--fp'); });
          frames.forEach(function (fr) { fr.classList.remove('is-active'); });
        };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
