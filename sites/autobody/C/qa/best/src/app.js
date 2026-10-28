/* autobody-C · Saltline: the tools (always) + the boot stripe moment and the seasons story (motion only) */
(function () {
  var SW = window.SW;
  if (!SW) return;
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- hull calculator (works with reduced motion) ---------- */
  (function hull() {
    var tool = $('[data-hull]');
    if (!tool) return;
    var range = $('[data-hull-range]', tool);
    var num = $('[data-hull-num]', tool);
    var out = $('[data-hull-out]', tool);
    var go = $('[data-hull-go]', tool);
    var fig = $('.hull__fig');
    var label = $('[data-hull-label]');
    var gauge = $('.gauge', tool);
    var ticket = $('[data-hull-ticket]');
    var prices = SW.fact('proof.prices') || [];
    var p = prices[0] || {};
    var services = SW.fact('services') || [];
    var tag = (SW.fact('proof.label') || 'Sample') + ' pricing';
    var digits = function (s) { return parseInt(String(s || '').replace(/[^0-9]/g, ''), 10) || 0; };
    var lo = digits(p.from), hi = digits(p.to);
    var cur = '$';
    var money = function (n) { return cur + Math.round(n).toLocaleString('en-US'); };
    var levels = { light: 0.15, medium: 0.5, heavy: 0.85 };
    var lenNow = 28, levelNow = 'medium';

    function render() {
      var len = Math.min(60, Math.max(16, parseInt(num.value, 10) || 28));
      lenNow = len;
      var ox = $('[data-hull-ox]:checked', tool);
      levelNow = ox ? ox.value : 'medium';
      if (fig) { fig.style.setProperty('--len-s', (len / 60 * 0.96).toFixed(3)); fig.style.setProperty('--rule-s', (len / 60).toFixed(3)); }
      if (label) label.textContent = String(len);
      if (gauge) gauge.style.setProperty('--g', levels[levelNow]);
      if (ticket) ticket.textContent = len + ' ft hull, ' + levelNow + ' oxidation.';
      if (!lo || !hi) return;
      out.innerHTML = '';
      var big = document.createElement('span'); big.className = 'hull__big';
      big.textContent = money(lo * len) + ' to ' + money(hi * len);
      var unit = document.createElement('span'); unit.className = 'hull__unit';
      unit.textContent = 'for a ' + len + ' ft hull, at ' + p.from + ' to ' + p.to + ' ' + (p.unit || '');
      var s = document.createElement('span'); s.className = 'sample-tag'; s.textContent = tag;
      out.appendChild(big); out.appendChild(document.createTextNode(' '));
      out.appendChild(unit); out.appendChild(s);
    }
    range.addEventListener('input', function () { num.value = range.value; render(); });
    num.addEventListener('input', function () {
      var v = parseInt(num.value, 10);
      if (v >= 16 && v <= 60) { range.value = v; render(); }
    });
    num.addEventListener('change', function () {
      var v = Math.min(60, Math.max(16, parseInt(num.value, 10) || 28));
      num.value = v; range.value = v; render();
    });
    $$('[data-hull-ox]', tool).forEach(function (r) { r.addEventListener('change', render); });
    if (go) go.addEventListener('click', function () {
      var svc = services[0] && services[0].name;
      setTimeout(function () {
        if (SW.prefillForm) SW.prefillForm({ service: svc, vehicle: 'Boat', what: lenNow + ' ft boat', details: lenNow + ' ft hull, ' + levelNow + ' oxidation.' }, { scroll: false });
      }, 0);
    });
    render();
  })();

  /* ---------- restoration planner (works with reduced motion) ---------- */
  (function planner() {
    var form = $('[data-planner]');
    var wrap = $('.planner');
    if (!form || !wrap) return;
    var plans = $$('[data-plan]', wrap);
    function val(n) { var r = $('input[name="' + n + '"]:checked', form); return r ? r.value : ''; }
    function pick() {
      var what = val('pl-what'), where = val('pl-where'), see = val('pl-see'), goal = val('pl-goal');
      var id;
      if (see === 'lights' && what === 'car') id = 'lights';
      else if (what === 'boat') id = goal === 'sell' ? 'boat-wax' : 'boat-coat';
      else if (goal === 'sell') id = 'car-correct';
      else id = where === 'out' ? 'car-coat' : 'car-correct';
      plans.forEach(function (p) { p.classList.toggle('is-match', p.getAttribute('data-plan') === id); });
    }
    wrap.classList.add('is-live');
    form.addEventListener('change', pick);
    pick();
  })();

  /* ---------- motion: the boot stripe ---------- */
  if (!(!SW.reduced && root.classList.contains('sw-motion'))) return;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  if (!gsap || !ST) return;
  gsap.registerPlugin(ST);
  root.classList.add('sw-draw');

  // intro (≤ 1.2 s): the hero stripe draws from the bow, the polish line wipes the chalk aft, one sheen pass
  var heroStripe = $('.hero__stripe');
  var intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (heroStripe) intro.fromTo(heroStripe, { '--sw-p': 0 }, { '--sw-p': 1, duration: 0.9 }, 0.1);
  intro.fromTo('.hull-art .veil-move', { attr: { transform: 'translate(150 0)' } }, { attr: { transform: 'translate(470 0)' }, duration: 1.05, ease: 'power2.inOut' }, 0.1);
  intro.fromTo('.hull-art .sheen', { attr: { x: -260 }, opacity: 0 }, { attr: { x: 760 }, opacity: 1, duration: 0.9, ease: 'power1.inOut' }, 0.25)
       .to('.hull-art .sheen', { opacity: 0, duration: 0.25 }, 0.95);

  // every other stripe draws as it crosses 85% → 55% of the viewport
  $$('.stripe[data-draw]').forEach(function (s) {
    if (s === heroStripe) return;
    gsap.fromTo(s, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none', scrollTrigger: { trigger: s, start: 'top 85%', end: 'top 55%', scrub: 0.4 } });
  });

  // test spot: the circle opens up while the pad wipes the chalk back off the clear coat (gloss over chalk, on scroll)
  var spot = $('.testspot .spot');
  if (spot) gsap.fromTo(spot, { scale: 0.86, svgOrigin: '1150 320' }, { scale: 1.04, svgOrigin: '1150 320', ease: 'none', scrollTrigger: { trigger: '.testspot', start: 'top 90%', end: 'bottom 30%', scrub: 0.6 } });
  var wipes = $$('.testspot .wipe-move');
  var spec = $('.testspot .spec');
  if (wipes.length) {
    var w = { x: 900 };
    var paint = function () {
      wipes.forEach(function (g) { g.setAttribute('transform', 'translate(' + w.x.toFixed(1) + ' 0) rotate(14 0 320)'); });
      if (spec) spec.setAttribute('transform', 'translate(' + ((w.x - 1120) * 0.12).toFixed(1) + ' 0)');
    };
    paint();
    gsap.to(w, { x: 1352, ease: 'none', onUpdate: paint, scrollTrigger: { trigger: '.testspot', start: 'top 75%', end: 'center 40%', scrub: 0.8 } });
  }

  // seasons: pinned (sticky) story on ≥ 640px only; the bow rides the stripe Nov → Oct
  var seasons = $('#seasons');
  var mm = ST.matchMedia ? ST.matchMedia.bind(ST) : function (o) { var m = gsap.matchMedia(); Object.keys(o).forEach(function (k) { m.add(k, o[k]); }); };
  if (seasons) mm({
    '(min-width: 640px)': function () {
      var track = $('.seasons__track', seasons);
      var vp = $('.seasons__viewport', seasons);
      var cards = $$('.season', seasons);
      var months = $$('.rail__months li', seasons);
      var stage = $('.seasons__stage', seasons);
      var tints = cards.map(function (c) { return c.style.getPropertyValue('--tint') || '#E4DFD2'; });
      seasons.classList.add('is-story');
      var last = -1;
      function setActive(i) {
        if (i === last) return; last = i;
        cards.forEach(function (c, j) { c.classList.toggle('is-active', j === i); });
        months.forEach(function (m) { m.classList.toggle('is-on', +m.getAttribute('data-s') === i); });
        stage.style.setProperty('--stage-bg', tints[i]);
      }
      setActive(0);
      var tw = gsap.to(track, {
        x: function () { return -Math.max(0, track.scrollWidth - vp.clientWidth); },
        ease: 'none',
        scrollTrigger: {
          trigger: seasons, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
          onUpdate: function (self) {
            seasons.style.setProperty('--rp', self.progress.toFixed(4));
            setActive(Math.min(cards.length - 1, Math.floor(self.progress * cards.length * 0.999)));
          }
        }
      });
      ST.refresh();
      return function () {
        tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill();
        gsap.set(track, { clearProps: 'transform' });
        seasons.classList.remove('is-story');
        stage.style.removeProperty('--stage-bg');
        cards.forEach(function (c) { c.classList.remove('is-active'); });
      };
    }
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
})();
