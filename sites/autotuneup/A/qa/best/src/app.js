/* autotuneup-A · Quarter Hour · "Stopwatch Stations" */
(function () {
  var doc = document.documentElement;
  function mm(n) { n = Math.max(0, Math.round(n)); return (n < 10 ? '0' : '') + n + ':00'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* ---------- Wait-or-drop planner (a tool, not motion: always on) ---------- */
  var form = document.querySelector('[data-wait]');
  var out = document.querySelector('[data-wait-out]');
  if (form && out) {
    var kind = out.querySelector('[data-wait-kind]');
    var time = out.querySelector('[data-wait-time]');
    var note = out.querySelector('[data-wait-note]');
    var list = out.querySelector('[data-wait-laps]');
    var go = out.querySelector('[data-wait-go]');
    var state = { service: '', visit: 'Wait' };
    var row = function (a, b) {
      var li = document.createElement('li');
      var x = document.createElement('span'); x.textContent = a;
      var y = document.createElement('span'); y.textContent = b;
      li.append(x, y);
      return li;
    };
    var update = function () {
      var boxes = form.querySelectorAll('input[type="checkbox"]:checked');
      var total = 0, drop = false, first = '';
      if (list) list.textContent = '';
      boxes.forEach(function (b) {
        var m = parseInt(b.getAttribute('data-min'), 10) || 0;
        var isDrop = b.hasAttribute('data-drop');
        total += m;
        if (isDrop) drop = true;
        if (!first) first = b.value;
        var lab = b.parentNode.querySelector('span');
        if (list) list.append(row(lab ? lab.textContent : b.value, isDrop ? 'drop-off' : m + ' min'));
      });
      state.service = first;
      if (!boxes.length) {
        kind.textContent = 'Nothing ticked yet';
        time.textContent = '—';
        note.textContent = 'Tick what’s due and the clock adds it up.';
        state.visit = 'Wait';
      } else if (drop || total >= 60) {
        kind.textContent = 'Drop it off';
        time.textContent = '7:30 slot';
        note.textContent = 'Bigger jobs come in first thing and are usually ready by lunch. We text when it’s done.';
        state.visit = 'Drop off';
      } else {
        kind.textContent = 'Wait for it';
        time.textContent = '~' + total + ' min';
        note.textContent = 'Pull in, hand over the keys and wait. You’re out before your coffee’s cold.';
        state.visit = 'Wait';
      }
      if (list && boxes.length > 1 && !drop && total < 60) list.append(row('Out the door', '~' + total + ' min'));
      if (go) {
        go.setAttribute('data-service', first);
        go.textContent = '';
        go.append(boxes.length ? 'Book this time' : 'Book a time');
      }
    };
    form.addEventListener('change', update);
    if (go) {
      go.addEventListener('click', function (e) {
        if (!window.SW || typeof SW.prefillForm !== 'function') return;
        e.preventDefault();
        SW.prefillForm({ service: state.service, visit: state.visit }, { focus: 'service' });
      });
    }
    update();
  }

  /* ---------- Motion: guarded ---------- */
  if (typeof SW === 'undefined' || SW.reduced || !doc.classList.contains('sw-motion')) return;
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* Hero: the case ticks off lap 01 (check-in, 2 min) in 1.1 s. The h1 is never delayed. */
  var caseTime = document.querySelector('[data-case-time]');
  var heroCase = document.querySelector('[data-case]');
  if (caseTime && heroCase) {
    var tick = { s: 0 };
    gsap.to(tick, {
      s: 120, duration: 1.1, delay: 0.5, ease: 'power2.inOut',
      onUpdate: function () { var s = Math.round(tick.s); caseTime.textContent = pad(Math.floor(s / 60)) + ':' + pad(s % 60); },
      onComplete: function () { heroCase.classList.add('is-lapped'); var sub = heroCase.querySelector('.case__sub'); if (sub) sub.textContent = 'lap 01'; }
    });
  }

  /* Stations story: the big dial runs as the six laps scroll past */
  var dial = document.querySelector('[data-bigdial]');
  var laps = Array.prototype.slice.call(document.querySelectorAll('#stations .lap'));
  var dialTime = document.querySelector('[data-bigdial-time]');
  var dialLap = document.querySelector('[data-bigdial-lap]');
  var splits = laps.map(function (l) { return parseFloat(l.getAttribute('data-split-at')) || 0; });
  var names = laps.map(function (l) { var h = l.querySelector('h3'); return h ? h.textContent.trim() : ''; });
  var TOTAL = splits.length ? splits[splits.length - 1] : 31;

  function setDial(p) {
    var mins = p * TOTAL;
    if (dial) dial.style.setProperty('--dial', (mins / TOTAL).toFixed(4));
    if (dialTime) dialTime.textContent = mm(mins);
    var current = -1;
    laps.forEach(function (l, i) {
      var on = mins >= splits[i] - 0.5;
      l.classList.toggle('is-on', on);
      if (on) current = i;
    });
    if (dialLap) dialLap.textContent = current < 0 ? 'Lap 00, start' : 'Lap 0' + (current + 1) + ', ' + names[current].toLowerCase();
  }

  /* Lap strip under the header: counts stations of the page, never a second clock */
  var strip = document.querySelector('[data-lapstrip]');
  var ticksBox = strip && strip.querySelector('[data-lapstrip-ticks]');
  var flagNum = strip && strip.querySelector('[data-lapstrip-num]');
  var flagOf = strip && strip.querySelector('[data-lapstrip-of]');
  var flagName = strip && strip.querySelector('[data-lapstrip-name]');
  var stations = Array.prototype.slice.call(document.querySelectorAll('[data-lap]'));

  function init() {
    if (laps.length) {
      setDial(0);
      ScrollTrigger.create({
        trigger: '#stations .laps',
        start: 'top 65%',
        end: 'bottom 55%',
        scrub: 0.4,
        onUpdate: function (self) { setDial(self.progress); }
      });
    }

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: function (self) { doc.style.setProperty('--sw-p', self.progress.toFixed(4)); }
    });

    if (strip) {
      if (flagOf) flagOf.textContent = pad(stations.length);
      var marks = stations.map(function (el, i) {
        var t = document.createElement('i');
        if (ticksBox) ticksBox.append(t);
        ScrollTrigger.create({
          trigger: el,
          start: i === 0 ? 'top top' : 'top 50%',
          end: 'bottom 50%',
          onToggle: function (self) {
            if (!self.isActive) return;
            if (flagNum) flagNum.textContent = pad(i + 1);
            if (flagName) flagName.textContent = el.getAttribute('data-lap') || '';
            marks.forEach(function (m, j) { m.classList.toggle('is-past', j <= i); });
          }
        });
        return t;
      });
      var place = function () {
        var max = ScrollTrigger.maxScroll(window) || 1;
        stations.forEach(function (el, i) {
          var y = i === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.5;
          marks[i].style.left = (Math.min(1, Math.max(0, y / max)) * 100).toFixed(2) + '%';
        });
      };
      ScrollTrigger.addEventListener('refresh', place);
      place();
      strip.classList.add('is-on');
    }

    /* Slips press in, then the Done stamp lands */
    var slips = document.querySelector('.slips');
    if (slips) {
      slips.querySelectorAll('.slip').forEach(function (s, i) { s.style.setProperty('--i', i); });
      ScrollTrigger.create({ trigger: slips, start: 'top 78%', once: true, onEnter: function () { slips.classList.add('is-in'); } });
    }

    /* Footer: the clock stops */
    var stop = document.querySelector('.stop');
    if (stop) ScrollTrigger.create({ trigger: stop, start: 'top 85%', once: true, onEnter: function () { stop.classList.add('is-in'); } });

    ScrollTrigger.refresh();
  }

  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(init);
})();
