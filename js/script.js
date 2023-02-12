"use strict"


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

//search form clickable btn
let search_form = document.getElementById("search_form");
search_form.querySelector(".section__submit img").addEventListener("click", e => {
	console.log( 'submit form')
	search_form.submit();
});