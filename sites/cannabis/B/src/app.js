/* cannabis-B — signature + scroll stories */
(function () {
 'use strict';

 if (!window.SW || SW.reduced) return;
 if (!document.documentElement.classList.contains('sw-motion')) return;

 /* ── Reveal on scroll ─────────────────────────────────────── */
 const reveals = document.querySelectorAll('.sw-reveal');
 const unclips = document.querySelectorAll('.sw-unclip');

 if ('IntersectionObserver' in window) {
 const io = new IntersectionObserver(
 (entries) => {
 entries.forEach((e) => {
 if (e.isIntersecting) {
 e.target.classList.add('is-visible');
 io.unobserve(e.target);
 }
 });
 },
 { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
 );
 reveals.forEach((el) => io.observe(el));
 unclips.forEach((el) => io.observe(el));
 } else {
 reveals.forEach((el) => el.classList.add('is-visible'));
 unclips.forEach((el) => el.classList.add('is-visible'));
 }

 /* ── Lab sheet reader interaction ─────────────────────────── */
 const coaLines = document.querySelectorAll('.coa-line');
 coaLines.forEach((line) => {
 line.addEventListener('click', () => {
 coaLines.forEach((l) => l.classList.remove('active'));
 line.classList.add('active');
 });
 });

 /* ── Tax estimator (no literal dollars) ───────────────────── */
 const cartInput = document.getElementById('cart-total');
 const taxResult = document.querySelector('.tax-result');
 if (cartInput && taxResult) {
 cartInput.addEventListener('input', () => {
 const val = parseFloat(cartInput.value);
 if (!val || val <= 0) {
 taxResult.innerHTML =
 '<p class="mono">Excise (10%) + Sales (6%) = <span class="accent">~16% added</span></p>' +
 '<p>Enter a sample amount above to see how tax is calculated. Actual tax is added at the register.</p>';
 return;
 }
 const total = Math.round(val * 1.16 * 100) / 100;
 taxResult.innerHTML =
 '<p class="mono">Your amount + ~16% tax = <span class="accent">' + total.toFixed(2) + '</span></p>' +
 '<p>Sample calculation. Actual tax is added at the register.</p>';
 });
 }

 /* ── Multi-step form ──────────────────────────────────────── */
 const form = document.querySelector('form[data-lead]');
 if (form) {
 const steps = form.querySelectorAll('.form-step');
 const thankyou = form.querySelector('.form-thankyou');
 let current = 0;

 function showStep(n) {
 steps.forEach((s, i) => {
 s.hidden = i !== n;
 });
 }

 form.querySelectorAll('.next-step').forEach((btn) => {
 btn.addEventListener('click', () => {
 const fieldset = btn.closest('.form-step').querySelector('fieldset');
 const inputs = fieldset.querySelectorAll('[required]');
 let valid = true;
 inputs.forEach((inp) => {
 if (!inp.checkValidity()) {
 inp.reportValidity();
 valid = false;
 }
 });
 if (!valid) return;
 if (current < steps.length - 1) {
 current++;
 showStep(current);
 }
 });
 });

 form.querySelectorAll('.prev-step').forEach((btn) => {
 btn.addEventListener('click', () => {
 if (current > 0) {
 current--;
 showStep(current);
 }
 });
 });

 form.addEventListener('submit', (e) => {
 e.preventDefault();
 steps.forEach((s) => (s.hidden = true));
 if (thankyou) thankyou.hidden = false;
 });
 }

 /* ── Mobile menu toggle ───────────────────────────────────── */
 const toggle = document.querySelector('.menu-toggle');
 const mobileMenu = document.getElementById('mobile-menu');
 if (toggle && mobileMenu) {
 toggle.addEventListener('click', () => {
 const expanded = toggle.getAttribute('aria-expanded') === 'true';
 toggle.setAttribute('aria-expanded', String(!expanded));
 mobileMenu.hidden = expanded;
 });
 mobileMenu.querySelectorAll('a').forEach((a) => {
 a.addEventListener('click', () => {
 toggle.setAttribute('aria-expanded', 'false');
 mobileMenu.hidden = true;
 });
 });
 }

 /* ── GSAP scroll story: price counter ─────────────────────── */
 if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);

 document.fonts.ready.then(() => {
 ScrollTrigger.refresh();
 });

 /* Price section bar animation */
 const priceSection = document.getElementById('price');
 if (priceSection) {
 const rows = priceSection.querySelectorAll('.price-row');
 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 gsap.from(rows, {
 scrollTrigger: {
 trigger: priceSection,
 start: 'top 75%',
 end: 'bottom 60%',
 scrub: 1,
 },
 opacity: 0,
 x: -30,
 stagger: 0.1,
 duration: 0.6,
 ease: 'power2.out',
 });
 },
 });
 }

 /* Lab COA line highlight on scroll */
 const labSection = document.getElementById('lab');
 if (labSection) {
 const lines = labSection.querySelectorAll('.coa-line');
 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 lines.forEach((line, i) => {
 ScrollTrigger.create({
 trigger: labSection,
 start: 'top ' + (60 - i * 8) + '%',
 end: 'top ' + (52 - i * 8) + '%',
 onEnter: () => {
 lines.forEach((l) => l.classList.remove('active'));
 line.classList.add('active');
 },
 onLeaveBack: () => {
 line.classList.remove('active');
 },
 });
 });
 },
 });
 }
 }
})();