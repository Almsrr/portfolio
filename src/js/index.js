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
const breakpoint = 768;
let screenResolution = 0;

const stickyNavbar = () => {
  if (screenResolution >= breakpoint) {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
      pageContent.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
      navbar.classList.remove("sticky");
      pageContent.style.paddingTop = "0";
    }
  }
};

const getResolution = () => {
  screenResolution = window.screen.availWidth;
};

$(document).ready(() => {
  $(window).on("resize", () => {
    getResolution();
  });
  $(window).on("scroll", () => {
    stickyNavbar();
  });
});

// Tooltips
const socialLinks = document.getElementsByClassName("social-link");
for (let i = 0; i < socialLinks.length; i++) {
  const tooltip = new Tooltip(socialLinks[i], {
    placement: "bottom",
  });
}
