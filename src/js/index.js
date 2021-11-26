import Tooltip from "bootstrap/js/dist/tooltip";
import AOS from "aos";

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

// Tooltips
const socialLinks = document.getElementsByClassName("socials__link");
for (let i = 0; i < socialLinks.length; i++) {
  new Tooltip(socialLinks[i], {
    placement: "bottom",
  });
}
