// we want every Shape to have a color
function Shape(color) {
  // with .call() we can write a method once here and then inherit it in another object,
  // without having to rewrite the method for the new object.
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicated from Shape prototype");
};

// refactored into function we can reuse
// parameter names are uppercase because we are expecting Constructor functions
// we call this 'extend' function Intermediate Function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  // calling the Super Constructor:
  // call the Shape function and set 'this' to point to the new instance of the Circle object
  Shape.call(this, color); // the 'this' here is the same 'this' as the circle object, 2nd is argument for the Shape function
  this.radius = radius;
}
// this is how we create our own prototypical inheritance
// similar to Circle extends Shape
// Circle.prototype = Object.create(Shape.prototype);
// best practice to reset constructor back to Circle (child)
// Circle.prototype.constructor = Circle;
// If you don't set Circle.prototype.constructor to Circle,
// it will take prototype.constructor of Shape (parent).

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  // sometimes we may want to call the implementation on the parent object as well
  // if we're not using 'this' in our duplicate function implementation, simply call it like a regular function:
  Shape.prototype.duplicate();
  // in the case when we are using 'this' then we need to use .call() to set the context for 'this' for the current object:
  Shape.prototype.duplicate.call(this);
  console.log("duplicated circle");
};

Circle.prototype.draw = function() {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);
// Method overriding:
// very important to put this after extending the Square - because we are redefining the prototype
Square.prototype.duplicate = function() {
  console.log("duplicated square");
};

const sqa = new Square(5);
const sha = new Shape(); // has only duplicate method
const cir = new Circle(1, "red"); // has both duplicate and draw methods
// upon further investigation of object we see __proto__: Shape, this just means that shapeBase is parent for that object

const shapes = [new Square(), new Circle()];

// Polymorphism in action
// when we Encapulate variables and funcitons into objects and use Inheritance,
// we can execute many forms of a method (Polymorphism) in a single line of code
for (let shape of shapes) shape.duplicate();

//
// Mixins

// creating a mixin function to make code more readable,
// multiple optional number of arguments with rest operator (...)
function mixin(TargetObject, ...sources) {
  Object.assign(TargetObject, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("walking");
  }
};

const canSwim = {
  swim: function() {
    console.log("swimming");
  }
};

function Person() {}
function Fish() {}

// Object.assign() copies the properties and methods from one object to another
// first argument is target object( an empty {} or our our choice object (modyify its prototype) like a Constructor function)
Object.assign(Person.prototype, canEat, canWalk);

mixin(Fish.prototype, canEat, canSwim);

const person = new Person();
const goldfish = new Fish();

console.log(person);
console.log(goldfish);
