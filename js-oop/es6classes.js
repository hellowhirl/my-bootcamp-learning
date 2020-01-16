// ES6 Classes
//
// JS will be more sensitive with more error checking and change behavior of 'this' keyword in functions
"use strict"; // to enable add this string at the top: 'use strict'
// 'this' will no longer point to 'window' object - it will be set to 'undefined'
// prevents us from bad practice of accidentally modifying the global object

class Circle {
  // body of the class
  // we can define properties and methods

  // special method is 'constructor' which is used to initialize objects
  // properties and methods defined here end up directly on the object instance
  constructor(radius) {
    this.radius = radius;
    // if we don't want a method to end up on the prototype then should define on the constructor
    this.move = function() {
      console.log("moving");
    };
  }

  // Instance Method:
  // available upon an instance of a class, which is an object
  // properties and methods defined outside of constructor will end up on the prototype (Circle)
  // normally we define methods in the body of the class
  draw() {
    console.log("draw"); // this is an Instance Method
  }
  // function draw() {} <---- here we don't put the 'function' keyword here we just add the name of the method, () and {}

  // Static Method:
  // available on the class itself, not the object instance
  // will not be available on a Circle object, i.e. an instance (circle1)
  // this parse method is not tied to any particular Circle object
  static parse(str) {
    const radius = JSON.parse(str).radius; // JSON object here has a 'radius' property
    return new Circle(radius); // new of Circle object with that 'radius' and return it
  }
}

// classes are constructor functions - see below output
console.log("typeof Circle:", typeof Circle); // "function" - look it's a function!

const circle1 = new Circle(1);
console.log("circle1", circle1);

const circle2 = Circle.parse('{ "radius": 4 }'); // not available on a Circle object but it's accessible here on the class reference itself (Circle)
console.log(circle2);

/////////////
// Hositing
/////////////

sayHello();
// sayGoodBye(); // Cannot access 'sayGoodBye' before initialization

// Class Declaration syntax
// not hoisted
function sayHello() {
  console.log("hello");
}

// Class Expression syntax
// not hoisted
class Triangle {} // simpler and cleaner syntax

// Class Declaration syntax
// hoisted
const Square = class {}; // no real life use case for this

// Static Methods
// available on the class itself, not the instance
// we use them to create utility functions that are not specific to a given object

// the draw() method is specific to a Circle object

// Example with Math using es6 classes - if it wasn't a built-in object
class Math2 {
  // we are not working with a particular object
  // here we defining a utility function
  static abs(value) {
    // ...some magic...
  }
}

Math2.abs();

// The 'this' keyword

const Circle2 = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c = new Circle2();
// Method Call - because we are calling a METHOD ON AN OBJECT
c.draw(); // returns 'this' as Circle2 object

const draw = c.draw; // not calling, simply getting a reference to the method
console.log(draw);

// Function Call - calling as a stand-alone function, not part of an object
draw(); // by defaut 'this' will point to 'window' in browser and 'global' in Node

// by default the body of our classes are executed in 'use strict' mode
class Circle3 {
  draw() {
    console.log(this);
  }
}

const c3 = new Circle3();
const draw3 = c3.draw;
console.log(draw3); // undefined

//
// Private Members using Symbols

// Abstraction - to implement we use private properties and methods
const _radius = Symbol(); // a 'Symbol' is a unique identifier for every time we call this function
// we can use this unique value as the property name for an object
// Symbol() is a function we call to generate a Symbol - this is not a constructor function so we CANNOT 'new' it
const _draw = Symbol();

class Circle4 {
  constructor(radius) {
    // this.radius = radius;
    // this._radius = radius; // this is a terrible approach - don't use, because another dev can still access this property
    this[_radius] = radius; // this property is "kind of private" because we can still access using 'Object.getOwnPropertySymbols'
  }
  // Computer Property Names (new in ES6) - add brackets, and inside of them we can add an expression
  // when that expression is evaulated the resulting value will be used as a name of propety or method
  // for '_draw' below we get a unique identifier - and that will be used as name of this method
  [_draw]() {}
}

const c4 = new Circle4(4);

// 3 approaches:
// 1) _underscore property names: bad idea
// 2) using Symbol to implement "kind of" private properties and methods
// 3) setting up a WeakMap for each private member

// WeakMaps:
// a dictionary where keys are objects and values can be anything
// "weak" is because the keys are weak - if there are no reference to these keys they will be garbage collected
// for implementing private properties and methods in an object

const _radius5 = new WeakMap();
const _move = new WeakMap();

class Circle5 {
  constructor(radius) {
    // this.radius = radius; // instead of setting the 'radius' property here, instead we'll work with '_radius5'
    _radius5.set(this, radius); // .set(), first arg is 'key' which  has to be an Object (can't be a Symbol), 2nd is value
    // technically we can access this 'radius' private property if we can access to this WeakMap

    // as opposed to using 'function() {}' syntax as 2nd arg (which will make 'this' be rebounded to 'undefined')
    // if we use an arrow function here then the 'this' value will be inherited from its containing function - in this case the 'constructor'
    _move.set(this, () => {
      console.log("moving", this);
    });
  }

  // public method
  draw() {
    // to read the 'radius' property we can do something like below
    // console.log(_radius5.get(this)); // 1st arg is 'key', which is instance of Circle5 object - this will return value of '_radius'

    _move.get(this)(); // here we are using public method 'draw' to call private method 'move'

    console.log("drawing");
  }
}
//
// setting up one WeakMap for all private members: this syntax is a little polluted
//
const cPrivProps = new CirPrivProps(5);

const privaetProps = new WeakMap();

class CirPrivProps {
  constructor(radius) {
    privaetProps.set(this, {
      radius: radius,
      move: () => {
        console.log("moving", this);
      }
    });

    privaetProps.get(this).radius; // in order to access 'radius' property
  }

  draw() {
    _move.get(this)();

    console.log("drawing");
  }
}

const cPrivProps = new CirPrivProps(5);
