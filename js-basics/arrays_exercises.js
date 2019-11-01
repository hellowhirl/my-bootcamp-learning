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
