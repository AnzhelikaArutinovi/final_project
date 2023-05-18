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
				throw response.status;
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
            if (error == 500) {
                document.querySelector(".member-img-div").innerHTML = "";
                document.querySelector(".member-img-div").innerText = "Error: 'GENERIC', 'Something went wrong. Please try again or contact support'";
                document.querySelector(".member-img-div").style.color = "red";}
        if (error == 400) {
            document.querySelector(".member-img-div").innerHTML = "";
            document.querySelector(".member-img-div").innerText = "Error: 'NOT_FOUND', 'The resource you tried to access does not exist.'";
            document.querySelector(".member-img-div").style.color = "red";} 
            else {
                document.querySelector(".member-img-div").innerHTML = "";
            document.querySelector(".member-img-div").innerText = "Error: Something went wrong. Please, refresh the page";
                document.querySelector(".member-img-div").style.color = "red";
            }
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
				throw response.status;
			}
			return response.json();
		})
		.then(function (responseJS) {
			quotesList = responseJS.slice(0, 6);
			memberQuote.innerText = "";
			memberQuote.innerText = quotesList[quoteNumber].body;
		})
		.catch(function (error) {
            if (error == 500) {
                memberQuote.innerText = "";
                memberQuote.innerText = "Error: 'GENERIC', 'Something went wrong. Please try again or contact support'";
                memberQuote.style.color = "red";}
        if (error == 400) {
            memberQuote.innerText= "";
            memberQuote.innerText = "Error: 'NOT_FOUND', 'The resource you tried to access does not exist.'";
            memberQuote.style.color = "red";}
            else {
                memberQuote.innerText = "";
                memberQuote.innerText = "Error: Something went wrong. Please, refresh the page";
                memberQuote.style.color = "red";
            }
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

// Clients Quotes & Info
let clientNumber = 0;
let clientQuote = document.getElementById("client-quote");
let clientName = document.getElementById("client-name")
let clientCompany = document.getElementById("client-company");
let clientQuoteList;
let clientDataList;

function getClientQuote() {
	fetch("https://jsonplaceholder.typicode.com/comments", { method: "GET" })
		.then(function (response) {
			if (response.status !== 200) {
				throw response.status;
			}
			return response.json();
		})
		.then(function (responseJS) {
			clientQuoteList = responseJS.slice(0, 3);
			clientQuote.innerText = "";
			clientQuote.innerText = clientQuoteList[clientNumber].body;
		})
		.catch(function (error) {
            if (error == 500) {
                clientQuote.innerText = "";
                clientQuote.innerText = "Error: 'GENERIC', 'Something went wrong. Please try again or contact support'";
                clientQuote.style.color = "red";}
        if (error == 400) {
            clientQuote.innerText = "";
            clientQuote.innerText = "Error: 'NOT_FOUND', 'The resource you tried to access does not exist.'";
            clientQuote.style.color = "red";}
            else {
                clientQuote.innerText = "";
                clientQuote.innerText = "Error: Something went wrong. Please, refresh the page";
                clientQuote.style.color = "red";
            }
		});
}
getClientQuote();

document.getElementById("btn-right").addEventListener("click", function () {
	if (clientNumber == clientQuoteList.length - 1) {
		clientNumber = 0;
		return getClientQuote();
	}
	clientNumber += 1;
	return getClientQuote();
});
document.getElementById("btn-left").addEventListener("click", function () {
	if (clientNumber == 0) {
		clientNumber = clientQuoteList.length - 1;
		return getClientQuote();
	}
	clientNumber -= 1;
	return getClientQuote();
});

function getClientInfo() {
    fetch("https://jsonplaceholder.typicode.com/users", {method:"GET"})
.then(function (response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.json();
})
.then(function (responseJS) {
    clientDataList = responseJS.slice(0, 3);
    clientName.innerText = "";
    clientCompany.innerText = "";
    clientName.innerText = clientDataList[clientNumber].name;
    clientCompany.innerText = clientDataList[clientNumber].company.name;
})
.catch(function (error) {
    if (error == 500) {
        clientName.innerText = "";
        clientName.innerText = "Error: 'GENERIC', 'Something went wrong. Please try again or contact support'";
        clientName.style.color = "red";}
if (error == 400) {
    clientName.innerText = "";
    clientName.innerText = "Error: 'NOT_FOUND', 'The resource you tried to access does not exist.'";
    clientName.style.color = "red";}
    else {
        clientName.innerText = "";
        clientName.innerText = "Error: Something went wrong. Please, refresh the page";
        clientName.style.color = "red";
    }
});
}
getClientInfo();

document.getElementById("btn-right").addEventListener("click", function () {
	if (clientNumber == clientDataList.length - 1) {
		clientNumber = 0;
		return getClientInfo();
	}
	clientNumber += 1;
	return getClientInfo();
});
document.getElementById("btn-left").addEventListener("click", function () {
	if (clientNumber == 0) {
		clientNumber = clientDataList.length - 1;
		return getClientInfo();
	}
	clientNumber -= 1;
	return getClientInfo();
});

