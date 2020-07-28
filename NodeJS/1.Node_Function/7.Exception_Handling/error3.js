process.on('uncaughtException', (err) => {
    console.error('Unexpected Error', err);
});

setInterval(() => {
    throw new Error('Server Error!');
}, 1000);

setTimeout(() => {
    console.log('Running...');
}, 2000);