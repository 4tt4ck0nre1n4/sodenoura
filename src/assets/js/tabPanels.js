"use strict";

const tabs = document.querySelectorAll('.js-tab__item');

document.addEventListener('DOMContentLoaded', function () {

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetID = '#' + this.getAttribute('aria-controls');
      const tabPanels = document.querySelectorAll('.js-tab__panel');

      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('aria-expanded', 'false');
      });

      this.setAttribute('aria-selected', 'true');
      this.setAttribute('aria-expanded', 'true');

      tabPanels.forEach(function (tabPanel) {
        tabPanel.setAttribute('aria-hidden', 'true');
      });

      const targetPanel = document.querySelector(targetID);

      if (targetPanel) {
        targetPanel.setAttribute('aria-hidden', 'false');
      }
    });
  });
});
