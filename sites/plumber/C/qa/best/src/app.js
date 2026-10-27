/* plumber-C signature: Department rule draw + page number count */
(function () {
  if (!window.SW) return;

  SW.mod('thaw-signature', function () {
    var rules = document.querySelectorAll('.dept-rule[data-reveal]');
    if (!rules.length) return;

    /* Page number counter driven by scroll position of each department */
    if (!SW.reduced) {
      var nums = document.querySelectorAll('.dept-rule__num');
      nums.forEach(function (el) {
        el.setAttribute('data-count', el.textContent.trim());
      });
    }

    /* Hero line-mask reveal is handled by kit/split via data-split="lines" */
  });
})();