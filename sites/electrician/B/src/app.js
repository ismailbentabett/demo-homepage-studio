/* electrician-B · Panel Schedule Flip
   Tools (sorter, sizer, EV check) always work. Motion (hero flip intro, rail story) runs only with
   sw-motion and without reduced motion; the HTML ships every breaker ON, so JS-off and reduced motion
   see the finished schedule. */
(function () {
  'use strict';
  var root = document.documentElement;
  var motion = !(window.SW && SW.reduced) && root.classList.contains('sw-motion');
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function val(box, name) { var el = $('input[name="' + name + '"]:checked', box); return el ? el.value : ''; }

  /* ---------- breaker trip sorter ---------- */
  function sorter() {
    var box = $('[data-sorter]');
    if (!box) return;
    var card = $('[data-sorter-card]', box), code = $('[data-sorter-code]', box),
        title = $('[data-sorter-title]', box), text = $('[data-sorter-text]', box);
    var WHEN = {
      immediate: { tag: 'Short / fault', title: 'Likely a short or a ground fault', text: 'A breaker that trips the instant you reset it is doing its job. Leave it off, unplug what is on that circuit and call us; resetting it again heats the wire.', level: 'stop' },
      minutes: { tag: 'Overload', title: 'Likely an overload', text: 'Too much is running on one circuit, so the breaker warms up and lets go after a while.', level: 'ok' },
      appliance: { tag: 'Appliance', title: 'Likely the appliance, or a worn breaker', text: 'A motor that draws a surge at start-up (a compressor, a vacuum, a hair dryer) can trip a tired breaker.', level: 'ok' }
    };
    var ROOM = {
      kitchen: { tag: 'Kitchen', text: 'Countertop appliances often share one circuit; a second small-appliance circuit usually ends it.' },
      bedroom: { tag: 'Bedroom', text: 'Space heaters and window units on an old bedroom circuit are the usual pair; splitting them fixes it.' },
      garage: { tag: 'Garage', text: 'Garage and outdoor outlets sit on GFCI protection; moisture or a worn tool cord trips it.' },
      other: { tag: 'Other', text: 'We trace it with a meter and write down what we find on the panel schedule.' }
    };
    function update() {
      var w = WHEN[val(box, 'trip-when')], r = ROOM[val(box, 'trip-room')];
      if (!w && !r) return;
      code.textContent = (w ? w.tag : '—') + ' · ' + (r ? r.tag : '—');
      title.textContent = w ? w.title : 'Now, when does it trip?';
      text.textContent = (w ? w.text + ' ' : '') + (r ? r.text : 'Pick the room for the usual cause there.');
      card.setAttribute('data-level', w ? w.level : 'ok');
    }
    box.addEventListener('change', update);
  }

  /* ---------- generator sizer ---------- */
  function sizer() {
    var box = $('[data-sizer]');
    if (!box) return;
    var boxes = $$('input[data-watts]', box), out = $('[data-sizer-watts]', box),
        fill = $('[data-sizer-fill]', box), rec = $('[data-sizer-rec]', box);
    var shown = 0, raf = 0;
    function draw(target) {
      cancelAnimationFrame(raf);
      if (!motion) { shown = target; out.textContent = target.toLocaleString('en-US'); return; }
      var from = shown, t0 = performance.now();
      (function step(now) {
        var p = Math.min((now - t0) / 520, 1), e = 1 - Math.pow(1 - p, 3);
        shown = Math.round(from + (target - from) * e);
        out.textContent = shown.toLocaleString('en-US');
        if (p < 1) raf = requestAnimationFrame(step);
      })(t0);
    }
    function update() {
      var total = boxes.reduce(function (s, b) { return s + (b.checked ? parseInt(b.getAttribute('data-watts'), 10) || 0 : 0); }, 0);
      draw(total);
      box.style.setProperty('--load', Math.min(total / 10000 * 100, 100).toFixed(1) + '%');
      if (fill) fill.style.width = Math.min(total / 10000 * 100, 100).toFixed(1) + '%';
      if (!total) rec.textContent = 'Tick what must stay on. Without a pick, we size it on the visit.';
      else if (total <= 3000) rec.textContent = 'A portable generator with an inlet and interlock covers this comfortably.';
      else if (total <= 7000) rec.textContent = 'A larger portable with an interlock works. A standby adds automatic switchover and no cords to run.';
      else rec.textContent = 'This load points to a standby generator with an automatic transfer switch.';
    }
    box.addEventListener('change', update);
  }

  /* ---------- EV capacity check ---------- */
  function evcheck() {
    var box = $('[data-evcheck]');
    if (!box) return;
    var out = $('[data-ev-result]', box);
    function update() {
      var size = parseInt(val(box, 'svc-size'), 10);
      var loads = $$('input[name="big-load"]:checked', box).length;
      if (!size) { out.textContent = 'Now pick your main breaker size; it is printed on the biggest breaker at the top of the panel.'; return; }
      var level, msg;
      if (size >= 200 && loads <= 2) { level = 'ok'; msg = 'Room to spare, most likely. A dedicated charger circuit should fit without a service upgrade; we confirm with a load calculation.'; }
      else if (size >= 150 && loads <= 1) { level = 'ok'; msg = 'Probably fine. We run a load calculation first and may set the charger a step lower.'; }
      else if (size === 100 && loads >= 2) { level = 'tight'; msg = 'Tight. With ' + loads + ' big loads on a 100 A main, plan on a load manager or a panel upgrade.'; }
      else { level = 'tight'; msg = 'Close to the line. A load calculation decides between a smart load manager and a panel upgrade.'; }
      out.textContent = msg;
      out.setAttribute('data-level', level);
    }
    box.addEventListener('change', update);
  }

  /* ---------- motion: hero intro + rail story ---------- */
  function heroFlip() {
    var breakers = $$('.hero .breaker:not(.is-spare)');
    breakers.forEach(function (b) { b.classList.remove('is-on'); });
    setTimeout(function () {
      breakers.forEach(function (b, i) { setTimeout(function () { b.classList.add('is-on'); }, i * 70); });
    }, 280);
  }

  function railStory() {
    var rows = $$('.rail .circuit');
    var count = $('[data-rail-count]'), bar = $('[data-rail-bar]');
    var meter = $('.services__meter');
    if (!rows.length) return;
    function tally() {
      var n = rows.filter(function (r) { return r.classList.contains('is-on'); }).length;
      if (count) count.textContent = (n < 10 ? '0' : '') + n;
      if (meter) meter.style.setProperty('--rail-p', (n / rows.length).toFixed(3));
    }
    rows.forEach(function (r) { r.classList.remove('is-on'); });
    tally();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-on'); io.unobserve(e.target); tally(); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.02 });
    rows.forEach(function (r) { io.observe(r); });
    window.addEventListener('beforeprint', function () { rows.forEach(function (r) { r.classList.add('is-on'); }); tally(); });
  }

  function init() {
    sorter(); sizer(); evcheck();
    if (motion && 'IntersectionObserver' in window) {
      heroFlip();
      railStory();
      if (window.ScrollTrigger && document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
