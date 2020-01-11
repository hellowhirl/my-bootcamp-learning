// with an object we can combine indepenent variables and functions

const objectExample = {
  radius: 1,
  dimensions: {
    width: 1,
    height: 2
  },
  status: true,
  draw: function() {
    console.log("draw");
  }
};

objectExample.draw();

// factory functions
console.log("factory functions");

function createCircle() {
  const circle = {
    // we dont' need this constant defined because we are not going to reference it anywhere
    radius: 1,
    dimensions: {
      width: 1,
      height: 2
    },
    status: true,
    draw: function() {
      console.log("draw");
    }
  };
  return circle;
}

// clearned up version of above factory function

console.log(createBetterCircle(4));

function createBetterCircle(radius) {
  return {
    // better to write with return as every time we run this function we'll get a circle object
    radius: radius,
    draw: function() {
      console.log("draw");
    }
  };
}

// best example of factory function

function createBestCircle(radius) {
  return {
    radius, // in modern JavaScript, if key and value are the same we can make code shorter by just putting the key (no value)
    draw() {
      // shorter syntax can be similar to how we define a function outside of an object (just drop the function keyword)
      console.log("draw");
    }
  };
}

const circle1 = createBestCircle(1);

console.log({ circle1 });

// Constructor function: job is to construct/create an object
// Pascal Notation: OneTwoThree

console.log("constructor functions");

function Circle(radius) {
  this.radius = radius; // in JavaScript 'this' is a reference to the object that is executing this code
  this.draw = function() {
    console.log("draw");
  };
}

const newCircle = new Circle(1);

// 'new' operator,
// 1) creates an empty JS object
// 2) will set this to point to this new empty object
// 3) it will return this new object from this function

// Note: just pick a pattern (might be better to go with factory functions)

// But object cannot chnage a constant variable but they can be changed dynamically by adding or removing properties

const circle2 = {
  radius: 1
};

circle2.example = "text";
circle2.draw = function() {
  console.log("test");
};

// delete circle3.draw;
delete circle2.example;

console.log(circle2);

// circle2 = {}; // this will give an error

// 'constructor' refers to the function that was used to construct/create that object

console.log(newCircle.constructor); // returns Circle object

console.log(circle1.constructor); // returns built-in constructor function for creating that object

let xSample = {}; // same as let xSample = new Object(); - it's more convenient to use the object literal

new String(); // '' "" ``
new Boolean(); // true false
new Number(); // 1, 2, 3, ...

// below 2 functions create the same function object

function Triangle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// when we declare a function internally it's represented like this
const Triangle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`
);

const newTriangle = new Triangle(1);
const newTriangle1 = new Triangle1(2);

let a = 10;
let b = a; // a's value is copied into new variable

a = 20;

// these 2 variables are completely independent of each other
console.log({ a }); // 20
console.log({ b }); // 10

console.log(
  "when we use an object, that object is not stored in that variable - that object is stored somewhere in memory"
);

let x = { value: 30 }; // the address of that memory location is stored inside this variable
let y = x; // the address (or reference) is copied

console.log(x);
console.log(y);

let number = 10; // variable is independent of each other

function increase(number) {
  number++; // variable is independent of each other
}

increase(number);
console.log(number);

let sales = { value: 20 };

function bar(sales) {
  sales.value++;
}

bar(sales);
console.log(sales);

// Primitives are copied by their Value
// Objects (Reference Types) are copied by their Reference Types

// Reference Types: Objects, Functions, Array

const trapezoid = {
  color: "blue",
  draw() {
    console.log("draw");
  }
};

for (let key in trapezoid) console.log(key, trapezoid[key]);

for (let key of Object.keys(trapezoid)) console.log(key);

for (let entry of Object.entries(trapezoid)) {
  console.log(entry);
}

if ("color" in trapezoid) console.log("yes");

// The simplest way to enumerate the properties in an object is using the 'for in' loop

// An object is not iterable with a 'for of' loop
// But we can iterate using 'for of' loop using Object.keys() or Object.entries()

// To see if a given property or method exists in an object we use the 'in' operator

// Object.assign: takes all properties and methods in the source object and copies them into the new object {}
const another = Object.assign({}, trapezoid);

const another1 = Object.assign(
  {
    extra: "words"
  },
  trapezoid
);

console.log(another);
console.log(another1);

// Most elegant way to clone an object
const elegant = { ...trapezoid }; // it takes all the properties and method in the trapezoid object and puts them between {}
console.log({ elegant });

// JavaScript has a Garbage Collector - it finds variables & constants and deallocates the memory automatically

// Some built-in objects in JS
// Math object: when dealing with mathematical calculations just refer to Mozilla
// Math.random(), Math.min(), Math.max(), Math.round(), Math.floor()

const message = "Hi everyone out there";
const split = message.split(" "); // With dot notation JS automatically wraps this String primitive with a String object
console.log(split);

const otherMessage = new String("Hello");

console.log(message);
console.log(otherMessage);
console.log(message.includes("Hi"));

// Template literals ``
// concatenating is easier with placeholders ${}
// we can add any expression that produces a value between these curly braces

const tempLit = `${message}, this is message ${3 + 5} for today.`;
console.log(tempLit);

// Date objects

const now = new Date();

const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 22, 15, 13, 10, 22);

now.setFullYear(1980);

console.log(now);
console.log(date1);
console.log(date2);

const convert = now.toDateString();
console.log(convert);

const backend = now.toISOString();
console.log(backend);
