const nav = document.querySelector(".nav");
const icon = document.querySelector("#menu-icon");

icon.onclick = () => {
  icon.classList.toggle("bx-x");
  nav.classList.toggle("open");
};
