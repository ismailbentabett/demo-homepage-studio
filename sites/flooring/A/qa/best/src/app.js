/* flooring-A: the sanding pass.
   1. Intro: the three hero frames unclip left to right like a sander pass (70ms stagger, skippable).
   2. Grit rails draw left to right with their section (the hero rail draws with the intro).
   3. Story (>= 640px): the stage sticks, each grit wipes over the last as its step passes, the counter ticks.
   Nothing here runs without JS or with reduced motion: the page is complete without it. */
(function () {
  'use strict';
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  SW.ready(function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    intro();
    rails();
    story();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });

  function intro() {
    var frames = gsap.utils.toArray('[data-sw-intro]');
    var rail = document.querySelector('.hero-rail');
    if (!frames.length) return;
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(frames, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.75, stagger: 0.07, clearProps: 'clipPath' }, 0.1);
    if (rail) tl.fromTo(rail, { '--sw-p': 0 }, { '--sw-p': 1, duration: 0.9, ease: 'power2.inOut' }, 0.15);
    function skip() { if (tl.progress() < 1) tl.progress(1); off(); }
    function off() { ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (e) { window.removeEventListener(e, skip); }); }
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (e) { window.addEventListener(e, skip, { passive: true, once: true }); });
    tl.eventCallback('onComplete', off);
  }

  function rails() {
    gsap.utils.toArray('.grit-rail:not(.hero-rail)').forEach(function (rail) {
      gsap.fromTo(rail, { '--sw-p': 0 }, {
        '--sw-p': 1, ease: 'none',
        scrollTrigger: { trigger: rail, start: 'top 92%', end: 'top 45%', scrub: 0.5 }
      });
    });
  }

  function story() {
    var band = document.querySelector('#story');
    if (!band) return;
    var steps = gsap.utils.toArray('.story-step', band);
    var frames = gsap.utils.toArray('.story-frame', band);
    var counter = band.querySelector('[data-grit-now]');
    var labels = steps.map(function (s) { var p = s.querySelector('.grit-pill'); return p ? p.textContent.trim() : ''; });

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        band.classList.add('is-live');
        var made = [];
        function setOn(i) {
          steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
          if (counter && labels[i]) counter.textContent = labels[i];
        }
        setOn(0);
        frames.forEach(function (f, i) {
          if (i === 0) return;
          made.push(gsap.fromTo(f, { clipPath: 'inset(0 100% 0 0)' }, {
            clipPath: 'inset(0 0% 0 0)', ease: 'none',
            scrollTrigger: { trigger: steps[i], start: 'top 85%', end: 'top 45%', scrub: 0.4 }
          }));
        });
        steps.forEach(function (s, i) {
          made.push(ScrollTrigger.create({
            trigger: s, start: 'top 60%', end: 'bottom 60%',
            onToggle: function (self) { if (self.isActive) setOn(i); }
          }));
        });
        ScrollTrigger.refresh();
        return function () {
          band.classList.remove('is-live');
          made.forEach(function (m) { if (m.scrollTrigger) m.scrollTrigger.kill(); if (m.kill) m.kill(); });
          gsap.set(frames, { clearProps: 'clipPath' });
          steps.forEach(function (s) { s.classList.remove('is-on'); });
        };
      }
    });
  }
})();
