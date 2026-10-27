(function () {
'use strict';
var d = document, root = d.documentElement, W = window;
function $(s, c) { return (c || d).querySelector(s); }
function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }
function clamp(v, a, b) { a = a == null ? 0 : a; b = b == null ? 1 : b; return Math.min(b, Math.max(a, v)); }
function motion() { return root.classList.contains('sw-motion'); }
var fine = W.matchMedia('(hover:hover) and (pointer:fine)');
var wide = W.matchMedia('(min-width:900px)');
var store = {
  get: function (k) { try { return W.sessionStorage.getItem(k); } catch (e) { return null; } },
  set: function (k, v) { try { W.sessionStorage.setItem(k, v); } catch (e) {} }
};
var hasG = typeof W.gsap !== 'undefined' && typeof W.ScrollTrigger !== 'undefined';
if (hasG) { gsap.registerPlugin(ScrollTrigger); }

var TEL = '<a class="btn btn--primary" href="tel:+17276924446"><svg aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>Call (727) 692-4446</a>';
var ZIPS = ['33755','33756','33759','33761','33762','33763','33764','33765','33767','33770','33771','33772','33773','33774'];
var SERVICE_LABEL = { remodels: 'Remodel', renovations: 'Home renovation', painting: 'Exterior painting', 'project-management': 'Project management', consulting: 'Consulting', coordination: 'Multi-trade coordination', other: 'Something else' };

/* ---------- Broken media fallback ---------- */
function markBroken(el) { var f = el.closest('.frame'); if (f) { f.classList.add('is-broken'); var b = $('[data-vid-btn]', f); if (b) b.hidden = true; } }
$$('.frame img').forEach(function (img) {
  img.addEventListener('error', function () { markBroken(img); });
  if (img.complete && img.getAttribute('src') && img.naturalWidth === 0 && img.loading !== 'lazy') markBroken(img);
});
$$('video[data-video]').forEach(function (v) {
  v.addEventListener('error', function () { markBroken(v); });
  var p = new Image(); p.onerror = function () { if (!v.currentSrc) markBroken(v); }; p.src = v.getAttribute('poster');
});

/* ---------- Smooth scroll ---------- */
var lenis = null;
if (motion() && typeof W.Lenis === 'function') {
  try {
    lenis = new W.Lenis({ lerp: 0.1, smoothWheel: true });
    if (hasG) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(function (t) { lenis.raf(t * 1000); }); gsap.ticker.lagSmoothing(0); }
    else { (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0); }
  } catch (e) { lenis = null; }
}
$$('#menu, dialog, .hs__track, .car__track').forEach(function (el) { el.setAttribute('data-lenis-prevent', ''); });
function lockScroll(on) { if (lenis) { if (on) lenis.stop(); else lenis.start(); } }
function scrollTop() { if (lenis) lenis.scrollTo(0, { immediate: true }); W.scrollTo(0, 0); }
function scrollToEl(el) {
  var y = el.getBoundingClientRect().top + W.scrollY - 90;
  if (lenis) lenis.scrollTo(y, { duration: 0.9 }); else W.scrollTo({ top: y, behavior: motion() ? 'smooth' : 'auto' });
}

/* ---------- Scroll tracking (ScrollTrigger, or manual fallback) ---------- */
var manual = [], cleanups = [];
function edge(el, spec, scrollY, vh) {
  var r = el.getBoundingClientRect(), top = r.top + scrollY;
  var p = spec.split(' '), e = p[0], v = p[1];
  var eo = e === 'top' ? 0 : e === 'bottom' ? r.height : r.height / 2;
  var vo = v === 'top' ? 0 : v === 'bottom' ? vh : v === 'center' ? vh / 2 : vh * parseFloat(v) / 100;
  return top + eo - vo;
}
function track(el, fn, start, end) {
  start = start || 'top top'; end = end || 'bottom bottom';
  if (hasG) {
    var st = ScrollTrigger.create({ trigger: el, start: start, end: end, onUpdate: function (s) { fn(s.progress); }, onRefresh: function (s) { fn(s.progress); } });
    cleanups.push(function () { st.kill(); });
    fn(st.progress);
  } else {
    var f = function () { var y = W.scrollY, vh = W.innerHeight, a = edge(el, start, y, vh), b = edge(el, end, y, vh); fn(b > a ? clamp((y - a) / (b - a)) : (y >= a ? 1 : 0)); };
    manual.push(f); f();
  }
}

/* ---------- Header, progress, back to top ---------- */
var head = $('[data-head]'), prog = $('.progress'), totop = $('[data-totop]'), lastY = 0, menuOpen = false, userScrolled = false;
function onScroll() {
  var y = W.scrollY, max = Math.max(1, d.documentElement.scrollHeight - W.innerHeight), p = clamp(y / max);
  if (prog) prog.style.setProperty('--sw-p', p.toFixed(4));
  if (totop) { totop.style.setProperty('--sw-p', p.toFixed(4)); totop.classList.toggle('is-on', y > W.innerHeight); }
  if (head) {
    head.classList.toggle('is-stuck', y > 8);
    if (!menuOpen && motion()) head.classList.toggle('is-hidden', y > lastY && y > 160);
    if (y < lastY || y < 160) head.classList.remove('is-hidden');
  }
  lastY = y;
  for (var i = 0; i < manual.length; i++) manual[i]();
  popupScroll(p);
}
var ticking = false;
W.addEventListener('scroll', function () {
  userScrolled = true;
  if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); }
}, { passive: true });
if (totop) totop.addEventListener('click', function () {
  if (lenis) lenis.scrollTo(0, { duration: 1 }); else W.scrollTo({ top: 0, behavior: motion() ? 'smooth' : 'auto' });
  var h = current && $('.page-h1', current); if (h) h.focus({ preventScroll: true });
});
d.addEventListener('focusin', function (e) { if (head && head.contains(e.target)) head.classList.remove('is-hidden'); });

