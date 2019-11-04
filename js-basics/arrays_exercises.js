function lazyCounter() {
    let counter = 0;

    function innerFunction() {
        counter++;
console.log(`******************
*** Exercise ${counter} ***
******************`);
    }
    return innerFunction;
} 

const lazy = lazyCounter(); // this part is key, to keep track of counter variable


// Exercise 1
lazy();


const numbers = arrayFromRange(-2, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    let newArray = [];
    for(let i = min; i <= max; i++)
        newArray.push(i);
    return newArray;
}



// Exercise 2
lazy();

const secondNumbers = [1, 2, 3, 4];

// console.log(secondNumbers.includes(1));
console.log(myIncludes(secondNumbers, 3));
console.log(myIncludes(secondNumbers, 6));

function myIncludes (array, searchElement) {
    // return array.indexOf(searchElement) !== -1;
    for(let n of array)
        if(n === searchElement) 
            return true;
    return false;
}



// Exercise 3
lazy();

const thirdNumbers = [1, 2, 3, 4, 3, 2, 1];

const output = except(thirdNumbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    let finalArray = [];
    for(let n of array) {
        if(!excluded.includes(n))
            finalArray.push(n);
    }
    return finalArray;
}



// Exercise 4
lazy();

const fourthNumbers = [1, 2, 3, 4];

const result = move(fourthNumbers, 1, 2);

console.log(result);

// tutorial solution:
function move(array, index, offset) {
    const newPosition = (index + offset);    
    if(newPosition < 0 || newPosition >= array.length) {
        console.error('Invalid offset');
        return;
    }
    
    const output = [...array];
    const element = output.splice(index, 1)[0]; // [0] is necessary here to extract value from the array
    output.splice(newPosition, 0, element);
    return output;
}

// my original solution:
function mySolution(array, index, offset) {
    const copy = array.slice();
    const removed = copy
        .splice(index, 1) // remove one number
        .join();
    const integer = Number(removed);
    const newPosition = (index + offset);

    if(newPosition >= 0 && newPosition <= copy.length) {
        copy.splice(newPosition, 0, integer);
        return copy;
    }
    else console.error('Invalid offset');
}



// Exercise 5
lazy();

const fifthNumbers = [1, 2, 3, 4, 1, 1];

// const count = countOccurences(fifthNumbers, 3);
// console.log(count);

// function countOccurences(array, searchElement) {
//     let counter = 0;
//     for(let n of array) {
//         if (n === searchElement) {            
//             counter++;
//         }
//     }
//     return counter;
// }


// my solution:
const test = 1;

let countedNumbers = fifthNumbers.reduce((accumulator, currentValue) => { 
    if(currentValue === test)
        accumulator++
    return accumulator;
}, 0);

// console.log(countedNumbers);


// tutorial solution:

function countOccurences(array, searchElement) {

    return array.reduce((accumulator, currentValue) => { // always remember to 'return' a value somewhere in a function
        const count = (currentValue === searchElement) ? 1 : 0; // ????? adds 1  to accumulator if true, adds 0 if false
        console.log(accumulator, currentValue, searchElement)
        return accumulator + count; // ????? how does count get appended to accumulator?
    }, 0)
}

console.log(countOccurences(fifthNumbers, 1));



// Exercise 6
lazy();

const sixthNumbers = [10, 32, 20, 53, 4];

const maxNumber = getMax(sixthNumbers);
console.log(maxNumber);


// my original solution:

function getMax(array) {
    if(array.length === 0) return undefined; // some developers prefer to put as one single line of code

    let currentMax = array[0];

    for(let i = 1; i < array.length; i++){
        console.log(array[i]);
        if(array[i] > currentMax)
            currentMax = array[i];
    }
    return currentMax;
}


// using reduce method solution:

function getMax(array) {
    if(array.length === 0) return undefined; // some developers prefer to put as one single line of code

    return array.reduce((a, b) => { // reudce method is used here to find single value that is the largest
        console.log(a, b); // renamed these 2 parameters for cleaner code, original was currentValue, accumulator
        return (a > b) ? a : b; // shifting order of these operand, easier to understand
    })
}



// Exercise 7
lazy();

// All movies in the year 2018
// Rating greater than 4
// Sort by rating in descending order
// Only pick title property
// Result: 'b' 'a'

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]


function find(movies) {
    let result = [];
    for(movie of movies){
        if(movie.year === 2018 && movie.rating > 4)
            result.push(movie.title);        
    }
    return result.reverse();
}


const finder = movies
    .filter(n => n.year === 2018 && n.rating > 4)
    .sort((a, b) => a.rating - b.rating) // or reverse order of a.rating and b.rating to get .reverse() effect
    .reverse()
    .map(a => a.title)
;

console.log(finder);


