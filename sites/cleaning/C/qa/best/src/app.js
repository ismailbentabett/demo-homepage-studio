/* cleaning-C · Season Dial signature: the cover dial, the pinned dial clock and the countdown diagram */
(function () {
  if (typeof SW === 'undefined') return;

  var SEASONS = ['spring', 'summer', 'fall', 'winter'];
  var LABEL = { spring: 'Spring', summer: 'Summer', fall: 'Fall', winter: 'Winter' };
  var ANGLE = { spring: 45, summer: 135, fall: 225, winter: 315 };
  function seasonOf(month) { // 0-11
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  }
  function motionOn() { return !SW.reduced && document.documentElement.classList.contains('sw-motion'); }

  /* 1. Photo stubs: a tiny or undecodable image gets the designed frame fallback, never a stretched pixel */
  SW.mod('photo-check', function () {
    function check(img) {
      if (!img.complete || !img.getAttribute('src')) return;
      if (img.naturalWidth < 32) SW.mediaFallback.mark(img);
      else if (img.classList.contains('hero__img')) { var h = img.closest('.hero'); if (h) h.classList.add('has-photo'); }
    }
    SW.$$('.frame img').forEach(function (img) {
      check(img);
      img.addEventListener('load', function () { check(img); });
    });
    window.addEventListener('load', function () { SW.$$('.frame img').forEach(check); });
  });

  /* 2. Cover dial: today's quarter lights, the hand points at it */
  SW.mod('season-today', function () {
    var dial = SW.$('[data-dial-today]');
    if (!dial) return;
    var now = seasonOf(new Date().getMonth());
    SW.$$('.dial__q', dial).forEach(function (q) { q.classList.toggle('is-on', q.getAttribute('data-q') === now); });
    SW.$$('.hero__dial-lbl').forEach(function (l) { l.classList.toggle('is-on', l.getAttribute('data-lbl') === now); });
    var nowLbl = SW.$('[data-dial-now]');
    if (nowLbl) nowLbl.textContent = LABEL[now];
    if (!motionOn() || typeof gsap === 'undefined') { dial.style.setProperty('--a', ANGLE[now] + 'deg'); return; }
    // intro (≤ 1.2 s, the h1 is readable throughout): quarters draw one after another, then the hand turns to today
    var qs = SW.$$('.dial__q', dial);
    gsap.fromTo(qs, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.5, stagger: 0.14, ease: 'power2.out', delay: 0.15 });
    dial.style.setProperty('--a', '0deg');
    setTimeout(function () { dial.style.setProperty('--a', ANGLE[now] + 'deg'); }, 250);
  });

  /* 3. Scroll stories (motion only) */
  SW.mod('season-dial', function () {
    if (!motionOn() || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // 3a. each spread's dateline dial fills its quarter with the scroll as the spread enters; the hand swings in from the previous season
    SW.$$('.dial--date').forEach(function (d) {
      var q = SW.$('.dial__q.is-on', d);
      var hand = SW.$('.dial__hand', d);
      var a = parseFloat(getComputedStyle(d).getPropertyValue('--a')) || 0;
      var sec = d.closest('section') || d;
      var tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top 85%', end: 'top 30%', scrub: 0.6 } });
      if (q) tl.fromTo(q, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.out' }, 0);
      if (hand) tl.fromTo(hand, { rotation: a - 90, svgOrigin: '50 50' }, { rotation: a, svgOrigin: '50 50', duration: 0.8, ease: 'power3.out' }, 0);
    });

    // 3b. dateline rule wipes left to right
    SW.$$('.dateline').forEach(function (el) {
      gsap.fromTo(el, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    // 3c. the pinned dial clock: the sweep fills a quarter per spread, the hand turns, the label changes at each dateline
    var clock = SW.$('[data-dial-clock]');
    if (clock) {
      var svg = SW.$('svg', clock);
      var label = SW.$('[data-dial-label]', clock);
      var qs = {};
      SW.$$('.dial__q', clock).forEach(function (q) { qs[q.getAttribute('data-q')] = q; });
      var current = null;
      function set(season, local) {
        var i = SEASONS.indexOf(season);
        var p = (i + Math.max(0, Math.min(1, local))) / 4;
        svg.style.setProperty('--p', p.toFixed(4));
        svg.style.setProperty('--a', (p * 360).toFixed(1) + 'deg');
        if (season !== current) {
          current = season;
          label.textContent = LABEL[season];
          SEASONS.forEach(function (s) { if (qs[s]) qs[s].classList.toggle('is-on', s === season); });
        }
      }
      var today = seasonOf(new Date().getMonth());
      function showToday() {
        current = null;
        label.textContent = LABEL[today];
        svg.style.setProperty('--p', '0');
        svg.style.setProperty('--a', ANGLE[today] + 'deg');
        SEASONS.forEach(function (s) { if (qs[s]) qs[s].classList.toggle('is-on', s === today); });
      }
      showToday();
      SEASONS.forEach(function (s) {
        var sec = document.getElementById('almanac-' + s);
        if (!sec) return;
        ScrollTrigger.create({
          trigger: sec, start: 'top 55%', end: 'bottom 55%',
          onUpdate: function (self) { set(s, self.progress); },
          onEnter: function () { set(s, 0); }, onEnterBack: function () { set(s, 1); },
          onLeaveBack: s === 'spring' ? showToday : undefined,
          onLeave: s === 'winter' ? function () { set('winter', 1); label.textContent = 'All year'; current = 'year'; SEASONS.forEach(function (x) { if (qs[x]) qs[x].classList.add('is-on'); }); } : undefined
        });
      });

      // 3c'. one continuous line: on wide screens the cover dial shrinks into the corner clock as the hero leaves,
      // the clock then rides the four spreads and the rest of the page, and hands over to the footer dial.
      ScrollTrigger.matchMedia({
        '(min-width: 1400px)': function () {
          var heroSvg = SW.$('.hero__dial .dial');
          var heroDial = SW.$('.hero__dial');
          var foot = SW.$('.footer');
          if (!heroSvg || !heroDial) return;
          var R = null;
          function restRect() { var t = clock.style.transform; clock.style.transform = 'none'; var r = svg.getBoundingClientRect(); clock.style.transform = t; return r; }
          function ease(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
          function handoff(p) {
            if (p <= 0.001) {
              clock.classList.remove('is-handoff'); clock.style.transform = ''; svg.style.removeProperty('--bgA');
              heroDial.style.opacity = ''; return;
            }
            if (p >= 0.999) {
              clock.classList.remove('is-handoff'); clock.style.transform = ''; svg.style.removeProperty('--bgA');
              heroDial.style.opacity = '0'; return;
            }
            if (!R) R = restRect();
            var r = heroSvg.getBoundingClientRect();
            var e = ease(p);
            var s = (r.width + (R.width - r.width) * e) / R.width;
            var x = r.left + (R.left - r.left) * e - R.left;
            var y = r.top + (R.top - r.top) * e - R.top;
            clock.classList.add('is-handoff');
            clock.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + s.toFixed(3) + ')';
            svg.style.setProperty('--bgA', e.toFixed(3));
            heroDial.style.opacity = '0';
          }
          var h = ScrollTrigger.create({
            trigger: '#hero', start: 'top top', end: 'bottom 35%',
            onUpdate: function (self) { handoff(self.progress); },
            onLeave: function () { handoff(1); }, onLeaveBack: function () { handoff(0); },
            onRefresh: function (self) { R = null; handoff(self.progress); }
          });
          var vis = ScrollTrigger.create({
            trigger: '#hero', start: 'bottom 35%', endTrigger: foot || '#contact', end: foot ? 'top 85%' : 'bottom top',
            onToggle: function (self) { clock.classList.toggle('is-on', self.isActive); }
          });
          handoff(h.progress);
          return function () { h.kill(); vis.kill(); handoff(0); clock.classList.remove('is-on'); };
        }
      });
    }

    // 3e. the services ledger: the big dial's quarters fill in year order and its hand makes one turn as the ledger scrolls past
    var big = SW.$('[data-ledger-dial]');
    if (big) {
      var bq = SEASONS.map(function (s) { return SW.$('.dial__q[data-q="' + s + '"]', big); }).filter(Boolean);
      var bh = SW.$('.dial__hand', big);
      var btl = gsap.timeline({ scrollTrigger: { trigger: '#services', start: 'top 80%', end: 'top 15%', scrub: 0.6 } });
      bq.forEach(function (q, i) { btl.fromTo(q, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, ease: 'none' }, i); });
      if (bh) btl.fromTo(bh, { rotation: 0, svgOrigin: '50 50' }, { rotation: 360, svgOrigin: '50 50', duration: 4, ease: 'none' }, 0);
    }

    // 3f. the review ring: each quarter of the hub fills as its note comes into view
    var ring = SW.$('[data-ring-dial]');
    if (ring && window.matchMedia('(min-width: 1100px)').matches) {
      var rtl = gsap.timeline({ scrollTrigger: { trigger: '.ring', start: 'top 70%', end: 'bottom 75%', scrub: 0.6 } });
      ['winter', 'spring', 'fall', 'summer'].forEach(function (s, i) {
        var q = SW.$('.dial__q[data-q="' + s + '"]', ring);
        if (q) rtl.fromTo(q, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, ease: 'none' }, i * 0.8);
      });
    }

    // 3g. the footer dial's hand winds back round to spring
    var fh = SW.$('.footer__dial .dial__hand');
    if (fh) gsap.fromTo(fh, { rotation: -270, svgOrigin: '50 50' }, { rotation: 0, svgOrigin: '50 50', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.footer', start: 'top 85%', once: true } });

    // 3d. the break photo drifts slower than the page
    var breakImg = SW.$('.break__frame img');
    if (breakImg) gsap.fromTo(breakImg, { yPercent: -6, scale: 1.12 }, { yPercent: 6, scale: 1.12, ease: 'none', scrollTrigger: { trigger: '.break', start: 'top bottom', end: 'bottom top', scrub: true } });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });

  /* 4. Guest countdown: the ring is the time from today to arrival; book-by, deep clean and touch-up sit on its rim */
  SW.mod('countdown', function () {
    var box = SW.$('[data-countdown]');
    if (!box) return;
    var input = SW.$('#guest-date', box);
    var sweep = SW.$('[data-cd-sweep]', box);
    var days = SW.$('[data-cd-days]', box);
    var note = SW.$('[data-cd-note]', box);
    var marks = {}, outs = {};
    SW.$$('[data-cd-mark]', box).forEach(function (m) { marks[m.getAttribute('data-cd-mark')] = m; });
    SW.$$('[data-cd-out]', box).forEach(function (o) { outs[o.getAttribute('data-cd-out')] = o; });
    var DAY = 864e5;
    var fmt = function (d) { return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }); };
    function startOfDay(d) { var x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
    function iso(d) { var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day; }
    function place(mark, frac) {
      var a = frac * 2 * Math.PI;
      mark.setAttribute('cx', (50 + 40 * Math.sin(a)).toFixed(2));
      mark.setAttribute('cy', (50 - 40 * Math.cos(a)).toFixed(2));
    }
    var today = startOfDay(new Date());
    input.min = iso(today);

    function render() {
      if (!input.value) return;
      var arrival = startOfDay(new Date(input.value + 'T12:00:00'));
      var diff = Math.round((arrival - today) / DAY);
      if (isNaN(diff)) return;
      if (diff < 0) {
        box.classList.remove('is-set');
        days.textContent = '—';
        note.textContent = 'That date has passed. Pick the day your guests arrive.';
        return;
      }
      days.textContent = String(diff);
      // the ring reads 0 → 60 days; anything further out fills it
      var span = Math.max(diff, 1);
      var ring = Math.min(1, diff / 60);
      if (sweep) sweep.style.setProperty('--p', ring.toFixed(3));
      if (diff < 3) {
        box.classList.remove('is-set');
        outs.book.textContent = 'today, by phone';
        outs.deep.textContent = 'whatever the calendar allows';
        outs.touch.textContent = 'the day before, if there is room';
        note.textContent = 'Under 3 days out. Call ' + (SW.fact('biz.phone') || '') + ' and we’ll check the calendar.';
        return;
      }
      var deepGap = diff >= 10 ? 7 : Math.max(2, Math.floor(diff / 2));
      var deep = new Date(arrival.getTime() - deepGap * DAY);
      var touch = new Date(arrival.getTime() - DAY);
      var bookGap = Math.min(5, Math.round((diff - deepGap) / 2));
      var book = new Date(deep.getTime() - Math.max(0, bookGap) * DAY);
      if (book < today) book = today;
      outs.book.textContent = fmt(book);
      outs.deep.textContent = fmt(deep);
      outs.touch.textContent = fmt(touch);
      var scale = ring / span; // fraction of the ring per day
      place(marks.book, ((book - today) / DAY) * scale);
      place(marks.deep, ((deep - today) / DAY) * scale);
      place(marks.touch, ((touch - today) / DAY) * scale);
      box.classList.add('is-set');
      note.textContent = diff + ' days out: a deep clean on ' + fmt(deep) + ', then a touch-up the day before they ring the bell.';
    }
    input.addEventListener('change', render);
    input.addEventListener('input', render);
    // a worked example so the diagram is never empty: three weeks from today
    if (!input.value) input.value = iso(new Date(today.getTime() + 21 * DAY));
    render();
  });
})();
