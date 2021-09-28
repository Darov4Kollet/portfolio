"use strict";


document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');
	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 1) + window.scrollY; //!Находим центр окна (window.innerHeight / 2)
		console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};

	scrollAnimation();
	window.addEventListener('scroll', () => {
		const scrollItems = 4;
		scrollAnimation();
	});
});

