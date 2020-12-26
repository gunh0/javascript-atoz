const http = require("http");

http.createServer((req, res) => {
	res.write("<h1>Hello Node!</h1>");
	res.end("<p>Hello Server!</p>");
}).listen(8080, () => {
	console.log("waiting for connection...");
});
