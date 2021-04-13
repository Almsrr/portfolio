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

const date = new Date();
let currentYear = date.getFullYear();

document.getElementById("copyright").innerHTML = "&copy" + currentYear;
// console.log(actualYear);

function myFunction() {
  var links = document.getElementById("links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
