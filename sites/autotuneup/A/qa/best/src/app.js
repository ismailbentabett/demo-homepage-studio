/* autotuneup-A · Quarter Hour · "Stopwatch Stations" */
(function () {
  var doc = document.documentElement;
  function mm(n) { n = Math.max(0, Math.round(n)); return (n < 10 ? '0' : '') + n + ':00'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* ---------- Typography: curly apostrophes in fact text, commas instead of middle dots in open-now ---------- */
  function curl(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentNode && n.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE') continue;
      if (n.nodeValue.indexOf("'") > -1) n.nodeValue = n.nodeValue.replace(/([A-Za-z])'(?=[A-Za-z])/g, function (m, a) { return a + '’'; });
    }
  }
  curl(document.body);
  function undot(el) { if (el.textContent.indexOf(' · ') > -1) el.textContent = el.textContent.replace(/ · /g, ', '); }
  var openEls = Array.prototype.slice.call(document.querySelectorAll('[data-open-now]'));
  openEls.forEach(undot);
  if (window.MutationObserver) {
    var mo = new MutationObserver(function (list) { list.forEach(function (m) { var el = m.target.nodeType === 1 ? m.target.closest('[data-open-now]') : m.target.parentNode && m.target.parentNode.closest('[data-open-now]'); if (el) undot(el); }); });
    openEls.forEach(function (el) { mo.observe(el, { childList: true, characterData: true, subtree: true }); });
  }

  /* ---------- Wait-or-drop planner: a keepable lap sheet (a tool, not motion: always on) ---------- */
  var form = document.querySelector('[data-wait]');
  var out = document.querySelector('[data-wait-out]');
  if (form && out) {
    var kind = out.querySelector('[data-wait-kind]');
    var time = out.querySelector('[data-wait-time]');
    var note = out.querySelector('[data-wait-note]');
    var list = out.querySelector('[data-wait-laps]');
    var go = document.querySelector('[data-wait-go]');
    var printBtn = document.querySelector('[data-wait-print]');
    var state = { service: '', visit: 'Wait' };
    var row = function (cells, cls) {
      var li = document.createElement('li');
      if (cls) li.className = cls;
      cells.forEach(function (c) { var x = document.createElement('span'); x.textContent = c; li.append(x); });
      return li;
    };
    var update = function () {
      var boxes = form.querySelectorAll('input[type="checkbox"]:checked');
      var total = 0, drop = false, first = '';
      boxes.forEach(function (b) { if (b.hasAttribute('data-drop')) drop = true; });
      if (list) {
        list.textContent = '';
        var head = row(['Job', 'Time', 'Split'], 'ticket__head');
        head.setAttribute('aria-hidden', 'true');
        list.append(head);
      }
      boxes.forEach(function (b) {
        var m = parseInt(b.getAttribute('data-min'), 10) || 0;
        var isDrop = b.hasAttribute('data-drop');
        total += m;
        if (!first) first = b.value;
        var lab = b.parentNode.querySelector('span');
        var name = lab ? lab.textContent : b.value;
        if (list) list.append(row(isDrop ? [name, 'drop-off', 'in 7:30'] : [name, m + ' min', mm(total)]));
      });
      state.service = first;
      if (!boxes.length) {
        kind.textContent = 'Nothing ticked yet';
        time.textContent = '—';
        note.textContent = 'Tick what’s due and the clock adds it up, split by split.';
        state.visit = 'Wait';
      } else if (drop || total >= 60) {
        kind.textContent = 'Drop it off';
        time.textContent = '7:30 slot';
        note.textContent = 'Bigger jobs come in first thing and are usually ready by lunch. We text when it’s done.';
        state.visit = 'Drop off';
        if (list) list.append(row(['Pick-up', 'by lunch', 'text sent'], 'ticket__total'));
      } else {
        kind.textContent = 'Wait for it';
        time.textContent = '~' + total + ' min';
        note.textContent = 'Pull in, hand over the keys and wait. We text the lap sheet when it’s done.';
        state.visit = 'Wait';
        if (list) list.append(row(['Out the door', '', '~' + mm(total)], 'ticket__total'));
      }
      if (go) go.setAttribute('data-service', first);
    };
    form.addEventListener('change', update);
    if (go) {
      go.addEventListener('click', function (e) {
        if (!window.SW || typeof SW.prefillForm !== 'function') return;
        e.preventDefault();
        SW.prefillForm({ service: state.service, visit: state.visit }, { focus: 'service' });
      });
    }
    if (printBtn && typeof window.print === 'function') {
      printBtn.hidden = false;
      printBtn.addEventListener('click', function () {
        doc.classList.add('sw-print-ticket');
        window.print();
      });
      window.addEventListener('afterprint', function () { doc.classList.remove('sw-print-ticket'); });
    }
    update();
  }

  /* ---------- Motion: guarded ---------- */
  if (typeof SW === 'undefined' || SW.reduced || !doc.classList.contains('sw-motion')) return;
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* Hero: the case ticks off lap 01 (check-in, 2 min) in 1.1 s. The h1 is never delayed. */
  var caseTimes = Array.prototype.slice.call(document.querySelectorAll('[data-case-time]'));
  var caseSubs = Array.prototype.slice.call(document.querySelectorAll('[data-case-sub]'));
  var litPost = document.querySelector('.bay__posts li.is-on');
  /* every drawing gets a unit path length so it can be redrawn; it is drawn by default */
  document.querySelectorAll('.lap .art, .bay__art').forEach(function (svg) {
    svg.querySelectorAll('path, rect, circle').forEach(function (el) { if (!el.hasAttribute('stroke-dasharray')) el.setAttribute('pathLength', '1'); });
  });
  function redraw(el) { if (!el) return; el.classList.remove('is-drawing'); void el.offsetWidth; el.classList.add('is-drawing'); }
  if (caseTimes.length) {
    var tick = { s: 0 };
    gsap.to(tick, {
      s: 120, duration: 1.1, delay: 0.5, ease: 'power2.inOut',
      onUpdate: function () { var s = Math.round(tick.s); var t = pad(Math.floor(s / 60)) + ':' + pad(s % 60); caseTimes.forEach(function (c) { c.textContent = t; }); },
      onComplete: function () { caseSubs.forEach(function (c) { c.textContent = 'check-in'; }); redraw(litPost); }
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

  var lastLap = null;
  function setDial(p) {
    var mins = p * TOTAL;
    if (dial) dial.style.setProperty('--dial', (mins / TOTAL).toFixed(4));
    if (dialTime) dialTime.textContent = mm(mins);
    var current = -1;
    laps.forEach(function (l, i) {
      var on = mins >= splits[i] - 0.5;
      if (on && !l.classList.contains('is-on') && !l.hasAttribute('data-drawn')) { l.setAttribute('data-drawn', ''); redraw(l); }
      l.classList.toggle('is-on', on);
      if (on) current = i;
    });
    if (dialLap && current !== lastLap) {
      lastLap = current;
      dialLap.textContent = current < 0 ? 'Start, 0 minutes in' : 'Lap ' + (current + 1) + ' of ' + laps.length + ', ' + names[current].toLowerCase() + ', ' + splits[current] + ' minutes in';
    }
  }

  /* Lap strip under the header: counts stations of the page, never a second clock */
  var strip = document.querySelector('[data-lapstrip]');
  var ticksBox = strip && strip.querySelector('[data-lapstrip-ticks]');
  var flagNum = strip && strip.querySelector('[data-lapstrip-num]');
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
      var marks = stations.map(function (el, i) {
        var t = document.createElement('i');
        if (ticksBox) ticksBox.append(t);
        ScrollTrigger.create({
          trigger: el,
          start: i === 0 ? 'top top' : 'top 50%',
          end: 'bottom 50%',
          onToggle: function (self) {
            if (!self.isActive) return;
            if (flagNum) flagNum.textContent = el.getAttribute('data-clock') || '';
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
