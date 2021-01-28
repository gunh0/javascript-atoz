function newRegister() {
	var newP = document.createElement("p"); // Create a new p element
	var userName = document.querySelector("#userName");
	var newText = document.createTextNode(userName.value); // Create a new text node
	newP.appendChild(newText); // Append the text node to the p element

	var nameList = document.querySelector("#nameList");
	nameList.appendChild(newP); // Append the p element to the #nameList as a child
	userName.value = ""; // Clear the text field
}
