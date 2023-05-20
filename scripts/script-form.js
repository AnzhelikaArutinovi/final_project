"use strict";
// Sign-up form validation
let formELement = document.getElementById("registration-form");

formELement.addEventListener("submit", function (event) {
	event.preventDefault();
	let errors = {};

	// Username Validation
	let username = document.getElementById("username-field").value;
	if (username == "" || username.length < 10) {
		errors.username =
			"Username can not be empty and must be more then 10 characters";
	}

	//password
	let password1 = document.getElementById("password-field1").value;
	let password2 = document.getElementById("password-field2").value;

	if (password1 == "") {
		errors.password = "Password can not be empty";
	}

	if (password1 != password2) {
		errors.password2 =
			"The password and confirmation password do not match.";
	}

	// checkbox
	let checkAgree = document.getElementById("agree").checked;

	if (!checkAgree) {
		errors.agree = "Please accept Terms & Conditions";
	}

	document.querySelectorAll(".error-text").forEach((element) => {
		element.textContent = " ";
	});

	for (let item in errors) {
		console.log(item);

		let errorText = document.getElementById("error-" + item);
		if (errorText) {
			errorText.innerText = errors[item];
		}
	}

	if (Object.keys(errors).length == 0) {
		formELement.submit();
	}
});

// Email Validation for sign-up form
let emailField = document.getElementById("emailField");

emailField.addEventListener("keyup", function () {
	let emailFieldValue = document.getElementById("emailField").value;
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let textEmail = document.getElementById("error-email");

	if (emailFieldValue.match(regex)) {
		textEmail.innerText = "Your email is valid";
		emailField.style.border = "2px solid green";
		document.getElementById("error-email").classList.add("green-valid");
	} else {
		textEmail.innerText = "Your email is invalid";
		emailField.style.border = "2px solid red";
		document.getElementById("error-email").classList.remove("green-valid");
	}

	if (emailFieldValue == "") {
		textEmail.innerText = " ";
	}
});

//Hide Password
let passwordField = document.getElementById("password-field1");
let eyeIcon = document.getElementById("eyeIcon");

eyeIcon.addEventListener("click", function () {
	if (passwordField.type == "password") {
		passwordField.setAttribute("type", "text");
		eyeIcon.classList.remove("fa-eye");
		eyeIcon.classList.add("fa-eye-slash");
	} else {
		passwordField.setAttribute("type", "password");
		eyeIcon.classList.remove("fa-eye-slash");
		eyeIcon.classList.add("fa-eye");
	}
});