/* ---------- Menu ---------- */
var menu = $('#menu'), menuBtn = $('[data-menu-btn]');
function setMenu(open) {
  if (!menu || !menuBtn) return;
  menuOpen = open; menu.setAttribute('data-open', open ? 'true' : 'false'); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuBtn.textContent = open ? 'Close' : 'Menu';
  lockScroll(open); root.style.overflow = open ? 'hidden' : '';
  syncBar();
  if (open) { head.classList.remove('is-hidden'); var a = $('a', menu); if (a) a.focus(); }
}
if (menuBtn) menuBtn.addEventListener('click', function () { setMenu(!menuOpen); });
if (menu) menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) { setMenu(false); menuBtn.focus(); } });
wide.addEventListener && wide.addEventListener('change', function () { if (wide.matches && menuOpen) setMenu(false); });

/* ---------- Mobile bar: hidden while a form is on screen ---------- */
var mbar = $('[data-mbar]'), formsOnScreen = new Set();
function syncBar() { if (mbar) mbar.classList.toggle('is-off', formsOnScreen.size > 0 || menuOpen); }
if ('IntersectionObserver' in W) {
  var fio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) formsOnScreen.add(e.target); else formsOnScreen.delete(e.target); }); syncBar(); });
  $$('.lead, .est, .zip, .checks').forEach(function (f) { fio.observe(f); });
}
d.addEventListener('focusin', function (e) { if (mbar && e.target.matches('input, textarea, select')) mbar.classList.add('is-off'); });
d.addEventListener('focusout', function () { setTimeout(syncBar, 50); });

/* ---------- Open-now status (America/New_York) ---------- */
function nyNow() {
  var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  var o = {}; parts.forEach(function (p) { o[p.type] = p.value; });
  var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { day: days[o.weekday], min: (parseInt(o.hour, 10) % 24) * 60 + parseInt(o.minute, 10) };
}
function openNow() {
  var t; try { t = nyNow(); } catch (e) { return; }
  var workday = t.day >= 1 && t.day <= 6, open = workday && t.min >= 480 && t.min < 1080, txt;
  if (open) txt = 'Open now, until 6:00 PM';
  else if (workday && t.min < 480) txt = 'Closed, opens today at 8:00 AM';
  else if (t.day >= 1 && t.day <= 5) txt = 'Closed, opens tomorrow at 8:00 AM';
  else txt = 'Closed, opens Monday at 8:00 AM';
  $$('[data-open-now]').forEach(function (el) { el.textContent = txt; el.classList.add('is-ready'); el.classList.toggle('is-open', open); });
}
openNow(); setInterval(openNow, 60000);

/* ---------- Split words ---------- */
function split(el) {
  if (el.getAttribute('data-split-done')) return;
  el.setAttribute('data-split-done', '1');
  var i = 0, mask = el.hasAttribute('data-sw-split');
  (function walk(n) {
    Array.prototype.slice.call(n.childNodes).forEach(function (c) {
      if (c.nodeType === 3) {
        if (!c.textContent.trim()) return;
        var frag = d.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(function (w) {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.appendChild(d.createTextNode(w)); return; }
          var s = d.createElement('span'); s.className = 'w'; s.style.setProperty('--i', i++);
          if (mask) { var t = d.createElement('span'); t.className = 'wi'; t.textContent = w; s.appendChild(t); } else s.textContent = w;
          frag.appendChild(s);
        });
        c.parentNode.replaceChild(frag, c);
      } else if (c.nodeType === 1 && !c.matches('svg, br, [data-rot], [data-count], .w')) { walk(c); }
    });
  })(el);
}
if (motion()) $$('[data-sw-split], [data-sw-fill]').forEach(split);

/* ---------- Intro ---------- */
var introRunning = false;
function heroDone(cls) {
  var hero = $('[data-sw-intro]'); if (!hero) return;
  hero.classList.add(cls);
  $$('[data-sw-split], [data-sw-reveal], [data-sw-stagger], [data-sw-draw], [data-sw-zoom], [data-sw-mark]', hero).forEach(function (el) { el.classList.add('is-visible'); });
}
function runIntro() {
  var intro = $('[data-intro]');
  if (!intro || !motion() || !hasG || store.get('gt-intro')) { heroDone('intro-skip'); return; }
  store.set('gt-intro', '1');
  introRunning = true; intro.hidden = false; intro.removeAttribute('aria-hidden'); lockScroll(true);
  var span = $('.intro__word span', intro), done = false;
  var tl = gsap.timeline({ onComplete: end });
  tl.to($$('.dr', intro), { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08 }, 0)
    .fromTo(span, { yPercent: 105, y: 0 }, { yPercent: 0, duration: 0.5, ease: 'power3.out' }, 0.15)
    .to(intro, { clipPath: 'inset(0 0 100% 0)', duration: 0.45, ease: 'power3.inOut' }, 0.9);
  function end(skipped) {
    if (done) return; done = true; introRunning = false;
    intro.hidden = true; intro.setAttribute('aria-hidden', 'true'); lockScroll(false);
    d.removeEventListener('keydown', key);
    heroDone(skipped === true ? 'intro-skip' : 'intro-done');
  }
  function skip() { tl.kill(); end(true); }
  function key(e) { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); skip(); } }
  intro.addEventListener('click', skip);
  d.addEventListener('keydown', key);
  setTimeout(function () { if (!done) skip(); }, 1700);
}

