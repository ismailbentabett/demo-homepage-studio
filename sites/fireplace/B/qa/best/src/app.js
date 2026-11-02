/* fireplace-B — signature moment + scroll stories */
(function () {
  'use strict';

  if (typeof SW === 'undefined') return;

  /* Symptom checker (works without JS via noscript fallback in copy; this enhances) */
  SW.mod('symptom-checker', function () {
    var tool = document.querySelector('[data-hook="symptom-checker"]');
    if (!tool) return;

    var buttons = tool.querySelectorAll('.symptom-btn');
    var result = tool.querySelector('[data-symptom-result]');
    var cta = tool.querySelector('[data-symptom-cta]');

    var answers = {
      smoke: { text: 'Smoke rolling into the room usually means a draft problem, a cold flue or a blockage. Book an inspection before your next fire.', svc: 'Inspection' },
      smell: { text: 'A campfire smell in summer is usually creosote odor from a damp flue or a missing cap. A sweep and a new cap often fix it.', svc: 'Sweep' },
      flakes: { text: 'Black crunchy flakes on the grate are stage-2 creosote. It builds from cool fires and wet wood. Book a sweep soon.', svc: 'Sweep' },
      stain: { text: 'A water stain by the chimney usually traces to the crown, the flashing or a rusted chase cover. Book a leak check before it gets worse.', svc: 'Inspection' },
      'wont-light': { text: 'A stove that won\'t stay lit may have a dirty pilot, a weak thermocouple or a venting issue. Book a service visit.', svc: 'Other' },
      unused: { text: 'If it hasn\'t been used in years, book a camera inspection before you light it. Animals, cracks and collapsed tiles hide inside.', svc: 'Camera' }
    };

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var key = btn.getAttribute('data-symptom');
        var answer = answers[key];
        if (answer && result) {
          result.textContent = answer.text;
          if (cta) {
            cta.hidden = false;
            cta.setAttribute('data-service', answer.svc);
          }
        }
      });
    });
  });

  /* Signature moment: intro note slide-up + chip stamp */
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    document.fonts.ready.then(function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      /* Intro: note slides up, chips stamp on */
      var note = document.querySelector('.hero__note');
      if (note) {
        gsap.from(note, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.1
        });
      }

      var chips = document.querySelectorAll('.hero__findings-preview .chip');
      if (chips.length) {
        gsap.from(chips, {
          scale: 0.9,
          opacity: 0,
          duration: 0.12,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.5
        });
      }

      /* Scroll story: camera-scope wipe on sweep section (desktop only) */
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          var scopeFrame = document.querySelector('[data-scope-wipe] img');
          if (scopeFrame) {
            scopeFrame.classList.add('is-wiping');
            gsap.fromTo(scopeFrame,
              { clipPath: 'circle(0% at 50% 0%)' },
              {
                clipPath: 'circle(75% at 50% 100%)',
                ease: 'none',
                scrollTrigger: {
                  trigger: '#sweep',
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: true,
                  pin: '.scope-wipe__frame'
                }
              }
            );
          }
        }
      });

      /* Scroll story: finding numbers count up (handled by kit counters module via data-count) */

      /* Refresh after fonts loaded */
      ScrollTrigger.refresh();
    });
  }
})();