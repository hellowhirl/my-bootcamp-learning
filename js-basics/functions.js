
// 2 ways to define a function in JS: Function Declaration & Function Expression

// Function Declaration
function walk() {
    console.log('walk');
} // no semicolon, by convention

walk();


// Anonymous Function Expression - similar to setting a variable to an object
let run = function() {
    console.log('run');
}; // end with semicolon because it's a variable
let x = 1; // also terminates wiht a semicolon

run(); // call run() to reference the anonymous function - similar to how we call function in JS

let move = run; // both move and run are reference same anonymous function which is 1 ofject in memory
move(); // calls anonymous function using this other reference from 'move'


// Named Function Expression - similar to setting a variable to an object
let named = function named () {
    console.log('run');
}; 



// Hoisting: moves function declaration to the top of the file (done automatically by JS engine)
// it's how we call functions before they are defined (using function declaration syntax)

hoist();

function hoist() {
    console.log('hoisted to top by JS engine')
}


// notHoistable(); // will return error "Uncaught ReferenceError: Cannot access 'notHoistable' before initialization"

let notHoistable = function() {
    console.log('not hoistable')
}



// Arguments in functions

// NaN: result for non-valid arithmetic operation

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 3
console.log(sum()); // NaN

function sum(a, b) {
    return a + b;
}

console.log(sumMore(1, 2, 3, 4, 5)) // flexibility to pass as many arguments as we want 

function sumMore() { // allowing for varied number of parameters in a function
    let total = 0;
    console.log(arguments); // returns the 'arguments' object standard with each function
                            // will come with 'Symbol.iterator' so we can use 'for of' loop to iterate this object
    for(let value of arguments) // iterates over 'arguments' object
        total+= value;
    return total;
}


// the Rest operator: for passing varied number of arguments in modern JS
// there can be 0 or more parameters preceeding the rest parameter, but not any after 

function rest(...args) { // '...' rest operator: takes all the arguments passed to function and puts them in an array
    return args.reduce((a, b) => a + b);
}

console.log(rest(1, 2, 3, 4, 5, 6))


function calculateTotal(discount, ...prices) { // ...rest parameter must be last parameter in a function - as in "the rest"
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(calculateTotal(.2, 20, 30, 50));



// Default Parameters

function oldDefaultMethod(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

console.log(oldDefaultMethod(10000));

// once we give a parameter a default value, we should also give the other paraemters a default value
// or make sure that default value is last parameter in the list, otherwise JS engine will get confused

function interest(principal, rate = 3.5, years = 5) { // cleaner way to do in ES6
    return principal * rate / 100 * years;
}

console.log(interest(10000));
