/* pool-C: The Desert Pool Almanac. Signature = the 12-month thumb-index. */
(function () {
  if (typeof SW === 'undefined') return;
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');

  function nowMonth() {
    try {
      var tz = SW.fact('biz.timezone', 'timezone') || undefined;
      var m = new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: tz }).format(new Date());
      return parseInt(m, 10) || (new Date().getMonth() + 1);
    } catch (e) { return new Date().getMonth() + 1; }
  }
  var NOW = nowMonth();
  var lightRail = null;

  /* 1. The index: current month, then the month each spread covers lights as you read */
  SW.mod('almanac-index', function () {
    document.querySelectorAll('[data-month-now]').forEach(function (el) { el.textContent = MONTHS[NOW - 1] + '’s'; });
    document.querySelectorAll('.cover-index [data-m="' + NOW + '"], .footer__year [data-m="' + NOW + '"], .almanac-rail [data-m="' + NOW + '"]').forEach(function (el) { el.classList.add('is-now'); });
    var head = document.querySelectorAll('.toc__months i');
    if (head[NOW - 1]) head[NOW - 1].classList.add('is-now');

    var rail = document.querySelector('[data-rail]');
    if (!rail) return;
    var tabs = rail.querySelectorAll('[data-m]');
    var legend = rail.querySelector('[data-rail-legend]');
    function light(m) {
      tabs.forEach(function (t) { t.classList.toggle('is-on', +t.getAttribute('data-m') === m); });
      if (legend) legend.textContent = (m ? 'Reading: ' + MONTHS[m - 1] + '. ' : 'Reading: contents. ') + 'This month: ' + MONTHS[NOW - 1] + '.';
    }
    light(NOW);
    lightRail = light;
    if (!('IntersectionObserver' in window)) return;
    /* the rail steps aside while a full-bleed plate passes behind it */
    var bleeding = new Set();
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) bleeding.add(e.target); else bleeding.delete(e.target); });
      rail.classList.toggle('is-bleed', bleeding.size > 0);
    }, { rootMargin: '-22% 0px -22% 0px', threshold: 0 });
    document.querySelectorAll('[data-bleed]').forEach(function (b) { bio.observe(b); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var v = e.target.getAttribute('data-month');
        if (v === 'now') light(NOW);
        else if (v === '0') light(0);
        else light(parseInt(v, 10));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    document.querySelectorAll('main [data-month]').forEach(function (s) { io.observe(s); });

    var foot = document.querySelector('.footer');
    if (foot) {
      new IntersectionObserver(function (entries) {
        rail.classList.toggle('is-off', entries[0].isIntersecting);
      }, { threshold: 0.05 }).observe(foot);
    }
  });

  /* 2. The year turns as you read. One gesture, one 500ms ease-out: on each spread the folio
        numeral rolls in a digit slot from the previous spread's month, the 12-cell ruler fills
        cell by cell to the same month, and the rail tab slides out. Reduced motion / no JS: final states. */
  SW.mod('almanac-folio', function () {
    if (!motion || !('IntersectionObserver' in window)) return;
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        (e.target._folios || []).forEach(turn);
      });
    }, { rootMargin: '0px 0px -20% 0px', threshold: 0 });

    document.querySelectorAll('[data-folio][data-from]').forEach(function (el) {
      var to = parseInt(el.getAttribute('data-folio'), 10), from = parseInt(el.getAttribute('data-from'), 10);
      if (!(to > from)) return;
      var nums = [];
      for (var n = Math.max(from, 0); n <= to; n++) nums.push(n);
      el.innerHTML = '<span class="sr-only">' + pad(to) + '</span><span class="slot" aria-hidden="true"><span class="slot__reel">' + nums.map(function (n) { return '<span>' + pad(n) + '</span>'; }).join('') + '</span></span>';
      el._steps = nums.length - 1;
      var ruler = el.parentNode.querySelector('.folio__ruler');
      if (ruler) {
        var cells = [].slice.call(ruler.children);
        el._cells = cells;
        el._final = cells.map(function (c) { return c.className; });
        cells.forEach(function (c, i) {
          var m = i + 1;
          c.className = m < from ? 'is-past' : (m === from ? 'is-m' : '');
        });
      }
      el._from = from; el._to = to;
      var sec = el.closest('section') || el;
      if (!sec._folios) { sec._folios = []; io.observe(sec); }
      sec._folios.push(el);
    });

    function turn(el) {
      var reel = el.querySelector('.slot__reel');
      if (reel) requestAnimationFrame(function () { reel.style.transform = 'translateY(' + (-1.28 * el._steps) + 'em)'; });
      if (typeof lightRail === 'function') lightRail(el._to);
      var cells = el._cells;
      if (!cells) return;
      var span = el._to - el._from, each = 500 / span, k = 0;
      (function step() {
        k++;
        var m = el._from + k;
        cells.forEach(function (c, i) {
          var n = i + 1;
          c.className = n < m ? ('is-past' + (n > el._from ? ' is-turned' : '') + (n === el._from ? ' is-from' : '')) : (n === m ? 'is-m' : '');
        });
        if (k < span) setTimeout(step, each);
        else cells.forEach(function (c, i) { c.className = el._final[i]; });
      })();
    }
  });

  function stamp(card) {
    if (!motion || !card) return;
    card.classList.remove('is-stamped');
    void card.offsetWidth;
    card.classList.add('is-stamped');
  }

  /* 3. Calcium scale check (radios): an almanac entry with the method */
  SW.mod('scale-check', function () {
    var box = document.querySelector('[data-scale]');
    if (!box) return;
    var out = box.querySelector('[data-scale-out]');
    var cta = box.querySelector('[data-scale-cta]');
    var card = box.querySelector('[data-scale-entry]');
    var price = box.getAttribute('data-price') || '';
    function val(name) { var r = box.querySelector('input[name="' + name + '"]:checked'); return r ? r.value : ''; }
    function update() {
      var s = val('scale'), a = val('age'), msg, book = false;
      if (s === 'thin') msg = 'Thin film that wipes off: a hand scrub on a weekly visit takes it. No bead blasting needed.';
      else if (s === 'thick') { msg = 'A rough band this thick is a bead-blast job. The blue tile is under it. Most pools ' + price + ' (sample price).'; book = true; }
      else if (s === 'medium' && a === 'old') { msg = 'A ridge your fingernail catches, years deep: bead blasting. Most pools ' + price + ' (sample price).'; book = true; }
      else if (s === 'medium' && a === 'new') msg = 'A ridge your fingernail catches is calcium, and it comes off. Fresh scale like this often goes by hand. Bead blasting if it doesn’t.';
      else msg = 'Pick one answer in each row. The method shows here.';
      out.textContent = msg;
      if (cta) cta.hidden = !book;
      if (s && (a || s !== 'medium')) stamp(card);
    }
    box.querySelectorAll('input[type="radio"]').forEach(function (r) { r.addEventListener('change', update); });
  });

  /* 4. Bucket-test gauge: a verdict and a next step for every reading */
  SW.mod('leak-gauge', function () {
    var box = document.querySelector('[data-leak]');
    if (!box) return;
    var input = box.querySelector('[data-leak-input]');
    var read = box.querySelector('[data-leak-readout]');
    var out = box.querySelector('[data-leak-out]');
    var card = box.querySelector('[data-leak-entry]');
    var phone = box.getAttribute('data-phone') || '';
    var FR = { '0': '0', '0.25': '¼', '0.5': '½', '0.75': '¾', '1': '1', '1.25': '1¼', '1.5': '1½', '1.75': '1¾', '2': '2' };
    var timer;
    function update(quiet) {
      var v = parseFloat(input.value), f = FR[String(v)] || String(v), msg, level;
      if (v === 0) { msg = 'No drop you can measure. Nothing to fix.'; level = 'low'; }
      else if (v <= 0.25) { msg = 'A quarter inch a day is normal sun in a desert summer. No leak bill here.'; level = 'low'; }
      else if (v <= 0.5) { msg = 'Half an inch a day is the top of normal in July. Run the bucket test before anyone calls it a leak.'; level = 'mid'; }
      else if (v <= 1) { msg = 'More than the sun takes, even in July. Worth a dye test: book a leak check.'; level = 'high'; }
      else { msg = 'That much is not evaporation. Turn off the autofill and call ' + phone + '.'; level = 'high'; }
      read.textContent = f + ' in.';
      input.setAttribute('aria-valuetext', f + ' inch in 24 hours');
      card.setAttribute('data-level', level);
      clearTimeout(timer);
      timer = setTimeout(function () { out.textContent = msg; if (!quiet) stamp(card); }, quiet ? 0 : 140);
    }
    input.addEventListener('input', function () { update(false); });
    update(true);
  });

  /* 5. Cover intro (<= 1.2 s, h1 never hidden): the year turns to this month, the plate settles, cover lines slide in */
  if (motion) {
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof gsap === 'undefined') return;
      var plate = document.querySelector('.plate--cover img');
      if (plate) gsap.from(plate, { scale: 1.04, duration: 1.1, ease: 'power2.out', transformOrigin: '40% 70%' });
      /* Plate IV opens with the scroll: the monsoon frame widens from a narrow column to full bleed as July arrives */
      var jul = document.querySelector('[data-plate-scrub]');
      if (jul && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(jul, { clipPath: 'inset(0% 16% 0% 16%)' }, {
          clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
          scrollTrigger: { trigger: jul, start: 'top 90%', end: 'top 30%', scrub: 0.4 }
        });
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
      }
      var lines = document.querySelectorAll('.cover-lines li');
      if (lines.length) gsap.from(lines, { x: 28, opacity: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out', delay: 0.2 });
      var sweep = document.querySelectorAll('.almanac-rail [data-m], .cover-index [data-m]');
      var seq = [];
      sweep.forEach(function (el) { if (+el.getAttribute('data-m') < NOW && el.getClientRects().length) seq.push(el); });
      if (seq.length) {
        gsap.fromTo(seq, { backgroundColor: 'rgba(14,124,123,0)' }, {
          keyframes: [{ backgroundColor: 'rgba(14,124,123,.55)', duration: 0.12 }, { backgroundColor: 'rgba(14,124,123,0)', duration: 0.25 }],
          stagger: 0.06, delay: 0.1, clearProps: 'backgroundColor'
        });
      }
    });
  }
})();
