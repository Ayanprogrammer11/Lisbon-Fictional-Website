// JavaScript to toggle the navbar
const toggleButton = document.querySelector(".toggle-button");
const navItems = document.querySelector(".nav-items");
const links = document.querySelectorAll(".nav-link");
toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.contains("open") && navItems.classList.toggle("open");
  });
});
