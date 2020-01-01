console.log("*** learning prototypes ***");

const x = {};
const y = { a: 1, b: 2, c: {} };
const z = {
  toString: function() {
    console.log("hello first found method called 'toString()");
  }
};

y.toString(); // if we run on the console: [object Object]
z.toString(); // hello first found method called 'toString()

let myArray = [];
//
//
//
let person = { name: "Meh" };
let objectBase = Object.getPrototypeOf(person); // pull up all the members of the __proto__ in that object
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

function Circle(radius) {
  this.radius = radius;
  // this.draw = function() {
  //   console.log("drawn");
  // };
  this.move = function() {
    console.log("move");
  };

  Object.defineProperty(this, "radius", {
    writable: false,
    enumerable: false,
    configurable: false
  });
}

const circle = new Circle(3);

// constructor prototypes

// below have the same output:
console.log(circle); // after we look into '__proto__' of circle we can see that it has the constructor from Circle Object (circleBase)
console.log("getPrototypeOf(circle):", Object.getPrototypeOf(circle)); // these/this are the parent object of circle
console.log("__proto__ for circle  :", circle.__proto__); // we only use '__proto__' in browser developer tools
// above and below reference same object in memory
console.log("Circle.prototype      :", Circle.prototype);

//

Circle.prototype.draw = function() {
  this.move(); // we can also reference the move method here in our prototype method
  console.log("drawn");
};

// we can refer to more accessible property called 'toString', rather than refering to members in the above object parent, objectBase
Circle.prototype.toString = function() {
  console.log("Circle with radius " + this.radius);
};

const c1 = new Circle(1);
const c2 = new Circle(2);