/* demolition-C: the Reclaimed-Space Ruler.
   1. Estimator microcopy (works for everyone, motion or not): grounds the sample range in homeowner terms.
   2. Motion only: the story plot moves through four stages while its ruler and sq-ft count scrub with scroll,
      the footer ruler fills as the page ends, and the ridge lines drift apart. */
(function () {
  if (!window.SW) return;

  /* 1. Space-back ruler: one plain-language line per sample price row (by row order in facts.proof.prices) */
  var COMPARE = [
    'That footprint is about the floor of a bedroom, handed back to the yard.',
    'The ground under a high deck sees daylight again: room for a patio or just grass.',
    'A one-car garage and its slab: roughly the room to park two cars, or plant a garden.',
    'About one parking space of gravel raked level, or grass when it grows back.',
    'Topsoil and straw over the old footprint, so the lawn can grow back across it.'
  ];
  var est = document.querySelector('[data-estimator]');
  if (est) {
    var sel = est.querySelector('[data-est-item]');
    var line = est.querySelector('[data-est-compare]');
    var setLine = function () {
      if (!sel || !line) return;
      var i = parseInt(sel.value, 10);
      line.textContent = COMPARE[isNaN(i) ? 0 : i] || '';
    };
    if (sel) sel.addEventListener('change', setLine);
    setLine();
  }

  /* 2. Motion */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var story = document.querySelector('[data-story]');
  var num = document.querySelector('[data-story-num]');
  var TOTAL = 192;

  ScrollTrigger.matchMedia({
    '(min-width: 640px)': function () {
      if (!story) return;
      var steps = story.querySelectorAll('[data-step-n]');
      story.setAttribute('data-stage', '1');
      story.style.setProperty('--sw-p', '0');
      if (num) num.textContent = '0';

      steps.forEach(function (step) {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 60%',
          end: 'bottom 60%',
          onToggle: function (self) { if (self.isActive) story.setAttribute('data-stage', step.getAttribute('data-step-n')); }
        });
      });

      /* the ruler measures the reclaimed footprint across the four stages */
      ScrollTrigger.create({
        trigger: story.querySelector('.story__steps'),
        start: 'top 60%',
        end: 'bottom 70%',
        scrub: 0.4,
        onUpdate: function (self) {
          var p = self.progress;
          story.style.setProperty('--sw-p', p.toFixed(3));
          if (num) num.textContent = String(Math.round(TOTAL * p));
        }
      });

      return function () {
        story.removeAttribute('data-stage');
        story.style.removeProperty('--sw-p');
        if (num) num.textContent = String(TOTAL);
      };
    }
  });

  /* footer ruler fills as the visitor reaches the end of the page */
  var fr = document.querySelector('[data-footer-ruler]');
  if (fr) {
    fr.style.setProperty('--sw-f', '0');
    ScrollTrigger.create({
      trigger: fr,
      start: 'top 98%',
      end: 'top 55%',
      scrub: 0.4,
      onUpdate: function (self) { fr.style.setProperty('--sw-f', self.progress.toFixed(3)); }
    });
  }

  /* ridge lines drift at different speeds (transform only) */
  var ridges = gsap.utils.toArray('.ridge');
  if (ridges.length) {
    ridges.forEach(function (r, i) {
      gsap.fromTo(r, { yPercent: (ridges.length - i) * 3 }, {
        yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: '.sec-break', start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
