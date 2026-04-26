function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initDarkMode() {
  const toggle = document.getElementById("darkModeToggle");
  if (!toggle) return;

  function setDarkMode(enabled) {
    document.body.classList.toggle("dark-mode", enabled);
    toggle.textContent = enabled ? "🌞" : "🌙";
    localStorage.setItem("darkMode", enabled ? "true" : "false");
  }

  const darkPref = localStorage.getItem("darkMode") === "true";
  setDarkMode(darkPref);

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initDarkMode();
});

