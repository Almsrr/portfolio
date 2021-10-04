import bootstrap from "bootstrap";
import AOS from "aos";

import "../scss/main.scss";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

const date = new Date();
const currentYear = date.getFullYear();

const copy = document.getElementById("copyright");
copy.innerHTML = `&copy;${currentYear}`;
