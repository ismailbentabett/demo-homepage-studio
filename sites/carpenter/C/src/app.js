/* carpenter-C app.js — Floor Band + Baluster Rule signature */
(function () {
  if (typeof SW === 'undefined') return;

  /* Elevation badge: light active floor on scroll */
  SW.mod('elevation', function () {
    var badge = document.querySelector('[data-elevation]');
    if (!badge) return;
    var floors = badge.querySelectorAll('.fl');
    var bands = document.querySelectorAll('.floor-band[data-sw-signature="floor-band"]');
    if (!floors.length || !bands.length) return;

    var map = {
      'hero': null,
      'floor-1': '.fl-1',
      'services': '.fl-1',
      'floor-2': '.fl-2',
      'proof': '.fl-2',
      'floor-3': '.fl-3',
      'area': '.fl-3',
      'contact': '.fl-3'
    };

    function setActive(id) {
      floors.forEach(function (f) { f.classList.remove('is-active'); });
      var sel = map[id];
      if (sel) {
        var el = badge.querySelector(sel);
        if (el) el.classList.add('is-active');
      }
    }

    if (!document.documentElement.classList.contains('sw-motion') || SW.reduced) {
      setActive('hero');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id || entry.target.closest('section')?.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' });

    bands.forEach(function (b) { observer.observe(b); });
  });

  /* Baluster rule draw on entry */
  SW.mod('baluster-draw', function () {
    if (!document.documentElement.classList.contains('sw-motion') || SW.reduced) return;
    var rules = document.querySelectorAll('.baluster-rule');
    if (!rules.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    rules.forEach(function (r) { observer.observe(r); });
  });

  /* Hero type-mask background image from hero photo */
  SW.mod('hero-mask', function () {
    var title = document.querySelector('.type-mask');
    var img = document.querySelector('.hero-img');
    if (!title || !img) return;

    function setBg() {
      var src = img.currentSrc || img.src;
      if (src) {
        title.style.setProperty('--hero-bg', 'url(' + src + ')');
      }
    }

    if (img.complete) {
      setBg();
    } else {
      img.addEventListener('load', setBg);
    }
  });

  /* GSAP pinned elevation story (640px+ only) */
  SW.mod('elevation-story', function () {
    if (!document.documentElement.classList.contains('sw-motion') || SW.reduced) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var badge = document.querySelector('[data-elevation]');
        var hero = document.getElementById('hero');
        var contact = document.getElementById('contact');
        if (!badge || !hero || !contact) return;

        gsap.fromTo(badge,
          { opacity: 0, y: 20 },
          {
            opacity: 0.6,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  });

  /* Checklist result card: bridge kit's text output to designed card */
  SW.mod('checklist-card', function () {
    var box = document.querySelector('[data-checklist]');
    if (!box) return;
    var card = box.querySelector('.checklist-result-card');
    var textEl = box.querySelector('[data-checklist-text]');
    var cta = box.querySelector('[data-checklist-cta]');
    if (!card || !textEl) return;

    var observer = new MutationObserver(function () {
      var src = box.querySelector('[data-checklist-result]');
      if (!src) return;
      var txt = src.textContent || '';
      if (txt && txt !== textEl.textContent) {
        textEl.textContent = txt;
        card.removeAttribute('hidden');
        if (cta) {
          var n = parseInt(box.getAttribute('data-checked') || '0', 10);
          if (n >= 2) cta.removeAttribute('hidden');
          else cta.setAttribute('hidden', '');
        }
        /* Light floor icon based on severity */
        var floors = card.querySelectorAll('.fl');
        floors.forEach(function (f) { f.classList.remove('is-active'); });
        var activeFloor = n >= 3 ? '.fl-1' : n >= 2 ? '.fl-2' : n >= 1 ? '.fl-3' : null;
        if (activeFloor) {
          var el = card.querySelector(activeFloor);
          if (el) el.classList.add('is-active');
        }
      }
    });
    observer.observe(box, { childList: true, subtree: true, characterData: true });
  });

  /* Refresh ScrollTrigger after fonts load */
  if (typeof ScrollTrigger !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();