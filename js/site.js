/**
 * Prevayl site interactions
 */
(function () {
  const toggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        mobileNav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  const path = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav-desktop a, .mobile-nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const clean = href.replace(/\/$/, "") || "/";
    if (clean === path || (clean !== "/" && path.startsWith(clean))) {
      a.classList.add("active");
    }
  });
})();
