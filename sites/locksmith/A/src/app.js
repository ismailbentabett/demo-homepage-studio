/* locksmith-A · Split-Flap Night Log: flap tiles, header board, price-it board, rekey counter,
   10:55 pinned text story (>=900px) and the 11:24 pin-setting scrub. Content never waits on motion. */
SW.mod('nightlog', function (SW) {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* ---- flap tiles ---- */
  function tile(el, text, flip) {
    if (!el) return;
    text = String(text == null ? '' : text);
    if (el._flap === text && el.classList.contains('is-tiled')) return;
    el._flap = text;
    el.textContent = '';
    Array.from(text).forEach(function (ch, i) {
      var s = document.createElement('span');
      if (ch === ' ') { s.className = 'is-gap'; s.textContent = ' '; }
      else { if (/[:.,]/.test(ch)) s.className = 'is-colon'; s.textContent = ch; }
      s.style.setProperty('--i', i);
      el.appendChild(s);
    });
    el.classList.add('is-tiled');
    if (flip && motion) {
      el.classList.remove('is-flipping');
      void el.offsetWidth;
      el.classList.add('is-flipping');
    }
  }
  var hero = SW.$('#top');
  SW.$$('.flap[data-flap]').forEach(function (el) {
    tile(el, el.getAttribute('data-flap'), hero && hero.contains(el));
  });

  /* section tiles flip as their section arrives */
  if (motion && 'IntersectionObserver' in window) {
    var flipIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        SW.$$('.flap[data-flap]', en.target).forEach(function (f, n) {
          setTimeout(function () { f._flap = null; tile(f, f.getAttribute('data-flap'), true); }, n * 40);
        });
        flipIO.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -20% 0px' });
    SW.$$('main > section:not(#top), .ftr').forEach(function (s) { flipIO.observe(s); });
  }

  /* ---- header board mirrors the moment in view ---- */
  var hdr = SW.$('[data-hdr-board]');
  var pm = SW.$('[data-hdr-pm]');
  function board(t) {
    if (!hdr || !t) return;
    tile(hdr, t, true);
    if (pm) pm.textContent = t === '07:00' ? 'a.m.' : 'p.m.';
  }
  if (hdr && 'IntersectionObserver' in window) {
    var timeIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) board(en.target.getAttribute('data-time'));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    SW.$$('main > section[data-time]').forEach(function (s) { timeIO.observe(s); });
  }

  /* ---- price it before we drive ---- */
  var prices = SW.fact('proof.prices') || [];
  var pit = SW.$('[data-estimator]');
  if (pit && prices.length) {
    var sel = SW.$('[data-est-item]', pit);
    var fromEl = SW.$('[data-pit-from]', pit);
    var toEl = SW.$('[data-pit-to]', pit);
    var dash = SW.$('.pit__dash', pit);
    var mark = SW.$('[data-pit-mark]', pit);
    var push = SW.$('[data-pit-push]', pit);
    var send = SW.$('[data-pit-send]', pit);
    var broken = SW.$('[data-pit-broken]', pit);
    var POS = { day: .14, evening: .5, night: .86 };
    var PUSH = {
      day: 'Daytime usually lands near the bottom of the range.',
      evening: 'Evenings sit mid-range.',
      night: 'Nights and holidays sit at the top of the range.'
    };
    var SERVICE = { 0: 'House lockout', 1: 'Car lockout' };
    var whenVal = function () { var r = SW.$('input[name="pit-when"]:checked', pit); return r ? r.value : 'night'; };
    var update = function () {
      var p = prices[parseInt(sel.value, 10)] || prices[0];
      var w = whenVal();
      tile(fromEl, p.from, true);
      if (p.to) { toEl.hidden = false; tile(toEl, p.to, true); dash.textContent = 'to'; }
      else { toEl.hidden = true; dash.textContent = 'and up'; }
      var pos = POS[w] || .5;
      if (broken && broken.checked) pos = Math.min(.96, pos + .12);
      if (mark) mark.style.setProperty('--pos', pos.toFixed(2));
      var line = PUSH[w] || PUSH.night;
      if (broken && broken.checked) line += ' A snapped key or a damaged lock can push it up; we say so before we drive.';
      if (push) push.textContent = line;
      if (send) send.setAttribute('data-service', SERVICE[sel.value] || 'Lock repair');
    };
    sel.addEventListener('change', update);
    SW.$$('input[name="pit-when"], [data-pit-broken]', pit).forEach(function (i) { i.addEventListener('change', update); });
    if (send) send.addEventListener('click', function () {
      setTimeout(function () { SW.prefillForm({ when: whenVal() === 'day' ? 'Later today' : 'Right now' }, { scroll: false }); }, 0);
    });
    update();
  }

  /* ---- rekey counter (shows facts' first + each lines, never sums dollars) ---- */
  var rk = SW.$('[data-rekey]');
  if (rk && prices[2] && prices[3]) {
    var n = 3;
    var nEl = SW.$('[data-rk-n]', rk), doors = SW.$('[data-rk-doors]', rk), out = SW.$('[data-rk-out]', rk);
    var minus = SW.$('[data-rk-minus]', rk), plus = SW.$('[data-rk-plus]', rk);
    var draw = function () {
      nEl.textContent = n;
      doors.textContent = '';
      for (var i = 0; i < n; i++) doors.appendChild(document.createElement('span'));
      var a = prices[2], b = prices[3];
      var txt = n === 1
        ? 'One lock on a new key: ' + a.from + '–' + a.to + ' ' + (a.unit || '') + '. '
        : n + ' locks on one new key: first lock ' + a.from + '–' + a.to + ', plus ' + (n - 1) + ' × ' + b.from + '–' + b.to + ' each. ';
      out.textContent = txt;
      var tag = document.createElement('span');
      tag.className = 'sample-tag';
      tag.textContent = 'Sample pricing';
      out.appendChild(tag);
      minus.disabled = n <= 1;
      plus.disabled = n >= 8;
    };
    minus.addEventListener('click', function () { if (n > 1) { n--; draw(); } });
    plus.addEventListener('click', function () { if (n < 8) { n++; draw(); } });
    draw();
  }

  /* ---- motion: stories ---- */
  if (!motion || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // 10:55: pinned phone, bubbles stack in, header board follows each bubble (>= 900px only)
  var story = SW.$('#text');
  if (story) {
    var bubbles = SW.$$('.sms__b', story), steps = SW.$$('.step', story);
    var times = ['10:53', '10:55', '10:56', '10:58'];
    var cur = -1;
    var setStep = function (k) {
      if (k === cur) return;
      cur = k;
      bubbles.forEach(function (b, i) { b.classList.toggle('is-on', i <= k); });
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === k); });
      board(times[k]);
    };
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        story.classList.add('is-pinned');
        cur = -1;
        setStep(0);
        var st = ScrollTrigger.create({
          trigger: story, start: 'top top', end: 'bottom bottom',
          onUpdate: function (self) { setStep(Math.min(3, Math.floor(self.progress * 4.4))); },
          onLeave: function () { setStep(3); }
        });
        return function () {
          st.kill();
          story.classList.remove('is-pinned');
          bubbles.forEach(function (b) { b.classList.add('is-on'); });
        };
      }
    });
  }

  // 11:24: the pins set one by one as the cylinder crosses the screen
  var picked = SW.$('#picked'), cyl = SW.$('[data-pick]');
  if (picked && cyl) {
    picked.style.setProperty('--sw-p', '0');
    ScrollTrigger.create({
      trigger: cyl, start: 'top 85%', end: 'bottom 45%', scrub: true,
      onUpdate: function (self) { picked.style.setProperty('--sw-p', self.progress.toFixed(3)); },
      onRefresh: function (self) { picked.style.setProperty('--sw-p', self.progress.toFixed(3)); }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
});
