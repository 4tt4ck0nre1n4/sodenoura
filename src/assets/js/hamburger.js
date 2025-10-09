"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('js-button__hamburger');
  const glNav =document.getElementById('js-global__nav');
  const focusTrap = document.getElementById('js-focus__trap');
  const glNavLinks = document.querySelectorAll('#js-global__nav .header__menu_link');
  const overlay = document.getElementById('js-hamburger__overlay');
  let isExpanded = false;
  let position;

  hamburgerButton.addEventListener('click', function () {
    isExpanded = !isExpanded;
    hamburgerButton.setAttribute('aria-expanded', isExpanded);
    glNav.setAttribute('aria-hidden', !isExpanded);

    if (isExpanded) {
      position = window.scrollY;
      document.body.classList.add('js-fixed');
      document.body.style.top = -position + 'px';
      overlay.classList.add('nav_open');
    } else {
      document.body.classList.remove('js-fixed');
      document.body.style.top = 'auto';
      window.scrollTo(0, position);
      overlay.classList.remove('nav_open');
    }
  });

  focusTrap.addEventListener('focus', function () {
    hamburgerButton.focus();
  });

  glNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if(window.innerWidth <= 480) {
        hamburgerButton.click();
      }
    });
  });

  overlay.addEventListener('click', function () {
    hamburgerButton.click();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hamburgerButton.click();
    }
  });
});
