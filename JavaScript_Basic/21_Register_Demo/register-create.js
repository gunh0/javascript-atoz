function newRegister() {
	var newP = document.createElement("p"); // Create a new <p> element
	var userName = document.querySelector("#userName");
	var newText = document.createTextNode(userName.value); // Create a new text node
	newP.appendChild(newText); // Append the text node as a child of the <p> element

	var delBttn = document.createElement("span"); // Create a new <span> element
	var delText = document.createTextNode("X"); // Create a new text node
	delBttn.setAttribute("class", "del"); // Set class attribute for the button
	delBttn.appendChild(delText); // Append the text node as a child of the <span> element
	newP.appendChild(delBttn); // Append the delete button as a child of the <p> element

	var nameList = document.querySelector("#nameList");
	nameList.insertBefore(newP, nameList.childNodes[0]); // Add the <p> element to the beginning of #nameList
	// nameList.appendChild(newP); // Append the <p> element as a child of #nameList
	userName.value = ""; // Clear the text field

	var removeBttns = document.querySelectorAll(".del");

	for (var i = 0; i < removeBttns.length; i++) {
		// Iterate over all elements in removeBttns
		removeBttns[i].addEventListener("click", function () {
			// Declare a function to be executed when the ith button is clicked
			if (this.parentNode.parentNode)
				// If the parent node of the current node (this) has a parent node, execute
				this.parentNode.parentNode.removeChild(this.parentNode); // Find the 'parent node of the current node's parent node' and remove the 'current node's parent node' (<p> node)
		});
	}
}
