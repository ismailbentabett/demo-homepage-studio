/* concrete-C · signature: contour lines + elevation markers.
   CSS draws the hero contours and drops the pins (≤ 1.2 s, h1 readable from frame one).
   JS adds: the altimeter that climbs the sheet, the ridge line scrub, and the pinned freeze-thaw lens. */
/* damage reader: a full spoken read for screen readers (runs with or without motion) */
(function () {
  var live = document.querySelector('[data-read-live]');
  if (!live) return;
  var reader = live.closest('.reader');
  reader.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || t.name !== 'dmg') return;
    var v = reader.querySelector('.verdict[data-for="' + t.value + '"]');
    if (!v) return;
    var h = v.querySelector('.verdict__h'), st = v.querySelector('.verdict__stamp'), ps = v.querySelectorAll('p');
    live.textContent = 'Read: ' + (h ? h.textContent : '') + '. What we would do: ' + (st ? st.textContent : '') + '. ' + (ps.length ? ps[ps.length - 1].textContent : '');
  });
})();

(function () {
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* altimeter: reads the data-elev of the band in view, eases between benchmarks */
  var alt = document.querySelector('[data-altimeter]');
  var read = alt && alt.querySelector('[data-alt-read]');
  var bands = [].slice.call(document.querySelectorAll('[data-elev]'));
  if (alt && read && bands.length) {
    var lo = +bands[0].getAttribute('data-elev'), hi = 7800, shown = { v: lo };
    var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };
    var go = function (v) {
      gsap.to(shown, { v: v, duration: 0.6, ease: 'power3.out', overwrite: true, onUpdate: function () {
        read.textContent = fmt(shown.v);
        alt.style.setProperty('--alt-p', ((shown.v - lo) / (hi - lo)).toFixed(3));
      } });
    };
    bands.forEach(function (b) {
      var v = +b.getAttribute('data-elev');
      ScrollTrigger.create({ trigger: b, start: 'top 55%', end: 'bottom 55%',
        onToggle: function (self) { if (self.isActive) go(v); } });
    });
    ScrollTrigger.create({ trigger: 'footer', start: 'top 70%', onEnter: function () { go(hi); }, onLeaveBack: function () {} });
  }

  /* ridge profile draws as the break crosses the screen */
  var brk = document.getElementById('break');
  if (brk) {
    brk.style.setProperty('--ridge-p', 0);
    ScrollTrigger.create({ trigger: brk, start: 'top 85%', end: 'center 45%', scrub: 0.4,
      onUpdate: function (self) { brk.style.setProperty('--ridge-p', self.progress.toFixed(3)); } });
  }

  /* freeze-thaw story: pinned on desktop, steps drive the lens layers */
  var story = document.querySelector('[data-story]');
  var lens = story && story.querySelector('[data-lens]');
  var steps = story ? [].slice.call(story.querySelectorAll('[data-step-n]')) : [];
  var section = story && story.closest('section');
  var copy = story && story.querySelector('.story__copy');
  function setStep(n) {
    if (!lens) return;
    lens.setAttribute('data-step', String(n));
    steps.forEach(function (s) {
      var on = +s.getAttribute('data-step-n') === n;
      s.classList.toggle('is-active', on);
      if (on) { s.setAttribute('aria-current', 'step'); if (copy) copy.style.setProperty('--mark-y', s.offsetTop + 'px'); }
      else s.removeAttribute('aria-current');
    });
  }
  if (story && lens && steps.length) {
    var n = steps.length;
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        section.classList.add('is-live');
        setStep(1);
        var st = ScrollTrigger.create({
          trigger: story, start: 'top top+=' + (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 64),
          end: function () { return '+=' + Math.round(n * 0.55 * window.innerHeight); },
          pin: true, pinSpacing: true, anticipatePin: 1,
          onUpdate: function (self) { setStep(Math.min(n, 1 + Math.floor(self.progress * n * 0.999))); }
        });
        return function () { st.kill(); section.classList.remove('is-live'); setStep(n); steps.forEach(function (s) { s.classList.remove('is-active'); s.removeAttribute('aria-current'); }); };
      },
      '(max-width: 899px)': function () {
        /* phone: no pin, each step sets the lens as it reaches mid-screen */
        var sts = steps.map(function (s) {
          return ScrollTrigger.create({ trigger: s, start: 'top 60%', end: 'bottom 60%',
            onToggle: function (self) { if (self.isActive) setStep(+s.getAttribute('data-step-n')); } });
        });
        return function () { sts.forEach(function (t) { t.kill(); }); setStep(n); };
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
