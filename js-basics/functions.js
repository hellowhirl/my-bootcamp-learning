// 2 ways to define a function in JS: Function Declaration & Function Expression

// Function Declaration
function walk() {
  console.log("walk");
} // no semicolon, by convention

walk();

// Anonymous Function Expression - similar to setting a variable to an object
let run = function() {
  console.log("run");
}; // end with semicolon because it's a variable
let x = 1; // also terminates wiht a semicolon

run(); // call run() to reference the anonymous function - similar to how we call function in JS

let move = run; // both move and run are reference same anonymous function which is 1 ofject in memory
move(); // calls anonymous function using this other reference from 'move'

// Named Function Expression - similar to setting a variable to an object
let named = function named() {
  console.log("run");
};

// Hoisting: moves function declaration to the top of the file (done automatically by JS engine)
// it's how we call functions before they are defined (using function declaration syntax)

hoist();

function hoist() {
  console.log("hoisted to top by JS engine");
}

// notHoistable(); // will return error "Uncaught ReferenceError: Cannot access 'notHoistable' before initialization"

let notHoistable = function() {
  console.log("not hoistable");
};

// Arguments in functions

// NaN: result for non-valid arithmetic operation

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 3
console.log(sum()); // NaN

function sum(a, b) {
  return a + b;
}

console.log(sumMore(1, 2, 3, 4, 5)); // flexibility to pass as many arguments as we want

function sumMore() {
  // allowing for varied number of parameters in a function
  let total = 0;
  console.log(arguments); // returns the 'arguments' object standard with each function
  // will come with 'Symbol.iterator' so we can use 'for of' loop to iterate this object
  for (let value of arguments) // iterates over 'arguments' object
    total += value;
  return total;
}

// the Rest operator: for passing varied number of arguments in modern JS
// there can be 0 or more parameters preceeding the rest parameter, but not any after

function rest(...args) {
  // '...' rest operator: takes all the arguments passed to function and puts them in an array
  return args.reduce((a, b) => a + b);
}

console.log(rest(1, 2, 3, 4, 5, 6));

function calculateTotal(discount, ...prices) {
  // ...rest parameter must be last parameter in a function - as in "the rest"
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(calculateTotal(0.2, 20, 30, 50));

// Default Parameters

function oldDefaultMethod(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(oldDefaultMethod(10000));

// once we give a parameter a default value, we should also give the other paraemters a default value
// or make sure that default value is last parameter in the list, otherwise JS engine will get confused

function interest(principal, rate = 3.5, years = 5) {
  // cleaner way to do in ES6
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

// Getters & Setters

// getters => access properties
// setters => change (mutate) properties

const person = {
  firstName: "John",
  lastName: "Doe",
  // 'get' allows us to access a function like a property, so 'person.fullname' instead of 'person.fullname()'
  get fullName() {
    // this is just 'function fullName() {}' with 'function' dropped
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "Billy Bub";
console.log(person); // in console it may show '...' because it is a getter

// Try & Catch - defensive programming

const personTry = {
  firstName: "John",
  lastName: "Doe",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value must be a string"); // if we don't catch the exception the error will simply be "Uncaught Error"

    const parts = value.split(" ");
    if (parts.length !== 2)
      throw new Error("Please enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  // a try block can have one or more statements - at least one can throw an exception
  personTry.fullName = "";
} catch (e) {
  // 'e' is the error object that we are throwing
  console.log(e); // or alert()
}
console.log(personTry); // in console it may show '...' because it is a getter

// Scope - Global vs Local

{
  const message = "hi";
} // variables's access is limited to the block that they are defined

const color = "blue"; // global variable - should avoid
function trial() {
  return color; // will return global variable already defined or be overwritten with same named variable within local scope
}

console.log(trial());

function test() {
  const weight = 75; // ok to use same name variables with different values in multiple functions
}

function another() {
  const weight = 80;
  for (let i = 0; i < 5; i++) {
    // 'i' is limited to this 'for block'
    console.log(i);
  }
}

another();

// let vs var
// should avoid defining variables with 'var' - it creates function-scope variables
// let, const: block-scoped variables

function start() {
  for (var i = 100; i < 105; i++) {
    console.log(i); // should only log until 104
  }
  console.log(i); // but with using 'var' we can mistakenly log 105 here, as var is bound by function scope
}

start();

var attached = "bad global variable"; // as global variable it attachees to 'window' object - not good
let notAttached = "good";

console.log(window.attached); // "bad"
console.log(window.notAttached); // undefined

function sayHi() {
  // attachees to 'window' object - not good
  console.log("say hi");
}

// The 'this' keyword
// references the object that is executing the current function
// method -> object
// function ->  global (window, global)

function table() {
  console.log(this);
}

const video = {
  propertyName: "A",
  message: "hello",
  tags: ["a", "b", "c"],
  total() {
    console.log(this);
  },
  show() {
    this.tags.forEach(function(tag) {
      // a function like this would normally refer to global window object
      console.log(this.propertyName, tag);
    }, this); // forEach 2nd parameter is 'thisArg' - and 'this' will reference this 'video' object
  }
};

table(); // will reference this as 'window' object
video.total(); // will pull all properties from within 'video' variable

video.show();

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("a"); // insteaed of the window object, we get this new Video object {}

// Changing 'this' - 3 approaches

function playVideo(a, b) {
  console.log(this);
  console.log(a, b);
}

// able to change value of 'this' for above function with below methods

playVideo.call({ name: "Geo" }, 1, 2); // first parameter is thisArg - so we can pass an object and 'this' references that object
playVideo.apply({ name: "George" }, [1, 2]); // only difference is that for multiple arguments they need to be passed as an array

// .bind() returns a new function (does not call original function) and sets 'this' to point to the passed object permanently
const fn = playVideo.bind({ name: "Georgia" }, 3, 4);
fn();

playVideo.bind({ name: "Giorgio Armani" }, 5, 6)(); // we can call the function that is returned from bind method using () after

// Approach 1
const approach1 = {
  // not preferred approach, but it's common
  measurement: 11,
  tags: ["a", "b", "c"],
  feature() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(self.measurement, tag);
    });
  }
};
// Approach 2
const approach2 = {
  // 2nd solution
  measurement: 22,
  tags: ["a", "b", "c"],
  feature() {
    this.tags.forEach(
      function(tag) {
        console.log(this.measurement, tag);
      }.bind(this)
    ); // call the bind() method and embeded it after function - pass 'this' because it's within a method
  }
};
// Approach 3
const approach3 = {
  // best modern practice
  measurement: 33,
  tags: ["a", "b", "c"],
  feature() {
    this.tags.forEach(tag => {
      // arroy functions inherit the 'this' value - inherit 'this' from the containing function
      console.log(this.measurement, tag); // 'this' is not rebound to a new object
    });
  }
};

approach1.feature();
approach2.feature();
approach3.feature();
