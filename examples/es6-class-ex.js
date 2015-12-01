// ES6時代の継承
void function () {
	'use strict';

	// Animal
	class Animal {
		constructor(name) {
			this.name = name;
		}
		introduce() {
			console.log('Hello, my name is ' + this.name + '.');
			this.constructor.introduce();
		}
		static introduce() {
			console.log('I am one of ' + this.name + '.');
		}
	}

	// Horse
	class Horse extends Animal {}

	var a1 = new Animal('Annie');
	a1.introduce();
	Animal.introduce();
	assert(Animal.name === 'Animal', 'Animal.name != "Animal"');
	assert(a1.constructor.name === 'Animal', 'a1.constructor.name != "Animal"');
	assert(a1.name === 'Annie', 'a1.name != "Annie"');

	var h1 = new Horse('Deep Impact');
	h1.introduce();
	Horse.introduce();
	assert(Horse.name === 'Horse', 'Horse.name != "Horse"');
	assert(h1.constructor.name === 'Horse', 'h1.constructor.name != "Horse"');
	assert(h1.name === 'Deep Impact', 'h1.name != "Deep Impact"');

	// assert
	function assert(bool, msg) { if (!bool) throw new Error(msg); }

}();
