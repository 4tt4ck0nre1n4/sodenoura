"use strict";

// スマホサイズ
// headerスクロールしたら変化(logo, color, background-color)

const sp_rootElement = document.getElementById("js-header__logo");
const rootMarginTop = (1 - 184 / window.innerHeight) * -100 + "%";
const sp_header = document.getElementById("js-header");
const sp_obsElement = document.getElementById("js-fv");

const line = document.getElementById("js-hamburger__line");
const text = document.getElementById("js-hamburger__text");

const sp_options = {
  root: null,
  rootMargin: rootMarginTop + "0% -160px 0%",
  threshold: 0,
};

const sp_observer = new IntersectionObserver(sp_callback, sp_options);

function sp_callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (window.innerWidth < 480) {
        sp_rootElement.classList.remove("is_scrolled");
        sp_rootElement.classList.add("is_stayed");
        sp_header.classList.remove("is_changed");

        line.classList.remove("change_color");
        text.classList.remove("change_color");
      }

    } else {
      if (window.innerWidth < 480) {
        sp_rootElement.classList.add("is_scrolled");
        sp_rootElement.classList.remove("is_stayed");
        sp_header.classList.add("is_changed");

        line.classList.add("change_color");
        text.classList.add("change_color");
      }
    }
  });
}

sp_observer.observe(sp_obsElement);
