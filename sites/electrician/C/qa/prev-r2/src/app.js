/* electrician-C — signature moment + scroll stories */
(function () {
  'use strict';

  /* Guard: only run when motion is allowed and JS is on */
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  /* Wait for fonts so text metrics are stable */
  document.fonts.ready.then(init);

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* --- Signature: Room marker connector line draws as you scroll --- */
    var markers = document.querySelectorAll('.room-marker');
    if (markers.length > 1) {
      markers.forEach(function (marker, i) {
        if (i === 0) return; /* hero marker is static-active */
        var line = marker.querySelector('.room-marker__line');
        var dot = marker.querySelector('.room-marker__dot');
        if (!line || !dot) return;

        /* Set initial state */
        gsap.set(line, { scaleY: 0 });
        gsap.set(dot, { backgroundColor: 'transparent' });

        ScrollTrigger.create({
          trigger: marker.closest('.section') || marker.parentElement,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
          onEnter: function () {
            gsap.to(line, { scaleY: 1, duration: 0.9, ease: 'power3.out' });
            gsap.to(dot, { backgroundColor: 'var(--accent)', duration: 0.4, delay: 0.5 });
            marker.classList.add('is-active');
          },
          onLeaveBack: function () {
            gsap.to(line, { scaleY: 0, duration: 0.5, ease: 'power2.in' });
            gsap.to(dot, { backgroundColor: 'transparent', duration: 0.3 });
            marker.classList.remove('is-active');
          }
        });
      });
    }

    /* --- Hero entrance: arch mask expands, headline lines rise --- */
    var heroFrame = document.querySelector('.arch-hero__frame');
    var heroH1 = document.querySelector('.arch-hero__h1');
    if (heroFrame && heroH1) {
      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      /* Arch expands from center */
      gsap.set(heroFrame, { clipPath: 'ellipse(0% 0% at 50% 48%)' });
      tl.to(heroFrame, {
        clipPath: 'ellipse(50% 48% at 50% 48%)',
        duration: 0.8
      });

      /* Headline lines rise staggered */
      var lines = heroH1.querySelectorAll('[data-split-line]');
      if (lines.length) {
        gsap.set(lines, { y: 40, opacity: 0 });
        tl.to(lines, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12
        }, '-=0.3');
      } else {
        /* Fallback if split didn't run */
        gsap.set(heroH1, { y: 30, opacity: 0 });
        tl.to(heroH1, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3');
      }
    }

    /* --- Services grid stagger unclip --- */
    var svcCards = document.querySelectorAll('.svc-card');
    if (svcCards.length) {
      gsap.set(svcCards, { clipPath: 'inset(0 0 100% 0)' });
      ScrollTrigger.batch(svcCards, {
        start: 'top 85%',
        onEnter: function (batch) {
          gsap.to(batch, {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.6,
            stagger: 0.06,
            ease: 'power2.out'
          });
        }
      });
    }

    /* --- Mosaic tiles unclip in stagger --- */
    var mosaicTiles = document.querySelectorAll('.mosaic__grid > *');
    if (mosaicTiles.length) {
      gsap.set(mosaicTiles, { clipPath: 'inset(0 0 100% 0)' });
      ScrollTrigger.batch(mosaicTiles, {
        start: 'top 85%',
        onEnter: function (batch) {
          gsap.to(batch, {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out'
          });
        }
      });
    }

    /* Refresh after everything settles */
    ScrollTrigger.refresh();
  }
})();