/* selfstorage-B signature + scroll story */
(function(){
 if(!window.SW) return;

 /* Hero outline draw on motion */
 SW.mod('hero-outline', function(){
 if(SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
 var svg = document.querySelector('.hero__outline');
 if(!svg) return;
 requestAnimationFrame(function(){
 svg.classList.add('is-drawn');
 });
 });

 /* Chooser tool logic */
 SW.mod('chooser', function(){
 var wrap = document.querySelector('[data-checklist]');
 if(!wrap) return;
 var resultEl = document.querySelector(wrap.getAttribute('data-checklist-result') || '#chooser-result');
 var inputs = wrap.querySelectorAll('input[type="checkbox"]');
 function update(){
 var checked = 0;
 inputs.forEach(function(i){ if(i.checked) checked++; });
 if(checked === 0){
 resultEl.textContent = '';
 } else if(checked >= 2){
 resultEl.textContent = 'Go climate. Wood and fabric pick up mildew in a Florida summer without air.';
 } else {
 resultEl.textContent = 'Drive-up is fine. Heat-tolerant items, easy load-in from the bed.';
 }
 }
 inputs.forEach(function(i){ i.addEventListener('change', update); });
 });

 /* Scroll story: humidity dial (desktop only) */
 SW.mod('story-scrub', function(){
 if(SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
 if(typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
 var section = document.getElementById('story');
 if(!section) return;

 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function(){
 var steps = section.querySelectorAll('.story-step');
 if(steps.length === 0) return;
 var tl = gsap.timeline({
 scrollTrigger: {
 trigger: section,
 start: 'top top',
 end: '+=' + (steps.length * 55) + 'svh',
 pin: true,
 scrub: 0.8
 }
 });
 steps.forEach(function(step, i){
 tl.fromTo(step,
 { opacity: 0, y: 30 },
 { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
 i * 0.8
 );
 });
 }
 });
 });

})();