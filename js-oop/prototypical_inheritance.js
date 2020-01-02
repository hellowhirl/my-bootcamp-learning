// we want every Shape to have a color
function Shape(color) {
  // with .call() we can write a method once here and then inherit it in another object,
  // without having to rewrite the method for the new object.
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicated");
};

function Circle(radius, color) {
  // calling the Super Constructor:
  // call the Shape function and set 'this' to point to the new instance of the Circle object
  Shape.call(this, color); // the 'this' here is the same 'this' as the circle object, 2nd is argument for the Shape function
  this.radius = radius;
}
// this is how we create our own prototypical inheritance
// similar to Circle extends Shape
Circle.prototype = Object.create(Shape.prototype);
// best practice to reset constructor back to Circle (child)
Circle.prototype.constructor = Circle;
// If you don't set Circle.prototype.constructor to Circle,
// it will take prototype.constructor of Shape (parent).

Circle.prototype.draw = function() {
  console.log("draw");
};

const sqa = new Shape(); // has only duplicate method
const cir = new Circle(1, "red"); // has both duplicate and draw methods
// upon further investigation of object we see __proto__: Shape, this just means that shapeBase is parent for that object
