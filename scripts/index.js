// Copyright date
const date = new Date();
let currentYear = date.getFullYear();

window.onload = function () {
  document.getElementById("copyright").innerHTML = "&copy" + currentYear;
};

// Front-end title animation with typed.js
// $(document).ready(function () {
//   var options = {
//     strings: ["frontend", "Front-End </br>Web Developer"],
//     typeSpeed: 50,
//   };
//   var typed = new Typed("#typed", options);
// });

var bodyWrapper = document.getElementById("body-wrapper");

var burgerBtn = bodyWrapper.getElementsByClassName("burger-btn")[0];
var contentWrapper = bodyWrapper.getElementsByClassName("content-wrapper")[0];

burgerBtn.addEventListener(
  "click",
  function () {
    bodyWrapper.classList.toggle("navigation");
  },
  false
);
