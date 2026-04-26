const basePostsPerPage = 8;
let currentPage = 1;
let posts = [];
let filteredPosts = [];
let activeTag = "All";

function getPostsColumns() {
  const container = document.getElementById("posts-container");
  if (!container) return 1;
  const style = window.getComputedStyle(container);
  const cols = style.gridTemplateColumns ? style.gridTemplateColumns.split(" ").filter(Boolean).length : 1;
  return Math.max(1, cols || 1);
}

function getPostsPerPage() {
  const cols = getPostsColumns();
  return Math.ceil(basePostsPerPage / cols) * cols;
}

function adjustPageForPerPageChange(prevPerPage, nextPerPage) {
  if (!prevPerPage || prevPerPage === nextPerPage) return;
  const firstIndex = (currentPage - 1) * prevPerPage;
  currentPage = Math.floor(firstIndex / nextPerPage) + 1;
}

function normalizeTag(tag) {
  return String(tag || "").trim();
}

async function loadJson(path) {
  const res = await fetch(path, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return await res.json();
}

function isHome() {
  return Boolean(document.getElementById("posts-container"));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = String(value);
}

function uniqueTags(items) {
  const set = new Set();
  items.forEach((p) => (p.tags || []).forEach((t) => set.add(normalizeTag(t))));
  return Array.from(set).filter(Boolean).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function renderPosts() {
  const container = document.getElementById("posts-container");
  if (!container) return;
  container.innerHTML = "";

  const postsPerPage = getPostsPerPage();
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const pagePosts = filteredPosts.slice(start, end);

  pagePosts.forEach((post) => {
    const el = document.createElement("div");
    el.className = "post";
    const tags = Array.isArray(post.tags) ? post.tags : [];
    const badgesHtml = tags
      .slice(0, 4)
      .map((t) => `<span class="badge-pill">${t}</span>`)
      .join("");
    const duration = post.duration ? String(post.duration) : null;
    el.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="post-content">
        <h2>${post.title}</h2>
        <div class="post-sub">
          <p class="date">${post.date}</p>
          ${duration ? `<p class="duration">Carga horária: <strong>${duration}</strong></p>` : ""}
        </div>
        ${badgesHtml ? `<div class="badges">${badgesHtml}</div>` : ""}
        <p>${post.description}</p>
        <a class="read-more" href="${post.link}">Leia mais</a>
      </div>
    `;
    el.addEventListener("click", () => (document.location = `${post.link}`));
    container.appendChild(el);
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;
  pagination.innerHTML = "";

  const postsPerPage = getPostsPerPage();
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderPosts();

      const postsSection = document.getElementById("posts");
      const header = document.querySelector(".site-header");
      const headerOffset = header ? header.offsetHeight : 0;

      if (postsSection) {
        const top = postsSection.getBoundingClientRect().top + window.pageYOffset - headerOffset - 12;
        window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
      }
    });
    pagination.appendChild(btn);
  }
}

function setupSearch() {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    applyFilters(query);
    currentPage = 1;
    renderPosts();
  });
}

function applyFilters(query) {
  const q = String(query || "").toLowerCase();
  filteredPosts = posts.filter((post) => {
    const matchesQuery = post.title.toLowerCase().includes(q) || post.description.toLowerCase().includes(q);
    const matchesTag = activeTag === "All" ? true : (post.tags || []).includes(activeTag);
    return matchesQuery && matchesTag;
  });
}

function renderTagFilters() {
  const wrap = document.getElementById("filters");
  if (!wrap) return;

  const tags = uniqueTags(posts);
  if (tags.length === 0) {
    wrap.innerHTML = "";
    return;
  }

  const allTags = ["All", ...tags];
  wrap.innerHTML = "";

  allTags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = tag === "All" ? "Todos" : tag;
    if (tag === activeTag) btn.classList.add("active");
    btn.addEventListener("click", () => {
      activeTag = tag;
      const searchInput = document.getElementById("search");
      const q = searchInput ? searchInput.value : "";
      applyFilters(q);
      currentPage = 1;
      renderTagFilters();
      renderPosts();
    });
    wrap.appendChild(btn);
  });
}

function renderCards(targetId, items, mapItem) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = "";

  items.slice(0, 6).forEach((item) => {
    el.appendChild(mapItem(item));
  });
}

function cardLink(item) {
  const a = document.createElement("a");
  a.className = "card-item";
  a.href = item.link || "#";
  if (String(item.link || "").startsWith("http")) {
    a.target = "_blank";
    a.rel = "noreferrer";
  }

  a.innerHTML = `
    <div class="card-item-title">${item.title}</div>
    <p class="card-item-desc">${item.description || ""}</p>
    ${item.meta ? `<div class="card-item-meta">${item.meta}</div>` : ""}
  `;

  return a;
}

function pathCard(item) {
  const a = cardLink({
    title: item.title,
    description: item.description,
    meta: item.level,
    link: `./paths/index.html#${item.id}`,
  });
  return a;
}

function courseCard(item) {
  return cardLink({
    title: item.title,
    description: item.description,
    meta: item.hours,
    link: item.link || "./courses/index.html",
  });
}

function statCounts(paths, courses) {
  setText("stat-posts", posts.length);
  setText("stat-paths", paths.length);
  setText("stat-courses", courses.length);
}

async function initHome() {
  if (!isHome()) return;

  const [postsData, pathsData, coursesData, resourcesData, sponsorsData] = await Promise.all([
    loadJson("./data/posts.json"),
    loadJson("./data/paths.json"),
    loadJson("./data/courses.json"),
    loadJson("./data/resources.json"),
    loadJson("./data/sponsors.json"),
  ]);

  posts = postsData;
  filteredPosts = postsData.slice();

  setupSearch();
  renderTagFilters();
  renderPosts();

  renderCards("paths-container", pathsData, pathCard);
  renderCards("courses-container", coursesData, courseCard);
  renderCards("resources-container", resourcesData, (i) => cardLink(i));
  renderCards("sponsors-container", sponsorsData, (i) => cardLink(i));

  statCounts(pathsData, coursesData);

  let prevPerPage = getPostsPerPage();
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      const nextPerPage = getPostsPerPage();
      adjustPageForPerPageChange(prevPerPage, nextPerPage);
      prevPerPage = nextPerPage;
      renderPosts();
    }, 100);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHome().catch((err) => {
    // Fail silently on the page; console helps during dev.
    console.error(err);
  });
});
