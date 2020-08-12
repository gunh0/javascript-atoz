# express-generator

###### https://www.npmjs.com/package/express-generator

<br/>

## Installation

```bash
$ npm install -g express-generator
```

<br/>

## Quick Start

```bash
$ express learn-express --view=pug

$ cd learn-express && npm i

$ npm start

# check http://localhost:3000/
# check http://localhost:3000/users
```

<br/>

![image-20210121061509308](README.assets/image-20210121061509308.png)

<br/>

<br/>

# pug

### Getting Started

#### Installation

Pug is available via npm:

```bash
$ npm install pug
```

<br/>

#### Overview

The general rendering process of Pug is simple.

`pug.compile()` will compile the Pug source code into a JavaScript function that takes a data object (called “`locals`”) as an argument.

Call that resultant function with your data, and *voilà!*, it will return a string of HTML rendered with your data.

The compiled function can be re-used, and called with different sets of data.

```javascript
//- template.pug
p #{name}'s Pug source code!
const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

// Render a set of data
console.log(compiledFunction({
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  name: 'Forbes'
}));
// "<p>Forbes's Pug source code!</p>"
```

Pug also provides the `pug.render()` family of functions that combine compiling and rendering into one step.

However, the template function will be re-compiled every time `render` is called, which might impact performance.

Alternatively, you can use the `cache` option with `render`, which will automatically store the compiled function into an internal cache.

```javascript
const pug = require('pug');

// Compile template.pug, and render a set of data
console.log(pug.renderFile('template.pug', {
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"
```

<br/>

###### https://pugjs.org/api/getting-started.html