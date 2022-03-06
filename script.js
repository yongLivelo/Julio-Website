"use strict";

const navLinks = document.querySelector(".nav__links");

navLinks.addEventListener("click", (e) => {
  if (e.target.dataset.part) {
    e.preventDefault();
    const target = document.querySelector(`.${e.target.dataset.part}`);
    target.scrollIntoView({ behavior: "smooth" });
  }
});
