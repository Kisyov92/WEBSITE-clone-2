"use strict";

const logoEl = document.querySelector(".logo");
const sectionHeroEl = document.querySelector(".section-hero");
const logoHelper = document.createElement(`div`);
sectionHeroEl.before(logoHelper);

const obsLogo = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(1);

    console.log(entry);
    if (entry.isIntersecting === true) logoEl.classList.add("logo-big");

    if (entry.isIntersecting === false) logoEl.classList.remove("logo-big");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);

obsLogo.observe(logoHelper);
