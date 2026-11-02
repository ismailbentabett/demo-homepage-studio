// pinestraw-B signature: Load Ticket strip wipe + bale counter story pin
(function () {
  if (!window.SW) return;
  var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');
  if (reduced) return;

  // Wait for fonts before measuring
  document.fonts.ready.then(init);

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Signature moment: ticket strip wipes in at each section end
    var strips = document.querySelectorAll('.ticket-strip');
    strips.forEach(function (strip) {
      gsap.from(strip, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: strip,
          start: 'top 90%',
          once: true
        }
      });
    });

    // H1 line-mask reveal
    var h1 = document.querySelector('[data-split="lines"]');
    if (h1) {
      var lines = h1.children;
      if (lines.length) {
        gsap.to(lines, {
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'cubic-bezier(.2,.7,.1,1)',
          delay: 0.1,
          onStart: function () {
            h1.classList.add('is-in');
          }
        });
      }
    }

    // Pinned counter story on desktop only
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var counterSection = document.getElementById('counter-story');
        if (!counterSection) return;

        var tool = counterSection.querySelector('.counter-story__tool');
        var text = counterSection.querySelector('.counter-story__text');
        if (!tool || !text) return;

        // Pin the tool while text scrolls through
        ScrollTrigger.create({
          trigger: counterSection,
          start: 'top top',
          end: '+=165svh',
          pin: tool,
          pinSpacing: true
        });
      }
    });

    // Refresh after everything settles
    ScrollTrigger.refresh();
  }
})();