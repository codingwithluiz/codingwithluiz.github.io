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

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initDarkMode();
  initHamburger();
});
