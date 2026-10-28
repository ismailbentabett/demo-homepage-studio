/* kit: core */
/* Site Sledge kit: core. Defines window.SW, the module runner and shared helpers.
   Modules register with SW.mod('name', fn) and start on DOMContentLoaded in registration order.
   One failing module never stops the others (logged with console.warn). */
(function () {
  'use strict';
  if (window.SW && window.SW.__core) return;

  var doc = document;
  var root = doc.documentElement;

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  // addEventListener that returns an "off" function
  function on(el, ev, fn, opts) {
    if (!el) return function () {};
    el.addEventListener(ev, fn, opts);
    return function () { el.removeEventListener(ev, fn, opts); };
  }
  function warn(what, err) { try { console.warn('[SW] ' + what, err || ''); } catch (e) { /* no console */ } }

  // ---- facts (parsed lazily from <script type="application/json" id="sw-facts">) ----
  var factsCache = null;
  function readFacts() {
    if (factsCache) return factsCache;
    var node = doc.getElementById('sw-facts');
    if (!node) return {}; // not parsed yet or absent: try again next time
    try { factsCache = JSON.parse(node.textContent || '{}') || {}; } catch (e) { warn('sw-facts is not valid JSON', e); factsCache = {}; }
    return factsCache;
  }
  // SW.fact('biz.zips', 'zips') -> first path that exists
  function fact() {
    var f = readFacts();
    for (var i = 0; i < arguments.length; i++) {
      var v = arguments[i].split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, f);
      if (v !== undefined && v !== null) return v;
    }
    return undefined;
  }

  // ---- session storage that never throws ----
  var store = {
    get: function (k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.sessionStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };

  // ---- focus helpers ----
  var FOCUSABLE = 'a[href],area[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),' +
    'textarea:not([disabled]),iframe,audio[controls],video[controls],summary,[contenteditable]:not([contenteditable="false"]),[tabindex]:not([tabindex="-1"])';
  function visible(el) {
    if (!el || el.hidden || el.closest('[inert]')) return false;
    if (!el.getClientRects().length) return false;
    return getComputedStyle(el).visibility !== 'hidden';
  }
  function focusables(container) { return $$(FOCUSABLE, container).filter(visible); }
  function docOrder(a, b) { return a === b ? 0 : (a.compareDocumentPosition(b) & 4 ? -1 : 1); }
  // Keep Tab inside container (plus optional extra elements, e.g. a toggle button outside it). Returns release().
  function trapFocus(container, extras) {
    extras = extras || [];
    function onKey(e) {
      if (e.key !== 'Tab') return;
      var list = focusables(container).concat(extras.filter(visible)).sort(docOrder);
      if (!list.length) { e.preventDefault(); return; }
      var first = list[0], last = list[list.length - 1], active = doc.activeElement;
      var inside = container.contains(active) || extras.indexOf(active) >= 0;
      if (e.shiftKey && (active === first || !inside)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (active === last || !inside)) { e.preventDefault(); first.focus(); }
    }
    doc.addEventListener('keydown', onKey, true);
    return function release() { doc.removeEventListener('keydown', onKey, true); };
  }
  function focusEl(el) {
    if (!el) return;
    if (!el.matches(FOCUSABLE) && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
  }

  // ---- scroll lock (nested calls are counted; works with Lenis) ----
  var locks = 0;
  function lockScroll(lock) {
    locks = Math.max(0, locks + (lock ? 1 : -1));
    var locked = locks > 0;
    if (locked) root.style.setProperty('--sw-scrollbar', Math.max(0, window.innerWidth - root.clientWidth) + 'px');
    root.classList.toggle('sw-scroll-locked', locked);
    if (SW.lenis) { try { if (locked) SW.lenis.stop(); else SW.lenis.start(); } catch (e) { warn('lenis lock', e); } }
    return locked;
  }

  // ---- scroll to an element / selector / y position, through Lenis when it runs ----
  function scrollTo(target, opts) {
    opts = opts || {};
    var el = typeof target === 'string' ? $(target) : target;
    var instant = SW.reduced || opts.immediate;
    if (typeof target === 'number') {
      if (SW.lenis) SW.lenis.scrollTo(target, { immediate: instant });
      else window.scrollTo({ top: target, behavior: instant ? 'auto' : 'smooth' });
      return;
    }
    if (!el) return;
    if (SW.lenis) SW.lenis.scrollTo(el, { immediate: instant }); // Lenis reads scroll-margin-top itself
    else el.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' });
    if (opts.focus !== false) focusEl(opts.focusTarget || el);
  }

  // ---- in view (IntersectionObserver; calls cb(true, entry) immediately when IO is missing) ----
  function inView(el, cb, o) {
    o = o || {};
    var once = o.once !== false;
    if (!el) return function () {};
    if (!('IntersectionObserver' in window)) { cb(true, null); return function () {}; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (once && !en.isIntersecting) return;
        cb(en.isIntersecting, en);
        if (once && en.isIntersecting) io.disconnect();
      });
    }, { threshold: o.threshold || 0, rootMargin: o.rootMargin || '0px' });
    io.observe(el);
    return function () { io.disconnect(); };
  }

  // ---- fill the lead form from anywhere (prefill, zip). Fires 'sw:prefill' on the form. ----
  function prefillForm(data, opts) {
    opts = opts || {};
    var form = $('form[data-lead]');
    if (!form) return null;
    Object.keys(data || {}).forEach(function (name) {
      var value = String(data[name] == null ? '' : data[name]);
      var fields = $$('[name="' + name + '"]', form);
      fields.forEach(function (f) {
        if (f.type === 'radio' || f.type === 'checkbox') {
          var match = norm(f.value) === norm(value) || norm(labelText(f)) === norm(value);
          if (match) f.checked = true;
        } else if (f.tagName === 'SELECT') {
          var opt = Array.prototype.find.call(f.options, function (o) { return norm(o.value) === norm(value) || norm(o.text) === norm(value); });
          if (opt) f.value = opt.value;
        } else {
          f.value = value;
        }
        f.dispatchEvent(new Event('input', { bubbles: true }));
        f.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
    form.dispatchEvent(new CustomEvent('sw:prefill', { detail: data || {} }));
    if (opts.scroll !== false) {
      var target = form.closest('#contact') || $('#contact') || form;
      scrollTo(target, { focus: false });
      // focus the named field (opts.focus) once it is shown, else the first field of the current step
      setTimeout(function () {
        var named = opts.focus && $$('[name="' + opts.focus + '"]', form).filter(visible);
        var pick = named && named.length ? (named.filter(function (f) { return f.checked; })[0] || named[0]) : focusables(form)[0];
        focusEl(pick);
      }, SW.reduced ? 0 : 450);
    }
    return form;
  }
  function norm(s) { return String(s || '').trim().toLowerCase(); }
  function labelText(input) { var l = input.closest('label') || (input.id && $('label[for="' + input.id + '"]')); return l ? l.textContent : ''; }

  // ---- media fallback (always on): a failed image or video becomes a .frame.is-broken panel ----
  function breakMedia(media) {
    if (!media || media.dataset.swBroken) return;
    var holder = media.closest('figure, .frame, [data-fallback]');
    if (media.tagName === 'VIDEO') {
      // a failed video still shows its poster; only break the frame when the poster fails too
      var fig = media.closest('figure');
      var btn = fig && $('[data-vid-btn]', fig);
      if (btn) btn.hidden = true;
      if (fig) fig.classList.add('is-video-broken');
      if (media.poster) {
        var probe = new Image();
        probe.onerror = function () { markBroken(media, holder); };
        probe.src = media.poster;
        return;
      }
    }
    markBroken(media, holder);
  }
  function markBroken(media, holder) {
    media.dataset.swBroken = '1';
    if (!holder) return;
    holder.classList.add('frame', 'is-broken');
    var btn = $('[data-vid-btn]', holder);
    if (btn) btn.hidden = true;
    if (!$('.frame-fallback', holder)) {
      var text = holder.getAttribute('data-fallback') || media.getAttribute('alt') || media.getAttribute('aria-label') || '';
      var span = doc.createElement('span');
      span.className = 'frame-fallback';
      span.textContent = text;
      holder.appendChild(span);
    }
  }
  function scanMedia() {
    $$('img').forEach(function (img) { if (img.complete && img.getAttribute('src') && img.naturalWidth === 0) breakMedia(img); });
  }
  // error events do not bubble, so listen in the capture phase
  doc.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || !t.tagName) return;
    if (t.tagName === 'IMG') breakMedia(t);
    else if (t.tagName === 'VIDEO' && t.getAttribute('src')) breakMedia(t);
    else if (t.tagName === 'SOURCE' && t.parentElement && t.parentElement.tagName === 'VIDEO') breakMedia(t.parentElement);
  }, true);

  // ---- module registry + runner ----
  var mods = [];
  var started = false;
  var readyFns = [];
  function runOne(m) {
    if (m.done) return;
    m.done = true;
    try { m.fn(SW); } catch (e) { warn('module "' + m.name + '" failed', e); }
  }
  function mod(name, fn) {
    if (mods.some(function (m) { return m.name === name; })) return; // registered twice: keep the first
    var m = { name: name, fn: fn, done: false };
    mods.push(m);
    if (started) runOne(m);
  }
  function start() {
    if (started) return;
    started = true;
    readFacts();
    scanMedia();
    mods.forEach(runOne);
    readyFns.forEach(function (fn) { try { fn(SW); } catch (e) { warn('ready callback failed', e); } });
    readyFns = [];
    root.classList.add('sw-ready');
  }
  // run fn after every module has started (for src/app.js glue)
  function ready(fn) { if (started) { try { fn(SW); } catch (e) { warn('ready callback failed', e); } } else readyFns.push(fn); }

  var SW = window.SW = {
    __core: true,
    $: $, $$: $$, on: on, warn: warn,
    get facts() { return readFacts(); },
    fact: fact,
    get reduced() { return !root.classList.contains('sw-motion'); },
    get finePointer() { return window.matchMedia('(hover: hover) and (pointer: fine)').matches; },
    mod: mod, ready: ready,
    inView: inView, trapFocus: trapFocus, lockScroll: lockScroll, scrollTo: scrollTo,
    focusables: focusables, focusEl: focusEl, prefillForm: prefillForm, store: store,
    mediaFallback: { scan: scanMedia, mark: breakMedia },
    lenis: null,
  };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start);
  else { doc.addEventListener('DOMContentLoaded', start); setTimeout(start, 0); }
})();

