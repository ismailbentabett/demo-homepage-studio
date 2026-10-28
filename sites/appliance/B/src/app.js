/* appliance-B · the verdict seam.
   Tools (always on, they are function, not motion): the repair-or-replace check moves --seam on :root,
   price rulers get their from/to positions, hand-off buttons fill the lead form.
   Motion (only with sw-motion): the age-line story scrubs the dial on screens ≥ 900px. */
(function () {
  var root = document.documentElement;
  var SEAM = { fix: '72%', call: '50%', 'new': '28%' };
  var WORD = { fix: 'Worth fixing.', call: 'Borderline: price both.', 'new': 'Probably replace.' };
  var TAG = { fix: 'FIX', call: 'CALL', 'new': 'NEW' };
  function money(s) { var n = parseFloat(String(s || '').replace(/[^\d.]/g, '')); return isNaN(n) ? 0 : n; }
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  function setVerdict(v) {
    if (v) { root.style.setProperty('--seam', SEAM[v]); root.setAttribute('data-verdict', v); }
    else { root.style.removeProperty('--seam'); root.removeAttribute('data-verdict'); }
    $$('[data-calc-tag],[data-form-verdict]').forEach(function (t) {
      t.setAttribute('data-v', v || '');
      t.textContent = v ? TAG[v] : (t.hasAttribute('data-form-verdict') ? 'not checked yet' : 'Your verdict');
    });
    var hid = $('form[data-lead] input[name="verdict"]');
    if (hid) hid.value = v ? TAG[v] : '';
  }

  function goForm(data, toModel) {
    if (!window.SW || !SW.prefillForm) return false;
    SW.prefillForm(data, { focus: 'service' });
    if (toModel) {
      setTimeout(function () {
        var next = $('form[data-lead] [data-next]');
        var cur = $('form[data-lead]').getAttribute('data-step-current');
        if (next && cur === '1') next.click();
      }, SW.reduced ? 30 : 520);
    }
    return true;
  }

  function calc() {
    var form = $('[data-calc]');
    if (!form) return;
    var range = $('#calc-age', form), num = $('[data-age-num]', form), newp = $('#calc-new', form);
    var out = $('[data-calc-verdict]', form), why = $('[data-calc-why]', form);
    var touched = false;
    function pick() { return $('input[name="appl"]:checked', form); }
    function run() {
      var age = parseInt(range.value, 10) || 0;
      num.textContent = age;
      range.setAttribute('aria-valuetext', age + (age === 1 ? ' year' : ' years'));
      var m = pick();
      if (!m) { if (touched) { out.textContent = 'Now pick the machine.'; } return; }
      var life = parseFloat(m.getAttribute('data-life')), r = age / life;
      var hi = money(m.getAttribute('data-to')), P = money(newp.value);
      var v = r < 0.5 ? 'fix' : r < 1 ? 'call' : 'new';
      if (P > 0) {
        if (hi > P * 0.5) v = r >= 0.5 ? 'new' : 'call';
        else if (v === 'call' && hi < P * 0.25) v = 'fix';
      }
      setVerdict(v);
      var name = m.value;
      out.textContent = WORD[v];
      why.textContent = 'A ' + age + '-year-old ' + name + ', typical life ' + m.getAttribute('data-life-txt') + ' (typical). ' +
        m.getAttribute('data-item') + ' usually runs ' + m.getAttribute('data-from') + '–' + m.getAttribute('data-to') + ' (Sample pricing).' +
        (P > 0 ? ' Against a new one at the price you typed, the 50% rule says: ' + TAG[v] + '.' : '');
    }
    form.addEventListener('change', function () { touched = true; run(); });
    form.addEventListener('input', function (e) { if (e.target === range || e.target === newp) { touched = true; run(); } });
    form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
    $$('[data-age-step]', form).forEach(function (b) {
      b.addEventListener('click', function () {
        range.value = Math.max(0, Math.min(20, (parseInt(range.value, 10) || 0) + parseInt(b.getAttribute('data-age-step'), 10)));
        touched = true; run();
      });
    });
    // the first screen answers before anyone touches it: the preset machine and age give a live verdict
    touched = true; run();
    var book = $('[data-calc-book]', form);
    book.addEventListener('click', function (e) {
      var m = pick();
      var data = { age: range.value, verdict: root.getAttribute('data-verdict') ? TAG[root.getAttribute('data-verdict')] : '' };
      if (m) data.service = m.getAttribute('data-svc');
      if (goForm(data, false)) e.preventDefault();
    });
  }

  function rulers() {
    var rows = $$('.band');
    if (!rows.length) return;
    var max = 0;
    rows.forEach(function (r) { max = Math.max(max, money($('[data-to]', r).textContent)); });
    max = Math.ceil(max / 100) * 100 || 1;
    rows.forEach(function (r) {
      var a = money($('[data-from]', r).textContent) / max * 100, b = money($('[data-to]', r).textContent) / max * 100;
      var bar = $('.band__bar span', r);
      bar.style.setProperty('--a', a.toFixed(1) + '%');
      bar.style.setProperty('--b', b.toFixed(1) + '%');
    });
  }

  function handoffs() {
    $$('[data-handoff]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        if (goForm({ service: b.getAttribute('data-svc'), details: b.getAttribute('data-details') }, false)) e.preventDefault();
      });
    });
    $$('[data-tagfound]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        if (goForm({ service: b.getAttribute('data-svc') }, true)) e.preventDefault();
      });
    });
  }

  function story() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    var life = $('#lifespan'), dial = $('.dial', life);
    if (!life || !dial) return;
    var ageEl = $('[data-dial-age]', dial), tag = $('[data-dial-tag]', dial);
    var cards = $$('.age-card', life);
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', function () {
      var last = -1, lastV = '';
      var list = $('.ages', life); if (list) list.classList.add('is-live');
      if (cards[0]) cards[0].classList.add('is-active');
      var st = ScrollTrigger.create({
        trigger: life,
        start: 'top 35%',
        end: 'bottom 75%',
        onUpdate: function (self) {
          var p = self.progress, age = p * 15;
          dial.style.setProperty('--agep', (p * 100).toFixed(2) + '%');
          dial.style.setProperty('--dial', (80 - p * 60).toFixed(2) + '%');
          var whole = Math.round(age);
          if (whole !== last) { last = whole; ageEl.textContent = (whole < 10 ? '0' : '') + whole; }
          var v = age < 7 ? 'fix' : age < 12 ? 'call' : 'new';
          if (v !== lastV) { lastV = v; tag.setAttribute('data-v', v); tag.textContent = TAG[v]; }
          var idx = age < 4 ? 0 : age < 8 ? 1 : age < 12 ? 2 : 3;
          cards.forEach(function (c, i) { c.classList.toggle('is-active', i === idx); });
        }
      });
      st.refresh();
      return function () { if (list) list.classList.remove('is-live'); cards.forEach(function (c) { c.classList.remove('is-active'); }); };
    });
    // the rule-band photo: the seam slides across the frame as it scrolls through (repair side shrinks)
    var ph = $('#rule .ph');
    if (ph) {
      ScrollTrigger.create({
        trigger: ph, start: 'top bottom', end: 'bottom top', scrub: true,
        onUpdate: function (self) { ph.style.setProperty('--px', (70 - self.progress * 40).toFixed(2) + '%'); }
      });
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }

  function start() {
    calc();
    rulers();
    handoffs();
    if (!(window.SW && SW.reduced) && root.classList.contains('sw-motion')) story();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
