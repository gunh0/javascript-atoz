const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
    console.log(`Master Process ID: ${process.pid}`);

    // produce walkers
    for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }

    // exit walkers
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Walker number ${worker.process.pid} has been terminated.`);
        cluster.fork();
    });
} else {
    // standby
    http.createServer((req, res) => {
        res.write("<h1>Hello Node!</h1>");
        res.end("<p>Hello Cluster!</p>");
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8005);

    console.log(`${process.pid} worker run`);
}
