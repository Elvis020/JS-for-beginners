// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('I am drawing');
//     }
// };

// circle.draw();

// camel notations: oneTwoThreeFour
// pascal notations: OneTwoThreeFour

// Patterns for creating objects

// Factory Functions
// function createC(radius) {
//     return {
//         radius,
//         draw() { console.log("Did we just draw??") }
//     };
// }
// const circ = createC(2);
// console.log(circ)

// Constructor Functions
function Circle2(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('We just drew');
    }
}

const constructorFunc = new Circle2(32);
console.log(constructorFunc)

// Dynamic nature if objects
// const circle = {
//     radius: 2
// }

// circle.color = 'yellow';
// circle.draw = function() { console.log("Drawn!!") }

// delete circle.color;
// delete circle.draw;


// console.log(circle)