/* ---------- Counters ---------- */
function countUp(el) {
  if (el.getAttribute('data-counted')) return; el.setAttribute('data-counted', '1');
  if (!motion()) return;
  var to = parseFloat(el.getAttribute('data-count')), dec = parseInt(el.getAttribute('data-dec') || '0', 10), t0 = null, dur = 1200;
  (function step(t) {
    if (t0 === null) t0 = t;
    var k = clamp((t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = (to * e).toFixed(dec);
    if (k < 1) requestAnimationFrame(step); else el.textContent = to.toFixed(dec);
  })(performance.now());
}

/* ---------- Rotator ---------- */
var rot = $('[data-rot]');
if (rot && motion()) {
  var rw = $$('.rot__w', rot), ri = 0;
  setInterval(function () {
    if (d.hidden || !current || current.id !== 'home') return;
    rw[ri].classList.remove('is-on'); ri = (ri + 1) % rw.length; rw[ri].classList.add('is-on');
  }, 2400);
}

/* ---------- Per-page effects ---------- */
var REVEAL = '[data-sw-split], [data-sw-reveal], [data-sw-stagger], [data-sw-zoom], [data-sw-mark], [data-sw-draw], .gauge, [data-count]';
function setupPage(page) {
  // Reveals
  if ('IntersectionObserver' in W) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        if (introRunning && el.closest('[data-sw-intro]')) return;
        if (el.hasAttribute('data-count')) countUp(el);
        el.classList.add('is-visible'); io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    $$(REVEAL, page).forEach(function (el) { io.observe(el); });
    cleanups.push(function () { io.disconnect(); });
  } else { $$(REVEAL, page).forEach(function (el) { el.classList.add('is-visible'); }); }

  setupVideos(page);
  if (!motion()) return;

  // Story: plan-to-build
  $$('[data-sw-story]', page).forEach(function (story) {
    var steps = $$('.story__step', story), n = steps.length, label = $('[data-story-label]', story), last = -1;
    if (W.innerWidth < 640 && 'IntersectionObserver' in W) {
      var sio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-seen'); sio.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.02 });
      steps.forEach(function (s) { sio.observe(s); });
      cleanups.push(function () { sio.disconnect(); });
      return;
    }
    track(story, function (p) {
      story.style.setProperty('--sw-p', p.toFixed(4));
      var k = Math.min(n - 1, Math.floor(p * n * 0.999 + 0.0001));
      if (k === last) return; last = k;
      steps.forEach(function (s, i) { s.classList.toggle('is-active', i === k); s.classList.toggle('is-past', i < k); });
      if (label) label.textContent = 'Step ' + (k + 1) + ' of ' + n;
    });
  });

  // Horizontal scroll sections (desktop only)
  $$('[data-hs]', page).forEach(function (hs) {
    var tr = $('.hs__track', hs);
    if (!wide.matches) { hs.classList.remove('is-on'); return; }
    hs.classList.add('is-on');
    var dist = Math.max(0, tr.scrollWidth - tr.clientWidth + 48);
    hs.style.setProperty('--hs-h', (dist + W.innerHeight) + 'px');
    track(hs, function (p) { tr.style.setProperty('--hs-x', (p * dist).toFixed(1)); });
    cleanups.push(function () { hs.classList.remove('is-on'); hs.style.removeProperty('--hs-h'); tr.style.removeProperty('--hs-x'); });
  });

  // Plan becomes build on the home break
  $$('[data-plan]', page).forEach(function (b) { track(b, function (p) { b.style.setProperty('--sw-p', p.toFixed(4)); }, 'top 80%', 'bottom 30%'); });

  // Scroll-expanding frame
  $$('[data-scrub]', page).forEach(function (s) { track(s, function (p) { s.style.setProperty('--sw-p', p.toFixed(4)); }); });

  // Parallax
  $$('[data-sw-parallax]', page).forEach(function (f) {
    var m = $(':scope > img, :scope > video', f); if (!m) return;
    var amt = parseFloat(f.getAttribute('data-sw-parallax')) || 40;
    m.style.transform = 'scale(1.14)';
    track(f, function (p) { m.style.transform = 'translate3d(0,' + ((0.5 - p) * amt * 2).toFixed(1) + 'px,0) scale(1.14)'; }, 'top bottom', 'bottom top');
    cleanups.push(function () { m.style.transform = ''; });
  });

  // Fill text
  $$('[data-sw-fill]', page).forEach(function (h) {
    var ws = $$('.w', h);
    track(h, function (p) { var k = Math.round(p * ws.length); ws.forEach(function (w, i) { w.classList.toggle('on', i < k); }); }, 'top 85%', 'bottom 40%');
  });

  // Sticky steps (desktop)
  $$('[data-steps]', page).forEach(function (wrap) {
    var lis = $$('.steps-sticky__list > li', wrap), frames = $$('.steps-sticky__media .frame', wrap);
    if (!('IntersectionObserver' in W)) return;
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var i = lis.indexOf(e.target);
        lis.forEach(function (l, j) { l.classList.toggle('is-on', j === i); });
        frames.forEach(function (f, j) { f.classList.toggle('is-on', j === i); });
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    lis.forEach(function (l) { so.observe(l); });
    cleanups.push(function () { so.disconnect(); });
  });
}

/* Sticky steps on phones: show each step's photo inline */
$$('[data-steps]').forEach(function (wrap) {
  var lis = $$('.steps-sticky__list > li', wrap), frames = $$('.steps-sticky__media .frame', wrap);
  lis.forEach(function (li, i) {
    if (!frames[i]) return;
    var c = frames[i].cloneNode(true); c.classList.remove('is-on');
    var im = $('img', c); if (im) { im.loading = 'lazy'; im.addEventListener('error', function () { markBroken(im); }); }
    li.insertBefore(c, li.firstChild);
  });
});

/* ---------- Videos ---------- */
function setVidBtn(btn, playing) {
  if (!btn) return;
  btn.setAttribute('aria-label', playing ? 'Pause background video' : 'Play background video');
  var u = $('use', btn); if (u) u.setAttribute('href', playing ? '#i-pause' : '#i-play');
}
$$('[data-vid-btn]').forEach(function (btn) {
  var v = $('video', btn.closest('.frame')); if (!v) return;
  setVidBtn(btn, false);
  btn.addEventListener('click', function () {
    loadVid(v);
    if (v.paused) { v.removeAttribute('data-user-paused'); v.play().then(function () { setVidBtn(btn, true); }).catch(function () { setVidBtn(btn, false); }); }
    else { v.setAttribute('data-user-paused', '1'); v.pause(); setVidBtn(btn, false); }
  });
});
function loadVid(v) { if (!v.getAttribute('src') && v.getAttribute('data-src')) { v.src = v.getAttribute('data-src'); } }
function setupVideos(page) {
  var vids = $$('video[data-video]', page);
  if (!vids.length || !('IntersectionObserver' in W)) return;
  var vo = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target, btn = $('[data-vid-btn]', v.closest('.frame'));
      if (e.isIntersecting) {
        loadVid(v);
        if (motion() && !v.getAttribute('data-user-paused')) { var pr = v.play(); if (pr) pr.then(function () { setVidBtn(btn, true); }).catch(function () { setVidBtn(btn, false); }); }
      } else if (!v.paused) { v.pause(); setVidBtn(btn, false); }
    });
  }, { rootMargin: '150px 0px', threshold: 0.2 });
  vids.forEach(function (v) { vo.observe(v); });
  cleanups.push(function () { vo.disconnect(); vids.forEach(function (v) { v.pause(); setVidBtn($('[data-vid-btn]', v.closest('.frame')), false); }); });
}

