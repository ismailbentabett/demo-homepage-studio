/* Bungalow Current: room markers, the house mini-map, and the one-room rewire story. */
(function () {
  var root = document.documentElement;

  /* Drawn art stays until a real photo is present (placeholders are 1 px). */
  function checkPhoto(img) {
    var frame = img.closest('.art-frame');
    if (!frame) return;
    if (img.complete && img.naturalWidth > 8) frame.classList.add('has-photo');
  }
  document.querySelectorAll('.art-frame .photo').forEach(function (img) {
    checkPhoto(img);
    img.addEventListener('load', function () { checkPhoto(img); });
  });

  /* House mini-map in the header follows the room you are reading. */
  var map = document.querySelector('[data-housemap]');
  var label = document.querySelector('[data-housemap-label]');
  var rooms = Array.prototype.slice.call(document.querySelectorAll('main > section[data-room]'));
  if (map && rooms.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        map.setAttribute('data-room', e.target.getAttribute('data-room'));
        if (label) label.textContent = e.target.getAttribute('data-room-name') || '';
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    rooms.forEach(function (s) { io.observe(s); });
  }

  if (window.SW && SW.reduced) return;
  if (!root.classList.contains('sw-motion')) return;
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* Story: one room rewired. >= 900 px: the wall drawing stays put while the four steps scroll past and scrub it. */
  var story = document.querySelector('.story');
  var track = story && story.querySelector('[data-story]');
  var steps = story ? Array.prototype.slice.call(story.querySelectorAll('[data-story-step]')) : [];

  function setStep(p) {
    var n = Math.min(4, Math.max(1, 1 + Math.floor(p * 4 - 0.0001)));
    story.setAttribute('data-step', String(n));
    var draw = Math.min(1, Math.max(0, (p - 0.12) / 0.38));
    story.style.setProperty('--draw', draw.toFixed(3));
    steps.forEach(function (li, i) { li.classList.toggle('is-on', i < n); });
  }

  ScrollTrigger.matchMedia({
    '(min-width: 900px)': function () {
      if (!story || !track) return;
      story.classList.add('is-scrub');
      setStep(0);
      var st = ScrollTrigger.create({
        trigger: story.querySelector('.story__steps'),
        start: 'top 62%',
        end: 'bottom 55%',
        onUpdate: function (self) { setStep(self.progress); },
        onRefresh: function (self) { setStep(self.progress); }
      });
      return function () {
        st.kill();
        story.classList.remove('is-scrub');
        story.removeAttribute('data-step');
        story.style.removeProperty('--draw');
        steps.forEach(function (li) { li.classList.remove('is-on'); });
      };
    },
    '(max-width: 899px)': function () {
      /* Phone and tablet: no pin. The new cable draws itself once as the drawing comes into view. */
      var wire = story && story.querySelector('.sv-wire');
      if (!wire) return;
      var tw = gsap.fromTo(wire, { strokeDashoffset: 1 }, {
        strokeDashoffset: 0, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: wire.closest('svg'), start: 'top 75%', once: true }
      });
      return function () { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(wire, { clearProps: 'strokeDashoffset' }); };
    }
  });

  /* Break: the new run of cable draws across under the old knob-and-tube. */
  var run = document.querySelector('.break .art-newrun');
  if (run) {
    run.setAttribute('pathLength', '1');
    gsap.fromTo(run, { strokeDashoffset: 1 }, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: '.break', start: 'top 80%', end: 'center 45%', scrub: 0.6 }
    });
  }

  /* The house: lights come on room by room, attic down to the basement, then out to the garage. */
  var plan = document.querySelector('.plan');
  if (plan) {
    var order = ['attic', 'bed', 'ceil', 'insp', 'front', 'living', 'kitchen', 'base', 'garage'];
    var cells = order.map(function (k) { return plan.querySelector('.room--' + k); }).filter(Boolean);
    plan.classList.add('is-armed');
    ScrollTrigger.create({
      trigger: plan, start: 'top 72%', once: true,
      onEnter: function () {
        cells.forEach(function (el, i) { setTimeout(function () { el.classList.add('is-lit'); }, i * 110); });
      }
    });
    /* Never leave a room dark if the trigger is skipped (deep link, print, capture). */
    setTimeout(function () { cells.forEach(function (el) { el.classList.add('is-lit'); }); }, 6000);
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