;
/* kit: reveal */
/* reveal: adds .is-in when [data-reveal] / [data-reveal-stagger] elements enter the bottom 85% of the viewport.
   Children of [data-reveal-stagger] get --i (0, 1, 2...) for the CSS delay. Without sw-motion everything is shown at once. */
SW.mod('reveal', function (SW) {
  var els = SW.$$('[data-reveal], [data-reveal-stagger]');
  if (!els.length) return;
  SW.$$('[data-reveal-stagger]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) { child.style.setProperty('--i', i); });
  });
  function show(el) { el.classList.add('is-in'); }
  function showAll() { els.forEach(show); }
  window.addEventListener('beforeprint', showAll);
  if (SW.reduced || !('IntersectionObserver' in window)) { showAll(); return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -15% 0px' });
  els.forEach(function (el) { io.observe(el); });

  // a jump (anchor link, End key) can skip past elements without them ever intersecting: show what is above the fold
  var pending = false;
  function catchUp() {
    pending = false;
    els.forEach(function (el) {
      if (!el.classList.contains('is-in') && el.getBoundingClientRect().bottom < 0) { show(el); io.unobserve(el); }
    });
  }
  window.addEventListener('scroll', function () { if (!pending) { pending = true; requestAnimationFrame(catchUp); } }, { passive: true });
  catchUp();
});

;
/* kit: header */
/* header: [data-header] gets .is-scrolled past 8px and .is-hidden while scrolling down past 160px
   (never while focus is inside it or the menu is open). [data-progress] gets --p (0..1) of the page read.
   [data-totop] gets .is-shown past one screen and scrolls back to the top on click. */
SW.mod('header', function (SW) {
  var header = SW.$('[data-header]');
  var bars = SW.$$('[data-progress]');
  var tops = SW.$$('[data-totop]');
  if (!header && !bars.length && !tops.length) return;
  var root = document.documentElement;
  var lastY = window.scrollY;
  var focusInside = false;
  var queued = false;

  function update() {
    queued = false;
    var y = window.scrollY;
    if (header) {
      header.classList.toggle('is-scrolled', y > 8);
      var menuOpen = root.classList.contains('sw-menu-open');
      if (y < 160 || focusInside || menuOpen || y < lastY - 4) header.classList.remove('is-hidden');
      else if (y > lastY + 4) header.classList.add('is-hidden');
    }
    var max = root.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    bars.forEach(function (b) { b.style.setProperty('--p', p.toFixed(4)); });
    tops.forEach(function (t) { t.classList.toggle('is-shown', y > window.innerHeight); });
    if (Math.abs(y - lastY) > 4) lastY = y;
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  document.addEventListener('sw:menu', queue);

  if (header) {
    header.addEventListener('focusin', function () { focusInside = true; header.classList.remove('is-hidden'); });
    header.addEventListener('focusout', function (e) { if (!header.contains(e.relatedTarget)) focusInside = false; });
  }
  tops.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      SW.scrollTo(0);
      SW.focusEl(document.getElementById('top') || SW.$('main h1, h1') || SW.$('main') || document.body);
    });
  });
  update();
});

;
/* kit: menu */
/* menu: [data-menu-btn] opens/closes [data-menu] (full-screen or drawer).
   Sets aria-controls / aria-expanded, .is-open on the menu, html.sw-menu-open, inert while closed,
   traps focus, locks the page scroll; Esc, [data-menu-close] or a link click closes it and focus returns.
   data-menu-mq="(max-width: 899px)" on the menu: it only acts as a menu while that media query matches
   (for a nav that is a plain bar on wide screens). */
