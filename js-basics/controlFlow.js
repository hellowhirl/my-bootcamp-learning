// Condtional statements:
// if...else
// switch...case

let hour = 13;

if (hour >= 6 && hour < 12) console.log("Good morning");
else if (hour >= 12 && hour < 18) console.log("Good noon");
else console.log("Good evening");

let role;
role = "guest";

// Switch & Case: a little bit outdated - but depends on preference

switch (role) {
  case "guest":
    console.log("guest user");
    break; // to jump out of switch block

  case "moderator":
    console.log("moderator user");
    break;

  default:
    console.log("unknown role");
}

if (role === "guest") console.log("guest user");
else if (role === "moderator") console.log("moderator user");
else console.log("unknown user");

// for loops: require 3 statements
// - initial expression (i), declare and initialize a variable. This is known as the 'loop variable'
// - a condition, will execute as long as it evaluates to true
// - increment expression, use the increment operator

for (let i = 0; i < 5; i++) console.log("hello 5 times", i);

// OR ALTERNATIVELY

for (let i = 1; i <= 5; i++) console.log("hello alternative", i);

for (let i = 1; i <= 5; i++) if (i % 2) console.log("odd numbers:", i);

// in certain problems though we may want to use a for loop in the reverse order

// direct translation of above into whie loop

// let i = 0;

// while (i <=5) {
//     if (i % 2) console.log('odd numbers bro:', i);
//     i++;
// }

// rewrite in do-while loop
// do-while loops are always executed at least once
// not so practical to use

let i = 9;
do {
  if (i % 2) console.log("odd numbers bros:", i); // will only get carried out once
  i++;
} while (i <= 5);

// avoid infinite loops, don't forget to include increment expressions, etc.

// 2 other loops in JavaScript: iterate over the properties of an object or elements in an array

// for-in loop - ideal iterating over properties of an object

const human = {
  name: "Mosh",
  age: 30
};

for (let key in human) // in every iteration this 'key' variable in the loop will hold the name of one of the properties in object
  console.log(`${key} is ${human[key]}`);

console.log("brackets:", human["name"]);

// for-in loop for array - not ideal

const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);

// for-of loop - ideal for iterating over elements/items in an array (since ES6)

for (let color of colors) console.log(color);

// break and continue - can change the way a loop behaves

let k = 0;
while (k <= 10) {
  if (k === 6) break; // a way to jump out of the loop
  if (k % 2 === 0) {
    k++;
    continue; // not recommended, just a legacy way to write things to watch out for
  }
  console.log(k);
  k++;
}

// Exercise 1
// function takes two numbers and returns the maximum of the two

let setNumbers = maximum(7, 6);

console.log(setNumbers);

function maximum(a, b) {
  // if(a > b) return a;
  // return b;
  return a > b ? a : b; // cleanest inplementation
}

console.log(`is landscape?: ${isLandScape(40, 30)}`);

// Exercise 2
// Landscape or portrait

function isLandScape(width, height) {
  // return width > height ? true : false;
  return width > height; // not amateurish, compared to above
}

// Exercise 3
// Fizzbuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => Fizzbuzz
// Not divisible by 3 or 5 => input
// Not a number => 'not a number'

const output = fizzbuzz(15);
console.log(output);

function fizzbuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input === 0) return input;
  if (input % 3 === 0 && input % 5 === 0) return `${input}: FizzBuzz`;
  if (input % 3 === 0) return `${input}: Fizz`;
  if (input % 5 === 0) return `${input}: Buzz`;
  return input;
}

// Exercise 4
// Speed limit = 70
// 5 -> 1 point; 12 points -> suspended
// Math.floor()

speedChecker(85);

function speedChecker(speed) {
  const speedLimit = 70; // avoid using 'magic numbers' in our code
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return; // this will stop the rest of the function from executing, eliminating the need for else block
  }

  const pointsToDriver = Math.floor((speed - speedLimit) / kmPerPoint);
  if (pointsToDriver >= 12) console.log("license suspended");
  else {
    console.log(`points: ${pointsToDriver}`);
  }
}

// Exercise 5
// Calculate whether ODD or EVEN for a range of numbers

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");

    const message = i % 2 === 0 ? "EVEN" : "ODD"; // a cleaner implementation and less noisy
    console.log(i, message);
  }
}

// Exercise 6
// Function that countrs truthy values

const array = [undefined, 0, 1, 2, 3, 9, 18];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// Exercise 7
// String properties

const book = {
  contents: "picture",
  writer: undefined,
  year: 2002,
  title: "poo"
};

showProperties(book);

function showProperties(obj) {
  for (let key in obj) {
    let checkType = typeof obj[key];
    if (checkType === "string") {
      console.log(checkType, obj[key]);
    }
  }
}

// Exercise 8
// Sum of Multiples of 3 and 5

console.log(sum(10));

function sum(limit) {
  let numbersList = [];
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      numbersList.push(i);
    }
  }
  console.log(numbersList);

  // for(let j = 0; j <= numbersList.length; j++) {
  //     sum += numbersList[j];
  //     console.log(sum);
  // }

  // const addNumbers = (a, b) => a + b
  // const sum = numbersList.reduce(addNumbers);

  return sum;
}

// Exercise 9
// Grades
// Let's use the 'single responsibility principle'

const marks = [130, 80, 50];

console.log(calculateGrade(marks));
// console.log(calculateAverage(marks));

function calculateGrade(averageMarks) {
  const average = calculateAverage(averageMarks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

// Exercise 10
// Stars

showStars(10);

function showStars(rows) {
  let starCount = "";
  for (let i = 1; i <= rows; i++) {
    starCount += "*";
    console.log(starCount);
  }
}

nestedStars(6);

function nestedStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let declareStars = "";
    for (i = 0; i < row; i++) {
      declareStars += "*";
    }
    console.log(declareStars);
  }
}

// Exercise 11
// Prime numbers

// showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) console.log(number);
  }
}

// Let's use the 'single responsibility principle'

aShowPrimes(20);

function aShowPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
