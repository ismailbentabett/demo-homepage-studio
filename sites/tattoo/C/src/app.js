/* tattoo-C · Crane Light: flash rail, tide line, cover-up check, hold-a-sheet. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- tools (always on, motion or not) ---- */
  // Hold a sheet: the kit prefill picks the service; we add the sheet number to the idea field.
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-hold]');
    if (!t || !window.SW || !SW.prefillForm) return;
    var name = t.getAttribute('data-hold');
    setTimeout(function () { SW.prefillForm({ details: 'Holding flash sheet ' + name + '.' }); }, 0);
  });

  // Cover-up check: three honest answers, never a promise.
  var check = $('[data-cover]');
  if (check) {
    var out = $('.check__out', check);
    var ans = $('[data-cover-answer]', check);
    var why = $('[data-cover-why]', check);
    var rib = $('[data-cover-ribbon]', check);
    var ask = $('[data-service="Cover-ups"]', check);
    var ANSWERS = {
      cover: ['Cover in one go', 'Light or faded ink hides well under a bolder, darker design. Most need one sitting; bigger ones two.'],
      rework: ['Rework instead', 'Mid grey over a big area is hard to bury. We usually build the old piece into a new design rather than hide it.'],
      laser: ['Laser first', 'Solid black is too dark to cover cleanly. A few laser sessions to fade it first, then a cover you will actually like.']
    };
    var read = function (n) { var c = $('input[name="' + n + '"]:checked', check); return c ? c.value : ''; };
    var update = function (animate) {
      var dark = read('dark'), size = read('size'), color = read('color');
      var key = dark === 'solid' ? 'laser' : (dark === 'mid' && size === 'big') ? 'rework' : 'cover';
      var a = ANSWERS[key];
      var extra = (key === 'cover' && color === 'color') ? ' Old color under new color is fine; we go darker on top.' : '';
      out.setAttribute('data-dark', dark);
      ans.textContent = a[0];
      why.textContent = a[1] + extra;
      if (ask) ask.setAttribute('data-cover-answer-value', a[0]);
      if (animate && rib && window.gsap && !SW.reduced && document.documentElement.classList.contains('sw-motion')) {
        gsap.fromTo(rib, { '--sw-p': 0 }, { '--sw-p': 1, duration: .6, ease: 'power3.out' });
      }
    };
    check.addEventListener('change', function () { update(true); });
    check.addEventListener('submit', function (e) { e.preventDefault(); });
    update(false);
    if (ask) ask.addEventListener('click', function () {
      setTimeout(function () { if (window.SW && SW.prefillForm) SW.prefillForm({ details: 'Cover-up check said: ' + ans.textContent + '.' }); }, 0);
    });
  }

  /* ---- motion ---- */
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  // Flash ribbons flip as a sheet crosses the middle of the screen (phones/tablets: stacked grid).
  var sheets = $$('.sheet');
  var centerFlip = function () {
    var mid = window.innerWidth / 2;
    sheets.forEach(function (s) {
      var r = s.getBoundingClientRect();
      s.classList.toggle('is-flipped', r.left < mid + 40 && r.right > mid - 40 && r.width > 0);
    });
  };
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (!flash || !flash.classList.contains('is-rail')) en.target.classList.toggle('is-flipped', en.isIntersecting); });
    }, { rootMargin: '-42% 0px -42% 0px', threshold: 0 });
    sheets.forEach(function (s) { io.observe(s); });
  }

  // Section names: each head's ribbon unfurls as the head enters; the heading itself is never hidden.
  var heads = $$('[data-unfurl]:not([data-reveal]):not([data-reveal-stagger])');
  if ('IntersectionObserver' in window) {
    var hio = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); hio.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.02 });
    heads.forEach(function (h) { hio.observe(h); });
  } else heads.forEach(function (h) { h.classList.add('is-in'); });

  var flash = $('#flash');
  if (!window.gsap || !window.ScrollTrigger) { heads.forEach(function (h) { h.classList.add('is-in'); }); return; }
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width: 1024px)': function () {
      if (!flash) return;
      // No pin, no spacer: the wall slides past as the band crosses the screen.
      var track = $('[data-rail-track]', flash);
      flash.classList.add('is-rail');
      var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      var tw = gsap.to(track, {
        x: function () { return -dist(); },
        ease: 'none',
        scrollTrigger: {
          trigger: flash, start: 'top 70%', end: 'bottom 35%',
          scrub: .6, invalidateOnRefresh: true,
          onUpdate: centerFlip
        }
      });
      var refresh = function () { setTimeout(function () { ScrollTrigger.refresh(); }, 420); };
      $$('[data-filter-btn]', flash).forEach(function (b) { b.addEventListener('click', refresh); });
      return function () {
        flash.classList.remove('is-rail');
        tw.scrollTrigger && tw.scrollTrigger.kill();
        tw.kill();
        gsap.set(track, { clearProps: 'transform' });
      };
    }
  });

  // Tide line: the wave draws with scroll, day ribbons unfurl as the line reaches them.
  var tl = $('[data-tideline]');
  if (tl) {
    var days = $$('.tideline__days li', tl).map(function (li) {
      return { el: $('.ribbon', li), x: parseFloat(li.style.getPropertyValue('--x')) / 100 || 0 };
    });
    var paint = function (p) {
      tl.style.setProperty('--draw', p.toFixed(3));
      days.forEach(function (d) {
        var local = Math.min(1, Math.max(0, (p - d.x + .08) / .1));
        d.el.style.setProperty('--sw-p', local.toFixed(3));
      });
    };
    // One pass, left to right, when the line comes into view (never left half-drawn).
    var state = { p: 0 };
    paint(0);
    ScrollTrigger.create({
      trigger: tl, start: 'top 80%', once: true,
      onEnter: function () {
        gsap.to(state, { p: 1, duration: 1.6, ease: 'power2.inOut', onUpdate: function () { paint(state.p); } });
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
