
const numbers = [3, 4]; // unable to assign the values, but we can change use Array object methods

// Add to end
numbers.push(5, 6);

// Add to begining
numbers.unshift(1, 2);

// Add to middle
numbers.splice(3, 0, 'a', 'b')

console.log(numbers);



// Finding elements in an array
// Primitives

const example = [1, 2, 3, 1, 4]

console.log(example.indexOf('a'));
console.log(example.indexOf(1));
console.log(example.indexOf('1'));

console.log(example.lastIndexOf(1));

console.log(example.indexOf(1) !== -1); // works but it's ugly
console.log(example.includes(1)); // better, new method

console.log(example.indexOf(1, 3)) // the second argument changes position for start of search



// Finding elements in an array
// Objects

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const course = courses.find(function(course){ // this is a callback function (or predicate) 
    return course.name === 'a'; // only gets first element that matches this criteria
    // return course.name === 'xyz'; // will return undefined
})

// callback is used here because it is called back as part of finding an elememnt in the array

const findCourseIndex = courses.findIndex(function(course){ // will return index
    return course.name === 'a'; // 0
})

console.log(course);
console.log(findCourseIndex);



// Arrow functions:
// whenever we want to pass a function as a callback function or as an argument for a different method

// remove function keyword, separate parameters of function from body with =>
// with single parameter we can get rid of the paranthesis
// if single line of code (single value, etc.) can be written in one line, remove curly braces and 'return' statement
const arrowCourse = courses.find(course => course.name === 'a' )

// we read this expression as "course goes to course.name === a" - we are finding a course with name equal to 'a'

// with no parameters
const otherCourse = courses.find(() => { course.name === 'a' })



// Removing elements

const moreNumbers = [1, 2, 3, 4];

// Remove from end
const last = moreNumbers.pop();
console.log(moreNumbers); // 1, 2, 3
console.log(last); // 4

// Remove from begining
const start = moreNumbers.shift();
console.log(moreNumbers); // 2, 3, 4
console.log(start); // 1

// Remove from middle
const extraNumbers = [1, 2, 3, 4, 5];
const middle = extraNumbers.splice(2, 2); // again we use splice method, but without adding fial arguments
console.log(extraNumbers); // 1, 2, 5
console.log(middle); // 3, 4 - from index 2 removed 2 elements



// Emptying an array - 4 solutions

let emptyNumbers = [1, 2, 3, 4];
let another = emptyNumbers; // will still point to old object of 'emptyNumbers'
console.log(emptyNumbers);

// Solution 1
emptyNumbers = []; // good, but there is catch where there could still be reference to original array
console.log('another:', another);

// Solution 2
emptyNumbers.length = 0; // most recommended (usually trumps Solution 1, but sometimes both are OK)

// Solution 3
emptyNumbers.splice(0, emptyNumbers.length);

// Solution 4
while (emptyNumbers.length > 0)
    emptyNumbers.pop();

console.log(emptyNumbers);



// Combining and slicing arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // combine arrays
console.log(combined);


let slice = combined.slice(2, 4); // 2 arguments indicate start index and end index that we will extract out of array
console.log(slice); // [3, 4]

slice = combined.slice(2); // 1 argument excluding end idnex - we get all the elements in original array starting from this index
console.log(slice);

slice = combined.slice(); // no arguments - we get copy of original array
console.log('slice() get copy of original array', slice);


// if values are Primitive they are copied by Value
// with combining objects (References) they are copied by their reference

const third = [{ id: 1}]
const combineAgain = third.concat(second); // 'third' object is not copied, only its reference is copied to the combined array

third[0].id = 20; // go to the first array, get the first elemeent (which is the object) and change its id to 20
console.log(combineAgain);



// Spread operator

const betterCombination = [...first, ...second];
console.log('betterCombination', betterCombination);

const copy = [...betterCombination];
console.log(copy);



// Iterating an array (some different ways)

for(let number of numbers)
    console.log('for of', number)

