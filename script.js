"use strict";
// Burger logic
let burgerWraper = document.querySelector(".burger-wraper");

burgerWraper.addEventListener("click", function () {
	let divOverlay = document.querySelector(".overlay");
	let headerWraper = document.querySelector(".header-wraper");
	let burgerLines = document.querySelectorAll(".burger-line");
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
	document.body.classList.toggle("body-hidden");
});

// Accordion
let accordionContainer = document.querySelectorAll(".question-container");

accordionContainer.forEach(function (item) {
	item.addEventListener("click", function () {
		this.classList.toggle("active");
	});
});
