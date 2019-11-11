"use strict";

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

walk(); // should returns= undefined with React default settings for "use strict"
