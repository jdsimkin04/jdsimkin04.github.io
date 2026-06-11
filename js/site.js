/* Theme toggle. The pre-paint setter lives inline in each page <head> to
   avoid a flash; this just wires the button and persists the choice. */
(function () {
  function current() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }
  function set(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }
  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      set(current() === "dark" ? "light" : "dark");
    });
  });
})();
