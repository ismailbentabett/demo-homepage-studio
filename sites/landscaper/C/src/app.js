/* landscaper-C: the plant-marker signature moment and two scroll stories.
   Everything here is decoration on top of content that is already visible without it. */
(function () {
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Signature: the hero tag is hung on its string and settles, like a nursery label in a breeze. */
  var tag = document.querySelector('.marker--hero');
  var string = document.querySelector('.hero__string');
  if (tag) {
    gsap.set(tag, { xPercent: -50, rotation: -16, opacity: 0 });
    gsap.timeline({ delay: 0.35 })
      .to(tag, { opacity: 1, rotation: 4, duration: 0.5, ease: 'sine.out' })
      .to(tag, { rotation: -5, duration: 0.45, ease: 'sine.inOut' })
      .to(tag, { rotation: -3, duration: 0.4, ease: 'sine.inOut' });
  }
  if (string) gsap.from(string, { scaleY: 0, transformOrigin: '50% 0%', duration: 0.4, ease: 'power2.out', delay: 0.2 });

  /* Every other marker tag on the page swings once as it comes into view. */
  gsap.utils.toArray('.svc .marker, .review .marker, .split-story__copy .marker, .marker--specimen').forEach(function (m) {
    gsap.from(m, {
      rotation: -7, transformOrigin: '92% 50%', duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: m, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  /* Story 1: walking down the oak allée. The drawing slowly pushes in as the band crosses the screen. */
  var allee = document.querySelector('.break-frame');
  if (allee) {
    gsap.fromTo(allee, { '--zoom': 1 }, {
      '--zoom': 1.18, ease: 'none',
      scrollTrigger: { trigger: allee, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
    });
  }
  var line = document.querySelector('.break__line');
  if (line) {
    gsap.from(line, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: line, start: 'top 90%' } });
  }

  /* Story 2: the botanical plate drifts against the quote. */
  var plate = document.querySelector('.story-frame');
  if (plate) {
    gsap.fromTo(plate, { '--drift': '-4%' }, {
      '--drift': '4%', ease: 'none',
      scrollTrigger: { trigger: plate, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
    });
  }

  /* Plant finder: new tags swing in when the light changes. */
  document.querySelectorAll('[data-filter-btn]').forEach(function (b) {
    b.addEventListener('click', function () {
      var shown = document.querySelectorAll('.plant-list .marker:not([hidden])');
      gsap.fromTo(shown, { rotation: -6 }, { rotation: 0, transformOrigin: '92% 20%', duration: 0.7, ease: 'power3.out', stagger: 0.04 });
    });
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
