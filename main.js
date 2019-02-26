const searchBtn = document.querySelector(".mobile-search");
const burgerBtn = document.querySelector(".mobile-menu");
const burgerPool = document.querySelector(".mobile-menu-burger");
const searchPool = document.querySelector(".mobile-search-active");

searchBtn.addEventListener("click", function() {
  searchPool.classList.toggle("active");
});

burgerBtn.addEventListener("click", function() {
  burgerPool.classList.toggle("active");
});
