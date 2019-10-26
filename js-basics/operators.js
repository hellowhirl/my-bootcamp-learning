// Operators in JavaScript:
// Arithmetic
// Assigment
// Comparison
// Logical
// Bitwise

// Arithmetic: performing calculations
// Expression: something that produces a value (+, -, *, /, %,)
// exponential: ** (x ** y), x to power of 6

// Increment: ++


let x = 10;
let y = 3;

// console.log(x++);
console.log(x--);

console.log(--x);



// Assignment operators (can be used with all arithmetic operators)

console.log(y+=5)


// Comparison operators

// Relational operators
let j = 1;
console.log(j > 0);
console.log(j >= 1);
console.log(j < 0);
console.log(j <= 1);

// Strict Equality operators (ensures same type and value)
console.log(j === 1);
console.log(j !== 1);

// Loose Equality operators (if types don't match, it will convert value on right to be same type as lett, 
// then it will only check if the values are equal)
console.log('Loose Equality operators');
console.log(j == '1'); // true


// Ternary operator (also known as conditional operator)
let customer = 150;
let type = customer > 100 ? 'gold' : 'silver'; // customer > 100 ? evaluates to true?, then use first value, else use second

console.log(`type = ${type}`);

// Logical operators (AND &&,  OR ||, NOT !)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application refused', applicationRefused);



// Logical operators (also able to use with non-boolean values)
// The result of a logical expresssion in JS, is not necessarily a true or false; dppends on values of operands that we have

// In JS it will be interpreded as 'truthy' or 'falsy'

// falsy (false)
null
undefined
''
0
false
NaN

// Anything that is not falsy -> truthy

// Short-circuiting
// As soon as we find an operand that is truthy, that operand is returned, 
// and the evaluation stops (everything else after is ignored)

false || 1 || 2 // 1


// Real world example: user picks a color or not

let userColor = 'red (not default)';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(`current color is: ${currentColor}`);


userColor = null;
currentColor = userColor || defaultColor;

console.log(`current color is: ${currentColor}`);


// Bitwise OR |




let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);