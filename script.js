"use strict";
// Burger logic
let burgerWraper = document.querySelector(".burger-wraper");

burgerWraper.addEventListener("click", function () {
	let divOverlay = document.querySelector(".overlay");
	let headerWraper = document.querySelector(".header-wraper");
	let burgerLines = document.querySelectorAll(".burger-line");
	let headerNav = document.querySelector(".navigation");
	let headerBtns = document.querySelector(".header-buttons");

    window.scrollTo({
        top: 0,
    });
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

// change navbar background color when scroll
let headerNav = document.querySelector(".fixed-header");

window.addEventListener('scroll', function (e) {
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight)
 headerNav.classList.add("scroll");
    else
        headerNav.classList.remove("scroll");
});

// Accordion
let accordionContainer = document.querySelectorAll(".question-container");

accordionContainer.forEach(function (item) {
	item.addEventListener("click", function () {
		this.classList.toggle("active");
	});
});

// Team Member Info
let teamMember = 0;
let memberName = document.getElementById("member-name");
let memberPosition = document.getElementById("member-position");
let memberImg = document.getElementById("member-img");
let memberEmail = document.getElementById("member-email");
let btnPrevious = document.getElementById("previous-member");
let btnNext = document.getElementById("next-member");
let totalMembers;
// list fo Team Member positions:
const memberPositionList = [
	"CEO",
	"Digital Marketing Strategist",
	"Head of Business Development",
	"Graphic Designer",
	"Senior UX/UI Designer",
	"Senior Front-end Developer",
];

function getMemberInfo() {
	fetch("https://reqres.in/api/users?page=1", { method: "GET" })
		.then(function (response) {
			if (response.status !== 200) {
				throw error;
			}
			return response.json();
		})
		.then(function (responseJS) {
			totalMembers = responseJS.data.length;
			memberName.innerText = "";
			memberName.innerText = `${responseJS.data[teamMember].first_name} ${responseJS.data[teamMember].last_name}`;
			console.log(teamMember);
			memberImg.setAttribute("src", "");
			memberImg.setAttribute("src", responseJS.data[teamMember].avatar);
			memberEmail.setAttribute(
				"href",
				"mailto:" + responseJS.data[teamMember].email
			);
			memberPosition.innerText = "";
			memberPosition.innerText = memberPositionList[teamMember];
		})
		.catch(function (error) {
			memberName.innerText = "error";
		});
}
getMemberInfo();

btnNext.addEventListener("click", function () {
	if (teamMember == totalMembers - 1) {
		teamMember = 0;
		return getMemberInfo();
	}
	teamMember += 1;
	return getMemberInfo();
});
btnPrevious.addEventListener("click", function () {
	if (teamMember == 0) {
		teamMember = totalMembers - 1;
		return getMemberInfo();
	}
	teamMember -= 1;
	return getMemberInfo();
});

// Team Member Quote
let quoteNumber = 0;
let memberQuote = document.getElementById("member-quote");
let quotesList;

function getMemberQuote() {
	fetch("https://jsonplaceholder.typicode.com/comments", { method: "GET" })
		.then(function (response) {
			if (response.status !== 200) {
				throw error;
			}
			return response.json();
		})
		.then(function (responseJS) {
			quotesList = responseJS.slice(0, 6);
			memberQuote.innerText = "";
			memberQuote.innerText = quotesList[quoteNumber].body;
		})
		.catch(function (error) {
			memberName.innerText = "error";
		});
}
getMemberQuote();

btnNext.addEventListener("click", function () {
	if (quoteNumber == quotesList.length - 1) {
		quoteNumber = 0;
		return getMemberQuote();
	}
	quoteNumber += 1;
	return getMemberQuote();
});
btnPrevious.addEventListener("click", function () {
	if (quoteNumber == 0) {
		quoteNumber = quotesList.length - 1;
		return getMemberQuote();
	}
	quoteNumber -= 1;
	return getMemberQuote();
});
