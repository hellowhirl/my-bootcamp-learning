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

neoCircle["location"] = { x: 1 }; // useful for when we want to dynamically access a property name
// also useful for special characters or a space