SW.mod('menu', function (SW) {
  var menu = SW.$('[data-menu]');
  var btns = SW.$$('[data-menu-btn]');
  if (!menu || !btns.length) return;
  var root = document.documentElement;
  var mqText = menu.getAttribute('data-menu-mq');
  var mq = mqText ? window.matchMedia(mqText) : null;
  var open = false, release = null, opener = null;

  if (!menu.id) menu.id = 'sw-menu';
  menu.setAttribute('data-lenis-prevent', '');
  btns.forEach(function (b) {
    b.setAttribute('aria-controls', menu.id);
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function () { if (open) close(true); else show(b); });
  });
  function active() { return !mq || mq.matches; }
  function setClosedState() { menu.inert = active(); }
  setClosedState();
  if (mq) {
    var onChange = function () { if (open && !active()) close(false); setClosedState(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
  }

  function announce() { document.dispatchEvent(new CustomEvent('sw:menu', { detail: { open: open } })); }
  function show(btn) {
    if (open || !active()) return;
    open = true; opener = btn || btns[0];
    menu.inert = false;
    menu.classList.add('is-open');
    root.classList.add('sw-menu-open');
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    SW.lockScroll(true);
    release = SW.trapFocus(menu, btns.filter(function (b) { return !menu.contains(b); }));
    // wait a frame so a visibility change has applied before focusing
    requestAnimationFrame(function () {
      var first = SW.$('[data-menu-first]', menu) ||
        SW.focusables(menu).filter(function (el) { return !el.hasAttribute('data-menu-close'); })[0];
      SW.focusEl(first || menu);
    });
    announce();
  }
  function close(returnFocus) {
    if (!open) return;
    open = false;
    menu.classList.remove('is-open');
    root.classList.remove('sw-menu-open');
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (release) release();
    release = null;
    SW.lockScroll(false);
    setClosedState();
    if (returnFocus && opener) SW.focusEl(opener);
    announce();
  }
  document.addEventListener('keydown', function (e) { if (open && e.key === 'Escape') { e.preventDefault(); close(true); } });
  menu.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-menu-close], a[href]') : null;
    if (!t) return;
    close(t.hasAttribute('data-menu-close')); // a link: let it navigate, its target takes focus
  });
  SW.menu = { open: show, close: close, get isOpen() { return open; } };
});

;
/* kit: mobilebar */
/* mobilebar: [data-mobilebar] (sticky call/quote bar; the site's CSS shows it under 900px).
   Gets .is-hidden + inert while scrolling down past 200px, while #contact / form[data-lead] / [data-mobilebar-hide]
   is on screen, while a text field has focus (the phone keyboard is up) and while the menu is open. */
SW.mod('mobilebar', function (SW) {
  var bar = SW.$('[data-mobilebar]');
  if (!bar) return;
  var lastY = window.scrollY, goingDown = false, typing = false, menuOpen = false, queued = false;
  var blocking = [];

  function update() {
    queued = false;
    var y = window.scrollY;
    if (y > lastY + 4) goingDown = true; else if (y < lastY - 4) goingDown = false;
    if (Math.abs(y - lastY) > 4) lastY = y;
    var focusInBar = bar.contains(document.activeElement);
    var hide = !focusInBar && ((goingDown && y > 200) || blocking.length > 0 || typing || menuOpen);
    bar.classList.toggle('is-hidden', hide);
    bar.inert = hide;
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', queue, { passive: true });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var i = blocking.indexOf(en.target);
        if (en.isIntersecting && i < 0) blocking.push(en.target);
        if (!en.isIntersecting && i >= 0) blocking.splice(i, 1);
      });
      queue();
    });
    SW.$$('#contact, form[data-lead], [data-mobilebar-hide]').forEach(function (el) { io.observe(el); });
  }
  function isField(el) {
    return !!(el && el.matches && el.matches('input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, select'));
  }
  document.addEventListener('focusin', function (e) { typing = isField(e.target) && !bar.contains(e.target); queue(); });
  document.addEventListener('focusout', function () { typing = false; queue(); });
  document.addEventListener('sw:menu', function (e) { menuOpen = !!(e.detail && e.detail.open); queue(); });
  update();
});

;
/* kit: video */
/* video: <video data-video data-src="media/x.mp4" poster muted loop playsinline preload="none"> inside a figure
   with a <button data-vid-btn aria-pressed="false">Pause background video</button> (the [[video]] macro writes both).
   Loads data-src when it comes near the screen, plays muted, pauses off-screen and in a hidden tab.
   The button keeps its label; aria-pressed="true" means paused. The figure gets data-state="playing|paused".
   Under reduced motion nothing autoplays (the poster shows, the button starts pressed; a click plays). */
SW.mod('video', function (SW) {
  SW.$$('video[data-video]').forEach(function (v) {
    var fig = v.closest('figure') || v.parentElement;
    var btn = fig ? SW.$('[data-vid-btn]', fig) : null;
    v.muted = true;
    v.setAttribute('muted', '');
    v.playsInline = true;
    var userPaused = SW.reduced;
    var near = false;

    function load() {
      if (!v.getAttribute('src') && v.dataset.src) { v.src = v.dataset.src; }
    }
    function play() {
      load();
      var p = v.play();
      if (p && p.catch) p.catch(function () { reflect(); });
    }
    function reflect() {
      var playing = !v.paused && !v.ended;
      if (btn) btn.setAttribute('aria-pressed', playing ? 'false' : 'true');
      if (fig) fig.setAttribute('data-state', playing ? 'playing' : 'paused');
    }
    function sync() {
      if (near && !userPaused && !document.hidden) play();
      else if (!v.paused) v.pause();
    }
    v.addEventListener('play', reflect);
    v.addEventListener('playing', reflect);
    v.addEventListener('pause', reflect);
    if (btn) {
      btn.type = 'button';
      btn.addEventListener('click', function () {
        if (v.paused) { userPaused = false; play(); } else { userPaused = true; v.pause(); }
        v.toggleAttribute('data-user-paused', userPaused);
      });
    }
    SW.inView(v, function (inside) { near = inside; sync(); }, { once: false, rootMargin: '150px' });
    document.addEventListener('visibilitychange', sync);
    reflect();
  });
});

;
/* kit: estimator */
/* estimator: shows the sample price ranges from facts proof.prices. It never does math on dollars.
   <div data-estimator>
     <label for="est-item">Job</label> <select id="est-item" data-est-item></select>   (filled from the prices when empty)
     <label for="est-size">Size</label> <input id="est-size" type="range" min="0" max="2" value="1" data-est-size>   (optional)
     <div data-est-sketch></div>      (optional; gets data-item / data-level / --est for a drawing)
     <p data-est-out></p>             (aria-live; created when missing)
     <button data-est-print>Print this price</button>   (optional)
   </div>
   The range only sets a level (low / mid / high) and --est 0..1 for the sketch; the shown range stays the facts' from-to.
   Output: "Leak repair: $300 to $950", the note, and a .sample-tag "Sample price". */
