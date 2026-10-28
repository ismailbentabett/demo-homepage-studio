/* garagedoor-B · symptom finder, repair-or-replace, insulation compare, spring story */
(function () {
  'use strict';
  var SW = window.SW || {};
  var doc = document;
  var root = doc.documentElement;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var fact = function (p) { try { return SW.fact ? SW.fact(p) : null; } catch (e) { return null; } };
  var prices = fact('proof.prices') || [];
  var services = fact('services') || [];
  var range = function (i) { var p = prices[i]; return p ? p.from + '–' + p.to : 'measured at your door'; };
  var svcName = function (i) { return services[i] ? services[i].name : ''; };
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* ---------- 1 · symptom finder → riveted plate ---------- */
  var finder = $('[data-hook="finder"]');
  var plate = $('[data-sw-signature="plate"]');
  if (finder && plate) {
    var dwg = $('.dwg');
    var out = function (k) { return $('[data-out="' + k + '"]', plate); };
    var sendBtn = $('[data-send-reading]', plate);
    var meter = $('[data-meter]', plate);
    var current = null;
    var URG = { stop: ['Stop · call', .95], check: ['Check first', .6], ok: ['Low', .3] };
    var SAFE = {
      stop: 'Don’t lift it. Call.',
      check: 'Look at the spring first. If it has a gap, don’t lift it.',
      ok: 'Yes, with the lamp test: lights on, door down, try again.'
    };
    function read(snd, door) {
      if (door === 'crooked') return { part: 'Lift cable or roller', parts: ['cable', 'track', 'roller'], urg: 'stop', svc: 4, price: -1 };
      if (door === 'inches' || snd === 'bang') return { part: 'Torsion spring', parts: ['spring'], urg: 'stop', svc: 0, price: 0 };
      if (door === 'back' && snd === 'grind') return { part: 'Opener force setting', parts: ['opener'], urg: 'check', svc: 2, price: 3 };
      if (door === 'back') return { part: 'Safety sensors', parts: ['sensor'], urg: 'ok', svc: 7, price: -1 };
      if (door === 'stuck' && snd === 'grind') return { part: 'Opener drive gear', parts: ['opener'], urg: 'check', svc: 2, price: 3 };
      if (door === 'stuck' && snd === 'click') return { part: 'Opener board or limits', parts: ['opener'], urg: 'check', svc: 2, price: 3 };
      if (door === 'stuck') return { part: 'Opener power or lock', parts: ['opener'], urg: 'check', svc: 10, price: -1 };
      if (snd === 'grind') return { part: 'Opener or rollers', parts: ['opener', 'roller'], urg: 'check', svc: 2, price: 3, partial: true };
      if (snd === 'click') return { part: 'Sensors or opener', parts: ['sensor', 'opener'], urg: 'check', svc: 7, price: -1, partial: true };
      if (snd === 'none') return { part: 'Opener power', parts: ['opener'], urg: 'check', svc: 10, price: -1, partial: true };
      return null;
    }
    function stamp(el) { if (!el) return; el.classList.remove('is-stamp'); void el.offsetWidth; el.classList.add('is-stamp'); }
    function render() {
      var s = finder.querySelector('input[name="snd"]:checked');
      var d = finder.querySelector('input[name="door"]:checked');
      var r = read(s && s.value, d && d.value);
      current = r;
      if (!r) return;
      out('part').textContent = r.part + (r.partial ? ' (pick step 2)' : '');
      out('urg').textContent = URG[r.urg][0];
      out('range').textContent = r.price >= 0 ? range(r.price) : 'measured at your door';
      out('safe').innerHTML = '<span class="mono">Safe to lift?</span> <b></b>';
      out('safe').querySelector('b').textContent = SAFE[r.urg];
      plate.setAttribute('data-state', r.urg);
      if (meter) meter.style.setProperty('--sw-p', URG[r.urg][1]);
      if (dwg) {
        dwg.classList.add('has-hot');
        $$('.part', dwg).forEach(function (g) { g.classList.toggle('is-hot', r.parts.indexOf(g.getAttribute('data-part')) > -1); });
      }
      if (sendBtn) sendBtn.hidden = false;
      ['part', 'urg', 'range'].forEach(function (k) { stamp(out(k)); });
      if (window.innerWidth < 1100) {
        var rect = plate.getBoundingClientRect();
        if (rect.top > window.innerHeight * .75 || rect.bottom > window.innerHeight) {
          plate.scrollIntoView({ behavior: motion ? 'smooth' : 'auto', block: 'center' });
        }
      }
    }
    finder.addEventListener('change', render);
    finder.addEventListener('submit', function (e) { e.preventDefault(); });
    if (sendBtn) sendBtn.addEventListener('click', function () {
      if (!current) return;
      var s = finder.querySelector('input[name="snd"]:checked');
      var d = finder.querySelector('input[name="door"]:checked');
      var lbl = function (i) { return i ? i.nextElementSibling.textContent : '—'; };
      if (SW.prefillForm) SW.prefillForm({
        service: svcName(current.svc),
        details: 'Reading from the site · heard: ' + lbl(s) + ' · door: ' + lbl(d) + ' · likely: ' + current.part
      }, { focus: 'service' });
      var c = doc.getElementById('contact'); if (c && !SW.prefillForm) c.scrollIntoView();
    });
  }

  /* ---------- 2 · repair or replace ---------- */
  var ror = $('[data-hook="ror"]');
  if (ror) {
    var rout = $('.ror__out');
    var verdict = $('[data-ror-verdict]');
    var V = [
      ['Repair it.', 'A sound door with one worn part is a repair.', 'repair'],
      ['Get both numbers.', 'It could go either way. We write up the repair and a new door on one sheet.', 'both'],
      ['A new door is worth pricing.', 'Several worn parts on an old, bare door add up. See the new-door range next to it.', 'replace']
    ];
    var rorState = function () {
      var v = function (n) { var i = ror.querySelector('input[name="' + n + '"]:checked'); return i ? i.value : ''; };
      var age = +v('age'), sec = +v('sec'), ins = +v('ins'), need = v('need');
      var score = age + sec + (ins === 0 ? 1 : 0) + (need === 'many' ? 1 : 0);
      return { age: age, sec: sec, ins: ins, need: need, score: score, k: score <= 2 ? 0 : score <= 4 ? 1 : 2 };
    };
    var rorRender = function () {
      var st = rorState();
      var row = function (n) { return $('[data-ror-row="' + n + '"]', rout); };
      row('spring').hidden = !(st.need === 'spring' || st.need === 'many');
      row('opener').hidden = !(st.need === 'opener' || st.need === 'many');
      row('sec').hidden = st.sec === 0;
      $('[data-ror-secnote]', rout).hidden = st.sec === 0;
      verdict.innerHTML = '<span class="mono">Verdict</span> <b></b> <span class="ror__why"></span>';
      verdict.querySelector('b').textContent = V[st.k][0];
      verdict.querySelector('.ror__why').textContent = V[st.k][1];
      rout.setAttribute('data-pick', V[st.k][2]);
    };
    ror.addEventListener('change', rorRender);
    rorRender();
    var rsend = $('[data-ror-send]');
    if (rsend) rsend.addEventListener('click', function (e) {
      if (!SW.prefillForm) return;
      e.preventDefault();
      var st = rorState();
      var svc = st.k === 2 ? 5 : st.need === 'opener' ? 2 : st.sec > 0 && st.need !== 'spring' ? 3 : 0;
      var lbl = function (n) { var i = ror.querySelector('input[name="' + n + '"]:checked'); return i ? i.nextElementSibling.textContent : ''; };
      SW.prefillForm({ service: svcName(svc), details: 'Repair or replace · door age: ' + lbl('age') + ' · damaged sections: ' + lbl('sec') + ' · ' + lbl('ins') + ' · needs: ' + lbl('need') + ' · please quote both' }, { focus: 'service' });
    });
  }

  /* ---------- 3 · insulation compare ---------- */
  var warm = $('[data-hook="rvalue"]');
  if (warm) {
    var wp = $('.warm__plate');
    var comfort = $('[data-warm-comfort]');
    var warmRender = function () {
      var cur = warm.querySelector('input[name="cur"]:checked');
      var room = warm.querySelector('input[name="room"]:checked');
      var c = cur ? +cur.value : 0, r = room ? +room.value : 1;
      $$('.bar', wp).forEach(function (b) { b.classList.toggle('is-current', c < 2 && +b.getAttribute('data-bar') === c); });
      var t;
      if (c === 1) t = r ? 'a smaller step than from bare steel, but the wall under the bedroom still gets noticeably less cold.' : 'a small step. Worth it for noise and stiffness more than for heat.';
      else if (c === 0) t = r ? 'the biggest change you’ll feel. The garage wall under a bedroom stops being the coldest wall in the house.' : 'a warmer garage to work in, and a door that holds its shape in the wind.';
      else t = 'look inside the door: bare metal ribs means no core. We check it on the visit.';
      comfort.innerHTML = '<b>Comfort:</b> ';
      comfort.appendChild(doc.createTextNode(t));
    };
    warm.addEventListener('change', warmRender);
    warmRender();
    var wbtn = $('[data-service]', wp);
    if (wbtn) wbtn.addEventListener('click', function (e) {
      if (!SW.prefillForm) return;
      e.preventDefault();
      SW.prefillForm({ service: wbtn.getAttribute('data-service'), details: 'Insulated door options, please' }, { focus: 'service' });
    });
    if ('IntersectionObserver' in window && motion) {
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { wp.classList.add('is-in'); io.disconnect(); } }); }, { threshold: .35 });
      io.observe(wp);
    } else if (wp) wp.classList.add('is-in');
  }

  /* ---------- motion: odometer intro + spring story ---------- */
  if (!SW.reduced && root.classList.contains('sw-motion') && window.gsap) {
    var gsap = window.gsap;
    // odometer: digits roll in, needle sweeps, ≤ 1 s, h1 untouched
    var odo = $('[data-odo]');
    if (odo) {
      var txt = odo.textContent;
      odo.setAttribute('aria-label', txt);
      odo.innerHTML = '';
      txt.split('').forEach(function (ch) { var s = doc.createElement('span'); s.textContent = ch; s.setAttribute('aria-hidden', 'true'); odo.appendChild(s); });
      gsap.from(odo.children, { yPercent: 100, opacity: 0, duration: .6, stagger: .04, ease: 'power3.out', delay: .15 });
    }
    var hm = $('[data-meter]');
    if (hm) gsap.fromTo(hm, { '--sw-p': 0 }, { '--sw-p': 1, duration: .5, ease: 'power2.out', delay: .2, yoyo: true, repeat: 1 });

    var story = $('[data-hook="spring-story"]');
    if (story && window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
      var ST = window.ScrollTrigger;
      var cyc = $('[data-cycles]', story), sm = $('[data-story-meter]', story), status = $('[data-status]', story);
      var pat = doc.getElementById('coilS');
      var steps = $$('.step', story);
      var STAT = ['New · wound to the door', 'Mid-life · no warning yet', 'Worn · measure before quoting', 'Broken · call · don’t lift it'];
      var lastStep = -1, broken = null;
      var fmt = function (n) { return n.toLocaleString('en-US'); };
      var draw = function (p) {
        var k = Math.min(p / .92, 1);
        var n = Math.round(k * 10000);
        if (cyc) cyc.textContent = fmt(n);
        if (sm) sm.style.setProperty('--sw-p', k.toFixed(3));
        if (pat) pat.setAttribute('patternTransform', 'scale(' + (1 + .3 * k).toFixed(3) + ' 1)');
        var i = Math.min(3, Math.floor(p * 4 + .0001));
        if (p >= .92) i = 3;
        if (i !== lastStep) {
          lastStep = i;
          steps.forEach(function (s, j) { s.classList.toggle('is-on', j === i); });
          if (status) status.textContent = STAT[i];
          story.setAttribute('data-phase', i < 3 ? 'ok' : 'stop');
        }
        var b = p >= .92;
        if (b !== broken) {
          broken = b;
          story.classList.toggle('is-broken', b);
          if (b) { story.classList.add('is-shake'); setTimeout(function () { story.classList.remove('is-shake'); }, 260); }
        }
      };
      var finalState = function () {
        story.classList.remove('is-pin', 'is-live', 'is-shake');
        story.classList.add('is-broken');
        story.removeAttribute('data-phase');
        steps.forEach(function (s) { s.classList.remove('is-on'); });
        if (cyc) cyc.textContent = '10,000';
        if (sm) sm.style.setProperty('--sw-p', 1);
        if (status) status.textContent = STAT[3];
        if (pat) pat.removeAttribute('patternTransform');
        lastStep = -1; broken = null;
      };
      ST.matchMedia({
        '(min-width: 900px)': function () {
          story.classList.add('is-pin', 'is-live');
          steps.forEach(function (s) { s.classList.add('is-in'); });
          var t = ST.create({
            trigger: story, start: 'top top', end: 'bottom bottom', scrub: true,
            onUpdate: function (self) { draw(self.progress); }
          });
          draw(0);
          return function () { t.kill(); finalState(); };
        }
      });
      if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { ST.refresh(); });
    }
  }
})();
