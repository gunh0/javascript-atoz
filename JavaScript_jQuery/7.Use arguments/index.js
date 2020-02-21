function myFunc() {
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            console.log("Arg. no." + (
                i + 1
            ) + " is " + arguments[i]);
        }
    }
}

myFunc(10, 20, 30, 40, 50);
