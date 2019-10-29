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

const address = {
    street: 246,
    city: 'Homsburg',
    zipCode: 73871
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);


// Exercise 2
lazy();


const factoryObj = createAddress(1, 'b', 4444);
console.log(factoryObj);

// Factory function
function createAddress(street, city, zipCode) {
    return { // here we return a new object, so should be within {}
        street, 
        city, 
        zipCode
    }
}

// Constructor function
const something = new Address(5, 'a', 2288);
console.log(something);

function Address(street, city, zipCode){
    this.street = street; // here we use the 'this' keyword to initialze a new object
    this.city = city; 
    this.zipCode = zipCode
}


// Exercise 3
lazy();


let address1 = new Address(1, 2, 3);
let address2 = new Address(1, 2, 3);

let address3 = address1;

console.log(areEqual(address1, address2)); // ture; these objects have the same properties
console.log(areSame(address1, address2)); // false; they are 2 different objects
console.log(areSame(address1, address3)); // true; they point to same object in memory

// Constructor function
function Address(street, city, zipCode){
    this.street = street; // here we use the 'this' keyword to initialze a new object
    this.city = city; 
    this.zipCode = zipCode
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
    
}

function areSame(address1, address2) {
    return address1 === address2;
}


// Exercise 4
lazy();


let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 123,
    comments: [
        { author: 'd', body: 'e' },
        { author: 'f', body: 'g' }
    ],
    isLive: false
}

console.log(post);



// Exercise 5
lazy();


let newPost = new BlogEntry('a', 'b', 'c');

console.log(newPost);

function BlogEntry(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false
}


// Exercise 6
lazy();


let prices = [
    { label: '$', tooltip: 'Inexpensive', minprice: 0, maxPrice: 10 }, // min and max is important for filtering
    { label: '$$', tooltip: 'Moderate', minprice: 11, maxPrice: 20 },
    { label: '$$$', tooltip: 'Pricey', minprice: 21, maxPrice: 40 }
]

console.log(prices);