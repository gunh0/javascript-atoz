![image](https://user-images.githubusercontent.com/41619898/74381187-57663680-4e2e-11ea-8aeb-d8caad115e3a.png)

&nbsp;

# JavaScript

![image](https://user-images.githubusercontent.com/41619898/81765659-62a12f00-950f-11ea-973b-cf3a871653c9.png)

JavaScript language is based on prototypes.

All objects in JavaScript inherit their properties and methods from their prototype.

Every object that has been created using an object literal or with a new object will inherit from the object prototype.

Those objects that have been created using a new date will inherit the date prototype.

At the top of the chain is the object prototype.

JavaScript is allocation-based, which means that every object of JavaScript has a prototype chain.

If, for instance, you are trying to gain access to a property on an object and you are not getting that property, the program can look at the object’s prototype to give you what you are looking for.

In this case, the prototype is acting as a delegate object, whereby it delegates the property lookup to the prototype object.

The search can go on until it gets to the root prototype, which is now the object prototype.

This is what makes it easy to reuse codes in JavaScript programming and it also conserves memory.

&nbsp;

### Closures & Lambdas

This is one of the most important things every JavaScript web developer should know because closures and lambdas help substantially in successful app development.

Whenever you export a function, you create a closure.

This happens automatically therefore every time you create a callback function or you return a function for another function, you should know that you have already created a closure.

These closures are significant because they provide state for objects and they can also be used for asynchronous programming.

Closures are therefore important in JavaScript because most APIs that require a callback function do not provide other instruments through which they can send the parameters to those callback functions.

&nbsp;

### Express & Node.js

![image](https://user-images.githubusercontent.com/41619898/81766089-5ff30980-9510-11ea-989d-7d73c9bfbf69.png)

- `Express` is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- `Node.js` is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.