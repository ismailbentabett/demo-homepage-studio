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
