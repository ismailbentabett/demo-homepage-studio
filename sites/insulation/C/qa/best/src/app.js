/* insulation-C · Lakeband: the drift band, the county map intro, the street zoom story, the eave scrub. */
(function () {
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var lead = $('form[data-lead]');

  /* ---------- glue: always on (JS), motion or not ---------- */
  // Ice dam check → the form's "What winter does" boxes
  var quizGo = $('[data-quiz-go]');
  if (quizGo && lead) quizGo.addEventListener('click', function (e) {
    e.preventDefault();
    var picked = $$('.tool--quiz input:checked').map(function (i) { return i.value; });
    $$('input[name="winter"]', lead).forEach(function (b) { if (picked.indexOf(b.value) > -1) b.checked = true; });
    SW.prefillForm({}, { focus: 'service' });
  });

  // Cold room log → a note
  var log = $('[data-log]');
  if (log) {
    var out = $('[data-log-out]', log);
    var write = function () {
      var rooms = $$('input[name="logroom"]:checked', log).map(function (i) { return i.value; });
      var when = ($('input[name="logwhen"]:checked', log) || {}).value || '';
      if (!rooms.length) { out.textContent = 'Tap the rooms that run cold.'; return ''; }
      var list = rooms.length > 1 ? rooms.slice(0, -1).join(', ') + ' and ' + rooms[rooms.length - 1] : rooms[0];
      var note = 'Cold ' + when + ': ' + list + '.';
      out.textContent = note;
      return note;
    };
    log.addEventListener('change', write);
    var logGo = $('[data-log-go]');
    if (logGo) logGo.addEventListener('click', function (e) {
      e.preventDefault();
      var note = write();
      SW.prefillForm(note ? { note: note } : {}, { focus: 'note' });
    });
  }

  // "This is my house" → service + house type
  $$('[data-house]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      SW.prefillForm({ service: a.getAttribute('data-house-svc'), houseType: a.getAttribute('data-house') }, { focus: 'service' });
    });
  });

  // Form ZIP → "your street on the map" pin
  var fz = lead && $('input[name="zip"]', lead), fzOut = $('[data-form-zip]');
  if (fz && fzOut) {
    var showZip = function () { var z = (fz.value || '').replace(/\D/g, ''); fzOut.textContent = z.length === 5 ? z + ' · on the map' : 'ZIP to come'; };
    fz.addEventListener('input', showZip); fz.addEventListener('change', showZip);
  }

  // ZIP checker → light the city pin, park the band over it
  var zipBox = $('form[data-zip]');
  if (zipBox && 'MutationObserver' in window) {
    var cityPin = $('.apin--city'), park = $('[data-park]');
    new MutationObserver(function () {
      var yes = zipBox.getAttribute('data-zip-state') === 'yes';
      if (cityPin) cityPin.classList.toggle('is-lit', yes);
      if (park) park.style.transform = yes ? 'translateY(90px)' : '';
    }).observe(zipBox, { attributes: true, attributeFilter: ['data-zip-state'] });
    if (park) park.style.transition = 'transform 900ms cubic-bezier(.77,0,.175,1)';
  }

  // Review ↔ strip pin
  $$('.rev').forEach(function (r) {
    var pin = $('.strip__pins [data-pin="' + r.getAttribute('data-rev') + '"]');
    var on = function () { r.classList.add('is-on'); if (pin) pin.classList.add('is-on'); };
    var off = function () { r.classList.remove('is-on'); if (pin) pin.classList.remove('is-on'); };
    r.addEventListener('mouseenter', on); r.addEventListener('mouseleave', off);
    r.addEventListener('focusin', on); r.addEventListener('focusout', off);
  });

  /* ---------- motion ---------- */
  if (SW.reduced || !root.classList.contains('sw-motion') || !window.gsap) return;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  if (ST) gsap.registerPlugin(ST);

  // Drift: every band moves with page scroll
  var raf = 0;
  var drift = function () {
    raf = 0;
    var max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    root.style.setProperty('--sw-p', (scrollY / max).toFixed(4));
  };
  addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(drift); }, { passive: true });
  drift();

  // Signature: county map intro (≤ 1.1 s, text never waits)
  var cmap = $('.cmap');
  if (cmap) {
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo($$('.cmap__shore', cmap), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: .8, stagger: .08 }, 0)
      .fromTo($$('.cmap__band', cmap), { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: .7, stagger: .08 }, .15)
      .fromTo($$('.mpin', cmap).sort(function (a, b) { return parseInt(a.style.getPropertyValue('--d'), 10) - parseInt(b.style.getPropertyValue('--d'), 10); }).reduce(function (a, g) { return a.concat(Array.prototype.slice.call(g.children)); }, []),
        { opacity: 0, y: -18 }, { opacity: 1, y: 0, duration: .4, stagger: .06, ease: 'back.out(2)' }, .35);
    gsap.from('.plate', { opacity: 0, y: 16, duration: .6, delay: .5, ease: 'power3.out' });
  }

  if (!ST) return;

  // Story: pinned street zoom on desktop, step cards seal on phones
  var story = $('.story'), stage = $('[data-story]'), smap = $('[data-story-map]');
  var steps = $$('.step', stage || document);
  var views = ['288 326 320 288', '240 356 320 288', '235 241 320 288'];
  var full = '0 0 800 720';
  var seal = function (step) { step.classList.add('is-sealed'); };

  ST.matchMedia({
    '(min-width: 900px)': function () {
      if (!story || !stage || !smap || steps.length !== 3) return;
      story.classList.add('is-pinned');
      smap.setAttribute('viewBox', views[0]);
      var current = -1;
      var go = function (i) {
        if (i === current) return;
        current = i;
        steps.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
        $$('.smap__pin', smap).forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-zoom') === String(i)); });
        gsap.to(smap, { attr: { viewBox: views[i] }, duration: .9, ease: 'power2.inOut', overwrite: true });
        gsap.delayedCall(.5, function () { seal(steps[i]); });
      };
      var trig = ST.create({
        trigger: stage, start: 'top top+=' + (parseInt(getComputedStyle(root).getPropertyValue('--header-h'), 10) || 72),
        end: function () { return '+=' + Math.round(innerHeight * 0.55 * 3); },
        pin: true, anticipatePin: 1,
        onUpdate: function (self) { go(Math.min(2, Math.floor(self.progress * 3))); }
      });
      go(0);
      return function () {
        trig.kill(); story.classList.remove('is-pinned'); smap.setAttribute('viewBox', full);
        steps.forEach(function (s, k) { s.classList.toggle('is-active', k === 0); s.classList.add('is-sealed'); });
      };
    },
    '(max-width: 899px)': function () {
      var trigs = steps.map(function (s) {
        gsap.set(s, { clipPath: 'inset(0 0 12% 0)', opacity: .001, y: 24 });
        return ST.create({ trigger: s, start: 'top 82%', once: true, onEnter: function () {
          gsap.to(s, { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, duration: .7, ease: 'power3.out', onComplete: function () { seal(s); } });
        } });
      });
      return function () { trigs.forEach(function (t) { t.kill(); }); gsap.set(steps, { clearProps: 'clipPath,opacity,transform' }); steps.forEach(seal); };
    }
  });

  // Eave: warm air draws, ice ridge grows (desktop scrub, phone plays once)
  var eave = $('.eave');
  if (eave) {
    var warm = $$('[data-eave-warm]', eave), ice = $('[data-eave-ice]', eave);
    gsap.set(warm, { strokeDashoffset: 1 });
    gsap.set(ice, { scaleX: .35, transformOrigin: '100% 50%', transformBox: 'fill-box' });
    ST.matchMedia({
      '(min-width: 640px)': function () {
        var t = gsap.timeline({ scrollTrigger: { trigger: '.icedam', start: 'top 70%', end: 'center 45%', scrub: .6 } });
        t.to(warm, { strokeDashoffset: 0, duration: 1, stagger: .2, ease: 'none' }).to(ice, { scaleX: 1, duration: .8, ease: 'none' }, .6);
        return function () { t.scrollTrigger && t.scrollTrigger.kill(); t.kill(); gsap.set(warm, { strokeDashoffset: 0 }); gsap.set(ice, { scaleX: 1 }); };
      },
      '(max-width: 639px)': function () {
        var t = gsap.timeline({ paused: true });
        t.to(warm, { strokeDashoffset: 0, duration: .9, stagger: .15, ease: 'power2.out' }).to(ice, { scaleX: 1, duration: .6, ease: 'power2.out' }, .5);
        var s = ST.create({ trigger: '.icedam', start: 'top 60%', once: true, onEnter: function () { t.play(); } });
        return function () { s.kill(); t.progress(1); };
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
})();
