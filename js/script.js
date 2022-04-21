const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-link');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const linksDropDown = document.querySelector('.links-dropdown');
const links = document.querySelector('.links');
const addIcon = document.querySelector('.add');
const removeIcon = document.querySelector('.remove');


function toggleMenu() {
	if (menu.classList.contains('show-menu')) {
		menu.classList.remove('show-menu');
		closeIcon.style.display = 'none';
		menuIcon.style.display = 'block';
		links.classList.remove('show-links');
		addIcon.style.display = 'block';
		removeIcon.style.display = 'none';
	} else {
		menu.classList.add('show-menu');
		closeIcon.style.display = 'block';
		menuIcon.style.display = 'none';
	}
}

function toggleLinks() {
	if (links.classList.contains('show-links')) {
		links.classList.remove('show-links');
		addIcon.style.display = 'block';
		removeIcon.style.display = 'none';
	} else {
		links.classList.add('show-links');
		addIcon.style.display = 'none';
		removeIcon.style.display = 'block';
	}
}

linksDropDown.addEventListener('click', toggleLinks);

hamburger.addEventListener('click', toggleMenu);