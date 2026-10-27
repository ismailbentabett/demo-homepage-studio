/* mason-B app.js: the mortar match that re-mortars the page, the lit elevation survey, the hero lay-in */
(function () {
  'use strict';
  if (!window.SW) return;
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');
  var hasGsap = motion && window.gsap;

  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    function f(c) { return Math.max(0, Math.min(255, Math.round(amt > 0 ? c + (255 - c) * amt : c * (1 + amt)))); }
    return '#' + ((1 << 24) | (f(r) << 16) | (f(g) << 8) | f(b)).toString(16).slice(1);
  }

  /* ── Mortar match: one choice recolours every live wall on the page ── */
  SW.mod('mortar-match', function () {
    var form = document.querySelector('[data-match-form]');
    var out = document.querySelector('[data-match-out]');
    var trowel = document.querySelector('.trowel');
    var minis = document.querySelectorAll('.panel-mini');
    if (!form) return;
    var depth = { concave: 0.22, struck: 0.34, flush: 0.06, raked: 0.5 };

    function label(name) {
      var el = form.querySelector('input[name="' + name + '"]:checked');
      if (!el) return '';
      var lab = el.closest('label');
      var sr = lab && lab.querySelector('.sr-only');
      return (sr || lab).textContent.trim();
    }
    function apply(animate) {
      var b = form.querySelector('input[name="brick"]:checked');
      var m = form.querySelector('input[name="mortar"]:checked');
      var p = form.querySelector('input[name="profile"]:checked');
      if (!b || !m || !p) return;
      root.style.setProperty('--m-brick', b.value);
      root.style.setProperty('--m-mortar', m.value);
      root.style.setProperty('--m-mortar-a', shade(m.value, 0.35));
      root.style.setProperty('--m-mortar-c', shade(m.value, -0.18));
      root.style.setProperty('--m-depth', String(depth[p.value] || 0.22));
      if (out) out.textContent = label('brick') + ' · ' + label('mortar') + ' · ' + label('profile') + ' joint';
      if (animate && hasGsap) {
        if (trowel) gsap.fromTo(trowel, { left: '0%', opacity: 1 }, { left: '100%', opacity: 0, duration: 0.7, ease: 'power2.inOut' });
        if (minis.length) gsap.fromTo(minis, { scale: 0.94 }, { scale: 1, duration: 0.45, ease: 'back.out(2)', stagger: 0.08, delay: 0.25 });
      }
    }
    form.addEventListener('change', function () { apply(true); });
    apply(false);
  });

  /* ── Elevation survey: buttons light a zone; on desktop scroll lights them in turn ── */
  SW.mod('elevation', function () {
    var story = document.querySelector('[data-elev]');
    if (!story) return;
    var reps = story.querySelectorAll('.rep');
    var zones = story.querySelectorAll('.zone');
    var current = -1;

    function setActive(i) {
      if (i === current) return;
      current = i;
      for (var k = 0; k < reps.length; k++) {
        var on = k === i;
        reps[k].classList.toggle('is-on', on);
        var btn = reps[k].querySelector('.rep-btn');
        if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      }
      var key = reps[i] && reps[i].getAttribute('data-zone');
      for (var z = 0; z < zones.length; z++) zones[z].classList.toggle('is-on', zones[z].getAttribute('data-zone') === key);
      if (hasGsap && key) {
        var hl = story.querySelector('.zone[data-zone="' + key + '"] .zone-hl');
        if (hl) gsap.fromTo(hl, { opacity: 0.2 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      }
    }
    current = 0; // markup starts with zone 1 on
    for (var z0 = 0; z0 < zones.length; z0++) zones[z0].classList.toggle('is-on', zones[z0].getAttribute('data-zone') === reps[0].getAttribute('data-zone'));

    Array.prototype.forEach.call(reps, function (rep, i) {
      var btn = rep.querySelector('.rep-btn');
      if (!btn) return;
      btn.addEventListener('click', function () {
        if (story.classList.contains('is-story') && window.ScrollTrigger) {
          // in story mode a click scrolls to that step so scroll and state agree
          var st = story._st;
          if (st) { window.scrollTo({ top: st.start + (st.end - st.start) * ((i + 0.5) / reps.length), behavior: 'smooth' }); return; }
        }
        setActive(i);
      });
    });

    if (!hasGsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        story.classList.add('is-story');
        var st = ScrollTrigger.create({
          trigger: story, start: 'top top', end: 'bottom bottom',
          onUpdate: function (self) { setActive(Math.min(reps.length - 1, Math.floor(self.progress * reps.length))); }
        });
        story._st = st;
        return function () { story.classList.remove('is-story'); story._st = null; st.kill(); };
      }
    });
  });

  /* ── Estimator sketch follows the job picked ── */
  SW.mod('est-sketch', function () {
    var sel = document.querySelector('[data-est-item]');
    var range = document.querySelector('[data-est-size]');
    var sketch = document.querySelector('[data-est-sketch]');
    var lvl = document.querySelector('[data-est-level]');
    if (!sel || !sketch) return;
    function sync() {
      sketch.setAttribute('data-idx', String(Math.max(0, sel.selectedIndex)));
      if (range) {
        var v = Number(range.value) / 100;
        sketch.style.setProperty('--est', v.toFixed(2));
        if (lvl) lvl.textContent = v < 0.34 ? 'Small job' : v < 0.67 ? 'Typical job' : 'Large job';
      }
    }
    sel.addEventListener('change', sync);
    if (range) range.addEventListener('input', sync);
    // the kit fills the select after load
    setTimeout(sync, 0);
    sync();
  });

  if (!hasGsap) return;

  /* ── Hero: the drawn test panels are laid course by course (the h1 is never delayed) ── */
  SW.mod('hero-lay', function () {
    var tiles = document.querySelectorAll('[data-hero] .tile:not(.tile--headline)');
    var shown = Array.prototype.filter.call(tiles, function (t) { return t.offsetParent !== null; });
    if (!shown.length) return;
    gsap.fromTo(shown, { clipPath: 'inset(100% 0 0 0)' }, {
      clipPath: 'inset(0% 0 0 0)', duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.1,
      clearProps: 'clipPath'
    });
  });

  /* ── Formstone: the cut corner opens as boxes are ticked (CSS reads --checked); stamp it ── */
  SW.mod('formstone-stamp', function () {
    var frame = document.querySelector('.formstone-frame');
    var list = document.querySelector('[data-checklist]');
    if (!frame || !list) return;
    list.addEventListener('change', function () {
      gsap.fromTo(frame, { scale: 0.985 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' });
    });
  });

  if (document.fonts && document.fonts.ready && window.ScrollTrigger) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