/* ---------- Pointer effects ---------- */
var pv = $('.pv'), pvImg = $('[data-pv-img]'), cur = $('[data-cursor-el]'), mx = 0, my = 0, px = 0, py = 0, pvOn = false;
if (fine.matches && motion()) {
  d.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; } }, { passive: true });
  (function loop() { if (pvOn) { px += (mx - px) * 0.18; py += (my - py) * 0.18; pv.style.transform = 'translate3d(' + (px + 28).toFixed(1) + 'px,' + (py - 100).toFixed(1) + 'px,0)'; } requestAnimationFrame(loop); })();
  $$('.ruled a[data-preview]').forEach(function (a) {
    a.addEventListener('pointerenter', function (e) {
      if (!pv) return; pvImg.onerror = function () { pv.classList.remove('is-on'); pvOn = false; };
      pvImg.src = a.getAttribute('data-preview'); px = e.clientX; py = e.clientY; pvOn = true; pv.classList.add('is-on');
    });
    a.addEventListener('pointerleave', function () { if (pv) pv.classList.remove('is-on'); pvOn = false; });
  });
  $$('[data-cursor]').forEach(function (el) {
    el.addEventListener('pointerenter', function () { if (cur) { cur.textContent = el.getAttribute('data-cursor'); cur.classList.add('is-on'); } });
    el.addEventListener('pointerleave', function () { if (cur) cur.classList.remove('is-on'); });
  });
  $$('[data-magnetic]').forEach(function (b) {
    b.addEventListener('pointermove', function (e) {
      var r = b.getBoundingClientRect(), x = (e.clientX - r.left - r.width / 2) * 0.25, y = (e.clientY - r.top - r.height / 2) * 0.35;
      if (hasG) gsap.to(b, { x: x, y: y, duration: 0.3, ease: 'power3.out' }); else b.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });
    b.addEventListener('pointerleave', function () { if (hasG) gsap.to(b, { x: 0, y: 0, duration: 0.45, ease: 'power3.out' }); else b.style.transform = ''; });
  });
  $$('[data-sw-tilt]').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg'); c.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
    });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });
}
$$('[data-sw-spotlight]').forEach(function (s) {
  s.addEventListener('pointermove', function (e) { var r = s.getBoundingClientRect(); s.style.setProperty('--sw-x', (e.clientX - r.left) + 'px'); s.style.setProperty('--sw-y', (e.clientY - r.top) + 'px'); }, { passive: true });
});

/* ---------- Compare slider (Planning / Build) ---------- */
$$('[data-compare]').forEach(function (c) {
  var r = $('input[type=range]', c);
  function upd() { c.style.setProperty('--pos', r.value + '%'); r.setAttribute('aria-valuetext', r.value < 50 ? 'Showing more of the Build photo' : r.value > 50 ? 'Showing more of the Planning photo' : 'Half and half'); }
  r.addEventListener('input', upd); upd();
});

/* ---------- Marquee pause ---------- */
var mq = $('[data-marquee]'), mqBtn = $('[data-marq-toggle]');
if (mq && mqBtn) mqBtn.addEventListener('click', function () {
  var on = mq.classList.toggle('is-paused');
  mqBtn.setAttribute('aria-pressed', on ? 'true' : 'false'); mqBtn.textContent = on ? 'Play ZIP list' : 'Pause ZIP list';
});

/* ---------- Accordions ---------- */
$$('[data-acc] details.acc').forEach(function (dt) {
  dt.addEventListener('toggle', function () {
    if (!dt.open) return;
    dt.classList.add('is-opening');
    setTimeout(function () { dt.classList.remove('is-opening'); }, 400);
  });
});

