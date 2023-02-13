"use strict"


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

let parent_menu_items = menu.querySelectorAll( ".menu-item-has-children" )

parent_menu_items.forEach(item => {
	item.addEventListener('click', event => event.target.classList.toggle( "active" ) )
});


//search form clickable btn
let search_form = document.getElementById("search_form");
search_form.querySelector(".section__submit img").addEventListener("click", e => {
	console.log( 'submit form')
	search_form.submit();
});