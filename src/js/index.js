import { popper } from "@popperjs/core";
import { Collapse, Tooltip } from "bootstrap";
import AOS from "aos";
import $ from "jquery";

import "../scss/main.scss";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

// Copyright
const date = new Date();
const currentYear = date.getFullYear();

const copy = document.getElementById("copyright");
copy.innerHTML = `&copy;${currentYear}`;

// Navbar
const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;
const pageContent = document.querySelector("main");

const stickyNavbar = () => {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    pageContent.style.paddingTop = `${navbar.offsetHeight}px`;
  } else {
    navbar.classList.remove("sticky");
    pageContent.style.paddingTop = "0";
  }
};

$(document).ready(() => {
  $(window).scroll(() => {
    stickyNavbar();
  });
});

//Tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
});
