const button = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

button.addEventListener("click", function () {
    menu.classList.toggle("show");
});