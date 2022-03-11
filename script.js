"use strict";

const navLinks = document.querySelector(".nav__links");

navLinks.addEventListener("click", (e) => {
  if (e.target.dataset.part) {
    e.preventDefault();
    const target = document.querySelector(`.${e.target.dataset.part}`);
    const y = target.getBoundingClientRect().top + window.scrollY - 30;
    window.scrollTo({ behavior: "smooth", top: y });
    console.log(y);
  }
});
