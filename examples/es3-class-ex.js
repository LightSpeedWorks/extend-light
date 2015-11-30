// ES3時代の継承
void function () {
	'use strict';

	// Animal
	try { Animal.name = 'Animal'; } catch (e) {} // for old IE
	function Animal (name) {
		this.name = name;
	}
	Animal.prototype.introduce = function introduce() {
		console.log('Hello, my name is ' + this.name + '.');
		this.constructor.introduce();
	}
	Animal.introduce = function introduce() {
		console.log('I am ' +
			('AIUEO'.indexOf(this.name[0]) >= 0 ? 'an ' : 'a ') +
			this.name + '.');
	}

	// Horse
	try { Horse.name = 'Horse'; } catch (e) {} // for old IE
	function Horse() {
		Animal.apply(this, arguments);
	}
	function SuperClass(ctor) { this.constructor = ctor; }
	SuperClass.prototype = Animal.prototype;
	Horse.prototype = new SuperClass(Horse);
	for (var p in Animal) if (!Horse.hasOwnProperty(p)) Horse[p] = Animal[p];

	var a1 = new Animal('Annie');
	a1.introduce();
	Animal.introduce();

	var h1 = new Horse('Deep Impact');
	h1.introduce();
	Horse.introduce();

}();
