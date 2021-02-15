function Book(title, author, volume, price) {
	this.title = title;
	this.author = author;
	this.volume = volume;
	this.price = price;
}

var book1 = new Book(
	"Hands-On AWS Penetration Testing with Kali Linux",
	"PackT",
	"1234",
	"28,000"
);
var book2 = new Book("Mastering AWS Security", "PackT", "5678", "16,000");
var book3 = new Book(
	"Security Best Practices on AWS",
	"PackT",
	"12345678",
	"18,800"
);

var bookList = [book1, book2, book3];

document.write("<h1>Awesome AWS Security</h1>");
for (var i = 0; i < bookList.length; i++) {
	document.write("<p>" + bookList[i].title + "</p>");
}
