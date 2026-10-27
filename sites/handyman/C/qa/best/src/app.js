/* handyman-C: the walk. Route draws and signs go up as you scroll; the walker crosses the street. */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  if (SW.reduced || !root.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add('sw-story');

  /* 1. Stop signs swing up when their stop arrives; the route line draws through the stop. */
  document.querySelectorAll('.stop').forEach(function (stop) {
    var sign = stop.querySelector('.stop-rail .sign');
    var route = stop.querySelector('.stop-route');
    if (sign) ScrollTrigger.create({ trigger: stop, start: 'top 75%', once: true, onEnter: function () { sign.classList.add('is-in'); } });
    if (route) gsap.fromTo(route, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none', scrollTrigger: { trigger: stop, start: 'top 70%', end: 'bottom 70%', scrub: 0.4 } });
  });

  /* 2. The walk map: the dashed route draws and each street sign is planted in turn. */
  var walk = document.querySelector('.walk');
  if (walk) {
    var line = walk.querySelector('.route-line');
    var blades = walk.querySelectorAll('.route-stop .sign');
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tl = gsap.timeline({ scrollTrigger: { trigger: walk.querySelector('.route'), start: 'top 85%', end: 'bottom 55%', scrub: 0.5 } });
        tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 4 }, 0);
        blades.forEach(function (b, i) { tl.fromTo(b, { y: -18, rotation: -8, opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.6, ease: 'back.out(2)' }, i + 0.1); });
      },
      '(max-width: 639px)': function () {
        gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: walk.querySelector('.route'), start: 'top 80%', end: 'bottom 60%', scrub: 0.5 } });
      }
    });
  }

  /* 3. The street: the walker crosses the block while the houses drift. */
  var street = document.querySelector('.street');
  if (street) {
    var st = { trigger: street, start: 'top bottom', end: 'bottom top', scrub: 0.6 };
    gsap.fromTo('.walker', { attr: { cx: 40 } }, { attr: { cx: 1400 }, ease: 'none', scrollTrigger: st });
    gsap.fromTo('.st', { x: 30 }, { x: -30, ease: 'none', scrollTrigger: { trigger: street, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  }

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
