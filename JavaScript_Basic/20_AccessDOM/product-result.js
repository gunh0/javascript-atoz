var isOpen = false;
var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (i = 0; i < smallPics.length; i++) {
	// Add a click event listener to each element in 'smallPics'.
	// When an element is clicked, update the 'src' attribute of 'bigPic' with the clicked image's source.
	smallPics[i].addEventListener("click", function () {
		newPic = this.src;
		bigPic.setAttribute("src", newPic);
	});
}

// Select an element with the id 'view' and assign it to the variable 'view'.
view.addEventListener("click", function () {
	// If the variable 'isOpen' is false, display the element with the id 'detail' and update the link text to 'Close Details'.
	// Otherwise, hide the element with the id 'detail' and update the link text to 'View Details'.
	if (isOpen == false) {
		document.querySelector("#detail").style.display = "block";
		view.innerHTML = "Close Details";
		isOpen = true;
	} else {
		document.querySelector("#detail").style.display = "none";
		view.innerHTML = "View Details";
		isOpen = false;
	}
});

// The code above adds a click event listener to an element with the id 'view'.
// When this element is clicked, the code checks the value of the variable 'isOpen'.
// If it is false, the code displays an element with the id 'detail' and updates the link text to 'Close Details'.
// If it is true, the code hides the element with the id 'detail' and updates the link text to 'View Details'.
// Additionally, the code adds a click event listener to each element with the class 'small',
// which updates the 'src' attribute of an element with the id 'cup' with the clicked image's source.
