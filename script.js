(() => {
  const root = document.documentElement;
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  const themeBtn = document.getElementById("theme-toggle");
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  // Theme: use light by default and remember an explicit visitor choice.
  const effectiveTheme = () => root.dataset.theme || "light";

  const paintTheme = () => {
    const dark = effectiveTheme() === "dark";
    metas.forEach((m) => { m.content = dark ? "#0a0a0a" : "#ffffff"; });
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  };

  themeBtn.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (_) {}
    paintTheme();
  });

  paintTheme();

  // Mobile menu.
  const setMenu = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    root.classList.toggle("menu-open", open);
  };

  menuBtn.addEventListener("click", () => {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuBtn.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (root.classList.contains("menu-open") && !e.target.closest(".site-header")) setMenu(false);
  });

  window.matchMedia("(min-width: 1000px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  // One focus synchronizes the A&M experience and project views.
  // Without JavaScript all versions remain readable and the controls stay hidden.
  const practiceButtons = document.querySelectorAll("[data-practice-select]");
  const practicePanels = document.querySelectorAll("[data-practice-panel]");
  const selectPractice = (practice) => {
    practiceButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.practiceSelect === practice));
    });
    practicePanels.forEach((panel) => {
      panel.hidden = panel.dataset.practicePanel !== practice;
    });
  };

  practiceButtons.forEach((button) => {
    button.addEventListener("click", () => selectPractice(button.dataset.practiceSelect));
  });
  selectPractice("response");
  document.querySelectorAll(".practice-switch, .practice-help").forEach((group) => { group.hidden = false; });

  // Footer year.
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
