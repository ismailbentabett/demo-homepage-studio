/* fencedeck-C app.js: six hours on the rim. One slope section, built band by band. */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;
  var motionOn = function () { return !SW.reduced && root.classList.contains('sw-motion'); };
  var NS = 'http://www.w3.org/2000/svg';

  /* ---------- fence on a slope: live elevation + counts (works with or without motion) ---------- */
  SW.mod('fence-bench', function () {
    var bench = document.querySelector('[data-fence]');
    if (!bench) return;
    var svg = bench.querySelector('[data-fence-draw]');
    var out = function (k) { return bench.querySelector('[data-fence-out="' + k + '"]'); };
    var val = function (k) {
      var els = bench.querySelectorAll('[data-fence-in="' + k + '"]');
      for (var i = 0; i < els.length; i++) {
        if (els[i].type === 'range') return Number(els[i].value);
        if (els[i].checked) return Number(els[i].value);
      }
      return 0;
    };
    var prices = SW.fact('proof.prices') || [];
    var MAT = ['redwood', 'vinyl'];
    var SLOPE = ['flat', 'gentle', 'steep'];
    var r = function (n) { return Math.round(n * 10) / 10; };
    var drawn = false;

    function draw(sections, gates, h, m, s) {
      var N = Math.max(3, sections);
      var W = Math.max(600, Math.round(36 + N * 30));
      svg.setAttribute('viewBox', '0 -56 ' + W + ' 296');
      var k = [0, 0.09, 0.2][s];
      var fy = function (x) { return 60 + k * x * 600 / W + (s === 0 ? 70 : 0); };
      var H = h === 6 ? 100 : 68;
      var x0 = 18, x1 = W - 18, step = (x1 - x0) / N;
      var xs = [];
      for (var i = 0; i <= N; i++) xs.push(r(x0 + i * step));
      var gateAt = {};
      var gi = Math.min(gates, N - 1);
      for (var g = 1; g <= gi; g++) gateAt[Math.round(g * N / (gi + 1))] = true;
      var ground = 'M0 ' + r(fy(0)) + ' L' + W + ' ' + r(fy(W));
      var html = '<path d="' + ground + ' V240 H0 Z" style="fill:var(--sx-hatch)"/>' +
        '<path d="' + ground + ' V240 H0 Z" style="fill:var(--sx-bg)" opacity=".55"/>' +
        '<path d="' + ground + '" fill="none" style="stroke:var(--sx-gr);stroke-width:2"/>';
      var inf = '', posts = '', tops = [];
      for (var p = 0; p < N; p++) {
        var a = xs[p] + 4, b = xs[p + 1] - 4;
        var yl = fy(xs[p]), yr = fy(xs[p + 1]);
        var bl, br;
        if (s === 2) { bl = r(yl - 3); br = bl; }           // stepped: each panel level, set off the uphill post
        else { bl = r(yl - 3); br = r(yr - 3); }             // flat or racked to the grade
        var tl = r(bl - H), tr = r(br - H);
        tops.push([tl, tr]);
        var cls = 'fp' + (gateAt[p] ? ' fp--gate' : '');
        var d = 'M' + a + ' ' + bl + ' L' + a + ' ' + tl + ' L' + b + ' ' + tr + ' L' + b + ' ' + br + ' Z';
        var body = '';
        if (gateAt[p]) {
          var w = r(b - a);
          body = '<path d="' + d + '" style="fill:var(--sx-bg)"/>' +
            '<path d="M' + (a + 3) + ' ' + r(bl) + ' L' + (b - 3) + ' ' + r(tr + 2) + ' M' + (a + 3) + ' ' + r((bl + tl) / 2) + ' L' + (b - 3) + ' ' + r((br + tr) / 2) + '" style="stroke-width:1"/>' +
            '<path d="M' + r(b - 2) + ' ' + r(br + 3) + ' A' + w + ' ' + r(w * 0.36) + ' 0 0 1 ' + r(a + 2) + ' ' + r(bl + w * 0.36) + '" style="stroke-dasharray:4 4;stroke-width:1"/>' +
            '<circle cx="' + r(b - 9) + '" cy="' + r(tr + 20) + '" r="2.6" style="fill:var(--sx-hi)"/>';
        } else if (m === 1) {
          body = '<path d="' + d + '" style="fill:var(--sx-hi);fill-opacity:.14"/>' +
            '<path d="M' + a + ' ' + r(tl + 10) + ' L' + b + ' ' + r(tr + 10) + ' M' + a + ' ' + r(bl - 9) + ' L' + b + ' ' + r(br - 9) + '" style="stroke-width:.75"/>';
        } else {
          var lines = '';
          var cnt = Math.max(2, Math.floor((b - a) / 8));
          for (var q = 1; q < cnt; q++) {
            var x = r(a + q * (b - a) / cnt), t = (x - a) / (b - a);
            lines += 'M' + x + ' ' + r(tl + (tr - tl) * t + 5) + ' L' + x + ' ' + r(bl + (br - bl) * t);
          }
          body = '<path d="' + d + '" style="fill:var(--sx-bg)"/><path d="' + lines + '" style="stroke-width:.75"/>' +
            '<path d="M' + (a - 2) + ' ' + r(tl + 5) + ' L' + (b + 2) + ' ' + r(tr + 5) + '" style="stroke-width:1"/>';
        }
        if (s === 2 && yr - br > 6) body += '<path d="M' + a + ' ' + r(bl + 1) + ' L' + b + ' ' + r(br + 1) + ' L' + b + ' ' + r(yr) + '" style="stroke-dasharray:2 3;stroke-width:.75;opacity:.7"/>';
        inf += '<g class="' + cls + '" style="--i:' + p + '">' + body + '</g>';
      }
      xs.forEach(function (x, i) {
        var left = tops[i - 1], right = tops[i];
        var top = r(Math.min(left ? left[1] : 999, right ? right[0] : 999) - 8);
        var yg = r(fy(x));
        posts += '<g class="fpost" style="--i:' + i + '"><rect x="' + (x - 4.5) + '" y="' + top + '" width="9" height="' + r(yg - top) + '" style="fill:var(--sx-bg)"/>' +
          '<path d="M' + (x - 4.5) + ' ' + yg + ' V' + top + ' H' + (x + 4.5) + ' V' + yg + '"/>' +
          '<path d="M' + (x - 8) + ' ' + yg + ' V' + r(yg + 36) + ' H' + (x + 8) + ' V' + yg + '" style="stroke-dasharray:4 3;stroke-width:1"/>' +
          (m === 1 ? '<path d="M' + (x - 5.5) + ' ' + top + ' L' + x + ' ' + (top - 5) + ' L' + (x + 5.5) + ' ' + top + '"/>' : '') + '</g>';
      });
      var note = '';
      svg.innerHTML = html + '<g fill="none" style="stroke:var(--sx-hi);stroke-width:1.5">' + inf + '</g>' +
        '<g fill="none" style="stroke:var(--sx-ln);stroke-width:1.5">' + posts + '</g>' + note;
      if (drawn && motionOn() && window.gsap) {
        gsap.fromTo(svg.querySelectorAll('.fp, .fpost'), { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.36, ease: 'power3.out', stagger: 0.018, overwrite: true });
      }
      drawn = true;
    }

    function update() {
      var len = val('len'), h = val('h'), m = val('m'), g = val('g'), s = val('s');
      var sections = Math.ceil(len / 8);
      var gates = Math.min(g, sections - 1);
      var panels = sections - gates;
      var postsN = sections + 1 + gates;
      var steps = s === 2 ? sections - 1 : 0;
      out('len').textContent = len + ' ft';
      out('posts').textContent = postsN;
      out('panels').textContent = panels;
      out('steps').textContent = steps;
      var pr = prices[m] || {};
      var how = s === 2 ? 'Each panel steps down level from the uphill post, with a kickboard under the gap.'
        : s === 1 ? 'On a gentle grade the panels rack to follow the ground, so there are no steps.'
          : 'Flat run: every panel level, posts plumb.';
      out('line').innerHTML = '<b>' + postsN + ' posts</b> set in concrete for ' + panels + ' ' + MAT[m] + ' panels at ' + h + ' ft' +
        (gates ? ' and ' + gates + (gates > 1 ? ' gates' : ' gate') : '') + '. ' + how +
        (pr.from ? ' Sample range ' + pr.from + ' to ' + pr.to + ' ' + (pr.unit || '') + ' (Sample pricing).' : '') +
        ' Call 811 before anyone digs.';
      bench.setAttribute('data-summary', len + ' ft of ' + h + ' ft ' + MAT[m] + ' fence, ' + gates + ' gate(s), ' + SLOPE[s] + ' slope, about ' + postsN + ' posts');
      draw(sections, gates, h, m, s);
    }
    bench.addEventListener('input', update);
    bench.addEventListener('change', update);
    bench.classList.add('is-live');
    update();

    var send = bench.querySelector('[data-fence-send]');
    if (send) send.addEventListener('click', function () {
      setTimeout(function () { SW.prefillForm({ details: bench.getAttribute('data-summary') }, { scroll: false }); }, 30);
    });
  });

  /* ---------- fire zone: ticks hatch the board row (works with or without motion) ---------- */
  SW.mod('fire-boards', function () {
    var sec = document.getElementById('fire');
    if (!sec) return;
    var boxes = sec.querySelectorAll('[data-checklist] input[type="checkbox"]');
    var rects = sec.querySelectorAll('.fz__boards rect');
    var nOut = sec.querySelector('[data-fz-n]');
    function update() {
      var n = 0, picked = [];
      boxes.forEach(function (b) { if (b.checked) { n++; picked.push(b.parentNode.textContent.trim()); } });
      rects.forEach(function (rc, i) { rc.classList.toggle('is-hot', i < n); });
      if (nOut) nOut.textContent = n;
      sec.classList.toggle('is-hot', n >= 3);
      sec.setAttribute('data-summary', picked.length ? 'Fire zone check: ' + picked.join('; ') : '');
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    update();
    var send = sec.querySelector('[data-fire-send]');
    if (send) send.addEventListener('click', function () {
      var s = sec.getAttribute('data-summary');
      if (s) setTimeout(function () { SW.prefillForm({ details: s }, { scroll: false }); }, 30);
    });
  });

  /* ---------- night plate: lamps come on when it is in view ---------- */
  SW.mod('night-lamps', function () {
    var night = document.getElementById('night');
    if (!night) return;
    if (!('IntersectionObserver' in window) || !motionOn()) { night.classList.add('is-lit'); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { night.classList.add('is-lit'); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(night);
  });

  /* ---------- the story: pinned scrub ≥ 900px, motion only ---------- */
  if (!SW.reduced && root.classList.contains('sw-motion')) {
    SW.mod('story-scrub', function () {
      if (!window.gsap || !window.ScrollTrigger) return;
      gsap.registerPlugin(ScrollTrigger);
      var story = document.getElementById('build');
      if (!story) return;
      var stage = story.querySelector('[data-story]');
      var svg = story.querySelector('.sx--story');
      var steps = story.querySelectorAll('.story__steps .step');
      var rail = story.querySelectorAll('.story__rail li');
      var setActive = function (i) {
        steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
        rail.forEach(function (s, k) { s.classList.toggle('is-on', k <= i); });
      };

      ScrollTrigger.matchMedia({
        '(min-width: 900px)': function () {
          story.classList.add('is-pinned');
          var head = parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 68;
          var last = -1;
          setActive(0);
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: stage, start: 'top ' + head + 'px', end: 'bottom bottom', scrub: 0.6,
              onUpdate: function (self) {
                var i = Math.min(5, Math.floor(self.progress * 6.0001));
                if (i !== last) { last = i; setActive(i); }
              }
            }
          });
          tl.fromTo(svg, { '--built': 0.35 }, { '--built': 6, ease: 'none', duration: 1 }, 0)
            .fromTo(story, { '--bg': '#263548' }, { '--bg': '#141B26', ease: 'none', duration: 1 }, 0);
          ScrollTrigger.refresh();
          return function () {
            tl.scrollTrigger && tl.scrollTrigger.kill();
            tl.kill();
            story.classList.remove('is-pinned');
            svg.style.setProperty('--built', '6');
            story.style.removeProperty('--bg');
            steps.forEach(function (s) { s.classList.remove('is-on'); });
            rail.forEach(function (s) { s.classList.remove('is-on'); });
          };
        }
      });

      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    });
  }
})();
