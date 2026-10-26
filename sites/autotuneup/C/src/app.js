/* autotuneup-C · the altitude marker (gauge on desktop, strip on phones), the "what's due" elevation
   instrument, and the road-profile motion. Content never depends on any of this. */
(function () {
  if (!window.SW) return;
  var root = document.documentElement;
  var MOTION = !SW.reduced && root.classList.contains('sw-motion');
  var hasGsap = function () { return typeof gsap !== 'undefined'; };
  var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };
  var LO = 5000, HI = 11000;
  var figHtml = function (n) { return fmt(n).replace(',', '<span class="stop-fig__c">,</span>'); };
  var frac = function (a) { return Math.max(0, Math.min(1, (a - LO) / (HI - LO))); };

  /* ---------- Signature: one altitude reading shared by the gauge and the phone strip ---------- */
  var gauge = document.querySelector('.alt-gauge');
  var strip = document.querySelector('.alt-strip');
  var readers = [gauge, strip].filter(Boolean);
  var current = { alt: 7199 };
  var lastPlace = '';

  function paint(alt, approx) {
    readers.forEach(function (r) {
      r.style.setProperty('--alt-p', frac(alt).toFixed(3));
      r.querySelectorAll('[data-alt-value]').forEach(function (v) { v.textContent = fmt(alt); });
      r.querySelectorAll('[data-alt-approx]').forEach(function (v) { v.textContent = approx ? '~' : ''; });
    });
  }
  function setPlace(place) {
    if (place === lastPlace) return;
    lastPlace = place;
    readers.forEach(function (r) {
      r.classList.add('is-swapping');
      setTimeout(function () {
        r.querySelectorAll('[data-alt-place]').forEach(function (p) { p.textContent = place; });
        r.classList.remove('is-swapping');
      }, MOTION ? 180 : 0);
    });
  }
  function goTo(alt, place, approx) {
    setPlace(place);
    if (MOTION && hasGsap()) {
      gsap.to(current, {
        alt: alt, duration: 0.9, ease: 'power2.inOut', overwrite: true,
        onUpdate: function () { paint(current.alt, approx); }
      });
    } else {
      current.alt = alt;
      paint(alt, approx);
    }
  }

  var stops = Array.prototype.slice.call(document.querySelectorAll('[data-sw-signature="altitude-marker"]'));
  if (readers.length && stops.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var s = en.target;
        var alt = parseInt(s.getAttribute('data-altitude'), 10);
        if (!isNaN(alt)) goTo(alt, s.getAttribute('data-place') || '', s.hasAttribute('data-approx'));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    stops.forEach(function (s) { io.observe(s); });

    var hero = document.getElementById('hero');
    if (strip && hero) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { strip.classList.toggle('is-on', !en.isIntersecting); });
      }, { rootMargin: '-40% 0px 0px 0px' }).observe(hero);
    }
  }

  /* ---------- Tool: what's due, drawn as your road's elevation profile ---------- */
  var ROUTES = {
    town: [[0, 7199], [0.2, 7120], [0.4, 7260], [0.6, 7150], [0.8, 7240], [1, 7199]],
    dirt: [[0, 7199], [0.25, 6950], [0.5, 6300], [0.75, 5780], [1, 5700]],
    ski: [[0, 7199], [0.25, 7700], [0.5, 8600], [0.75, 9600], [1, 10350]]
  };
  var W = 400, H = 190;
  var X = function (t) { return 22 + t * (W - 44); };
  var yLo = 5000, yHi = 11000;
  var Y = function (a) { return 160 - (a - yLo) / (yHi - yLo) * 118; };

  function pathOf(pts) {
    var d = 'M' + X(pts[0][0]).toFixed(1) + ' ' + Y(pts[0][1]).toFixed(1);
    for (var i = 1; i < pts.length; i++) {
      var x0 = X(pts[i - 1][0]), y0 = Y(pts[i - 1][1]), x1 = X(pts[i][0]), y1 = Y(pts[i][1]);
      var mx = (x0 + x1) / 2;
      d += 'C' + mx.toFixed(1) + ' ' + y0.toFixed(1) + ' ' + mx.toFixed(1) + ' ' + y1.toFixed(1) + ' ' + x1.toFixed(1) + ' ' + y1.toFixed(1);
    }
    return d;
  }
  /* altitude on the drawn curve at position t (solves the same cubic the path uses) */
  function altAt(pts, t) {
    for (var i = 1; i < pts.length; i++) {
      if (t <= pts[i][0] || i === pts.length - 1) {
        var t0 = pts[i - 1][0], t1 = pts[i][0];
        var u = Math.max(0, Math.min(1, (t - t0) / (t1 - t0)));
        var lo = 0, hi = 1, s = u;
        for (var k = 0; k < 24; k++) {
          s = (lo + hi) / 2;
          var xf = 1.5 * s - 1.5 * s * s + s * s * s;
          if (xf < u) lo = s; else hi = s;
        }
        return pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * (3 * s * s - 2 * s * s * s);
      }
    }
    return pts[pts.length - 1][1];
  }

  var due = document.querySelector('[data-due]');
  if (due) {
    var miles = due.querySelector('[data-due-miles]');
    var roads = due.querySelector('[data-due-roads]');
    var out = due.querySelector('[data-due-out]');
    var chart = due.querySelector('[data-due-chart]');
    var heroEl = document.getElementById('hero');
    var startPlace = (heroEl && heroEl.getAttribute('data-place')) || 'Town';

    var render = function (animate) {
      var raw = parseInt((miles.value || '').replace(/\D/g, ''), 10);
      var sample = isNaN(raw) || raw <= 0;
      var m = sample ? 65000 : raw;
      var r = roads.value;
      var opt = roads.options[roads.selectedIndex];
      var place = (opt && opt.getAttribute('data-place')) || '';
      var pts = ROUTES[r] || ROUTES.town;
      var alts = pts.map(function (p) { return p[1]; });
      var mn = Math.min.apply(null, alts), mx = Math.max.apply(null, alts);
      var pad = Math.max(300, (1600 - (mx - mn)) / 2);
      yLo = mn - pad; yHi = mx + pad;
      var grid = [];
      for (var g = Math.ceil(yLo / 500) * 500; g <= yHi; g += 500) grid.push(g);

      var jobs = [{ t: 0, what: 'Oil and filter change', why: 'every visit, at your manual’s interval' }];
      jobs.push({ t: 0.16, what: 'Wipers, belts and hoses', why: 'high sun cracks rubber' });
      if (r === 'dirt') jobs.push({ t: 0.86, what: 'cabin and engine filters', why: '', fig: '~5,700 ft', lead: place.replace(/ road$/, '') + ' dust' });
      else if (m >= 15000) jobs.push({ t: 0.5, what: 'Engine and cabin air filters', why: 'dust and pollen in town' });
      if (m >= 30000) jobs.push({ t: 0.36, what: 'Coolant test', why: 'cold nights, warm days' });
      jobs.push(r === 'ski'
        ? { t: 0.62, what: 'Tire pressure and rotation', why: 'pressure drops in the cold up high' }
        : { t: r === 'dirt' ? 0.66 : 0.68, what: 'Tire pressure and rotation', why: 'reset for day-night swings' });
      if (m >= 60000) jobs.push({ t: r === 'ski' ? 0.8 : 0.5 + (r === 'dirt' ? 0 : 0.32), what: 'Spark plugs and coils', why: r === 'ski' ? 'misfires show on the climb' : 'checked against the gap spec' });
      if (r === 'ski') jobs.push({ t: 0.92, what: 'Tread depth', why: 'measured for the snow road' });
      if (m >= 45000 || r === 'ski') jobs.push({ t: 1, what: 'Battery load test', why: r === 'ski' ? 'cold starts at the top' : 'cold mornings find weak ones' });

      jobs.sort(function (a, b) { return a.t - b.t; });
      for (var i = 1; i < jobs.length; i++) if (jobs[i].t - jobs[i - 1].t < 0.09) jobs[i].t = Math.min(1, jobs[i - 1].t + 0.09);
      if (jobs[jobs.length - 1].t > 1) jobs[jobs.length - 1].t = 1;

      /* chart */
      var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' +
        '<use href="#ridge-far" x="0" y="70" width="' + W + '" height="' + (H - 70) + '" fill="#1a2438"/>' +
        '<use href="#ridge-mid" x="0" y="118" width="' + W + '" height="' + (H - 118) + '" fill="#141c2e"/>' +
        '<g stroke="#2f3a52" stroke-width="1" stroke-dasharray="2 6">' +
        grid.map(function (a) { return '<line x1="0" x2="' + W + '" y1="' + Y(a).toFixed(1) + '" y2="' + Y(a).toFixed(1) + '" vector-effect="non-scaling-stroke"/>'; }).join('') +
        '</g>' +
        '<path d="' + pathOf(pts) + 'L' + X(1) + ' ' + H + 'L' + X(0) + ' ' + H + 'Z" fill="#3bb9a6" fill-opacity=".14"/>' +
        '<path class="due__path" d="' + pathOf(pts) + '" fill="none" stroke="#3bb9a6" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/>' +
        '</svg>';
      var html = svg + '<span class="due__scale">' + fmt(mx) + ' ft top · ' + fmt(mn) + ' ft low</span>';
      jobs.forEach(function (j, n) {
        var a = altAt(pts, j.t);
        j.alt = j.t === 0 ? 7199 : Math.round(a / 50) * 50;
        html += '<span class="due__mk" style="--x:' + (X(j.t) / W * 100).toFixed(2) + '%;--y:' + (Y(a) / H * 100).toFixed(2) + '%">' + (n + 1) + '</span>';
      });
      var endAlt = pts[pts.length - 1][1];
      html += '<span class="due__end due__end--a mono"><b>7,199</b> ' + startPlace + '</span><span class="due__end due__end--b mono"><b>' + (r === 'town' ? '' : '~') + fmt(endAlt) + '</b> ' + place + '</span>';
      chart.innerHTML = html;

      /* list (the accessible version of the chart) */
      out.textContent = '';
      var head = document.createElement('span');
      head.className = 'due__head';
      head.textContent = (sample ? 'Sample: 65,000 miles' : 'At ' + fmt(m) + ' miles') + ', driving the ' + place.replace(/^the /, '') + '. Sample schedule:';
      var ol = document.createElement('ol');
      ol.className = 'due__list';
      jobs.forEach(function (j, n) {
        var li = document.createElement('li');
        var num = document.createElement('span');
        num.className = 'due__n';
        num.setAttribute('aria-hidden', 'true');
        num.textContent = n + 1;
        var txt = document.createElement('span');
        if (j.fig) {
          var alt = document.createElement('span');
          alt.className = 'due__alt';
          alt.textContent = j.fig;
          txt.appendChild(alt);
          txt.appendChild(document.createTextNode('· ' + j.lead + ': ' + j.what));
        } else {
          txt.appendChild(document.createTextNode(j.what + ' · ' + j.why));
        }
        li.appendChild(num);
        li.appendChild(txt);
        ol.appendChild(li);
      });
      out.appendChild(head);
      out.appendChild(ol);

      if (animate && MOTION && hasGsap()) {
        gsap.fromTo(chart.querySelector('svg'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power2.out' });
        gsap.fromTo(chart.querySelectorAll('.due__mk'), { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)', stagger: 0.07, delay: 0.25 });
      }
    };
    var t;
    miles.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { render(true); }, 250); });
    roads.addEventListener('change', function () { render(true); });
    render(false);
  }

  /* ---------- Motion ---------- */
  if (!MOTION) return;

  function init() {
    if (!hasGsap() || typeof ScrollTrigger === 'undefined') { setTimeout(init, 50); return; }
    gsap.registerPlugin(ScrollTrigger);

    /* The route: one teal line from the hero to the footer. It draws on load, a rider travels it
       with the scroll, and each stop plate picks the line up at the height the last one left it. */
    var line = document.querySelector('.panorama__line');
    var hpath = document.querySelector('.panorama__path');
    var art = document.querySelector('.panorama__art');
    if (line && hpath && art) {
      var hlen = hpath.getTotalLength();
      var rider = document.createElement('span');
      rider.className = 'panorama__rider';
      rider.setAttribute('aria-hidden', 'true');
      art.appendChild(rider);
      var place = function (f) {
        var pt = hpath.getPointAtLength(hlen * f);
        rider.style.left = (pt.x / 14.4).toFixed(2) + '%';
        rider.style.top = (pt.y / 3.6).toFixed(2) + '%';
      };
      /* the plaza pin sits at x=120 of 1440 */
      var lo = 0, hi = 1;
      for (var k = 0; k < 20; k++) { var mid = (lo + hi) / 2; if (hpath.getPointAtLength(hlen * mid).x < 120) lo = mid; else hi = mid; }
      var f0 = lo;
      var ride = { f: 0 };
      place(0);
      gsap.timeline({ delay: 0.1 })
        .fromTo(line, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power2.inOut' }, 0)
        .fromTo(rider, { scale: 0 }, { scale: 1, duration: 0.3, ease: 'back.out(2)' }, 0)
        .to(ride, { f: f0, duration: 0.5, ease: 'power2.out', onUpdate: function () { place(ride.f); } }, 0);
      document.querySelectorAll('.pins .pin').forEach(function (p) {
        var x = parseFloat(p.style.getPropertyValue('--x')) / 100 || 0;
        gsap.from(p, { opacity: 0, scale: 0.6, duration: 0.35, ease: 'back.out(2)', delay: 0.1 + x * 1.0 });
      });
      var scrollRide = { f: f0 };
      gsap.to(scrollRide, {
        f: 1, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 25%', scrub: 0.4 },
        onUpdate: function () { place(scrollRide.f); }
      });
      gsap.to('.panorama__ridge--far', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.panorama__ridge--mid', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    }

    /* Stops: the figure counts from the last stop's height; the trail draws in and the rider climbs to the stop */
    var prev = 7199;
    document.querySelectorAll('.story-band').forEach(function (band) {
      var b = band.querySelector('[data-count-alt]');
      var plate = band.querySelector('.plate');
      if (b) {
        var target = parseInt(b.getAttribute('data-count-alt'), 10);
        var o = { v: prev };
        prev = target;
        gsap.to(o, {
          v: target, duration: 1.1, ease: 'power2.out',
          scrollTrigger: { trigger: band, start: 'top 75%', once: true },
          onUpdate: function () { b.innerHTML = '~' + figHtml(Math.round(o.v / 10) * 10); },
          onComplete: function () { b.innerHTML = '~' + figHtml(target); }
        });
      }
      if (!plate) return;
      var trail = plate.querySelector('.plate__trail');
      var dot = plate.querySelector('.plate__rider');
      var part = plate.querySelector('.plate__part');
      var ring = plate.querySelector('.plate__ring');
      if (trail && dot) {
        var len = trail.getTotalLength();
        var go = { p: 0 };
        var setP = function () {
          var pt = trail.getPointAtLength(len * go.p);
          trail.style.strokeDashoffset = (len * (1 - go.p)).toFixed(1);
          dot.setAttribute('cx', pt.x.toFixed(1));
          dot.setAttribute('cy', pt.y.toFixed(1));
        };
        trail.style.strokeDasharray = len.toFixed(1) + ' ' + len.toFixed(1);
        setP();
        gsap.to(go, {
          p: 1, ease: 'none',
          scrollTrigger: { trigger: plate, start: 'top 85%', end: 'center 45%', scrub: 0.5 },
          onUpdate: setP
        });
        if (ring) gsap.fromTo(ring, { scale: 0.3, opacity: 0, transformOrigin: '50% 50%', transformBox: 'fill-box' }, { scale: 1, opacity: 0.5, ease: 'none', scrollTrigger: { trigger: plate, start: 'center 60%', end: 'center 45%', scrub: 0.5 } });
      }
      if (part) gsap.from(part, { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: plate, start: 'top 70%', once: true } });
    });

    /* Footer: the line comes home to the plaza */
    var fr = document.querySelector('.footer__route svg');
    var home = document.querySelector('.footer__home');
    if (fr && home) {
      gsap.timeline({ scrollTrigger: { trigger: '.footer', start: 'top 95%', end: 'top 50%', scrub: 0.5 } })
        .fromTo(fr, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', duration: 1 }, 0)
        .fromTo(home, { scale: 0 }, { scale: 1, ease: 'back.out(2)', duration: 0.2 }, 0.85);
    }

    /* Story: the written list. The dusk ridges rise with the scroll and each line gets its mark */
    var brk = document.querySelector('.break');
    var marks = brk ? brk.querySelectorAll('.sheet__mark') : [];
    if (brk) {
      gsap.timeline({ scrollTrigger: { trigger: brk, start: 'top bottom', end: 'center center', scrub: 0.6 } })
        .from('.break__ridge--far', { yPercent: 30, ease: 'none' }, 0)
        .from('.break__ridge--mid', { yPercent: 40, ease: 'none' }, 0)
        .from('.break__ridge--near', { yPercent: 50, ease: 'none' }, 0)
        .from('.sheet', { y: 70, ease: 'power2.out' }, 0);
      gsap.from(marks, { scale: 0.4, ease: 'back.out(2.4)', stagger: 0.14, duration: 0.45, scrollTrigger: { trigger: '.sheet', start: 'top 75%', once: true } });
    }

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
  init();
})();
