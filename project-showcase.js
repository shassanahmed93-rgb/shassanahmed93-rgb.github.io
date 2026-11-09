(() => {
  const projects = window.PORTFOLIO_SLIDES;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  function make(tag, text, cls) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }
  function link(text, href) {
    const node = make("a", text);
    node.href = href;
    return node;
  }
  for (const slider of document.querySelectorAll("[data-slider]")) {
    const viewport = slider.querySelector(".slide-track");
    const status = slider.querySelector("[data-status]");
    const prev = slider.querySelector("[data-prev]");
    const next = slider.querySelector("[data-next]");
    const picker = make("select");
    picker.setAttribute("aria-label", "Jump to a project");
    projects.forEach((project, index) => {
      const option = make("option", String(index + 1).padStart(2, "0") + " · " + project.title);
      option.value = index;
      picker.append(option);
    });
    slider.querySelector(".slider-toolbar").append(picker);
    let index = 0;
    let animation;
    let timer;
    let touch;
    function show(target, animate = true) {
      const newIndex = Math.max(0, Math.min(projects.length - 1, target));
      if (animate && newIndex === index) return;
      const direction = newIndex > index ? 1 : -1;
      index = newIndex;
      clearInterval(timer);
      timer = undefined;
      animation?.cancel();
      const project = projects[index];
      const panel = make("article", "", "project-slide");
      const copy = make("div");
      const actions = make("div", "", "slide-actions");
      if (project.url) actions.append(link(project.url.startsWith("/") ? "Open project" : "Read case study", project.url));
      if (project.source) actions.append(link("GitHub ↗", project.source));
      copy.append(make("p", project.label, "slide-kicker"), make("h2", project.title), make("p", project.summary), actions);
      const visual = make("div", "", "slide-visual");
      const hasGallery = project.media?.length > 1;
      if (project.media?.length) {
        const image = make("img");
        image.decoding = "async";
        const mediaLabel = make("p", "", "slide-kicker");
        function selectImage(i) {
          const media = project.media[i];
          image.hidden = false;
          image.src = media.url;
          image.alt = project.title + " — " + media.label;
          mediaLabel.textContent = media.label;
        }
        image.addEventListener("error", () => { image.hidden = true; mediaLabel.textContent = "Workflow preview"; });
        selectImage(0);
        visual.append(image, mediaLabel);
        if (hasGallery) {
          const controls = make("div", "", "slide-actions");
          project.media.forEach((media, i) => {
            const button = make("button", String(i + 1));
            button.type = "button";
            button.setAttribute("aria-label", media.label);
            button.addEventListener("click", () => selectImage(i));
            controls.append(button);
          });
          visual.append(controls);
        }
      }
      visual.append(make("strong", project.proof, "evidence-title"));
      const list = make("ol", "", "walkthrough-steps");
      project.frames.forEach(frame => list.append(make("li", frame)));
      visual.append(list);
      const play = make("button", "Play walkthrough");
      play.type = "button";
      function reset() {
        clearInterval(timer);
        timer = undefined;
        for (const step of list.children) step.removeAttribute("aria-current");
        play.textContent = "Play walkthrough";
      }
      play.addEventListener("click", () => {
        if (timer !== undefined) return reset();
        let step = 0;
        list.children[0].setAttribute("aria-current", "step");
        play.textContent = "Pause walkthrough";
        timer = setInterval(() => {
          list.children[step].removeAttribute("aria-current");
          step++;
          if (step === list.children.length) return reset();
          list.children[step].setAttribute("aria-current", "step");
        }, 1500);
      });
      visual.append(play);
      if (project.output) {
        const output = make("details");
        output.append(make("summary", "See sample output"), make("pre", project.output));
        visual.append(output);
      }
      panel.append(copy, visual);
      viewport.replaceChildren(panel);
      if (animate && !reduced.matches && panel.animate) {
        animation = panel.animate([{transform:"translateX(" + direction * 26 + "px)", opacity:.55},{transform:"translateX(0)", opacity:1}], {duration:220,easing:"cubic-bezier(.2,.7,.3,1)"});
      }
      status.textContent = (index + 1) + " / " + projects.length;
      picker.value = index;
      prev.disabled = index === 0;
      next.disabled = index === projects.length - 1;
    }
    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));
    picker.addEventListener("change", () => show(Number(picker.value)));
    slider.addEventListener("keydown", event => {
      if (event.target === picker || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = {ArrowLeft:index-1, ArrowRight:index+1, Home:0, End:projects.length-1}[event.key];
      if (!Number.isInteger(target)) return;
      event.preventDefault();
      show(target);
    });
    viewport.addEventListener("touchstart", event => {
      const point = event.touches[0];
      touch = {x:point.clientX, y:point.clientY};
    }, {passive:true});
    viewport.addEventListener("touchend", event => {
      if (!touch) return;
      const point = event.changedTouches[0];
      const x = point.clientX - touch.x;
      const y = point.clientY - touch.y;
      touch = undefined;
      if (Math.abs(x) > 55 && Math.abs(x) > Math.abs(y) * 1.5) show(index + (x < 0 ? 1 : -1));
    }, {passive:true});
    viewport.addEventListener("touchcancel", () => { touch = undefined; });
    show(0, false);
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