const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-link');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const linksDropDown = document.querySelector('.links-dropdown');
const links = document.querySelector('.links');


function toggleMenu() {
	if (menu.classList.contains('show-menu')) {
		menu.classList.remove('show-menu');
		closeIcon.style.display = 'none';
		menuIcon.style.display = 'block';
	} else {
		menu.classList.add('show-menu');
		closeIcon.style.display = 'block';
		menuIcon.style.display = 'none';
	}
}

function toggleLinks() {
	if (links.classList.contains('show-links')) {
		links.classList.remove('show-links');
	} else {
		links.classList.add('show-links');
	}
}

linksDropDown.addEventListener('click', toggleLinks);

hamburger.addEventListener('click', toggleMenu);