const searchBtn = document.querySelector(".mobile-search");
const burgerBtn = document.querySelector(".mobile-menu");
const burgerPool = document.querySelector(".mobile-menu-burger");
const icon = document.querySelector(".mobile-menu .fas");
const searchPool = document.querySelector(".mobile-search-active");

searchBtn.addEventListener("click", function() {
  searchPool.classList.toggle("active");
});

burgerBtn.addEventListener("click", function() {
  burgerPool.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  if (burgerPool.className.includes("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});
