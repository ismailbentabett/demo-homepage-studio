/* flooring-B — Sample Chip Cross-Section signature + scroll stories */
(function () {
  if (typeof SW === 'undefined') return;

  /* ── Hero chip stack entrance ─────────────────────── */
  SW.mod('hero-chips', function () {
    var stack = document.querySelector('.chip-stack[data-sw-signature]');
    if (!stack) return;

    if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
      var chips = stack.querySelectorAll('.chip--hero');
      chips.forEach(function (chip, i) {
        chip.style.opacity = '0';
        chip.style.transform = 'translateY(24px)';
        chip.style.clipPath = 'inset(0 0 100% 0)';
        chip.style.transition = 'opacity 500ms cubic-bezier(.23,1,.32,1), transform 500ms cubic-bezier(.23,1,.32,1), clip-path 500ms cubic-bezier(.23,1,.32,1)';
        chip.style.transitionDelay = (i * 60) + 'ms';
      });

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          chips.forEach(function (chip) {
            chip.style.opacity = '1';
            chip.style.transform = 'translateY(0)';
            chip.style.clipPath = 'inset(0)';
          });
        });
      });
    }
  });

  /* ── Cross-section peel story (pinned, 640px+) ───── */
  SW.mod('cross-peel', function () {
    var section = document.querySelector('.story-cross');
    if (!section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', function () {
      var layers = section.querySelectorAll('.cross-layer');
      var labels = section.querySelectorAll('.cross-label');
      var statements = section.querySelectorAll('.story-cross__statements p');

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          pin: section.querySelector('.story-cross__pin'),
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      // Layers separate
      tl.to('.cross-layer--wear', { y: -40, duration: 1, ease: 'power2.out' }, 0);
      tl.to('.cross-layer--core', { y: 40, duration: 1, ease: 'power2.out' }, 0);

      // Labels draw in
      labels.forEach(function (label, i) {
        tl.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.3 + (i * 0.15));
      });

      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });

      // Statements appear
      statements.forEach(function (stmt, i) {
        tl.from(stmt, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, 0.6 + (i * 0.2));
      });
    });
  });

  /* ── Material compare: picks the chip that fits (all modes; no motion needed) ── */
  SW.mod('fit', function () {
    var tool = document.querySelector('[data-hook="compare"]');
    if (!tool) return;
    var run = tool.querySelector('[data-compare-run]');
    var out = tool.querySelector('[data-compare-output]');
    var chips = tool.querySelectorAll('[data-fit]');
    var handoff = tool.querySelector('.compare-handoff');
    if (!run || !out) return;
    var SPEC = {
      lvp: ['LVP', '12 mil wear · SPC core', 'Luxury vinyl plank'],
      eng: ['Engineered', '4 mm top · ply core', 'Engineered hardwood'],
      oak: ['Solid oak', '¾″ thick · nail down', 'Solid hardwood'],
      tile: ['Tile', 'Porcelain · membrane', 'Tile & stone floors']
    };
    var ROOM = { kitchen: 'Kitchen', bath: 'Bath', basement: 'Basement', bedroom: 'Bedroom', living: 'Living room' };
    function val(name) { var el = tool.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ''; }
    function pick(room, pets, slab) {
      if (room === 'bath') return ['tile', 'water sits on bath floors; porcelain over a membrane does not care.'];
      if (room === 'basement') return ['lvp', 'below grade, only a waterproof rigid core is safe. We probe the slab first.'];
      if (room === 'kitchen') return pets === 'yes'
        ? ['lvp', 'a rigid core lies flat and the wear layer takes claws and dropped pans.']
        : ['tile', 'spills and chair legs all day; porcelain shrugs both off.'];
      if (pets === 'yes') return ['lvp', 'claws scratch wood; a 12 mil wear layer is built for them.'];
      if (slab === 'slab') return ['eng', 'solid oak cannot be nailed to concrete; engineered floats or glues over a barrier.'];
      return ['oak', 'a wood subfloor takes nails, and solid oak can be sanded again for decades.'];
    }
    function render() {
      var room = val('room'), pets = val('pets'), slab = val('slab');
      var r = pick(room, pets, slab), sp = SPEC[r[0]];
      var where = (ROOM[room] || 'Room') + (slab === 'slab' ? ' on a slab' : ' over a crawlspace') + (pets === 'yes' ? ' with pets' : '');
      out.innerHTML = '';
      var c = document.createElement('div'); c.className = 'fit-chip';
      [['span', 'fit-chip__tag', 'Best fit'], ['strong', 'fit-chip__name', sp[0]], ['span', 'fit-chip__spec', sp[1]], ['p', 'fit-chip__why', where + ': ' + r[1]]]
        .forEach(function (d) { var e = document.createElement(d[0]); e.className = d[1]; e.textContent = d[2]; c.appendChild(e); });
      out.appendChild(c);
      chips.forEach(function (ch) {
        var on = ch.getAttribute('data-fit') === r[0];
        ch.classList.toggle('is-best', on);
        ch.classList.toggle('is-dim', !on);
      });
      if (handoff) handoff.setAttribute('data-service', sp[2]);
    }
    run.addEventListener('click', render);
    tool.addEventListener('change', function (e) { if (e.target.matches('input[type="radio"]')) render(); });
    render();
  });

})();