SW.mod('estimator', function (SW) {
  var LEVELS = ['low', 'mid', 'high'];
  SW.$$('[data-estimator]').forEach(function (box) {
    var prices = SW.fact('proof.prices', 'prices') || [];
    var sel = SW.$('[data-est-item]', box);
    var size = SW.$('[data-est-size]', box);
    var sketch = SW.$('[data-est-sketch]', box);
    var out = SW.$('[data-est-out]', box);
    var printBtn = SW.$('[data-est-print]', box);
    if (!sel || !prices.length) { SW.warn('estimator: needs [data-est-item] and proof.prices', box); return; }
    if (!out) { out = document.createElement('p'); out.setAttribute('data-est-out', ''); box.appendChild(out); }
    out.setAttribute('aria-live', 'polite');
    if (!sel.options.length) {
      prices.forEach(function (p, i) {
        var o = document.createElement('option');
        o.value = String(i);
        o.textContent = p.item;
        sel.appendChild(o);
      });
    }
    function money(v) {
      if (typeof v === 'number') return '$' + v.toLocaleString('en-US');
      return String(v);
    }
    function current() {
      var v = sel.value;
      var byIndex = /^\d+$/.test(v) ? prices[parseInt(v, 10)] : null;
      return byIndex || prices.find(function (p) { return p.item.toLowerCase() === String(sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : v).toLowerCase(); }) || prices[0];
    }
    function update() {
      var p = current();
      var level = 1, k = 0.5;
      if (size) {
        var min = parseFloat(size.min) || 0, max = parseFloat(size.max) || 100, val = parseFloat(size.value);
        k = max > min ? (val - min) / (max - min) : 0.5;
        level = k < 1 / 3 ? 0 : k < 2 / 3 ? 1 : 2;
        size.setAttribute('aria-valuetext', LEVELS[level] === 'low' ? 'Small job' : LEVELS[level] === 'mid' ? 'Typical job' : 'Large job');
      }
      box.style.setProperty('--est', k.toFixed(3));
      box.setAttribute('data-level', LEVELS[level]);
      if (sketch) {
        sketch.setAttribute('data-item', p.item);
        sketch.setAttribute('data-level', LEVELS[level]);
        sketch.style.setProperty('--est', k.toFixed(3));
      }
      out.textContent = '';
      var line = document.createElement('span');
      line.className = 'sw-est-range';
      line.textContent = p.item + ': ' + money(p.from) + ' to ' + money(p.to) + (p.unit ? ' ' + p.unit : '');
      out.appendChild(line);
      if (p.note) {
        var note = document.createElement('span');
        note.className = 'sw-est-note';
        note.textContent = ' (' + p.note + ')';
        out.appendChild(note);
      }
      out.appendChild(document.createTextNode(' '));
      var tag = document.createElement('span');
      tag.className = 'sample-tag';
      tag.textContent = 'Sample price';
      out.appendChild(tag);
    }
    sel.addEventListener('change', update);
    if (size) size.addEventListener('input', update);
    if (printBtn) {
      printBtn.type = 'button';
      printBtn.addEventListener('click', function () {
        document.documentElement.classList.add('sw-print-est');
        box.classList.add('is-printing');
        window.print();
      });
      window.addEventListener('afterprint', function () {
        document.documentElement.classList.remove('sw-print-est');
        box.classList.remove('is-printing');
      });
    }
    box.setAttribute('data-estimator-ready', '');
    update();
  });
});

;
/* kit: zip */
/* zip: "Do you serve my area?" checker against facts biz.zips.
   <form data-zip>
     <label for="zip-in">Your ZIP code</label> <input id="zip-in" name="zip" inputmode="numeric" autocomplete="postal-code">
     <button type="submit">Check</button>
     <p data-zip-result></p>          (aria-live; created when missing)
   </form>
   Text can be set with data-zip-yes / data-zip-no ({zip}, {phone}, {city} are replaced).
   A yes shows a button "Get a price for {zip}" that fills the lead form (SW.prefillForm({zip})).
   A no shows a call link. Anything but 5 digits: "Enter a 5-digit ZIP code." with aria-invalid. Never sends anything. */
SW.mod('zip', function (SW) {
  SW.$$('[data-zip]').forEach(function (box) {
    var input = SW.$('input', box);
    if (!input) return;
    var out = SW.$('[data-zip-result]', box);
    if (!out) { out = document.createElement('p'); out.setAttribute('data-zip-result', ''); box.appendChild(out); }
    out.setAttribute('aria-live', 'polite');
    out.setAttribute('role', 'status');
    out.id = out.id || (input.id || 'sw-zip') + '-result';
    input.setAttribute('aria-describedby', ((input.getAttribute('aria-describedby') || '') + ' ' + out.id).trim());
    var form = box.tagName === 'FORM' ? box : null;
    if (form) { form.setAttribute('novalidate', ''); form.setAttribute('method', 'dialog'); }

    function fill(tpl, zip) {
      return tpl.replace(/\{zip\}/g, zip).replace(/\{phone\}/g, SW.fact('biz.phone') || '').replace(/\{city\}/g, SW.fact('biz.city') || '');
    }
    function check() {
      var zip = (input.value || '').replace(/\D/g, '');
      input.value = zip;
      out.textContent = '';
      box.removeAttribute('data-zip-state');
      if (zip.length !== 5) {
        input.setAttribute('aria-invalid', 'true');
        out.textContent = 'Enter a 5-digit ZIP code.';
        box.setAttribute('data-zip-state', 'invalid');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      var zips = (SW.fact('biz.zips', 'zips') || []).map(String);
      var yes = zips.indexOf(zip) >= 0;
      box.setAttribute('data-zip-state', yes ? 'yes' : 'no');
      var msg = document.createElement('span');
      msg.className = 'sw-zip-msg';
      msg.textContent = fill(box.getAttribute(yes ? 'data-zip-yes' : 'data-zip-no') ||
        (yes ? 'Yes, we work in {zip}.' : 'We don’t usually cover {zip}. Call us and we’ll tell you straight.'), zip);
      out.appendChild(msg);
      out.appendChild(document.createTextNode(' '));
      if (yes) {
        var go = document.createElement('button');
        go.type = 'button';
        go.className = 'sw-zip-go';
        go.textContent = 'Get a price for ' + zip;
        go.addEventListener('click', function () { SW.prefillForm({ zip: zip }); });
        out.appendChild(go);
      } else {
        var phone = SW.fact('biz.phone'), e164 = SW.fact('biz.phoneE164');
        if (phone) {
          var a = document.createElement('a');
          a.className = 'sw-zip-call';
          a.href = 'tel:' + (e164 || phone.replace(/[^\d+]/g, ''));
          a.textContent = 'Call ' + phone;
          out.appendChild(a);
        }
      }
    }
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); check(); });
    else {
      var btn = SW.$('button', box);
      if (btn) { btn.type = 'button'; btn.addEventListener('click', check); }
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check(); } });
    }
    input.addEventListener('input', function () { input.removeAttribute('aria-invalid'); });
  });
});

;
/* kit: form */
/* form: the 4-step lead form. It NEVER sends anything (no fetch, XHR or beacon); it shows the thank-you.
   <form data-lead method="dialog" novalidate data-thanks="Thanks, {name}. ...">
     <fieldset data-step><legend>Service</legend> ...radios name="service" required... </fieldset>
     <fieldset data-step><legend>Job details</legend> ... name="zip", name="details" ... </fieldset>
     <fieldset data-step><legend>When</legend> ... name="when" ... </fieldset>
     <fieldset data-step><legend>Contact</legend> name="name" required, name="phone" type="tel" required, name="email" type="email" </fieldset>
     <div class="hp" aria-hidden="true"><label>Website <input name="website2" tabindex="-1" autocomplete="off"></label></div>
     <input type="hidden" name="t">
     <button type="submit">Send my request</button>
   </form>
   Optional hooks: [data-form-progress] (role=progressbar, created when missing), [data-form-nav] holding
   [data-back] / [data-next] / [data-submit] buttons (created when missing; an existing submit button is reused),
   [data-form-status] (live region, created when missing), [data-thanks-box] (shown after sending, {name} replaced).
   Sets --step (1-based), --steps, --progress (0..1) and data-step-current on the form.
   Validation per step: required fields, one choice per required radio group, email shape, phone 10+ digits.
   Errors: p.field-error linked by aria-describedby, aria-invalid on the field, focus on the first problem.
   Spam: a filled website2 shows the thank-you and does nothing; sending in under 3 s (hidden t) asks to try again.
   Without JS every step shows at once (method="dialog" keeps a no-JS submit from going anywhere). */