/* ---------- Tabs ---------- */
$$('[data-tabs]').forEach(function (t) {
  var tabs = $$('[role=tab]', t);
  function sel(tab, focus) {
    tabs.forEach(function (x) {
      var on = x === tab; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
      var p = d.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { sel(tab); });
    tab.addEventListener('keydown', function (e) {
      var k = e.key, j = null;
      if (k === 'ArrowRight' || k === 'ArrowDown') j = (i + 1) % tabs.length;
      else if (k === 'ArrowLeft' || k === 'ArrowUp') j = (i - 1 + tabs.length) % tabs.length;
      else if (k === 'Home') j = 0; else if (k === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); sel(tabs[j], true); }
    });
  });
});

/* ---------- Hotspots ---------- */
$$('[data-hotspot]').forEach(function (h) {
  var btns = $$('.hot', h);
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      btns.forEach(function (x) {
        var on = open && x === b; x.setAttribute('aria-expanded', on ? 'true' : 'false');
        var n = d.getElementById(x.getAttribute('data-note')); if (n) n.classList.toggle('is-active', on);
      });
      var note = d.getElementById(b.getAttribute('data-note'));
      if (open && note && !wide.matches) scrollToEl(note);
    });
  });
});

/* ---------- Prefill hand-off to the quote form ---------- */
var pending = null;
function prefill(o) { pending = o; }
d.addEventListener('click', function (e) {
  var a = e.target.closest('a[href="#contact"]'); if (!a) return;
  if (a.hasAttribute('data-est-send') || a.hasAttribute('data-check-send') || a.hasAttribute('data-zip-prefill')) return;
  var s = a.getAttribute('data-service');
  if (s) prefill({ service: s, note: 'We picked ' + SERVICE_LABEL[s] + ' for you. You can change it.' });
});

/* ---------- ZIP checker ---------- */
$$('form[data-zip]').forEach(function (f) {
  var inp = $('input', f), out = $('.zip__out', f);
  inp.addEventListener('input', function () { inp.value = inp.value.replace(/\D/g, '').slice(0, 5); });
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var z = inp.value.trim();
    if (!/^\d{5}$/.test(z)) { out.innerHTML = '<p>Please type a 5-digit ZIP code.</p>'; inp.setAttribute('aria-invalid', 'true'); inp.focus(); return; }
    inp.removeAttribute('aria-invalid');
    if (ZIPS.indexOf(z) > -1) {
      out.innerHTML = '<p class="zip__yes">Yes, we work in ' + z + '.</p><a class="btn btn--primary" href="#contact" data-zip-prefill="' + z + '">Request a quote</a>';
    } else {
      out.innerHTML = '<p class="zip__no">Outside our usual area, call and we\'ll tell you honestly.</p>' + TEL;
    }
  });
  out.addEventListener('click', function (e) {
    var a = e.target.closest('[data-zip-prefill]');
    if (a) prefill({ zip: a.getAttribute('data-zip-prefill'), note: 'We added ZIP ' + a.getAttribute('data-zip-prefill') + ' for you.' });
  });
});

/* ---------- Consulting checklist ---------- */
var cl = $('[data-checklist]'), co = $('[data-checkout]'), cs = $('[data-check-send]');
function ticked() { return cl ? $$('input:checked', cl).map(function (i) { return i.value; }) : []; }
if (cl && co) {
  cl.addEventListener('change', function () {
    var t = ticked();
    co.innerHTML = '';
    if (!t.length) { co.innerHTML = '<li>Nothing ticked yet.</li>'; return; }
    t.forEach(function (q) { var li = d.createElement('li'); li.textContent = q; co.appendChild(li); });
  });
}
if (cs) cs.addEventListener('click', function () {
  var t = ticked();
  prefill({ service: 'consulting', message: t.length ? 'Questions for a consulting visit:\n- ' + t.join('\n- ') : '', note: t.length ? 'We added your ' + t.length + ' question' + (t.length > 1 ? 's' : '') + ' and picked Consulting. Change anything you like.' : 'We picked Consulting for you. You can change it.' });
});

