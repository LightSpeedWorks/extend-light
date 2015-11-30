// ES6時代の継承
void function () {
	'use strict';

	class Animal {
		constructor(name) {
			this.name = name;
		}
		introduce() {
			console.log('Hello, my name is ' + this.name + '.');
			this.constructor.introduce();
		}
		static introduce() {
			console.log('I am ' +
				('AIUEO'.indexOf(this.name[0]) >= 0 ? 'an ' : 'a ') +
				this.name + '.');
		}
	}

	class Horse extends Animal {}

	var a1 = new Animal('Annie');
	a1.introduce();
	Animal.introduce();

	var h1 = new Horse('Deep Impact');
	h1.introduce();
	Horse.introduce();

}();
