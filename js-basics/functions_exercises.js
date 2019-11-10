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


console.log(sum([1, 2, 3, 4, 5]));

function sum(...numbers) {
    if(numbers.length === 1 && Array.isArray(numbers[0]))
        numbers = numbers[0];

    return numbers.reduce((a, b) => a + b);
};



// Exercise 2
lazy();


const circle = {
    radius: 0,
    get area() {
        return this.radius * this.radius * Math.PI;
    }
}

circle.radius = 4;
console.log(circle.radius);
console.log(circle.area);



// Exercise 3
lazy();


try {
    const testNumbers = [1, 2, 3, 4, 1, 1];
    const count = countOccurences(null, 1);
    console.log(count);
}
catch(e) {
    console.log(e.name); // .name property returns an error name
    console.log(e.message); // .message property displays the error message text
}

function countOccurences(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error('not an array!');

    return array.reduce((accumulator, currentValue) => { // always remember to 'return' a value somewhere in a function
        const count = (currentValue === searchElement) ? 1 : 0; // ????? adds 1  to accumulator if true, adds 0 if false
        console.log(accumulator, currentValue, searchElement)
        return accumulator + count; // ????? how does count get appended to accumulator?
    }, 0)
}
