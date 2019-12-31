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
  this.draw = function() {
    console.log("drawn");
  };

  Object.defineProperty(this, "radius", {
    writable: false,
    enumerable: false,
    configurable: false
  });
}

const circle = new Circle(3);

console.log(circle); // af  ter we look into '__proto__' of circle we can see that it has the constructor from Circle Object

// constructor prototypes
