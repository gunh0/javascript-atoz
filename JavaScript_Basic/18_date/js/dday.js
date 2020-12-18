var now = new Date();
var firstDay = new Date("2021-01-01");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
document.querySelector("#accent").innerText = passedDay + " Days (from 2021-01-01)";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
	var future = toFirst + days * (1000 * 60 * 60 * 24);
	var someday = new Date(future);
	var year = someday.getFullYear();
	var month = someday.getMonth() + 1;
	var date = someday.getDate();
	document.querySelector("#date" + days).innerText =
		year + "-" + month + "-" + date;
}
