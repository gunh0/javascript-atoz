var toyRobot = {
	productId: "123-12",
	name: "Robot",
	price: "25,000",
	madeIn: "Korea",
	quantity: 10,
	showStock: function () {
		document.querySelector("#display").innerHTML =
			"The product " +
			this.name +
			" has the product ID " +
			this.productId +
			"<br/>and the price is " +
			this.price +
			".<br>There are " +
			this.quantity +
			" in stock.";
	},
};

toyRobot.showStock();
