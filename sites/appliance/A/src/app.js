/* appliance-A · signature moment + one scroll story + vent check */
(function () {
  var root = document.documentElement;

  /* ---- vent check: works with or without motion ---- */
  var vent = document.querySelector('[data-vent]');
  if (vent) {
    var out = vent.querySelector('[data-vent-out]');
    var num = vent.querySelector('[data-vent-n]');
    var bar = vent.querySelector('.vent__bar');
    var val = function (n) { var v = parseFloat(vent.elements[n].value); return isFinite(v) && v > 0 ? v : 0; };
    var calc = function () {
      var eq = val('ft') + 5 * val('e90') + 2.5 * val('e45');
      var r = Math.round(eq * 10) / 10;
      num.textContent = '≈ ' + r + ' ft';
      var over = eq > 35;
      out.lastChild.textContent = over
        ? ' equivalent. That’s past the typical 35: a vent check is worth adding to your visit.'
        : ' equivalent. Inside the typical 35: if drying is still slow, the vent may be clogged rather than long.';
      bar.style.setProperty('--v', Math.min(eq / 60, 1).toFixed(3));
      bar.classList.toggle('is-over', over);
    };
    vent.addEventListener('input', calc);
    vent.addEventListener('submit', function (e) { e.preventDefault(); });
    calc();
  }

  /* ---- one amber primary per view: the header button is outlined while the hero's own is visible ---- */
  var hdr = document.querySelector('[data-header]');
  var heroBtn = document.querySelector('.hero__cta .btn--primary');
  if (hdr && heroBtn && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { hdr.classList.toggle('is-over-hero', e[0].isIntersecting); }).observe(heroBtn);
  }

  if (window.SW && SW.reduced) return;
  if (!root.classList.contains('sw-motion') || !window.gsap) return;

  var gsap = window.gsap;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---- signature: Panel 00 opens (≤1.1 s, h1 never hidden) ---- */
  var hero = document.querySelector('.hero');
  if (hero) {
    var screws = hero.querySelectorAll('.hero__panel > .panel__screw, .seam__screw');
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(screws, { rotate: -360, scale: 1.4, opacity: 0, duration: .7, stagger: .06 }, 0)
      .from('.hero__seam', { scaleY: 0, scaleX: 0, duration: .5, ease: 'power2.inOut' }, .15)
      .from('.cutaway .cw-cab, .cutaway .cw-drum, .cutaway .cw-motor, .cutaway .cw-belt, .cutaway .cw-heater', { opacity: 0, duration: .5, stagger: .05 }, .2)
      .from('.hero__light', { opacity: 0, '--lx': '90%', duration: .8 }, .3)
      .from('.cutaway .cw-tag', { opacity: 0, x: -16, duration: .4 }, .7);
    var skip = function () { tl.progress(1); off(); };
    var off = function () { ['wheel', 'keydown', 'pointerdown', 'touchstart'].forEach(function (t) { window.removeEventListener(t, skip); }); };
    ['wheel', 'keydown', 'pointerdown', 'touchstart'].forEach(function (t) { window.addEventListener(t, skip, { passive: true }); });
    tl.eventCallback('onComplete', function () { off(); gsap.set(screws, { clearProps: 'transform,opacity,rotate,scale' }); });
    setTimeout(skip, 1300);
  }

  /* ---- story: one service call, panel by panel (pinned ≥900 only) ---- */
  var story = document.querySelector('.story');
  if (story && window.ScrollTrigger) {
    var steps = Array.prototype.slice.call(story.querySelectorAll('.step'));
    var rail = Array.prototype.slice.call(story.querySelectorAll('.story__rail li'));
    var n = steps.length;
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        story.classList.add('is-pinned');
        steps.forEach(function (s) { s.removeAttribute('data-reveal'); s.classList.add('is-in'); });
        var set = function (p) {
          var f = Math.min(p * n, n - 0.0001);
          var i = Math.floor(f), local = f - i;
          steps.forEach(function (s, k) {
            s.classList.toggle('is-on', k === i);
            s.classList.toggle('is-past', k < i);
            if (k === i) {
              s.style.setProperty('--u', Math.min(local / .35, 1).toFixed(3));
              s.style.setProperty('--w', Math.max(0, Math.min((local - .2) / .4, 1)).toFixed(3));
            }
          });
          rail.forEach(function (r, k) { r.classList.toggle('is-on', k === i); r.classList.toggle('is-done', k < i); });
        };
        set(0);
        var st = ScrollTrigger.create({ trigger: story, start: 'top top+=' + (parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 68), end: 'bottom bottom', onUpdate: function (self) { set(self.progress); }, onRefresh: function (self) { set(self.progress); } });
        return function () {
          st.kill();
          story.classList.remove('is-pinned');
          steps.forEach(function (s) { s.classList.remove('is-on', 'is-past'); s.style.removeProperty('--u'); s.style.removeProperty('--w'); });
          rail.forEach(function (r) { r.classList.remove('is-on', 'is-done'); });
        };
      }
    });
  }

  /* ---- every seam: its screws back out a half turn as the edge scrolls past ---- */
  if (window.ScrollTrigger) {
    document.querySelectorAll('.seam').forEach(function (seam) {
      var sc = seam.querySelectorAll('.seam__s');
      gsap.fromTo(sc, { rotate: function (i) { return [0, 35, -20, 70][i] || 0; } }, {
        rotate: function (i) { return ([0, 35, -20, 70][i] || 0) - 270; }, ease: 'none',
        scrollTrigger: { trigger: seam, start: 'top bottom', end: 'top 35%', scrub: .6 }
      });
    });
  }

  /* ---- model tag: mark the active panel so its marker pulses ---- */
  var tagTool = document.querySelector('.tag__tool');
  if (tagTool) {
    var mark = function () {
      tagTool.querySelectorAll('.tag__panel').forEach(function (p) { p.classList.toggle('is-active', !p.hidden); });
    };
    tagTool.addEventListener('click', function () { setTimeout(mark, 0); });
    tagTool.addEventListener('keyup', function () { setTimeout(mark, 0); });
    mark();
  }

  if (document.fonts && document.fonts.ready && window.ScrollTrigger) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
