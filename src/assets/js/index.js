export * from "@js/loading";
export * from "@js/tabPanels";
export * from "@js/flatpickr";
export * from "@js/hamburger";
export * from "@js/modal";
export * from "@js/scroll";
export * from "@js/sp-scroll";

import AOS from "aos";
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', (e) => {
  AOS.init({
    mirror: true,
    duration: 1200,
    disable: function () {
      return window.innerWidth < 480;
    }
  });
});
