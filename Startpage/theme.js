try {
  var s = JSON.parse(localStorage.getItem("apothem-startpage-state") || "{}");
  if (s.theme === "light" || (s.theme === "auto" && matchMedia("(prefers-color-scheme: light)").matches)) {
    document.documentElement.classList.add("light-theme");
  }
} catch (e) {}