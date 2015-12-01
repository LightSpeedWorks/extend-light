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
	}, { // static
		introduce: function introduce() {
			console.log('I am one of ' + this.name + '.');
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

	// extend-light
	function extend(name, proto, statics) {
		if (typeof name !== 'string') statics = proto, proto = name;
		var super_ = typeof this === 'function' ? this : null;
		var ctor = proto.constructor;
		function SuperClass() { this.constructor = ctor; }
		if (super_) {
			SuperClass.prototype = super_.prototype;
			ctor.prototype = merge(new SuperClass(), proto);
		} else merge(ctor.prototype, proto);
		if (typeof name === 'string') try { ctor.name = name; } catch (e) {} // for old IE
		return merge(ctor, statics,
			super_ ? {super_: super_} : undefined, super_, {extend: extend});
	}

	// merge-light
	function merge(dst, src) {
		for (var i = 1; src = arguments[i], i < arguments.length; ++i)
			for (var p in src)
				if (src.hasOwnProperty(p) && !dst.hasOwnProperty(p) &&
						dst[p] !== src[p]) dst[p] = src[p];
		return dst;
	}

	// assert
	function assert(bool, msg) { if (!bool) throw new Error(msg); }

}();
