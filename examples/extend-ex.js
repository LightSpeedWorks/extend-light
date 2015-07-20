  module.paths.unshift('..');
  var extend = require('extend-light');

  var util = require('util');
  console.log();
  var Animal = extend({
    constructor: function Animal(name) {
      if (!(this instanceof Animal)) return new Animal(name);
      this.name = name; },
    introduce: function introduce() {
      console.log('My name is', this.name,
        this.constructor.name ? ', one of ' + this.constructor.name : ''); },
  });
  console.log('Animal', util.inspect(Animal));
  console.log('Animal.prototype', Animal.prototype);
  var a1 = new Animal('Annie1');
  console.log('a1', a1);
  a1.introduce();
  var a2 = Animal('Annie2');
  console.log('a2', a2);
  a2.introduce();

  console.log();
  var Bear = Animal.extend(
    {constructor: function Bear(name) {
      if (!(this instanceof Bear)) return new Bear(name);
      Animal.apply(this, arguments); }});
  console.log('Bear', util.inspect(Bear));
  console.log('Bear.prototype', Bear.prototype);
  var b1 = new Bear('Bob1');
  console.log('b1', b1);
  b1.introduce();
  var b2 = Bear('Bob2');
  console.log('b2', b2);
  b2.introduce();

  console.log();
  var Cat = Animal.extend();
  console.log('Cat', util.inspect(Cat));
  console.log('Cat.prototype', Cat.prototype);
  var c1 = new Cat('Cathy1');
  console.log('c1', c1);
  c1.introduce();
  var c2 = Cat('Cathy2');
  console.log('c2', c2);
  c2.introduce();

  console.log();
  var Class1 = extend({
    constructor: function Class1(name) {
      if (!(this instanceof Class1)) return new Class1(name);
      this.name = name; },
    introduce: function introduce() {
      console.log('My name is', this.name,
                  ', one of', this.constructor.name); },
  });
  console.log('Class1', util.inspect(Class1));
  console.log('Class1.prototype', Class1.prototype);
  var c1 = new Class1('Class1');
  console.log('c1', c1);
  c1.introduce();
