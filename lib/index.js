"use strict";

window.onscroll = function () {
  KeepNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function KeepNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
