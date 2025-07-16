document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  const iconBoxMobile = document.getElementById("iconBox");
  const iconImgMobile = document.getElementById("iconImg");

  const iconBoxDesktop = document.getElementById("iconBoxDesktop");
  const iconImgDesktop = document.getElementById("iconImgDesktop");

  const moonIcon = "img/moon.svg";
  const sunIcon = "img/sun.svg";

  // Helper: update both icon images
  function updateIcons(isLight) {
    if (iconImgMobile) iconImgMobile.src = isLight ? sunIcon : moonIcon;
    if (iconImgDesktop) iconImgDesktop.src = isLight ? sunIcon : moonIcon;
  }

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    updateIcons(true);
  } else {
    document.body.classList.remove("light-mode");
    updateIcons(false);
  }

  // Theme toggle logic (shared for mobile and desktop)
  function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    updateIcons(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  if (iconBoxMobile) iconBoxMobile.addEventListener("click", toggleTheme);
  if (iconBoxDesktop) iconBoxDesktop.addEventListener("click", toggleTheme);

  // Mobile menu open
  if (menuBtn && menuIcon && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.remove("translate-x-full");
      navLinks.classList.remove("hidden");
    });
  }

  // Mobile menu close
  if (closeMenuBtn && navLinks) {
    closeMenuBtn.addEventListener("click", () => {
      navLinks.classList.add("translate-x-full");
      navLinks.classList.add("hidden");
    });
  }
});
