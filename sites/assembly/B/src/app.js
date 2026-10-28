/* assembly-B · the carton stack (signature) + wall anchors + footer flatten */
SW.ready(function () {
  var root = document.documentElement;
  var board = SW.$('[data-counter]');
  var rail = SW.$('#stack');
  if (!board || !rail) return;

  var stackEl = SW.$('[data-stack]', rail);
  var emptyEl = SW.$('[data-stack-empty]', rail);
  var demoEl = SW.$('[data-stack-demo]', rail);
  var boxEl = SW.$('.stackbox', rail);
  var demo = true;
  var plates = SW.$$('[data-stack-plate],[data-board-plate],[data-bar-plate]');
  var tiles = SW.$$('.tile[data-piece]', board);
  var counts = {};
  var order = [];
  var deskMq = window.matchMedia('(min-width: 1100px)');
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  function tileOf(code) { return tiles.filter(function (t) { return t.getAttribute('data-piece') === code; })[0]; }
  function rangeOf(t) {
    var r = SW.$('[data-rng]', t);
    if (!r) return '';
    var c = r.cloneNode(true);
    SW.$$('.sample-tag', c).forEach(function (s) { s.remove(); });
    return c.textContent.trim();
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function total() { return order.reduce(function (s, k) { return s + (counts[k] || 0); }, 0); }

  function render(newCode) {
    var n = total();
    plates.forEach(function (p) { p.textContent = 'PC ' + pad(n); });
    stackEl.textContent = '';
    var shown = order.filter(function (k) { return counts[k] > 0; });
    shown.forEach(function (code, i) {
      var t = tileOf(code);
      var li = document.createElement('li');
      li.className = 'chip carton';
      li.style.setProperty('--j', String(i % 4));
      var name = document.createElement('span');
      name.innerHTML = '<span class="code"></span> ';
      name.firstChild.textContent = code;
      name.appendChild(document.createTextNode('×' + counts[code]));
      var rng = document.createElement('span');
      rng.className = 'chip__rng';
      rng.textContent = rangeOf(t);
      li.appendChild(name);
      li.appendChild(rng);
      if (code === newCode && motion) li.classList.add('is-new');
      stackEl.appendChild(li);
    });
    emptyEl.hidden = shown.length > 0;
    if (boxEl) boxEl.classList.toggle('has-items', shown.length > 0);
    if (demoEl) demoEl.hidden = !demo;
    tiles.forEach(function (t) {
      var c = counts[t.getAttribute('data-piece')] || 0;
      var out = SW.$('[data-n]', t);
      if (out) out.textContent = '×' + c;
      t.classList.toggle('has-n', c > 0);
      var minus = SW.$('[data-minus]', t);
      if (minus) minus.disabled = c === 0;
      var plus = SW.$('[data-plus]', t);
      var max = parseInt(t.getAttribute('data-max') || '99', 10);
      if (plus) plus.disabled = c >= max;
    });
  }

  function change(code, d) {
    var t = tileOf(code);
    if (!t) return;
    var max = parseInt(t.getAttribute('data-max') || '99', 10);
    var next = Math.max(0, Math.min(max, (counts[code] || 0) + d));
    if (next === (counts[code] || 0)) return;
    demo = false;
    counts[code] = next;
    if (order.indexOf(code) === -1) order.push(code);
    render(d > 0 ? code : null);
    if (motion && d > 0) { t.classList.remove('is-bump'); void t.offsetWidth; t.classList.add('is-bump'); }
  }

  tiles.forEach(function (t) {
    var code = t.getAttribute('data-piece');
    SW.on(SW.$('[data-plus]', t), 'click', function () { change(code, 1); });
    SW.on(SW.$('[data-minus]', t), 'click', function () { change(code, -1); });
  });
  SW.$$('[data-add-piece]').forEach(function (b) {
    b.addEventListener('click', function () {
      change(b.getAttribute('data-add-piece'), 1);
      if (!deskMq.matches) openSheet(b);
    });
  });
  SW.on(SW.$('[data-stack-clear]', rail), 'click', function () { demo = false; counts = {}; order = []; render(null); });

  function listText() {
    return order.filter(function (k) { return counts[k] > 0; }).map(function (k) {
      var t = tileOf(k);
      return k + ' ' + t.getAttribute('data-label') + ' ×' + counts[k] + ' (' + rangeOf(t) + ', sample)';
    }).join('\n');
  }
  SW.$$('[data-book]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      closeSheet(true);
      var sel = SW.$('#f-service');
      var svc = sel && sel.options.length > 1 ? sel.options[1].value : '';
      var data = { service: svc };
      var txt = listText();
      if (txt) data.details = txt;
      SW.prefillForm(data, { focus: 'service' });
    });
  });
  var rules = SW.$('[data-add-rules]');
  if (rules) rules.addEventListener('click', function (e) {
    e.preventDefault();
    var picked = SW.$$('[data-checklist] input:checked').map(function (i) { return i.value; });
    SW.prefillForm({ building: picked.join('; ') }, { focus: 'building' });
  });

  // ---- sheet below 1100px ----
  var openers = SW.$$('[data-sheet-open]');
  var lastOpener = null;
  function setSheetA11y() {
    var open = rail.classList.contains('is-open');
    if (deskMq.matches) { rail.removeAttribute('aria-hidden'); rail.inert = false; return; }
    rail.setAttribute('aria-hidden', open ? 'false' : 'true');
    rail.inert = !open;
  }
  function openSheet(from) {
    if (deskMq.matches) return;
    lastOpener = from || null;
    rail.classList.add('is-open');
    openers.forEach(function (o) { o.setAttribute('aria-expanded', 'true'); });
    setSheetA11y();
    var c = SW.$('[data-sheet-close]', rail);
    if (c) setTimeout(function () { c.focus(); }, 30);
  }
  function closeSheet(quiet) {
    if (!rail.classList.contains('is-open')) return;
    rail.classList.remove('is-open');
    openers.forEach(function (o) { o.setAttribute('aria-expanded', 'false'); });
    setSheetA11y();
    if (!quiet && lastOpener) lastOpener.focus();
  }
  openers.forEach(function (o) { o.addEventListener('click', function () { rail.classList.contains('is-open') ? closeSheet() : openSheet(o); }); });
  SW.on(SW.$('[data-sheet-close]', rail), 'click', function () { closeSheet(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });
  deskMq.addEventListener('change', function () { rail.classList.remove('is-open'); setSheetA11y(); });
  setSheetA11y();
  // one sample carton already on the stack, so the column shows what it does at 0 ms
  if (tileOf('TV-C')) { counts['TV-C'] = 1; order.push('TV-C'); }
  render(null);

  // ---- rail flattens over the footer ----
  var foot = SW.$('.foot');
  if (foot && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        rail.classList.toggle('is-gone', x.isIntersecting);
        if (motion) rail.classList.toggle('is-flat', x.isIntersecting);
      });
    }, { rootMargin: '0px 0px -30% 0px' }).observe(foot);
  }

  // ---- motion only ----
  if (!motion) return;

  var walls = SW.$('.walls');
  if (walls) {
    SW.inView(walls, function () {
      var g = window.gsap;
      if (g) {
        g.fromTo(SW.$$('.anchor', walls), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: .9, ease: 'power3.out', stagger: .12,
          onComplete: function () { walls.classList.add('is-drawn'); } });
        g.fromTo(SW.$$('.thread, .sleeve, .wedge', walls), { opacity: 0 }, { opacity: 1, duration: .4, delay: .6, stagger: .05 });
      } else walls.classList.add('is-drawn');
    }, { threshold: .15 });
  }

  var bundle = SW.$('[data-bundle]');
  if (bundle && window.gsap) {
    var sheets = SW.$$('.sheets rect', bundle);
    var straps = SW.$$('.strap', bundle);
    SW.inView(bundle, function () {
      gsap.from(sheets, { y: -40, rotation: function (i) { return (i % 2 ? 4 : -4); }, transformOrigin: '50% 100%', opacity: 0, duration: .5, ease: 'power3.out', stagger: .08 });
      gsap.from(straps, { scaleY: 0, transformOrigin: '50% 0%', duration: .35, delay: .55, ease: 'power2.out' });
    }, { threshold: .3 });
  }

  if (window.ScrollTrigger && document.fonts) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
});
