(() => {
  const slides = window.PORTFOLIO_SLIDES;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  function element(tag, text, cls) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }
  function anchor(text, url) {
    const node = element("a", text);
    node.href = url;
    return node;
  }
  for (const slider of document.querySelectorAll("[data-slider]")) {
    const track = slider.querySelector(".slide-track");
    const status = slider.querySelector("[data-status]");
    const prev = slider.querySelector("[data-prev]");
    const next = slider.querySelector("[data-next]");
    let index = 0;
    for (const slide of slides) {
      const panel = element("article", "", "project-slide");
      const details = element("div");
      const actions = element("div", "", "slide-actions");
      if (slide.url) actions.append(anchor("Open case", slide.url));
      if (slide.source) actions.append(anchor("GitHub", slide.source));
      details.append(element("p", slide.label, "slide-kicker"), element("h2", slide.title), element("p", slide.summary), actions);
      const visual = element("div", "", "slide-visual");
      if (slide.image) {
        const image = element("img");
        image.alt = "";
        image.loading = "lazy";
        image.src = slide.image;
        visual.append(image);
      }
      visual.append(element("span", "WHAT YOU CAN REVIEW", "slide-kicker"), element("strong", slide.proof));
      panel.append(details, visual);
      track.append(panel);
    }
    function render() {
      const description = (index + 1) + " / " + slides.length + " · " + slides[index].title;
      if (status.textContent !== description) status.textContent = description;
      prev.disabled = index === 0;
      next.disabled = index === slides.length - 1;
    }
    function move(target) {
      const destination = Math.max(0, Math.min(slides.length - 1, target));
      track.scrollTo({left:destination * track.clientWidth, behavior:reducedMotion.matches ? "instant" : "smooth"});
    }
    track.addEventListener("scroll", () => {
      index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / Math.max(1, track.clientWidth))));
      render();
    }, {passive:true});
    prev.addEventListener("click", () => move(index - 1));
    next.addEventListener("click", () => move(index + 1));
    slider.addEventListener("keydown", event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = {ArrowLeft:index-1, ArrowRight:index+1, Home:0, End:slides.length-1}[event.key];
      if (!Number.isInteger(target)) return;
      event.preventDefault();
      move(target);
    });
    render();
  }
  const full = document.querySelector("[data-fullscreen]");
  if (!full || !document.fullscreenEnabled) return;
  full.hidden = false;
  document.addEventListener("fullscreenchange", () => {
    full.textContent = document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen";
  });
  full.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      full.textContent = "Fullscreen unavailable";
    }
  });
})();