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
    let touch;
    const autoplay = slider.querySelector("[data-autoplay]");
    const narration = slider.querySelector("[data-narration]");
    const requested = autoplay ? new URLSearchParams(location.search).get("project") : null;
    const linkedIndex = requested && /^\d+$/.test(requested) ? Number(requested) - 1 : -1;
    const validLink = linkedIndex >= 0 && linkedIndex < projects.length;
    let running = Boolean(autoplay && !reduced.matches && !validLink);
    const share = make("a", "Link to this project", "slide-share");
    let finished = false;
    let phase = 0;
    let playback;
    let steps;
    let revealMedia;
    const durations = [4500, 3800, 3800, 3800, 5000];
    function paint() {
      if (!autoplay) return;
      const project = projects[index];
      for (const [i, step] of [...steps.children].entries()) {
        if (i + 1 === phase) step.setAttribute("aria-current", "step");
        else step.removeAttribute("aria-current");
      }
      if (revealMedia) revealMedia(Math.min(project.media.length - 1, Math.max(0, phase - 1)));
      narration.textContent = finished ? "Presentation complete. Replay or choose a project to review." : [
        "Purpose · " + project.summary,
        "Journey · " + project.frames[0],
        "Feature · " + project.frames[1],
        "Outcome · " + project.frames[2],
        "Evidence · " + project.proof
      ][phase];
      autoplay.textContent = finished ? "Replay presentation" : running ? "Pause presentation" : "Play presentation";
    }
    function schedule() {
      clearTimeout(playback);
      if (!running || document.hidden) return;
      playback = setTimeout(() => {
        if (phase < durations.length - 1) {
          phase++;
          paint();
          schedule();
        } else if (index < projects.length - 1) {
          show(index + 1);
        } else {
          running = false;
          finished = true;
          paint();
        }
      }, durations[phase]);
    }
    function navigate(target) {
      running = false;
      finished = false;
      show(target);
      paint();
      schedule();
    }
    function show(target, animate = true) {
      const newIndex = Math.max(0, Math.min(projects.length - 1, target));
      if (animate && newIndex === index) return;
      const direction = newIndex > index ? 1 : -1;
      index = newIndex;
      phase = 0;
      revealMedia = undefined;
      animation?.cancel();
      animation = undefined;
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
        let selectedImage = -1;
        function selectImage(i) {
          if (i === selectedImage) return;
          selectedImage = i;
          const media = project.media[i];
          image.hidden = false;
          image.src = media.url;
          image.alt = project.title + " — " + media.label;
          mediaLabel.textContent = media.label;
        }
        image.addEventListener("error", () => { image.hidden = true; mediaLabel.textContent = "Workflow preview"; });
        selectImage(0);
        revealMedia = selectImage;
        const frame = make("div", "", "slide-media-frame");
        frame.append(image);
        visual.append(frame, mediaLabel);
        if (hasGallery) {
          const controls = make("div", "", "slide-actions");
          project.media.forEach((media, i) => {
            const button = make("button", String(i + 1));
            button.type = "button";
            button.setAttribute("aria-label", media.label);
            button.addEventListener("click", () => {
              running = false;
              schedule();
              if (autoplay) autoplay.textContent = "Play presentation";
              selectImage(i);
            });
            controls.append(button);
          });
          visual.append(controls);
        }
      }
      visual.append(make("strong", project.proof, "evidence-title"));
      const list = make("ol", "", "walkthrough-steps");
      project.frames.forEach(frame => list.append(make("li", frame)));
      visual.append(list);
      steps = list;
      if (project.output) {
        const output = make("details");
        output.append(make("summary", "See sample output"), make("pre", project.output));
        visual.append(output);
      }
      panel.append(copy, visual);
      viewport.replaceChildren(panel);
      share.href = "/presentation/?project=" + (index + 1);
      actions.append(share);
      if (animate && !reduced.matches && panel.animate) {
        animation = panel.animate([{transform:"translate3d(" + direction * 18 + "px,0,0)", opacity:.72},{transform:"translate3d(0,0,0)", opacity:1}], {duration:190,easing:"cubic-bezier(.2,.75,.3,1)"});
      }
      status.textContent = (index + 1) + " / " + projects.length;
      picker.value = index;
      prev.disabled = index === 0;
      next.disabled = index === projects.length - 1;
      paint();
      schedule();
    }
    prev.addEventListener("click", () => navigate(index - 1));
    next.addEventListener("click", () => navigate(index + 1));
    picker.addEventListener("change", () => navigate(Number(picker.value)));
    slider.addEventListener("keydown", event => {
      if (event.target === picker || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = {ArrowLeft:index-1, ArrowRight:index+1, Home:0, End:projects.length-1}[event.key];
      if (!Number.isInteger(target)) return;
      event.preventDefault();
      navigate(target);
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
      if (Math.abs(x) > 55 && Math.abs(x) > Math.abs(y) * 1.5) navigate(index + (x < 0 ? 1 : -1));
    }, {passive:true});
    viewport.addEventListener("touchcancel", () => { touch = undefined; });
    if (autoplay) {
      autoplay.addEventListener("click", () => {
        if (finished) {
          finished = false;
          running = true;
          show(0, false);
          return;
        }
        running = !running;
        paint();
        schedule();
      });
      viewport.addEventListener("focusin", () => {
        if (!running) return;
        running = false;
        paint();
        schedule();
      });
      reduced.addEventListener?.("change", () => {
        if (!reduced.matches) return;
        animation?.cancel();
        running = false;
        paint();
        schedule();
      });
      document.addEventListener("visibilitychange", schedule);
    }
    show(validLink ? linkedIndex : 0, false);
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