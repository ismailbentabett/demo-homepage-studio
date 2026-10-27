/* mechanic-A · app.js : the two tools (always on) + the repair-order motion (guarded) */
(function () {
  var root = document.documentElement;

  /* ---------- Tool 1: dashboard light decoder ---------- */
  var LIGHTS = {
    ce:    { s: 'safe', c: 'Safe to drive', n: 'Check engine, steady', svc: 'Check engine',
             m: 'The engine computer logged a fault. Often it is a loose gas cap, a sensor or a vacuum leak.',
             d: 'Usually yes, for now. Book a diagnosis this week.',
             f: 'The stored code, then the hoses and sensor it points to, before naming any part.' },
    cef:   { s: 'stop', c: 'Pull over', n: 'Check engine, flashing', svc: 'Check engine',
             m: 'The engine is misfiring hard enough to overheat the catalytic converter.',
             d: 'No. Ease off, park when safe, and call us before driving further.',
             f: 'Plugs, coils and injectors on the misfiring cylinder, with the code to back it.' },
    oil:   { s: 'stop', c: 'Stop now', n: 'Oil pressure', svc: 'Check engine',
             m: 'The engine is not getting enough oil pressure. Minutes of driving can ruin it.',
             d: 'No. Turn the engine off and check the dipstick. Call before restarting.',
             f: 'The oil level, the pressure sender, then a gauge test of real pressure.' },
    bat:   { s: 'soon', c: 'Drive to us', n: 'Battery', svc: 'Battery & charging',
             m: 'The charging system is not keeping up. It is often the alternator, not the battery.',
             d: 'Short trips only. Skip the radio and heater and come straight in.',
             f: 'A load test of the battery and an output test of the alternator, side by side.' },
    temp:  { s: 'stop', c: 'Pull over', n: 'Temperature', svc: 'Overheating',
             m: 'The engine is running hot. Driving on can warp the head.',
             d: 'No. Park, let it cool, and never open a hot radiator cap.',
             f: 'Coolant level, a pressure test for leaks, then the fan and thermostat.' },
    brake: { s: 'stop', c: 'Call first', n: 'Brake', svc: 'Brakes',
             m: 'Low brake fluid or a hydraulic problem. Also lights up when the parking brake is on.',
             d: 'Only if the pedal feels normal and the parking brake is off. Call us first.',
             f: 'Fluid level, then pads and lines for the leak or wear that dropped it.' },
    abs:   { s: 'safe', c: 'Safe to drive', n: 'ABS', svc: 'Brakes',
             m: 'Your normal brakes still work. The anti-lock system has switched itself off.',
             d: 'Yes, gently. Leave more room on wet roads until it is checked.',
             f: 'The stored ABS code, then the wheel speed sensor it names.' },
    tire:  { s: 'safe', c: 'Check tires', n: 'Tire pressure', svc: '',
             m: 'One tire is at least a quarter low on air, or a sensor battery has run down.',
             d: 'Yes, to the nearest air pump. Fill to the number on the door sticker.',
             f: 'Each tire for a slow leak, then the sensor if the pressure holds.' }
  };

  function decoder() {
    var btns = document.querySelectorAll('[data-light]');
    var box = document.querySelector('[data-readout]');
    if (!btns.length || !box) return;
    var chip = box.querySelector('[data-ro-chip]');
    var name = box.querySelector('[data-ro-name]');
    var mean = box.querySelector('[data-ro-mean]');
    var drive = box.querySelector('[data-ro-drive]');
    var first = box.querySelector('[data-ro-first]');
    var cta = box.querySelector('[data-ro-cta]');
    function show(key) {
      var L = LIGHTS[key];
      if (!L) return;
      btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.light === key ? 'true' : 'false'); });
      chip.dataset.status = L.s; chip.textContent = L.c;
      name.textContent = L.n; mean.textContent = L.m; drive.textContent = L.d; first.textContent = L.f;
      if (L.svc) { cta.setAttribute('data-service', L.svc); cta.textContent = 'Book this check'; }
      else { cta.removeAttribute('data-service'); cta.textContent = 'Book a tire check'; }
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.light); }); });
  }

  /* ---------- Tool 2: brake pad gauge ---------- */
  function brakes() {
    var wrap = document.querySelector('[data-brake]');
    if (!wrap) return;
    var input = wrap.querySelector('[data-brake-input]');
    var fig = wrap.querySelector('.plate--brake');
    var mmEl = wrap.querySelector('[data-brake-mm]');
    var svgT = wrap.querySelector('[data-brake-svg]');
    var chip = wrap.querySelector('[data-brake-chip]');
    var text = wrap.querySelector('[data-brake-text]');
    if (!input) return;
    function level(mm) {
      if (mm >= 9) return ['new', 'safe', 'Plenty left', 'Pads are close to new. Nothing to do.'];
      if (mm >= 6) return ['half', 'soon', 'Half worn', 'Plan on pads in the next few months. No rush, and no reason to wait for the grinding.'];
      if (mm >= 3) return ['low', 'stop', 'Low', 'Book pads soon, before the rotors take damage.'];
      return ['metal', 'stop', 'Metal on metal', 'That grinding is metal on metal. Drive it in gently and call first.'];
    }
    function update() {
      var mm = parseInt(input.value, 10) || 6;
      var L = level(mm);
      wrap.style.setProperty('--k', (mm / 12).toFixed(3));
      if (fig) fig.dataset.level = L[0];
      mmEl.textContent = mm + ' mm';
      if (svgT) svgT.textContent = mm + ' mm';
      chip.dataset.status = L[1]; chip.textContent = L[2];
      text.textContent = L[3];
      input.setAttribute('aria-valuetext', mm + (mm === 1 ? ' millimetre, ' : ' millimetres, ') + L[2].toLowerCase());
    }
    input.addEventListener('input', update);
    update();
  }

  decoder();
  brakes();

  /* ---------- Motion (signature + story), only with motion on ---------- */
  var reduced = (typeof SW !== 'undefined' && SW.reduced) || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !root.classList.contains('sw-motion') || typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* Signature intro: line 01 stamps from Waiting to Doing (≤ 1.2 s, h1 untouched) */
  var introChip = document.querySelector('[data-intro-chip]');
  if (introChip) {
    var lines = document.querySelectorAll('.hero__sheet .ro-line');
    introChip.textContent = 'Waiting';
    introChip.classList.add('is-pre');
    gsap.from(lines, { opacity: 0, x: -12, duration: .45, stagger: .06, ease: 'power3.out', delay: .1, clearProps: 'opacity,transform' });
    gsap.delayedCall(.8, function () {
      introChip.classList.remove('is-pre');
      introChip.textContent = 'Doing';
      gsap.fromTo(introChip, { scale: 1.25 }, { scale: 1, duration: .35, ease: 'back.out(3)', clearProps: 'transform' });
    });
  }

  if (typeof ScrollTrigger === 'undefined') return;

  /* Story: the summary order on the sticky aside advances line by line (desktop) */
  var steps = document.querySelectorAll('.step[data-step-i]');
  var sums = document.querySelectorAll('[data-sum]');
  var clock = document.querySelector('[data-story-clock]');
  var bar = document.querySelector('[data-story-bar]');
  var LABEL = { done: 'Done', doing: 'Doing', waiting: 'Waiting', gate: 'Needed', locked: 'Locked' };

  function setLine(i) {
    sums.forEach(function (li, k) {
      var chip = li.querySelector('.chip');
      var st;
      if (k < i) st = 'done';
      else if (k === i) st = (k === 3 ? 'gate' : 'doing');
      else st = (k === 3 ? 'gate' : (k === 4 && i < 3 ? 'locked' : 'waiting'));
      chip.dataset.status = st === 'locked' ? 'waiting' : st;
      chip.textContent = k === 3 && k === i ? 'Your yes' : (k === 3 && k < i ? 'Yes' : LABEL[st]);
    });
    if (clock) clock.textContent = 'Line 0' + (i + 1) + ' of 06';
  }

  ScrollTrigger.matchMedia({
    '(min-width: 900px)': function () {
      if (!steps.length || !sums.length) return;
      setLine(0);
      steps.forEach(function (step, i) {
        ScrollTrigger.create({
          trigger: step, start: 'top 55%', end: 'bottom 55%',
          onEnter: function () { setLine(i); },
          onEnterBack: function () { setLine(i); }
        });
      });
      if (bar) {
        gsap.fromTo(bar, { scaleX: 0 }, {
          scaleX: 1, ease: 'none',
          scrollTrigger: { trigger: '.steps', start: 'top 55%', end: 'bottom 55%', scrub: true }
        });
      }
      return function () { gsap.set(bar, { clearProps: 'transform' }); };
    },
    '(max-width: 899px)': function () {
      /* phone: each step's number stamps in as it arrives */
      steps.forEach(function (step) {
        var n = step.querySelector('.step__num span, .gate-card__num');
        if (!n) return;
        gsap.from(n, { scale: 1.6, opacity: 0, duration: .4, ease: 'back.out(2.5)',
          scrollTrigger: { trigger: step, start: 'top 80%', once: true }, clearProps: 'opacity,transform' });
      });
    }
  });

  /* The hinge: line 04 tears open across the page, then the chip turns to Yes */
  var gateStep = document.querySelector('.step--gate');
  var hingeLine = document.querySelector('[data-hinge-line]');
  var gateChip = document.querySelector('[data-gate-chip]');
  if (gateStep && hingeLine) {
    gsap.fromTo(hingeLine, { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: gateStep, start: 'top 70%', end: 'bottom 50%', scrub: true }
    });
  }
  if (gateStep && gateChip) {
    ScrollTrigger.create({
      trigger: gateStep, start: 'bottom 50%',
      onEnter: function () {
        gateChip.dataset.status = 'done'; gateChip.textContent = 'Yes, go ahead';
        gsap.fromTo(gateChip, { scale: 1.2 }, { scale: 1, duration: .35, ease: 'back.out(3)', clearProps: 'transform' });
      },
      onLeaveBack: function () { gateChip.dataset.status = 'gate'; gateChip.textContent = 'Your yes'; }
    });
  }

  /* Footer: closed lines tick off in sequence */
  var closed = document.querySelectorAll('.closed li');
  if (closed.length) {
    gsap.from(closed, { opacity: 0, y: 10, duration: .4, stagger: .08, ease: 'power2.out',
      scrollTrigger: { trigger: '.closed', start: 'top 90%', once: true }, clearProps: 'opacity,transform' });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
