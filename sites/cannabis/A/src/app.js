/* cannabis-A signature: lamp stops + filmstrip intro */
(function () {
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Intro: lamp 01 warms behind headline */
  var heroLamp = document.querySelector('#hero .lamp');
  if (heroLamp) {
    gsap.fromTo(heroLamp,
      { opacity: 0, boxShadow: '0 0 0 rgba(212,148,58,0)' },
      { opacity: 1, boxShadow: '0 0 24px rgba(212,148,58,.4)', duration: 1, ease: 'power2.out', delay: 0.2 }
    );
  }

  /* Scroll story: lamps light sequentially in first-visit */
  var visitSection = document.querySelector('#first-visit');
  if (visitSection && window.matchMedia('(min-width: 640px)').matches) {
    var lamps = visitSection.querySelectorAll('.lamp');
    var steps = visitSection.querySelectorAll('.step');
    if (lamps.length && steps.length) {
      ScrollTrigger.create({
        trigger: visitSection,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: function (self) {
          var progress = self.progress;
          var activeIndex = Math.min(Math.floor(progress * lamps.length), lamps.length - 1);
          lamps.forEach(function (lamp, i) {
            if (i <= activeIndex) {
              lamp.classList.add('is-on');
            } else {
              lamp.classList.remove('is-on');
            }
          });
        }
      });
    }
  }

  /* Signature rail: light current section's lamp on entry */
  var signatureSections = document.querySelectorAll('[data-sw-signature="lamp-stop"]');
  signatureSections.forEach(function (section) {
    var lamp = section.querySelector('.lamp-rail .lamp');
    if (!lamp) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: function () { lamp.classList.add('is-on'); },
      onLeaveBack: function () { lamp.classList.remove('is-on'); }
    });
  });

  /* Refresh after fonts load */
  document.fonts.ready.then(function () {
    ScrollTrigger.refresh();
  });
})();