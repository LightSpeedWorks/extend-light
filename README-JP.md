[extend-light](https://www.npmjs.org/package/extend-light) - npm
====

[English version](README.md#readme)

[extend-light](https://www.npmjs.org/package/extend-light)はJavaScriptのクラスを定義します。<br/>
これはJavaScriptのクラスを単純に定義する機能を提供するシンプルなモジュールです。

簡単に使えて、簡単に継承できます。<br/>

難しいキーワードは全く必要ありません。<br/>
`prototype`も、`__proto__`も、<br/>
`Object.defineProperty`も、`Object.setPrototypeOf`も、等も不要です。<br/>
`constructor`だけ必要です。

Google Chrome, Mozilla Firefox, Microsoft ie11/10/9/8/7/6 と Node.js/io.js をサポートします。

# インストール:

[![NPM](https://nodei.co/npm/extend-light.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/extend-light/)
[![NPM](https://nodei.co/npm-dl/extend-light.png?height=2)](https://nodei.co/npm/extend-light/)

```bash
$ npm install extend-light
```

または

http://lightspeedworks.github.io/extend-light/extend-light.js

```html
<script src="http://lightspeedworks.github.io/extend-light/extend-light.js"></script>
```

# 使い方:

```js
var extend = require('extend-light');
```

## メソッド: [BaseClass].extend([proto], [staticProps])

  基底クラスを継承した新しいクラス(コンストラクタ関数)を定義します。

### 形式

```js
var YourClass = extend([proto], [staticProps]);
var YourSubClass = YourClass.extend([proto], [staticProps]);
```

### パラメータ

  + **BaseClass**: 継承のための基底クラスまたはスーパークラス
  + **proto**: 新しいクラスのプロトタイプオブジェクト (省略可)
    + **constructor** または **new**: コンストラクタ関数 (省略可)
    + **any methods**: メソッドまたはメンバー関数 (省略可)
    + **statics**: クラス／静的プロパティのオブジェクト (省略可)
      + **any methods**: メソッドまたはメンバー関数 (省略可)
  + **staticProps**: クラス／静的プロパティのオブジェクト (省略可)
    + **any methods**: 静的メソッドまたはクラス関数 (省略可)

  ※**proto**を省略した場合**staticProps**も省略する必要がある<br/>
  ※**staticProps**を指定したい場合、省略したい**proto**の部分は`{}`と指定すると良い

### 返り値

  新しく定義されたクラス(コンストラクタ関数)。(新しいクラスは基底クラスのサブクラス)

### 詳細

  簡単なサンプル:

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

# 使用例:

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

# 参考:

## [base-class-extend](https://www.npmjs.org/package/base-class-extend) - npm
## [get-constructors](https://www.npmjs.org/package/get-constructors) - npm

# ライセンス:

  MIT
