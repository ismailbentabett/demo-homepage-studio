/* roofer-C · Month Ring Almanac.
   One motion idea: the year turns as you scroll. A single month value m drives the hero dial,
   the header pill (a miniature of the same dial) and the needle that sweeps the almanac table. */
(function () {
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var SEASON = ['Ice', 'Ice', 'Wind', 'Hail', 'Hail', 'Hail', 'Heat', 'Heat', 'Build', 'Build', 'Ice', 'Ice'];
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var BAND = ['season-nov-feb', 'season-nov-feb', 'season-mar', 'season-apr-jun', 'season-apr-jun', 'season-apr-jun', 'season-jul-aug', 'season-jul-aug', 'season-sep-oct', 'season-sep-oct', 'season-nov-feb', 'season-nov-feb'];

  function init() {
    /* ---------- the month in Oklahoma */
    var now = new Date().getMonth();
    try { now = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', month: 'numeric' }).format(new Date())) - 1; } catch (e) {}
    var nowLabel = MON[now] + ' · ' + SEASON[now];
    var m0 = now + 0.5;

    var hero = $('#hero');
    if (hero) hero.setAttribute('data-season-label', 'Now · ' + nowLabel);
    var capLabel = $('[data-now-label]');
    var capRing = $('[data-now-ring]');
    if (capLabel) capLabel.textContent = 'Now: ' + FULL[now] + ', ' + SEASON[now].toLowerCase() + ' season in the metro';
    if (capRing) { capRing.style.setProperty('--a', now); capRing.style.setProperty('--b', now + 1); }

    /* ---------- hero dial: the ring turns, the needle at twelve o'clock stays put, labels stay upright */
    var ringG = $('[data-dial-ring]');
    var dot = $('[data-dial-now]');
    var labels = ringG ? $$('.mo text, .sn text', ringG).map(function (t) {
      return { el: t, x: t.getAttribute('x'), y: t.getAttribute('y') };
    }) : [];
    if (dot && ringG) {
      dot.setAttribute('transform', 'rotate(' + (now * 30 + 15) + ' 300 300)');
      dot.classList.add('is-set');
      ringG.appendChild(dot);
      var seg = $('.seg[data-m="' + now + '"]');
      if (seg) seg.classList.add('is-now');
    }
    var lastDial = null;
    function setDial(m) {
      if (!ringG) return;
      var deg = -m * 30;
      if (lastDial !== null && Math.abs(deg - lastDial) < 0.05) return;
      lastDial = deg;
      ringG.setAttribute('transform', 'rotate(' + deg.toFixed(2) + ' 300 300)');
      for (var i = 0; i < labels.length; i++) {
        labels[i].el.setAttribute('transform', 'rotate(' + (-deg).toFixed(2) + ' ' + labels[i].x + ' ' + labels[i].y + ')');
      }
    }

    /* ---------- header pill: the same dial in miniature */
    var pill = $('[data-season-pill]');
    var pillDial = $('[data-season-ring]');
    var pillLabel = $('[data-season-label]', pill || document);
    var pillNow = $('[data-pill-now]', pill || document);
    if (pill) pill.setAttribute('href', '#' + BAND[now]);
    var lastText = '';
    function setPill(m, text, isNow) {
      if (pillNow) pillNow.hidden = !isNow;
      if (pillDial) pillDial.style.setProperty('--m', m.toFixed(3));
      if (pillLabel && text !== lastText) { pillLabel.textContent = text; lastText = text; }
    }
    function labelFor(m) {
      var k = ((Math.floor(m) % 12) + 12) % 12;
      return MON[k] + ' · ' + SEASON[k];
    }

    /* ---------- almanac: mark the current month column (works with reduced motion too) */
    var alm = $('[data-alm]');
    if (alm) {
      var heads = $$('thead th', alm);
      if (heads[now + 1]) heads[now + 1].classList.add('is-now');
      $$('tbody tr', alm).forEach(function (tr) {
        var cells = $$('td[data-m]', tr);
        if (cells[now]) cells[now].classList.add('is-now');
      });
    }

    /* ---------- verdict count + printable check */
    var sheet = $('[data-checklist]');
    var vn = $('[data-verdict-n]');
    if (sheet && vn) {
      var count = function () { vn.textContent = String($$('input[type="checkbox"]:checked', sheet).length); };
      sheet.addEventListener('change', count);
      count();
    }
    var printBtn = $('[data-print-check]');
    if (printBtn) {
      printBtn.addEventListener('click', function () {
        root.classList.add('print-check');
        window.print();
      });
      window.addEventListener('afterprint', function () { root.classList.remove('print-check'); });
    }

    setDial(m0);
    setPill(m0, nowLabel, true);

    var reduced = (window.SW && SW.reduced) || !root.classList.contains('sw-motion');
    var hasGsap = window.gsap && window.ScrollTrigger;

    /* ---------- reduced motion (or no GSAP): the pill jumps season by season, nothing turns on its own */
    if (reduced || !hasGsap) {
      var bands = $$('[data-season]');
      if (pill && bands.length && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            var v = e.target.getAttribute('data-season').split(' ').map(Number);
            var m = e.target.id === 'hero' ? m0 : (v[0] > 0 ? v[1] + (v[2] - v[1] + v[0]) / 2 : (v[1] + v[2]) / 2);
            var lab = e.target.getAttribute('data-season-label').replace(/^Now · /, '');
            setPill(m, lab, e.target.id === 'hero');
          });
        }, { rootMargin: '-45% 0px -50% 0px' });
        bands.forEach(function (b) { io.observe(b); });
      }
      return;
    }

    var gsap = window.gsap;
    var ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);

    /* ---------- intro (≤ 1.2 s, the h1 is never touched): a storm cell crosses the metro and the towns light */
    var storm = $('[data-storm]');
    var towns = $$('[data-town]');
    var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    if (storm) tl.fromTo(storm, { x: -150, y: 110, opacity: 0 }, { x: 110, y: -80, opacity: 0.7, duration: 1.1, ease: 'power1.inOut' }, 0);
    towns.forEach(function (t, i) { tl.call(function () { t.classList.add('is-lit'); }, null, 0.25 + i * 0.11); });
    // the dial winds from January to today while the storm crosses
    var wind = { m: 0 };
    var winding = true;
    tl.to(wind, { m: m0, duration: 1.1, ease: 'power3.out', onUpdate: function () { if (winding) { setDial(wind.m); setPill(wind.m, labelFor(wind.m)); } }, onComplete: function () { winding = false; update(); } }, 0);

    /* ---------- the scroll engine: page position → month */
    var anchors = [];
    var tableSpan = null;
    function top(el) { return el.getBoundingClientRect().top + window.scrollY; }
    function measure() {
      var vh = window.innerHeight;
      var a = [[0, m0]];
      var M = 2 + 12 * Math.ceil((m0 - 2) / 12); // the next March at or after today
      if (M - m0 < 0.5) M += 12;
      function add(id, from, to, startAt, endAt) {
        var el = document.getElementById(id);
        if (!el) return;
        var t = top(el);
        a.push([t - vh * (startAt == null ? 0.5 : startAt), from]);
        a.push([t + el.offsetHeight - vh * (endAt == null ? 0.5 : endAt), to]);
      }
      add('season-mar', M, M + 1);
      add('season-apr-jun', M + 1, M + 4);
      add('season-jul-aug', M + 4, M + 6);
      add('season-sep-oct', M + 6, M + 8);
      add('season-nov-feb', M + 8, M + 12);
      var J = M + 22; // the January after
      var frame = alm ? $('.alm__frame', alm) : null;
      if (frame) {
        var ft = top(frame);
        a.push([ft - vh * 0.75, J]);
        a.push([ft + frame.offsetHeight - vh * 0.4, J + 12]);
        tableSpan = [J, J + 12];
      }
      var contact = document.getElementById('contact');
      if (contact) a.push([top(contact) - vh * 0.5, J + 12 + m0]);
      // keep it monotonic
      for (var i = 1; i < a.length; i++) {
        if (a[i][0] <= a[i - 1][0]) a[i][0] = a[i - 1][0] + 1;
        if (a[i][1] < a[i - 1][1]) a[i][1] = a[i - 1][1];
      }
      anchors = a;
      update();
    }
    function monthAt(y) {
      if (!anchors.length) return m0;
      if (y <= anchors[0][0]) return anchors[0][1];
      for (var i = 1; i < anchors.length; i++) {
        if (y < anchors[i][0]) {
          var p = (y - anchors[i - 1][0]) / (anchors[i][0] - anchors[i - 1][0]);
          return anchors[i - 1][1] + p * (anchors[i][1] - anchors[i - 1][1]);
        }
      }
      return anchors[anchors.length - 1][1];
    }
    var needleOn = false;
    function update() {
      if (winding) return;
      var m = monthAt(window.scrollY);
      var last = anchors.length ? anchors[anchors.length - 1][1] : m0;
      var atNow = Math.abs(m - m0) < 0.02 || Math.abs(m - last) < 0.02;
      if (window.scrollY < window.innerHeight * 1.2) setDial(m);
      setPill(m, atNow ? nowLabel : labelFor(m), atNow);
      if (alm && tableSpan) {
        var on = m > tableSpan[0] + 0.02 && m < tableSpan[1] - 0.02;
        if (on) alm.style.setProperty('--needle', (m - tableSpan[0]).toFixed(3));
        if (on !== needleOn) { alm.classList.toggle('is-turning', on); needleOn = on; }
      }
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    ST.addEventListener('refresh', measure);

    /* ---------- each band's month ring winds into place as the band arrives */
    $$('.season .season-tag .ring').forEach(function (r) {
      gsap.fromTo(r, { rotation: -150 }, {
        rotation: 0, ease: 'none',
        scrollTrigger: { trigger: r.closest('.season'), start: 'top 90%', end: 'top 35%', scrub: 0.5 }
      });
    });

    /* ---------- break: the sky drifts, the sun settles behind the roofline */
    var brk = $('[data-break]');
    if (brk) {
      var photo = $('.break__photo', brk);
      if (photo) gsap.fromTo(photo, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: brk, start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.fromTo($$('.break__sun, .break__rays', brk), { y: -70 }, { y: 30, ease: 'none', scrollTrigger: { trigger: brk, start: 'top bottom', end: 'bottom top', scrub: true } });
    }

    /* ---------- build day: on desktop the band pins and the sun crosses the sky; each step lights in turn */
    var build = $('#season-sep-oct');
    var pinEl = $('[data-build]');
    var sun = $('[data-sun]');
    var sunBox = sun ? sun.parentElement : null;
    var steps = $$('.step', build || document);
    function place(p) {
      var t = Math.max(0, Math.min(1, p));
      var u = 1 - t;
      var x = u * u * 40 + 2 * u * t * 500 + t * t * 960;
      var y = u * u * 160 + 2 * u * t * -40 + t * t * 160;
      sunBox.style.setProperty('--sx', (x / 10).toFixed(2));
      sunBox.style.setProperty('--sy', (y / 170 * 100).toFixed(2));
      sunBox.style.setProperty('--p', t.toFixed(3));
      steps.forEach(function (s, i) { s.classList.toggle('is-lit', t >= i / steps.length + 0.02 || (i === 0 && t > 0)); });
    }
    ST.matchMedia({
      '(min-width: 900px)': function () {
        if (!build || !pinEl || !sunBox) return;
        build.classList.add('is-story');
        place(0);
        var st = ST.create({
          trigger: pinEl,
          start: 'top 72px',
          end: function () { return '+=' + Math.round(window.innerHeight * 2.2); },
          pin: true,
          scrub: true,
          onUpdate: function (self) { place(self.progress * 1.08); }
        });
        return function () {
          st.kill();
          build.classList.remove('is-story');
          steps.forEach(function (s) { s.classList.remove('is-lit'); });
          sunBox.style.removeProperty('--sx'); sunBox.style.removeProperty('--sy'); sunBox.style.removeProperty('--p');
        };
      }
    });

    measure();
    window.addEventListener('load', function () { ST.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
