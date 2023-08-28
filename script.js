window.onload = function () {
	["p", "h1", "h2", "li"].forEach((tag) => {
		document.querySelectorAll(`body ${tag}`).forEach((el) => {
			if (
				!el.closest("#footer") &&
				!el.closest("#hero-title") &&
				!el.closest(".cv-button")
			) {
				el.innerHTML = el.textContent
					.split(" ")
					.map((word) => `<span>${word} </span>`)
					.join("");
			}
		});
	});
};