/* ---------- Scope estimator (no prices) ---------- */
var est = $('[data-est]');
var EST = {
  type: { remodels: 'A remodel', renovations: 'A renovation', painting: 'Exterior painting', coordination: 'A job with several trades', other: 'A project you\'re still working out' },
  size: { 'One room': 'of one room', 'A few rooms': 'of a few rooms', 'Most of the house': 'across most of the house', 'The outside': 'on the outside of the house' },
  cond: { cosmetic: 'that\'s sound, just dated', repairs: 'that needs some repairs', damage: 'with damage or unknowns' },
  time: { 'As soon as possible': 'starting as soon as possible', 'In the next few months': 'starting in the next few months', 'Just planning ahead': 'still at the planning stage' },
  checks: {
    remodels: ['Which walls or fixtures you want to move', 'What runs behind those walls'],
    renovations: ['Which rooms are in, and which are out', 'What order the work should go in'],
    painting: ['Peeling, chalking or cracked caulk outside', 'What prep each surface needs'],
    coordination: ['Which trades the job needs', 'What order they should come in'],
    other: ['What bothers you most about the house', 'Whether it\'s one job or several']
  }
};
function estVal(n) { var i = est && $('input[name="' + n + '"]:checked', est); return i ? i.value : ''; }
function estRead() {
  var type = estVal('e-type'), size = estVal('e-size'), cond = estVal('e-cond'), time = estVal('e-time'), budget = ($('#e-budget') || {}).value || '';
  var sum = EST.type[type] + ' ' + EST.size[size] + ' ' + EST.cond[cond] + ', ' + EST.time[time] + '.';
  if (budget.trim()) sum += ' Budget, in your words: ' + budget.trim().replace(/[.\s]+$/, '') + '.';
  var checks = EST.checks[type].slice();
  if (cond === 'repairs') checks.push('What needs fixing before anything new goes in');
  if (cond === 'damage') checks.push('How far the damage goes, where we can see it');
  if (size === 'Most of the house') checks.push('Whether to do it in phases');
  return { type: type, time: time, sum: sum, checks: checks };
}
if (est) {
  var es = $('[data-est-summary]'), ec = $('[data-est-checks]');
  var estUpd = function () {
    var r = estRead(); es.textContent = r.sum; ec.innerHTML = '';
    r.checks.forEach(function (c) { var li = d.createElement('li'); li.textContent = c; ec.appendChild(li); });
    skUpd();
  };
  var sk = $('[data-est-sketch]');
  var SK_ROOMS = { 'One room': [0], 'A few rooms': [0, 1, 3], 'Most of the house': [0, 1, 2, 3, 4, 5], 'The outside': [] };
  var skLabel = function (n) { var i = $('input[name="' + n + '"]:checked', est); return i ? i.parentNode.textContent.trim() : ''; };
  var skUpd = function () {
    if (!sk) return;
    var size = estVal('e-size'), on = SK_ROOMS[size] || [], k = 0;
    $$('.sk-room', sk).forEach(function (r, i) {
      var lit = on.indexOf(i) > -1; r.classList.toggle('on', lit); r.style.setProperty('--k', lit ? k++ : 0);
    });
    $('.sk-ext', sk).classList.toggle('on', size === 'The outside');
    sk.setAttribute('data-cond', estVal('e-cond'));
    $('[data-sk-type]', sk).textContent = skLabel('e-type');
    $('[data-sk-size]', sk).textContent = skLabel('e-size');
    $('[data-sk-cond]', sk).textContent = skLabel('e-cond');
  };
  est.addEventListener('change', estUpd); est.addEventListener('input', estUpd);
  est.addEventListener('submit', function (e) { e.preventDefault(); });
  estUpd();
  var esend = $('[data-est-send]');
  if (esend) esend.addEventListener('click', function () {
    var r = estRead();
    prefill({ service: r.type, timing: r.time, message: r.sum + '\nThings to check on the visit: ' + r.checks.join('; ') + '.', note: 'We filled in your scope from the estimator. Change anything you like.' });
  });
}

/* ---------- Lead form ---------- */
var lead = $('[data-lead]'), shownAt = Date.now();
if (lead) (function () {
  var steps = $$('.lead__step', lead), n = steps.length, cur = 1;
  var back = $('[data-step-btn=back]', lead), next = $('[data-step-btn=next]', lead), send = $('[data-send]', lead);
  var label = $('[data-lead-label]', lead), live = $('[data-lead-live]', lead), progEl = $('.lead__prog', lead), status = $('[data-status]', lead);
  var retry = $('[data-retry]', lead);
  function f(id) { return d.getElementById(id); }
  function err(key, msg, input) {
    var p = $('[data-err="' + key + '"]', lead); if (p) p.textContent = msg || '';
    if (input) { if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); }
    return !msg;
  }
  function validate(step) {
    var ok = true, first = null;
    function chk(good, key, msg, input) { var r = err(key, good ? '' : msg, input); if (!r && !first) first = input; ok = ok && r; }
    if (step === 1) { var s = $('input[name=service]:checked', lead); chk(!!s, 'service', 'Pick the one that fits best, or choose Something else.', $('input[name=service]', lead)); }
    if (step === 2) { var z = f('lf-zip'); chk(/^\d{5}$/.test(z.value.trim()), 'zip', 'Please type the 5-digit ZIP code of the property.', z); }
    if (step === 3) { var m = f('lf-msg'); chk(m.value.trim().length >= 10, 'message', 'A sentence or two helps us call you back prepared.', m); }
    if (step === 4) {
      var nm = f('lf-name'), ph = f('lf-phone'), em = f('lf-email');
      chk(nm.value.trim().length >= 2, 'name', 'Please add your name.', nm);
      chk(ph.value.replace(/\D/g, '').length >= 10, 'phone', 'Please add a phone number with the area code.', ph);
      chk(!em.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim()), 'email', 'That email doesn\'t look right. You can leave it empty.', em);
    }
    if (first) first.focus();
    return ok;
  }
  function go(k, focus) {
    cur = clamp(k, 1, n);
    steps.forEach(function (s, i) { s.classList.toggle('is-current', i + 1 === cur); });
    back.hidden = cur === 1; next.hidden = cur === n; send.hidden = cur !== n;
    label.textContent = 'Step ' + cur + ' of ' + n;
    progEl.style.setProperty('--lp', (cur / n).toFixed(2));
    var lg = $('legend', steps[cur - 1]);
    live.textContent = 'Step ' + cur + ' of ' + n + ': ' + (lg ? lg.textContent : '');
    if (focus) { var i = $('input:not([type=hidden]):not([tabindex="-1"]), textarea', steps[cur - 1]); if (i) i.focus(); }
  }
  next.addEventListener('click', function () { if (validate(cur)) go(cur + 1, true); });
  back.addEventListener('click', function () { go(cur - 1, true); });
  lead.addEventListener('change', function (e) { if (e.target.name === 'service') err('service', ''); });
  f('lf-zip').addEventListener('input', function () { this.value = this.value.replace(/\D/g, '').slice(0, 5); });
  lead.addEventListener('submit', function (e) {
    e.preventDefault();
    if (cur < n) { if (validate(cur)) go(cur + 1, true); return; }
    for (var i = 1; i <= n; i++) { if (!validate(i)) { go(i); validate(i); return; } }
    sendLead();
  });
  if (retry) retry.addEventListener('click', function () { status.hidden = true; sendLead(); });
  function sendLead() {
    var svc = $('input[name=service]:checked', lead), tm = $('input[name=timing]:checked', lead), ph = $('input[name=photos]', lead);
    var msg = f('lf-msg').value.trim();
    if (tm) msg += '\n\nWhen: ' + tm.value;
    if (ph && ph.checked) msg += '\nHas photos to share.';
    var body = {
      slug: 'golden-touch', name: f('lf-name').value.trim(), phone: f('lf-phone').value.trim(), email: f('lf-email').value.trim(),
      message: msg, service: svc ? svc.value : '', zip: f('lf-zip').value.trim(), t: Date.now() - shownAt, website2: f('lf-website2').value
    };
    var label0 = send.textContent; send.disabled = true; send.textContent = 'Sending…'; status.hidden = true;
    var ctl = 'AbortController' in W ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 15000);
    fetch('/api/public/site-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctl ? ctl.signal : undefined })
      .then(function (r) {
        clearTimeout(to);
        if (r.status >= 200 && r.status < 300) {
          store.set('gt-sent', '1'); lead.reset(); go(1); send.disabled = false; send.textContent = label0;
          location.hash = '#thank-you';
        } else { fail(); }
      })
      .catch(function () { clearTimeout(to); fail(); });
    function fail() { send.disabled = false; send.textContent = label0; status.hidden = false; status.setAttribute('tabindex', '-1'); status.focus(); }
  }
  lead._apply = function (o) {
    var note = $('[data-prefill-note]');
    if (o.service) { var r = $('input[name=service][value="' + o.service + '"]', lead) || $('input[name=service][value=other]', lead); if (r) r.checked = true; err('service', ''); }
    if (o.zip) f('lf-zip').value = o.zip;
    if (o.timing) { var t = $('input[name=timing][value="' + o.timing + '"]', lead); if (t) t.checked = true; }
    if (o.message) f('lf-msg').value = o.message;
    if (note) { note.textContent = o.note || ''; note.hidden = !o.note; }
    go(o.service && !o.zip ? 2 : 1);
  };
  lead._reset = function () { status.hidden = true; shownAt = Date.now(); };
  go(1);
})();

