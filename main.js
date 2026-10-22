const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (id) => document.getElementById(id);
const list = (items) => `<ul class="bullets">${items.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`;

function render(d) {
  document.title = `${d.firstName} ${d.lastName} | GRC Analyst`;

  $("avatar").innerHTML = d.avatar
    ? `<img src="${esc(d.avatar)}" alt="${esc(d.firstName)} ${esc(d.lastName)}">`
    : `<span>${esc(d.initials)}</span>`;
  $("name").innerHTML = `<span class="first">${esc(d.firstName)}</span><span class="last">${esc(d.lastName)}</span>`;
  $("tagline").textContent = d.tagline;

  const social = [
    [d.linkedin, "fa-brands fa-linkedin-in", "LinkedIn"],
    [d.github, "fa-brands fa-github", "GitHub"],
    [`mailto:${d.email}`, "fa-solid fa-envelope", "Email"],
    [`tel:${d.phone.replace(/\s/g, "")}`, "fa-solid fa-phone", "Phone"],
  ];
  const socialHtml = social
    .map(([href, icon, label]) => `<a href="${esc(href)}" aria-label="${label}" title="${label}" target="_blank" rel="noopener"><i class="${icon}"></i></a>`)
    .join("");
  $("social").innerHTML = socialHtml;
  $("footer-social").innerHTML = socialHtml;

  $("intro-content").innerHTML = `
    ${d.summary.map((p) => `<p>${esc(p)}</p>`).join("")}
    <dl class="facts">
      <div><dt>Location</dt><dd>${esc(d.location)}</dd></div>
      <div><dt>Email</dt><dd><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></dd></div>
      <div><dt>Phone</dt><dd><a href="tel:${esc(d.phone.replace(/\s/g, ""))}">${esc(d.phone)}</a></dd></div>
      <div><dt>Open to</dt><dd>${d.seeking.map(esc).join(" · ")}</dd></div>
    </dl>`;

  $("experience-content").innerHTML = d.experience.map((job) => `
    <article class="entry">
      <div class="entry__meta"><span class="date">${esc(job.dates)}</span><span class="place">${esc(job.location)}</span></div>
      <div class="entry__body">
        <h3>${esc(job.company)}</h3>
        ${job.roles.map((r) => `
          <div class="role">
            <h4>${esc(r.title)}${r.dates ? ` <span class="role__dates">${esc(r.dates)}</span>` : ""}</h4>
            ${list(r.points)}
          </div>`).join("")}
      </div>
    </article>`).join("");

  $("projects-content").innerHTML = d.projects.map((p) => `
    <article class="card">
      <h3><a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.name)} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
      <p class="muted">${esc(p.subtitle)}</p>
      <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      ${list(p.points)}
    </article>`).join("");

  $("certifications-content").innerHTML = `<div class="cert-grid">${d.certifications.map((c) => `
    <div class="cert${c.featured ? " cert--featured" : ""}">
      <i class="fa-solid ${c.featured ? "fa-award" : "fa-certificate"}"></i>
      <div>
        <strong>${esc(c.name)}</strong>
        ${c.issuer ? `<span>${esc(c.issuer)}</span>` : ""}
        ${c.id ? `<code>ID: ${esc(c.id)}</code>` : ""}
      </div>
    </div>`).join("")}</div>`;

  $("skills-content").innerHTML = d.skills.map((s) => `
    <div class="skill-group">
      <h3>${esc(s.group)}</h3>
      <div class="tags">${s.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div>
    </div>`).join("");

  $("education-content").innerHTML = d.education.map((e) => `
    <article class="entry">
      <div class="entry__meta"><span class="date">${esc(e.year)}</span><span class="place">Karachi, Pakistan</span></div>
      <div class="entry__body"><h3>${esc(e.school)}</h3><h4>${esc(e.degree)}</h4></div>
    </article>`).join("");

  $("cv-link").href = d.resumePdf;
  $("footer-name").innerHTML = `${esc(d.firstName)} <span class="last">${esc(d.lastName)}</span>`;
  $("year").textContent = new Date().getFullYear();
}

render(SITE);

// Highlight the nav link for the section in view.
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => io.observe(s));

const toggle = document.querySelector(".nav__toggle");
if (toggle) toggle.addEventListener("click", () => document.body.classList.toggle("nav-open"));
document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
