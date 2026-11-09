(() => {
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches) return;
  const root = document.documentElement;
  root.classList.add("motion-on");
  const progress = document.createElement("div");
  progress.className = "reading-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.append(progress);
  const journey = document.querySelector("[data-chapter-progress]");
  const scene = document.querySelector(".signal-scene");
  const clamp = value => Math.max(0, Math.min(1, value));
  let pending = false;
  function update() {
    pending = false;
    const distance = root.scrollHeight - innerHeight;
    root.style.setProperty("--read-progress", distance > 0 ? clamp(scrollY / distance) : 0);
    if (journey) {
      const bounds = journey.getBoundingClientRect();
      journey.style.setProperty("--chapter-progress", clamp((innerHeight * .84 - bounds.top) / Math.max(bounds.height, 1)));
    }
    if (scene) scene.style.setProperty("--signal-drift", Math.min(18, scrollY * .045) + "px");
  }
  function queue() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(update);
  }
  addEventListener("scroll", queue, {passive:true});
  addEventListener("resize", queue);
  queue();
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
      item.style.setProperty("--enter-delay", (index % 3) * 65 + "ms");
      observer.observe(item);
    });
})();
