const navLinks = document.querySelectorAll('.navigation__link');
const navToggle = document.querySelector('#navi-toggle');

navLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		navToggle.checked = false;
	});
});

const popup = document.querySelector('#popup');
const popupContent = document.querySelector('.popup__content');

popup.addEventListener('click', function () {
	window.location.hash = '#section-tours';
});

$(document).ready(function () {
	$('a').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				1000,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});
