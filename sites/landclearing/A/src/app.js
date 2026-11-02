/* landclearing-A signature + scroll stories */
(function () {
  if (typeof SW === 'undefined') return;

  /* Guard: only run motion effects when allowed */
  var canMotion = !SW.reduced && document.documentElement.classList.contains('sw-motion');

  /* ---- Signature moment: ribbon draw on process section ---- */
  function initSignature() {
    var lines = document.querySelectorAll('.flag-line path');
    if (!lines.length || !canMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    lines.forEach(function (path) {
      var len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      var sec = path.closest('.sec');
      if (!sec) return;

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.8
        }
      });
    });
  }

  /* ---- Scroll story: step reveals with stagger on desktop ---- */
  function initStepStory() {
    if (!canMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var steps = document.querySelectorAll('.process .step');
    if (steps.length < 2) return;

    /* Desktop pinned sequence */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var section = document.querySelector('#process');
        if (!section) return;
        var n = steps.length;
        var totalH = 'calc(' + n + ' * 55svh + 100svh)';
        section.style.minHeight = totalH;

        steps.forEach(function (step, i) {
          gsap.fromTo(step,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top+=' + (i * 55) + 'svh center',
                end: 'top+=' + ((i + 1) * 55) + 'svh center',
                scrub: 0.5
              }
            }
          );
        });
      }
    });
  }

  /* ---- H1 line-mask reveal ---- */
  function initH1Reveal() {
    var h1 = document.querySelector('[data-split="lines"]');
    if (!h1 || !canMotion) return;

    /* The split module wraps lines; we add stagger delays via CSS var --i */
    var observer = new MutationObserver(function () {
      var wrappers = h1.querySelectorAll(':scope > *');
      if (wrappers.length) {
        wrappers.forEach(function (w, i) {
          w.style.transitionDelay = (i * 70) + 'ms';
        });
        h1.classList.add('is-split');
        observer.disconnect();
      }
    });
    observer.observe(h1, { childList: true });

    /* Fallback: if split already ran */
    if (h1.children.length > 1) {
      Array.from(h1.children).forEach(function (w, i) {
        w.style.transitionDelay = (i * 70) + 'ms';
      });
      h1.classList.add('is-split');
      observer.disconnect();
    }
  }

  /* ---- Init after fonts ready ---- */
  document.fonts.ready.then(function () {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
    initSignature();
    initStepStory();
    initH1Reveal();
  });
})();