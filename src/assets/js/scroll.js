"use strict";

// headerスクロールしたら変化(logo, color, background-color)

const rootElement = document.getElementById("js-header__logo");
const rootMarginBottom = (1 - (56 / window.innerHeight)) * -100 + "%";
const header = document.getElementById("js-header");
const obsElement = document.getElementById("js-fv");

const options = {
  root: null,
  rootMargin: "-16px 0% " + rootMarginBottom + " 0%",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (window.innerWidth > 480) {
        rootElement.classList.remove("is_scrolled");
        rootElement.classList.add("is_stayed");
        header.classList.remove("is_changed");
      }

    } else if (window.innerWidth > 480) {
      rootElement.classList.add("is_scrolled");
      rootElement.classList.remove("is_stayed");
      header.classList.add("is_changed");
    }
  });
};

observer.observe(obsElement);
