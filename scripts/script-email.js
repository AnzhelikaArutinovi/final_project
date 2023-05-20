"use strict";
// Email Validation for Subscribe
let emailInput = document.getElementById("email-input");

emailInput.addEventListener("keyup", function () {
	let emailInputValue = document.getElementById("email-input").value;
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let textEmailInput = document.getElementById("email-error");

	if (emailInputValue.match(regex)) {
		textEmailInput.innerText = "Your email is valid";
		emailInput.style.borderBottom = "2px solid green";
		document.getElementById("email-error").classList.add("green-valid");
	} else {
		textEmailInput.innerText = "Your email is invalid";
		emailInput.style.borderBottom = "2px solid red";
		document.getElementById("email-error").classList.remove("green-valid");
	}

	if (emailInputValue == "") {
		textEmailInput.innerText = " ";
	}
});

// Email Validation for Request form - contact us

let emailSubscription = document.getElementById("email-subscription");

emailSubscription.addEventListener("keyup", function () {
	let emailSubscriptionValue =
		document.getElementById("email-subscription").value;
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let emailError = document.getElementById("error-email-subscribe");

	if (emailSubscriptionValue.match(regex)) {
		emailError.innerText = "Your email is valid";
		document
			.getElementById("error-email-subscribe")
			.classList.add("green-valid");
	} else {
		emailError.innerText = "Your email is invalid";
		document
			.getElementById("error-email-subscribe")
			.classList.remove("green-valid");
	}

	if (emailSubscription == "") {
		emailError.innerText = " ";
	}
});