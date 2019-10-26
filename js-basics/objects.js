
// with an object we can combine indepenent variables and functions

const objectExample = {
    radius: 1,
    dimensions: {
        width: 1,
        height: 2
    },
    status: true,
    draw: function(){
        console.log('draw');
    }
};

objectExample.draw();


// factory functions

function createCircle() {
    const circle = { // we dont' need this constant defined because we are not going to reference it anywhere
        radius: 1,
        dimensions: {
            width: 1,
            height: 2
        },
        status: true,
        draw: function(){
            console.log('draw');
        }
    };
    return circle;
}

// clearned up version of above factory function

console.log(createBetterCircle(4));

function createBetterCircle(radius) {
    return {
        radius: radius, // in modern JavaScript, if key and value are the same we can make code shorter by just putting the key
        draw: function(){ // shorter syntax can be similar to how we define a function outside of an object
            console.log('draw');
        }
    };
}


// best example of factory function

function createBestCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createBestCircle(1);
const circle2 = createBestCircle(2);

console.log(circle1);
console.log(circle2);



// Constructor function: job is to construct/crearte an object
// Pascal Notation: OneTwoThree 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const newCircle = new Circle(1);