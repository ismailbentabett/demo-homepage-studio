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
