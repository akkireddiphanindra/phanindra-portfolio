
document.addEventListener("DOMContentLoaded", () => {
  // Smoothly navigate to sections when a navigation link is clicked.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });

      history.replaceState(null, "", targetId);
    });
  });

  // Update the footer year automatically, if a year placeholder exists.
  const year = document.querySelector("[data-current-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
