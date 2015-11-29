// ES6時代の継承
class Animal {
	constructor(name) {
		this.name = name;
	}
	introduce() {
		console.log('Hello, my name is ' + this.name + '.');
		this.constructor.introduce();
	}
	static introduce() {
		if ('AIUEO'.indexOf(this.name[0]) >= 0)
			console.log('I am an ' + this.name + '.');
		else
			console.log('I am a ' + this.name + '.');
	}
}

class Horse extends Animal {}
var a1 = new Animal('Annie');
a1.introduce();
Animal.introduce();

var h1 = new Horse('Deep Impact');
h1.introduce();
Horse.introduce();
