/* hotspots: points on an image that open a small card.
   <div data-hotspots>
     <img src="roof.webp" alt="...">
     <button data-hotspot style="--x:30%;--y:20%" aria-controls="hs-flashing">Flashing</button>
     <div data-hotspot-card id="hs-flashing" hidden> <h3>Flashing</h3> <p>...</p> </div>
   </div>
   Cards pair with buttons by aria-controls, else by order. One card open at a time (aria-expanded on the button).
   Opening moves focus to the card; Esc closes and returns focus; a click outside or focus leaving closes it.
   Without JS the cards should be shown as a list (the [[hotspots]] markup leaves them unhidden; this module hides them). */
SW.mod('hotspots', function (SW) {
  var n = 0;
  SW.$$('[data-hotspots]').forEach(function (box) {
    var btns = SW.$$('[data-hotspot]', box);
    var cards = SW.$$('[data-hotspot-card]', box);
    var openBtn = null;
    var pairs = btns.map(function (b, i) {
      var id = b.getAttribute('aria-controls');
      var card = (id && document.getElementById(id)) || cards[i];
      if (!card) return null;
      card.id = card.id || 'sw-hotspot-' + (++n);
      if (b.tagName === 'BUTTON') b.type = 'button';
      b.setAttribute('aria-controls', card.id);
      b.setAttribute('aria-expanded', 'false');
      card.hidden = true;
      card.setAttribute('tabindex', '-1');
      if (!card.hasAttribute('role')) card.setAttribute('role', 'group');
      if (!card.hasAttribute('aria-label') && !card.hasAttribute('aria-labelledby')) card.setAttribute('aria-label', b.textContent.trim());
      return { btn: b, card: card };
    }).filter(Boolean);
    box.setAttribute('data-hotspots-ready', '');

    function close(returnFocus) {
      if (!openBtn) return;
      var p = pairs.find(function (x) { return x.btn === openBtn; });
      p.btn.setAttribute('aria-expanded', 'false');
      p.btn.classList.remove('is-active');
      p.card.hidden = true;
      p.card.classList.remove('is-open');
      box.classList.remove('has-open');
      openBtn = null;
      if (returnFocus) p.btn.focus();
    }
    function open(p) {
      close(false);
      openBtn = p.btn;
      p.btn.setAttribute('aria-expanded', 'true');
      p.btn.classList.add('is-active');
      p.card.hidden = false;
      p.card.classList.add('is-open');
      box.classList.add('has-open');
      p.card.style.setProperty('--x', p.btn.style.getPropertyValue('--x'));
      p.card.style.setProperty('--y', p.btn.style.getPropertyValue('--y'));
      SW.focusEl(p.card);
    }
    pairs.forEach(function (p) {
      p.btn.addEventListener('click', function () {
        if (openBtn === p.btn) close(true); else open(p);
      });
      p.card.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.preventDefault(); close(true); } });
      p.btn.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openBtn === p.btn) { e.preventDefault(); close(true); } });
      // focus leaving both the button and its card closes it
      [p.btn, p.card].forEach(function (el) {
        el.addEventListener('focusout', function (e) {
          var to = e.relatedTarget;
          if (openBtn === p.btn && to && !p.btn.contains(to) && !p.card.contains(to)) close(false);
        });
      });
    });
    document.addEventListener('pointerdown', function (e) {
      if (!openBtn) return;
      var p = pairs.find(function (x) { return x.btn === openBtn; });
      if (!p.btn.contains(e.target) && !p.card.contains(e.target)) close(false);
    });
  });
});
