/* landclearing-C — split-rail timeline signature + season story */
(function () {
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  document.fonts.ready.then(function () {
    ScrollTrigger.refresh();
  });

  /* Intro: hero diagonal settle + haze lift */
  var heroPhoto = document.querySelector('.hero__photo img');
  var heroContent = document.querySelector('.hero__content');
  if (heroPhoto && heroContent) {
    gsap.from(heroPhoto, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: 0.9,
      ease: 'power2.out',
      delay: 0.1
    });
    gsap.from(heroContent, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.3
    });
  }

  /* Season story: pinned rail build on desktop only */
  ScrollTrigger.matchMedia({
    '(min-width: 640px)': function () {
      var storySection = document.getElementById('season-story');
      if (!storySection) return;

      var cards = storySection.querySelectorAll('.season-card');
      if (!cards.length) return;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: storySection,
          start: 'top top',
          end: '+=220svh',
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true
        }
      });

      cards.forEach(function (card, i) {
        tl.to(card, {
          borderLeftColor: '#C8A951',
          duration: 0.3,
          ease: 'none'
        }, i * 0.25);
      });
    }
  });

  /* Split-rail signature: activate rails as sections enter view */
  var signatureSections = ['hero', 'process', 'services', 'proof', 'estimator', 'contact', 'footer'];
  var railDots = document.querySelectorAll('.rail-deco .rail-dot');

  signatureSections.forEach(function (id, i) {
    var section = document.getElementById(id);
    if (!section || !railDots[i]) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: function () {
        railDots[i].setAttribute('fill', '#C8A951');
      },
      onLeaveBack: function () {
        railDots[i].setAttribute('fill', 'currentColor');
      }
    });
  });

  /* Margin rail activation for area and proof sections */
  var marginRails = document.querySelectorAll('.margin-rail__track .rail-segment');
  marginRails.forEach(function (rail) {
    var section = rail.closest('section');
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: function () { rail.classList.add('is-active'); },
      onLeaveBack: function () { rail.classList.remove('is-active'); }
    });
  });

})();