/* flooring-B: sample-chip signature. The fit tool works in every mode; motion only under sw-motion. */
(function () {
  if (typeof SW === 'undefined') return;
  var motion = function () { return !SW.reduced && document.documentElement.classList.contains('sw-motion'); };

  /* ── Hero: the chip that fits IS the answer (no second result chip) ── */
  SW.mod('fit', function () {
    var tool = document.querySelector('[data-hook="compare"]');
    if (!tool) return;
    var out = tool.querySelector('[data-compare-output]');
    var chips = tool.querySelectorAll('[data-fit]');
    if (!out || !chips.length) return;
    var ROOM = { kitchen: 'Kitchen', bath: 'Bath', basement: 'Basement', bedroom: 'Bedroom', living: 'Living room' };
    var NAME = { lvp: 'LVP', eng: 'Engineered', oak: 'Solid oak', tile: 'Tile' };
    function val(name) { var el = tool.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ''; }
    function pick(room, pets, slab) {
      if (room === 'bath') return ['tile', 'water sits on bath floors, and porcelain over a membrane does not care.'];
      if (room === 'basement') return ['lvp', 'below grade only a waterproof rigid core is safe. We probe the slab first.'];
      if (room === 'kitchen') return pets === 'yes'
        ? ['lvp', 'a rigid core lies flat on a slab, and the wear layer takes claws.']
        : ['tile', 'spills and chair legs all day, and porcelain shrugs both off.'];
      if (pets === 'yes') return ['lvp', 'claws scratch wood, and a 12 mil wear layer is built for them.'];
      if (slab === 'slab') return ['eng', 'solid oak cannot be nailed to concrete. Engineered floats or glues over a barrier.'];
      return ['oak', 'a wood subfloor takes nails, and solid oak can be sanded again for decades.'];
    }
    function render() {
      var room = val('room'), pets = val('pets'), slab = val('slab');
      var r = pick(room, pets, slab);
      var where = (ROOM[room] || 'Room') + (slab === 'slab' ? ' on a slab' : ' over a crawlspace') + (pets === 'yes' ? ' with pets' : '');
      chips.forEach(function (ch) {
        var on = ch.getAttribute('data-fit') === r[0];
        ch.classList.toggle('is-best', on);
        if (on && motion()) {
          ch.classList.remove('is-flip');
          void ch.offsetWidth;
          ch.classList.add('is-flip');
        }
      });
      out.textContent = where + ' → ' + NAME[r[0]] + ': ' + r[1];
    }
    tool.addEventListener('change', function (e) { if (e.target.matches('input[type="radio"]')) render(); });
    render();
  });

  /* ── Hero chip entrance (≤ 0.5 s, never touches the h1) ── */
  SW.mod('hero-chips', function () {
    if (!motion() || typeof gsap === 'undefined') return;
    gsap.from('.chip-stack .chip--hero', { y: 18, opacity: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out', clearProps: 'all' });
  });

  /* ── Story: the plank comes apart one layer per line (pinned ≥ 640px) ── */
  SW.mod('cross-peel', function () {
    var section = document.querySelector('.story-cross');
    if (!section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || !motion()) return;
    var rows = section.querySelectorAll('.cross-row');
    var lines = section.querySelectorAll('.story-cross__statements li');

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        section.classList.add('is-scrubbed');
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          pin: section.querySelector('.story-cross__pin'),
          pinSpacing: false,
          invalidateOnRefresh: true
        });
        // the peel starts while the band scrolls in, so the first pinned frame already shows layer one
        var tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: { trigger: section, start: 'top 55%', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true }
        });
        tl.set(rows, { y: 0 }, 0)
          .set(section.querySelectorAll('.cross-lead'), { scaleX: 0 }, 0)
          .set(section.querySelectorAll('.cross-label'), { opacity: 0, x: -12 }, 0)
          .set(lines, { opacity: 0.55 }, 0);
        var lift = [-64, 0, 64];
        rows.forEach(function (row, i) {
          var at = i * 1.1;
          tl.to(row, { y: lift[i], duration: 0.8 }, at)
            .to(row.querySelector('.cross-lead'), { scaleX: 1, duration: 0.4 }, at + 0.3)
            .to(row.querySelector('.cross-label'), { opacity: 1, x: 0, duration: 0.4 }, at + 0.5)
            .to(lines[i], { opacity: 1, duration: 0.4 }, at + 0.3);
          if (i > 0) tl.to(lines[i - 1], { opacity: 0.8, duration: 0.4 }, at + 0.3);
        });
        tl.to(lines, { opacity: 1, duration: 0.6 }, '+=0.2');
        return function () { section.classList.remove('is-scrubbed'); };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