SW.mod('form', function (SW) {
  SW.$$('form[data-lead]').forEach(function (form, formIndex) {
    var steps = SW.$$('[data-step]', form);
    if (!steps.length) steps = [form];
    var total = steps.length;
    var cur = 0;
    var uid = form.id || 'sw-lead-' + formIndex;
    form.setAttribute('method', 'dialog');
    form.setAttribute('novalidate', '');
    form.removeAttribute('action');

    // time trap
    var tField = SW.$('input[name="t"]', form);
    if (!tField) { tField = document.createElement('input'); tField.type = 'hidden'; tField.name = 't'; form.appendChild(tField); }
    var bornAt = Date.now();
    tField.value = String(bornAt);

    function make(tag, attr, text) {
      var el = document.createElement(tag);
      Object.keys(attr || {}).forEach(function (k) { el.setAttribute(k, attr[k]); });
      if (text) el.textContent = text;
      return el;
    }
    function titleOf(i) {
      var s = steps[i];
      if (s === form) return '';
      var l = s.getAttribute('data-step-title') || (s.querySelector('legend') ? s.querySelector('legend').textContent : '') || s.getAttribute('data-step');
      return (l || '').trim();
    }

    // progress
    var progress = SW.$('[data-form-progress]', form);
    if (!progress && total > 1) { progress = make('div', { 'data-form-progress': '' }); form.insertBefore(progress, form.firstChild); }
    if (progress) {
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-valuemin', '1');
      progress.setAttribute('aria-valuemax', String(total));
      if (!progress.hasAttribute('aria-label')) progress.setAttribute('aria-label', 'Form progress');
    }

    // buttons
    var submitBtn = SW.$('[data-submit]', form) || SW.$('button[type="submit"], input[type="submit"]', form);
    var nav = SW.$('[data-form-nav]', form);
    if (!nav) {
      nav = make('div', { 'data-form-nav': '' });
      if (submitBtn && submitBtn.parentElement !== form) submitBtn.parentElement.appendChild(nav); else form.appendChild(nav);
    }
    if (!submitBtn) submitBtn = make('button', { type: 'submit' }, form.getAttribute('data-submit-label') || 'Send my request');
    submitBtn.setAttribute('data-submit', '');
    var backBtn = SW.$('[data-back]', form) || make('button', { type: 'button', 'data-back': '' }, 'Back');
    var nextBtn = SW.$('[data-next]', form) || make('button', { type: 'button', 'data-next': '' }, 'Next');
    backBtn.type = 'button';
    nextBtn.type = 'button';
    if (!nav.contains(backBtn)) nav.appendChild(backBtn);
    if (!nav.contains(nextBtn)) nav.appendChild(nextBtn);
    if (!nav.contains(submitBtn)) nav.appendChild(submitBtn);

    // status
    var status = SW.$('[data-form-status]', form);
    if (!status) { status = make('p', { 'data-form-status': '' }); nav.parentElement.insertBefore(status, nav.nextSibling); }
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    function say(msg) { status.textContent = ''; setTimeout(function () { status.textContent = msg; }, 30); }

    function show(i, focus) {
      cur = Math.max(0, Math.min(total - 1, i));
      steps.forEach(function (s, j) {
        if (s === form) return;
        s.hidden = j !== cur;
        s.classList.toggle('is-current', j === cur);
      });
      var last = cur === total - 1;
      backBtn.hidden = cur === 0;
      nextBtn.hidden = last;
      submitBtn.hidden = !last;
      form.style.setProperty('--step', cur + 1);
      form.style.setProperty('--steps', total);
      form.style.setProperty('--progress', ((cur + 1) / total).toFixed(3));
      form.setAttribute('data-step-current', String(cur + 1));
      if (progress) {
        progress.setAttribute('aria-valuenow', String(cur + 1));
        progress.setAttribute('aria-valuetext', 'Step ' + (cur + 1) + ' of ' + total + (titleOf(cur) ? ': ' + titleOf(cur) : ''));
      }
      if (focus) {
        var f = SW.focusables(steps[cur])[0];
        SW.focusEl(f || steps[cur]);
        if (total > 1) say('Step ' + (cur + 1) + ' of ' + total + (titleOf(cur) ? ': ' + titleOf(cur) : ''));
      }
    }

    // ---- validation ----
    function labelFor(f) {
      var l = (f.id && SW.$('label[for="' + f.id + '"]', form)) || f.closest('label');
      var txt = f.getAttribute('data-label') || (l ? l.textContent : '') || f.getAttribute('aria-label') || f.name || 'this field';
      return txt.replace(/\*/g, '').replace(/\s+/g, ' ').trim();
    }
    function errorHost(f) {
      if (f.type === 'radio' || f.type === 'checkbox') return f.closest('fieldset, [role="radiogroup"], [data-group]') || f.parentElement;
      return f.closest('label') && f.closest('label').contains(f) ? f.closest('label') : f;
    }
    function clearError(f) {
      var group = f.type === 'radio' ? SW.$$('input[name="' + f.name + '"]', form) : [f];
      group.forEach(function (g) {
        g.removeAttribute('aria-invalid');
        var id = uid + '-err-' + (g.name || g.id);
        var d = (g.getAttribute('aria-describedby') || '').split(' ').filter(function (x) { return x && x !== id; }).join(' ');
        if (d) g.setAttribute('aria-describedby', d); else g.removeAttribute('aria-describedby');
      });
      var old = document.getElementById(uid + '-err-' + (f.name || f.id));
      if (old) old.remove();
    }
    function setError(f, msg) {
      clearError(f);
      var id = uid + '-err-' + (f.name || f.id);
      var p = make('p', { 'class': 'field-error', id: id }, msg);
      var host = errorHost(f);
      if (host === f) f.insertAdjacentElement('afterend', p); else host.appendChild(p);
      var group = f.type === 'radio' ? SW.$$('input[name="' + f.name + '"]', form) : [f];
      group.forEach(function (g) {
        g.setAttribute('aria-invalid', 'true');
        g.setAttribute('aria-describedby', ((g.getAttribute('aria-describedby') || '') + ' ' + id).trim());
      });
    }
    function problem(f) {
      var v = (f.value || '').trim();
      if (f.type === 'radio' || f.type === 'checkbox') {
        if (!f.required) return '';
        var any = SW.$$('input[name="' + f.name + '"]', form).some(function (g) { return g.checked; });
        return any ? '' : (f.getAttribute('data-error') || 'Please pick one.');
      }
      if (f.required && !v) return f.getAttribute('data-error') || 'Please add your ' + labelFor(f).toLowerCase() + '.';
      if (!v) return '';
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter an email like name@example.com.';
      if ((f.type === 'tel' || f.name === 'phone') && v.replace(/\D/g, '').length < 10) return 'Enter a 10-digit phone number.';
      if (f.name === 'zip' && !/^\d{5}$/.test(v.replace(/\s/g, ''))) return 'Enter a 5-digit ZIP code.';
      if (f.pattern && !new RegExp('^(?:' + f.pattern + ')$').test(v)) return f.getAttribute('data-error') || 'Please check ' + labelFor(f).toLowerCase() + '.';
      return '';
    }
    function fieldsOf(step) {
      return SW.$$('input, select, textarea', step).filter(function (f) {
        return f.type !== 'hidden' && f.name !== 'website2' && !f.disabled && !f.closest('[aria-hidden="true"]');
      });
    }
    function validate(step) {
      var seen = {}, first = null;
      fieldsOf(step).forEach(function (f) {
        if (f.type === 'radio') { if (seen[f.name]) return; seen[f.name] = true; }
        var msg = problem(f);
        if (msg) { setError(f, msg); if (!first) first = f; } else clearError(f);
      });
      if (first) {
        var pick = first.type === 'radio' ? (SW.$('input[name="' + first.name + '"]', form) || first) : first;
        SW.focusEl(pick);
        say('Please fix the highlighted field.');
        return false;
      }
      return true;
    }
    form.addEventListener('input', function (e) { if (e.target.getAttribute && e.target.getAttribute('aria-invalid') && !problem(e.target)) clearError(e.target); });
    form.addEventListener('change', function (e) { if (e.target.getAttribute && e.target.getAttribute('aria-invalid') && !problem(e.target)) clearError(e.target); });

    // ---- navigation ----
    nextBtn.addEventListener('click', function () { if (validate(steps[cur])) show(cur + 1, true); });
    backBtn.addEventListener('click', function () { show(cur - 1, true); });
    form.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' || cur === total - 1) return;
      var t = e.target;
      if (!t || t.tagName === 'TEXTAREA' || t.tagName === 'BUTTON' || t.tagName === 'A') return;
      e.preventDefault();
      nextBtn.click();
    });
    form.addEventListener('sw:prefill', function () { show(0, false); });

    // ---- send (never leaves the page) ----
    function thanks() {
      var nameField = SW.$('[name="name"]', form);
      var first = nameField && nameField.value.trim() ? nameField.value.trim().split(/\s+/)[0] : 'there';
      var box = SW.$('[data-thanks-box]', form.parentElement) || null;
      if (!box) {
        box = make('div', { 'data-thanks-box': '', 'class': 'sw-thanks' });
        var p = make('p', {}, (form.getAttribute('data-thanks') ||
          'Thanks, {name}. In your version this goes straight to your phone and inbox.'));
        box.appendChild(p);
        form.insertAdjacentElement('afterend', box);
      }
      var walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
      var node;
      while ((node = walker.nextNode())) {
        if (!node._swTpl) node._swTpl = node.nodeValue;
        node.nodeValue = node._swTpl.replace(/\{name\}/g, first);
      }
      box.setAttribute('role', 'status');
      box.hidden = false;
      form.hidden = true;
      form.classList.add('is-sent');
      SW.focusEl(box);
      form.dispatchEvent(new CustomEvent('sw:lead', { bubbles: true, detail: { demo: true } }));
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (cur < total - 1) { nextBtn.click(); return; }
      var hp = SW.$('[name="website2"]', form);
      if (hp && hp.value) { thanks(); return; }
      for (var i = 0; i < total; i++) { if (!validate(steps[i])) { show(i, false); validate(steps[i]); return; } }
      if (Date.now() - bornAt < 3000) { say('That was fast. Please check your details and press send again.'); bornAt = 0; return; }
      thanks();
    });

    form.setAttribute('data-form-ready', '');
    show(0, false);
  });
});

