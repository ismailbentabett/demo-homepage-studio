/* garagedoor-C: Degree Stamp + Frost Edge. Hero frost clear, the four-reading story, the frost pane, hail sketch glue. */
(function () {
  var doc = document.documentElement;

  /* Hail check sketch: how many sections are dented (UI glue, works with any motion setting). */
  var range = document.getElementById('hail-n');
  var sketch = document.querySelector('.dents');
  var count = document.querySelector('.hail-n');
  function syncHail() {
    if (!range || !sketch) return;
    var n = String(range.value);
    sketch.setAttribute('data-n', n);
    range.setAttribute('aria-valuetext', n + (n === '1' ? ' section' : ' sections'));
    if (count) count.textContent = '· ' + n;
  }
  if (range) { range.addEventListener('input', syncHail); syncHail(); }

  if (!window.SW || SW.reduced || !doc.classList.contains('sw-motion') || !window.gsap) return;
  var gsap = window.gsap;

  /* 1. Intro: frost clears from the centre of the −8° (900 ms). Any tap or scroll ends it. */
  var clear = document.querySelector('.mask__clear');
  if (clear) {
    var intro = gsap.fromTo(clear, { attr: { r: 0 } }, { attr: { r: 520 }, duration: 0.9, ease: 'power3.out', delay: 0.1 });
    var skip = function () { intro.progress(1); window.removeEventListener('pointerdown', skip); window.removeEventListener('wheel', skip); };
    window.addEventListener('pointerdown', skip, { passive: true });
    window.addEventListener('wheel', skip, { passive: true });
  }

  if (!window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* 2. The story: 104 → 88 → 34 → −8, frost grows with the cold. Desktop/tablet only (≥ 640). */
  var story = document.querySelector('.story');
  var stage = document.querySelector('[data-stage]');
  var num = document.querySelector('[data-story-num]');
  var scenes = Array.prototype.slice.call(document.querySelectorAll('.scene'));
  var temps = [104, 88, 34, -8];
  var colds = [0, 0.35, 0.7, 1];
  function fmt(t) { return t < 0 ? '−' + Math.abs(t) : String(t); }
  function lerp(arr, p) {
    var x = Math.min(arr.length - 1, Math.max(0, p * (arr.length - 1)));
    var i = Math.floor(x), f = x - i;
    if (i >= arr.length - 1) return arr[arr.length - 1];
    return arr[i] + (arr[i + 1] - arr[i]) * f;
  }

  ScrollTrigger.matchMedia({
    '(min-width: 640px)': function () {
      if (!story || !stage) return;
      var last = -1;
      function render(p) {
        // each scene holds for a beat, then the reading slides to the next
        var seg = Math.min(3, Math.floor(p * 4));
        var local = p * 4 - seg;
        var eased = seg + Math.max(0, (local - 0.55) / 0.45);
        var q = Math.min(1, eased / 3);
        var t = Math.round(lerp(temps, q));
        if (num) num.textContent = fmt(t);
        stage.style.setProperty('--cold', lerp(colds, q).toFixed(3));
        var idx = Math.min(3, Math.round(q * 3));
        if (idx !== last) {
          last = idx;
          stage.setAttribute('data-scene', String(idx + 1));
          scenes.forEach(function (s, i) { s.classList.toggle('is-on', i === idx); });
        }
      }
      render(0);
      var st = ScrollTrigger.create({
        trigger: story, start: 'top top', end: 'bottom bottom', scrub: true,
        onUpdate: function (self) { render(self.progress); }
      });
      return function () {
        st.kill();
        scenes.forEach(function (s) { s.classList.remove('is-on'); });
      };
    }
  });

  /* 3. The frost pane: frost creeps in from the edges as the band crosses the screen. */
  var brk = document.querySelector('.break');
  if (brk) {
    brk.style.setProperty('--pane', '0.15');
    ScrollTrigger.create({
      trigger: brk, start: 'top bottom', end: 'bottom top', scrub: true,
      onUpdate: function (self) { brk.style.setProperty('--pane', (0.15 + Math.sin(self.progress * Math.PI) * 0.95).toFixed(3)); }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
