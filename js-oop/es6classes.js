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
  // available on an instance of a class, which is an object
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

const circle1 = new Circle(3);
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
