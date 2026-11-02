// septic-A signature + scroll stories
// Wrapped: only runs when motion is allowed and JS is on.

(function () {
  const html = document.documentElement;
  if (!html.classList.contains('sw-motion')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Wait for GSAP + ScrollTrigger from vendor bundle
  function ready(fn) {
    if (window.gsap && window.ScrollTrigger) { fn(); return; }
    const t = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) { clearInterval(t); fn(); }
    }, 50);
  }

  ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    // Refresh after fonts load so pinned heights are correct
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    // Entrance reveals (text-rise + image-unclip)
    const reveals = document.querySelectorAll('.sw-reveal');
    reveals.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => el.classList.add('is-visible'),
      });
    });

    const unclips = document.querySelectorAll('.sw-unclip');
    unclips.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => el.classList.add('is-visible'),
      });
    });

    // Signature: depth-stick marker tracks page progress
    const stickSections = ['hero', 'process', 'services', 'proof', 'prices', 'contact', 'footer'];
    const markers = document.querySelectorAll('.depth-stick__marker');
    if (markers.length) {
      ScrollTrigger.create({
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          const p = Math.min(1, Math.max(0, self.progress));
          html.style.setProperty('--sw-p', p.toFixed(4));
        },
      });
    }

    // Intro: lid light falls in (≤1.2s, non-blocking)
    const heroScrim = document.querySelector('.hero__scrim');
    if (heroScrim) {
      gsap.fromTo(heroScrim,
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: 'power2.out', delay: 0.1 }
      );
    }

    // Scroll story: process steps stamp readings (pinned ≥640px only)
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        const processSection = document.getElementById('process');
        if (!processSection) return;
        const steps = processSection.querySelectorAll('.process-step');
        if (!steps.length) return;

        gsap.set(steps, { opacity: 0, y: 24 });
        ScrollTrigger.create({
          trigger: processSection,
          start: 'top top',
          end: `+=${steps.length * 55}svh`,
          pin: true,
          scrub: 0.4,
          onUpdate: (self) => {
            const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            steps.forEach((s, i) => {
              if (i <= idx) {
                s.style.opacity = '1';
                s.style.transform = 'translateY(0)';
              } else {
                s.style.opacity = '0';
                s.style.transform = 'translateY(24px)';
              }
            });
          },
        });
      },
    });

    // Multi-step form navigation
    const form = document.querySelector('.quote-form.multi-step');
    if (form) {
      const nextBtns = form.querySelectorAll('[data-next]');
      nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const current = btn.closest('.form-step');
          const next = current.nextElementSibling;
          if (next && next.classList.contains('form-step')) {
            current.hidden = true;
            next.hidden = false;
          }
        });
      });
    }

    // Tool forms: prevent default, show output placeholder
    document.querySelectorAll('.tool-form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const tool = form.dataset.tool;
        const output = document.querySelector(`[data-output="${tool}"]`);
        if (output) {
          output.hidden = false;
          output.textContent = 'Sample result: based on your inputs, we recommend calling now for a firm range.';
        }
      });
    });

    // Open-now status
    const hoursBlock = document.querySelector('[data-open-now]');
    if (hoursBlock) {
      const statusEl = hoursBlock.querySelector('.hours-status');
      if (statusEl) {
        const now = new Date();
        const day = now.getDay(); // 0=Sun
        const hour = now.getHours();
        const min = now.getMinutes();
        const timeVal = hour * 60 + min;
        let open = false;
        if (day >= 1 && day <= 5) { // Mon-Fri 07:00-18:00
          open = timeVal >= 420 && timeVal < 1080;
        } else if (day === 6) { // Sat 08:00-13:00
          open = timeVal >= 480 && timeVal < 780;
        }
        statusEl.textContent = open ? 'Open now' : 'Closed now — we answer at 7 AM';
        statusEl.style.color = open ? '#D4A017' : '';
      }
    }
  });
})();