;
/* kit: opennow */
/* opennow: <p data-open-now>Mon to Fri 7 am to 6 pm</p> becomes "Open now · until 6 pm" / "Closed · opens 7 am" /
   "Closed · opens Mon 7 am", worked out in the business time zone (facts biz.timezone) from facts biz.hours:
   { mon: ["07:00","18:00"], ..., sun: null }. A day can hold several ranges [["07:00","12:00"],["13:00","18:00"]];
   "24:00" and overnight ranges ("20:00","02:00") work. If [data-open-now-text] is inside, only that child changes.
   Sets data-state="open|closed" and .is-open / .is-closed; refreshes every minute.
   Also marks the row for today in any [data-hours] or dl.hours list: the element with data-day="mon" etc. gets .is-today
   and aria-current="date". The text written in the HTML is what shows without JS. */
SW.mod('opennow', function (SW) {
  var DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var NAMES = { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' };
  var hours = SW.fact('biz.hours', 'hours');
  var tz = SW.fact('biz.timezone', 'timezone');
  var els = SW.$$('[data-open-now]');
  var rows = SW.$$('[data-hours] [data-day], dl.hours [data-day], .hours [data-day]');
  if (!hours || (!els.length && !rows.length)) return;

  function nowThere() {
    var opts = { weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' };
    if (tz) opts.timeZone = tz;
    var parts;
    try { parts = new Intl.DateTimeFormat('en-US', opts).formatToParts(new Date()); }
    catch (e) { delete opts.timeZone; parts = new Intl.DateTimeFormat('en-US', opts).formatToParts(new Date()); }
    var get = function (t) { var p = parts.find(function (x) { return x.type === t; }); return p ? p.value : ''; };
    var day = DAYS.indexOf(get('weekday').slice(0, 3).toLowerCase());
    var h = parseInt(get('hour'), 10) % 24, m = parseInt(get('minute'), 10);
    return { day: day < 0 ? new Date().getDay() : day, min: h * 60 + m };
  }
  function toMin(s) { var p = String(s).split(':'); return parseInt(p[0], 10) * 60 + (parseInt(p[1], 10) || 0); }
  function ranges(dayIdx) {
    var r = hours[DAYS[(dayIdx + 7) % 7]];
    if (!r || !r.length) return [];
    if (!Array.isArray(r[0])) r = [r];
    return r.map(function (x) { return { from: toMin(x[0]), to: toMin(x[1]) }; });
  }
  function clock(min) {
    min = ((min % 1440) + 1440) % 1440;
    var h = Math.floor(min / 60), m = min % 60;
    if (h === 0 && m === 0) return 'midnight';
    if (h === 12 && m === 0) return 'noon';
    var suf = h < 12 ? 'am' : 'pm';
    var h12 = h % 12 || 12;
    return h12 + (m ? ':' + (m < 10 ? '0' : '') + m : '') + ' ' + suf;
  }
  // open right now? returns closing minute (may be > 1440 for overnight) or null
  function openUntil(n) {
    var today = ranges(n.day), y = ranges(n.day - 1), i, r;
    for (i = 0; i < y.length; i++) { r = y[i]; if (r.to <= r.from && n.min < r.to) return r.to; } // overnight from yesterday
    for (i = 0; i < today.length; i++) {
      r = today[i];
      var end = r.to <= r.from ? r.to + 1440 : r.to;
      if (n.min >= r.from && n.min < end) return end;
    }
    return null;
  }
  function nextOpen(n) {
    for (var d = 0; d < 8; d++) {
      var rs = ranges(n.day + d).sort(function (a, b) { return a.from - b.from; });
      for (var i = 0; i < rs.length; i++) {
        if (d > 0 || rs[i].from > n.min) return { d: d, min: rs[i].from, day: DAYS[(n.day + d) % 7] };
      }
    }
    return null;
  }
  function render() {
    var n = nowThere();
    var until = openUntil(n);
    var open = until !== null, text;
    if (open) {
      text = 'Open now · until ' + clock(until); // 24:00 reads "until midnight"
    } else {
      var nx = nextOpen(n);
      text = !nx ? 'Closed' : 'Closed · opens ' + (nx.d === 0 ? '' : nx.d === 1 ? 'tomorrow ' : NAMES[nx.day] + ' ') + clock(nx.min);
    }
    els.forEach(function (el) {
      var target = SW.$('[data-open-now-text]', el) || el;
      target.textContent = text;
      el.setAttribute('data-state', open ? 'open' : 'closed');
      el.classList.toggle('is-open', open);
      el.classList.toggle('is-closed', !open);
    });
    rows.forEach(function (r) {
      var on = r.getAttribute('data-day') === DAYS[n.day];
      r.classList.toggle('is-today', on);
      if (on) r.setAttribute('aria-current', 'date'); else r.removeAttribute('aria-current');
    });
  }
  render();
  setInterval(render, 60000);
});

;
/* kit: tabs */
/* tabs:
   <div data-tabs>
     <div data-tablist aria-label="Services"> <button data-tab>Repair</button> <button data-tab>Replace</button> </div>
     <section data-tabpanel> <h3>Repair</h3> ... </section>
     <section data-tabpanel> <h3>Replace</h3> ... </section>
   </div>
   Tabs and panels pair by order. Adds role=tablist/tab/tabpanel, ids, aria-controls/selected/labelledby, roving tabindex.
   Arrow keys (Left/Right, Up/Down), Home and End move and select. data-tabs-start="1" picks the first open tab (0-based).
   Without JS base.css hides [data-tablist] and every panel shows (each with its own heading). */
SW.mod('tabs', function (SW) {
  var n = 0;
  SW.$$('[data-tabs]').forEach(function (root) {
    var list = SW.$('[data-tablist]', root);
    var tabs = list ? SW.$$('[data-tab]', list) : [];
    var panels = SW.$$('[data-tabpanel]', root).filter(function (p) { return p.closest('[data-tabs]') === root; });
    if (!tabs.length || tabs.length !== panels.length) { SW.warn('tabs: need as many [data-tab] as [data-tabpanel]', root); return; }
    var id = root.id || 'sw-tabs-' + (++n);
    list.setAttribute('role', 'tablist');
    tabs.forEach(function (t, i) {
      var p = panels[i];
      if (t.tagName === 'BUTTON') t.type = 'button';
      t.id = t.id || id + '-tab-' + i;
      p.id = p.id || id + '-panel-' + i;
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-controls', p.id);
      p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', t.id);
      p.setAttribute('tabindex', '0');
      t.addEventListener('click', function () { select(i, false); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, next = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') next = (i + 1) % tabs.length;
        else if (k === 'ArrowLeft' || k === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
        else if (k === 'Home') next = 0;
        else if (k === 'End') next = tabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        select(next, true);
      });
    });
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        var on = j === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.setAttribute('tabindex', on ? '0' : '-1');
        t.classList.toggle('is-active', on);
        panels[j].hidden = !on;
        panels[j].classList.toggle('is-active', on);
      });
      root.style.setProperty('--tab', i);
      if (focus) tabs[i].focus();
      root.dispatchEvent(new CustomEvent('sw:tab', { detail: { index: i } }));
    }
    var start = parseInt(root.getAttribute('data-tabs-start'), 10) || 0;
    select(Math.min(Math.max(0, start), tabs.length - 1), false);
    root.setAttribute('data-tabs-ready', '');
  });
});

