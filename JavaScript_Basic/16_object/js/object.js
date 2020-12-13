var toyRobot = {
	productId: "123-12",
	name: "Robot",
	price: "25,000",
	madeIn: "Korea",
	quantity: 10,
	showStock: function () {
		document.querySelector("#display").innerHTML =
			this.name +
			" | " +
			this.productId +
			" : " +
			this.quantity +
			" left.";
	},
};

toyRobot.showStock();
