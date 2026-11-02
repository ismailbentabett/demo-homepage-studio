(function () {
  if (!window.SW) return;

  // Timeline tool (simple client-side logic)
  SW.mod('timeline', function () {
    const input = document.querySelector('[data-timeline-date]');
    const result = document.querySelector('[data-timeline-result]');
    if (!input || !result) return;

    input.addEventListener('change', function () {
      const d = new Date(this.value);
      if (isNaN(d)) return;
      const sketch = new Date(d); sketch.setDate(sketch.getDate() - 21);
      const paint = new Date(d); paint.setDate(paint.getDate() - 10);
      result.textContent = 'Sketch by ' + sketch.toLocaleDateString() + ' · Paint starts by ' + paint.toLocaleDateString() + ' · Done by ' + d.toLocaleDateString();
    });
  });

  // Signature motion + pinned story
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    document.fonts.ready.then(function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Pinned process story (desktop only)
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          const frames = document.querySelectorAll('.process__frame');
          const steps = document.querySelectorAll('.process__steps .step');
          if (!frames.length || !steps.length) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.process__story',
              start: 'top top',
              end: function () { return '+=' + (steps.length * window.innerHeight * 0.55); },
              pin: true,
              scrub: 0.5
            }
          });

          frames.forEach(function (f, i) {
            f.style.display = 'none';
          });

          steps.forEach(function (step, i) {
            tl.call(function () {
              frames.forEach(function (f) { f.style.display = 'none'; f.classList.remove('is-active'); });
              var targetFrame = frames[Math.min(i, frames.length - 1)];
              if (targetFrame) { targetFrame.style.display = 'block'; targetFrame.classList.add('is-active'); }
            }, null, i * 0.55);
            tl.fromTo(step, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.4 }, i * 0.55);
          });
        }
      });

      // H1 line mask reveal
      const h1 = document.querySelector('[data-split="lines"]');
      if (h1) {
        const lines = Array.from(h1.querySelectorAll(':scope > *'));
        if (lines.length) {
          h1.classList.add('is-split');
          gsap.to(lines.map(function(l) { return l.firstElementChild || l; }), {
            y: 0, duration: 0.7, stagger: 0.07, ease: 'cubic-bezier(.2,.7,.1,1)', delay: 0.2
          });
        }
      }

      ScrollTrigger.refresh();
    });
  }
})();