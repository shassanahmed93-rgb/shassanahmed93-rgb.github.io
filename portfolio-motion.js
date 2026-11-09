(() => {
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches) return;
  document.documentElement.classList.add("motion-on");
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("motion-enter");
      observer.unobserve(entry.target);
    }
  }, {threshold:.12});
  document.querySelectorAll(".h, .journey article, .project-card, .lab-banner, .cert, .skills .card, .co, .edu .card, .contact, .lab, .evidence, .grid > .card")
    .forEach((item, index) => {
      item.style.setProperty("--enter-delay", (index % 3) * 32 + "ms");
      observer.observe(item);
    });
})();
