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



