/* carpenter-A signature + scroll stories */
(function () {
  if (!window.SW) return;
  var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');
  if (reduced) return;

  /* Wait for fonts so SplitText measures correctly */
  document.fonts.ready.then(init);

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* Intro: hero cut-rule draw + filmstrip slide-in */
    var heroRule = document.querySelector('#hero .cut-rule__kerf');
    var heroLabel = document.querySelector('#hero .cut-rule__label');
    var filmstrip = document.querySelector('.filmstrip__track');
    if (heroRule && heroLabel && filmstrip) {
      var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(heroRule, { scaleX: 0, transformOrigin: 'left center', duration: 0.8 })
        .from(heroLabel, { opacity: 0, x: -12, duration: 0.4 }, '-=0.4')
        .from(filmstrip.children, { x: 40, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.3');
    }

    /* H1 line-mask reveal */
    var h1 = document.querySelector('[data-split="lines"]');
    if (h1 && typeof SplitText !== 'undefined') {
      var split = new SplitText(h1, { type: 'lines', linesClass: 'split-line' });
      h1.classList.add('is-split');
      gsap.from(split.lines, {
        yPercent: 100,
        stagger: 0.07,
        duration: 0.7,
        ease: 'cubic-bezier(.2,.7,.1,1)',
        delay: 0.2
      });
    }

    /* Scroll story 1: pinned scarf-joint SVG in rot repair section */
    var storySection = document.getElementById('story-rot');
    if (storySection && window.matchMedia('(min-width: 640px)').matches) {
      ScrollTrigger.create({
        trigger: storySection,
        start: 'top top',
        end: '+=120%',
        pin: true,
        scrub: 0.8,
        animation: gsap.timeline()
          .from('.story-rot__copy', { x: -60, opacity: 0, duration: 1 })
          .from('.story-rot__media .frame', { clipPath: 'inset(0 0 100% 0)', stagger: 0.2, duration: 1 }, '<0.2')
      });
    }

    /* Scroll story 2: cut-rules wipe in via --sw-p as each enters view */
    var rules = document.querySelectorAll('.cut-rule[data-sw-signature]');
    rules.forEach(function (rule) {
      var kerf = rule.querySelector('.cut-rule__kerf');
      if (!kerf) return;
      ScrollTrigger.create({
        trigger: rule,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 0.5,
        onUpdate: function (self) {
          kerf.style.transform = 'scaleX(' + self.progress + ')';
        }
      });
    });

    /* Refresh after fonts + layout settle */
    ScrollTrigger.refresh();
  }
})();