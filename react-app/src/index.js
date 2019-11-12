// "use strict"; // shouldn't be necessary...
// able to export one or more
// anything that we can read in { } after import is a "named export"
import Teacher, { promote } from "./teacher"; // able to import default and named exports on same line of code
import React, { Component } from "react"; // 'react' is not a part of our project, it's a 3rd party library in node_modules

// JavaScript ES6 refresh

function sayHello() {
  for (let i = 0; i < 5; i++) console.log(i);
}

sayHello();

// use 'const' as default
// const test = 1; // this variable cannot be reassigned
// test = 5;

const person = {
  name: "Herb",
  last: "Feuger",
  walk() {
    console.log(this); // 'this' returns reference to current object
  },
  talk() {}
};

const targetName = "name";
person[targetName] = "Something";
person["last"] = "Joe";

// person.walk();

// functions are ojbects that have properiies and methods we can use
// value of 'this' depends on argument we pass to bind() method
const walk = person.walk.bind(person); // here we are getting a new "walk" function
// const walk = person.walk; // walk() should return undefined with React default settings for "use strict"

walk(); // should return undefined with React default settings for "use strict"

const square = function(number) {
  return number * number;
};

// Arrow functions

const squareArrow = number => number * number;
console.log(squareArrow(3));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

// const activeJobs = jobs.filter(function(job) {
//   return job.isActive;
// });
const activeJobs = jobs.filter(job => job.isActive); // "filter jobs (jobs.filter) where job (job) is active (job.isActive: true)"

console.log(activeJobs);

// arrow functions do not rebind 'this' (to window)
const human = {
  talk() {
    console.log("this", this);
  },
  chat() {
    setTimeout(() => {
      // this callback function is not a part of any objects - it's a standalone function (by default 'this' returns window object)
      console.log("this again", this);
    }, 1000);
  }
};

human.talk();
human.chat();

// Array.map() - used to render lists in React

const colors = ["red", "green", "blue"];

const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

// Object Descructuring

const address = {
  street: "",
  city: "",
  country: ""
};

// below is repetitive code: destructuring solves this problem
// const street = address.street;
// const city = address.city;
// const country = address.country;

// extracts properties from address object and storing it in a constant with same property name
const { street: st, city, country } = address; // {} : destructuring syntax - equivalent to above 3 lines of code

const home = {
  door: "",
  walls: "",
  fence: ""
};

// able to isolate properties as well
const { door: dr } = home; // we can use alias like "dr" and new const called "dr" is created and set to "door" property

// Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

// const total = first.concat(second); // old method - code is more complicated
const total = [...first, "a", ...second, "b"];

console.log(total);

const clone = [...total];
clone.unshift(0);
clone.push(7);
console.log(clone);

const firstObject = { name: "Yo" };
const secondObject = { last: "Lo" };

const combinedObject = { ...firstObject, ...secondObject, location: "world" }; // able to combine objects with spread operator
console.log(combinedObject);

const cloneObject = { ...firstObject }; // also able to clone into new objects
console.log({ cloneObject });

// Classes
// When we have an object with at least 1 method we need a blueprint to create objects of that type
// classes are technically objects in JavaScript (syntatic sugar over constructor functions)

// use 'new' operator to create new object from the class blueprint

// const pleb = new Person("Janis"); // initialized with () which references 'coonstructor' method and we can pass 'name' parameter

// console.log(pleb);
// pleb.walk();

// Inheritance (or Composition)

const teacher = new Teacher("Moe", "FinArt");
console.log(teacher); // inherits "name" property and "walk" method from Person class
teacher.teach();

// Modules - splitting code across multiple files (modularity)
// each file is callled a "Module" - modularize
// from ES6 modules are built-in natively in JS

// Named and Default Exports

// default export: main object that is exported from a module (usually when there is only a single object for export)

// Deafult -> import ... from ''
// Named -> iport { ... } from ''./''
