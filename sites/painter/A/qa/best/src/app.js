/* painter-A — Coat Schedule Stripe signature + tape-pull intro */
(function () {
  if (typeof SW === 'undefined') return;
  if (!document.documentElement.classList.contains('sw-motion')) return;
  if (SW.reduced) return;

  document.fonts.ready.then(init);

  function init() {
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    /* Intro: tape-pull reveal on h1 lines */
    var h1 = document.querySelector('#hero h1[data-split="lines"]');
    if (h1) {
      var lines = h1.querySelectorAll('.split-line-inner');
      if (lines.length) {
        gsap.to(lines, {
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.2
        });
      }
    }

    /* Signature story: stripe builds coat-by-coat via --sw-p */
    var stripeSections = document.querySelectorAll('[data-sw-signature]');
    if (stripeSections.length) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          endTrigger: '#footer',
          end: 'bottom bottom',
          scrub: 0.6
        }
      });
      tl.to(document.documentElement, { '--sw-p': 1, ease: 'none' });
    }

    /* Process photos unclip on enter */
    var processFrames = document.querySelectorAll('.sec-process .frame');
    processFrames.forEach(function (frame) {
      ScrollTrigger.create({
        trigger: frame,
        start: 'top 85%',
        onEnter: function () { frame.classList.add('is-in'); },
        once: true
      });
    });

    /* Hero photo unclip */
    var heroFrame = document.querySelector('.sec-hero .frame');
    if (heroFrame) {
      ScrollTrigger.create({
        trigger: heroFrame,
        start: 'top 85%',
        onEnter: function () { heroFrame.classList.add('is-in'); },
        once: true
      });
    }

    /* Break image unclip */
    var breakFrame = document.querySelector('.sec-break .frame');
    if (breakFrame) {
      ScrollTrigger.create({
        trigger: breakFrame,
        start: 'top 85%',
        onEnter: function () { breakFrame.classList.add('is-in'); },
        once: true
      });
    }

    ScrollTrigger.refresh();
  }
})();