numbers.forEach(function(number) {
    console.log('forEach', number);
})

numbers.forEach(number => console.log(number)); // forEach as Arrow function style

numbers.forEach((number, index) => console.log(number, index)); // we can add second parameter for index



// Joining arrays

// tooltips (parameter?) with a question mark means it's optional

const someNumbers = [1, 2, 3];
const joined = someNumbers.join(', ' );
console.log(joined);

const someMessage = "This is my first message";
const splitMessage = someMessage.split(' ');
console.log(splitMessage);

const hyphenMessage = splitMessage.join('-');
console.log(hyphenMessage);



// Sorting arrays

const mixedNumbers = [2, 3, 1];
mixedNumbers.sort(); // [1, 2, 3]
console.log(mixedNumbers)

mixedNumbers.reverse();
console.log(mixedNumbers) // [3, 2, 1]



// ASCII: American Standard Code for Information Interchange

// comparing strings
'a' < 'b' // true
'a' > 'b' // false

const classes = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javaScript'}
]

classes.sort(function(a, b) {
    const classA = a.name.toUpperCase(); // to overcome differences in capitalized and lowercase
    const classB = b.name.toUpperCase();

    if(classA > classB) return 1; // this will compare the starting character's decimal value accoording to ascii table
    if(classB > classA) return -1;
    return 0;
})

console.log(classes);



// Testing the elements of an array (new methods in JS)

const testArray = [1, 2, 3, -1];

const allPositive = testArray.every(function(value) { // every() - checks if every element in array matches criteria
    return value >= 0;
})
console.log(allPositive);

const atLeastOnePositive = testArray.some(function(value) { // some() - if at least one value matches criteria
    return value >= 0;    
})
console.log(atLeastOnePositive);



// Filtering an array (based on a search criteria)

const againNumbers = [1, -1, 2, 3];

// const filterArray = againNumbers.filter(function(value) {
//     return value >= 0;
// })

const filteredArray = againNumbers.filter(n => n >= 0) // made into arrow function, we can exclude 'return'

console.log('filteredArray', filteredArray); // returns a new array of values according to filter criteria



console.log(`************************
*** Mapping an array ***
************************`);
// Mapping an array
// map() - able to map each item an array to something else (string or object)

// string example

const newNumbers = [1, 2, 3, -1];

const newFiltered = newNumbers.filter(n => n >= 0)

const items = newFiltered.map(n => '<li>' + n + '</li>' );
const html = '<ul>' + items.join('') + '</ul>';
console.log(items);
console.log(html);

// object example

const objectItems = newFiltered.map(n => {
    const obj = {value: n};
    return obj;
});

console.log('objectItems', objectItems);

// chainable methods - when result from a constant is not used anywhere throughout your code (no need to declare 'const obj')
// in this case we can simply return object without declaring a constant
// should put each method call on a seperate line for cleaner code

const objectItemImproved = newFiltered.map(n => ({value: n}));

console.log('objectItemImproved', objectItemImproved);

const chainedMethods = newFiltered
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
    // .filter(n => n >= 0)
// .map(n => ({ value: n }))
console.log(chainedMethods);



// Reducing an array

const purchaseNumbers = [1, -1, 2, 3];

// old way:
let sum = 0;
for(let n of purchaseNumbers)
    sum += n;
console.log(sum);

// let sumOfReduced = purchaseNumbers.reduce((accumulatr, currentValue) => {
//     return accumulatr + currentValue;
// }, 100); // '0' is initial value for accumulator


// more elegant way:

// what's happening below - convert all elements in array into a single value:
// a = 1, c = 1, a = 1
// a = 1, c = -1, a = 0
// a = 2, c = 2, a = 2
// a = 2, c = 3, a = 5
let sumOfReduced = purchaseNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100); // '100' is initial value for accumulator - default is '0' if left unset

console.log(sumOfReduced);


let betterSumOfReduced = purchaseNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(betterSumOfReduced);