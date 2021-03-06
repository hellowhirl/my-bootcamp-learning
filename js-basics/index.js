// JS basics

// statement: a piece of code that expresses an action to be carreid out
// all statememts in JS should be terminated with a ; (semicolon)

let number = square(2);
console.log({ number });

let exampleArray = []; //Array Literal

let selectedColors = ["red", "blue"];
selectedColors[2] = 3;

// primitves (also called value types)

// let name = 'Ant'; // String literal
// let age = 30; // Number literal
let person = {
  name: "Ant",
  age: 30
};

let exampleObject = {}; // Object Literal

let isApproved = true; // Boolean literal
let firstName = undefined;
let selectedValue = null; // to explicityly clear the value of the variable

// Reference Types:
// Object
// Array
// Function

// function: a set of statements that perform a task or calculate a value

// performing a task
function greet(name, last) {
  console.log("hello " + name);
  console.log(`goodbye ${last}`); // Template literals for multi-line strings and string interpolation
}

greet("jo", "blow");

// calculates a value
function square(number) {
  return number * number;
}
