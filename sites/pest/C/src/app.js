/* pest-C signature: the dusk clock runs the page from 7:40 to 9:30 pm.
   Static (JS off / reduced motion): every section carries its printed time stamp.
   With motion: a margin clock interpolates between those stamps as you scroll, the story dial
   follows the house cards, and the street's windows go out across the break. */
(function () {
  if (typeof SW === 'undefined' || typeof gsap === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  gsap.registerPlugin(ScrollTrigger);

  function toMin(t) { var p = String(t).split(':'); return (parseInt(p[0], 10) + 12) * 60 + parseInt(p[1], 10); }
  function setDial(el, min) {
    if (!el) return;
    el.style.setProperty('--h', String(Math.floor(min / 60) % 12));
    el.style.setProperty('--m', String(Math.round(min % 60)));
  }
  function label(min) {
    var h = Math.floor(min / 60) % 12 || 12, m = Math.floor(min % 60);
    return h + ':' + (m < 10 ? '0' : '') + m;
  }
  var START = toMin('7:40'), END = toMin('9:30');

  /* --- 1. Hero intro (≤ 1.2 s, the h1 is never held back) --- */
  var heroDial = document.querySelector('[data-hero-dial]');
  var heroTime = document.querySelector('[data-hero-time]');
  var clock = { v: START - 12 };
  gsap.to(clock, {
    v: START, duration: 1.1, ease: 'power2.out', delay: 0.1,
    onUpdate: function () { setDial(heroDial, clock.v); if (heroTime) heroTime.textContent = label(clock.v); }
  });
  gsap.from('.skyline--hero .skyline__halo', { opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.3 });
  gsap.from('.skyline--hero .win.is-lit', { opacity: 0, duration: 0.4, stagger: { each: 0.03, from: 'random' }, delay: 0.25 });

  /* --- 2. The spine: margin clock interpolated between the page's printed stamps --- */
  var spine = document.querySelector('.spine');
  var spineDial = spine && spine.querySelector('.dial');
  var spineT = spine && spine.querySelector('.spine__t');
  var hero = document.getElementById('hero');
  var anchors = [];
  function measure() {
    anchors = Array.prototype.map.call(document.querySelectorAll('main > section[data-t], footer[data-t]'), function (el) {
      return { top: el.getBoundingClientRect().top + window.scrollY, min: toMin(el.getAttribute('data-t')) };
    }).sort(function (a, b) { return a.top - b.top; });
  }
  function spineUpdate() {
    if (!spine || !anchors.length) return;
    var y = window.scrollY + window.innerHeight * 0.5;
    var min = anchors[0].min;
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i], b = anchors[i + 1];
      if (y < a.top) break;
      if (!b) { min = a.min; break; }
      if (y < b.top) { min = a.min + (b.min - a.min) * (y - a.top) / (b.top - a.top); break; }
    }
    setDial(spineDial, min);
    if (spineT) spineT.textContent = label(min);
    var k = Math.max(0, Math.min(1, (min - START) / (END - START)));
    spine.style.setProperty('--glow', (1 - k * 0.92).toFixed(3));
    var heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    spine.classList.toggle('is-on', heroBottom < window.innerHeight * 0.4);
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; spineUpdate(); });
  }, { passive: true });
  ScrollTrigger.addEventListener('refresh', function () { measure(); spineUpdate(); });
  measure(); spineUpdate();

  /* --- 3. Story: the big dial and the porch-light meter follow the house cards (desktop) --- */
  var storyDial = document.querySelector('[data-story-dial]');
  var storyTime = document.querySelector('[data-story-time]');
  var storyLamp = document.querySelector('[data-story-lamp]');
  ScrollTrigger.matchMedia({
    '(min-width: 900px)': function () {
      document.querySelectorAll('.story-card').forEach(function (card) {
        var min = toMin(card.getAttribute('data-t'));
        var lamp = parseFloat(getComputedStyle(card).getPropertyValue('--lamp')) || 1;
        function go() {
          setDial(storyDial, min);
          if (storyTime) storyTime.textContent = label(min);
          if (storyLamp) storyLamp.style.setProperty('--lampv', String(lamp));
          document.querySelectorAll('.story-card').forEach(function (c) { c.classList.toggle('is-current', c === card); });
        }
        ScrollTrigger.create({ trigger: card, start: 'top 55%', end: 'bottom 55%', onEnter: go, onEnterBack: go });
      });
    }
  });

  /* --- 4. Break: the street's windows go out as the band crosses the screen --- */
  var brk = document.querySelector('.skyline--break');
  if (brk) {
    brk.classList.add('is-live');
    var wins = Array.prototype.slice.call(brk.querySelectorAll('.win.is-lit:not(.is-late)'));
    wins.sort(function () { return 0.5 - Math.random(); });
    var halo = brk.querySelector('.skyline__halo');
    var bulb = brk.querySelector('.skyline__bulb');
    ScrollTrigger.create({
      trigger: '.sec--break', start: 'top 85%', end: 'bottom 60%', scrub: true,
      onUpdate: function (self) {
        var k = self.progress, out = Math.round(k * wins.length);
        wins.forEach(function (w, i) { w.classList.toggle('is-out', i < out); });
        if (halo) halo.style.opacity = (0.06 + (1 - k) * 0.9).toFixed(3);
        if (bulb) bulb.classList.toggle('is-out', k > 0.6);
      }
    });
  }

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
