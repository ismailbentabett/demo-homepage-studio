/* nursery-B signature + scroll stories */
(function () {
  if (!window.SW || SW.reduced) return;
  if (!document.documentElement.classList.contains('sw-motion')) return;

  document.fonts.ready.then(function () {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  /* Intro: sun dial marker traces arc */
  var introTl = gsap.timeline({ delay: 0.2 });
  introTl.from('.dial-marker', {
    cx: 10,
    duration: 1,
    ease: 'power2.out'
  });
  introTl.from('.hero-content > *', {
    y: 24,
    opacity: 0,
    stagger: 0.08,
    duration: 0.5,
    ease: 'power3.out'
  }, '-=0.6');

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('[data-reveal], .card, .review, .form-step');
  reveals.forEach(function (el) {
    el.setAttribute('data-reveal', '');
  });

  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.batch('[data-reveal]', {
      onEnter: function (batch) {
        batch.forEach(function (el) {
          el.classList.add('is-visible');
        });
      },
      start: 'top 85%'
    });

    ScrollTrigger.batch('.frame', {
      onEnter: function (batch) {
        batch.forEach(function (el) {
          el.classList.add('is-visible');
        });
      },
      start: 'top 85%'
    });

    /* Story: dial rotation on desktop */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        gsap.to('.sun-dial-overlay', {
          rotation: 15,
          transformOrigin: '50% 100%',
          scrollTrigger: {
            trigger: '#services',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    });
  }
})();