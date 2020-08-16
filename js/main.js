'use strict';

$(document).ready(function() {
	var itemClassName = "carousel__photo",
	items = document.getElementsByClassName(itemClassName),
	totalItems = items.length,
	slide = 0,
	moving = true;

	// Set up classes for each item
	function setInitialClasses() {
		items[0].classList.add("active");
	}

	// move to the next slide in the carousel
	function moveNext() {
		// Get the old previous item
		var prev = items[slide];
		var oldPrev;

		// Case 1: At first image
		if (slide == 0) {
			oldPrev = items[totalItems-1]
			slide++;
		} else if (slide == totalItems-1) { // Case 2: at the last image
			oldPrev = items[slide-1];
			slide = 0;
		} else {
			oldPrev = items[slide-1];
			slide++;
		}
		// update new slide
		var newSlide = items[slide];


		newSlide.className = itemClassName + " active";
		prev.className = itemClassName + " prev";
		oldPrev.className = itemClassName;
	}

	function transition() {
		moveNext()
		setTimeout(function() {
			transition()
		}, 5000);
	}

	setInitialClasses()
	transition()
})