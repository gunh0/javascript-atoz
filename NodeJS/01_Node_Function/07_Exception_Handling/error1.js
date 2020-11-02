setInterval(() => {
    console.log('start');
    try {
        throw new Error('Sever Error!');
    } catch (err) {
        console.error(err);
    }
}, 1000);