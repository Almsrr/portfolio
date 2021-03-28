const nav = document.querySelector("nav");
const navTop = nav.offsetTop;

window.addEventListener("scroll", function (e) {
  // console.log({ windowScrollY: window.scrollY, navTop });
  if (window.scrollY > navTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