/* ---------- Thank-you state ---------- */
function thankYou() {
  var sent = store.get('gt-sent') === '1', h = $('[data-ty-h]');
  $$('[data-ty]').forEach(function (s) { s.hidden = s.getAttribute('data-ty') !== (sent ? 'sent' : 'none'); });
  if (h) h.textContent = sent ? 'Thanks, your request was sent.' : 'No request has been sent from this browser yet.';
}

/* ---------- Gallery filters + lightbox ---------- */
var gal = $('[data-gal]'), fstat = $('[data-filter-status]');
$$('[data-filters] [data-filter]').forEach(function (b, _, all) {
  b.addEventListener('click', function () {
    var c = b.getAttribute('data-filter'), shown = 0;
    all.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    $$('li', gal).forEach(function (li) {
      var on = c === 'all' || li.getAttribute('data-cat') === c;
      li.hidden = !on; li.classList.remove('is-in');
      if (on) { shown++; void li.offsetWidth; li.classList.add('is-in'); }
    });
    if (fstat) fstat.textContent = 'Showing ' + shown + ' photo' + (shown === 1 ? '' : 's') + ': ' + b.textContent.trim();
    if (hasG) ScrollTrigger.refresh();
  });
});
var lb = $('[data-lb]'), lbImg = $('[data-lb-img]'), lbCap = $('[data-lb-cap]'), lbItems = [], lbI = 0, lbFrom = null;
function lbShow(i) {
  lbI = (i + lbItems.length) % lbItems.length;
  var a = lbItems[lbI], im = $('img', a), cap = $('.cap', a);
  lbImg.onerror = function () { lbCap.textContent = (cap ? cap.textContent : '') + ' (This photo could not load here.)'; };
  lbImg.src = a.getAttribute('href'); lbImg.alt = im ? im.alt : '';
  lbCap.textContent = (cap ? cap.textContent : '') + ' Photo ' + (lbI + 1) + ' of ' + lbItems.length + '.';
}
if (lb && gal) {
  gal.addEventListener('click', function (e) {
    var a = e.target.closest('[data-lb-item]'); if (!a || typeof lb.showModal !== 'function') return;
    e.preventDefault();
    lbItems = $$('li:not([hidden]) [data-lb-item]', gal); lbFrom = a;
    lbShow(lbItems.indexOf(a)); lb.showModal(); lockScroll(true);
    $('[data-lb-close]', lb).focus();
  });
  $('[data-lb-close]', lb).addEventListener('click', function () { lb.close(); });
  $('[data-lb-prev]', lb).addEventListener('click', function () { lbShow(lbI - 1); });
  $('[data-lb-next]', lb).addEventListener('click', function () { lbShow(lbI + 1); });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') lbShow(lbI - 1); if (e.key === 'ArrowRight') lbShow(lbI + 1); trap(e, lb); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('close', function () { lockScroll(false); if (cur) cur.classList.remove('is-on'); if (lbFrom) lbFrom.focus(); });
}
function trap(e, box) {
  if (e.key !== 'Tab') return;
  var fs = $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', box).filter(function (x) { return x.offsetParent !== null; });
  if (!fs.length) return;
  var a = fs[0], z = fs[fs.length - 1];
  if (e.shiftKey && d.activeElement === a) { e.preventDefault(); z.focus(); }
  else if (!e.shiftKey && d.activeElement === z) { e.preventDefault(); a.focus(); }
}

