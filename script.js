"use strict";

// resizing the logo

const logoEl = document.querySelector(".logo");
const sectionHeroEl = document.querySelector(".section-hero");
const logoHelper = document.createElement(`div`);
sectionHeroEl.before(logoHelper);

const obsLogo = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(1);

    console.log(entry);
    if (entry.isIntersecting === true) logoEl.classList.remove("logo-small");

    if (entry.isIntersecting === false) logoEl.classList.add("logo-small");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);

obsLogo.observe(logoHelper);

// show/hide modal window

const openModalEl = document.querySelector(".open-modal");
const modalWindowEl = document.querySelector(".the-how");
const modalCloseBtn = document.querySelector(".close-modal");
const backdropEl = document.querySelector(".backdrop");

openModalEl.addEventListener("click", function (e) {
  e.preventDefault();
  modalWindowEl.classList.remove("hidden");
});

modalCloseBtn.addEventListener("click", function () {
  modalWindowEl.classList.add("hidden");
});
backdropEl.addEventListener("click", function () {
  modalWindowEl.classList.add("hidden");
});
window.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  modalWindowEl.classList.add("hidden");
});
