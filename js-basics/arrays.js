
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

const findCourseIndex = courses.findIndex(function(course){ // will return index
    return course.name === 'a'; // 0
})

console.log(course);
console.log(findCourseIndex);

// callback is used here because it is called back as part of finding an elememnt in the array


// Arrow functions:
// whenever we want to pass a function as a callback function or as an argument for a different method

// remove function keyword, separate parameters of function from body with =>
// with single parameter we can get rid of the paranthesis
// single line of code can be written in one line, remove curly braces and return statement
const arrowCourse = courses.find(course => course.name === 'a' )

// we read this expression as "course goes to course.name === a" - we are finding a course with name equal to 'a'

// with no parameters
const otherCourse = courses.find(() => { course.name === 'a' })