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

  /* 1. The index: current month, then the month each spread covers lights as you read */
  SW.mod('almanac-index', function () {
    document.querySelectorAll('[data-month-now]').forEach(function (el) { el.textContent = MONTHS[NOW - 1] + '’s'; });
    document.querySelectorAll('.cover-index [data-m="' + NOW + '"], .footer__year [data-m="' + NOW + '"], .almanac-rail [data-m="' + NOW + '"]').forEach(function (el) { el.classList.add('is-now'); });
    var head = document.querySelectorAll('.toc__months i');
    if (head[NOW - 1]) head[NOW - 1].classList.add('is-now');

    var rail = document.querySelector('[data-rail]');
    if (!rail) return;
    var tabs = rail.querySelectorAll('[data-m]');
    function light(m) {
      tabs.forEach(function (t) { t.classList.toggle('is-on', +t.getAttribute('data-m') === m); });
    }
    light(NOW);
    if (!('IntersectionObserver' in window)) return;
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

  /* 2. Folio count-up: each spread's number counts on from the last month you saw */
  SW.mod('almanac-folio', function () {
    if (!motion || !('IntersectionObserver' in window)) return;
    var last = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target, to = parseInt(el.getAttribute('data-folio'), 10), from = Math.min(last, to);
        last = to;
        if (from === to) return;
        var t0 = null;
        function step(t) {
          if (!t0) t0 = t;
          var k = Math.min(1, (t - t0) / 600);
          var v = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          el.textContent = (v < 10 ? '0' : '') + v;
          if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.02 });
    document.querySelectorAll('[data-folio]').forEach(function (el) { io.observe(el); });
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
      var plate = document.querySelector('.plate--cover .plate__art');
      if (plate) gsap.from(plate, { scale: 1.03, duration: 1.1, ease: 'power2.out', transformOrigin: '50% 60%' });
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
