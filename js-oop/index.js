// object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw");
  }
};

circle.draw();

// 2 ways to create an object: factory and constructor functions
// should be familiar with both of them - based on personal preference

// factory function
function createCircle(radius) {
  // simply return the object {}
  return {
    radius,
    draw: function() {
      console.log("drawing");
    }
  };
}

// make sure to define a constant in order to call the function and create a new circle
const testCircle = createCircle(3);
testCircle.draw(); // 'drawing'

// constructor function
// should be Pascal case as it resembles a class in other languages
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("drawn");
  };
}

// when we declare a function, internally it is represented like this:
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function() {
  console.log("drawn");
}
`
);

const circleObject = new Circle1(1); // same as how we are defining new 'const otherCircle' below

// when we use new operator to call a function 3 things happen:
// 1) creates an empty object
// 2) it will set 'this' to point to that new object
// 3) it will return that object from the function
// * without using 'new' then 'this' will point to the 'window' object
// * we are not using 'return this' as it happens automatically with 'new'
const otherCircle = new Circle(2);

// below and above are exactly same expressions...really??

Circle.call({}, 2); // method that is available in functions, first arg is where we point 'this' to, next are our other parameters in function
Circle.apply({}, [1, 2, 3]); // useful for passing arrays

// JS engine uses internal constructor function as below:
let x = {}; // let x = new Object();

function Circle2(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("drew");
  };
}

const neoCircle = new Circle2(10);
neoCircle.location = { x: 1 };

neoCircle["location"] = { x: 1 }; // bracket notation is useful for when we want to dynamically access a property name
// also useful for special characters or a space

const somethingUnknown = "unknown property";
neoCircle[somethingUnknown] = { x: 5 }; // puts this property in the object for the first time
console.log(
  "bracket notation: neoCircle[somethingUnknown].x = ",
  neoCircle[somethingUnknown].x
);

delete neoCircle["unknown property"]; // removes property with special characters

// another real world example for adding a property:
// user.token = 'asdfasdf';

// enumerate over properties in an object
for (let key in neoCircle) {
  // to get value of preperties we use bracket notation
  //   console.log(key, neoCircle[key]);
}

for (let key in neoCircle) {
  // only display key preperties, and not methods
  if (typeof neoCircle[key] !== "function") console.log(key);
}

const allKeys = Object.keys(neoCircle);
console.log("allKeys", allKeys);

if ("radius" in neoCircle) console.log(`'radius' key is in the object `);

function Circle3(radius) {
  this.radius = radius;

  // 'defaultLocation' is an implementation detail we don't want accessible from the outside
  // instead of defining it as a property we should define as a local variable
  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function(factor) {
    // ...
  };

  this.draw = function() {
    computeOptimumLocation(0.1);

    // this inner function can also access below:
    // defaultLocation
    // this.radius;

    console.log("drew");
  };
}

const circle3 = new Circle3(3);
console.log(circle3);

// Private properties and methods
function Circle4(radius) {
  this.radius = radius;

  // private property that we cannot access from the outside
  let defaultLocation = { x: 0, y: 0 };

  // not a good way because we don't want to run a method to return a value
  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log("drew");
  };

  // to display or change value of 'defaultLocation' somewhere else in our application,
  // we can use getters and setters
  // 1st arg: object that is referenced by 'this' - the new circle4 object
  // 2nd arg: name of our property
  // 3rd arg: key/value pairs like 'get' or 'set' and a function
  Object.defineProperty(this, "defaultLocation", {
    // read-only
    get: function() {
      return defaultLocation;
    },
    // able to modify
    set: function(value) {
      if (!value.x || !value.y) throw Error("invalid location");
      defaultLocation = value;
    }
  });
}

const circle4 = new Circle4(3);
console.log(circle4.defaultLocation);
