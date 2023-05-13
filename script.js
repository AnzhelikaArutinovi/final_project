"use strict";

let headerBar = document.querySelector(".burger-wraper");

headerBar.addEventListener("click", function () {
  let divOverlay = document.querySelector(".overlay");
  let headerWraper = document.querySelector(".header-wraper");
  let burgerLines = document.querySelectorAll(".burger-line");
  let burgerWraper = document.querySelector(".burger-wraper");
  let headerNav = document.querySelector(".navigation");
  let headerBtns = document.querySelector(".header-buttons");

  divOverlay.classList.toggle("visible");
  headerWraper.classList.toggle("visible");
  burgerLines.forEach((line) => {
    line.classList.toggle("visible");
  });
  burgerWraper.classList.toggle("visible");
  headerNav.classList.toggle("hidden");
  headerBtns.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});