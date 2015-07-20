[extend-light](https://www.npmjs.org/package/extend-light) - npm
====

[extend-light](https://www.npmjs.org/package/extend-light) defines class in JavaScript.<br/>
This is simple module providing a simple Class function to
simplify class definition in JavaScript.

Easy to use, easy to inherit/extend.<br/>

no difficult keywords,<br/>
no `prototype`, no `__proto__`,<br/>
no `Object.defineProperty`, no `Object.setPrototypeOf`, etc ...<br/>
needs `constructor` only.

Supports Google Chrome, Mozilla Firefox, Microsoft ie11/10/9/8/7/6 and Node.js/io.js.

[Japanese version/■日本語版はこちら■](README-JP.md#readme)

# INSTALL:

[![NPM](https://nodei.co/npm/extend-light.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/extend-light/)
[![NPM](https://nodei.co/npm-dl/extend-light.png?height=2)](https://nodei.co/npm/extend-light/)

```bash
$ npm install extend-light
```

or

http://lightspeedworks.github.io/extend-light/extend-light.js

```html
<script src="http://lightspeedworks.github.io/extend-light/extend-light.js"></script>
```

# USAGE:

```js
var extend = require('extend-light');
```

## method: [BaseClass].extend([proto], [staticProps])

  Define new class (constructor function) that inherited from Base Class.

### Format

```js
var YourClass = extend([proto], [staticProps]);
var YourSubClass = YourClass.extend([proto], [staticProps]);
```

### Parameters

  + **BaseClass**: Base class or Super class for inherits
  + **proto**: the prototype object for your class, optional
    + **constructor** or **new**: constructor function, optional
    + **any methods**: any method or member function, optional
    + **statics**: the object for class or static properties, optional
      + **any methods**: any method or member function, optional
  + **staticProps**: the object for class or static properties, optional
    + **any methods**: any static method or class function, optional

  You have to omit **staticProps** also, if you omit **proto**.<br/>
  You have to specify **proto** or `{}`, if you want to specify **staticProps**.

### Returns

  The newly defined class (constructor function). (Your class is subclass of BaseClass)

### Details

  A simple and quick sample:

```js
var extend = require('extend-light');

var MyClass = extend({
  constructor: function MyClass(value) {
    this.value = value;
  },
  show: function show() {
    console.log(this.value);
  }
});

var myObj = new MyClass(5);
myObj.value++; // 5 -> 6
myObj.show();
myObj.value++; // 6 -> 7
```

# EXAMPLES:

```js
// Animal

// extend
var extend = require('extend-light');

// SimpleClass
var SimpleClass = extend('SimpleClass');
var s1 = new SimpleClass();

// Animal
var Animal = extend({
  constructor: function Animal(name) {
    if (!(this instanceof Animal))
      return new Animal(name);
    this.name = name;
  },
  introduce: function () {
    console.log('My name is ' + this.name);
  }
}, {
  animalClassMethod: function () {
    console.log('Animal class method');
  }
});
var a1 = new Animal('Annie');
a1.introduce(); // -> My name is Annie
Animal.animalClassMethod(); // -> Animal class method

// Bear
var Bear = Animal.extend('Bear');
var b1 = Bear('Pooh'); // new less
b1.introduce(); // -> My name is Pooh

var Cat = Animal.extend({
  constructor: function Cat(name) {
    if (!(this instanceof Cat))
      return new Cat(name);
    Cat.super_.apply(this, arguments);
  }
});
var c1 = new Cat('Kitty');
c1.introduce(); // -> My name is Kitty

var Dog = Animal.extend({
  constructor: function Dog(name) {
    if (!(this instanceof Dog))
      return new Dog(name);
    Dog.super_.apply(this, arguments);
  },
}, {
  init: function () {
    console.log('Dog class init');
  },
  dogClassMethod: function () {
    this.animalClassMethod();
    console.log('Dog class method');
  }
}); // -> Dog init
var d1 = new Dog('Hachi');
d1.introduce(); // -> My name is Hachi
Dog.dogClassMethod(); // -> Animal class method, Dog class method
Dog.animalClassMethod(); // -> Animal class method
```

# SEE ALSO:

## [base-class-extend](https://www.npmjs.org/package/base-class-extend) - npm
## [get-constructors](https://www.npmjs.org/package/get-constructors) - npm

# LICENSE:

  MIT
