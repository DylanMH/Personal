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
	// Change the progress bar width and aria-valuenow attribute when the page loads to custom values
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

// display the scroll to top button when the user scrolls down 20px from the top of the document
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

// swap the card-titles for experience section when screen size is less than 768px to match the order of the cards on mobile
function updateCardTitles() {
	const experienceSection = document.getElementById("experience");
	if (!experienceSection) return; // Exit if the experience section is not found

	const cardTitles = experienceSection.querySelectorAll(".card-title");
	cardTitles.forEach(function (cardTitle) {
		const parts = cardTitle.innerHTML.split(" - ");
		if (window.innerWidth < 768) {
			// Ensure there are two parts before swapping
			if (parts.length === 2) {
				cardTitle.innerHTML = `${parts[1]} - ${parts[0]}`;
			}
		} else {
			// Restore original order (assuming the second part exists)
			cardTitle.innerHTML = `${
				parts[1] ? parts[0] + " - " + parts[1] : parts[0]
			}`;
		}
	});
}

window.onresize = updateCardTitles;
window.onload = updateCardTitles; // Ensure correct text on page load
