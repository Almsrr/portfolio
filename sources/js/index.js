// Copyright date
const date = new Date();
let currentYear = date.getFullYear();

document.getElementById("copyright").innerHTML = "&copy" + currentYear;

// Mobile navbar links button
$(document).ready(function () {
  $("#mobile-btn").on("click", function () {
    $("#links").slideToggle();
  });
});

// Front-end title animation with typed.js
$(document).ready(function () {
  var options = {
    strings: ["frontend", "Front-End </br>Web Developer"],
    typeSpeed: 50,
  };
  var typed = new Typed("#typed", options);
});
