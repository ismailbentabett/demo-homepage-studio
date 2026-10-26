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

    // 3a. each spread's dateline dial draws its quarter and the hand swings in from the previous season
    SW.$$('.dial--date').forEach(function (d) {
      var q = SW.$('.dial__q.is-on', d);
      var hand = SW.$('.dial__hand', d);
      var a = parseFloat(getComputedStyle(d).getPropertyValue('--a')) || 0;
      var tl = gsap.timeline({ scrollTrigger: { trigger: d, start: 'top 88%', once: true } });
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
      SEASONS.forEach(function (s) {
        var sec = document.getElementById('almanac-' + s);
        if (!sec) return;
        ScrollTrigger.create({
          trigger: sec, start: 'top 55%', end: 'bottom 55%',
          onUpdate: function (self) { set(s, self.progress); },
          onEnter: function () { set(s, 0); }, onEnterBack: function () { set(s, 1); }
        });
      });
      var first = document.getElementById('almanac-spring');
      var last = document.getElementById('almanac-winter');
      if (first && last) {
        ScrollTrigger.create({
          trigger: first, start: 'top 55%', endTrigger: last, end: 'bottom 30%',
          onToggle: function (self) { clock.classList.toggle('is-on', self.isActive); }
        });
      }
    }

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
