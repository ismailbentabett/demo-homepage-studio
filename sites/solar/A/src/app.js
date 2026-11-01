/* solar-A · app.js — signature moments + tools */
(function () {
  "use strict";

  var html = document.documentElement;
  var hasMotion = html.classList.contains("sw-motion") && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Signature: chalk snap + mount bolt ─────────────────────── */
  function initSignature() {
    var rows = document.querySelectorAll(".rafters[data-sw-signature]");
    if (!rows.length) return;

    if (!hasMotion) {
      rows.forEach(function (r) {
        r.classList.add("is-snapped", "is-bolted");
      });
      return;
    }

    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      rows.forEach(function (r) { r.classList.add("is-snapped", "is-bolted"); });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    rows.forEach(function (row) {
      var mounts = row.querySelectorAll(".mount");
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          once: true
        }
      });

      tl.to(row, { "--snap": 1, duration: 0.18, ease: "power2.out", onComplete: function () {
        row.classList.add("is-snapped");
      }});

      mounts.forEach(function (m, i) {
        tl.to(m, {
          y: 0, opacity: 1, duration: 0.24, ease: "back.out(1.7)",
          delay: i * 0.06,
          onStart: function () { m.closest(".rafters").classList.add("is-bolted"); }
        }, "-=0.12");
      });
    });
  }

  /* ── Install story: counter ticks up as steps enter ─────────── */
  function initInstallStory() {
    var section = document.querySelector("[data-hook='install-story']");
    if (!section) return;
    var counter = section.querySelector("[data-mount-n]");
    var steps = section.querySelectorAll(".step");
    if (!counter || !steps.length) return;

    if (!hasMotion || typeof ScrollTrigger === "undefined") {
      counter.textContent = "09";
      return;
    }

    steps.forEach(function (step, i) {
      ScrollTrigger.create({
        trigger: step,
        start: "top 60%",
        onEnter: function () {
          counter.textContent = String(i + 1).padStart(2, "0");
        }
      });
    });
  }

  /* ── Mount detail: exploded SVG parts assemble on scroll ──── */
  function initMountStory() {
    var section = document.querySelector("[data-hook='mount-story']");
    if (!section) return;
    var parts = section.querySelectorAll(".exp-part");
    if (!parts.length) return;

    if (!hasMotion || typeof ScrollTrigger === "undefined") {
      parts.forEach(function (p) { p.classList.add("is-assembled"); });
      return;
    }

    parts.forEach(function (part, i) {
      ScrollTrigger.create({
        trigger: section,
        start: "top " + (75 - i * 8) + "%",
        once: true,
        onEnter: function () { part.classList.add("is-assembled"); }
      });
    });
  }

  /* ── Roof-ready quiz ──────────────────────────────────────── */
  function initQuiz() {
    var form = document.querySelector("[data-hook='quiz']");
    if (!form) return;
    var verdictText = form.querySelector(".quiz__verdict-text");
    var bookBtn = form.querySelector(".quiz__book");
    var questions = ["q1", "q2", "q3", "q4", "q5"];

    function getAnswers() {
      var answers = {};
      questions.forEach(function (q) {
        var checked = form.querySelector("input[name='" + q + "']:checked");
        if (checked) answers[q] = checked.value;
      });
      return answers;
    }

    function evaluate() {
      var a = getAnswers();
      var answered = Object.keys(a).length;
      if (answered < 5) {
        verdictText.textContent = answered + " of 5 answered. Keep going.";
        bookBtn.hidden = true;
        return;
      }

      var ready = true;
      var reason = "";

      if (a.q1 === "old") { ready = false; reason = "Your roof may need work before panels. Book a roof check first."; }
      else if (a.q5 === "yes") { ready = false; reason = "Re-roof first, then panels. We can coordinate both."; }
      else if (a.q5 === "soon") { ready = false; reason = "Plan the re-roof before panels go on. Let's talk timing."; }
      else if (a.q3 === "heavy" && a.q2 === "other") { ready = false; reason = "Heavy shade plus an unusual roof needs an in-person look."; }
      else if (a.q4 === "unsure") { reason = "Likely ready. We'll check your panel on the visit."; }
      else if (a.q3 === "heavy") { reason = "Ready, but shade needs a careful layout. We'll walk the yard."; }
      else { reason = "Your roof looks ready. Book a site visit for real numbers."; }

      verdictText.textContent = ready ? "✓ " + reason : "⚠ " + reason;
      bookBtn.hidden = false;

      // Pre-fill form service based on verdict
      var contactForm = document.getElementById("book-form");
      if (contactForm) {
        var svc = ready ? "Solar install" : "Roof check";
        var radio = contactForm.querySelector("input[name='service'][value='" + svc + "']");
        if (radio) radio.checked = true;
      }
    }

    form.addEventListener("change", evaluate);
  }

  /* ── Panel count tool ─────────────────────────────────────── */
  function initPanelCount() {
    var section = document.querySelector("[data-hook='panel-count']");
    if (!section) return;
    var facesSelect = section.querySelector("[data-pc-faces]");
    var shadeSelect = section.querySelector("[data-pc-shade]");
    var rangeOut = section.querySelector("[data-pc-range]");
    var sendBtn = section.querySelector("[data-pc-send]");
    var svgFaces = section.querySelectorAll(".pf");
    if (!facesSelect || !shadeSelect || !rangeOut) return;

    var ranges = {
      full:    { 1: "14 – 18", 2: "20 – 26", 3: "26 – 32", 4: "30 – 36" },
      partial: { 1: "12 – 16", 2: "18 – 24", 3: "24 – 30", 4: "28 – 34" },
      heavy:   { 1: "10 – 14", 2: "14 – 20", 3: "20 – 26", 4: "24 – 30" }
    };

    function update() {
      var faces = parseInt(facesSelect.value, 10);
      var shade = shadeSelect.value;
      var table = ranges[shade] || ranges.partial;
      var range = table[faces] || "18 – 24";
      rangeOut.textContent = range + " panels";

      // Light up active faces in SVG
      svgFaces.forEach(function (g) {
        var f = parseInt(g.getAttribute("data-face"), 10);
        if (f <= faces) g.classList.add("is-active");
        else g.classList.remove("is-active");
      });

      // Pre-fill form note
      var noteField = document.querySelector("#book-form textarea[name='note']");
      if (noteField && sendBtn) {
        sendBtn.addEventListener("click", function () {
          noteField.value = "Panel estimate: " + range + " panels, " + shade + " shade, " + faces + " face(s).";
        }, { once: true });
      }
    }

    facesSelect.addEventListener("change", update);
    shadeSelect.addEventListener("change", update);
    update();
  }

  /* ── Multi-step form ──────────────────────────────────────── */
  function initForm() {
    var form = document.getElementById("book-form");
    if (!form) return;
    var steps = form.querySelectorAll(".form-step");
    var done = form.querySelector("[data-form-done]");

    form.querySelectorAll("[data-next]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = btn.closest(".form-step");
        var nextStep = current.nextElementSibling;
        if (nextStep && nextStep.classList.contains("form-step")) {
          current.hidden = true;
          nextStep.hidden = false;
        }
      });
    });

    form.querySelectorAll("[data-back]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = btn.closest(".form-step");
        var prevStep = current.previousElementSibling;
        if (prevStep && prevStep.classList.contains("form-step")) {
          current.hidden = true;
          prevStep.hidden = false;
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      steps.forEach(function (s) { s.hidden = true; });
      if (done) done.hidden = false;
    });
  }

  /* ── ZIP checker ──────────────────────────────────────────── */
  function initZip() {
    var zipForm = document.querySelector(".zip-check");
    if (!zipForm) return;
    var input = zipForm.querySelector(".zip-check__input");
    var result = zipForm.querySelector("[data-zip-result]");
    if (!input || !result) return;

    // Zips from facts.json embedded at build time via token
    var validZips = "{{biz.zips|csv}}".split(",");

    zipForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = input.value.trim();
      if (validZips.indexOf(val) !== -1) {
        result.textContent = "✓ You're in our area. Book a roof check.";
        result.setAttribute("data-state", "ok");
      } else if (/^\d{5}$/.test(val)) {
        result.textContent = "Outside our area. Call {{biz.phone}} to ask.";
        result.setAttribute("data-state", "no");
      } else {
        result.textContent = "Enter a 5-digit ZIP.";
        result.setAttribute("data-state", "err");
      }
    });
  }

  /* ── Init all ─────────────────────────────────────────────── */
  function init() {
    initSignature();
    initInstallStory();
    initMountStory();
    initQuiz();
    initPanelCount();
    initForm();
    initZip();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Refresh ScrollTrigger after fonts load
  if (document.fonts && document.fonts.ready && typeof ScrollTrigger !== "undefined") {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();