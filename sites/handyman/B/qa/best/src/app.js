/* handyman-B · Pegboard Home Repair
   1. Punch list -> tray (works without GSAP and with reduced motion)
   2. Fix-or-specialist triage
   3. Motion (only with sw-motion and no reduced motion): hero peg-drop, hang-tag swing,
      pinned "wall" story at >= 640px. */
(function () {
  'use strict';
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- 1. punch list + tray ---------- */
  var punch = $('[data-punch]');
  var tray = $('[data-tray]');
  function fmt(n) { return (Math.round(n * 2) / 2).toString().replace(/\.5$/, '.5'); }

  function renderTray() {
    if (!punch || !tray) return;
    var list = $('[data-tray-list]', tray);
    var empty = $('[data-tray-empty]', tray);
    var hoursEl = $('[data-tray-hours]', tray);
    var fitEl = $('[data-tray-fit]', tray);
    var cta = $('[data-tray-cta]', tray);
    var picked = $$('.slot', punch).filter(function (li) { return $('input', li).checked; });
    list.textContent = '';
    var lo = 0, hi = 0, triage = false;
    picked.forEach(function (li) {
      var l = parseFloat(li.getAttribute('data-lo')) || 0;
      var h = parseFloat(li.getAttribute('data-hi')) || 0;
      if (!h) triage = true;
      lo += l; hi += h;
      var row = document.createElement('li');
      row.className = 'tray__row';
      var use = $('.slot__solid use', li);
      var href = use ? use.getAttribute('href') : '#t-check';
      row.innerHTML = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><use href="' + href + '"/></svg>' +
        '<span class="tray__row-name"></span><span class="hang-tag"></span>';
      var name = $('.tray__row-name', row);
      name.textContent = $('.slot__name', li).textContent;
      var price = document.createElement('span');
      price.className = 'tray__row-price';
      price.textContent = li.getAttribute('data-price') || '';
      name.appendChild(price);
      $('.hang-tag', row).textContent = $('.slot__tag', li).textContent;
      list.appendChild(row);
    });
    empty.hidden = picked.length > 0;
    if (!picked.length) { hoursEl.textContent = '0 h'; fitEl.textContent = 'Pick a job'; }
    else {
      hoursEl.textContent = hi ? fmt(lo) + '–' + fmt(hi) + ' h' : 'By text';
      var fit = !hi ? 'Photo check' : hi <= 2 ? 'Two-hour stop' : hi <= 4.5 ? 'Half-day' : hi <= 8 ? 'Full day' : 'Two visits';
      if (triage && hi) fit += ' + photo check';
      fitEl.textContent = fit;
    }
    if (cta && picked[0]) cta.setAttribute('data-service', picked[0].getAttribute('data-svc'));
    tray.setAttribute('data-count', picked.length);

    // the hero mirrors the tray: picked tools are off their pegs, the tally runs under the h1
    $$('[data-pick]').forEach(function (t) {
      var box = document.getElementById(t.getAttribute('data-pick'));
      var on = !!(box && box.checked);
      t.classList.toggle('is-picked', on);
      t.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var tally = $('[data-tally]');
    if (tally) {
      var n = picked.length;
      $('[data-tally-hours]', tally).textContent = hoursEl.textContent;
      $('[data-tally-fit]', tally).textContent = n ? fitEl.textContent + ' · ' + n + (n === 1 ? ' job' : ' jobs') + ' on your list' : 'Tap a tag to start your list';
    }
  }

  function bump(el) { if (!el || !motion) return; el.classList.remove('is-bump'); void el.offsetWidth; el.classList.add('is-bump'); }

  if (punch && tray) {
    var sampleNote = $('[data-tray-sample]', tray);
    punch.addEventListener('change', function (e) {
      if (!e.target.matches('[data-punch-check]')) return;
      if (sampleNote) sampleNote.hidden = true;
      renderTray();
      bump(tray); bump($('[data-tally]'));
    });
    // a filled tray on first sight: two sample jobs, labelled, untick to start your own
    var boxes = $$('[data-punch-check]', punch);
    if (!boxes.some(function (b) { return b.checked; })) {
      ['pl-1', 'pl-3'].forEach(function (id) { var b = document.getElementById(id); if (b) b.checked = true; });
      if (sampleNote) sampleNote.hidden = false;
    }
    renderTray();

    // hero tiles: without JS they link to the builder; with JS each one takes its tool off the wall
    $$('[data-pick]').forEach(function (t) {
      t.setAttribute('role', 'button');
      t.addEventListener('click', function (e) {
        e.preventDefault();
        var box = document.getElementById(t.getAttribute('data-pick'));
        if (!box) return;
        box.checked = !box.checked;
        box.dispatchEvent(new Event('change', { bubbles: true }));
      });
      t.addEventListener('keydown', function (e) { if (e.key === ' ') { e.preventDefault(); t.click(); } });
    });
    renderTray();

    var cta = $('[data-tray-cta]', tray);
    if (cta) cta.addEventListener('click', function () {
      var rows = $$('.tray__row', tray).map(function (r) { return '- ' + $('.tray__row-name', r).firstChild.textContent + ' (' + $('.hang-tag', r).textContent + ')'; });
      var details = $('#f-details');
      if (details && rows.length) details.value = 'My list:\n' + rows.join('\n');
    });
    var print = $('[data-tray-print]', tray);
    if (print) print.addEventListener('click', function () {
      root.classList.add('sw-print-tray');
      window.print();
      setTimeout(function () { root.classList.remove('sw-print-tray'); }, 500);
    });
  }

  /* ---------- 2. triage ---------- */
  var tri = $('[data-triage]');
  if (tri) {
    var out = $('[data-triage-out]', tri);
    var btns = $$('[data-triage-btn]', tri);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var key = b.getAttribute('data-triage-btn');
        btns.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        $$('[data-triage-for]', out).forEach(function (v) { v.classList.toggle('is-current', v.getAttribute('data-triage-for') === key); });
        out.classList.add('has-pick');
        var cur = $('.verdict.is-current', out);
        if (cur && window.matchMedia('(max-width: 639px)').matches) {
          var r = cur.getBoundingClientRect();
          if (r.bottom > window.innerHeight - 80) cur.scrollIntoView({ behavior: SW.reduced ? 'auto' : 'smooth', block: 'center' });
        }
      });
    });
    $$('[data-triage-add]', out).forEach(function (b) {
      b.addEventListener('click', function () {
        var box = document.getElementById(b.getAttribute('data-triage-add'));
        if (!box) return;
        if (!box.checked) { box.checked = true; box.dispatchEvent(new Event('change', { bubbles: true })); }
        var v = b.closest('.verdict');
        var note = $('.verdict__added', v);
        if (!note) { note = document.createElement('p'); note.className = 'verdict__added'; v.appendChild(note); }
        note.textContent = 'Added. It’s in your tray above.';
        SW.scrollTo ? SW.scrollTo('#estimator') : document.getElementById('estimator').scrollIntoView();
      });
    });
  }

  /* ---------- 3. motion ---------- */
  if (!(motion && window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  // hang-tag swing + pin drop: armed only here, so nothing is hidden if this file fails
  function arm(el) {
    if (!el) return;
    Array.prototype.forEach.call(el.children, function (c, i) { c.style.setProperty('--i', i); });
    el.classList.add('is-armed');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } });
    }, { rootMargin: '0px 0px -15% 0px' });
    io.observe(el);
  }
  arm($('[data-swing]'));
  arm($('[data-hang]'));

  // hero peg-drop: the tiles drop onto their pegs, the tools swing to rest (<= 1.1 s, h1 untouched)
  var tiles = $$('.hero__board .tile');
  var visible = tiles.filter(function (t) { return t.offsetParent !== null; });
  if (visible.length) {
    var tl = gsap.timeline({ delay: 0.1 });
    tl.from(visible, { y: -36, rotate: function (i) { return i % 2 ? 3 : -3; }, scale: 0.98, opacity: 0, duration: 0.6, ease: 'back.out(1.6)', stagger: 0.07, transformOrigin: '50% 0%' })
      .from(visible.map(function (t) { return $('.tool', t); }), { rotate: function (i) { return i % 2 ? -14 : 14; }, duration: 0.7, ease: 'elastic.out(1, 0.45)', stagger: 0.07, transformOrigin: '50% 0%', clearProps: 'transform' }, 0.25)
      .from(visible.map(function (t) { return $('.tile__tag', t); }), { rotate: -18, duration: 0.6, ease: 'back.out(2.2)', stagger: 0.06, transformOrigin: '14px 50%', clearProps: 'transform' }, 0.35);
  }

  // the wall: pinned on >= 640px, each tool lifts off the board into the tray as its step comes up
  var wall = $('[data-wall]');
  if (wall) {
    var tools = $$('.wall__tool', wall);
    var steps = $$('[data-wall-step]', wall);
    var trayX = [150, 330, 510, 640];
    var count = $('[data-wall-count]', wall);
    var lastLanded = -1;
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        wall.classList.add('is-story');
        var pin = $('.wall__pin', wall);
        var stl = gsap.timeline({
          scrollTrigger: {
            trigger: wall, start: 'top top', end: 'bottom bottom', pin: pin, scrub: 0.6,
            onUpdate: function (self) {
              var k = Math.min(steps.length - 1, Math.floor(self.progress * steps.length * 0.999));
              steps.forEach(function (s, i) { s.classList.toggle('is-on', i === k); });
              // tools land at timeline time i + 1 of a 4.6 long timeline
              var landed = Math.max(0, Math.min(tools.length, Math.floor(self.progress * 4.6 + 0.05)));
              if (count && landed !== lastLanded) {
                lastLanded = landed;
                count.textContent = landed === tools.length ? '4 TOOLS · ONE VISIT' : landed + ' OF 4 IN THE TRAY';
              }
            }
          }
        });
        tools.forEach(function (g, i) {
          var tool = $('.tool', g);
          var box = tool.getBBox();
          var cx = box.x + box.width / 2, cy = box.y + box.height / 2;
          stl.to(tool, { x: trayX[i] - cx, y: 442 - cy, rotate: i % 2 ? 8 : -8, scale: 0.5, svgOrigin: cx + ' ' + cy, duration: 1, ease: 'power2.inOut' }, i);
        });
        stl.to({}, { duration: 0.6 });
        steps[0] && steps[0].classList.add('is-on');
        if (count) count.textContent = '0 OF 4 IN THE TRAY';
        return function () {
          wall.classList.remove('is-story');
          if (count) count.textContent = '4 TOOLS · ONE VISIT';
          lastLanded = -1;
          steps.forEach(function (s) { s.classList.remove('is-on'); });
          gsap.set(tools.map(function (g) { return $('.tool', g); }), { clearProps: 'all' });
        };
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
