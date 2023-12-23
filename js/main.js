document.addEventListener("DOMContentLoaded", function () {
	// remove active class from nav link when hovering over other nav links
	const headerNav = document.getElementById("header-nav");
	const activeLink = headerNav.querySelector(".nav-link.active");
	const navLinks = headerNav.querySelectorAll(".nav-link");

	navLinks.forEach(function (link) {
		link.addEventListener("mouseover", function () {
			if (activeLink) {
				activeLink.classList.remove("active");
			}
		});

		link.addEventListener("mouseout", function () {
			if (activeLink && !headerNav.querySelector(".nav-link:hover")) {
				activeLink.classList.add("active");
			}
		});
	});

	headerNav.addEventListener("mouseleave", function () {
		if (activeLink) {
			activeLink.classList.add("active");
		}
	});

	// Select all card-title elements
	document.querySelectorAll(".card-title").forEach(function (cardTitle) {
		// The second h5 element contains the percentage
		let percentageElement = cardTitle.querySelectorAll("h5")[1];
		if (percentageElement) {
			let percentageText = percentageElement.textContent.trim();
			let percentage = parseInt(percentageText);

			if (!isNaN(percentage)) {
				// Find the progress bar associated with this card-title
				let progressBar =
					cardTitle.nextElementSibling.querySelector(".progress-bar");
				if (progressBar) {
					progressBar.style.width = percentageText;
					progressBar.setAttribute("aria-valuenow", percentage);
				}
			}
		}
	});
});

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scrollToTopBtn").style.display = "block";
	} else {
		document.getElementById("scrollToTopBtn").style.display = "none";
	}

	// when user clicks button scroll to the top of the page
	document
		.getElementById("scrollToTopBtn")
		.addEventListener("click", function () {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});
}
