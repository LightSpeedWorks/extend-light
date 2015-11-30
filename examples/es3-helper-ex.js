// ES3時代の継承
void function () {
	'use strict';

	// Animal
	var Animal = extend('Animal', {
		constructor: function Animal (name) {
			this.name = name;
		},
		introduce: function introduce() {
			console.log('Hello, my name is ' + this.name + '.');
			this.constructor.introduce();
		}
	},
	{
		introduce: function introduce() {
			console.log('I am ' +
				('AIUEO'.indexOf(this.name[0]) >= 0 ? 'an ' : 'a ') +
				this.name + '.');
		}
	});

	// Horse
	var Horse = Animal.extend('Horse', {
		constructor: function Horse() {
			Animal.apply(this, arguments);
		}
	});

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

	function extend(name, proto, statics) {
		var super_ = this || null;
		var ctor = proto.constructor;

		function SuperClass() { this.constructor = ctor; }
		if (super_) SuperClass.prototype = super_.prototype;
		ctor.prototype = new SuperClass();

		for (var p in proto) if (!ctor.prototype.hasOwnProperty(p)) ctor.prototype[p] = proto[p];
		for (var p in statics) if (!ctor.hasOwnProperty(p)) ctor[p] = statics[p];
		for (var p in super_) if (!ctor.hasOwnProperty(p)) ctor[p] = super_[p];
		if (ctor.extend !== extend) ctor.extend = extend;

		try { ctor.name = name; } catch (e) {}
		return ctor;
	}

	function assert(bool, msg) { if (!bool) throw new Error(msg); }

}();
