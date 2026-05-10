console.log("site.js: initializing...");

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initDarkMode() {
  const toggle = document.getElementById("darkModeToggle");
  if (!toggle) return;

  // Dark mode is the default; light-mode is opt-in
  function setDarkMode(enabled) {
    document.body.classList.toggle("light-mode", !enabled);
    toggle.textContent = enabled ? "🌙" : "🌞";
    localStorage.setItem("darkMode", enabled ? "true" : "false");
  }

  // Default: dark (null → true; explicit "false" → light)
  const stored = localStorage.getItem("darkMode");
  const isDark = stored === null ? true : stored !== "false";
  setDarkMode(isDark);

  toggle.addEventListener("click", () => {
    const currentlyDark = !document.body.classList.contains("light-mode");
    setDarkMode(!currentlyDark);
  });
}

function initHamburger() {
  const btn    = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("nav-drawer");
  if (!btn || !drawer) return;

  function openDrawer() {
    btn.classList.add("open");
    drawer.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    btn.classList.remove("open");
    drawer.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => {
    const isOpen = btn.classList.contains("open");
    isOpen ? closeDrawer() : openDrawer();
  });

  // Close when a link inside the drawer is clicked
  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      btn.classList.contains("open") &&
      !drawer.contains(e.target) &&
      !btn.contains(e.target)
    ) {
      closeDrawer();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.classList.contains("open")) {
      closeDrawer();
      btn.focus();
    }
  });
}

async function loadComponents() {
  // Infer BASE by looking at the script tag for site.js
  let base = './';
  
  // Try to find the site.js script tag to determine relative path
  const scriptTag = document.querySelector('script[src*="site.js"]');
  if (scriptTag) {
    let src = scriptTag.getAttribute('src');
    // Strip query string (e.g. ?v=1.1)
    src = src.split('?')[0];
    base = src.replace('site.js', '');
  }

  console.log("site.js: base path inferred as:", base);

  // Fetch Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    try {
      const res = await fetch(base + 'header.html');
      if (res.ok) {
        let html = await res.text();
        html = html.replace(/\{\{BASE\}\}/g, base);
        headerPlaceholder.outerHTML = html;
      }
    } catch (e) {
      console.error('Failed to load header:', e);
    }
  }

  // Fetch Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    try {
      const res = await fetch(base + 'footer.html');
      if (res.ok) {
        let html = await res.text();
        html = html.replace(/\{\{BASE\}\}/g, base);
        footerPlaceholder.outerHTML = html;
      }
    } catch (e) {
      console.error('Failed to load footer:', e);
    }
  }

  // Set active link in nav
  document.querySelectorAll('.nav-links a, .nav-drawer a, .footer-nav a').forEach(link => {
    // If link href matches the current URL (ignoring hash)
    if (link.href.split('#')[0] === window.location.href.split('#')[0] && window.location.pathname !== '/') {
      link.setAttribute('aria-current', 'page');
    } else if (window.location.pathname.endsWith('/') && link.href.endsWith('/')) {
      // Special check for root path
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log("site.js: DOMContentLoaded - loading components...");
  await loadComponents();
  console.log("site.js: components loaded - initializing features...");
  initYear();
  initDarkMode();
  initHamburger();
});