;
/* kit: prefill */
/* prefill: any link or button with data-service="Leak repair" (outside the lead form) fills the form's
   "service" field, scrolls to #contact and focuses that field. The [[quote]] macro writes these links
   (href="#contact" so they still work without JS). The value can be a service name or its short name. */
SW.mod('prefill', function (SW) {
  // capture phase: runs before the smooth-scroll anchor handler
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var t = e.target.closest ? e.target.closest('[data-service]') : null;
    if (!t || t.closest('form[data-lead]')) return;
    var form = SW.$('form[data-lead]');
    if (!form) return; // plain anchor behaviour
    e.preventDefault();
    var want = (t.getAttribute('data-service') || '').trim().toLowerCase();
    var services = SW.fact('services') || [];
    var hit = services.find(function (s) {
      return String(s.name || '').toLowerCase() === want || String(s.short || '').toLowerCase() === want;
    });
    var name = hit ? hit.name : t.getAttribute('data-service');
    SW.prefillForm(name ? { service: name } : {}, { focus: 'service' });
    if (t.getAttribute('href') && t.getAttribute('href').charAt(0) === '#') {
      try { history.pushState(null, '', t.getAttribute('href')); } catch (err) { /* file:// */ }
    }
  }, true);
});

;
/* kit: media-fallback */
/* media-fallback: always on. The listener lives in core.js (it must catch errors that happen before the
   modules start); this module re-checks images that had already failed by the time the page was ready.
   A failed <img> (or a <video> whose poster also failed) marks its closest figure / .frame / [data-fallback]
   with .frame.is-broken and appends <span class="frame-fallback"> holding data-fallback, else the alt text.
   A failed video hides its [data-vid-btn] and adds .is-video-broken to the figure (the poster stays). */
SW.mod('media-fallback', function (SW) {
  SW.mediaFallback.scan();
  window.addEventListener('load', function () { SW.mediaFallback.scan(); });
});