/* ---------- Carousel ---------- */
$$('[data-car]').forEach(function (c) {
  var tr = $('.car__track', c);
  function stepW() { var it = $('.car__item', tr); return it ? it.getBoundingClientRect().width + 16 : tr.clientWidth * 0.8; }
  $('[data-car-prev]', c).addEventListener('click', function () { tr.scrollBy({ left: -stepW(), behavior: motion() ? 'smooth' : 'auto' }); });
  $('[data-car-next]', c).addEventListener('click', function () { tr.scrollBy({ left: stepW(), behavior: motion() ? 'smooth' : 'auto' }); });
  var down = false, sx = 0, sl = 0, moved = false;
  tr.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = tr.scrollLeft; });
  W.addEventListener('pointermove', function (e) {
    if (!down) return; var dx = e.clientX - sx;
    if (Math.abs(dx) > 5 && !moved) { moved = true; tr.classList.add('is-drag'); }
    if (moved) tr.scrollLeft = sl - dx;
  });
  W.addEventListener('pointerup', function () { if (!down) return; down = false; setTimeout(function () { tr.classList.remove('is-drag'); }, 0); });
  tr.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
});

/* ---------- One popup per visit: exit intent or 60% scroll ---------- */
var pop = $('[data-pop]'), popFrom = null, loadAt = Date.now();
var NO_POP = { contact: 1, 'thank-you': 1, estimator: 1, 'not-found': 1 };
function canPop() {
  return pop && typeof pop.showModal === 'function' && !store.get('gt-pop') && current && !NO_POP[current.id] &&
    !menuOpen && !introRunning && !(lb && lb.open) && Date.now() - loadAt > 4000 && !d.activeElement.matches('input, textarea');
}
function openPop() {
  if (!canPop()) return;
  store.set('gt-pop', '1'); popFrom = d.activeElement;
  pop.showModal(); lockScroll(true);
  var c = $('[data-pop-close]', pop); if (c) c.focus();
}
function popupScroll(p) { if (userScrolled && p >= 0.6 && current && current.hasAttribute('data-long')) openPop(); }
d.addEventListener('mouseout', function (e) { if (!e.relatedTarget && e.clientY <= 0 && fine.matches) openPop(); });
if (pop) {
  $$('[data-pop-close]', pop).forEach(function (b) { b.addEventListener('click', function () { pop.close(); }); });
  var go = $('[data-pop-go]', pop); if (go) go.addEventListener('click', function () { popFrom = null; pop.close(); });
  pop.addEventListener('click', function (e) { if (e.target === pop) pop.close(); });
  pop.addEventListener('keydown', function (e) { trap(e, pop); });
  pop.addEventListener('close', function () { lockScroll(false); if (popFrom && popFrom.focus) popFrom.focus({ preventScroll: true }); });
}

/* ---------- Router + page transition ---------- */
var pages = $$('[data-page]'), current = null, wipe = $('.wipe'), metaDesc = $('meta[name="description"]');
if (!metaDesc) { metaDesc = d.createElement('meta'); metaDesc.name = 'description'; d.head.appendChild(metaDesc); }
function teardown() { cleanups.forEach(function (f) { try { f(); } catch (e) {} }); cleanups = []; manual = []; if (cur) cur.classList.remove('is-on'); if (pv) pv.classList.remove('is-on'); pvOn = false; }
function activate(page, target, initial) {
  teardown();
  pages.forEach(function (p) { p.classList.toggle('is-active', p === page); });
  current = page;
  d.title = page.getAttribute('data-title') || d.title;
  metaDesc.setAttribute('content', page.getAttribute('data-desc') || '');
  $$('[data-nav]').forEach(function (a) { if (a.getAttribute('data-nav') === page.id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  scrollTop(); lastY = 0; if (head) head.classList.remove('is-hidden');
  if (page.id === 'contact' && lead) { lead._reset(); if (pending) { lead._apply(pending); } pending = null; }
  else if (page.id !== 'contact') { var pn = $('[data-prefill-note]'); if (pn && !pending) pn.hidden = true; }
  if (page.id === 'thank-you') thankYou();
  setupPage(page);
  if (hasG) ScrollTrigger.refresh();
  onScroll();
  if (target) { setTimeout(function () { scrollToEl(target); if (target.tagName === 'DETAILS') target.open = true; target.focus && target.focus({ preventScroll: true }); }, 60); }
  else if (!initial) { var h = $('.page-h1', page); if (h) h.focus({ preventScroll: true }); }
}
function route(initial) {
  var id = '';
  try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { id = location.hash.slice(1); }
  id = id || 'home';
  var el = d.getElementById(id), page = el, target = null;
  if (el && !el.hasAttribute('data-page')) {
    page = el.closest('[data-page]');
    if (!page) { if (el.tabIndex < 0 && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1'); el.focus(); return; }
    target = el;
  }
  if (!page) page = d.getElementById('not-found') || pages[0];
  if (page === current) { if (target) { scrollToEl(target); if (target.tagName === 'DETAILS') target.open = true; } else scrollTop(); return; }
  if (menuOpen) setMenu(false);
  if (initial || !motion()) { activate(page, target, initial); return; }
  if (d.startViewTransition) {
    try { d.startViewTransition(function () { activate(page, target, false); }); return; } catch (e) {}
  }
  if (wipe) {
    wipe.classList.remove('is-out'); void wipe.offsetWidth; wipe.classList.add('is-in');
    setTimeout(function () {
      activate(page, target, false);
      wipe.classList.remove('is-in'); wipe.classList.add('is-out');
      setTimeout(function () { wipe.classList.remove('is-out'); }, 280);
    }, 260);
  } else activate(page, target, false);
}
W.addEventListener('hashchange', function () { route(false); });
var rz;
W.addEventListener('resize', function () {
  clearTimeout(rz);
  rz = setTimeout(function () { if (current) { teardown(); setupPage(current); if (hasG) ScrollTrigger.refresh(); onScroll(); } }, 250);
});

route(true);
if (current && current.id === 'home') runIntro(); else heroDone('intro-skip');
})();
