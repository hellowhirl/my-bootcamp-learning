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

// when we use new operator to call a function 3 things happen:
// 1) creates an empty object
// 2) it will set 'this' to point to that new object
// 3) it will return that object from the function
// * without using 'new' then 'this' will point to the 'window' object
// * we are not using 'return this' as it happens automatically with 'new'
const otherCircle = new Circle(2);

// JS engine uses internal constructor function as below:
let x = {}; // let x = new Object();
