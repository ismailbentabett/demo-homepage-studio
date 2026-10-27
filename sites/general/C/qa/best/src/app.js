/* general-C signature: the climb. Contours draw, the altimeter climbs, plans become builds. */
(function () {
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* 1. Intro (≤ 1.1 s): the hero map contours draw from the river outward. The h1 is never delayed. */
  var mapLines = document.querySelectorAll('.map-contours path');
  var river = document.querySelector('.map-river');
  if (mapLines.length) {
    gsap.fromTo(mapLines, { strokeDashoffset: 1400 }, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.out', stagger: 0.035 });
    gsap.from('.map-towns > *', { opacity: 0, duration: 0.4, stagger: 0.03, delay: 0.45, ease: 'power1.out' });
  }
  if (river) gsap.fromTo(river, { strokeDashoffset: 1400 }, { strokeDashoffset: 0, duration: 1.05, ease: 'power2.inOut' });

  /* 2. Contour rules draw as they enter, scrubbed (they un-draw on the way back up). */
  var heroRule = document.querySelectorAll('.hero .contour-rule path');
  if (heroRule.length) gsap.fromTo(heroRule, { strokeDashoffset: 1600 }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut', stagger: 0.08 });
  document.querySelectorAll('.contour-rule:not(.hero .contour-rule)').forEach(function (rule) {
    gsap.fromTo(rule.querySelectorAll('path'), { strokeDashoffset: 1600 }, {
      strokeDashoffset: 0, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: rule, start: 'top 95%', end: 'top 55%', scrub: 0.6 }
    });
  });

  /* 3. The altitude rail: its marker climbs the left gutter with the page (>= 1200px, CSS shows it). */
  var rail = document.querySelector('[data-alt-rail]');
  if (rail) {
    var altV = rail.querySelector('.alt-v');
    var lo = 2100, hi = 3600;
    ScrollTrigger.create({
      trigger: document.body, start: 'top top', end: 'bottom bottom',
      onUpdate: function (self) {
        var v = Math.round((lo + (hi - lo) * self.progress) / 10) * 10;
        altV.textContent = v.toLocaleString('en-US');
        rail.style.setProperty('--alt', self.progress.toFixed(4));
      }
    });
  }

  /* 4. Break: the four ridges separate at different speeds (0.1x–0.4x parallax). */
  document.querySelectorAll('.break-art .ridge').forEach(function (r, i) {
    gsap.fromTo(r, { yPercent: 0 }, {
      yPercent: -(i + 1) * 3, ease: 'none',
      scrollTrigger: { trigger: '.break', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* 5. The story: plan becomes build. */
  var story = document.querySelector('.story');
  var steps = story ? Array.prototype.slice.call(story.querySelectorAll('.story-step')) : [];
  function fillOf(step) { return step.querySelector('.plate-fill'); }
  steps.forEach(function (s) {
    var fill = fillOf(s);
    if (!fill || s.querySelector('.plate-line')) return;
    var line = fill.cloneNode(true);
    line.classList.remove('plate-fill');
    line.classList.add('plate-line');
    line.querySelectorAll('defs').forEach(function (d) { d.remove(); });
    line.querySelectorAll('[id]').forEach(function (n) { n.removeAttribute('id'); });
    fill.parentNode.insertBefore(line, fill);
  });

  ScrollTrigger.matchMedia({
    /* Desktop: pinned sequence, n * 45svh of scroll. Each step wipes from drawing to build, then hands over. */
    '(min-width: 900px)': function () {
      if (!steps.length) return;
      story.classList.add('is-pinned');
      var gauge = document.createElement('div');
      gauge.className = 'story-gauge';
      gauge.setAttribute('aria-hidden', 'true');
      gauge.innerHTML = steps.map(function () { return '<i></i>'; }).join('');
      story.querySelector('.story-stage').appendChild(gauge);
      var dots = gauge.querySelectorAll('i');
      gsap.set(steps, { autoAlpha: 0 });
      gsap.set(steps[0], { autoAlpha: 1 });
      steps.forEach(function (s) { gsap.set(fillOf(s), { '--sw-p': 0 }); });
      var tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: story.querySelector('.story-stage'),
          start: 'top top+=' + 64,
          end: function () { return '+=' + Math.round(window.innerHeight * 0.45 * steps.length); },
          pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: function (self) {
            var idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length * 0.999));
            dots.forEach(function (d, j) { d.classList.toggle('is-on', j <= idx); });
          }
        }
      });
      steps.forEach(function (s, i) {
        tl.fromTo(s.querySelector('.step-text'), { y: 24 }, { y: 0, duration: 0.25 }, i);
        tl.to(fillOf(s), { '--sw-p': 1, duration: 0.6 }, i + 0.05);
        if (i < steps.length - 1) {
          tl.to(s, { autoAlpha: 0, duration: 0.2 }, i + 0.8);
          tl.to(steps[i + 1], { autoAlpha: 1, duration: 0.2 }, i + 0.85);
        }
      });
      return function () {
        story.classList.remove('is-pinned');
        gauge.remove();
        gsap.set(steps, { clearProps: 'all' });
        steps.forEach(function (s) { gsap.set(fillOf(s), { clearProps: 'all' }); });
      };
    },
    /* Phone and tablet: no pin. Each plate wipes from drawing to build as it crosses the screen. */
    '(max-width: 899px)': function () {
      steps.forEach(function (s) {
        gsap.fromTo(fillOf(s), { '--sw-p': 0 }, {
          '--sw-p': 1, ease: 'none',
          scrollTrigger: { trigger: s.querySelector('.plate-frame'), start: 'top 85%', end: 'center 45%', scrub: 0.5 }
        });
      });
    }
  });

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
