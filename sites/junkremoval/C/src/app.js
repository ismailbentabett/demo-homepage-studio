/* junkremoval-C signature + scroll stories */
(function () {
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  gsap.registerPlugin(ScrollTrigger);

  document.fonts.ready.then(() => ScrollTrigger.refresh());

  /* Intro: hero door rises one panel */
  const heroMask = document.querySelector('.hero-mask');
  if (heroMask) {
    gsap.fromTo(heroMask,
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
      { clipPath: 'polygon(0 15%, 100% 15%, 100% 100%, 0 100%)', duration: 1.1, ease: 'power3.out', delay: 0.1 }
    );
  }

  /* Entrance patterns */
  gsap.utils.toArray('.reveal-text').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });

  gsap.utils.toArray('.reveal-image').forEach(el => {
    gsap.to(el, {
      clipPath: 'inset(0)', duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });

  /* Scroll story: village garages (desktop only) */
  ScrollTrigger.matchMedia({
    '(min-width: 640px)': function () {
      const panels = gsap.utils.toArray('.garage-panel');
      if (panels.length > 2) {
        panels.forEach((panel, i) => {
          gsap.fromTo(panel,
            { '--panel-open': 0 },
            {
              '--panel-open': 1,
              scrollTrigger: {
                trigger: panel,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: 0.5
              }
            }
          );
        });
      }
    }
  });

  /* Signature hook for data-sw-signature */
  const sigEls = document.querySelectorAll('[data-sw-signature="garage-panel"]');
  sigEls.forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => el.classList.add('panel-active'),
      onLeaveBack: () => el.classList.remove('panel-active')
    });
  });
})();