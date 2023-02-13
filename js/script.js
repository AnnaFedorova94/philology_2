"use strict"


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

let parent_menu_item = menu.querySelector( ".menu-item-has-children" )

parent_menu_item.addEventListener( 'click', e => {
	e.target.classList.toggle( "active" );
})

//search form clickable btn
let search_form = document.getElementById("search_form");
search_form.querySelector(".section__submit img").addEventListener("click", e => {
	console.log( 'submit form')
	search_form.submit();
});