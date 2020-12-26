const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
	console.log(x + y);
}, "DEPRECATED : Used typically in reference to a computer language to mean a command or statement in the language that is going to be made invalid or obsolete in future versions.");
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
	.then((buf) => {
		console.log(buf.toString("base64"));
	})
	.catch((error) => {
		console.error(error);
	});