;
/* site: src/app.js */
/* drywall-A · Knife & Hawk · Feathered Knife Pass + tools glue */
(function () {
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    var services = (SW.fact('services') || []);
    function svc(i) { return services[i] ? services[i].name : ''; }
    function val(root, name) { var el = root.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ''; }
    function label(root, name) { var el = root.querySelector('input[name="' + name + '"]:checked'); return el ? el.parentNode.textContent.trim() : ''; }

    /* ---------- patch sizer ---------- */
    var sizer = document.querySelector('[data-sizer]');
    if (sizer) {
      var sel = sizer.querySelector('[data-est-item]');
      var sketch = sizer.querySelector('[data-est-sketch]');
      var visitsEl = sizer.querySelector('[data-visits]');
      var dustEl = sizer.querySelector('[data-dust]');
      var book = sizer.querySelector('[data-sizer-book]');
      var state = {};
      function sizeIt() {
        var sz = val(sizer, 'sz'), sf = val(sizer, 'sf'), fn = val(sizer, 'fn');
        var idx = 0, service = svc(0);
        if (sf === 'ceiling' && (sz === 'plate' || sz === 'door')) { idx = 1; service = svc(5); }
        else if (sz === 'door') { idx = 1; service = svc(1); }
        else if (fn === 'textured') { idx = 2; service = svc(3); }
        else if (sf === 'ceiling') { service = svc(5); }
        if (sel && sel.value !== String(idx)) { sel.value = String(idx); sel.dispatchEvent(new Event('change')); }
        var visits = 3 + (fn === 'textured' || sz === 'door' ? 1 : 0);
        if (visitsEl) visitsEl.textContent = String(visits);
        if (dustEl) dustEl.textContent = sf === 'ceiling'
          ? 'Plastic over the floor and furniture below, sanding kept to the room.'
          : 'Plastic at the doorway, sanding kept to the room.';
        if (sketch) { sketch.setAttribute('data-size', sz); sketch.setAttribute('data-surface', sf); sketch.setAttribute('data-finish', fn); }
        state = { service: service, size: label(sizer, 'sz'), surface: label(sizer, 'sf'),
          details: 'From the patch sizer: ' + label(sizer, 'sz') + ', ' + label(sizer, 'sf').toLowerCase() + ', ' + label(sizer, 'fn').toLowerCase() + ', about ' + visits + ' visits.' };
      }
      sizer.addEventListener('change', function (e) { if (e.target.name === 'sz' || e.target.name === 'sf' || e.target.name === 'fn') sizeIt(); });
      if (book) book.addEventListener('click', function (e) {
        if (!document.querySelector('form[data-lead]')) return;
        e.preventDefault();
        SW.prefillForm(state, { focus: 'service' });
      });
      sizeIt();
    }

    /* ---------- crack & nail-pop timer ---------- */
    var timer = document.querySelector('[data-timer]');
    if (timer) {
      var vEl = timer.querySelector('[data-timer-verdict]');
      var wEl = timer.querySelector('[data-timer-why]');
      var go = timer.querySelector('[data-timer-go]');
      var spring = false, tState = {};
      function judge() {
        var k = val(timer, 'tk'), w = val(timer, 'tw'), g = val(timer, 'tg');
        var v, why;
        spring = false;
        if (g === 'yes') { v = 'Fix now'; why = 'A crack that keeps getting bigger means something is still moving. We find out why before we patch it.'; }
        else if (k === 'stain') { v = 'Fix now, after the leak'; why = 'Fix the leak first, then the ceiling. A stain-blocking primer goes on before paint so it can’t bleed back through.'; }
        else if (k === 'plaster') { v = 'Book a look'; why = 'Pin it, don’t just caulk it. Loose plaster is screwed back to the lath with plaster washers, then skimmed.'; }
        else if (w === 'winter') { spring = true; v = 'Spring list'; why = 'Framing dries out in the heating season. Fixed now, the pops can come back; fixed in spring, they stay fixed.'; }
        else { v = 'Fix now'; why = 'It has been through a heating season already, so the framing has settled. Now is a good time.'; }
        vEl.textContent = v; wEl.textContent = why;
        go.firstChild.nodeValue = spring ? 'Put me on the spring list ' : 'Book a visit now ';
        var svcName = k === 'stain' ? svc(5) : k === 'seam' ? svc(2) : svc(0);
        tState = { service: svcName, when: spring ? 'Spring list' : 'This week', details: label(timer, 'tk') + ', ' + label(timer, 'tw').toLowerCase() + '. Growing: ' + label(timer, 'tg').toLowerCase() + '.' };
      }
      timer.addEventListener('change', judge);
      go.addEventListener('click', function (e) {
        if (!document.querySelector('form[data-lead]')) return;
        e.preventDefault();
        SW.prefillForm(tState, { focus: 'service' });
      });
      judge();
    }

    /* ---------- small one-shot reveals (pass lines, ledger skim) ---------- */
    var ledger = document.querySelector('[data-hook="ledger"]');
    if (ledger) Array.prototype.forEach.call(ledger.querySelectorAll('.row'), function (r, i) { r.style.setProperty('--i', i); });
    var once = document.querySelectorAll('.pass-line, [data-hook="ledger"]');
    if (!document.documentElement.classList.contains('sw-motion') || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(once, function (el) { el.classList.add('is-in', 'is-skimmed'); });
    } else {
      var io = new IntersectionObserver(function (ens) {
        ens.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in', 'is-skimmed'); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
      Array.prototype.forEach.call(once, function (el) { io.observe(el); });
    }

    /* ---------- motion: the knife pass ---------- */
    if (!SW.reduced && document.documentElement.classList.contains('sw-motion') && window.gsap) {
      var g = window.gsap;
      if (window.ScrollTrigger) g.registerPlugin(window.ScrollTrigger);

      // 1. hero intro: one blade sweep, ghost word smoothed, patch feathered (0.9s, skippable)
      var hero = document.querySelector('.hero');
      var blade = hero && hero.querySelector('.blade--hero');
      var patch = hero && hero.querySelector('[data-patch]');
      if (hero && blade) {
        var hw = hero.offsetWidth, bw = blade.offsetWidth;
        var pr = patch ? patch.getBoundingClientRect() : null, hr = hero.getBoundingClientRect();
        var at = pr ? Math.max(0, Math.min(.85, (pr.left - hr.left) / hw)) : .5;
        var tl = g.timeline({ delay: .15 });
        tl.set(blade, { opacity: 1, x: -bw })
          .to(blade, { x: hw + 4, duration: .9, ease: 'power2.inOut' }, 0)
          .to(hero, { '--gp': 1, duration: .9, ease: 'power2.inOut' }, 0)
          .to(hero, { '--hf': 1, duration: .4, ease: 'power1.out' }, .9 * at)
          .set(blade, { opacity: 0 });
        var skip = function () { tl.progress(1); off(); };
        var off = function () { ['wheel', 'keydown', 'touchstart'].forEach(function (t) { window.removeEventListener(t, skip); }); };
        ['wheel', 'keydown', 'touchstart'].forEach(function (t) { window.addEventListener(t, skip, { passive: true, once: true }); });
        tl.eventCallback('onComplete', off);
      }

      if (window.ScrollTrigger) {
        // 2. coats story: pinned (sticky) on wide screens, one pass per step
        var coats = document.querySelector('.coats');
        var wp = coats && coats.querySelector('[data-wp]');
        if (coats && wp) {
          var steps = coats.querySelectorAll('.step');
          var wpBlade = wp.querySelector('.blade');
          var lab = coats.querySelector('[data-wp-label]'), coat = coats.querySelector('[data-wp-coat]');
          var labels = ['Visit 1', 'Visit 1', 'Visit 1', 'Visits 2 and 3', 'Last visit'];
          var coatsN = ['0', '0', '1', '3', '3'];
          var cur = -1;
          function setStep(s) {
            if (s === cur) return;
            cur = s;
            wp.setAttribute('data-s', String(s));
            Array.prototype.forEach.call(steps, function (st, i) { st.classList.toggle('is-active', i === s - 1 || (s === 0 && i === 0)); });
            if (lab) lab.textContent = labels[s];
            if (coat) coat.textContent = coatsN[s];
            if (wpBlade && s > 0) g.fromTo(wpBlade, { opacity: 1, x: -wpBlade.offsetWidth }, { x: wp.offsetWidth + 4, duration: .7, ease: 'power2.inOut', overwrite: true, onComplete: function () { g.set(wpBlade, { opacity: 0 }); } });
          }
          var mm = g.matchMedia();
          mm.add('(min-width: 900px)', function () {
            coats.classList.add('is-pinned');
            setStep(0);
            var st = ScrollTrigger.create({
              trigger: coats, start: 'top top', end: 'bottom bottom',
              onUpdate: function (self) { var p = self.progress; setStep(p < .04 ? 0 : Math.min(4, Math.floor(p * 4) + 1)); }
            });
            ScrollTrigger.refresh();
            return function () { st.kill(); coats.classList.remove('is-pinned'); Array.prototype.forEach.call(steps, function (x) { x.classList.remove('is-active'); }); cur = -1; };
          });
        }

        // 3. break: the knife skims a stripe across the wet mud photo
        var brk = document.querySelector('.break');
        if (brk) {
          g.fromTo(brk, { '--sw-p': 0 }, { '--sw-p': 1.08, ease: 'none',
            scrollTrigger: { trigger: brk, start: 'top 85%', end: 'center 45%', scrub: .4 } });
        }
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
      }
    }
  });
})();

